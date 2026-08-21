// ===================================
// CLICKED - APPLICATION DE L'IDENTITÉ AUX PAGES
// ===================================
//
// Écrit dans les 129 pages tout ce qui se déduit de assets/js/identite.js et
// de assets/js/parcours.js : titre, balises Open Graph et Twitter, adresse
// canonique, hreflang, sitemap, robots.txt.
//
// Pourquoi écrire dans les fichiers plutôt que de peindre à l'affichage : les
// robots des réseaux sociaux et des moteurs de recherche n'exécutent pas
// JavaScript pour lire un <head>. Une balise og: posée par un script n'existe
// pas pour eux. C'est le même choix que dater-guides.js, pour la même raison :
// une donnée dérivée doit finir écrite, mais n'être SAISIE qu'une fois.
//
//   node scripts/appliquer-identite.js              écrit
//   node scripts/appliquer-identite.js --verifier   ne touche à rien, signale
//                                                   les écarts, sort en erreur
//
// Le mode --verifier est ce que lance la CI : il échoue dès qu'une page porte
// une valeur que la source unique ne produirait pas, c'est-à-dire dès que
// quelqu'un a écrit le nom, le nombre de parcours ou l'adresse à la main.

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const RACINE = path.join(__dirname, "..");
const verifierSeulement = process.argv.includes("--verifier");

// --- Les deux sources uniques ----------------------------------------------
const bac = { window: {} };
vm.createContext(bac);
for (const f of ["identite.js", "parcours.js"]) {
    vm.runInContext(fs.readFileSync(path.join(RACINE, "assets/js", f), "utf8"), bac, { filename: f });
}
const ID = bac.window.DOCMASTER_IDENTITE;
const NB_PARCOURS = Object.keys(bac.window.DOCMASTER_PARCOURS).length;

const NOMS = [ID.nom, ...ID.anciensNoms];
const ALT = ID.textePartage(NB_PARCOURS);
/* « en_GB » et non « en_US » : les pages anglaises sont écrites en orthographe
   britannique. Ce script avait commencé par imposer en_US, ce qui revenait à
   annoncer aux moteurs une langue que le site n'écrit pas. */
const LOCALES = { fr: "fr_FR", en: "en_GB" };

// --- Les pages --------------------------------------------------------------
//
// Les deux arborescences, dans le même ordre que dater-guides.js. Le chemin
// relatif est la clé de tout : l'adresse canonique, l'og:url et les hreflang
// s'en déduisent, et rien d'autre n'a besoin d'être connu de la page.
function listerPages() {
    const pages = [];
    const ajouter = (relatif) => pages.push(relatif);
    for (const prefixe of ["", "en/"]) {
        const racine = path.join(RACINE, prefixe);
        if (!fs.existsSync(racine)) continue;
        for (const f of fs.readdirSync(racine)) {
            if (f.endsWith(".html")) ajouter(prefixe + f);
        }
        const guides = path.join(racine, "guides");
        if (!fs.existsSync(guides)) continue;
        for (const sujet of fs.readdirSync(guides)) {
            const dossier = path.join(guides, sujet);
            if (!fs.statSync(dossier).isDirectory()) continue;
            for (const f of fs.readdirSync(dossier)) {
                if (f.endsWith(".html")) ajouter(`${prefixe}guides/${sujet}/${f}`);
            }
        }
    }
    return pages;
}

// --- Écriture d'une balise --------------------------------------------------
//
// On remplace la VALEUR sans toucher au reste de la balise : ordre des
// attributs, espaces, barre oblique finale restent tels qu'ils sont écrits.
// Une balise absente n'est pas ajoutée — les 64 pages sans hreflang n'en
// gagnent pas, et la page qui n'a pas de description n'en reçoit pas.
function poser(html, selecteur, attribut, valeur) {
    const motif = new RegExp(`(<(?:meta|link)\\s+${selecteur}[^>]*?\\b${attribut}=")([^"]*)(")`, "i");
    return html.replace(motif, (tout, avant, _ancien, apres) => avant + valeur + apres);
}

/* La partie du titre propre à la page, retrouvée dans un titre déjà écrit.

   Trois formes possibles, et la troisième est la raison d'être de la liste
   « anciensNoms » : sans elle, un renommage laisserait le script incapable de
   reconnaître ce qu'il avait lui-même écrit la fois précédente.

   Renvoie "" pour une page d'accueil, dont le titre commence par le nom. */
function fragmentDuTitre(titre) {
    for (const nom of NOMS) {
        if (titre.startsWith(nom + " - ") || titre.startsWith(nom + " — ")) return "";
        const suffixe = " - " + nom;
        if (titre.endsWith(suffixe)) return titre.slice(0, -suffixe.length);
    }
    return titre;   // titre qui ne porte aucun nom : on le laisse intact
}

