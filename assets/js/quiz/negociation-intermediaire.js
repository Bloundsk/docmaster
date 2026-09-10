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
                    "De la qualité de tes arguments préparés",
                    "De ce que tu obtiens si tu pars",
                    "De ton assurance au moment de parler"
                ],
                a: 1,
                explication: "C'est ce qui explique que deux personnes également habiles n'aient pas le même pouvoir."
            },
            {
                q: "Qu'est-ce que la MESORE ?",
                options: [
                    "Le montant minimal acceptable fixé à l'avance par l'autre partie",
                    "La moyenne des offres reçues",
                    "La meilleure solution de rechange en l'absence d'accord"
                ],
                a: 2,
                explication: "Elle fixe ton point de rupture : aucune offre inférieure ne mérite d'être acceptée."
            },
            {
                q: "Solution de rechange à 28 000 €, offre à 30 000 €, coût de poursuite 500 € :",
                options: [
                    "Gain de 2 000 € — tu as de la marge pour continuer",
                    "Il faut accepter immédiatement",
                    "L'offre est nettement moins bonne que de partir tout de suite"
                ],
                a: 0,
                explication: "À 28 200 €, l'offre resterait meilleure que partir, mais continuer coûterait plus que cela ne rapporterait."
            },
            // Série 2
            {
                q: "Quand renforce-t-on sa position ?",
                options: [
                    "Pendant, par la fermeté",
                    "Avant la négociation, en améliorant sa solution de rechange",
                    "À la toute fin, en menaçant clairement de partir sans accord"
                ],
                a: 1,
                explication: "Obtenir une deuxième proposition déplace le point de rupture."
            },
            {
                q: "Que dit la solution de rechange de l'autre ?",
                options: [
                    "Ce qu'il pense vraiment de toi",
                    "Son budget exact, au centime",
                    "Jusqu'où il peut aller"
                ],
                a: 2,
                explication: "Un fournisseur qui n'a que toi comme client ne négocie pas comme un fournisseur qui en a vingt."
            },
            {
                q: "Que vaut « je peux très bien aller ailleurs » sans que ce soit vrai ?",
                options: [
                    "C'est une technique éprouvée",
                    "Cela n'a aucun effet",
                    "Cela fonctionne une fois, et se paie si l'autre appelle le bluff"
                ],
                a: 2,
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
                    "La possibilité même d'un accord entre les deux",
                    "Le choix du point médian entre les deux prix annoncés"
                ],
                a: 0,
                explication: "Tout ce qui sera dit servira à déplacer le curseur dans cette fourchette."
            },
            {
                q: "Que faire quand il n'existe aucune zone d'accord sur le prix ?",
                options: [
                    "Insister et répéter les arguments déjà donnés une fois de plus",
                    "Faire durer pour user l'autre",
                    "Ajouter une variable : délai, volume, garantie, services"
                ],
                a: 2,
                explication: "Une négociation à une seule variable est un partage ; dès qu'il y en a deux, des échanges deviennent possibles."
            },
            {
                q: "Faut-il annoncer sa limite maximale ?",
                options: [
                    "Oui, pour gagner du temps sur la discussion",
                    "Oui, si l'autre partie le demande clairement",
                    "Non : l'annoncer revient à l'offrir"
                ],
                a: 2,
                explication: "La limite sert à décider, pas à communiquer."
            },
            // Série 2
            {
                q: "Que signifie l'absence de zone d'accord ?",
                options: [
                    "Aucun prix ne convient aux deux en l'état",
                    "L'un des deux ment forcément sur sa limite",
                    "Il faut couper la différence en deux parts"
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
                    "Parce que les parties campent sur leurs positions",
                    "Parce que le prix est toujours le point dur",
                    "Ce que l'un gagne sur cette variable, l'autre le perd nécessairement"
                ],
                a: 2,
                explication: "C'est la raison pour laquelle ajouter une variable débloque les situations bloquées."
            }
        ],

        // ---------------------------------------------------------------
        "lancrage": [
            // Série 1
            {
                q: "Objectif 29 000 €, offre attendue de l'autre 27 000 € : quelle première offre ?",
                options: [
                    "29 000 €",
                    "31 000 €",
                    "35 000 €"
                ],
                a: 1,
                explication: "Soit 2 000 € au-dessus de l'objectif, pour que le point médian y tombe."
            },
            {
                q: "Le conseil « ne jamais annoncer le premier chiffre » est-il fondé ?",
                options: [
                    "Oui, toujours",
                    "Oui, sauf entre professionnels",
                    "Non : celui qui ouvre oriente la discussion, à condition de rester plausible"
                ],
                a: 2,
                explication: "Les travaux sur l'ancrage le contredisent."
            },
            {
                q: "Quand vaut-il mieux laisser l'autre ouvrir ?",
                options: [
                    "Quand on se trouve en position de force évidente",
                    "Quand la relation doit durer",
                    "Quand on ignore la valeur de ce qui se négocie"
                ],
                a: 2,
                explication: "Ouvrir sans information expose à ancrer contre soi-même."
            },
            // Série 2
            {
                q: "Que produit une première offre très éloignée du marché ?",
                options: [
                    "Elle disqualifie plutôt qu'elle ne déplace",
                    "Elle donne un avantage décisif dès le départ",
                    "Elle n'a aucun effet mesurable sur l'accord"
                ],
                a: 0,
                explication: "L'autre en conclut que tu ne connais pas le sujet, ou que tu ne négocies pas de bonne foi."
            },
            {
                q: "Qu'est-ce qui caractérise une ancre efficace ?",
                options: [
                    "Elle est ambitieuse et défendable en une phrase",
                    "Elle est la plus élevée possible",
                    "Elle est très proche de l'objectif réellement visé"
                ],
                a: 0,
                explication: "L'ambition sans justification se retourne contre celui qui l'annonce."
            },
            {
                q: "L'effet d'ancrage disparaît-il quand chacun sait que le chiffre est négociable ?",
                options: [
                    "Oui, entre professionnels",
                    "Non : c'est l'un des effets les mieux répliqués de la psychologie de la décision",
                    "Oui, si le chiffre est annoncé comme indicatif"
                ],
                a: 1,
                explication: "Il a été mesuré chez des experts prévenus du dispositif."
            }
        ],

        // ---------------------------------------------------------------
        "positions-et-interets": [
            // Série 1
            {
                q: "Quelle est la différence entre une position et un intérêt ?",
                options: [
                    "La position est ferme, l'intérêt négociable",
                    "La position est ce qu'on demande, l'intérêt la raison pour laquelle on le demande",
                    "La position est écrite, l'intérêt implicite"
                ],
                a: 1,
                explication: "Les positions s'opposent ; les intérêts, souvent, non."
            },
            {
                q: "Que se passe-t-il tant qu'on discute des positions ?",
                options: [
                    "Chacun défend ses arguments",
                    "L'accord se rapproche nettement",
                    "Il n'existe qu'un partage"
                ],
                a: 2,
                explication: "Dès qu'on connaît les intérêts, d'autres solutions apparaissent."
            },
            {
                q: "Face à « il me faut une remise de 15 % », quelles solutions peuvent apparaître ?",
                options: [
                    "Étaler le paiement, détailler le devis, ou ajuster le périmètre",
                    "Proposer 7,5 %",
                    "Refuser l'offre et attendre la réponse d'en face pendant quelques jours"
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
                    "Toujours vraie",
                    "Exacte pour une variable unique, fausse dès qu'il y en a plusieurs",
                    "Toujours fausse"
                ],
                a: 1,
                explication: "C'est pourtant l'hypothèse par défaut de presque tout le monde."
            },
            {
                q: "Que faut-il préparer avant chaque négociation, au-delà de son objectif ?",
                options: [
                    "Trois arguments de repli",
                    "Ce qui me coûte peu et lui rapporte beaucoup",
                    "Le moment précis où j'accepterai de céder du terrain"
                ],
                a: 1,
                explication: "Un délai, une référence, une exclusivité, une souplesse de calendrier."
            }
        ],

        // ---------------------------------------------------------------
        "negocier-son-salaire": [
            // Série 1
            {
                q: "Pourquoi un écart obtenu à l'embauche compte-t-il plus d'une fois ?",
                options: [
                    "Il sert de base à chaque augmentation en pourcentage",
                    "Il est versé en une fois, avec une prime d'arrivée",
                    "Il se rattrape de toute façon à la première révision"
                ],
                a: 0,
                explication: "Une hausse de quelques pour cent s'applique au salaire de départ : l'écart grandit avec elle."
            },
            {
                q: "Tu obtiens 2 000 € brut par an de plus, avec 2 % de hausse annuelle. Que vaut l'écart sur dix ans ?",
                options: [
                    "Exactement 20 000 €, soit dix fois l'écart",
                    "Environ 10 000 €, les hausses ne portant pas dessus",
                    "Près de 21 900 €, car les hausses s'y appliquent"
                ],
                a: 2,
                explication: "Chaque augmentation s'applique aussi à l'écart : 2 390 € la dixième année, près de 21 900 € au total."
            },
            {
                q: "Sans autre offre en cours, quelle est ta solution de rechange ?",
                options: [
                    "Il n'y en a aucune, donc rien à négocier",
                    "Ce que tu feras vraiment si tu refuses",
                    "L'offre moyenne du marché pour ce poste"
                ],
                a: 1,
                explication: "Rester dans ton poste, poursuivre ta recherche : c'est elle qui fixe ce que tu peux refuser."
            },
            // Série 2
            {
                q: "Sur quoi fonder le chiffre que tu annonces ?",
                options: [
                    "Sur tes dépenses : loyer, crédit, charges fixes",
                    "Sur ton salaire actuel, augmenté de dix pour cent",
                    "Sur la fourchette du poste, établie à l'extérieur"
                ],
                a: 2,
                explication: "Annonces comparables, études de rémunération, minima conventionnels : un chiffre défendable en une phrase."
            },
            {
                q: "On te demande ton salaire actuel. Quelle réponse sert ta négociation ?",
                options: [
                    "Répondre par ce que vaut le poste que tu vises",
                    "Donner le chiffre exact, pour paraître transparent",
                    "Refuser net de répondre à la question posée"
                ],
                a: 0,
                explication: "Ton salaire actuel ancrerait la discussion sur ton ancien emploi plutôt que sur le nouveau."
            },
            {
                q: "L'enveloppe du salaire est bloquée. Que reste-t-il à négocier ?",
                options: [
                    "Rien : le fixe était le seul vrai sujet de fond",
                    "Le variable, le télétravail, la date de révision",
                    "Uniquement le montant de la prime d'arrivée"
                ],
                a: 1,
                explication: "La zone d'accord s'est déplacée vers ce qui coûte peu à l'employeur et compte pour toi."
            }
        ]
    },

    // Questions de synthèse — distinctes de celles des sous-sections
    synthese: [
        {
            q: "Quel est le fil conducteur de ce niveau ?",
            options: [
                "Il faut savoir tenir sa position",
                "Le meilleur négociateur est toujours celui qui reste le plus patient",
                "Une négociation se calcule en grande partie avant de commencer"
            ],
            a: 2,
            explication: "Quatre notions suffisent, et elles se traduisent toutes en chiffres."
        },
        {
            q: "Qu'ont en commun la solution de rechange et la limite maximale ?",
            options: [
                "Les deux doivent être annoncées tôt",
                "Les deux servent à décider, pas à communiquer",
                "Les deux se calculent après avoir entendu la première offre"
            ],
            a: 1,
            explication: "Les annoncer revient à les offrir."
        },
        {
            q: "Quelqu'un accepte un accord après six mois de discussions, en invoquant le temps investi. Que dire ?",
            options: [
                "Six mois justifient de conclure",
                "Le temps passé est perdu quoi qu'il arrive ; seule compte la comparaison avec sa solution de rechange",
                "Il fallait fixer une échéance"
            ],
            a: 1,
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
                "À ce qu'on espérait au départ",
                "À sa solution de rechange",
                "À ce que l'autre a obtenu"
            ],
            a: 1,
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
