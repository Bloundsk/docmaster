// ===================================
// CLICKED - PRÉFÉRENCES D'AFFICHAGE
// (thème sombre, puis confort de lecture)
// ===================================
//
// Le nom du fichier dit « theme » parce qu'il est cité dans les 133 pages : le
// renommer coûterait une réécriture de masse pour un gain nul. Il porte les
// deux réglages parce qu'ils obéissent à la même règle, énoncée juste en
// dessous — et qu'un second fichier aurait été une balise <script> de plus à
// poser dans 133 pages, pour une trentaine de lignes.
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

    // ===================================
    // CONFORT DE LECTURE
    // ===================================
    //
    // Trois réglages que le navigateur ne sait pas offrir : l'interligne,
    // l'espacement des mots et des lettres, et le dessin de la police. La
    // taille du texte n'en fait volontairement pas partie — le navigateur la
    // commande déjà, le site la suit, et un bouton de plus n'aurait fait que
    // doubler moins bien un réglage que le visiteur emporte de site en site.
    //
    // Différence avec le thème : il n'y a ici AUCUN réglage système à suivre,
    // parce qu'aucun système n'expose ces préférences-là. C'est précisément ce
    // qui justifie de les demander au visiteur plutôt que de les deviner.

    const CONFORT_DEFAUT = { interligne: 0, espacement: 0, police: 0 };
    const CONFORT_MAX = { interligne: 2, espacement: 2, police: 1 };

    const lireConfort = () => {
        const net = Object.assign({}, CONFORT_DEFAUT);
        try {
            const brut = JSON.parse(localStorage.getItem('confort') || '{}');
            for (const clef of Object.keys(CONFORT_DEFAUT)) {
                const valeur = parseInt(brut[clef], 10);
                /* Hors bornes : stockage abîmé, ou réglage écrit par une
                   version future du site. On retombe sur zéro plutôt que de
                   poser une classe CSS qui n'existe pas. */
                if (valeur >= 1 && valeur <= CONFORT_MAX[clef]) net[clef] = valeur;
            }
        } catch (e) {
            // Navigation privée, stockage refusé, ou JSON illisible : réglages
            // par défaut. La page reste lisible, elle ne mémorise simplement rien.
        }
        return net;
    };

    /* La police lisible n'est téléchargée QUE si elle est demandée. L'imposer
       à tout le monde coûterait un fichier de plus à chaque visite, pour un
       réglage que presque personne n'active. En attendant qu'elle arrive,
       Verdana s'applique déjà — c'est écrit dans la règle CSS. */
    const chargerPoliceLisible = () => {
        if (document.getElementById('police-lisible')) return;
        const lien = document.createElement('link');
        lien.id = 'police-lisible';
        lien.rel = 'stylesheet';
        lien.href = 'https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&display=swap';
        document.head.appendChild(lien);
    };

    const appliquerConfort = (reglages) => {
        for (const clef of Object.keys(CONFORT_DEFAUT)) {
            for (let v = 1; v <= CONFORT_MAX[clef]; v++) {
                racine.classList.toggle('confort-' + clef + '-' + v, reglages[clef] === v);
            }
        }
        if (reglages.police) chargerPoliceLisible();
    };

    /* aria-pressed est ce qui dit à un lecteur d'écran quelle option est
       retenue. Sans lui, le panneau annoncerait huit boutons sans jamais dire
       lequel est actif — et c'est un panneau d'accessibilité. */
    const marquerBoutons = (reglages) => {
        document.querySelectorAll('.confort-choix button[data-confort]').forEach((bouton) => {
            const actif = reglages[bouton.dataset.confort] === parseInt(bouton.dataset.valeur, 10);
            bouton.setAttribute('aria-pressed', String(actif));
        });
    };

    const confort = lireConfort();
    appliquerConfort(confort);
    marquerBoutons(confort);

    const panneauConfort = document.querySelector('.confort');
    if (panneauConfort) {
        panneauConfort.addEventListener('click', (e) => {
            const bouton = e.target.closest('button[data-confort]');
            if (!bouton) return;
            confort[bouton.dataset.confort] = parseInt(bouton.dataset.valeur, 10);
            appliquerConfort(confort);
            marquerBoutons(confort);
            try {
                localStorage.setItem('confort', JSON.stringify(confort));
            } catch (e) {
                // Comme pour le thème : le réglage vaut pour la session, il ne
                // sera simplement pas retrouvé à la visite suivante.
            }
        });

        // Échap referme, et un clic à côté aussi — comme le sélecteur de langue.
        panneauConfort.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && panneauConfort.open) {
                panneauConfort.open = false;
                panneauConfort.querySelector('summary').focus();
            }
        });
        document.addEventListener('click', (e) => {
            if (panneauConfort.open && !panneauConfort.contains(e.target)) {
                panneauConfort.open = false;
            }
        });
    }
});
