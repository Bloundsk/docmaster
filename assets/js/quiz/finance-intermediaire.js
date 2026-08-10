// ===================================
// BANQUE DE QUESTIONS — FINANCE, NIVEAU INTERMÉDIAIRE
// ===================================
// 6 questions par sous-section : 3 affichées, les 3 autres prennent le relais
// au bout de deux semaines. Les questions de synthèse sont distinctes de
// celles des sous-sections — aucune n'est reprise deux fois.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "construire-son-allocation": [
            // Série 1
            {
                q: "Sur quoi se fonde d'abord le choix d'une allocation ?",
                options: [
                    "Le tempérament de l'investisseur",
                    "L'horizon, c'est-à-dire la date du besoin",
                    "Le niveau actuel des marchés"
                ],
                a: 1,
                explication: "Un tempérament ne change pas le temps qu'un marché met à se remettre d'une chute. C'est la date du besoin qui détermine ce qu'on peut supporter."
            },
            {
                q: "Une même personne peut-elle avoir plusieurs allocations en même temps ?",
                options: [
                    "Non, une seule par personne",
                    "Oui : une par poche, selon l'échéance de chaque projet",
                    "Oui, mais seulement après 50 ans"
                ],
                a: 1,
                explication: "Un achat dans 2 ans et une retraite dans 25 ans n'appellent pas la même exposition. Ce sont trois poches d'une même personne, chacune avec son échéance."
            },
            {
                q: "Que propose la règle des « 100 moins l'âge » ?",
                options: [
                    "Détenir en actions un pourcentage égal à 100 moins son âge",
                    "Épargner 100 € par mois jusqu'à son âge de départ",
                    "Ne jamais dépasser 100 lignes en portefeuille"
                ],
                a: 0,
                explication: "70 % d'actions à trente ans, 40 % à soixante. Elle fait baisser le risque en approchant du besoin, mais confond l'âge avec l'horizon réel."
            },
            // Série 2
            {
                q: "Quelle est la principale limite de la règle « 100 moins l'âge » ?",
                options: [
                    "Elle est trop compliquée à calculer",
                    "Elle confond l'âge et l'horizon de placement",
                    "Elle ne s'applique qu'aux obligations"
                ],
                a: 1,
                explication: "Une personne de 60 ans qui n'entamera son capital qu'à 80 ans dispose encore de vingt ans d'horizon, et non de zéro."
            },
            {
                q: "Pour un apport immobilier prévu dans 8 ans, quelle exposition est cohérente ?",
                options: [
                    "0 % d'actions, le besoin est certain",
                    "Environ 40 % d'actions",
                    "100 % d'actions, huit ans c'est long"
                ],
                a: 1,
                explication: "Huit ans laissent le temps d'effacer en partie une baisse, mais pas totalement. Une exposition intermédiaire correspond à cet horizon intermédiaire."
            },
            {
                q: "Quand faut-il réviser son allocation ?",
                options: [
                    "Quand les marchés montent ou baissent fortement",
                    "Quand les échéances des projets changent",
                    "Tous les mois, pour rester réactif"
                ],
                a: 1,
                explication: "L'allocation se fixe à froid, en fonction de dates connues. La réviser selon l'actualité revient à acheter cher et vendre bas."
            }
        ],

        // ---------------------------------------------------------------
        "les-frais": [
            // Série 1
            {
                q: "Qu'est-ce qui distingue les frais de la performance ?",
                options: [
                    "Les frais sont certains, la performance est une hypothèse",
                    "Les frais varient chaque année, la performance est stable",
                    "Rien, les deux sont imprévisibles"
                ],
                a: 0,
                explication: "Les frais seront prélevés quoi qu'il arrive, les bonnes comme les mauvaises années. C'est la seule composante du rendement connue à l'avance."
            },
            {
                q: "Sur 30 ans et 20 000 € placés à 6 %, que coûte un point de frais annuel supplémentaire ?",
                options: [
                    "Environ 2 000 €",
                    "Environ 27 000 €, soit un quart du résultat",
                    "Environ 6 000 €"
                ],
                a: 1,
                explication: "108 000 € avec 0,2 % de frais, contre 81 000 € avec 1,2 %. L'écart dépasse le capital initialement investi."
            },
            {
                q: "Comment sont prélevés les frais de gestion d'un fonds ?",
                options: [
                    "Par facture annuelle envoyée au client",
                    "Silencieusement, sur l'encours, déduits de la performance affichée",
                    "Uniquement au moment de la revente"
                ],
                a: 1,
                explication: "Ils n'apparaissent jamais comme une ligne de débit. C'est précisément ce qui les rend difficiles à percevoir."
            },
            // Série 2
            {
                q: "Pourquoi l'effet des frais est-il si violent sur longue durée ?",
                options: [
                    "Parce qu'ils augmentent chaque année",
                    "Parce qu'ils privent aussi des intérêts que le rendement perdu aurait produits",
                    "Parce qu'ils sont prélevés deux fois"
                ],
                a: 1,
                explication: "C'est l'intérêt composé fonctionnant à rebours : chaque euro de frais est un euro qui ne produira jamais d'intérêts les années suivantes."
            },
            {
                q: "Quel critère comparer en premier entre deux supports équivalents ?",
                options: [
                    "Leur performance de l'an dernier",
                    "Leurs frais annuels",
                    "Le nombre d'étoiles attribué par les comparateurs"
                ],
                a: 1,
                explication: "La performance passée ne se reproduit pas de façon fiable ; les frais, eux, se reproduisent à l'identique chaque année."
            },
            {
                q: "Quels frais s'ajoutent à ceux du support dans un contrat d'assurance-vie ?",
                options: [
                    "Aucun, le support inclut tout",
                    "Des frais annuels d'enveloppe sur les unités de compte",
                    "Une taxe d'État de 2 %"
                ],
                a: 1,
                explication: "Les frais se superposent : ceux du fonds, ceux du contrat, parfois des frais d'entrée sur chaque versement. Il faut demander le total."
            }
        ],

        // ---------------------------------------------------------------
        "choisir-son-enveloppe": [
            // Série 1
            {
                q: "Que désigne l'« enveloppe » en matière de placement ?",
                options: [
                    "Le contenant : PEA, compte-titres, assurance-vie",
                    "Le montant maximal qu'on peut investir",
                    "Le document contractuel signé à l'ouverture"
                ],
                a: 0,
                explication: "Le contenu — actions, ETF — peut être le même. Ce qui change, c'est la fiscalité et les conditions de sortie."
            },
            {
                q: "Après cinq ans, quels prélèvements subsistent sur les gains d'un PEA ?",
                options: [
                    "Aucun prélèvement",
                    "Les prélèvements sociaux uniquement",
                    "L'impôt sur le revenu uniquement"
                ],
                a: 1,
                explication: "L'exonération porte sur l'impôt sur le revenu. Les prélèvements sociaux de 17,2 % restent dus."
            },
            {
                q: "Sur 10 000 € de gains, quel écart entre un compte-titres et un PEA de plus de 5 ans ?",
                options: [
                    "Aucun, la fiscalité est identique",
                    "Environ 1 280 € en faveur du PEA",
                    "Environ 5 000 € en faveur du PEA"
                ],
                a: 1,
                explication: "3 000 € de prélèvement sur compte-titres (30 %) contre environ 1 720 € sur PEA (17,2 %). Même support, même performance : seul le contenant diffère."
            },
            // Série 2
            {
                q: "Quand démarre le compteur des cinq ans du PEA ?",
                options: [
                    "Au premier versement significatif",
                    "À l'ouverture du plan",
                    "Au premier achat de titres"
                ],
                a: 1,
                explication: "Ouvrir un PEA avec une somme modeste fait courir l'horloge. Attendre « d'avoir assez » revient à perdre des années d'antériorité gratuites."
            },
            {
                q: "Quelle est la principale restriction du PEA ?",
                options: [
                    "Il n'accepte que les actions et fonds européens",
                    "Il est réservé aux plus de 40 ans",
                    "Les retraits y sont impossibles avant la retraite"
                ],
                a: 0,
                explication: "Le compte-titres, lui, n'a aucune contrainte géographique — mais sa fiscalité s'applique dès le premier euro de gain."
            },
            {
                q: "Quelle enveloppe est « la meilleure » ?",
                options: [
                    "Le PEA, dans tous les cas",
                    "L'assurance-vie, dans tous les cas",
                    "La question est mal posée : elles répondent à des besoins différents"
                ],
                a: 2,
                explication: "On choisit celle qui correspond à l'échéance et au contenu visés, pas celle qui serait supérieure dans l'absolu."
            }
        ],

        // ---------------------------------------------------------------
        "investir-dans-la-duree": [
            // Série 1
            {
                q: "Qu'apportent réellement les versements programmés ?",
                options: [
                    "Un rendement moyen supérieur",
                    "La suppression de la question du moment d'entrée",
                    "Une garantie contre les pertes"
                ],
                a: 1,
                explication: "En moyenne, ils rapportent même légèrement moins qu'un investissement en une fois. Leur bénéfice est de rendre l'attente tenable et d'éviter le report indéfini."
            },
            {
                q: "200 € par mois à 6 % : quel capital après 20 ans, pour 48 000 € versés ?",
                options: [
                    "Environ 55 000 €",
                    "Environ 92 000 €",
                    "Environ 150 000 €"
                ],
                a: 1,
                explication: "Les intérêts finissent par dépasser les versements. Sur 10 ans seulement, le même effort ne produit qu'environ 33 000 €."
            },
            {
                q: "En quoi consiste le rééquilibrage ?",
                options: [
                    "Vendre ce qui baisse pour limiter les pertes",
                    "Revenir à l'allocation cible, une fois par an",
                    "Changer d'allocation selon les prévisions économiques"
                ],
                a: 1,
                explication: "Sans rééquilibrage, la poche qui progresse le plus prend une place croissante : le risque augmente sans qu'aucune décision n'ait été prise."
            },
            // Série 2
            {
                q: "Pourquoi le rééquilibrage est-il contre-intuitif ?",
                options: [
                    "Il demande de renforcer ce qui a le moins bien marché",
                    "Il oblige à tout vendre chaque année",
                    "Il coûte plus cher qu'il ne rapporte"
                ],
                a: 0,
                explication: "C'est précisément cet inconfort qui maintient le niveau de risque choisi au départ."
            },
            {
                q: "Une allocation prévue à 60 % d'actions dérive à 75 % après de bonnes années. Que s'est-il passé ?",
                options: [
                    "Une erreur de l'intermédiaire",
                    "Le risque a augmenté sans décision consciente",
                    "Rien d'anormal, il faut laisser courir"
                ],
                a: 1,
                explication: "La dérive est mécanique. Elle expose davantage qu'on ne l'avait accepté, au moment précis où les marchés sont hauts."
            },
            {
                q: "À quelle fréquence consulter un portefeuille de long terme ?",
                options: [
                    "Chaque jour, pour rester réactif",
                    "Un rendez-vous annuel suffit",
                    "Jamais, il ne faut plus y toucher"
                ],
                a: 1,
                explication: "Une consultation quotidienne multiplie les occasions de voir du rouge, donc les tentations d'agir sous le coup de l'émotion."
            }
        ]
    },

    // ===================================================================
    // Questions de synthèse — distinctes de celles des sous-sections
    // ===================================================================
    synthese: [
        // Série 1
        {
            q: "Quelle décision explique la plus grande part de la variation des résultats ?",
            options: [
                "Le choix des supports individuels",
                "L'allocation entre actifs risqués et stables",
                "Le moment précis de l'achat"
            ],
            a: 1,
            explication: "L'allocation est la décision la plus structurante, bien avant le choix de tel ou tel fonds."
        },
        {
            q: "Deux investisseurs obtiennent la même performance brute. Qu'est-ce qui creusera l'écart entre eux ?",
            options: [
                "Les frais et l'enveloppe fiscale choisie",
                "Le nombre de lignes détenues",
                "La banque qui héberge le compte"
            ],
            a: 0,
            explication: "Frais et fiscalité s'appliquent chaque année et à chaque retrait. Ce sont les deux seuls leviers réellement maîtrisables."
        },
        {
            q: "Pourquoi la durée compte-t-elle plus que le montant investi ?",
            options: [
                "Parce que les frais baissent avec le temps",
                "Parce que les intérêts produisent eux-mêmes des intérêts",
                "Parce que les marchés montent toujours"
            ],
            a: 1,
            explication: "Doubler la durée ne double pas le capital : dans l'exemple du guide, elle le triple presque."
        },
        // Série 2
        {
            q: "Un conseiller ne parvient pas à indiquer le total des frais annuels d'un contrat. Que faut-il en conclure ?",
            options: [
                "C'est normal, ces frais varient",
                "L'absence de réponse est en soi une information",
                "Il faut demander la performance passée à la place"
            ],
            a: 1,
            explication: "Le total des frais est une donnée connue et documentée, mentionnée dans le document d'information clé. Ne pas la fournir est un signal."
        },
        {
            q: "Quel est le point commun entre allocation, frais, enveloppe et régularité ?",
            options: [
                "Ce sont des éléments que l'investisseur maîtrise réellement",
                "Ils dépendent tous de la conjoncture",
                "Ils ne concernent que les gros patrimoines"
            ],
            a: 0,
            explication: "Aucun ne suppose de prévoir les marchés. C'est ce qui les rend décisifs, là où la prévision ne l'est pas."
        },
        {
            q: "Pourquoi la plupart des plans d'investissement échouent-ils ?",
            options: [
                "Par erreur de calcul au départ",
                "Par abandon en cours de route",
                "Parce que les supports choisis sont mauvais"
            ],
            a: 1,
            explication: "Choisir une allocation est facile ; ne pas en changer quand elle est mise à l'épreuve l'est beaucoup moins."
        }
    ]
};
