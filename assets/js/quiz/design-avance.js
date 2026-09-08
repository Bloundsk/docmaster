// ===================================
// BANQUE DE QUESTIONS — DESIGN, NIVEAU AVANCÉ
// ===================================
// 6 questions par sous-section : 3 affichées, les 3 autres prennent le relais
// au bout de deux semaines. Les questions de synthèse sont distinctes de
// celles des sous-sections — aucune n'est reprise deux fois.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "performance-percue": [
            // Série 1
            {
                q: "En dessous de quel délai une réaction paraît-elle instantanée ?",
                options: [
                    "0,1 seconde",
                    "1 seconde",
                    "3 secondes"
                ],
                a: 0,
                explication: "En deçà, l'utilisateur a l'impression de manipuler directement l'objet."
            },
            {
                q: "À partir de quel délai faut-il indiquer une progression ?",
                options: [
                    "1 seconde",
                    "10 secondes, limite de l'attention",
                    "30 secondes"
                ],
                a: 1,
                explication: "Au-delà, la personne passe à autre chose."
            },
            {
                q: "Une attente vide paraît, par rapport à une attente occupée de même durée :",
                options: [
                    "Plus courte, car on ne la subit pas",
                    "Environ deux fois plus longue",
                    "Identique, la durée est la même"
                ],
                a: 1,
                explication: "D'où l'intérêt des squelettes de contenu et du retour immédiat au clic."
            },
            // Série 2
            {
                q: "Qu'est-ce que l'affichage optimiste ?",
                options: [
                    "Masquer les erreurs à l'utilisateur, pour ne pas l'inquiéter",
                    "Précharger toutes les pages du site",
                    "Afficher le résultat attendu avant confirmation du serveur"
                ],
                a: 2,
                explication: "Quitte à corriger en cas d'échec. C'est ce qui rend les messageries modernes si fluides."
            },
            {
                q: "Que reprocher à une animation de chargement sans progression ?",
                options: [
                    "Elle consomme de la batterie et des ressources d'affichage, sans rien apporter au lecteur",
                    "Elle n'informe de rien et paraît d'autant plus longue qu'elle est indéterminée",
                    "Elle n'est pas accessible aux lecteurs d'écran, lesquels ne savent pas l'annoncer"
                ],
                a: 1,
                explication: "Sur une opération courte, un squelette vaut mieux qu'un tourniquet."
            },
            {
                q: "Une page de 2 500 Ko sur une connexion à 10 Mb/s demande environ :",
                options: [
                    "0,2 seconde de transfert",
                    "2 secondes de transfert",
                    "20 secondes de transfert"
                ],
                a: 1,
                explication: "Auxquelles s'ajoutent la latence et le temps d'affichage."
            }
        ],

        // ---------------------------------------------------------------
        "charge-cognitive": [
            // Série 1
            {
                q: "Comment croît le temps de décision selon la loi de Hick ?",
                options: [
                    "Linéairement avec le nombre d'options proposées",
                    "De façon exponentielle avec le nombre d'options",
                    "Avec le logarithme du nombre d'options"
                ],
                a: 2,
                explication: "Passer de 2 à 4 choix coûte autant que passer de 4 à 8. Ajouter des options à une liste déjà longue ne coûte presque rien."
            },
            {
                q: "Appliquée telle quelle, que conclut la loi de Hick sur les sous-menus ?",
                options: [
                    "Qu'ils accélèrent toujours la navigation, quel que soit le nombre d'entrées et de sous-niveaux",
                    "Qu'une liste plate bat une navigation à deux étages, puisqu'elle fait décider une seule fois",
                    "Qu'ils sont sans effet mesurable sur le temps que met un visiteur pour trouver ce qu'il cherche"
                ],
                a: 1,
                explication: "C'est le contre-pied de ce qu'on lit habituellement — et c'est ce que dit la formule."
            },
            {
                q: "Qu'est-ce qui rend alors le regroupement gagnant ?",
                options: [
                    "La loi de Hick, qui compte le nombre d'options",
                    "Le balayage visuel : trouver sans lire",
                    "L'habitude des utilisateurs, qui connaissent le site"
                ],
                a: 1,
                explication: "Un visiteur qui découvre un menu ne choisit pas, il cherche — et ce parcours coûte à peu près linéairement."
            },
            // Série 2
            {
                q: "De quoi dépend le temps pour atteindre une cible, selon la loi de Fitts ?",
                options: [
                    "De sa distance et de sa taille",
                    "De sa couleur et de son contraste",
                    "Du nombre d'éléments à l'écran"
                ],
                a: 0,
                explication: "D'où l'intérêt des bords et des coins : le curseur s'y arrête tout seul."
            },
            {
                q: "Combien d'éléments la mémoire de travail retient-elle simultanément ?",
                options: [
                    "Exactement sept",
                    "Autour de quatre",
                    "Une quinzaine"
                ],
                a: 1,
                explication: "L'ordre de grandeur communément retenu aujourd'hui, et non les sept longtemps cités."
            },
            {
                q: "Quelle erreur consiste à confondre simple et minimal ?",
                options: [
                    "Ajouter trop d'explications, au point de noyer l'utilisateur sous le texte",
                    "Utiliser trop de couleurs, au point que plus rien ne ressort vraiment à l'écran",
                    "Retirer libellés et repères : l'écran s'épure, la charge mentale augmente"
                ],
                a: 2,
                explication: "Une interface simple n'est pas celle qui montre le moins, c'est celle qui demande le moins d'efforts."
            }
        ],

        // ---------------------------------------------------------------
        "schemas-sombres": [
            // Série 1
            {
                q: "Qu'est-ce qu'un schéma sombre ?",
                options: [
                    "Une interface en mode nuit",
                    "Une interface conçue pour obtenir ce que l'utilisateur n'aurait pas choisi en connaissance de cause",
                    "Une erreur d'ergonomie"
                ],
                a: 1,
                explication: "Ce ne sont pas des maladresses : ce sont des décisions délibérées, souvent testées et optimisées."
            },
            {
                q: "Que dit le droit européen sur le consentement ?",
                options: [
                    "Il doit être aussi facile à refuser qu'à accepter",
                    "Il suffit qu'un lien de refus existe quelque part sur la page",
                    "Il n'est pas encadré sur ce point"
                ],
                a: 0,
                explication: "Un bandeau sans bouton « tout refuser » au même niveau que « tout accepter » est non conforme."
            },
            {
                q: "Qu'exige le droit français en matière de résiliation ?",
                options: [
                    "Un préavis de trente jours",
                    "Un moyen aussi simple que celui de la souscription",
                    "Une confirmation par courrier recommandé avec accusé"
                ],
                a: 1,
                explication: "S'inscrire en trente secondes et devoir chercher une page cachée pour partir n'est pas conforme."
            },
            // Série 2
            {
                q: "Pourquoi les schémas sombres sont-ils un mauvais calcul ?",
                options: [
                    "Le gain est immédiat et mesuré, le coût différé et diffus",
                    "Ils ne fonctionnent pas",
                    "Ils sont techniquement complexes à mettre en place et à maintenir"
                ],
                a: 0,
                explication: "Résiliations, remboursements, avis négatifs et méfiance n'apparaissent pas dans le tableau de bord des conversions."
            },
            {
                q: "Quel test permet d'identifier un schéma sombre involontaire ?",
                options: [
                    "Si l'utilisateur découvrait ce mécanisme, se sentirait-il floué ?",
                    "Vérifier la conformité juridique",
                    "Demander l'avis de l'équipe commerciale, qui connaît les objectifs"
                ],
                a: 0,
                explication: "L'intention ne change rien au résultat pour l'utilisateur."
            },
            {
                q: "« Non merci, je préfère payer plus cher » relève de :",
                options: [
                    "Un ton de marque assumé",
                    "Une clarification utile, qui évite à l'utilisateur de refuser par erreur",
                    "La honte du refus : un libellé rédigé pour être désagréable à cliquer"
                ],
                a: 2,
                explication: "C'est l'un des schémas sombres les plus répandus, et les plus faciles à corriger."
            }
        ],

        // ---------------------------------------------------------------
        "mesurer-le-design": [
            // Série 1
            {
                q: "Quelle est la mesure la plus importante d'un test d'utilisabilité ?",
                options: [
                    "Le taux de réussite",
                    "Le temps passé sur la tâche",
                    "La satisfaction déclarée"
                ],
                a: 0,
                explication: "C'est aussi la plus souvent oubliée."
            },
            {
                q: "Pourquoi le temps de tâche s'interprète-t-il avec prudence ?",
                options: [
                    "Plus rapide n'est pas toujours mieux, notamment sur une décision importante",
                    "Il est difficile à mesurer proprement, dans les conditions réelles d'utilisation",
                    "Il varie trop d'un participant à l'autre pour être comparable d'un test à l'autre"
                ],
                a: 0,
                explication: "Sur un achat engageant, un temps plus long peut signaler une lecture attentive."
            },
            {
                q: "Un test d'utilisabilité montre surtout :",
                options: [
                    "Pourquoi les gens échouent, dans le détail",
                    "Ce que les gens préfèrent",
                    "Où les gens échouent, rarement pourquoi"
                ],
                a: 2,
                explication: "Le pourquoi vient de l'observation et des questions posées après coup."
            },
            // Série 2
            {
                q: "Que vaut un chiffre isolé en matière de design ?",
                options: [
                    "Il suffit s'il est mesuré rigoureusement et régulièrement",
                    "Il vaut mieux que rien",
                    "Rien : c'est la comparaison qui produit l'information"
                ],
                a: 2,
                explication: "Avant et après, version A et version B : sans référence, un score ne dit rien."
            },
            {
                q: "Pourquoi le temps passé sur une page est-il un mauvais indicateur ?",
                options: [
                    "Il est difficile à collecter de façon fiable",
                    "Il est ambigu : intérêt ou confusion ?",
                    "Il varie selon les navigateurs et les appareils"
                ],
                a: 1,
                explication: "Un indicateur commode mais ininterprétable est pire qu'une absence de mesure : il donne l'impression de savoir."
            },
            {
                q: "Comment convertir une amélioration en argument budgétaire ?",
                options: [
                    "En citant les bonnes pratiques du secteur et les études les plus citées",
                    "En montrant des maquettes avant-après",
                    "En comptant les heures gagnées par an sur l'ensemble des utilisateurs"
                ],
                a: 2,
                explication: "Cinq secondes sur trois tâches quotidiennes pour deux cents personnes font environ 183 heures par an."
            }
        ]
    },

    // ===================================================================
    // Questions de synthèse — distinctes de celles des sous-sections
    // ===================================================================
    synthese: [
        // Série 1
        {
            q: "Sur quoi porte ce niveau, par rapport aux précédents ?",
            options: [
                "Sur ce qui se passe chez la personne en face",
                "Sur les outils de conception",
                "Sur la technique d'intégration et le code produit"
            ],
            a: 0,
            explication: "Combien de temps elle croit attendre, combien d'options son attention supporte, et ce qui la fait renoncer."
        },
        {
            q: "Quelle question éthique ce niveau pose-t-il ?",
            options: [
                "Faut-il mesurer le comportement des utilisateurs ?",
                "Faut-il utiliser ces connaissances pour aider, ou pour manipuler ?",
                "Faut-il informer les utilisateurs des lois psychologiques ?"
            ],
            a: 1,
            explication: "Les mêmes mécanismes servent à fluidifier un parcours ou à piéger un consentement."
        },
        {
            q: "Deux leviers agissent sur l'attente perçue. Lesquels ?",
            options: [
                "Réduire le poids, et occuper l'attente",
                "Augmenter le débit, et masquer les erreurs",
                "Précharger, et compresser"
            ],
            a: 0,
            explication: "Le premier joue sur le temps réel, le second sur le temps ressenti. Les deux comptent."
        },
        // Série 2
        {
            q: "Pourquoi ce niveau insiste-t-il sur la mesure ?",
            options: [
                "Parce que la réglementation l'exige",
                "Parce que les outils la rendent aujourd'hui facile et peu coûteuse",
                "Parce que sans mesure, un design ne s'améliore pas : il change"
            ],
            a: 2,
            explication: "« C'est plus joli » n'est pas un argument recevable, et « le client préfère » encore moins."
        },
        {
            q: "Qu'est-ce qui distingue une interface simple d'une interface minimale ?",
            options: [
                "La simple demande peu d'efforts, la minimale montre peu de choses",
                "Rien, ce sont deux mots pour la même chose",
                "La minimale est plus accessible"
            ],
            a: 0,
            explication: "Retirer les repères épure l'écran et augmente la charge mentale : l'utilisateur doit deviner."
        },
        {
            q: "Un compte à rebours qui se réinitialise à chaque visite relève de :",
            options: [
                "Une technique de conversion admise par le métier",
                "Un défaut technique",
                "Une fausse urgence, donc un schéma sombre"
            ],
            a: 2,
            explication: "Comme « 3 personnes regardent cet article » sans aucun fondement."
        }
    ]
};
