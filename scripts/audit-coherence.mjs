// Controles que les audits existants ne font pas. Ils portent sur la
// COHERENCE INTERNE du contenu, la ou audit2 et audit3 portent sur la
// structure et sur la mise en ligne.
//
// Chaque controle est ne d une erreur reellement rencontree, ou d une erreur
// qui aurait pu passer inapercue.
import fs from "node:fs";
import path from "node:path";
import url from "node:url";
import vm from "node:vm";

/* La racine se deduit de l emplacement du script, elle n est pas ecrite en dur :
   un chemin absolu mettrait le nom de compte de la machine de developpement
   dans un depot public, alors que le site parait sous pseudonyme.

   « fileURLToPath » plutot qu un « pathname.slice(1) » fait a la main. Ce
   slice(1) retirait la barre obliquee que Windows place devant la lettre de
   lecteur — et, sous Linux, retirait la barre initiale d un vrai chemin
   absolu : « /home/runner/... » devenait « home/runner/... », introuvable.
   Le defaut ne pouvait pas se voir sur la machine de l auteur ; il est apparu
   au premier passage du controle sur un runner. */
const RACINE = path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), "..");
const GUIDES = path.join(RACINE, "guides");

const anomalies = [];
const signaler = (categorie, message) => anomalies.push({ categorie, message });

const lire = (p) => fs.readFileSync(p, "utf8");
const sujets = fs.readdirSync(GUIDES).filter((d) => fs.statSync(path.join(GUIDES, d)).isDirectory());

// --- 1. Simulateurs orphelins et blocs en double ---------------------------
console.log("=== 1. SIMULATEURS ===");

const bacPratique = { window: {}, document: undefined, module: { exports: {} } };
vm.createContext(bacPratique);
vm.runInContext(lire(path.join(RACINE, "assets/js/pratique.js")), bacPratique);
const definis = Object.keys(bacPratique.module.exports.SIMULATEURS);

const utilises = [];
for (const sujet of sujets) {
    for (const f of fs.readdirSync(path.join(GUIDES, sujet))) {
        if (!f.endsWith(".html")) continue;
        for (const m of lire(path.join(GUIDES, sujet, f)).matchAll(/data-pratique="([^"]+)"/g)) {
            utilises.push({ nom: m[1], page: `${sujet}/${f}` });
        }
    }
}

// Un simulateur defini et jamais pose sur une page est du code mort : il
// passe tous les tests et ne sert personne.
for (const nom of definis) {
    if (!utilises.some((u) => u.nom === nom)) signaler("SIMULATEURS", `« ${nom} » défini mais posé sur aucune page`);
}
// Un bloc qui reference un simulateur inexistant est retire a l affichage :
// la section perd son exercice sans que rien ne le signale.
for (const u of utilises) {
    if (!definis.includes(u.nom)) signaler("SIMULATEURS", `${u.page} appelle « ${u.nom} », qui n'existe pas`);
}
// Le meme exercice pose deux fois fait perdre sa valeur au second.
const parNom = new Map();
for (const u of utilises) parNom.set(u.nom, [...(parNom.get(u.nom) || []), u.page]);
for (const [nom, pages] of parNom) {
    if (pages.length > 1) signaler("SIMULATEURS", `« ${nom} » posé ${pages.length} fois : ${pages.join(", ")}`);
}
console.log(`  ${definis.length} définis, ${utilises.length} posés, ${parNom.size} distincts`);

// --- 2. Structure des parcours --------------------------------------------
console.log("\n=== 2. STRUCTURE DES PARCOURS ===");

const bacParcours = { window: {} };
vm.createContext(bacParcours);
vm.runInContext(lire(path.join(RACINE, "assets/js/parcours.js")), bacParcours);
const PARCOURS = bacParcours.window.DOCMASTER_PARCOURS;

for (const sujet of sujets) {
    if (!PARCOURS[sujet]) { signaler("STRUCTURE", `dossier guides/${sujet} absent de parcours.js`); continue; }
    for (const niveau of PARCOURS[sujet].niveaux) {
        const page = path.join(GUIDES, sujet, niveau + ".html");
        if (!fs.existsSync(page)) { signaler("STRUCTURE", `${sujet}/${niveau} déclaré mais absent`); continue; }
        const html = lire(page);
        const sections = (html.match(/<summary><h3 id=/g) || []).length;
        const pratiques = (html.match(/data-pratique=/g) || []).length;
        // Un exercice par section : c est la regle suivie partout. Un ecart
        // n est pas fatal, mais il se remarque a la lecture.
        if (sections !== pratiques) {
            signaler("STRUCTURE", `${sujet}/${niveau} : ${sections} sections mais ${pratiques} exercices`);
        }
    }
}
for (const cle of Object.keys(PARCOURS)) {
    if (!sujets.includes(cle)) signaler("STRUCTURE", `parcours.js déclare « ${cle} », sans dossier`);
}
console.log(`  ${Object.keys(PARCOURS).length} parcours déclarés, ${sujets.length} dossiers`);

