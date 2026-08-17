/* ---------------------------------------------------------------------------
 * DOCMASTER — LA MASCOTTE
 *
 * Un robot dont le corps est un livre ouvert. Le choix du dessin n est pas
 * decoratif : un robot seul dirait « site sur l IA » ou, pire, « contenu
 * genere » — ce qui travaillerait contre la page Actualites, qui insiste sur
 * le fait que chaque article est retenu a la main. Le livre remet la
 * bibliotheque au centre et la machine a sa place : celle qui la tient.
 *
 * DEUX ENTREES, SELON LA PAGE
 *
 *   - sur l accueil, elle ARRIVE EN VOLANT depuis la droite, puis levite ;
 *   - ailleurs, elle SURGIT dans le coin avec une bulle, refermable.
 *
 * OU ELLE N APPARAIT PAS, ET POURQUOI
 *
 * Jamais dans les pages de cours. La credibilite du site tient a sa sobriete —
 * « ce n est pas un conseil en investissement », « verifiez a la source ». Un
 * personnage souriant a cote d un calcul de dilution ou d un delai de
 * prescription abimerait exactement ce qui fait la valeur du contenu.
 * Une mascotte accueille ; elle n accompagne pas.
 *
 * CE QU ELLE NE FAIT PAS
 *
 * Aucun cookie — le refus est garde dans le stockage local, comme le theme et
 * les favoris. Elle ne bloque rien, ne prend pas le focus, et se fige
 * entierement pour qui a demande moins d animations a son systeme.
 * ------------------------------------------------------------------------- */
