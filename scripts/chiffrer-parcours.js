#!/usr/bin/env node
/* ===========================================================================
   CHIFFRER LES PARCOURS

   Ecrit, sur les 28 sommaires de parcours, la ligne qui annonce ce que coute
   chaque niveau : « N sections · environ M minutes de lecture · <prerequis> ».

   POURQUOI CE SCRIPT EXISTE
   Ces chiffres etaient saisis a la main, et ils avaient derive. Mesure du
   7 septembre 2026 sur le parcours Finance :

     niveau          annonce      corps des sections     page entiere
     debutant        11 min       11,0 min               14,1 min
     intermediaire   10 min        8,2 min               11,1 min
     avance          11 min        7,9 min               10,9 min

   Le niveau avance annoncait donc la meme duree que le debutant, pour un tiers
   de texte en moins. Un chiffre saisi a la main devient faux au premier
   paragraphe ajoute, et reste plausible : personne ne le verifie.

   CE QUI EST COMPTE, ET CE QUI NE L EST PAS
   Toute la page de niveau : introduction, points cles, sections, encadres,
   tableaux, ressources. A 180 mots par minute — la meme vitesse que les badges
   de duree des lecons, pour que les deux chiffres se repondent.

   Les quiz ne sont PAS comptes : leur duree depend du lecteur, pas du texte, et
   leur enonce vit dans un fichier JavaScript. D ou le mot « de lecture » dans la
   phrase : ce qui est annonce est ce qui est mesurable, et le lecteur sait que
   les questions viennent en plus.

   Le prerequis, lui, n est pas touche : c est une phrase d auteur, propre a
   chaque parcours et a chaque langue.

   Usage :
     node scripts/chiffrer-parcours.js              ecrit
     node scripts/chiffrer-parcours.js --verifier   controle, sort 1 si ecart
   =========================================================================== */

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const RACINE = path.join(__dirname, "..");
const VERIFIER = process.argv.includes("--verifier");
const MOTS_PAR_MINUTE = 180;

const bac = { window: {} };
vm.createContext(bac);
vm.runInContext(fs.readFileSync(path.join(RACINE, "assets/js/parcours.js"), "utf8"), bac);
const PARCOURS = bac.window.DOCMASTER_PARCOURS;

const MOTS = {
    fr: { section: (n) => n + (n > 1 ? " sections" : " section"),
          duree: (m) => "environ " + m + " minutes de lecture" },
    en: { section: (n) => n + (n > 1 ? " sections" : " section"),
          duree: (m) => "about " + m + " minutes of reading" },
};

/* Le texte reellement lu : le <main>, sans les scripts ni les balises. */
function motsDeLaPage(html) {
    const m = html.match(/<main[\s\S]*?<\/main>/);
    if (!m) return 0;
    return m[0]
        .replace(/<script[\s\S]*?<\/script>/g, " ")
        .replace(/<[^>]+>/g, " ")
        .replace(/\s+/g, " ")
        .trim()
        .split(" ")
        .filter(Boolean).length;
}

/* Les totaux par parcours, retenus au passage : ils servent aux cartes du
   catalogue, qui ne disaient jusqu ici ni le niveau ni la duree — quatorze
   cartes rigoureusement equivalentes, ou le lecteur choisissait sans critere. */
const TOTAUX = {};

let ecrits = 0, conformes = 0;
const divergents = [];

