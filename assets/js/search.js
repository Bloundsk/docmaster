// ===================================
// DOCMASTER - MOTEUR DE RECHERCHE
// ===================================

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    if (!searchInput || !searchResults) return;

    // Distance de Levenshtein simplifiée (tolérance aux fautes de frappe)
    function distance(a, b) {
        if (Math.abs(a.length - b.length) > 2) return 99;
        const dp = Array(a.length + 1).fill(null).map(() => Array(b.length + 1).fill(0));
        for (let i = 0; i <= a.length; i++) dp[i][0] = i;
        for (let j = 0; j <= b.length; j++) dp[0][j] = j;
        for (let i = 1; i <= a.length; i++) {
            for (let j = 1; j <= b.length; j++) {
                const cost = a[i - 1] === b[j - 1] ? 0 : 1;
                dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + cost);
            }
        }
        return dp[a.length][b.length];
    }

    function fuzzyIncludes(text, query) {
        text = text.toLowerCase();
        query = query.toLowerCase();
        if (text.includes(query)) return true;
        // Tolère 1 faute de frappe pour les mots de 5+ lettres
        if (query.length < 5) return false;
        const words = text.split(/\s+/);
        return words.some(word => distance(word, query) <= 1);
    }

    function highlight(text, query) {
        const q = query.trim();
        if (!q) return text;
        const regex = new RegExp("(" + q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "gi");
        return text.replace(regex, "<mark>$1</mark>");
    }

    function saveHistory(query) {
        let history = JSON.parse(localStorage.getItem("docmaster-search-history") || "[]");
        history = history.filter(h => h !== query);
        history.unshift(query);
        history = history.slice(0, 5);
        localStorage.setItem("docmaster-search-history", JSON.stringify(history));
    }

    function renderHistory() {
        const history = JSON.parse(localStorage.getItem("docmaster-search-history") || "[]");
        if (history.length === 0) return;
        searchResults.innerHTML = '<p class="no-results">Recherches récentes :</p>' +
            history.map(h => `<a href="#" class="search-result-item history-item">${h}</a>`).join("");
        searchResults.classList.add("active");

        searchResults.querySelectorAll(".history-item").forEach(el => {
            el.addEventListener("click", (e) => {
                e.preventDefault();
                searchInput.value = el.textContent;
                searchInput.dispatchEvent(new Event("input"));
            });
        });
    }

    searchInput.addEventListener('focus', () => {
        if (searchInput.value.trim().length === 0) renderHistory();
    });

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.trim().toLowerCase();
        searchResults.innerHTML = '';

        if (query.length < 2) {
            searchResults.classList.remove('active');
            return;
        }

        const matches = searchIndex.filter(item =>
            fuzzyIncludes(item.title, query) ||
            fuzzyIncludes(item.keywords, query) ||
            fuzzyIncludes(item.description, query)
        );

        if (matches.length === 0) {
            searchResults.innerHTML = '<p class="no-results">Aucun résultat trouvé.</p>';
            searchResults.classList.add('active');
            return;
        }

        matches.forEach(item => {
            const link = document.createElement('a');
            link.href = item.url;
            link.classList.add('search-result-item');
            link.innerHTML = `<strong>${highlight(item.title, query)}</strong><p>${highlight(item.description, query)}</p>`;
            link.addEventListener("click", () => saveHistory(searchInput.value.trim()));
            searchResults.appendChild(link);
        });

        searchResults.classList.add('active');
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            searchResults.classList.remove('active');
        }
    });

    // Raccourci clavier "/" pour activer la recherche
    document.addEventListener('keydown', (e) => {
        if (e.key === "/" && document.activeElement !== searchInput) {
            e.preventDefault();
            searchInput.focus();
        }
        if (e.key === "Escape") {
            searchInput.blur();
            searchResults.classList.remove('active');
        }
    });
});
