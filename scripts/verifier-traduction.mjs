// Extrait tous les textes visibles des simulateurs d'un sujet et vérifie que
// le dictionnaire d'une langue les couvre. Les valeurs calculées sont obtenues
// en EXÉCUTANT les simulateurs, seule façon de voir ce qui s'affichera.
import fs from "node:fs";
import path from "node:path";
import url from "node:url";
import vm from "node:vm";

// Déduite de l'emplacement du script : un chemin en dur mettrait le nom de
// compte de la machine de développement dans un dépôt public.
const RACINE = path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), "..");
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

/* Ce qu'aucun fragment n'a touché dans une valeur calculée. On applique les
   fragments en bornant chaque remplacement, puis on efface les zones bornées :
   ce qui subsiste est du texte d'origine, resté tel quel.

   Le mot U+0000 sert de borne parce qu'aucun texte du site ne peut le contenir. */
const BORNE = "\u0000";
const intouche = (t) => {
    let sortie = t;
    for (const [fr, autre] of fragmentsTries) {
        sortie = sortie.split(fr).join(BORNE + autre + BORNE);
    }
    sortie = sortie.replace(new RegExp(BORNE + "[^" + BORNE + "]*" + BORNE, "g"), " ");
    return sortie.match(/\p{L}{2,}/gu) || [];
};

/* Les mots qui s'écrivent pareil dans les deux langues. Une liste d'exceptions
   APPROUVÉES, et non une liste de mots français à chercher : en oublier une
   déclenche une fausse alerte, ce qui se corrige. L'inverse — oublier un mot
   français dans une liste de recherche — laisse passer le défaut en silence,
   et c'est exactement ce qui est arrivé à « heures », « jours » et « lignes ». */
const IDENTIQUES = new Set([
    "min", "minutes", "mm", "px", "em", "ms", "observations",
    // Unités de l'écologie : « 2 667 kg CO₂e », « 73,0 kWh », « 22 222 km ».
    // « CO » apparaît seul parce que le « ₂e » n'est pas une lettre latine.
    "kg", "CO", "kWh", "km", "GB", "MB", "W",
    // « 8 280 € net » : le mot s'écrit et se lit pareil dans les deux langues.
    "net",
]);

/* Le critère principal est STRUCTUREL, pas heuristique : un texte qui ne
   contient aucun chiffre est écrit tel quel dans le simulateur, donc il doit
   avoir une entrée exacte. Seuls les libellés construits avec une valeur —
   « Décider (Hick) — 4 familles » — ne peuvent pas en avoir, et eux seuls ont
   droit au repli par fragments.

   Cette règle remplace un critère qui reposait sur une liste de mots-outils
   français. Elle a immédiatement trouvé deux libellés que la liste laissait
   passer, dont un déjà en ligne : « Visiteurs par jour, tous groupes
   confondus » s'affichait « Visiteurs per day, tous groupes confondus », et
   le contrôle annonçait 157/157. Aucune liste de mots ne pouvait être
   complète ; la présence d'un chiffre, elle, se constate. */
const construitAvecUneValeur = (t) => /\d/.test(t);

/* Les deux mêmes filets que pour les valeurs, et pour la même raison : le
   premier cherche du français et ne voit que ce qu'on a pensé à y mettre ; le
   second constate ce qu'aucun fragment n'a touché. « Avec 0,2 % de frais »
   passait le premier — « de » et « frais » ne figuraient dans aucune liste de
   mots — et s'affichait « With 0.2 % de frais » sur la page anglaise pendant
   que ce contrôle annonçait 124/124. Il n'était visible qu'en ouvrant la page. */
const manquants = [...textes].filter((t) => {
    if (!t || dico.textes[t]) return false;
    if (!construitAvecUneValeur(t)) return true;
    const apres = fragmenter(t);
    if (apres === t || resteDuFrancais(apres)) return true;
    return intouche(t).filter((m) => !IDENTIQUES.has(m)).length > 0;
});

// Un mot français resté dans une valeur calculée, qu'aucun fragment ne reprend.
// La substitution passe par « fragmenter » et non par une seconde copie de la
// boucle : il y en avait deux, et corriger l'ordre dans l'une seulement a fait
// signaler pendant un moment un défaut qui n'existait pas.
const restes = [];
for (const v of valeurs) {
    if (dico.textes[v]) continue;   // entrée exacte : tr() la prend avant les fragments
    const sortie = fragmenter(v);
    // Deux filets. Le premier cherche du français ; il ne voit que ce qu'on a
    // pensé à y mettre. Le second constate ce qu'aucun fragment n'a touché : il
    // ne dépend d'aucune connaissance du français, seulement de la liste des
    // mots identiques dans les deux langues. C'est le second qui a trouvé
    // « 183 heures », « 26 jours » et « 46 000 lignes », affichés en français
    // sur cinq pages anglaises pendant que le premier annonçait « rien ne
    // manque ».
    const mots = intouche(v).filter((m) => !IDENTIQUES.has(m));
    if (resteDuFrancais(sortie) || mots.length) {
        const cause = mots.length ? `  (intouché : ${mots.join(", ")})` : "";
        restes.push(`${v}  →  ${sortie}${cause}`);
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
