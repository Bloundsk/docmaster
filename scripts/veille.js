// ===================================
// CLICKED - SCRIPT DE VEILLE
// v4 : une veille par langue, dans les medias reconnus du pays
// ===================================
//
// Jusqu'a la v2, les mots-cles etaient ecrits en dur dans ce fichier, une
// liste par categorie. Ils dataient d'avant l'enrichissement des guides et
// ne couvraient plus qu'un tiers des sous-sections reelles : le guide
// Cybersecurite traitait du phishing et du chiffrement pendant que la veille
// ne cherchait que "vulnerabilite" et "piratage".
//
// Depuis la v3, le script LIT les fichiers des guides et construit une
// recherche par sous-section. Ajouter une section a un guide suffit a la faire
// entrer dans la veille : plus aucun decalage possible entre le contenu et ce
// qui est surveille.
//
// La v4 (13 septembre 2026, demande de Ludo) fait la meme chose pour CHAQUE
// langue du site. Les guides anglais sont lus en anglais et cherches dans la
// presse britannique, les guides hongrois en hongrois dans la presse
// hongroise. Et la recherche ne porte plus sur tout Google News, mais sur les
// medias nommes dans scripts/actualites-medias.js.

const fs = require("fs");
const os = require("os");
const path = require("path");

const RACINE = path.join(__dirname, "..");
const SITE = "https://bloundsk.github.io/docmaster/";

const NB_JOURS_AVANT_FERMETURE = 14; // ferme automatiquement les anciennes veilles
const NB_ARTICLES_RETENUS = 1;       // articles conserves par sous-section

/* Tout le flux est lu, et non plus les dix premiers articles. La recherche
   est deja restreinte aux medias de la liste, et la regle de pertinence en
   refuse la plus grande part : a dix, une section n aurait presque jamais
   rien. */
const TAILLE_POOL = 100;

// Une Issue GitHub refuse un corps de plus de 65 536 caracteres. On decoupe
// bien en dessous : l en-tete, le pied et la charge utile s ajoutent ensuite,
// et un guide entier doit pouvoir tenir dans ce qui reste.
const TAILLE_MAX_ISSUE = 55000;
const PAUSE_ENTRE_REQUETES = 250;    // ms, pour ne pas marteler Google News

/* Huit sites par recherche, et UNE recherche par section.

   Pourquoi pas tous les medias d un coup : mesure du 13 septembre 2026, une
   recherche melangeant Le Monde, Le Figaro, BFMTV et quatre sites specialises
   (Numerama, 01net, LeMagIT, ZDNET) ne rendait QUE des grands titres. Les
   quatre specialises, interroges seuls sur le meme mot, donnaient cent
   articles. Les gros sites occupent toute la place : il faut les separer.

   Pourquoi pas deux recherches par section, une de chaque sorte : c etait la
   premiere version, et le meme jour Google News a cesse de repondre (HTTP
   503) apres un peu moins de mille requetes en trois quarts d heure. La
   veille en faisait 171 par passage depuis des semaines sans incident.

   D ou l alternance : a chaque passage, une section sur deux interroge ses
   medias specialises, l autre un groupe de generalistes, et c est l inverse
   au passage suivant. Les groupes tournent aussi. Chaque section voit ainsi
   tous ses medias en quelques jours, pour 171 requetes par passage — et une
   seule langue par passage (voir .github/workflows/veille.yml). */
const TAILLE_GROUPE = 8;

/* Quand Google refuse cinq fois de suite, il ne repondra pas davantage a la
   sixieme : le passage s arrete, garde ce qu il a trouve, et le dit. Sans cet
   arret, le blocage du 13 septembre a change cinq minutes de veille en trois
   quarts d heure de refus. */
const MAX_ECHECS_DE_SUITE = 5;

const DRAPEAUX = { fr: "🇫🇷", en: "🇬🇧", hu: "🇭🇺" };

