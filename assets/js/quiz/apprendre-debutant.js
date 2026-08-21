// ===================================
// BANQUE DE QUESTIONS — APPRENDRE À APPRENDRE, NIVEAU DÉBUTANT
// ===================================
// 6 questions par sous-section : 3 affichées, les 3 autres prennent le relais
// au bout de deux semaines. Les questions de synthèse sont distinctes de
// celles des sous-sections — aucune n'est reprise deux fois.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "la-courbe-de-loubli": [
            // Série 1
            {
                q: "Quelle est la forme de la courbe de l'oubli ?",
                options: [
                    "Une décroissance régulière",
                    "Très rapide au début, puis de plus en plus lente",
                    "Lente au début, puis brutale"
                ],
                a: 1,
                explication: "C'est cette forme, et non la vitesse moyenne, qui dicte le moment de réviser."
            },
            {
                q: "Sur 40 termes appris aujourd'hui et jamais revus, combien en reste-t-il après une semaine ?",
                options: [
                    "Environ 8",
                    "Environ 24",
                    "Environ 30"
                ],
                a: 0,
                explication: "24 le lendemain, 18 au bout de deux jours, 8 après une semaine."
            },
            {
                q: "Quand une révision est-elle la plus rentable ?",
                options: [
                    "Trois semaines après, quand tout est bien tassé",
                    "Tôt, pendant que la perte est la plus rapide",
                    "Le moment n'a pas d'importance"
                ],
                a: 1,
                explication: "Une révision le lendemain sauve plus de matière qu'une révision tardive, pour le même temps."
            },
            // Série 2
            {
                q: "Pourquoi le bachotage de la veille fonctionne-t-il pour l'examen ?",
                options: [
                    "Parce qu'il ancre durablement",
                    "Parce que la courbe part de haut et que l'examen tombe avant qu'elle ne descende",
                    "Parce que le stress améliore la mémoire"
                ],
                a: 1,
                explication: "Elle descend ensuite exactement pareil : trois semaines après, il ne reste presque rien."
            },
            {
                q: "Oublier ce qu'on n'a vu qu'une fois est le signe de quoi ?",
                options: [
                    "D'un apprentissage mal fait",
                    "Du fonctionnement normal de la mémoire",
                    "D'un manque d'attention"
                ],
                a: 1,
                explication: "La question utile n'est pas « comment mieux apprendre du premier coup » mais « quand y revenir »."
            },
            {
                q: "Quelle part de la perte totale a lieu dans les deux premiers jours ?",
                options: [
                    "Plus de la moitié",
                    "Environ un dixième",
                    "Elle est répartie également sur le mois"
                ],
                a: 0,
                explication: "Attendre le week-end pour réviser, c'est arriver après la bataille."
            }
        ],

        // ---------------------------------------------------------------
        "la-repetition-espacee": [
            // Série 1
            {
                q: "Que fait une révision réussie à la courbe de l'oubli ?",
                options: [
                    "Elle la remonte seulement",
                    "Elle la remonte et l'aplatit",
                    "Elle ne la change pas"
                ],
                a: 1,
                explication: "Ce qui tenait un jour tient ensuite trois jours, puis une semaine, puis trois."
            },
            {
                q: "Quel est le principe qui gouverne les intervalles ?",
                options: [
                    "Réviser à intervalle constant",
                    "Revenir juste avant d'oublier",
                    "Réviser dès qu'on a un moment"
                ],
                a: 1,
                explication: "Trop tôt gaspille du temps sur ce qui est encore su ; trop tard revient à réapprendre."
            },
            {
                q: "Pour 60 termes à tenir six mois, à 8 secondes par terme, combien coûte l'espacement ?",
                options: [
                    "48 minutes au total",
                    "3 h 20 au total",
                    "Une heure par semaine"
                ],
                a: 0,
                explication: "Contre 3 h 20 en relisant tout chaque semaine : quatre fois moins de temps."
            },
            // Série 2
            {
                q: "Qu'est-ce qui rend la répétition espacée difficile à tenir ?",
                options: [
                    "L'effort qu'elle demande",
                    "Le calendrier qu'elle suppose",
                    "Le matériel nécessaire"
                ],
                a: 1,
                explication: "Personne ne retient de tête que tel terme est à revoir dans 21 jours et tel autre dans 3."
            },
            {
                q: "Que font les logiciels de cartes mémoire comme Anki ?",
                options: [
                    "Ils tiennent le calendrier des révisions",
                    "Ils mémorisent à ta place",
                    "Ils rédigent les fiches"
                ],
                a: 0,
                explication: "Une boîte à fiches et cinq intercalaires font le même travail, sans écran."
            },
            {
                q: "Une séance de révision où tout tombe juste indique quoi ?",
                options: [
                    "Que le sujet est acquis",
                    "Que les intervalles sont trop courts",
                    "Que les questions sont bien posées"
                ],
                a: 1,
                explication: "Une bonne séance est celle où l'on se trompe régulièrement."
            }
        ],

        // ---------------------------------------------------------------
        "se-tester-plutot-que-relire": [
            // Série 1
            {
                q: "Quel est le rôle du contrôle dans l'apprentissage ?",
                options: [
                    "Il vérifie ce qui a été appris",
                    "Il est l'apprentissage lui-même",
                    "Il sert surtout à noter"
                ],
                a: 1,
                explication: "Chercher une réponse dans sa mémoire renforce le souvenir bien plus que le relire."
            },
            {
                q: "Testés une semaine plus tard, quels résultats obtiennent relecteurs et testeurs ?",
                options: [
                    "Environ 40 % contre environ 61 %",
                    "Des résultats équivalents",
                    "Environ 61 % contre environ 40 %"
                ],
                a: 0,
                explication: "Pour un temps de travail identique. Testés immédiatement, le rapport est inversé — d'où l'illusion."
            },
            {
                q: "Pourquoi se tester en gardant le cours ouvert ne marche pas ?",
                options: [
                    "Cela prend plus de temps",
                    "Cela supprime l'effort de récupération qui fait effet",
                    "Cela fatigue davantage"
                ],
                a: 1,
                explication: "Reconnaître une réponse et la retrouver sont deux opérations différentes."
            },
            // Série 2
            {
                q: "Que faire d'un titre de section pour se tester ?",
                options: [
                    "Le surligner",
                    "Le transformer en question",
                    "Le recopier"
                ],
                a: 1,
                explication: "« La courbe de l'oubli » devient « quelle forme a-t-elle, et qu'est-ce que cela change ? »."
            },
            {
                q: "Vaut-il mieux répondre en se trompant, ou lire directement la bonne réponse ?",
                options: [
                    "Lire directement, pour ne pas ancrer l'erreur",
                    "Répondre d'abord, même en se trompant",
                    "Les deux se valent"
                ],
                a: 1,
                explication: "Se tromper puis voir la correction retient mieux que lire la bonne réponse d'emblée."
            },
            {
                q: "Que signale une séance de révision confortable ?",
                options: [
                    "Qu'elle ne sert probablement pas à grand-chose",
                    "Que le sujet est bien choisi",
                    "Qu'on est en forme"
                ],
                a: 0,
                explication: "Le moment inconfortable où l'on cherche sans trouver n'est pas un échec : c'est la méthode."
            }
        ],

        // ---------------------------------------------------------------
        "les-illusions-de-maitrise": [
            // Série 1
            {
                q: "Que mesure la facilité à relire un texte déjà lu quatre fois ?",
                options: [
                    "La maîtrise du contenu",
                    "La familiarité avec sa mise en page et ses tournures",
                    "La qualité du texte"
                ],
                a: 1,
                explication: "Le cerveau interprète cette fluidité comme un signe de maîtrise. C'est le piège central."
            },
            {
                q: "Pourquoi le surlignage reste-t-il si répandu ?",
                options: [
                    "Parce qu'il est efficace",
                    "Parce qu'il est gratifiant sur le moment",
                    "Parce qu'il est recommandé par les études"
                ],
                a: 1,
                explication: "La sanction arrive plus tard, quand il faut produire sans le texte sous les yeux."
            },
            {
                q: "Quel test tranche entre savoir et reconnaître ?",
                options: [
                    "Relire une dernière fois",
                    "Fermer tout et écrire dix lignes de mémoire",
                    "Se dire qu'on a compris"
                ],
                a: 1,
                explication: "Ce qui sort est ce que tu sais. Le reste, tu l'aurais identifié dans une liste."
            },
            // Série 2
            {
                q: "Qu'ont en commun espacer, se tester et entrelacer ?",
                options: [
                    "Les trois dégradent les performances immédiates et améliorent celles à distance",
                    "Les trois rendent l'apprentissage plus rapide",
                    "Les trois demandent un logiciel"
                ],
                a: 0,
                explication: "C'est le paradoxe des difficultés utiles, et la raison pour laquelle on les abandonne."
            },
            {
                q: "Quand faut-il juger une méthode d'apprentissage ?",
                options: [
                    "À la fin de la séance",
                    "Une semaine plus tard, sur ce qui reste",
                    "Dès les premiers jours, à la sensation"
                ],
                a: 1,
                explication: "« Cette méthode ne me convient pas » se dit au moment où toute bonne méthode paraît moins efficace."
            },
            {
                q: "Nos jugements sur notre propre maîtrise sont-ils fiables ?",
                options: [
                    "Oui, chacun sait ce qu'il sait",
                    "Non : ils sont systématiquement trop optimistes juste après avoir travaillé",
                    "Oui, à condition d'être attentif"
                ],
                a: 1,
                explication: "Le vrai obstacle n'est pas la difficulté d'apprendre, c'est la difficulté de savoir ce qu'on sait."
            }
        ]
    },

    // Questions de synthèse — distinctes de celles des sous-sections
    synthese: [
        {
            q: "Quel est le fil conducteur de ce niveau ?",
            options: [
                "Les méthodes les plus répandues sont parmi les moins efficaces",
                "Il faut travailler plus longtemps",
                "Chacun apprend à sa manière"
            ],
            a: 0,
            explication: "Relire, surligner, refaire ses fiches : des habitudes qui donnent une sensation de progrès."
        },
        {
            q: "Qu'ont en commun l'espacement et l'effet test ?",
            options: [
                "Les deux exploitent l'effort de récupération",
                "Les deux demandent plus de temps",
                "Les deux fonctionnent seulement à l'écrit"
            ],
            a: 0,
            explication: "Chercher dans sa mémoire, juste avant d'oublier : c'est le même mécanisme vu sous deux angles."
        },
        {
            q: "Un étudiant relit son cours quatre fois et se sent prêt. Que prédit ce guide ?",
            options: [
                "Il réussira un contrôle le lendemain et aura tout oublié dans trois semaines",
                "Il retiendra durablement",
                "Il échouera dès le lendemain"
            ],
            a: 0,
            explication: "La relecture gagne le test immédiat et perd celui à distance. C'est ce qui la rend si tenace."
        },
        {
            q: "Pourquoi savoir que la relecture trompe ne suffit-il pas à s'en passer ?",
            options: [
                "Parce que l'illusion de fluidité persiste malgré la connaissance de son existence",
                "Parce qu'il n'existe pas d'alternative",
                "Parce que les autres méthodes prennent trop de temps"
            ],
            a: 0,
            explication: "Seule une mesure la corrige : se tester à distance et regarder le résultat, pas l'impression."
        },
        {
            q: "Que reste-t-il si l'on n'applique qu'une seule chose de ce niveau ?",
            options: [
                "Fermer le cours et écrire de mémoire ce dont on se souvient",
                "Relire plus lentement",
                "Prendre de meilleures notes"
            ],
            a: 0,
            explication: "C'est à la fois le test le plus fiable et une révision à part entière."
        },
        {
            q: "Tu as appris quelque chose ce matin. Quand la révision rapportera-t-elle le plus ?",
            options: [
                "Aujourd'hui ou demain",
                "Dans deux semaines",
                "Juste avant d'en avoir besoin"
            ],
            a: 0,
            explication: "L'essentiel de la perte a lieu dans les 48 premières heures."
        }
    ]
};
