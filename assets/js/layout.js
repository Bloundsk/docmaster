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
                    <li><a href="${base}actualites.html">Actualités</a></li>
                    <li><a href="${base}glossaire.html">Glossaire</a></li>
                    <li><a href="${base}idees.html">Boîte à idées</a></li>
                    <li><a href="${base}faq.html">FAQ</a></li>
                    <li><a href="${base}a-propos.html">À propos</a></li>
                    <li><a href="${base}mon-espace.html">⭐ Mon espace</a></li>
                </ul>
                <button id="theme-toggle" class="theme-toggle" aria-label="Activer ou désactiver le mode sombre">🌙</button>
            </div>
        </nav>`;

    const footerHTML = `
        <footer>
            <p>© DocMaster</p>
            <!-- Même ordre que la barre de navigation, pour qu'un lien se cherche
                 au même endroit en haut et en bas. « Accueil » n'y figure pas :
                 le logo y mène déjà. Les mentions légales ferment la liste,
                 comme il est d'usage. -->
            <nav aria-label="Liens de pied de page">
                <a href="${base}actualites.html">Actualités</a>·
                <a href="${base}glossaire.html">Glossaire</a>·
                <a href="${base}idees.html">Boîte à idées</a>·
                <a href="${base}faq.html">FAQ</a>·
                <a href="${base}a-propos.html">À propos</a>·
                <a href="${base}mon-espace.html">Mon espace</a>·
                <a href="${base}mentions-legales.html">Mentions légales</a>
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

        // « load » est la mesure qui compte : à DOMContentLoaded, la feuille de
        // style peut n'être pas encore appliquée, et la navbar est alors mesurée
        // dans sa forme brute — les liens empilés, 126 px au lieu de 70. La
        // valeur restait figée sur cette mesure fausse chez tout visiteur
        // arrivant sans le CSS en cache, c'est-à-dire au premier passage.
        window.addEventListener("load", appliquer);

        // Redimensionnement et rotation de l'écran.
        window.addEventListener("resize", appliquer);

        // Les polices arrivent souvent après le reste et modifient la hauteur.
        if (document.fonts && document.fonts.ready) document.fonts.ready.then(appliquer);

        // Filet supplémentaire là où il fonctionne. À ne pas considérer comme
        // acquis : sur certains navigateurs, il ne se déclenche jamais.
        if (window.ResizeObserver) {
            try { new ResizeObserver(appliquer).observe(navbar); } catch (e) {}
        }

        // Et une surveillance courte, parce que les deux filets ci-dessus ont
        // déjà laissé passer le cas ensemble.
        //
        // Tant que la police de secours est appliquée, les liens sont plus
        // larges : à sept entrées, ils passent sur deux lignes et la navbar
        // fait 126 px. Quand Poppins arrive, ils reviennent sur une ligne et
        // elle retombe à 70. Or « load » se déclenche AVANT ce basculement,
        // et `document.fonts.ready` se résout trop tôt : la valeur restait
        // figée à 138 px, soit 56 px de titre cachés sur tout le site.
        //
        // On remesure donc pendant trois secondes, et on s'arrête dès que la
        // hauteur ne bouge plus. Le coût est d'une lecture par image : rien.
        let derniere = -1;
        let stables = 0;
        const debut = Date.now();
        const surveiller = () => {
            const h = Math.round(navbar.getBoundingClientRect().height);
            if (h !== derniere) {
                derniere = h;
                stables = 0;
                appliquer();
            } else if (++stables > 20) {
                return;   // dix bonnes images sans changement : c'est fini
            }
            if (Date.now() - debut < 3000) requestAnimationFrame(surveiller);
        };
        requestAnimationFrame(surveiller);
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

        // Mesure d'usage a l'interieur des guides : sous-sections ouvertes,
        // favoris, guides termines. Charge ici plutot que page par page, pour
        // la meme raison que le comptage lui-meme : une seule ligne a maintenir.
        const mesure = document.createElement("script");
        mesure.src = base + "assets/js/mesure.js";
        mesure.defer = true;
        document.head.appendChild(mesure);
    }
})();
