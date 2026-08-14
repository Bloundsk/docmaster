// ===================================
// DOCMASTER - SCRIPT DE VEILLE
// v3 : les recherches sont deduites des guides eux-memes
// ===================================
//
// Jusqu'a la v2, les mots-cles etaient ecrits en dur dans ce fichier, une
// liste par categorie. Ils dataient d'avant l'enrichissement des guides et
// ne couvraient plus qu'un tiers des sous-sections reelles : le guide
// Cybersecurite traitait du phishing et du chiffrement pendant que la veille
// ne cherchait que "vulnerabilite" et "piratage".
//
// Desormais le script LIT les fichiers des guides et construit une recherche
// par sous-section. Ajouter une section a un guide suffit a la faire entrer
// dans la veille : plus aucun decalage possible entre le contenu et ce qui
// est surveille.

const fs = require("fs");
const path = require("path");

const DOSSIER_GUIDES = path.join(__dirname, "..", "guides");
const SITE = "https://bloundsk.github.io/docmaster/";

const NB_JOURS_AVANT_FERMETURE = 14; // ferme automatiquement les anciennes veilles
const TAILLE_POOL = 10;              // articles lus par recherche, avant deduplication
const NB_ARTICLES_RETENUS = 1;       // articles conserves par sous-section

// Une Issue GitHub refuse un corps de plus de 65 536 caracteres. On decoupe
// bien en dessous : l en-tete, le pied et la charge utile s ajoutent ensuite,
// et un guide entier doit pouvoir tenir dans ce qui reste.
const TAILLE_MAX_ISSUE = 55000;
const PAUSE_ENTRE_REQUETES = 250;    // ms, pour ne pas marteler Google News

// Mots sans valeur de recherche. Sans ce filtre, "Le phishing" chercherait
// aussi "le", et "Qu'est-ce qu'un LLM ?" partirait sur "qu est ce".
const MOTS_VIDES = new Set([
    "le", "la", "les", "l", "un", "une", "des", "du", "de", "d", "et", "ou",
    "a", "au", "aux", "en", "dans", "sur", "pour", "par", "avec", "sans",
    "qu", "que", "qui", "quoi", "quelle", "quel", "est", "ce", "cette", "ces",
    "son", "ses", "sa", "leur", "leurs", "vs", "plus",
    // formes composees : le filtre compare des mots entiers, "est-ce" doit
    // donc figurer tel quel pour ne pas se retrouver dans la recherche
    "est-ce", "qu-est-ce"
]);

const attendre = ms => new Promise(r => setTimeout(r, ms));

// « 2026-08-12 » -> « 12 août ». L annee n est ajoutee que si elle differe de
// l annee en cours : sur une page d actualites, « 12 août 2026 » en plein
// mois d aout 2026 est du bruit.
function enFrancais(iso) {
    const d = new Date(iso + "T12:00:00Z");
    if (isNaN(d)) return "";
    const options = { day: "numeric", month: "long", timeZone: "UTC" };
    if (d.getUTCFullYear() !== new Date().getUTCFullYear()) options.year = "numeric";
    return d.toLocaleDateString("fr-FR", options);
}

// --- Lecture des guides -----------------------------------------------------

