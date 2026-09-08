// ===================================
// BANQUE DE QUESTIONS — ENTREPRENEURIAT, NIVEAU AVANCÉ
// ===================================
// 6 questions par sous-section : 3 affichées, les 3 autres prennent le relais
// au bout de deux semaines. Les questions de synthèse sont distinctes de
// celles des sous-sections — aucune n'est reprise deux fois.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "unit-economics": [
            // Série 1
            {
                q: "Sur quoi la valeur vie d'un client se calcule-t-elle ?",
                options: [
                    "Sur le chiffre d'affaires qu'il génère",
                    "Sur la marge qu'il rapporte",
                    "Sur le prix de l'abonnement"
                ],
                a: 1,
                explication: "Calculée sur le chiffre d'affaires, elle est fantaisiste et conduit à surinvestir en acquisition."
            },
            {
                q: "Marge mensuelle 38 €, durée de vie 14 mois, coût d'acquisition 145 € : quel ratio ?",
                options: [
                    "1,4",
                    "3,7",
                    "14"
                ],
                a: 1,
                explication: "Une valeur vie de 532 € pour 145 € dépensés. Un ratio de 3 est généralement considéré comme sain."
            },
            {
                q: "Que signifie un ratio valeur vie / coût d'acquisition inférieur à 1 ?",
                options: [
                    "Que la croissance est trop lente",
                    "Que le prix est trop élevé",
                    "Qu'on paie pour perdre de l'argent sur chaque client"
                ],
                a: 2,
                explication: "Chaque nouveau client aggrave alors la situation."
            },
            // Série 2
            {
                q: "Qu'indique la période de récupération ?",
                options: [
                    "Le délai avant que le client ait remboursé son coût d'acquisition",
                    "La durée moyenne d'un abonnement",
                    "Le temps avant la rentabilité de l'entreprise"
                ],
                a: 0,
                explication: "Elle détermine directement le besoin de trésorerie : plus elle est longue, plus il faut avancer d'argent."
            },
            {
                q: "Faire passer la durée de vie de 14 à 20 mois augmente la valeur vie de :",
                options: [
                    "Environ 10 %",
                    "Environ 43 %",
                    "Environ 100 %"
                ],
                a: 1,
                explication: "Sans dépenser un euro de plus en acquisition. Aucune optimisation publicitaire ne produit un tel effet."
            },
            {
                q: "Que produit la croissance avec des unit economics négatifs ?",
                options: [
                    "Elle amplifie la perte tout en donnant l'apparence du succès",
                    "Elle finit par les corriger par les économies d'échelle",
                    "Elle est sans effet sur la rentabilité"
                ],
                a: 0,
                explication: "Le chiffre d'affaires monte, la trésorerie descend plus vite."
            }
        ],

        // ---------------------------------------------------------------
        "lever-des-fonds": [
            // Série 1
            {
                q: "Que vend réellement un fondateur lors d'une levée ?",
                options: [
                    "Des parts de son entreprise",
                    "Un droit d'usage de sa technologie",
                    "Une promesse de croissance rapide"
                ],
                a: 2,
                explication: "L'investisseur cherche une sortie dans cinq à dix ans avec un multiple important."
            },
            {
                q: "Levée de 300 000 € sur une valorisation avant opération de 1 200 000 € : quelle part cédée ?",
                options: [
                    "25 %",
                    "30 %",
                    "20 %"
                ],
                a: 2,
                explication: "300 000 rapportés à la valorisation après opération, soit 1 500 000 €."
            },
            {
                q: "Une entreprise rentable qui croît de 15 % par an est :",
                options: [
                    "Un excellent investissement pour un fonds",
                    "Une excellente affaire pour son fondateur, et un mauvais investissement pour un fonds",
                    "Un cas classique de levée de fonds"
                ],
                a: 1,
                explication: "Les deux logiques ne se rejoignent pas. C'est pourquoi la levée convient à une minorité de projets."
            },
            // Série 2
            {
                q: "Quelle alternative finance sans diluer et valide la demande ?",
                options: [
                    "Le prêt bancaire",
                    "Les subventions",
                    "Le financement par les clients : acomptes, prévente, abonnements annuels"
                ],
                a: 2,
                explication: "L'argent vient de ceux qui ont un besoin réel, ce qui constitue en soi une validation."
            },
            {
                q: "Que se passe-t-il après trois tours diluant chacun de 20 % ?",
                options: [
                    "Le fondateur conserve 40 %",
                    "Le fondateur passe sous les 52 %, et perd le contrôle des décisions à la majorité",
                    "La dilution s'additionne à 60 %"
                ],
                a: 1,
                explication: "La dilution se multiplie, elle ne s'additionne pas : 0,8 puissance 3."
            },
            {
                q: "Pourquoi ne pas lever avant d'avoir un modèle qui fonctionne ?",
                options: [
                    "L'argent accélère ce qui existe : il finance une perte plus longtemps, avec une pression en plus",
                    "Les investisseurs refuseraient",
                    "La valorisation serait trop basse"
                ],
                a: 0,
                explication: "Beaucoup d'échecs ressemblent exactement à cela."
            }
        ],

        // ---------------------------------------------------------------
        "recruter-et-deleguer": [
            // Série 1
            {
                q: "Un salarié coûte environ combien de fois son salaire brut ?",
                options: [
                    "1,1 fois",
                    "1,45 fois",
                    "2,5 fois"
                ],
                a: 1,
                explication: "Sans compter l'équipement, la formation et le temps d'encadrement des premiers mois."
            },
            {
                q: "Brut 2 600 €, marge de 60 % : quel chiffre d'affaires supplémentaire annuel faut-il ?",
                options: [
                    "Environ 31 000 €",
                    "Environ 75 000 €",
                    "Environ 45 000 €"
                ],
                a: 1,
                explication: "Un coût annuel de 45 240 € divisé par un taux de marge de 60 %."
            },
            {
                q: "Que suppose une délégation réussie ?",
                options: [
                    "Une tâche définie, documentée et mesurable",
                    "Une personne compétente",
                    "Un contrat à durée indéterminée"
                ],
                a: 0,
                explication: "Confier un problème flou — « occupe-toi du marketing » — produit surtout de la frustration."
            },
            // Série 2
            {
                q: "Quel test précède une délégation ?",
                options: [
                    "As-tu le budget ?",
                    "Saurais-tu expliquer en dix minutes ce qu'il faut faire et à quoi ressemble un bon résultat ?",
                    "La personne a-t-elle de l'expérience ?"
                ],
                a: 1,
                explication: "Si non, la tâche n'est pas prête à être déléguée."
            },
            {
                q: "Être débordé est-il un motif de recrutement ?",
                options: [
                    "Oui, c'est le signal principal",
                    "Oui, si la surcharge dure plus de six mois",
                    "Non : sans la marge correspondante, un salarié transforme une surcharge en difficulté de trésorerie"
                ],
                a: 2,
                explication: "Un recrutement se décide sur un chiffre d'affaires supplémentaire identifié."
            },
            {
                q: "Quelles formes d'emploi sont réversibles ?",
                options: [
                    "Le contrat à durée indéterminée",
                    "Aucune",
                    "La prestation ponctuelle, l'alternance, le temps partiel"
                ],
                a: 2,
                explication: "À envisager avant un engagement que l'on ne peut pas défaire."
            }
        ],

        // ---------------------------------------------------------------
        "risques-juridiques": [
            // Série 1
            {
                q: "D'où viennent les difficultés juridiques d'une jeune entreprise ?",
                options: [
                    "De ce qui n'a pas été écrit, à un moment où tout le monde s'entendait bien",
                    "D'une réglementation obscure",
                    "De contrôles administratifs"
                ],
                a: 0,
                explication: "Ces questions sont faciles à trancher au départ et deviennent des conflits ensuite."
            },
            {
                q: "Ce qu'un prestataire produit t'appartient-il automatiquement ?",
                options: [
                    "Non : il faut une cession de droits écrite",
                    "Oui, dès lors que tu l'as payé",
                    "Oui, s'il s'agit d'un travail sur commande"
                ],
                a: 0,
                explication: "Sans elle, le logo, le code ou les textes restent à leur auteur."
            },
            {
                q: "À partir de quand le RGPD s'applique-t-il ?",
                options: [
                    "À partir de 250 salariés",
                    "Uniquement pour les sites marchands",
                    "Dès le premier fichier de clients"
                ],
                a: 2,
                explication: "Registre des traitements, information des personnes, durée de conservation."
            },
            // Série 2
            {
                q: "Que doit prévoir un accord entre associés ?",
                options: [
                    "Qui décide quoi, ce qui se passe si l'un part, comment les parts sont valorisées",
                    "Uniquement la répartition du capital",
                    "Le montant des rémunérations"
                ],
                a: 0,
                explication: "Un désaccord deux ans plus tard, sans rien d'écrit, ne se résout pas à l'amiable — et bloque toute décision."
            },
            {
                q: "Comment comparer le coût d'un pacte d'associés à celui d'un conflit ?",
                options: [
                    "Les deux sont comparables",
                    "Quelques milliers d'euros contre plusieurs dizaines de milliers et deux ans de procédure",
                    "Le pacte coûte plus cher"
                ],
                a: 1,
                explication: "C'est l'une des rares dépenses dont le rendement se mesure en multiples."
            },
            {
                q: "Quelle vérification est gratuite avant de choisir un nom de marque ?",
                options: [
                    "Le dépôt provisoire",
                    "La recherche d'antériorité sur la base de l'INPI",
                    "L'avis d'un avocat"
                ],
                a: 1,
                explication: "Elle prend quelques minutes et évite de devoir tout renommer après un an d'activité."
            }
        ]
    },

    // ===================================================================
    // Questions de synthèse — distinctes de celles des sous-sections
    // ===================================================================
    synthese: [
        // Série 1
        {
            q: "Qu'ont en commun les quatre décisions de ce niveau ?",
            options: [
                "Elles concernent toutes le financement",
                "Elles interviennent la première année",
                "Elles engagent durablement et sont difficiles à défaire"
            ],
            a: 2,
            explication: "Accélérer ou non, avec quel argent, avec qui, et sous quelles contraintes."
        },
        {
            q: "Quel levier améliore le plus les unit economics sans dépenser davantage ?",
            options: [
                "L'optimisation publicitaire",
                "La rétention des clients existants",
                "La baisse des prix"
            ],
            a: 1,
            explication: "Presque toujours plus rentable que le travail sur l'acquisition, et presque toujours moins fait car moins visible."
        },
        {
            q: "Une entreprise a un ratio valeur vie sur coût d'acquisition de 0,8 et veut lever pour croître. Qu'en penser ?",
            options: [
                "Lever reviendrait à financer une perte plus longtemps, avec une pression en plus",
                "C'est le bon moment, la levée financera la croissance",
                "Il faut lever un montant plus important"
            ],
            a: 0,
            explication: "L'argent extérieur accélère ce qui existe. Il ne remplace pas un modèle qui ne fonctionne pas encore."
        },
        // Série 2
        {
            q: "Quel raisonnement s'applique aussi bien au recrutement qu'à la levée de fonds ?",
            options: [
                "Attendre d'être rentable",
                "Chiffrer l'engagement avant de le prendre, et vérifier qu'il est supportable s'il tourne mal",
                "Consulter un professionnel dans tous les cas"
            ],
            a: 1,
            explication: "Écrire le scénario dégradé : s'il est supportable, avancer ; sinon, réduire l'engagement."
        },
        {
            q: "Pourquoi les risques juridiques sont-ils traités dans ce niveau plutôt qu'au démarrage ?",
            options: [
                "Ils naissent des engagements pris : associés, prestataires, clients, salariés",
                "Ils n'existent qu'à partir d'une certaine taille",
                "Ils sont trop techniques pour un débutant"
            ],
            a: 0,
            explication: "Chaque décision engageante de ce niveau crée un besoin d'écrit correspondant."
        },
        {
            q: "Quel est le point commun entre un pacte d'associés absent et des unit economics non calculées ?",
            options: [
                "Les deux relèvent du conseil juridique",
                "Les deux coûtent cher au moment précis où l'on peut le moins se le permettre",
                "Les deux se corrigent facilement"
            ],
            a: 1,
            explication: "L'un éclate quand l'entreprise devient intéressante, l'autre quand elle accélère."
        }
    ]
};