(function () {
    "use strict";

    const CLEF = "docmaster-mascotte";

    // Les pages de cours vivent toutes sous « guides/ », dans les deux langues.
    const estUnCours = /\/guides\//.test(location.pathname);
    const estAccueil = /(^|\/)index\.html$/.test(location.pathname) ||
                       /\/(en\/)?$/.test(location.pathname);

    if (estUnCours) return;

    // Un refus se respecte : on ne repropose pas a chaque page.
    try { if (localStorage.getItem(CLEF) === "cachee") return; } catch (e) {}

    const L = window.DOCMASTER_LANGUES;
    const t = (clef, repli) => (L && L.t(clef)) || repli;

    /* Le dessin. Les couleurs viennent de la palette : « currentColor » suit le
       theme sans qu on ait a redeclarer quoi que ce soit, et le degrade est
       repris des jetons --primary / --secondary par le CSS. */
    const DESSIN = `
<svg class="mascotte-dessin" viewBox="0 0 80 80" role="img" aria-labelledby="mascotte-titre" focusable="false">
  <title id="mascotte-titre">${t("mascotteAlt", "La mascotte de DocMaster : un robot dont le corps est un livre ouvert")}</title>
  <defs>
    <linearGradient id="mascotte-degrade" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="var(--primary)"/>
      <stop offset="100%" stop-color="var(--secondary)"/>
    </linearGradient>
  </defs>
  <g class="mascotte-flotte">
    <g class="mascotte-antenne">
      <line x1="40" y1="15" x2="40" y2="7" stroke="url(#mascotte-degrade)" stroke-width="3" stroke-linecap="round"/>
      <circle class="mascotte-led" cx="40" cy="5" r="3.2" fill="var(--secondary)"/>
    </g>
    <rect x="21" y="15" width="38" height="29" rx="11" fill="url(#mascotte-degrade)"/>
    <rect x="27" y="21" width="26" height="17" rx="7" fill="var(--surface)"/>
    <g class="mascotte-yeux">
      <circle cx="35" cy="28" r="3.2" fill="var(--text)"/>
      <circle cx="45" cy="28" r="3.2" fill="var(--text)"/>
    </g>
    <path d="M35.5 33.5q4.5 3.5 9 0" stroke="var(--text)" stroke-width="2.1" fill="none" stroke-linecap="round"/>
    <path d="M40 50v18" stroke="url(#mascotte-degrade)" stroke-width="3.2" stroke-linecap="round"/>
    <path d="M40 50c-6-4-13-5-20-4v20c7-1 14 0 20 4z" fill="var(--surface)" stroke="url(#mascotte-degrade)" stroke-width="2.6" stroke-linejoin="round"/>
    <path d="M40 50c6-4 13-5 20-4v20c-7-1-14 0-20 4z" fill="var(--surface)" stroke="url(#mascotte-degrade)" stroke-width="2.6" stroke-linejoin="round"/>
    <path d="M26 54h9M26 59h9M45 54h9M45 59h9" stroke="var(--secondary)" stroke-width="1.6" stroke-linecap="round" opacity=".55"/>
  </g>
</svg>`;

    function poser() {
        const bloc = document.createElement("div");
        bloc.className = "mascotte " + (estAccueil ? "mascotte-vol" : "mascotte-surgit");

        if (estAccueil) {
            // Sur l accueil, le vol suffit : la bulle repeterait ce que la page
            // dit deja en grand juste a cote.
            bloc.innerHTML = DESSIN;
            const entete = document.querySelector("header");
            (entete || document.body).appendChild(bloc);
            return;
        }

        /* Ailleurs, elle surgit dans le coin avec une bulle. Le bouton de
           fermeture porte un vrai libelle : une croix seule ne dit rien a qui
           n a que le texte. */
        bloc.innerHTML = `
            <div class="mascotte-bulle" role="status">
                <p>${t("mascotteBulle", "Besoin d'un coup de main ? Les 14 guides sont là.")}</p>
                <a class="mascotte-lien" href="${racine()}index.html">${t("mascotteLien", "Voir les guides")}</a>
            </div>
            <button type="button" class="mascotte-fermer" aria-label="${t("mascotteFermer", "Masquer la mascotte")}">✕</button>
            ${DESSIN}`;
        document.body.appendChild(bloc);

        bloc.querySelector(".mascotte-fermer").addEventListener("click", () => {
            bloc.classList.add("mascotte-part");
            try { localStorage.setItem(CLEF, "cachee"); } catch (e) {}
            // On retire l element une fois l animation finie, plutot que de le
            // laisser invisible mais present dans l ordre de tabulation.
            setTimeout(() => bloc.remove(), 400);
        });

        suivreLaPage(bloc);
    }

    /* Elle part a la HAUTEUR DU TITRE, puis suit le defilement.
     *
     * C est « position: sticky » qui fait tout le travail, et non un
     * gestionnaire de defilement. Le premier jet en utilisait un : il
     * fonctionnait, mais reposait sur un evenement asynchrone, avec une image
     * de retard possible sur un defilement rapide — et il exigeait un calcul a
     * chaque mouvement de la page.
     *
     * Sticky est natif : le navigateur maintient la position sans qu une seule
     * ligne de script ne tourne pendant le defilement. Il ne reste a JavaScript
     * qu UNE mesure, prise une fois : la hauteur du titre, qui depend de la
     * police et de la largeur de la fenetre.
     *
     * Le rail est le conteneur DANS LEQUEL elle colle. Il part du titre et
     * descend jusqu au bas du document : la mascotte reste donc visible sur
     * toute la page. Il ne recoit aucun clic — « pointer-events: none » — pour
     * ne pas former une colonne invisible qui avalerait les clics a droite. */
    function suivreLaPage(bloc) {
        const entete = document.querySelector("header");
        const titre = entete && entete.querySelector("h1");
        // Sans banniere ni titre — cas d une page depouillee — on garde le coin.
        if (!entete || !titre) { bloc.classList.add("mascotte-coin"); return; }

        const rail = document.createElement("div");
        rail.className = "mascotte-rail";
        rail.appendChild(bloc);
        document.body.appendChild(rail);

        const barre = document.querySelector(".navbar");

        function mesurer() {
            // Le haut du rail : le titre, moins la moitie de la mascotte, pour
            // que les deux soient centres l un sur l autre.
            const y = entete.offsetTop + titre.offsetTop
                    + titre.offsetHeight / 2 - bloc.offsetHeight / 2;
            rail.style.top = y + "px";
            // Ou elle s arrete en descendant : juste sous la barre collante.
            bloc.style.top = ((barre ? barre.getBoundingClientRect().height : 0) + 16) + "px";
        }

        mesurer();
        // Seul un changement de taille peut deplacer le titre. Le defilement,
        // lui, n a plus besoin de nous.
        window.addEventListener("resize", mesurer);
    }

    // La racine du site, deja calculee par les pages pour leurs scripts.
    function racine() {
        const base = window.DOCMASTER_BASE || "";
        // Sur une page anglaise hors cours, l accueil anglais est a cote.
        return /\/en\//.test(location.pathname) ? base + "en/" : base;
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", poser);
    } else {
        poser();
    }
})();
