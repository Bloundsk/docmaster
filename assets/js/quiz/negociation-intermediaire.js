// ===================================
// BANQUE DE QUESTIONS — NÉGOCIATION & COMMUNICATION, NIVEAU INTERMÉDIAIRE
// ===================================
// 6 questions par sous-section : 3 affichées, les 3 autres prennent le relais
// au bout de deux semaines. Les questions de synthèse sont distinctes de
// celles des sous-sections — aucune n'est reprise deux fois.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "la-solution-de-rechange": [
            // Série 1
            {
                q: "D'où vient le pouvoir dans une négociation ?",
                options: [
                    "De ce que vous obtenez si vous partez",
                    "De la qualité de vos arguments",
                    "De votre assurance"
                ],
                a: 0,
                explication: "C'est ce qui explique que deux personnes également habiles n'aient pas le même pouvoir."
            },
            {
                q: "Qu'est-ce que la MESORE ?",
                options: [
                    "La meilleure solution de rechange en l'absence d'accord",
                    "Le montant minimal acceptable fixé par l'autre",
                    "La moyenne des offres reçues"
                ],
                a: 0,
                explication: "Elle fixe votre point de rupture : aucune offre inférieure ne mérite d'être acceptée."
            },
            {
                q: "Solution de rechange à 28 000 €, offre à 30 000 €, coût de poursuite 500 € :",
                options: [
                    "Gain de 2 000 € — vous avez de la marge pour continuer",
                    "Il faut accepter immédiatement",
                    "L'offre est moins bonne que de partir"
                ],
                a: 0,
                explication: "À 28 200 €, l'offre resterait meilleure que partir, mais continuer coûterait plus que cela ne rapporterait."
            },
            // Série 2
            {
                q: "Quand renforce-t-on sa position ?",
                options: [
                    "Avant la négociation, en améliorant sa solution de rechange",
                    "Pendant, par la fermeté",
                    "À la fin, en menaçant de partir"
                ],
                a: 0,
                explication: "Obtenir une deuxième proposition déplace le point de rupture."
            },
            {
                q: "Que dit la solution de rechange de l'autre ?",
                options: [
                    "Jusqu'où il peut aller",
                    "Ce qu'il pense de vous",
                    "Son budget exact"
                ],
                a: 0,
                explication: "Un fournisseur qui n'a que vous comme client ne négocie pas comme un fournisseur qui en a vingt."
            },
            {
                q: "Que vaut « je peux très bien aller ailleurs » sans que ce soit vrai ?",
                options: [
                    "Cela fonctionne une fois, et se paie si l'autre appelle le bluff",
                    "C'est une technique éprouvée",
                    "Cela n'a aucun effet"
                ],
                a: 0,
                explication: "Une solution de rechange réelle, même modeste, vaut mieux qu'une menace crédible cinq minutes."
            }
        ],

        // ---------------------------------------------------------------
        "la-zone-daccord": [
            // Série 1
            {
                q: "Maximum acheteur 32 000 €, minimum vendeur 27 000 € : que se joue-t-il ?",
                options: [
                    "Le partage de 5 000 €, pas l'accord lui-même",
                    "La possibilité d'un accord",
                    "Le choix du point médian"
                ],
                a: 0,
                explication: "Tout ce qui sera dit servira à déplacer le curseur dans cette fourchette."
            },
            {
                q: "Que faire quand il n'existe aucune zone d'accord sur le prix ?",
                options: [
                    "Ajouter une variable : délai, volume, garantie, services",
                    "Insister et répéter les arguments",
                    "Faire durer pour user l'autre"
                ],
                a: 0,
                explication: "Une négociation à une seule variable est un partage ; dès qu'il y en a deux, des échanges deviennent possibles."
            },
            {
                q: "Faut-il annoncer sa limite maximale ?",
                options: [
                    "Non : l'annoncer revient à l'offrir",
                    "Oui, pour gagner du temps",
                    "Oui, si l'autre le demande"
                ],
                a: 0,
                explication: "La limite sert à décider, pas à communiquer."
            },
            // Série 2
            {
                q: "Que signifie l'absence de zone d'accord ?",
                options: [
                    "Aucun prix ne convient aux deux en l'état",
                    "L'un des deux ment sur sa limite",
                    "Il faut couper la différence"
                ],
                a: 0,
                explication: "C'est une information précieuse : elle évite des semaines perdues."
            },
            {
                q: "Sur quoi porte la négociation quand une zone d'accord existe ?",
                options: [
                    "Sur le partage de cette zone",
                    "Sur l'existence même d'un accord",
                    "Sur la bonne foi des parties"
                ],
                a: 0,
                explication: "L'accord est déjà possible : reste à savoir où l'on s'arrête dans la fourchette."
            },
            {
                q: "Pourquoi une seule variable rend-elle la négociation à somme nulle ?",
                options: [
                    "Ce que l'un gagne sur cette variable, l'autre le perd nécessairement",
                    "Parce que les parties campent sur leurs positions",
                    "Parce que le prix est toujours le point dur"
                ],
                a: 0,
                explication: "C'est la raison pour laquelle ajouter une variable débloque les situations bloquées."
            }
        ],

        // ---------------------------------------------------------------
        "lancrage": [
            // Série 1
            {
                q: "Objectif 29 000 €, offre attendue de l'autre 27 000 € : quelle première offre ?",
                options: [
                    "31 000 €",
                    "29 000 €",
                    "35 000 €"
                ],
                a: 0,
                explication: "Soit 2 000 € au-dessus de l'objectif, pour que le point médian y tombe."
            },
            {
                q: "Le conseil « ne jamais annoncer le premier chiffre » est-il fondé ?",
                options: [
                    "Non : celui qui ouvre oriente la discussion, à condition de rester plausible",
                    "Oui, toujours",
                    "Oui, sauf entre professionnels"
                ],
                a: 0,
                explication: "Les travaux sur l'ancrage le contredisent."
            },
            {
                q: "Quand vaut-il mieux laisser l'autre ouvrir ?",
                options: [
                    "Quand on ignore la valeur de ce qui se négocie",
                    "Quand on est en position de force",
                    "Quand la relation doit durer"
                ],
                a: 0,
                explication: "Ouvrir sans information expose à ancrer contre soi-même."
            },
            // Série 2
            {
                q: "Que produit une première offre très éloignée du marché ?",
                options: [
                    "Elle disqualifie plutôt qu'elle ne déplace",
                    "Elle donne un avantage décisif",
                    "Elle n'a aucun effet"
                ],
                a: 0,
                explication: "L'autre en conclut que vous ne connaissez pas le sujet, ou que vous ne négociez pas de bonne foi."
            },
            {
                q: "Qu'est-ce qui caractérise une ancre efficace ?",
                options: [
                    "Elle est ambitieuse et défendable en une phrase",
                    "Elle est la plus élevée possible",
                    "Elle est proche de l'objectif réel"
                ],
                a: 0,
                explication: "L'ambition sans justification se retourne contre celui qui l'annonce."
            },
            {
                q: "L'effet d'ancrage disparaît-il quand chacun sait que le chiffre est négociable ?",
                options: [
                    "Non : c'est l'un des effets les mieux répliqués de la psychologie de la décision",
                    "Oui, entre professionnels",
                    "Oui, si le chiffre est annoncé comme indicatif"
                ],
                a: 0,
                explication: "Il a été mesuré chez des experts prévenus du dispositif."
            }
        ],

        // ---------------------------------------------------------------
        "positions-et-interets": [
            // Série 1
            {
                q: "Quelle est la différence entre une position et un intérêt ?",
                options: [
                    "La position est ce qu'on demande, l'intérêt la raison pour laquelle on le demande",
                    "La position est ferme, l'intérêt négociable",
                    "La position est écrite, l'intérêt implicite"
                ],
                a: 0,
                explication: "Les positions s'opposent ; les intérêts, souvent, non."
            },
            {
                q: "Que se passe-t-il tant qu'on discute des positions ?",
                options: [
                    "Il n'existe qu'un partage",
                    "Chacun défend ses arguments",
                    "L'accord se rapproche"
                ],
                a: 0,
                explication: "Dès qu'on connaît les intérêts, d'autres solutions apparaissent."
            },
            {
                q: "Face à « il me faut une remise de 15 % », quelles solutions peuvent apparaître ?",
                options: [
                    "Étaler le paiement, détailler le devis, ou ajuster le périmètre",
                    "Proposer 7,5 %",
                    "Refuser et attendre"
                ],
                a: 0,
                explication: "Aucune de ces trois solutions n'apparaît tant qu'on discute du pourcentage."
            },
            // Série 2
            {
                q: "Qu'est-ce qu'un échange asymétrique ?",
                options: [
                    "Chacun donne ce qui lui coûte peu et reçoit ce qui lui rapporte beaucoup",
                    "Un accord où l'un cède plus que l'autre",
                    "Une négociation entre parties de forces inégales"
                ],
                a: 0,
                explication: "C'est ce qui produit les meilleurs accords, et cela ne figure jamais dans la discussion de départ."
            },
            {
                q: "L'hypothèse « ce que l'un gagne, l'autre le perd » est :",
                options: [
                    "Exacte pour une variable unique, fausse dès qu'il y en a plusieurs",
                    "Toujours vraie",
                    "Toujours fausse"
                ],
                a: 0,
                explication: "C'est pourtant l'hypothèse par défaut de presque tout le monde."
            },
            {
                q: "Que faut-il préparer avant chaque négociation, au-delà de son objectif ?",
                options: [
                    "Ce qui me coûte peu et lui rapporte beaucoup",
                    "Trois arguments de repli",
                    "Le moment où je vais céder"
                ],
                a: 0,
                explication: "Un délai, une référence, une exclusivité, une souplesse de calendrier."
            }
        ]
    },

    // Questions de synthèse — distinctes de celles des sous-sections
    synthese: [
        {
            q: "Quel est le fil conducteur de ce niveau ?",
            options: [
                "Une négociation se calcule en grande partie avant de commencer",
                "Il faut savoir tenir sa position",
                "Le meilleur négociateur est le plus patient"
            ],
            a: 0,
            explication: "Quatre notions suffisent, et elles se traduisent toutes en chiffres."
        },
        {
            q: "Qu'ont en commun la solution de rechange et la limite maximale ?",
            options: [
                "Les deux servent à décider, pas à communiquer",
                "Les deux doivent être annoncées tôt",
                "Les deux se calculent après la première offre"
            ],
            a: 0,
            explication: "Les annoncer revient à les offrir."
        },
        {
            q: "Quelqu'un accepte un accord après six mois de discussions, en invoquant le temps investi. Que dire ?",
            options: [
                "Le temps passé est perdu quoi qu'il arrive ; seule compte la comparaison avec sa solution de rechange",
                "Six mois justifient de conclure",
                "Il fallait fixer une échéance"
            ],
            a: 0,
            explication: "C'est le biais du coût irrécupérable, développé au niveau avancé."
        },
        {
            q: "Deux parties bloquées sur le prix depuis trois semaines. Quelle piste ?",
            options: [
                "Vérifier s'il existe une zone d'accord, puis ajouter une variable",
                "Couper la différence",
                "Faire intervenir un tiers"
            ],
            a: 0,
            explication: "S'il n'y a pas de zone, insister ne produira jamais d'accord sur le prix seul."
        },
        {
            q: "À quoi doit-on comparer un accord pour le juger ?",
            options: [
                "À sa solution de rechange",
                "À ce qu'on espérait au départ",
                "À ce que l'autre a obtenu"
            ],
            a: 0,
            explication: "C'est la seule comparaison qui corresponde à une réalité."
        },
        {
            q: "Que reste-t-il si l'on n'applique qu'une seule chose de ce niveau ?",
            options: [
                "Écrire, avant de commencer, ce qu'on obtient si la négociation échoue",
                "Toujours annoncer le premier chiffre",
                "Ne jamais révéler son budget"
            ],
            a: 0,
            explication: "C'est la ligne qui décide de tout le reste."
        }
    ]
};
