// ===================================
// CLICKED - GARDE-FOU DE L'IDENTITÉ
// ===================================
//
// Échoue si une page, ou un script du site, porte en dur une donnée qui existe
// déjà dans une source unique : le nom du site, l'adresse de base, le nombre
// de parcours.
//
// Ce contrôle est le pendant de scripts/appliquer-identite.js. Celui-là écrit
// les données dérivées ; celui-ci vérifie que personne n'en a réintroduit une
// à la main. Les deux sont nécessaires : le premier ne voit pas ce qu'il n'a
// pas écrit, le second ne corrige rien.
//
// La règle appliquée n'est pas « le nom ne doit jamais apparaître » : une page
// « À propos » parle du site par son nom, et cette phrase doit être écrite
// dans le fichier, sans quoi aucun moteur de recherche ne la lit. La règle est
// « aucune valeur PÉRIMÉE, et aucune valeur que la source ne produirait pas ».
// C'est ce qui distingue une copie vérifiée d'une donnée dupliquée : la
// première ne peut pas mentir longtemps.
//
//   node scripts/verifier-identite.mjs

import fs from "fs";
import path from "path";
import url from "url";
import vm from "vm";

const RACINE = path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), "..");

const bac = { window: {} };
vm.createContext(bac);
for (const f of ["identite.js", "parcours.js"]) {
    vm.runInContext(fs.readFileSync(path.join(RACINE, "assets/js", f), "utf8"), bac, { filename: f });
}
const ID = bac.window.DOCMASTER_IDENTITE;
const NB_PARCOURS = Object.keys(bac.window.DOCMASTER_PARCOURS).length;

const anomalies = [];
const signaler = (m) => anomalies.push(m);

// L'hôte de l'adresse de base, sans le protocole ni le chemin : c'est lui qui
// trahit une adresse absolue recopiée à la main.
const HOTE = ID.base.replace(/^https?:\/\//, "").split("/")[0];

// Les seules balises autorisées à porter une adresse absolue : ce sont celles
// qu'écrit appliquer-identite.js, et elles doivent en porter une.
const BALISES_ADRESSE = /rel="canonical"|og:url|og:image|twitter:image|hreflang=/;

/* Les tournures qui annoncent un nombre de parcours. Elles reprennent celles
   de l'audit de cohérence et les élargissent : « 9 guides gratuits » avait
   menti dans 45 pages parce que la seule tournure surveillée était celle-là. */
const COMPTES = [
    /(\d+)\s+(?:guides gratuits|parcours|domaines|sujets)\b/g,
    /(\d+)\s+(?:free guides|learning paths|areas|topics)\b/g,
];

// --- Les fichiers à examiner -----------------------------------------------
function lister(dossier, filtre, prefixe = "") {
    const trouves = [];
    for (const entree of fs.readdirSync(dossier)) {
        const complet = path.join(dossier, entree);
        if (fs.statSync(complet).isDirectory()) {
            if (entree === ".git" || entree === "node_modules") continue;
            trouves.push(...lister(complet, filtre, prefixe + entree + "/"));
        } else if (filtre(entree)) {
            trouves.push({ nom: prefixe + entree, chemin: complet });
        }
    }
    return trouves;
}

const pages = [
    ...lister(RACINE, (f) => f.endsWith(".html")).filter((f) => !f.nom.startsWith("scripts/")),
];
const scripts = lister(path.join(RACINE, "assets/js"), (f) => f.endsWith(".js"))
    .filter((f) => f.nom !== "identite.js");

// --- 1. Aucun nom périmé ----------------------------------------------------
//
// « (?![A-Za-z]) » laisse tranquilles les identifiants internes construits sur
// l'ancien nom — la variable DocMasterFavoris, la clé docmaster-favoris. Les
// renommer effacerait les favoris et la progression de chaque visiteur, sans
// que personne ne voie la différence : ils ne sont affichés nulle part.
console.log("=== 1. NOM DU SITE ===");
for (const ancien of ID.anciensNoms) {
    const motif = new RegExp(ancien + "(?![A-Za-z])", "g");
    for (const f of [...pages, ...scripts]) {
        const html = fs.readFileSync(f.chemin, "utf8");
        const n = (html.match(motif) || []).length;
        if (n) signaler(`${f.nom} porte encore « ${ancien} » (${n} fois) — lancer node scripts/appliquer-identite.js`);
    }
}
console.log(`  ${pages.length} pages et ${scripts.length} scripts examinés, nom attendu : « ${ID.nom} »`);

// --- 2. Aucune adresse absolue hors des balises qui en portent --------------
console.log("\n=== 2. ADRESSE DE BASE ===");
for (const f of pages) {
    const lignes = fs.readFileSync(f.chemin, "utf8").split("\n");
    lignes.forEach((ligne, i) => {
        if (!ligne.includes(HOTE) || BALISES_ADRESSE.test(ligne)) return;
        signaler(`${f.nom}:${i + 1} écrit l'adresse du site en dur — elle vient de identite.js`);
    });
}
for (const f of scripts) {
    if (fs.readFileSync(f.chemin, "utf8").includes(HOTE)) {
        signaler(`${f.nom} écrit l'adresse du site en dur — elle vient de identite.js`);
    }
}
console.log(`  adresse de référence : ${ID.base}`);

// --- 3. Le nombre de parcours annoncé ---------------------------------------
//
// Une page peut dire combien de parcours existent — c'est une information
// utile au lecteur, et elle doit être lisible sans JavaScript. Mais elle est
// alors une copie, et une copie se vérifie : c'est cette phrase, recopiée dans
// 45 pages, qui a annoncé « 9 guides gratuits » pendant deux ajouts de sujet.
console.log("\n=== 3. NOMBRE DE PARCOURS ===");
for (const f of pages) {
    const html = fs.readFileSync(f.chemin, "utf8");
    for (const motif of COMPTES) {
        for (const m of html.matchAll(motif)) {
            if (Number(m[1]) !== NB_PARCOURS) {
                signaler(`${f.nom} annonce « ${m[0].trim()} » alors que parcours.js en déclare ${NB_PARCOURS}`);
            }
        }
    }
}
console.log(`  référence : ${NB_PARCOURS} parcours déclarés dans parcours.js`);

// --- Verdict ----------------------------------------------------------------
if (!anomalies.length) {
    console.log("\nAucune anomalie.");
    process.exit(0);
}
console.error(`\n[identité] ${anomalies.length} anomalie(s) :`);
for (const a of anomalies) console.error(`  - ${a}`);
process.exit(1);
