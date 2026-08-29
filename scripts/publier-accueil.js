#!/usr/bin/env node
/* ---------------------------------------------------------------------------
 * CLICKED — LES NOUVEAUTES DE LA PAGE D ACCUEIL
 *
 * L accueil ne presente plus les quatorze parcours : ils ont leur page,
 * guides.html. Il montre ce qui a bouge — demande de Ludo le 29 aout 2026,
 * parce qu on ne savait pas ou trouver les guides et que l accueil ne disait
 * rien de neuf.
 *
 * POURQUOI CE BLOC EST GENERE, ET NON ECRIT A LA MAIN
 *
 * « Dernieres mises a jour » ecrit a la main devient faux au premier guide
 * modifie, et personne ne s en apercoit : la page reste plausible. C est
 * exactement le defaut que ce depot corrige partout — la donnee n est saisie
 * qu une fois, et ce qui en derive est produit.
 *
 * D ou viennent les deux listes :
 *   - les dates de mise a jour sont LUES DANS LES GUIDES eux-memes, la ou le
 *     lecteur les voit. scripts/dater-guides.js les y ecrit depuis la date du
 *     dernier commit. Deux sources donneraient deux verites.
 *   - les episodes viennent de podcasts/<parcours>.md et de podcasts/durees.json,
 *     comme la page des podcasts et le flux.
 *
 *   node scripts/publier-accueil.js              ecrit
 *   node scripts/publier-accueil.js --verifier   ne touche a rien, sort en
 *                                                erreur si l accueil ne
 *                                                correspond plus a sa source
 * ------------------------------------------------------------------------- */

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const RACINE = path.join(__dirname, "..");
const verifierSeulement = process.argv.includes("--verifier");

const MARQUE_DEBUT = "<!-- NOUVEAUTES:DEBUT -->";
const MARQUE_FIN = "<!-- NOUVEAUTES:FIN -->";

const NB_GUIDES = 5;     // au-dela, ce n est plus une nouveaute
const NB_EPISODES = 3;

const bac = { window: {} };
vm.createContext(bac);
vm.runInContext(fs.readFileSync(path.join(RACINE, "assets/js/parcours.js"), "utf8"), bac);
const PARCOURS = bac.window.DOCMASTER_PARCOURS;

const MOIS_FR = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet",
                 "août", "septembre", "octobre", "novembre", "décembre"];
const MOIS_EN = ["January", "February", "March", "April", "May", "June", "July",
                 "August", "September", "October", "November", "December"];

const NIVEAUX = {
    fr: { index: "Sommaire", debutant: "Débutant", intermediaire: "Intermédiaire", avance: "Avancé" },
    en: { index: "Overview", debutant: "Beginner", intermediaire: "Intermediate", avance: "Advanced" },
};

const LIBELLES = {
    fr: {
        guides: "🕒 Guides mis à jour récemment",
        episodes: "🎧 Derniers épisodes",
        tousGuides: "Tous les guides →",
        tousEpisodes: "Tous les épisodes →",
    },
    en: {
        guides: "🕒 Recently updated guides",
        episodes: "🎧 Latest episodes",
        tousGuides: "All guides →",
        tousEpisodes: "All episodes →",
    },
};

