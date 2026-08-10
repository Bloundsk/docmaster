// ===================================
// BANQUE DE QUESTIONS — DATA, NIVEAU INTERMÉDIAIRE
// ===================================
// 6 questions par sous-section : 3 affichées, les 3 autres prennent le relais
// au bout de deux semaines. Les questions de synthèse sont distinctes de
// celles des sous-sections — aucune n'est reprise deux fois.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "nettoyer-les-donnees": [
            // Série 1
            {
                q: "Quelle part du temps d'une analyse le nettoyage occupe-t-il couramment ?",
                options: [
                    "Une part négligeable",
                    "La majeure partie",
                    "Environ 10 %"
                ],
                a: 1,
                explication: "Ce n'est pas une corvée préalable : c'est là que se décide si le résultat voudra dire quelque chose."
            },
            {
                q: "Un fichier de 50 000 lignes avec 8 % de doublons puis 12 % de valeurs manquantes : combien reste-t-il ?",
                options: [
                    "40 480 lignes",
                    "44 000 lignes",
                    "46 000 lignes"
                ],
                a: 0,
                explication: "Soit 81 % du fichier de départ. Le problème serait de présenter le résultat comme portant sur 50 000."
            },
            {
                q: "Que faire d'une commande à 4 millions dans un fichier de commandes à 80 euros ?",
                options: [
                    "La supprimer, c'est forcément une erreur",
                    "Vérifier : c'est soit une erreur de saisie, soit le plus gros client",
                    "La remplacer par la moyenne"
                ],
                a: 1,
                explication: "La distinction n'est pas technique. Elle demande de connaître le métier."
            },
            // Série 2
            {
                q: "Pourquoi supprimer les lignes incomplètes est-il risqué ?",
                options: [
                    "Cela réduit trop la taille du fichier",
                    "Les valeurs manquantes se répartissent rarement au hasard",
                    "Cela fausse les calculs de moyenne"
                ],
                a: 1,
                explication: "Un champ facultatif sur les revenus est surtout rempli par ceux que la question ne gêne pas."
            },
            {
                q: "Quelles sont les trois conduites possibles face à une valeur manquante ?",
                options: [
                    "Supprimer la ligne, estimer la valeur, ou traiter l'absence comme une information",
                    "Supprimer, ignorer, ou recommencer la collecte",
                    "Mettre zéro, mettre la moyenne, ou mettre la médiane"
                ],
                a: 0,
                explication: "Le choix change le résultat et doit être écrit quelque part."
            },
            {
                q: "Pourquoi documenter ses décisions de nettoyage ?",
                options: [
                    "C'est exigé par le RGPD",
                    "Sans cela l'analyse devient invérifiable, même par son auteur",
                    "Pour accélérer les traitements suivants"
                ],
                a: 1,
                explication: "Trois mois plus tard, personne ne se souvient de ce qui a été retiré ni pourquoi."
            }
        ],

        // ---------------------------------------------------------------
        "segmenter-et-comparer": [
            // Série 1
            {
                q: "Que fait une moyenne globale sur une population hétérogène ?",
                options: [
                    "Elle donne une bonne vue d'ensemble",
                    "Elle mélange des comportements différents et ne décrit personne",
                    "Elle surestime systématiquement"
                ],
                a: 1,
                explication: "Le chiffre n'est pas faux, il est inutile."
            },
                        {
                q: "Un taux global de 3 % qui cache 5,2 % sur ordinateur et 1,4 % sur mobile : que faut-il en conclure ?",
                options: [
                    "Le taux global est erroné",
                    "Il masque un problème mobile, alors que le mobile fait les deux tiers du trafic",
                    "Il faut abandonner le suivi du taux global"
                ],
                a: 1,
                explication: "Segmenter, c'est chercher les endroits où deux groupes se comportent différemment."
            },
            {
                q: "Que faut-il toujours afficher à côté d'un pourcentage ?",
                options: [
                    "L'effectif",
                    "La date de calcul",
                    "La source des données"
                ],
                a: 0,
                explication: "« 40 % » sur cinq personnes, ce sont deux personnes."
            },
            // Série 2
            {
                q: "Quelle est la limite du découpage en segments ?",
                options: [
                    "Les outils ne suivent pas",
                    "Des groupes trop petits produisent du bruit qu'on prend pour un signal",
                    "Cela devient illisible au-delà de trois segments"
                ],
                a: 1,
                explication: "Dans un groupe de quinze personnes, un cas particulier déplace le pourcentage de sept points."
            },
            {
                q: "« Les ventes ont augmenté de 12 % après la refonte. » Que manque-t-il ?",
                options: [
                    "Le montant en euros",
                    "Un point de comparaison : période équivalente ou groupe témoin",
                    "Le nom du responsable"
                ],
                a: 1,
                explication: "Sans référence, une variation ne se distingue pas d'une fluctuation ordinaire."
            },
            {
                q: "Quel est l'objectif d'une segmentation ?",
                options: [
                    "Produire des tableaux plus détaillés",
                    "Trouver où le comportement change, car c'est là que se cachent les décisions",
                    "Répartir les données équitablement"
                ],
                a: 1,
                explication: "Un découpage qui ne révèle aucune différence n'apporte rien."
            }
        ],

        // ---------------------------------------------------------------
        "correlation-et-causalite": [
            // Série 1
            {
                q: "Combien d'explications peut avoir une corrélation ?",
                options: [
                    "Une seule : A cause B",
                    "Quatre : A cause B, B cause A, une troisième variable cause les deux, ou le hasard",
                    "Deux : le lien direct ou le hasard"
                ],
                a: 1,
                explication: "La troisième est la plus fréquente, et c'est celle qu'on envisage le moins."
            },
            {
                q: "Qu'est-ce qu'une variable confondante ?",
                options: [
                    "Une variable mal mesurée",
                    "Une troisième variable qui cause à la fois A et B",
                    "Une variable qui varie sans raison"
                ],
                a: 1,
                explication: "La fidélité cause à la fois l'installation de l'application et le panier élevé."
            },
            {
                q: "Les utilisateurs de l'application ont un panier deux fois plus élevé. Que conclure ?",
                options: [
                    "Il faut pousser l'application pour augmenter les paniers",
                    "Rien encore : ce sont peut-être les clients déjà fidèles qui l'installent",
                    "L'application améliore l'expérience d'achat"
                ],
                a: 1,
                explication: "Pousser l'application auprès de clients occasionnels ne reproduira pas l'effet, mais dépensera le budget."
            },
            // Série 2
            {
                q: "Quelle méthode établit vraiment une causalité ?",
                options: [
                    "Une corrélation supérieure à 0,9",
                    "L'expérimentation, avec attribution aléatoire",
                    "Un raisonnement métier convaincant"
                ],
                a: 1,
                explication: "Tout le reste reste une hypothèse, même très plausible."
            },
            {
                q: "Quel type de corrélation est le plus dangereux ?",
                options: [
                    "Celle qui est absurde",
                    "Celle à laquelle on peut donner une explication crédible",
                    "Celle qui est faible"
                ],
                a: 1,
                explication: "Une explication crédible n'est pas une preuve. Elle rend seulement plus difficile d'envisager les autres possibilités."
            },
            {
                q: "Pourquoi le hasard produit-il parfois des corrélations ?",
                options: [
                    "Les données sont mal collectées",
                    "Sur des centaines d'indicateurs comparés, certains coïncident sans lien",
                    "Les outils statistiques sont imprécis"
                ],
                a: 1,
                explication: "C'est pourquoi le nombre d'hypothèses testées doit être connu avant d'interpréter un résultat."
            }
        ],

        // ---------------------------------------------------------------
        "tableau-de-bord": [
            // Série 1
            {
                q: "Quel test permet de savoir si un indicateur mérite sa place ?",
                options: [
                    "Est-il facile à calculer ?",
                    "Si ce nombre doublait demain, que ferais-je différemment ?",
                    "Est-il demandé par la direction ?"
                ],
                a: 1,
                explication: "Si la réponse est « rien », l'indicateur dilue l'attention et donne l'illusion du pilotage."
            },
            {
                q: "Pourquoi la plupart des tableaux de bord sont-ils abandonnés ?",
                options: [
                    "Ils sont trop lents",
                    "Ils répondent à « que peut-on afficher ? » au lieu de « quelle décision prendre ? »",
                    "Les données ne sont pas fiables"
                ],
                a: 1,
                explication: "Le problème est rarement technique."
            },
            {
                q: "Qu'est-ce qu'un indicateur actionnable ?",
                options: [
                    "Un indicateur mis à jour en temps réel",
                    "Un indicateur dont on sait quoi faire quand il bouge",
                    "Un indicateur calculé automatiquement"
                ],
                a: 1,
                explication: "C'est le premier des quatre critères d'un bon indicateur."
            },
            // Série 2
            {
                q: "Que cache un « temps de réponse moyen de 1,2 s » ?",
                options: [
                    "Rien, c'est une bonne mesure",
                    "Que 5 % des utilisateurs attendent peut-être huit secondes",
                    "Que la mesure est faussée"
                ],
                a: 1,
                explication: "Ce sont pourtant eux qui partent. Sur la qualité de service, une valeur extrême en dit plus que la moyenne."
            },
            {
                q: "Que se passe-t-il si la définition d'un indicateur change en cours de route ?",
                options: [
                    "Rien, tant que c'est documenté",
                    "La série devient inexploitable",
                    "Il faut recalculer l'historique"
                ],
                a: 1,
                explication: "La stabilité de la définition fait partie des critères d'un bon indicateur."
            },
            {
                q: "Quelle fréquence de suivi choisir pour un indicateur ?",
                options: [
                    "La plus élevée possible",
                    "Celle qui correspond à sa vitesse d'évolution",
                    "Une fois par mois, toujours"
                ],
                a: 1,
                explication: "Surveiller quotidiennement une donnée qui bouge par trimestre ne produit que du bruit."
            }
        ]
    },

    // ===================================================================
    // Questions de synthèse — distinctes de celles des sous-sections
    // ===================================================================
    synthese: [
        // Série 1
        {
            q: "Où se perdent la plupart des analyses ?",
            options: [
                "Dans les calculs",
                "Dans le traitement des données et le raisonnement",
                "Dans le choix des outils"
            ],
            a: 1,
            explication: "C'est le fil de ce niveau : ce qu'il faut faire aux données avant de les croire, et les erreurs qui transforment un chiffre juste en conclusion fausse."
        },
        {
            q: "Quel point commun entre le segment trop petit et la valeur extrême ?",
            options: [
                "Un petit nombre d'observations pèse démesurément sur le résultat",
                "Les deux viennent d'une erreur de collecte",
                "Les deux se corrigent en supprimant les données concernées"
            ],
            a: 0,
            explication: "D'où l'importance d'afficher les effectifs et de préférer la médiane sur les distributions étirées."
        },
        {
            q: "Une analyse conclut que l'application augmente le panier. Que demander en priorité ?",
            options: [
                "La taille de l'échantillon",
                "Quelle troisième variable pourrait causer les deux",
                "Le nom de l'outil utilisé"
            ],
            a: 1,
            explication: "La variable confondante est l'explication la plus fréquente, et la moins envisagée."
        },
        // Série 2
        {
            q: "Pourquoi le nettoyage détermine-t-il la validité d'une analyse ?",
            options: [
                "Parce qu'il conditionne la vitesse des calculs",
                "Parce que les choix faits changent le résultat, et sont rarement documentés",
                "Parce qu'il est exigé par les outils"
            ],
            a: 1,
            explication: "Supprimer, estimer ou conserver une valeur manquante conduit à trois résultats différents."
        },
        {
            q: "Qu'est-ce qui distingue un tableau de bord utile d'un tableau de bord décoratif ?",
            options: [
                "Le nombre de graphiques",
                "Le nombre de décisions qu'il a déclenchées",
                "La fréquence de mise à jour"
            ],
            a: 1,
            explication: "Chaque indicateur doit passer le test « si ce nombre doublait, que ferais-je ? »."
        },
        {
            q: "Que faut-il joindre à tout pourcentage présenté ?",
            options: [
                "L'effectif et un point de comparaison",
                "La formule de calcul",
                "Le nom de l'analyste"
            ],
            a: 0,
            explication: "Sans effectif, le pourcentage est une impression ; sans comparaison, il ne dit rien."
        }
    ]
};
