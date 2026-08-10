// ===================================
// DOCMASTER - RAPPORT D'USAGE
// ===================================
//
// Interroge GoatCounter et publie un classement lisible : quels guides sont
// consultes, quelles sous-sections sont ouvertes, lesquelles sont mises en
// favori, lesquels sont menes jusqu au bout.
//
// Le tableau de bord de GoatCounter affiche les evenements en vrac, meles aux
// pages, sous leur nom technique ("section/finance/les-etf"). Ce script les
// regroupe par guide, les traduit en titres lisibles, et surtout les croise :
// une section tres ouverte mais jamais mise en favori n est pas la meme chose
// qu une section rarement ouverte et toujours gardee.
//
// Fonctionne comme la veille : execute par GitHub Actions, publie une Issue.
//
// Necessite deux variables d environnement :
//   GOATCOUNTER_TOKEN  cle d API creee dans GoatCounter (Mon compte -> API)
//   GITHUB_TOKEN       fourni automatiquement par GitHub Actions

const fs = require("fs");
const path = require("path");

const SITE = "https://bloundsk.goatcounter.com";
const DOSSIER_GUIDES = path.join(__dirname, "..", "guides");
const JOURS_ANALYSES = 30;
const LIMITE = 500;              // large : ~110 chemins attendus sur ce site
const MIN_OUVERTURES = 3;        // en deca, un ratio ne veut rien dire

// --- Lecture des guides, pour traduire les identifiants en titres -----------
// Les evenements portent des identifiants ("finance", "les-etf"). Les titres
// sont lus dans les guides eux-memes plutot qu ecrits ici : ajouter une
// section suffit alors a la faire apparaitre correctement dans le rapport.

function decoder(texte) {
    return String(texte)
        .replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, " ")
        .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n));
}

// Les evenements sont nommes « sujet » ou « sujet/niveau » selon que le sujet
// est decoupe en niveaux. Les titres sont donc indexes sous la meme cle, en
// lisant chaque page d un sujet plutot que le seul index.html — qui n est plus
// qu un sommaire pour les sujets deja decoupes.
function lireGuides() {
    const guides = {};
    if (!fs.existsSync(DOSSIER_GUIDES)) return guides;

    for (const dossier of fs.readdirSync(DOSSIER_GUIDES)) {
        const chemin = path.join(DOSSIER_GUIDES, dossier);
        if (!fs.statSync(chemin).isDirectory()) continue;

        for (const nom of fs.readdirSync(chemin)) {
            if (!nom.endsWith(".html")) continue;
            const html = fs.readFileSync(path.join(chemin, nom), "utf8");

            const titre = decoder((html.match(/<header>[\s\S]*?<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1] || dossier)
                .replace(/<[^>]+>/g, "").trim();

            const sections = {};
            for (const m of html.matchAll(/<summary>\s*<h3 id="([^"]+)"[^>]*>([\s\S]*?)<\/h3>/g)) {
                sections[m[1]] = decoder(m[2]).replace(/<[^>]+>/g, "").trim();
            }

            const niveau = nom.replace(/\.html$/, "");
            const cle = niveau === "index" ? dossier : dossier + "/" + niveau;
            guides[cle] = { titre, sections };
        }
    }
    return guides;
}

// --- Appel de l API --------------------------------------------------------

function entetes(token) {
    return { "Authorization": "Bearer " + token, "Content-Type": "application/json" };
}

// Verifie la cle avant de s en servir. Sans ce controle, une cle sans droit sur
// le site produit un « 404 not found » sur les statistiques, message qui laisse
// croire a une mauvaise adresse alors que le probleme est ailleurs.
async function verifierCle(token) {
    const reponse = await fetch(`${SITE}/api/v0/me`, { headers: entetes(token) });

    if (reponse.status === 401) {
        throw new Error("Cle refusee (401). Verifier que l adresse electronique du compte "
            + "GoatCounter a bien ete confirmee, et que la cle a ete recopiee en entier.");
    }
    if (!reponse.ok) {
        throw new Error(`Verification de la cle : GoatCounter a repondu ${reponse.status}.`);
    }

    const moi = await reponse.json();
    const jeton = moi.token || {};
    // « permissions » est un masque de bits, pas une liste : on ne cherche pas a
    // le traduire, GoatCounter ne documente pas ses valeurs. Les vraies reponses
    // aux questions de droits sont les codes 403 et 404 traites plus bas.
    const sites = Array.isArray(jeton.sites) ? jeton.sites : (jeton.sites ? [jeton.sites] : []);

    console.log(`Cle « ${jeton.name || "sans nom"} » acceptee.`);
    console.log("Sites accessibles : " + (sites.length ? sites.join(", ") : "aucun site rattache"));

    return moi;
}

