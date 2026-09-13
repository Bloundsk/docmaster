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
//
// Trente jours depuis le 13 septembre 2026, a la demande de Ludo (cent vingt
// auparavant). Le plafond de trois articles par section, pose le meme jour, a
// fait remonter des articles de debut de mois pour remplir les vingt-quatre
// places — dont plusieurs communiques. La page montre desormais le mois ecoule,
// quitte a montrer moins.
//
// La regle vaut pour la veille ET pour la publication, et c est voulu : une
// veille qui retiendrait un article de quarante jours l annoncerait « deja en
// ligne » dans son rapport, alors que la page le refuserait.
const AGE_MAX_JOURS = 30;

/* Les tournures qui trahissent un contenu promotionnel ou un comparatif
   d affiliation. Chacune est nee d un titre reellement remonte par le flux.

   La liste se veut prudente : elle ecarte des tournures, pas des sujets. Un
   article de fond sur les frais de courtage passe ; « le meilleur courtier
   2026 » non. En cas de doute, la regle est de NE PAS ecarter — un bon article
   manque est moins couteux qu un lien publicitaire sur un site qui promet de
   n en avoir aucun, mais une veille qui ne propose rien ne sert a rien non
   plus. */
const TOURNURES_PROMOTIONNELLES = [
    /* « le meilleur », au masculin, echappait : le motif ne connaissait que
       « meilleure(s) », alors que le commentaire ci-dessus donne « le meilleur
       courtier 2026 » en exemple a refuser. Corrige le 13 septembre 2026, apres
       « Le meilleur OLED de Samsung… » publie sous « Le systeme de design ».

       Mesure sur les 966 titres de l historique, avant adoption : 18 palmares
       refuses en plus (« Les 23 meilleurs outils… », « 10 Meilleurs Robots de
       Trading… »), aucun de ceux d avant ne repasse. Une premiere version, qui
       refusait « le meilleur » partout, ecartait aussi quatre titres de
       journalisme — « pourquoi le meilleur modele d IA n existe pas ». D ou la
       forme retenue : le pluriel (« les 23 meilleurs »), le chiffre en tete, le
       titre qui S OUVRE sur « le meilleur », ou « meilleur » devant un produit.
       Au milieu d une phrase, « le meilleur » reste permis. */
    { motif: /\bles?\s+meilleures?\b|\bles\s+(\d+\s+)?meilleure?s\b|^\s*\d+\s+meilleure?s\b|^\s*(le|la)\s+meilleure?\b|\bmeilleure?s?\s+(application|plateforme|site|banque|courtier|outil|logiciel|offre|carte|assurance)s?\b/i,
      quoi: "palmares" },
    { motif: /\btop\s*\d+\b|\bclassement\s+des\b/i,                      quoi: "classement" },
    { motif: /\bcomparatif\b|\bcomparaison\s+des\b|\bon\s+a\s+teste\b/i,  quoi: "comparatif" },
    { motif: /\bcode\s+promo\b|\bbon\s+plan\b|\bpromo(tion)?\s*:|\b-\s?\d{2}\s?%/i, quoi: "promotion" },
    { motif: /\bpubli[- ]?r[ée]dactionnel\b|\bsponsoris[ée]|\bcontenu\s+partenaire\b|\ben\s+partenariat\s+avec\b/i, quoi: "contenu sponsorise" },
    { motif: /\bparrainage\b|\bcashback\b|\bprime\s+de\s+bienvenue\b/i,   quoi: "offre commerciale" },
    { motif: /\bavis\s+\d{4}\b|\bnotre\s+avis\s+sur\b/i,                 quoi: "avis produit" },
    /* L offre d emploi. Le premier essai de la veille par medias (13 septembre
       2026) en a retenu deux, publiees par un site de medias qui est aussi un
       site d annonces : « Infirmier(e) de sante au travail F/H - Framatome - CDI
       a La Defense ». Le site a ete retire de la liste ; la regle reste pour
       ceux qui melangent les deux sans qu on le sache. « F/H » ou « - CDI » en
       fin de segment, et non « CDI » seul : « le CDI des infirmiers en
       question » est un article. */
    { motif: /\b[FH]\s?\/\s?[FH]\b|\s-\s*(CDI|CDD)\b/,                   quoi: "offre d'emploi" },
];

