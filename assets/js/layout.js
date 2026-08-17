// ===================================
// DOCMASTER - MISE EN PAGE PARTAGÉE
// (navbar + footer uniques, plus besoin de dupliquer le HTML dans chaque page)
// ===================================

// window.DOCMASTER_BASE doit être défini AVANT ce script :
// "" pour la page d'accueil, "../../" pour les pages de guides

(function () {
    const base = window.DOCMASTER_BASE || "";

    // Les libellés viennent de langues.js, chargé juste avant ce fichier. S'il
    // manquait, on retombe sur le français plutôt que d'afficher une page sans
    // navigation : un menu absent est bien pire qu'un menu non traduit.
    const L = window.DOCMASTER_LANGUES;
    const t = L ? L.t : (clef) => ({
        accueil: "Accueil", actualites: "Actualités", glossaire: "Glossaire",
        idees: "Boîte à idées", faq: "FAQ", aPropos: "À propos",
        monEspace: "Mon espace", mentions: "Mentions légales",
        allerContenu: "Aller au contenu principal",
        theme: "Activer ou désactiver le mode sombre",
        choisirLangue: "Choisir la langue",
    }[clef] || "");

    const langue = L ? L.langueChoisie() : "fr";

    /* L'adresse d'une page du site dans la langue courante. Sans cela, un
       visiteur qui a choisi l'anglais et clique « Glossary » atterrissait sur
       la page française : le menu était traduit, mais menait ailleurs.

       Le repli sur le français est volontaire — une page absente donnerait une
       404, ce qu'aucun libellé traduit ne compense. */
    const traduites = (L && L.PAGES_TRADUITES[langue]) || [];
    const lien = (fichier) =>
        base + (traduites.indexOf(fichier) !== -1 ? langue + "/" : "") + fichier;

    /* Le sélecteur repose sur <details> plutôt que sur un menu maison : il
       s'ouvre et se ferme au clavier, se referme avec Échap et s'annonce
       correctement aux lecteurs d'écran, sans une ligne de JavaScript.
       Chaque entrée porte le drapeau ET le nom de la langue — un drapeau
       désigne un pays, pas une langue.

       Le drapeau est un SVG en ligne, écrit dans langues.js : les emojis
       drapeaux ne s'affichent pas sous Windows, qui n'a aucune police pour les
       dessiner et rend « FR » à la place. Il porte déjà sa classe et son
       aria-hidden, on ne l'enveloppe donc plus. */
    const actuelle = L ? L.LANGUES.find((x) => x.code === langue) : null;
    const selecteurHTML = L ? `
                <details class="langues">
                    <summary aria-label="${t("choisirLangue")} (${actuelle.nom})">
                        ${actuelle.drapeau}
                        <span class="langue-chevron" aria-hidden="true">▾</span>
                    </summary>
                    <ul class="langues-liste">
${L.LANGUES.map((l) => `                        <li><button type="button" data-langue="${l.code}" lang="${l.code}"${l.code === langue ? ' aria-current="true"' : ""}>${l.drapeau} ${l.nom}</button></li>`).join("\n")}
                    </ul>
                </details>` : "";

    const navbarHTML = `
        <nav class="navbar">
            <div class="nav-container">
                <a href="${lien("index.html")}" class="logo">Doc<span>Master</span></a>
                <ul class="nav-links">
                    <li><a href="${lien("index.html")}">${t("accueil")}</a></li>
                    <li><a href="${lien("actualites.html")}">${t("actualites")}</a></li>
                    <li><a href="${lien("glossaire.html")}">${t("glossaire")}</a></li>
                    <li><a href="${lien("idees.html")}">${t("idees")}</a></li>
                    <li><a href="${lien("faq.html")}">${t("faq")}</a></li>
                    <li><a href="${lien("a-propos.html")}">${t("aPropos")}</a></li>
                    <li><a href="${lien("mon-espace.html")}">⭐ ${t("monEspace")}</a></li>
                </ul>
                <div class="nav-outils">${selecteurHTML}
                    <button id="theme-toggle" class="theme-toggle" aria-label="${t("theme")}">🌙</button>
                </div>
            </div>
        </nav>`;

    const footerHTML = `
        <footer>
            <p>© DocMaster</p>
            <!-- Même ordre que la barre de navigation, pour qu'un lien se cherche
                 au même endroit en haut et en bas. « Accueil » n'y figure pas :
                 le logo y mène déjà. Les mentions légales ferment la liste,
                 comme il est d'usage. -->
            <nav aria-label="${t("mentions")}">
                <a href="${lien("actualites.html")}">${t("actualites")}</a>·
                <a href="${lien("glossaire.html")}">${t("glossaire")}</a>·
                <a href="${lien("idees.html")}">${t("idees")}</a>·
                <a href="${lien("faq.html")}">${t("faq")}</a>·
                <a href="${lien("a-propos.html")}">${t("aPropos")}</a>·
                <a href="${lien("mon-espace.html")}">${t("monEspace")}</a>·
                <a href="${lien("mentions-legales.html")}">${t("mentions")}</a>
            </nav>
        </footer>`;

    document.write(`<a href="#main-content" class="skip-link">${t("allerContenu")}</a>`);
    document.write(navbarHTML);

    window.addEventListener("DOMContentLoaded", () => {
        const footerPlaceholder = document.getElementById("footer-placeholder");
        if (footerPlaceholder) {
            footerPlaceholder.outerHTML = footerHTML;
        }
        mesurerNavbar();
        marquerDefilementNav();
        brancherSelecteurLangue();
        poserBandeaux();
        traduireInterface();
    });

    /* Choisir une langue la mémorise et recharge la page. Recharger plutôt que
       repeindre : la navigation est écrite par document.write au chargement,
       et la moitié des textes traduits sont posés par d'autres scripts. Tout
       reprendre à la main donnerait un état à moitié traduit au premier oubli.
       Une page se recharge en quelques dizaines de millisecondes, et le choix
       n'est fait qu'une fois. */
    function brancherSelecteurLangue() {
        const bloc = document.querySelector(".langues");
        if (!bloc || !L) return;

        bloc.addEventListener("click", (e) => {
            const bouton = e.target.closest("button[data-langue]");
            if (!bouton) return;
            const code = bouton.dataset.langue;
            L.definirLangue(code);

            // Si le sujet existe dans cette langue, on y va ; sinon on recharge
            // sur place, et le bandeau explique que le cours est en français.
            const ailleurs = L.adresseDansLangue(code);
            if (ailleurs) location.href = ailleurs;
            else location.reload();
        });

        // Échap referme le menu, comme tout menu déroulant.
        bloc.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && bloc.open) {
                bloc.open = false;
                bloc.querySelector("summary").focus();
            }
        });

        // Un clic à côté referme aussi : sans cela le menu resterait ouvert
        // pendant que le visiteur lit la page.
        document.addEventListener("click", (e) => {
            if (bloc.open && !bloc.contains(e.target)) bloc.open = false;
        });
    }

    /* Les deux bandeaux d'honnêteté, dans la langue du visiteur.
       Le premier prévient que les cours sont en français — un drapeau qui
       promet une traduction inexistante est pire que pas de drapeau.
       Le second prévient que le guide décrit le droit français. */
    function poserBandeaux() {
        if (!L || langue === "fr") return;
        const principal = document.getElementById("main-content");
        if (!principal) return;

        const messages = [];
        const sujet = L.sujetCourant();
        if (sujet && L.SUJETS_DROIT_FRANCAIS.indexOf(sujet) !== -1) {
            messages.push({ texte: L.t("reglesFrancaises"), classe: "alerte" });
        }

        /* Trois situations, et une seule phrase juste pour chacune :
           — la page affichée est déjà dans la langue voulue : rien à dire ;
           — elle existe ailleurs dans cette langue : on y renvoie, par un lien ;
           — elle n'existe pas : on le dit, pour cette page et pour elle seule. */
        /* Une page qui traduit son propre texte n'a pas à être annoncée comme
           non traduite. Seule la page 404 est dans ce cas : GitHub Pages la
           sert pour toute adresse inconnue, elle ne peut donc pas exister en
           un exemplaire par langue. */
        if (L.langueDeLaPage() !== langue && !window.DOCMASTER_PAGE_AUTOTRADUITE) {
            const ailleurs = L.adresseDansLangue(langue);
            if (ailleurs) messages.push({ texte: L.t("versionDisponible"), classe: "", vers: ailleurs });
            else messages.push({ texte: L.t("pageNonTraduite"), classe: "" });
        }

        for (const m of messages.reverse()) {
            if (!m.texte) continue;
            const p = document.createElement("p");
            p.className = "bandeau-langue " + m.classe;
            p.setAttribute("lang", langue);
            if (m.vers) {
                const a = document.createElement("a");
                a.href = m.vers;
                a.textContent = m.texte;
                p.appendChild(a);
            } else {
                p.textContent = m.texte;
            }
            principal.insertBefore(p, principal.firstChild);
        }
    }

    /* Les textes d'interface qui vivent dans les pages elles-mêmes, et non
       dans ce fichier : le champ de recherche est écrit dans les 65 pages. */
    function traduireInterface() {
        if (!L || langue === "fr") return;
        const recherche = document.getElementById("search-input");
        if (recherche) recherche.setAttribute("placeholder", L.t("rechercher"));
    }

    // Sur téléphone, la rangée de liens ne tient pas dans la largeur : entre
    // 210 px (écran de 414) et 304 px (écran de 320) sortent de l'écran. La
    // barre de défilement est volontairement masquée — elle ferait un trait
    // disgracieux — si bien que RIEN n'indiquait qu'il y avait une suite.
    // « Boîte à idées », « FAQ », « À propos » et « Mon espace » étaient donc
    // invisibles pour un visiteur sur téléphone, et le resteraient.
    //
    // On marque ici les côtés où il reste quelque chose à voir ; le CSS y pose
    // un dégradé. L'attribut suit le doigt : le dégradé de droite disparaît une
    // fois arrivé au bout, celui de gauche apparaît dès qu'on a fait glisser.
    // Une valeur figée en CSS aurait estompé le dernier lien en fin de course.
    function marquerDefilementNav() {
        const nav = document.querySelector(".nav-links");
        if (!nav) return;

        const marquer = () => {
            // Marge d'un pixel : les navigateurs renvoient parfois des valeurs
            // fractionnaires, et un test strict clignoterait en fin de course.
            const reste = nav.scrollWidth - nav.clientWidth;
            if (reste <= 1) { nav.removeAttribute("data-defile"); return; }
            const x = nav.scrollLeft;
            nav.setAttribute("data-defile",
                x <= 1 ? "droite" : x >= reste - 1 ? "gauche" : "deux");
        };

        marquer();
        window.addEventListener("load", marquer);
        window.addEventListener("resize", marquer);
        nav.addEventListener("scroll", marquer, { passive: true });
    }

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
