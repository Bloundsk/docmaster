// Exerce scripts/publier-actualites.js sans toucher a GitHub : la reponse de
// l API est lue dans un fichier, et le script travaille sur une copie du site.
// On verifie le cycle complet : cocher publie, decocher retire.
//
// Un faux serveur HTTP ne convenait pas : le processus de test appelle le
// script avec execFileSync, donc synchroniquement. Bloque en attente de son
// enfant, il ne pouvait pas repondre a la requete de celui-ci — les deux
// s attendaient indefiniment.
import fs from "node:fs";
import path from "node:path";
import url from "node:url";
import { execFileSync } from "node:child_process";

// « fileURLToPath » et non « pathname.slice(1) » : ce dernier retire la barre
// initiale d un chemin absolu sous Linux, et le script ne trouve plus rien.
const RACINE = path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), "..");
const BAC = path.join(process.env.TEMP || "/tmp", "docmaster-test-actualites");
const FICHIER_ISSUES = path.join(BAC, "issues.json");

fs.rmSync(BAC, { recursive: true, force: true });
fs.mkdirSync(path.join(BAC, "scripts"), { recursive: true });
fs.mkdirSync(path.join(BAC, "en"), { recursive: true });
/* Les deux fichiers, pas seulement celui qu'on teste : publier-actualites.js
   requiert actualites-regles.js. Le bac à sable ne copiait que le premier, et
   le test tombait sur MODULE_NOT_FOUND — même défaut que le jour où il ne
   copiait que deux des quatre pages. Ce qu'un script lit, le bac doit
   l'avoir. */
for (const f of ["publier-actualites.js", "actualites-regles.js"]) {
    fs.copyFileSync(path.join(RACINE, "scripts", f), path.join(BAC, "scripts", f));
}

/* Les QUATRE pages porteuses des marqueurs. Le bac n en copiait que deux : le
   jour ou le script a commence a ecrire aussi les pages anglaises, il s est
   arrete sur un fichier absent — et ce test, qu on n avait pas relance, etait
   le seul a pouvoir le dire. */
const PAGES = ["actualites.html", "index.html", "en/actualites.html", "en/index.html"];
for (const p of PAGES) fs.copyFileSync(path.join(RACINE, p), path.join(BAC, p));

/* Les titres partagent VRAIMENT deux mots avec leur section : depuis l ajout du
   filtre de pertinence, un titre factice sans rapport est refuse — et c est le
   filtre qui a raison. Des donnees d essai irrealistes ne testent rien. */
const METAS = {
    "https://news.google.com/a": { titre: "Phishing : la cybersécurité des PME en question", source: "itdaily.fr", date: "2026-08-12", guide: "cybersecurite", page: "debutant.html", ancre: "le-phishing", section: "Le phishing", sujet: "🔒 Cybersécurité — Débutant" },
    "https://news.google.com/b": { titre: "Épargne & finance : les taux <en 2026>", source: "Le Monde", date: "2026-08-13", guide: "finance", page: "debutant.html", ancre: "lépargne", section: "L'épargne", sujet: "💰 Finance — Débutant" },
    "https://news.google.com/c": { titre: "Les LLM et l'intelligence artificielle en entreprise", source: "spam.example", date: "2026-08-11", guide: "ia", page: "debutant.html", ancre: "les-llm", section: "Les LLM", sujet: "🤖 Intelligence Artificielle — Débutant" }
};

function corps(coches) {
    let t = "# Veille\n\n";
    for (const [lien, m] of Object.entries(METAS)) {
        t += `- [${coches.includes(lien) ? "x" : " "}] [${m.titre}](${lien}) — <sub>${m.source}</sub>\n`;
    }
    t += `\n<!-- ACTUALITES\n${JSON.stringify(METAS)}\n-->\n`;
    return t;
}

const PRELUDE = [
    'import fs from "node:fs";',
    // Les avertissements du script partent sur stderr, que execFileSync ne
    // renvoie pas. Sans cette ligne, un test qui les cherche echouerait alors
    // que le script fait exactement ce qu il faut.
    'console.warn = console.error = console.log;',
    'globalThis.fetch = async () => ({',
    '    ok: true,',
    '    status: 200,',
    '    json: async () => JSON.parse(fs.readFileSync(process.env.FICHIER_ISSUES, "utf8"))',
    '});',
    'await import("./scripts/publier-actualites.js");'
].join("\n");

