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
                    "Qu'on paie pour perdre de l'argent sur chaque client",
                    "Que le prix est trop élevé"
                ],
                a: 1,
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
                    "Elle finit par les corriger par les économies d'échelle",
                    "Elle amplifie la perte tout en donnant l'apparence du succès",
                    "Elle est sans effet sur la rentabilité"
                ],
                a: 1,
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
                    "Une promesse de croissance rapide",
                    "Un droit d'usage de sa technologie"
                ],
                a: 1,
                explication: "L'investisseur cherche une sortie dans cinq à dix ans avec un multiple important."
            },
            {
                q: "Levée de 300 000 € sur une valorisation avant opération de 1 200 000 € : quelle part cédée ?",
                options: [
                    "25 %",
                    "20 %",
                    "30 %"
                ],
                a: 1,
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
                    "Le financement par les clients : acomptes, prévente, abonnements annuels",
                    "Les subventions"
                ],
                a: 1,
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
                    "Les investisseurs refuseraient",
                    "L'argent accélère ce qui existe : il finance une perte plus longtemps, avec une pression en plus",
                    "La valorisation serait trop basse"
                ],
                a: 1,
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
                    "Une personne compétente",
                    "Une tâche définie, documentée et mesurable",
                    "Un contrat à durée indéterminée"
                ],
                a: 1,
                explication: "Confier un problème flou — « occupe-toi du marketing » — produit surtout de la frustration."
            },
            // Série 2
            {
                q: "Quel test précède une délégation ?",
                options: [
                    "Sauriez-vous expliquer en dix minutes ce qu'il faut faire et à quoi ressemble un bon résultat ?",
                    "Avez-vous le budget ?",
                    "La personne a-t-elle de l'expérience ?"
                ],
                a: 0,
                explication: "Si non, la tâche n'est pas prête à être déléguée."
            },
            {
                q: "Être débordé est-il un motif de recrutement ?",
                options: [
                    "Oui, c'est le signal principal",
                    "Non : sans la marge correspondante, un salarié transforme une surcharge en difficulté de trésorerie",
                    "Oui, si la surcharge dure plus de six mois"
                ],
                a: 1,
                explication: "Un recrutement se décide sur un chiffre d'affaires supplémentaire identifié."
            },
            {
                q: "Quelles formes d'emploi sont réversibles ?",
                options: [
                    "Le contrat à durée indéterminée",
                    "La prestation ponctuelle, l'alternance, le temps partiel",
                    "Aucune"
                ],
                a: 1,
                explication: "À envisager avant un engagement que l'on ne peut pas défaire."
            }
        ],

        // ---------------------------------------------------------------
        "risques-juridiques": [
            // Série 1
            {
                q: "D'où viennent les difficultés juridiques d'une jeune entreprise ?",
                options: [
                    "D'une réglementation obscure",
                    "De ce qui n'a pas été écrit, à un moment où tout le monde s'entendait bien",
                    "De contrôles administratifs"
                ],
                a: 1,
                explication: "Ces questions sont faciles à trancher au départ et deviennent des conflits ensuite."
            },
            {
                q: "Ce qu'un prestataire produit vous appartient-il automatiquement ?",
                options: [
                    "Oui, dès lors que vous l'avez payé",
                    "Non : il faut une cession de droits écrite",
                    "Oui, s'il s'agit d'un travail sur commande"
                ],
                a: 1,
                explication: "Sans elle, le logo, le code ou les textes restent à leur auteur."
            },
            {
                q: "À partir de quand le RGPD s'applique-t-il ?",
                options: [
                    "Dès le premier fichier de clients",
                    "À partir de 250 salariés",
                    "Uniquement pour les sites marchands"
                ],
                a: 0,
                explication: "Registre des traitements, information des personnes, durée de conservation."
            },
            // Série 2
            {
                q: "Que doit prévoir un accord entre associés ?",
                options: [
                    "Uniquement la répartition du capital",
                    "Qui décide quoi, ce qui se passe si l'un part, comment les parts sont valorisées",
                    "Le montant des rémunérations"
                ],
                a: 1,
                explication: "Un désaccord deux ans plus tard, sans rien d'écrit, ne se résout pas à l'amiable — et bloque toute décision."
            },
            {
                q: "Comment comparer le coût d'un pacte d'associés à celui d'un conflit ?",
                options: [
                    "Quelques milliers d'euros contre plusieurs dizaines de milliers et deux ans de procédure",
                    "Les deux sont comparables",
                    "Le pacte coûte plus cher"
                ],
                a: 0,
                explication: "C'est l'une des rares dépenses dont le rendement se mesure en multiples."
            },
            {
                q: "Quelle vérification est gratuite avant de choisir un nom de marque ?",
                options: [
                    "La recherche d'antériorité sur la base de l'INPI",
                    "Le dépôt provisoire",
                    "L'avis d'un avocat"
                ],
                a: 0,
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
                "Elles engagent durablement et sont difficiles à défaire",
                "Elles concernent toutes le financement",
                "Elles interviennent la première année"
            ],
            a: 0,
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
                "C'est le bon moment, la levée financera la croissance",
                "Lever reviendrait à financer une perte plus longtemps, avec une pression en plus",
                "Il faut lever un montant plus important"
            ],
            a: 1,
            explication: "L'argent extérieur accélère ce qui existe. Il ne remplace pas un modèle qui ne fonctionne pas encore."
        },
        // Série 2
        {
            q: "Quel raisonnement s'applique aussi bien au recrutement qu'à la levée de fonds ?",
            options: [
                "Chiffrer l'engagement avant de le prendre, et vérifier qu'il est supportable s'il tourne mal",
                "Attendre d'être rentable",
                "Consulter un professionnel dans tous les cas"
            ],
            a: 0,
            explication: "Écrire le scénario dégradé : s'il est supportable, avancer ; sinon, réduire l'engagement."
        },
        {
            q: "Pourquoi les risques juridiques sont-ils traités dans ce niveau plutôt qu'au démarrage ?",
            options: [
                "Ils n'existent qu'à partir d'une certaine taille",
                "Ils naissent des engagements pris : associés, prestataires, clients, salariés",
                "Ils sont trop techniques pour un débutant"
            ],
            a: 1,
            explication: "Chaque décision engageante de ce niveau crée un besoin d'écrit correspondant."
        },
        {
            q: "Quel est le point commun entre un pacte d'associés absent et des unit economics non calculées ?",
            options: [
                "Les deux coûtent cher au moment précis où l'on peut le moins se le permettre",
                "Les deux relèvent du conseil juridique",
                "Les deux se corrigent facilement"
            ],
            a: 0,
            explication: "L'un éclate quand l'entreprise devient intéressante, l'autre quand elle accélère."
        }
    ]
};
