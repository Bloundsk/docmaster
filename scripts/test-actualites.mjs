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

const METAS = {
    "https://news.google.com/a": { titre: "86 % des PME ont subi un incident", source: "itdaily.fr", date: "2026-08-12", guide: "cybersecurite", page: "debutant.html", ancre: "le-phishing", section: "Le phishing", sujet: "🔒 Cybersécurité — Débutant" },
    "https://news.google.com/b": { titre: "Les taux & l'épargne <en 2026>", source: "Le Monde", date: "2026-08-13", guide: "finance", page: "debutant.html", ancre: "lépargne", section: "L'épargne", sujet: "💰 Finance — Débutant" },
    "https://news.google.com/c": { titre: "Un article qu'on ne veut pas", source: "spam.example", date: "2026-08-11", guide: "ia", page: "debutant.html", ancre: "les-llm", section: "Les LLM", sujet: "🤖 IA — Débutant" }
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
verifier("le titre apparaît sur la page", page2.includes("86 % des PME ont subi un incident"));
verifier("les caractères spéciaux sont échappés", page2.includes("&amp;") && page2.includes("&lt;en 2026&gt;"));
verifier("pas de HTML injecté brut", !page2.includes("<en 2026>"));
verifier("lien vers la section du guide", page2.includes('href="guides/cybersecurite/debutant.html#le-phishing"'));
verifier("liens externes protégés", (page2.match(/rel="noopener noreferrer"/g) || []).length === 2);
verifier("l'état vide a disparu", !page2.includes("Aucune actualité retenue"));

/* Les quatre pages, et pas seulement les deux francaises. Le titre d article
   reste en francais partout — un titre traduit ne se retrouve plus — mais ce
   que le site ecrit AUTOUR doit suivre la langue de la page. */
const pageEn = lirePage("en/actualites.html");
verifier("la page anglaise est écrite aussi", pageEn.includes("86 % des PME ont subi un incident"));
verifier("elle est rédigée en anglais", pageEn.includes("Related to") && !pageEn.includes("En rapport avec"));
verifier("elle renvoie vers le guide anglais", pageEn.includes('href="guides/cybersecurite/debutant.html"'));
verifier("l'accueil anglais aussi", lirePage("en/index.html").includes("Read elsewhere"));
verifier("l'accueil français reste français", lirePage("index.html").includes("À lire ailleurs"));

const accueil2 = lirePage("index.html");
verifier("l'accueil montre la rubrique", accueil2.includes("À lire ailleurs"));
verifier("l'accueil renvoie vers la page", accueil2.includes('href="actualites.html"'));
verifier("l'accueil garde ses catégories", accueil2.includes("Nos catégories") && accueil2.includes("guides/design/index.html"));

// --- 3. Une case decochee ---------------------------------------------------
console.log("\n=== 3. UNE CASE DECOCHEE ===");
etatIssues = [{ number: 1, body: corps(["https://news.google.com/b"]) }];
lancer();
const e3 = lireEtat();
verifier("il ne reste qu'un article", e3.articles.length === 1, `${e3.articles.length}`);
verifier("c'est bien celui resté coché", e3.articles[0].lien === "https://news.google.com/b");
verifier("le retiré a disparu de la page", !lirePage("actualites.html").includes("86 % des PME"));

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

console.log("\n" + (echecs === 0 ? "Tous les tests passent." : `${echecs} test(s) en échec.`));
process.exit(echecs === 0 ? 0 : 1);
