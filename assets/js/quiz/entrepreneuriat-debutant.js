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
                    "Te faire réfléchir, quitte à découvrir que tes hypothèses ne tiennent pas",
                    "Convaincre un banquier",
                    "Respecter une obligation légale imposée à toute entreprise lors de sa création"
                ],
                a: 0,
                explication: "Un plan qui ne t'a rien appris ni fait douter de rien a été écrit pour plaire, pas pour éprouver."
            },
            {
                q: "Qu'est-ce que le seuil de rentabilité ?",
                options: [
                    "Le chiffre d'affaires à partir duquel tu cesses de perdre de l'argent",
                    "Le montant minimum qu'il faut investir au départ pour lancer l'activité",
                    "Le bénéfice que tu vises pour la toute première année d'activité"
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
                    "Parce que les banques ferment automatiquement les comptes déficitaires au bout de quelques mois"
                ],
                a: 1,
                explication: "Un tableau de trésorerie mois par mois est plus utile qu'un compte de résultat prévisionnel."
            },
            {
                q: "Qu'appelle-t-on la « courbe en crosse de hockey » ?",
                options: [
                    "Une croissance régulière et prudente, année après année, sans à-coups",
                    "Une baisse suivie d'une reprise",
                    "Des prévisions plates puis une explosion soudaine, sans justification"
                ],
                a: 2,
                explication: "Tout financeur a vu ce graphique des centaines de fois. Mieux vaut des chiffres modestes adossés à des hypothèses explicites."
            },
            {
                q: "Quel concurrent est le plus souvent oublié dans un business plan ?",
                options: [
                    "Les grandes entreprises du secteur, déjà installées et bien financées",
                    "« Ne rien faire », c'est-à-dire la situation actuelle du client",
                    "Les concurrents étrangers, souvent moins chers et déjà installés"
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
                    "Estimer le chiffre d'affaires de la première année, mois par mois",
                    "Essayer de démolir l'idée : si elle résiste, tu tiens quelque chose"
                ],
                a: 2,
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
                explication: "Interroge le passé, jamais le futur. Une intention déclarée ne vaut rien, un comportement passé beaucoup."
            },
            {
                q: "Pourquoi l'avis de tes proches est-il peu utile ?",
                options: [
                    "Ils ne connaissent pas le secteur, ni les clients auxquels tu penses",
                    "Ils veulent t'encourager : leur avis est affectueux, pas informatif",
                    "Ils n'ont pas le temps de répondre sérieusement à ce genre de question"
                ],
                a: 1,
                explication: "Un « non » argumenté vaut dix « c'est génial »."
            },
            // Série 2
            {
                q: "Que vaut l'argument « le marché du bien-être pèse 4 milliards » ?",
                options: [
                    "C'est un excellent argument de crédibilité devant un investisseur",
                    "C'est suffisant si la source est fiable",
                    "Rien pour toi : il faut descendre au marché réellement atteignable"
                ],
                a: 2,
                explication: "Un chiffre petit et défendable inspire plus confiance qu'un chiffre énorme et hors de portée."
            },
            {
                q: "Quel est le test de validation le plus probant ?",
                options: [
                    "Un questionnaire en ligne avec 300 réponses positives",
                    "Une prévente : quelqu'un sort sa carte bancaire",
                    "L'accord de principe d'un futur associé sur le projet"
                ],
                a: 1,
                explication: "Tant que personne n'a payé, tu as des encouragements, pas un marché."
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
                    "Non : il se modifie, mieux vaut démarrer que retarder le projet",
                    "Oui, il engage pour toute la vie de l'entreprise et ne se change pas",
                    "Oui, sauf en cas de liquidation ou de cession de l'entreprise"
                ],
                a: 0,
                explication: "Ne bloque pas ton projet sur ce choix : changer de statut est prévu et courant."
            },
            {
                q: "Quel est le principal avantage de la micro-entreprise pour tester une activité ?",
                options: [
                    "Elle permet de déduire tous ses frais",
                    "Création en ligne immédiate, aucun capital, aucun frais si le chiffre d'affaires est nul",
                    "Elle offre la meilleure protection sociale de tous les statuts existants"
                ],
                a: 1,
                explication: "On bascule vers une société quand on approche les plafonds ou quand un associé arrive."
            },
            {
                q: "Quelle est la principale limite de la micro-entreprise ?",
                options: [
                    "Les frais professionnels ne se déduisent pas",
                    "Elle interdit d'avoir des clients à l'étranger",
                    "Elle impose un capital minimum au moment de la création"
                ],
                a: 0,
                explication: "Une activité nécessitant des achats importants y est vite pénalisée."
            },
            // Série 2
            {
                q: "40 000 € de chiffre d'affaires, 22 000 € d'achats de matières. Quel statut privilégier ?",
                options: [
                    "La micro-entreprise, plus simple",
                    "Une société : en micro, les charges se calculent sur les 40 000 € encaissés",
                    "Peu importe, le résultat après impôts est finalement identique"
                ],
                a: 1,
                explication: "Plus tes charges réelles sont élevées, moins la micro-entreprise convient."
            },
            {
                q: "Quel statut facilite le plus l'entrée d'investisseurs au capital ?",
                options: ["La micro-entreprise", "L'EURL, plus souple", "La SASU / SAS"],
                a: 2,
                explication: "Sa grande liberté statutaire en fait le choix habituel des projets destinés à croître."
            },
            {
                q: "Pourquoi ouvrir un compte bancaire dédié dès le premier euro encaissé ?",
                options: [
                    "C'est une obligation légale qui s'impose à tous les statuts d'entreprise sans exception",
                    "Pour obtenir un meilleur taux de crédit",
                    "Mélanger les comptes rend la comptabilité pénible et brouille la vision des résultats"
                ],
                a: 2,
                explication: "Cinq minutes d'ouverture, des heures épargnées ensuite."
            }
        ],

        // ---------------------------------------------------------------
        "le-financement": [
            // Série 1
            {
                q: "Que coûte réellement une levée de fonds ?",
                options: [
                    "Une part du capital et du pouvoir de décision",
                    "Des intérêts élevés, remboursés sur plusieurs années",
                    "Une commission fixe, versée à l'investisseur au départ"
                ],
                a: 0,
                explication: "Tu acquiers des associés qui auront leur mot à dire, y compris sur ton maintien à la direction."
            },
            {
                q: "Qu'est-ce qu'un prêt d'honneur ?",
                options: [
                    "Un prêt personnel à taux zéro, sans garantie, qui compte comme des fonds propres",
                    "Un prêt accordé sans aucun document écrit, uniquement sur la confiance de la banque",
                    "Un prêt réservé aux entreprises déjà rentables"
                ],
                a: 0,
                explication: "Les banques le prennent en compte : il en débloque fréquemment un autre, plus important."
            },
            {
                q: "Quel apport personnel une banque attend-elle généralement ?",
                options: ["5 %", "20 à 30 % du besoin", "50 % au minimum"],
                a: 1,
                explication: "Si tu ne risques rien, pourquoi risquerait-elle ?"
            },
            // Série 2
            {
                q: "Lever des fonds est-il une réussite en soi ?",
                options: [
                    "Oui, c'est la consécration d'un projet et la preuve qu'il tient debout",
                    "Oui, si le montant dépasse 500 000 €",
                    "Non : c'est un engagement à croître très vite, en échange d'une part de l'entreprise"
                ],
                a: 2,
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
                    "La cohérence des hypothèses et ton expérience du secteur",
                    "Le design du business plan",
                    "Le nombre de pages du dossier et le soin de sa présentation"
                ],
                a: 0,
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
                "L'absence de marché : on construit ce que personne n'avait demandé",
                "Le manque de travail du fondateur, qui ne s'y consacre pas assez",
                "Une mauvaise gestion comptable"
            ],
            a: 0,
            explication: "D'où l'ordre recommandé : vérifier que le problème existe avant tout le reste."
        },
        {
            q: "Par quoi commencer un projet d'entreprise ?",
            options: [
                "Le nom, le logo et le statut juridique de l'entreprise que tu comptes créer",
                "La recherche de financement",
                "Vérifier que quelqu'un est prêt à payer pour que le problème disparaisse"
            ],
            a: 2,
            explication: "Tout le reste vient après, et devient beaucoup plus simple une fois cette réponse obtenue."
        },
        {
            q: "Quel document est le plus utile pour piloter la première année ?",
            options: [
                "Un tableau de trésorerie mois par mois",
                "Un compte de résultat prévisionnel sur trois ans",
                "Une étude de marché détaillée et chiffrée"
            ],
            a: 0,
            explication: "Une entreprise rentable sur le papier peut disparaître faute de liquidités."
        },
        // Série 2
        {
            q: "Tu hésites entre créer ta société maintenant ou trouver d'abord un client. Que faire ?",
            options: [
                "Créer la structure : c'est plus sérieux vis-à-vis des clients",
                "Les deux en parallèle",
                "Chercher un premier client payant : cela valide le projet et rassure les financeurs"
            ],
            a: 2,
            explication: "Cela évite parfois de créer une entreprise dont on découvrirait trop tard qu'elle n'a pas de marché."
        },
        {
            q: "Vingt personnes te disent que ton idée est excellente. Que peux-tu en conclure ?",
            options: [
                "Rien : aucune n'a payé",
                "Que le marché est validé",
                "Que tu peux lever des fonds"
            ],
            a: 0,
            explication: "Interroge le passé plutôt que le futur, et cherche des personnes qui n'ont aucune raison de te ménager."
        },
        {
            q: "Quel accompagnement gratuit est le plus sous-utilisé par les créateurs ?",
            options: [
                "Les cabinets de conseil privés spécialisés",
                "Les forums en ligne entre créateurs",
                "Les CCI et chambres de métiers"
            ],
            a: 2,
            explication: "Financé par tes futures cotisations, et souvent accompagné de prêts d'honneur via Initiative France ou Réseau Entreprendre."
        }
    ]
};
