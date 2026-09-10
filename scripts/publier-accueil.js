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

/* Deux blocs se sont ajoutes le 6 septembre 2026, apres comparaison avec des
   sites comparables (Elements of AI, Cybermalveillance, Le Cerveau a tous les
   niveaux). Le constat : l accueil s adressait a quelqu un qui connait deja le
   site — il repondait a « qu est-ce qui a change ? » — alors qu au lancement
   presque tous les visiteurs arriveront pour la premiere fois et se demandent
   « qu est-ce que c est, et qu y a-t-il dedans ? ».

   PROMESSE : la phrase qui dit ce qu est le site, les chiffres qui disent sa
   taille, et UN bouton. Les concurrents annoncent tous leur taille en premier ;
   l accueil n en donnait aucun chiffre.

   PARCOURS : les quatorze cartes etaient revenues sur l accueil le 6 septembre.
   Ludo les en a retirees le 10 septembre 2026 : l accueil garde le bouton qui
   mene aux parcours et met en tete ce qui a ete mis a jour. Les cartes vivent
   sur guides.html et nulle part ailleurs. ecrire() refuse leur retour : elles
   etaient deja revenues une fois contre une consigne ecrite. */
const BLOCS = [
    ["<!-- PROMESSE:DEBUT -->", "<!-- PROMESSE:FIN -->", blocPromesse, "    "],
    [MARQUE_DEBUT, MARQUE_FIN, blocNouveautes, "        "],
];

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

/* Les chiffres annonces sur l accueil sont COMPTES, jamais saisis. Un nombre
   ecrit a la main devient faux au premier ajout et reste plausible : personne
   ne le verifie. Les lecons sont comptees par langue — il y en a 169 de chaque
   cote, et annoncer 338 sur une page francaise serait un mensonge par addition. */
function chiffres(langue) {
    const dossier = path.join(RACINE, langue === "fr" ? "" : "en", "guides");
    let lecons = 0;
    let niveaux = 0;
    for (const [sujet, meta] of Object.entries(PARCOURS)) {
        for (const page of meta.niveaux) {
            const chemin = path.join(dossier, sujet, page + ".html");
            if (!fs.existsSync(chemin)) continue;
            niveaux++;
            lecons += (fs.readFileSync(chemin, "utf8").match(/<summary><h3/g) || []).length;
        }
    }

    /* Les banques de questions sont communes aux deux langues : le total ne
       depend donc pas de la langue affichee. */
    let questions = 0;
    const dossierQuiz = path.join(RACINE, "assets/js/quiz");
    for (const f of fs.readdirSync(dossierQuiz)) {
        if (!f.endsWith(".js")) continue;
        const q = fs.readFileSync(path.join(dossierQuiz, f), "utf8").match(/^\s*q:/gm);
        questions += q ? q.length : 0;
    }

    const episodes = fs.readdirSync(path.join(RACINE, "podcasts"))
        .filter((f) => f.endsWith(".md") && PARCOURS[path.basename(f, ".md")]).length;

    return { parcours: Object.keys(PARCOURS).length, niveaux, lecons, questions, episodes };
}

/* Les milliers separes par une espace insecable fine, comme partout en
   francais : « 1 266 » et non « 1266 ». */
const nombre = (n, langue) => n.toLocaleString(langue === "fr" ? "fr-FR" : "en-GB");

const LIBELLES = {
    fr: {
        promesse: (n) => n.parcours + " parcours, trois niveaux chacun — du premier pas "
                       + "jusqu'aux détails qui comptent.",
        gratuit: "Gratuit, sans compte, sans publicité et sans cookie.",
        chiffres: (n, l) => [nombre(n.niveaux, l) + " guides",
                             nombre(n.lecons, l) + " leçons",
                             nombre(n.questions, l) + " questions",
                             nombre(n.episodes, l) + " épisodes audio"].join(" · "),
        bouton: "Parcourir les quatorze parcours →",
        guides: "🕒 Guides mis à jour récemment",
        episodes: "🎧 Derniers épisodes",
        tousGuides: "Tous les guides →",
        tousEpisodes: "Tous les épisodes →",
    },
    en: {
        promesse: (n) => n.parcours + " learning paths, three levels each — from the first "
                       + "step to the details that matter.",
        gratuit: "Free, no account, no ads, no cookies.",
        chiffres: (n, l) => [nombre(n.niveaux, l) + " guides",
                             nombre(n.lecons, l) + " lessons",
                             nombre(n.questions, l) + " questions",
                             nombre(n.episodes, l) + " audio episodes"].join(" · "),
        bouton: "Browse the fourteen paths →",
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

/* La promesse : ce que le site est, sa taille, et un seul bouton. Un visiteur
   qui arrive ne sait pas ce qu il cherche — la barre de recherche, seule, lui
   demandait de le savoir deja. */
function blocPromesse(langue) {
    const L = LIBELLES[langue];
    const n = chiffres(langue);
    let html = "";
    html += "        <p>" + L.promesse(n) + "</p>\n";
    html += '        <p class="hero-gratuit">' + L.gratuit + "</p>\n";
    html += '        <p class="hero-chiffres">' + L.chiffres(n, langue) + "</p>\n";
    html += '        <p><a class="hero-bouton" href="guides.html">' + L.bouton + "</a></p>\n";
    return html;
}

function blocNouveautes(langue) {
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
    let texte = avant;

    /* Les cartes de parcours ne reviennent pas sur l accueil : decision de Ludo
       du 10 septembre 2026. Elles vivent sur guides.html. */
    if (avant.includes('<section id="categories">') || avant.includes("PARCOURS:DEBUT")) {
        console.error("  " + chemin + " : les cartes de parcours sont revenues sur l'accueil."
                    + " Elles vivent sur guides.html (décision du 10 septembre 2026).");
        return { erreur: true };
    }

    for (const [marqueDebut, marqueFin, produire, retrait] of BLOCS) {
        const d = texte.indexOf(marqueDebut);
        const f = texte.indexOf(marqueFin);
        if (d === -1 || f === -1) {
            console.error("  " + chemin + " : marqueurs " + marqueDebut + " absents");
            return { erreur: true };
        }
        texte = texte.slice(0, d + marqueDebut.length) + "\n"
              + produire(langue) + retrait + texte.slice(f);
    }

    if (texte === avant) return { ecrit: null };
    if (!verifierSeulement) fs.writeFileSync(complet, texte);
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
