// ===================================
// CLICKED - PUBLICATION DES PODCASTS
// ===================================
//
// Un episode par parcours. Ecrit la page podcasts.html et le flux podcast.xml
// a partir de podcasts/<sujet>.md, de assets/js/parcours.js et de
// assets/js/identite.js.
//
// TROIS CHOSES QUE CE SCRIPT NE FAIT PAS, ET POURQUOI
//
// 1. Il n invente aucun titre de parcours ni aucune adresse : ils viennent des
//    memes sources uniques que le reste du site. Un episode dont le dossier
//    n existe pas dans parcours.js est signale, pas devine.
//
// 2. Il ne met dans le FLUX que les episodes dont l audio existe reellement
//    sur le disque. Un podcast sans fichier audio n est pas un episode : une
//    application de podcast qui recoit une <enclosure> vide affiche une erreur
//    a l auditeur. Le texte, lui, parait des qu il est ecrit.
//
// 3. Il ne calcule pas la duree depuis l audio. Tant que le fichier n existe
//    pas, la duree est estimee depuis le nombre de mots — et annoncee comme
//    une estimation. Un chiffre faux presente comme exact vaut moins qu un
//    ordre de grandeur annonce comme tel.
//
//   node scripts/publier-podcasts.js
//   node scripts/publier-podcasts.js --verifier   ne touche a rien, sort en
//                                                 erreur si les pages ont derive

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const RACINE = path.join(__dirname, "..");
const DOSSIER = path.join(RACINE, "podcasts");
const AUDIO = path.join(RACINE, "assets", "audio");
const verifierSeulement = process.argv.includes("--verifier");

// Debit de lecture retenu pour l estimation. 150 mots par minute est la valeur
// courante d une lecture posee en francais ; un debit de journal radio monte a
// 180, une lecture pedagogique descend a 140.
const MOTS_PAR_MINUTE = 150;

// --- Les sources uniques ----------------------------------------------------
const bac = { window: {} };
vm.createContext(bac);
for (const f of ["identite.js", "parcours.js"]) {
    vm.runInContext(fs.readFileSync(path.join(RACINE, "assets/js", f), "utf8"), bac, { filename: f });
}
const ID = bac.window.DOCMASTER_IDENTITE;
const PARCOURS = bac.window.DOCMASTER_PARCOURS;

/* Le texte alternatif de l image de partage est ecrit ici EXACTEMENT comme
   appliquer-identite.js l ecrirait. Sans cela, les deux scripts se defont
   mutuellement : celui-ci laissait le champ vide, l autre le remplissait, et
   chaque execution invalidait la precedente. Deux generateurs sur un meme
   fichier doivent produire la meme chose, ou l un des deux doit s abstenir. */
const echapper = (t) =>
    String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// « 2026-08-22 » -> « 22 août 2026 ». Le reste du site date en toutes lettres ;
// une date ISO au milieu d une page en francais se lit comme une donnee brute
// oubliee là.
const MOIS = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet",
              "août", "septembre", "octobre", "novembre", "décembre"];
function enFrancais(iso) {
    const [a, m, j] = (iso || "").split("-").map(Number);
    if (!a || !m || !j) return iso;
    return `${j} ${MOIS[m - 1]} ${a}`;
}

// L emoji ouvre le titre de chaque parcours. Il decore une page ; dans un flux
// RSS lu par une application de podcast, il devient du bruit.
const sansEmoji = (t) =>
    t.replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{2190}-\u{21FF}️]/gu, "").trim();

