#!/usr/bin/env node
/* ---------------------------------------------------------------------------
 * CLICKED — EXPORTER UN PARCOURS EN TEXTE, POUR NOTEBOOKLM
 *
 * NotebookLM fabrique son episode a partir des documents qu on lui donne. Lui
 * donner l URL du site marcherait mal : il lirait la navigation, le pied de
 * page, la rubrique des actualites, et l episode parlerait de tout sauf du
 * cours. On lui donne donc un texte propre, un fichier par parcours, ne
 * contenant que le cours lui-meme.
 *
 * Pourquoi un script plutot qu un copier-coller : les guides changent. Un
 * texte copie a la main serait fige au jour de la copie, et l episode
 * raconterait une version du parcours qui n existe plus, sans que rien ne le
 * signale. Ici, on relance le script et le texte suit.
 *
 * Ce qui est retire, et pourquoi :
 *   - tout ce qui est hors <main> : navigation, fil d Ariane, pied de page
 *   - les blocs <script> et <style>, qui n ont rien a dire a l oreille
 *   - les SVG d illustration, qui produiraient des lignes de coordonnees
 *
 * Ce qui est garde : les titres, dans leur hierarchie, et le texte. Les titres
 * comptent — ils donnent a NotebookLM le plan du parcours, donc la structure de
 * l episode.
 *
 *   node scripts/exporter-parcours.js            tous les parcours
 *   node scripts/exporter-parcours.js finance    un seul
 * ------------------------------------------------------------------------- */

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const RACINE = path.join(__dirname, "..");
const GUIDES = path.join(RACINE, "guides");
const SORTIE = path.join(RACINE, "podcasts", "sources");

const bac = { window: {} };
vm.createContext(bac);
vm.runInContext(fs.readFileSync(path.join(RACINE, "assets/js/parcours.js"), "utf8"), bac);
const PARCOURS = bac.window.DOCMASTER_PARCOURS;

/* Le texte d une page. On travaille sur le HTML brut plutot que sur un arbre :
   le site n a aucune dependance, et en ajouter une pour retirer des balises
   serait cher paye. */
function texteDe(html) {
    const dansMain = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
    let t = dansMain ? dansMain[1] : html;

    t = t.replace(/<(script|style|svg)[\s\S]*?<\/\1>/gi, " ");
    // Les blocs qu on ne veut pas entendre : navigation entre guides et
    // renvois vers d autres parcours. Ce sont des liens, pas du cours.
    t = t.replace(/<div class="(guide-nav|related-guides)"[\s\S]*?<\/div>/gi, " ");

    /* Le lecteur audio du parcours, s il existe deja. Sans cette ligne,
       l export de Finance contenait « En un mot, avant de commencer » et
       « Voix de synthese » : on aurait donne a NotebookLM, comme matiere, la
       presentation de l episode qu il doit justement produire. L episode se
       serait mis a parler de lui-meme. */
    t = t.replace(/<section class="intro-audio"[\s\S]*?<\/section>/gi, " ");

    // Les titres deviennent des lignes de titre, pour garder le plan.
    t = t.replace(/<h([1-6])[^>]*>([\s\S]*?)<\/h\1>/gi,
        (_, n, contenu) => `\n\n${"#".repeat(Number(n))} ${contenu.replace(/<[^>]+>/g, " ")}\n\n`);
    // Les fins de bloc valent une fin de paragraphe.
    t = t.replace(/<\/(p|li|div|section|tr|summary|details)>/gi, "\n");
    t = t.replace(/<[^>]+>/g, " ");

    const entites = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"',
                      "&#39;": "'", "&apos;": "'", "&nbsp;": " ", "&hellip;": "…" };
    t = t.replace(/&[a-z#0-9]+;/gi, (e) => entites[e] ?? e);

    return t.replace(/[ \t]+/g, " ")
            .replace(/ *\n */g, "\n")
            .replace(/\n{3,}/g, "\n\n")
            .trim();
}

function exporter(sujet) {
    const meta = PARCOURS[sujet];
    if (!meta) {
        console.error(`  ✗ « ${sujet} » n'est pas un parcours de parcours.js`);
        return false;
    }
    const pages = ["index", ...meta.niveaux];
    const morceaux = [];

    for (const page of pages) {
        const chemin = path.join(GUIDES, sujet, `${page}.html`);
        if (!fs.existsSync(chemin)) continue;
        const texte = texteDe(fs.readFileSync(chemin, "utf8"));
        if (texte) morceaux.push(texte);
    }
    if (!morceaux.length) {
        console.error(`  ✗ ${sujet} : aucune page lisible`);
        return false;
    }

    const entete = `Parcours ${meta.titre.replace(/^[^\p{L}]+/u, "")} — Clicked\n` +
        `Source : ${pages.length} page(s) du parcours, exportées le ` +
        `${new Date().toLocaleDateString("fr-FR", { timeZone: "Europe/Paris" })}.\n`;

    fs.mkdirSync(SORTIE, { recursive: true });
    const cible = path.join(SORTIE, `${sujet}.txt`);
    fs.writeFileSync(cible, `${entete}\n${morceaux.join("\n\n")}\n`, "utf8");

    const mots = morceaux.join(" ").split(/\s+/).length;
    console.log(`  ✓ ${sujet.padEnd(16)} ${String(mots).padStart(6)} mots  →  podcasts/sources/${sujet}.txt`);
    return true;
}

const demandes = process.argv.slice(2).filter((a) => !a.startsWith("--"));
const sujets = demandes.length ? demandes : Object.keys(PARCOURS);
let echecs = 0;
for (const s of sujets) if (!exporter(s)) echecs++;
console.log(`\n${sujets.length - echecs} parcours exporté(s) dans podcasts/sources/.`);
process.exit(echecs ? 1 : 0);
