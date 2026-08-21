// ===================================
// BANQUE DE QUESTIONS — IA, NIVEAU INTERMÉDIAIRE
// ===================================
// 6 questions par sous-section : 3 affichées, les 3 autres prennent le relais
// au bout de deux semaines. Les questions de synthèse sont distinctes de
// celles des sous-sections — aucune n'est reprise deux fois.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "contexte-et-jetons": [
            // Série 1
            {
                q: "Qu'est-ce qu'un jeton pour un modèle de langage ?",
                options: [
                    "Un mot complet",
                    "Un fragment de texte, souvent une syllabe ou un mot court",
                    "Une phrase entière"
                ],
                a: 1,
                explication: "En français, compte environ trois jetons pour deux mots."
            },
            {
                q: "Que contient la fenêtre de contexte ?",
                options: [
                    "Uniquement la dernière question posée",
                    "La consigne, les documents, l'historique et la réponse, additionnés",
                    "La mémoire permanente du modèle"
                ],
                a: 1,
                explication: "Tout ce que le modèle doit lire ou produire en une fois entre dans ce plafond."
            },
                        {
                q: "Comment un modèle se souvient-il d'une conversation ?",
                options: [
                    "Il enregistre l'historique de son côté",
                    "Il ne se souvient de rien : l'historique lui est renvoyé à chaque tour",
                    "Il conserve un résumé automatique"
                ],
                a: 1,
                explication: "C'est ce renvoi permanent qui donne l'illusion d'une mémoire — et qui fait grimper le coût."
            },
            // Série 2
            {
                q: "Une conversation de dix tours à 500 jetons par tour : combien le modèle lit-il au total ?",
                options: [
                    "5 000 jetons",
                    "27 500 jetons",
                    "500 jetons"
                ],
                a: 1,
                explication: "La somme des historiques successifs, pas le dernier échange. C'est ce total qui est facturé."
            },
            {
                q: "Que se passe-t-il quand la fenêtre de contexte déborde ?",
                options: [
                    "L'appel échoue, ou le début est silencieusement tronqué",
                    "Le modèle compresse automatiquement l'historique",
                    "Rien, la fenêtre s'agrandit"
                ],
                a: 0,
                explication: "Le second cas est le plus perfide : le modèle continue de répondre, mais a « oublié » les consignes du départ."
            },
            {
                q: "Une très grande fenêtre de contexte règle-t-elle tout ?",
                options: [
                    "Oui, il suffit d'envoyer tous ses documents",
                    "Non : la qualité de l'attention se dégrade sur les très longs textes",
                    "Oui, et cela coûte moins cher"
                ],
                a: 1,
                explication: "Envoyer les trois pages pertinentes donne presque toujours de meilleurs résultats, et coûte cent fois moins."
            }
        ],

        // ---------------------------------------------------------------
        "le-rag": [
            // Série 1
            {
                q: "Que fait le RAG, en une phrase ?",
                options: [
                    "Il entraîne le modèle sur tes documents",
                    "Il cherche les passages pertinents puis les donne au modèle avec la question",
                    "Il compresse les documents pour les faire tenir en mémoire"
                ],
                a: 1,
                explication: "Le modèle répond en s'appuyant sur ces passages, et non sur sa mémoire d'entraînement."
            },
            {
                q: "Qu'est-ce qu'un plongement ?",
                options: [
                    "Une liste de nombres représentant le sens d'un fragment",
                    "Un résumé automatique du document",
                    "Une compression du texte"
                ],
                a: 0,
                explication: "La question subit le même traitement, puis on cherche les fragments dont les nombres sont les plus proches."
            },
            {
                q: "Le RAG rend-il le modèle plus intelligent ?",
                options: [
                    "Oui, il augmente ses capacités de raisonnement",
                    "Non, il lui met simplement le bon document sous les yeux",
                    "Oui, il ajoute des connaissances à ses poids"
                ],
                a: 1,
                explication: "La différence entre une bonne et une mauvaise réponse tient souvent à cela seul."
            },
            // Série 2
            {
                q: "Quelle est la vraie difficulté d'un RAG ?",
                options: [
                    "Le choix du modèle",
                    "Le découpage des documents en fragments",
                    "La vitesse de la recherche"
                ],
                a: 1,
                explication: "Trop petits, les fragments perdent leur contexte ; trop grands, ils diluent l'information et coûtent plus cher."
            },
            {
                q: "Le RAG supprime-t-il les inventions ?",
                options: [
                    "Oui, complètement",
                    "Non : si la recherche ne remonte rien de pertinent, le modèle répond quand même",
                    "Oui, si les documents sont à jour"
                ],
                a: 1,
                explication: "Il faut instruire explicitement le modèle de dire qu'il ne trouve pas, et afficher les sources pour permettre la vérification."
            },
            {
                q: "Que perd un fragment trop petit ?",
                options: [
                    "Sa lisibilité",
                    "Son contexte — « ce délai est de quatorze jours » ne dit pas de quel délai",
                    "Sa position dans le document"
                ],
                a: 1,
                explication: "C'est pourquoi le découpage doit suivre la structure réelle des documents, pas une taille arbitraire."
            }
        ],

        // ---------------------------------------------------------------
        "outils-et-fonctions": [
            // Série 1
            {
                q: "Que fait un modèle quand il décide d'utiliser un outil ?",
                options: [
                    "Il exécute l'outil lui-même",
                    "Il produit une demande d'appel, que ton programme exécute ou non",
                    "Il demande l'autorisation à l'utilisateur"
                ],
                a: 1,
                explication: "Le modèle propose, ton code dispose. Toute la sécurité d'un agent se place à cet endroit."
            },
            {
                q: "Qu'est-ce qui transforme un assistant en agent ?",
                options: [
                    "Un modèle plus performant",
                    "La capacité d'appeler des outils",
                    "Une fenêtre de contexte plus grande"
                ],
                a: 1,
                explication: "Un modèle seul ne fait que produire du texte."
            },
            {
                q: "Pourquoi préférer des outils étroits à un outil général ?",
                options: [
                    "Ils sont plus rapides",
                    "Ils limitent ce qu'un agent manipulé peut faire",
                    "Ils coûtent moins cher"
                ],
                a: 1,
                explication: "Un outil « exécuter une requête quelconque » revient à confier les clés de la base à un système manipulable par le texte qu'il lit."
            },
            // Série 2
            {
                q: "Dans le déroulé d'un appel d'outil, quelle étape t'appartient ?",
                options: [
                    "La décision d'appeler l'outil",
                    "La vérification et l'exécution de l'appel",
                    "La rédaction de la réponse finale"
                ],
                a: 1,
                explication: "Sur quatre étapes, celle du milieu est entièrement de ton ressort."
            },
            {
                q: "Comment traiter les outils qui produisent des effets irréversibles ?",
                options: [
                    "Les séparer des outils de lecture et les soumettre à confirmation",
                    "Les désactiver en production",
                    "Les confier à un modèle plus fiable"
                ],
                a: 0,
                explication: "Une consigne ambiguë suffit à déclencher une action à tort, sans aucune malveillance."
            },
            {
                q: "Comment le modèle sait-il quels outils sont disponibles ?",
                options: [
                    "Il les découvre en essayant",
                    "On les lui décrit : nom, rôle, paramètres attendus",
                    "Ils sont inclus dans son entraînement"
                ],
                a: 1,
                explication: "La qualité de ces descriptions détermine largement la pertinence des appels."
            }
        ],

        // ---------------------------------------------------------------
        "choisir-un-modele": [
            // Série 1
            {
                q: "Quel est généralement le bon choix de modèle ?",
                options: [
                    "Le plus performant disponible",
                    "Le plus petit qui réussit ta tâche",
                    "Le moins cher, toujours"
                ],
                a: 1,
                explication: "Sur une tâche simple et répétée, un modèle plus petit répond aussi bien, plus vite et pour une fraction du prix."
            },
            {
                q: "Comment le coût d'un modèle est-il facturé ?",
                options: [
                    "Par requête",
                    "Par million de jetons, en distinguant entrée et sortie",
                    "Par minute d'utilisation"
                ],
                a: 1,
                explication: "La sortie est généralement plusieurs fois plus chère que l'entrée."
            },
            {
                q: "Quel critère précède parfois tous les autres ?",
                options: [
                    "La popularité du fournisseur",
                    "L'endroit où circulent les données",
                    "La taille de la fenêtre de contexte"
                ],
                a: 1,
                explication: "Un modèle ouvert hébergé chez toi ne fait sortir aucune donnée ; un service distant, si."
            },
            // Série 2
            {
                q: "Que valent les classements publics de modèles pour ton projet ?",
                options: [
                    "Ils donnent la réponse directement",
                    "Ils mesurent des capacités générales, pas ton cas particulier",
                    "Ils sont sans aucun intérêt"
                ],
                a: 1,
                explication: "Les modèles finissent d'ailleurs par être optimisés pour ces tests."
            },
            {
                q: "Comment choisir sérieusement entre deux modèles ?",
                options: [
                    "En lisant les annonces des fournisseurs",
                    "En faisant passer vingt exemples représentatifs de sa tâche réelle",
                    "En comparant le nombre de paramètres"
                ],
                a: 1,
                explication: "Une demi-journée de travail, et une réponse qui te concerne vraiment."
            },
            {
                q: "Pourquoi la latence est-elle un critère à part entière ?",
                options: [
                    "Elle change le coût",
                    "Deux secondes contre dix change tout dans une interface où quelqu'un attend",
                    "Elle indique la qualité du modèle"
                ],
                a: 1,
                explication: "Un modèle excellent mais lent peut être inutilisable dans un usage interactif."
            }
        ]
    },

    // ===================================================================
    // Questions de synthèse — distinctes de celles des sous-sections
    // ===================================================================
    synthese: [
        // Série 1
        {
            q: "Quel est le point commun entre la fenêtre de contexte et le coût d'un projet ?",
            options: [
                "Le volume de jetons lus détermine les deux",
                "Ils dépendent tous deux du nombre d'utilisateurs",
                "Ils sont indépendants"
            ],
            a: 0,
            explication: "Comprendre les jetons, c'est comprendre à la fois la limite technique et la facture."
        },
        {
            q: "Une entreprise veut que le modèle connaisse ses procédures internes. Que faut-il faire ?",
            options: [
                "Entraîner un modèle sur ses documents",
                "Mettre en place une récupération de documents",
                "Choisir un modèle plus performant"
            ],
            a: 1,
            explication: "Le RAG met le bon document sous les yeux du modèle, et se met à jour immédiatement."
        },
        {
            q: "Qu'est-ce qui détermine ce qu'un agent peut casser ?",
            options: [
                "La performance du modèle choisi",
                "Le périmètre des outils qu'on lui a donnés",
                "La taille de sa fenêtre de contexte"
            ],
            a: 1,
            explication: "Rien de plus, rien de moins : c'est pourquoi des outils étroits valent mieux qu'un outil général."
        },
        // Série 2
        {
            q: "Pourquoi envoyer un livre entier à un modèle est-il rarement une bonne idée ?",
            options: [
                "C'est techniquement impossible",
                "L'attention se dégrade et le coût explose",
                "Le modèle refuse les textes longs"
            ],
            a: 1,
            explication: "Les trois pages pertinentes font mieux, et cent fois moins cher."
        },
        {
            q: "Quel est le fil conducteur de ce niveau ?",
            options: [
                "Chaque choix technique se traduit en coût et en risque mesurables",
                "Les modèles progressent trop vite pour être maîtrisés",
                "Il faut toujours privilégier les modèles ouverts"
            ],
            a: 0,
            explication: "Contexte, récupération, outils et choix de modèle : quatre décisions qui se chiffrent et s'arbitrent."
        },
        {
            q: "Avant de choisir un modèle, quel travail préalable est le plus rentable ?",
            options: [
                "Lire les classements publics",
                "Écrire vingt cas de test représentatifs",
                "Comparer les tailles de fenêtre de contexte"
            ],
            a: 1,
            explication: "Ils serviront ensuite à chaque changement de version — et il y en aura."
        }
    ]
};
