// ===================================
// BANQUE DE QUESTIONS — SANTÉ AU TRAVAIL, NIVEAU INTERMÉDIAIRE
// ===================================
// 6 questions par sous-section : 3 affichées, les 3 autres prennent le relais
// au bout de deux semaines. Les questions de synthèse sont distinctes de
// celles des sous-sections — aucune n'est reprise deux fois.
//
// Aucune question ne porte sur un symptôme ni sur un état de santé.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "aigu-ou-chronique": [
            // Série 1
            {
                q: "Le stress est-il une pathologie ?",
                options: [
                    "Non : c'est une réponse d'adaptation, utile et normale",
                    "Oui, dès qu'il apparaît",
                    "Oui, s'il est fréquent"
                ],
                a: 0,
                explication: "Le problème n'est pas qu'elle se déclenche, c'est qu'elle ne s'arrête plus."
            },
            {
                q: "Qu'est-ce qui distingue le stress chronique du stress aigu ?",
                options: [
                    "L'absence de retour à la normale",
                    "Son intensité",
                    "Sa cause"
                ],
                a: 0,
                explication: "Ce n'est pas « beaucoup de stress aigu » : c'est un état différent."
            },
            {
                q: "Quel est le bon repère pour se situer ?",
                options: [
                    "La récupération, pas l'intensité",
                    "Le nombre d'heures travaillées",
                    "Le niveau de responsabilité"
                ],
                a: 0,
                explication: "Une période chargée suivie d'un week-end réparateur est le fonctionnement attendu."
            },
            // Série 2
            {
                q: "Pourquoi voit-on mal l'installation d'un stress chronique sur soi ?",
                options: [
                    "L'adaptation est progressive et déplace le point de comparaison",
                    "On refuse de l'admettre",
                    "Les symptômes sont invisibles"
                ],
                a: 0,
                explication: "D'où « ça va, c'est juste une période » tenu pendant huit mois."
            },
            {
                q: "Qui remarque souvent la situation en premier ?",
                options: [
                    "L'entourage",
                    "La personne concernée",
                    "L'employeur"
                ],
                a: 0,
                explication: "C'est plus visible de l'extérieur que de l'intérieur."
            },
            {
                q: "Que suppose la phrase « je gère mal le stress » ?",
                options: [
                    "Que la charge est une donnée et l'adaptation une compétence",
                    "Que la personne manque de méthode",
                    "Que le poste est mal défini"
                ],
                a: 0,
                explication: "Or les facteurs organisationnels sont documentés et relèvent de l'employeur."
            }
        ],

        // ---------------------------------------------------------------
        "exigence-et-latitude": [
            // Série 1
            {
                q: "Quelle combinaison est la plus associée au risque ?",
                options: [
                    "Forte exigence et faible latitude",
                    "Forte exigence et forte latitude",
                    "Faible exigence et faible latitude"
                ],
                a: 0,
                explication: "C'est la combinaison qui compte, pas l'exigence seule."
            },
            {
                q: "Qu'appelle-t-on la latitude ?",
                options: [
                    "La marge laissée pour répondre à l'exigence",
                    "Le nombre d'heures de travail",
                    "Le niveau de rémunération"
                ],
                a: 0,
                explication: "Décider de l'ordre, de la méthode, du moment ; avoir une prise sur ce qui arrive."
            },
            {
                q: "Quel est l'effet du soutien social dans ce modèle ?",
                options: [
                    "Il modifie l'effet de tout le reste",
                    "Il n'a pas d'effet mesuré",
                    "Il remplace la latitude"
                ],
                a: 0,
                explication: "La situation la plus défavorable cumule forte exigence, faible latitude et faible soutien."
            },
            // Série 2
            {
                q: "Un poste dit « actif » dans ce modèle, c'est :",
                options: [
                    "Exigeant, avec de la marge de manœuvre",
                    "Peu exigeant et autonome",
                    "Très exigeant et contraint"
                ],
                a: 0,
                explication: "Exigeant mais tenable, souvent stimulant."
            },
            {
                q: "Un poste « passif » est-il confortable ?",
                options: [
                    "Non : c'est une situation d'usure par l'ennui, décrite de longue date",
                    "Oui, c'est le plus enviable",
                    "Oui, s'il est bien rémunéré"
                ],
                a: 0,
                explication: "Désengagement, perte de compétences, difficulté croissante à en sortir."
            },
            {
                q: "À quoi sert surtout ce modèle en pratique ?",
                options: [
                    "À nommer ce qui manque, pour pouvoir le demander",
                    "À se ranger dans une case",
                    "À comparer deux entreprises"
                ],
                a: 0,
                explication: "« J'ai peu de marge sur l'ordre des priorités » ouvre une conversation concrète."
            }
        ],

        // ---------------------------------------------------------------
        "la-recuperation": [
            // Série 1
            {
                q: "Quel est le repos quotidien minimal entre deux journées ?",
                options: [
                    "11 heures consécutives",
                    "8 heures consécutives",
                    "9 heures consécutives"
                ],
                a: 0,
                explication: "Et 35 heures consécutives par semaine. Ce sont des minimums opposables."
            },
            {
                q: "Trois fois deux heures valent-elles six heures de récupération ?",
                options: [
                    "Non : la récupération demande du temps continu",
                    "Oui, le total est le même",
                    "Oui, si les coupures sont bien réparties"
                ],
                a: 0,
                explication: "Fractionnée, elle ne se produit pas."
            },
            {
                q: "Quelles sont les trois conditions d'une vraie récupération ?",
                options: [
                    "Détachement psychologique, contrôle, changement de registre",
                    "Sommeil, sport, alimentation",
                    "Silence, obscurité, immobilité"
                ],
                a: 0,
                explication: "Une soirée passée à ne rien faire tout en ruminant n'en remplit aucune."
            },
            // Série 2
            {
                q: "Que signifie « minimums opposables » ?",
                options: [
                    "Ce ne sont pas des recommandations de confort : ils s'imposent",
                    "Qu'ils sont conseillés",
                    "Qu'ils varient selon les entreprises"
                ],
                a: 0,
                explication: "Passer en dessous régulièrement engage la responsabilité de l'employeur."
            },
            {
                q: "Combien de temps durent les effets bénéfiques d'un congé ?",
                options: [
                    "Ils s'estompent en quelques semaines après le retour",
                    "Toute l'année",
                    "Jusqu'au congé suivant"
                ],
                a: 0,
                explication: "Un congé répare une fatigue ; il ne corrige pas l'organisation qui la produit."
            },
            {
                q: "Qu'est-ce que le détachement psychologique ?",
                options: [
                    "Ne plus y penser, et pas seulement ne plus le faire",
                    "Prendre de la distance avec ses collègues",
                    "Réduire son implication au travail"
                ],
                a: 0,
                explication: "C'est la condition la plus souvent manquante des trois."
            }
        ],

        // ---------------------------------------------------------------
        "la-deconnexion": [
            // Série 1
            {
                q: "Ne pas répondre en dehors des heures de travail peut-il être reproché ?",
                options: [
                    "Non : c'est l'objet même du droit à la déconnexion",
                    "Oui, si c'est urgent",
                    "Oui, en l'absence d'accord d'entreprise"
                ],
                a: 0,
                explication: "Le droit existe en France depuis 2017."
            },
            {
                q: "Quel effet a un message professionnel envoyé à 23 h ?",
                options: [
                    "Il indique aux destinataires ce qui est attendu",
                    "Aucun, si l'on précise de ne pas répondre",
                    "Il allège la journée du lendemain"
                ],
                a: 0,
                explication: "C'est pourquoi l'envoi différé change plus les habitudes qu'une charte affichée."
            },
            {
                q: "Rester joignable « au cas où » sans rien recevoir, quel est le coût ?",
                options: [
                    "L'attente empêche le détachement, donc la récupération",
                    "Aucun, s'il n'y a pas de sollicitation",
                    "Seulement la fatigue du téléphone"
                ],
                a: 0,
                explication: "Ce n'est pas le nombre de messages reçus qui pèse, c'est la possibilité d'en recevoir."
            },
            // Série 2
            {
                q: "Que doivent définir les entreprises sur ce sujet ?",
                options: [
                    "Les modalités d'exercice du droit à la déconnexion, par accord ou par charte",
                    "Un horaire de fermeture des serveurs",
                    "Rien, c'est une affaire individuelle"
                ],
                a: 0,
                explication: "Les dispositifs vont de l'absence d'obligation de répondre à l'envoi différé."
            },
            {
                q: "Qu'est-ce qui remplace la séparation par le lieu, en télétravail ?",
                options: [
                    "Des marqueurs : heure de fin, espace dédié, rituel de clôture",
                    "Une pièce entièrement séparée, sans quoi rien ne marche",
                    "Des horaires imposés par l'employeur"
                ],
                a: 0,
                explication: "Ces signaux sont artificiels et fonctionnent : le cerveau utilise le contexte pour changer de mode."
            },
            {
                q: "La déconnexion est-elle une affaire uniquement individuelle ?",
                options: [
                    "Non : elle se joue en grande partie dans ce que chacun envoie",
                    "Oui, chacun gère ses frontières",
                    "Oui, sauf en cas d'accord d'entreprise"
                ],
                a: 0,
                explication: "Ce qu'on envoie le soir fixe ce que les autres croient devoir faire."
            }
        ]
    },

    // Questions de synthèse — distinctes de celles des sous-sections
    synthese: [
        {
            q: "Quel est le fil conducteur de ce niveau ?",
            options: [
                "Ce qui fait qu'une charge reste tenable, ou cesse de l'être",
                "Comment réduire sa charge de travail",
                "Comment mieux résister au stress"
            ],
            a: 0,
            explication: "La distinction n'est pas entre stressant et pas stressant."
        },
        {
            q: "Qu'ont en commun la latitude et le soutien ?",
            options: [
                "Les deux modifient l'effet d'une même charge de travail",
                "Les deux dépendent du salarié",
                "Les deux se mesurent en heures"
            ],
            a: 0,
            explication: "Deux postes également chargés n'ont pas le même effet."
        },
        {
            q: "Une personne travaille 45 h par semaine avec 10 h de coupure entre deux journées. Que dire ?",
            options: [
                "Le repos quotidien minimal de 11 h n'est pas respecté",
                "Tout est conforme",
                "Cela dépend du secteur uniquement"
            ],
            a: 0,
            explication: "Une heure d'écart, répétée toute l'année, qui n'apparaît sur aucun tableau de bord."
        },
        {
            q: "Pourquoi noter par écrit, daté, comment on va au travail aujourd'hui ?",
            options: [
                "Parce que l'adaptation efface les points de comparaison",
                "Pour constituer une preuve juridique",
                "Pour le montrer à son employeur"
            ],
            a: 0,
            explication: "Relu dans six mois, ce papier dira ce que la mémoire ne dira pas."
        },
        {
            q: "Quelle mesure de ce niveau coûte le moins et change le plus pour une équipe ?",
            options: [
                "Différer l'envoi des messages tardifs",
                "Réduire le nombre de réunions",
                "Ajouter une charte de déconnexion"
            ],
            a: 0,
            explication: "Un clic, et cela modifie les attentes de tout le monde."
        },
        {
            q: "Un collègue dit ne pas avoir récupéré depuis des semaines. Quelle est la réponse utile ?",
            options: [
                "L'orienter vers un médecin ou le médecin du travail, tenus au secret",
                "Lui conseiller de mieux gérer son stress",
                "Lui suggérer de prendre des congés"
            ],
            a: 0,
            explication: "Ni ce guide ni un proche ne peuvent aller plus loin que nommer et orienter."
        }
    ]
};
