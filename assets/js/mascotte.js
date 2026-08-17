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
    const DUREE_VOL = 5600;

    function volInaugural(bloc, entete) {
        // Qui a demande moins de mouvement n en recoit aucun : elle est
        // simplement la, a sa place.
        if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        if (!bloc.animate) return;             // navigateur sans l API : elle se pose, sans vol

        const chemin = cheminInfini(bloc, entete);

        bloc.animate(
            chemin.map((p, i) => ({
                transform: `translate(${p.x}px, ${p.y}px) rotate(${p.r}deg)`,
                opacity: p.o,
                offset: i / (chemin.length - 1),
            })),
            /* Presque lineaire, a dessein. Une courbe d acceleration marquee
               ferait filer la mascotte au milieu du huit puis trainer dans les
               boucles : c est le mouvement qu on veut lire, pas la hate. Les
               deux extremites restent adoucies. */
            { duration: DUREE_VOL, easing: "cubic-bezier(.35,.06,.28,1)" }
        );

        semerLesPages(bloc, entete, chemin);
    }

    /* LE SIGNE DE L INFINI, tracé sur toute la largeur de la page.
     *
     * Une lemniscate de Gerono : x = a·cos(t), y = (h/2)·sin(2t). Elle se croise
     * en son milieu, ce qui donne le huit couche du signe ∞ — la ou un cercle
     * ou une ellipse n auraient donne qu une boucle.
     *
     * LE CALAGE, QUI EST TOUT LE PROBLEME
     *
     * La position de repos est collee au bord DROIT de la banniere. Or une page
     * ne grandit que vers le bas et vers la droite : le moindre depassement a
     * droite ajoute une barre de defilement horizontale. On decale donc la
     * courbe pour que son point le plus a droite soit EXACTEMENT la position de
     * repos — x va de -2a a 0, jamais au-dela. Le huit occupe ainsi toute la
     * largeur disponible, entierement a gauche.
     *
     * Elle part de sa place, trace le huit, et y revient : la courbe commence
     * et finit en (0, 0), sans qu on ait a raccorder quoi que ce soit.
     *
     * L inclinaison suit la TANGENTE, calculee sur le point suivant, puis
     * bridee a 26 degres — un robot qui pique du nez a 80 degres dans une
     * boucle serree ne ressemble plus a rien.
     */
    function cheminInfini(bloc, entete) {
        const large = entete.clientWidth || 1000;
        const droite = parseFloat(getComputedStyle(bloc).right) || 24;
        const largeurBloc = bloc.offsetWidth || 128;

        // Toute la largeur utile, moins de quoi ne pas raser les bords.
        const etendue = Math.max(220, large - droite - largeurBloc - 24);
        const a = etendue / 2;
        // Assez haut pour que les deux boucles se lisent, sans sortir par le bas.
        const h = Math.min(210, entete.clientHeight * 0.72);

        const pts = [];
        // La chute initiale, au-dessus de son perchoir.
        pts.push({ x: 0, y: -420, r: 18, o: 0 });
        pts.push({ x: 0, y: -150, r: 10, o: 1 });

        const N = 96;                       // assez de points pour que le trace soit lisse
        for (let i = 0; i <= N; i++) {
            const t = (i / N) * Math.PI * 2;
            pts.push({
                x: -a + a * Math.cos(t),
                y: (h / 2) * Math.sin(2 * t),
                o: 1,
            });
        }

        // L inclinaison, deduite du deplacement vers le point suivant.
        for (let i = 2; i < pts.length; i++) {
            const suivant = pts[Math.min(i + 1, pts.length - 1)];
            const angle = Math.atan2(suivant.y - pts[i].y, suivant.x - pts[i].x) * 180 / Math.PI;
            // On ramene dans [-90, 90] : elle penche, elle ne se retourne pas.
            let penche = angle;
            if (penche > 90) penche -= 180;
            if (penche < -90) penche += 180;
            pts[i].r = Math.max(-26, Math.min(26, penche));
        }
        pts[pts.length - 1].r = 0;          // posee, bien droite

        return pts;
    }

    /* La trainee. Une page se detache a intervalles reguliers le long du
       chemin, puis tombe en tournoyant et s efface.

       Les positions sont INTERPOLEES sur le chemin de la mascotte : chaque
       page nait la ou elle se trouvait a cet instant. Recopier des positions a
       la main aurait produit une trainee qui ne suit rien. */
    function semerLesPages(bloc, entete, chemin) {
        // Le trajet est long : quatorze pages y laisseraient de grands vides.
        const NOMBRE = 30;
        const conteneur = document.createElement("div");
        conteneur.className = "mascotte-trainee";
        entete.insertBefore(conteneur, bloc);   // derriere elle, jamais devant

        for (let n = 0; n < NOMBRE; n++) {
            /* On evite les tout premiers instants — elle est encore invisible —
               et les tout derniers, sinon des pages tomberaient devant elle
               alors qu elle est deja posee. */
            const t = 0.10 + (n / NOMBRE) * 0.82;
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
