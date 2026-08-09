// ===================================
// DOCMASTER - FAVORIS
// ===================================
//
// Les favoris sont enregistres dans le navigateur du visiteur (localStorage),
// exactement comme le theme ou la case "J'ai lu et compris". Rien n'est
// transmis a un serveur : le site est statique et n'en possede pas.
//
// Consequence assumee : les favoris sont propres a un appareil et a un
// navigateur. C'est le prix a payer pour ne demander ni compte, ni mot de
// passe, ni adresse electronique.
//
// Forme d'un favori :
//   { id, chemin, ancre, titre, guide, date }
//   - id     : identifiant unique, "chemin#ancre" ou "chemin"
//   - chemin : chemin relatif a la racine du site, ex "guides/finance/index.html"
//   - ancre  : identifiant de la sous-section, vide pour un guide entier

(function () {
    const CLE = "docmaster-favoris";

    // --- Stockage ---------------------------------------------------------

    function lire() {
        try {
            const brut = localStorage.getItem(CLE);
            const liste = brut ? JSON.parse(brut) : [];
            return Array.isArray(liste) ? liste : [];
        } catch (e) {
            return [];
        }
    }

    function ecrire(liste) {
        try {
            localStorage.setItem(CLE, JSON.stringify(liste));
            return true;
        } catch (e) {
            // Stockage plein ou refuse : on previent plutot que d'echouer en
            // silence, sinon le visiteur croit son favori enregistre.
            return false;
        }
    }

    const estFavori = (id) => lire().some(f => f.id === id);

    function basculer(favori) {
        const liste = lire();
        const i = liste.findIndex(f => f.id === favori.id);
        if (i >= 0) liste.splice(i, 1);
        else liste.push(Object.assign({ date: Date.now() }, favori));
        return ecrire(liste) ? i < 0 : null;   // true = ajoute, false = retire, null = echec
    }

    // --- Chemin de la page, relatif a la racine du site --------------------
    // window.DOCMASTER_BASE vaut "" a la racine et "../../" dans un guide :
    // le nombre de "../" donne la profondeur, donc le nombre de segments a
    // conserver dans l'adresse.

    function cheminRacine() {
        const base = window.DOCMASTER_BASE || "";
        const profondeur = (base.match(/\.\.\//g) || []).length;
        const segments = location.pathname.split("/").filter(Boolean);
        return segments.slice(segments.length - (profondeur + 1)).join("/");
    }

    // --- Bouton -----------------------------------------------------------

    function creerBouton(favori, etiquette) {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "btn-favori";
        btn.dataset.id = favori.id;

        const majuscule = (actif) => {
            btn.classList.toggle("actif", actif);
            btn.textContent = actif ? "★" : "☆";
            btn.setAttribute("aria-pressed", String(actif));
            btn.setAttribute(
                "aria-label",
                (actif ? "Retirer des favoris : " : "Ajouter aux favoris : ") + etiquette
            );
            btn.title = actif ? "Retirer des favoris" : "Ajouter aux favoris";
        };

        majuscule(estFavori(favori.id));

        btn.addEventListener("click", (e) => {
            // Le bouton peut se trouver dans un <summary> ou dans une carte
            // cliquable : sans cela, le clic replierait la section ou suivrait
            // le lien au lieu d'ajouter le favori.
            e.preventDefault();
            e.stopPropagation();

            const resultat = basculer(favori);
            if (resultat === null) {
                alert("Impossible d'enregistrer ce favori : le stockage du navigateur est indisponible.");
                return;
            }
            majuscule(resultat);
        });

        return btn;
    }

    // --- Mise en place ----------------------------------------------------

    document.addEventListener("DOMContentLoaded", () => {
        const chemin = cheminRacine();

        // 1. Sous-sections d'un guide : bouton dans l'en-tete depliable
        const titreGuide = document.querySelector("header h1");
        document.querySelectorAll("details.lecon > summary").forEach(summary => {
            const h3 = summary.querySelector("h3");
            if (!h3) return;
            const titre = h3.textContent.trim();
            const btn = creerBouton({
                id: chemin + "#" + h3.id,
                chemin: chemin,
                ancre: h3.id,
                titre: titre,
                guide: titreGuide ? titreGuide.textContent.trim() : ""
            }, titre);
            // Insere avant le chevron, qui est un pseudo-element ::after
            summary.appendChild(btn);
        });

        // 2. Guide entier : bouton dans la barre de meta, pres de "Copier le lien"
        const meta = document.querySelector(".guide-meta");
        if (meta && titreGuide) {
            const titre = titreGuide.textContent.trim();
            const btn = creerBouton({
                id: chemin,
                chemin: chemin,
                ancre: "",
                titre: titre,
                guide: titre
            }, titre);
            btn.classList.add("btn-favori-guide");
            const texte = document.createElement("span");
            texte.textContent = " Favori";
            btn.appendChild(texte);
            meta.appendChild(btn);
        }

        // 3. Cartes de categories, sur la page d'accueil
        document.querySelectorAll("#categories article").forEach(carte => {
            const h3 = carte.querySelector("h3");
            const lien = carte.querySelector("a[href]");
            if (!h3 || !lien) return;
            const titre = h3.textContent.trim();
            const cible = lien.getAttribute("href");
            const btn = creerBouton({
                id: cible,
                chemin: cible,
                ancre: "",
                titre: titre,
                guide: titre
            }, titre);
            btn.classList.add("btn-favori-carte");
            carte.appendChild(btn);
        });
    });

    // Expose la lecture pour la page "Mon espace"
    window.DocMasterFavoris = { lire: lire, ecrire: ecrire, estFavori: estFavori };
})();
