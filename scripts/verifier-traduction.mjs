// Extrait tous les textes visibles des simulateurs d'un sujet et vérifie que
// le dictionnaire d'une langue les couvre. Les valeurs calculées sont obtenues
// en EXÉCUTANT les simulateurs, seule façon de voir ce qui s'affichera.
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const RACINE = "C:/Users/veylu/Desktop/DocMaster";
const SUJET = process.argv[2] || "apprendre";
const LANGUE = process.argv[3] || "en";

// Les simulateurs posés dans les pages du sujet.
const poses = new Set();
for (const f of fs.readdirSync(path.join(RACINE, "guides", SUJET))) {
    if (!f.endsWith(".html")) continue;
    const html = fs.readFileSync(path.join(RACINE, "guides", SUJET, f), "utf8");
    for (const m of html.matchAll(/data-pratique="([^"]+)"/g)) poses.add(m[1]);
}

const bac = { window: {}, document: undefined, module: { exports: {} }, Intl };
vm.createContext(bac);
vm.runInContext(fs.readFileSync(path.join(RACINE, "assets/js/pratique.js"), "utf8"), bac);
const SIMULATEURS = bac.module.exports.SIMULATEURS;

const bacDico = { window: {} };
vm.createContext(bacDico);
vm.runInContext(fs.readFileSync(path.join(RACINE, `assets/js/pratique/${LANGUE}.js`), "utf8"), bacDico);
const dico = bacDico.window.PRATIQUE_TEXTES;

const textes = new Set(["À vous d'essayer", "Renseignez", "pour voir le résultat."]);
const valeurs = new Set();

for (const nom of poses) {
    const s = SIMULATEURS[nom];
    if (!s) { console.log(`  simulateur introuvable : ${nom}`); continue; }
    if (s.titre) textes.add(s.titre);
    if (s.intro) textes.add(s.intro);
    if (s.lecon) textes.add(s.lecon);

    for (const c of s.champs || []) {
        textes.add(c.libelle);
        if (c.unite) textes.add(c.unite);
    }
    for (const p of s.points || []) {
        textes.add(p.texte);
        if (p.aide) textes.add(p.aide);
    }

    // On exécute : les libellés de résultat vivent dans le corps de la fonction.
    if (s.calculer) {
        const essais = [{}, {}, {}];
        for (const c of s.champs || []) {
            essais[0][c.id] = c.defaut;
            essais[1][c.id] = c.min;
            essais[2][c.id] = c.max;
        }
        for (const jeu of essais) {
            for (const ligne of s.calculer(jeu)) {
                textes.add(ligne.libelle);
                if (typeof ligne.valeur === "string") valeurs.add(ligne.valeur);
            }
        }
    }
    if (s.verdict) {
        const total = (s.points || []).length;
        for (let n = 0; n <= total; n++) textes.add(s.verdict(n, total).texte);
    }
}

// Un texte est couvert s'il a une entrée exacte, OU si les fragments suffisent
// à n'y laisser aucun français — c'est le cas des libellés construits avec une
// valeur, « Décider (Hick) — 4 familles », qui ne peuvent pas figurer tels
// quels. Le critère est ce que VOIT le visiteur, pas la forme de l'entrée.
const fragmenter = (t) => {
    let sortie = t;
    for (const [fr, autre] of Object.entries(dico.fragments)) sortie = sortie.split(fr).join(autre);
    return sortie;
};
const resteDuFrancais = (t) =>
    /[àâçéèêëîïôûùüÿœ]/i.test(t) ||
    /\b(le|la|les|des|une|un|pour|dans|avec|vous|sur|par|est|sont|plus|moins|que|qui|ne|pas)\b/i.test(t);

const manquants = [...textes].filter((t) => t && !dico.textes[t] && resteDuFrancais(fragmenter(t)));

// Un mot français resté dans une valeur calculée, qu'aucun fragment ne reprend.
const restes = [];
for (const v of valeurs) {
    let sortie = v;
    for (const [fr, autre] of Object.entries(dico.fragments)) sortie = sortie.split(fr).join(autre);
    // Une lettre accentuée, ou un mot français courant, signale un oubli.
    if (/[àâçéèêëîïôûùüÿœ]/i.test(sortie) || /\b(sur|mots|éléments|exercices|moins|page|lecture)\b/.test(sortie)) {
        restes.push(`${v}  →  ${sortie}`);
    }
}

console.log(`sujet « ${SUJET} », langue « ${LANGUE} »`);
console.log(`  ${poses.size} simulateurs posés, ${textes.size} textes visibles, ${valeurs.size} valeurs distinctes`);
console.log(`  traduits : ${textes.size - manquants.length} / ${textes.size}`);

if (manquants.length) {
    console.log("\n  TEXTES NON TRADUITS :");
    for (const m of manquants) console.log(`    « ${m} »`);
}
if (restes.length) {
    console.log("\n  VALEURS AVEC DU FRANÇAIS RESTANT :");
    for (const r of restes) console.log(`    ${r}`);
}
if (!manquants.length && !restes.length) console.log("\n  Rien ne manque.");
process.exit(manquants.length || restes.length ? 1 : 0);
