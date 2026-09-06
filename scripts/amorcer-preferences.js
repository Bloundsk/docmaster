#!/usr/bin/env node
/* ===========================================================================
   AMORCER LES PREFERENCES D'AFFICHAGE

   Ecrit, dans le <head> des 133 pages, le petit script qui applique le theme
   ET le confort de lecture AVANT le premier affichage.

   POURQUOI INLINE, ET POURQUOI DUPLIQUE 133 FOIS
   Un fichier externe imposerait un aller-retour reseau ; pendant ce temps la
   page serait deja peinte, et le visiteur verrait son texte s'afficher serre
   puis sauter a l'interligne qu'il a choisi. Le seul moyen d'eviter ce saut
   est d'executer le code avant la feuille de style, donc sur place.

   Le prix de ce choix, c'est 133 copies du meme bloc. D'ou ce script : il est
   la source unique, et son mode --verifier bloque des qu'une page diverge.
   C'est le meme motif que amorcer-lecons.js, publier-accueil.js et les autres
   generateurs du depot.

   Usage :
     node scripts/amorcer-preferences.js              ecrit
     node scripts/amorcer-preferences.js --verifier   controle, sort 1 si ecart
   =========================================================================== */

const fs = require("fs");
const path = require("path");

const RACINE = path.join(__dirname, "..");
const VERIFIER = process.argv.includes("--verifier");

/* Le bloc de reference. Sans accents, comme le reste des scripts inline du
   depot : ce fragment est recopie tel quel dans des fichiers dont l'encodage
   ne se relit pas facilement, et un accent casse s'y verrait mal. */
const BLOC = `    <script>
        /* Applique le theme et le confort de lecture AVANT le premier
           affichage, sans quoi la page apparaitrait dans le mauvais theme, et
           le texte s'afficherait serre avant de sauter a l'interligne choisi.

           Doit rester inline : un fichier externe imposerait un aller-retour
           reseau, pendant lequel la page serait deja peinte.

           Regle du site : le choix explicite du visiteur prime sur tout. En
           son absence on suit le reglage de son systeme QUAND IL EN EXISTE UN.
           C'est le cas du theme sombre ; ce ne l'est d'aucun reglage de
           confort, qu'aucun systeme d'exploitation n'expose. C'est justement
           ce qui oblige a les demander au visiteur.

           ECRIT PAR scripts/amorcer-preferences.js. Ne pas modifier a la main :
           le mode --verifier compare les 133 pages a cette source et bloque a
           la moindre divergence. */
        (function () {
            var racine = document.documentElement;

            var choix = null;
            try { choix = localStorage.getItem('theme'); } catch (e) {}

            var sombre = choix
                ? choix === 'dark'
                : !!(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);

            if (sombre) racine.classList.add('dark-mode');

            /* Les bornes sont recopiees de theme.js. Une valeur hors bornes
               vient d'un stockage abime ou d'une version future du site : on
               l'ignore plutot que de poser une classe CSS inexistante. */
            var bornes = { interligne: 2, espacement: 2, police: 1 };
            try {
                var confort = JSON.parse(localStorage.getItem('confort') || '{}');
                for (var clef in bornes) {
                    var valeur = parseInt(confort[clef], 10);
                    if (valeur >= 1 && valeur <= bornes[clef]) {
                        racine.classList.add('confort-' + clef + '-' + valeur);
                    }
                }
            } catch (e) {}
        })();
    </script>`;

/* Reconnait le bloc en place, quelle que soit sa version : on cherche le
   <script> du <head> qui contient « Applique le theme ». C'est volontairement
   large — un motif trop precis laisserait passer une page restee a l'ancienne
   version, qui est exactement ce que ce controle doit attraper. */
const MOTIF = /[ \t]*<script>\s*\/\* Applique le theme[\s\S]*?<\/script>/;

/* Ce fichier est AUSSI la source du bloc pour publier-podcasts.js, qui ecrit
   les pages de podcasts de zero et en avait sa propre copie. Deux copies, c'est
   deux versions le jour ou l'une bouge : c'est arrive des la premiere
   modification, et le controle des podcasts l'a signale immediatement. */
module.exports = { BLOC };

if (require.main !== module) return;

function pages(dossier, trouvees = []) {
    for (const entree of fs.readdirSync(dossier, { withFileTypes: true })) {
        if (entree.name === "node_modules" || entree.name === ".git") continue;
        const chemin = path.join(dossier, entree.name);
        if (entree.isDirectory()) pages(chemin, trouvees);
        else if (entree.name.endsWith(".html")) trouvees.push(chemin);
    }
    return trouvees;
}

const fichiers = pages(RACINE);
let touchees = 0;
const sansBloc = [];
const divergentes = [];

for (const fichier of fichiers) {
    const avant = fs.readFileSync(fichier, "utf8");
    const relatif = path.relative(RACINE, fichier).replace(/\\/g, "/");

    const trouve = avant.match(MOTIF);
    if (!trouve) {
        /* Une page sans bloc du tout : c'est le cas d'audit-geometrie.html,
           page d'outillage qui ne porte pas la mise en page du site. On la
           signale sans la modifier plutot que de lui greffer un theme. */
        sansBloc.push(relatif);
        continue;
    }

    if (trouve[0] === BLOC) continue;

    if (VERIFIER) {
        divergentes.push(relatif);
    } else {
        fs.writeFileSync(fichier, avant.replace(MOTIF, BLOC), "utf8");
        touchees++;
    }
}

if (VERIFIER) {
    if (divergentes.length) {
        console.error(
            `Le bloc de preferences diverge de sa source sur ${divergentes.length} page(s) :`);
        for (const p of divergentes.slice(0, 10)) console.error("  " + p);
        if (divergentes.length > 10) console.error(`  ... et ${divergentes.length - 10} autres`);
        console.error("Relancer : node scripts/amorcer-preferences.js");
        process.exit(1);
    }
    console.log(
        `Preferences d'affichage : ${fichiers.length - sansBloc.length} page(s) conformes.`);
} else {
    console.log(`Preferences d'affichage : ${touchees} page(s) mise(s) a jour, `
        + `${fichiers.length - sansBloc.length - touchees} deja conforme(s).`);
}

if (sansBloc.length) {
    console.log(`Sans bloc de preferences (non modifiees) : ${sansBloc.join(", ")}`);
}