function nettoyer(texte) {
    return texte
        .replace(/<[^>]+>/g, " ")
        .replace(/&amp;/g, " ")
        .replace(/&[a-z]+;/g, " ")
        // emojis et symboles decoratifs
        .replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{2190}-\u{21FF}️]/gu, " ")
        .replace(/[?!.,:;()«»"'’\/&]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}

// Les titres viennent du HTML : "&amp;" doit redevenir "&" avant d'etre
// affiche dans le rapport, sinon on lit "Mots de passe &amp; authentification".
function decoder(texte) {
    return texte
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&#39;|&apos;/g, "'")
        .replace(/&nbsp;/g, " ");
}

function construireRequete(categorie, sousSection) {
    const mots = (nettoyer(categorie) + " " + nettoyer(sousSection))
        .split(" ")
        .filter(m => m.length > 1 && !MOTS_VIDES.has(m.toLowerCase()));
    // Set : evite de repeter un mot present dans la categorie ET la section
    return [...new Set(mots)].join(" ");
}

// Un sujet peut se decomposer en niveaux : debutant.html, intermediaire.html,
// avance.html. Les sections de cours vivent alors dans ces pages, et non plus
// dans index.html qui n est qu un sommaire. Ne lire que index.html reviendrait
// a ne plus rien surveiller pour les sujets deja decoupes en niveaux.
function lireGuides() {
    const guides = [];
    for (const dossier of fs.readdirSync(DOSSIER_GUIDES)) {
        const chemin = path.join(DOSSIER_GUIDES, dossier);
        if (!fs.statSync(chemin).isDirectory()) continue;

        for (const nom of fs.readdirSync(chemin)) {
            if (!nom.endsWith(".html")) continue;
            const html = fs.readFileSync(path.join(chemin, nom), "utf8");

            const titreBrut = (html.match(/<h1>([\s\S]*?)<\/h1>/) || [])[1];
            if (!titreBrut) continue;

            const sousSections = [...html.matchAll(/<summary><h3 id="([^"]+)">([\s\S]*?)<\/h3>/g)]
                .map(m => ({
                    ancre: m[1],
                    titre: decoder(m[2].replace(/<[^>]+>/g, "").trim()),
                    requete: construireRequete(titreBrut, m[2]),
                }))
                .filter(s => s.requete.length > 3);

            // Une page sans section de cours — un sommaire de parcours — n a
            // rien a surveiller : on ne la fait pas entrer dans la veille.
            if (sousSections.length) {
                guides.push({
                    dossier,
                    page: nom,
                    titre: decoder(titreBrut.trim()),
                    sousSections
                });
            }
        }
    }
    return guides;
}

// --- Recuperation des articles ---------------------------------------------

async function recupererArticles(requete) {
    const url = `https://news.google.com/rss/search?q=${encodeURIComponent(requete)}&hl=fr&gl=FR&ceid=FR:fr`;
    const reponse = await fetch(url);
    if (!reponse.ok) throw new Error(`HTTP ${reponse.status}`);
    const xml = await reponse.text();

    const articles = [];
    for (const item of xml.split("<item>").slice(1, TAILLE_POOL + 1)) {
        const titre = item.match(/<title>(.*?)<\/title>/s);
        const lien = item.match(/<link>(.*?)<\/link>/s);
        if (titre && lien) {
            // Google News nomme la publication dans <source>, et repete ce nom
            // a la fin du titre : « … - itdaily.fr ». Une fois la source
            // affichee a part, le suffixe fait doublon.
            const source = decoder(((item.match(/<source[^>]*>(.*?)<\/source>/s) || [])[1] || "").trim());
            let texte = decoder(titre[1].replace(/<!\[CDATA\[|\]\]>/g, "").trim());
            if (source && texte.endsWith(" - " + source)) {
                texte = texte.slice(0, -(source.length + 3)).trim();
            }

            const pub = (item.match(/<pubDate>(.*?)<\/pubDate>/s) || [])[1];
            const date = pub && !isNaN(Date.parse(pub)) ? new Date(pub).toISOString().slice(0, 10) : "";

            articles.push({
                // Les titres du flux RSS sont echappes en HTML : sans decodage,
                // le rapport affiche "Spend Analytics &amp; data" au lieu de "&".
                titre: texte,
                lien: lien[1].trim(),
                source,
                date,
            });
        }
    }
    return articles;
}

// Liens deja proposes recemment, pour ne rien reproposer.
//
// Le nombre d Issues lues compte : depuis que le rapport se decoupe, un
// passage en produit plusieurs au lieu d une. A vingt Issues, la memoire ne
// couvrait plus que deux jours et demi — les memes articles revenaient. Cent
// ramene la fenetre a une douzaine de jours, soit l ordre de grandeur du delai
// de fermeture automatique.
async function recupererLiensDejaProposes(repo, token) {
    const reponse = await fetch(
        `https://api.github.com/repos/${repo}/issues?labels=veille&state=all&per_page=100`,
        { headers: { Authorization: `Bearer ${token}`, Accept: "application/vnd.github+json" } }
    );
    if (!reponse.ok) return new Set();

    const liens = new Set();
    for (const issue of await reponse.json()) {
        for (const m of (issue.body || "").matchAll(/\((https?:\/\/[^)]+)\)/g)) liens.add(m[1]);
    }
    return liens;
}

// --- Construction du rapport ------------------------------------------------

async function construireRapport(guides, dejaProposes) {
    const date = new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
    const heure = new Date().toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });

    const entete =
        `# 📰 Veille DocMaster — ${date} (${heure})\n\n` +
        `Articles récents, classés par **sous-section de guide**. Les recherches sont ` +
        `déduites automatiquement du contenu des guides, et les articles déjà proposés ` +
        `récemment sont écartés.\n\n` +
        `> **Cochez une case pour publier l'article** dans les actualités du site.\n` +
        `> Décochez-la pour l'en retirer. La publication se fait dans la minute qui suit.\n` +
        `> Rien n'est publié tant que rien n'est coché.\n\n---\n\n`;

    let total = 0;
    let recherches = 0;

    // Un bloc par guide, avec ses metadonnees. Le rapport n est plus assemble
    // en une seule chaine : au-dela de treize sujets il depassait la limite de
    // 65 536 caracteres d une Issue GitHub, et la creation echouait en bloc.
    const blocs = [];

    for (const guide of guides) {
        let texte = `## ${guide.titre}\n\n`;
        let trouveDansGuide = 0;

        // Metadonnees des articles proposes, deposees en fin d Issue dans un
        // commentaire HTML : invisible a la lecture, mais lisible par le script
        // de publication. Sans elles, il faudrait redeviner a quelle section
        // rattacher un article a partir du seul texte de l Issue.
        const donnees = {};

        for (const s of guide.sousSections) {
            recherches++;
            let nouveaux = [];
            try {
                const articles = await recupererArticles(s.requete);
                nouveaux = articles.filter(a => !dejaProposes.has(a.lien)).slice(0, NB_ARTICLES_RETENUS);
            } catch (e) {
                texte += `### ${s.titre}\n_Erreur de récupération._\n\n`;
                continue;
            }
            await attendre(PAUSE_ENTRE_REQUETES);

            if (!nouveaux.length) continue;

            // Lien direct vers la section concernee du guide
            const lienSection = `${SITE}guides/${guide.dossier}/${guide.page}#${encodeURIComponent(s.ancre)}`;
            texte += `### [${s.titre}](${lienSection})\n`;
            texte += `<sub>recherche : \`${s.requete}\`</sub>\n\n`;
            for (const a of nouveaux) {
                const legende = [a.source, a.date ? enFrancais(a.date) : ""].filter(Boolean).join(" · ");
                texte += `- [ ] [${a.titre}](${a.lien})${legende ? ` — <sub>${legende}</sub>` : ""}\n`;
                donnees[a.lien] = {
                    titre: a.titre,
                    source: a.source,
                    date: a.date,
                    guide: guide.dossier,
                    page: guide.page,
                    ancre: s.ancre,
                    section: s.titre,
                    sujet: guide.titre,
                };
                total++;
                trouveDansGuide++;
            }
            texte += `\n`;
        }

        if (!trouveDansGuide) texte += `_Rien de nouveau sur ce guide._\n\n`;
        blocs.push({ texte, donnees });
    }

    return { rapports: assembler(entete, blocs, recherches, total), total };
}

