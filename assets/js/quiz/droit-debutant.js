// ===================================
// BANQUE DE QUESTIONS — DROIT & DÉMARCHES, NIVEAU DÉBUTANT
// ===================================
// 6 questions par sous-section : 3 affichées, les 3 autres prennent le relais
// au bout de deux semaines. Les questions de synthèse sont distinctes de
// celles des sous-sections — aucune n'est reprise deux fois.
//
// Droit français. Aucune question ne porte sur un montant ou un seuil :
// ces valeurs changent, et une bonne réponse devenue fausse est pire
// qu'une question absente.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "ou-trouver-le-droit": [
            // Série 1
            {
                q: "Quel est le bon point de départ pour une question de droit courant ?",
                options: [
                    "Un forum spécialisé",
                    "service-public.fr",
                    "Le premier résultat d'une recherche"
                ],
                a: 1,
                explication: "L'explication officielle, en français courant, avec les démarches et les formulaires."
            },
            {
                q: "À quoi sert Légifrance plutôt que service-public.fr ?",
                options: [
                    "À lire le texte de loi lui-même et vérifier qu'il est en vigueur",
                    "À faire ses démarches en ligne",
                    "À poser une question à un juriste"
                ],
                a: 0,
                explication: "Utile quand il faut citer un article, ou s'assurer qu'une règle existe toujours."
            },
            {
                q: "Quel piège guette une recherche juridique en français ?",
                options: [
                    "Les résultats sont trop techniques",
                    "Une bonne partie sont belges, suisses ou québécois",
                    "Il y a trop peu de résultats"
                ],
                a: 1,
                explication: "Les règles y sont souvent proches — et parfois exactement inverses."
            },
            // Série 2
            {
                q: "Comment distinguer une obligation d'un simple usage ?",
                options: [
                    "L'affirmation cite-t-elle un texte qu'on peut vérifier ?",
                    "L'usage est toujours plus ancien",
                    "L'obligation est toujours écrite en majuscules"
                ],
                a: 0,
                explication: "Sans texte, c'est une pratique — parfois excellente, mais qui ne s'impose à personne."
            },
            {
                q: "Une réponse d'IA bien rédigée sur une question de droit :",
                options: [
                    "Peut être parfaitement fausse : la forme n'est pas un indice de fiabilité",
                    "Est fiable si elle est détaillée",
                    "Vaut une source officielle"
                ],
                a: 0,
                explication: "À vérifier sur une source officielle avant d'en tirer une décision."
            },
            {
                q: "Un contrat peut-il retirer un droit accordé par la loi ?",
                options: [
                    "Oui, dès lors qu'on l'a signé",
                    "Non : la clause est sans effet même signée",
                    "Oui, si la clause est écrite en gras"
                ],
                a: 1,
                explication: "Signer n'est pas renoncer. C'est l'objet du niveau avancé."
            }
        ],

        // ---------------------------------------------------------------
        "les-delais-qui-comptent": [
            // Série 1
            {
                q: "Le droit de rétractation s'applique-t-il à un achat en magasin ?",
                options: [
                    "Oui, pendant 14 jours",
                    "Non : il ne vaut qu'à distance",
                    "Oui, si l'article n'a pas été utilisé"
                ],
                a: 1,
                explication: "Un commerçant qui reprend un article acheté sur place fait un geste commercial, pas une obligation."
            },
            {
                q: "Combien de temps dure la garantie légale de conformité ?",
                options: [
                    "14 jours",
                    "1 an",
                    "2 ans"
                ],
                a: 2,
                explication: "Sur tout achat auprès d'un professionnel, en magasin comme en ligne."
            },
            {
                q: "Pendant la période de présomption, qui doit prouver quoi ?",
                options: [
                    "C'est au vendeur de prouver que le bien était conforme",
                    "C'est à l'acheteur de prouver le défaut",
                    "Chacun apporte ses preuves"
                ],
                a: 0,
                explication: "C'est le point le plus utile de tous, et le moins connu."
            },
            // Série 2
            {
                q: "Un vendeur répond que « la garantie constructeur d'un an est finie ». Que répondre ?",
                options: [
                    "Que la garantie légale de conformité est distincte et dure deux ans",
                    "Qu'il faut alors payer la réparation",
                    "Qu'on aurait dû prendre l'extension de garantie"
                ],
                a: 0,
                explication: "La garantie légale est une obligation du vendeur, distincte de celle du fabricant."
            },
            {
                q: "À partir de quand court le délai de rétractation ?",
                options: [
                    "De la commande",
                    "De la réception du bien",
                    "Du paiement"
                ],
                a: 1,
                explication: "Un délai part presque toujours d'un événement précis : réception, ou découverte d'un défaut."
            },
            {
                q: "Quel est le point de départ du délai pour agir en vice caché ?",
                options: [
                    "La date d'achat",
                    "La découverte du vice",
                    "La date de fabrication"
                ],
                a: 1,
                explication: "Deux ans à compter de la découverte, ce qui peut être bien après l'achat."
            }
        ],

        // ---------------------------------------------------------------
        "ecrire-pour-que-ca-compte": [
            // Série 1
            {
                q: "Quelle formulation se traite le mieux dans une réclamation ?",
                options: [
                    "« Un geste commercial »",
                    "« Le remboursement de 149 € »",
                    "« Une compensation à la hauteur du préjudice »"
                ],
                a: 1,
                explication: "Une demande chiffrée se traite ; une demande vague se classe."
            },
            {
                q: "Qu'est-ce qui fait d'un courrier une mise en demeure ?",
                options: [
                    "Un avocat qui le rédige",
                    "Les cinq éléments habituels, et l'emploi des mots « mise en demeure »",
                    "Un timbre fiscal"
                ],
                a: 1,
                explication: "Ce n'est pas un acte solennel : c'est un courrier ordinaire, correctement rédigé."
            },
            {
                q: "Que prouve le recommandé avec accusé de réception, qu'un courriel ne prouve pas toujours ?",
                options: [
                    "Que le destinataire a reçu",
                    "Que vous avez écrit",
                    "La date d'envoi"
                ],
                a: 0,
                explication: "Courriel pour une première réclamation, recommandé dès qu'un délai commence à courir."
            },
            // Série 2
            {
                q: "Pourquoi éviter les adjectifs dans un courrier de réclamation ?",
                options: [
                    "Ils affaiblissent le courrier au lieu de le renforcer",
                    "Ils allongent le délai de traitement",
                    "Ils sont interdits"
                ],
                a: 0,
                explication: "Le service qui reçoit cherche une demande et une date. S'il ne les trouve pas, le dossier attend."
            },
            {
                q: "À quoi sert d'écrire un délai de réponse ?",
                options: [
                    "À faire courir quelque chose ; sous-entendu, il ne fait rien",
                    "À être poli",
                    "À obtenir une réponse plus détaillée"
                ],
                a: 0,
                explication: "Quinze jours est raisonnable et usuel."
            },
            {
                q: "Que demandera en premier un conciliateur ou un juge ?",
                options: [
                    "Avez-vous mis en demeure ?",
                    "Avez-vous un avocat ?",
                    "Avez-vous téléphoné ?"
                ],
                a: 0,
                explication: "C'est la pièce de départ du dossier — et elle coûte quelques euros."
            }
        ],

        // ---------------------------------------------------------------
        "conserver-ses-documents": [
            // Série 1
            {
                q: "Combien de temps garder ses bulletins de paie ?",
                options: [
                    "3 ans",
                    "10 ans",
                    "Sans limite de durée"
                ],
                a: 2,
                explication: "Ils servent au calcul de la retraite, parfois des décennies plus tard."
            },
            {
                q: "Pourquoi conserver les factures de travaux dix ans ?",
                options: [
                    "C'est la durée de la garantie décennale",
                    "C'est une obligation fiscale",
                    "Pour la revente du logement"
                ],
                a: 0,
                explication: "Dix ans pendant lesquels certains désordres restent couverts."
            },
            {
                q: "Sur qui pèse en général la charge de la preuve ?",
                options: [
                    "Sur celui qui réclame",
                    "Sur le professionnel",
                    "Elle est partagée"
                ],
                a: 0,
                explication: "D'où l'importance, prosaïque, de ce qu'on garde."
            },
            // Série 2
            {
                q: "Quelle est la valeur d'une photo lisible d'un document ?",
                options: [
                    "Aucune, seul l'original compte",
                    "La même qu'une photocopie : elle vaut comme commencement de preuve",
                    "Elle vaut original"
                ],
                a: 1,
                explication: "Elle suffit dans l'immense majorité des échanges."
            },
            {
                q: "Quel document rend possible la contestation des retenues sur un dépôt de garantie ?",
                options: [
                    "Le bail",
                    "L'état des lieux d'entrée",
                    "La dernière quittance"
                ],
                a: 1,
                explication: "Sans lui, aucune comparaison n'est possible à la sortie."
            },
            {
                q: "Quel est le défaut d'un carton de dix ans de papiers non triés ?",
                options: [
                    "Il équivaut à l'absence d'archives : rien n'est retrouvable à temps",
                    "Il prend de la place",
                    "Les documents s'abîment"
                ],
                a: 0,
                explication: "Le tri annuel vaut mieux que l'accumulation."
            }
        ]
    },

    // Questions de synthèse — distinctes de celles des sous-sections
    synthese: [
        {
            q: "Quel est le fil conducteur de ce niveau ?",
            options: [
                "Savoir où regarder, combien de temps il reste, et quoi écrire",
                "Connaître le code civil",
                "Trouver un avocat"
            ],
            a: 0,
            explication: "Trois réflexes qui règlent la majorité des difficultés du quotidien."
        },
        {
            q: "Qu'ont en commun une source non datée et un document jeté trop tôt ?",
            options: [
                "Les deux rendent une position indéfendable le jour où il faut la défendre",
                "Les deux sont interdits",
                "Les deux concernent la consommation"
            ],
            a: 0,
            explication: "Un droit qu'on ne peut ni fonder ni prouver n'est pas un droit utilisable."
        },
        {
            q: "Un appareil acheté en ligne il y a trois mois tombe en panne. Quel droit invoquer ?",
            options: [
                "La rétractation",
                "La garantie légale de conformité",
                "Aucun, le délai est passé"
            ],
            a: 1,
            explication: "La rétractation est expirée depuis longtemps ; la garantie court encore près de deux ans."
        },
        {
            q: "Pourquoi le téléphone est-il un mauvais moyen de réclamer ?",
            options: [
                "Il ne laisse aucune trace",
                "Il coûte cher",
                "Les services n'y répondent pas"
            ],
            a: 0,
            explication: "Une réclamation qui compte est écrite, datée et conservée."
        },
        {
            q: "Que reste-t-il si l'on n'applique qu'une seule chose de ce niveau ?",
            options: [
                "Vérifier toute règle lue en ligne sur service-public.fr",
                "Envoyer tout en recommandé",
                "Tout garder indéfiniment"
            ],
            a: 0,
            explication: "Cinq minutes qui évitent la plupart des mauvaises surprises."
        },
        {
            q: "Une règle lue sur un blog date de 2016 et paraît claire. Que faire ?",
            options: [
                "La vérifier : le droit a pu changer depuis, et rien ne le signale au lecteur",
                "S'y fier, la clarté est un bon signe",
                "Chercher un deuxième blog qui dit la même chose"
            ],
            a: 0,
            explication: "Deux sources périmées ne font pas une source à jour."
        }
    ]
};
