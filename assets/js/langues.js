/* ---------------------------------------------------------------------------
 * DOCMASTER — LANGUES
 *
 * Source unique pour tout ce qui touche aux langues, sur le modèle de
 * parcours.js : les autres fichiers lisent ici, personne ne redéclare.
 *
 * CE QUI EST TRADUIT, ET CE QUI NE L'EST PAS ENCORE
 *
 * L'interface est prête dans les sept langues. Le CONTENU ne l'est qu'en
 * anglais : les 14 sujets et les 8 pages hors cours. Tant qu'une page ne l'est
 * pas, le visiteur lit un bandeau qui le lui dit DANS SA LANGUE.
 *
 * LE SÉLECTEUR N'AFFICHE QUE LES LANGUES QUI ONT DU CONTENU
 *
 * Une interface traduite autour d'un site entièrement français n'est pas une
 * traduction, c'est une promesse non tenue : un drapeau qui promet une
 * traduction inexistante est pire que pas de drapeau. Les cinq langues sans
 * contenu ne sont donc PAS proposées — leurs libellés restent ici, prêts, et
 * leur drapeau apparaîtra tout seul le jour où elles auront un sujet.
 *
 * POURQUOI L'INTERFACE EST TRADUITE PAR LE NAVIGATEUR ET LE CONTENU NE LE SERA
 * PAS
 *
 * Traduire l'interface côté navigateur évite de recopier chaque page dans
 * chaque langue pour un contenu identique. En revanche, un contenu traduit est
 * fait de VRAIS fichiers dans « en/ », « es/ », etc. : une page de cours doit
 * être lisible sans JavaScript et indexable par les moteurs de recherche, ce
 * qu'un texte injecté ne serait pas.
 *
 * AJOUTER UNE LANGUE : une entrée dans LANGUES, une colonne dans TEXTES. Le
 *   sélecteur l'ignorera jusqu'à ce qu'elle figure dans CONTENU_TRADUIT ou
 *   PAGES_TRADUITES — c'est voulu, et audit-coherence.mjs le vérifie.
 * AJOUTER UN TEXTE  : une entrée dans TEXTES, avec les sept langues.
 * ------------------------------------------------------------------------- */
