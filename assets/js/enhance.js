// ===================================
// DOCMASTER - AMÉLIORATIONS PARTAGÉES
// (barre de progression, retour en haut, copier le lien, marquer comme lu)
// ===================================

document.addEventListener("DOMContentLoaded", () => {

    // --- Barre de progression de lecture ---
    const progressBar = document.createElement("div");
    progressBar.id = "reading-progress";
    document.body.prepend(progressBar);

    function updateProgress() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        progressBar.style.width = percent + "%";
    }
    window.addEventListener("scroll", updateProgress);
    updateProgress();

    // --- Bouton retour en haut ---
    const backToTop = document.createElement("button");
    backToTop.id = "back-to-top";
    backToTop.setAttribute("aria-label", "Retour en haut de la page");
    backToTop.textContent = "↑";
    document.body.appendChild(backToTop);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 500) {
            backToTop.classList.add("visible");
        } else {
            backToTop.classList.remove("visible");
        }
    });
    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // --- Copier le lien de la page ---
    const copyBtn = document.querySelector(".copy-link-btn");
    if (copyBtn) {
        copyBtn.addEventListener("click", async () => {
            try {
                await navigator.clipboard.writeText(window.location.href);
                const original = copyBtn.textContent;
                copyBtn.textContent = "✅ Lien copié !";
                setTimeout(() => { copyBtn.textContent = original; }, 2000);
            } catch (e) {
                alert("Impossible de copier le lien automatiquement. Copie-le manuellement depuis la barre d'adresse.");
            }
        });
    }

    // --- Marquer comme lu (sauvegardé localement dans le navigateur) ---
    const markReadCheckbox = document.getElementById("mark-read-checkbox");
    if (markReadCheckbox) {
        const storageKey = "docmaster-read-" + window.location.pathname;
        markReadCheckbox.checked = localStorage.getItem(storageKey) === "true";
        markReadCheckbox.addEventListener("change", () => {
            localStorage.setItem(storageKey, markReadCheckbox.checked);
        });
    }

    // --- Sections de cours dépliables ---
    const lecons = document.querySelectorAll("details.lecon");

    if (lecons.length) {
        // Une ancre pointant vers une section repliée doit l'ouvrir, sinon le
        // lien du sommaire — ou un résultat de recherche — mène à du vide.
        const ouvrirCible = () => {
            if (!location.hash) return;
            const cible = document.getElementById(decodeURIComponent(location.hash.slice(1)));
            if (!cible) return;
            const section = cible.closest("details.lecon");
            if (!section) return;
            if (!section.open) section.open = true;
            // On repositionne sur le <details> et non sur le titre : c'est le
            // haut de la carte qui doit apparaître, en-tête compris. Le
            // navigateur a par ailleurs déjà tenté de défiler alors que la
            // section était fermée, donc sa position est fausse.
            requestAnimationFrame(() => section.scrollIntoView({ block: "start" }));
        };
        ouvrirCible();
        window.addEventListener("hashchange", ouvrirCible);

        // Bouton tout déplier / tout replier
        const bouton = document.getElementById("tout-deplier");
        if (bouton) {
            const majBouton = () => {
                const toutOuvert = [...lecons].every(d => d.open);
                bouton.textContent = toutOuvert ? "Tout replier" : "Tout déplier";
                bouton.setAttribute("aria-expanded", String(toutOuvert));
            };
            bouton.addEventListener("click", () => {
                const toutOuvert = [...lecons].every(d => d.open);
                lecons.forEach(d => { d.open = !toutOuvert; });
                majBouton();
            });
            lecons.forEach(d => d.addEventListener("toggle", majBouton));
            majBouton();
        }

        // Impression : un guide imprimé doit être complet, pas réduit aux
        // titres des sections qui se trouvaient ouvertes.
        window.addEventListener("beforeprint", () => lecons.forEach(d => { d.open = true; }));
    }

    // --- Adresse de contact, protégée des robots collecteurs ---
    // L'adresse n'apparaît jamais en clair dans le code source : elle est
    // reconstituée ici depuis deux attributs séparés. Les aspirateurs
    // d'adresses cherchent un motif "texte@texte" dans le HTML, qu'ils ne
    // trouveront pas. Sans JavaScript, le HTML affiche une version lisible
    // par un humain ("nom [arobase] domaine") : l'information reste donc
    // accessible en toutes circonstances, ce qu'impose son caractère légal.
    document.querySelectorAll(".courriel").forEach(el => {
        const nom = el.dataset.nom;
        const domaine = el.dataset.domaine;
        if (!nom || !domaine) return;

        const adresse = nom + String.fromCharCode(64) + domaine;
        const lien = document.createElement("a");
        lien.href = "mailto:" + adresse;
        lien.textContent = adresse;
        el.replaceWith(lien);
    });
});