// Regroupe les blocs en autant d Issues que necessaire, sans jamais couper un
// guide en deux. La marge sous la limite de GitHub couvre l en-tete, le pied
// et la charge utile ajoutes ensuite.
function assembler(entete, blocs, recherches, total) {
    const pied = (n, sur) =>
        `---\n\n<sub>${recherches} recherches effectuées, ${total} articles retenus` +
        (sur > 1 ? ` — partie ${n} sur ${sur}` : "") + `.</sub>\n`;

    const groupes = [];
    let courant = { textes: [], donnees: {}, taille: entete.length };

    for (const bloc of blocs) {
        const cout = bloc.texte.length + JSON.stringify(bloc.donnees).length;
        if (courant.textes.length && courant.taille + cout > TAILLE_MAX_ISSUE) {
            groupes.push(courant);
            courant = { textes: [], donnees: {}, taille: entete.length };
        }
        courant.textes.push(bloc.texte);
        Object.assign(courant.donnees, bloc.donnees);
        courant.taille += cout;
    }
    if (courant.textes.length) groupes.push(courant);

    return groupes.map((g, i) =>
        entete + g.textes.join("") + pied(i + 1, groupes.length) +
        `\n<!-- ACTUALITES\n${JSON.stringify(g.donnees)}\n-->\n`
    );
}

