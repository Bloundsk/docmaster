// ===================================
// CLICKED - IDENTITÉ DU SITE
// ===================================
//
// Source unique du nom, de la signature, de l'adresse de base et du texte
// alternatif de l'image de partage. Même rôle que parcours.js pour la
// structure : ce qui est écrit ici une fois n'est écrit nulle part ailleurs.
//
// Avant ce fichier, ces quatre données étaient recopiées dans les 129 pages :
// titre, description, huit balises Open Graph et Twitter, adresse canonique,
// trois hreflang. Renommer le site revenait à un chercher-remplacer sur
// 1 586 occurrences — la manœuvre exacte qui avait laissé 45 pages annoncer
// « 9 guides gratuits » alors qu'il y en avait 14.
//
// CE FICHIER NE PEINT RIEN DANS LE <head>. Les robots des réseaux sociaux
// n'exécutent pas JavaScript : une balise og: posée à l'affichage n'existe pas
// pour eux, et tout partage montrerait un aperçu vide. C'est
// scripts/appliquer-identite.js qui écrit ces balises dans les fichiers, à
// partir d'ici, et le hook pre-commit qui le lance. Les pages en ligne ne
// chargent ce fichier que pour ce qui est réellement peint par le navigateur :
// le logo, le pied de page.

window.DOCMASTER_IDENTITE = (function () {
    const nom = "Clicked";

    return {
        nom,

        /* Les noms précédents, du plus récent au plus ancien.
           Ils servent au script de génération à retrouver la partie propre à
           chaque page dans un titre déjà écrit : « Finance — Débutant » se
           déduit de « Finance — Débutant - DocMaster » en retirant le nom,
           quel qu'il ait été.
           Un renommage futur ajoute une ligne ici, et une seule. */
        anciensNoms: ["DocMaster"],

        /* Le logo de la barre de navigation est bicolore : la seconde moitié
           prend la couleur d'accent (« .logo span » dans style.css). On dit ici
           où couper, plutôt que d'écrire le HTML du logo dans layout.js — sinon
           le nom serait écrit deux fois, une fois entier et une fois découpé,
           et un renommage n'en corrigerait qu'une. */
        coupureLogo: 5,   // Click | ed

        /* La signature affichée sous le logo. Le nom seul ne dit pas ce que
           fait le site — « Clicked » pourrait être n'importe quoi — donc la
           signature doit le dire en un regard, et non le suggérer. */
        signature: {
            fr: "Des parcours gratuits pour comprendre les compétences de demain.",
            en: "Free learning paths to understand the skills that matter next.",
        },

        // Ce qui suit le nom dans le titre de la page d'accueil, elle seule.
        accroche: {
            fr: "Bibliothèque de connaissances",
            en: "A library of knowledge",
        },

        /* L'adresse de base, barre oblique finale comprise. En découlent les
           129 adresses canoniques, les 129 og:url, les 192 hreflang, les 258
           adresses d'image de partage, le sitemap et robots.txt.
           Déplacer le site coûte cette ligne, plus une exécution du script. */
        base: "https://bloundsk.github.io/docmaster/",

        // Relative à la base ; jamais écrite en dur ailleurs.
        imagePartage: "assets/img/og-image.png",

        /* Le texte alternatif de l'image de partage. Il porte À LA FOIS le nom
           et le nombre de parcours : c'est cette phrase, recopiée dans 45
           pages, qui a menti pendant deux ajouts de sujet.
           Le nombre n'est donc pas écrit ici non plus — il est reçu, et il
           vient de parcours.js. */
        textePartage: (nbParcours) => ({
            fr: `${nom} — ${nbParcours} guides gratuits pour apprendre les compétences de demain`,
            en: `${nom} — ${nbParcours} free guides to learn the skills of tomorrow`,
        }),
    };
})();
