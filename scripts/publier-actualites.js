#!/usr/bin/env node
/* ---------------------------------------------------------------------------
 * DOCMASTER — PUBLICATION DES ACTUALITES
 *
 * La veille propose, l auteur dispose.
 *
 * Deux fois par jour, scripts/veille.js depose dans une Issue une liste
 * d articles trouves pour chaque sous-section de guide. Chaque article y est
 * une case a cocher. Ce script relit ces Issues, retient les articles COCHES,
 * et les publie sur le site.
 *
 * Pourquoi une validation manuelle, alors que tout le reste est automatique :
 * publier sans relire reviendrait a faire paraitre sur le site, sous la
 * responsabilite de son auteur, des titres de presse que personne n a lus.
 * Un flux de recherche automatique remonte aussi des articles promotionnels,
 * des contenus payants et parfois des contre-verites. Une case a cocher coute
 * un clic ; republier sans regarder coute la credibilite du site.
 *
 * Cocher une case modifie le corps de l Issue, ce qui declenche le workflow :
 * l article parait sur le site dans la minute. Decocher l en retire.
 *
 * Deux sorties :
 *   - data/actualites.json   l etat, qui sert de memoire d un passage a l autre
 *   - le HTML rendu, injecte entre deux marqueurs dans actualites.html et
 *     index.html — le site reste ainsi entierement statique, lisible sans
 *     JavaScript et indexable.
 * ------------------------------------------------------------------------- */

const fs = require("fs");
const path = require("path");

const RACINE = path.join(__dirname, "..");
const ETAT = path.join(RACINE, "data", "actualites.json");

const MAX_ARTICLES = 24;   // au-dela, la page devient un mur
const MAX_JOURS = 120;     // une « actualite » de quatre mois n en est plus une
const NB_SUR_ACCUEIL = 3;

const MARQUE_DEBUT = "<!-- ACTUALITES:DEBUT -->";
const MARQUE_FIN = "<!-- ACTUALITES:FIN -->";

// --- Lecture des Issues -----------------------------------------------------

// Cent Issues, et non trente : un passage de veille en produit desormais
// plusieurs. A trente, une case cochee sur un rapport de quatre jours ne
// serait plus vue, et l article ne paraitrait jamais.
async function recupererIssues(repo, token) {
    const reponse = await fetch(
        `https://api.github.com/repos/${repo}/issues?labels=veille&state=all&per_page=100`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: "application/vnd.github+json",
            },
        }
    );
    if (!reponse.ok) throw new Error(`Lecture des Issues : HTTP ${reponse.status}`);
    return reponse.json();
}

/* Renvoie { coches: Map<lien, meta>, decoches: Set<lien> }.
 *
 * Les deux listes comptent autant l une que l autre : la premiere dit quoi
 * publier, la seconde quoi retirer. Sans la seconde, decocher une case
 * n aurait aucun effet et l article resterait en ligne. */
function depouiller(issues) {
    const coches = new Map();
    const decoches = new Set();

    for (const issue of issues) {
        const corps = issue.body || "";

        let meta = {};
        const charge = corps.match(/<!--\s*ACTUALITES\s*([\s\S]*?)-->/);
        if (charge) {
            try {
                meta = JSON.parse(charge[1].trim());
            } catch (e) {
                console.warn(`Issue #${issue.number} : métadonnées illisibles, ignorée.`);
                continue;
            }
        } else {
            // Issue anterieure a la mise en place des cases : rien a en tirer.
            continue;
        }

        for (const ligne of corps.split("\n")) {
            const m = ligne.match(/^\s*-\s*\[([ xX])\]\s*\[.*?\]\((https?:\/\/[^)\s]+)\)/);
            if (!m) continue;

            const lien = m[2];
            const info = meta[lien];
            if (!info) continue;

            if (m[1] === " ") {
                decoches.add(lien);
            } else {
                coches.set(lien, info);
            }
        }
    }

    // Un meme lien coche dans une Issue et decoche dans une autre : le choix
    // explicite de publier l emporte sur une case laissee vide ailleurs.
    for (const lien of coches.keys()) decoches.delete(lien);

    return { coches, decoches };
}

// --- Etat -------------------------------------------------------------------

function lireEtat() {
    if (!fs.existsSync(ETAT)) return { articles: [] };
    try {
        const brut = JSON.parse(fs.readFileSync(ETAT, "utf8"));
        return { articles: Array.isArray(brut.articles) ? brut.articles : [] };
    } catch (e) {
        console.warn("data/actualites.json illisible, on repart d'une liste vide.");
        return { articles: [] };
    }
}

function fusionner(existants, coches, decoches) {
    const parLien = new Map();

    for (const a of existants) {
        if (decoches.has(a.lien)) continue;   // case decochee : retire du site
        parLien.set(a.lien, a);
    }

    for (const [lien, info] of coches) {
        // « publie » est la date d entree sur le site, distincte de celle de
        // l article : elle sert a ordonner les articles sans date de parution.
        const dejaLa = parLien.get(lien);
        parLien.set(lien, {
            lien,
            titre: info.titre,
            source: info.source || "",
            date: info.date || "",
            guide: info.guide,
            page: info.page,
            ancre: info.ancre,
            section: info.section,
            sujet: info.sujet,
            publie: (dejaLa && dejaLa.publie) || new Date().toISOString().slice(0, 10),
        });
    }

    const limite = Date.now() - MAX_JOURS * 86400000;
    return [...parLien.values()]
        .filter((a) => {
            const reference = Date.parse(a.date || a.publie);
            return isNaN(reference) || reference >= limite;
        })
        .sort((a, b) => (b.date || b.publie).localeCompare(a.date || a.publie))
        .slice(0, MAX_ARTICLES);
}

