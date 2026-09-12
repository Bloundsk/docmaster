#!/usr/bin/env node
/* ---------------------------------------------------------------------------
 * LES RENVOIS VERS LE GLOSSAIRE
 *
 * Le glossaire compte 35 entrees, dont 30 sont reellement employees dans les
 * guides — et AUCUNE page n y renvoyait. Un lecteur qui butait sur « ancrage »
 * ou « prescription » n avait rien a cliquer : le glossaire existait, mais il
 * fallait le connaitre pour le trouver.
 *
 * CE QUE FAIT CE SCRIPT
 *   1. Il pose un ancrage stable sur chaque entree du glossaire, dans les deux
 *      langues : id="terme-<slug>" sur le bloc .glossary-item.
 *   2. Il enveloppe, dans chaque page de niveau, le PREMIER emploi de chaque
 *      terme du glossaire, et lui seul. Le deuxieme emploi n est pas un lien :
 *      un texte cousu de liens ne se lit plus.
 *
 * OU IL NE POSE RIEN, ET POURQUOI
 *   - dans le sommaire, l objectif, les blocs de questions et de reponses :
 *     ce sont des reperes, pas de la lecture suivie ;
 *   - dans les titres, le code, et a l interieur d un lien existant : un <a>
 *     dans un <a> n est pas du HTML valide ;
 *   - dans les titres d encadre (<span class="titre">) : ce sont des titres ;
 *   - sur la page qui EXPLIQUE le terme, quand un titre de section le porte :
 *     renvoyer au glossaire depuis la section qui en dit dix fois plus est un
 *     contresens.
 *
 * Comme tout ce qui est genere ici, le script a un mode --verifier : il refait
 * le travail en memoire et refuse si le depot ne correspond plus.
 * ------------------------------------------------------------------------- */

"use strict";
const fs = require("fs");
const path = require("path");

const RACINE = path.resolve(__dirname, "..");
const VERIFIER = process.argv.includes("--verifier");

const LANGUES = [
    { code: "fr", glossaire: "glossaire.html", guides: "guides" },
    { code: "en", glossaire: "en/glossaire.html", guides: "en/guides" },
    // Les pages hongroises gardent leurs ancres de section françaises ; leurs
    // renvois, eux, mènent au glossaire hongrois, qui a ses propres termes.
    { code: "hu", glossaire: "hu/glossaire.html", guides: "hu/guides" }
];

/* Un ancrage lisible et stable : les accents restent, comme partout ailleurs
   sur le site (#lépargne), et la parenthese explicative disparait. « ő » et
   « ű » sont hors de la plage à-ÿ : sans eux, « kétlépcsős » devenait
   « kétlépcs-s ». Aucun terme français ou anglais ne les porte. */
