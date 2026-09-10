#!/usr/bin/env node
/* ---------------------------------------------------------------------------
 * CLICKED — QUELLES LANGUES ONT DU CONTENU, ET OU
 *
 * Les scripts du depot listaient ["fr", "en"] en dur : une vingtaine d'entre
 * eux. Une troisieme langue aurait ete ignoree EN SILENCE par chacun — pages
 * non amorcees, dates figees, quiz jamais controles — sans qu'aucun ne proteste.
 *
 * La source est unique : les codes declares dans assets/js/langues.js,
 * confirmes par le disque. Le francais vit a la racine, les autres sous
 * « <code>/ ». Une langue declaree sans dossier n'a pas encore de contenu :
 * elle n'est pas renvoyee.
 *
 *   node scripts/langues-contenu.js --paires   « sujet code » par ligne, pour
 *                                              chaque sujet annonce traduit
 * ------------------------------------------------------------------------- */

"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

function declarees(racine) {
    const bac = {
        window: {},
        document: { documentElement: { setAttribute() {} } },
        navigator: { language: "fr" },
        localStorage: { getItem: () => null, setItem() {} },
        location: { pathname: "/" },
    };
    vm.createContext(bac);
    vm.runInContext(fs.readFileSync(path.join(racine, "assets/js/langues.js"), "utf8"), bac);
    return bac.window.DOCMASTER_LANGUES;
}

const estDossier = (p) => fs.existsSync(p) && fs.statSync(p).isDirectory();

// Les langues qui ont des pages de guides : « fr » d'abord, puis les autres.
function languesAvecGuides(racine) {
    const L = declarees(racine);
    return ["fr", ...L.CODES.filter((c) => c !== "fr" && estDossier(path.join(racine, c, "guides")))];
}

// Les memes, sous forme de prefixe de chemin : "" pour le francais.
function prefixesAvecGuides(racine) {
    return languesAvecGuides(racine).map((c) => (c === "fr" ? "" : c));
}

// Les langues qui ont au moins un dossier de pages, guides ou non.
function languesAvecPages(racine) {
    const L = declarees(racine);
    return ["fr", ...L.CODES.filter((c) => c !== "fr" && estDossier(path.join(racine, c)))];
}

// Les langues autres que le francais qui ont des banques de questions.
function languesAvecQuiz(racine) {
    const L = declarees(racine);
    return L.CODES.filter((c) => c !== "fr" && estDossier(path.join(racine, "assets/js/quiz", c)));
}

/* Les banques qu'une langue DOIT avoir : celles des sujets annonces traduits.
   Une banque presente au-dela est controlee aussi ; une banque absente d'un
   sujet non encore annonce ne l'est pas — c'est le cas d'un sujet en cours. */
function banquesAttendues(racine, code) {
    const L = declarees(racine);
    const bac = { window: {} };
    vm.createContext(bac);
    vm.runInContext(fs.readFileSync(path.join(racine, "assets/js/parcours.js"), "utf8"), bac);
    const PARCOURS = bac.window.DOCMASTER_PARCOURS;
    const attendues = new Set();
    for (const sujet of L.CONTENU_TRADUIT[code] || []) {
        for (const niveau of PARCOURS[sujet].niveaux) attendues.add(`${sujet}-${niveau}.js`);
    }
    return attendues;
}

// Chaque sujet annonce traduit, avec sa langue.
function pairesTraduites(racine) {
    const L = declarees(racine);
    const paires = [];
    for (const [code, sujets] of Object.entries(L.CONTENU_TRADUIT)) {
        for (const sujet of sujets) paires.push([sujet, code]);
    }
    return paires;
}

module.exports = {
    declarees, languesAvecGuides, prefixesAvecGuides, languesAvecPages,
    languesAvecQuiz, banquesAttendues, pairesTraduites,
};

if (require.main === module && process.argv.includes("--paires")) {
    for (const [sujet, code] of pairesTraduites(path.join(__dirname, ".."))) console.log(sujet + " " + code);
}
