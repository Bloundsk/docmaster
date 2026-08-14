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

    // Replie les accents : "Cybersécurité" devient "cybersecurite".
    // Sans cela, chercher "securite" ne renvoyait rien. La tolérance aux fautes
    // rattrapait un accent manquant (« epargne »), mais pas deux : deux accents
    // font deux différences, soit une de plus que la limite. Or personne ne
    // saisit les accents dans une barre de recherche.
    //
    // Le repli se fait caractère par caractère pour conserver la longueur du
    // texte : les positions trouvées dans la version repliée désignent alors
    // exactement les mêmes caractères dans le texte d'origine, ce dont le
    // surlignage a besoin pour réafficher le mot correctement accentué.
    // U+0300 a U+036F : les marques d'accentuation que NFD detache de leur
    // lettre. La plage est construite par code plutot qu'ecrite en clair, ou
    // elle apparaitrait comme des accents flottants illisibles dans le fichier.
    const MARQUES_ACCENT = new RegExp(
        "[" + String.fromCharCode(0x300) + "-" + String.fromCharCode(0x36f) + "]", "g");

    function plier(texte) {
        let out = "";
        for (const c of texte) {
            const sansAccent = c.normalize("NFD").replace(MARQUES_ACCENT, "");
            out += sansAccent.length === c.length ? sansAccent : c;
        }
        return out.toLowerCase();
    }

    function fuzzyIncludes(text, query) {
        text = plier(text);
        query = plier(query);
        if (text.includes(query)) return true;
        // Tolère 1 faute de frappe pour les mots de 5+ lettres
        if (query.length < 5) return false;
        const words = text.split(/\s+/);
        return words.some(word => distance(word, query) <= 1);
    }

    // Vrai seulement pour une correspondance exacte, sans tolerance aux fautes.
    const contient = (text, query) => plier(text).includes(plier(query));

    /* Pertinence d une entree pour une recherche.
     *
     * Sans elle, les resultats sortaient dans l ordre du fichier de donnees :
     * chercher « mesore » — un mot-cle exact du guide Negociation — remontait
     * d abord deux pages ou la tolerance aux fautes avait rapproche le mot de
     * « mesure ». La tolerance doit rattraper une faute de frappe, jamais
     * passer devant une saisie correcte.
     *
     * Le titre prime sur les mots-cles, qui priment sur la description ; toute
     * correspondance exacte prime sur toute correspondance approchee. */
    function pertinence(item, query) {
        if (contient(item.title, query)) return 4;
        if (contient(item.keywords, query)) return 3;
        if (contient(item.description, query)) return 2;
        return 1;   // rattrape par la tolerance aux fautes
    }

    function highlight(text, query) {
        const q = plier(query.trim());
        if (!q) return text;
        // On cherche dans la version repliée, on découpe dans l'originale.
        const base = plier(text);
        let out = "", i = 0, p;
        while ((p = base.indexOf(q, i)) !== -1) {
            out += text.slice(i, p) + "<mark>" + text.slice(p, p + q.length) + "</mark>";
            i = p + q.length;
        }
        return out + text.slice(i);
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
        // Le texte est posé avec textContent, jamais concaténé dans du HTML :
        // une recherche passée est une saisie libre, et « <img onerror=...> »
        // aurait été réinterprété comme du balisage au retour sur la page.
        searchResults.innerHTML = '<p class="no-results">Recherches récentes :</p>';
        history.forEach(h => {
            const lien = document.createElement("a");
            lien.href = "#";
            lien.className = "search-result-item history-item";
            lien.textContent = h;
            searchResults.appendChild(lien);
        });
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

        const matches = searchIndex
            .filter(item =>
                fuzzyIncludes(item.title, query) ||
                fuzzyIncludes(item.keywords, query) ||
                fuzzyIncludes(item.description, query)
            )
            // Le tri est stable depuis ES2019 : a pertinence egale, l ordre du
            // fichier de donnees est conserve — sujet par sujet, niveau par
            // niveau, ce qui reste le classement le plus lisible.
            .sort((a, b) => pertinence(b, query) - pertinence(a, query));

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
