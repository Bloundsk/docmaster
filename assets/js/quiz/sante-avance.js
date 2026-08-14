// ===================================
// BANQUE DE QUESTIONS — SANTÉ AU TRAVAIL, NIVEAU AVANCÉ
// ===================================
// 6 questions par sous-section : 3 affichées, les 3 autres prennent le relais
// au bout de deux semaines. Les questions de synthèse sont distinctes de
// celles des sous-sections — aucune n'est reprise deux fois.
//
// Aucune question ne porte sur un symptôme ni sur un état de santé : elles
// portent sur des droits, des acteurs et des démarches.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "la-medecine-du-travail": [
            // Série 1
            {
                q: "Le médecin du travail est-il tenu au secret médical ?",
                options: [
                    "Oui, comme tout médecin",
                    "Non, il rend compte à l'employeur",
                    "Seulement si le salarié le demande"
                ],
                a: 0,
                explication: "L'employeur n'a accès qu'aux conclusions sur l'aptitude, jamais au contenu."
            },
            {
                q: "Peut-on demander une visite sans passer par son employeur ?",
                options: [
                    "Oui, à tout moment et sans se justifier",
                    "Non, la demande passe par les ressources humaines",
                    "Oui, mais seulement une fois par an"
                ],
                a: 0,
                explication: "L'employeur ne peut pas s'y opposer ni en connaître le motif."
            },
            {
                q: "Quelle est la portée d'une proposition d'aménagement de poste ?",
                options: [
                    "Elle s'impose à l'employeur, sauf impossibilité justifiée",
                    "C'est un simple avis consultatif",
                    "Elle ne vaut qu'après un arrêt de travail"
                ],
                a: 0,
                explication: "Il peut aussi demander une étude du poste et des conditions de travail."
            },
            // Série 2
            {
                q: "Quel est le rôle du médecin du travail ?",
                options: [
                    "Exclusivement préventif : éviter que le travail n'altère la santé",
                    "Soigner les salariés",
                    "Contrôler les arrêts maladie"
                ],
                a: 0,
                explication: "Il ne soigne pas. C'est une confusion fréquente."
            },
            {
                q: "Qu'est-ce que la visite de préreprise ?",
                options: [
                    "Une visite demandée pendant un arrêt long, pour préparer le retour",
                    "La visite d'embauche",
                    "Un contrôle avant la reprise imposé par l'employeur"
                ],
                a: 0,
                explication: "Aménagement, temps partiel thérapeutique, reclassement : cela se prépare avant."
            },
            {
                q: "La visite à la demande du salarié se déroule quand ?",
                options: [
                    "Sur le temps de travail",
                    "Sur les congés",
                    "En dehors des heures"
                ],
                a: 0,
                explication: "Elle ne coûte ni argent ni jours de congé."
            }
        ],

        // ---------------------------------------------------------------
        "les-obligations-de-lemployeur": [
            // Série 1
            {
                q: "Sur quoi porte l'obligation de sécurité de l'employeur ?",
                options: [
                    "Sur la prévention, pas seulement sur la réparation",
                    "Sur l'indemnisation des accidents",
                    "Sur la fourniture d'équipements"
                ],
                a: 0,
                explication: "Évaluer les risques, les éviter à la source, adapter le travail à l'homme."
            },
            {
                q: "La santé mentale est-elle couverte par cette obligation ?",
                options: [
                    "Oui, la mention est explicite dans le code du travail",
                    "Non, seulement la santé physique",
                    "Seulement dans les grandes entreprises"
                ],
                a: 0,
                explication: "Le document unique doit d'ailleurs inclure les risques psychosociaux."
            },
            {
                q: "À partir de combien de salariés le document unique est-il obligatoire ?",
                options: [
                    "Dès le premier salarié",
                    "À partir de onze",
                    "À partir de cinquante"
                ],
                a: 0,
                explication: "Il est accessible aux salariés, et le demander est légitime."
            },
            // Série 2
            {
                q: "Quelles sont les deux conditions du droit de retrait ?",
                options: [
                    "Un danger grave et imminent, et un retrait qui ne met pas autrui en danger",
                    "Un accord du CSE et un écrit préalable",
                    "Une autorisation de l'inspection du travail"
                ],
                a: 0,
                explication: "Aucune sanction ni retenue de salaire n'est possible pour ce seul motif."
            },
            {
                q: "Que faire en l'absence de CSE dans l'entreprise ?",
                options: [
                    "Le service de santé au travail et l'inspection du travail restent joignables directement",
                    "Rien n'est possible sans représentants",
                    "Il faut d'abord en faire élire un"
                ],
                a: 0,
                explication: "L'obligation de sécurité existe quelle que soit la taille de l'entreprise."
            },
            {
                q: "La saisine de l'inspection du travail est :",
                options: [
                    "Gratuite, et confidentielle sur demande",
                    "Payante et publique",
                    "Réservée aux représentants du personnel"
                ],
                a: 0,
                explication: "C'est le recours quand rien ne bouge en interne."
            }
        ],

        // ---------------------------------------------------------------
        "lepuisement-professionnel": [
            // Série 1
            {
                q: "Quelles sont les trois dimensions décrites dans la littérature ?",
                options: [
                    "Épuisement, distance, perte du sentiment d'efficacité",
                    "Fatigue, stress, dépression",
                    "Surcharge, isolement, démotivation"
                ],
                a: 0,
                explication: "Elles se combinent, et servent à nommer plutôt qu'à conclure."
            },
            {
                q: "L'épuisement professionnel figure-t-il comme maladie autonome dans les classifications internationales ?",
                options: [
                    "Non : il y est décrit comme un phénomène lié au travail",
                    "Oui, depuis 2019",
                    "Oui, comme trouble anxieux"
                ],
                a: 0,
                explication: "Ce qui n'enlève rien à sa réalité ni à sa gravité."
            },
            {
                q: "Pourquoi aucun test en ligne ne convient-il ?",
                options: [
                    "Un score sans cadre peut rassurer à tort ou inquiéter durablement",
                    "Parce que les questionnaires n'existent pas",
                    "Parce que c'est interdit"
                ],
                a: 0,
                explication: "Des questionnaires validés existent, mais dans un cadre, avec un entretien et une interprétation."
            },
            // Série 2
            {
                q: "Qu'est-ce qui distingue l'épuisement d'une période difficile ?",
                options: [
                    "La durée, l'absence de récupération, et l'installation",
                    "L'intensité de la charge",
                    "Le secteur d'activité"
                ],
                a: 0,
                explication: "Ce n'est plus une réaction à un événement, c'est devenu l'état de base."
            },
            {
                q: "Quel signe revient constamment dans les témoignages ?",
                options: [
                    "L'entourage l'a remarqué avant la personne concernée",
                    "Une douleur physique précoce",
                    "Une baisse visible des résultats"
                ],
                a: 0,
                explication: "L'adaptation progressive efface les points de comparaison."
            },
            {
                q: "Traiter la question comme un défaut de résistance personnelle, quel est le problème ?",
                options: [
                    "Cela laisse la cause en place et fait porter à la personne ce qui relève de l'organisation",
                    "Cela n'a aucune conséquence",
                    "Cela retarde le diagnostic médical"
                ],
                a: 0,
                explication: "Surcharge durable, absence de marge, manque de reconnaissance, conflits de valeurs : ce sont des facteurs documentés."
            }
        ],

        // ---------------------------------------------------------------
        "les-situations-graves": [
            // Série 1
            {
                q: "L'intention de nuire est-elle nécessaire pour qualifier un harcèlement moral ?",
                options: [
                    "Non : l'effet suffit",
                    "Oui, elle doit être démontrée",
                    "Oui, sauf entre collègues"
                ],
                a: 0,
                explication: "Le lien hiérarchique n'est pas nécessaire non plus."
            },
            {
                q: "Quelle est la première démarche à engager ?",
                options: [
                    "Écrire les faits, datés, au fur et à mesure",
                    "Saisir le conseil de prud'hommes",
                    "En parler à ses collègues"
                ],
                a: 0,
                explication: "C'est la première chose que demanderont tous les interlocuteurs, et la plus difficile à reconstituer après."
            },
            {
                q: "Que déclenche une alerte écrite à l'employeur ?",
                options: [
                    "Son obligation d'agir",
                    "Une enquête automatique de l'inspection du travail",
                    "La suspension du contrat"
                ],
                a: 0,
                explication: "Un employeur informé qui ne fait rien engage sa responsabilité."
            },
            // Série 2
            {
                q: "Comment la charge de la preuve est-elle organisée en matière de harcèlement ?",
                options: [
                    "Le salarié présente des éléments, l'employeur doit démontrer qu'ils s'expliquent autrement",
                    "Le salarié doit tout prouver",
                    "L'employeur doit tout prouver seul"
                ],
                a: 0,
                explication: "C'est une différence considérable avec le régime ordinaire."
            },
            {
                q: "Un salarié qui relate des faits de harcèlement peut-il être sanctionné pour ce motif ?",
                options: [
                    "Non : un licenciement fondé là-dessus est nul",
                    "Oui, si les faits ne sont pas établis",
                    "Oui, en cas de dénonciation publique"
                ],
                a: 0,
                explication: "La protection couvre aussi les témoins."
            },
            {
                q: "Faut-il être certain de la qualification juridique avant d'alerter ?",
                options: [
                    "Non : décrire des faits datés à un interlocuteur compétent suffit",
                    "Oui, sinon l'alerte est irrecevable",
                    "Oui, il faut citer l'article applicable"
                ],
                a: 0,
                explication: "Ce n'est pas au salarié de qualifier la situation."
            }
        ]
    },

    // Questions de synthèse — distinctes de celles des sous-sections
    synthese: [
        {
            q: "Quel est le fil conducteur de ce niveau ?",
            options: [
                "Ce qui ne se règle pas seul : les acteurs, les obligations, les recours",
                "Les techniques de gestion du stress",
                "L'aménagement du poste de travail"
            ],
            a: 0,
            explication: "C'est le niveau le plus utile à lire avant d'en avoir besoin."
        },
        {
            q: "Qu'ont en commun la visite à la demande et l'écrit daté des faits ?",
            options: [
                "Les deux sont gratuits, à l'initiative du salarié, et très peu utilisés",
                "Les deux demandent l'accord de l'employeur",
                "Les deux supposent un avocat"
            ],
            a: 0,
            explication: "Et les deux rendent possibles toutes les suites."
        },
        {
            q: "Pourquoi ce guide ne propose-t-il aucun test d'épuisement ?",
            options: [
                "Un score rendu par une page web peut rassurer à tort ou inquiéter durablement",
                "Parce que ces tests sont payants",
                "Parce qu'ils sont réservés aux médecins du travail"
            ],
            a: 0,
            explication: "Aucune des deux erreurs n'est acceptable."
        },
        {
            q: "Un employeur affirme n'avoir aucune obligation faute de CSE. Que répondre ?",
            options: [
                "L'obligation de sécurité et le document unique existent quelle que soit la taille",
                "C'est exact en dessous de onze salariés",
                "Cela dépend de la convention collective"
            ],
            a: 0,
            explication: "Le document unique est obligatoire dès le premier salarié."
        },
        {
            q: "Quelle démarche préparer avant d'en avoir besoin ?",
            options: [
                "Noter les coordonnées de son service de santé au travail",
                "Rédiger une lettre type de démission",
                "Constituer un dossier prud'homal"
            ],
            a: 0,
            explication: "Ce n'est pas au moment où l'on en a besoin qu'on a l'énergie de les chercher."
        },
        {
            q: "Que reste-t-il si l'on ne retient qu'une chose de ce niveau ?",
            options: [
                "La visite au médecin du travail est un droit, confidentielle, sans passer par l'employeur",
                "Il faut saisir l'inspection du travail au moindre problème",
                "Le droit de retrait s'exerce librement"
            ],
            a: 0,
            explication: "C'est le levier le plus puissant du domaine, et l'un des plus mal compris."
        }
    ]
};