/* Le nom du site partout où il apparaît en prose : une page « À propos » parle
   du site par son nom, une FAQ demande « Qu'est-ce que Clicked ? ». Ces
   phrases doivent rester du texte écrit dans le fichier — un moteur de
   recherche ne lit pas ce que JavaScript ajoute après coup.
   Elles ne sont donc pas interdites : elles sont RÉÉCRITES d'ici, ce qui
   revient au même pour le coût d'un renommage.

   La condition qui suit protège les identifiants internes. « DocMasterFavoris »
   est un nom de variable, « docmaster-favoris » une clé de stockage local :
   les renommer effacerait les favoris et la progression de chaque visiteur,
   pour un bénéfice nul puisque personne ne les voit. On ne remplace donc le nom
   que lorsqu'il n'est pas suivi d'une lettre, et la casse compte. */
function renommerDansLaProse(texte) {
    let sortie = texte;
    for (const ancien of ID.anciensNoms) {
        sortie = sortie.replace(new RegExp(ancien + "(?![A-Za-z])", "g"), ID.nom);
    }
    return sortie;
}

// --- Une page ---------------------------------------------------------------
function traiter(relatif) {
    const complet = path.join(RACINE, relatif);
    const avant = fs.readFileSync(complet, "utf8");
    let html = avant;

    const langue = relatif.startsWith("en/") ? "en" : "fr";
    const url = ID.base + relatif;

    // D'abord le nom, partout : titre, prose du corps, texte alternatif.
    // Les balises dérivées sont réécrites juste après, en entier.
    html = renommerDansLaProse(html);

    // Le titre. Les descriptions restent propres à la page ; seul le nom du
    // site y est renommé, parce qu'elles parlent du site.
    const titreActuel = (html.match(/<title>([^<]*)<\/title>/) || [])[1];
    if (titreActuel === undefined) return { relatif, ecart: "pas de <title>" };

    const fragment = fragmentDuTitre(titreActuel);
    const titre = fragment
        ? `${fragment} - ${ID.nom}`
        : `${ID.nom} - ${ID.accroche[langue]}`;

    html = html.replace(/<title>[^<]*<\/title>/, `<title>${titre}</title>`);

    html = poser(html, 'property="og:site_name"', "content", ID.nom);
    html = poser(html, 'property="og:title"', "content", titre);
    html = poser(html, 'name="twitter:title"', "content", titre);
    html = poser(html, 'property="og:image:alt"', "content", ALT[langue]);
    html = poser(html, 'property="og:locale"', "content", LOCALES[langue]);
    html = poser(html, 'property="og:url"', "content", url);
    html = poser(html, 'property="og:image"', "content", ID.base + ID.imagePartage);
    html = poser(html, 'name="twitter:image"', "content", ID.base + ID.imagePartage);
    html = poser(html, 'rel="canonical"', "href", url);

    /* Les hreflang. Seules les 64 pages anglaises en portent aujourd'hui ; le
       script ne fait que réécrire ce qu'il trouve. La page française jumelle
       est la même adresse sans le préfixe « en/ ». */
    const cheminFr = relatif.replace(/^en\//, "");
    html = poser(html, 'hreflang="fr"', "href", ID.base + cheminFr);
    html = poser(html, 'hreflang="en"', "href", ID.base + "en/" + cheminFr);
    html = poser(html, 'hreflang="x-default"', "href", ID.base + cheminFr);

    /* La bannière de l'accueil : le nom, puis la signature juste dessous.
       Écrite dans la page et non peinte par JavaScript, parce que c'est le
       premier texte que lit un moteur de recherche, et le seul endroit du site
       où le nom est un titre de niveau 1. */
    if (relatif === "index.html" || relatif === "en/index.html") {
        html = html.replace(/(<header>\s*<h1>)[^<]*(<\/h1>\s*<p>)[^<]*(<\/p>)/,
                            `$1${ID.nom}$2${ID.signature[langue]}$3`);
    }

    /* Le script d'identité, chargé avant langues.js et layout.js, qui en
       tirent le logo et le pied de page. Ajouté seulement s'il manque : ce
       script doit pouvoir être relancé sans rien empiler. */
    if (!html.includes("assets/js/identite.js")) {
        const motif = /(\s*)<script src="([^"]*)assets\/js\/langues\.js"><\/script>/;
        html = html.replace(motif, (tout, blanc, base) =>
            `${blanc}<script src="${base}assets/js/identite.js"></script>${tout}`);
    }

    if (html === avant) return null;
    if (!verifierSeulement) fs.writeFileSync(complet, html);
    return { relatif, ecart: "métadonnées dérivées" };
}