// Mots sans valeur de recherche. Sans ce filtre, "Le phishing" chercherait
// aussi "le", et "Qu'est-ce qu'un LLM ?" partirait sur "qu est ce".
// Les trois langues dans une seule liste : aucun de ces mots n est un mot
// utile dans une autre langue du site.
const MOTS_VIDES = new Set([
    "le", "la", "les", "l", "un", "une", "des", "du", "de", "d", "et", "ou",
    "a", "au", "aux", "en", "dans", "sur", "pour", "par", "avec", "sans",
    "qu", "que", "qui", "quoi", "quelle", "quel", "est", "ce", "cette", "ces",
    "son", "ses", "sa", "leur", "leurs", "vs", "plus",
    // Possessifs du tutoiement. Ils sont entres dans les titres de section le
    // 21 aout, quand le site est passe au tutoiement : « Ta surface d attaque »,
    // « Tes donnees personnelles ». La liste ne connaissait que « son », « sa »,
    // « ses » — deux recherches partaient donc avec un mot vide de plus.
    "ta", "ton", "tes", "toi", "tu", "votre", "vos", "vous",
    // formes composees : le filtre compare des mots entiers, "est-ce" doit
    // donc figurer tel quel pour ne pas se retrouver dans la recherche
    "est-ce", "qu-est-ce",
    // anglais
    "the", "an", "and", "or", "of", "to", "in", "on", "for", "with", "your", "you",
    "what", "is", "how", "why", "when", "rather", "than", "into", "from", "that",
    "this", "its", "are", "not", "who", "which", "where", "before", "after", "really",
    // hongrois
    "az", "egy", "és", "vagy", "avagy", "hogy", "mi", "mit", "mint", "is", "nem",
    "amely", "amelyek", "mielőtt", "helyett", "nélkül", "úgy", "hogyan", "kell",
    "ezt", "azt", "saját", "rád", "te", "magad", "mikor", "milyen", "amit",
]);

const attendre = ms => new Promise(r => setTimeout(r, ms));

/* Les regles d admission vivent dans scripts/actualites-regles.js, partagees
   avec le script de publication. Elles etaient auparavant recopiees dans les
   deux fichiers, chacun portant un commentaire demandant a l autre de rester
   synchrone : une regle qui tient par un commentaire ne tient pas. */
const { AGE_MAX_JOURS, admissible, cleDeTitre, mediaReconnu } = require("./actualites-regles.js");
const { LANGUES } = require("./actualites-medias.js");

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

/* Le titre d une page de cours porte son niveau : « Cybersécurité — Avancé ».
   Ce mot n a rien a faire dans une recherche de presse, et il ne s y contentait
   pas d etre inutile : Google News lit « Avancé » comme « en avance »,
   « avancées », « contacts avancés ». Le rapport du 21 aout proposait ainsi des
   transferts de football, un resume d episode de serie et une soluce de
   Fallout 4 — sous les guides Cybersecurite et IA.

   113 des 169 recherches portaient ce mot. Tant qu un humain cochait, ce
   n etait que du bruit qu il ne cochait pas. Depuis que la publication est
   automatique, un article hors sujet ASSEZ RECENT paraitrait sur le site.

   On ne coupe que si le dernier segment est exactement un nom de niveau : un
   titre qui contiendrait un tiret cadratin pour une autre raison est intact.
   Les noms anglais et hongrois s y ajoutent depuis la v4. */
const NIVEAUX = ["Débutant", "Intermédiaire", "Avancé",
                 "Beginner", "Intermediate", "Advanced",
                 "Kezdő", "Középhaladó", "Haladó"];

function sansLeNiveau(titre) {
    const bout = titre.lastIndexOf("—");
    if (bout === -1) return titre;
    const dernier = titre.slice(bout + 1).trim();
    return NIVEAUX.includes(dernier) ? titre.slice(0, bout).trim() : titre;
}