/* Les memes tournures, en anglais et en hongrois, depuis que chaque langue a
   sa propre veille (13 septembre 2026). Elles n ont pas encore d historique
   derriere elles : ce sont les formes connues du genre, tenues prudentes pour
   la meme raison qu en francais — un bon article manque coute moins qu une
   veille qui ne propose rien.

   Deux formes ont ete ecartees exprès. En anglais, « ranked » : « UK ranked
   worst in Europe for… » est du journalisme. En hongrois,
   « összehasonlítás » : « nemzetközi összehasonlításban » (en comparaison
   internationale) est une tournure courante de la presse economique.

   \b ne connait que l ASCII : devant « ö », il ne voit pas de debut de mot.
   D ou (?<!\p{L}) dans les motifs hongrois. */
const TOURNURES_PAR_LANGUE = {
    fr: TOURNURES_PROMOTIONNELLES,
    en: [
        { motif: /\bbest\s+(\w+\s+)?(apps?|platforms?|sites?|banks?|brokers?|tools?|software|deals?|offers?|cards?|accounts?|insurers?|laptops?|phones?|vpns?|buys?)\b|^\s*(the\s+)?\d+\s+best\b|^\s*(the\s+)?best\s+\w+\s+(for|of|in)\b/i,
          quoi: "palmares" },
        { motif: /\btop\s*\d+\b/i,                                            quoi: "classement" },
        { motif: /\bwe\s+tested\b|\btested\s+and\s+rated\b|\breview\s*:|\bhands-on\s*:/i, quoi: "comparatif" },
        { motif: /\b(discount|voucher|promo)\s+codes?\b|\bdeals?\s+of\s+the\s+day\b|\b\d{1,2}\s?%\s+off\b|\bbargains?\b/i, quoi: "promotion" },
        { motif: /\bsponsored\b|\badvertorial\b|\bpartner\s+content\b|\bin\s+partnership\s+with\b|\bpaid\s+(post|content)\b/i, quoi: "contenu sponsorise" },
        { motif: /\breferral\s+(bonus|code)\b|\bcashback\b|\b(sign-?up|welcome)\s+bonus\b/i, quoi: "offre commerciale" },
        // « … - London job with Barts Health NHS Trust | 841710 » (essai du
        // 13 septembre 2026) : l annonce, et son numero de reference en fin.
        { motif: /\bjob\s+with\b|\bvacanc(y|ies)\b|\|\s*\d{5,}\s*$/i,          quoi: "offre d'emploi" },
    ],
    hu: [
        { motif: /(?<!\p{L})legjobb\s+(\p{L}+\s+)?(alkalmazás|platform|oldal|bank|bróker|eszköz|szoftver|ajánlat|kártya|biztosító|számla)\p{L}*|^\s*(a\s+)?\d+\s+legjobb(?!\p{L})|^\s*a\s+legjobb(?!\p{L})/iu,
          quoi: "palmares" },
        { motif: /(?<!\p{L})top\s*\d+(?!\p{L})/iu,                            quoi: "classement" },
        { motif: /(?<!\p{L})(teszteltük|kipróbáltuk)(?!\p{L})/iu,             quoi: "comparatif" },
        { motif: /(?<!\p{L})(kuponkód|kedvezménykód|akciós ajánlat)|\d{1,2}\s?%\s*kedvezmény/iu, quoi: "promotion" },
        // « (x) » en fin de titre : c est ainsi que la presse hongroise
        // signale un contenu paye.
        { motif: /(?<!\p{L})(szponzorált|fizetett\s+(tartalom|hirdetés)|támogatott\s+tartalom|pr-cikk)|\(x\)\s*$/iu, quoi: "contenu sponsorise" },
        { motif: /(?<!\p{L})(ajánlói\s+(bónusz|program)|pénzvisszatérítés|cashback)/iu, quoi: "offre commerciale" },
        // « állásajánlat » (offre d emploi), « munkatársat keres » (recherche
        // un collaborateur). Pas « munkakör » : la presse l emploie au sens
        // de « poste », dans des articles.
        { motif: /(?<!\p{L})(állásajánlat|munkatársat\s+keres)/iu,            quoi: "offre d'emploi" },
    ],
};

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
    // Deux diffuseurs de communiques, ajoutes le 13 septembre 2026 apres
    // relecture de la page en ligne, a la demande de Ludo : « Vapodil - Le
    // modele economique qui transforme ses clients en entrepreneurs » et
    // « Goodvest lance Rive 3, un produit d epargne » venaient du premier,
    // « HTEC Momentum renforce son palmares » du second.
    "Presse Agence",
    "Lelezard",
    // Ecarte le 13 septembre 2026, a la demande de Ludo, pour une autre raison :
    // ce n est pas un diffuseur de communiques mais un portail qui traduit
    // automatiquement l actualite vietnamienne. Ses onze titres proposes
    // (reunion communale a Tan Hao, obligations immobilieres a 13 %, echecs au
    // Japon rangé sous « Choisir un modele ») ne collaient jamais au cours, et
    // chaque retrait en faisait remonter un autre.
    "Vietnam.vn",
];

