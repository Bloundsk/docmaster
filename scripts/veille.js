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
const NB_ARTICLES_RETENUS = 2;       // articles conserves par sous-section
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

function construireRequete(categorie, sousSection) {
    const mots = (nettoyer(categorie) + " " + nettoyer(sousSection))
        .split(" ")
        .filter(m => m.length > 1 && !MOTS_VIDES.has(m.toLowerCase()));
    // Set : evite de repeter un mot present dans la categorie ET la section
    return [...new Set(mots)].join(" ");
}

function lireGuides() {
    const guides = [];
    for (const dossier of fs.readdirSync(DOSSIER_GUIDES)) {
        const fichier = path.join(DOSSIER_GUIDES, dossier, "index.html");
        if (!fs.existsSync(fichier)) continue;

        const html = fs.readFileSync(fichier, "utf8");
        const titreBrut = (html.match(/<h1>([\s\S]*?)<\/h1>/) || [])[1];
        if (!titreBrut) continue;

        const sousSections = [...html.matchAll(/<summary><h3 id="([^"]+)">([\s\S]*?)<\/h3>/g)]
            .map(m => ({
                ancre: m[1],
                titre: m[2].replace(/<[^>]+>/g, "").trim(),
                requete: construireRequete(titreBrut, m[2]),
            }))
            .filter(s => s.requete.length > 3);

        if (sousSections.length) {
            guides.push({ dossier, titre: titreBrut.trim(), sousSections });
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
            articles.push({
                titre: titre[1].replace(/<!\[CDATA\[|\]\]>/g, "").trim(),
                lien: lien[1].trim(),
            });
        }
    }
    return articles;
}

// Liens deja proposes dans les 20 dernieres Issues, pour ne rien reproposer
async function recupererLiensDejaProposes(repo, token) {
    const reponse = await fetch(
        `https://api.github.com/repos/${repo}/issues?labels=veille&state=all&per_page=20`,
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

    let rapport = `# 📰 Veille DocMaster — ${date} (${heure})\n\n`;
    rapport += `Articles récents, classés par **sous-section de guide**. Les recherches sont `;
    rapport += `déduites automatiquement du contenu des guides, et les articles déjà proposés `;
    rapport += `récemment sont écartés.\n\n---\n\n`;

    let total = 0;
    let recherches = 0;

    for (const guide of guides) {
        rapport += `## ${guide.titre}\n\n`;
        let trouveDansGuide = 0;

        for (const s of guide.sousSections) {
            recherches++;
            let nouveaux = [];
            try {
                const articles = await recupererArticles(s.requete);
                nouveaux = articles.filter(a => !dejaProposes.has(a.lien)).slice(0, NB_ARTICLES_RETENUS);
            } catch (e) {
                rapport += `### ${s.titre}\n_Erreur de récupération._\n\n`;
                continue;
            }
            await attendre(PAUSE_ENTRE_REQUETES);

            if (!nouveaux.length) continue;

            // Lien direct vers la section concernee du guide
            const lienSection = `${SITE}guides/${guide.dossier}/index.html#${encodeURIComponent(s.ancre)}`;
            rapport += `### [${s.titre}](${lienSection})\n`;
            rapport += `<sub>recherche : \`${s.requete}\`</sub>\n\n`;
            for (const a of nouveaux) {
                rapport += `- [${a.titre}](${a.lien})\n`;
                total++;
                trouveDansGuide++;
            }
            rapport += `\n`;
        }

        if (!trouveDansGuide) rapport += `_Rien de nouveau sur ce guide._\n\n`;
    }

    rapport += `---\n\n`;
    rapport += `<sub>${recherches} recherches effectuées, ${total} articles retenus.</sub>\n`;

    return { rapport, total };
}

// --- Issues ----------------------------------------------------------------

async function creerIssue(repo, token, contenu) {
    const date = new Date().toLocaleDateString("fr-FR");
    const heure = new Date().toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });

    const reponse = await fetch(`https://api.github.com/repos/${repo}/issues`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/vnd.github+json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: `📰 Veille — ${date} à ${heure}`,
            body: contenu,
            labels: ["veille"],
        }),
    });

    if (!reponse.ok) throw new Error(`Erreur création Issue : ${await reponse.text()}`);
    console.log("Issue créée.");
}

async function fermerAnciennesIssues(repo, token) {
    const reponse = await fetch(
        `https://api.github.com/repos/${repo}/issues?labels=veille&state=open&per_page=50`,
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
        const { rapport, total } = await construireRapport(guides, dejaProposes);

        if (total > 0) {
            await creerIssue(repo, token, rapport);
        } else {
            console.log("Aucun article nouveau — pas d'Issue créée.");
        }

        await fermerAnciennesIssues(repo, token);
    } catch (erreur) {
        console.error("Erreur :", erreur);
        process.exit(1);
    }
})();
