#!/usr/bin/env node
/* ---------------------------------------------------------------------------
 * CLICKED — DONNER A VOIR CE QU IL Y A DERRIERE UNE LECON REPLIEE
 *
 * POURQUOI
 *
 * Mesure du 5 septembre 2026, sur guides/finance/debutant.html :
 *
 *   3 286 mots au total
 *     589 mots visibles sans rien ouvrir
 *   2 697 mots derriere les blocs replies, soit 82 %
 *
 * Et l usage confirme que ces 82 % restent fermes : 29 visiteurs sur cette page
 * en trente jours, 5 ouvertures de sa section la plus consultee. Un visiteur
 * qui lit ce qu il voit et repart a lu un cinquieme du guide — et rien ne lui
 * disait que le reste existait.
 *
 * Le repli lui-meme reste un bon choix : tout afficher redonne le mur de texte
 * qu il avait ecarte. Ce qui manquait, c est de quoi DECIDER d ouvrir.
 *
 * Deux ajouts, decides par Ludo :
 *   - la duree de lecture de la section, a cote de son titre ;
 *   - sa premiere phrase, en amorce sous le titre.
 *
 * L un dit ce que ca coute, l autre ce que ca rapporte.
 *
 * TOUT EST DANS LE <summary>, ET C EST OBLIGATOIRE
 *
 * Dans un <details> replie, le navigateur masque TOUS les enfants sauf le
 * <summary>. Une amorce placee a cote du corps serait donc invisible
 * exactement quand elle sert. Elle vit dans le summary, et disparait a
 * l ouverture — sinon la premiere phrase paraitrait deux fois.
 *
 * POURQUOI UN SCRIPT ET UN CONTROLE
 *
 * Une page ecrite plus tard sans amorce ne se signalerait pas : du contenu
 * invisible ne proteste jamais. C est le defaut meme qu on corrige ici.
 *
 *   node scripts/amorcer-lecons.js              ecrit
 *   node scripts/amorcer-lecons.js --verifier   ne touche a rien, sort en
 *                                               erreur si une page differe
 * ------------------------------------------------------------------------- */

const fs = require("fs");
const path = require("path");

const RACINE = path.join(__dirname, "..");
const verifierSeulement = process.argv.includes("--verifier");

/* Le debit de lecture retenu. Le depot en connaissait deja deux, et aucun ne
   convenait ici : 150 mots/minute dans publier-podcasts.js, mais c est un debit
   de PAROLE ; 250 dans pratique.js, « rythme de lecture courant sur ecran »,
   optimiste pour un cours qui contient des chiffres a verifier.
   180 est la valeur retenue pour de la prose explicative lue avec attention.

   A savoir : les durees ecrites a la main sur les sommaires de parcours
   (« environ 11 minutes ») n obeissent a aucune regle unique — elles impliquent
   entre 130 et 180 mots/minute selon le niveau. Elles n ont pas ete refaites
   ici ; c est un chantier a part, et le signaler vaut mieux que de creer en
   silence une troisieme convention. */
const MOTS_PAR_MINUTE = 180;

const AMORCE_MAX = 160;   // au-dela, ce n est plus une amorce mais un resume

// Les deux marques generees. Reconnaissables pour etre retirees avant d etre
// reecrites : le script repart toujours d une page propre.
const RE_DUREE = /\s*<span class="lecon-duree">[^<]*<\/span>/g;
/* On accepte les deux formes a l effacement : la premiere version generait un
   <p>, ce qui n est pas valide dans un <summary> — son contenu admis est du
   texte en ligne. Un analyseur qui referme le paragraphe fait SORTIR l amorce
   du summary, donc la cache une fois repliee : exactement l inverse du but. */
const RE_AMORCE = /\s*<(?:p|span) class="lecon-amorce">[\s\S]*?<\/(?:p|span)>/g;

