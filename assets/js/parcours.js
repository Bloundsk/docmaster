// ===================================
// DOCMASTER - STRUCTURE DES PARCOURS
// ===================================
//
// Source unique de verite sur le decoupage des sujets. Un sujet peut etre
// d un seul tenant (une page) ou decoupe en niveaux (une page par niveau).
//
// Ce fichier existe pour qu une seule ligne soit a modifier lorsqu un sujet
// gagne ses niveaux. Sans lui, la progression de « Mon espace » reposerait sur
// un total ecrit en dur, qui deviendrait faux au premier sujet decoupe — et
// personne ne s en apercevrait, puisque le chiffre resterait plausible.
//
// « niveaux » vide signifie : le sujet tient dans index.html.

window.DOCMASTER_PARCOURS = {
    finance:         { titre: "💰 Finance",                     niveaux: ["debutant", "intermediaire", "avance"] },
    ia:              { titre: "🤖 Intelligence Artificielle",   niveaux: ["debutant", "intermediaire", "avance"] },
    "dev-web":       { titre: "💻 Développement Web",           niveaux: [] },
    marketing:       { titre: "📢 Marketing Digital",           niveaux: [] },
    cybersecurite:   { titre: "🔒 Cybersécurité",               niveaux: ["debutant", "intermediaire", "avance"] },
    entrepreneuriat: { titre: "🚀 Entrepreneuriat",             niveaux: [] },
    productivite:    { titre: "⏱️ Productivité & Organisation", niveaux: [] },
    data:            { titre: "📊 Data & Analytics",            niveaux: [] },
    design:          { titre: "🎨 Design UX/UI",                niveaux: [] }
};

window.DOCMASTER_NIVEAUX = {
    debutant:      "Débutant",
    intermediaire: "Intermédiaire",
    avance:        "Avancé"
};

// Toutes les pages porteuses de contenu, dans l ordre de lecture.
// Un sommaire de parcours n en fait pas partie : il ne se « termine » pas.
window.DOCMASTER_PAGES = (function () {
    const pages = [];
    for (const [sujet, info] of Object.entries(window.DOCMASTER_PARCOURS)) {
        if (info.niveaux.length) {
            for (const niveau of info.niveaux) {
                pages.push({
                    sujet, niveau,
                    chemin: `guides/${sujet}/${niveau}.html`,
                    titre: info.titre,
                    libelle: window.DOCMASTER_NIVEAUX[niveau] || niveau
                });
            }
        } else {
            pages.push({
                sujet, niveau: "",
                chemin: `guides/${sujet}/index.html`,
                titre: info.titre,
                libelle: ""
            });
        }
    }
    return pages;
})();
