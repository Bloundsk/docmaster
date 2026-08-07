// ===================================
// DOCMASTER - DONNÉES DE RECHERCHE
// ===================================

const searchIndex = [
    { title: "Finance", description: "Comprendre les bases de l'investissement et de la gestion financière.", url: "guides/finance/index.html", keywords: "finance argent investissement épargne placement risque budget" },
    { title: "L'épargne", description: "Comprendre pourquoi et comment mettre de l'argent de côté régulièrement.", url: "guides/finance/index.html", keywords: "épargne économiser argent côté précaution automatiser virement" },
    { title: "L'investissement", description: "Découvrir les grands types de placements (actions, obligations, immobilier).", url: "guides/finance/index.html", keywords: "investissement actions obligations immobilier placement bourse intérêt composé" },
    { title: "Les ETF", description: "Comprendre le fonctionnement des trackers et fonds indiciels cotés.", url: "guides/finance/index.html", keywords: "etf tracker fonds indiciel bourse investissement passif diversification" },
    { title: "La gestion du risque", description: "Apprendre à équilibrer rendement et sécurité selon ses objectifs.", url: "guides/finance/index.html", keywords: "risque rendement sécurité gestion diversification horizon placement" },
    { title: "La fiscalité de l'épargne", description: "Comprendre les avantages fiscaux du PEA, de l'assurance-vie et des livrets.", url: "guides/finance/index.html", keywords: "fiscalité impôt pea assurance-vie livret a ldds enveloppe fiscale" },

    { title: "Intelligence Artificielle", description: "Explorer les technologies d'IA et apprendre à créer des agents intelligents.", url: "guides/ia/index.html", keywords: "intelligence artificielle ia agents technologie" },
    { title: "Qu'est-ce qu'un LLM ?", description: "Comprendre le fonctionnement des modèles de langage.", url: "guides/ia/index.html", keywords: "llm modèle langage ia chatbot conversationnelle entraînement prédiction" },
    { title: "Les agents IA", description: "Découvrir comment une IA peut exécuter des tâches de façon autonome.", url: "guides/ia/index.html", keywords: "agents ia autonome tâches outils raisonnement" },
    { title: "Le prompt engineering", description: "Apprendre à formuler des instructions efficaces pour obtenir de meilleurs résultats.", url: "guides/ia/index.html", keywords: "prompt engineering instructions ia contexte" },
    { title: "Les limites et risques de l'IA", description: "Comprendre hallucinations, biais et confidentialité des données avec l'IA.", url: "guides/ia/index.html", keywords: "limites risques ia hallucinations biais confidentialité données" },

    { title: "Développement Web", description: "Apprendre à créer des sites et applications web modernes.", url: "guides/dev-web/index.html", keywords: "développement web site application coder" },
    { title: "HTML & CSS", description: "Les fondations de toute page web : structure et apparence visuelle.", url: "guides/dev-web/index.html", keywords: "html css structure page web balises" },
    { title: "JavaScript", description: "Le langage qui rend les pages interactives.", url: "guides/dev-web/index.html", keywords: "javascript js interactif dynamique dom" },
    { title: "Frontend vs Backend", description: "Comprendre la différence entre frontend et backend.", url: "guides/dev-web/index.html", keywords: "frontend backend serveur client fullstack" },
    { title: "Responsive Design", description: "Adapter un site pour mobile, tablette et ordinateur.", url: "guides/dev-web/index.html", keywords: "responsive mobile tablette design adaptatif media queries" },

    { title: "Marketing Digital", description: "Comprendre les leviers pour promouvoir un produit ou une marque en ligne.", url: "guides/marketing/index.html", keywords: "marketing digital promotion marque publicité" },
    { title: "SEO", description: "Optimiser un site pour améliorer son positionnement sur Google.", url: "guides/marketing/index.html", keywords: "seo référencement naturel google recherche mots-clés" },
    { title: "Publicité en ligne (SEA)", description: "Utiliser des campagnes payantes pour toucher une audience ciblée.", url: "guides/marketing/index.html", keywords: "sea publicité ads google meta campagne cpc enchères" },
    { title: "Réseaux sociaux", description: "Construire une présence de marque sur les plateformes sociales.", url: "guides/marketing/index.html", keywords: "réseaux sociaux instagram facebook linkedin communauté" },
    { title: "Email marketing", description: "Fidéliser et convertir une audience grâce à des campagnes d'emails.", url: "guides/marketing/index.html", keywords: "email marketing newsletter campagne segmentation rgpd" },

    { title: "Cybersécurité", description: "Comprendre les bases pour se protéger et protéger ses données en ligne.", url: "guides/cybersecurite/index.html", keywords: "cybersécurité sécurité protection données" },
    { title: "Mots de passe & authentification", description: "Créer des mots de passe robustes et utiliser la 2FA.", url: "guides/cybersecurite/index.html", keywords: "mot de passe authentification 2fa sécurité gestionnaire" },
    { title: "Le phishing", description: "Reconnaître les tentatives d'hameçonnage.", url: "guides/cybersecurite/index.html", keywords: "phishing hameçonnage arnaque email urgence" },
    { title: "Pare-feux et antivirus", description: "Comprendre le rôle des outils de protection de base.", url: "guides/cybersecurite/index.html", keywords: "pare-feu firewall antivirus protection ordinateur" },
    { title: "Le chiffrement des données", description: "Comprendre comment les données sont protégées.", url: "guides/cybersecurite/index.html", keywords: "chiffrement cryptage données protection https bout en bout" },

    { title: "Entrepreneuriat", description: "Apprendre à structurer et lancer un projet d'entreprise.", url: "guides/entrepreneuriat/index.html", keywords: "entrepreneuriat entreprise créer lancer projet" },
    { title: "Le business plan", description: "Structurer son projet : offre, marché cible, stratégie et prévisions.", url: "guides/entrepreneuriat/index.html", keywords: "business plan projet stratégie prévisions" },
    { title: "L'étude de marché", description: "Analyser la demande, la concurrence et le potentiel d'une idée.", url: "guides/entrepreneuriat/index.html", keywords: "étude de marché concurrence demande cible validation" },
    { title: "Le choix du statut juridique", description: "Comprendre les différentes formes juridiques d'entreprise.", url: "guides/entrepreneuriat/index.html", keywords: "statut juridique sasu sarl auto-entreprise micro-entreprise sas" },
    { title: "Le financement", description: "Découvrir les différentes sources de financement d'un projet.", url: "guides/entrepreneuriat/index.html", keywords: "financement prêt levée de fonds subvention fonds propres bpifrance" },

    { title: "Productivité & Organisation", description: "Mieux s'organiser pour gagner en efficacité au quotidien.", url: "guides/productivite/index.html", keywords: "productivité organisation efficacité temps" },
    { title: "La méthode Pomodoro", description: "Travailler par sessions courtes et concentrées.", url: "guides/productivite/index.html", keywords: "pomodoro méthode concentration pause 25 minutes" },
    { title: "La méthode GTD", description: "Organiser ses tâches et projets pour libérer son esprit.", url: "guides/productivite/index.html", keywords: "gtd getting things done tâches organisation david allen" },
    { title: "La matrice d'Eisenhower", description: "Prioriser ses tâches selon urgence et importance.", url: "guides/productivite/index.html", keywords: "eisenhower matrice priorité urgence importance quadrant" },
    { title: "Outils de gestion de tâches", description: "Découvrir des outils numériques pour organiser projets et priorités.", url: "guides/productivite/index.html", keywords: "outils notion trello todoist gestion tâches kanban" },

    { title: "Data & Analytics", description: "Apprendre à collecter, analyser et interpréter des données.", url: "guides/data/index.html", keywords: "data analytics données analyse" },
    { title: "Les KPI", description: "Identifier les bons indicateurs pour mesurer la performance.", url: "guides/data/index.html", keywords: "kpi indicateurs performance mesure conversion" },
    { title: "La collecte de données", description: "Comprendre les sources et méthodes pour recueillir des données fiables.", url: "guides/data/index.html", keywords: "collecte données sources fiabilité qualitatif quantitatif" },
    { title: "La visualisation de données", description: "Représenter des données sous forme de graphiques clairs.", url: "guides/data/index.html", keywords: "visualisation données graphiques dashboard courbes barres" },
    { title: "Les bases des statistiques", description: "Comprendre moyenne, médiane et tendances pour interpréter des données.", url: "guides/data/index.html", keywords: "statistiques moyenne médiane tendance corrélation causalité" },

    { title: "Design UX/UI", description: "Comprendre comment créer des interfaces claires et agréables à utiliser.", url: "guides/design/index.html", keywords: "design ux ui interface" },
    { title: "UX vs UI", description: "Comprendre la distinction entre expérience utilisateur et interface visuelle.", url: "guides/design/index.html", keywords: "ux ui expérience utilisateur interface différence" },
    { title: "Le wireframing", description: "Créer des maquettes simples pour structurer une interface.", url: "guides/design/index.html", keywords: "wireframe maquette structure interface mockup fidélité" },
    { title: "Les principes de design visuel", description: "Découvrir hiérarchie visuelle, couleurs et typographie.", url: "guides/design/index.html", keywords: "design visuel couleurs typographie hiérarchie espace blanc" },
    { title: "Les tests utilisateurs", description: "Comprendre pourquoi et comment tester une interface auprès d'utilisateurs.", url: "guides/design/index.html", keywords: "tests utilisateurs ux research usabilité" },

    { title: "FAQ", description: "Les réponses aux questions fréquentes sur DocMaster.", url: "faq.html", keywords: "faq questions fréquentes aide réponses" },
    { title: "Le site est-il gratuit ?", description: "Pas d'inscription, pas d'abonnement, pas de publicité.", url: "faq.html", keywords: "gratuit prix payant abonnement inscription compte publicité" },
    { title: "Cookies et données personnelles", description: "Ce que le site collecte, et ce qu'il ne collecte pas.", url: "faq.html", keywords: "cookies données personnelles vie privée rgpd statistiques traceur" },
    { title: "Mode sombre", description: "Activer le thème sombre et le conserver d'une visite à l'autre.", url: "faq.html", keywords: "mode sombre dark theme nuit affichage" },
    { title: "Progression de lecture", description: "À quoi sert la case « J'ai lu et compris ce guide ».", url: "faq.html", keywords: "progression lecture marquer lu terminé sauvegarde appareil" },
    { title: "Imprimer un guide", description: "Imprimer ou enregistrer un guide en PDF pour le lire hors ligne.", url: "faq.html", keywords: "imprimer impression pdf hors ligne papier" },
    { title: "Signaler une erreur", description: "Comment remonter une erreur ou proposer une correction.", url: "faq.html", keywords: "erreur correction signaler bug contact github issue" }
];