let etatIssues = [];

function lancer() {
    fs.writeFileSync(FICHIER_ISSUES, JSON.stringify(etatIssues));
    const fichier = path.join(BAC, "lanceur.mjs");
    fs.writeFileSync(fichier, PRELUDE);
    return execFileSync(process.execPath, [fichier], {
        cwd: BAC,
        env: { ...process.env, GITHUB_REPOSITORY: "x/y", GITHUB_TOKEN: "faux", FICHIER_ISSUES },
        encoding: "utf8"
    });
}

const lireEtat = () => JSON.parse(fs.readFileSync(path.join(BAC, "data/actualites.json"), "utf8"));
const lirePage = (f) => fs.readFileSync(path.join(BAC, f), "utf8");

let echecs = 0;
const verifier = (nom, condition, detail = "") => {
    console.log(`  ${condition ? "ok   " : "ECHEC"} ${nom}${condition ? "" : "  — " + detail}`);
    if (!condition) echecs++;
};

// --- 1. Rien de coche -------------------------------------------------------
console.log("\n=== 1. AUCUNE CASE COCHEE ===");
etatIssues = [{ number: 1, body: corps([]) }];
lancer();
verifier("aucun article publié", lireEtat().articles.length === 0);
verifier("l'accueil ne montre pas de rubrique vide", !lirePage("index.html").includes("À lire ailleurs"));
verifier("la page affiche l'état vide", lirePage("actualites.html").includes("Aucune actualité retenue"));

// --- 2. Deux cases cochees --------------------------------------------------
console.log("\n=== 2. DEUX CASES COCHEES ===");
etatIssues = [{ number: 1, body: corps(["https://news.google.com/a", "https://news.google.com/b"]) }];
lancer();
const e2 = lireEtat();
verifier("2 articles publiés", e2.articles.length === 2, `${e2.articles.length}`);
verifier("le plus récent en premier", e2.articles[0].lien === "https://news.google.com/b", e2.articles[0].lien);
verifier("l'article non coché est absent", !e2.articles.some((a) => a.lien.endsWith("/c")));

const page2 = lirePage("actualites.html");
verifier("le titre apparaît sur la page", page2.includes("Phishing : la cybersécurité des PME en question"));
verifier("les caractères spéciaux sont échappés", page2.includes("&amp;") && page2.includes("&lt;en 2026&gt;"));
verifier("pas de HTML injecté brut", !page2.includes("<en 2026>"));
verifier("lien vers la section du guide", page2.includes('href="guides/cybersecurite/debutant.html#le-phishing"'));
verifier("liens externes protégés", (page2.match(/rel="noopener noreferrer"/g) || []).length === 2);
verifier("l'état vide a disparu", !page2.includes("Aucune actualité retenue"));

/* Les quatre pages, et pas seulement les deux francaises. Le titre d article
   reste en francais partout — un titre traduit ne se retrouve plus — mais ce
   que le site ecrit AUTOUR doit suivre la langue de la page. */
const pageEn = lirePage("en/actualites.html");
verifier("la page anglaise est écrite aussi", pageEn.includes("Phishing : la cybersécurité des PME en question"));
verifier("elle est rédigée en anglais", pageEn.includes("Related to") && !pageEn.includes("En rapport avec"));
verifier("elle renvoie vers le guide anglais", pageEn.includes('href="guides/cybersecurite/debutant.html"'));
verifier("l'accueil anglais aussi", lirePage("en/index.html").includes("Read elsewhere"));
verifier("l'accueil français reste français", lirePage("index.html").includes("À lire ailleurs"));

const accueil2 = lirePage("index.html");
verifier("l'accueil montre la rubrique", accueil2.includes("À lire ailleurs"));
verifier("l'accueil renvoie vers la page", accueil2.includes('href="actualites.html"'));
/* Les parcours ont quitte l accueil pour guides.html le 29 aout 2026. Ce que
   la publication des actualites ne doit pas casser, ce sont donc les blocs qui
   restent : le renvoi vers les guides, et les marqueurs des nouveautes. */
