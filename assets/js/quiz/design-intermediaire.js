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
                q: "À qui profite l'accessibilité ?",
                options: [
                    "À une petite minorité de personnes en situation de handicap",
                    "À tout le monde : le handicap est souvent temporaire ou situationnel",
                    "Uniquement aux services publics, qui y sont obligés"
                ],
                a: 1,
                explication: "Un bras plâtré, un écran en plein soleil, un enfant dans les bras : autant de situations qui placent dans la position que l'accessibilité prend en compte."
            },
            {
                q: "Quel rapport de contraste est demandé pour un texte de taille normale ?",
                options: [
                    "3 pour 1",
                    "4,5 pour 1",
                    "7 pour 1"
                ],
                a: 1,
                explication: "3 pour 1 suffit aux grands titres. Le gris clair sur blanc échoue systématiquement."
            },
            {
                q: "Que ne faut-il jamais supprimer sur un élément actif au clavier ?",
                options: [
                    "Son contour de focus",
                    "Son libellé",
                    "Son animation"
                ],
                a: 0,
                explication: "Le retirer parce qu'il est jugé disgracieux rend le site inutilisable pour qui ne peut pas viser à la souris."
            },
            // Série 2
            {
                q: "Quelle taille minimale pour une cible tactile ?",
                options: [
                    "24 pixels CSS",
                    "44 pixels CSS, soit environ 9 à 11 millimètres",
                    "64 pixels CSS"
                ],
                a: 1,
                explication: "C'est l'ordre de grandeur de la surface couverte par un doigt."
            },
            {
                q: "Une image purement décorative doit être :",
                options: [
                    "Décrite en détail",
                    "Marquée comme décorative, pour ne pas être lue inutilement",
                    "Supprimée"
                ],
                a: 1,
                explication: "Seules les images porteuses d'information ont besoin d'une description."
            },
            {
                q: "Quand faut-il traiter l'accessibilité ?",
                options: [
                    "Dès les maquettes",
                    "À la fin, lors de la recette",
                    "Après la mise en ligne, si un utilisateur se plaint"
                ],
                a: 0,
                explication: "Reprise à la fin, elle devient une refonte : contraste, charte, balisage. Prise en compte au départ, elle ne coûte presque rien."
            }
        ],

        // ---------------------------------------------------------------
        "architecture-information": [
            // Série 1
            {
                q: "Sur quoi la navigation doit-elle être construite ?",
                options: [
                    "Sur l'organigramme de la structure",
                    "Sur les tâches des utilisateurs",
                    "Sur l'ordre chronologique des contenus"
                ],
                a: 1,
                explication: "Un visiteur ne cherche pas « le service des adhésions » : il cherche « comment m'inscrire »."
            },
            {
                q: "En quoi consiste le tri par cartes ?",
                options: [
                    "Classer les pages par fréquentation",
                    "Demander à des participants de regrouper les contenus et de nommer les groupes",
                    "Trier les contenus par date de publication"
                ],
                a: 1,
                explication: "Les regroupements qui reviennent chez la plupart indiquent la structure attendue."
            },
            {
                q: "Comment juger un libellé de menu ?",
                options: [
                    "À sa concision",
                    "Quelqu'un qui découvre le site sait-il ce qu'il trouvera derrière ?",
                    "À sa cohérence avec la charte éditoriale"
                ],
                a: 1,
                explication: "Le vocabulaire interne échoue presque toujours à ce test."
            },
            // Série 2
            {
                q: "Que reprocher à « Nos solutions » comme entrée de menu ?",
                options: [
                    "C'est trop long",
                    "Cela ne dit rien de ce qu'on trouvera",
                    "C'est trop commercial"
                ],
                a: 1,
                explication: "« Tarifs » dit tout, en un mot."
            },
            {
                q: "Que produit la présence simultanée de « Espace client » et « Mon compte » ?",
                options: [
                    "Une meilleure couverture des besoins",
                    "Une hésitation à chaque visite : le visiteur doit deviner",
                    "Rien, les deux se comprennent"
                ],
                a: 1,
                explication: "Deux entrées qui peuvent être confondues coûtent plus qu'elles ne rapportent."
            },
            {
                q: "Au-delà de combien d'entrées de premier niveau faut-il regrouper ?",
                options: [
                    "Trois",
                    "Sept environ",
                    "Quinze"
                ],
                a: 1,
                explication: "Et le regroupement doit venir des utilisateurs, pas d'un arbitrage interne."
            }
        ],

        // ---------------------------------------------------------------
        "mobile-dabord": [
            // Série 1
            {
                q: "Pourquoi concevoir d'abord pour le petit écran ?",
                options: [
                    "Parce que c'est plus rapide à dessiner",
                    "Parce que la contrainte force à identifier ce qui compte vraiment",
                    "Parce que les outils le recommandent"
                ],
                a: 1,
                explication: "Élargir ensuite est facile ; retrancher dans l'urgence produit des versions mobiles amputées."
            },
            {
                q: "Sur quoi les points de rupture doivent-ils être calés ?",
                options: [
                    "Sur les modèles de téléphones du moment",
                    "Sur le contenu, là où la mise en page commence à mal vieillir",
                    "Sur des valeurs standard universelles"
                ],
                a: 1,
                explication: "Les modèles changent chaque année et il en existe des centaines."
            },
            {
                q: "Que vaut le fait de masquer la moitié des éléments derrière un menu sur mobile ?",
                options: [
                    "C'est la bonne pratique de la conception adaptative",
                    "C'est repousser la décision : si un contenu n'y a pas sa place, la mérite-t-il ailleurs ?",
                    "Cela dépend du nombre d'éléments"
                ],
                a: 1,
                explication: "Le petit écran ne réduit pas l'interface : il révèle ce qui n'y avait pas sa place."
            },
            // Série 2
            {
                q: "Quelle surface un doigt couvre-t-il environ ?",
                options: [
                    "3 millimètres",
                    "9 millimètres",
                    "20 millimètres"
                ],
                a: 1,
                explication: "D'où la recommandation de 44 pixels CSS pour une cible tactile."
            },
            {
                q: "Un lien de 24 pixels entouré d'autres liens serrés produit :",
                options: [
                    "Une interface compacte et efficace",
                    "Des erreurs de manipulation, que l'utilisateur s'attribuera",
                    "Un problème uniquement sur les petits téléphones"
                ],
                a: 1,
                explication: "L'utilisateur croira s'être trompé lui-même. C'est le concepteur qui a fauté."
            },
            {
                q: "Que faut-il vérifier en plus de la taille d'une cible ?",
                options: [
                    "Sa couleur",
                    "L'espacement avec les cibles voisines",
                    "Son animation au survol"
                ],
                a: 1,
                explication: "Deux grandes cibles collées l'une à l'autre produisent autant d'erreurs qu'une petite."
            }
        ],

        // ---------------------------------------------------------------
        "systeme-de-design": [
            // Série 1
            {
                q: "Qu'est-ce qu'un système de design, essentiellement ?",
                options: [
                    "Une bibliothèque de composants",
                    "Un ensemble de décisions prises une fois",
                    "Une charte graphique"
                ],
                a: 1,
                explication: "Les composants ne sont que la matérialisation de ces décisions."
            },
            {
                q: "À quoi sert principalement un système de design ?",
                options: [
                    "À faire plus joli",
                    "À fermer des questions, pour ne plus les reprendre à chaque écran",
                    "À accélérer le développement"
                ],
                a: 1,
                explication: "Chaque fois qu'un designer se demande « quelle taille pour ce titre ? », le système doit avoir répondu avant."
            },
            {
                q: "Pourquoi préférer une échelle d'espacements à des valeurs libres ?",
                options: [
                    "Les valeurs libres sont techniquement plus lourdes",
                    "La contrainte réduit les décisions et rend la cohérence automatique",
                    "L'échelle est imposée par les navigateurs"
                ],
                a: 1,
                explication: "Sans échelle, les espacements valent 12, 15, 18, 20, 24 selon l'écran et le jour. Rien n'est faux, l'ensemble paraît bâclé."
            },
            // Série 2
            {
                q: "Qu'est-ce que la dette de design ?",
                options: [
                    "Le coût de création du système",
                    "L'accumulation de petites exceptions acceptées « juste pour cet écran »",
                    "Le retard de la documentation"
                ],
                a: 1,
                explication: "Chacune paraît anodine ; leur somme rend le système inutilisable, puisqu'il ne décrit plus le produit réel."
            },
            {
                q: "Que faire d'une exception acceptée ?",
                options: [
                    "L'intégrer au système, ou la corriger",
                    "La documenter comme cas particulier",
                    "La laisser vivre, c'est marginal"
                ],
                a: 0,
                explication: "La laisser vivre à côté est le début de la fin."
            },
            {
                q: "Que devient un système de design sans propriétaire ?",
                options: [
                    "Il se stabilise de lui-même",
                    "Il devient faux en quelques mois, et les équipes cessent de le consulter",
                    "Il continue de fonctionner si la documentation est bonne"
                ],
                a: 1,
                explication: "Un système de design est un produit à part entière. Sans quelqu'un pour l'arbitrer, il ne survit pas."
            }
        ]
    },

    // ===================================================================
    // Questions de synthèse — distinctes de celles des sous-sections
    // ===================================================================
    synthese: [
        // Série 1
        {
            q: "Quel problème commun ces quatre sujets adressent-ils ?",
            options: [
                "Ce qui apparaît quand un projet grandit au-delà d'une maquette isolée",
                "L'esthétique des interfaces",
                "La performance technique"
            ],
            a: 0,
            explication: "Des utilisateurs qui ne te ressemblent pas, des dizaines d'écrans à faire tenir ensemble, des tailles d'écran très différentes."
        },
        {
            q: "Quel test révèle le plus de problèmes d'accessibilité en cinq minutes ?",
            options: [
                "Vérifier les contrastes",
                "Naviguer sur son propre site au clavier seul",
                "Lire le code source"
            ],
            a: 1,
            explication: "Sans souris, les obstacles bloquants sautent aux yeux immédiatement."
        },
        {
            q: "Qu'ont en commun un menu construit sur l'organigramme et un système sans propriétaire ?",
            options: [
                "Les deux sont parfaitement clairs de l'intérieur, et inutilisables de l'extérieur",
                "Les deux coûtent cher à produire",
                "Les deux sont interdits par la réglementation"
            ],
            a: 0,
            explication: "Le point de vue interne est le piège commun de ce niveau."
        },
        // Série 2
        {
            q: "Un bouton mesure 32 pixels de côté. Que faut-il en penser ?",
            options: [
                "C'est conforme",
                "C'est en dessous de la recommandation de 44 pixels",
                "La taille n'a pas d'importance si le contraste est bon"
            ],
            a: 1,
            explication: "Environ 8,5 mm à l'écran, contre 9 mm couverts par un doigt : les erreurs sont prévisibles."
        },
        {
            q: "Pourquoi l'accessibilité doit-elle être pensée au moment des maquettes ?",
            options: [
                "Pour respecter les délais",
                "Parce qu'après, il faut revoir la charte et le balisage : c'est une refonte",
                "Parce que les outils l'imposent"
            ],
            a: 1,
            explication: "Au départ, il s'agit surtout de choisir les bonnes couleurs et les bonnes tailles."
        },
        {
            q: "Quelle démarche relie le tri par cartes et le test au clavier ?",
            options: [
                "Vérifier auprès de la réalité plutôt que de raisonner depuis son bureau",
                "Automatiser les contrôles",
                "Documenter les décisions"
            ],
            a: 0,
            explication: "Les deux consistent à sortir de son propre point de vue, qui est précisément le biais du concepteur."
        }
    ]
};