/* --------------------------------------------------------------------------
   LES MEDIAS RECONNUS (13 septembre 2026, a la demande de Ludo)

   Jusque-la, la veille prenait ce que Google News remontait, d ou qu il vienne :
   un portail vietnamien traduit automatiquement, des diffuseurs de
   communiques, un hebdomadaire local du Roussillon. La liste ci-dessus courait
   apres chacun, et chaque retrait en faisait remonter un autre.

   Le principe s inverse : une liste de medias ADMIS, par langue, dans
   scripts/actualites-medias.js — les titres les plus lus du pays, puis les
   medias specialises reconnus dans le domaine de chaque guide. Ce qui n y est
   pas ne parait pas. Les regles de titre restent : un grand journal publie
   aussi des palmares.

   Le media est reconnu par le site qui publie — le domaine que donne Google
   News — et non par le nom affiche, qui varie (« Le Monde.fr », « | hvg.hu »).
   Un sous-domaine n est pas le site : « carnet.sudouest.fr » publie des avis
   de deces, « tvmag.lefigaro.fr » des programmes tele. Il n entre que s il est
   nomme dans la liste.

   Seuls les articles publies avant cette regle n ont pas de domaine. Pour
   eux, on compare le nom affiche a celui du media et a son domaine. */
const MEDIAS = require("./actualites-medias.js");

function mediaReconnu(article) {
    const medias = MEDIAS.tousLesMedias(article.langue || "fr");
    if (article.site) {
        const hote = String(article.site).toLowerCase().replace(/^www\./, "");
        return medias.find((m) => m.domaine === hote) || null;
    }
    const nom = cleDeTitre(article.source);
    if (!nom) return null;
    /* Le nom exact, ou le nom suivi d un suffixe de domaine et de rien
       d autre : « Le Monde.fr », « Capital.fr ». La premiere version acceptait
       n importe quelle suite, et « RTL Info », media BELGE, est passe pour RTL
       sur la page francaise (13 septembre 2026). */
    const SUFFIXE_DE_DOMAINE = /^(fr|com|net|org|eu|hu|co uk)$/;
    return medias.find((m) => [cleDeTitre(m.nom), cleDeTitre(m.domaine)]
        .some((c) => nom === c ||
            (nom.startsWith(c + " ") && SUFFIXE_DE_DOMAINE.test(nom.slice(c.length + 1))))) || null;
}

/* Un titre qui n en est pas un. « IA Local souveraine pour tous vos
   collaborateurs securise gratuite » est passe sur le site : c est un
   communique de presse mal degrossi, sans verbe, empile d adjectifs. On ne
   sait pas detecter cela en general — mais on peut ecarter les titres qui
   crient, ce qui est le marqueur le plus fiable du communique. */
function crie(titre) {
    // \p{L} et non A-Za-zÀ-ÿ : le hongrois écrit ő et ű, hors de cette plage.
    const lettres = titre.replace(/[^\p{L}]/gu, "");
    if (lettres.length < 20) return false;
    const majuscules = (titre.match(/\p{Lu}/gu) || []).length;
    return majuscules / lettres.length > 0.5;
}