// --- Lecture d un episode ---------------------------------------------------
//
// En-tete « clef: valeur » entre deux lignes de tirets, puis le texte lu. Les
// deux vivent dans le meme fichier : un episode est une unite, et separer son
// titre de son texte creerait deux endroits a tenir d accord.
function lireEpisode(fichier) {
    const brut = fs.readFileSync(path.join(DOSSIER, fichier), "utf8");
    const sujet = fichier.replace(/\.md$/, "");

    const bornes = brut.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
    if (!bornes) return { sujet, erreur: "en-tête absent ou mal formé" };

    const entete = {};
    for (const ligne of bornes[1].split(/\r?\n/)) {
        const m = ligne.match(/^([a-z]+)\s*:\s*(.*)$/);
        if (m) entete[m[1]] = m[2].trim();
    }
    for (const clef of ["titre", "resume", "publie"]) {
        if (!entete[clef]) return { sujet, erreur: `« ${clef} » manquant dans l'en-tête` };
    }
    if (!PARCOURS[sujet]) return { sujet, erreur: "aucun parcours de ce nom dans parcours.js" };

    // Le texte lu, sans le bloc de consignes en italique ni les titres de
    // partie : ce qui sera reellement prononce.
    const corps = bornes[2];
    const prononce = corps.replace(/^\s*\*[\s\S]*?\*\s*$/m, "").replace(/^#+ .*$/gm, "");
    const mots = prononce.split(/\s+/).filter(Boolean).length;

    const fichierAudio = `${sujet}.mp3`;
    const cheminAudio = path.join(AUDIO, fichierAudio);
    const audio = fs.existsSync(cheminAudio);

    return {
        sujet,
        titre: entete.titre,
        resume: entete.resume,
        publie: entete.publie,
        parcours: PARCOURS[sujet].titre,
        corps,
        mots,
        minutes: Math.max(1, Math.round(mots / MOTS_PAR_MINUTE)),
        audio,
        fichierAudio,
        octets: audio ? fs.statSync(cheminAudio).size : 0,
    };
}

function lireEpisodes() {
    if (!fs.existsSync(DOSSIER)) return [];
    return fs.readdirSync(DOSSIER)
        .filter((f) => f.endsWith(".md"))
        .map(lireEpisode)
        .sort((a, b) => (b.publie || "").localeCompare(a.publie || ""));
}

// --- Le texte lu, en HTML ---------------------------------------------------
//
// Conversion volontairement minimale : ces fichiers ne contiennent que des
// titres, des paragraphes, de l italique et du gras. Tirer une bibliotheque
// Markdown pour cela ajouterait la premiere dependance d un site qui n en a
// aucune.
function enHTML(markdown) {
    const blocs = markdown.trim().split(/\r?\n\r?\n+/);
    let html = "";
    for (const bloc of blocs) {
        const t = bloc.trim();
        if (!t) continue;
        if (t.startsWith("## ")) {
            html += `                <h4>${echapper(t.slice(3))}</h4>\n`;
            continue;
        }
        const texte = echapper(t.replace(/\r?\n/g, " "))
            .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
            .replace(/\*(.+?)\*/g, "<em>$1</em>");
        html += `                <p>${texte}</p>\n`;
    }
    return html;
}

// --- La page ----------------------------------------------------------------
function rendreEpisode(e) {
    const lien = `guides/${e.sujet}/index.html`;
    const ecoute = e.audio
        ? `                <audio controls preload="none" src="assets/audio/${e.fichierAudio}"></audio>\n`
        : `                <p class="podcast-attente">🎧 <strong>L'audio n'est pas encore enregistré.</strong> Le texte ci-dessous est celui de l'épisode, il se lit dès maintenant.</p>\n`;

    return `            <article class="podcast" id="${e.sujet}">
                <h3>${echapper(sansEmoji(e.parcours))} — ${echapper(e.titre)}</h3>
                <p class="podcast-duree">${e.audio ? "" : "environ "}${e.minutes} minutes · ${echapper(enFrancais(e.publie))}</p>
                <p>${echapper(e.resume)}</p>
${ecoute}                <p><a href="${lien}">Ouvrir le parcours ${echapper(sansEmoji(e.parcours))} →</a></p>
                <details class="podcast-texte">
                    <summary>Lire le texte de l'épisode</summary>
${enHTML(e.corps)}                </details>
            </article>
`;
}

function rendrePage(episodes) {
    const avecAudio = episodes.filter((e) => e.audio).length;
    const intro = avecAudio
        ? `<p>Un épisode par parcours. Ils s'écoutent ici, ou dans n'importe quelle application de podcast avec <a href="podcast.xml">le flux</a>.</p>`
        : `<p>Un épisode par parcours, en cours d'enregistrement. Les textes sont déjà là et se lisent.</p>`;

    return `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=0.25, maximum-scale=5.0, user-scalable=yes">
    <title>Podcasts - ${ID.nom}</title>
    <meta name="description" content="Un épisode par parcours : l'essentiel d'un sujet en quelques minutes, à écouter ou à lire.">
    <link rel="icon" type="image/svg+xml" href="assets/img/favicon.svg">
    <link rel="alternate" type="application/rss+xml" title="Podcasts ${ID.nom}" href="podcast.xml">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@400;500&display=swap" rel="stylesheet">
    <script>
        /* Applique le theme AVANT le premier affichage, sans quoi la page
           apparaitrait dans le mauvais theme une fraction de seconde avant de
           basculer. Doit rester inline : un fichier externe imposerait un
           aller-retour reseau, pendant lequel la page serait deja peinte.

           Regle : le choix explicite du visiteur, fait via le bouton, prime
           sur tout. En son absence, on suit le reglage de son systeme. */
        (function () {
            var choix = null;
            try { choix = localStorage.getItem('theme'); } catch (e) {}

            var sombre = choix
                ? choix === 'dark'
                : !!(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);

            if (sombre) document.documentElement.classList.add('dark-mode');
        })();
    </script>
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="canonical" href="${ID.base}podcasts.html">
    <meta property="og:site_name" content="${ID.nom}">
    <meta property="og:title" content="Podcasts - ${ID.nom}">
    <meta property="og:description" content="Un épisode par parcours : l'essentiel d'un sujet en quelques minutes, à écouter ou à lire.">
    <meta property="og:type" content="website">
    <meta property="og:url" content="${ID.base}podcasts.html">
    <meta property="og:image" content="${ID.base}${ID.imagePartage}">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:alt" content="${echapper(ID.textePartage(Object.keys(PARCOURS).length).fr)}">
    <meta property="og:locale" content="fr_FR">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Podcasts - ${ID.nom}">
    <meta name="twitter:description" content="Un épisode par parcours : l'essentiel d'un sujet en quelques minutes, à écouter ou à lire.">
    <meta name="twitter:image" content="${ID.base}${ID.imagePartage}">
</head>
<body>
    <script>window.DOCMASTER_BASE = "";</script>
    <script src="assets/js/identite.js"></script>
    <script src="assets/js/langues.js"></script>
    <script src="assets/js/layout.js"></script>

    <nav class="breadcrumb" aria-label="Fil d'Ariane">
        <a href="index.html">Accueil</a> &gt; <span aria-current="page">Podcasts</span>
    </nav>

    <header>
        <h1>🎧 Podcasts</h1>
        <p>L'essentiel d'un parcours en quelques minutes, à écouter ou à lire.</p>
    </header>

    <main id="main-content">
        <section>
            <h2 id="episodes">Les épisodes</h2>
            ${intro}

<!-- PODCASTS:DEBUT -->
${episodes.map(rendreEpisode).join("")}<!-- PODCASTS:FIN -->
        </section>

        <section>
            <h2 id="methode">Comment ils sont faits</h2>
            <p>Chaque épisode reprend les idées d'un parcours du site, dans l'ordre où elles comptent. Il ne remplace pas le parcours écrit : les calculs, les simulateurs et les quiz n'ont pas d'équivalent à l'oral.</p>
            <p>Le texte lu est publié avec l'épisode. Il sert de transcription, et il se lit plus vite qu'il ne s'écoute.</p>

            <div class="piege">
                <span class="titre">Ce qu'un épisode n'est pas</span>
                <p>Un épisode est un cours, pas un conseil. Il explique des mécanismes ; il ne connaît ni ta situation, ni tes projets. Les parcours qui touchent à l'argent, au droit ou à la santé le rappellent en toutes lettres, et l'épisode le rappelle aussi.</p>
            </div>
        </section>
    </main>

    <div id="footer-placeholder"></div>

    <script src="assets/js/favoris.js"></script>
    <script src="assets/js/theme.js"></script>
    <script src="assets/js/enhance.js"></script>
    <script src="assets/js/mascotte.js"></script>
</body>
</html>
`;
}

// --- Le flux ----------------------------------------------------------------
//
// Seuls les episodes dont l audio existe. Un flux qui annonce une piece jointe
// absente fait afficher une erreur a l auditeur, dans son application, loin du
// site — c est le pire endroit pour se tromper.
function rendreFlux(episodes) {
    const publiables = episodes.filter((e) => e.audio);
    const items = publiables.map((e) => `        <item>
            <title>${echapper(sansEmoji(e.parcours))} — ${echapper(e.titre)}</title>
            <description>${echapper(e.resume)}</description>
            <link>${ID.base}podcasts.html#${e.sujet}</link>
            <guid isPermaLink="false">${ID.base}podcasts.html#${e.sujet}</guid>
            <pubDate>${new Date(e.publie + "T08:00:00Z").toUTCString()}</pubDate>
            <enclosure url="${ID.base}assets/audio/${e.fichierAudio}" length="${e.octets}" type="audio/mpeg"/>
            <itunes:duration>${e.minutes * 60}</itunes:duration>
            <itunes:explicit>false</itunes:explicit>
        </item>
`).join("");

    return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd">
    <channel>
        <title>${ID.nom}</title>
        <link>${ID.base}podcasts.html</link>
        <description>${echapper(ID.signature.fr)}</description>
        <language>fr</language>
        <itunes:author>${ID.nom}</itunes:author>
        <itunes:explicit>false</itunes:explicit>
        <itunes:image href="${ID.base}${ID.imagePartage}"/>
        <atom:link xmlns:atom="http://www.w3.org/2005/Atom" href="${ID.base}podcast.xml" rel="self" type="application/rss+xml"/>
${items}    </channel>
</rss>
`;
}

// --- Ecriture ---------------------------------------------------------------
function ecrireSiDifferent(relatif, contenu) {
    const complet = path.join(RACINE, relatif);
    const avant = fs.existsSync(complet) ? fs.readFileSync(complet, "utf8") : null;
    if (avant === contenu) return null;
    if (!verifierSeulement) fs.writeFileSync(complet, contenu);
    return relatif;
}

const episodes = lireEpisodes();
const fautifs = episodes.filter((e) => e.erreur);
for (const e of fautifs) console.error(`  podcasts/${e.sujet}.md : ${e.erreur}`);
if (fautifs.length) process.exit(1);

if (!episodes.length) {
    console.log("Aucun épisode dans podcasts/ — rien à publier.");
    process.exit(0);
}

const ecrits = [rendrePage(episodes), rendreFlux(episodes)]
    .map((c, i) => ecrireSiDifferent(["podcasts.html", "podcast.xml"][i], c))
    .filter(Boolean);

const avecAudio = episodes.filter((e) => e.audio).length;
console.log(`${episodes.length} épisode(s) sur ${Object.keys(PARCOURS).length} parcours, ${avecAudio} avec audio.`);
for (const e of episodes) {
    console.log(`  ${e.audio ? "🔊" : "  "} ${e.sujet.padEnd(16)} ${String(e.mots).padStart(5)} mots · ~${e.minutes} min`);
}

if (!ecrits.length) {
    console.log("Podcasts : rien à changer.");
    process.exit(0);
}
if (verifierSeulement) {
    console.error(`\n[podcasts] ${ecrits.join(", ")} ne correspond(ent) plus aux fichiers de podcasts/.`);
    console.error("[podcasts] correction : node scripts/publier-podcasts.js");
    process.exit(1);
}
console.log(`Écrit : ${ecrits.join(", ")}`);