async function recupererHits(token, debut, fin) {
    const url = `${SITE}/api/v0/stats/hits`
        + `?start=${encodeURIComponent(debut)}&end=${encodeURIComponent(fin)}&limit=${LIMITE}`;

    const reponse = await fetch(url, { headers: entetes(token) });

    if (reponse.status === 404) {
        throw new Error(
            "GoatCounter repond « not found » sur les statistiques. La cle est valide, mais elle "
            + "n a acces a aucun site : dans GoatCounter, section API, la case « All sites » a "
            + "probablement ete decochee sans que « bloundsk.goatcounter.com » soit coche a la place. "
            + "Il faut recreer la cle avec l un des deux coche.");
    }
    if (reponse.status === 403) {
        throw new Error("Acces refuse (403) : la cle n a pas la permission « Read statistics ».");
    }
    if (!reponse.ok) {
        const corps = await reponse.text().catch(() => "");
        throw new Error(`GoatCounter a repondu ${reponse.status} : ${corps.slice(0, 200)}`);
    }
    return reponse.json();
}

// --- Mise en forme ---------------------------------------------------------

function classer(donnees, guides) {
    const pages = [];
    const sections = {};   // "guide/ancre" -> { ouvertures, favoris }
    const favorisGuide = {};
    const lus = {};

    for (const hit of donnees.hits || []) {
        const compte = hit.count || 0;

        if (!hit.event) {
            // Les pages gardent leur "/" initial ; seuls les guides nous
            // interessent. La cle inclut le niveau, pour rester comparable aux
            // evenements : sans cela, les vues seraient comptees par sujet et
            // les lectures terminees par niveau, sur deux lignes distinctes.
            const m = (hit.path || "").match(/guides\/([^/]+)\/([^/.]+)\.html/);
            if (m) pages.push({ guide: m[2] === "index" ? m[1] : m[1] + "/" + m[2], compte });
            continue;
        }

        // Un evenement vaut « type/sujet/ancre » ou « type/sujet/niveau/ancre »
        // selon que le sujet est decoupe en niveaux. Le nombre de segments
        // varie donc : on lit l ancre en dernier et le reste forme la cle.
        const parts = (hit.path || "").split("/").filter(Boolean);
        const type = parts[0];

        if (type === "lu" && parts.length >= 2) {
            const cle = parts.slice(1).join("/");
            lus[cle] = (lus[cle] || 0) + compte;
            continue;
        }

        if (parts.length < 3) continue;
        const ancre = parts[parts.length - 1];
        const cle = parts.slice(1, -1).join("/");

        // La cle du sujet contient parfois un « / » (« finance/debutant ») :
        // sujet et ancre sont donc conserves separement plutot que concatenes,
        // ce qui evite d avoir a les redecouper ensuite — un separateur textuel
        // s etait deja corrompu silencieusement a l ecriture.
        if (type === "section" || type === "favori") {
            const identifiant = cle + "#" + ancre;
            if (type === "favori" && ancre === "guide") {
                favorisGuide[cle] = (favorisGuide[cle] || 0) + compte;
            } else {
                const entree = (sections[identifiant] ||= { cle, ancre, ouvertures: 0, favoris: 0 });
                if (type === "section") entree.ouvertures += compte;
                else entree.favoris += compte;
            }
        }
    }

    const nomGuide = g => (guides[g] && guides[g].titre) || g;
    const nomSection = (g, a) => (guides[g] && guides[g].sections[a]) || a;

    // Guides : vues, favoris et lectures terminees reunis sur une ligne
    const parGuide = {};
    for (const p of pages) parGuide[p.guide] = (parGuide[p.guide] || 0) + p.compte;
    for (const g of Object.keys({ ...parGuide, ...favorisGuide, ...lus })) parGuide[g] ||= 0;

    const tableauGuides = Object.entries(parGuide)
        .map(([g, vues]) => ({
            nom: nomGuide(g), vues,
            favoris: favorisGuide[g] || 0,
            termines: lus[g] || 0,
            achevement: vues ? Math.round((lus[g] || 0) / vues * 100) : 0
        }))
        .sort((a, b) => b.vues - a.vues);

    const tableauSections = Object.values(sections)
        .map(v => {
            const g = v.cle, a = v.ancre;
            return {
                guide: nomGuide(g), section: nomSection(g, a),
                ouvertures: v.ouvertures, favoris: v.favoris,
                retenue: v.ouvertures ? Math.round(v.favoris / v.ouvertures * 100) : 0
            };
        });

    return {
        guides: tableauGuides,
        sectionsParOuverture: [...tableauSections].sort((a, b) => b.ouvertures - a.ouvertures),
        sectionsParFavori: [...tableauSections].filter(s => s.favoris > 0)
            .sort((a, b) => b.favoris - a.favoris),
        // Assez consultees pour que le rapport favoris/ouvertures ait un sens
        sectionsSignificatives: tableauSections.filter(s => s.ouvertures >= MIN_OUVERTURES)
            .sort((a, b) => a.retenue - b.retenue),
        totalEvenements: tableauSections.reduce((n, s) => n + s.ouvertures + s.favoris, 0)
    };
}