/* --------------------------------------------------------------------------
   LE COMMUNIQUE PRODUIT

   Le 25 aout, Ludo fait retirer :

     « BNI presente wondrZ, un compte d epargne pour enfants et adolescents
       pour apprendre a gerer les finances des le plus jeune age »

   Aucun des filets ne pouvait le voir. Il n a pas de tournure promotionnelle —
   ni « meilleur », ni « comparatif », ni « top 10 ». Il ne crie pas. Sa source
   n etait pas connue. Il est bien range sous « L epargne », et la regle de
   pertinence le trouve legitime. C est un communique de presse produit, ecrit
   correctement, et c est exactement de la publicite sur un site dont les
   mentions legales promettent « aucune publicite, aucun lien remunere ».

   POURQUOI LE VERBE NE SUFFIT PAS

   Le reflexe serait d ecarter « presente », « lance », « devoile ». Mesure sur
   l historique : 18 titres les portent, et la majorite est du vrai journalisme.

     « Bercy devoile son plan pour renforcer la cybersecurite »
     « le gouvernement annonce une simplification de la procedure »
     « Les erreurs fatales a eviter quand on se lance dans l entrepreneuriat »

   Ecarter sur le verbe seul supprimerait ces trois-la. Le verbe dit qu il se
   passe quelque chose, pas que c est de la publicite.

   CE QUI DISTINGUE REELLEMENT LE COMMUNIQUE

   Trois elements ENSEMBLE, et c est leur conjonction qui fait la preuve :

     une MARQUE en tete       « BNI »        (pas « le gouvernement »)
     un VERBE d annonce       « presente »
     un PRODUIT NOMME en objet « wondrZ »    (pas « son plan »)

   Le troisieme porte l essentiel. Une institution annonce des noms communs —
   un plan, une campagne, une simplification. Une marque qui annonce un NOM
   PROPRE annonce un produit. C est la difference entre informer et vendre.

   MESURE, avant adoption, sur les 685 couples de l historique :

     titres « marque + verbe d annonce » .......... 12
     ... dont l objet est un produit nomme ........  6   ← ecartes

   Les six : wondrZ (BNI), un VPN souverain (EHO.LINK), « Gladiator Training
   Data Analytics » (Thales), Claude Sonnet 4.5 (Anthropic), AI Futures
   (OpenAI), « Personal Computer » (Perplexity).

   Les six autres sont epargnes parce que leur objet est un nom commun :
   Microsoft « un nouvel outil », Google Analytics « un nouveau filtre »,
   Google « sa vision du futur », BANK OF AFRICA « une campagne de
   recrutement », l Iran « la fin des discussions ».

   LES EDITEURS QUE LE SITE ENSEIGNE — decision de Ludo, le 25 aout

   Le filtre ne faisait au depart aucune difference entre BNI et Anthropic :
   meme forme, meme nature d ecrit. Ludo a tranche autrement, et la distinction
   qu il demande tient debout.

   Un compte d epargne est un PRODUIT PROPOSE AU LECTEUR : le mentionner, c est
   faire de la publicite. Un modele de langage est un SUJET QUE LE SITE
   ENSEIGNE : le parcours IA explique ce qu est un modele, comment en choisir
   un, ce qu il coute. Qu une nouvelle version sorte est une information
   pedagogique, au meme titre qu une nouvelle loi pour le parcours Droit.

   La difference n est pas la notoriete de la marque, c est le rapport entre le
   produit et ce que le site apprend. D ou une liste — courte, explicite, et
   qui ne grandit que pour une raison ecrite.

   ATTENTION en y ajoutant un nom : le critere n est pas « cette marque est
   connue » ni « ce produit est bon », mais « les guides enseignent cette
   chose-la ». Le jour ou un guide parlerait d une banque en ligne, ajouter
   cette banque ici rouvrirait exactement le trou que wondrZ a montre.
   -------------------------------------------------------------------------- */

const EDITEURS_SUIVIS = [
    "OpenAI",        // le parcours IA enseigne les modeles et leur choix
    "Anthropic",     // idem
    "Mistral",       // idem, et c est l editeur francais de reference
    "Google",        // modeles, mais aussi analytics et referencement
    "Microsoft",     // idem
    "Meta",          // modeles ouverts, cites dans le parcours IA
    "Perplexity",    // moteur de recherche par IA, meme metier que ci-dessus
    "Hugging Face",  // la plateforme ou vivent les modeles ouverts
];

/* Le nom detecte en tete de titre est-il un editeur suivi ? On compare aussi
   le premier mot seul, « Google Analytics » devant valoir « Google ». */
function estUnEditeurSuivi(marque) {
    const reduit = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").trim();
    const nom = reduit(marque);
    const premier = reduit(marque.split(/\s+/)[0]);
    return EDITEURS_SUIVIS.some((e) => {
        const c = reduit(e);
        return c === nom || c === premier;
    });
}

const VERBES_D_ANNONCE =
    "présente|presente|lance|dévoile|devoile|annonce|déploie|deploie|" +
    "introduit|inaugure|commercialise";

/* Les mots qui interdisent de prendre un groupe pour une marque. « le
   gouvernement », « la CNIL » : l article revele le nom commun ou l entite
   designee, pas la marque qui communique. */
const MOTS_OUTILS = /^(le|la|les|l|un|une|des|du|de|d|au|aux|ce|cet|cette|ces|son|sa|ses|leur|leurs|en|pour|avec|dans|sur|par|apres|après|quand|comment|pourquoi|qui|que|et|ou|mais|face|plus|moins)$/i;