// --- 3. Anneau de navigation ----------------------------------------------
console.log("\n=== 3. ANNEAU DE NAVIGATION ===");

const suivant = {}, precedent = {};
for (const sujet of sujets) {
    const html = lire(path.join(GUIDES, sujet, "index.html"));
    const bloc = html.match(/<div class="guide-nav">([\s\S]*?)<\/div>/);
    if (!bloc) { signaler("ANNEAU", `${sujet} : pas de navigation entre guides`); continue; }
    const liens = [...bloc[1].matchAll(/href="\.\.\/([a-z-]+)\/index\.html"/g)].map((m) => m[1]);
    if (liens.length !== 2) { signaler("ANNEAU", `${sujet} : ${liens.length} lien(s) au lieu de 2`); continue; }
    precedent[sujet] = liens[0];
    suivant[sujet] = liens[1];
}
// L anneau doit se refermer : partir d un sujet et suivre « suivant » doit
// ramener au point de depart en passant par tous les autres.
let courant = sujets[0], parcourus = [courant];
for (let i = 0; i < sujets.length; i++) {
    courant = suivant[courant];
    if (!courant) break;
    if (courant === sujets[0]) break;
    if (parcourus.includes(courant)) { signaler("ANNEAU", `boucle courte sur « ${courant} »`); break; }
    parcourus.push(courant);
}
if (parcourus.length !== sujets.length) {
    signaler("ANNEAU", `l'anneau ne couvre que ${parcourus.length} sujets sur ${sujets.length} : ${parcourus.join(" → ")}`);
}
// Et la reciprocite : si A pointe vers B, B doit pointer vers A.
for (const [sujet, apres] of Object.entries(suivant)) {
    if (precedent[apres] !== sujet) {
        signaler("ANNEAU", `${sujet} → ${apres}, mais ${apres} revient vers ${precedent[apres] || "rien"}`);
    }
}
console.log(`  ${parcourus.length} sujets dans l'anneau`);

// --- 4. Index de recherche -------------------------------------------------
console.log("\n=== 4. INDEX DE RECHERCHE ===");

const bacRecherche = { window: {} };
vm.createContext(bacRecherche);
vm.runInContext(lire(path.join(RACINE, "assets/js/search-data.js")) + ";window.__i=searchIndex;", bacRecherche);
const index = bacRecherche.window.__i;

// Chaque page de cours doit etre atteignable par la recherche, sans quoi un
// contenu existe et reste introuvable.
for (const sujet of sujets) {
    for (const niveau of PARCOURS[sujet].niveaux) {
        const url = `guides/${sujet}/${niveau}.html`;
        if (!index.some((e) => e.url === url)) signaler("RECHERCHE", `${url} absent de l'index`);
    }
    if (!index.some((e) => e.url === `guides/${sujet}/index.html`)) {
        signaler("RECHERCHE", `guides/${sujet}/index.html absent de l'index`);
    }
}
const titres = index.map((e) => e.title);
for (const t of new Set(titres.filter((t, i) => titres.indexOf(t) !== i))) {
    signaler("RECHERCHE", `titre en double : « ${t} »`);
}
console.log(`  ${index.length} entrées, ${new Set(index.map((e) => e.url)).size} pages distinctes`);

/* --- 4 bis. Couverture du glossaire ---------------------------------------

   Un sujet ajoute au site doit apporter ses termes au glossaire. Rien ne le
   verifiait, et le trou a grandi cinq sujets durant : droit, sante, ecologie,
   negociation et apprendre n'avaient AUCUNE entree, le glossaire etant reste
   aux neuf sujets d'origine. Personne ne pouvait s'en rendre compte depuis les
   pages ajoutees - le manque est ailleurs, et c'est ce qui l'a fait durer.

   Le controle porte sur la CATEGORIE affichee et non sur le dossier : c'est ce
   que le visiteur lit, et c'est ce qui manquait. Deux glossaires a couvrir,
   le francais et l'anglais. */
console.log("\n=== 4 bis. GLOSSAIRE ===");

// Le libelle attendu par sujet, dans chaque langue. Ecrit ici plutot que
// devine : « ecologie » s'affiche « Sobriete numerique », rien ne le deduit.
const CATEGORIES = {
    finance: ["Finance", "Finance"],
    ia: ["IA", "IA"],
    "dev-web": ["Développement Web", "Web Development"],
    marketing: ["Marketing", "Marketing"],
    cybersecurite: ["Cybersécurité", "Cybersecurity"],
    entrepreneuriat: ["Entrepreneuriat", "Entrepreneurship"],
    productivite: ["Productivité", "Productivity"],
    data: ["Data", "Data"],
    design: ["Design", "Design"],
    droit: ["Droit", "Law"],
    sante: ["Santé au travail", "Health at Work"],
    ecologie: ["Sobriété numérique", "Digital Sustainability"],
    negociation: ["Négociation", "Negotiation"],
    apprendre: ["Apprendre", "Learning"],
};

