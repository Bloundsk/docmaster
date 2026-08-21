// ===================================
// BANQUE DE QUESTIONS — GUIDE PRODUCTIVITÉ & ORGANISATION
// ===================================
// 6 questions par sous-section : 3 affichées, les 3 autres au bout de deux
// semaines. Les questions de synthèse sont distinctes.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "la-méthode-pomodoro": [
            // Série 1
            {
                q: "Quel est le rythme de base de la méthode Pomodoro ?",
                options: [
                    "50 minutes de travail, 10 de pause",
                    "25 minutes sans interruption, puis 5 minutes de pause",
                    "90 minutes de travail, 20 de pause"
                ],
                a: 1,
                explication: "Après quatre cycles, une pause longue de 15 à 30 minutes."
            },
            {
                q: "Contre quoi la méthode agit-elle en premier lieu ?",
                options: [
                    "La fatigue de fin de journée",
                    "La procrastination : un engagement court est facile à prendre",
                    "Le manque de compétences"
                ],
                a: 1,
                explication: "« Travailler sur ce dossier » est vague et angoissant ; « y consacrer 25 minutes » est faisable."
            },
            {
                q: "Que faire d'une idée qui surgit pendant un pomodoro ?",
                options: [
                    "La traiter immédiatement",
                    "La noter sur un papier et reprendre",
                    "L'oublier volontairement"
                ],
                a: 1,
                explication: "Reprendre le fil après une coupure demande plusieurs minutes de remise en route."
            },
            // Série 2
            {
                q: "D'où vient réellement le gain de la méthode ?",
                options: [
                    "D'une vitesse de travail accrue",
                    "De la suppression du temps perdu à recommencer après chaque interruption",
                    "D'une meilleure concentration innée"
                ],
                a: 1,
                explication: "Un travail interrompu six fois dans l'heure n'avance pas lentement : il ne démarre jamais."
            },
            {
                q: "Faut-il enchaîner sans pause quand le travail avance bien ?",
                options: [
                    "Oui, il faut profiter de l'élan",
                    "Non : les pauses font partie du dispositif et permettent au quatrième bloc d'être aussi bon que le premier",
                    "Oui, à condition de s'arrêter avant deux heures"
                ],
                a: 1,
                explication: "C'est ce qui produit l'épuisement en fin de journée."
            },
            {
                q: "La durée de 25 minutes est-elle intangible ?",
                options: [
                    "Oui, c'est la base scientifique de la méthode",
                    "Non : certaines tâches créatives demandent 50 minutes pour entrer dedans",
                    "Oui, sinon la méthode ne fonctionne plus"
                ],
                a: 1,
                explication: "Adapte la durée, garde le principe : un bloc réellement continu."
            }
        ],

        // ---------------------------------------------------------------
        "la-méthode-gtd": [
            // Série 1
            {
                q: "Sur quel constat repose la méthode GTD ?",
                options: [
                    "La mémoire est excellente pour stocker",
                    "La mémoire est bonne pour réfléchir et mauvaise pour stocker",
                    "Il faut travailler plus longtemps"
                ],
                a: 1,
                explication: "Tant qu'une tâche n'est notée nulle part, l'esprit y revient sans cesse pour vérifier qu'elle n'est pas oubliée."
            },
            {
                q: "Quelles sont les cinq étapes de GTD ?",
                options: [
                    "Planifier, déléguer, exécuter, contrôler, archiver",
                    "Collecter, clarifier, organiser, réviser, agir",
                    "Lister, prioriser, découper, faire, célébrer"
                ],
                a: 1,
                explication: "La clarification consiste à définir, pour chaque élément, la prochaine action physique concrète."
            },
            {
                q: "En quoi consiste la règle des deux minutes ?",
                options: [
                    "Réfléchir deux minutes avant de commencer",
                    "Si une action prend moins de deux minutes, la faire immédiatement",
                    "Limiter chaque tâche à deux minutes"
                ],
                a: 1,
                explication: "La noter, la classer, la relire et la retrouver coûterait plus cher que de l'exécuter."
            },
            // Série 2
            {
                q: "« Organiser le séminaire » est repoussé depuis des semaines. Pourquoi ?",
                options: [
                    "Par manque de motivation",
                    "Ce n'est pas une action mais un projet : le cerveau ne sait pas par où commencer",
                    "Parce que l'échéance est lointaine"
                ],
                a: 1,
                explication: "« Appeler le traiteur au 01 23 45 67 89 pour un devis 30 personnes » se fait sans y penser."
            },
            {
                q: "Quelle étape tout le monde abandonne en premier, alors qu'elle fait tenir le système ?",
                options: [
                    "La collecte",
                    "La revue hebdomadaire",
                    "L'organisation par contexte"
                ],
                a: 1,
                explication: "Sans elle, la liste se remplit d'éléments périmés, on cesse d'y croire, et on retourne à la mémoire."
            },
            {
                q: "Quel est le but réel de GTD ?",
                options: [
                    "Tout faire dans la journée",
                    "N'avoir plus rien à retenir",
                    "Travailler plus vite"
                ],
                a: 1,
                explication: "Un esprit déchargé réfléchit mieux. C'est la charge mentale que la méthode vise, pas la vitesse."
            }
        ],

        // ---------------------------------------------------------------
        "la-matrice-deisenhower": [
            // Série 1
            {
                q: "Sur quelles deux dimensions repose la matrice d'Eisenhower ?",
                options: [
                    "La difficulté et la durée",
                    "L'urgence et l'importance",
                    "Le coût et le bénéfice"
                ],
                a: 1,
                explication: "Quatre cases : faire maintenant, planifier, déléguer, supprimer."
            },
            {
                q: "Quel quadrant a l'effet le plus durable ?",
                options: [
                    "Urgent et important",
                    "Important mais non urgent",
                    "Urgent mais peu important"
                ],
                a: 1,
                explication: "Se former, prévenir, entretenir ses relations : rien n'a de date limite, donc rien ne s'impose jamais."
            },
            {
                q: "D'où viennent la plupart des urgences d'aujourd'hui ?",
                options: [
                    "D'événements imprévisibles",
                    "Des tâches importantes non urgentes négligées il y a six mois",
                    "D'une mauvaise organisation des collègues"
                ],
                a: 1,
                explication: "Une compétence non entretenue devient une urgence de reconversion ; un contrôle repoussé devient une panne."
            },
            // Série 2
            {
                q: "Quelle question poser face à une tâche présentée comme urgente ?",
                options: [
                    "Combien de temps cela prendra-t-il ?",
                    "Urgent pour qui ?",
                    "Qui l'a demandé en premier ?"
                ],
                a: 1,
                explication: "Beaucoup d'urgences sont celles de quelqu'un d'autre, transférées par un message insistant."
            },
            {
                q: "Comment protéger concrètement le quadrant important non urgent ?",
                options: [
                    "En y pensant chaque matin",
                    "En bloquant un créneau récurrent dans l'agenda, traité comme un rendez-vous",
                    "En le plaçant en tête de sa liste de tâches"
                ],
                a: 1,
                explication: "Ce qui n'est pas dans l'agenda sera toujours absorbé par une urgence."
            },
            {
                q: "Que signifie un quadrant « supprimer » resté vide ?",
                options: [
                    "Que tu es bien organisé",
                    "Que tu n'as renoncé à rien : l'exercice n'a pas joué son rôle",
                    "Que tes tâches sont toutes utiles"
                ],
                a: 1,
                explication: "La matrice force un arbitrage, et un arbitrage suppose que certaines choses ne seront pas faites."
            }
        ],

        // ---------------------------------------------------------------
        "les-outils-de-gestion-de-tâches": [
            // Série 1
            {
                q: "Qu'apporte réellement un outil de gestion de tâches ?",
                options: [
                    "Il rend organisé",
                    "Il rend visible une organisation qui existe déjà, ou son absence",
                    "Il remplace la méthode"
                ],
                a: 1,
                explication: "Aucun outil ne compense l'absence de système."
            },
            {
                q: "Quel critère compte le plus dans le choix d'un outil ?",
                options: [
                    "Le nombre de fonctionnalités",
                    "La vitesse de saisie : au-delà de cinq secondes, tu cesseras de noter",
                    "Son intégration avec d'autres logiciels"
                ],
                a: 1,
                explication: "Le système s'effondre à l'instant précis où noter devient pénible."
            },
            {
                q: "Que produisent trois applications de tâches utilisées en parallèle ?",
                options: [
                    "Une couverture plus complète",
                    "La certitude qu'aucune n'est à jour",
                    "Une meilleure répartition par contexte"
                ],
                a: 1,
                explication: "Un système imparfait mais unique bat trois systèmes parfaits."
            },
            // Série 2
            {
                q: "Quel est le vrai test d'un nouvel outil ?",
                options: [
                    "Les premiers jours d'utilisation",
                    "La troisième semaine, quand l'enthousiasme est retombé",
                    "Le nombre de tâches saisies le premier mois"
                ],
                a: 1,
                explication: "Tout outil paraît formidable au début : c'est la nouveauté qui plaît, pas l'outil."
            },
            {
                q: "Quelle est la principale limite de Notion pour la gestion de tâches ?",
                options: [
                    "Il est payant",
                    "Sa souplesse est un piège : on aménage au lieu de faire",
                    "Il ne fonctionne pas hors ligne"
                ],
                a: 1,
                explication: "Réorganiser ses listes ressemble à du travail sans en être."
            },
            {
                q: "Tu as changé d'outil trois fois cette année. Quel est le signal ?",
                options: [
                    "Tu affines ta méthode",
                    "Le problème n'est probablement pas l'outil",
                    "Le marché évolue vite"
                ],
                a: 1,
                explication: "Comparer des applications est une forme de procrastination particulièrement confortable."
            }
        ]
    },

    // -------------------------------------------------------------------
    // SYNTHÈSE
    // -------------------------------------------------------------------
    synthese: [
        // Série 1
        {
            q: "Que cherchent à réduire les méthodes de productivité présentées ?",
            options: [
                "Le temps de travail total",
                "Ce qui coûte sans rien produire : interruptions, décisions répétées, charge mentale",
                "Le nombre de projets menés de front"
            ],
            a: 1,
            explication: "Aucune ne vise à te faire travailler plus vite."
        },
        {
            q: "Combien de méthodes adopter à la fois ?",
            options: [
                "Toutes, elles se complètent",
                "Une seule, à laisser vivre trois semaines",
                "Deux au minimum, pour comparer"
            ],
            a: 1,
            explication: "Empiler quatre systèmes revient à n'en avoir aucun."
        },
        {
            q: "Quel est le principal risque du domaine de la productivité lui-même ?",
            options: [
                "Les méthodes se contredisent",
                "On passe plus de temps à choisir une méthode qu'à faire le travail",
                "Les outils coûtent cher"
            ],
            a: 1,
            explication: "Installer un nouvel outil procure une satisfaction très proche de celle d'avoir avancé — sans avoir avancé."
        },
        // Série 2
        {
            q: "Tu as deux heures pour une tâche exigeante et beaucoup de notifications. Que faire d'abord ?",
            options: [
                "Commencer immédiatement pour ne pas perdre de temps",
                "Couper les notifications, puis lancer un bloc de travail continu",
                "Traiter les notifications pour avoir l'esprit libre"
            ],
            a: 1,
            explication: "Sans cette étape, la méthode Pomodoro n'a aucun sens."
        },
        {
            q: "Une tâche traîne sur ta liste depuis un mois. Quelle est la cause la plus probable ?",
            options: [
                "Un manque de motivation",
                "Elle est mal formulée : ce n'est pas une action concrète",
                "Elle n'est pas assez importante"
            ],
            a: 1,
            explication: "La reformuler en prochaine action physique suffit souvent à la débloquer."
        },
        {
            q: "Quel est le meilleur outil de gestion de tâches ?",
            options: [
                "Celui qui a le plus de fonctionnalités",
                "Celui que tu ouvriras encore dans trois semaines",
                "Celui utilisé par les professionnels du secteur"
            ],
            a: 1,
            explication: "Tous les autres critères viennent loin derrière. Une feuille de papier tenue sérieusement bat un système abandonné."
        }
    ]
};
