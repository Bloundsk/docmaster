#!/usr/bin/env node
/* ---------------------------------------------------------------------------
 * CLICKED — LES ENTREES PAR SITUATION DE LA PAGE GUIDES
 *
 * Le catalogue range le savoir par matiere : Finance, Droit, Cybersecurite.
 * Un visiteur, lui, arrive avec un ennui — « un vendeur refuse de me
 * rembourser » — et devait deviner sous quelle matiere il etait range, puis a
 * quel niveau. Ces entrees menent directement a la section qui y repond.
 *
 * CHOISIES SUR PIECES (10 septembre 2026)
 *
 * Chaque situation a ete confrontee au texte de la section visee avant d etre
 * retenue. Deux ont ete ecartees faute de reponse dans les guides : « je dois
 * negocier mon salaire » (le mot n apparait nulle part dans le parcours
 * Negociation) et « on a pirate mon compte » (aucun passage ne dit quoi faire
 * apres un piratage). Une entree qui promet ce que la page ne donne pas est
 * pire que pas d entree.
 *
 * Le salaire a ete ajoute le 11 septembre 2026, une fois sa lecon ecrite
 * (Negociation, niveau intermediaire). Le compte pirate l a ete le 12 septembre
 * 2026, avec la sienne (Cybersecurite, niveau intermediaire) — pas de lecon,
 * pas d entree. Le meme jour, « je croule sous les messages » a rejoint la
 * liste : la section « Traiter les flux entrants » y repond point par point
 * (traiter par lots, une decision par element, ne pas ouvrir la journee sur
 * ses messages), relue avant d etre retenue.
 *
 * CE QUI EST ECRIT ICI, ET CE QUI EST RELU
 *
 * Seules la phrase de la situation et sa destination sont ecrites ici. Le nom
 * du parcours et son icone sont relus dans les cartes du catalogue ; le titre
 * de la section, dans la page visee. Un titre retouche met l entree a jour a
 * la prochaine generation, et une ancre disparue fait echouer le script au
 * lieu de laisser un lien qui ment.
 *
 * En anglais et en hongrois, les trois situations de droit francais le disent
 * dans la phrase elle-meme : le bandeau de la page previent, la phrase empeche
 * de sortir la regle de son contexte.
 *
 *   node scripts/poser-situations.js              ecrit
 *   node scripts/poser-situations.js --verifier   ne touche a rien, sort en
 *                                                 erreur si une page a derive
 * ------------------------------------------------------------------------- */

"use strict";
const fs = require("fs");
const path = require("path");

const RACINE = path.join(__dirname, "..");
const VERIFIER = process.argv.includes("--verifier");
const DEBUT = "<!-- SITUATIONS:DEBUT -->";
const FIN = "<!-- SITUATIONS:FIN -->";
const I = "        ";

/* Les ancres sont des cles : elles ne se renomment pas (favoris des visiteurs,
   quiz, sommaires). Les anglaises ont ete relevees rang pour rang, titre compare.
   Les pages hongroises ont garde les ancres francaises : elles n en ont pas
   d autres, et ancreDe() retombe donc sur celles-ci. */
