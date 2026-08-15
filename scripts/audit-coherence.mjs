// Controles que les audits existants ne font pas. Ils portent sur la
// COHERENCE INTERNE du contenu, la ou audit2 et audit3 portent sur la
// structure et sur la mise en ligne.
//
// Chaque controle est ne d une erreur reellement rencontree, ou d une erreur
// qui aurait pu passer inapercue.
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const RACINE = "C:/Users/veylu/Desktop/DocMaster";
const GUIDES = path.join(RACINE, "guides");

const anomalies = [];
const signaler = (categorie, message) => anomalies.push({ categorie, message });

const lire = (p) => fs.readFileSync(p, "utf8");
const sujets = fs.readdirSync(GUIDES).filter((d) => fs.statSync(path.join(GUIDES, d)).isDirectory());

// --- 1. Simulateurs orphelins et blocs en double ---------------------------
console.log("=== 1. SIMULATEURS ===");

const bacPratique = { window: {}, document: undefined, module: { exports: {} } };
vm.createContext(bacPratique);
vm.runInContext(lire(path.join(RACINE, "assets/js/pratique.js")), bacPratique);
const definis = Object.keys(bacPratique.module.exports.SIMULATEURS);

const utilises = [];
for (const sujet of sujets) {
    for (const f of fs.readdirSync(path.join(GUIDES, sujet))) {
        if (!f.endsWith(".html")) continue;
        for (const m of lire(path.join(GUIDES, sujet, f)).matchAll(/data-pratique="([^"]+)"/g)) {
            utilises.push({ nom: m[1], page: `${sujet}/${f}` });
        }
    }
}

// Un simulateur defini et jamais pose sur une page est du code mort : il
// passe tous les tests et ne sert personne.
for (const nom of definis) {
    if (!utilises.some((u) => u.nom === nom)) signaler("SIMULATEURS", `« ${nom} » défini mais posé sur aucune page`);
}
// Un bloc qui reference un simulateur inexistant est retire a l affichage :
// la section perd son exercice sans que rien ne le signale.
for (const u of utilises) {
    if (!definis.includes(u.nom)) signaler("SIMULATEURS", `${u.page} appelle « ${u.nom} », qui n'existe pas`);
}
// Le meme exercice pose deux fois fait perdre sa valeur au second.
const parNom = new Map();
for (const u of utilises) parNom.set(u.nom, [...(parNom.get(u.nom) || []), u.page]);
for (const [nom, pages] of parNom) {
    if (pages.length > 1) signaler("SIMULATEURS", `« ${nom} » posé ${pages.length} fois : ${pages.join(", ")}`);
}
console.log(`  ${definis.length} définis, ${utilises.length} posés, ${parNom.size} distincts`);

// --- 2. Structure des parcours --------------------------------------------
console.log("\n=== 2. STRUCTURE DES PARCOURS ===");

const bacParcours = { window: {} };
vm.createContext(bacParcours);
vm.runInContext(lire(path.join(RACINE, "assets/js/parcours.js")), bacParcours);
const PARCOURS = bacParcours.window.DOCMASTER_PARCOURS;

for (const sujet of sujets) {
    if (!PARCOURS[sujet]) { signaler("STRUCTURE", `dossier guides/${sujet} absent de parcours.js`); continue; }
    for (const niveau of PARCOURS[sujet].niveaux) {
        const page = path.join(GUIDES, sujet, niveau + ".html");
        if (!fs.existsSync(page)) { signaler("STRUCTURE", `${sujet}/${niveau} déclaré mais absent`); continue; }
        const html = lire(page);
        const sections = (html.match(/<summary><h3 id=/g) || []).length;
        const pratiques = (html.match(/data-pratique=/g) || []).length;
        // Un exercice par section : c est la regle suivie partout. Un ecart
        // n est pas fatal, mais il se remarque a la lecture.
        if (sections !== pratiques) {
            signaler("STRUCTURE", `${sujet}/${niveau} : ${sections} sections mais ${pratiques} exercices`);
        }
    }
}
for (const cle of Object.keys(PARCOURS)) {
    if (!sujets.includes(cle)) signaler("STRUCTURE", `parcours.js déclare « ${cle} », sans dossier`);
}
console.log(`  ${Object.keys(PARCOURS).length} parcours déclarés, ${sujets.length} dossiers`);

// --- 3. Anneau de navigation ----------------------------------------------
console.log("\n=== 3. ANNEAU DE NAVIGATION ===");

