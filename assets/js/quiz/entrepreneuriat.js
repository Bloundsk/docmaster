// ===================================
// BANQUE DE QUESTIONS — GUIDE ENTREPRENEURIAT
// ===================================
// 6 questions par sous-section : 3 affichées, les 3 autres au bout de deux
// semaines. Les questions de synthèse sont distinctes.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "le-business-plan": [
            // Série 1
            {
                q: "Quelle est la fonction la plus importante d'un business plan ?",
                options: [
                    "Convaincre un banquier",
                    "Vous faire réfléchir, quitte à découvrir que vos hypothèses ne tiennent pas",
                    "Respecter une obligation légale"
                ],
                a: 1,
                explication: "Un plan qui ne vous a rien appris ni fait douter de rien a été écrit pour plaire, pas pour éprouver."
            },
            {
                q: "Qu'est-ce que le seuil de rentabilité ?",
                options: [
                    "Le chiffre d'affaires à partir duquel vous cessez de perdre de l'argent",
                    "Le montant minimum à investir au départ",
                    "Le bénéfice visé la première année"
                ],
                a: 0,
                explication: "C'est le chiffre que tout lecteur cherche en premier dans un business plan."
            },
            {
                q: "Charges fixes 2 500 €/mois, marge de 180 € par prestation. Quel seuil mensuel ?",
                options: ["environ 8 prestations", "environ 14 prestations", "environ 25 prestations"],
                a: 1,
                explication: "2 500 / 180 ≈ 14, soit une prestation tous les jours et demi ouvrés. Le calcul transforme une intuition en question vérifiable."
            },
            // Série 2
            {
                q: "Pourquoi la trésorerie tue-t-elle plus d'entreprises que la rentabilité ?",
                options: [
                    "Parce que les impôts sont prélevés d'avance",
                    "Parce que les clients paient à 30 ou 60 jours quand les charges tombent immédiatement",
                    "Parce que les banques ferment les comptes déficitaires"
                ],
                a: 1,
                explication: "Un tableau de trésorerie mois par mois est plus utile qu'un compte de résultat prévisionnel."
            },
            {
                q: "Qu'appelle-t-on la « courbe en crosse de hockey » ?",
                options: [
                    "Une croissance régulière et prudente",
                    "Des prévisions plates puis une explosion soudaine, sans justification",
                    "Une baisse suivie d'une reprise"
                ],
                a: 1,
                explication: "Tout financeur a vu ce graphique des centaines de fois. Mieux vaut des chiffres modestes adossés à des hypothèses explicites."
            },
            {
                q: "Quel concurrent est le plus souvent oublié dans un business plan ?",
                options: [
                    "Les grandes entreprises du secteur",
                    "« Ne rien faire », c'est-à-dire la situation actuelle du client",
                    "Les concurrents étrangers"
                ],
                a: 1,
                explication: "Beaucoup de clients potentiels s'accommodent très bien de leur solution actuelle, aussi imparfaite soit-elle."
            }
        ],

        // ---------------------------------------------------------------
        "létude-de-marché": [
            // Série 1
            {
                q: "Quel est l'objectif d'une étude de marché ?",
                options: [
                    "Confirmer que l'idée est bonne",
                    "Essayer de démolir l'idée : si elle résiste, vous tenez quelque chose",
                    "Estimer le chiffre d'affaires de la première année"
                ],
                a: 1,
                explication: "Chercher la confirmation revient à ne rien apprendre."
            },
            {
                q: "Quelle question apporte l'information la plus fiable ?",
                options: [
                    "« Utiliseriez-vous une application pour gérer vos factures ? »",
                    "« Comment avez-vous géré vos factures le mois dernier ? »",
                    "« Trouvez-vous cette idée intéressante ? »"
                ],
                a: 1,
                explication: "Interrogez le passé, jamais le futur. Une intention déclarée ne vaut rien, un comportement passé beaucoup."
            },
            {
                q: "Pourquoi l'avis de vos proches est-il peu utile ?",
                options: [
                    "Ils ne connaissent pas le secteur",
                    "Ils veulent vous encourager : leur avis est affectueux, pas informatif",
                    "Ils n'ont pas le temps de répondre sérieusement"
                ],
                a: 1,
                explication: "Un « non » argumenté vaut dix « c'est génial »."
            },
            // Série 2
            {
                q: "Que vaut l'argument « le marché du bien-être pèse 4 milliards » ?",
                options: [
                    "C'est un excellent argument de crédibilité",
                    "Rien pour vous : il faut descendre au marché réellement atteignable",
                    "C'est suffisant si la source est fiable"
                ],
                a: 1,
                explication: "Un chiffre petit et défendable inspire plus confiance qu'un chiffre énorme et hors de portée."
            },
            {
                q: "Quel est le test de validation le plus probant ?",
                options: [
                    "Un questionnaire avec 300 réponses positives",
                    "Une prévente : quelqu'un sort sa carte bancaire",
                    "L'accord de principe d'un futur associé"
                ],
                a: 1,
                explication: "Tant que personne n'a payé, vous avez des encouragements, pas un marché."
            },
            {
                q: "En quoi consiste la « version manuelle » d'un service ?",
                options: [
                    "Rédiger le mode d'emploi avant de développer",
                    "Rendre le service à la main pour les premiers clients, sans automatisation",
                    "Tester le produit soi-même avant de le vendre"
                ],
                a: 1,
                explication: "On apprend énormément, et on n'a rien développé d'inutile."
            }
        ],

        // ---------------------------------------------------------------
        "le-choix-du-statut-juridique": [
            // Série 1
            {
                q: "Le choix du statut juridique est-il définitif ?",
                options: [
                    "Oui, il engage pour la vie de l'entreprise",
                    "Non : il se modifie, mieux vaut démarrer que retarder le projet",
                    "Oui, sauf en cas de liquidation"
                ],
                a: 1,
                explication: "Ne bloquez pas votre projet sur ce choix : changer de statut est prévu et courant."
            },
            {
                q: "Quel est le principal avantage de la micro-entreprise pour tester une activité ?",
                options: [
                    "Elle permet de déduire tous ses frais",
                    "Création en ligne immédiate, aucun capital, aucun frais si le chiffre d'affaires est nul",
                    "Elle offre la meilleure protection sociale"
                ],
                a: 1,
                explication: "On bascule vers une société quand on approche les plafonds ou quand un associé arrive."
            },
            {
                q: "Quelle est la principale limite de la micro-entreprise ?",
                options: [
                    "Elle interdit d'avoir des clients à l'étranger",
                    "Les frais professionnels ne se déduisent pas",
                    "Elle impose un capital minimum"
                ],
                a: 1,
                explication: "Une activité nécessitant des achats importants y est vite pénalisée."
            },
            // Série 2
            {
                q: "40 000 € de chiffre d'affaires, 22 000 € d'achats de matières. Quel statut privilégier ?",
                options: [
                    "La micro-entreprise, plus simple",
                    "Une société : en micro, les charges se calculent sur les 40 000 € encaissés",
                    "Peu importe, le résultat est identique"
                ],
                a: 1,
                explication: "Plus vos charges réelles sont élevées, moins la micro-entreprise convient."
            },
            {
                q: "Quel statut facilite le plus l'entrée d'investisseurs au capital ?",
                options: ["La micro-entreprise", "La SASU / SAS", "L'EURL"],
                a: 1,
                explication: "Sa grande liberté statutaire en fait le choix habituel des projets destinés à croître."
            },
            {
                q: "Pourquoi ouvrir un compte bancaire dédié dès le premier euro encaissé ?",
                options: [
                    "C'est une obligation légale pour tous les statuts",
                    "Mélanger les comptes rend la comptabilité pénible et brouille la vision des résultats",
                    "Pour obtenir un meilleur taux de crédit"
                ],
                a: 1,
                explication: "Cinq minutes d'ouverture, des heures épargnées ensuite."
            }
        ],

        // ---------------------------------------------------------------
        "le-financement": [
            // Série 1
            {
                q: "Que coûte réellement une levée de fonds ?",
                options: [
                    "Des intérêts élevés",
                    "Une part du capital et du pouvoir de décision",
                    "Une commission fixe"
                ],
                a: 1,
                explication: "Vous acquérez des associés qui auront leur mot à dire, y compris sur votre maintien à la direction."
            },
            {
                q: "Qu'est-ce qu'un prêt d'honneur ?",
                options: [
                    "Un prêt accordé sans document écrit",
                    "Un prêt personnel à taux zéro, sans garantie, qui compte comme des fonds propres",
                    "Un prêt réservé aux entreprises déjà rentables"
                ],
                a: 1,
                explication: "Les banques le prennent en compte : il en débloque fréquemment un autre, plus important."
            },
            {
                q: "Quel apport personnel une banque attend-elle généralement ?",
                options: ["5 %", "20 à 30 % du besoin", "50 % au minimum"],
                a: 1,
                explication: "Si vous ne risquez rien, pourquoi risquerait-elle ?"
            },
            // Série 2
            {
                q: "Lever des fonds est-il une réussite en soi ?",
                options: [
                    "Oui, c'est la consécration d'un projet",
                    "Non : c'est un engagement à croître très vite, en échange d'une part de l'entreprise",
                    "Oui, si le montant dépasse 500 000 €"
                ],
                a: 1,
                explication: "Pour la majorité des projets, se développer grâce aux revenus des clients laisse plus de liberté."
            },
            {
                q: "Quel est le meilleur financement pour une jeune entreprise ?",
                options: [
                    "Un prêt bancaire à taux fixe",
                    "Un client qui paie",
                    "Une subvention régionale"
                ],
                a: 1,
                explication: "Il ne se rembourse pas, ne dilue rien, et prouve que le marché existe."
            },
            {
                q: "Que regarde une banque au-delà des chiffres ?",
                options: [
                    "Le design du business plan",
                    "La cohérence des hypothèses et votre expérience du secteur",
                    "Le nombre de pages du dossier"
                ],
                a: 1,
                explication: "Des hypothèses explicites valent mieux que des chiffres flatteurs. Bpifrance peut aussi se porter garant."
            }
        ]
    },

    // -------------------------------------------------------------------
    // SYNTHÈSE
    // -------------------------------------------------------------------
    synthese: [
        // Série 1
        {
            q: "Quelle est la cause d'échec la plus fréquente d'une jeune entreprise ?",
            options: [
                "Le manque de travail du fondateur",
                "L'absence de marché : on construit ce que personne n'avait demandé",
                "Une mauvaise gestion comptable"
            ],
            a: 1,
            explication: "D'où l'ordre recommandé : vérifier que le problème existe avant tout le reste."
        },
        {
            q: "Par quoi commencer un projet d'entreprise ?",
            options: [
                "Le nom, le logo et le statut juridique",
                "Vérifier que quelqu'un est prêt à payer pour que le problème disparaisse",
                "La recherche de financement"
            ],
            a: 1,
            explication: "Tout le reste vient après, et devient beaucoup plus simple une fois cette réponse obtenue."
        },
        {
            q: "Quel document est le plus utile pour piloter la première année ?",
            options: [
                "Un compte de résultat prévisionnel",
                "Un tableau de trésorerie mois par mois",
                "Une étude de marché détaillée"
            ],
            a: 1,
            explication: "Une entreprise rentable sur le papier peut disparaître faute de liquidités."
        },
        // Série 2
        {
            q: "Vous hésitez entre créer votre société maintenant ou trouver d'abord un client. Que faire ?",
            options: [
                "Créer la structure : c'est plus sérieux vis-à-vis des clients",
                "Chercher un premier client payant : cela valide le projet et rassure les financeurs",
                "Les deux en parallèle"
            ],
            a: 1,
            explication: "Cela évite parfois de créer une entreprise dont on découvrirait trop tard qu'elle n'a pas de marché."
        },
        {
            q: "Vingt personnes vous disent que votre idée est excellente. Que pouvez-vous en conclure ?",
            options: [
                "Que le marché est validé",
                "Rien : aucune n'a payé",
                "Que vous pouvez lever des fonds"
            ],
            a: 1,
            explication: "Interrogez le passé plutôt que le futur, et cherchez des personnes qui n'ont aucune raison de vous ménager."
        },
        {
            q: "Quel accompagnement gratuit est le plus sous-utilisé par les créateurs ?",
            options: [
                "Les CCI et chambres de métiers",
                "Les cabinets de conseil privés",
                "Les forums en ligne"
            ],
            a: 0,
            explication: "Financé par vos futures cotisations, et souvent accompagné de prêts d'honneur via Initiative France ou Réseau Entreprendre."
        }
    ]
};
