// ===================================
// BANQUE DE QUESTIONS — APPRENDRE À APPRENDRE, NIVEAU AVANCÉ
// ===================================
// 6 questions par sous-section : 3 affichées, les 3 autres prennent le relais
// au bout de deux semaines. Les questions de synthèse sont distinctes de
// celles des sous-sections — aucune n'est reprise deux fois.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "frequence-et-vocabulaire": [
            // Série 1
            {
                q: "Quelle part d'un texte courant les 1 000 mots les plus fréquents couvrent-ils ?",
                options: [
                    "Environ 50 %",
                    "Environ 80 %",
                    "Environ 95 %"
                ],
                a: 1,
                explication: "Les mille suivants n'ajoutent que cinq points. Le rendement décroît très vite."
            },
            {
                q: "Avec 2 000 mots connus, combien de mots inconnus par page de 250 mots ?",
                options: [
                    "Environ 37",
                    "Environ 10",
                    "Environ 3"
                ],
                a: 0,
                explication: "85 % de couverture. Le texte reste illisible malgré l'impression de connaître presque tout."
            },
            {
                q: "Quelle couverture faut-il pour lire de façon fluide ?",
                options: [
                    "Environ 85 %",
                    "Environ 92 %",
                    "Environ 98 %"
                ],
                a: 2,
                explication: "Soit de l'ordre de 10 000 mots — beaucoup plus loin qu'on ne le croit à 2 000."
            },
            // Série 2
            {
                q: "Par quoi commencer quand on est sous les 2 000 mots ?",
                options: [
                    "Les listes de fréquence",
                    "Le vocabulaire d'un thème qui plaît",
                    "La lecture de romans"
                ],
                a: 0,
                explication: "Le premier millier rapporte autant que les neuf suivants réunis."
            },
            {
                q: "Au-delà de 2 000 mots, qu'est-ce qui devient plus rentable que les listes ?",
                options: [
                    "La lecture de textes accessibles",
                    "Les listes plus longues",
                    "La grammaire"
                ],
                a: 0,
                explication: "Elle apporte les mots dans leur contexte, et c'est le contexte qui distingue les emplois."
            },
            {
                q: "Ce raisonnement sur la fréquence vaut-il uniquement pour les langues ?",
                options: [
                    "Oui, il est propre au vocabulaire",
                    "Non : dans tout domaine, une petite fraction des notions couvre la majorité des cas",
                    "Oui, sauf en mathématiques"
                ],
                a: 1,
                explication: "C'est ce qui justifie de choisir l'ordre d'apprentissage plutôt que de le subir."
            }
        ],

        // ---------------------------------------------------------------
        "le-transfert": [
            // Série 1
            {
                q: "Qu'est-ce que le transfert ?",
                options: [
                    "La capacité d'utiliser ailleurs ce qu'on a appris ici",
                    "Le passage de la mémoire courte à la mémoire longue",
                    "Le fait de changer de méthode"
                ],
                a: 0,
                explication: "C'est le but implicite de tout apprentissage, et il se produit moins souvent qu'on ne le suppose."
            },
            {
                q: "Pourquoi un élève bloque-t-il en physique sur une équation qu'il résout en mathématiques ?",
                options: [
                    "Parce qu'il a oublié la méthode",
                    "Parce que rien dans le nouveau décor n'appelle le souvenir",
                    "Parce que la physique est plus difficile"
                ],
                a: 1,
                explication: "La connaissance est là ; l'indice qui la déclenche, non."
            },
            {
                q: "Qu'améliorent réellement les jeux d'entraînement cérébral ?",
                options: [
                    "La mémoire en général",
                    "Surtout ces jeux, et des tâches très proches",
                    "L'attention au travail"
                ],
                a: 1,
                explication: "Ce n'est pas anecdotique : c'est la règle générale du transfert."
            },
            // Série 2
            {
                q: "Quel est le levier le plus fort pour favoriser le transfert ?",
                options: [
                    "Varier les contextes",
                    "Répéter davantage",
                    "Prendre de meilleures notes"
                ],
                a: 0,
                explication: "La même notion rencontrée dans quatre décors se détache de chacun d'eux."
            },
            {
                q: "Pourquoi remonter au principe plutôt qu'à la recette ?",
                options: [
                    "Parce qu'une recette ne se transporte pas, un principe si",
                    "Parce que c'est plus court",
                    "Parce que c'est plus facile à retenir"
                ],
                a: 0,
                explication: "D'où l'utilité de la question « de quoi est-ce un cas particulier ? »."
            },
            {
                q: "Réviser un oral en le lisant dans sa tête, quel est le problème ?",
                options: [
                    "L'entraînement porte sur autre chose que ce qui sera demandé",
                    "Cela prend trop de temps",
                    "Il n'y en a pas"
                ],
                a: 0,
                explication: "On devient bon à ce qu'on pratique, pas à ce qui y ressemble."
            }
        ],

        // ---------------------------------------------------------------
        "evaluer-une-methode": [
            // Série 1
            {
                q: "Quelle est la question décisive pour évaluer une méthode d'apprentissage ?",
                options: [
                    "Mesurée combien de temps après ?",
                    "Sur combien de personnes ?",
                    "Publiée dans quelle revue ?"
                ],
                a: 0,
                explication: "Presque toutes les méthodes agréables gagnent le test immédiat et perdent celui à une semaine."
            },
            {
                q: "Que vaut une méthode comparée à « ne rien faire » ?",
                options: [
                    "Rien : elle doit faire mieux qu'une autre méthode",
                    "C'est une comparaison suffisante",
                    "Cela dépend de la durée"
                ],
                a: 0,
                explication: "Presque tout bat l'absence de travail. Ce n'est pas ce qu'on cherche à savoir."
            },
            {
                q: "Que dit l'état des travaux sur les styles d'apprentissage ?",
                options: [
                    "Adapter l'enseignement au style supposé ne produit pas l'effet annoncé",
                    "Ils sont confirmés depuis les années 2000",
                    "Ils ne concernent que les enfants"
                ],
                a: 0,
                explication: "L'idée reste populaire chez les enseignants ; les études qui la testent correctement ne la trouvent pas."
            },
            // Série 2
            {
                q: "D'où vient la pyramide « on retient 10 % de ce qu'on lit, 90 % de ce qu'on enseigne » ?",
                options: [
                    "D'aucune source identifiable : les nombres n'ont jamais été mesurés",
                    "D'une étude américaine des années 1960",
                    "Des travaux d'Ebbinghaus"
                ],
                a: 0,
                explication: "Des chiffres ronds qui circulent depuis des décennies sans support."
            },
            {
                q: "Que montrait réellement l'étude à l'origine de « l'effet Mozart » ?",
                options: [
                    "Un effet très limité, sur une tâche précise, pendant quelques minutes",
                    "Une hausse durable du QI",
                    "Un effet chez les nourrissons"
                ],
                a: 0,
                explication: "Le reste est un emballement médiatique."
            },
            {
                q: "Pourquoi les méthodes qui résistent à l'examen sont-elles inconfortables ?",
                options: [
                    "Parce que l'effort de récupération est ce qui renforce la trace",
                    "Par hasard",
                    "Parce qu'elles sont mal conçues"
                ],
                a: 0,
                explication: "Une méthode qui promet de retenir sans effort contredit le mécanisme connu."
            }
        ],

        // ---------------------------------------------------------------
        "construire-son-systeme": [
            // Série 1
            {
                q: "Quel défaut partagent toutes les techniques de ce parcours ?",
                options: [
                    "Elles supposent qu'on y pense",
                    "Elles coûtent cher",
                    "Elles demandent un logiciel"
                ],
                a: 0,
                explication: "La motivation baisse, les semaines chargent, et une méthode qui demande d'y penser cède."
            },
            {
                q: "Sous quelle forme le contenu doit-il entrer dans le système ?",
                options: [
                    "Sous forme de questions",
                    "Sous forme de notes bien rédigées",
                    "Sous forme de résumés"
                ],
                a: 0,
                explication: "Sans quoi, le jour venu, on relira au lieu de se tester."
            },
            {
                q: "À quoi sert la version de cinq minutes ?",
                options: [
                    "À ne pas rompre la série les jours impossibles",
                    "À progresser plus vite",
                    "À rattraper le retard"
                ],
                a: 0,
                explication: "Son but n'est pas de faire progresser."
            },
            // Série 2
            {
                q: "Que révèle une carte ratée dix fois de suite ?",
                options: [
                    "Qu'elle est mal écrite",
                    "Qu'elle est difficile",
                    "Qu'il faut la revoir plus souvent"
                ],
                a: 0,
                explication: "La revue mensuelle sert précisément à reformuler ce qui revient toujours faux."
            },
            {
                q: "Quel critère appliquer avant d'ajouter quelque chose au système ?",
                options: [
                    "En aurai-je besoin de tête ?",
                    "Est-ce intéressant ?",
                    "Est-ce au programme ?"
                ],
                a: 0,
                explication: "Si la réponse est non, cela relève d'une note à retrouver, pas d'une carte à mémoriser."
            },
            {
                q: "Quinze minutes quotidiennes ou deux heures le dimanche ?",
                options: [
                    "Quinze minutes quotidiennes, et de loin",
                    "Deux heures le dimanche",
                    "Les deux se valent"
                ],
                a: 0,
                explication: "Ce qui n'est pas dans l'agenda n'a pas lieu ; et l'espacement fait le reste."
            }
        ]
    },

    // Questions de synthèse — distinctes de celles des sous-sections
    synthese: [
        {
            q: "Quel est le fil conducteur de ce niveau ?",
            options: [
                "Cesser d'appliquer des méthodes pour commencer à les évaluer",
                "Apprendre plus vite",
                "Mémoriser davantage"
            ],
            a: 0,
            explication: "Y compris celles de ce guide : la question du délai vaut aussi pour lui."
        },
        {
            q: "Qu'ont en commun la fréquence lexicale et le choix de ses points faibles ?",
            options: [
                "Les deux disent que l'effort doit être placé, pas seulement fourni",
                "Les deux concernent les langues",
                "Les deux demandent un logiciel"
            ],
            a: 0,
            explication: "Un petit nombre d'éléments porte l'essentiel du résultat, dans les deux cas."
        },
        {
            q: "Une application promet de retenir mille mots sans effort en trois semaines. Quel signal cela envoie-t-il ?",
            options: [
                "La promesse contredit le mécanisme connu de la mémoire",
                "C'est plausible avec une bonne méthode",
                "Il faut vérifier le nombre d'utilisateurs"
            ],
            a: 0,
            explication: "L'effort de récupération est précisément ce qui renforce la trace."
        },
        {
            q: "Pourquoi un système d'apprentissage a-t-il besoin d'une revue ?",
            options: [
                "Parce qu'il dérive : cartes inutiles, questions mal posées, sujets abandonnés",
                "Parce que les logiciels changent",
                "Parce que la mémoire évolue"
            ],
            a: 0,
            explication: "Un quart d'heure par mois suffit à l'empêcher d'être abandonné en bloc."
        },
        {
            q: "Quelqu'un te dit être « plutôt visuel ». Que répondre d'utile ?",
            options: [
                "Que chacun a des préférences, mais qu'adapter l'enseignement à ces préférences n'améliore pas les résultats",
                "Qu'il doit privilégier les schémas",
                "Que c'est une question de génétique"
            ],
            a: 0,
            explication: "La préférence est réelle ; c'est l'effet sur l'apprentissage qui n'est pas retrouvé."
        },
        {
            q: "Que reste-t-il si l'on n'applique qu'une seule chose de ce niveau ?",
            options: [
                "Poser « mesuré combien de temps après ? » devant toute méthode",
                "Apprendre le vocabulaire par fréquence",
                "Faire une revue mensuelle"
            ],
            a: 0,
            explication: "Une seule question suffit à trier la plus grande partie du domaine."
        }
    ]
};
