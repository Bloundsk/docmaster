#!/usr/bin/env node
/* ---------------------------------------------------------------------------
 * La bonne réponse ne doit pas être devinable a sa PLACE.
 *
 * Mesure du 8 septembre 2026, avant correction : sur 2 532 questions, la bonne
 * reponse etait en troisieme position 12 fois — 0,5 %. Soixante-quatorze
 * banques sur quatre-vingt-quatre n en avaient aucune. Ecarter la troisieme
 * option puis prendre la plus longue des deux restantes donnait 86,4 % de
 * bonnes reponses SANS RIEN LIRE, contre 33,3 % au hasard.
 *
 * Personne ne l avait vu, et personne ne l aurait vu : chaque question, prise
 * seule, est irreprochable. Le defaut n existe qu a l echelle du fichier — ce
 * qui est exactement ce qu un controle sait voir et pas un relecteur.
 *
 * Ce controle refuse donc :
 *   - un desequilibre global (une position sous 25 % ou au-dessus de 42 %) ;
 *   - une banque ou une position tombe sous 15 % ou depasse 55 % ;
 *   - plus de cinq questions de suite dont la reponse est au meme endroit ;
 *   - un desaccord entre le francais et l anglais, qui doivent presenter la
 *     meme question dans le meme ordre.
 *
 * Les bornes sont larges a dessein : elles doivent attraper une derive, pas
 * imposer une repartition parfaite. Au moment de leur ecriture, la banque la
 * plus desequilibree etait a 26,7 % / 43,3 %, et la plus longue suite valait 4.
 * ------------------------------------------------------------------------- */

import fs from "node:fs";
import path from "node:path";
import url from "node:url";
import contenu from "./langues-contenu.js";
import vm from "node:vm";

const RACINE = path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), "..");
const DOSSIERS = [
    { langue: "fr", chemin: path.join(RACINE, "assets/js/quiz") },
    ...contenu.languesAvecQuiz(RACINE).map((code) => ({ langue: code, chemin: path.join(RACINE, "assets/js/quiz", code) }))
];

const MIN_GLOBAL = 0.25, MAX_GLOBAL = 0.42;
const MIN_BANQUE = 0.15, MAX_BANQUE = 0.55;
const SUITE_MAX = 5;

const anomalies = [];
const signaler = (m) => anomalies.push(m);

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

const global = [0, 0, 0];
let totalQuestions = 0;
const parLangue = {};

for (const { langue, chemin } of DOSSIERS) {
    parLangue[langue] = {};
    for (const nom of fs.readdirSync(chemin).filter((n) => n.endsWith(".js"))) {
        const questions = lireBanque(path.join(chemin, nom));
        parLangue[langue][nom] = questions;

        const compte = [0, 0, 0];
        for (const q of questions) {
            if (q.options.length !== 3) {
                signaler(`${langue}/${nom} § ${q.section} #${q.rang} : ${q.options.length} options, trois attendues`);
                continue;
            }
            compte[q.a]++;
            global[q.a]++;
            totalQuestions++;
        }

        for (let i = 0; i < 3; i++) {
            const part = compte[i] / questions.length;
            if (part < MIN_BANQUE || part > MAX_BANQUE) {
                signaler(`${langue}/${nom} : la position ${i + 1} porte ${compte[i]} réponses sur ${questions.length}`
                    + ` (${(100 * part).toFixed(0)} %), hors des bornes ${(100 * MIN_BANQUE).toFixed(0)}–${(100 * MAX_BANQUE).toFixed(0)} %`);
            }
        }

        let suite = 1, pire = 1, ou = "";
        for (let i = 1; i < questions.length; i++) {
            if (questions[i].a === questions[i - 1].a) {
                suite++;
                if (suite > pire) { pire = suite; ou = `${questions[i].section} #${questions[i].rang}`; }
            } else suite = 1;
        }
        if (pire > SUITE_MAX) {
            signaler(`${langue}/${nom} : ${pire} questions de suite ont leur réponse au même endroit (jusqu'à ${ou})`);
        }
    }
}

// Toutes les langues présentent la MÊME question dans le MÊME ordre : un lecteur
// qui bascule de drapeau ne doit pas retrouver la page réarrangée. Une banque
// est exigée pour chaque sujet annoncé traduit ; une banque d'un sujet en cours
// de traduction est contrôlée dès qu'elle existe.
for (const code of Object.keys(parLangue).filter((c) => c !== "fr")) {
    const attendues = contenu.banquesAttendues(RACINE, code);
    for (const nom of Object.keys(parLangue.fr)) {
        const fr = parLangue.fr[nom], autre = parLangue[code][nom];
        if (!autre) {
            if (attendues.has(nom)) signaler(`${code}/${nom} : banque absente`);
            continue;
        }
        if (fr.length !== autre.length) {
            signaler(`${nom} : ${fr.length} questions en français, ${autre.length} en « ${code} »`);
            continue;
        }
        for (let i = 0; i < fr.length; i++) {
            if (fr[i].a !== autre[i].a) {
                signaler(`${nom} § ${fr[i].section} #${fr[i].rang} : bonne réponse en position ${fr[i].a + 1} en français, ${autre[i].a + 1} en « ${code} »`);
            }
        }
    }
}

for (let i = 0; i < 3; i++) {
    const part = global[i] / totalQuestions;
    if (part < MIN_GLOBAL || part > MAX_GLOBAL) {
        signaler(`toutes banques : la position ${i + 1} porte ${(100 * part).toFixed(1)} % des réponses,`
            + ` hors des bornes ${(100 * MIN_GLOBAL).toFixed(0)}–${(100 * MAX_GLOBAL).toFixed(0)} %`);
    }
}

console.log(`=== PLACE DE LA BONNE RÉPONSE ===`);
console.log(`  ${totalQuestions} questions, ${Object.keys(parLangue.fr).length * 2} banques`);
console.log(`  positions : ${global.map((n, i) => `${i + 1}ᵉ ${(100 * n / totalQuestions).toFixed(1)} %`).join("   ")}`);

if (!anomalies.length) {
    console.log("\nAucune anomalie.");
    process.exit(0);
}
console.log(`\n[positions] ${anomalies.length} anomalie(s) :`);
for (const m of anomalies) console.log("  - " + m);
console.log("\n[positions] La correction ne se fait pas à la main : voir l'entrée de CHANGELOG");
console.log("[positions] du 8 septembre 2026, qui décrit le rééquilibrage et ses garde-fous.");
process.exit(1);
