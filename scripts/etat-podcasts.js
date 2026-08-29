#!/usr/bin/env node
/* ---------------------------------------------------------------------------
 * CLICKED — OU EN SONT LES PODCASTS
 *
 * Un episode traverse quatre etats, et il faut regarder quatre endroits pour
 * savoir lequel : le texte dans podcasts/, la source deposee dans
 * podcasts/brut/, le MP3 dans assets/audio/, la duree dans durees.json.
 * Ce script les rassemble.
 *
 * Il ne CONTROLE rien et sort toujours en succes : c est un etat des lieux,
 * pas un barrage. Les barrages sont ailleurs — preparer-audio.js refuse un son
 * sature, publier-podcasts.js --verifier refuse une page qui ne correspond plus
 * a sa source. Melanger les deux ferait echouer l integration continue parce
 * qu il reste des episodes a enregistrer, ce qui n a aucun sens.
 *
 * Il signale en revanche les fichiers de podcasts/brut/ dont le nom ne
 * correspond a aucun parcours, et propose le nom le plus proche. Deux fichiers
 * sont deja arrives mal nommes — « aprendre.m4a » et « entreprenariat.m4a ».
 * La masterisation les refuse, mais elle le fait au bout de la chaine ; autant
 * le voir avant de la lancer.
 *
 *   node scripts/etat-podcasts.js
 * ------------------------------------------------------------------------- */

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const RACINE = path.join(__dirname, "..");
const BRUT = path.join(RACINE, "podcasts", "brut");
const AUDIO = path.join(RACINE, "assets", "audio");
const SOURCES = path.join(RACINE, "podcasts", "sources");

const bac = { window: {} };
vm.createContext(bac);
vm.runInContext(fs.readFileSync(path.join(RACINE, "assets/js/parcours.js"), "utf8"), bac);
const PARCOURS = bac.window.DOCMASTER_PARCOURS;

const DUREES = path.join(RACINE, "podcasts", "durees.json");
const durees = fs.existsSync(DUREES) ? JSON.parse(fs.readFileSync(DUREES, "utf8")) : {};

const EXTENSIONS = [".wav", ".flac", ".m4a", ".mp3", ".aac", ".ogg", ".opus"];

function enMinutes(s) {
    if (!Number.isFinite(s)) return "";
    return `${Math.floor(s / 60)} min ${String(s % 60).padStart(2, "0")}`;
}

function poids(fichier) {
    if (!fs.existsSync(fichier)) return "";
    return `${Math.round(fs.statSync(fichier).size / 1024)} Ko`;
}

/* Distance d edition, pour proposer un nom quand un fichier est mal orthographie.
   Version courte : on n a besoin que de comparer a quatorze noms. */
function distance(a, b) {
    const d = Array.from({ length: a.length + 1 }, (_, i) => [i, ...Array(b.length).fill(0)]);
    for (let j = 0; j <= b.length; j++) d[0][j] = j;
    for (let i = 1; i <= a.length; i++) {
        for (let j = 1; j <= b.length; j++) {
            d[i][j] = Math.min(
                d[i - 1][j] + 1,
                d[i][j - 1] + 1,
                d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
        }
    }
    return d[a.length][b.length];
}

function leplusProche(nom) {
    let meilleur = null;
    for (const s of Object.keys(PARCOURS)) {
        const d = distance(nom.toLowerCase(), s);
        if (!meilleur || d < meilleur.d) meilleur = { s, d };
    }
    // Au-dela de trois corrections, ce n est plus une faute de frappe.
    return meilleur && meilleur.d <= 3 ? meilleur.s : null;
}

// --- Ce que contient podcasts/brut/ ----------------------------------------
const sourcesDeposees = new Map();
const malNommes = [];
if (fs.existsSync(BRUT)) {
    for (const f of fs.readdirSync(BRUT)) {
        const ext = path.extname(f).toLowerCase();
        if (!EXTENSIONS.includes(ext)) continue;
        const nom = path.basename(f, ext);
        if (PARCOURS[nom]) sourcesDeposees.set(nom, f);
        else malNommes.push(f);
    }
}

// --- Le tableau -------------------------------------------------------------
const lignes = [];
let enLigne = 0;
let aTraiter = 0;

for (const [sujet, meta] of Object.entries(PARCOURS)) {
    const texte = fs.existsSync(path.join(RACINE, "podcasts", `${sujet}.md`));
    const mp3 = path.join(AUDIO, `${sujet}.mp3`);
    const publie = fs.existsSync(mp3) && texte;
    const source = sourcesDeposees.has(sujet);

    let marque, etat;
    if (publie) { marque = "✓"; etat = "en ligne"; enLigne++; }
    else if (source) { marque = "→"; etat = "source déposée"; aTraiter++; }
    else if (texte) { marque = "→"; etat = "texte seul"; }
    else { marque = " "; etat = "à faire"; }

    lignes.push(`  ${marque} ${sujet.padEnd(16)} ${etat.padEnd(15)}` +
                ` ${enMinutes(durees[sujet]).padStart(9)}  ${poids(mp3).padStart(7)}`);
}

console.log(`\nÉTAT DES PODCASTS — ${enLigne} en ligne sur ${Object.keys(PARCOURS).length}\n`);
console.log(lignes.join("\n"));

if (malNommes.length) {
    console.log("\n  Dans podcasts/brut/, ces noms ne correspondent à aucun parcours :");
    for (const f of malNommes) {
        const nom = path.basename(f, path.extname(f));
        const proche = leplusProche(nom);
        console.log(`    · ${f}${proche ? `   → voulais-tu dire « ${proche} » ?` : ""}`);
    }
    console.log("  La masterisation les refuserait ; les renommer suffit.");
}

if (!fs.existsSync(SOURCES)) {
    console.log("\n  Les sources pour NotebookLM n'existent pas encore :");
    console.log("    node scripts/exporter-parcours.js");
} else if (aTraiter) {
    console.log(`\n  ${aTraiter} source(s) déposée(s), à traiter :`);
    console.log("    node scripts/preparer-audio.js && node scripts/publier-podcasts.js");
} else if (enLigne < Object.keys(PARCOURS).length) {
    console.log("\n  Marche à suivre pour le suivant : podcasts/CONSIGNE-NOTEBOOKLM.md");
    console.log("  La consigne du parcours est dans podcasts/sources/<parcours>-consigne.txt");
}
console.log("");
