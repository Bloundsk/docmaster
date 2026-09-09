#!/usr/bin/env node
/* ---------------------------------------------------------------------------
 * La bonne réponse ne doit pas être devinable a sa LONGUEUR.
 *
 * Mesure du 8 septembre 2026, avant correction : « prendre la plus longue des
 * trois options » rapportait 81,1 % de bonnes reponses sur les 2 532 questions
 * du site, contre 33,3 % au hasard. La bonne reponse depassait le plus long
 * distracteur de 17 caracteres en mediane.
 *
 * La correction n a pas ampute les bonnes reponses — leur precision est leur
 * fonction. Elle a donne aux distracteurs le raisonnement de celui qui y croit :
 * « Un camembert » est devenu « Un camembert, qui montre bien le poids de
 * chacun ». Le distracteur gagne en longueur ET en plausibilite.
 *
 * Ce controle mesure ce que rapportent TROIS strategies aveugles — prendre la
 * plus longue, la mediane, la plus courte — et refuse qu une seule d entre
 * elles depasse nettement le hasard. Corriger la premiere sans regarder les
 * deux autres deplace le defaut au lieu de le supprimer : c est arrive une
 * fois, la mediane etait montee a 52 % sur dev-web.
 *
 * Bornes : 42 % sur l ensemble d une langue, 60 % sur une banque isolee — une
 * banque ne fait que trente questions, le bruit d echantillonnage y vaut a lui
 * seul une dizaine de points. Au moment de l ecriture, le pire chiffre global
 * valait 36,7 % et la pire banque 52,2 %.
 * ------------------------------------------------------------------------- */

import fs from "node:fs";
import path from "node:path";
import url from "node:url";
import vm from "node:vm";

const RACINE = path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), "..");
const DOSSIERS = [
    { langue: "fr", chemin: path.join(RACINE, "assets/js/quiz") },
    { langue: "en", chemin: path.join(RACINE, "assets/js/quiz/en") }
];

const MAX_GLOBAL = 0.42;
const MAX_BANQUE = 0.60;
const MAX_ECART_MEDIAN = 8;        // caractères, bonne réponse − plus long faux

const anomalies = [];
const lg = (t) => String(t).replace(/\s+/g, " ").trim().length;

/* Une stratégie renvoie les indices qu'elle retient. Un ex aequo ne se tranche
   pas : il rapporte 1/k, sinon on prête à la stratégie un discernement qu'elle
   n'a pas. */
function scores(questions) {
    const points = [0, 0, 0];
    for (const q of questions) {
        const L = q.options.map(lg);
        const max = Math.max(...L), min = Math.min(...L);
        const longues = L.map((x, i) => i).filter((i) => L[i] === max);
        const courtes = L.map((x, i) => i).filter((i) => L[i] === min);
        const milieu = L.map((x, i) => i).filter((i) => !longues.includes(i) && !courtes.includes(i));
        const medianes = milieu.length ? milieu : L.map((x, i) => i);
        if (longues.includes(q.a)) points[0] += 1 / longues.length;
        if (medianes.includes(q.a)) points[1] += 1 / medianes.length;
        if (courtes.includes(q.a)) points[2] += 1 / courtes.length;
    }
    return points.map((p) => p / questions.length);
}

const NOMS = ["prendre la plus longue", "prendre celle du milieu", "prendre la plus courte"];

function lireBanque(chemin) {
    const bac = { window: {} };
    vm.createContext(bac);
    vm.runInContext(fs.readFileSync(chemin, "utf8"), bac);
    const Q = bac.window.QUIZ;
    const lots = Object.entries(Q.sections || {});
    if (Q.synthese) lots.push(["synthèse", Q.synthese]);
    const questions = [];
    for (const [section, liste] of lots) {
        liste.forEach((q, rang) => questions.push({ section, rang, a: q.a, options: q.options }));
    }
    return questions;
}

console.log("=== LONGUEUR DES OPTIONS ===");
const toutes = [];

for (const { langue, chemin } of DOSSIERS) {
    const parLangue = [];
    for (const nom of fs.readdirSync(chemin).filter((n) => n.endsWith(".js"))) {
        const questions = lireBanque(path.join(chemin, nom));
        parLangue.push(...questions);
        const s = scores(questions);
        s.forEach((valeur, i) => {
            if (valeur > MAX_BANQUE) {
                anomalies.push(`${langue}/${nom} : « ${NOMS[i]} » rapporte ${(100 * valeur).toFixed(0)} %`
                    + ` sur cette banque, au-dessus de ${100 * MAX_BANQUE} %`);
            }
        });
    }
    toutes.push(...parLangue);

    const s = scores(parLangue);
    console.log(`  ${langue} : ${parLangue.length} questions — `
        + s.map((v, i) => `${NOMS[i]} ${(100 * v).toFixed(1)} %`).join(", "));
    s.forEach((valeur, i) => {
        if (valeur > MAX_GLOBAL) {
            anomalies.push(`${langue} : « ${NOMS[i]} » rapporte ${(100 * valeur).toFixed(1)} %`
                + ` sur l'ensemble, au-dessus de ${100 * MAX_GLOBAL} % (hasard : 33,3 %)`);
        }
    });
}

/* L'écart médian, en clair : de combien la bonne réponse dépasse-t-elle ?
   C'est la mesure qui a lancé ce travail — elle valait 17 caractères. */
const ecarts = toutes.map((q) => {
    const faux = q.options.filter((_, i) => i !== q.a).map(lg);
    return lg(q.options[q.a]) - Math.max(...faux);
}).sort((a, b) => a - b);
const median = ecarts[Math.floor(ecarts.length / 2)];
console.log(`  écart médian (bonne − plus long faux) : ${median} caractères`);
if (median > MAX_ECART_MEDIAN) {
    anomalies.push(`écart médian de ${median} caractères, au-dessus de ${MAX_ECART_MEDIAN}`);
}

if (!anomalies.length) {
    console.log("\nAucune anomalie.");
    process.exit(0);
}
console.log(`\n[longueur] ${anomalies.length} anomalie(s) :`);
for (const m of anomalies) console.log("  - " + m);
console.log("\n[longueur] La correction consiste à donner au distracteur la raison de celui");
console.log("[longueur] qui y croit — jamais à raccourcir la bonne réponse. Voir l'entrée de");
console.log("[longueur] CHANGELOG du 9 septembre 2026.");
process.exit(1);
