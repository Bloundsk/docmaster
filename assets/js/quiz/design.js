// ===================================
// BANQUE DE QUESTIONS — GUIDE DESIGN UX/UI
// ===================================
// 6 questions par sous-section : 3 affichées, les 3 autres au bout de deux
// semaines. Les questions de synthèse sont distinctes.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "ux-vs-ui-quelle-différence": [
            // Série 1
            {
                q: "Que traite l'UX, par opposition à l'UI ?",
                options: [
                    "Les couleurs et la typographie",
                    "Ce que vit la personne : comprend-elle, atteint-elle son but ?",
                    "La vitesse de chargement"
                ],
                a: 1,
                explication: "L'UI traite de ce qu'on voit, l'UX de ce qu'on vit. On peut réussir la première en ratant la seconde."
            },
            {
                q: "Un panneau de sortie de secours magnifique menant à une porte condamnée illustre quoi ?",
                options: [
                    "Une excellente UX",
                    "Une excellente UI et une UX catastrophique",
                    "Un problème purement technique"
                ],
                a: 1,
                explication: "Un écriteau manuscrit indiquant la bonne sortie : UI médiocre, UX réussie. C'est la seconde qui sauve des vies."
            },
            {
                q: "Où se joue l'essentiel du travail UX ?",
                options: [
                    "Dans le choix de la palette de couleurs",
                    "En amont : à qui s'adresse-t-on, quel problème résout-on, dans quel ordre ?",
                    "Au moment des tests finaux"
                ],
                a: 1,
                explication: "Une refonte graphique ne répare jamais un parcours mal conçu : elle rend plus élégant le fait de s'y perdre."
            },
            // Série 2
            {
                q: "Que ne peut-on pas rattraper par l'esthétique ?",
                options: [
                    "Le nombre d'étapes d'un formulaire",
                    "Le choix de la police",
                    "La taille des marges"
                ],
                a: 0,
                explication: "Chaque étape supplémentaire fait perdre une partie des utilisateurs. Aucune animation ne compense douze champs."
            },
            {
                q: "Quel message d'erreur est utile ?",
                options: [
                    "« Une erreur est survenue »",
                    "« Ce code postal ne correspond à aucune commune »",
                    "« Erreur 500 »"
                ],
                a: 1,
                explication: "Le premier n'aide personne ; le second permet d'agir."
            },
            {
                q: "Quel est le bon critère de jugement d'une interface ?",
                options: [
                    "Est-ce que ça plaît en capture d'écran ?",
                    "Est-ce que quelqu'un qui découvre y arrive du premier coup ?",
                    "Est-ce conforme aux tendances actuelles ?"
                ],
                a: 1,
                explication: "Les tendances produisent régulièrement des interfaces séduisantes et pénibles à utiliser."
            }
        ],

        // ---------------------------------------------------------------
        "le-wireframing": [
            // Série 1
            {
                q: "Pourquoi un wireframe est-il volontairement laid ?",
                options: [
                    "Pour aller plus vite",
                    "Pour qu'on critique la structure au lieu de la couleur d'un bouton",
                    "Parce que les outils sont limités"
                ],
                a: 1,
                explication: "Devant une maquette aboutie, les retours portent sur le détail visuel. Devant des rectangles gris, on discute enfin du fond."
            },
            {
                q: "Quel est le coût de correction d'un parcours au stade du croquis papier ?",
                options: ["Quelques minutes", "Une à deux journées", "Plusieurs semaines"],
                a: 0,
                explication: "Au stade de la maquette : une à deux journées. Après développement : des semaines et un compromis bancal."
            },
            {
                q: "Que permet la basse fidélité ?",
                options: [
                    "Présenter au client final",
                    "Explorer plusieurs pistes et décider de la structure",
                    "Transmettre au développement"
                ],
                a: 1,
                explication: "La haute fidélité sert à transmettre et présenter, pas à explorer."
            },
            // Série 2
            {
                q: "Pourquoi utiliser de vrais contenus plutôt que du faux texte latin ?",
                options: [
                    "C'est plus agréable à lire",
                    "Un nom de produit réel fait parfois trois lignes là où l'exemple en faisait une",
                    "Cela accélère la validation"
                ],
                a: 1,
                explication: "Ces débordements se découvrent sinon en développement — trop tard."
            },
            {
                q: "Que se passe-t-il si l'on passe une journée à soigner un wireframe ?",
                options: [
                    "Le résultat final est meilleur",
                    "On s'y attache et on cesse de le remettre en cause",
                    "Le développement va plus vite"
                ],
                a: 1,
                explication: "Un wireframe doit rester assez laid pour qu'on ose le jeter."
            },
            {
                q: "Quelle erreur classique fait perdre le bénéfice du wireframe ?",
                options: [
                    "Le faire sur papier",
                    "Sauter directement en haute fidélité",
                    "Le montrer trop tôt à l'équipe"
                ],
                a: 1,
                explication: "On y gagne une impression d'avance rapide, on y perd la possibilité de se tromper à bas coût."
            }
        ],

        // ---------------------------------------------------------------
        "les-principes-de-design-visuel": [
            // Série 1
            {
                q: "Comment l'œil aborde-t-il une page ?",
                options: [
                    "Il lit de gauche à droite, ligne par ligne",
                    "Il balaie et classe les éléments par importance apparente",
                    "Il se pose d'abord au centre"
                ],
                a: 1,
                explication: "Taille, contraste, position et espace environnant déterminent cet ordre en une fraction de seconde."
            },
            {
                q: "Que se passe-t-il si tous les éléments d'une page sont mis en avant ?",
                options: [
                    "L'utilisateur a plus de choix",
                    "Plus rien ne l'est : il doit tout lire pour décider, et la plupart renoncent",
                    "La page paraît plus riche"
                ],
                a: 1,
                explication: "Choisir ce qui compte suppose d'accepter que le reste soit discret."
            },
            {
                q: "En quoi consiste le « test du plissement » ?",
                options: [
                    "Réduire la fenêtre du navigateur",
                    "Plisser les yeux jusqu'à ce que le texte devienne illisible et voir ce qui ressort",
                    "Imprimer la page en noir et blanc"
                ],
                a: 1,
                explication: "Si l'action principale n'en fait pas partie, la hiérarchie est à revoir."
            },
            // Série 2
            {
                q: "Que signifie le principe de proximité ?",
                options: [
                    "Les éléments proches sont perçus comme liés",
                    "Il faut regrouper les éléments par couleur",
                    "Les marges doivent être identiques partout"
                ],
                a: 0,
                explication: "Une étiquette collée au mauvais champ de formulaire crée une erreur que le meilleur libellé ne rattrapera pas."
            },
            {
                q: "Quel rapport de contraste les normes d'accessibilité recommandent-elles pour le texte courant ?",
                options: ["2:1", "4,5:1", "10:1"],
                a: 1,
                explication: "Ce n'est pas une contrainte pour une minorité : c'est du confort pour tous, en conditions réelles."
            },
            {
                q: "Pourquoi ne jamais transmettre une information par la seule couleur ?",
                options: [
                    "Parce que les écrans rendent mal les couleurs",
                    "Parce qu'un champ en rouge sans message reste invisible pour une personne daltonienne",
                    "Parce que cela alourdit le code"
                ],
                a: 1,
                explication: "Soit environ un homme sur douze."
            }
        ],

        // ---------------------------------------------------------------
        "les-tests-utilisateurs": [
            // Série 1
            {
                q: "Pourquoi ne pouvez-vous pas évaluer votre propre interface ?",
                options: [
                    "Par manque d'objectivité émotionnelle",
                    "Parce que vous savez où se trouve chaque chose, et cette connaissance est irréversible",
                    "Parce qu'il faut une certification"
                ],
                a: 1,
                explication: "Le seul moyen de savoir, c'est de regarder quelqu'un d'autre essayer."
            },
            {
                q: "Combien d'utilisateurs suffisent à révéler la majorité des problèmes majeurs ?",
                options: ["2", "5", "30"],
                a: 1,
                explication: "Les suivants confirment surtout ce qui a déjà été observé. Mieux vaut cinq tests à chaque étape que trente à la fin."
            },
            {
                q: "Quelle consigne donner à un participant ?",
                options: [
                    "« Que pensez-vous de cette page ? »",
                    "« Trouvez le prix d'un abonnement annuel et lancez la souscription »",
                    "« Naviguez librement quelques minutes »"
                ],
                a: 1,
                explication: "Donnez une tâche, pas une visite guidée. Ce que les gens font vaut plus que ce qu'ils déclarent."
            },
            // Série 2
            {
                q: "Quel est le comportement le plus difficile à tenir pendant un test ?",
                options: [
                    "Prendre des notes",
                    "Se taire",
                    "Chronométrer"
                ],
                a: 1,
                explication: "Dès que vous aidez, le test est terminé : l'utilisateur réel n'aura personne à côté de lui."
            },
            {
                q: "À quel moment tester ?",
                options: [
                    "Une semaine avant la mise en ligne",
                    "Sur le wireframe, quand tout peut encore changer sans coût",
                    "Après le lancement, avec de vrais utilisateurs"
                ],
                a: 1,
                explication: "Un test tardif ne sert plus à décider : il documente les problèmes qu'on n'aura pas le temps de corriger."
            },
            {
                q: "Un utilisateur se trompe pendant un test. Qui n'a pas compris ?",
                options: [
                    "L'utilisateur",
                    "L'interface, qui n'a pas été claire",
                    "Le concepteur du test"
                ],
                a: 1,
                explication: "Ce renversement est le fondement du métier."
            }
        ]
    },

    // -------------------------------------------------------------------
    // SYNTHÈSE
    // -------------------------------------------------------------------
    synthese: [
        // Série 1
        {
            q: "Quelle est la caractéristique des meilleures interfaces ?",
            options: [
                "Elles marquent les esprits",
                "Elles ne se remarquent pas",
                "Elles suivent les dernières tendances"
            ],
            a: 1,
            explication: "Personne ne complimente une porte pour s'être ouverte du bon côté."
        },
        {
            q: "Le design d'interface relève-t-il du goût personnel ?",
            options: [
                "Oui, chacun a sa sensibilité",
                "Non : c'est une discipline avec des règles issues du fonctionnement de la vision et de l'attention",
                "Oui, sauf pour les sites institutionnels"
            ],
            a: 1,
            explication: "Ces règles sont vérifiables, et elles s'apprennent."
        },
        {
            q: "Que fait un design réussi ?",
            options: [
                "Il ajoute des éléments visuels distinctifs",
                "Il soustrait plus qu'il n'ajoute",
                "Il reproduit les codes du secteur"
            ],
            a: 1,
            explication: "Avant d'ajouter un élément, demandez ce qu'il aide à comprendre. S'il n'aide à rien, il ajoute du bruit."
        },
        // Série 2
        {
            q: "Votre équipe trouve un bouton « évident ». Comment le vérifier ?",
            options: [
                "Demander l'avis d'un autre designer",
                "Regarder cinq personnes tenter la tâche, sans les aider",
                "Comparer avec des sites concurrents"
            ],
            a: 1,
            explication: "Aucun de ces problèmes n'est visible depuis l'intérieur du projet."
        },
        {
            q: "Vous devez livrer vite. Sur quoi ne pas rogner ?",
            options: [
                "Le soin apporté aux wireframes",
                "Les tests utilisateurs, même informels sur une maquette papier",
                "La palette de couleurs"
            ],
            a: 1,
            explication: "Cinq minutes, une tâche, une maquette même papier : c'est infiniment supérieur à ne rien tester."
        },
        {
            q: "Un texte gris clair sur fond blanc, élégant sur votre écran. Quel problème ?",
            options: [
                "Il consomme plus d'encre à l'impression",
                "Il devient illisible au soleil ou pour une personne de plus de cinquante ans",
                "Il ralentit le chargement"
            ],
            a: 1,
            explication: "Des vérificateurs gratuits mesurent le contraste en quelques secondes."
        }
    ]
};
