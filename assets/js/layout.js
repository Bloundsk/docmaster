// ===================================
// DOCMASTER - MISE EN PAGE PARTAGÉE
// (navbar + footer uniques, plus besoin de dupliquer le HTML dans chaque page)
// ===================================

// window.DOCMASTER_BASE doit être défini AVANT ce script :
// "" pour la page d'accueil, "../../" pour les pages de guides

(function () {
    const base = window.DOCMASTER_BASE || "";

    const navbarHTML = `
        <nav class="navbar">
            <div class="nav-container">
                <a href="${base}index.html" class="logo">Doc<span>Master</span></a>
                <ul class="nav-links">
                    <li><a href="${base}index.html">Accueil</a></li>
                    <li><a href="${base}glossaire.html">Glossaire</a></li>
                    <li><a href="${base}faq.html">FAQ</a></li>
                    <li><a href="${base}idees.html">Boîte à idées</a></li>
                    <li><a href="${base}mon-espace.html">⭐ Mon espace</a></li>
                    <li><a href="${base}a-propos.html">À propos</a></li>
                </ul>
                <button id="theme-toggle" class="theme-toggle" aria-label="Activer ou désactiver le mode sombre">🌙</button>
            </div>
        </nav>`;

    const footerHTML = `
        <footer>
            <p>© DocMaster</p>
            <nav aria-label="Liens de pied de page">
                <a href="${base}a-propos.html">À propos</a>·
                <a href="${base}faq.html">FAQ</a>·
                <a href="${base}idees.html">Boîte à idées</a>·
                <a href="${base}mon-espace.html">Mon espace</a>·
                <a href="${base}mentions-legales.html">Mentions légales</a>·
                <a href="${base}glossaire.html">Glossaire</a>
            </nav>
        </footer>`;

    document.write('<a href="#main-content" class="skip-link">Aller au contenu principal</a>');
    document.write(navbarHTML);

    window.addEventListener("DOMContentLoaded", () => {
        const footerPlaceholder = document.getElementById("footer-placeholder");
        if (footerPlaceholder) {
            footerPlaceholder.outerHTML = footerHTML;
        }
        mesurerNavbar();
    });

    // La navbar est collante : sans compensation, elle recouvre le titre de la
    // section visée par un lien d'ancre. Le CSS pose une valeur de repli, mais
    // une constante ne peut pas suivre une navbar dont la hauteur dépend de la
    // largeur de l'écran : entre 700 px et ~840 px les liens passent sur une
    // deuxième ligne, la navbar atteint 123 px, et 40 px du titre restaient
    // cachés. On mesure donc la hauteur réelle plutôt que de la deviner.
    function mesurerNavbar() {
        const navbar = document.querySelector(".navbar");
        if (!navbar) return;
        const appliquer = () => {
            const h = Math.round(navbar.getBoundingClientRect().height);
            if (h > 0) {
                document.documentElement.style.setProperty("--decalage-ancre", (h + 12) + "px");
            }
        };
        appliquer();
        // Redimensionnement, rotation de l'écran, ou polices chargées après coup :
        // autant d'occasions pour la navbar de changer de hauteur.
        window.addEventListener("resize", appliquer);
        if (document.fonts && document.fonts.ready) document.fonts.ready.then(appliquer);
        if (window.ResizeObserver) new ResizeObserver(appliquer).observe(navbar);
    }

    // Statistiques d'audience (GoatCounter) : aucun cookie, aucune donnée personnelle.
    // Placé ici plutôt que dans chaque page : toutes les pages chargent ce script.
    // count.js cherche un script[data-goatcounter] dans le DOM pour trouver son adresse.
    // Inutile en local (file://) : on ne compte que le site en ligne.
    if (location.protocol.startsWith("http")) {
        const analytics = document.createElement("script");
        analytics.async = true;
        analytics.src = "https://gc.zgo.at/count.js";
        analytics.setAttribute("data-goatcounter", "https://bloundsk.goatcounter.com/count");
        document.head.appendChild(analytics);
    }
})();