function slug(terme) {
    return "terme-" + terme
        .replace(/\s*\([^)]*\)/g, "")
        .trim()
        .toLowerCase()
        .replace(/['’]/g, "-")
        .replace(/[^a-z0-9à-ÿőű]+/gi, "-")
        .replace(/^-+|-+$/g, "");
}

// --- 1. Les entrées du glossaire, et leur ancrage --------------------------
function lireGlossaire(chemin) {
    const html = fs.readFileSync(path.join(RACINE, chemin), "utf8");
    const entrees = [];
    const motif = /<div class="glossary-item"([^>]*)>\s*<span class="cat">[^<]*<\/span>\s*<dt>([^<]+)<\/dt>/g;
    let m;
    while ((m = motif.exec(html))) entrees.push({ attributs: m[1], terme: m[2].trim(), debut: m.index });
    return { html, entrees };
}

function ancrerGlossaire(chemin) {
    const { html, entrees } = lireGlossaire(chemin);
    let sortie = html;
    // De la fin vers le début : les positions restent valables.
    for (const e of [...entrees].reverse()) {
        const id = slug(e.terme);
        const ouvrant = `<div class="glossary-item"${e.attributs}>`;
        const neuf = e.attributs.includes(" id=")
            ? `<div class="glossary-item"${e.attributs.replace(/ id="[^"]*"/, ` id="${id}"`)}>`
            : `<div class="glossary-item" id="${id}"${e.attributs}>`;
        sortie = sortie.slice(0, e.debut) + neuf + sortie.slice(e.debut + ouvrant.length);
    }
    return { sortie, entrees: entrees.map((e) => ({ terme: e.terme, id: slug(e.terme) })) };
}

// --- 2. Les zones d'une page où l'on a le droit d'écrire -------------------
/* On travaille sur le <main>, moins les blocs qui ne sont pas de la lecture
   suivie. Les bornes sont calculees sur le texte brut : pas d analyse DOM, mais
   des reperes que le depot ecrit lui-meme, et que le mode --verifier surveille. */
function zonesInterdites(html) {
    const zones = [];
    const bornes = [
        [/<div class="toc">/g, "</div>"],
        [/<div class="objectif">/g, "</div>"],
        [/<div class="recap-box[^"]*">/g, "</div>"]
    ];
    for (const [ouvre] of bornes) {
        ouvre.lastIndex = 0;
        let m;
        while ((m = ouvre.exec(html))) {
            // Le bloc se ferme au premier </div> qui rééquilibre l'ouverture.
            let profondeur = 1, i = m.index + m[0].length;
            while (profondeur > 0 && i < html.length) {
                const suivantOuvre = html.indexOf("<div", i);
                const suivantFerme = html.indexOf("</div>", i);
                if (suivantFerme === -1) break;
                if (suivantOuvre !== -1 && suivantOuvre < suivantFerme) { profondeur++; i = suivantOuvre + 4; }
                else { profondeur--; i = suivantFerme + 6; }
            }
            zones.push([m.index, i]);
        }
    }
    /* Les titres d encadre. Aucun ne contient de <span> imbrique (738 sur 738
       au 10 septembre 2026) : le premier </span> les ferme. */
    const titreEncadre = /<span class="titre">[\s\S]*?<\/span>/g;
    let t;
    while ((t = titreEncadre.exec(html))) zones.push([t.index, t.index + t[0].length]);
    return zones;
}

/* Les positions de texte libre : hors balise, hors <a>, hors <code>, hors
   titre. On parcourt le HTML une fois et on note les intervalles utilisables. */
function segmentsDeTexte(html, debut, fin) {
    const segments = [];
    let i = debut, dansBalise = false, interdit = 0, texteDebut = debut;
    const fermetures = [];
    const motif = /<\/?(a|code|h1|h2|h3|h4|summary|script|style)\b[^>]*>/gi;
    const marques = [];
    let m;
    motif.lastIndex = debut;
    while ((m = motif.exec(html)) && m.index < fin) {
        marques.push({ pos: m.index, longueur: m[0].length, fermante: m[0][1] === "/" });
    }
    let profondeur = 0, curseur = debut;
    for (const marque of marques) {
        if (profondeur === 0 && marque.pos > curseur) segments.push([curseur, marque.pos]);
        if (marque.fermante) profondeur = Math.max(0, profondeur - 1);
        else profondeur++;
        curseur = marque.pos + marque.longueur;
    }
    if (profondeur === 0 && curseur < fin) segments.push([curseur, fin]);
    return segments;
}

function poserRenvois(html, entrees, prefixe) {
    const debutMain = html.indexOf('<main id="main-content">');
    const finMain = html.indexOf("</main>", debutMain);
    if (debutMain === -1 || finMain === -1) return { html, poses: [] };

    const interdites = zonesInterdites(html.slice(debutMain, finMain)).map(([a, b]) => [a + debutMain, b + debutMain]);
    const dansZoneInterdite = (p) => interdites.some(([a, b]) => p >= a && p < b);

    /* Les titres de section de la page — jusqu'au h4, car c'est souvent à ce
       niveau qu'un terme reçoit sa définition : renvoyer au glossaire depuis
       la section qui définit le mot est un contresens. */
    const titres = (html.slice(debutMain, finMain).match(/<h[234][^>]*>[\s\S]*?<\/h[234]>/g) || [])
        .join(" ").toLowerCase();

    /* Les titres d encadre, a part. Un encadre EXPLIQUE un terme quand le terme
       ouvre son titre : « La mise en demeure, sans mystere ». Il ne fait que
       l EMPLOYER quand le terme vient apres : « Erreur frequente — ouvrir tard
       son PEA ». Mesure du 10 septembre 2026 : huit titres d encadre contiennent
       un terme du glossaire ; les deux qui l ouvrent sont des definitions, les
       six autres des pieges. Les compter tous comme des titres de section
       retirait le renvoi PEA de la page ou le lecteur en a besoin. */
    const titresEncadre = (html.slice(debutMain, finMain).match(/<span class="titre">[\s\S]*?<\/span>/g) || [])
        .map((t) => t.replace(/<[^>]+>/g, "").trim());

    const poses = [];
    let sortie = html;
    // Les termes les plus longs d'abord : « intérêt composé » avant « intérêt ».
    const ordre = [...entrees].sort((a, b) => b.terme.length - a.terme.length);

    for (const e of ordre) {
        const nu = e.terme.replace(/\s*\([^)]*\)/g, "").trim();
        if (nu.length < 2) continue;
        /* La page explique-t-elle déjà le terme ? Le titre ne le porte pas
           toujours à l'identique : « Le wireframing » contient « wireframing »,
           et non « wireframe ». On compare donc sur la racine, en tolérant les
           suffixes qu'une langue ajoute — mais avec des frontières de mot, sans
           quoi « DOM » se retrouverait dans « domaine ». */
        /* Frontière de mot : \w ne connaît que les lettres ASCII, et « á » y
           passait pour une frontière — « lábnyom » se posait dans « lábnyomát »
           et coupait le mot hongrois en deux. \p{L} connaît toutes les lettres. */
        const racine = nu.replace(/e$/i, "");
        const motifTitre = new RegExp("(?<![\\p{L}\\p{N}_-])" + racine.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
            + "(e|es|s|ing|ings|é|ée|és|ement)?(?![\\p{L}\\p{N}_-])", "iu");
        if (motifTitre.test(titres)) continue;      // la page l'explique déjà

        const ouvreLeTitre = new RegExp("^(?:(?:le|la|les|un|une|the|a|an)\\s+|l['’]\\s*)?"
            + racine.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
            + "(e|es|s|ing|ings|é|ée|és|ement)?(?![\\p{L}\\p{N}_-])", "iu");
        if (titresEncadre.some((t) => ouvreLeTitre.test(t))) continue;   // un encadré le définit

        const motif = new RegExp("(?<![\\p{L}\\p{N}_-])" + nu.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "(?![\\p{L}\\p{N}_-])", "iu");
        const dm = sortie.indexOf('<main id="main-content">');
        const fm = sortie.indexOf("</main>", dm);
        const segments = segmentsDeTexte(sortie, dm, fm);

        for (const [a, b] of segments) {
            if (dansZoneInterdite(a)) continue;
            const morceau = sortie.slice(a, b);
            const trouve = morceau.match(motif);
            if (!trouve) continue;
            const p = a + trouve.index;
            if (dansZoneInterdite(p)) continue;
            const lien = `<a class="renvoi-glossaire" href="${prefixe}glossaire.html#${e.id}">${trouve[0]}</a>`;
            sortie = sortie.slice(0, p) + lien + sortie.slice(p + trouve[0].length);
            poses.push({ terme: nu, id: e.id });
            break;
        }
    }
    return { html: sortie, poses };
}

