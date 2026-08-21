// ===================================
// BANQUE DE QUESTIONS — GUIDE INTELLIGENCE ARTIFICIELLE
// ===================================
// 6 questions par sous-section : 3 affichées, les 3 autres prennent le relais
// au bout de deux semaines. Les questions de synthèse sont distinctes.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "quest-ce-quun-llm": [
            // Série 1
            {
                q: "Quelle est la fonction d'un modèle de langage (LLM) ?",
                options: [
                    "Rechercher la réponse dans une base de données",
                    "Prédire la suite la plus probable d'une séquence de texte",
                    "Raisonner à partir de règles écrites par des ingénieurs"
                ],
                a: 1,
                explication: "À chaque étape, il calcule une probabilité pour chaque token possible, en choisit un, puis recommence."
            },
            {
                q: "Qu'est-ce qu'un token ?",
                options: [
                    "Un mot entier",
                    "Un fragment de mot, unité de découpage du texte",
                    "Un identifiant de connexion"
                ],
                a: 1,
                explication: "« anticonstitutionnellement » peut représenter quatre tokens, « le » un seul."
            },
            {
                q: "Pourquoi un LLM invente-t-il parfois des références bibliographiques ?",
                options: [
                    "Parce qu'il ment délibérément",
                    "Parce que le format d'une référence est très régulier, son contenu non",
                    "Parce que sa base de données est incomplète"
                ],
                a: 1,
                explication: "Il produit une suite plausible. Rien dans le mécanisme ne distingue « je sais » de « je complète »."
            },
            // Série 2
            {
                q: "Que désigne la « date de connaissance » (knowledge cutoff) ?",
                options: [
                    "La date d'expiration du modèle",
                    "La date à laquelle s'arrête son corpus d'entraînement",
                    "La durée maximale d'une conversation"
                ],
                a: 1,
                explication: "Sans outil de recherche, tout événement postérieur lui est inconnu."
            },
            {
                q: "Que se passe-t-il quand une conversation dépasse la fenêtre de contexte ?",
                options: [
                    "Le modèle refuse de répondre",
                    "Le début de la conversation est oublié",
                    "La réponse est automatiquement raccourcie"
                ],
                a: 1,
                explication: "Le contexte est ce que le modèle « voit » en une fois. Au-delà, l'information sort de son champ."
            },
            {
                q: "Pourquoi la même question peut-elle recevoir deux réponses différentes ?",
                options: [
                    "Parce que le modèle apprend de tes échanges en direct",
                    "Parce qu'il régénère à chaque fois au lieu de consulter une base",
                    "Parce que la connexion internet varie"
                ],
                a: 1,
                explication: "Le degré de hasard dans le choix des tokens s'appelle la température."
            }
        ],

        // ---------------------------------------------------------------
        "les-agents-ia": [
            // Série 1
            {
                q: "Qu'est-ce qui distingue un agent d'un simple chatbot ?",
                options: [
                    "Il répond plus rapidement",
                    "Il dispose d'outils et enchaîne des étapes vers un objectif",
                    "Il utilise un modèle plus récent"
                ],
                a: 1,
                explication: "Un agent agit, observe le résultat, décide de la suite, et recommence jusqu'à atteindre son but."
            },
            {
                q: "Quelle est la différence la plus importante en cas d'erreur ?",
                options: [
                    "Un chatbot produit une réponse fausse à lire, un agent a déjà exécuté l'action",
                    "L'agent s'excuse automatiquement",
                    "Il n'y a aucune différence"
                ],
                a: 0,
                explication: "Un chatbot qui se trompe te fait perdre une minute. Un agent a déjà supprimé le fichier ou envoyé le message."
            },
            {
                q: "Qu'est-ce que l'injection d'instructions ?",
                options: [
                    "Une méthode pour accélérer les réponses",
                    "Un texte glissé dans un contenu extérieur, rédigé pour manipuler l'agent",
                    "L'ajout de données d'entraînement supplémentaires"
                ],
                a: 1,
                explication: "La parade : ce qu'un agent lit est une donnée, jamais un ordre. Seul l'utilisateur donne des ordres."
            },
            // Série 2
            {
                q: "Sur quelles actions un agent bien conçu doit-il s'arrêter et demander confirmation ?",
                options: [
                    "Toutes, sans exception",
                    "Les actions irréversibles : supprimer, envoyer, payer, publier",
                    "Aucune, sinon il perd son intérêt"
                ],
                a: 1,
                explication: "Un agent bien conçu te rend la main sur ce qui ne se rattrape pas."
            },
            {
                q: "« Range ma boîte mail » autorise l'agent à faire quoi ?",
                options: [
                    "À exécuter ce que demandent les messages qu'il y trouve",
                    "À lire les messages, mais pas à exécuter les consignes qu'ils contiennent",
                    "À supprimer tout message de plus d'un an"
                ],
                a: 1,
                explication: "Une demande de tri autorise la lecture, pas l'exécution du contenu lu."
            },
            {
                q: "Face à « trouve les trois articles les plus cités et résume-les », quel avantage a l'agent ?",
                options: [
                    "Il répond de mémoire, donc plus vite",
                    "Il consulte réellement les documents, y compris en contournant un lien mort",
                    "Il invente des citations plus crédibles"
                ],
                a: 1,
                explication: "Chaque affirmation s'appuie alors sur un document réellement ouvert, non sur une mémoire approximative."
            }
        ],

        // ---------------------------------------------------------------
        "le-prompt-engineering": [
            // Série 1
            {
                q: "Que fait le modèle avec ce que tu n'as pas précisé ?",
                options: [
                    "Il te pose la question",
                    "Il le comble par ce qui est statistiquement le plus courant",
                    "Il laisse un blanc"
                ],
                a: 1,
                explication: "C'est-à-dire par du générique. D'où l'importance de préciser le format et le contexte."
            },
            {
                q: "Quels sont les quatre éléments d'une bonne consigne ?",
                options: [
                    "Politesse, longueur, urgence, récompense",
                    "Contexte, tâche, format, contraintes",
                    "Sujet, verbe, complément, ponctuation"
                ],
                a: 1,
                explication: "La tâche doit être un verbe précis : « résume », « compare » — pas « parle-moi de »."
            },
            {
                q: "Quelle technique est la plus efficace pour obtenir le bon format ?",
                options: [
                    "Décrire le format en détail",
                    "Donner un exemple du résultat attendu",
                    "Répéter la consigne deux fois"
                ],
                a: 1,
                explication: "Un modèle imite bien mieux qu'il ne suit une description."
            },
            // Série 2
            {
                q: "Pourquoi demander le raisonnement avant la conclusion ?",
                options: [
                    "Pour occuper le modèle plus longtemps",
                    "Parce que chaque étape sert d'appui à la suivante, ce qui améliore la fiabilité",
                    "Parce que c'est plus agréable à lire"
                ],
                a: 1,
                explication: "L'effet est net sur les problèmes à étapes, beaucoup moins sur une question simple."
            },
            {
                q: "Quel effet a le fait de menacer ou de flatter un modèle ?",
                options: [
                    "Il répond nettement mieux",
                    "Aucun effet durable : ce qui compte est la précision de la consigne",
                    "Il refuse de répondre"
                ],
                a: 1,
                explication: "Le reste relève de la superstition. Précision, exemples et format attendu font la différence."
            },
            {
                q: "Que produit l'ajout de « si tu n'es pas sûr, dis-le » ?",
                options: [
                    "Des réponses systématiquement évasives",
                    "Une réduction nette des affirmations inventées",
                    "Un refus de répondre aux questions difficiles"
                ],
                a: 1,
                explication: "Autoriser explicitement l'ignorance est l'une des consignes les plus rentables."
            }
        ],

        // ---------------------------------------------------------------
        "les-limites-et-risques-de-lia": [
            // Série 1
            {
                q: "Dans quelles zones les hallucinations sont-elles les plus probables ?",
                options: [
                    "Les explications générales et les définitions",
                    "Les chiffres précis, dates, citations et références peu connues",
                    "Les traductions"
                ],
                a: 1,
                explication: "Partout où la réponse est très spécifique et où le corpus d'entraînement était mince."
            },
            {
                q: "Quel signal doit déclencher une vérification ?",
                options: [
                    "Une réponse longue",
                    "Une réponse très précise sur un sujet obscur",
                    "Une réponse qui commence par « je pense »"
                ],
                a: 1,
                explication: "Plus l'affirmation est précise sur un sujet peu documenté, plus elle mérite d'être vérifiée."
            },
            {
                q: "Quelle question se poser avant de coller un contenu dans une IA grand public ?",
                options: [
                    "Est-ce que le texte est trop long ?",
                    "Serais-je à l'aise si ce texte apparaissait dans un document public ?",
                    "Est-ce que le sujet est intéressant ?"
                ],
                a: 1,
                explication: "Cela écarte les données de santé, les contrats confidentiels, les mots de passe et les clés d'accès."
            },
            // Série 2
            {
                q: "D'où viennent les biais d'un modèle ?",
                options: [
                    "D'une intention programmée par ses concepteurs",
                    "Des régularités de ses données d'entraînement, stéréotypes compris",
                    "D'un défaut de calcul"
                ],
                a: 1,
                explication: "Cela devient sérieux dès qu'une IA intervient dans un tri de candidatures ou une évaluation."
            },
            {
                q: "Pourquoi un LLM est-il peu fiable sur un calcul exact ?",
                options: [
                    "Parce qu'il prédit du texte, il ne calcule pas",
                    "Parce que les mathématiques sont exclues de son entraînement",
                    "Parce qu'il arrondit systématiquement"
                ],
                a: 0,
                explication: "Sauf s'il dispose d'un outil de calcul. Sinon, un tableur reste supérieur."
            },
            {
                q: "Pourquoi la qualité d'écriture d'une IA pose-t-elle un problème ?",
                options: [
                    "Elle rend les textes trop longs",
                    "Elle neutralise notre détecteur d'erreur habituel : d'ordinaire un contenu douteux est mal écrit",
                    "Elle empêche de repérer les fautes d'orthographe"
                ],
                a: 1,
                explication: "Il faut donc juger sur le fond, indépendamment de la forme — un effort qui ne vient pas naturellement."
            }
        ]
    },

    // -------------------------------------------------------------------
    // SYNTHÈSE
    // -------------------------------------------------------------------
    synthese: [
        // Série 1
        {
            q: "Quelle est la façon la plus sûre d'utiliser une IA ?",
            options: [
                "Sur des sujets qu'on ne maîtrise pas, pour combler ses lacunes",
                "Sur des sujets qu'on sait évaluer, pour repérer les erreurs",
                "Sur n'importe quel sujet, en lui faisant confiance"
            ],
            a: 1,
            explication: "Sur un sujet inconnu, tu n'as aucun moyen de voir l'erreur."
        },
        {
            q: "Un modèle affirme une chose avec assurance. Que peut-on en conclure ?",
            options: [
                "Que l'information est probablement exacte",
                "Rien : l'assurance est identique qu'il sache ou qu'il complète",
                "Qu'il a vérifié sa source"
            ],
            a: 1,
            explication: "C'est à toi d'introduire la distinction entre savoir et compléter, en vérifiant."
        },
        {
            q: "Plus un système agit sur le monde réel, quelle question devient prioritaire ?",
            options: [
                "Quelle est sa performance ?",
                "Que se passe-t-il s'il se trompe ?",
                "Combien coûte-t-il ?"
            ],
            a: 1,
            explication: "C'est ce qui distingue l'évaluation d'un chatbot de celle d'un agent."
        },
        // Série 2
        {
            q: "Tu dois faire rédiger un mémo interne. Quelle demande donnera le meilleur résultat ?",
            options: [
                "« Écris un texte sur la sécurité informatique »",
                "Une demande précisant le public, la longueur, le ton et trois exemples attendus",
                "« Fais au mieux, tu sais ce qu'il faut »"
            ],
            a: 1,
            explication: "Trente secondes de plus à écrire la consigne font gagner trois allers-retours."
        },
        {
            q: "Une IA te propose une référence juridique précise avec numéro d'article. Que faire ?",
            options: [
                "L'utiliser telle quelle, la précision est un gage de fiabilité",
                "La vérifier à la source : c'est exactement le profil d'une hallucination",
                "Lui demander si elle est sûre, sa réponse suffira"
            ],
            a: 1,
            explication: "Références, dates et chiffres précis sur sujets peu documentés sont les zones les plus risquées."
        },
        {
            q: "Quelle limite aucun progrès technique n'a supprimée à ce jour ?",
            options: [
                "La capacité à produire un texte fluide",
                "La responsabilité du jugement, qui reste humaine",
                "La possibilité de traduire d'une langue à l'autre"
            ],
            a: 1,
            explication: "Un modèle peut lister les arguments d'une décision difficile ; il n'en porte pas la responsabilité. Toi, si."
        }
    ]
};
