#!/usr/bin/env node
/* ===========================================================================
   POSER LE SELECTEUR DE NIVEAU

   Trois niveaux par parcours, c'est l'idee la plus originale du site — et elle
   etait invisible pendant qu'on lit.

   MESURE QUI A DECIDE DE CE SCRIPT (6 septembre 2026, sur le site en ligne) :
   sur guides/finance/debutant.html, page haute de 4 550 pixels, le SEUL lien
   permettant de changer de niveau se trouvait a 4 108 pixels — tout en bas.
   Quelqu'un qui trouve « debutant » trop simple devait faire defiler la page
   entiere, ou revenir au sommaire, pour s'en apercevoir.

   Le Cerveau a tous les niveaux (lecerveau.ca), seul site comparable a offrir
   le meme contenu a trois niveaux, place son selecteur en haut, en permanence.
   C'est ce que fait desormais Clicked : juste sous la banniere, sur les 112
   pages de guide, dans les deux langues.

   POURQUOI UN SCRIPT PLUTOT QUE DU JAVASCRIPT DE PAGE
   Le selecteur pourrait etre injecte au chargement, comme la barre de
   navigation. Mais il fait partie du CONTENU : c'est un choix de lecture, il
   doit exister dans le HTML servi, etre indexe, et fonctionner sans script.
   Le prix est la duplication ; le mode --verifier la rend sure.

   Usage :
     node scripts/poser-selecteur-niveau.js              ecrit
     node scripts/poser-selecteur-niveau.js --verifier   controle, sort 1 si ecart
   =========================================================================== */

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const RACINE = path.join(__dirname, "..");
const VERIFIER = process.argv.includes("--verifier");

const MARQUE_DEBUT = "<!-- SELECTEUR-NIVEAU:DEBUT -->";
const MARQUE_FIN = "<!-- SELECTEUR-NIVEAU:FIN -->";

const bac = { window: {} };
vm.createContext(bac);
vm.runInContext(fs.readFileSync(path.join(RACINE, "assets/js/parcours.js"), "utf8"), bac);
const PARCOURS = bac.window.DOCMASTER_PARCOURS;

const LIBELLES = {
    fr: {
        aria: "Niveau du guide",
        index: "Sommaire",
        debutant: "Débutant",
        intermediaire: "Intermédiaire",
        avance: "Avancé",
    },
    en: {
        aria: "Guide level",
        index: "Overview",
        debutant: "Beginner",
        intermediaire: "Intermediate",
        avance: "Advanced",
    },
};

/* Le sommaire figure dans le selecteur au meme titre que les trois niveaux :
   sans lui, on peut descendre dans un niveau mais pas remonter a la vue
   d'ensemble sans passer par le fil d'Ariane. */
function bloc(langue, meta, pageCourante) {
    const L = LIBELLES[langue];
    const pages = ["index", ...meta.niveaux];

    let html = "    " + MARQUE_DEBUT + "\n";
    html += '    <nav class="niveaux" aria-label="' + L.aria + '">\n';
    for (const page of pages) {
        const courant = page === pageCourante;
        html += '        <a href="' + page + '.html"'
             + (courant ? ' aria-current="page"' : "")
             + ">" + L[page] + "</a>\n";
    }
    html += "    </nav>\n";
    html += "    " + MARQUE_FIN;
    return html;
}

/* On pose le selecteur juste apres la banniere. Le fil d'Ariane dit OU l'on
   est ; le selecteur dit ou l'on peut aller — il vient donc apres, et sous le
   titre du niveau, pas au-dessus. */
const APRES_ENTETE = "</header>";

let ecrites = 0;
let conformes = 0;
const divergentes = [];
const sansAncrage = [];

for (const langue of ["fr", "en"]) {
    const base = path.join(RACINE, langue === "fr" ? "" : "en", "guides");
    for (const [sujet, meta] of Object.entries(PARCOURS)) {
        for (const page of ["index", ...meta.niveaux]) {
            const fichier = path.join(base, sujet, page + ".html");
            if (!fs.existsSync(fichier)) continue;

            const avant = fs.readFileSync(fichier, "utf8");
            const relatif = path.relative(RACINE, fichier).replace(/\\/g, "/");
            const voulu = bloc(langue, meta, page);

            let apres;
            const d = avant.indexOf(MARQUE_DEBUT);
            if (d !== -1) {
                const f = avant.indexOf(MARQUE_FIN);
                if (f === -1) { sansAncrage.push(relatif); continue; }
                apres = avant.slice(0, d - 4) + voulu + avant.slice(f + MARQUE_FIN.length);
            } else {
                const i = avant.indexOf(APRES_ENTETE);
                if (i === -1) { sansAncrage.push(relatif); continue; }
                const coupe = i + APRES_ENTETE.length;
                apres = avant.slice(0, coupe) + "\n\n" + voulu + avant.slice(coupe);
            }

            if (apres === avant) { conformes++; continue; }
            if (VERIFIER) divergentes.push(relatif);
            else { fs.writeFileSync(fichier, apres, "utf8"); ecrites++; }
        }
    }
}

if (sansAncrage.length) {
    console.error("Pas de </header> ou de marqueur de fin dans : " + sansAncrage.join(", "));
    process.exit(1);
}

if (VERIFIER) {
    if (divergentes.length) {
        console.error(`Le sélecteur de niveau diverge sur ${divergentes.length} page(s) :`);
        for (const p of divergentes.slice(0, 10)) console.error("  " + p);
        if (divergentes.length > 10) console.error(`  ... et ${divergentes.length - 10} autres`);
        console.error("Relancer : node scripts/poser-selecteur-niveau.js");
        process.exit(1);
    }
    console.log(`Sélecteur de niveau : ${conformes} page(s) conformes.`);
} else {
    console.log(`Sélecteur de niveau : ${ecrites} page(s) mise(s) à jour, `
        + `${conformes} déjà conforme(s).`);
}