for (const [fichier, rang] of [["glossaire.html", 0], ["en/glossaire.html", 1]]) {
    const chemin = path.join(RACINE, fichier);
    if (!fs.existsSync(chemin)) { signaler("GLOSSAIRE", `${fichier} est absent`); continue; }
    const html = fs.readFileSync(chemin, "utf8");
    const vues = [...html.matchAll(/<span class="cat">([^<]+)<\/span>/g)].map((m) => m[1]);

    for (const sujet of sujets) {
        const attendu = (CATEGORIES[sujet] || [])[rang];
        if (!attendu) { signaler("GLOSSAIRE", `sujet « ${sujet} » sans libellé déclaré dans l'audit`); continue; }
        const combien = vues.filter((v) => v.includes(attendu)).length;
        if (!combien) signaler("GLOSSAIRE", `${fichier} : aucun terme pour « ${sujet} » (${attendu})`);
    }
    console.log(`  ${fichier} : ${[...html.matchAll(/<dt>/g)].length} termes, ${new Set(vues).size} catégories`);
}

// --- 5. Affirmations chiffrees dans les pages du site ----------------------
console.log("\n=== 5. CHIFFRES ANNONCES ===");

const nbSujets = sujets.length;
const motifs = [
    { regex: /(\d+)\s+guides gratuits/g, attendu: nbSujets, quoi: "guides gratuits" },
    { regex: /couvrant\s+(\d+)\s+domaines/g, attendu: nbSujets, quoi: "domaines" },
    { regex: /aujourd'hui\s+(\d+)\s+domaines/g, attendu: nbSujets, quoi: "domaines" },
];
/* Toutes les pages du site, les deux langues comprises. « toutes » ne
   contenait que les pages francaises : les controles qui s appuient dessus —
   chiffres annonces, accessibilite, chargement de langues.js — ignoraient donc
   la moitie du site. La version anglaise pouvait annoncer un nombre de sujets
   faux ou perdre un attribut « alt » sans que rien ne le dise. */
const pagesSite = fs.readdirSync(RACINE).filter((f) => f.endsWith(".html"));
const toutes = [];
for (const [prefixe, racine] of [["", RACINE], ["en/", path.join(RACINE, "en")]]) {
    if (!fs.existsSync(racine)) continue;
    for (const f of fs.readdirSync(racine).filter((x) => x.endsWith(".html"))) {
        toutes.push({ nom: prefixe + f, html: lire(path.join(racine, f)) });
    }
    const dossierGuides = path.join(racine, "guides");
    if (!fs.existsSync(dossierGuides)) continue;
    for (const s of fs.readdirSync(dossierGuides)) {
        const chemin = path.join(dossierGuides, s);
        if (!fs.statSync(chemin).isDirectory()) continue;
        for (const f of fs.readdirSync(chemin).filter((x) => x.endsWith(".html"))) {
            toutes.push({ nom: `${prefixe}guides/${s}/${f}`, html: lire(path.join(chemin, f)) });
        }
    }
}
for (const page of toutes) {
    for (const { regex, attendu, quoi } of motifs) {
        for (const m of page.html.matchAll(regex)) {
            if (Number(m[1]) !== attendu) signaler("CHIFFRES", `${page.nom} annonce ${m[1]} ${quoi} au lieu de ${attendu}`);
        }
    }
}
console.log(`  ${toutes.length} pages examinées, référence : ${nbSujets} sujets`);

// --- 6. Dates de mise a jour ----------------------------------------------
console.log("\n=== 6. DATES ===");

/* Les deux libelles, comme dans dater-guides.js. Ce controle ne connaissait
   que le francais : les 56 pages anglaises affichaient une date qu il ne
   regardait pas — et qu aucun script ne mettait a jour, ce qui allait de pair. */
const MOIS = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet",
              "août", "septembre", "octobre", "novembre", "décembre"];
const MONTHS = ["january", "february", "march", "april", "may", "june", "july",
                "august", "september", "october", "november", "december"];
