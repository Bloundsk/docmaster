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
                q: "À partir de quelle durée l'attention décroche-t-elle ?",
                options: [
                    "3 secondes",
                    "10 secondes",
                    "30 secondes"
                ],
                a: 1,
                explication: "Au-delà, il faut indiquer une progression pour espérer garder la personne."
            },
            {
                q: "Une attente vide paraît, par rapport à une attente occupée de même durée :",
                options: [
                    "Plus courte",
                    "Environ deux fois plus longue",
                    "Identique"
                ],
                a: 1,
                explication: "D'où l'intérêt des squelettes de contenu et du retour immédiat au clic."
            },
            // Série 2
            {
                q: "Qu'est-ce qu'un affichage optimiste ?",
                options: [
                    "Afficher une estimation du temps restant",
                    "Montrer le résultat attendu avant confirmation du serveur",
                    "Précharger la page suivante"
                ],
                a: 1,
                explication: "Quitte à corriger en cas d'échec. C'est ce qui rend les messageries modernes si fluides."
            },
            {
                q: "Quel est le problème d'un tourniquet de chargement sans progression ?",
                options: [
                    "Il consomme des ressources",
                    "Il n'informe de rien et paraît d'autant plus long qu'il est indéterminé",
                    "Il n'est pas accessible"
                ],
                a: 1,
                explication: "Une barre de progression, même approximative, est mieux supportée."
            },
            {
                q: "Une page de 2 500 Ko sur une connexion à 10 Mb/s demande environ :",
                options: [
                    "0,2 seconde",
                    "2 secondes de transfert",
                    "20 secondes"
                ],
                a: 1,
                explication: "Auxquelles s'ajoutent la latence et le temps d'affichage. Réduite à 800 Ko, elle passe sous la seconde."
            }
        ],

        // ---------------------------------------------------------------
        "charge-cognitive": [
            // Série 1
            {
                q: "Comment le temps de décision évolue-t-il avec le nombre d'options ?",
                options: [
                    "Linéairement",
                    "Avec le logarithme du nombre d'options",
                    "Il est constant"
                ],
                a: 1,
                explication: "Passer de 2 à 4 choix coûte autant que passer de 4 à 8."
            },
            {
                q: "La loi de Hick décrit le choix entre des options :",
                options: [
                    "Déjà connues de la personne",
                    "Découvertes à l'instant",
                    "Présentées visuellement"
                ],
                a: 0,
                explication: "C'est la nuance presque toujours omise. Appliquée telle quelle, elle favorise même la liste plate."
            },
            {
                q: "Qu'est-ce qui rend réellement le regroupement gagnant dans un menu ?",
                options: [
                    "La loi de Hick",
                    "Le balayage visuel, dont le coût est proche du linéaire",
                    "La mémoire de travail"
                ],
                a: 1,
                explication: "Un visiteur qui découvre un menu ne choisit pas : il cherche."
            },
            // Série 2
            {
                q: "De quoi dépend le temps pour atteindre une cible, selon la loi de Fitts ?",
                options: [
                    "De sa couleur et de sa forme",
                    "De sa distance et de sa taille",
                    "Du nombre d'éléments autour"
                ],
                a: 1,
                explication: "D'où l'intérêt des bords et des coins d'écran, où le curseur s'arrête tout seul."
            },
            {
                q: "Combien d'éléments la mémoire de travail retient-elle simultanément ?",
                options: [
                    "Autour de quatre",
                    "Autour de sept",
                    "Une douzaine"
                ],
                a: 0,
                explication: "L'ordre de grandeur communément retenu aujourd'hui, et non les sept longtemps cités."
            },
            {
                q: "Quelle confusion produit des interfaces épurées mais fatigantes ?",
                options: [
                    "Confondre simple et minimal",
                    "Confondre UX et UI",
                    "Confondre contraste et lisibilité"
                ],
                a: 0,
                explication: "Retirer les libellés allège l'écran et alourdit la charge mentale : l'utilisateur doit deviner."
            }
        ],

        // ---------------------------------------------------------------
        "schemas-sombres": [
            // Série 1
            {
                q: "Qu'est-ce qu'un schéma sombre ?",
                options: [
                    "Une interface en mode sombre",
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
                    "Il doit être renouvelé chaque année",
                    "Il peut être présumé si l'utilisateur poursuit sa navigation"
                ],
                a: 0,
                explication: "Un bandeau sans bouton « tout refuser » au même niveau que « tout accepter » est non conforme."
            },
            {
                q: "Quel test permet d'identifier un schéma sombre ?",
                options: [
                    "Mesurer le taux de conversion",
                    "Se demander si l'utilisateur se sentirait floué en découvrant le mécanisme",
                    "Vérifier la conformité technique"
                ],
                a: 1,
                explication: "Si oui, l'intention ne change rien : le résultat est le même pour l'utilisateur."
            },
            // Série 2
            {
                q: "Pourquoi les schémas sombres sont-ils un mauvais calcul ?",
                options: [
                    "Ils ne fonctionnent pas",
                    "Le gain est immédiat et mesuré, le coût différé et diffus",
                    "Ils sont techniquement complexes"
                ],
                a: 1,
                explication: "Résiliations, remboursements, avis négatifs et méfiance n'apparaissent pas dans le tableau de bord."
            },
            {
                q: "Que dit le droit français sur la résiliation ?",
                options: [
                    "Elle doit se faire par courrier recommandé",
                    "Elle doit pouvoir se faire par un moyen aussi simple que la souscription",
                    "Elle peut exiger un préavis de trois mois"
                ],
                a: 1,
                explication: "S'inscrire en trente secondes et résilier en dix étapes n'est pas conforme."
            },
            {
                q: "Qu'est-ce qu'un schéma sombre involontaire ?",
                options: [
                    "Une case pré-cochée « par simplicité », un refus moins visible « pour l'esthétique »",
                    "Un bug d'affichage",
                    "Une erreur de traduction"
                ],
                a: 0,
                explication: "Personne n'a voulu tromper, et le résultat est identique pour l'utilisateur."
            }
        ],

        // ---------------------------------------------------------------
        "mesurer-le-design": [
            // Série 1
            {
                q: "Quelle est la mesure la plus importante d'un test d'utilisabilité ?",
                options: [
                    "Le temps de tâche",
                    "Le taux de réussite sans aide",
                    "La satisfaction déclarée"
                ],
                a: 1,
                explication: "C'est aussi la plus souvent oubliée."
            },
            {
                q: "Pourquoi le temps de tâche est-il à interpréter avec prudence ?",
                options: [
                    "Il est difficile à mesurer",
                    "Plus rapide n'est pas toujours mieux, notamment sur une décision importante",
                    "Il varie trop d'une personne à l'autre"
                ],
                a: 1,
                explication: "Sur un achat engageant, prendre le temps de comprendre est plutôt bon signe."
            },
            {
                q: "Cinq secondes gagnées, trois fois par jour, pour 200 personnes, 220 jours : combien par an ?",
                options: [
                    "Environ 18 heures",
                    "Environ 183 heures",
                    "Environ 1 830 heures"
                ],
                a: 1,
                explication: "Ce calcul transforme un argument esthétique en argument budgétaire. C'est souvent le seul entendu."
            },
            // Série 2
            {
                q: "Que montre un test d'utilisabilité, et que ne montre-t-il pas ?",
                options: [
                    "Il montre où les gens échouent, rarement pourquoi",
                    "Il montre pourquoi, rarement où",
                    "Il montre les deux également"
                ],
                a: 0,
                explication: "Le « pourquoi » vient de l'observation et des questions posées après coup."
            },
            {
                q: "Pourquoi le temps passé sur une page est-il un mauvais indicateur ?",
                options: [
                    "Il est difficile à collecter",
                    "Il est ambigu : intérêt ou confusion ?",
                    "Il varie selon les navigateurs"
                ],
                a: 1,
                explication: "Un indicateur commode mais ininterprétable est pire qu'une absence de mesure : il donne l'impression de savoir."
            },
            {
                q: "Que vaut un chiffre isolé en design ?",
                options: [
                    "Il suffit s'il est précis",
                    "Rien : c'est la comparaison qui produit l'information",
                    "Il vaut mieux qu'une opinion"
                ],
                a: 1,
                explication: "Avant et après, version A et version B : sans point de comparaison, la mesure ne dit rien."
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
                "Sur les outils de maquettage",
                "Sur ce qui se passe chez la personne en face",
                "Sur la gestion de projet"
            ],
            a: 1,
            explication: "Combien de temps elle croit attendre, combien d'options son attention supporte, et ce qui la fait renoncer."
        },
        {
            q: "Quelle question posent les connaissances de ce niveau ?",
            options: [
                "Faut-il les utiliser pour aider, ou pour manipuler ?",
                "Faut-il les enseigner ?",
                "Sont-elles encore valables ?"
            ],
            a: 0,
            explication: "Les mêmes mécanismes servent à réduire un effort ou à obtenir un consentement non éclairé."
        },
        {
            q: "Deux leviers agissent sur l'attente. Lesquels ?",
            options: [
                "Réduire le poids et occuper l'attente",
                "Augmenter le débit et le cache",
                "Simplifier le code et l'interface"
            ],
            a: 0,
            explication: "L'un agit sur le temps réel, l'autre sur le temps ressenti. Les deux comptent."
        },
        // Série 2
        {
            q: "Une amélioration fait gagner cinq secondes. Comment la défendre ?",
            options: [
                "En montrant des maquettes avant et après",
                "En chiffrant le gain cumulé en heures par an",
                "En citant les bonnes pratiques"
            ],
            a: 1,
            explication: "Cinq secondes ne se défendent pas en réunion. Cent quatre-vingts heures par an, si."
        },
        {
            q: "Qu'ont en commun la loi de Hick et le temps passé sur une page ?",
            options: [
                "Les deux sont souvent invoqués sans leurs conditions de validité",
                "Les deux mesurent la satisfaction",
                "Les deux sont obsolètes"
            ],
            a: 0,
            explication: "Hick suppose des options connues ; le temps passé n'est interprétable qu'avec un contexte. Cités hors cadre, ils trompent."
        },
        {
            q: "Que devient un design qui n'est pas mesuré ?",
            options: [
                "Il s'améliore lentement",
                "Il change, et l'on croit l'avoir amélioré",
                "Il reste stable"
            ],
            a: 1,
            explication: "Sans comparaison avant-après, rien ne distingue une amélioration d'une simple modification."
        }
    ]
};