// --- Rendu ------------------------------------------------------------------

const echapper = (t) =>
    String(t)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");

function enFrancais(iso) {
    const d = new Date(iso + "T12:00:00Z");
    if (isNaN(d)) return "";
    const options = { day: "numeric", month: "long", timeZone: "UTC" };
    if (d.getUTCFullYear() !== new Date().getUTCFullYear()) options.year = "numeric";
    return d.toLocaleDateString("fr-FR", options);
}

function rendreArticle(a, base) {
    const legende = [a.source, a.date ? enFrancais(a.date) : ""].filter(Boolean).join(" · ");
    const lienSection = `${base}guides/${a.guide}/${a.page}#${encodeURIComponent(a.ancre)}`;

    return `                    <li class="actu">
                        <a class="actu-titre" href="${echapper(a.lien)}" target="_blank" rel="noopener noreferrer">${echapper(a.titre)}</a>
                        ${legende ? `<p class="actu-source">${echapper(legende)}</p>` : ""}
                        <p class="actu-lien-guide">En rapport avec <a href="${echapper(lienSection)}">${echapper(a.section)}</a> · ${echapper(a.sujet)}</p>
                    </li>`;
}

function rendreListe(articles, base) {
    if (!articles.length) {
        return `                <p class="actu-vide">Aucune actualité retenue pour le moment. Cette page se remplit au fil des lectures.</p>`;
    }
    return `                <ul class="actu-liste">
${articles.map((a) => rendreArticle(a, base)).join("\n")}
                </ul>`;
}

// L accueil ne montre rien plutot qu une section vide : une rubrique
// « Actualites » sans actualite fait plus de mal que son absence.
function rendreAccueil(articles) {
    if (!articles.length) return "";

    const items = articles.slice(0, NB_SUR_ACCUEIL).map((a) => {
        const legende = [a.source, a.date ? enFrancais(a.date) : ""].filter(Boolean).join(" · ");
        return `                    <li class="actu">
                        <a class="actu-titre" href="${echapper(a.lien)}" target="_blank" rel="noopener noreferrer">${echapper(a.titre)}</a>
                        ${legende ? `<p class="actu-source">${echapper(legende)}</p>` : ""}
                    </li>`;
    });

    return `        <section id="actualites">
            <h2>📰 À lire ailleurs</h2>
            <p>Quelques lectures en rapport avec les guides, choisies à la main.</p>
            <ul class="actu-liste">
${items.join("\n")}
            </ul>
            <p><a href="actualites.html">Toutes les actualités →</a></p>
        </section>`;
}

function injecter(fichier, contenu) {
    const chemin = path.join(RACINE, fichier);
    const avant = fs.readFileSync(chemin, "utf8");

    const debut = avant.indexOf(MARQUE_DEBUT);
    const fin = avant.indexOf(MARQUE_FIN);
    if (debut === -1 || fin === -1 || fin < debut) {
        throw new Error(`${fichier} : marqueurs ACTUALITES absents ou inversés`);
    }

    // L indentation qui precede le marqueur de fin fait partie de la ligne
    // qu on remplace : sans la reprendre, le marqueur se retrouve colle a la
    // marge a la premiere publication, et y reste.
    const debutLigneFin = avant.lastIndexOf("\n", fin) + 1;
    const indentation = avant.slice(debutLigneFin, fin);

    const apres =
        avant.slice(0, debut + MARQUE_DEBUT.length) +
        (contenu ? "\n" + contenu + "\n" : "\n") +
        indentation +
        avant.slice(fin);

    if (apres === avant) return false;
    fs.writeFileSync(chemin, apres);
    return true;
}

// --- Programme principal ----------------------------------------------------

(async () => {
    try {
        const repo = process.env.GITHUB_REPOSITORY;
        const token = process.env.GITHUB_TOKEN;
        if (!repo || !token) throw new Error("GITHUB_REPOSITORY et GITHUB_TOKEN sont requis.");

        const issues = await recupererIssues(repo, token);
        const { coches, decoches } = depouiller(issues);
        console.log(`${issues.length} Issue(s) lue(s) : ${coches.size} article(s) coché(s).`);

        const avant = lireEtat().articles;
        const articles = fusionner(avant, coches, decoches);

        // « maj » ne date pas le passage du script mais le dernier changement
        // de la liste. Sans cette distinction, chaque exécution réécrivait
        // l horodatage, produisait un commit et relançait la publication du
        // site — deux fois par jour, pour rien.
        const identique = JSON.stringify(avant) === JSON.stringify(articles);

        fs.mkdirSync(path.dirname(ETAT), { recursive: true });
        if (!fs.existsSync(ETAT) || !identique) {
            const maj = identique && fs.existsSync(ETAT)
                ? JSON.parse(fs.readFileSync(ETAT, "utf8")).maj
                : new Date().toISOString();
            fs.writeFileSync(ETAT, JSON.stringify({ maj, articles }, null, 2) + "\n");
        }

        const modifies = [
            injecter("actualites.html", rendreListe(articles, "")) ? "actualites.html" : null,
            injecter("index.html", rendreAccueil(articles)) ? "index.html" : null,
        ].filter(Boolean);

        console.log(`${articles.length} article(s) publié(s).`);
        console.log(modifies.length ? `Pages mises à jour : ${modifies.join(", ")}` : "Pages inchangées.");
    } catch (erreur) {
        console.error("Erreur :", erreur.message);
        process.exit(1);
    }
})();
