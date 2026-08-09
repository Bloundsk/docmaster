// ===================================
// DOCMASTER - DATE DE MISE A JOUR DES GUIDES
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

// On capture le libelle et la date separement : seule la date est remplacee,
// l emoji et le texte restent tels qu ils sont ecrits dans la page.
const MOTIF = /(Dernière mise à jour\s*:\s*)([^<]*)/;

function enFrancais(d) {
    return `${d.getDate()} ${MOIS[d.getMonth()]} ${d.getFullYear()}`;
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

function listerGuides() {
    const dossier = path.join(RACINE, "guides");
    return fs.readdirSync(dossier)
        .filter(d => fs.existsSync(path.join(dossier, d, "index.html")))
        .map(d => `guides/${d}/index.html`);
}

function dater(relatif, date) {
    const complet = path.join(RACINE, relatif);
    const avant = fs.readFileSync(complet, "utf8");

    if (!MOTIF.test(avant)) {
        console.warn(`  ${relatif} : aucune date trouvée, ignoré`);
        return false;
    }

    const voulue = enFrancais(date);
    const apres = avant.replace(MOTIF, (_, libelle) => libelle + voulue);

    if (apres === avant) return false;          // deja a jour, on ne reecrit pas
    fs.writeFileSync(complet, apres);
    console.log(`  ${relatif} : ${avant.match(MOTIF)[2].trim()} -> ${voulue}`);
    return true;
}

const demandes = process.argv.slice(2).map(f => f.replace(/\\/g, "/"));
const cibles = demandes.length ? demandes : listerGuides();
const aujourdhui = new Date();

let modifies = 0;
for (const cible of cibles) {
    // Fichier passe par le hook : il change maintenant, donc c est aujourd hui.
    // Rattrapage global : on s en remet a l historique.
    const date = demandes.length ? aujourdhui : (dateDuDernierCommit(cible) || aujourdhui);
    if (dater(cible, date)) modifies++;
}

if (!modifies) console.log("Dates déjà à jour.");
process.exit(0);