function construireRequete(categorie, sousSection) {
    categorie = sansLeNiveau(decoder(categorie));
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
//
// Chaque langue lit SES guides : les intitules anglais pour chercher dans la
// presse britannique, et les ancres anglaises, qui ne sont pas les francaises.
function lireGuides(langue) {
    const dossierGuides = path.join(RACINE, LANGUES[langue].dossier, "guides");
    const guides = [];
    for (const dossier of fs.readdirSync(dossierGuides)) {
        const chemin = path.join(dossierGuides, dossier);
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

function grouper(liste) {
    const groupes = [];
    for (let i = 0; i < liste.length; i += TAILLE_GROUPE) groupes.push(liste.slice(i, i + TAILLE_GROUPE));
    return groupes;
}

async function recupererArticles(requete, langue, domaines) {
    // « when: » borne la recherche a l age que le site accepte : inutile de
    // lire des articles que la regle d age refuserait.
    const q = `${requete} (${domaines.map((d) => "site:" + d).join(" OR ")}) when:${AGE_MAX_JOURS}d`;
    const url = `https://news.google.com/rss/search?q=${encodeURIComponent(q)}&${LANGUES[langue].google}`;

    // Un refus passager de Google ne doit pas vider une section. Un refus qui
    // dure, lui, est traite plus haut (MAX_ECHECS_DE_SUITE).
    let reponse;
    for (let essai = 1; ; essai++) {
        reponse = await fetch(url);
        if (reponse.ok || essai === 3 || ![429, 500, 502, 503].includes(reponse.status)) break;
        await attendre(essai * 5000);
    }
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
            const balise = item.match(/<source\s+url="([^"]*)"[^>]*>(.*?)<\/source>/s) || [];
            const source = decoder((balise[2] || "").trim());
            // Le site qui publie : c est lui, et non le nom affiche, que la
            // liste des medias reconnait.
            let site = "";
            try { site = new URL(balise[1]).hostname.toLowerCase().replace(/^www\./, ""); } catch (e) { /* sans source */ }

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
                site,
                date,
                langue,
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
// ramenaient la fenetre a une douzaine de jours. Depuis la v4, un passage
// produit des rapports pour trois langues : on lit trois pages, soit trois
// cents Issues.
async function recupererLiensDejaProposes(repo, token) {
    const liens = new Set();
    const titres = new Set();
    if (!repo || !token) return { liens, titres };

    for (let page = 1; page <= 3; page++) {
        const reponse = await fetch(
            `https://api.github.com/repos/${repo}/issues?labels=veille&state=all&per_page=100&page=${page}`,
            { headers: { Authorization: `Bearer ${token}`, Accept: "application/vnd.github+json" } }
        );
        if (!reponse.ok) break;
        const issues = await reponse.json();

        /* Les liens ET les titres. Google News donne une adresse differente au meme
           article selon la recherche : par lien seul, « L'ONU demande des limites
           urgentes a l'IA » a ete propose, et publie, deux fois (8 septembre 2026).
           Le titre est compare par sa cle, qui ignore ponctuation, accents et casse. */
        for (const issue of issues) {
            const corps = issue.body || "";
            for (const m of corps.matchAll(/\((https?:\/\/[^)]+)\)/g)) liens.add(m[1]);
            for (const m of corps.matchAll(/^\s*-\s*\[[ xX]\]\s*\[(.*?)\]\(https?:/gm)) titres.add(cleDeTitre(m[1]));
        }
        if (issues.length < 100) break;
    }
    return { liens, titres };
}

// --- Construction du rapport ------------------------------------------------

async function construireRapport(langue, guides, dejaProposes, vus) {
    const config = LANGUES[langue];
    const date = new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
    const heure = new Date().toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });
    const pageActualites = `${SITE}${config.dossier}actualites.html`;

    const entete =
        `# 📰 Veille Clicked ${DRAPEAUX[langue] || ""} ${config.pays} — ${date} (${heure})\n\n` +
        `Articles récents parus dans les **médias reconnus (${config.pays})**, classés par ` +
        `**sous-section des guides en langue « ${langue} »**. Les recherches sont déduites ` +
        `automatiquement du contenu de ces guides ; la liste des médias est dans ` +
        `\`scripts/actualites-medias.js\`.\n\n` +
        `> **Ces articles sont DÉJÀ EN LIGNE**, sur [la page Actualités](${pageActualites}). Ils ` +
        `sont publiés automatiquement, sans rien à faire.\n` +
        `> **Décoche une case pour retirer l'article du site** — il disparaît dans la ` +
        `minute qui suit.\n` +
        `> Recocher le remet en ligne.\n\n---\n\n`;

    let total = 0;
    let recherches = 0;

    /* Ce que le filtre a refuse, pour ce passage. Depuis que la publication est
       automatique, cette liste est le seul endroit ou l on peut voir ce qui a
       ete ecarte et verifier que la regle ne coupe pas trop large.

       Un Set, et non un tableau : un article promotionnel remonte souvent sur
       plusieurs des 169 recherches, et la liste repetait alors la meme ligne
       des dizaines de fois. */
    const ecartes = new Set();

    // Un bloc par guide, avec ses metadonnees. Le rapport n est plus assemble
    // en une seule chaine : au-dela de treize sujets il depassait la limite de
    // 65 536 caracteres d une Issue GitHub, et la creation echouait en bloc.
    const blocs = [];

    // Le groupe de generalistes change a chaque passage (deux par jour).
    const tour = Math.floor(Date.now() / 43200000);
    const generalistes = grouper(config.generalistes);
    let rang = 0;
    let echecsDeSuite = 0;
    let interruption = null;

    for (const guide of guides) {
        if (interruption) break;
        let texte = `## ${guide.titre}\n\n`;
        let trouveDansGuide = 0;
        const specialistes = grouper(config.specialises[guide.dossier] || []);

        // Metadonnees des articles proposes, deposees en fin d Issue dans un
        // commentaire HTML : invisible a la lecture, mais lisible par le script
        // de publication. Sans elles, il faudrait redeviner a quelle section
        // rattacher un article a partir du seul texte de l Issue.
        const donnees = {};

        for (const s of guide.sousSections) {
            if (interruption) break;
            // Specialistes ou generalistes, en alternance (voir TAILLE_GROUPE).
            const cran = tour + rang++;
            const domaines = specialistes.length && cran % 2 === 0
                ? specialistes[Math.floor(cran / 2) % specialistes.length]
                : generalistes[Math.floor(cran / 2) % generalistes.length];

            recherches++;
            let articles;
            try {
                articles = await recupererArticles(s.requete, langue, domaines);
                echecsDeSuite = 0;
            } catch (e) {
                texte += `### ${s.titre}\n_Erreur de récupération (${e.message})._\n\n`;
                if (++echecsDeSuite >= MAX_ECHECS_DE_SUITE) interruption = e.message;
                continue;
            } finally {
                await attendre(PAUSE_ENTRE_REQUETES);
            }

            const nouveaux = [];
            for (const a of articles) {
                const cle = cleDeTitre(a.titre);
                if (dejaProposes.liens.has(a.lien) || vus.liens.has(a.lien)) continue;
                if (dejaProposes.titres.has(cle) || vus.titres.has(cle)) continue;
                // s.titre, l intitule de la section, est passe a part : la
                // regle de pertinence exige qu au moins un mot commun en
                // vienne, et la requete seule ne permet plus de distinguer
                // ce qui vient de la section de ce qui vient du parcours.
                const verdict = admissible(a, s.requete, s.titre);
                if (!verdict.ok) {
                    // Ce qu un script ecarte, il doit le dire. Depuis que la
                    // publication est automatique, ces lignes sont le seul
                    // endroit ou l on voit ce que le filtre a refuse.
                    ecartes.add(`${verdict.raison} · ${a.source || "?"} · ${a.titre}`);
                    continue;
                }
                nouveaux.push(a);
                /* Les liens deja retenus DANS CE PASSAGE, toutes langues
                   confondues. Un article correspondant a plusieurs recherches
                   occupait sinon plusieurs cases du meme rapport, alors que le
                   site n en affiche qu un, la publication etant indexee par
                   lien. */
                vus.liens.add(a.lien);
                vus.titres.add(cle);
                if (nouveaux.length >= NB_ARTICLES_RETENUS) break;
            }

            if (!nouveaux.length) continue;

            // Lien direct vers la section concernee du guide, dans sa langue
            const lienSection = `${SITE}${config.dossier}guides/${guide.dossier}/${guide.page}#${encodeURIComponent(s.ancre)}`;
            texte += `### [${s.titre}](${lienSection})\n`;
            texte += `<sub>recherche : \`${s.requete}\`</sub>\n\n`;
            for (const a of nouveaux) {
                const media = mediaReconnu(a);
                const nom = (media && media.nom) || a.source;
                const legende = [nom, a.date ? enFrancais(a.date) : ""].filter(Boolean).join(" · ");
                /* Case COCHEE d office : l article est publie sans intervention.
                   C est le sens du changement demande le 21 aout 2026 — la
                   veille ne propose plus, elle publie, et l auteur retire ce
                   qu il ne veut pas. La mecanique de retrait existait deja :
                   publier-actualites.js retire du site tout article dont la
                   case est vide, il n y avait donc rien a inventer pour le
                   veto, seulement une valeur par defaut a inverser. */
                texte += `- [x] [${a.titre}](${a.lien})${legende ? ` — <sub>${legende}</sub>` : ""}\n`;
                donnees[a.lien] = {
                    titre: a.titre,
                    // Le nom tenu dans la liste des medias, plutot que celui du
                    // flux : « | hvg.hu » ou « Metro.co.uk » n ont rien a faire
                    // sur la page.
                    source: nom,
                    site: a.site,
                    date: a.date,
                    langue,
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

    /* Le filtre rend des comptes. C est un bloc comme un autre, donc il suit
       le decoupage en plusieurs Issues sans traitement particulier.

       Il est replie : la liste est longue et sans interet la plupart du temps.
       Elle sert le jour ou un article attendu ne parait pas — sans elle, il
       aurait disparu sans laisser de trace, et le filtre passerait pour une
       panne. */
    // L interruption se dit dans le rapport, pas seulement dans le journal :
    // c est le rapport que Ludo lit.
    if (interruption) {
        blocs.push({
            texte: `## ⛔ Veille interrompue\n\nGoogle News a refusé ${MAX_ECHECS_DE_SUITE} recherches de suite ` +
                   `(${interruption}). Les sections suivantes n'ont pas été cherchées ; le passage suivant ` +
                   `reprendra.\n\n`,
            donnees: {},
        });
    }

    if (ecartes.size) {
        // Plafonnee : une Issue GitHub refuse un corps de plus de 65 536
        // caracteres, et cette liste n a pas a manger le budget des articles
        // qui, eux, paraissent. Trente lignes suffisent a voir si le filtre
        // coupe trop large.
        const PLAFOND = 30;
        const liste = [...ecartes];
        let texte = `## 🚫 Écartés par le filtre\n\n`;
        texte += `<details><summary>${liste.length} article(s) refusés avant publication</summary>\n\n`;
        for (const e of liste.slice(0, PLAFOND)) texte += `- ${e}\n`;
        if (liste.length > PLAFOND) texte += `- _… et ${liste.length - PLAFOND} autres._\n`;
        texte += `\n_Les règles sont dans \`scripts/actualites-regles.js\`._\n</details>\n\n`;
        blocs.push({ texte, donnees: {} });
    }

    return { rapports: assembler(entete, blocs, recherches, total), total, recherches, ecartes: ecartes.size, interruption };
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

    return groupes.map((g, i) => ({
        texte: entete + g.textes.join("") + pied(i + 1, groupes.length) +
               `\n<!-- ACTUALITES\n${JSON.stringify(g.donnees)}\n-->\n`,
        donnees: g.donnees,
    }));
}

// --- Issues ----------------------------------------------------------------

async function creerIssue(repo, token, contenu, numero, sur, langue) {
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
            title: `📰 Veille ${DRAPEAUX[langue] || langue} — ${date} à ${heure}${suffixe}`,
            body: contenu,
            labels: ["veille"],
        }),
    });

    if (!reponse.ok) throw new Error(`Erreur création Issue : ${await reponse.text()}`);
    console.log(`Issue ${langue} créée${suffixe} — ${contenu.length} caractères.`);
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

/* « --essai » fait tout le travail sauf ecrire sur GitHub : les rapports et
   les articles retenus sont deposes dans un dossier local
   (VEILLE_SORTIE, sinon le dossier temporaire). C est ce qui permet de juger
   ce qu une regle ou une liste de medias produirait AVANT de la mettre en
   ligne. « --langue=en » limite le passage a une langue. */
(async () => {
    try {
        const repo = process.env.GITHUB_REPOSITORY;
        const token = process.env.GITHUB_TOKEN;
        const essai = process.argv.includes("--essai");
        // VEILLE_LANGUE est pose par le workflow : une langue par passage.
        const seule = (process.argv.find((a) => a.startsWith("--langue=")) || "").split("=")[1]
            || process.env.VEILLE_LANGUE || "";
        const langues = seule ? [seule] : Object.keys(LANGUES);
        if (seule && !LANGUES[seule]) throw new Error(`Langue inconnue : ${seule}`);
        if (!essai && (!repo || !token)) throw new Error("GITHUB_REPOSITORY et GITHUB_TOKEN sont requis (ou --essai).");

        const sortie = process.env.VEILLE_SORTIE || path.join(os.tmpdir(), "veille-essai");
        if (essai) fs.mkdirSync(sortie, { recursive: true });

        const dejaProposes = await recupererLiensDejaProposes(repo, token);
        const vus = { liens: new Set(), titres: new Set() };

        for (const langue of langues) {
            const guides = lireGuides(langue);
            if (!guides.length) throw new Error(`Aucun guide lisible pour la langue ${langue}`);

            const nbSections = guides.reduce((n, g) => n + g.sousSections.length, 0);
            console.log(`[${langue}] ${guides.length} guides, ${nbSections} sous-sections surveillées.`);

            const { rapports, total, recherches, ecartes, interruption } = await construireRapport(langue, guides, dejaProposes, vus);
            console.log(`[${langue}] ${recherches} recherches, ${total} article(s) retenu(s), ${ecartes} écarté(s).`);
            // Le passage garde ce qu il a trouve, mais finit en echec : un
            // blocage qui dure doit se voir dans l onglet Actions.
            if (interruption) {
                console.error(`::error::[${langue}] veille interrompue, Google News refuse : ${interruption}`);
                process.exitCode = 1;
            }

            if (essai) {
                rapports.forEach((r, i) => fs.writeFileSync(path.join(sortie, `${langue}-${i + 1}.md`), r.texte));
                const retenus = Object.assign({}, ...rapports.map((r) => r.donnees));
                fs.writeFileSync(path.join(sortie, `${langue}-retenus.json`), JSON.stringify(retenus, null, 2));
                console.log(`[${langue}] essai : rapports déposés dans ${sortie}`);
            } else if (total > 0) {
                for (let i = 0; i < rapports.length; i++) {
                    await creerIssue(repo, token, rapports[i].texte, i + 1, rapports.length, langue);
                }
            } else {
                console.log(`[${langue}] Aucun article nouveau — pas d'Issue créée.`);
            }
        }

        if (!essai) await fermerAnciennesIssues(repo, token);
    } catch (erreur) {
        console.error("Erreur :", erreur);
        process.exit(1);
    }
})();
