#!/usr/bin/env node
/* ---------------------------------------------------------------------------
 * CLICKED — PUBLICATION DES ACTUALITES
 *
 * La veille publie, l auteur retire.
 *
 * Deux fois par jour, scripts/veille.js depose dans une Issue les articles
 * trouves pour chaque sous-section de guide. Chaque article y est une case a
 * cocher, COCHEE d office. Ce script relit ces Issues et publie sur le site
 * tout ce qui est coche — c est-a-dire tout, sauf ce qui a ete decoche.
 *
 * CE QUI A CHANGE LE 21 AOUT 2026, ET CE QUE CELA COUTE
 *
 * Jusque-la, les cases arrivaient vides : rien ne paraissait tant qu un humain
 * n avait pas lu le titre. Ludo a demande que la publication soit automatique.
 *
 * La relecture disparait, mais ce qu elle attrapait ne disparait pas : un flux
 * de recherche automatique remonte des articles promotionnels, des contenus
 * payants et parfois des contre-verites. Deux des huit articles publies sous
 * l ancien fonctionnement etaient deja du contenu d affiliation — ils etaient
 * passes MALGRE la relecture. Le filtre de scripts/actualites-regles.js prend
 * donc le relais, et il est applique DEUX fois : a la proposition, puis ici,
 * juste avant la mise en ligne.
 *
 * Le veto reste entier, il a seulement change de sens : decocher une case
 * retire l article du site dans la minute. Recocher le remet.
 *
 * Ce que le filtre ne saura jamais faire : juger si un article est juste.
 * C est le prix de l automatisation, et il est assume.
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

/* Les regles d admission sont partagees avec scripts/veille.js. Elles etaient
   recopiees dans les deux fichiers, chacun demandant a l autre par commentaire
   de rester synchrone. Une regle qui tient par un commentaire ne tient pas. */
const { AGE_MAX_JOURS, admissible } = require("./actualites-regles.js");

const MAX_ARTICLES = 24;   // au-dela, la page devient un mur

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

    return [...parLien.values()];
}

/* Le libelle de la section, relu DANS LE GUIDE plutot que dans l Issue.
 *
 * L Issue porte une copie du titre de section, figee le jour ou la veille l a
 * relevee. Quand un guide change, cette copie ment — et comme la publication
 * la recopie telle quelle, elle ressuscite l ancien titre sur le site.
 *
 * C est arrive le 22 aout : le site est passe au tutoiement, la section
 * « Vos donnees personnelles » est devenue « Tes donnees personnelles », et la
 * premiere publication automatique a remis l ancien libelle en ligne en lisant
 * une Issue d avant. Corriger data/actualites.json n aurait tenu que jusqu a la
 * publication suivante.
 *
 * L ancre, elle, ne bouge pas : c est un identifiant, et c est ce qui permet de
 * retrouver le titre courant. On garde le libelle stocke si la section a
 * disparu — un titre perime vaut mieux qu un libelle vide. */
function libelleActuel(article) {
    const fichier = path.join(RACINE, "guides", article.guide || "", article.page || "");
    if (!article.ancre || !fs.existsSync(fichier)) return article.section;

    const html = fs.readFileSync(fichier, "utf8");
    const motif = new RegExp(`<h3 id="${article.ancre.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}">([\\s\\S]*?)</h3>`);
    const trouve = html.match(motif);
    if (!trouve) return article.section;

    return trouve[1].replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").trim();
}

/* Le filtre d admission, applique juste avant le rendu.
 *
 * Il vit ici et non dans « fusionner » parce que « --hors-ligne » ne fusionne
 * rien : il reecrit les pages depuis l etat enregistre, sans interroger
 * GitHub. Tant que le filtre etait dans « fusionner », cette option le
 * contournait — regenerer les pages apres avoir ajoute une regle aurait remis
 * en ligne ce que la regle refuse, en silence. Les deux chemins passent
 * desormais par ici.
 *
 * Consequence utile : ajouter une source a la liste des ecartees retire du
 * site, au passage suivant, ce qu elle avait laisse passer avant. Les trois
 * articles promotionnels publies sous l ancien fonctionnement disparaissent
 * ainsi sans intervention. */
