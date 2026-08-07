// ===================================
// DOCMASTER AI - MOTEUR DE RECHERCHE
// ===================================

const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim().toLowerCase();

    searchResults.innerHTML = '';

    if (query.length < 2) {
        searchResults.classList.remove('active');
        return;
    }

    const matches = searchIndex.filter(item => {
        return item.title.toLowerCase().includes(query) ||
               item.keywords.toLowerCase().includes(query) ||
               item.description.toLowerCase().includes(query);
    });

    if (matches.length === 0) {
        searchResults.innerHTML = '<p class="no-results">Aucun résultat trouvé.</p>';
        searchResults.classList.add('active');
        return;
    }

    matches.forEach(item => {
        const link = document.createElement('a');
        link.href = item.url;
        link.classList.add('search-result-item');
        link.innerHTML = `
            <strong>${item.title}</strong>
            <p>${item.description}</p>
        `;
        searchResults.appendChild(link);
    });

    searchResults.classList.add('active');
});

// Fermer les résultats si on clique ailleurs
document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-container')) {
        searchResults.classList.remove('active');
    }
});