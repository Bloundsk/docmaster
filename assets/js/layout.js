// ===================================
// DOCMASTER AI - MISE EN PAGE PARTAGÉE
// (navbar + footer uniques, plus besoin de dupliquer le HTML dans chaque page)
// ===================================

// window.DOCMASTER_BASE doit être défini AVANT ce script :
// "" pour la page d'accueil, "../../" pour les pages de guides

(function () {
    const base = window.DOCMASTER_BASE || "";

    const navbarHTML = `
        <nav class="navbar">
            <div class="nav-container">
                <a href="${base}index.html" class="logo">Doc<span>Master</span> AI</a>
                <ul class="nav-links">
                    <li><a href="${base}index.html">Accueil</a></li>
                    <li><a href="${base}glossaire.html">Glossaire</a></li>
                    <li><a href="${base}a-propos.html">À propos</a></li>
                </ul>
                <button id="theme-toggle" class="theme-toggle" aria-label="Activer ou désactiver le mode sombre">🌙</button>
            </div>
        </nav>`;

    const footerHTML = `
        <footer>
            <p>© DocMaster AI</p>
            <nav aria-label="Liens de pied de page">
                <a href="${base}a-propos.html">À propos</a>·
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
    });
})();