verifier("l'accueil garde son renvoi vers les guides", accueil2.includes('href="guides.html"'));
verifier("l'accueil garde le bloc des nouveautés",
    accueil2.includes("NOUVEAUTES:DEBUT") && accueil2.includes("NOUVEAUTES:FIN"));

// --- 3. Une case decochee ---------------------------------------------------
console.log("\n=== 3. UNE CASE DECOCHEE ===");
etatIssues = [{ number: 1, body: corps(["https://news.google.com/b"]) }];
lancer();
const e3 = lireEtat();
verifier("il ne reste qu'un article", e3.articles.length === 1, `${e3.articles.length}`);
verifier("c'est bien celui resté coché", e3.articles[0].lien === "https://news.google.com/b");
verifier("le retiré a disparu de la page", !lirePage("actualites.html").includes("Phishing : la cybersécurité"));

// --- 4. Issue sans metadonnees ---------------------------------------------
console.log("\n=== 4. ISSUE ANCIENNE, SANS METADONNEES ===");
etatIssues = [
    { number: 2, body: "# Veille\n\n- [Un vieil article](https://news.google.com/z)\n" },
    { number: 1, body: corps(["https://news.google.com/b"]) }
];
lancer();
verifier("elle est ignorée sans casse", lireEtat().articles.length === 1);

// --- 5. Metadonnees corrompues ---------------------------------------------
console.log("\n=== 5. METADONNEES ILLISIBLES ===");
etatIssues = [
    { number: 3, body: "- [x] [X](https://news.google.com/q)\n\n<!-- ACTUALITES\n{ceci n'est pas du JSON\n-->\n" },
    { number: 1, body: corps(["https://news.google.com/b"]) }
];
const sortie5 = lancer();
verifier("l'Issue fautive est signalée", /illisibles/.test(sortie5), sortie5.trim());
verifier("les autres passent quand même", lireEtat().articles.length === 1);

// --- 6. Idempotence ---------------------------------------------------------
console.log("\n=== 6. DEUX PASSAGES DE SUITE ===");
etatIssues = [{ number: 1, body: corps(["https://news.google.com/b"]) }];
lancer();
const avant = lirePage("actualites.html");
const horodatageAvant = lireEtat().maj;
const sortie6 = lancer();
verifier("la page n'est pas réécrite pour rien", lirePage("actualites.html") === avant);
verifier("le script le dit", /inchang/.test(sortie6), sortie6.trim());
// Sans cette garantie, l horodatage changeait a chaque passage : un commit et
// une republication du site deux fois par jour, pour rien.
verifier("l'horodatage ne bouge pas non plus", lireEtat().maj === horodatageAvant, lireEtat().maj);

// --- 7. Un article perime est ecarte, et l ecart est annonce ---------------
//
// Un site qui annonce « les competences de demain » ne peut pas afficher un
// article de 2021 : la regle des 120 jours est donc juste.
//
// Ce qui ne l etait pas, c est de l appliquer en silence. Sept cases cochees
// ont donne deux articles publies, sans un mot d explication, et il a fallu
// remonter jusqu au code pour comprendre. Le controle porte donc sur les deux :
// l article est bien ecarte, ET le script le dit.
console.log("\n=== 7. UN ARTICLE PERIME ===");
const ancien = { ...METAS["https://news.google.com/b"], titre: "Un article de 2021", date: "2021-04-06" };
etatIssues = [{
    number: 1,
    body: `- [x] [ancien](https://news.google.com/ancien)\n\n<!-- ACTUALITES\n${JSON.stringify({ "https://news.google.com/ancien": ancien })}\n-->\n`
}];
const sortie7 = lancer();
const e7 = lireEtat().articles;
verifier("il n'entre pas dans la page", !e7.some((a) => a.lien.endsWith("/ancien")),
    JSON.stringify(e7.map((a) => a.date)));
verifier("les articles récents restent", e7.length === 1, `${e7.length}`);
verifier("l'écart est annoncé", /écarté/.test(sortie7), sortie7.trim());
verifier("avec le titre et l'âge", /Un article de 2021/.test(sortie7) && /\d+ j\)/.test(sortie7),
    sortie7.trim());

