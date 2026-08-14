#!/usr/bin/env node
/* ---------------------------------------------------------------------------
 * Charge reellement les fichiers JS de donnees avant de les laisser partir.
 *
 * Pourquoi : une virgule oubliee dans assets/js/search-data.js rend le fichier
 * invalide. Le navigateur abandonne alors le script entier, et la recherche
 * disparait du site — de toutes les pages, pas seulement de celle qu on venait
 * de modifier. Rien ne le signale : la page s affiche normalement.
 *
 * Une simple lecture ne suffit pas a l attraper, il faut executer le fichier.
 * C est ce que fait ce script, dans un bac a sable ou window est un objet vide.
 *
 * Ce controle bloque le commit, contrairement a celui des dates. La difference
 * est assumee : une date figee est genante, un index de recherche invalide
 * casse une fonction du site pour tous les visiteurs.
 * ------------------------------------------------------------------------- */

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const RACINE = path.join(__dirname, "..");

// Les fichiers dont l invalidite coute cher, et ce qu on attend d eux une fois
// charges. Le controle de contenu compte autant que celui de la syntaxe : un
// fichier syntaxiquement correct mais vide passerait sans lui.
// Une declaration « const » au premier niveau ne se pose pas sur l objet
// global : apres execution, la valeur serait invisible depuis l exterieur.
// On ajoute donc une ligne au fichier charge, uniquement dans le bac a sable,
// pour recopier ce qu on veut lire sur window.
const SONDES = {
    "assets/js/search-data.js": ";window.__index = typeof searchIndex !== 'undefined' ? searchIndex : undefined;"
};

// Cles repetees dans un litteral d objet.
//
// JavaScript accepte { "a": 1, "a": 2 } sans broncher : la seconde ecrase la
// premiere, en silence. C est arrive une fois — un simulateur ecrit pour le
// guide Droit portait la meme cle qu un simulateur d Entrepreneuriat ecrit des
// semaines plus tot, et celui-ci a disparu de son cours en laissant un bloc a
// l ecran. Ni « node --check », ni l execution, ni l affichage ne le signalent :
// seule la lecture du texte source peut l attraper.
function clesEnDouble(source) {
    const vues = new Map();
    const doubles = [];
    // Les cles des simulateurs sont a huit espaces d indentation, entre
    // guillemets, suivies de deux-points et d une accolade.
    for (const m of source.matchAll(/^ {8}"([^"]+)":\s*\{/gm)) {
        const ligne = source.slice(0, m.index).split("\n").length;
        if (vues.has(m[1])) doubles.push(`« ${m[1]} » défini ligne ${vues.get(m[1])} puis ligne ${ligne}`);
        else vues.set(m[1], ligne);
    }
    return doubles;
}

const ATTENDUS = {
    "assets/js/search-data.js": (bac) => {
        const idx = bac.window.__index;
        if (!Array.isArray(idx) || idx.length === 0) return "index de recherche vide ou absent";
        for (const [i, e] of idx.entries()) {
            for (const champ of ["title", "description", "url", "keywords"]) {
                if (typeof e[champ] !== "string" || !e[champ].trim()) {
                    return `entree ${i} (« ${e.title || "?"} ») : champ « ${champ} » manquant`;
                }
            }
            const cible = path.join(RACINE, e.url.split("#")[0]);
            if (!fs.existsSync(cible)) return `entree ${i} : « ${e.url} » ne correspond a aucun fichier`;
        }
        return null;
    },
    "assets/js/pratique.js": (bac, fichier, source) => {
        const doubles = clesEnDouble(source);
        if (doubles.length) return doubles.join(" ; ");
        const s = bac.module.exports && bac.module.exports.SIMULATEURS;
        if (!s || Object.keys(s).length === 0) return "aucun simulateur exporte";
        for (const [nom, sim] of Object.entries(s)) {
            if (!sim.titre) return `${nom} : titre manquant`;
            if (sim.type === "controle") {
                if (!Array.isArray(sim.points) || !sim.points.length) return `${nom} : aucun point a cocher`;
                if (typeof sim.verdict !== "function") return `${nom} : verdict manquant`;
            } else {
                if (!Array.isArray(sim.champs) || !sim.champs.length) return `${nom} : aucun champ`;
                if (typeof sim.calculer !== "function") return `${nom} : calculer manquant`;
            }
        }
        return null;
    },
    "assets/js/parcours.js": (bac) => {
        const p = bac.window.DOCMASTER_PARCOURS;
        if (!p || typeof p !== "object") return "DOCMASTER_PARCOURS absent";
        for (const [sujet, def] of Object.entries(p)) {
            if (!def.titre) return `${sujet} : titre manquant`;
            if (!Array.isArray(def.niveaux)) return `${sujet} : niveaux n est pas une liste`;
            for (const n of def.niveaux) {
                const page = path.join(RACINE, "guides", sujet, n + ".html");
                if (!fs.existsSync(page)) return `${sujet}/${n} : page annoncee mais absente`;
            }
        }
        return null;
    }
};

// Les banques de questions se controlent toutes de la meme facon.
const controlerQuiz = (bac, fichier) => {
    const q = bac.window.QUIZ;
    if (!q || !q.sections) return "window.QUIZ.sections absent";
    const toutes = [...Object.values(q.sections).flat(), ...(q.synthese || [])];
    if (toutes.length === 0) return "aucune question";
    for (const [i, item] of toutes.entries()) {
        if (!item || typeof item.q !== "string" || !Array.isArray(item.options)) return `question ${i} malformee`;
        if (!Number.isInteger(item.a) || item.a < 0 || item.a >= item.options.length) {
            return `question ${i} : reponse hors bornes`;
        }
    }
    return null;
};

const fichiers = process.argv.slice(2).filter((f) => f.endsWith(".js"));
if (fichiers.length === 0) process.exit(0);

let echecs = 0;

for (const fichier of fichiers) {
    const chemin = path.join(RACINE, fichier);
    if (!fs.existsSync(chemin)) continue;

    const cle = fichier.replace(/\\/g, "/");
    const controle = ATTENDUS[cle]
        || (/^assets\/js\/quiz\//.test(cle) ? controlerQuiz : null);
    if (!controle) continue;

    const bac = { window: {}, document: undefined, module: { exports: {} } };
    vm.createContext(bac);

    // La source est passee aux controles : certains defauts — une cle repetee
    // dans un litteral d objet — ne survivent pas a l execution et ne se voient
    // que dans le texte.
    const source = fs.readFileSync(chemin, "utf8");

    let souci = null;
    try {
        vm.runInContext(source + (SONDES[cle] || ""), bac, { filename: fichier });
        souci = controle(bac, fichier, source);
    } catch (e) {
        souci = e.message;
    }

    if (souci) {
        console.error(`[js] ${fichier} : ${souci}`);
        echecs++;
    }
}

if (echecs > 0) {
    console.error(`[js] ${echecs} fichier(s) invalide(s) — commit interrompu.`);
    process.exit(1);
}

console.log(`[js] ${fichiers.length} fichier(s) verifie(s).`);
