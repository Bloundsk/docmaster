/* ---------------------------------------------------------------------------
 * DOCMASTER — LANGUES
 *
 * Source unique pour tout ce qui touche aux langues, sur le modèle de
 * parcours.js : les autres fichiers lisent ici, personne ne redéclare.
 *
 * CE QUI EST TRADUIT, ET CE QUI NE L'EST PAS ENCORE
 *
 * L'interface l'est : navigation, boutons, recherche, pied de page. Les cours
 * ne le sont pas — 84 000 mots, traduits sujet par sujet. Tant qu'un sujet ne
 * l'est pas, le visiteur lit un bandeau qui le lui dit DANS SA LANGUE. Un
 * drapeau qui promet une traduction inexistante est pire que pas de drapeau.
 *
 * POURQUOI L'INTERFACE EST TRADUITE PAR LE NAVIGATEUR ET LE CONTENU NE LE SERA
 * PAS
 *
 * Traduire l'interface côté navigateur évite de créer 65 pages par langue —
 * 455 fichiers dont le contenu serait identique. En revanche, quand un sujet
 * sera traduit, ce seront de VRAIS fichiers dans « en/ », « es/ », etc. : une
 * page de cours doit être lisible sans JavaScript et indexable par les moteurs
 * de recherche, ce qu'un texte injecté ne serait pas.
 *
 * AJOUTER UNE LANGUE : une entrée dans LANGUES, une colonne dans TEXTES.
 * AJOUTER UN TEXTE  : une entrée dans TEXTES, avec les sept langues.
 * ------------------------------------------------------------------------- */
