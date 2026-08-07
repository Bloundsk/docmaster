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
});
