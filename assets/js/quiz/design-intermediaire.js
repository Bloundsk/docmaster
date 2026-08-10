// ===================================
// BANQUE DE QUESTIONS — DESIGN, NIVEAU INTERMÉDIAIRE
// ===================================
// 6 questions par sous-section : 3 affichées, les 3 autres prennent le relais
// au bout de deux semaines. Les questions de synthèse sont distinctes de
// celles des sous-sections — aucune n'est reprise deux fois.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "accessibilite": [
            // Série 1
            {
                q: "Quel rapport de contraste est requis pour du texte de taille normale ?",
                options: [
                    "2 pour 1",
                    "4,5 pour 1",
                    "10 pour 1"
                ],
                a: 1,
                explication: "3 pour 1 suffit pour les grands titres. Le gris clair sur blanc échoue systématiquement."
            },
            {
                q: "Quelle taille minimale pour une cible tactile ?",
                options: [
                    "24 pixels CSS",
                    "44 pixels CSS, soit environ 9 millimètres",
                    "80 pixels CSS"
                ],
                a: 1,
                explication: "C'est la largeur d'un doigt. En dessous, les erreurs de manipulation deviennent fréquentes."
            },
            {
                q: "Pourquoi ne faut-il jamais supprimer le contour de focus ?",
                options: [
                    "Il est exigé par les navigateurs",
                    "Sans lui, le site devient inutilisable au clavier",
                    "Il améliore le référencement"
                ],
                a: 1,
                explication: "Toute action possible à la souris doit l'être au clavier, et l'élément actif doit rester visible."
            },
            // Série 2
            {
                q: "Pourquoi l'accessibilité ne concerne-t-elle pas qu'une minorité ?",
                options: [
                    "Parce que le handicap est souvent temporaire ou situationnel",
                    "Parce qu'elle est obligatoire partout",
                    "Parce qu'elle améliore le référencement"
                ],
                a: 0,
                explication: "Un bras occupé, du soleil sur l'écran, une presbytie : autant de situations ordinaires."
            },
            {
                q: "Quel est l'exemple type d'une mesure d'accessibilité devenue utile à tous ?",
                options: [
                    "Les sous-titres, aujourd'hui surtout utilisés sans le son",
                    "Les polices de grande taille",
                    "Le mode sombre"
                ],
                a: 0,
                explication: "Comme les bateaux de trottoir, conçus pour les fauteuils et utilisés par les poussettes et les valises."
            },
            {
                q: "Quand faut-il traiter l'accessibilité ?",
                options: [
                    "En fin de projet, lors de la recette",
                    "Dès les maquettes",
                    "Après le premier retour utilisateur"
                ],
                a: 1,
                explication: "Reprise à la fin, elle devient une refonte : contraste, charte, balisage. Prise au début, elle ne coûte presque rien."
            }
        ],

        // ---------------------------------------------------------------
        "architecture-information": [
            // Série 1
            {
                q: "Sur quoi une navigation doit-elle être construite ?",
                options: [
                    "Sur l'organigramme de l'entreprise",
                    "Sur les tâches des utilisateurs",
                    "Sur le volume de contenu de chaque rubrique"
                ],
                a: 1,
                explication: "Un visiteur ne cherche pas « le service des adhésions » : il cherche « comment m'inscrire »."
            },
            {
                q: "En quoi consiste un tri par cartes ?",
                options: [
                    "Classer les pages par fréquentation",
                    "Faire regrouper et nommer les contenus par cinq à dix personnes",
                    "Trier les fonctionnalités par coût de développement"
                ],
                a: 1,
                explication: "Les regroupements qui reviennent indiquent la structure attendue ; les cartes isolées signalent un contenu mal nommé."
            },
            {
                q: "À partir de combien d'entrées un menu de premier niveau devient-il difficile ?",
                options: [
                    "Environ sept",
                    "Environ quinze",
                    "Il n'y a pas de limite"
                ],
                a: 0,
                explication: "Au-delà, il faut regrouper — et le regroupement doit venir des utilisateurs."
            },
            // Série 2
            {
                q: "Comment juger un libellé de menu ?",
                options: [
                    "Il doit être court",
                    "Quelqu'un qui découvre le site doit savoir ce qu'il trouvera derrière",
                    "Il doit reprendre le vocabulaire de l'entreprise"
                ],
                a: 1,
                explication: "« Nos solutions » ne dit rien. « Tarifs » dit tout."
            },
            {
                q: "Pourquoi « Espace client » et « Mon compte » sur un même site posent-ils problème ?",
                options: [
                    "Ils allongent le menu",
                    "Le visiteur doit deviner lequel le concerne, à chaque visite",
                    "Ils dupliquent le contenu"
                ],
                a: 1,
                explication: "Deux entrées qui peuvent être confondues créent une hésitation permanente."
            },
            {
                q: "Que révèle une carte que chaque participant place ailleurs ?",
                options: [
                    "Un contenu mal nommé, ou sans place évidente",
                    "Une erreur de protocole",
                    "Un contenu à supprimer"
                ],
                a: 0,
                explication: "C'est précisément l'information que le tri par cartes sert à produire."
            }
        ],

        // ---------------------------------------------------------------
        "mobile-dabord": [
            // Série 1
            {
                q: "Pourquoi concevoir d'abord pour le petit écran ?",
                options: [
                    "C'est plus rapide à maquetter",
                    "La contrainte force à identifier ce qui compte vraiment",
                    "Les outils le recommandent"
                ],
                a: 1,
                explication: "Élargir ensuite est facile ; retrancher dans l'urgence produit des versions mobiles amputées."
            },
            {
                q: "Comment définir les points de rupture ?",
                options: [
                    "D'après les modèles de téléphones du moment",
                    "Là où la mise en page commence à mal vieillir quand on élargit",
                    "Tous les 200 pixels"
                ],
                a: 1,
                explication: "Les modèles changent chaque année et il en existe des centaines. Le contenu dicte, pas le catalogue."
            },
            {
                q: "Un lien de 24 pixels serré entre d'autres liens : quel est le problème ?",
                options: [
                    "Il est trop petit pour être lu",
                    "Il garantit des erreurs de manipulation",
                    "Il pénalise le référencement"
                ],
                a: 1,
                explication: "Et l'utilisateur croira s'être trompé lui-même."
            },
            // Série 2
            {
                q: "Masquer la moitié des éléments derrière un menu sur mobile, est-ce de l'adaptation ?",
                options: [
                    "Oui, c'est la bonne pratique",
                    "Non, c'est repousser la décision",
                    "Oui, si le menu est bien conçu"
                ],
                a: 1,
                explication: "Si un contenu ne mérite pas sa place sur téléphone, la vraie question est de savoir s'il la mérite ailleurs."
            },
            {
                q: "Quelle est la conséquence de concevoir le grand écran en premier ?",
                options: [
                    "Un travail plus rapide",
                    "Des arbitrages faits dans l'urgence au moment d'adapter",
                    "Une meilleure cohérence"
                ],
                a: 1,
                explication: "L'ordre n'est pas neutre : il détermine ce qui sera sacrifié, et quand."
            },
            {
                q: "Quelle part du trafic web se fait aujourd'hui sur téléphone ?",
                options: [
                    "Une minorité",
                    "La majorité",
                    "Environ un quart"
                ],
                a: 1,
                explication: "Ce qui rend d'autant plus surprenant que tant de projets conçoivent encore le grand écran d'abord."
            }
        ],

        // ---------------------------------------------------------------
        "systeme-de-design": [
            // Série 1
            {
                q: "Qu'est-ce qu'un système de design ?",
                options: [
                    "Une bibliothèque de composants",
                    "Un ensemble de décisions prises une fois, dont les composants sont la matérialisation",
                    "Une charte graphique"
                ],
                a: 1,
                explication: "Un système est utile précisément parce qu'il ferme des questions."
            },
            {
                q: "Quel est l'intérêt d'une échelle d'espacements ?",
                options: [
                    "Réduire le nombre de choix et rendre la cohérence automatique",
                    "Diminuer le poids des pages",
                    "Faciliter le travail des développeurs uniquement"
                ],
                a: 0,
                explication: "12, 15, 18, 20, 24, 25, 30 : rien n'est franchement faux, l'ensemble paraît bâclé."
            },
            {
                q: "Qu'est-ce que la dette de design ?",
                options: [
                    "Le coût de création du système",
                    "L'accumulation de petites exceptions acceptées « juste pour cet écran »",
                    "Le retard de mise à jour des maquettes"
                ],
                a: 1,
                explication: "Chacune paraît anodine ; leur somme rend le système inutilisable."
            },
            // Série 2
            {
                q: "Que faire d'une exception acceptée ?",
                options: [
                    "La laisser vivre à côté du système",
                    "L'intégrer au système, ou la corriger",
                    "La documenter comme cas particulier"
                ],
                a: 1,
                explication: "La laisser vivre à côté est le début de la fin."
            },
            {
                q: "Que devient un système de design sans propriétaire ?",
                options: [
                    "Il se stabilise naturellement",
                    "Il devient faux en quelques mois et les équipes cessent de le consulter",
                    "Il reste valable si la documentation est bonne"
                ],
                a: 1,
                explication: "Un système de design est un produit à part entière : sans arbitre, il ne survit pas."
            },
            {
                q: "À partir de combien d'écrans un produit conçu page par page dérive-t-il ?",
                options: [
                    "Une vingtaine",
                    "Une centaine",
                    "Cinq"
                ],
                a: 0,
                explication: "Sept nuances de bleu, quatre styles de bouton : personne ne l'a décidé, chaque écran a été fait séparément."
            }
        ]
    },

    // ===================================================================
    // Questions de synthèse — distinctes de celles des sous-sections
    // ===================================================================
    synthese: [
        // Série 1
        {
            q: "Quel problème apparaît quand un projet de design grandit ?",
            options: [
                "Les outils deviennent trop lents",
                "Des utilisateurs différents, des dizaines d'écrans, et toutes les tailles d'écran",
                "Le budget augmente"
            ],
            a: 1,
            explication: "Trois problèmes qui ne se posent pas sur une maquette isolée, et qui décident de tout sur un produit réel."
        },
        {
            q: "Quel point commun entre l'accessibilité et la conception mobile d'abord ?",
            options: [
                "Concevoir pour la contrainte améliore le cas ordinaire",
                "Les deux sont obligatoires légalement",
                "Les deux concernent uniquement le visuel"
            ],
            a: 0,
            explication: "Le petit écran révèle ce qui n'avait pas sa place ; l'accessibilité produit une interface meilleure pour tous."
        },
        {
            q: "Un menu compte quinze entrées, chacune ajoutée pour une bonne raison. Que faire ?",
            options: [
                "Les garder, chaque demande était légitime",
                "Regrouper, à partir d'un tri par cartes auprès d'utilisateurs",
                "Supprimer les moins consultées"
            ],
            a: 1,
            explication: "Le regroupement doit venir des utilisateurs, pas d'un arbitrage interne."
        },
        // Série 2
        {
            q: "Quelle vérification révèle le plus de problèmes d'accessibilité en cinq minutes ?",
            options: [
                "Naviguer sur son propre site au clavier seul",
                "Vérifier la taille des polices",
                "Passer un outil automatique"
            ],
            a: 0,
            explication: "Sans souris, les obstacles bloquants apparaissent immédiatement."
        },
        {
            q: "Qu'ont en commun le système de design et l'architecture de l'information ?",
            options: [
                "Ils sont invisibles quand ils sont bons",
                "Ils relèvent du graphisme",
                "Ils se traitent en fin de projet"
            ],
            a: 0,
            explication: "Et leurs défauts, eux, se voient partout : incohérences visuelles d'un côté, « je ne trouve pas » de l'autre."
        },
        {
            q: "Une exception au système est demandée pour un écran. Quelle est la bonne réponse ?",
            options: [
                "L'accepter, ce n'est qu'un écran",
                "L'intégrer au système si elle est justifiée, sinon la refuser",
                "La refuser systématiquement"
            ],
            a: 1,
            explication: "Ce qui tue un système n'est pas l'exception, c'est l'exception laissée à côté sans décision."
        }
    ]
};