/* Les determinants a franchir pour atteindre l objet reel du verbe :
   « lance UN NOUVEAU filtre » — ce qui compte est « filtre ». */
const DETERMINANTS = /^(le|la|les|l|un|une|des|du|de|d|au|aux|ce|cet|cette|ces|son|sa|ses|leur|leurs|mon|ma|mes|notre|nos|votre|vos|nouveau|nouvelle|nouveaux|nouvelles|premier|première|premiere)$/i;

// « L Iran », « D Alembert » : l apostrophe trahit un article accroche au mot.
// Sans cela « L Iran annonce » passait pour une marque annoncant quelque chose.
const COMMENCE_PAR_UN_ARTICLE = /^(l|d|n|j|c|s|m|t|qu)['’]/i;

function estUneMarque(mots) {
    if (!mots.length || mots.length > 3) return false;
    if (mots.some((m) => MOTS_OUTILS.test(m) || COMMENCE_PAR_UN_ARTICLE.test(m))) return false;
    return mots.every((m) => /^[\p{Lu}\p{N}]/u.test(m));
}

/* Le premier mot utile apres le verbe. Un nom propre, un sigle ou une casse
   interne designent un produit ; un nom commun designe une action. On ne
   regarde QUE ce premier mot : chercher plus loin ferait prendre « un plan
   RGPD » pour un produit a cause du sigle, alors que l objet est « plan ». */
function produitAnnonce(reste) {
    const r = reste.trim();
    if (/^[«"“'‘]/.test(r)) return "(entre guillemets)";
    for (const mot of r.split(/\s+/)) {
        if (DETERMINANTS.test(mot)) continue;
        const propre = mot.replace(/[,.;:!?)»"”]+$/, "");
        if (/^\p{Lu}[\p{Lu}\p{N}.&-]+$/u.test(propre)) return propre;   // VPN, ETF
        if (/\p{Ll}[\p{Lu}]/u.test(propre)) return propre;              // wondrZ
        if (/^\p{Lu}/u.test(propre)) return propre;                     // Claude
        return null;                                                     // nom commun
    }
    return null;
}

/* Renvoie le nom du produit annonce, ou null. Le titre est decoupe aux deux
   points : un communique se glisse souvent derriere une accroche redactionnelle
   — « Premiere mondiale : X lance Y ». */
function communiqueProduit(titre) {
    const MOT = "[\\p{L}][\\p{L}\\p{N}.'’&-]*";
    const forme = new RegExp(
        `^\\s*((?:${MOT}\\s+){0,2}${MOT})\\s+(?:${VERBES_D_ANNONCE})\\b(.*)$`, "iu");

    /* Le tiret entoure d espaces coupe aussi : « PARIS : Finance verte -
       Goodvest lance Rive 3, un produit d epargne » passait le filtre, parce que
       seuls les deux-points et les tirets longs decoupaient le titre (en ligne le
       13 septembre 2026). Un tiret colle — « e-commerce », « Saint-Etienne » —
       ne coupe pas : il fait partie du mot. */
    for (const segment of titre.split(/\s*[:–—]\s*|\s+-\s+/).filter(Boolean)) {
        const m = segment.match(forme);
        if (!m) continue;
        if (!estUneMarque(m[1].split(/\s+/))) continue;
        // Un editeur dont le site enseigne les produits informe, il ne vend pas.
        if (estUnEditeurSuivi(m[1])) continue;
        const produit = produitAnnonce(m[2]);
        if (produit) return produit;
    }
    return null;
}

/* --------------------------------------------------------------------------
   LA PERTINENCE

   Le filtre precedent traquait la PUBLICITE. Il ne voyait pas le hors-sujet,
   qui s est revele bien plus frequent : le 23 aout, 15 des 24 articles en
   ligne n avaient rien a voir avec la section a laquelle ils etaient
   rattaches. 62 %.

   La cause est toujours la meme — un mot de la recherche apparait dans le
   titre, mais dans un AUTRE SENS :

     « La diversification ECONOMIQUE d un pays »  sous « la diversification
                                                  d un PORTEFEUILLE »
     « les JETONS d IA » au sens de revenus       sous « le contexte et les
                                                  JETONS » du modele
     « l Agefiph FINANCE ses dossiers »           sous « choisir son
                                                  enveloppe », guide Finance
     « BJ s (BJRI): Buy, Sell, or Hold »          sous « les unit economics »

   La regle : DEUX mots significatifs de la recherche, au moins, doivent
   figurer dans le titre. Un seul mot commun est une coincidence ; deux le sont
   rarement.

   Ce filtre est volontairement severe et il ecarte de bons articles — mesure
   sur les donnees reelles, il en refuse quelques-uns qui meritaient de rester.
   C est un echange accepte : la veille interroge 169 sections deux fois par
   jour, le vivier est large, et un article manquant coute moins cher qu un
   article absurde sous un guide.

   CE QUE CETTE REGLE NE VOYAIT PAS (corrige le 25 aout 2026)
   ----------------------------------------------------------

   Compter deux mots communs ne dit pas D OU ils viennent. Or la recherche est
   faite de deux morceaux qui n ont pas la meme valeur :

     le SUJET, c est-a-dire le nom du parcours  — « Marketing Digital »
     la SECTION, l intitule precis du chapitre  — « Le cadre juridique »

   Le sujet est large par construction : il vaut pour les dix ou quinze
   sections du parcours. S il suffit a lui seul, il devient un laissez-passer —
   n importe quel article de marketing entre sous n importe quelle section de
   marketing. C est ce qui est arrive a :

     « Couleurs, influenceurs et algorithmes : comment le marketing digital
       cible les enfants »        publie sous « Le cadre juridique »

   Deux mots communs, « marketing » et « digital », tous deux venant du nom du
   parcours, aucun de la section. L article n est pas mauvais : il est mal
   range, ce qui sur une page classee par chapitre revient au meme pour qui lit.

   D ou la regle ajoutee : au moins UN mot commun doit venir de la SECTION.
   C est elle qui discrimine ; le sujet ne fait que confirmer.

   MESURE SUR L HISTORIQUE COMPLET, avant de l adopter — 685 couples
   (article, section) tires des 51 rapports de veille depuis le 6 aout :

     admis par la regle a deux mots seule ....... 175
     admis en exigeant un mot de la section ..... 139
     ecartes en plus ............................  36  (20,6 %)

   Les 36 ont ete relus un par un. La grande majorite etait effectivement mal
   rangee — « Directeur Marketing Digital : etudes, missions, salaires » sous
   « SEO », « 7 Popular Data Analytics Certifications » sous « Les tests A/B »,
   « Guerre en Iran : le plan de negociation avance par Teheran » sous
   « Savoir s arreter ». Deux ou trois meritaient de rester, dont :

     « Quelle IA pour quel usage ? Le guide 2026 »  sous « Choisir un modele »

   qui parle bien de choisir un modele, mais sans jamais employer ces mots-la.
   C est la limite assumee d un filtre lexical : il compare des mots, pas des
   sens. Le compte reste tres favorable — une trentaine d articles absurdes
   evites contre deux bons perdus, et ces deux-la peuvent toujours reparaitre
   sous la section dont ils portent les mots.
   -------------------------------------------------------------------------- */

// « Épargne » et « epargne », « ETF » et « etf », « jetons » et « jeton » :
// c est le meme mot. On compare des formes reduites.
/* Depuis le 13 septembre 2026, chaque langue a sa veille, et la reduction
   depend de la langue.

   Le francais garde exactement sa regle : pluriel en -s, journaux -> journal.

   L anglais retire aussi -ing et -ed : « Saving » doit retrouver « savings »,
   « Automated testing » retrouver « tests ». Seulement au-dela de cinq
   lettres, pour que « red » ou « king » restent entiers.

   Le hongrois ne se reduit pas : c est une langue a suffixes, et « adatok »,
   « adatvédelmi », « megtakarításait » ne se ramenent pas a leur racine en
   coupant une lettre. Il se compare autrement, dans « memeMot ». */
function reduire(mot, langue = "fr") {
    let m = mot
        .toLowerCase()
        .normalize("NFD").replace(/[̀-ͯ]/g, "")   // accents (ő et ű compris)
        .replace(/[^a-z0-9]/g, "");
    if (langue === "fr") {
        return m
            .replace(/(aux|eaux)$/, "al")                    // journaux -> journal
            .replace(/s$/, "");                              // pluriel simple
    }
    if (langue === "en") {
        m = m.replace(/(ches|shes|sses|xes)$/, (f) => f.slice(0, -2))   // breaches, taxes
             .replace(/ies$/, "y")                                      // policies
             .replace(/([^s])s$/, "$1");                                // tests
        if (m.length > 5) m = m.replace(/(ing|ed)$/, "");
        return m;
    }
    return m;
}

const MOTS_VIDES_PAR_LANGUE = {
    fr: ["le", "la", "les", "un", "une", "des", "du", "de", "et", "ou", "a", "au",
         "aux", "en", "dan", "sur", "pour", "par", "avec", "san", "que", "qui",
         "quoi", "quel", "quelle", "est", "ce", "cette", "ce", "son", "se", "sa",
         "leur", "plu", "son", "ver", "chez", "entre"],
    en: ["the", "and", "for", "with", "your", "you", "what", "how", "why", "when", "rather",
         "than", "into", "from", "that", "this", "its", "are", "not", "who", "which", "where",
         "before", "after", "about", "between", "over", "can", "more", "most", "really"],
    hu: ["egy", "és", "vagy", "avagy", "hogy", "mit", "mint", "nem", "amely", "amelyek",
         "amelyet", "amit", "aki", "mielőtt", "helyett", "nélkül", "úgy", "hogyan", "kell",
         "ezt", "azt", "saját", "van", "lesz", "már", "még", "csak", "ahol", "után", "előtt",
         "alatt", "között", "miért", "mikor", "melyik", "rád", "neked", "magad", "mielott"],
};
const MOTS_IGNORES = Object.fromEntries(Object.entries(MOTS_VIDES_PAR_LANGUE)
    .map(([langue, mots]) => [langue, new Set(mots.map((m) => reduire(m, langue)))]));

// Les mots d une recherche ou d un intitule, reduits et debarrasses des mots
// vides. Le Set evite qu un mot repete compte deux fois.
function motsUtiles(texte, langue = "fr") {
    const ignores = MOTS_IGNORES[langue] || MOTS_IGNORES.fr;
    return new Set(
        String(texte)
            .split(/[\s'’,:;.!?()«»"\/–—-]+/)
            .map((m) => reduire(m, langue))
            .filter((m) => m.length > 2 && !ignores.has(m))
    );
}

/* Deux mots sont-ils le meme ? En francais et en anglais, apres reduction,
   il faut l egalite.

   En hongrois, deux cas suffisent :
     - le plus court est le debut du plus long, et fait au moins quatre
       lettres : « adat » / « adatok », « megtakaritas » / « megtakaritasait » ;
     - les deux partagent au moins six lettres de debut : « adatvedelem » /
       « adatvedelmi », ou le suffixe a modifie la fin de la racine.
   Quatre lettres, pas moins : « kor » (age) n a pas a retrouver « kormany »
   (gouvernement). */
function memeMot(a, b, langue) {
    if (a === b) return true;
    if (langue !== "hu") return false;
    const [court, long] = a.length <= b.length ? [a, b] : [b, a];
    if (court.length >= 4 && long.startsWith(court)) return true;
    let commun = 0;
    while (commun < court.length && court[commun] === long[commun]) commun++;
    return commun >= 6;
}

const MINIMUM_MOTS_COMMUNS = 2;

/* Combien de ces mots communs doivent venir de la section, et non du seul nom
   du parcours. Un suffit : on demande que la section soit representee, pas
   qu elle porte tout le poids. */
const MINIMUM_MOTS_SECTION = 1;

/* Combien de mots la recherche et le titre ont-ils reellement en commun.
   Exporte pour que la mesure soit possible ailleurs : une regle qu on ne peut
   pas eprouver sur des donnees reelles ne vaut pas mieux qu une intuition. */
function motsCommuns(titre, recherche, langue = "fr") {
    const cherches = motsUtiles(recherche, langue);
    const dansLeTitre = [...motsUtiles(titre, langue)];
    return [...cherches].filter((m) => dansLeTitre.some((t) => memeMot(m, t, langue)));
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
/* Verdict sur un article, « recherche » etant les mots qui l ont fait remonter.
   Quand elle n est pas connue — la publication ne dispose que de la section et
   du sujet — on la reconstitue a partir de ceux-la : ce sont exactement les
   mots dont la veille avait forme sa requete.

   « section » est l intitule du chapitre, passe a part car la regle de
   pertinence a besoin de le distinguer du nom du parcours (voir plus haut).
   La veille le connait et le transmet ; a la publication il est deja porte par
   l article lui-meme. */
function admissible(article, recherche, section) {
    const titre = article.titre || "";
    // Les articles d avant le 13 septembre 2026 n ont pas de langue : ils
    // venaient tous de la veille francaise.
    const langue = article.langue || "fr";
    const intitule = section || article.section || "";
    const requete = recherche || `${article.sujet || ""} ${article.section || ""}`;

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
    for (const { motif, quoi } of TOURNURES_PAR_LANGUE[langue] || TOURNURES_PROMOTIONNELLES) {
        if (motif.test(titre)) return { ok: false, raison: quoi };
    }

    // Le communique produit se juge sur la nature de l ecrit, comme les
    // tournures ci-dessus : il vient donc avec elles, avant la pertinence.
    //
    // En francais seulement. La forme repose sur l ordre « marque, verbe,
    // produit » et sur des verbes francais ; le hongrois place le verbe
    // ailleurs. C est la liste des medias qui tient ce role dans les deux
    // autres langues : un grand journal ne republie pas un communique tel quel.
    const produit = langue === "fr" ? communiqueProduit(titre) : null;
    if (produit) {
        return { ok: false, raison: `communiqué produit (« ${produit} »)` };
    }

    // Apres les regles de titre, pour que chaque refus dise sa vraie raison :
    // un palmares d un site inconnu est d abord un palmares.
    if (!mediaReconnu(article)) {
        return { ok: false, raison: `média non retenu (${article.site || article.source || "?"})` };
    }

    // La pertinence en dernier : c est la regle la plus severe, autant qu elle
    // s applique a ce qui a passe tout le reste. La raison nomme les mots
    // trouves, sans quoi un refus serait indiscutable faute d etre lisible.
    const communs = motsCommuns(titre, requete, langue);
    if (communs.length < MINIMUM_MOTS_COMMUNS) {
        const vus = communs.length ? ` (seul « ${communs[0]} » en commun)` : " (aucun mot en commun)";
        return { ok: false, raison: `hors sujet${vus}` };
    }

    /* Puis d ou viennent ces mots. On n exige la representation de la section
       que si elle a elle-meme des mots a offrir : un intitule qui se reduirait
       a des mots vides — « Les bases », « Le pourquoi » — rendrait la regle
       impossible a satisfaire et viderait la section de tout article. Aucun
       des 129 intitules de l historique n est dans ce cas, mais le prochain
       pourrait l etre, et il tomberait alors en silence. */
    const motsDeLaSection = motsCommuns(intitule, intitule, langue);
    if (motsDeLaSection.length) {
        const communsSection = motsCommuns(titre, intitule, langue);
        if (communsSection.length < MINIMUM_MOTS_SECTION) {
            return {
                ok: false,
                raison: `mal rangé : « ${communs.join(" », « ")} » vient du parcours, ` +
                        `rien de la section « ${intitule} »`,
            };
        }
    }

    return { ok: true };
}

/* --------------------------------------------------------------------------
   LE MEME ARTICLE, SOUS DEUX ADRESSES (corrige le 13 septembre 2026)

   Google News donne une adresse differente au meme article selon la recherche
   qui l a fait remonter. Le dedoublonnage, fait par lien, laissait donc passer
   deux fois le meme titre. En ligne le 12 septembre :

     « L'ONU demande des limites urgentes a l'IA… »            deux fois
     « Cybersecurite : face aux fuites de donnees, l'Anssi… »  Le Figaro
     « Cybersecurite: face aux fuites de donnees, l'Anssi… »   TradingView

   Le second ne differe du premier que par une espace. Sur une page limitee a
   vingt-quatre articles, chaque doublon prend la place d un article.

   La cle ignore la casse, les accents, la ponctuation et les espaces : deux
   titres qui ne different que par la typographie sont le meme titre. Elle ne
   rapproche PAS deux articles differents sur la meme affaire — ce serait juger
   du sens, ce qu un filtre lexical ne sait pas faire. C est le plafond par
   section, dans scripts/publier-actualites.js, qui empeche une affaire unique
   de remplir la page. */
function cleDeTitre(titre) {
    return String(titre || "")
        .toLowerCase()
        .normalize("NFD").replace(/[̀-ͯ]/g, "")
        .replace(/[^a-z0-9]+/g, " ")
        .trim();
}

module.exports = { AGE_MAX_JOURS, assezRecent, admissible, motsCommuns, cleDeTitre,
                   MINIMUM_MOTS_COMMUNS, MINIMUM_MOTS_SECTION,
                   communiqueProduit, TOURNURES_PROMOTIONNELLES, TOURNURES_PAR_LANGUE,
                   SOURCES_ECARTEES, EDITEURS_SUIVIS, mediaReconnu, MOTS_VIDES_PAR_LANGUE };