/* --- 8. Le filtre d admission -----------------------------------------------
 *
 * Depuis que la publication est automatique, ce filtre est tout ce qui separe
 * le flux Google News de la page d actualites. Il n y a plus d humain derriere.
 *
 * Les deux cas testes sont reels : ce sont deux articles qui ont ete publies
 * sur le site sous l ancien fonctionnement, cases cochees a la main. Ils
 * doivent desormais etre refuses MEME coches — c est la difference entre un
 * filtre et une suggestion. */
console.log("\n=== 8. LE FILTRE REFUSE MEME UNE CASE COCHEE ===");

const refuses = {
    "https://news.google.com/promo": {
        titre: "Investir en private equity : les meilleures plateformes en 2026",
        source: "Un site quelconque", date: "2026-08-19",
        guide: "finance", page: "debutant.html", ancre: "lépargne",
        section: "L'épargne", sujet: "💰 Finance — Débutant",
    },
    "https://news.google.com/source": {
        titre: "Un titre parfaitement anodin",
        source: "news-eco.com", date: "2026-08-19",
        guide: "ia", page: "debutant.html", ancre: "les-llm",
        section: "Les LLM", sujet: "🤖 IA — Débutant",
    },
};
etatIssues = [{
    number: 1,
    body: Object.keys(refuses).map((l) => `- [x] [x](${l})`).join("\n") +
          `\n\n<!-- ACTUALITES\n${JSON.stringify(refuses)}\n-->\n`,
}];
const sortie8 = lancer();
const e8 = lireEtat().articles;
verifier("le comparatif d'affiliation est refusé",
    !e8.some((a) => a.lien.endsWith("/promo")), JSON.stringify(e8.map((a) => a.lien)));
verifier("l'article de la source écartée est refusé",
    !e8.some((a) => a.lien.endsWith("/source")), JSON.stringify(e8.map((a) => a.lien)));
verifier("la raison du refus est dite", /palmar|source écartée/.test(sortie8), sortie8.trim());

/* --- 9. Le libelle de section est relu dans le guide ------------------------
 *
 * L Issue porte une COPIE du titre de section, figee le jour ou la veille l a
 * relevee. Le 22 aout, la premiere publication automatique a lu une Issue
 * d avant le passage au tutoiement et remis « Vos donnees personnelles » en
 * ligne, alors que la section s appelait « Tes donnees personnelles » depuis la
 * veille. Corriger l etat a la main n aurait tenu que jusqu a la publication
 * suivante.
 *
 * Le bac contient donc un faux guide, dont le titre de section differe de celui
 * que porte l Issue : c est le titre du GUIDE qui doit paraitre. */
console.log("\n=== 9. LE LIBELLE VIENT DU GUIDE, PAS DE L'ISSUE ===");

fs.mkdirSync(path.join(BAC, "guides/cybersecurite"), { recursive: true });
fs.writeFileSync(path.join(BAC, "guides/cybersecurite/debutant.html"),
    `<h2>x</h2>\n<details><summary><h3 id="le-phishing">🎣 Phishing : le titre actuel</h3></summary></details>\n`);

const perime = {
    "https://news.google.com/perime": {
        titre: "Phishing : la cybersécurité des PME en question", source: "Le Monde",
        date: new Date().toISOString().slice(0, 10),
        guide: "cybersecurite", page: "debutant.html", ancre: "le-phishing",
        section: "L'ANCIEN TITRE FIGÉ", sujet: "🔒 Cybersécurité — Débutant",
    },
};
etatIssues = [{
    number: 1,
    body: `- [x] [x](https://news.google.com/perime)\n\n<!-- ACTUALITES\n${JSON.stringify(perime)}\n-->\n`,
}];
lancer();
const page9 = lirePage("actualites.html");
verifier("le titre courant de la section est affiché", /Phishing : le titre actuel/.test(page9),
    (page9.match(/En rapport avec[^<]*<[^>]*>[^<]*/) || ["(rien)"])[0]);
verifier("l'ancien titre figé n'apparaît pas", !/ANCIEN TITRE FIGÉ/.test(page9));