function filtrer(articles) {
    // La regle d age s applique, mais elle s explique.
    //
    // Elle a deja ecarte cinq articles coches sans un mot : l auteur a vu sept
    // cases cochees donner deux articles, et n avait aucun moyen de savoir
    // pourquoi. La regle etait bonne — c est le silence qui ne l etait pas.
    const limite = Date.now() - AGE_MAX_JOURS * 86400000;
    const ecartes = [];

    const retenus = articles.filter((a) => {
        const reference = Date.parse(a.date || a.publie);
        if (!isNaN(reference) && reference < limite) {
            // L age en jours, et pas seulement « trop vieux » : c est lui qui
            // dit s il s en fallait de peu ou de deux ans.
            const jours = Math.round((Date.now() - reference) / 86400000);
            ecartes.push({ article: a, raison: `plus de ${AGE_MAX_JOURS} jours (${jours} j)` });
            return false;
        }
        /* Second passage du filtre, ici plutot que seulement dans la veille.
           Depuis que la publication est automatique, ce script est le dernier
           avant la mise en ligne : il doit pouvoir refuser seul. Il attrape
           aussi les articles entres AVANT une regle — ajouter une source a la
           liste retire donc du site ce qu elle avait laisse passer. */
        const verdict = admissible(a);
        if (!verdict.ok) {
            ecartes.push({ article: a, raison: verdict.raison });
            return false;
        }
        return true;
    }).map((a) => ({ ...a, section: libelleActuel(a) }));

    if (ecartes.length) {
        console.warn(`${ecartes.length} article(s) écarté(s) avant publication :`);
        for (const { article, raison } of ecartes) {
            console.warn(`  · ${raison} — ${article.source || "?"} — ${article.titre}`);
        }
    }

    return retenus
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

function dateLisible(iso, locale) {
    const d = new Date(iso + "T12:00:00Z");
    if (isNaN(d)) return "";
    const options = { day: "numeric", month: "long", timeZone: "UTC" };
    if (d.getUTCFullYear() !== new Date().getUTCFullYear()) options.year = "numeric";
    return d.toLocaleDateString(locale, options);
}

/* Les deux versions de la page. Les titres d'articles restent en français
   dans les deux : ce sont des titres d'articles français, et un titre traduit
   ne se retrouve plus. Ce qui change, c'est ce que le site écrit AUTOUR.

   La version anglaise renvoie vers la page anglaise du guide, sans ancre : les
   ancres anglaises portent d'autres noms que les françaises, et un lien vers
   une ancre absente ne défile nulle part. Arriver en haut de la bonne page
   vaut mieux qu'arriver nulle part. */
const VERSIONS = {
    fr: {
        dossier: "", locale: "fr-FR",
        rapport: "En rapport avec",
        vide: "Aucune actualité retenue pour le moment. Cette page se remplit au fil des lectures.",
        titreAccueil: "📰 À lire ailleurs",
        introAccueil: "Quelques lectures en rapport avec les guides, repérées automatiquement.",
        toutes: "Toutes les actualités →",
        // Le libellé de la section, tel que la veille l'a relevé.
        etiquette: (a) => `<a href="guides/${a.guide}/${a.page}#${encodeURIComponent(a.ancre)}">${echapper(a.section)}</a> · ${echapper(a.sujet)}`,
    },
    en: {
        dossier: "en/", locale: "en-GB",
        rapport: "Related to",
        vide: "No article selected for now. This page fills up as the reading goes.",
        titreAccueil: "📰 Read elsewhere",
        introAccueil: "A few readings related to the guides, found automatically. <strong>They are in French</strong>: they point to French sources, and a translated headline could no longer be found again.",
        toutes: "All the news →",
        etiquette: (a) => `<a href="guides/${a.guide}/${a.page}">${echapper(NOMS_EN[a.guide] || a.guide)} — ${echapper(NIVEAUX_EN[a.page.replace(".html", "")] || "")}</a>`,
    },
};

const NOMS_EN = {
    finance: "💰 Finance", ia: "🤖 Artificial Intelligence", "dev-web": "💻 Web Development",
    marketing: "📢 Digital Marketing", cybersecurite: "🔒 Cybersecurity",
    entrepreneuriat: "🚀 Entrepreneurship", productivite: "⏱️ Productivity & Organisation",
    data: "📊 Data & Analytics", design: "🎨 UX/UI Design", droit: "⚖️ Law & Procedures",
    sante: "🩺 Health at Work", ecologie: "🌱 Digital Sustainability",
    negociation: "🤝 Negotiation & Communication", apprendre: "🎓 Learning How to Learn",
};
const NIVEAUX_EN = { debutant: "Beginner", intermediaire: "Intermediate", avance: "Advanced", index: "" };

function rendreArticle(a, v) {
    const legende = [a.source, a.date ? dateLisible(a.date, v.locale) : ""].filter(Boolean).join(" · ");

    return `                    <li class="actu">
                        <a class="actu-titre" href="${echapper(a.lien)}" target="_blank" rel="noopener noreferrer">${echapper(a.titre)}</a>
                        ${legende ? `<p class="actu-source">${echapper(legende)}</p>` : ""}
                        <p class="actu-lien-guide">${v.rapport} ${v.etiquette(a)}</p>
                    </li>`;
}

function rendreListe(articles, v) {
    if (!articles.length) {
        return `                <p class="actu-vide">${v.vide}</p>`;
    }
    return `                <ul class="actu-liste">
${articles.map((a) => rendreArticle(a, v)).join("\n")}
                </ul>`;
}

// L accueil ne montre rien plutot qu une section vide : une rubrique
// « Actualites » sans actualite fait plus de mal que son absence.
function rendreAccueil(articles, v) {
    if (!articles.length) return "";

    const items = articles.slice(0, NB_SUR_ACCUEIL).map((a) => {
        const legende = [a.source, a.date ? dateLisible(a.date, v.locale) : ""].filter(Boolean).join(" · ");
        return `                    <li class="actu">
                        <a class="actu-titre" href="${echapper(a.lien)}" target="_blank" rel="noopener noreferrer">${echapper(a.titre)}</a>
                        ${legende ? `<p class="actu-source">${echapper(legende)}</p>` : ""}
                    </li>`;
    });

    return `        <section id="actualites">
            <h2>${v.titreAccueil}</h2>
            <p>${v.introAccueil}</p>
            <ul class="actu-liste">
${items.join("\n")}
            </ul>
            <p><a href="actualites.html">${v.toutes}</a></p>
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
        /* « --hors-ligne » réécrit les pages à partir de l'état déjà enregistré,
           sans interroger GitHub. C'est ce qu'il faut après avoir modifié un
           gabarit : sans cette option, la seule façon de voir le rendu était
           d'attendre le passage automatique suivant, ou de se munir d'un jeton
           pour une opération qui ne lit rien de nouveau. */
        const horsLigne = process.argv.includes("--hors-ligne");

        let articles = lireEtat().articles;
        if (!horsLigne) {
            const repo = process.env.GITHUB_REPOSITORY;
            const token = process.env.GITHUB_TOKEN;
            if (!repo || !token) throw new Error("GITHUB_REPOSITORY et GITHUB_TOKEN sont requis (ou --hors-ligne).");

            const issues = await recupererIssues(repo, token);
            const { coches, decoches } = depouiller(issues);
            console.log(`${issues.length} Issue(s) lue(s) : ${coches.size} article(s) coché(s).`);
            articles = fusionner(articles, coches, decoches);
        }

        // Le filtre, sur les deux chemins : en ligne comme hors ligne.
        articles = filtrer(articles);

        const avant = lireEtat().articles;

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

        /* Les quatre pages porteuses des marqueurs, dans les deux langues. La
           version anglaise a été oubliée une fois : les deux pages françaises
           se mettaient à jour, l'anglaise gardait la liste du jour de sa
           traduction sans que rien ne le signale. */
        const modifies = Object.values(VERSIONS).flatMap((v) => [
            injecter(v.dossier + "actualites.html", rendreListe(articles, v)) ? v.dossier + "actualites.html" : null,
            injecter(v.dossier + "index.html", rendreAccueil(articles, v)) ? v.dossier + "index.html" : null,
        ]).filter(Boolean);

        console.log(`${articles.length} article(s) publié(s).`);
        console.log(modifies.length ? `Pages mises à jour : ${modifies.join(", ")}` : "Pages inchangées.");
    } catch (erreur) {
        console.error("Erreur :", erreur.message);
        process.exit(1);
    }
})();
