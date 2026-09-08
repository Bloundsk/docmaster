#!/usr/bin/env node
/* ---------------------------------------------------------------------------
 * Met a l epreuve l echeancier de revision, hors navigateur.
 *
 * Ce dispositif a une particularite desagreable : quand il se trompe, il ne
 * produit AUCUNE erreur. Une clef mal formee, une echeance mal calculee, un
 * stockage abime — dans les trois cas la page s affiche normalement et le
 * rappel n arrive simplement jamais. Personne ne s en apercoit avant plusieurs
 * jours, et rien ne permet alors de dire ce qui a echoue.
 *
 * D ou ce test, qui fait defiler le temps a la main.
 * ------------------------------------------------------------------------- */

import fs from "node:fs";
import path from "node:path";
import url from "node:url";
import vm from "node:vm";

const RACINE = path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), "..");
const JOUR = 24 * 60 * 60 * 1000;

// --- Un localStorage de bureau d etude -------------------------------------
function bacAEssai() {
    const donnees = new Map();
    const stockage = {
        getItem: (k) => (donnees.has(k) ? donnees.get(k) : null),
        setItem: (k, v) => donnees.set(k, String(v)),
        removeItem: (k) => donnees.delete(k),
        get length() { return donnees.size; },
        key: (i) => [...donnees.keys()][i],
        _donnees: donnees
    };
    const bac = { window: {}, localStorage: stockage, Date, JSON, Math, String };
    vm.createContext(bac);
    vm.runInContext(fs.readFileSync(path.join(RACINE, "assets/js/revisions.js"), "utf8"), bac);
    return { R: bac.window.DocMasterRevisions, stockage };
}

let echecs = 0;
const dit = (ok, quoi) => {
    console.log(`  ${ok ? "ok   " : "ECHEC"} ${quoi}`);
    if (!ok) echecs++;
};

// --- 1. La clef ne depend ni de la langue ni de la racine du deploiement ----
console.log("=== 1. LA CLEF ===");
{
    const { R } = bacAEssai();
    const attendu = "guides/finance/debutant.html";
    for (const chemin of [
        "/guides/finance/debutant.html",
        "/docmaster/guides/finance/debutant.html",
        "/docmaster/en/guides/finance/debutant.html",
        "guides/finance/debutant.html"
    ]) {
        dit(R.normaliser(chemin) === attendu, `${chemin} → ${R.normaliser(chemin)}`);
    }
    dit(R.normaliser("/podcasts.html") === null, "une page hors guides n'a pas d'échéance");
}

// --- 2. L echelle, et le silence apres le dernier palier --------------------
console.log("\n=== 2. L'ÉCHELLE ===");
{
    const { R } = bacAEssai();
    const p = "guides/ia/avance.html";
    const t0 = Date.now();

    dit(R.amorcer(p) === true, "une leçon sans date reçoit la date du jour");
    dit(R.amorcer(p) === false, "amorcer une deuxième fois ne remet pas le compteur à zéro");

    // Palier 1 : un jour.
    dit(R.etat(p, t0).due === false, "le jour même, rien n'est dû");
    dit(R.etat(p, t0 + JOUR).due === true, "le lendemain, la leçon est due");
    dit(R.etat(p, t0 + 4 * JOUR).jours === -3, "trois jours de retard sont comptés comme tels");

    // Les paliers suivants : 3, 7, 21 jours.
    const paliers = [3, 7, 21];
    for (const attendu of paliers) {
        R.revue(p);
        const t = Date.now();
        dit(R.etat(p, t + (attendu - 1) * JOUR).due === false, `la veille du palier de ${attendu} jours, rien n'est dû`);
        dit(R.etat(p, t + attendu * JOUR).due === true, `au palier de ${attendu} jours, la leçon est due`);
    }

    R.revue(p);
    const fin = R.etat(p, Date.now() + 400 * JOUR);
    dit(fin.acquise === true && fin.due === false,
        "après le quatrième rappel, le site se tait — même un an plus tard");
}

// --- 3. Un stockage abime ne fabrique pas d echeance ------------------------
console.log("\n=== 3. STOCKAGE ABÎMÉ ===");
{
    const { R, stockage } = bacAEssai();
    const p = "guides/droit/debutant.html";
    const cle = R.CLEF + p;

    for (const [valeur, quoi] of [
        ["ceci n'est pas du JSON", "du texte quelconque"],
        ['{"le":"hier","rang":0}', "une date qui n'est pas un nombre"],
        ['{"rang":2}', "une date absente"]
    ]) {
        stockage.setItem(cle, valeur);
        dit(R.lire(p) === null && R.etat(p) === null, `${quoi} est ignoré, pas interprété`);
    }

    // Et le dispositif repart : une valeur abimee ne bloque pas la leçon.
    stockage.setItem(cle, "abîmé");
    dit(R.amorcer(p) === true, "une leçon dont la donnée était abîmée est réamorcée");
}

// --- 4. Oublier efface vraiment --------------------------------------------
console.log("\n=== 4. DÉCOCHER ===");
{
    const { R, stockage } = bacAEssai();
    const p = "guides/sante/debutant.html";
    R.amorcer(p);
    R.oublier(p);
    dit(stockage.getItem(R.CLEF + p) === null, "décocher « lu » retire l'échéance");
    dit(R.etat(p) === null, "une leçon décochée n'a plus d'état");
}

// --- 5. Les deux fichiers qui se partagent la clef --------------------------
console.log("\n=== 5. ACCORD AVEC enhance.js ===");
{
    const { R } = bacAEssai();
    const poseur = fs.readFileSync(path.join(RACINE, "assets/js/enhance.js"), "utf8");
    // enhance.js construit « docmaster-revision-guides/<sujet>/<niveau>.html ».
    // C est exactement ce que revisions.js relit.
    const attendue = R.CLEF + "guides/marketing/avance.html";
    dit(poseur.includes('"docmaster-revision-guides/"'), "enhance.js pose bien ce préfixe");
    dit(attendue === "docmaster-revision-guides/marketing/avance.html",
        "et revisions.js relit bien la même clef");
}

console.log("\n" + (echecs === 0 ? "Tous les tests passent." : `${echecs} test(s) en échec.`));
process.exit(echecs === 0 ? 0 : 1);
