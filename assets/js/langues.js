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
    const CONTENU_TRADUIT = { en: ["apprendre", "cybersecurite", "data", "design", "dev-web", "droit", "ecologie", "ia", "marketing", "negociation", "productivite", "sante"], es: [], de: [], it: [], zh: [], ru: [] };

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
        lienCopieCourt:{ fr: "✅ Lien copié !", en: "✅ Link copied!", es: "✅ ¡Enlace copiado!", de: "✅ Link kopiert!", it: "✅ Link copiato!", zh: "✅ 链接已复制！", ru: "✅ Ссылка скопирована!" },
        copieImpossible:{ fr: "Impossible de copier le lien automatiquement. Copie-le manuellement depuis la barre d'adresse.", en: "The link could not be copied automatically. Please copy it from the address bar.", es: "No se ha podido copiar el enlace automáticamente. Cópielo desde la barra de direcciones.", de: "Der Link konnte nicht automatisch kopiert werden. Bitte kopieren Sie ihn aus der Adressleiste.", it: "Impossibile copiare il link automaticamente. Copialo dalla barra degli indirizzi.", zh: "无法自动复制链接，请从地址栏手动复制。", ru: "Не удалось скопировать ссылку автоматически. Скопируйте её из адресной строки." },

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
    function langueChoisie() {
        const m = location.pathname.match(new RegExp("/(" + CODES.join("|") + ")/guides/"));
        if (m) return m[1];

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

    // La langue de la page affichée, lue dans l'adresse et non dans le réglage :
    // « /en/guides/... » est une page anglaise même si le réglage dit autre chose.
    function langueDeLaPage() {
        const m = location.pathname.match(new RegExp("/(" + CODES.join("|") + ")/guides/"));
        return m ? m[1] : "fr";
    }

    const LOCALE = () => LOCALES_DATE[langueChoisie()] || "fr-FR";

    /* L'adresse de la page courante dans une autre langue, ou null si elle
       n'existe pas. Renvoyer null plutôt qu'une adresse fausse est délibéré :
       une page absente donnerait une erreur 404, ce qui est bien pire que de
       rester sur place avec un bandeau qui explique. */
    function adresseDansLangue(code) {
        const chemin = location.pathname;
        const sujet = sujetCourant();
        if (!sujet) return null;

        const actuelle = langueDeLaPage();
        if (code === actuelle) return null;

        const traduit = code === "fr" || (CONTENU_TRADUIT[code] || []).indexOf(sujet) !== -1;
        if (!traduit) return null;

        // On retire le préfixe de langue s'il y en a un, puis on pose le nouveau.
        const nu = chemin.replace(new RegExp("/(" + CODES.join("|") + ")/guides/"), "/guides/");
        return code === "fr" ? nu : nu.replace("/guides/", "/" + code + "/guides/");
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
