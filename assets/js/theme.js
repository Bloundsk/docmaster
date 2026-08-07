// ===================================
// DOCMASTER - GESTION DU THÈME
// ===================================
//
// L'APPLICATION du thème ne se fait PAS ici : elle a lieu dans le petit script
// inline placé dans le <head> de chaque page, qui pose la classe sur <html>
// avant le premier affichage. C'est ce qui évite le flash blanc au chargement.
//
// Ce fichier ne s'occupe donc que du bouton : son icône, et le basculement au
// clic. Il est chargé en fin de page, une fois le bouton présent dans le DOM.

document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;

    const racine = document.documentElement;

    // Met l'icône en accord avec le thème déjà appliqué par le <head>.
    const rafraichirIcone = () => {
        const sombre = racine.classList.contains('dark-mode');
        themeToggle.textContent = sombre ? '☀️' : '🌙';
        themeToggle.setAttribute('aria-pressed', String(sombre));
    };

    rafraichirIcone();

    themeToggle.addEventListener('click', () => {
        const sombre = racine.classList.toggle('dark-mode');

        try {
            localStorage.setItem('theme', sombre ? 'dark' : 'light');
        } catch (e) {
            // Navigation privée ou stockage refusé : le thème s'applique quand
            // même pour la session en cours, il ne sera juste pas mémorisé.
        }

        rafraichirIcone();
    });
});
