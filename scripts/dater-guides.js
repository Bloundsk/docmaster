// ===================================
// CLICKED - DATE DE MISE A JOUR DES GUIDES
// ===================================
//
// Chaque guide affiche « Dernière mise à jour : ... ». Cette date etait ecrite
// a la main dans les 9 pages, et n a donc jamais bouge : elle annoncait le
// 7 aout 2026 alors que les guides avaient ete modifies six fois depuis.
// Une date de mise a jour fausse est pire qu absente — elle laisse croire que
// le contenu n a pas bouge, ou qu il est plus recent qu il ne l est.
//
// Ce script pose la date reelle. Il est appele par le hook pre-commit, qui lui
// passe les guides sur le point d etre commites : la date inscrite correspond
// donc toujours au moment ou le fichier a change pour de bon.
//
// Sans argument, il traite les 9 guides et prend la date du dernier commit
// ayant touche chacun d eux — de quoi rattraper l existant.

const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const RACINE = path.join(__dirname, "..");
const MOIS = ["janvier", "février", "mars", "avril", "mai", "juin",
              "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
const MONTHS = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"];

/* Les deux libelles, francais et anglais. On capture le libelle et la date
   separement : seule la date est remplacee, l emoji et le texte restent tels
   qu ils sont ecrits dans la page.

   Les pages anglaises etaient absentes de ce script : leur date, tapee a la
   main a la traduction, ne bougeait plus jamais. La version francaise se
   datait toute seule pendant que l anglaise affichait indefiniment le jour de
   sa traduction — un ecart d autant plus trompeur qu il a l air d une vraie
   date. */
const FORMATS = [
    { motif: /(Dernière mise à jour\s*:\s*)([^<]*)/, ecrire: (d) => `${d.getDate()} ${MOIS[d.getMonth()]} ${d.getFullYear()}` },
    { motif: /(Last updated:\s*)([^<]*)/,            ecrire: (d) => `${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}` },
];

// Le format qui s applique a cette page, ou null si elle n affiche pas de date.
function formatDe(html) {
    return FORMATS.find((f) => f.motif.test(html)) || null;
}

// Date du dernier commit ayant touche ce fichier. Utilisee pour le rattrapage :
// elle est plus juste que « aujourd hui » pour un guide qu on ne modifie pas.
function dateDuDernierCommit(fichier) {
    try {
        const iso = execFileSync("git", ["log", "-1", "--format=%aI", "--", fichier],
                                 { cwd: RACINE, encoding: "utf8" }).trim();
        return iso ? new Date(iso) : null;
    } catch (e) {
        return null;
    }
}

// Toutes les pages d un sujet, sommaire et niveaux confondus : un sujet se
// decompose en debutant.html, intermediaire.html, avance.html, qui portent le
// contenu et donc la date. Ne lister que index.html laisserait les niveaux
// afficher une date figee — exactement le defaut que ce script corrige.
function listerGuides() {
    const pages = [];
    // Les deux arborescences. « en/guides » manquait : ses 56 pages gardaient
    // la date tapee le jour de leur traduction.
    for (const racine of ["guides", "en/guides"]) {
        const dossier = path.join(RACINE, racine);
        if (!fs.existsSync(dossier)) continue;
        for (const sujet of fs.readdirSync(dossier)) {
            const chemin = path.join(dossier, sujet);
            if (!fs.statSync(chemin).isDirectory()) continue;
            for (const fichier of fs.readdirSync(chemin)) {
                if (fichier.endsWith(".html")) pages.push(`${racine}/${sujet}/${fichier}`);
            }
        }
    }
    return pages;
}

// Seul le contenu compte. Une retouche du <head> — texte alternatif de l image
// de partage, description — modifie le fichier sans rien changer pour le
// lecteur. Sans ce filtre, corriger une balise commune a fait passer les 36
// pages au jour meme : trente-six dates fausses d un coup, ce que ce script
// est justement charge d empecher.
function corpsSeul(html) {
    const debut = html.indexOf("<main");
    const fin = html.lastIndexOf("</main>");
    return debut === -1 || fin === -1 ? html : html.slice(debut, fin);
}

// Version du fichier telle qu elle est actuellement enregistree dans le depot.
// Renvoie null si le fichier est nouveau — il faut alors le dater.
function versionCommitee(relatif) {
    try {
        return execFileSync("git", ["show", "HEAD:" + relatif],
                            { cwd: RACINE, encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] });
    } catch (e) {
        return null;
    }
}

function contenuInchange(relatif) {
    const precedent = versionCommitee(relatif);
    if (precedent === null) return false;
    const actuel = fs.readFileSync(path.join(RACINE, relatif), "utf8");
    return corpsSeul(precedent) === corpsSeul(actuel);
}

function dater(relatif, date) {
    const complet = path.join(RACINE, relatif);
    const avant = fs.readFileSync(complet, "utf8");

    // Le libelle depend de la langue de la page ; on prend celui qu elle porte.
    const format = formatDe(avant);
    if (!format) {
        console.warn(`  ${relatif} : aucune date trouvée, ignoré`);
        return false;
    }

    const voulue = format.ecrire(date);
    const apres = avant.replace(format.motif, (_, libelle) => libelle + voulue);

    if (apres === avant) return false;          // deja a jour, on ne reecrit pas
    fs.writeFileSync(complet, apres);
    console.log(`  ${relatif} : ${avant.match(format.motif)[2].trim()} -> ${voulue}`);
    return true;
}

const demandes = process.argv.slice(2).map(f => f.replace(/\\/g, "/"));
const cibles = demandes.length ? demandes : listerGuides();
/* Le jour A PARIS, et non celui de la machine. Le controle de coherence
   compare desormais sur ce meme fuseau : sans cela, dater depuis un autre
   fuseau produirait une page que l audit declarerait future ou perimee. */
const aujourdhui = (() => {
    const [j, m, a] = new Intl.DateTimeFormat("fr-FR", {
        timeZone: "Europe/Paris", day: "numeric", month: "numeric", year: "numeric",
    }).format(new Date()).split("/").map(Number);
    return new Date(a, m - 1, j);
})();

let modifies = 0;
let ignores = 0;
for (const cible of cibles) {
    // Fichier passe par le hook : il change maintenant, donc c est aujourd hui —
    // a condition que ce soit son contenu qui change, et non son en-tete.
    // Rattrapage global : on s en remet a l historique.
    if (demandes.length && contenuInchange(cible)) {
        ignores++;
        continue;
    }
    const date = demandes.length ? aujourdhui : (dateDuDernierCommit(cible) || aujourdhui);
    if (dater(cible, date)) modifies++;
}

if (ignores) console.log(`  ${ignores} page(s) inchangée(s) sur le fond, date conservée.`);

if (!modifies) console.log("Dates déjà à jour.");
process.exit(0);