/* --- 10. Le filtre de pertinence -------------------------------------------
 *
 * Les quatre cas testes sont REELS : ils etaient en ligne le 23 aout, sous les
 * sections indiquees. Quinze articles sur vingt-quatre etaient dans ce cas.
 *
 * Chacun illustre le meme piege — un mot de la recherche apparait dans le
 * titre, mais dans un autre sens. C est ce que le filtre doit voir. */
console.log("\n=== 10. LE HORS-SUJET EST REFUSE ===");

const horsSujet = {
    "https://news.google.com/hs1": {
        titre: "La diversification économique face au piège des annonces",
        source: "Le Matin", date: new Date().toISOString().slice(0, 10),
        guide: "finance", page: "avance.html", ancre: "la-diversification-reelle",
        section: "La diversification réelle", sujet: "💰 Finance — Avancé",
    },
    "https://news.google.com/hs2": {
        titre: "BJ's (BJRI): Buy, Sell, or Hold Post Q2 Earnings?",
        source: "TradingView", date: new Date().toISOString().slice(0, 10),
        guide: "entrepreneuriat", page: "avance.html", ancre: "les-unit-economics",
        section: "Les unit economics", sujet: "🚀 Entrepreneuriat — Avancé",
    },
};
etatIssues = [{
    number: 1,
    body: Object.keys(horsSujet).map((l) => `- [x] [x](${l})`).join("\n") +
          `\n\n<!-- ACTUALITES\n${JSON.stringify(horsSujet)}\n-->\n`,
}];
const sortie10 = lancer();
const e10 = lireEtat().articles;
verifier("« diversification économique » ne passe pas sous « diversification réelle »",
    !e10.some((a) => a.lien.endsWith("/hs1")), JSON.stringify(e10.map((a) => a.lien)));
verifier("une recommandation boursière ne passe pas sous « unit economics »",
    !e10.some((a) => a.lien.endsWith("/hs2")));
verifier("le refus nomme le mot en commun", /hors sujet/.test(sortie10), sortie10.trim().slice(0, 200));

/* --- 11. Les deux mots ne peuvent pas venir du seul nom du parcours ---------
 *
 * Cas reel, en ligne le 25 aout : un article sur le marketing digital publie
 * sous « Le cadre juridique » du parcours Marketing. Il avait bien deux mots
 * communs, « marketing » et « digital » — mais tous deux venant du NOM DU
 * PARCOURS, aucun de la section. Le nom du parcours servait de laissez-passer :
 * il vaut pour ses quinze sections, donc il ne discrimine rien.
 *
 * Le second article est le temoin, et il compte autant que le premier : il
 * porte « juridique », un mot de la section, et il DOIT passer. Sans lui, une
 * regle qui refuserait tout aurait l air de fonctionner. */
console.log("\n=== 11. UN MOT DOIT VENIR DE LA SECTION ===");

const malRange = {
    "https://news.google.com/mr1": {
        titre: "Couleurs, influenceurs et algorithmes : comment le marketing digital cible les enfants",
        source: "SNRTnews", date: new Date().toISOString().slice(0, 10),
        guide: "marketing", page: "avance.html", ancre: "le-cadre-juridique",
        section: "Le cadre juridique", sujet: "📢 Marketing Digital — Avancé",
    },
    "https://news.google.com/mr2": {
        titre: "Publicité ciblée : le cadre juridique se durcit pour le marketing digital",
        source: "Les Echos", date: new Date().toISOString().slice(0, 10),
        guide: "marketing", page: "avance.html", ancre: "le-cadre-juridique",
        section: "Le cadre juridique", sujet: "📢 Marketing Digital — Avancé",
    },
};
etatIssues = [{
    number: 1,
    body: Object.keys(malRange).map((l) => `- [x] [x](${l})`).join("\n") +
          `\n\n<!-- ACTUALITES\n${JSON.stringify(malRange)}\n-->\n`,
}];
const sortie11 = lancer();
const e11 = lireEtat().articles;
verifier("deux mots venant du seul parcours ne suffisent pas",
    !e11.some((a) => a.lien.endsWith("/mr1")), JSON.stringify(e11.map((a) => a.lien)));