function ecrireRapport(c, debut, fin) {
    const jour = d => new Date(d).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
    const L = [];

    L.push(`# 📊 Usage DocMaster — ${jour(debut)} au ${jour(fin)}`);
    L.push("");
    L.push(`Sur ${JOURS_ANALYSES} jours. Les nombres sont des **visiteurs**, pas des clics : `
        + `une même personne qui ouvre trois fois la même section compte pour une.`);
    L.push("");

    if (!c.guides.length && !c.totalEvenements) {
        L.push("---");
        L.push("");
        L.push("Aucune donnée sur la période. C'est normal si la mesure vient d'être mise en place,");
        L.push("ou si le site n'a pas reçu de visite.");
        return L.join("\n");
    }

    L.push("---");
    L.push("");
    L.push("## Les guides");
    L.push("");
    L.push("| Guide | Consulté par | Mis en favori | Terminé | Taux d'achèvement |");
    L.push("|---|---:|---:|---:|---:|");
    for (const g of c.guides) {
        L.push(`| ${g.nom} | ${g.vues} | ${g.favoris} | ${g.termines} | ${g.vues ? g.achevement + " %" : "—"} |`);
    }
    L.push("");
    L.push("> « Terminé » compte les visiteurs ayant coché « J'ai lu et compris ce guide ».");
    L.push("");

    if (c.sectionsParOuverture.length) {
        L.push("## Les sous-sections les plus ouvertes");
        L.push("");
        L.push("| # | Sous-section | Guide | Ouvertures | Favoris |");
        L.push("|---:|---|---|---:|---:|");
        c.sectionsParOuverture.slice(0, 15).forEach((s, i) => {
            L.push(`| ${i + 1} | ${s.section} | ${s.guide} | ${s.ouvertures} | ${s.favoris} |`);
        });
        L.push("");
    }

    if (c.sectionsParFavori.length) {
        L.push("## Les sous-sections les plus mises en favori");
        L.push("");
        L.push("| # | Sous-section | Guide | Favoris | Ouvertures |");
        L.push("|---:|---|---|---:|---:|");
        c.sectionsParFavori.slice(0, 15).forEach((s, i) => {
            L.push(`| ${i + 1} | ${s.section} | ${s.guide} | ${s.favoris} | ${s.ouvertures} |`);
        });
        L.push("");
    }

    // Le croisement : c est la seule partie du rapport qui suggere une action.
    //
    // Les deux listes sont dimensionnees pour ne jamais se recouvrir. Avec cinq
    // sections seulement, un "top 5" et un "flop 5" afficheraient deux fois les
    // memes lignes en ordre inverse, ce qui donne l illusion d une analyse la
    // ou il n y a qu un seul classement retourne.
    if (c.sectionsSignificatives.length >= 4) {
        const parCote = Math.min(5, Math.floor(c.sectionsSignificatives.length / 2));
        const faibles = c.sectionsSignificatives.slice(0, parCote);
        const fortes = [...c.sectionsSignificatives].reverse().slice(0, parCote);

        L.push("## Ce que le croisement suggère");
        L.push("");
        L.push("Le rapport entre « mise en favori » et « ouverte » indique si une section tient sa promesse.");
        L.push("");
        L.push("**Ouvertes mais peu gardées** — le sujet attire, le contenu convainc moins. À relire en priorité :");
        L.push("");
        L.push("| Sous-section | Guide | Ouvertures | Gardée par |");
        L.push("|---|---|---:|---:|");
        for (const s of faibles) L.push(`| ${s.section} | ${s.guide} | ${s.ouvertures} | ${s.retenue} % |`);
        L.push("");
        L.push("**Les mieux retenues** — ce qui fonctionne, et dont il faut s'inspirer ailleurs :");
        L.push("");
        L.push("| Sous-section | Guide | Ouvertures | Gardée par |");
        L.push("|---|---|---:|---:|");
        for (const s of fortes) L.push(`| ${s.section} | ${s.guide} | ${s.ouvertures} | ${s.retenue} % |`);
        L.push("");
        L.push(`> Seules les sections ouvertes au moins ${MIN_OUVERTURES} fois figurent ici : `
            + "en dessous, un pourcentage ne signifie rien.");
        L.push("");
    }

    L.push("---");
    L.push("");
    L.push("*Rapport produit automatiquement à partir de GoatCounter. Aucune donnée personnelle n'y figure :*");
    L.push("*ces mesures ne permettent pas de relier deux gestes à une même personne.*");

    return L.join("\n");
}

