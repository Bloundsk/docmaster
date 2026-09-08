// ===================================
// BANQUE DE QUESTIONS — GUIDE DATA & ANALYTICS
// ===================================
// 6 questions par sous-section : 3 affichées, les 3 autres au bout de deux
// semaines. Les questions de synthèse sont distinctes.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "les-kpi": [
            // Série 1
            {
                q: "Quelles sont les trois conditions d'un bon indicateur ?",
                options: [
                    "Lié à un objectif précis, mesurable dans le temps, actionnable",
                    "Impressionnant à présenter, facile à calculer, et orienté à la hausse",
                    "Simple à lire, visuel en réunion, et partageable sans explication"
                ],
                a: 0,
                explication: "Le critère actionnable est le plus discriminant, et le plus souvent oublié."
            },
            {
                q: "Quel test permet de reconnaître une métrique de vanité ?",
                options: [
                    "Vérifier si les concurrents la publient : ce qu'ils suivent est un bon repère",
                    "Se demander : si ce chiffre baissait de 20 %, que ferais-je différemment ?",
                    "Regarder si elle progresse chaque mois"
                ],
                a: 1,
                explication: "Si la réponse est « rien », ce n'est pas un indicateur, c'est une décoration."
            },
            {
                q: "Le trafic passe de 100 000 à 180 000 visiteurs, les ventes de 1 200 à 1 300. Que conclure ?",
                options: [
                    "Une belle progression : +80 % de trafic",
                    "Les deux indicateurs sont également utiles",
                    "Le taux de conversion chute de 40 % : la campagne a mal ciblé"
                ],
                a: 2,
                explication: "Les deux chiffres sont exacts. Un seul mène à une décision : revoir le ciblage."
            },
            // Série 2
            {
                q: "Quelle différence entre indicateur de résultat et indicateur avancé ?",
                options: [
                    "Le premier constate, le second annonce et laisse le temps de réagir",
                    "Le premier relève de la finance, le second du commercial : deux services, deux tableaux",
                    "Aucune : deux noms pour la même chose, l'un venu du conseil, l'autre de la gestion"
                ],
                a: 0,
                explication: "Le chiffre d'affaires constate ; le nombre de devis envoyés cette semaine annonce celui du mois prochain."
            },
            {
                q: "Un tableau de bord utile contient...",
                options: [
                    "Le maximum d'indicateurs disponibles, pour que chacun y trouve le sien",
                    "Uniquement des indicateurs financiers",
                    "Des indicateurs de résultat et des indicateurs avancés"
                ],
                a: 2,
                explication: "Sans indicateur avancé, on ne constate les problèmes qu'une fois qu'il est trop tard pour agir."
            },
            {
                q: "Que faire avant de commencer à suivre un indicateur ?",
                options: [
                    "Choisir l'outil de visualisation",
                    "Comparer avec le secteur",
                    "Écrire la décision qu'il servira à prendre"
                ],
                a: 2,
                explication: "La difficulté n'est pas de collecter, c'est de trier."
            }
        ],

        // ---------------------------------------------------------------
        "la-collecte-de-données": [
            // Série 1
            {
                q: "Que permet le quantitatif, et que ne permet-il pas ?",
                options: [
                    "Il dit combien, où et quand, mais jamais pourquoi",
                    "Il dit pourquoi les gens agissent, mais jamais combien sont concernés",
                    "Il répond à toutes les questions, à condition d'avoir assez de données"
                ],
                a: 0,
                explication: "Le quantitatif localise le problème, le qualitatif l'explique. Ils se complètent sans se remplacer."
            },
            {
                q: "5 000 clients sollicités, 200 réponses, note moyenne 4,3/5. Que mesure ce chiffre ?",
                options: [
                    "La satisfaction des clients, mesurée sur un échantillon de 5 000 personnes",
                    "La qualité du service",
                    "La satisfaction des personnes qui ont répondu"
                ],
                a: 2,
                explication: "Les 4 800 silencieux, dont ceux partis à la concurrence, ne sont pas dans le calcul."
            },
            {
                q: "Quel est le défaut de collecte le plus courant et le plus difficile à voir ?",
                options: [
                    "Les erreurs de saisie, qui passent inaperçues et se propagent dans tous les calculs",
                    "Le biais de sélection : ceux qui répondent ne ressemblent pas à ceux qui se taisent",
                    "Le manque de volume : en dessous de quelques centaines d'observations, rien n'est solide"
                ],
                a: 1,
                explication: "Avant de faire confiance à un chiffre, demandez qui n'a pas été compté."
            },
            // Série 2
            {
                q: "Pour comprendre pourquoi des clients abandonnent leur panier, que faire ?",
                options: [
                    "Analyser le tableau de chiffres plus finement",
                    "Parler à cinq personnes",
                    "Augmenter la taille de l'échantillon"
                ],
                a: 1,
                explication: "Chercher la cause d'un abandon dans des chiffres seuls est une perte de temps."
            },
            {
                q: "Que produit la stratégie « collectons tout, on verra plus tard » ?",
                options: [
                    "Une base riche et exploitable, dans laquelle on puisera quand les questions seront claires",
                    "Un avantage concurrentiel",
                    "Des bases énormes où l'on ne trouve rien, et des corrélations dues au hasard"
                ],
                a: 2,
                explication: "La question précède la collecte, jamais l'inverse."
            },
            {
                q: "Quelles questions poser avant d'exploiter un chiffre ?",
                options: [
                    "Qui l'a produit et quand a-t-il été publié ?",
                    "Qui a été mesuré et qui a été oublié, comment, et sur quelle période ?",
                    "Est-il cohérent avec mes attentes ?"
                ],
                a: 1,
                explication: "Une semaine de vacances scolaires ne prédit pas une semaine ordinaire."
            }
        ],

        // ---------------------------------------------------------------
        "la-visualisation-de-données": [
            // Série 1
            {
                q: "Qu'est-ce qu'un graphique, fondamentalement ?",
                options: [
                    "Une décoration posée sur un tableau, pour le rendre présentable en réunion",
                    "Un argument : il oriente la lecture et met une chose en avant",
                    "Une restitution neutre des données, qui ne dit rien de plus que le tableau"
                ],
                a: 1,
                explication: "La même donnée, selon sa mise en forme, peut mener à deux décisions opposées."
            },
            {
                q: "Quelle forme choisir pour comparer des quantités entre elles ?",
                options: [
                    "Des barres horizontales triées",
                    "Un camembert, qui montre bien le poids de chacun",
                    "Une courbe"
                ],
                a: 0,
                explication: "L'œil compare mal des angles : le camembert se limite à trois parts, pour des proportions."
            },
            {
                q: "A = 51 ventes, B = 49. Avec un axe partant de 48, que voit le lecteur ?",
                options: [
                    "Une barre de A trois fois plus haute : l'écart de 4 % paraît écrasant",
                    "Deux barres presque identiques, ce qui est fidèle",
                    "Un graphique illisible"
                ],
                a: 0,
                explication: "Aucun chiffre n'a été falsifié. Seule l'échelle a changé."
            },
            // Série 2
            {
                q: "Quel est le premier réflexe à acquérir devant un graphique ?",
                options: [
                    "Lire la légende, pour savoir ce que représente chaque couleur",
                    "Regarder d'où part l'axe vertical",
                    "Vérifier la source et la date de publication"
                ],
                a: 1,
                explication: "Beaucoup d'outils tronquent l'axe par défaut : la manipulation est souvent involontaire."
            },
            {
                q: "Quel titre donner à un graphique ?",
                options: [
                    "« Ventes 2026 », un titre neutre qui n'oriente pas la lecture",
                    "Aucun, les axes suffisent",
                    "« Les ventes ont doublé en 6 mois »"
                ],
                a: 2,
                explication: "Un bon titre énonce la conclusion. Un bon visuel se lit en trois secondes."
            },
            {
                q: "Que révèle un graphique qui nécessite de consulter la légende pour être compris ?",
                options: [
                    "Qu'il est riche en informations",
                    "Qu'il s'adresse à des experts",
                    "Qu'il a raté son office"
                ],
                a: 2,
                explication: "Une seule idée par graphique, des axes nommés avec leur unité."
            }
        ],

        // ---------------------------------------------------------------
        "les-bases-des-statistiques": [
            // Série 1
            {
                q: "Neuf salaires à 2 000 € et un à 20 000 €. Quelle est la moyenne, et que décrit-elle ?",
                options: [
                    "2 000 €, elle décrit correctement la situation de neuf personnes sur dix",
                    "3 800 €, elle ne décrit la réalité d'aucun des dix salariés",
                    "11 000 €, elle décrit l'écart entre les extrêmes"
                ],
                a: 1,
                explication: "La médiane, à 2 000 €, décrit la situation de neuf d'entre eux."
            },
            {
                q: "Quand privilégier la médiane à la moyenne ?",
                options: [
                    "Dès qu'il existe des valeurs extrêmes : salaires, prix immobiliers, temps de réponse",
                    "Quand l'échantillon est petit : en dessous de trente valeurs, la moyenne devient instable",
                    "Quand les données sont anciennes : la médiane vieillit mieux que la moyenne, qui dérive"
                ],
                a: 0,
                explication: "Publier les deux est encore mieux : leur écart révèle à lui seul l'inégalité de la distribution."
            },
            {
                q: "Deux variables évoluent ensemble. Quelles explications restent possibles ?",
                options: [
                    "A cause B, forcément",
                    "A cause B, B cause A, ou une troisième cause les deux",
                    "Il s'agit toujours d'une coïncidence"
                ],
                a: 1,
                explication: "Le troisième cas est le plus fréquent et le plus oublié — les glaces et les noyades, causées par la chaleur."
            },
            // Série 2
            {
                q: "« Nos clients qui utilisent l'application achètent 3 fois plus. » Que conclure ?",
                options: [
                    "L'application déclenche l'achat : il faut donc investir pour la faire installer partout",
                    "L'application doit être rendue obligatoire",
                    "Rien de certain : les clients déjà fidèles sont peut-être ceux qui l'installent"
                ],
                a: 2,
                explication: "Décider d'investir des millions sur cette base est un pari, pas une déduction."
            },
            {
                q: "Passer de 2 % à 3 %, c'est combien ?",
                options: [
                    "+1 % uniquement",
                    "+50 % uniquement",
                    "+1 point ou +50 %, les deux sont exacts"
                ],
                a: 2,
                explication: "La seconde formulation est spectaculaire et souvent choisie pour cette raison. Cherchez la valeur absolue."
            },
            {
                q: "Que garantit le fait d'arrêter un test le jour où l'écart devient favorable ?",
                options: [
                    "De trouver un gagnant, même entre deux versions identiques",
                    "Un gain de temps précieux, et une décision prise plusieurs jours plus tôt",
                    "Une conclusion plus fiable, puisqu'on s'arrête quand l'écart est net"
                ],
                a: 0,
                explication: "La durée du test se fixe avant de le lancer."
            }
        ]
    },

    // -------------------------------------------------------------------
    // SYNTHÈSE
    // -------------------------------------------------------------------
    synthese: [
        // Série 1
        {
            q: "À quoi sert la data, fondamentalement ?",
            options: [
                "À répondre à une question précise avec un degré de certitude connu",
                "À produire des tableaux de bord qui impressionnent en comité de direction",
                "À justifier des décisions déjà prises"
            ],
            a: 0,
            explication: "Une donnée mal collectée est pire qu'une absence de donnée : elle donne une fausse confiance."
        },
        {
            q: "Quelles deux questions filtrent la majorité des conclusions hâtives ?",
            options: [
                "Qui a produit la donnée, et quand ?",
                "Quelle est la taille de l'échantillon, et l'écart pourrait-il venir du hasard ?",
                "L'outil est-il fiable, et à jour ?"
            ],
            a: 1,
            explication: "En dessous de quelques centaines d'observations, un écart de quelques points n'est que du bruit."
        },
        {
            q: "Un rapport affiche « +50 % de conversions ». Que demander ?",
            options: [
                "Quelle est la valeur absolue derrière ce pourcentage ?",
                "Sur quelle période, et par rapport à quel point de départ ?",
                "Qui a réalisé la mesure, et avec quel outil de suivi installé ?"
            ],
            a: 0,
            explication: "Passer de 2 à 3 conversions est aussi une hausse de 50 %."
        },
        // Série 2
        {
            q: "Tu dois comparer deux versions d'une page. Que faut-il avant de conclure ?",
            options: [
                "Quelques centaines de visiteurs par version, réparties sur deux semaines",
                "Quelques centaines de conversions par version, pas de visiteurs",
                "Une différence visible à l'œil nu"
            ],
            a: 1,
            explication: "Et une durée fixée à l'avance, sinon on trouve toujours un gagnant."
        },
        {
            q: "Ton outil produit un graphique dont l'axe démarre à 48 au lieu de 0. Que faire ?",
            options: [
                "Le laisser : l'outil sait ce qu'il fait",
                "Corriger l'axe : il exagère artificiellement un écart de 4 %",
                "Ajouter une note en bas du graphique"
            ],
            a: 1,
            explication: "Ce réflexe t'évitera de te faire abuser — y compris par tes propres graphiques."
        },
        {
            q: "Quel ordre suivre dans une démarche data ?",
            options: [
                "Formuler la question, puis collecter ce qui permet d'y répondre",
                "Collecter largement, puis chercher ce que les données racontent",
                "Choisir l'outil, puis définir les indicateurs"
            ],
            a: 0,
            explication: "Sur un grand volume, on finit toujours par dénicher une corrélation spectaculaire due au seul hasard."
        }
    ]
};