function echapper(t) {
    return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

/* La date affichee par le guide, relue telle quelle. On ne recalcule rien :
   si la page dit « 21 aout », c est cette date-la qui fait foi, sinon
   l accueil annoncerait une fraicheur que la page dement. */
function dateDuGuide(html, langue) {
    const motif = langue === "fr"
        ? /Dernière mise à jour\s*:\s*(\d{1,2})\s+([^\s<]+)\s+(\d{4})/
        : /Last updated:\s*(\d{1,2})\s+([^\s<]+)\s+(\d{4})/;
    const m = html.match(motif);
    if (!m) return null;
    const mois = (langue === "fr" ? MOIS_FR : MOIS_EN).indexOf(m[2]);
    if (mois === -1) return null;
    return new Date(Number(m[3]), mois, Number(m[1]));
}

function guidesRecents(langue) {
    const prefixe = langue === "fr" ? "" : "en";
    const dossier = path.join(RACINE, prefixe, "guides");
    const pages = [];

    for (const [sujet, meta] of Object.entries(PARCOURS)) {
        for (const page of ["index", ...meta.niveaux]) {
            const chemin = path.join(dossier, sujet, page + ".html");
            if (!fs.existsSync(chemin)) continue;
            const d = dateDuGuide(fs.readFileSync(chemin, "utf8"), langue);
            if (!d) continue;
            pages.push({
                sujet, page, date: d,
                titre: meta.titre,
                niveau: NIVEAUX[langue][page] || page,
                lien: "guides/" + sujet + "/" + page + ".html",
            });
        }
    }
    /* Du plus recent au plus ancien ; a date egale, l ordre des parcours, pour
       que deux executions donnent exactement le meme fichier. */
    pages.sort((a, b) => b.date - a.date || a.sujet.localeCompare(b.sujet)
                                          || a.page.localeCompare(b.page));
    return pages.slice(0, NB_GUIDES);
}

function episodesRecents() {
    const dossier = path.join(RACINE, "podcasts");
    if (!fs.existsSync(dossier)) return [];
    const fichierDurees = path.join(dossier, "durees.json");
    const durees = fs.existsSync(fichierDurees)
        ? JSON.parse(fs.readFileSync(fichierDurees, "utf8"))
        : {};

    const episodes = [];
    for (const f of fs.readdirSync(dossier)) {
        if (!f.endsWith(".md")) continue;
        const sujet = path.basename(f, ".md");
        if (!PARCOURS[sujet]) continue;                 // documentation, pas un episode
        if (!fs.existsSync(path.join(RACINE, "assets", "audio", sujet + ".mp3"))) continue;
        const brut = fs.readFileSync(path.join(dossier, f), "utf8");
        const entete = brut.match(/^---\r?\n([\s\S]*?)\r?\n---/);
        if (!entete) continue;
        const val = (clef) => (entete[1].match(new RegExp("^" + clef + "\\s*:\\s*(.+)$", "m")) || [])[1];
        episodes.push({
            sujet,
            titre: (val("titre") || "").trim(),
            publie: (val("publie") || "").trim(),
            parcours: PARCOURS[sujet].titre,
            secondes: durees[sujet],
        });
    }
    episodes.sort((a, b) => b.publie.localeCompare(a.publie) || a.sujet.localeCompare(b.sujet));
    return episodes.slice(0, NB_EPISODES);
}

function duree(s, langue) {
    if (!Number.isFinite(s)) return "";
    const m = Math.floor(s / 60);
    const r = Math.round(s % 60);
    const deux = String(r).padStart(2, "0");
    return langue === "fr" ? " · " + m + " min " + deux
                           : " · " + m + "m " + deux + "s";
}

function bloc(langue) {
    const L = LIBELLES[langue];
    const guides = guidesRecents(langue);

    /* Les episodes ne s annoncent que la ou la page des podcasts existe. Elle
       n existe qu en francais : sans cette condition, l accueil anglais
       renvoyait vers « podcasts.html » sous « en/ », c est-a-dire nulle part.
       L audit des liens l a vu, et il avait raison — pointer vers la version
       francaise aurait ete pire : ca ejecte le lecteur anglophone hors de sa
       langue, sans rien lui dire. */
    const prefixe = langue === "fr" ? "" : "en";
    const aUnePageDePodcasts = fs.existsSync(path.join(RACINE, prefixe, "podcasts.html"));
    const episodes = aUnePageDePodcasts ? episodesRecents() : [];
    const dateLocale = langue === "fr" ? "fr-FR" : "en-GB";
    let html = "";

    if (guides.length) {
        html += '        <section id="guides-recents">\n';
        html += "            <h2>" + L.guides + "</h2>\n";
        html += '            <ul class="actu-liste">\n';
        for (const g of guides) {
            const quand = g.date.toLocaleDateString(dateLocale, { day: "numeric", month: "long" });
            html += '                <li class="actu">\n';
            html += '                    <a class="actu-titre" href="' + g.lien + '">'
                 + echapper(g.titre) + " — " + echapper(g.niveau) + "</a>\n";
            html += '                    <p class="actu-source">' + echapper(quand) + "</p>\n";
            html += "                </li>\n";
        }
        html += "            </ul>\n";
        html += '            <p><a href="guides.html">' + L.tousGuides + "</a></p>\n";
        html += "        </section>\n";
    }

    if (episodes.length) {
        html += '        <section id="episodes-recents">\n';
        html += "            <h2>" + L.episodes + "</h2>\n";
        html += '            <ul class="actu-liste">\n';
        for (const e of episodes) {
            html += '                <li class="actu">\n';
            html += '                    <a class="actu-titre" href="podcasts.html">'
                 + echapper(e.titre) + "</a>\n";
            html += '                    <p class="actu-source">' + echapper(e.parcours)
                 + duree(e.secondes, langue) + "</p>\n";
            html += "                </li>\n";
        }
        html += "            </ul>\n";
        html += '            <p><a href="podcasts.html">' + L.tousEpisodes + "</a></p>\n";
        html += "        </section>\n";
    }

    return html;
}

function ecrire(chemin, langue) {
    const complet = path.join(RACINE, chemin);
    const avant = fs.readFileSync(complet, "utf8");
    const d = avant.indexOf(MARQUE_DEBUT);
    const f = avant.indexOf(MARQUE_FIN);
    if (d === -1 || f === -1) {
        console.error("  " + chemin + " : marqueurs NOUVEAUTES absents");
        return { erreur: true };
    }
    const apres = avant.slice(0, d + MARQUE_DEBUT.length) + "\n"
                + bloc(langue) + "        " + avant.slice(f);
    if (apres === avant) return { ecrit: null };
    if (!verifierSeulement) fs.writeFileSync(complet, apres);
    return { ecrit: chemin };
}

const pages = [["index.html", "fr"], ["en/index.html", "en"]];
const ecrits = [];
let erreurs = 0;
for (const paire of pages) {
    const r = ecrire(paire[0], paire[1]);
    if (r.erreur) erreurs++;
    else if (r.ecrit) ecrits.push(r.ecrit);
}
if (erreurs) process.exit(1);

console.log("Accueil : " + guidesRecents("fr").length + " guide(s) récent(s), "
            + episodesRecents().length + " épisode(s).");

if (!ecrits.length) {
    console.log("Accueil : rien à changer.");
    process.exit(0);
}
if (verifierSeulement) {
    console.error("\n[accueil] " + ecrits.join(", ")
                  + " ne correspond(ent) plus aux guides et aux podcasts.");
    console.error("[accueil] correction : node scripts/publier-accueil.js");
    process.exit(1);
}
console.log("Écrit : " + ecrits.join(", "));
