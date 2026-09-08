// ===================================
// BANQUE DE QUESTIONS — DÉVELOPPEMENT WEB, NIVEAU AVANCÉ
// ===================================
// 6 questions par sous-section : 3 affichées, les 3 autres prennent le relais
// au bout de deux semaines. Les questions de synthèse sont distinctes de
// celles des sous-sections — aucune n'est reprise deux fois.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "performance-et-cache": [
            // Série 1
            {
                q: "Par quoi commencer pour optimiser une page ?",
                options: [
                    "Mesurer, et s'attaquer à la plus grosse barre",
                    "Minifier le JavaScript",
                    "Changer de cadriciel"
                ],
                a: 0,
                explication: "Optimiser sans mesurer, c'est deviner. La cause est presque jamais celle qu'on imagine."
            },
            {
                q: "Pourquoi le cache est-il un levier particulier ?",
                options: [
                    "Il réduit la taille des fichiers",
                    "Il accélère le serveur",
                    "Il améliore la performance sans rien alléger"
                ],
                a: 2,
                explication: "Une ligne de configuration supprime entièrement le téléchargement pour les visiteurs qui reviennent."
            },
            {
                q: "Comment modifier un fichier fortement mis en cache ?",
                options: [
                    "En changeant son nom : style.a3f9.css",
                    "En vidant le cache des visiteurs",
                    "En réduisant la durée de cache"
                ],
                a: 0,
                explication: "Une modification change le nom, donc l'adresse, donc le cache est contourné naturellement."
            },
            // Série 2
            {
                q: "Qu'est-ce qui pèse le plus lourd, dans l'immense majorité des cas ?",
                options: [
                    "Le code de l'application",
                    "Les images mal dimensionnées",
                    "Les feuilles de style"
                ],
                a: 1,
                explication: "Puis les scripts tiers — statistiques, widgets, bandeaux — et enfin le code de l'application."
            },
            {
                q: "Une page de 1 800 Ko dont 1 500 cachables, avec 60 % de visites de retour : quel volume moyen ?",
                options: [
                    "1 800 Ko",
                    "900 Ko",
                    "300 Ko"
                ],
                a: 1,
                explication: "Moitié moins, sans avoir allégé quoi que ce soit."
            },
            {
                q: "Que provoque une image sans dimensions déclarées ?",
                options: [
                    "Un décalage du contenu pendant le chargement",
                    "Un chargement plus lent",
                    "Une perte de qualité"
                ],
                a: 0,
                explication: "L'utilisateur clique à côté. Déclarer les dimensions supprime ce défaut sans rien accélérer."
            }
        ],

        // ---------------------------------------------------------------
        "securite-applicative": [
            // Série 1
            {
                q: "Quel principe règle l'essentiel de la sécurité applicative ?",
                options: [
                    "Chiffrer toutes les données",
                    "Toute donnée venant de l'extérieur est hostile jusqu'à preuve du contraire",
                    "Limiter les droits des utilisateurs"
                ],
                a: 1,
                explication: "Formulaire, adresse, en-tête, fichier envoyé, réponse d'une API tierce."
            },
            {
                q: "Contre quoi protègent les requêtes préparées ?",
                options: [
                    "Le script injecté",
                    "La requête forgée",
                    "L'injection SQL"
                ],
                a: 2,
                explication: "Les valeurs sont transmises séparément du texte de la requête."
            },
            {
                q: "Que sont « valider en entrée » et « échapper en sortie » ?",
                options: [
                    "Deux noms pour la même opération",
                    "Deux étapes du chiffrement",
                    "Deux gestes distincts : refuser ce qui n'a pas la forme attendue, neutraliser ce qui est affiché"
                ],
                a: 2,
                explication: "L'un ne remplace pas l'autre."
            },
            // Série 2
            {
                q: "Une vérification côté navigateur suffit-elle ?",
                options: [
                    "Non : elle se contourne en trois secondes, seul le serveur compte",
                    "Oui, si elle est bien écrite",
                    "Oui, pour les formulaires simples"
                ],
                a: 0,
                explication: "Elle améliore le confort. Elle ne protège rien."
            },
            {
                q: "Par où passe la majorité des compromissions ?",
                options: [
                    "Des failles inédites",
                    "Une bibliothèque connue et non mise à jour",
                    "Des attaques par force brute"
                ],
                a: 1,
                explication: "Mettre à jour ses dépendances est la défense au meilleur rapport effort-résultat."
            },
            {
                q: "Que faire des messages d'erreur en production ?",
                options: [
                    "Les afficher en détail pour faciliter le support",
                    "Un message générique pour le visiteur, le détail dans les journaux",
                    "Les désactiver complètement"
                ],
                a: 1,
                explication: "Une page qui affiche la requête SQL ou la version du serveur offre une cartographie gratuite."
            }
        ],

        // ---------------------------------------------------------------
        "tests-automatises": [
            // Série 1
            {
                q: "À quoi servent les tests automatisés ?",
                options: [
                    "À pouvoir modifier le code sans peur",
                    "À prouver que le code est correct",
                    "À satisfaire une exigence qualité"
                ],
                a: 0,
                explication: "Un projet sans tests devient un projet qu'on n'ose plus toucher, et c'est ainsi qu'il meurt."
            },
            {
                q: "Quelle proportion entre les trois niveaux de tests ?",
                options: [
                    "Autant de chaque",
                    "Beaucoup d'unitaires, quelques intégrations, très peu de bout en bout",
                    "Surtout du bout en bout, plus proche du réel"
                ],
                a: 1,
                explication: "L'inverse produit une suite lente que plus personne n'attend."
            },
            {
                q: "Que faut-il tester en priorité ?",
                options: [
                    "La logique métier et les parcours critiques",
                    "L'apparence des écrans",
                    "Le code des bibliothèques utilisées"
                ],
                a: 0,
                explication: "Calculs, règles, cas limites, puis inscription, paiement, envoi."
            },
            // Série 2
            {
                q: "Que faire d'un test qui échoue une fois sur dix sans raison ?",
                options: [
                    "Le relancer jusqu'à ce qu'il passe",
                    "Le désactiver temporairement",
                    "Le réparer ou le supprimer"
                ],
                a: 2,
                explication: "Il apprend à l'équipe à ignorer les alertes. Le jour où il détecte un vrai problème, personne ne le croit."
            },
                        {
                q: "400 unitaires à 5 ms, 60 intégrations à 200 ms, 12 bout en bout à 8 s : quelle part du temps pour les derniers ?",
                options: [
                    "Environ 25 %",
                    "Environ 50 %",
                    "Environ 87 %"
                ],
                a: 2,
                explication: "Pour 2,5 % des tests. C'est cette poignée qui décide si la suite est lancée à chaque modification."
            },
            {
                q: "Qu'est-ce qui ne mérite pas d'être testé ?",
                options: [
                    "Les cas limites d'un calcul",
                    "Les getters triviaux et l'apparence exacte d'un écran",
                    "Le parcours de paiement"
                ],
                a: 1,
                explication: "L'apparence changera de toute façon, et les bibliothèques sont testées par leurs auteurs."
            }
        ],

        // ---------------------------------------------------------------
        "dette-technique": [
            // Série 1
            {
                q: "Que dit exactement la métaphore de la dette technique ?",
                options: [
                    "Le code est mal écrit",
                    "Le projet a pris du retard",
                    "On emprunte du temps aujourd'hui et on le rembourse plus tard, avec des intérêts"
                ],
                a: 2,
                explication: "Le problème n'est pas d'emprunter, c'est de ne jamais rembourser."
            },
            {
                q: "Qu'est-ce qui distingue une dette choisie d'une dette subie ?",
                options: [
                    "La dette choisie est assumée, documentée et datée",
                    "Son montant",
                    "La dette subie coûte moins cher"
                ],
                a: 0,
                explication: "La première se gère. La seconde s'accumule silencieusement."
            },
            {
                q: "3 heures perdues par semaine représentent combien par an ?",
                options: [
                    "Environ 36 heures",
                    "Environ 144 heures, soit près de quatre semaines",
                    "Environ 300 heures"
                ],
                a: 1,
                explication: "Si la corriger demande 40 heures, l'opération est remboursée en moins de quatre mois."
            },
            // Série 2
            {
                q: "Pourquoi une réécriture complète échoue-t-elle souvent ?",
                options: [
                    "Le code existant contient des années de corrections de cas particuliers que personne ne se rappelle",
                    "Elle coûte trop cher",
                    "Les équipes manquent de motivation"
                ],
                a: 0,
                explication: "La refonte progressive est moins gratifiante et bien plus sûre."
            },
            {
                q: "Que devient une bibliothèque non mise à jour pendant deux ans ?",
                options: [
                    "Elle continue de fonctionner sans problème",
                    "Elle est automatiquement remplacée",
                    "Elle devient difficile à faire évoluer : les ruptures s'accumulent"
                ],
                a: 2,
                explication: "Mettre à jour par petits pas coûte beaucoup moins qu'un grand saut tous les trois ans."
            },
            {
                q: "Comment obtenir du temps pour corriger une dette technique ?",
                options: [
                    "En expliquant que le code est mal écrit",
                    "En attendant une panne",
                    "En chiffrant les heures perdues par semaine"
                ],
                a: 2,
                explication: "Formulé ainsi, l'arbitrage n'est plus une question de goût mais de délai de retour."
            }
        ]
    },

    // ===================================================================
    // Questions de synthèse — distinctes de celles des sous-sections
    // ===================================================================
    synthese: [
        // Série 1
        {
            q: "Sur quoi porte ce niveau, par rapport au précédent ?",
            options: [
                "Sur le choix des technologies",
                "Sur la durée de vie de l'application",
                "Sur l'organisation des équipes"
            ],
            a: 1,
            explication: "Tenir la charge, résister aux attaques, pouvoir être modifié sans peur, vieillir sans devenir illisible."
        },
        {
            q: "Quel point commun entre les tests et la mise à jour des dépendances ?",
            options: [
                "Les deux rendent le changement possible plus tard",
                "Les deux sont exigés par la réglementation",
                "Les deux ralentissent le développement"
            ],
            a: 0,
            explication: "Négliger l'un comme l'autre conduit au même résultat : un projet qu'on n'ose plus toucher."
        },
        {
            q: "Une page est lente et une image de 4 Mo se trouve en haut. Que faire ?",
            options: [
                "Traiter l'image en premier",
                "Optimiser d'abord le code de l'application",
                "Ajouter du cache"
            ],
            a: 0,
            explication: "Commencer par son propre code alors qu'une image énorme attend est une erreur de priorité fréquente."
        },
        // Série 2
        {
            q: "Quel raisonnement s'applique à la fois à la sécurité et aux tests ?",
            options: [
                "Automatiser au maximum",
                "Supposer que ça va mal se passer, et concevoir en conséquence",
                "Documenter chaque décision"
            ],
            a: 1,
            explication: "Ne jamais faire confiance aux données extérieures ; ne jamais supposer qu'un changement est sans effet."
        },
        {
            q: "Pourquoi le cache impose-t-il de versionner les noms de fichiers ?",
            options: [
                "Pour économiser de l'espace",
                "Pour respecter les standards HTTP",
                "Parce qu'un fichier fortement caché ne peut plus être modifié en place"
            ],
            a: 2,
            explication: "Changer le nom change l'adresse, ce qui contourne le cache naturellement."
        },
        {
            q: "Quel indicateur transforme une demande de refonte en décision ?",
            options: [
                "Le nombre de lignes de code",
                "Les heures perdues chaque semaine à cause du code actuel",
                "L'âge du projet"
            ],
            a: 1,
            explication: "Le chiffre change la conversation, parce qu'il se compare au coût de la correction."
        }
    ]
};
