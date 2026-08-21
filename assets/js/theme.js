// ===================================
// CLICKED - GESTION DU THÈME
// ===================================
//
// L'APPLICATION initiale du thème ne se fait PAS ici : elle a lieu dans le
// petit script inline placé dans le <head> de chaque page, qui pose la classe
// sur <html> avant le premier affichage. C'est ce qui évite le clignotement
// au chargement.
//
// Règle générale du site : le choix explicite du visiteur, fait via le bouton,
// prime sur tout. En son absence, on suit le réglage de son système.
//
// Ce fichier gère donc deux choses : le bouton, et le suivi du système quand
// aucun choix n'a été fait.

document.addEventListener("DOMContentLoaded", () => {
    const racine = document.documentElement;
    const themeToggle = document.getElementById('theme-toggle');

    const choixEnregistre = () => {
        try { return localStorage.getItem('theme'); } catch (e) { return null; }
    };

    // Met l'icône en accord avec le thème réellement appliqué.
    const rafraichirIcone = () => {
        if (!themeToggle) return;
        const sombre = racine.classList.contains('dark-mode');
        themeToggle.textContent = sombre ? '☀️' : '🌙';
        themeToggle.setAttribute('aria-pressed', String(sombre));
        themeToggle.setAttribute(
            'aria-label',
            sombre ? 'Passer en thème clair' : 'Passer en thème sombre'
        );
    };

    rafraichirIcone();

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const sombre = racine.classList.toggle('dark-mode');
            try {
                localStorage.setItem('theme', sombre ? 'dark' : 'light');
            } catch (e) {
                // Navigation privée ou stockage refusé : le thème s'applique
                // pour la session en cours, il ne sera simplement pas mémorisé.
            }
            rafraichirIcone();
        });
    }

    // Suivi du réglage système, en direct.
    // Si le visiteur bascule son ordinateur en mode sombre alors qu'il lit une
    // page, celle-ci suit — sauf s'il a exprimé un choix, auquel cas on ne
    // touche à rien : son choix ne doit pas être écrasé par le système.
    if (window.matchMedia) {
        const media = window.matchMedia('(prefers-color-scheme: dark)');
        const suivre = (e) => {
            if (choixEnregistre()) return;
            racine.classList.toggle('dark-mode', e.matches);
            rafraichirIcone();
        };
        if (media.addEventListener) media.addEventListener('change', suivre);
        else if (media.addListener) media.addListener(suivre);   // navigateurs anciens
    }
});