const aujourdhui = new Date();
let datees = 0;
for (const page of toutes) {
    const m = page.html.match(/(?:Dernière mise à jour|Last updated)\s*:\s*(\d+)\s+(\S+)\s+(\d{4})/);
    if (!m) continue;
    datees++;
    const nom = m[2].toLowerCase();
    const mois = MOIS.indexOf(nom) !== -1 ? MOIS.indexOf(nom) : MONTHS.indexOf(nom);
    if (mois === -1) { signaler("DATES", `${page.nom} : mois « ${m[2]} » non reconnu`); continue; }
    const d = new Date(Number(m[3]), mois, Number(m[1]));
    // Une date future est forcement fausse ; une date anterieure au projet aussi.
    if (d > aujourdhui) signaler("DATES", `${page.nom} annonce une date future : ${m[0]}`);
    if (d < new Date(2026, 6, 1)) signaler("DATES", `${page.nom} annonce une date suspecte : ${m[0]}`);
}
console.log(`  ${datees} pages datées`);

// --- 7. Accessibilite de base ---------------------------------------------
console.log("\n=== 7. ACCESSIBILITE ===");

for (const page of toutes) {
    /* La langue attendue vient du chemin : une page sous « en/ » doit
       s annoncer anglaise. Ce controle cherchait « lang="fr" » en dur — ecrit
       quand le site etait monolingue, il aurait reclame du francais sur les 64
       pages anglaises le jour ou on le leur aurait applique. C est exactement
       ce qui s est produit en etendant l audit aux deux langues.

       L attribut est lu par les lecteurs d ecran pour choisir leur
       prononciation : le declarer faux est pire que ne pas le declarer. */
    const langueAttendue = page.nom.startsWith("en/") ? "en" : "fr";
    if (!new RegExp(`<html lang="${langueAttendue}">`).test(page.html)) {
        signaler("ACCESSIBILITE", `${page.nom} : langue non déclarée ou incorrecte (attendu « ${langueAttendue} »)`);
    }
    if (!/id="main-content"/.test(page.html)) signaler("ACCESSIBILITE", `${page.nom} : pas de cible pour le lien d'évitement`);
    const h1 = (page.html.match(/<h1[ >]/g) || []).length;
    if (h1 !== 1) signaler("ACCESSIBILITE", `${page.nom} : ${h1} titre(s) de niveau 1`);

    // Le zoom doit rester possible. Une page qui l interdit met dehors quiconque
    // a besoin d agrandir pour lire, et c est un manquement au critere 1.4.4 des
    // WCAG. Le controle porte sur les trois facons de le bloquer.
    const vp = page.html.match(/<meta\s+name="viewport"\s+content="([^"]*)"/);
    if (!vp) {
        signaler("ACCESSIBILITE", `${page.nom} : pas de balise viewport`);
    } else {
        const contenu = vp[1].replace(/\s/g, "");
        if (/user-scalable=(no|0)/i.test(contenu)) {
            signaler("ACCESSIBILITE", `${page.nom} : le zoom est interdit (user-scalable)`);
        }
        const max = contenu.match(/maximum-scale=([\d.]+)/i);
        if (max && parseFloat(max[1]) < 2) {
            signaler("ACCESSIBILITE", `${page.nom} : zoom plafonné à ${max[1]}, il faut au moins 2`);
        }
        // Le seuil est 0,5 et non 1 : « minimum-scale=1 » interdit deja tout
        // dezoom, et c est exactement le defaut que ce controle doit empecher.
        const min = contenu.match(/minimum-scale=([\d.]+)/i);
        if (min && parseFloat(min[1]) > 0.5) {
            signaler("ACCESSIBILITE", `${page.nom} : dézoom trop bridé (minimum-scale=${min[1]}, il faut au plus 0.5)`);
        }
    }
    for (const m of page.html.matchAll(/<img\b(?![^>]*\balt=)[^>]*>/g)) {
        signaler("ACCESSIBILITE", `${page.nom} : image sans alternative textuelle`);
    }
    // Un lien qui sort du site sans rel="noopener" expose la page appelante.
    for (const m of page.html.matchAll(/<a\b[^>]*href="https?:\/\/(?!bloundsk\.github\.io)[^"]*"[^>]*>/g)) {
        if (!/rel="[^"]*noopener/.test(m[0])) {
            signaler("ACCESSIBILITE", `${page.nom} : lien externe sans rel="noopener" — ${m[0].slice(0, 70)}`);
        }
    }
}
console.log(`  ${toutes.length} pages contrôlées`);

// --- 8. Couleurs -----------------------------------------------------------
//
// Toute couleur doit vivre dans la palette, en tete de style.css, et nulle part
// ailleurs. La regle vient d un defaut precis : --primary etait illisible en
// mode sombre, et plutot que de corriger le jeton, trois endroits avaient recu
// un #7aa5ff ecrit a la main. Les quinze autres, faute d avoir ete remarques,
// sont restes illisibles des mois.
//
// Une couleur ecrite en dur hors de la palette est donc traitee comme une
// anomalie : c est le signe qu on rustine un symptome au lieu de soigner la
// cause. Les commentaires sont ignores — ils citent souvent les valeurs
// d origine pour expliquer pourquoi elles ont change.
console.log("\n=== 8. COULEURS ===");