const suivant = {}, precedent = {};
for (const sujet of sujets) {
    const html = lire(path.join(GUIDES, sujet, "index.html"));
    const bloc = html.match(/<div class="guide-nav">([\s\S]*?)<\/div>/);
    if (!bloc) { signaler("ANNEAU", `${sujet} : pas de navigation entre guides`); continue; }
    const liens = [...bloc[1].matchAll(/href="\.\.\/([a-z-]+)\/index\.html"/g)].map((m) => m[1]);
    if (liens.length !== 2) { signaler("ANNEAU", `${sujet} : ${liens.length} lien(s) au lieu de 2`); continue; }
    precedent[sujet] = liens[0];
    suivant[sujet] = liens[1];
}
// L anneau doit se refermer : partir d un sujet et suivre « suivant » doit
// ramener au point de depart en passant par tous les autres.
let courant = sujets[0], parcourus = [courant];
for (let i = 0; i < sujets.length; i++) {
    courant = suivant[courant];
    if (!courant) break;
    if (courant === sujets[0]) break;
    if (parcourus.includes(courant)) { signaler("ANNEAU", `boucle courte sur « ${courant} »`); break; }
    parcourus.push(courant);
}
if (parcourus.length !== sujets.length) {
    signaler("ANNEAU", `l'anneau ne couvre que ${parcourus.length} sujets sur ${sujets.length} : ${parcourus.join(" → ")}`);
}
// Et la reciprocite : si A pointe vers B, B doit pointer vers A.
for (const [sujet, apres] of Object.entries(suivant)) {
    if (precedent[apres] !== sujet) {
        signaler("ANNEAU", `${sujet} → ${apres}, mais ${apres} revient vers ${precedent[apres] || "rien"}`);
    }
}
console.log(`  ${parcourus.length} sujets dans l'anneau`);

// --- 4. Index de recherche -------------------------------------------------
console.log("\n=== 4. INDEX DE RECHERCHE ===");

const bacRecherche = { window: {} };
vm.createContext(bacRecherche);
vm.runInContext(lire(path.join(RACINE, "assets/js/search-data.js")) + ";window.__i=searchIndex;", bacRecherche);
const index = bacRecherche.window.__i;

// Chaque page de cours doit etre atteignable par la recherche, sans quoi un
// contenu existe et reste introuvable.
for (const sujet of sujets) {
    for (const niveau of PARCOURS[sujet].niveaux) {
        const url = `guides/${sujet}/${niveau}.html`;
        if (!index.some((e) => e.url === url)) signaler("RECHERCHE", `${url} absent de l'index`);
    }
    if (!index.some((e) => e.url === `guides/${sujet}/index.html`)) {
        signaler("RECHERCHE", `guides/${sujet}/index.html absent de l'index`);
    }
}
const titres = index.map((e) => e.title);
for (const t of new Set(titres.filter((t, i) => titres.indexOf(t) !== i))) {
    signaler("RECHERCHE", `titre en double : « ${t} »`);
}
console.log(`  ${index.length} entrées, ${new Set(index.map((e) => e.url)).size} pages distinctes`);

// --- 5. Affirmations chiffrees dans les pages du site ----------------------
console.log("\n=== 5. CHIFFRES ANNONCES ===");

const nbSujets = sujets.length;
const motifs = [
    { regex: /(\d+)\s+guides gratuits/g, attendu: nbSujets, quoi: "guides gratuits" },
    { regex: /couvrant\s+(\d+)\s+domaines/g, attendu: nbSujets, quoi: "domaines" },
    { regex: /aujourd'hui\s+(\d+)\s+domaines/g, attendu: nbSujets, quoi: "domaines" },
];
const pagesSite = fs.readdirSync(RACINE).filter((f) => f.endsWith(".html"));
const toutes = [
    ...pagesSite.map((f) => ({ nom: f, html: lire(path.join(RACINE, f)) })),
    ...sujets.flatMap((s) => fs.readdirSync(path.join(GUIDES, s)).filter((f) => f.endsWith(".html"))
        .map((f) => ({ nom: `guides/${s}/${f}`, html: lire(path.join(GUIDES, s, f)) }))),
];
for (const page of toutes) {
    for (const { regex, attendu, quoi } of motifs) {
        for (const m of page.html.matchAll(regex)) {
            if (Number(m[1]) !== attendu) signaler("CHIFFRES", `${page.nom} annonce ${m[1]} ${quoi} au lieu de ${attendu}`);
        }
    }
}
console.log(`  ${toutes.length} pages examinées, référence : ${nbSujets} sujets`);

// --- 6. Dates de mise a jour ----------------------------------------------
console.log("\n=== 6. DATES ===");

const MOIS = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet",
              "août", "septembre", "octobre", "novembre", "décembre"];
const aujourdhui = new Date();
for (const page of toutes) {
    const m = page.html.match(/Dernière mise à jour\s*:\s*(\d+)\s+(\S+)\s+(\d{4})/);
    if (!m) continue;
    const mois = MOIS.indexOf(m[2]);
    if (mois === -1) { signaler("DATES", `${page.nom} : mois « ${m[2]} » non reconnu`); continue; }
    const d = new Date(Number(m[3]), mois, Number(m[1]));
    // Une date future est forcement fausse ; une date anterieure au projet aussi.
    if (d > aujourdhui) signaler("DATES", `${page.nom} annonce une date future : ${m[0]}`);
    if (d < new Date(2026, 6, 1)) signaler("DATES", `${page.nom} annonce une date suspecte : ${m[0]}`);
}
console.log(`  ${toutes.filter((p) => /Dernière mise à jour/.test(p.html)).length} pages datées`);