(function () {
    "use strict";

    /* Le drapeau est une demande explicite de l'auteur. Il est toujours
       accompagné du nom de la langue : un drapeau désigne un pays, pas une
       langue — l'espagnol n'est pas parlé qu'en Espagne, ni l'anglais qu'au
       Royaume-Uni. Le nom lève l'ambiguïté et sert aussi de repère à qui ne
       reconnaît pas le drapeau.

       POURQUOI DU SVG ET NON DES EMOJIS

       « 🇫🇷 » est un emoji drapeau, et **Windows n'a pas de police qui les
       dessine** : Segoe UI Emoji ne contient aucun drapeau de pays. Le système
       retombe alors sur les deux lettres qui composent le caractère, et le
       visiteur lit « FR » au lieu de voir un drapeau. Sur Android et iOS, les
       mêmes octets donnent bien un drapeau — d'où un défaut invisible depuis
       un téléphone, et permanent sur un ordinateur.

       Mesuré plutôt que supposé : sur cette machine, la largeur de « 🇫🇷 »
       vaut exactement la somme des largeurs de ses deux lettres prises
       séparément (28 px = 13 + 15). Un vrai drapeau serait UN glyphe, plus
       large qu'aucune des deux.

       Aucune règle CSS ne corrige cela : il n'y a pas de glyphe à styler. Les
       drapeaux sont donc dessinés, en SVG en ligne — pas de fichier à charger,
       pas de dépendance, net à toute taille, et identique sur tous les
       systèmes. Cadre commun 3:2 pour que la liste reste alignée. */
    const svg = (contenu) =>
        '<svg class="langue-drapeau" viewBox="0 0 60 40" role="presentation" aria-hidden="true" focusable="false">' +
        contenu + '</svg>';

    // Une étoile à cinq branches, centrée sur (x, y), de rayon r.
    const etoile = (x, y, r) => {
        const p = [];
        for (let i = 0; i < 10; i++) {
            const rayon = i % 2 ? r * 0.382 : r;              // nombre d'or
            const a = -Math.PI / 2 + i * Math.PI / 5;
            p.push((x + rayon * Math.cos(a)).toFixed(2) + "," + (y + rayon * Math.sin(a)).toFixed(2));
        }
        return '<polygon fill="#FFDE00" points="' + p.join(" ") + '"/>';
    };

    const LANGUES = [
        { code: "fr", nom: "Français", drapeau: svg(
            '<rect width="20" height="40" fill="#002654"/>' +
            '<rect x="20" width="20" height="40" fill="#F5F5F5"/>' +
            '<rect x="40" width="20" height="40" fill="#CE1126"/>') },

        /* L'Union Jack, adapté au cadre 3:2 comme le font les jeux d'icônes
           rectangulaires. Les diagonales rouges sont centrées plutôt que
           décalées en contre-échange : à 18 px, le décalage ne se voit pas et
           coûterait quatre tracés de plus. */
        { code: "en", nom: "English", drapeau: svg(
            '<rect width="60" height="40" fill="#012169"/>' +
            '<path d="M0,0 60,40 M60,0 0,40" stroke="#F5F5F5" stroke-width="8"/>' +
            '<path d="M0,0 60,40 M60,0 0,40" stroke="#C8102E" stroke-width="4"/>' +
            '<path d="M30,0 V40 M0,20 H60" stroke="#F5F5F5" stroke-width="13"/>' +
            '<path d="M30,0 V40 M0,20 H60" stroke="#C8102E" stroke-width="8"/>') },

        { code: "es", nom: "Español", drapeau: svg(
            '<rect width="60" height="40" fill="#AA151B"/>' +
            '<rect y="10" width="60" height="20" fill="#F1BF00"/>') },

        { code: "de", nom: "Deutsch", drapeau: svg(
            '<rect width="60" height="40" fill="#000000"/>' +
            '<rect y="13.33" width="60" height="13.34" fill="#DD0000"/>' +
            '<rect y="26.67" width="60" height="13.33" fill="#FFCE00"/>') },

        { code: "it", nom: "Italiano", drapeau: svg(
            '<rect width="20" height="40" fill="#008C45"/>' +
            '<rect x="20" width="20" height="40" fill="#F5F5F5"/>' +
            '<rect x="40" width="20" height="40" fill="#CD212A"/>') },

        { code: "zh", nom: "中文", drapeau: svg(
            '<rect width="60" height="40" fill="#EE1C25"/>' +
            etoile(10, 10, 6) +
            etoile(20, 4, 2) + etoile(24, 9, 2) + etoile(24, 15, 2) + etoile(20, 20, 2)) },

        { code: "ru", nom: "Русский", drapeau: svg(
            '<rect width="60" height="40" fill="#F5F5F5"/>' +
            '<rect y="13.33" width="60" height="13.34" fill="#0039A6"/>' +
            '<rect y="26.67" width="60" height="13.33" fill="#D52B1E"/>') },
    ];

    /* Les sujets dont le contenu décrit le droit français. Traduire « repos
       quotidien de 11 heures » n'en fait pas une règle allemande : un lecteur
       étranger prendrait ces règles pour les siennes, sur des sujets où
       l'erreur coûte cher. D'où le bandeau d'avertissement.

       « sante » y a été ajouté le 16 août 2026, en le traduisant : le
       simulateur de pauses calcule le minimum du code du travail français,
       celui de récupération ses repos de 11 h et 35 h, et tout le niveau
       avancé décrit la médecine du travail, le document unique et le CSE.
       L'exemple cité dans ce commentaire venait précisément de ce guide. */
    const SUJETS_DROIT_FRANCAIS = ["droit", "finance", "entrepreneuriat", "sante"];

    /* Les traductions de contenu disponibles, par langue. Un sujet n'y figure
       que lorsque ses quatre pages existent sous « <langue>/guides/<sujet>/ » —
       audit-coherence.mjs le vérifie et bloque sinon.

       C'est de cette liste que dépendent deux comportements : le sélecteur mène
       vers la page traduite quand elle existe, et le bandeau « les cours sont
       en français » ne s'affiche plus sur les sujets traduits. */
    const CONTENU_TRADUIT = { en: ["apprendre", "cybersecurite", "data", "design", "dev-web", "droit", "ecologie", "entrepreneuriat", "finance", "ia", "marketing", "negociation", "productivite", "sante"], es: [], de: [], it: [], zh: [], ru: [] };

    /* Les pages hors cours traduites, par langue, désignées par leur nom de
       fichier. Même règle que CONTENU_TRADUIT : une page n'y figure que
       lorsqu'elle existe réellement sous « <langue>/ », faute de quoi le
       sélecteur mènerait à une 404.

       Elles sont listées à part des sujets parce qu'elles ne vivent pas au
       même endroit : « en/faq.html » et non « en/guides/<sujet>/ ». */
    const PAGES_TRADUITES = {
        /* « 404.html » ne figure pas ici, et n'a pas de version « en/ ».
           GitHub Pages sert le 404 de la racine pour toute adresse inconnue,
           y compris sous « /en/ » : une copie traduite ne serait jamais
           affichée. Cette page traduit donc son propre texte, à partir des
           libellés ci-dessous. */
        en: ["index.html", "actualites.html", "glossaire.html", "idees.html",
             "faq.html", "a-propos.html", "mentions-legales.html",
             "mon-espace.html"],
        es: [], de: [], it: [], zh: [], ru: [],
    };

    // Les correspondances d'adresses entre versions. La version francaise est a
    // la racine, les autres sous « <langue>/ » : c'est le francais qui existait
    // d'abord, et deplacer 65 pages casserait tous les liens deja partages.
    const LOCALES_DATE = { fr: "fr-FR", en: "en-GB", es: "es-ES", de: "de-DE", it: "it-IT", zh: "zh-CN", ru: "ru-RU" };

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
        aucunResultat:{ fr: "Aucun résultat trouvé.", en: "No results found.", es: "No se ha encontrado ningún resultado.", de: "Keine Ergebnisse gefunden.", it: "Nessun risultato trovato.", zh: "没有找到结果。", ru: "Ничего не найдено." },
        recherchesRecentes:{ fr: "Recherches récentes :", en: "Recent searches:", es: "Búsquedas recientes:", de: "Letzte Suchanfragen:", it: "Ricerche recenti:", zh: "最近的搜索：", ru: "Недавние запросы:" },
        // La recherche ne connaît que les titres français : le dire là où le
        // visiteur le constate vaut mieux que de le laisser deviner.
        rechercheEnFrancais:{ fr: "", en: "Results are listed under their French titles; the links lead to the English pages.", es: "Los resultados aparecen con su título en francés; los enlaces llevan a las páginas traducidas.", de: "Die Ergebnisse tragen ihre französischen Titel; die Links führen zu den übersetzten Seiten.", it: "I risultati portano il loro titolo francese; i link rimandano alle pagine tradotte.", zh: "结果显示法语标题，链接指向已翻译的页面。", ru: "Результаты показаны с французскими заголовками; ссылки ведут на переведённые страницы." },
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
        lienCopieCourt:{ fr: "✅ Lien copié !", en: "✅ Link copied!", es: "✅ ¡Enlace copiado!", de: "✅ Link kopiert!", it: "✅ Link copiato!", zh: "✅ 链接已复制！", ru: "✅ Ссылка скопирована!" },
        copieImpossible:{ fr: "Impossible de copier le lien automatiquement. Copie-le manuellement depuis la barre d'adresse.", en: "The link could not be copied automatically. Please copy it from the address bar.", es: "No se ha podido copiar el enlace automáticamente. Cópielo desde la barra de direcciones.", de: "Der Link konnte nicht automatisch kopiert werden. Bitte kopieren Sie ihn aus der Adressleiste.", it: "Impossibile copiare il link automaticamente. Copialo dalla barra degli indirizzi.", zh: "无法自动复制链接，请从地址栏手动复制。", ru: "Не удалось скопировать ссылку автоматически. Скопируйте её из адресной строки." },

        // --- La mascotte -----------------------------------------------------
        mascotteAlt:    { fr: "La mascotte de DocMaster : un robot dont le corps est un livre ouvert", en: "The DocMaster mascot: a robot whose body is an open book", es: "La mascota de DocMaster: un robot cuyo cuerpo es un libro abierto", de: "Das Maskottchen von DocMaster: ein Roboter, dessen Körper ein aufgeschlagenes Buch ist", it: "La mascotte di DocMaster: un robot il cui corpo è un libro aperto", zh: "DocMaster 的吉祥物：身体是一本翻开的书的机器人", ru: "Талисман DocMaster: робот, чьё тело — раскрытая книга" },
        /* Court, pour tenir sur un téléphone sans recouvrir la bannière : la
           version longue faisait 240 px, soit les deux tiers d'un écran de 375.

           Et SANS CHIFFRE, délibérément. « Les 14 guides sont là » aurait été
           faux au quinzième sujet, et rien ne l'aurait signalé : seules 2 des
           17 pages hors cours chargent parcours.js, la source de vérité du
           nombre de sujets. Une question ne vieillit pas. */
        mascotteBulle:  { fr: "Par où commencer ?", en: "Where to start?", es: "¿Por dónde empezar?", de: "Womit anfangen?", it: "Da dove iniziare?", zh: "从哪里开始？", ru: "С чего начать?" },
        mascotteLien:   { fr: "Voir les guides", en: "See the guides", es: "Ver las guías", de: "Zu den Leitfäden", it: "Vedi le guide", zh: "查看指南", ru: "К руководствам" },
        mascotteFermer: { fr: "Masquer la mascotte", en: "Hide the mascot", es: "Ocultar la mascota", de: "Maskottchen ausblenden", it: "Nascondi la mascotte", zh: "隐藏吉祥物", ru: "Скрыть талисман" },

        // --- Page introuvable ------------------------------------------------
        // Servie par GitHub Pages pour toute adresse inconnue du site, quelle
        // que soit la langue du chemin demandé : elle ne peut pas exister en
        // plusieurs exemplaires, elle traduit donc son propre texte.
        introuvableTitre: { fr: "Cette page n'existe pas ou a été déplacée.", en: "This page does not exist, or has been moved.", es: "Esta página no existe o ha sido trasladada.", de: "Diese Seite existiert nicht oder wurde verschoben.", it: "Questa pagina non esiste o è stata spostata.", zh: "该页面不存在或已被移动。", ru: "Эта страница не существует или была перемещена." },
        introuvableTexte: { fr: "Pas de panique — retourne à l'accueil pour retrouver tous les guides.", en: "No need to worry — go back to the home page to find all the guides.", es: "Que no cunda el pánico: vuelva al inicio para encontrar todas las guías.", de: "Kein Grund zur Sorge — kehren Sie zur Startseite zurück, um alle Leitfäden zu finden.", it: "Niente panico: torna alla home per ritrovare tutte le guide.", zh: "别担心 — 返回首页即可找到所有指南。", ru: "Не волнуйтесь — вернитесь на главную, чтобы найти все руководства." },
        retourAccueil:    { fr: "← Retour à l'accueil", en: "← Back to the home page", es: "← Volver al inicio", de: "← Zurück zur Startseite", it: "← Torna alla home", zh: "← 返回首页", ru: "← Вернуться на главную" },

        // --- Quiz -----------------------------------------------------------
        quizSurtitre: { fr: "On passe au test", en: "Time for a test", es: "Pasemos a la prueba", de: "Jetzt wird geprüft", it: "Passiamo alla prova", zh: "来做个测验", ru: "Переходим к проверке" },
        quizTitre:    { fr: "🧠 Vérifiez votre compréhension", en: "🧠 Check your understanding", es: "🧠 Compruebe lo que ha entendido", de: "🧠 Prüfen Sie Ihr Verständnis", it: "🧠 Verifica la tua comprensione", zh: "🧠 检验你的理解", ru: "🧠 Проверьте, что вы поняли" },
        // {j} bonnes réponses, {r} questions répondues. Les accolades sont
        // remplacees a l affichage : l ordre des deux nombres change selon la
        // langue, une concatenation en dur ne le permettrait pas.
        quizScore:    { fr: "{j} bonne(s) réponse(s) sur {r} question(s) répondue(s)", en: "{j} correct out of {r} answered", es: "{j} acierto(s) de {r} pregunta(s) respondida(s)", de: "{j} von {r} beantworteten Fragen richtig", it: "{j} risposta/e corretta/e su {r} domanda/e", zh: "已答 {r} 题，答对 {j} 题", ru: "{j} верных из {r} отвеченных" },
        quizRotation: { fr: "Les questions changent le ", en: "The questions change on ", es: "Las preguntas cambian el ", de: "Die Fragen wechseln am ", it: "Le domande cambiano il ", zh: "题目将于 ", ru: "Вопросы сменятся " },
        quizRotationFin:{ fr: ".", en: ".", es: ".", de: ".", it: ".", zh: " 更换。", ru: "." },

        // --- Bandeaux ------------------------------------------------------
        /* Ce message ne parle que de LA PAGE AFFICHÉE, et non plus de tout le
           site. Sa version précédente — « les cours de ce site sont écrits en
           français » — est devenue fausse le jour où les quatorze sujets ont
           été traduits, et décourageait alors d'aller les lire. Une affirmation
           sur l'ensemble du site vieillit mal ; une affirmation sur la page
           qu'on a sous les yeux reste vraie. */
        pageNonTraduite: {
            fr: "",
            en: "This page has not been translated yet. It is shown in French.",
            es: "Esta página aún no está traducida. Se muestra en francés.",
            de: "Diese Seite ist noch nicht übersetzt. Sie wird auf Französisch angezeigt.",
            it: "Questa pagina non è ancora tradotta. È mostrata in francese.",
            zh: "本页面尚未翻译，显示为法语。",
            ru: "Эта страница ещё не переведена. Она показана на французском языке.",
        },
        // Affiché sur une page française qui, elle, a bien une traduction : le
        // visiteur y est arrivé par un lien partagé ou par son navigateur.
        versionDisponible: {
            fr: "",
            en: "This page is also available in English.",
            es: "Esta página también está disponible en español.",
            de: "Diese Seite ist auch auf Deutsch verfügbar.",
            it: "Questa pagina è disponibile anche in italiano.",
            zh: "本页面也提供中文版本。",
            ru: "Эта страница также доступна на русском языке.",
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

    /* Les langues réellement proposées au visiteur. Le français y est toujours :
       c'est la version d'origine, elle existe par construction. Une autre langue
       n'apparaît que si elle a du contenu — un sujet traduit, ou une page hors
       cours traduite.

       La liste se DÉDUIT, elle ne se déclare pas : le jour où l'espagnol
       recevra son premier sujet, son drapeau apparaîtra sans qu'on y pense.
       Une liste écrite à la main aurait à être tenue à jour en parallèle des
       deux autres, et aurait fini par les contredire.

       Pourquoi filtrer : l'interface est traduite dans les sept langues, mais
       une interface traduite autour d'un site entièrement français n'est pas
       une traduction — c'est une promesse non tenue. « Un drapeau qui promet
       une traduction inexistante est pire que pas de drapeau. » */
    function langueDisponible(code) {
        if (code === "fr") return true;
        return (CONTENU_TRADUIT[code] || []).length > 0 ||
               (PAGES_TRADUITES[code] || []).length > 0;
    }

    const LANGUES_DISPONIBLES = LANGUES.filter((l) => langueDisponible(l.code));
    const CODES_DISPONIBLES = LANGUES_DISPONIBLES.map((l) => l.code);

    /* Le préfixe de langue dans une adresse. La condition qui suit — un dossier
       « guides/ », un nom de fichier, ou rien — évite de confondre un préfixe
       avec un dossier qui porterait le même nom qu'un code. Sans elle,
       « /guides/it/ » serait lu comme de l'italien le jour où un sujet
       s'appellerait « it ».

       Le site est servi à la racine en local et sous « /docmaster/ » en ligne :
       on ne peut donc pas ancrer au début du chemin. On prend la première
       occurrence, qui est le préfixe. */
    const PREFIXE = new RegExp("/(" + CODES.join("|") + ")/(?=guides/|[a-z0-9-]+\\.html$|$)");

    // Le nom de fichier de la page courante. Une adresse qui finit par « / »
    // désigne l'index du dossier, comme le fait tout serveur web.
    function fichierCourant() {
        const dernier = location.pathname.split("/").pop();
        return dernier || "index.html";
    }

    /* La langue retenue, dans l'ordre :

       1. celle de la page affichée, si l'adresse la porte. Une page sous
          « /en/ » est anglaise, quoi qu'en dise le réglage : afficher une
          interface russe autour d'un cours anglais n'aurait aucun sens, et
          c'est ce qui arriverait à qui suit un lien partagé.
       2. le choix explicite du visiteur, mémorisé ;
       3. le réglage de son navigateur ;
       4. le français.

       Les pages françaises n'ont pas de préfixe : un visiteur qui a choisi
       l'anglais garde donc son interface anglaise en les parcourant, avec le
       bandeau qui prévient que le cours, lui, est en français. */
    /* On filtre sur CODES_DISPONIBLES et non sur CODES. Ce n'est pas une
       précaution théorique : avec CODES, un visiteur ayant choisi le russe
       avant que le sélecteur ne soit restreint faisait chercher à layout.js un
       drapeau absent de sa liste. La lecture de « .drapeau » sur « undefined »
       levait une exception AVANT le document.write de la navigation — et la
       page s'affichait alors **sans aucune barre de navigation**. Vérifié en
       réinjectant le défaut : 0 entrée de menu. */
    function langueChoisie() {
        const m = location.pathname.match(PREFIXE);
        if (m) return m[1];

        let choix = null;
        try { choix = localStorage.getItem("langue"); } catch (e) {}
        if (choix && CODES_DISPONIBLES.indexOf(choix) !== -1) return choix;

        const nav = (navigator.language || "fr").slice(0, 2).toLowerCase();
        return CODES_DISPONIBLES.indexOf(nav) !== -1 ? nav : "fr";
    }

    function definirLangue(code) {
        if (CODES_DISPONIBLES.indexOf(code) === -1) return;
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

    // La langue de la page affichée, lue dans l'adresse et non dans le réglage :
    // « /en/guides/... » est une page anglaise même si le réglage dit autre chose.
    function langueDeLaPage() {
        const m = location.pathname.match(PREFIXE);
        return m ? m[1] : "fr";
    }

    /* La page courante existe-t-elle dans cette langue ? Vrai pour le français,
       qui est la version d'origine et existe toujours. */
    function existeDansLangue(code) {
        if (code === "fr") return true;
        const sujet = sujetCourant();
        if (sujet) return (CONTENU_TRADUIT[code] || []).indexOf(sujet) !== -1;
        return (PAGES_TRADUITES[code] || []).indexOf(fichierCourant()) !== -1;
    }

    const LOCALE = () => LOCALES_DATE[langueChoisie()] || "fr-FR";

    /* L'adresse de la page courante dans une autre langue, ou null si elle
       n'existe pas. Renvoyer null plutôt qu'une adresse fausse est délibéré :
       une page absente donnerait une erreur 404, ce qui est bien pire que de
       rester sur place avec un bandeau qui explique. */
    function adresseDansLangue(code) {
        if (code === langueDeLaPage()) return null;
        if (!existeDansLangue(code)) return null;

        // On retire le préfixe s'il y en a un ; il ne reste que le chemin
        // français, celui de la version d'origine. Puis on pose le nouveau.
        const nu = location.pathname.replace(PREFIXE, "/");
        if (code === "fr") return nu;

        // Le préfixe se glisse juste avant le dernier segment du chemin pour
        // une page hors cours, et avant « guides/ » pour un cours.
        const coupe = nu.lastIndexOf(sujetCourant() ? "/guides/" : "/");
        return nu.slice(0, coupe) + "/" + code + nu.slice(coupe);
    }

    window.DOCMASTER_LANGUES = {
        // Ce que le sélecteur doit afficher. « LANGUES » reste exposé pour les
        // contrôles, qui vérifient que les sept colonnes de TEXTES existent —
        // elles sont prêtes, elles attendent seulement leur contenu.
        LANGUES: LANGUES_DISPONIBLES,
        LANGUES_TOUTES: LANGUES,
        CODES: CODES,
        TEXTES: TEXTES,
        SUJETS_DROIT_FRANCAIS: SUJETS_DROIT_FRANCAIS,
        CONTENU_TRADUIT: CONTENU_TRADUIT,
        PAGES_TRADUITES: PAGES_TRADUITES,
        existeDansLangue: existeDansLangue,
        langueDisponible: langueDisponible,
        langueChoisie: langueChoisie,
        definirLangue: definirLangue,
        t: t,
        sujetCourant: sujetCourant,
        langueDeLaPage: langueDeLaPage,
        adresseDansLangue: adresseDansLangue,
        locale: LOCALE,
    };

    /* Posé avant le premier affichage : un lecteur d'écran doit connaître la
       langue de la page dès le départ, pas après le chargement des scripts.

       « langueDeLaPage » et non « langueChoisie » : cet attribut décrit le
       TEXTE de la page, pas la préférence du visiteur. Un lecteur ayant choisi
       l'anglais puis ouvert une page française voyait « lang="en" » sur du
       texte français — une prononciation fausse au lecteur d'écran, et un
       mauvais signal aux moteurs de recherche. Sur une page de « en/ », les
       deux fonctions renvoient la même chose : seul le cas dépareillé change. */
    document.documentElement.setAttribute("lang", langueDeLaPage());
})();