const css = lire(path.join(RACINE, "assets/css/style.css"));
const finPalette = css.indexOf("@keyframes");
const palette = css.slice(0, finPalette);
const sansCommentaires = css.slice(finPalette).replace(/\/\*[\s\S]*?\*\//g, "");

// Le bloc html.dark-mode redefinit les memes jetons : il fait partie de la palette.
const blocSombre = sansCommentaires.match(/html\.dark-mode\s*\{[\s\S]*?\}/);
let corps = blocSombre ? sansCommentaires.replace(blocSombre[0], "") : sansCommentaires;

// Les styles d impression sortent du systeme de themes : le papier est blanc
// dans les deux cas, et un gris de bordure n y suit aucun jeton.
// Il y en a plusieurs dans le fichier, d'ou la boucle : n'en retirer qu'un
// laissait passer le gris de bordure du second.
let debutPrint;
while ((debutPrint = corps.indexOf("@media print")) !== -1) {
    let i = corps.indexOf("{", debutPrint), niveau = 0;
    for (; i < corps.length; i++) {
        if (corps[i] === "{") niveau++;
        else if (corps[i] === "}" && --niveau === 0) break;
    }
    corps = corps.slice(0, debutPrint) + corps.slice(i + 1);
}

// Un masque n est pas une couleur : il ne retient que la transparence de ce
// qu on lui donne, la teinte n a aucun effet. Le #000 d un degrade de masque
// veut dire « opaque », et lui donner un jeton de palette n aurait pas de sens
// — il changerait de valeur selon le theme sans rien changer au rendu.
// mas[kq] couvre les deux orthographes : la propriete CSS s ecrit « mask-image »,
// la propriete personnalisee qui l alimente « --masque-nav ».
corps = corps.replace(/[^;{}]*mas[kq][^;{}]*:[^;}]*/gi, "");

