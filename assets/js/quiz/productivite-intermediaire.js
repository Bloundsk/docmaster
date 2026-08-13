// ===================================
// BANQUE DE QUESTIONS — PRODUCTIVITÉ, NIVEAU INTERMÉDIAIRE
// ===================================
// 6 questions par sous-section : 3 affichées, les 3 autres prennent le relais
// au bout de deux semaines. Les questions de synthèse sont distinctes de
// celles des sous-sections — aucune n'est reprise deux fois.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "cout-du-changement": [
            // Série 1
            {
                q: "Après une interruption, combien de temps faut-il pour retrouver sa concentration sur une tâche exigeante ?",
                options: [
                    "Quelques secondes",
                    "De l'ordre de quinze à vingt minutes",
                    "Une heure environ"
                ],
                a: 1,
                explication: "C'est pourquoi une coupure de deux minutes en coûte vingt."
            },
            {
                q: "Que coûtent réellement 9 interruptions de 3 minutes, avec 12 minutes de reprise à chaque fois ?",
                options: [
                    "27 minutes",
                    "1 h 48",
                    "2 h 15"
                ],
                a: 2,
                explication: "27 minutes d'interruption et 108 minutes de reprise : près de 28 % d'une journée de 8 heures."
            },
            {
                q: "Le cerveau traite-t-il deux tâches exigeantes en parallèle ?",
                options: [
                    "Non : il alterne, en payant le coût de bascule à chaque aller-retour",
                    "Oui, s'il est entraîné",
                    "Oui, à condition qu'elles soient de nature différente"
                ],
                a: 0,
                explication: "Ce qui ressemble à du travail parallèle est du travail séquentiel avec des frais de transition."
            },
            // Série 2
            {
                q: "Couper les notifications suffit-il à protéger sa concentration ?",
                options: [
                    "Oui, c'est la mesure décisive",
                    "Non, si l'on va vérifier soi-même toutes les dix minutes",
                    "Oui, à condition de les couper toute la journée"
                ],
                a: 1,
                explication: "L'auto-interruption produit exactement le même coût de reprise."
            },
            {
                q: "Pourquoi noter où l'on en était avant de s'arrêter ?",
                options: [
                    "Pour justifier le temps passé",
                    "Parce que cela raccourcit nettement la reprise",
                    "Pour partager l'avancement à l'équipe"
                ],
                a: 1,
                explication: "Le contexte est alors sur le papier plutôt qu'à reconstruire de mémoire."
            },
            {
                q: "Pourquoi annoncer une plage d'indisponibilité ?",
                options: [
                    "Pour que les autres n'aient pas à interrompre",
                    "Pour faire respecter son statut",
                    "Pour éviter d'avoir à répondre ensuite"
                ],
                a: 0,
                explication: "L'interruption devient inutile plutôt que d'être seulement refusée."
            }
        ],

        // ---------------------------------------------------------------
        "blocage-de-temps": [
            // Série 1
            {
                q: "Que dit une liste de tâches que l'agenda dit mieux ?",
                options: [
                    "Elle dit quoi faire, mais pas quand",
                    "Elle dit quand, mais pas quoi",
                    "Elle dit combien de temps cela prendra"
                ],
                a: 0,
                explication: "Une liste de vingt éléments face à un agenda vide produit surtout de la culpabilité."
            },
            {
                q: "Sur une journée de 8 h avec 2 h 30 de réunions, 1 h 15 de messages et 1 h d'imprévus, que reste-t-il ?",
                options: [
                    "5 heures",
                    "3 h 15",
                    "6 heures"
                ],
                a: 1,
                explication: "Planifier six heures de production sur cette journée échoue par arithmétique, pas par manque de discipline."
            },
            {
                q: "Que dit la loi de Parkinson ?",
                options: [
                    "Une tâche tend à occuper tout le temps qu'on lui alloue",
                    "Le travail augmente avec le nombre de participants",
                    "Les tâches urgentes chassent les tâches importantes"
                ],
                a: 0,
                explication: "D'où l'intérêt de fixer une durée avant de commencer, même arbitrairement."
            },
            // Série 2
            {
                q: "Pourquoi un créneau tient-il mieux qu'une intention ?",
                options: [
                    "Parce qu'un créneau se défend, une intention ne se défend pas",
                    "Parce qu'il est plus long",
                    "Parce qu'il est visible par les collègues"
                ],
                a: 0,
                explication: "La différence est psychologique autant que pratique."
            },
            {
                q: "À quel taux de remplissage une planification résiste-t-elle aux aléas ?",
                options: [
                    "100 %, pour ne rien perdre",
                    "Environ 70 %",
                    "50 % au maximum"
                ],
                a: 1,
                explication: "Un agenda sans espace vide ne survit pas à la première urgence."
            },
            {
                q: "Que révèle le fait que les tâches ne rentrent pas dans l'agenda ?",
                options: [
                    "Qu'il faut travailler plus vite",
                    "Qu'il y en a trop",
                    "Que l'agenda est mal conçu"
                ],
                a: 1,
                explication: "La liste le cachait ; l'agenda le montre. C'est la confrontation utile."
            }
        ],

        // ---------------------------------------------------------------
        "traiter-les-flux": [
            // Série 1
            {
                q: "Pourquoi traiter les messages par lots plutôt qu'au fil de l'eau ?",
                options: [
                    "Le temps de traitement est identique, mais sans les frais de bascule",
                    "Le traitement lui-même est plus rapide",
                    "Les messages sont moins nombreux"
                ],
                a: 0,
                explication: "Le travail est le même ; ce sont les transitions qui coûtaient des heures."
            },
            {
                q: "Comment régler la crainte de rater une urgence en traitant par lots ?",
                options: [
                    "En vérifiant quand même toutes les heures",
                    "En convenant d'un canal réservé aux vraies urgences",
                    "En prévenant chaque expéditeur individuellement"
                ],
                a: 1,
                explication: "Le téléphone, généralement. Cela suffit à débloquer la crainte."
            },
            {
                q: "Quel est le principe qui vide réellement une boîte de réception ?",
                options: [
                    "Répondre à tout dans la journée",
                    "Ne toucher chaque élément qu'une fois, et décider immédiatement",
                    "Archiver l'ensemble chaque vendredi"
                ],
                a: 1,
                explication: "Répondre, planifier, déléguer, archiver ou supprimer — mais décider."
            },
            // Série 2
            {
                q: "Qu'est-ce qui fait déborder une boîte de réception ?",
                options: [
                    "Le volume de messages reçus",
                    "Le fait de lire des messages sans rien en faire, puis de les relire",
                    "L'absence de dossiers de classement"
                ],
                a: 1,
                explication: "Ce n'est pas le nombre de messages qui coûte cher, c'est le nombre de fois qu'on les regarde."
            },
            {
                q: "Pourquoi ne pas commencer la journée par ses messages ?",
                options: [
                    "Parce que cela donne son meilleur créneau aux priorités des autres",
                    "Parce que les messages du matin sont moins importants",
                    "Parce qu'il vaut mieux attendre les réponses de la veille"
                ],
                a: 0,
                explication: "La première heure est généralement celle où l'attention est la plus disponible."
            },
            {
                q: "Combien de passages dédiés aux messages suffisent dans la plupart des métiers ?",
                options: [
                    "Un seul, en fin de journée",
                    "Deux",
                    "Un toutes les heures"
                ],
                a: 1,
                explication: "Deux créneaux par jour couvrent la grande majorité des situations."
            }
        ],

        // ---------------------------------------------------------------
        "prioriser-vraiment": [
            // Série 1
            {
                q: "En quoi consiste réellement la priorisation ?",
                options: [
                    "Ranger les tâches par ordre d'importance",
                    "En abandonner",
                    "Les répartir sur plusieurs semaines"
                ],
                a: 1,
                explication: "Tant qu'aucune tâche n'est écartée, il n'y a pas eu de priorisation, seulement un tri."
            },
            {
                q: "Quelle question poser avant d'accepter une demande ?",
                options: [
                    "Combien de temps cela va-t-il prendre ?",
                    "Qu'est-ce que je ne ferai pas si je dis oui ?",
                    "Est-ce que quelqu'un d'autre peut le faire ?"
                ],
                a: 1,
                explication: "Si la réponse est « rien d'important », c'est un vrai oui."
            },
            {
                q: "Pourquoi le coût d'un « oui » reste-t-il invisible ?",
                options: [
                    "Parce qu'il est faible",
                    "Parce que personne ne vient réclamer le travail qui n'a pas été fait",
                    "Parce qu'il est reporté sur le mois suivant"
                ],
                a: 1,
                explication: "Le refus est réel, il est simplement silencieux."
            },
            // Série 2
            {
                q: "Que permet la formulation « je peux le faire, mais cela décale le projet X d'une semaine » ?",
                options: [
                    "Elle rend le coût visible et renvoie la décision à qui la demande",
                    "Elle évite d'avoir à répondre",
                    "Elle transforme un refus en promesse"
                ],
                a: 0,
                explication: "L'arbitrage explicite : ni refus sec, ni oui qui masque le coût."
            },
            {
                q: "Pourquoi l'important n'arrive-t-il jamais spontanément dans la journée ?",
                options: [
                    "Parce qu'il est plus difficile",
                    "Parce qu'il reste silencieux, contrairement à l'urgent",
                    "Parce qu'il concerne surtout le long terme"
                ],
                a: 1,
                explication: "Il faut lui réserver du temps, sans quoi l'urgent le remplit intégralement."
            },
            {
                q: "Que faire d'une liste de tâches qui s'allonge depuis six mois ?",
                options: [
                    "La reporter au trimestre suivant",
                    "La revoir et supprimer ce qui ne sera jamais fait",
                    "La découper en sous-tâches"
                ],
                a: 1,
                explication: "Ces éléments occupent l'attention à chaque relecture et entretiennent un sentiment d'échec permanent."
            }
        ]
    },

    // Questions de synthèse — distinctes de celles des sous-sections
    synthese: [
        {
            q: "Quel est le fil conducteur de ce niveau ?",
            options: [
                "Remplir l'agenda plus efficacement",
                "Protéger l'attention plutôt que multiplier les tâches",
                "Adopter le bon outil de gestion"
            ],
            a: 1,
            explication: "L'attention est la ressource rare ; le temps ne l'est qu'en apparence."
        },
        {
            q: "Qu'ont en commun le traitement au fil de l'eau et le travail prétendument parallèle ?",
            options: [
                "Les deux paient un coût de bascule répété",
                "Les deux économisent du temps",
                "Les deux supposent un bon outil"
            ],
            a: 0,
            explication: "C'est le même mécanisme, appliqué aux messages dans un cas et aux tâches dans l'autre."
        },
        {
            q: "Pourquoi une planification à 100 % et une liste qui ne rétrécit jamais échouent-elles pour la même raison ?",
            options: [
                "Toutes deux refusent d'arbitrer",
                "Toutes deux manquent de méthode",
                "Toutes deux dépendent d'un logiciel"
            ],
            a: 0,
            explication: "Ni l'agenda ni la liste n'écartent quoi que ce soit : le réel s'en charge, dans l'urgence."
        },
        {
            q: "Quelle mesure de ce niveau coûte le moins et rapporte le plus ?",
            options: [
                "Changer d'outil de gestion de tâches",
                "Une heure de travail de fond avant d'ouvrir sa messagerie",
                "Allonger la journée de deux heures"
            ],
            a: 1,
            explication: "Rien d'important ne se perd en soixante minutes, et la journée entière en est changée."
        },
        {
            q: "Un collègue dit consacrer sa matinée aux messages « pour être tranquille ensuite ». Quel est le problème ?",
            options: [
                "Il traite les messages trop lentement",
                "Il donne son meilleur créneau aux priorités des autres",
                "Il devrait les traiter en trois lots"
            ],
            a: 1,
            explication: "Le créneau où l'attention est la plus disponible sert alors ce qui en demande le moins."
        },
        {
            q: "Que reste-t-il si l'on n'applique qu'une seule chose de ce niveau ?",
            options: [
                "Réserver le temps du travail important dans l'agenda, et le défendre",
                "Installer une nouvelle application",
                "Répondre plus vite aux sollicitations"
            ],
            a: 0,
            explication: "Ce qui n'est pas dans l'agenda sera absorbé par l'urgent, toujours."
        }
    ]
};
