// ===================================
// CLICKED - REDIRECTIONS DEPUIS L'ANCIENNE ADRESSE
// ===================================
//
// À N'UTILISER QUE SI le dépôt change de nom sur GitHub.
//
// Renommer un dépôt redirige tout — sauf une chose. La documentation GitHub est
// explicite : « all existing information, with the exception of project site
// URLs, is automatically redirected to the new name ». Autrement dit, les
// adresses `bloundsk.github.io/docmaster/...` ne redirigent PAS. Elles cessent
// simplement de répondre, et les 129 pages indexées deviennent autant de 404.
//
// GitHub Pages ne sert aucun fichier de redirection côté serveur : pas de
// .htaccess, pas de _redirects. Le seul mécanisme disponible est une page HTML
// qui se redirige elle-même. D'où ce script.
//
// MARCHE À SUIVRE
//   1. renommer le dépôt en « clicked » sur GitHub ;
//   2. mettre à jour `base` dans assets/js/identite.js, puis lancer
//      `node scripts/appliquer-identite.js` et pousser ;
//   3. lancer ce script ;
//   4. créer un dépôt public NEUF nommé « docmaster », y déposer le contenu du
//      dossier produit, activer Pages dessus.
//
// L'ancienne adresse redirige alors vers la nouvelle, page par page — un
// visiteur qui suit un vieux lien vers le guide Finance arrive sur le guide
// Finance, pas sur l'accueil.
//
// Le <link rel="canonical"> vers la nouvelle adresse est ce qui compte pour les
// moteurs : la redirection par méta-rafraîchissement, elle, ne transmet le
// signal qu'imparfaitement. Le lien visible existe pour le cas — rare mais réel
// — où le rafraîchissement est bloqué.
//
//   node scripts/generer-redirections.js

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const RACINE = path.join(__dirname, "..");
const SORTIE = path.join(RACINE, "..", "clicked-redirections");

const bac = { window: {} };
vm.createContext(bac);
vm.runInContext(fs.readFileSync(path.join(RACINE, "assets/js/identite.js"), "utf8"), bac);
const ID = bac.window.DOCMASTER_IDENTITE;

// Les mêmes pages que appliquer-identite.js, listées de la même façon : ce sont
// exactement les adresses qui existent aujourd'hui, donc celles qui casseraient.
function listerPages() {
    const pages = [];
    for (const prefixe of ["", "en/"]) {
        const racine = path.join(RACINE, prefixe);
        if (!fs.existsSync(racine)) continue;
        for (const f of fs.readdirSync(racine)) {
            if (f.endsWith(".html")) pages.push(prefixe + f);
        }
        const guides = path.join(racine, "guides");
        if (!fs.existsSync(guides)) continue;
        for (const sujet of fs.readdirSync(guides)) {
            const dossier = path.join(guides, sujet);
            if (!fs.statSync(dossier).isDirectory()) continue;
            for (const f of fs.readdirSync(dossier)) {
                if (f.endsWith(".html")) pages.push(`${prefixe}guides/${sujet}/${f}`);
            }
        }
    }
    return pages;
}

function stub(destination) {
    return `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>${ID.nom}</title>
    <link rel="canonical" href="${destination}">
    <meta http-equiv="refresh" content="0; url=${destination}">
    <meta name="robots" content="noindex">
</head>
<body>
    <p>Ce site s'appelle désormais <strong>${ID.nom}</strong> et a changé d'adresse.</p>
    <p><a href="${destination}">Continuer vers la page demandée</a></p>
</body>
</html>
`;
}

const pages = listerPages();
fs.mkdirSync(SORTIE, { recursive: true });

for (const p of pages) {
    const complet = path.join(SORTIE, p);
    fs.mkdirSync(path.dirname(complet), { recursive: true });
    fs.writeFileSync(complet, stub(ID.base + p));
}

// 404.html attrape tout le reste : une adresse qui n'existait pas, une image,
// un fichier de données. Elle renvoie à l'accueil, faute de mieux.
fs.writeFileSync(path.join(SORTIE, "404.html"), stub(ID.base));

console.log(`${pages.length} redirections écrites dans ${SORTIE}`);
console.log(`vers ${ID.base}`);
console.log("\nÀ déposer dans un dépôt public nommé « docmaster », Pages activé.");