const SITUATIONS = [
    { sujet: "cybersecurite", niveau: "debutant", ancres: { fr: "le-phishing", en: "phishing" },
      texte: { fr: "J'ai reçu un message qui me presse de cliquer", en: "I got a message urging me to click",
               hu: "Olyan üzenetet kaptam, amely sürget, hogy kattintsak" } },
    { sujet: "cybersecurite", niveau: "intermediaire", ancres: { fr: "compte-pirate", en: "hacked-account" },
      texte: { fr: "On a piraté mon compte", en: "Someone has hacked my account",
               hu: "Feltörték a fiókomat" } },
    { sujet: "droit", niveau: "debutant", ancres: { fr: "ecrire-pour-que-ca-compte", en: "writing-that-counts" },
      texte: { fr: "Un vendeur refuse de me rembourser", en: "A seller in France won't refund me",
               hu: "Egy franciaországi eladó nem akarja visszaadni a pénzemet" } },
    { sujet: "droit", niveau: "intermediaire", ancres: { fr: "donner-conge", en: "giving-notice" },
      texte: { fr: "Je veux quitter mon logement", en: "I want to leave my rented home in France",
               hu: "Ki akarok költözni a franciaországi bérelt lakásomból" } },
    { sujet: "sante", niveau: "intermediaire", ancres: { fr: "la-deconnexion", en: "disconnecting" },
      texte: { fr: "Mon travail m'écrit le soir", en: "My employer in France messages me in the evening",
               hu: "A franciaországi munkáltatóm este is ír nekem" } },
    { sujet: "negociation", niveau: "intermediaire", ancres: { fr: "negocier-son-salaire", en: "negotiating-your-salary" },
      texte: { fr: "Je dois négocier mon salaire", en: "I have to negotiate my salary",
               hu: "Tárgyalnom kell a fizetésemről" } },
    { sujet: "finance", niveau: "debutant", ancres: { fr: "lépargne", en: "saving" },
      texte: { fr: "J'ai un peu d'argent de côté", en: "I have a little money put aside",
               hu: "Van egy kis félretett pénzem" } },
    { sujet: "apprendre", niveau: "debutant", ancres: { fr: "se-tester-plutot-que-relire", en: "testing-rather-than-rereading" },
      texte: { fr: "Je révise et j'oublie tout", en: "I revise and forget everything",
               hu: "Tanulok, és mindent elfelejtek" } },
    { sujet: "productivite", niveau: "intermediaire", ancres: { fr: "traiter-les-flux", en: "handling-streams" },
      texte: { fr: "Je croule sous les messages", en: "I'm drowning in messages",
               hu: "Elárasztanak az üzenetek" } },
];

const LIBELLES = {
    fr: {
        page: "guides.html",
        prefixe: "",
        titre: "Tu cherches une réponse précise ?",
        intro: "Des situations fréquentes, et la section qui y répond — sans passer par le sommaire.",
        guillemets: ["« ", " »"],
        niveaux: { debutant: "Débutant", intermediaire: "Intermédiaire", avance: "Avancé" },
    },
    en: {
        page: "en/guides.html",
        prefixe: "en/",
        titre: "Looking for a specific answer?",
        intro: "Common situations, and the section that answers each one — straight there.",
        guillemets: ["“", "”"],
        niveaux: { debutant: "Beginner", intermediaire: "Intermediate", avance: "Advanced" },
    },
    hu: {
        page: "hu/guides.html",
        prefixe: "hu/",
        titre: "Konkrét választ keresel?",
        intro: "Gyakori helyzetek, és a fejezet, amely választ ad rájuk — egyenesen oda.",
        guillemets: ["„", "”"],
        niveaux: { debutant: "Kezdő", intermediaire: "Középhaladó", avance: "Haladó" },
    },
};

const ancreDe = (s, langue) => s.ancres[langue] || s.ancres.fr;

const decoder = (t) => t.replace(/&quot;/g, '"').replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
const echapper = (t) => String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;")
    .replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/* La carte du parcours, dans le catalogue de la langue. On decoupe d abord en
   cartes, PUIS on cherche : un motif unique, paresseux, courait de la premiere
   carte jusqu au lien cherche et fusionnait les quatorze en une — le piege a
   deja ete paye dans chiffrer-parcours.js. */
function carteDuParcours(catalogue, sujet, page) {
    const carte = (catalogue.match(/<article>[\s\S]*?<\/article>/g) || [])
        .find((a) => a.includes(`href="guides/${sujet}/index.html"`));
    if (!carte) throw new Error(`${page} : aucune carte pour le parcours « ${sujet} »`);
    const m = carte.match(/<span class="carte-icone"[^>]*>([^<]*)<\/span>([^<]*)<\/h3>/);
    if (!m) throw new Error(`${page} : carte « ${sujet} » sans icone ni titre lisibles`);
    return { icone: m[1].trim(), nom: decoder(m[2].trim()) };
}

