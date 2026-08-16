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
// Du plus long au plus court, exactement comme pratique.js. Ce contrôle doit
// reproduire le rendu à l'identique : s'il applique les fragments dans un autre
// ordre, il signale des défauts qui n'existent pas — ou pire, en manque.
const fragmentsTries = Object.entries(dico.fragments).sort((a, b) => b[0].length - a[0].length);
const fragmenter = (t) => {
    let sortie = t;
    for (const [fr, autre] of fragmentsTries) sortie = sortie.split(fr).join(autre);
    return sortie;
};
const resteDuFrancais = (t) =>
    /[àâçéèêëîïôûùüÿœ]/i.test(t) ||
    /\b(le|la|les|des|une|un|pour|dans|avec|vous|sur|par|est|sont|plus|moins|que|qui|ne|pas)\b/i.test(t);

/* Un texte est couvert s'il a une entrée exacte, OU si les fragments l'ont
   RÉELLEMENT transformé et n'y laissent plus de français.

   La condition « transformé » est indispensable. Sans elle, « Largeur » ou
   « Zone d'accord » passaient pour traduits : aucun fragment ne les touche,
   et l'heuristique du français ne voyait ni accent ni mot-outil. Le contrôle
   annonçait 148/148 pendant que la page affichait ces deux libellés en
   français — un contrôle qui ment est pire qu'une absence de contrôle. */
const manquants = [...textes].filter((t) => {
    if (!t || dico.textes[t]) return false;
    const apres = fragmenter(t);
    return apres === t || resteDuFrancais(apres);
});

// Un mot français resté dans une valeur calculée, qu'aucun fragment ne reprend.
// La substitution passe par « fragmenter » et non par une seconde copie de la
// boucle : il y en avait deux, et corriger l'ordre dans l'une seulement a fait
// signaler pendant un moment un défaut qui n'existait pas.
const restes = [];
for (const v of valeurs) {
    const sortie = fragmenter(v);
    // « resteDuFrancais » et non une seconde liste de mots : il y en avait une
    // ici, plus étroite, qui ne connaissait ni « des » ni « du ». « 2,5 % des
    // tests » et « 87 % du temps » sont donc restés en français sur le site
    // pendant que le contrôle annonçait « rien ne manque ».
    if (resteDuFrancais(sortie)) {
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
