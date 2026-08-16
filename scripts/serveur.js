#!/usr/bin/env node
/* ---------------------------------------------------------------------------
 * DOCMASTER — SERVEUR LOCAL
 *
 * Sert le site sur http://localhost:8099 pour le regarder avant de publier.
 *
 *     node scripts/serveur.js
 *
 * Pourquoi un serveur alors que le site est fait de fichiers statiques : ouvrir
 * une page en double-cliquant dessus la charge en « file:// », et le navigateur
 * y interdit une partie de ce dont le site a besoin — lecture d une page dans
 * un cadre, mesure d audience desactivee, chemins relatifs traites autrement.
 * L audit de geometrie, lui, ne peut pas fonctionner autrement : il inspecte
 * des pages chargees dans des cadres, ce que la politique de meme origine
 * n autorise qu au travers d un serveur.
 *
 * Aucune dependance : le projet n en a aucune, et ce n est pas ce fichier qui
 * va en introduire.
 * ------------------------------------------------------------------------- */

const http = require("http");
const fs = require("fs");
const path = require("path");

const RACINE = path.join(__dirname, "..");
const PORT = Number(process.env.PORT) || 8099;

const TYPES = {
    ".html": "text/html; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".js": "text/javascript; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".svg": "image/svg+xml",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".ico": "image/x-icon",
    ".webmanifest": "application/manifest+json",
};

http.createServer((requete, reponse) => {
    // On ne garde que le chemin : la partie apres « ? » sert a contourner le
    // cache pendant les essais et ne designe aucun fichier.
    let chemin = decodeURIComponent(requete.url.split("?")[0]);
    if (chemin.endsWith("/")) chemin += "index.html";

    // Garde-fou : sans cela, une adresse contenant « ../ » servirait n importe
    // quel fichier de l ordinateur. Le serveur est local, mais une protection
    // qui ne coute rien n a pas a etre omise.
    const cible = path.join(RACINE, path.normalize(chemin));
    if (!cible.startsWith(RACINE)) {
        reponse.writeHead(403).end("Interdit");
        return;
    }

    fs.readFile(cible, (erreur, contenu) => {
        if (erreur) {
            reponse.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
            reponse.end("Introuvable : " + chemin);
            return;
        }
        reponse.writeHead(200, {
            "Content-Type": TYPES[path.extname(cible).toLowerCase()] || "application/octet-stream",
            // Pas de cache : on regarde justement ce qu on vient de modifier.
            "Cache-Control": "no-store",
        });
        reponse.end(contenu);
    });
}).listen(PORT, () => {
    console.log(`Site servi sur http://localhost:${PORT}`);
    console.log(`Audit de géométrie : http://localhost:${PORT}/scripts/audit-geometrie.html`);
    console.log("Ctrl + C pour arrêter.");
});