/* Le titre de la section visee, tel que la page l affiche. Son emoji de tete
   est retire : la ligne porte deja celui du parcours. */
function titreDeSection(relatif, ancre) {
    const chemin = path.join(RACINE, relatif);
    if (!fs.existsSync(chemin)) throw new Error(`${relatif} : page introuvable`);
    const html = fs.readFileSync(chemin, "utf8");
    const motif = new RegExp(`<h3[^>]*\\bid="${ancre.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"[^>]*>([\\s\\S]*?)<\\/h3>`);
    const m = html.match(motif);
    if (!m) throw new Error(`${relatif} : section #${ancre} introuvable`);
    return decoder(m[1].replace(/<[^>]+>/g, "")).replace(/\s+/g, " ").trim()
        .replace(/^[^\p{L}\p{N}]+/u, "").trim();
}

function bloc(langue) {
    const L = LIBELLES[langue];
    const catalogue = fs.readFileSync(path.join(RACINE, L.page), "utf8");
    let h = `${I}<section id="situations" aria-labelledby="situations-titre">\n`;
    h += `${I}    <h2 id="situations-titre">${L.titre}</h2>\n`;
    h += `${I}    <p class="situations-intro">${L.intro}</p>\n`;
    h += `${I}    <ul class="situations">\n`;
    for (const s of SITUATIONS) {
        if (!s.texte[langue]) throw new Error(`${L.page} : la situation « ${s.texte.fr} » n'a pas de texte`);
        const carte = carteDuParcours(catalogue, s.sujet, L.page);
        const page = `guides/${s.sujet}/${s.niveau}.html`;
        const ancre = ancreDe(s, langue);
        const titre = titreDeSection(L.prefixe + page, ancre);
        h += `${I}        <li>\n`;
        h += `${I}            <a class="situation" href="${page}#${ancre}">\n`;
        h += `${I}                <span class="situation-texte">${L.guillemets[0]}${echapper(s.texte[langue])}${L.guillemets[1]}</span>\n`;
        h += `${I}                <span class="situation-cible"><span aria-hidden="true">${carte.icone}</span> `
           + `${echapper(carte.nom)} · ${L.niveaux[s.niveau]} · ${echapper(titre)}</span>\n`;
        h += `${I}            </a>\n`;
        h += `${I}        </li>\n`;
    }
    h += `${I}    </ul>\n`;
    h += `${I}</section>\n`;
    return h;
}

let ecarts = 0;
for (const langue of Object.keys(LIBELLES)) {
    const L = LIBELLES[langue];
    const chemin = path.join(RACINE, L.page);
    const avant = fs.readFileSync(chemin, "utf8");
    const contenu = bloc(langue);
    const d = avant.indexOf(DEBUT);
    const f = avant.indexOf(FIN);
    let apres;

    if (d !== -1 && f !== -1) {
        apres = avant.slice(0, d + DEBUT.length) + "\n" + contenu + I + avant.slice(f);
    } else if (VERIFIER) {
        console.error(`[situations] ${L.page} : marqueurs absents`);
        ecarts++;
        continue;
    } else {
        /* Premiere pose : juste avant le catalogue, sous le titre de la page. */
        const ancre = avant.indexOf(`${I}<section id="categories">`);
        if (ancre === -1) throw new Error(`${L.page} : section #categories introuvable`);
        apres = avant.slice(0, ancre) + I + DEBUT + "\n" + contenu + I + FIN + "\n\n" + avant.slice(ancre);
    }

    if (apres === avant) continue;
    ecarts++;
    if (VERIFIER) console.error(`[situations] ${L.page} ne correspond plus aux pages visées`);
    else {
        fs.writeFileSync(chemin, apres);
        console.log(`Écrit : ${L.page}`);
    }
}

console.log(`Situations : ${SITUATIONS.length} entrées, ${Object.keys(LIBELLES).length} langues, ${ecarts} page(s) `
    + (VERIFIER ? "en écart." : "écrite(s)."));
if (VERIFIER && ecarts) {
    console.error("[situations] correction : node scripts/poser-situations.js");
    process.exit(1);
}