// --- Publication -----------------------------------------------------------

async function creerIssue(depot, token, corps, titre) {
    const reponse = await fetch(`https://api.github.com/repos/${depot}/issues`, {
        method: "POST",
        headers: {
            "Authorization": "Bearer " + token,
            "Accept": "application/vnd.github+json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ title: titre, body: corps })
    });
    if (!reponse.ok) throw new Error(`GitHub a repondu ${reponse.status} : ${await reponse.text()}`);
    const issue = await reponse.json();
    console.log("Rapport publie : " + issue.html_url);
}

// --- Programme principal ---------------------------------------------------

async function principal() {
    const token = process.env.GOATCOUNTER_TOKEN;
    if (!token) throw new Error("GOATCOUNTER_TOKEN absent : creer la cle dans GoatCounter puis l ajouter aux secrets du depot.");

    // Bornes arrondies a l heure, comme l API le demande.
    const fin = new Date(); fin.setMinutes(0, 0, 0);
    const debut = new Date(fin.getTime() - JOURS_ANALYSES * 24 * 60 * 60 * 1000);
    const iso = d => d.toISOString().replace(/\.\d+Z$/, "Z");

    await verifierCle(token);

    const donnees = await recupererHits(token, iso(debut), iso(fin));
    if (donnees.more) {
        console.warn(`Attention : plus de ${LIMITE} chemins, le rapport est incomplet.`);
    }

    const guides = lireGuides();
    const classement = classer(donnees, guides);
    const rapport = ecrireRapport(classement, debut, fin);

    console.log(`${(donnees.hits || []).length} chemins analyses, `
        + `${classement.guides.length} guide(s), ${classement.totalEvenements} geste(s).`);

    const depot = process.env.GITHUB_REPOSITORY;
    const jetonGitHub = process.env.GITHUB_TOKEN;

    if (depot && jetonGitHub) {
        const titre = "📊 Usage — " + new Date().toLocaleDateString("fr-FR");
        await creerIssue(depot, jetonGitHub, rapport, titre);
    } else {
        // Execution a la main : on affiche simplement le rapport.
        console.log("\n" + rapport);
    }
}

// Exporte pour les tests : la mise en forme se verifie sans appeler l API.
module.exports = { classer, ecrireRapport, lireGuides };

if (require.main === module) {
    principal().catch(e => { console.error("Erreur :", e.message); process.exit(1); });
}
