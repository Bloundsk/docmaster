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
            if (entete) volInaugural(bloc, entete);
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

    /* ---------------------------------------------------------------------
     * LE VOL D ARRIVEE, SUR L ACCUEIL
     *
     * Elle plonge d en haut, balaie vers la GAUCHE, revient et se pose. Des
     * pages de livre se detachent tout au long du trajet et tombent derriere
     * elle, comme une trainee.
     *
     * POURQUOI VERS LA GAUCHE, ET JAMAIS VERS LA DROITE
     *
     * Une page ne grandit que vers le bas et vers la droite : un depassement a
     * gauche ou en haut ne cree aucune barre de defilement. Un premier vol
     * partait de la droite de l ecran et elargissait la page — defaut trouve a
     * la mesure, pas a l oeil. La trajectoire reste donc dans ce demi-plan.
     *
     * POURQUOI EN JAVASCRIPT PLUTOT QU EN CSS
     *
     * L amplitude du balayage se deduit de la largeur de la banniere : ecrite
     * en dur, elle sortirait de l ecran sur un telephone et paraitrait timide
     * sur un grand ecran. Les positions des pages sont echantillonnees sur LE
     * MEME chemin que la mascotte — une seule source, donc pas de derive entre
     * la trainee et celle qui la laisse.
     *
     * L animation ne pose aucun etat final : si elle ne joue pas, la mascotte
     * est deja a sa place. C est ce qui la rend inoffensive.
     * ------------------------------------------------------------------- */
    const DUREE_VOL = 2200;

    function volInaugural(bloc, entete) {
        // Qui a demande moins de mouvement n en recoit aucun : elle est
        // simplement la, a sa place.
        if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        if (!bloc.animate) return;             // navigateur sans l API : elle se pose, sans vol

        const large = entete.clientWidth || 1000;
        // Le balayage occupe un peu plus de la moitie de la banniere, sans
        // jamais depasser 420 px : au-dela, le mouvement devient une traversee.
        const amp = Math.min(420, large * 0.58);

        /* Le chemin, en decalages par rapport a la position de repos (0, 0).
           AUCUN X N EST POSITIF, et ce n est pas un detail : la position de
           repos est deja calee a droite de la banniere, si bien que le moindre
           decalage vers la droite elargit la page.

           La premiere version commencait a x: +34 — le commentaire au-dessus
           jurait pourtant que la trajectoire n allait jamais a droite. L audit
           l a vu : 15 px de debordement a 1000, 35 px a 700.

           La rotation compte double : tourner un carre de 128 px de 24 degres
           porte sa boite englobante a 169 px, soit 20 px de plus de chaque
           cote. Le depassement final ci-dessous est donc lui aussi vers la
           gauche. */
        const chemin = [
            { x: -18,         y: -340, r: 24,  o: 0 },   // elle arrive d en haut
            { x: -amp * 0.5,  y: -170, r: -16, o: 1 },   // elle bascule a gauche
            { x: -amp,        y: -10,  r: -8,  o: 1 },   // point le plus lointain
            { x: -amp * 0.45, y: 62,   r: 14,  o: 1 },   // elle remonte vers son perchoir
            { x: -26,         y: -14,  r: 7,   o: 1 },   // petit depassement, a gauche
            { x: 0,           y: 0,    r: 0,   o: 1 },   // posee
        ];

        bloc.animate(
            chemin.map((p, i) => ({
                transform: `translate(${p.x}px, ${p.y}px) rotate(${p.r}deg)`,
                opacity: p.o,
                offset: i / (chemin.length - 1),
            })),
            { duration: DUREE_VOL, easing: "cubic-bezier(.42,.02,.28,1)" }
        );

        semerLesPages(bloc, entete, chemin);
    }

    /* La trainee. Une page se detache a intervalles reguliers le long du
       chemin, puis tombe en tournoyant et s efface.

       Les positions sont INTERPOLEES sur le chemin de la mascotte : chaque
       page nait la ou elle se trouvait a cet instant. Recopier des positions a
       la main aurait produit une trainee qui ne suit rien. */
    function semerLesPages(bloc, entete, chemin) {
        const NOMBRE = 14;
        const conteneur = document.createElement("div");
        conteneur.className = "mascotte-trainee";
        entete.insertBefore(conteneur, bloc);   // derriere elle, jamais devant

        for (let n = 0; n < NOMBRE; n++) {
            // On evite les tout premiers instants : elle est encore invisible.
            const t = 0.12 + (n / NOMBRE) * 0.78;
            const p = pointSurLeChemin(chemin, t);

            const page = document.createElement("span");
            page.className = "mascotte-page";
            page.setAttribute("aria-hidden", "true");
            conteneur.appendChild(page);

            // Une chute jamais identique : sans cela, quatorze pages tombent
            // au meme rythme et le hasard se voit plus que le mouvement.
            const derive = -14 - Math.random() * 46;      // toujours vers la gauche
            const chute = 90 + Math.random() * 110;
            const tour = 140 + Math.random() * 220;

            page.animate(
                [
                    { transform: `translate(${p.x}px, ${p.y}px) rotate(0deg) scale(.9)`, opacity: 0 },
                    { transform: `translate(${p.x + derive * 0.3}px, ${p.y + chute * 0.2}px) rotate(${tour * 0.25}deg) scale(1)`, opacity: .95, offset: .18 },
                    { transform: `translate(${p.x + derive}px, ${p.y + chute}px) rotate(${tour}deg) scale(.7)`, opacity: 0 },
                ],
                {
                    duration: 1500 + Math.random() * 500,
                    delay: t * DUREE_VOL,
                    easing: "cubic-bezier(.3,.5,.5,1)",
                }
            );
        }

        // On retire la trainee une fois tombee : quatorze elements figes dans
        // la banniere ne servent plus a rien, et le contrôle de geometrie les
        // mesurerait pour rien.
        setTimeout(() => conteneur.remove(), DUREE_VOL + 2400);
    }

    // Interpolation lineaire entre deux points voisins du chemin.
    function pointSurLeChemin(chemin, t) {
        const echelle = t * (chemin.length - 1);
        const i = Math.min(Math.floor(echelle), chemin.length - 2);
        const f = echelle - i;
        const a = chemin[i], b = chemin[i + 1];
        return { x: a.x + (b.x - a.x) * f, y: a.y + (b.y - a.y) * f };
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
