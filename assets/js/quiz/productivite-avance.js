// ===================================
// BANQUE DE QUESTIONS — PRODUCTIVITÉ, NIVEAU AVANCÉ
// ===================================
// 6 questions par sous-section : 3 affichées, les 3 autres prennent le relais
// au bout de deux semaines. Les questions de synthèse sont distinctes de
// celles des sous-sections — aucune n'est reprise deux fois.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "energie-plutot-que-temps": [
            // Série 1
            {
                q: "Quel est le rythme d'attention le plus fréquemment observé sur une journée ?",
                options: [
                    "Une montée continue jusqu'au soir",
                    "Un pic en matinée, un creux en début d'après-midi, une remontée partielle",
                    "Un niveau constant tant qu'on est reposé"
                ],
                a: 1,
                explication: "La position exacte des phases varie beaucoup, mais leur existence est constante."
            },
            {
                q: "Comment repérer son propre rythme ?",
                options: [
                    "En se fiant à son impression générale",
                    "En notant son niveau de concentration trois fois par jour pendant deux semaines",
                    "En comparant avec la moyenne des collègues"
                ],
                a: 1,
                explication: "Le motif apparaît en général au bout de dix jours — et ne correspond pas toujours à ce qu'on croyait."
            },
            {
                q: "Que produit l'ajout de deux heures le soir à une journée déjà pleine ?",
                options: [
                    "Un gain net de deux heures de travail",
                    "Un gain net, à condition de compenser pendant le week-end",
                    "Des heures de faible rendement, et un lendemain dégradé"
                ],
                a: 2,
                explication: "Sur une semaine, le total produit baisse. C'est massivement documenté."
            },
            // Série 2
            {
                q: "Qu'est-ce qui distingue une pause efficace ?",
                options: [
                    "Sa durée totale, en minutes complètes",
                    "Le fait qu'elle soit prise à heure fixe",
                    "Le fait qu'elle change de registre"
                ],
                a: 2,
                explication: "Consulter son téléphone n'est pas une pause pour l'attention : c'est la même ressource, sollicitée autrement."
            },
            {
                q: "Quelle est la conséquence pratique du rythme journalier, rarement appliquée ?",
                options: [
                    "Commencer plus tôt le matin",
                    "Placer le travail de fond dans le pic, les tâches mécaniques dans le creux",
                    "Répartir les tâches uniformément"
                ],
                a: 1,
                explication: "Or le pic est très souvent consacré aux messages et aux réunions."
            },
            {
                q: "Pourquoi la baisse de rendement due à l'absence de pause passe-t-elle inaperçue ?",
                options: [
                    "Parce qu'elle est faible",
                    "Parce qu'elle n'apparaît qu'après plusieurs semaines de suite",
                    "Parce qu'on continue d'être occupé tout en produisant moins"
                ],
                a: 2,
                explication: "L'activité reste visible ; c'est le résultat qui diminue."
            }
        ],

        // ---------------------------------------------------------------
        "systemes-plutot-que-volonte": [
            // Série 1
            {
                q: "Pourquoi une méthode qui suppose d'y penser chaque jour finit-elle par céder ?",
                options: [
                    "Parce qu'elle est mal conçue",
                    "Parce qu'elle demande trop de temps",
                    "Parce que la volonté est une ressource limitée, déjà largement consommée"
                ],
                a: 2,
                explication: "Ce n'est pas une question de faiblesse personnelle."
            },
            {
                q: "Quel effet a l'ajout de vingt secondes d'effort devant un geste ?",
                options: [
                    "Aucun effet, c'est parfaitement négligeable",
                    "Cela réduit fortement sa fréquence",
                    "Cela le rend au contraire plus gratifiant"
                ],
                a: 1,
                explication: "Et en retirer vingt l'augmente d'autant. C'est le levier le plus puissant du domaine."
            },
            {
                q: "En quoi consiste l'ancrage d'une habitude ?",
                options: [
                    "La noter très soigneusement dans son agenda",
                    "S'engager publiquement à la tenir chaque jour",
                    "La rattacher à une action déjà automatique"
                ],
                a: 2,
                explication: "Le déclencheur existe déjà : il n'y a rien à retenir."
            },
            // Série 2
            {
                q: "Quelle règle de reprise distingue une habitude durable d'une tentative avortée ?",
                options: [
                    "Ne jamais manquer deux fois de suite",
                    "Rattraper le lendemain ce qui a été manqué",
                    "Recommencer toute la série depuis zéro"
                ],
                a: 0,
                explication: "Une journée manquée est un accident ; deux, c'est le début d'un abandon."
            },
            {
                q: "À quoi sert la « version minimale » d'une habitude ?",
                options: [
                    "À obtenir un résultat rapide",
                    "À mesurer sa progression",
                    "À ne jamais rompre la série"
                ],
                a: 2,
                explication: "« Écrire une phrase », « ouvrir le fichier » : l'objectif n'est pas le résultat."
            },
            {
                q: "Pourquoi ne pas installer cinq nouvelles habitudes le même lundi ?",
                options: [
                    "Parce que cela épuise la réserve de volonté et les fait échouer ensemble",
                    "Parce que cela demande trop de temps",
                    "Parce qu'elles se contrediraient"
                ],
                a: 0,
                explication: "Une habitude à la fois, six à huit semaines, puis la suivante."
            }
        ],

        // ---------------------------------------------------------------
        "productivite-collective": [
            // Série 1
            {
                q: "Combien coûte réellement une réunion ?",
                options: [
                    "Sa durée totale, mesurée en heures de présence",
                    "Sa durée multipliée par le nombre de participants",
                    "Le temps de préparation de l'animateur de la réunion"
                ],
                a: 1,
                explication: "Une heure à huit personnes, c'est une journée de travail entière."
            },
            {
                q: "Quelles sont les trois conditions cumulatives d'une réunion utile ?",
                options: [
                    "Un objet de décision, les bonnes personnes, une préparation lue en amont",
                    "Un ordre du jour, un compte rendu, un horaire fixe",
                    "Une salle, un animateur, une durée limitée"
                ],
                a: 0,
                explication: "Une réunion d'information peut être un message."
            },
            {
                q: "Pourquoi l'écrit coûte-t-il moins cher que le synchrone ?",
                options: [
                    "Parce qu'il est nettement plus rapide à produire et à faire circuler",
                    "Parce qu'il engage moins l'auteur",
                    "Parce que chacun lit quand il le peut, sans fragmenter sa journée"
                ],
                a: 2,
                explication: "Il coûte plus cher à l'émetteur et beaucoup moins à tous les destinataires."
            },
            // Série 2
            {
                q: "Une réunion hebdomadaire d'1 h 30 à 7 personnes, à 45 €/h chargés : quel coût par séance ?",
                options: [
                    "68 €",
                    "315 €",
                    "473 €"
                ],
                a: 2,
                explication: "10 h 30 de travail par séance, soit environ 22 700 € par an."
            },
            {
                q: "Que vaut une réunion qui se termine sans décision ni action attribuée ?",
                options: [
                    "Elle a maintenu la cohésion de l'équipe entière",
                    "Elle n'a pas eu lieu : elle a occupé du temps",
                    "Elle prépare directement celle de la semaine suivante"
                ],
                a: 1,
                explication: "L'objet de décision est la première des trois conditions."
            },
            {
                q: "Que produit une culture où chaque message appelle une réponse en quelques minutes ?",
                options: [
                    "Une équipe plus réactive",
                    "L'impossibilité du travail de fond, pour tout le monde simultanément",
                    "Une meilleure circulation de l'information dans l'équipe tout entière"
                ],
                a: 1,
                explication: "Convenir explicitement des délais libère l'ensemble de l'équipe d'un coup."
            }
        ],

        // ---------------------------------------------------------------
        "recul-regulier": [
            // Série 1
            {
                q: "Que se passe-t-il sans moment de recul régulier ?",
                options: [
                    "La dérive s'accumule jusqu'à l'abandon en bloc",
                    "Le système finit toujours par se stabiliser de lui-même",
                    "Les tâches se hiérarchisent naturellement d'elles-mêmes"
                ],
                a: 0,
                explication: "Des engagements pris il y a six mois n'ont plus de sens, et personne ne décide de les abandonner."
            },
            {
                q: "Quelle question poser devant chaque projet en cours ?",
                options: [
                    "Si cela n'existait pas encore, est-ce que je le commencerais aujourd'hui ?",
                    "Combien de temps ai-je déjà investi ?",
                    "Qui d'autre pourrait le reprendre ?"
                ],
                a: 0,
                explication: "Si la réponse est non, le projet ne survit que par inertie."
            },
            {
                q: "Que faire quand un système d'organisation se dérègle ?",
                options: [
                    "En adopter un nouveau tout de suite",
                    "Rétablir la revue régulière",
                    "Réduire le nombre de projets suivis"
                ],
                a: 1,
                explication: "Changer d'outil reporte simplement le problème d'un trimestre."
            },
            // Série 2
            {
                q: "Que couvre la revue hebdomadaire de trente minutes ?",
                options: [
                    "Vider les boîtes, revoir les projets, planifier la semaine",
                    "Réviser ses objectifs annuels",
                    "Comparer les outils disponibles sur le marché en ce moment même"
                ],
                a: 0,
                explication: "C'est la revue qui empêche l'accumulation."
            },
            {
                q: "Que force la règle « rien de nouveau sans retirer quelque chose » ?",
                options: [
                    "Une réduction permanente de la charge",
                    "L'arbitrage au moment de l'ajout, plutôt que six mois plus tard dans l'urgence",
                    "La délégation systématique"
                ],
                a: 1,
                explication: "Ajouter est facile et gratifiant ; arrêter demande d'assumer un renoncement."
            },
            {
                q: "Pourquoi le temps déjà investi dans un projet ne devrait-il pas justifier de le poursuivre ?",
                options: [
                    "Parce qu'il ne reviendra pas, quoi qu'on fasse ensuite",
                    "Parce qu'il a été mal employé",
                    "Parce qu'un autre projet est toujours plus rentable que celui-ci"
                ],
                a: 0,
                explication: "Seule compte la valeur de ce qui reste à faire, pas celle de ce qui est dépensé."
            }
        ]
    },

    // Questions de synthèse — distinctes de celles des sous-sections
    synthese: [
        {
            q: "Quel est le fil conducteur de ce niveau ?",
            options: [
                "Les méthodes les plus strictes sont toujours les plus efficaces",
                "L'outil détermine la réussite d'un système",
                "Ce qui tient sur des années ne dépend pas de la motivation"
            ],
            a: 2,
            explication: "Rythme du corps, environnement, règles collectives, revue régulière : rien de tout cela ne demande de volonté quotidienne."
        },
        {
            q: "Qu'ont en commun le réglage de l'environnement et le passage à l'asynchrone ?",
            options: [
                "Les deux réclament un logiciel dédié",
                "Les deux ne fonctionnent qu'en équipe, jamais pour une seule personne",
                "Les deux suppriment un effort au lieu de demander plus de discipline"
            ],
            a: 2,
            explication: "L'un retire de la friction pour l'individu, l'autre pour le collectif."
        },
        {
            q: "Pourquoi l'organisation personnelle atteint-elle vite une limite ?",
            options: [
                "Parce que la plupart des interruptions et du temps perdu sont collectifs",
                "Parce que les méthodes personnelles sont peu fiables",
                "Parce qu'elle demande trop de constance"
            ],
            a: 0,
            explication: "Une équipe mal organisée annule l'organisation de chacun."
        },
        {
            q: "Une personne échoue pour la troisième fois à tenir une habitude. Quelle hypothèse est la plus probable ?",
            options: [
                "L'habitude repose sur la motivation plutôt que sur l'environnement",
                "Elle manque de discipline",
                "Elle a simplement choisi la mauvaise habitude au départ, voilà tout"
            ],
            a: 0,
            explication: "Ancrage, version minimale, friction retirée, règle de reprise : ce sont ces éléments qui manquent presque toujours."
        },
        {
            q: "Pourquoi un nouveau système fonctionne-t-il quelques semaines avant de dériver à son tour ?",
            options: [
                "Parce que la nouveauté motive durablement",
                "Parce qu'on vient de tout remettre à plat, et non parce qu'il est meilleur",
                "Parce qu'il est mieux adapté au départ"
            ],
            a: 1,
            explication: "Ce n'était pas la méthode qui manquait, c'était la revue."
        },
        {
            q: "Que reste-t-il si l'on n'applique qu'une seule chose de ce niveau ?",
            options: [
                "Placer le travail difficile dans son meilleur créneau",
                "Réduire fortement le nombre de réunions hebdomadaires de l'équipe",
                "Adopter un outil unique"
            ],
            a: 0,
            explication: "Deux heures au bon moment valent quatre heures au mauvais — et cela ne coûte rien."
        }
    ]
};
