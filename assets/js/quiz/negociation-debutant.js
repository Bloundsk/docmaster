// ===================================
// BANQUE DE QUESTIONS — NÉGOCIATION & COMMUNICATION, NIVEAU DÉBUTANT
// ===================================
// 6 questions par sous-section : 3 affichées, les 3 autres prennent le relais
// au bout de deux semaines. Les questions de synthèse sont distinctes de
// celles des sous-sections — aucune n'est reprise deux fois.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "preparer-avant-de-parler": [
            // Série 1
            {
                q: "Quelle est la question la plus négligée avant une négociation ?",
                options: [
                    "Que fais-je si je ne l'obtiens pas ?",
                    "Quel est mon meilleur argument ?",
                    "Comment vais-je commencer ?"
                ],
                a: 0,
                explication: "Elle détermine votre position réelle, pas votre position affichée."
            },
            {
                q: "Que vaut une demande formulée comme « être mieux reconnu » ?",
                options: [
                    "Elle ne se négocie pas : elle n'est pas vérifiable",
                    "Elle laisse une marge utile",
                    "Elle est plus diplomate"
                ],
                a: 0,
                explication: "« Une revalorisation de 5 % au 1er janvier » se discute."
            },
            {
                q: "Que faire du point faible de son propre dossier ?",
                options: [
                    "L'énoncer soi-même, ou préparer la réponse",
                    "Espérer qu'il passe inaperçu",
                    "Le nier s'il est soulevé"
                ],
                a: 0,
                explication: "L'autre le trouvera de toute façon : mieux vaut l'avoir vu venir."
            },
            // Série 2
            {
                q: "Pourquoi identifier ce à quoi on est prêt à renoncer ?",
                options: [
                    "Une demande sans contrepartie laisse l'autre tout refuser ou tout accorder",
                    "Pour paraître raisonnable",
                    "Pour raccourcir la discussion"
                ],
                a: 0,
                explication: "C'est la deuxième des quatre questions de préparation."
            },
            {
                q: "Que signifie « ne pas subir le cadre » ?",
                options: [
                    "Choisir le moment et le canal plutôt que de les accepter",
                    "Refuser les réunions imposées",
                    "Imposer son ordre du jour"
                ],
                a: 0,
                explication: "Une demande glissée en fin de réunion part avec un handicap sans rapport avec son contenu."
            },
            {
                q: "Quelle est la partie la moins utile d'une préparation classique ?",
                options: [
                    "Lister ce qu'on va dire",
                    "Estimer ce que cherche l'autre",
                    "Chiffrer son objectif"
                ],
                a: 0,
                explication: "Elle suppose que l'échange consiste à convaincre par accumulation."
            }
        ],

        // ---------------------------------------------------------------
        "ecouter-vraiment": [
            // Série 1
            {
                q: "À quoi sert principalement la reformulation ?",
                options: [
                    "À vérifier qu'on a compris — et l'autre corrige souvent",
                    "À montrer qu'on est attentif",
                    "À gagner du temps"
                ],
                a: 0,
                explication: "On découvre alors qu'on discutait depuis dix minutes de deux choses différentes."
            },
            {
                q: "Que produit un silence de trois secondes après une réponse ?",
                options: [
                    "Très souvent une seconde réponse, plus précise",
                    "Un malaise inutile",
                    "Une reprise du sujet précédent"
                ],
                a: 0,
                explication: "Il est désagréable à tenir : c'est pour cela qu'il fonctionne, et qu'il est si peu utilisé."
            },
            {
                q: "Quelle est la question la plus rentable du domaine ?",
                options: [
                    "« Pourquoi est-ce important pour vous ? »",
                    "« Êtes-vous d'accord ? »",
                    "« Quel est votre budget ? »"
                ],
                a: 0,
                explication: "Elle fait passer de ce que l'autre demande à la raison pour laquelle il le demande."
            },
            // Série 2
            {
                q: "Quel remède mécanique empêche de préparer sa réponse pendant que l'autre parle ?",
                options: [
                    "Prendre des notes de ce qu'il dit",
                    "Se répéter d'écouter",
                    "Attendre plus longtemps avant de répondre"
                ],
                a: 0,
                explication: "La main occupée à transcrire ne peut pas rédiger la réponse en même temps."
            },
            {
                q: "Quelle différence entre une question ouverte et une question fermée ?",
                options: [
                    "L'ouverte appelle une explication, la fermée un mot",
                    "L'ouverte est plus polie",
                    "La fermée est plus efficace"
                ],
                a: 0,
                explication: "Et c'est l'explication qui est utile."
            },
            {
                q: "Écouter est présenté comme une qualité morale. Qu'est-ce d'abord ?",
                options: [
                    "Une technique de collecte d'information",
                    "Une marque de respect",
                    "Une façon de gagner du temps"
                ],
                a: 0,
                explication: "La plupart des informations utiles sont dites, et ne sont pas entendues."
            }
        ],

        // ---------------------------------------------------------------
        "structurer-un-message": [
            // Série 1
            {
                q: "Où placer la conclusion d'un message ?",
                options: [
                    "Au début",
                    "À la fin, après l'argumentation",
                    "Au milieu"
                ],
                a: 0,
                explication: "La structure contexte-analyse-conclusion est celle de la découverte, pas de la compréhension."
            },
            {
                q: "Sur quoi portaient réellement les travaux de Mehrabian ?",
                options: [
                    "Des mots isolés, prononcés avec un ton contredisant leur sens, pour mesurer une attitude",
                    "La communication professionnelle en général",
                    "Les présentations orales"
                ],
                a: 0,
                explication: "Mehrabian lui-même a répété que la généralisation était fausse."
            },
            {
                q: "Quelle conséquence pratique tirer de cette correction ?",
                options: [
                    "Le contenu compte, et il compte beaucoup",
                    "Il faut travailler sa gestuelle avant tout",
                    "Le ton prime toujours sur les mots"
                ],
                a: 0,
                explication: "C'est l'inverse de ce qu'on tire habituellement du chiffre de 93 %."
            },
            // Série 2
            {
                q: "Quel effet secondaire a le fait de commencer par la conclusion ?",
                options: [
                    "Cela oblige à savoir ce qu'on veut dire",
                    "Cela raccourcit le message",
                    "Cela évite les questions"
                ],
                a: 0,
                explication: "Beaucoup d'exposés qui finissent par une conclusion floue n'en avaient pas."
            },
            {
                q: "Quel repère signale une phrase trop longue ?",
                options: [
                    "Elle ne peut pas être dite d'un seul souffle",
                    "Elle dépasse trente mots",
                    "Elle contient plus de deux virgules"
                ],
                a: 0,
                explication: "Elle contient alors probablement deux idées."
            },
            {
                q: "Un message bien tourné qui n'obtient rien : quelle cause probable ?",
                options: [
                    "La demande y est diluée par politesse ou reportée à la fin",
                    "Il est trop court",
                    "Le ton est trop direct"
                ],
                a: 0,
                explication: "La politesse tient en une formule ; la demande doit être en évidence."
            }
        ],

        // ---------------------------------------------------------------
        "ecrire-pour-etre-lu": [
            // Série 1
            {
                q: "Que doit dire un bon objet de courriel ?",
                options: [
                    "De quoi il s'agit ET ce qui est attendu",
                    "Le sujet en un mot",
                    "Le degré d'urgence"
                ],
                a: 0,
                explication: "« Budget 2027 — votre validation avant vendredi » se traite ; « Point budget » se reporte."
            },
            {
                q: "Un message de 400 mots envoyé à 8 personnes mobilise combien de temps ?",
                options: [
                    "Environ 13 minutes",
                    "Environ 1,6 minute",
                    "Environ 3 minutes"
                ],
                a: 0,
                explication: "Ramené à 200 mots : 6,4 minutes. Sept minutes récupérées, à chaque message."
            },
            {
                q: "À partir de quelle longueur la plupart des lecteurs parcourent-ils au lieu de lire ?",
                options: [
                    "Environ 150 mots",
                    "Environ 500 mots",
                    "Environ 1 000 mots"
                ],
                a: 0,
                explication: "Un message de 400 mots n'est donc pas lu deux fois plus qu'un de 200 : il est lu moins bien."
            },
            // Série 2
            {
                q: "Pourquoi un message à six destinataires en « À » n'obtient-il rien ?",
                options: [
                    "Chacun suppose qu'un autre s'en charge",
                    "Il est filtré comme un envoi de masse",
                    "Il arrive plus tard"
                ],
                a: 0,
                explication: "Une seule personne en « À », les autres en copie."
            },
            {
                q: "Quel repère signale qu'un sujet ne devait pas être écrit ?",
                options: [
                    "Relire son message une troisième fois pour ajuster le ton",
                    "Dépasser une page",
                    "Devoir joindre un document"
                ],
                a: 0,
                explication: "L'écrit sert ensuite, pour acter ce qui a été dit."
            },
            {
                q: "Où placer le contexte dans un message professionnel ?",
                options: [
                    "Après la demande",
                    "Avant la demande",
                    "En pièce jointe"
                ],
                a: 0,
                explication: "Le lecteur cherche ce qu'on lui demande et pour quand. Tout ce qui les précède retarde la réponse."
            }
        ]
    },

    // Questions de synthèse — distinctes de celles des sous-sections
    synthese: [
        {
            q: "Quel est le fil conducteur de ce niveau ?",
            options: [
                "Se préparer, écouter et structurer — avant toute technique de négociation",
                "Apprendre à convaincre",
                "Maîtriser son langage corporel"
            ],
            a: 0,
            explication: "Le niveau intermédiaire porte sur la négociation ; celui-ci pose ce sans quoi elle ne sert à rien."
        },
        {
            q: "Qu'ont en commun la reformulation et la conclusion placée au début ?",
            options: [
                "Les deux évitent qu'on parle de deux choses différentes",
                "Les deux raccourcissent l'échange",
                "Les deux relèvent de la politesse"
            ],
            a: 0,
            explication: "L'une vérifie la compréhension, l'autre la garantit d'emblée."
        },
        {
            q: "Quelqu'un affirme que « le non-verbal, c'est 93 % du message ». Que répondre ?",
            options: [
                "L'étude portait sur des mots isolés dont le ton contredisait le sens",
                "C'est exact, mais seulement à l'oral",
                "Le chiffre est de 70 %"
            ],
            a: 0,
            explication: "Elle mesurait la perception d'une attitude, pas la transmission d'une information."
        },
        {
            q: "Pourquoi écrire court prend-il plus de temps ?",
            options: [
                "Il faut trier, et le tri est un travail",
                "Il faut relire davantage",
                "C'est un mythe : cela va plus vite"
            ],
            a: 0,
            explication: "Cela en fait gagner à tous les autres — l'arbitrage est presque toujours tranché dans le mauvais sens."
        },
        {
            q: "Que reste-t-il si l'on n'applique qu'une seule chose de ce niveau ?",
            options: [
                "Reformuler une fois, puis se taire trois secondes",
                "Préparer davantage d'arguments",
                "Raccourcir tous ses messages"
            ],
            a: 0,
            explication: "Aucune technique du guide ne demande moins d'effort et n'en rapporte autant."
        },
        {
            q: "Un collègue vous demande un avis sur un désaccord à régler par courriel. Que conseiller ?",
            options: [
                "De le traiter à l'oral : les désaccords s'écrivent mal, et l'écrit sert ensuite à acter",
                "De soigner particulièrement le ton du message",
                "D'y mettre plusieurs destinataires en copie"
            ],
            a: 0,
            explication: "Un échange de cinq minutes en prend trois jours dès qu'il passe à l'écrit."
        }
    ]
};