// --- Le plan du site --------------------------------------------------------
//
// Il listait 8 pages sur 129 et aucune page anglaise. Puisque toutes les
// adresses se déduisent désormais de la base, autant qu'il les porte toutes :
// une page absente du sitemap est une page que le moteur doit deviner.
function ecrireSitemap(pages) {
    const lignes = pages.map((p) => `  <url><loc>${ID.base}${p}</loc></url>`);
    const contenu = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${lignes.join("\n")}
</urlset>
`;
    return ecrireSiDifferent("sitemap.xml", contenu);
}

function ecrireRobots() {
    const contenu = `User-agent: *
Allow: /

Sitemap: ${ID.base}sitemap.xml
`;
    return ecrireSiDifferent("robots.txt", contenu);
}

/* L'icône du site : une lettre dans un carré. La lettre est l'initiale du nom
   — elle n'est donc pas écrite ici non plus. */
function ecrireFavicon() {
    const contenu = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#2563eb"/>
      <stop offset="100%" stop-color="#7c3aed"/>
    </linearGradient>
  </defs>
  <rect width="64" height="64" rx="14" fill="url(#g)"/>
  <text x="32" y="43" font-family="Arial, sans-serif" font-size="30" font-weight="bold" fill="white" text-anchor="middle">${ID.nom[0]}</text>
</svg>
`;
    return ecrireSiDifferent("assets/img/favicon.svg", contenu);
}

/* La source de l'image de partage.

   L'image était un PNG sans source : personne ne pouvait la corriger sans la
   redessiner. Elle annonçait « 9 guides gratuits » et énumérait sept domaines
   alors que le site en compte 14 — le texte alternatif avait été corrigé, le
   dessin jamais. C'est le même défaut que celui d'ARCHITECTURE.md, à ceci près
   qu'il était invisible : personne ne relit une image.

   L'énumération des domaines a disparu du dessin. Elle aurait été une donnée
   dupliquée de plus, et elle ne tient pas à quatorze.

   Le PNG servi aux réseaux sociaux s'en exporte ; ils n'acceptent pas le SVG. */
function ecrireImagePartage() {
    const contenu = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <defs>
    <linearGradient id="fond" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#2563eb"/>
      <stop offset="100%" stop-color="#7c3aed"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#fond)"/>
  <circle cx="1080" cy="120" r="200" fill="#ffffff" opacity="0.06"/>
  <circle cx="1120" cy="560" r="180" fill="#ffffff" opacity="0.06"/>

  <rect x="104" y="82" width="112" height="112" rx="26" fill="#ffffff"/>
  <text x="160" y="160" font-family="Arial, Helvetica, sans-serif" font-size="72" font-weight="bold" fill="#2563eb" text-anchor="middle">${ID.nom[0]}</text>

  <text x="104" y="370" font-family="Arial, Helvetica, sans-serif" font-size="104" font-weight="bold" fill="#ffffff">${ID.nom}</text>
  <text x="104" y="440" font-family="Arial, Helvetica, sans-serif" font-size="34" fill="#ffffff">${NB_PARCOURS} guides gratuits pour apprendre les compétences de demain</text>
  <text x="104" y="556" font-family="Arial, Helvetica, sans-serif" font-size="26" font-weight="bold" fill="#ffffff">${ID.base.replace(/^https?:\/\//, "").replace(/\/$/, "")}</text>
</svg>
`;
    return ecrireSiDifferent("assets/img/og-image.svg", contenu);
}

function ecrireSiDifferent(relatif, contenu) {
    const complet = path.join(RACINE, relatif);
    const avant = fs.existsSync(complet) ? fs.readFileSync(complet, "utf8") : null;
    if (avant === contenu) return null;
    if (!verifierSeulement) fs.writeFileSync(complet, contenu);
    return { relatif, ecart: "adresses dérivées de la base" };
}

// --- Exécution --------------------------------------------------------------
const pages = listerPages();
const ecarts = [];
for (const p of pages) {
    const e = traiter(p);
    if (e) ecarts.push(e);
}
// 404.html n'entre pas dans le plan du site : GitHub Pages la sert pour toute
// adresse inconnue, elle n'a pas d'adresse propre à indexer.
const indexables = pages.filter((p) => !p.endsWith("404.html"));
for (const e of [ecrireSitemap(indexables), ecrireRobots(), ecrireFavicon(), ecrireImagePartage()]) if (e) ecarts.push(e);

console.log(`identité « ${ID.nom} », ${NB_PARCOURS} parcours, ${pages.length} pages`);

if (!ecarts.length) {
    console.log("identité : rien à changer.");
    process.exit(0);
}

if (verifierSeulement) {
    console.error(`\n[identité] ${ecarts.length} fichier(s) ne correspondent pas à assets/js/identite.js :`);
    for (const e of ecarts) console.error(`  - ${e.relatif} : ${e.ecart}`);
    console.error("\n[identité] correction : node scripts/appliquer-identite.js");
    process.exit(1);
}

console.log(`identité : ${ecarts.length} fichier(s) mis à jour.`);
process.exit(0);