const enDur = new Set();
for (const m of corps.matchAll(/#[0-9a-fA-F]{3,8}\b/g)) enDur.add(m[0]);
for (const c of enDur) {
    signaler("COULEURS", `${c} écrit en dur hors de la palette — il lui faut un jeton`);
}

const jetons = [...palette.matchAll(/(--[a-z-]+):/g)].map((m) => m[1]);

/* Un jeton de COULEUR defini en clair doit l etre aussi en sombre, sans quoi
   il garde sa valeur claire sur fond sombre — le defaut d origine.

   Encore faut-il savoir lequel est une couleur. Ce controle s appuyait sur une
   liste d exceptions ecrite a la main : elle a rate les trois jetons de
   distance du coin bas-droit le jour de leur ajout, et reclame du mode sombre
   pour des « 24px ». Une liste qu il faut penser a completer finit toujours
   par etre incomplete.

   La regle se DEDUIT donc de la valeur : un jeton qui ne contient aucune
   couleur — que des longueurs, des nombres — n a rien a redefinir en sombre.
   Les nouveaux jetons de mise en page sont exemptes tout seuls. */
const valeurDe = (jeton) => {
    const m = palette.match(new RegExp(jeton + ":\\s*([^;]+);"));
    return m ? m[1] : "";
};
const contientUneCouleur = (v) => /#[0-9a-f]{3,8}\b|rgba?\(|hsla?\(|\b(white|black|transparent|currentColor)\b/i.test(v);

/* Les deux ombres font exception dans l autre sens : elles CONTIENNENT une
   couleur, mais restent volontairement identiques dans les deux themes — une
   ombre portee noire translucide fonctionne sur clair comme sur sombre. */
const OMBRES_VOLONTAIREMENT_NEUTRES = ["--shadow", "--shadow-fort"];

if (blocSombre) {
    for (const j of jetons) {
        if (OMBRES_VOLONTAIREMENT_NEUTRES.includes(j)) continue;
        if (!contientUneCouleur(valeurDe(j))) continue;      // une distance, pas une teinte
        if (!blocSombre[0].includes(j + ":")) {
            signaler("COULEURS", `${j} n'est pas redéfini en mode sombre`);
        }
    }
}
console.log(`  ${jetons.length} jetons de palette, ${enDur.size} couleur(s) en dur hors palette`);

// --- 9. Traductions ---------------------------------------------------------
//
// Chaque texte d interface doit exister dans les sept langues. Sans ce
// controle, un texte ajoute plus tard n aurait que sa version francaise : il
// se replierait sur le francais sans rien signaler, et un menu allemand se
// retrouverait avec un mot francais au milieu que personne ne remarquerait.
//
// On verifie aussi que langues.js est charge AVANT layout.js dans chaque page :
// c est layout.js qui ecrit la navigation, il lui faut les libelles avant.
console.log("\n=== 9. TRADUCTIONS ===");

const bacLangues = { window: {}, document: { documentElement: { setAttribute() {} } }, navigator: { language: "fr" }, localStorage: { getItem: () => null, setItem() {} }, location: { pathname: "/" } };
vm.createContext(bacLangues);
vm.runInContext(lire(path.join(RACINE, "assets/js/langues.js")), bacLangues);
const LG = bacLangues.window.DOCMASTER_LANGUES;

if (!LG) {
    signaler("TRADUCTIONS", "assets/js/langues.js n'expose pas DOCMASTER_LANGUES");
} else {
    const codes = LG.CODES;
    let manquantes = 0;
    for (const [clef, valeurs] of Object.entries(LG.TEXTES)) {
        for (const code of codes) {
            // Une chaine vide est un choix assume pour les bandeaux, qui ne
            // s affichent pas en francais : c est l absence de clef qui fautive.
            if (!(code in valeurs)) {
                signaler("TRADUCTIONS", `« ${clef} » n'existe pas en « ${code} »`);
                manquantes++;
            }
        }
    }

    // Les sujets declares comme relevant du droit francais doivent exister.
    const dossiers = new Set(sujets);
    for (const s of LG.SUJETS_DROIT_FRANCAIS) {
        if (!dossiers.has(s)) signaler("TRADUCTIONS", `sujet « ${s} » déclaré droit français mais absent de guides/`);
    }

    // Un sujet annonce comme traduit doit avoir ses pages.
    for (const [code, liste] of Object.entries(LG.CONTENU_TRADUIT)) {
        for (const s of liste) {
            const dossier = path.join(RACINE, code, "guides", s);
            if (!fs.existsSync(dossier)) {
                signaler("TRADUCTIONS", `« ${s} » annoncé traduit en « ${code} » mais ${code}/guides/${s}/ n'existe pas`);
            }
        }
    }

    // Une page hors cours annoncee traduite doit exister, comme un sujet.
    for (const [code, liste] of Object.entries(LG.PAGES_TRADUITES || {})) {
        for (const f of liste) {
            if (!fs.existsSync(path.join(RACINE, code, f))) {
                signaler("TRADUCTIONS", `« ${f} » annoncé traduit en « ${code} » mais ${code}/${f} n'existe pas`);
            }
        }
    }

    /* Le selecteur ne doit proposer que des langues qui ont du contenu.
       « Un drapeau qui promet une traduction inexistante est pire que pas de
       drapeau » : ce controle rend la regle verifiable au lieu de la laisser
       a la vigilance. */
    for (const l of LG.LANGUES) {
        if (!LG.langueDisponible(l.code)) {
            signaler("TRADUCTIONS", `« ${l.code} » est proposé au sélecteur sans avoir de contenu traduit`);
        }
    }

    for (const page of toutes) {
        const a = page.html.indexOf("langues.js");
        const b = page.html.indexOf("layout.js");
        if (a === -1) signaler("TRADUCTIONS", `${page.nom} : langues.js n'est pas chargé`);
        else if (b !== -1 && a > b) signaler("TRADUCTIONS", `${page.nom} : langues.js est chargé après layout.js`);
    }

    console.log(`  ${Object.keys(LG.TEXTES).length} textes × ${codes.length} langues, ${manquantes} manquante(s)`);
    console.log(`  ${LG.LANGUES.length} langue(s) proposée(s) au sélecteur : ${LG.LANGUES.map((l) => l.code).join(", ")}`);
}

/* --- 10. Liens et ancres --------------------------------------------------

   Un lien mort ne casse rien de visible : la page s affiche, le lien est la,
   et il ne mene nulle part. C est le defaut le moins couteux a produire et le
   plus long a decouvrir.

   Ce controle etait rejoue a la main a chaque session, sous forme de script
   jetable. Le remettre ici lui donne la seule qualite qui compte : il tourne
   sans qu on y pense. */
console.log("\n=== 10. LIENS ET ANCRES ===");

const HTML = [];
(function collecter(dossier) {
    for (const f of fs.readdirSync(dossier)) {
        const p = path.join(dossier, f);
        if (fs.statSync(p).isDirectory()) {
            if (!/\.git|node_modules|Sauvegardes/.test(p)) collecter(p);
        } else if (f.endsWith(".html")) HTML.push(p);
    }
})(RACINE);

let liens = 0, ancres = 0;
for (const page of HTML) {
    const html = fs.readFileSync(page, "utf8");
    const nom = path.relative(RACINE, page).replace(/\\/g, "/");

    for (const m of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
        const brut = m[1];
        // Les gabarits JavaScript (« ${...} ») ne sont pas des adresses.
        if (/^(https?:|#|mailto:|data:|javascript:)/.test(brut) || brut.includes("${")) continue;
        liens++;
        const [chemin, ancre] = brut.split("#");
        const cible = path.resolve(path.dirname(page), decodeURIComponent(chemin.split("?")[0]));
        if (!fs.existsSync(cible)) { signaler("LIENS", `${nom} → ${brut} (fichier absent)`); continue; }
        if (!ancre) continue;
        ancres++;
        const id = decodeURIComponent(ancre);
        const cibleHtml = fs.readFileSync(cible, "utf8");
        if (!cibleHtml.includes(`id="${id}"`)) signaler("LIENS", `${nom} → ${brut} (ancre absente)`);
    }

    // Une ancre interne « #x » pointe vers la page elle-meme.
    for (const m of html.matchAll(/href="#([^"]+)"/g)) {
        const id = decodeURIComponent(m[1]);
        if (id === "main-content") continue;          // pose par layout.js
        ancres++;
        if (!html.includes(`id="${id}"`)) signaler("LIENS", `${nom} → #${id} (ancre absente de la page)`);
    }
}
console.log(`  ${HTML.length} pages, ${liens} liens locaux, ${ancres} ancres`);

/* --- 11. Parite entre les deux langues -------------------------------------

   Une page traduite doit avoir la MEME ossature que son original : mêmes
   sections, mêmes simulateurs, mêmes questions rattachées aux mêmes ancres.
   Une section oubliée à la traduction ne se voit pas — la page anglaise se lit
   très bien sans elle. Seule la comparaison la révèle. */
console.log("\n=== 11. PARITÉ FR / EN ===");

const bacL = { window: {}, document: { documentElement: { setAttribute() {} } }, navigator: { language: "fr" }, localStorage: { getItem: () => null, setItem() {} }, location: { pathname: "/" } };
vm.createContext(bacL);
vm.runInContext(lire(path.join(RACINE, "assets/js/langues.js")), bacL);
const TRADUITS = bacL.window.DOCMASTER_LANGUES.CONTENU_TRADUIT.en || [];

let compares = 0;
for (const sujet of TRADUITS) {
    for (const niveau of [...PARCOURS[sujet].niveaux, "index"]) {
        const fr = path.join(RACINE, "guides", sujet, niveau + ".html");
        const en = path.join(RACINE, "en/guides", sujet, niveau + ".html");
        if (!fs.existsSync(en)) { signaler("PARITÉ", `en/guides/${sujet}/${niveau}.html manquant`); continue; }
        compares++;
        const a = fs.readFileSync(fr, "utf8"), b = fs.readFileSync(en, "utf8");

        const sections = (h) => (h.match(/<h3 id=/g) || []).length;
        if (sections(a) !== sections(b)) {
            signaler("PARITÉ", `${sujet}/${niveau} : ${sections(a)} section(s) en français, ${sections(b)} en anglais`);
        }
        const sims = (h) => [...h.matchAll(/data-pratique="([^"]+)"/g)].map((m) => m[1]).sort().join(",");
        if (sims(a) !== sims(b)) {
            signaler("PARITÉ", `${sujet}/${niveau} : simulateurs différents entre les deux langues`);
        }
    }
}

/* Les questions d un quiz sont rattachees a une section par son « id ». Une
   ancre renommee sans que la banque suive fait disparaitre le quiz de la
   section, en silence : la page s affiche, le bloc est vide. */
let sections = 0;
for (const dossier of ["guides", "en/guides"]) {
    for (const sujet of sujets) {
        for (const niveau of PARCOURS[sujet].niveaux) {
            const page = path.join(RACINE, dossier, sujet, niveau + ".html");
            if (!fs.existsSync(page)) continue;
            const html = fs.readFileSync(page, "utf8");
            const ids = [...html.matchAll(/<h3 id="([^"]+)"/g)].map((m) => m[1]);
            const ref = html.match(/quiz\/(en\/)?([a-z0-9-]+)\.js/);
            if (!ref) { signaler("PARITÉ", `${dossier}/${sujet}/${niveau} : aucune banque de questions`); continue; }
            const banque = path.join(RACINE, "assets/js/quiz", ref[1] || "", ref[2] + ".js");
            if (!fs.existsSync(banque)) { signaler("PARITÉ", `${banque} introuvable`); continue; }
            const bq = { window: {} }; vm.createContext(bq);
            vm.runInContext(fs.readFileSync(banque, "utf8"), bq);
            const cles = Object.keys(bq.window.QUIZ.sections);
            sections += cles.length;
            for (const id of ids) if (!cles.includes(id)) signaler("PARITÉ", `${dossier}/${sujet}/${niveau} : section « ${id} » sans questions`);
            for (const c of cles) if (!ids.includes(c)) signaler("PARITÉ", `${dossier}/${sujet}/${niveau} : questions « ${c} » sans section`);
        }
    }
}
console.log(`  ${compares} pages comparées FR/EN, ${sections} sections de quiz rattachées`);

/* --- 12. La mascotte -------------------------------------------------------

   Elle accueille sur les pages hors cours, et n entre JAMAIS dans un guide.
   Ce n est pas une preference d affichage : la credibilite du contenu tient a
   sa sobriete — « ce n est pas un conseil en investissement », « verifiez a la
   source ». Un personnage souriant a cote d un delai de prescription abimerait
   ce qui fait la valeur du texte.

   Une regle qui ne tient qu a la vigilance finit par ceder : une page ajoutee
   plus tard reprend le pied de page d une autre, script compris. */
console.log("\n=== 12. MASCOTTE ===");

let avec = 0;
for (const page of toutes) {
    const estUnCours = /(^|\/)guides\//.test(page.nom);
    const porte = page.html.includes("assets/js/mascotte.js");

    if (estUnCours && porte) {
        signaler("MASCOTTE", `${page.nom} : page de cours, la mascotte n'y a pas sa place`);
    }
    if (!estUnCours && !porte) {
        signaler("MASCOTTE", `${page.nom} : page hors cours sans la mascotte`);
    }
    if (porte) avec++;
}

// Le dessin et ses textes vivent dans le script ; s il disparaissait, les pages
// le chargeraient dans le vide sans que rien ne le dise.
const fichierMascotte = path.join(RACINE, "assets/js/mascotte.js");
if (!fs.existsSync(fichierMascotte)) {
    signaler("MASCOTTE", "assets/js/mascotte.js est absent alors que des pages le chargent");
} else {
    const src = fs.readFileSync(fichierMascotte, "utf8");
    // Le garde-fou qui l empeche d entrer dans les cours.
    if (!/guides\//.test(src)) signaler("MASCOTTE", "mascotte.js ne sait plus reconnaître une page de cours");
    // Les libelles doivent passer par langues.js, pas etre ecrits en dur.
    for (const clef of ["mascotteAlt", "mascotteBulle", "mascotteFermer"]) {
        if (!src.includes(clef)) signaler("MASCOTTE", `mascotte.js n'utilise plus « ${clef} »`);
    }
}

/* Les libelles que mascotte.js reclame doivent exister dans langues.js.
   Une clef mal orthographiee y renverrait une chaine vide : la bulle
   s afficherait sans texte, et rien ne le dirait. Le controle 9 verifie que
   chaque clef existe dans les sept langues ; celui-ci verifie qu on ne demande
   pas une clef inexistante. */
if (fs.existsSync(fichierMascotte)) {
    const src = fs.readFileSync(fichierMascotte, "utf8");
    const reclamees = new Set([...src.matchAll(/"(mascotte[A-Za-z0-9]+|retourAccueil)"/g)].map((m) => m[1]));
    for (const clef of reclamees) {
        if (!LG || !LG.TEXTES[clef]) signaler("MASCOTTE", `mascotte.js demande « ${clef} », absent de langues.js`);
    }

    /* Et chaque page hors cours merite son propre message : « Une suggestion ? »
       sur la boite a idees, « Une question ? » sur la FAQ. Le repli existe,
       mais une page qui s en contente n a rien de particulier a dire — ce qui
       se decide, et ne s oublie pas. */
    for (const page of toutes) {
        const nom = page.nom.replace(/^en\//, "");
        if (/guides\//.test(page.nom) || nom === "index.html") continue;
        if (!src.includes(`"${nom}"`)) signaler("MASCOTTE", `${nom} : aucun message de mascotte déclaré`);
    }
}

// Elle doit se figer pour qui a demande moins d animations, comme le reste.
const feuille = lire(path.join(RACINE, "assets/css/style.css"));
const bloc = feuille.slice(feuille.indexOf("LA MASCOTTE"));
if (!/prefers-reduced-motion[\s\S]*mascotte-flotte/.test(bloc)) {
    signaler("MASCOTTE", "les animations de la mascotte ne sont pas figées pour « prefers-reduced-motion »");
}

console.log(`  ${avec} page(s) hors cours l'affichent, 0 page de cours`);

// --- Resultat --------------------------------------------------------------
console.log("\n=== RESULTAT ===\n");
if (!anomalies.length) {
    console.log("Aucune anomalie.");
} else {
    const parCategorie = {};
    for (const a of anomalies) (parCategorie[a.categorie] ||= []).push(a.message);
    for (const [cat, liste] of Object.entries(parCategorie)) {
        console.log(`[${cat}] ${liste.length}`);
        for (const m of liste) console.log(`  - ${m}`);
        console.log();
    }
}
console.log(`Total : ${anomalies.length} anomalie(s).`);
process.exit(anomalies.length ? 1 : 0);
