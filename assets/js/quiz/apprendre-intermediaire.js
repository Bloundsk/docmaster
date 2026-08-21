// ===================================
// BANQUE DE QUESTIONS — APPRENDRE À APPRENDRE, NIVEAU INTERMÉDIAIRE
// ===================================
// 6 questions par sous-section : 3 affichées, les 3 autres prennent le relais
// au bout de deux semaines. Les questions de synthèse sont distinctes de
// celles des sous-sections — aucune n'est reprise deux fois.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "lentrelacement": [
            // Série 1
            {
                q: "Pourquoi faire vingt exercices du même type à la suite trompe-t-il ?",
                options: [
                    "Parce qu'on n'a pas à identifier de quel type il s'agit",
                    "Parce que les exercices sont trop faciles",
                    "Parce que cela prend trop de temps"
                ],
                a: 0,
                explication: "On applique la méthode qu'on vient de lire, et cela tombe juste. La série s'enchaîne."
            },
            {
                q: "Sur 48 exercices de quatre types, quel écart sépare la pratique groupée de l'entrelacée au test différé ?",
                options: [
                    "Environ 10 réussis contre environ 30",
                    "Un écart négligeable",
                    "Environ 30 contre environ 10"
                ],
                a: 0,
                explication: "Même nombre d'exercices, même temps. Seul l'ordre change."
            },
            {
                q: "Quelle partie du travail la pratique groupée laisse-t-elle de côté ?",
                options: [
                    "L'application de la méthode",
                    "La reconnaissance du type de problème",
                    "Le calcul lui-même"
                ],
                a: 1,
                explication: "Le jour du contrôle, personne n'annonce le type — et c'est la partie difficile."
            },
            // Série 2
            {
                q: "Quelle sensation produit l'entrelacement pendant la séance ?",
                options: [
                    "Celle de mieux s'en sortir",
                    "Celle de moins bien s'en sortir",
                    "Aucune différence"
                ],
                a: 1,
                explication: "Cette sensation est exacte — sur le moment. Elle s'inverse au test différé."
            },
            {
                q: "Qu'est-ce qui distingue entrelacer de papillonner ?",
                options: [
                    "Entrelacer alterne des exercices assez proches pour être confondus",
                    "Entrelacer change de matière toutes les dix minutes",
                    "Rien, ce sont deux mots pour la même chose"
                ],
                a: 0,
                explication: "C'est précisément la confusion possible qui rend l'exercice utile."
            },
            {
                q: "Comment aborder une méthode qu'on vient de découvrir ?",
                options: [
                    "Deux ou trois exercices groupés, puis un mélange de tout ce qui a été vu",
                    "Vingt exercices groupés avant de passer à autre chose",
                    "Directement en mélange, sans exercice dédié"
                ],
                a: 0,
                explication: "Le temps de comprendre la méthode, puis on la met en concurrence avec les autres."
            }
        ],

        // ---------------------------------------------------------------
        "lelaboration": [
            // Série 1
            {
                q: "Quelle question résume l'élaboration ?",
                options: [
                    "Combien de temps cela va-t-il me prendre ?",
                    "Pourquoi est-ce vrai ?",
                    "Est-ce au programme ?"
                ],
                a: 1,
                explication: "Puis : en quoi est-ce cohérent, ou non, avec ce que je sais déjà ?"
            },
            {
                q: "Pourquoi une notion rattachée à d'autres se retrouve-t-elle mieux ?",
                options: [
                    "Parce qu'elle est plus courte",
                    "Parce qu'elle devient accessible par plusieurs chemins",
                    "Parce qu'elle est plus intéressante"
                ],
                a: 1,
                explication: "Il suffit qu'un seul chemin fonctionne pour la retrouver."
            },
            {
                q: "Recopier proprement une définition, qu'est-ce que cela fait travailler ?",
                options: [
                    "La mémoire",
                    "La main",
                    "La compréhension"
                ],
                a: 1,
                explication: "Reformuler avec ses propres mots oblige à construire le sens — et révèle si on ne l'a pas compris."
            },
            // Série 2
            {
                q: "Quelle est la valeur d'un exemple trouvé soi-même ?",
                options: [
                    "C'est la preuve qu'on tient la notion",
                    "Il vaut moins que celui du cours",
                    "Il sert surtout à illustrer"
                ],
                a: 0,
                explication: "Celui du cours a été lu, il ne prouve rien."
            },
            {
                q: "À quoi ressemble une fiche utile ?",
                options: [
                    "Une fiche de questions, souvent laide",
                    "Une fiche de réponses, bien mise en couleurs",
                    "Un résumé exhaustif du cours"
                ],
                a: 0,
                explication: "Recopier un cours en couleurs occupe des heures, produit un bel objet et laisse peu de traces."
            },
            {
                q: "Ce qui compte dans une séance de lecture, c'est :",
                options: [
                    "Le temps passé sur le contenu",
                    "Ce qu'on fait subir au contenu pendant ce temps",
                    "Le nombre de pages parcourues"
                ],
                a: 1,
                explication: "Une lecture élaborée prend trois fois plus de temps et laisse dix fois plus."
            }
        ],

        // ---------------------------------------------------------------
        "la-pratique-deliberee": [
            // Série 1
            {
                q: "Quelles sont les trois conditions de la pratique délibérée ?",
                options: [
                    "Travailler ce qu'on rate, rester au bord de sa capacité, obtenir un retour rapide",
                    "Travailler longtemps, régulièrement, et en silence",
                    "Réviser, réviser, réviser"
                ],
                a: 0,
                explication: "La première est la plus simple et la moins respectée."
            },
            {
                q: "Sur 5 h par semaine pendant 12 semaines, que change le passage de 20 % à 60 % du temps sur ses points faibles ?",
                options: [
                    "12 h utiles contre 36 h",
                    "Un écart négligeable",
                    "Il faut travailler trois fois plus longtemps"
                ],
                a: 0,
                explication: "Trois fois plus de progression pour le même nombre d'heures au total."
            },
            {
                q: "Pourquoi peut-on conduire vingt ans sans mieux conduire ?",
                options: [
                    "Parce que la pratique seule ne fait pas progresser",
                    "Parce que l'âge dégrade les réflexes",
                    "Parce que les routes changent"
                ],
                a: 0,
                explication: "Il y faut les trois conditions : points faibles, bonne difficulté, retour rapide."
            },
            // Série 2
            {
                q: "À quoi ressemble une bonne séance de pratique ?",
                options: [
                    "Elle laisse une trace d'erreurs",
                    "Elle se déroule sans faute",
                    "Elle est longue"
                ],
                a: 0,
                explication: "Une séance sans faute signale surtout qu'on est resté en terrain connu."
            },
            {
                q: "Que vaut « j'ai passé six heures dessus » comme indicateur ?",
                options: [
                    "Rien, tant qu'on ne sait pas sur quoi",
                    "C'est le meilleur indicateur disponible",
                    "Cela dépend du sujet"
                ],
                a: 0,
                explication: "Compter les heures est commode et trompeur ; compter les erreurs corrigées est honnête."
            },
            {
                q: "Un exercice trop difficile fait-il progresser ?",
                options: [
                    "Oui, plus c'est dur mieux c'est",
                    "Non : trop facile n'apprend rien, trop dur non plus",
                    "Oui, à condition d'insister"
                ],
                a: 1,
                explication: "Le bord de sa capacité : se tromper régulièrement, réussir la plupart du temps."
            }
        ],

        // ---------------------------------------------------------------
        "sommeil-et-consolidation": [
            // Série 1
            {
                q: "Quand a lieu l'essentiel de la consolidation ?",
                options: [
                    "Pendant l'apprentissage",
                    "Pendant le sommeil qui suit",
                    "Pendant la révision du lendemain"
                ],
                a: 1,
                explication: "La nuit qui suit un apprentissage n'est pas du temps neutre, c'est du temps de travail."
            },
            {
                q: "À temps égal, que vaut réviser le soir puis dormir ?",
                options: [
                    "Moins bien que réviser le matin",
                    "Mieux que réviser le matin d'un contrôle du lendemain",
                    "La même chose"
                ],
                a: 1,
                explication: "Le contenu passe immédiatement par la phase qui le fixe."
            },
            {
                q: "Qu'échange-t-on dans une nuit blanche de révision ?",
                options: [
                    "Trois heures de relecture contre la consolidation de toute la journée",
                    "Du sommeil contre de la mémoire supplémentaire",
                    "Rien, si l'on récupère ensuite"
                ],
                a: 0,
                explication: "Trois heures de la pire méthode contre le rangement de toute la journée."
            },
            // Série 2
            {
                q: "Consulter son téléphone pendant une pause, est-ce une pause ?",
                options: [
                    "Oui, tant qu'on ne travaille pas",
                    "Non : c'est un changement de sujet, pas une pause pour la mémoire",
                    "Oui, si elle est courte"
                ],
                a: 1,
                explication: "Une pause véritable laisse au cerveau le temps de rejouer ce qui vient d'être vu."
            },
            {
                q: "Une nuit courte se rattrape-t-elle le week-end ?",
                options: [
                    "Oui, intégralement",
                    "Non : ce qui n'a pas été consolidé ne l'est pas rétroactivement",
                    "Oui, si l'on dort deux heures de plus"
                ],
                a: 1,
                explication: "La régularité des horaires pèse davantage que le total hebdomadaire d'heures dormies."
            },
            {
                q: "Qu'est-ce qui pèse le plus sur la consolidation ?",
                options: [
                    "La régularité des horaires",
                    "Le nombre total d'heures dans la semaine",
                    "L'heure du lever"
                ],
                a: 0,
                explication: "C'est aussi la partie la plus facile à corriger."
            }
        ]
    },

    // Questions de synthèse — distinctes de celles des sous-sections
    synthese: [
        {
            q: "Quel est le fil conducteur de ce niveau ?",
            options: [
                "L'organisation autour de l'apprentissage : l'ordre, le traitement, l'effort, la nuit",
                "Travailler davantage chaque semaine",
                "Choisir le bon logiciel"
            ],
            a: 0,
            explication: "Le niveau débutant portait sur quand revenir ; celui-ci sur comment organiser l'entre-deux."
        },
        {
            q: "Qu'ont en commun l'entrelacement et la pratique délibérée ?",
            options: [
                "Les deux dégradent le confort de la séance et améliorent le résultat à distance",
                "Les deux demandent plus d'heures",
                "Les deux ne valent que pour les mathématiques"
            ],
            a: 0,
            explication: "C'est la marque des difficultés utiles, déjà rencontrée au niveau débutant."
        },
        {
            q: "Un élève enchaîne trente exercices du même type et les réussit tous. Que faut-il en conclure ?",
            options: [
                "Qu'il maîtrise le sujet",
                "Qu'il s'entraîne à appliquer, pas à choisir",
                "Qu'il doit passer au type suivant"
            ],
            a: 1,
            explication: "La partie difficile — reconnaître le type — n'a pas été travaillée une seule fois."
        },
        {
            q: "Pourquoi recopier ses notes est-il si populaire ?",
            options: [
                "Parce que cela ressemble à du travail et produit un objet visible",
                "Parce que c'est efficace",
                "Parce que c'est rapide"
            ],
            a: 0,
            explication: "La main travaille, pas la mémoire. Une fiche de questions est laide et elle sert."
        },
        {
            q: "Quelle mesure de ce niveau coûte le moins et rapporte le plus ?",
            options: [
                "Réviser le soir, puis dormir",
                "Ajouter deux heures de travail le week-end",
                "Changer de méthode de prise de notes"
            ],
            a: 0,
            explication: "La révision la moins chère qui existe se fait les yeux fermés."
        },
        {
            q: "Que reste-t-il si l'on n'applique qu'une seule chose de ce niveau ?",
            options: [
                "Mélanger les types d'exercices au lieu de les grouper",
                "Recopier ses notes plus soigneusement",
                "Allonger les séances"
            ],
            a: 0,
            explication: "Tu te tromperas davantage. C'est le signe que cela marche."
        }
    ]
};
