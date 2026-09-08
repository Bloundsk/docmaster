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
                    "La supprimer : à ce niveau d'écart, c'est forcément une erreur de saisie",
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
                    "Cela fausse les calculs de moyenne",
                    "Les valeurs manquantes se répartissent rarement au hasard"
                ],
                a: 2,
                explication: "Un champ facultatif sur les revenus est surtout rempli par ceux que la question ne gêne pas."
            },
            {
                q: "Quelles sont les trois conduites possibles face à une valeur manquante ?",
                options: [
                    "Supprimer la ligne, ignorer le trou, ou recommencer entièrement la collecte des données",
                    "Supprimer la ligne, estimer la valeur, ou traiter l'absence comme une information",
                    "Mettre zéro, mettre la moyenne de la colonne, ou mettre la médiane du même segment"
                ],
                a: 1,
                explication: "Le choix change le résultat et doit être écrit quelque part."
            },
            {
                q: "Pourquoi documenter ses décisions de nettoyage ?",
                options: [
                    "C'est exigé par le RGPD",
                    "Pour accélérer les traitements suivants, qui repartiront du fichier propre",
                    "Sans cela l'analyse devient invérifiable, même par son auteur"
                ],
                a: 2,
                explication: "Trois mois plus tard, personne ne se souvient de ce qui a été retiré ni pourquoi."
            }
        ],

        // ---------------------------------------------------------------
        "segmenter-et-comparer": [
            // Série 1
            {
                q: "Que fait une moyenne globale sur une population hétérogène ?",
                options: [
                    "Elle mélange des comportements différents et ne décrit personne",
                    "Elle donne une bonne vue d'ensemble, suffisante pour piloter au quotidien",
                    "Elle surestime systématiquement, en tirant le résultat vers les gros volumes"
                ],
                a: 0,
                explication: "Le chiffre n'est pas faux, il est inutile."
            },
                        {
                q: "Un taux global de 3 % qui cache 5,2 % sur ordinateur et 1,4 % sur mobile : que faut-il en conclure ?",
                options: [
                    "Il masque un problème mobile, alors que le mobile fait les deux tiers du trafic",
                    "Le taux global est erroné",
                    "Il faut abandonner le suivi du taux global"
                ],
                a: 0,
                explication: "Segmenter, c'est chercher les endroits où deux groupes se comportent différemment."
            },
            {
                q: "Que faut-il toujours afficher à côté d'un pourcentage ?",
                options: [
                    "La date de calcul",
                    "L'effectif",
                    "La source des données"
                ],
                a: 1,
                explication: "« 40 % » sur cinq personnes, ce sont deux personnes."
            },
            // Série 2
            {
                q: "Quelle est la limite du découpage en segments ?",
                options: [
                    "Des groupes trop petits produisent du bruit qu'on prend pour un signal",
                    "Les outils ne suivent pas",
                    "Cela devient illisible au-delà de trois segments, et personne ne lit le tableau"
                ],
                a: 0,
                explication: "Dans un groupe de quinze personnes, un cas particulier déplace le pourcentage de sept points."
            },
            {
                q: "« Les ventes ont augmenté de 12 % après la refonte. » Que manque-t-il ?",
                options: [
                    "Un point de comparaison : période équivalente ou groupe témoin",
                    "Le montant en euros",
                    "Le nom du responsable"
                ],
                a: 0,
                explication: "Sans référence, une variation ne se distingue pas d'une fluctuation ordinaire."
            },
            {
                q: "Quel est l'objectif d'une segmentation ?",
                options: [
                    "Produire des tableaux plus détaillés, que chaque service pourra filtrer à sa guise",
                    "Répartir les données en groupes de taille équivalente, pour comparer à égalité",
                    "Trouver où le comportement change, car c'est là que se cachent les décisions"
                ],
                a: 2,
                explication: "Un découpage qui ne révèle aucune différence n'apporte rien."
            }
        ],

        // ---------------------------------------------------------------
        "correlation-et-causalite": [
            // Série 1
            {
                q: "Combien d'explications peut avoir une corrélation ?",
                options: [
                    "Quatre : A cause B, B cause A, une troisième variable cause les deux, ou le hasard",
                    "Une seule : A cause B",
                    "Deux seulement : soit A cause B, soit c'est une coïncidence, et le bon sens tranche"
                ],
                a: 0,
                explication: "La troisième est la plus fréquente, et c'est celle qu'on envisage le moins."
            },
            {
                q: "Qu'est-ce qu'une variable confondante ?",
                options: [
                    "Une troisième variable qui cause à la fois A et B",
                    "Une variable mal mesurée",
                    "Une variable qui varie sans raison"
                ],
                a: 0,
                explication: "La fidélité cause à la fois l'installation de l'application et le panier élevé."
            },
            {
                q: "Les utilisateurs de l'application ont un panier deux fois plus élevé. Que conclure ?",
                options: [
                    "Il faut pousser l'installation de l'application pour faire monter les paniers",
                    "Rien encore : ce sont peut-être les clients déjà fidèles qui l'installent",
                    "L'application améliore l'expérience d'achat, donc le montant du panier suit"
                ],
                a: 1,
                explication: "Pousser l'application auprès de clients occasionnels ne reproduira pas l'effet, mais dépensera le budget."
            },
            // Série 2
            {
                q: "Quelle méthode établit vraiment une causalité ?",
                options: [
                    "L'expérimentation, avec attribution aléatoire",
                    "Une corrélation supérieure à 0,9",
                    "Un raisonnement métier convaincant, validé par les équipes"
                ],
                a: 0,
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
                    "Les données sont mal collectées, et le bruit finit par ressembler à un signal",
                    "Sur des centaines d'indicateurs comparés, certains coïncident sans lien",
                    "Les outils statistiques sont imprécis dès que le volume de données devient grand"
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
                    "Est-il demandé par la direction, qui le regarde chaque semaine ?",
                    "Si ce nombre doublait demain, que ferais-je différemment ?"
                ],
                a: 2,
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
                    "Un indicateur mis à jour en temps réel, visible par tous",
                    "Un indicateur dont on sait quoi faire quand il bouge",
                    "Un indicateur calculé automatiquement, sans intervention humaine"
                ],
                a: 1,
                explication: "C'est le premier des quatre critères d'un bon indicateur."
            },
            // Série 2
            {
                q: "Que cache un « temps de réponse moyen de 1,2 s » ?",
                options: [
                    "Rien : c'est une bonne mesure, calculée sur l'ensemble des appels",
                    "Que la mesure est faussée",
                    "Que 5 % des utilisateurs attendent peut-être huit secondes"
                ],
                a: 2,
                explication: "Ce sont pourtant eux qui partent. Sur la qualité de service, une valeur extrême en dit plus que la moyenne."
            },
            {
                q: "Que se passe-t-il si la définition d'un indicateur change en cours de route ?",
                options: [
                    "Rien, tant que c'est documenté",
                    "Il faut recalculer l'historique",
                    "La série devient inexploitable"
                ],
                a: 2,
                explication: "La stabilité de la définition fait partie des critères d'un bon indicateur."
            },
            {
                q: "Quelle fréquence de suivi choisir pour un indicateur ?",
                options: [
                    "Celle qui correspond à sa vitesse d'évolution",
                    "La plus élevée possible, pour pouvoir réagir sans délai",
                    "Une fois par mois, au rythme du reporting habituel"
                ],
                a: 0,
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
                "Dans le choix des outils",
                "Dans le traitement des données et le raisonnement"
            ],
            a: 2,
            explication: "C'est le fil de ce niveau : ce qu'il faut faire aux données avant de les croire, et les erreurs qui transforment un chiffre juste en conclusion fausse."
        },
        {
            q: "Quel point commun entre le segment trop petit et la valeur extrême ?",
            options: [
                "Les deux viennent d'une erreur de collecte qu'on aurait pu éviter en amont",
                "Les deux se corrigent en supprimant les données concernées du calcul final",
                "Un petit nombre d'observations pèse démesurément sur le résultat"
            ],
            a: 2,
            explication: "D'où l'importance d'afficher les effectifs et de préférer la médiane sur les distributions étirées."
        },
        {
            q: "Une analyse conclut que l'application augmente le panier. Que demander en priorité ?",
            options: [
                "Quelle troisième variable pourrait causer les deux",
                "La taille de l'échantillon, et sa répartition entre les deux groupes",
                "Le nom de l'outil utilisé"
            ],
            a: 0,
            explication: "La variable confondante est l'explication la plus fréquente, et la moins envisagée."
        },
        // Série 2
        {
            q: "Pourquoi le nettoyage détermine-t-il la validité d'une analyse ?",
            options: [
                "Parce qu'il conditionne la vitesse des calculs",
                "Parce qu'il est exigé par les outils",
                "Parce que les choix faits changent le résultat, et sont rarement documentés"
            ],
            a: 2,
            explication: "Supprimer, estimer ou conserver une valeur manquante conduit à trois résultats différents."
        },
        {
            q: "Qu'est-ce qui distingue un tableau de bord utile d'un tableau de bord décoratif ?",
            options: [
                "Le nombre de décisions qu'il a déclenchées",
                "Le nombre de graphiques et d'indicateurs qu'il présente",
                "La fréquence de mise à jour, idéalement quotidienne"
            ],
            a: 0,
            explication: "Chaque indicateur doit passer le test « si ce nombre doublait, que ferais-je ? »."
        },
        {
            q: "Que faut-il joindre à tout pourcentage présenté ?",
            options: [
                "La formule de calcul",
                "L'effectif et un point de comparaison",
                "Le nom de l'analyste"
            ],
            a: 1,
            explication: "Sans effectif, le pourcentage est une impression ; sans comparaison, il ne dit rien."
        }
    ]
};