// --- 7. Accessibilite de base ---------------------------------------------
console.log("\n=== 7. ACCESSIBILITE ===");

for (const page of toutes) {
    if (!/<html lang="fr">/.test(page.html)) signaler("ACCESSIBILITE", `${page.nom} : langue non déclarée`);
    if (!/id="main-content"/.test(page.html)) signaler("ACCESSIBILITE", `${page.nom} : pas de cible pour le lien d'évitement`);
    const h1 = (page.html.match(/<h1[ >]/g) || []).length;
    if (h1 !== 1) signaler("ACCESSIBILITE", `${page.nom} : ${h1} titre(s) de niveau 1`);
    for (const m of page.html.matchAll(/<img\b(?![^>]*\balt=)[^>]*>/g)) {
        signaler("ACCESSIBILITE", `${page.nom} : image sans alternative textuelle`);
    }
    // Un lien qui sort du site sans rel="noopener" expose la page appelante.
    for (const m of page.html.matchAll(/<a\b[^>]*href="https?:\/\/(?!bloundsk\.github\.io)[^"]*"[^>]*>/g)) {
        if (!/rel="[^"]*noopener/.test(m[0])) {
            signaler("ACCESSIBILITE", `${page.nom} : lien externe sans rel="noopener" — ${m[0].slice(0, 70)}`);
        }
    }
}
console.log(`  ${toutes.length} pages contrôlées`);

// --- 8. Couleurs -----------------------------------------------------------
//
// Toute couleur doit vivre dans la palette, en tete de style.css, et nulle part
// ailleurs. La regle vient d un defaut precis : --primary etait illisible en
// mode sombre, et plutot que de corriger le jeton, trois endroits avaient recu
// un #7aa5ff ecrit a la main. Les quinze autres, faute d avoir ete remarques,
// sont restes illisibles des mois.
//
// Une couleur ecrite en dur hors de la palette est donc traitee comme une
// anomalie : c est le signe qu on rustine un symptome au lieu de soigner la
// cause. Les commentaires sont ignores — ils citent souvent les valeurs
// d origine pour expliquer pourquoi elles ont change.
console.log("\n=== 8. COULEURS ===");

const css = lire(path.join(RACINE, "assets/css/style.css"));
const finPalette = css.indexOf("@keyframes");
const palette = css.slice(0, finPalette);
const sansCommentaires = css.slice(finPalette).replace(/\/\*[\s\S]*?\*\//g, "");

// Le bloc html.dark-mode redefinit les memes jetons : il fait partie de la palette.
const blocSombre = sansCommentaires.match(/html\.dark-mode\s*\{[\s\S]*?\}/);
let corps = blocSombre ? sansCommentaires.replace(blocSombre[0], "") : sansCommentaires;

// Les styles d impression sortent du systeme de themes : le papier est blanc
// dans les deux cas, et un gris de bordure n y suit aucun jeton.
// Il y en a plusieurs dans le fichier, d'ou la boucle : n'en retirer qu'un
// laissait passer le gris de bordure du second.
let debutPrint;
while ((debutPrint = corps.indexOf("@media print")) !== -1) {
    let i = corps.indexOf("{", debutPrint), niveau = 0;
    for (; i < corps.length; i++) {
        if (corps[i] === "{") niveau++;
        else if (corps[i] === "}" && --niveau === 0) break;
    }
    corps = corps.slice(0, debutPrint) + corps.slice(i + 1);
}

const enDur = new Set();
for (const m of corps.matchAll(/#[0-9a-fA-F]{3,8}\b/g)) enDur.add(m[0]);
for (const c of enDur) {
    signaler("COULEURS", `${c} écrit en dur hors de la palette — il lui faut un jeton`);
}

const jetons = [...palette.matchAll(/(--[a-z-]+):/g)].map((m) => m[1]);
// Un jeton de couleur defini en clair doit l etre aussi en sombre, sans quoi il
// garde sa valeur claire sur fond sombre — exactement le defaut d origine.
const JETONS_NEUTRES = ["--radius", "--shadow", "--shadow-fort", "--decalage-ancre"];
if (blocSombre) {
    for (const j of jetons) {
        if (JETONS_NEUTRES.includes(j)) continue;
        if (!blocSombre[0].includes(j + ":")) {
            signaler("COULEURS", `${j} n'est pas redéfini en mode sombre`);
        }
    }
}
console.log(`  ${jetons.length} jetons de palette, ${enDur.size} couleur(s) en dur hors palette`);

// --- Resultat --------------------------------------------------------------
console.log("\n=== RESULTAT ===\n");
if (!anomalies.length) {
    console.log("Aucune anomalie.");
} else {
    const parCategorie = {};
    for (const a of anomalies) (parCategorie[a.categorie] ||= []).push(a.message);
    for (const [cat, liste] of Object.entries(parCategorie)) {
        console.log(`[${cat}] ${liste.length}`);
        for (const m of liste) console.log(`  - ${m}`);
        console.log();
    }
}
console.log(`Total : ${anomalies.length} anomalie(s).`);
process.exit(anomalies.length ? 1 : 0);
