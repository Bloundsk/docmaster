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
                    "Impressionnant, facile à calculer, en hausse",
                    "Lié à un objectif précis, mesurable dans le temps, actionnable",
                    "Simple, visuel et partageable"
                ],
                a: 1,
                explication: "Le critère actionnable est le plus discriminant, et le plus souvent oublié."
            },
            {
                q: "Quel test permet de reconnaître une métrique de vanité ?",
                options: [
                    "Vérifier si elle est publiée par les concurrents",
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
                    "Le taux de conversion chute de 40 % : la campagne a mal ciblé",
                    "Les deux indicateurs sont également utiles"
                ],
                a: 1,
                explication: "Les deux chiffres sont exacts. Un seul mène à une décision : revoir le ciblage."
            },
            // Série 2
            {
                q: "Quelle différence entre indicateur de résultat et indicateur avancé ?",
                options: [
                    "Le premier constate, le second annonce et laisse le temps de réagir",
                    "Le premier est financier, le second commercial",
                    "Aucune, ce sont deux noms pour la même chose"
                ],
                a: 0,
                explication: "Le chiffre d'affaires constate ; le nombre de devis envoyés cette semaine annonce celui du mois prochain."
            },
            {
                q: "Un tableau de bord utile contient...",
                options: [
                    "Le maximum d'indicateurs disponibles",
                    "Des indicateurs de résultat et des indicateurs avancés",
                    "Uniquement des indicateurs financiers"
                ],
                a: 1,
                explication: "Sans indicateur avancé, on ne constate les problèmes qu'une fois qu'il est trop tard pour agir."
            },
            {
                q: "Que faire avant de commencer à suivre un indicateur ?",
                options: [
                    "Choisir l'outil de visualisation",
                    "Écrire la décision qu'il servira à prendre",
                    "Comparer avec le secteur"
                ],
                a: 1,
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
                    "Il dit pourquoi, mais pas combien",
                    "Il répond à toutes les questions"
                ],
                a: 0,
                explication: "Le quantitatif localise le problème, le qualitatif l'explique. Ils se complètent sans se remplacer."
            },
            {
                q: "5 000 clients sollicités, 200 réponses, note moyenne 4,3/5. Que mesure ce chiffre ?",
                options: [
                    "La satisfaction des clients",
                    "La satisfaction des personnes qui ont répondu",
                    "La qualité du service"
                ],
                a: 1,
                explication: "Les 4 800 silencieux, dont ceux partis à la concurrence, ne sont pas dans le calcul."
            },
            {
                q: "Quel est le défaut de collecte le plus courant et le plus difficile à voir ?",
                options: [
                    "Les erreurs de saisie",
                    "Le biais de sélection : ceux qui répondent ne ressemblent pas à ceux qui se taisent",
                    "Le manque de volume"
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
                    "Une base riche et exploitable",
                    "Des bases énormes où l'on ne trouve rien, et des corrélations dues au hasard",
                    "Un avantage concurrentiel"
                ],
                a: 1,
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
                    "Une décoration posée sur un tableau",
                    "Un argument : il oriente la lecture et met une chose en avant",
                    "Une restitution neutre des données"
                ],
                a: 1,
                explication: "La même donnée, selon sa mise en forme, peut mener à deux décisions opposées."
            },
            {
                q: "Quelle forme choisir pour comparer des quantités entre elles ?",
                options: [
                    "Un camembert",
                    "Des barres horizontales triées",
                    "Une courbe"
                ],
                a: 1,
                explication: "L'œil compare mal des angles : le camembert se limite à trois parts, pour des proportions."
            },
            {
                q: "A = 51 ventes, B = 49. Avec un axe partant de 48, que voit le lecteur ?",
                options: [
                    "Deux barres presque identiques, ce qui est fidèle",
                    "Une barre de A trois fois plus haute : l'écart de 4 % paraît écrasant",
                    "Un graphique illisible"
                ],
                a: 1,
                explication: "Aucun chiffre n'a été falsifié. Seule l'échelle a changé."
            },
            // Série 2
            {
                q: "Quel est le premier réflexe à acquérir devant un graphique ?",
                options: [
                    "Lire la légende",
                    "Regarder d'où part l'axe vertical",
                    "Vérifier la source"
                ],
                a: 1,
                explication: "Beaucoup d'outils tronquent l'axe par défaut : la manipulation est souvent involontaire."
            },
            {
                q: "Quel titre donner à un graphique ?",
                options: [
                    "« Ventes 2026 »",
                    "« Les ventes ont doublé en 6 mois »",
                    "Aucun, les axes suffisent"
                ],
                a: 1,
                explication: "Un bon titre énonce la conclusion. Un bon visuel se lit en trois secondes."
            },
            {
                q: "Que révèle un graphique qui nécessite de consulter la légende pour être compris ?",
                options: [
                    "Qu'il est riche en informations",
                    "Qu'il a raté son office",
                    "Qu'il s'adresse à des experts"
                ],
                a: 1,
                explication: "Une seule idée par graphique, des axes nommés avec leur unité."
            }
        ],

        // ---------------------------------------------------------------
        "les-bases-des-statistiques": [
            // Série 1
            {
                q: "Neuf salaires à 2 000 € et un à 20 000 €. Quelle est la moyenne, et que décrit-elle ?",
                options: [
                    "2 000 €, elle décrit la situation de neuf personnes",
                    "3 800 €, elle ne décrit la réalité d'aucun des dix salariés",
                    "11 000 €, elle décrit l'écart entre les extrêmes"
                ],
                a: 1,
                explication: "La médiane, à 2 000 €, décrit la situation de neuf d'entre eux."
            },
            {
                q: "Quand privilégier la médiane à la moyenne ?",
                options: [
                    "Quand l'échantillon est petit",
                    "Dès qu'il existe des valeurs extrêmes : salaires, prix immobiliers, temps de réponse",
                    "Quand les données sont anciennes"
                ],
                a: 1,
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
                    "L'application déclenche l'achat, il faut y investir",
                    "Rien de certain : les clients déjà fidèles sont peut-être ceux qui l'installent",
                    "L'application doit être rendue obligatoire"
                ],
                a: 1,
                explication: "Décider d'investir des millions sur cette base est un pari, pas une déduction."
            },
            {
                q: "Passer de 2 % à 3 %, c'est combien ?",
                options: [
                    "+1 point ou +50 %, les deux sont exacts",
                    "+1 % uniquement",
                    "+50 % uniquement"
                ],
                a: 0,
                explication: "La seconde formulation est spectaculaire et souvent choisie pour cette raison. Cherchez la valeur absolue."
            },
            {
                q: "Que garantit le fait d'arrêter un test le jour où l'écart devient favorable ?",
                options: [
                    "Un gain de temps précieux",
                    "De trouver un gagnant, même entre deux versions identiques",
                    "Une conclusion plus fiable"
                ],
                a: 1,
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
                "À produire des tableaux de bord impressionnants",
                "À répondre à une question précise avec un degré de certitude connu",
                "À justifier des décisions déjà prises"
            ],
            a: 1,
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
                "Sur quelle période ?",
                "Quelle est la valeur absolue derrière ce pourcentage ?",
                "Qui a réalisé la mesure ?"
            ],
            a: 1,
            explication: "Passer de 2 à 3 conversions est aussi une hausse de 50 %."
        },
        // Série 2
        {
            q: "Vous devez comparer deux versions d'une page. Que faut-il avant de conclure ?",
            options: [
                "Quelques centaines de visiteurs par version",
                "Quelques centaines de conversions par version, pas de visiteurs",
                "Une différence visible à l'œil nu"
            ],
            a: 1,
            explication: "Et une durée fixée à l'avance, sinon on trouve toujours un gagnant."
        },
        {
            q: "Votre outil produit un graphique dont l'axe démarre à 48 au lieu de 0. Que faire ?",
            options: [
                "Le laisser : l'outil sait ce qu'il fait",
                "Corriger l'axe : il exagère artificiellement un écart de 4 %",
                "Ajouter une note en bas du graphique"
            ],
            a: 1,
            explication: "Ce réflexe vous évitera de vous faire abuser — y compris par vos propres graphiques."
        },
        {
            q: "Quel ordre suivre dans une démarche data ?",
            options: [
                "Collecter largement, puis chercher ce que les données racontent",
                "Formuler la question, puis collecter ce qui permet d'y répondre",
                "Choisir l'outil, puis définir les indicateurs"
            ],
            a: 1,
            explication: "Sur un grand volume, on finit toujours par dénicher une corrélation spectaculaire due au seul hasard."
        }
    ]
};