/* Les renvois déjà posés sont retirés avant de refaire le travail : le script
   doit produire le même résultat qu'on le lance une fois ou dix. */
function retirerRenvois(html) {
    return html.replace(/<a class="renvoi-glossaire" href="[^"]*">([^<]*)<\/a>/g, "$1");
}

// --- Exécution --------------------------------------------------------------
let modifies = 0, identiques = 0, totalRenvois = 0;
const anomalies = [];

for (const langue of LANGUES) {
    const { sortie, entrees } = ancrerGlossaire(langue.glossaire);
    const cheminGlossaire = path.join(RACINE, langue.glossaire);
    const actuelGlossaire = fs.readFileSync(cheminGlossaire, "utf8");
    if (actuelGlossaire !== sortie) {
        if (VERIFIER) anomalies.push(`${langue.glossaire} : les ancrages ne correspondent plus`);
        else { fs.writeFileSync(cheminGlossaire, sortie, "utf8"); modifies++; }
    } else identiques++;

    const dossier = path.join(RACINE, langue.guides);
    for (const sujet of fs.readdirSync(dossier).filter((d) => fs.statSync(path.join(dossier, d)).isDirectory())) {
        for (const niveau of ["debutant", "intermediaire", "avance"]) {
            const chemin = path.join(dossier, sujet, niveau + ".html");
            if (!fs.existsSync(chemin)) continue;
            const actuel = fs.readFileSync(chemin, "utf8");
            const propre = retirerRenvois(actuel);
            const { html, poses } = poserRenvois(propre, entrees, "../../");
            totalRenvois += poses.length;
            if (html !== actuel) {
                if (VERIFIER) anomalies.push(`${langue.guides}/${sujet}/${niveau}.html : ${poses.length} renvoi(s) attendu(s)`);
                else { fs.writeFileSync(chemin, html, "utf8"); modifies++; }
            } else identiques++;
        }
    }
}

console.log(`Renvois vers le glossaire : ${totalRenvois} lien(s) sur ${LANGUES.length * 42} pages,`
    + ` ${modifies} fichier(s) ${VERIFIER ? "en écart" : "écrit(s)"}, ${identiques} déjà conforme(s).`);

if (VERIFIER && anomalies.length) {
    console.log(`\n[glossaire] ${anomalies.length} fichier(s) ne correspondent plus :`);
    for (const a of anomalies.slice(0, 12)) console.log("  - " + a);
    if (anomalies.length > 12) console.log(`  … et ${anomalies.length - 12} autre(s)`);
    console.log("\n[glossaire] correction : node scripts/poser-renvois-glossaire.js");
    process.exit(1);
}
