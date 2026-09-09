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
                    "Non, il rend compte à l'employeur",
                    "Seulement si le salarié le demande",
                    "Oui, comme tout médecin"
                ],
                a: 2,
                explication: "L'employeur n'a accès qu'aux conclusions sur l'aptitude, jamais au contenu."
            },
            {
                q: "Peut-on demander une visite sans passer par son employeur ?",
                options: [
                    "Oui, à tout moment et sans se justifier",
                    "Non, la demande passe par les ressources humaines",
                    "Oui, mais seulement une seule fois par an"
                ],
                a: 0,
                explication: "L'employeur ne peut pas s'y opposer ni en connaître le motif."
            },
            {
                q: "Quelle est la portée d'une proposition d'aménagement de poste ?",
                options: [
                    "C'est un simple avis consultatif",
                    "Elle ne vaut vraiment qu'après un arrêt de travail de longue durée",
                    "Elle s'impose à l'employeur, sauf impossibilité justifiée"
                ],
                a: 2,
                explication: "Il peut aussi demander une étude du poste et des conditions de travail."
            },
            // Série 2
            {
                q: "Quel est le rôle du médecin du travail ?",
                options: [
                    "Soigner les salariés",
                    "Exclusivement préventif : éviter que le travail n'altère la santé",
                    "Contrôler les arrêts maladie déclarés par les salariés de l'entreprise"
                ],
                a: 1,
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
                    "Sur les congés payés du salarié",
                    "En dehors des heures de travail"
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
                    "Sur l'indemnisation des accidents déjà survenus au travail",
                    "Sur la prévention, pas seulement sur la réparation",
                    "Sur la fourniture des équipements de protection nécessaires"
                ],
                a: 1,
                explication: "Évaluer les risques, les éviter à la source, adapter le travail à l'homme."
            },
            {
                q: "La santé mentale est-elle couverte par cette obligation ?",
                options: [
                    "Non, seulement la santé physique",
                    "Seulement dans les grandes entreprises, au-delà d'un seuil",
                    "Oui, la mention est explicite dans le code du travail"
                ],
                a: 2,
                explication: "Le document unique doit d'ailleurs inclure les risques psychosociaux."
            },
            {
                q: "À partir de combien de salariés le document unique est-il obligatoire ?",
                options: [
                    "À partir de onze salariés",
                    "À partir de cinquante salariés",
                    "Dès le premier salarié"
                ],
                a: 2,
                explication: "Il est accessible aux salariés, et le demander est légitime."
            },
            // Série 2
            {
                q: "Quelles sont les deux conditions du droit de retrait ?",
                options: [
                    "Un accord du CSE et un écrit préalable",
                    "Un danger grave et imminent, et un retrait qui ne met pas autrui en danger",
                    "Une autorisation de l'inspection du travail"
                ],
                a: 1,
                explication: "Aucune sanction ni retenue de salaire n'est possible pour ce seul motif."
            },
            {
                q: "Que faire en l'absence de CSE dans l'entreprise ?",
                options: [
                    "Rien n'est possible sans représentants",
                    "Il faut d'abord en faire élire un",
                    "Le service de santé au travail et l'inspection du travail restent joignables directement"
                ],
                a: 2,
                explication: "L'obligation de sécurité existe quelle que soit la taille de l'entreprise."
            },
            {
                q: "La saisine de l'inspection du travail est :",
                options: [
                    "Gratuite, et confidentielle sur demande",
                    "Payante, et rendue publique dans l'entreprise",
                    "Réservée aux seuls représentants du personnel"
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
                    "Surcharge de travail, isolement et démotivation durable"
                ],
                a: 0,
                explication: "Elles se combinent, et servent à nommer plutôt qu'à conclure."
            },
            {
                q: "L'épuisement professionnel figure-t-il comme maladie autonome dans les classifications internationales ?",
                options: [
                    "Oui, depuis 2019",
                    "Non : il y est décrit comme un phénomène lié au travail",
                    "Oui, il y figure comme un trouble anxieux bien caractérisé"
                ],
                a: 1,
                explication: "Ce qui n'enlève rien à sa réalité ni à sa gravité."
            },
            {
                q: "Pourquoi aucun test en ligne ne convient-il ?",
                options: [
                    "Parce que les questionnaires sérieux n'existent tout simplement pas",
                    "Un score sans cadre peut rassurer à tort ou inquiéter durablement",
                    "Parce que c'est interdit"
                ],
                a: 1,
                explication: "Des questionnaires validés existent, mais dans un cadre, avec un entretien et une interprétation."
            },
            // Série 2
            {
                q: "Qu'est-ce qui distingue l'épuisement d'une période difficile ?",
                options: [
                    "L'intensité de la charge de travail qui est supportée chaque jour",
                    "Le secteur d'activité",
                    "La durée, l'absence de récupération, et l'installation"
                ],
                a: 2,
                explication: "Ce n'est plus une réaction à un événement, c'est devenu l'état de base."
            },
            {
                q: "Quel signe revient constamment dans les témoignages ?",
                options: [
                    "L'entourage l'a remarqué avant la personne concernée",
                    "Une douleur physique précoce",
                    "Une baisse tout à fait visible des résultats obtenus"
                ],
                a: 0,
                explication: "L'adaptation progressive efface les points de comparaison."
            },
            {
                q: "Traiter la question comme un défaut de résistance personnelle, quel est le problème ?",
                options: [
                    "Cela n'a aucune conséquence",
                    "Cela laisse la cause en place et fait porter à la personne ce qui relève de l'organisation",
                    "Cela retarde le diagnostic médical"
                ],
                a: 1,
                explication: "Surcharge durable, absence de marge, manque de reconnaissance, conflits de valeurs : ce sont des facteurs documentés."
            }
        ],

        // ---------------------------------------------------------------
        "les-situations-graves": [
            // Série 1
            {
                q: "L'intention de nuire est-elle nécessaire pour qualifier un harcèlement moral ?",
                options: [
                    "Oui, elle doit être démontrée",
                    "Non : l'effet suffit",
                    "Oui, sauf entre collègues"
                ],
                a: 1,
                explication: "Le lien hiérarchique n'est pas nécessaire non plus."
            },
            {
                q: "Quelle est la première démarche à engager ?",
                options: [
                    "Saisir directement le conseil de prud'hommes",
                    "En parler d'abord à ses collègues les plus proches",
                    "Écrire les faits, datés, au fur et à mesure"
                ],
                a: 2,
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
                    "Le salarié doit tout prouver",
                    "Le salarié présente des éléments, l'employeur doit démontrer qu'ils s'expliquent autrement",
                    "L'employeur doit tout prouver seul"
                ],
                a: 1,
                explication: "C'est une différence considérable avec le régime ordinaire."
            },
            {
                q: "Un salarié qui relate des faits de harcèlement peut-il être sanctionné pour ce motif ?",
                options: [
                    "Oui, si les faits rapportés ne sont pas établis",
                    "Oui, en cas de dénonciation publique des faits",
                    "Non : un licenciement fondé là-dessus est nul"
                ],
                a: 2,
                explication: "La protection couvre aussi les témoins."
            },
            {
                q: "Faut-il être certain de la qualification juridique avant d'alerter ?",
                options: [
                    "Non : décrire des faits datés à un interlocuteur compétent suffit",
                    "Oui, sinon l'alerte est irrecevable",
                    "Oui, il faut impérativement citer l'article du code applicable au cas"
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
                "Les techniques de gestion du stress",
                "Ce qui ne se règle pas seul : les acteurs, les obligations, les recours",
                "L'aménagement du poste de travail"
            ],
            a: 1,
            explication: "C'est le niveau le plus utile à lire avant d'en avoir besoin."
        },
        {
            q: "Qu'ont en commun la visite à la demande et l'écrit daté des faits ?",
            options: [
                "Les deux demandent l'accord de l'employeur",
                "Les deux sont gratuits, à l'initiative du salarié, et très peu utilisés",
                "Les deux supposent un avocat"
            ],
            a: 1,
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
                "Rédiger à l'avance une lettre type de démission, à tout hasard",
                "Constituer un dossier prud'homal",
                "Noter les coordonnées de son service de santé au travail"
            ],
            a: 2,
            explication: "Ce n'est pas au moment où l'on en a besoin qu'on a l'énergie de les chercher."
        },
        {
            q: "Que reste-t-il si l'on ne retient qu'une chose de ce niveau ?",
            options: [
                "Il faut saisir l'inspection du travail au moindre problème",
                "Le droit de retrait s'exerce librement",
                "La visite au médecin du travail est un droit, confidentielle, sans passer par l'employeur"
            ],
            a: 2,
            explication: "C'est le levier le plus puissant du domaine, et l'un des plus mal compris."
        }
    ]
};
