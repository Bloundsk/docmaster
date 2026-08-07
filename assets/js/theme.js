// ===================================
// DOCMASTER AI - GESTION DU THÈME
// ===================================

const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

// Appliquer le thème sauvegardé au chargement
if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.textContent = '☀️';
}

// Basculer le thème au clic
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = '☀️';
    } else {
        localStorage.setItem('theme', 'light');
        themeToggle.textContent = '🌙';
    }
});