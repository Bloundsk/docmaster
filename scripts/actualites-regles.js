// ===================================
// CLICKED - REGLES D'ADMISSION DES ACTUALITES
// ===================================
//
// Les regles que doit satisfaire un article pour paraitre sur le site.
// Un seul endroit, lu par scripts/veille.js (qui propose) ET par
// scripts/publier-actualites.js (qui publie).
//
// Pourquoi ce fichier existe : l age maximal etait ecrit dans les deux
// scripts, avec dans chacun un commentaire disant « la valeur doit rester
// identique a celle de l autre ». Une regle qui tient par un commentaire ne
// tient pas. Si la veille avait propose plus vieux que ce que le site accepte,
// des articles auraient ete retenus puis jamais publies, sans explication.
//
// ---------------------------------------------------------------------------
// POURQUOI CES REGLES SONT DEVENUES NECESSAIRES
//
// Jusqu au 21 aout 2026, la veille proposait et l auteur cochait : un humain
// lisait chaque titre avant qu il paraisse. Ludo a demande que la publication
// soit automatique. La relecture disparait donc, et ce qu elle attrapait doit
// etre attrape autrement.
//
// Ce n est pas une precaution theorique. Sur les huit articles publies sous
// l ancien fonctionnement, DEUX etaient du contenu d affiliation :
//   « Investir en private equity : les meilleures plateformes en 2026 »
//   « Meilleure application pour investir en bourse en 2026 »
// tous deux places sous le guide Finance, sur un site dont les mentions
// legales promettent « aucune publicite, aucun lien remunere ». Ils sont
// passes MALGRE la relecture humaine. Sans elle, ils passeraient toujours.
//
// Deux filets, dans cet ordre de preference.
//
// Le premier porte sur le COMPORTEMENT du titre : un comparatif reste un
// comparatif quel que soit le site qui le publie, et un bon journal peut
// publier un mauvais titre. C est le filet a privilegier.
//
// Le second, une liste de sources, n existe que parce que le premier a une
// limite connue : il ne peut rien contre un communique de presse republie tel
// quel, qui n a aucune tournure suspecte — seulement une ecriture mediocre.
// Cette liste ne grandit que lorsque quelque chose est reellement passe.
// ---------------------------------------------------------------------------

// Un site qui annonce « les competences de demain » ne peut pas afficher un
// article de 2021 : la page se contredirait elle-meme.
const AGE_MAX_JOURS = 120;

/* Les tournures qui trahissent un contenu promotionnel ou un comparatif
   d affiliation. Chacune est nee d un titre reellement remonte par le flux.

   La liste se veut prudente : elle ecarte des tournures, pas des sujets. Un
   article de fond sur les frais de courtage passe ; « le meilleur courtier
   2026 » non. En cas de doute, la regle est de NE PAS ecarter — un bon article
   manque est moins couteux qu un lien publicitaire sur un site qui promet de
   n en avoir aucun, mais une veille qui ne propose rien ne sert a rien non
   plus. */
const TOURNURES_PROMOTIONNELLES = [
    { motif: /\bles?\s+meilleures?\b|\bmeilleures?\s+(application|plateforme|site|banque|courtier|outil|logiciel|offre|carte|assurance)/i,
      quoi: "palmares" },
    { motif: /\btop\s*\d+\b|\bclassement\s+des\b/i,                      quoi: "classement" },
    { motif: /\bcomparatif\b|\bcomparaison\s+des\b|\bon\s+a\s+teste\b/i,  quoi: "comparatif" },
    { motif: /\bcode\s+promo\b|\bbon\s+plan\b|\bpromo(tion)?\s*:|\b-\s?\d{2}\s?%/i, quoi: "promotion" },
    { motif: /\bpubli[- ]?r[ée]dactionnel\b|\bsponsoris[ée]|\bcontenu\s+partenaire\b|\ben\s+partenariat\s+avec\b/i, quoi: "contenu sponsorise" },
    { motif: /\bparrainage\b|\bcashback\b|\bprime\s+de\s+bienvenue\b/i,   quoi: "offre commerciale" },
    { motif: /\bavis\s+\d{4}\b|\bnotre\s+avis\s+sur\b/i,                 quoi: "avis produit" },
];

/* Les sources ecartees d office.

   Le filtre par titre ne peut rien contre un communique de presse recopie :
   « IA Local souveraine pour tous vos collaborateurs securise gratuite » est
   passe sur le site, et aucune tournure ne le distingue d un vrai titre — il
   est seulement mal ecrit. Le seul signal fiable est le site qui le publie.

   Cette liste ne grandit que quand quelque chose est reellement passe. Elle
   n est pas un jugement de valeur sur ces sites : elle constate qu ils
   diffusent des communiques ou vivent de l affiliation, ce qui les rend
   incompatibles avec un site qui promet de n avoir aucun lien remunere.

   Pour en ajouter un : une ligne ici, rien d autre. Le nom est celui affiche
   par le flux, la comparaison ignore la casse et les espaces. */
const SOURCES_ECARTEES = [
    "news-eco.com",       // communiques de presse republies tels quels
    "Cafédelabourse",     // comparatifs d affiliation (courtiers, banques)
    "Finance Héros",      // idem
];

/* Un titre qui n en est pas un. « IA Local souveraine pour tous vos
   collaborateurs securise gratuite » est passe sur le site : c est un
   communique de presse mal degrossi, sans verbe, empile d adjectifs. On ne
   sait pas detecter cela en general — mais on peut ecarter les titres qui
   crient, ce qui est le marqueur le plus fiable du communique. */
function crie(titre) {
    const lettres = titre.replace(/[^A-Za-zÀ-ÿ]/g, "");
    if (lettres.length < 20) return false;
    const majuscules = (titre.match(/[A-ZÀ-Þ]/g) || []).length;
    return majuscules / lettres.length > 0.5;
}

function assezRecent(iso) {
    if (!iso) return true;          // sans date, on ne peut pas ecarter
    const t = Date.parse(iso);
    if (Number.isNaN(t)) return true;
    return (Date.now() - t) / 86400000 <= AGE_MAX_JOURS;
}

/* Verdict sur un article. Renvoie { ok } ou { ok: false, raison }.
   La raison est toujours dite : ce qu un script ecarte, il doit le dire.
   Sans cela, un article disparaitrait du rapport sans que personne sache
   pourquoi — et la regle passerait pour un bug. */
function admissible(article) {
    const titre = article.titre || "";

    if (!assezRecent(article.date)) {
        return { ok: false, raison: `plus de ${AGE_MAX_JOURS} jours` };
    }
    const source = (article.source || "").trim().toLowerCase();
    if (source && SOURCES_ECARTEES.some((s) => s.trim().toLowerCase() === source)) {
        return { ok: false, raison: "source écartée" };
    }
    if (crie(titre)) {
        return { ok: false, raison: "titre en majuscules, probable communiqué" };
    }
    for (const { motif, quoi } of TOURNURES_PROMOTIONNELLES) {
        if (motif.test(titre)) return { ok: false, raison: quoi };
    }
    return { ok: true };
}

module.exports = { AGE_MAX_JOURS, assezRecent, admissible, TOURNURES_PROMOTIONNELLES, SOURCES_ECARTEES };