const texteBrut = (html) =>
    html.replace(/<[^>]+>/g, " ")
        .replace(/&nbsp;/g, " ").replace(/&amp;/g, "&")
        .replace(/&#39;|&apos;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
        .replace(/\s+/g, " ").trim();

const echapper = (t) =>
    t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/* La premiere phrase du corps. On coupe a la ponctuation forte suivie d une
   majuscule, comme ailleurs dans le depot. Une phrase trop longue est coupee
   proprement a un espace, jamais au milieu d un mot. */
function premierePhrase(corps) {
    const premierP = corps.match(/<p[^>]*>([\s\S]*?)<\/p>/);
    if (!premierP) return null;

    const texte = texteBrut(premierP[1]);
    if (!texte) return null;

    const coupe = texte.split(/(?<=[.!?…])\s+(?=[A-ZÀ-ÞÉÈÊ«"])/)[0] || texte;
    if (coupe.length <= AMORCE_MAX) return coupe;

    const tronque = coupe.slice(0, AMORCE_MAX);
    return tronque.slice(0, tronque.lastIndexOf(" ")) + "…";
}

function conforme(html) {
    if (!html.includes('<details class="lecon"')) return null;

    // 1. On efface ce qui a ete genere auparavant.
    let voulu = html.replace(RE_DUREE, "").replace(RE_AMORCE, "");

    // 2. On reecrit lecon par lecon.
    const morceaux = voulu.split('<details class="lecon"');
    for (let i = 1; i < morceaux.length; i++) {
        const bloc = morceaux[i];

        const finSummary = bloc.indexOf("</summary>");
        const finDetails = bloc.indexOf("</details>");
        if (finSummary === -1 || finDetails === -1 || finSummary > finDetails) continue;

        const corps = bloc.slice(finSummary, finDetails);
        const mots = texteBrut(corps).split(" ").filter(Boolean).length;
        if (!mots) continue;

        const minutes = Math.max(1, Math.round(mots / MOTS_PAR_MINUTE));
        const duree = `<span class="lecon-duree">${minutes} min</span>`;

        const phrase = premierePhrase(corps);
        const amorce = phrase
            ? `\n                    <span class="lecon-amorce">${echapper(phrase)}</span>\n                `
            : "";

        // La duree se glisse apres le titre ; l amorce juste avant la fermeture
        // du summary. L etoile des favoris, ajoutee par favoris.js, arrive
        // apres — l ordre a l ecran est regle par la feuille de style.
        const finH3 = bloc.indexOf("</h3>");
        if (finH3 === -1 || finH3 > finSummary) continue;

        morceaux[i] = bloc.slice(0, finH3 + 5) + duree
                    + bloc.slice(finH3 + 5, finSummary) + amorce
                    + bloc.slice(finSummary);
    }

    return morceaux.join('<details class="lecon"');
}

function pagesDeNiveau() {
    const pages = [];
    for (const prefixe of ["", "en"]) {
        const guides = path.join(RACINE, prefixe, "guides");
        if (!fs.existsSync(guides)) continue;
        for (const sujet of fs.readdirSync(guides)) {
            const dossier = path.join(guides, sujet);
            if (!fs.statSync(dossier).isDirectory()) continue;
            for (const nom of fs.readdirSync(dossier)) {
                if (!nom.endsWith(".html") || nom === "index.html") continue;
                pages.push(path.join(prefixe, "guides", sujet, nom).replace(/\\/g, "/"));
            }
        }
    }
    return pages.sort();
}

const pages = pagesDeNiveau();
const differentes = [];
let lecons = 0;

for (const relatif of pages) {
    const complet = path.join(RACINE, relatif);
    const avant = fs.readFileSync(complet, "utf8");
    const apres = conforme(avant);
    if (apres === null) continue;

    lecons += (avant.match(/<details class="lecon"/g) || []).length;
    if (apres === avant) continue;

    differentes.push(relatif);
    if (!verifierSeulement) fs.writeFileSync(complet, apres);
}

if (verifierSeulement) {
    if (!differentes.length) {
        console.log(`Amorces et durées à jour : ${lecons} leçons sur ${pages.length} pages.`);
        process.exit(0);
    }
    console.error(`\n[leçons] ${differentes.length} page(s) dont les amorces ou les durées`);
    console.error("[leçons] ne correspondent plus au texte :");
    for (const f of differentes.slice(0, 10)) console.error(`  · ${f}`);
    if (differentes.length > 10) console.error(`  … et ${differentes.length - 10} autres`);
    console.error("[leçons] correction : node scripts/amorcer-lecons.js");
    process.exit(1);
}

if (!differentes.length) {
    console.log(`Rien à changer : ${lecons} leçons déjà à jour.`);
    process.exit(0);
}
console.log(`${differentes.length} page(s) mise(s) à jour, ${lecons} leçons.`);