verifier("un mot de la section suffit à faire passer l'article",
    e11.some((a) => a.lien.endsWith("/mr2")), JSON.stringify(e11.map((a) => a.lien)));
verifier("le refus dit que l'article est mal rangé", /mal rangé/.test(sortie11),
    sortie11.trim().slice(0, 200));

/* --- 12. Le communique produit -----------------------------------------------
 *
 * Cas reel, retire par Ludo le 25 aout. Il passait tous les filets : pas de
 * tournure promotionnelle, pas de majuscules, source inconnue, bien range sous
 * « L'épargne ». Seule sa forme le trahit — une marque, un verbe d'annonce, et
 * un produit NOMME en objet.
 *
 * Le second cas est le temoin, et il est le plus important des deux : « Bercy
 * dévoile son plan » a exactement la meme forme, au produit pres. Son objet est
 * un nom commun, donc il informe au lieu de vendre, et il DOIT passer. Une
 * regle qui ecarterait les deux serait un filtre a verbes, pas a communiques. */
console.log("\n=== 12. LE COMMUNIQUE PRODUIT EST REFUSE ===");

const communique = {
    "https://news.google.com/cp1": {
        // Le titre REEL, entier. Tronque, il perdait « finances » et se
        // faisait refuser des la regle de pertinence — le test aurait alors
        // ete vert sans jamais eprouver le filtre a communiques.
        titre: "BNI présente wondrZ, un compte d'épargne pour enfants et adolescents " +
               "pour apprendre à gérer les finances dès le plus jeune âge",
        source: "VOI.ID", date: new Date().toISOString().slice(0, 10),
        guide: "finance", page: "debutant.html", ancre: "lépargne",
        section: "L'épargne", sujet: "💰 Finance — Débutant",
    },
    "https://news.google.com/cp2": {
        // Deux mots communs, dont « épargne » qui vient de la section : le
        // temoin doit franchir les regles PRECEDENTES pour eprouver celle-ci.
        titre: "Finance et épargne : Bercy dévoile son plan pour relancer le livret",
        source: "Les Echos", date: new Date().toISOString().slice(0, 10),
        guide: "finance", page: "debutant.html", ancre: "lépargne",
        section: "L'épargne", sujet: "💰 Finance — Débutant",
    },
    /* Meme forme exactement que wondrZ — marque, verbe, produit nomme — mais
       l editeur est de ceux dont le site enseigne les produits. Ludo a demande
       le 25 aout que ces annonces-la restent : une sortie de modele est au
       parcours IA ce qu une nouvelle loi est au parcours Droit. Sans ce cas,
       supprimer la liste des editeurs ne casserait aucun test. */
    "https://news.google.com/cp3": {
        titre: "Anthropic dévoile Claude Sonnet 4.5 : comment choisir un modèle adapté",
        source: "ActuIA", date: new Date().toISOString().slice(0, 10),
        guide: "ia", page: "intermediaire.html", ancre: "choisir-un-modele",
        section: "Choisir un modèle", sujet: "🤖 Intelligence Artificielle — Intermédiaire",
    },
};
etatIssues = [{
    number: 1,
    body: Object.keys(communique).map((l) => `- [x] [x](${l})`).join("\n") +
          `\n\n<!-- ACTUALITES\n${JSON.stringify(communique)}\n-->\n`,
}];
const sortie12 = lancer();
const e12 = lireEtat().articles;
verifier("« BNI présente wondrZ » est refusé",
    !e12.some((a) => a.lien.endsWith("/cp1")), JSON.stringify(e12.map((a) => a.lien)));
verifier("« Bercy dévoile son plan » passe : son objet est un nom commun",
    e12.some((a) => a.lien.endsWith("/cp2")), JSON.stringify(e12.map((a) => a.lien)));
verifier("le refus nomme le produit annoncé", /communiqué produit.*wondrZ/.test(sortie12),
    sortie12.trim().slice(0, 200));
verifier("l'annonce d'un éditeur enseigné par le site passe",
    e12.some((a) => a.lien.endsWith("/cp3")), JSON.stringify(e12.map((a) => a.lien)));

console.log("\n" + (echecs === 0 ? "Tous les tests passent." : `${echecs} test(s) en échec.`));
process.exit(echecs === 0 ? 0 : 1);
