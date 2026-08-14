// ===================================
// BANQUE DE QUESTIONS — SANTÉ AU TRAVAIL, NIVEAU DÉBUTANT
// ===================================
// 6 questions par sous-section : 3 affichées, les 3 autres prennent le relais
// au bout de deux semaines. Les questions de synthèse sont distinctes de
// celles des sous-sections — aucune n'est reprise deux fois.
//
// Aucune question ne porte sur un symptôme ni sur un état de santé.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "regler-son-poste": [
            // Série 1
            {
                q: "Où placer le haut de l'écran ?",
                options: [
                    "À hauteur des yeux, ou juste en dessous",
                    "Nettement au-dessus des yeux",
                    "Le plus bas possible"
                ],
                a: 0,
                explication: "Un écran trop bas fait pencher la tête en avant pendant sept heures."
            },
            {
                q: "Pourquoi un portable posé sur un bureau ne peut-il pas être bien placé ?",
                options: [
                    "L'écran est solidaire du clavier : l'un des deux est forcément mal placé",
                    "Il est trop petit",
                    "Il chauffe trop"
                ],
                a: 0,
                explication: "Le support et le clavier séparé résolvent une contradiction, pas un inconfort."
            },
            {
                q: "Comment orienter l'écran par rapport à la fenêtre ?",
                options: [
                    "Face à elle",
                    "Perpendiculairement",
                    "Dos à elle"
                ],
                a: 1,
                explication: "Face à la fenêtre on travaille en contre-jour, dos à elle l'écran renvoie des reflets."
            },
            // Série 2
            {
                q: "Que signale une épaule qui monte quand on tape ?",
                options: [
                    "Un plan de travail trop haut",
                    "Une chaise trop basse pour le dos",
                    "Un clavier trop large"
                ],
                a: 0,
                explication: "Les avant-bras doivent être horizontaux, épaules relâchées."
            },
            {
                q: "Qu'est-ce qui abîme sur un poste de bureau ?",
                options: [
                    "L'effort intense",
                    "La position maintenue pendant des heures",
                    "Le nombre de frappes au clavier"
                ],
                a: 1,
                explication: "C'est aussi une bonne nouvelle : une position, ça se règle."
            },
            {
                q: "Quand faut-il régler son poste ?",
                options: [
                    "Avant d'avoir mal",
                    "Dès la première douleur",
                    "Quand la gêne devient quotidienne"
                ],
                a: 0,
                explication: "Le signal est faible au début, et on s'habitue à l'ignorer."
            }
        ],

        // ---------------------------------------------------------------
        "la-sedentarite": [
            // Série 1
            {
                q: "Activité physique et sédentarité, est-ce la même chose ?",
                options: [
                    "Oui, l'une est l'inverse de l'autre",
                    "Non : on peut être sportif et sédentaire",
                    "Oui, si l'on compte en heures"
                ],
                a: 1,
                explication: "L'une se mesure en minutes d'effort, l'autre en heures passées assis."
            },
            {
                q: "Quel est le repère de l'OMS pour un adulte ?",
                options: [
                    "150 minutes d'activité modérée par semaine",
                    "30 minutes par jour de sport intense",
                    "10 000 pas par jour"
                ],
                a: 0,
                explication: "Et ce repère ne dit rien de la durée passée assis, qui est un second levier."
            },
            {
                q: "9 heures assises par jour, 5 jours par semaine : combien sur une année de travail ?",
                options: [
                    "Environ 2 025 heures",
                    "Environ 900 heures",
                    "Environ 4 000 heures"
                ],
                a: 0,
                explication: "45 heures par semaine, sur quarante-cinq semaines."
            },
            // Série 2
            {
                q: "Qu'est-ce qui compte le plus dans une interruption de la position assise ?",
                options: [
                    "Sa durée",
                    "Le fait qu'elle ait lieu",
                    "L'intensité de l'effort"
                ],
                a: 1,
                explication: "Se lever deux minutes toutes les heures n'a l'air de rien et fait le travail."
            },
            {
                q: "Une heure de sport le samedi annule-t-elle huit heures assises quotidiennes ?",
                options: [
                    "Non : elle améliore l'activité sans changer la sédentarité",
                    "Oui, entièrement",
                    "Oui, si le sport est intense"
                ],
                a: 0,
                explication: "Les deux comptent, et le second est plus facile à corriger."
            },
            {
                q: "Quelle astuce déplace plusieurs heures par semaine sans effort d'organisation ?",
                options: [
                    "Téléphoner debout ou en marchant",
                    "Prendre des pauses plus longues",
                    "Changer de chaise"
                ],
                a: 0,
                explication: "Comme déplacer hors de portée les objets qu'on utilise souvent."
            }
        ],

        // ---------------------------------------------------------------
        "la-fatigue-visuelle": [
            // Série 1
            {
                q: "Que dit la règle dite « des trois vingt » ?",
                options: [
                    "Toutes les 20 minutes, regarder à 6 mètres pendant 20 secondes",
                    "20 minutes de pause toutes les 20 heures",
                    "20 clignements par minute pendant 20 minutes"
                ],
                a: 0,
                explication: "Les chiffres exacts importent peu : le principe est de relâcher le muscle qui accommode."
            },
            {
                q: "Que se passe-t-il au clignement devant un écran ?",
                options: [
                    "Sa fréquence chute nettement",
                    "Il augmente",
                    "Il ne change pas"
                ],
                a: 0,
                explication: "Le film lacrymal s'évapore plus vite qu'il n'est renouvelé — d'où les yeux secs."
            },
            {
                q: "Que dit l'état des preuves sur les filtres anti-lumière bleue ?",
                options: [
                    "Ils n'ont pas démontré grand-chose sur la fatigue visuelle",
                    "Ils la réduisent nettement",
                    "Ils protègent la rétine"
                ],
                a: 0,
                explication: "Ce qui est mieux établi concerne le sommeil, et dépend surtout de l'heure d'arrêt."
            },
            // Série 2
            {
                q: "Faut-il travailler dans le noir avec un écran allumé ?",
                options: [
                    "Non : le contraste est mal supporté sur la durée",
                    "Oui, cela repose les yeux",
                    "Cela n'a aucun effet"
                ],
                a: 0,
                explication: "La luminosité de l'écran gagne à être proche de celle de la pièce."
            },
            {
                q: "Une gêne visuelle qui persiste plusieurs jours relève de quoi ?",
                options: [
                    "D'un examen",
                    "D'un filtre logiciel",
                    "D'une pause plus longue"
                ],
                a: 0,
                explication: "Une correction visuelle inadaptée est une cause fréquente, et aucun réglage d'écran ne la corrige."
            },
            {
                q: "Pourquoi l'œil se fatigue-t-il devant un écran ?",
                options: [
                    "Il fixe un plan rapproché sans relâchement",
                    "L'écran émet trop de chaleur",
                    "Les couleurs sont trop vives"
                ],
                a: 0,
                explication: "Regarder au loin quelques secondes suffit à relâcher le muscle qui accommode."
            }
        ],

        // ---------------------------------------------------------------
        "les-pauses": [
            // Série 1
            {
                q: "Quelle pause la loi impose-t-elle au-delà de six heures de travail ?",
                options: [
                    "20 minutes",
                    "45 minutes",
                    "Une heure"
                ],
                a: 0,
                explication: "C'est un plancher, et il ne dit rien de la répartition."
            },
            {
                q: "Qu'est-ce qui protège le mieux : un bloc ou plusieurs coupures ?",
                options: [
                    "Plusieurs coupures courtes",
                    "Un seul bloc de vingt minutes",
                    "Les deux se valent"
                ],
                a: 0,
                explication: "Un repère ergonomique usuel est d'environ cinq minutes par heure travaillée."
            },
            {
                q: "Faire défiler un fil d'actualité pendant la pause, est-ce une pause ?",
                options: [
                    "Non : c'est la même ressource sollicitée autrement",
                    "Oui, puisqu'on ne travaille pas",
                    "Oui, si elle est courte"
                ],
                a: 0,
                explication: "Attention soutenue, plan rapproché, écran : rien n'a changé."
            },
            // Série 2
            {
                q: "Que fait-on le plus souvent quand la charge monte ?",
                options: [
                    "On supprime les pauses, et le rendement décroche",
                    "On les allonge",
                    "On les répartit mieux"
                ],
                a: 0,
                explication: "Le temps « gagné » se paie en erreurs et en fin de journée improductive."
            },
            {
                q: "Qu'est-ce qui distingue une pause qui récupère ?",
                options: [
                    "Elle change de registre",
                    "Elle dure au moins dix minutes",
                    "Elle a lieu à heure fixe"
                ],
                a: 0,
                explication: "Se lever, bouger, regarder ailleurs, parler d'autre chose."
            },
            {
                q: "Le déjeuner pris devant l'écran coupe-t-il la journée ?",
                options: [
                    "Non : il dure une heure et ne coupe rien",
                    "Oui, c'est une pause complète",
                    "Oui, si l'on ne travaille pas pendant"
                ],
                a: 0,
                explication: "Même logique que le téléphone pendant la pause : le registre ne change pas."
            }
        ]
    },

    // Questions de synthèse — distinctes de celles des sous-sections
    synthese: [
        {
            q: "Quelle question ce parcours pose-t-il, que le guide Productivité ne pose pas ?",
            options: [
                "Comment ne pas s'abîmer au travail",
                "Comment produire davantage",
                "Comment mieux s'organiser"
            ],
            a: 0,
            explication: "Deux sujets voisins, deux questions différentes."
        },
        {
            q: "Qu'ont en commun le réglage du poste et les interruptions de la position assise ?",
            options: [
                "Les deux se font une fois, ou automatiquement, sans demander de motivation",
                "Les deux demandent du matériel",
                "Les deux se voient immédiatement"
            ],
            a: 0,
            explication: "C'est ce qui les rend praticables, contrairement aux bonnes résolutions."
        },
        {
            q: "Quelqu'un court trois fois par semaine et reste assis neuf heures par jour. Que dire ?",
            options: [
                "L'activité est bonne, la sédentarité reste entière — ce sont deux leviers distincts",
                "Tout va bien, le sport compense",
                "Le sport est inutile dans ce cas"
            ],
            a: 0,
            explication: "Les 2 025 heures assises annuelles ne bougent pas d'un pouce."
        },
        {
            q: "Pourquoi ces réglages sont-ils si peu appliqués ?",
            options: [
                "Le signal est faible au début, et on s'habitue à l'ignorer",
                "Ils coûtent cher",
                "Ils sont peu connus"
            ],
            a: 0,
            explication: "Une mauvaise position ne fait pas mal le premier jour, ni le premier mois."
        },
        {
            q: "Que reste-t-il si l'on n'applique qu'une seule chose de ce niveau ?",
            options: [
                "Régler la hauteur de son écran",
                "Acheter un siège ergonomique",
                "Installer un filtre anti-lumière bleue"
            ],
            a: 0,
            explication: "Deux minutes, et le réglage tient des mois."
        },
        {
            q: "Une douleur au poignet dure depuis trois semaines. Que faire ?",
            options: [
                "Consulter : cela ne relève plus d'un réglage de poste",
                "Changer de souris",
                "Attendre qu'elle passe"
            ],
            a: 0,
            explication: "Le réglage prévient ; il ne traite pas ce qui est déjà installé."
        }
    ]
};