(function () {
    "use strict";

    /* Le drapeau est une demande explicite de l'auteur. Il est toujours
       accompagné du nom de la langue : un drapeau désigne un pays, pas une
       langue — l'espagnol n'est pas parlé qu'en Espagne, ni l'anglais qu'au
       Royaume-Uni. Le nom lève l'ambiguïté et sert aussi de repère à qui ne
       reconnaît pas le drapeau. */
    const LANGUES = [
        { code: "fr", drapeau: "🇫🇷", nom: "Français" },
        { code: "en", drapeau: "🇬🇧", nom: "English" },
        { code: "es", drapeau: "🇪🇸", nom: "Español" },
        { code: "de", drapeau: "🇩🇪", nom: "Deutsch" },
        { code: "it", drapeau: "🇮🇹", nom: "Italiano" },
        { code: "zh", drapeau: "🇨🇳", nom: "中文" },
        { code: "ru", drapeau: "🇷🇺", nom: "Русский" },
    ];

    /* Les sujets dont le contenu décrit le droit français. Traduire « repos
       quotidien de 11 heures » n'en fait pas une règle allemande : un lecteur
       étranger prendrait ces règles pour les siennes, sur des sujets où
       l'erreur coûte cher. D'où le bandeau d'avertissement. */
    const SUJETS_DROIT_FRANCAIS = ["droit", "finance", "entrepreneuriat"];

    /* Les traductions de contenu disponibles, par langue.
       Vide pour l'instant : les sujets s'y ajouteront au fur et à mesure, et
       le sélecteur mènera alors vers les vraies pages traduites. */
    const CONTENU_TRADUIT = { en: [], es: [], de: [], it: [], zh: [], ru: [] };

    const TEXTES = {
        // --- Navigation ----------------------------------------------------
        accueil:    { fr: "Accueil", en: "Home", es: "Inicio", de: "Startseite", it: "Home", zh: "首页", ru: "Главная" },
        actualites: { fr: "Actualités", en: "News", es: "Actualidad", de: "Aktuelles", it: "Attualità", zh: "资讯", ru: "Новости" },
        glossaire:  { fr: "Glossaire", en: "Glossary", es: "Glosario", de: "Glossar", it: "Glossario", zh: "术语表", ru: "Глоссарий" },
        idees:      { fr: "Boîte à idées", en: "Suggestions", es: "Buzón de ideas", de: "Ideenbox", it: "Cassetta delle idee", zh: "意见箱", ru: "Предложения" },
        faq:        { fr: "FAQ", en: "FAQ", es: "Preguntas frecuentes", de: "FAQ", it: "FAQ", zh: "常见问题", ru: "Вопросы и ответы" },
        aPropos:    { fr: "À propos", en: "About", es: "Acerca de", de: "Über uns", it: "Chi siamo", zh: "关于", ru: "О сайте" },
        monEspace:  { fr: "Mon espace", en: "My space", es: "Mi espacio", de: "Mein Bereich", it: "Il mio spazio", zh: "我的空间", ru: "Мой раздел" },
        mentions:   { fr: "Mentions légales", en: "Legal notice", es: "Aviso legal", de: "Impressum", it: "Note legali", zh: "法律声明", ru: "Правовая информация" },

        // --- Commandes -----------------------------------------------------
        allerContenu: { fr: "Aller au contenu principal", en: "Skip to main content", es: "Ir al contenido principal", de: "Zum Hauptinhalt springen", it: "Vai al contenuto principale", zh: "跳到主要内容", ru: "Перейти к основному содержанию" },
        theme:        { fr: "Activer ou désactiver le mode sombre", en: "Toggle dark mode", es: "Activar o desactivar el modo oscuro", de: "Dunkelmodus umschalten", it: "Attiva o disattiva la modalità scura", zh: "切换深色模式", ru: "Переключить тёмную тему" },
        rechercher:   { fr: "🔍 Rechercher un guide, un sujet...", en: "🔍 Search for a guide or topic…", es: "🔍 Buscar una guía o un tema…", de: "🔍 Leitfaden oder Thema suchen…", it: "🔍 Cerca una guida o un argomento…", zh: "🔍 搜索指南或主题…", ru: "🔍 Искать руководство или тему…" },
        aucunResultat:{ fr: "Aucun résultat", en: "No results", es: "Sin resultados", de: "Keine Ergebnisse", it: "Nessun risultato", zh: "没有结果", ru: "Ничего не найдено" },
        retourHaut:   { fr: "Retour en haut de la page", en: "Back to top", es: "Volver arriba", de: "Nach oben", it: "Torna su", zh: "返回顶部", ru: "Наверх" },
        toutDeplier:  { fr: "Tout déplier", en: "Expand all", es: "Desplegar todo", de: "Alle ausklappen", it: "Espandi tutto", zh: "全部展开", ru: "Развернуть всё" },
        toutReplier:  { fr: "Tout replier", en: "Collapse all", es: "Plegar todo", de: "Alle einklappen", it: "Comprimi tutto", zh: "全部折叠", ru: "Свернуть всё" },
        ajouterFavori:{ fr: "Ajouter aux favoris", en: "Add to favourites", es: "Añadir a favoritos", de: "Zu Favoriten hinzufügen", it: "Aggiungi ai preferiti", zh: "加入收藏", ru: "Добавить в избранное" },
        retirerFavori:{ fr: "Retirer des favoris", en: "Remove from favourites", es: "Quitar de favoritos", de: "Aus Favoriten entfernen", it: "Rimuovi dai preferiti", zh: "取消收藏", ru: "Удалить из избранного" },
        favori:       { fr: "Favori", en: "Favourite", es: "Favorito", de: "Favorit", it: "Preferito", zh: "收藏", ru: "В избранном" },
        copierLien:   { fr: "Copier le lien", en: "Copy link", es: "Copiar enlace", de: "Link kopieren", it: "Copia il link", zh: "复制链接", ru: "Копировать ссылку" },
        lienCopie:    { fr: "Lien copié", en: "Link copied", es: "Enlace copiado", de: "Link kopiert", it: "Link copiato", zh: "链接已复制", ru: "Ссылка скопирована" },
        luCompris:    { fr: "J'ai lu et compris", en: "I have read and understood", es: "Lo he leído y entendido", de: "Gelesen und verstanden", it: "Ho letto e capito", zh: "我已阅读并理解", ru: "Прочитано и понято" },
        choisirLangue:{ fr: "Choisir la langue", en: "Choose language", es: "Elegir idioma", de: "Sprache wählen", it: "Scegli la lingua", zh: "选择语言", ru: "Выбрать язык" },

        // --- Bandeaux ------------------------------------------------------
        coursEnFrancais: {
            fr: "",
            en: "The courses on this site are written in French. The interface is translated; the course content is not yet.",
            es: "Los cursos de este sitio están escritos en francés. La interfaz está traducida; el contenido de los cursos todavía no.",
            de: "Die Kurse auf dieser Website sind auf Französisch verfasst. Die Oberfläche ist übersetzt, die Kursinhalte noch nicht.",
            it: "I corsi di questo sito sono scritti in francese. L'interfaccia è tradotta, i contenuti dei corsi non ancora.",
            zh: "本站课程以法语撰写。界面已翻译，课程内容尚未翻译。",
            ru: "Курсы на этом сайте написаны на французском языке. Интерфейс переведён, содержание курсов — пока нет.",
        },
        reglesFrancaises: {
            fr: "",
            en: "This guide describes rules that apply in France. They may not apply in your country.",
            es: "Esta guía describe normas vigentes en Francia. Es posible que no se apliquen en su país.",
            de: "Dieser Leitfaden beschreibt die in Frankreich geltenden Regeln. In Ihrem Land können andere gelten.",
            it: "Questa guida descrive le norme in vigore in Francia. Potrebbero non applicarsi nel suo Paese.",
            zh: "本指南介绍的是法国的规定，可能不适用于您所在的国家。",
            ru: "В этом руководстве описаны правила, действующие во Франции. В вашей стране они могут не применяться.",
        },
    };

    const CODES = LANGUES.map((l) => l.code);

    /* La langue retenue, dans l'ordre : le choix explicite du visiteur, puis
       le réglage de son navigateur, puis le français. Même règle que le thème
       sombre — un choix fait à la main prime toujours sur une détection. */
    function langueChoisie() {
        let choix = null;
        try { choix = localStorage.getItem("langue"); } catch (e) {}
        if (choix && CODES.indexOf(choix) !== -1) return choix;

        const nav = (navigator.language || "fr").slice(0, 2).toLowerCase();
        return CODES.indexOf(nav) !== -1 ? nav : "fr";
    }

    function definirLangue(code) {
        if (CODES.indexOf(code) === -1) return;
        try { localStorage.setItem("langue", code); } catch (e) {}
        document.documentElement.setAttribute("lang", code);
    }

    /* Le repli sur le français est délibéré : mieux vaut un mot en français
       qu'une clef technique affichée au visiteur si une traduction manque. */
    function t(clef, code) {
        const entree = TEXTES[clef];
        if (!entree) return "";
        return entree[code || langueChoisie()] || entree.fr || "";
    }

    // Le sujet tiré de l'adresse : « guides/droit/avance.html » donne « droit ».
    function sujetCourant() {
        const m = location.pathname.match(/\/guides\/([^/]+)\//);
        return m ? m[1] : null;
    }

    window.DOCMASTER_LANGUES = {
        LANGUES: LANGUES,
        CODES: CODES,
        TEXTES: TEXTES,
        SUJETS_DROIT_FRANCAIS: SUJETS_DROIT_FRANCAIS,
        CONTENU_TRADUIT: CONTENU_TRADUIT,
        langueChoisie: langueChoisie,
        definirLangue: definirLangue,
        t: t,
        sujetCourant: sujetCourant,
    };

    // Posé avant le premier affichage : un lecteur d'écran doit connaître la
    // langue de la page dès le départ, pas après le chargement des scripts.
    document.documentElement.setAttribute("lang", langueChoisie());
})();