// --- Issues ----------------------------------------------------------------

async function creerIssue(repo, token, contenu, numero, sur) {
    const date = new Date().toLocaleDateString("fr-FR");
    const heure = new Date().toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });
    const suffixe = sur > 1 ? ` (${numero}/${sur})` : "";

    const reponse = await fetch(`https://api.github.com/repos/${repo}/issues`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/vnd.github+json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: `📰 Veille — ${date} à ${heure}${suffixe}`,
            body: contenu,
            labels: ["veille"],
        }),
    });

    if (!reponse.ok) throw new Error(`Erreur création Issue : ${await reponse.text()}`);
    console.log(`Issue créée${suffixe} — ${contenu.length} caractères.`);
}

async function fermerAnciennesIssues(repo, token) {
    const reponse = await fetch(
        `https://api.github.com/repos/${repo}/issues?labels=veille&state=open&per_page=100`,
        { headers: { Authorization: `Bearer ${token}`, Accept: "application/vnd.github+json" } }
    );
    if (!reponse.ok) return;

    const maintenant = Date.now();
    for (const issue of await reponse.json()) {
        const age = (maintenant - new Date(issue.created_at).getTime()) / 86400000;
        if (age > NB_JOURS_AVANT_FERMETURE) {
            await fetch(`https://api.github.com/repos/${repo}/issues/${issue.number}`, {
                method: "PATCH",
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: "application/vnd.github+json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ state: "closed" }),
            });
            console.log(`Issue #${issue.number} fermée (${Math.round(age)} jours).`);
        }
    }
}

// --- Programme principal ----------------------------------------------------

(async () => {
    try {
        const repo = process.env.GITHUB_REPOSITORY;
        const token = process.env.GITHUB_TOKEN;

        const guides = lireGuides();
        if (!guides.length) throw new Error("Aucun guide lisible dans " + DOSSIER_GUIDES);

        const nbSections = guides.reduce((n, g) => n + g.sousSections.length, 0);
        console.log(`${guides.length} guides, ${nbSections} sous-sections surveillées.`);

        const dejaProposes = await recupererLiensDejaProposes(repo, token);
        const { rapports, total } = await construireRapport(guides, dejaProposes);

        if (total > 0) {
            for (let i = 0; i < rapports.length; i++) {
                await creerIssue(repo, token, rapports[i], i + 1, rapports.length);
            }
        } else {
            console.log("Aucun article nouveau — pas d'Issue créée.");
        }

        await fermerAnciennesIssues(repo, token);
    } catch (erreur) {
        console.error("Erreur :", erreur);
        process.exit(1);
    }
})();