for (const langue of ["fr", "en"]) {
    const base = path.join(RACINE, langue === "fr" ? "" : "en", "guides");
    const L = MOTS[langue];

    for (const [sujet, meta] of Object.entries(PARCOURS)) {
        const sommaire = path.join(base, sujet, "index.html");
        if (!fs.existsSync(sommaire)) continue;

        const avant = fs.readFileSync(sommaire, "utf8");
        let apres = avant;
        let rang = 0;

        /* On remplace les deux premiers champs de chaque ligne, dans l ordre ou
           les niveaux apparaissent, et on garde le troisieme — le prerequis. */
        apres = apres.replace(/(class="etape-duree">)([^<]*)(<)/g, (tout, ouvre, ligne, ferme) => {
            const niveau = meta.niveaux[rang++];
            if (!niveau) return tout;

            const page = path.join(base, sujet, niveau + ".html");
            if (!fs.existsSync(page)) return tout;

            const html = fs.readFileSync(page, "utf8");
            const sections = (html.match(/<summary><h3/g) || []).length;
            const minutes = Math.round(motsDeLaPage(html) / MOTS_PAR_MINUTE);

            const cle = langue + ":" + sujet;
            TOTAUX[cle] = TOTAUX[cle] || { minutes: 0, niveaux: 0 };
            TOTAUX[cle].minutes += minutes;
            TOTAUX[cle].niveaux++;

            /* Le prerequis est ce qui suit le deuxieme separateur. S il manque,
               on n invente rien : la ligne garde ses deux champs. */
            const morceaux = ligne.split(" · ");
            const prerequis = morceaux.slice(2).join(" · ");

            const neuve = [L.section(sections), L.duree(minutes)]
                .concat(prerequis ? [prerequis] : []).join(" · ");
            return ouvre + neuve + ferme;
        });

        if (apres === avant) { conformes++; continue; }
        const relatif = path.relative(RACINE, sommaire).replace(/\\/g, "/");
        if (VERIFIER) divergents.push(relatif);
        else { fs.writeFileSync(sommaire, apres, "utf8"); ecrits++; }
    }
}

/* --- Les cartes du catalogue --------------------------------------------
   Une ligne de chiffres par carte : combien de niveaux, combien de minutes en
   tout, et ce qu il faut savoir avant d entrer. Elle est posee avant l appel a
   l action, et publier-accueil.js la reprend telle quelle sur l accueil, qui
   relit ces memes cartes. */
const CATALOGUE = {
    fr: { niveaux: (n) => n + " niveaux", total: (m) => "environ " + m + " min",
          sans: "sans prérequis", fichier: "guides.html", prefixe: "guides/" },
    en: { niveaux: (n) => n + " levels", total: (m) => "about " + m + " min",
          sans: "no prior knowledge", fichier: "en/guides.html", prefixe: "guides/" },
};

for (const langue of ["fr", "en"]) {
    const C = CATALOGUE[langue];
    const chemin = path.join(RACINE, C.fichier);
    if (!fs.existsSync(chemin)) continue;

    const avant = fs.readFileSync(chemin, "utf8");
    let apres = avant;

    /* On decoupe d abord en cartes, PUIS on traite chacune isolement.

       Une premiere version visait la carte par une seule expression partant de
       « <article> » : elle demarrait au premier article du document et avalait
       tout jusqu au lien cherche, fusionnant les quatorze cartes en une. Le
       fichier a du etre restaure. Une expression qui traverse un document
       entier pour trouver un repere lointain est presque toujours une erreur —
       on borne d abord, on cherche ensuite. */
    apres = apres.replace(/<article>[\s\S]*?<\/article>/g, (carte) => {
        const m = carte.match(/<a href="guides\/([a-z0-9-]+)\/index\.html"/);
        if (!m) return carte;

        const t = TOTAUX[langue + ":" + m[1]];
        if (!t) return carte;

        const ligne = '<p class="carte-chiffres">'
            + [C.niveaux(t.niveaux), C.total(t.minutes), C.sans].join(" · ")
            + "</p>";

        /* Retirer une ligne deja posee avant d en ecrire une : le script doit
           pouvoir se rejouer sans empiler. */
        const nette = carte.replace(/\s*<p class="carte-chiffres">[\s\S]*?<\/p>/, "");
        return nette.replace(/(\s*)(<a href="guides\/)/, (t2, espace, lien) =>
            espace + ligne + espace + lien);
    });

    if (apres === avant) { conformes++; continue; }
    if (VERIFIER) divergents.push(C.fichier);
    else { fs.writeFileSync(chemin, apres, "utf8"); ecrits++; }
}

if (VERIFIER) {
    if (divergents.length) {
        console.error(`Les chiffres annonces divergent du texte sur ${divergents.length} sommaire(s) :`);
        for (const p of divergents.slice(0, 10)) console.error("  " + p);
        console.error("Relancer : node scripts/chiffrer-parcours.js");
        process.exit(1);
    }
    console.log(`Chiffres des parcours : ${conformes} sommaire(s) conformes.`);
} else {
    console.log(`Chiffres des parcours : ${ecrits} sommaire(s) mis a jour, ${conformes} deja conforme(s).`);
}
