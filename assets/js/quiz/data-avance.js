// ===================================
// BANQUE DE QUESTIONS — DATA, NIVEAU AVANCÉ
// ===================================
// 6 questions par sous-section : 3 affichées, les 3 autres prennent le relais
// au bout de deux semaines. Les questions de synthèse sont distinctes de
// celles des sous-sections — aucune n'est reprise deux fois.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "incertitude-dune-mesure": [
            // Série 1
            {
                q: "De quoi dépend principalement la marge d'erreur d'un sondage ?",
                options: [
                    "De la taille de la population",
                    "De la taille de l'échantillon",
                    "Du nombre de questions posées"
                ],
                a: 1,
                explication: "C'est ce qui rend les sondages possibles : 1 000 personnes donnent la même précision pour une ville que pour un pays."
            },
            {
                q: "Sur 400 observations, une proportion de 50 % porte une marge d'erreur d'environ :",
                options: [
                    "± 1 point",
                    "± 5 points",
                    "± 15 points"
                ],
                a: 1,
                explication: "La valeur réelle se situe donc entre 45 % et 55 %."
            },
            {
                q: "Que faut-il pour diviser une marge d'erreur par deux ?",
                options: [
                    "Doubler l'échantillon",
                    "Le multiplier par quatre",
                    "Le multiplier par dix"
                ],
                a: 1,
                explication: "C'est pourquoi les sondages nationaux s'arrêtent autour de 1 000 personnes : aller plus loin coûte beaucoup pour gagner très peu."
            },
            // Série 2
            {
                q: "Version A à 42 %, version B à 45 %, marge de ± 5 points. Que conclure ?",
                options: [
                    "B est meilleure",
                    "Rien : l'écart est inférieur à la marge",
                    "Il faut refaire la mesure"
                ],
                a: 1,
                explication: "Annoncer que B l'emporte reviendrait à présenter du bruit comme un résultat."
            },
            {
                q: "Que la marge d'erreur ne couvre-t-elle pas ?",
                options: [
                    "Le hasard de l'échantillonnage",
                    "Un questionnaire mal formulé ou une population mal choisie",
                    "La taille de l'échantillon"
                ],
                a: 1,
                explication: "Ces biais ne se réduisent pas en interrogeant davantage de monde : ils s'amplifient."
            },
            {
                q: "Que manque-t-il à « 42 % des utilisateurs préfèrent la version B » ?",
                options: [
                    "L'effectif et la méthode de recueil",
                    "La date de la mesure",
                    "Le nom de l'outil"
                ],
                a: 0,
                explication: "Sans ces informations, le chiffre n'est pas faux : il est invérifiable."
            }
        ],

        // ---------------------------------------------------------------
        "tests-ab": [
            // Série 1
            {
                q: "Qu'est-ce qui fait du test A/B une méthode causale ?",
                options: [
                    "La taille des échantillons",
                    "L'attribution aléatoire des groupes et une seule différence testée",
                    "La durée du test"
                ],
                a: 1,
                explication: "C'est la seule méthode courante qui établisse une causalité plutôt qu'une corrélation."
            },
            {
                q: "Quand faut-il calculer la taille d'échantillon nécessaire ?",
                options: [
                    "Avant de lancer le test",
                    "Quand les premiers résultats arrivent",
                    "À la fin, pour vérifier"
                ],
                a: 0,
                explication: "Après, il est trop tard pour se demander si le test pouvait conclure."
            },
            {
                q: "Taux de base 3 %, amélioration visée de 20 % relatif : combien de visiteurs par groupe ?",
                options: [
                    "Environ 1 400",
                    "Environ 14 000",
                    "Environ 140 000"
                ],
                a: 1,
                explication: "À 1 000 visiteurs par jour tous groupes confondus, cela représente environ quatre semaines de test."
            },
            // Série 2
            {
                q: "Pourquoi consulter un test A/B chaque jour est-il une faute ?",
                options: [
                    "Cela ralentit le test",
                    "À force de regarder, l'écart franchit le seuil par hasard",
                    "Cela fausse la collecte"
                ],
                a: 1,
                explication: "Un test qu'on arrête quand il donne raison ne teste plus rien."
            },
            {
                q: "Détecter un effet deux fois plus petit demande :",
                options: [
                    "Deux fois plus de trafic",
                    "Quatre fois plus de trafic",
                    "Le même trafic, plus longtemps"
                ],
                a: 1,
                explication: "C'est ce qui rend les petits gains si coûteux à démontrer."
            },
            {
                q: "Pourquoi ne pas changer plusieurs éléments dans une même version B ?",
                options: [
                    "Le test devient trop long",
                    "On ne saura pas lequel a joué, ni si l'un dégrade",
                    "Les outils ne le permettent pas"
                ],
                a: 1,
                explication: "Le test répond alors à « l'ensemble est-il meilleur ? » et à aucune autre question."
            }
        ],

        // ---------------------------------------------------------------
        "pieges-dinterpretation": [
            // Série 1
            {
                q: "Qu'est-ce que le paradoxe de Simpson ?",
                options: [
                    "Une tendance présente dans chaque groupe peut s'inverser une fois les groupes réunis",
                    "Une corrélation qui disparaît avec le temps",
                    "Un biais dû à la taille de l'échantillon"
                ],
                a: 0,
                explication: "Cela se produit dès que les groupes ont des tailles très différentes."
            },
            {
                q: "Qu'est-ce que le biais du survivant ?",
                options: [
                    "Analyser seulement ceux qui sont restés, alors que les partis ont la réponse",
                    "Surestimer les valeurs extrêmes",
                    "Conserver trop longtemps les anciennes données"
                ],
                a: 0,
                explication: "Analyser les clients actuels pour comprendre pourquoi les gens restent est le cas type."
            },
            {
                q: "Qu'est-ce que la régression vers la moyenne ?",
                options: [
                    "Un calcul statistique de tendance",
                    "Un mois exceptionnellement mauvais est généralement suivi d'un meilleur, sans intervention",
                    "La convergence de deux séries de données"
                ],
                a: 1,
                explication: "Toute action prise après un point bas paraîtra donc efficace."
            },
            // Série 2
            {
                q: "Comment détecter un paradoxe de Simpson ?",
                options: [
                    "En augmentant la taille de l'échantillon",
                    "En segmentant et en vérifiant la composition des groupes comparés",
                    "En recalculant les moyennes"
                ],
                a: 1,
                explication: "Un résultat global qui contredit chaque segment signale un déséquilibre de répartition, pas une découverte."
            },
            {
                q: "Ces trois pièges supposent-ils une erreur de calcul ?",
                options: [
                    "Oui, ils viennent de formules mal appliquées",
                    "Non : les données sont exactes, c'est la lecture qui trompe",
                    "Oui, ils viennent d'erreurs de collecte"
                ],
                a: 1,
                explication: "C'est ce qui les rend difficiles à repérer : rien n'est faux dans les chiffres."
            },
            {
                q: "Une action corrective suit un mois catastrophique, et le mois suivant s'améliore. Que conclure ?",
                options: [
                    "L'action a fonctionné",
                    "Rien : l'amélioration serait probablement survenue sans intervention",
                    "L'action a été insuffisante"
                ],
                a: 1,
                explication: "C'est l'illusion la plus fréquente dans les bilans d'actions correctives."
            }
        ],

        // ---------------------------------------------------------------
        "chaine-de-donnees": [
            // Série 1
            {
                q: "Quelles sont les quatre propriétés à surveiller sur une chaîne de données ?",
                options: [
                    "Fraîcheur, complétude, cohérence, traçabilité",
                    "Vitesse, volume, variété, véracité",
                    "Coût, sécurité, performance, disponibilité"
                ],
                a: 0,
                explication: "Une erreur sur n'importe quel maillon produit un tableau de bord impeccablement présenté et faux."
            },
            {
                q: "Pourquoi une donnée figée est-elle plus dangereuse qu'une donnée absente ?",
                options: [
                    "Elle occupe de l'espace de stockage",
                    "Personne ne remarque qu'elle ne bouge plus",
                    "Elle empêche les nouveaux calculs"
                ],
                a: 1,
                explication: "Tout paraît normal, les chiffres sont plausibles, et ils sont périmés."
            },
            {
                q: "Quel contrôle simple détecte la majorité des incidents réels ?",
                options: [
                    "Une alerte si le volume de lignes s'écarte fortement de l'habitude",
                    "Un contrôle manuel hebdomadaire",
                    "Une vérification des permissions"
                ],
                a: 0,
                explication: "Source coupée, doublons massifs, changement de format en amont : ce test trivial les attrape."
            },
            // Série 2
            {
                q: "Deux tableaux de bord donnent deux chiffres différents pour « le nombre de clients ». D'où vient le problème ?",
                options: [
                    "D'une erreur de calcul",
                    "De définitions divergentes, jamais écrites",
                    "D'un décalage de mise à jour"
                ],
                a: 1,
                explication: "Et l'effet est de détruire la confiance dans les deux tableaux à la fois."
            },
            {
                q: "Qu'est-ce que la traçabilité d'un chiffre ?",
                options: [
                    "L'historique de ses valeurs",
                    "La possibilité de remonter à sa source et à la transformation qui l'a produit",
                    "Le journal des consultations"
                ],
                a: 1,
                explication: "Sans elle, une anomalie ne peut pas être diagnostiquée."
            },
            {
                q: "Quelle est la protection la moins coûteuse contre la panne silencieuse ?",
                options: [
                    "Doubler les traitements",
                    "Afficher la date de dernière mise à jour à côté des chiffres",
                    "Sauvegarder les données brutes"
                ],
                a: 1,
                explication: "Un traitement en échec laisse sinon le tableau de bord afficher les dernières valeurs connues."
            }
        ]
    },

    // ===================================================================
    // Questions de synthèse — distinctes de celles des sous-sections
    // ===================================================================
    synthese: [
        // Série 1
        {
            q: "Quelle question ce niveau apprend-il à poser ?",
            options: [
                "Quel outil utiliser ?",
                "Quelle confiance accorder au chiffre obtenu ?",
                "Comment présenter les résultats ?"
            ],
            a: 1,
            explication: "Un écart de 2 % est-il un résultat ou du bruit ? Combien d'observations faudrait-il pour trancher ?"
        },
        {
            q: "Un test A/B affiche +3 % après deux jours. Que faire ?",
            options: [
                "Déployer la version gagnante",
                "Attendre l'effectif prévu avant de conclure",
                "Arrêter le test, l'effet est démontré"
            ],
            a: 1,
            explication: "L'écart franchit le seuil par hasard si l'on regarde assez souvent, puis repart."
        },
        {
            q: "Quel point commun entre la marge d'erreur et la taille d'un test A/B ?",
            options: [
                "Les deux évoluent comme la racine de l'effectif",
                "Les deux dépendent de la population totale",
                "Les deux sont fixées par convention"
            ],
            a: 0,
            explication: "D'où la même conséquence : diviser par deux l'incertitude ou l'effet détectable coûte quatre fois plus d'observations."
        },
        // Série 2
        {
            q: "Le résultat global contredit ce qu'on observe dans chaque sous-groupe. Que croire ?",
            options: [
                "Le total, qui porte sur plus d'observations",
                "Les sous-groupes, et vérifier la répartition",
                "Ni l'un ni l'autre, refaire la collecte"
            ],
            a: 1,
            explication: "Quand le total dit l'inverse de chaque partie, ce n'est pas le total qu'il faut croire."
        },
        {
            q: "Qu'est-ce qui plafonne la qualité d'une analyse ?",
            options: [
                "La compétence de l'analyste",
                "Le maillon le plus faible de la chaîne, qui est rarement l'analyse",
                "La puissance des outils"
            ],
            a: 1,
            explication: "Collecte, transport, stockage, transformation : une erreur en amont produit un résultat parfaitement présenté et faux."
        },
        {
            q: "Quel document protège d'une conclusion hâtive sur un test ?",
            options: [
                "Le rapport final",
                "Les hypothèses écrites avant le lancement : durée, effectif, seuil",
                "La documentation de l'outil"
            ],
            a: 1,
            explication: "Ce document te protège de toi-même au bout de trois jours."
        }
    ]
};
