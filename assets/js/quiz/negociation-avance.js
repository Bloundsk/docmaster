// ===================================
// BANQUE DE QUESTIONS — NÉGOCIATION & COMMUNICATION, NIVEAU AVANCÉ
// ===================================
// 6 questions par sous-section : 3 affichées, les 3 autres prennent le relais
// au bout de deux semaines. Les questions de synthèse sont distinctes de
// celles des sous-sections — aucune n'est reprise deux fois.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "les-conversations-difficiles": [
            // Série 1
            {
                q: "Pourquoi « tu ne prends pas ce projet au sérieux » bloque-t-il la conversation ?",
                options: [
                    "C'est une intention supposée : la seule réponse possible est de la nier",
                    "C'est trop direct",
                    "Cela manque de preuves chiffrées"
                ],
                a: 0,
                explication: "Un fait se discute ; une intention prêtée ne se discute pas."
            },
            {
                q: "Quelle règle permet de s'en tenir aux faits ?",
                options: [
                    "Décrire ce qu'une caméra aurait enregistré",
                    "Citer des chiffres",
                    "Rester sur le passé récent"
                ],
                a: 0,
                explication: "Tout ce qui n'aurait pas été filmable relève de l'interprétation."
            },
            {
                q: "Quels sont les trois temps d'une critique utile ?",
                options: [
                    "Le fait, l'effet, la demande",
                    "Le compliment, la critique, le compliment",
                    "Le constat, l'émotion, la sanction"
                ],
                a: 0,
                explication: "Sans le troisième temps, il ne reste qu'un reproche."
            },
            // Série 2
            {
                q: "Que vaut la technique du compliment enrobant la critique ?",
                options: [
                    "Largement inefficace : on retient l'un ou l'autre, et on se méfie des compliments",
                    "C'est la meilleure approche",
                    "Elle fonctionne à l'écrit seulement"
                ],
                a: 0,
                explication: "Mieux vaut dire ce qui ne va pas une fois, clairement, et les choses positives à d'autres moments."
            },
            {
                q: "Quelles deux conditions matérielles pèsent autant que la formulation ?",
                options: [
                    "En tête-à-tête, et avec du temps prévu pour la réponse",
                    "Par écrit, et avec un témoin",
                    "En début de semaine, et brièvement"
                ],
                a: 0,
                explication: "Une critique sans espace pour répondre sera vécue comme une condamnation."
            },
            {
                q: "Que risque-t-on à présenter une décision déjà prise comme une discussion ouverte ?",
                options: [
                    "De perdre la confiance de son interlocuteur",
                    "De prolonger la réunion",
                    "Rien, c'est diplomatique"
                ],
                a: 0,
                explication: "Il faut distinguer ce qui est négociable de ce qui ne l'est pas."
            }
        ],

        // ---------------------------------------------------------------
        "les-biais": [
            // Série 1
            {
                q: "Que dit le biais du coût irrécupérable ?",
                options: [
                    "Le temps déjà passé ne devrait rien changer à la décision",
                    "Plus on investit, plus on doit persévérer",
                    "Il faut amortir l'effort consenti"
                ],
                a: 0,
                explication: "Six mois de discussions ne rendent pas un mauvais accord acceptable."
            },
            {
                q: "Quel biais empêche de trouver les accords créatifs ?",
                options: [
                    "Supposer que ce que l'un gagne, l'autre le perd",
                    "L'excès de confiance",
                    "La peur du conflit"
                ],
                a: 0,
                explication: "Il ferme la recherche d'échanges asymétriques."
            },
            {
                q: "Connaître un biais suffit-il à s'en protéger ?",
                options: [
                    "Non : l'ancrage a été mesuré chez des experts prévenus du dispositif",
                    "Oui, la connaissance suffit",
                    "Oui, après entraînement"
                ],
                a: 0,
                explication: "Ce qui fonctionne est procédural, pas cognitif."
            },
            // Série 2
            {
                q: "Quelle procédure limite les dégâts ?",
                options: [
                    "Écrire son point de rupture avant de commencer, et le relire au moment de décider",
                    "Se répéter les biais avant la réunion",
                    "Se faire accompagner"
                ],
                a: 0,
                explication: "Un chiffre écrit à froid résiste bien mieux à la pression du moment."
            },
            {
                q: "Qu'est-ce que l'engagement par cohérence ?",
                options: [
                    "S'accrocher à un chiffre annoncé pour ne pas paraître changeant",
                    "Tenir ses engagements contractuels",
                    "Répéter le même argument"
                ],
                a: 0,
                explication: "Même quand des informations nouvelles le rendent absurde."
            },
            {
                q: "Pourquoi surestime-t-on ce que l'autre sait de nos contraintes ?",
                options: [
                    "Elles nous paraissent évidentes alors qu'elles sont invisibles de l'extérieur",
                    "Parce qu'on communique trop",
                    "Parce que l'autre se renseigne"
                ],
                a: 0,
                explication: "Et on ne les explique donc pas."
            }
        ],

        // ---------------------------------------------------------------
        "reconnaitre-la-manipulation": [
            // Série 1
            {
                q: "Quelle est la réponse à un procédé de négociation ?",
                options: [
                    "Le nommer calmement",
                    "Le subir sans réagir",
                    "En employer un symétrique"
                ],
                a: 0,
                explication: "Il ne fonctionne qu'inaperçu."
            },
            {
                q: "Qu'est-ce que le grignotage final ?",
                options: [
                    "Une demande supplémentaire une fois l'accord presque conclu",
                    "Une série de petites concessions",
                    "Un refus de conclure"
                ],
                a: 0,
                explication: "Il exploite le moment où renoncer coûterait tout."
            },
            {
                q: "Quel est le vrai rempart contre tous ces procédés ?",
                options: [
                    "Votre solution de rechange",
                    "L'expérience",
                    "Un contrat écrit"
                ],
                a: 0,
                explication: "Ils supposent tous que vous ne puissiez pas partir."
            },
            // Série 2
            {
                q: "Que révèle « mon supérieur refuse » ?",
                options: [
                    "Une autorité absente, invérifiable, qui déplace la négociation",
                    "Une contrainte réelle à respecter",
                    "Une invitation à monter d'un niveau"
                ],
                a: 0,
                explication: "Elle déplace la discussion vers quelqu'un d'introuvable."
            },
            {
                q: "Pourquoi les procédés sont-ils plus fréquents dans les relations asymétriques ?",
                options: [
                    "Ils fonctionnent d'autant mieux que l'autre n'a nulle part où aller",
                    "Parce que les enjeux y sont plus élevés",
                    "Parce que les parties se connaissent moins"
                ],
                a: 0,
                explication: "C'est la même raison qui fait de la solution de rechange la protection générale."
            },
            {
                q: "Que coûte le fait de répliquer par les mêmes armes ?",
                options: [
                    "La possibilité d'échanges asymétriques, et la relation",
                    "Rien, c'est de bonne guerre",
                    "Du temps uniquement"
                ],
                a: 0,
                explication: "Ce sont les échanges asymétriques qui produisent les meilleurs accords."
            }
        ],

        // ---------------------------------------------------------------
        "savoir-sarreter": [
            // Série 1
            {
                q: "1 500 € d'écart, 6 semaines de blocage, 3 h par semaine à 45 €/h : que donne le calcul ?",
                options: [
                    "810 € de temps consommé, soit 54 % de l'écart restant",
                    "Un coût négligeable",
                    "2 700 €, soit davantage que l'écart"
                ],
                a: 0,
                explication: "L'écart justifie encore de discuter, mais de justesse."
            },
            {
                q: "Le même blocage étiré sur vingt semaines coûte :",
                options: [
                    "2 700 €, soit 180 % de l'écart restant",
                    "810 €",
                    "Le même montant, le temps ne se compte pas"
                ],
                a: 0,
                explication: "À ce stade, les deux parties ont perdu, quel que soit l'accord final."
            },
            {
                q: "Pourquoi ce calcul n'est-il jamais fait ?",
                options: [
                    "Il donne généralement tort aux deux camps",
                    "Il est trop complexe",
                    "Les données manquent"
                ],
                a: 0,
                explication: "C'est pourtant une multiplication et une comparaison."
            },
            // Série 2
            {
                q: "Quels sont les trois éléments d'un départ bien mené ?",
                options: [
                    "Remercier, dire ce qui aurait permis un accord, laisser la porte ouverte",
                    "Annoncer, justifier, partir",
                    "Menacer, attendre, revenir"
                ],
                a: 0,
                explication: "Cette formulation relance parfois la négociation dans de meilleures conditions."
            },
            {
                q: "Quitter la table, qu'est-ce que c'est ?",
                options: [
                    "L'exercice de votre solution de rechange",
                    "Un échec de la négociation",
                    "Une menace tactique"
                ],
                a: 0,
                explication: "C'est l'usage de ce qui vous donnait du pouvoir depuis le début."
            },
            {
                q: "Que produit la fatigue d'une négociation longue ?",
                options: [
                    "On accepte ce qu'on aurait refusé au premier jour",
                    "On devient plus exigeant",
                    "On négocie mieux, par habitude"
                ],
                a: 0,
                explication: "Le soulagement est immédiat et ne dit rien de la qualité de l'accord."
            }
        ]
    },

    // Questions de synthèse — distinctes de celles des sous-sections
    synthese: [
        {
            q: "Qu'ont en commun tous les sujets de ce niveau ?",
            options: [
                "Ils supposent que la discussion n'est pas de bonne foi, ou plus tenable",
                "Ils concernent les négociations commerciales",
                "Ils demandent un tiers médiateur"
            ],
            a: 0,
            explication: "Les deux premiers niveaux supposaient des parties qui cherchent un accord."
        },
        {
            q: "Qu'ont en commun le point de rupture écrit et le fait observable ?",
            options: [
                "Les deux résistent à la pression du moment, contrairement aux intentions gardées en tête",
                "Les deux relèvent du droit",
                "Les deux se communiquent à l'autre partie"
            ],
            a: 0,
            explication: "Une procédure écrite tient là où la volonté cède."
        },
        {
            q: "Un vendeur annonce que son offre expire dans deux heures. Que faire ?",
            options: [
                "Nommer le procédé : « Je note que le délai est très court. Est-il négociable ? »",
                "Décider immédiatement",
                "Annoncer qu'on part"
            ],
            a: 0,
            explication: "Cette phrase n'accuse pas : elle rend visible ce qui devait rester implicite."
        },
        {
            q: "Pourquoi les procédés décrits ici ne sont-ils pas recommandés ?",
            options: [
                "Dans une relation qui doit durer, ils coûtent plus qu'ils ne rapportent",
                "Parce qu'ils sont interdits",
                "Parce qu'ils ne fonctionnent pas"
            ],
            a: 0,
            explication: "Ils sont décrits pour être reconnus, pas employés."
        },
        {
            q: "Un salarié subit des pressions répétées de son responsable. Relève-t-il de ce guide ?",
            options: [
                "Non : cela relève de recours précis, décrits dans le guide Santé au travail",
                "Oui, c'est une négociation asymétrique",
                "Oui, il faut appliquer les conversations difficiles"
            ],
            a: 0,
            explication: "Certaines situations ne se négocient pas."
        },
        {
            q: "Que reste-t-il si l'on ne retient qu'une chose de ce niveau ?",
            options: [
                "Écrire son point de rupture avant d'entrer, et ne le relire qu'au moment de décider",
                "Reconnaître les six procédés",
                "Ne jamais quitter la table"
            ],
            a: 0,
            explication: "C'est la seule protection qui résiste à la fatigue."
        }
    ]
};
