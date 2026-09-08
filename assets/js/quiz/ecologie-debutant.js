// ===================================
// BANQUE DE QUESTIONS — SOBRIÉTÉ NUMÉRIQUE, NIVEAU DÉBUTANT
// ===================================
// 6 questions par sous-section : 3 affichées, les 3 autres prennent le relais
// au bout de deux semaines. Les questions de synthèse sont distinctes de
// celles des sous-sections — aucune n'est reprise deux fois.
//
// Aucune question ne repose sur un chiffre médiatique non sourcé : ce domaine
// en a diffusé de faux pendant des années.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "limpact-est-dans-la-fabrication": [
            // Série 1
            {
                q: "Pour un téléphone ou un ordinateur, où se trouve l'essentiel de l'empreinte ?",
                options: [
                    "Dans l'électricité consommée à l'usage",
                    "Dans la fabrication",
                    "Dans le transport"
                ],
                a: 1,
                explication: "L'électricité consommée pendant des années d'usage pèse bien moins."
            },
            {
                q: "Pourquoi la fabrication pèse-t-elle autant ?",
                options: [
                    "Parce que les appareils sont lourds",
                    "À cause de l'emballage",
                    "Extraction, salles blanches, assemblage — une chaîne longue et très énergivore"
                ],
                a: 2,
                explication: "Et située dans des pays dont l'électricité est bien plus carbonée que la française."
            },
            {
                q: "Un téléphone gardé 2 ans et demi coûte 29 kg CO₂e par an. Et gardé 2 ans de plus ?",
                options: [
                    "18,3 kg par an, soit 37 % de moins",
                    "26 kg par an",
                    "Le même total"
                ],
                a: 0,
                explication: "Sans rien changer à la façon de s'en servir."
            },
            // Série 2
            {
                q: "Remplacer un appareil qui fonctionne par un modèle qui consomme 30 % de moins :",
                options: [
                    "Est rentable dès la première année",
                    "Est presque toujours perdant : les 30 % portent sur la petite part",
                    "Dépend de la marque"
                ],
                a: 1,
                explication: "Et la fabrication du nouvel appareil est immédiate et entière."
            },
            {
                q: "Que reste-t-il comme variable une fois l'appareil acheté ?",
                options: [
                    "La durée pendant laquelle il servira",
                    "La façon de le recharger",
                    "Le nombre d'applications installées"
                ],
                a: 0,
                explication: "L'essentiel est déjà payé au moment où on l'allume."
            },
            {
                q: "Que deviennent les conseils portant sur l'usage, dans ce cadre ?",
                options: [
                    "Ils s'attaquent à la petite part",
                    "Ils sont les plus efficaces",
                    "Ils sont faux"
                ],
                a: 0,
                explication: "Pas faux — mais ils occupent l'attention pendant que la décision qui compte se prend ailleurs."
            }
        ],

        // ---------------------------------------------------------------
        "allonger-la-duree-de-vie": [
            // Série 1
            {
                q: "Quelle est la première cause de remplacement d'un téléphone ?",
                options: [
                    "La panne électronique",
                    "Le manque de mémoire",
                    "La casse"
                ],
                a: 2,
                explication: "Et la moins fatale : une coque et une protection d'écran coûtent quelques euros."
            },
            {
                q: "Que vaut un appareil rangé dans un tiroir « au cas où » ?",
                options: [
                    "Il n'a plus d'impact une fois éteint",
                    "Il compte pour moitié",
                    "Il a la même empreinte de fabrication qu'un appareil utilisé"
                ],
                a: 2,
                explication: "Elle est déjà dépensée. Le revendre ou le donner évite une autre fabrication."
            },
            {
                q: "Qu'est-ce qui détermine souvent la fin de vie, avant toute panne ?",
                options: [
                    "L'usure de l'écran",
                    "La fin des mises à jour de sécurité",
                    "La garantie expirée"
                ],
                a: 1,
                explication: "Un appareil sans correctifs devient difficile à garder, quel que soit son état matériel."
            },
            // Série 2
            {
                q: "Remplacer une batterie plutôt que l'appareil :",
                options: [
                    "N'est pas rentable",
                    "Coûte une fraction du prix, et évite toute une fabrication",
                    "Réduit les performances"
                ],
                a: 1,
                explication: "C'est le geste au meilleur rapport, et le plus souvent écarté."
            },
            {
                q: "Un téléphone remplacé au bout de six mois revient à combien par an ?",
                options: [
                    "125 kg CO₂e, dont 96 % pour la seule fabrication",
                    "29 kg CO₂e",
                    "60 kg CO₂e"
                ],
                a: 0,
                explication: "Le même appareil, le même usage, sept fois plus d'impact que gardé quatre ans et demi."
            },
            {
                q: "Pourquoi le logiciel écourte-t-il la vie du matériel ?",
                options: [
                    "Il use les composants",
                    "Applications et sites deviennent plus exigeants, et rendent l'appareil inconfortable",
                    "Il consomme plus d'électricité"
                ],
                a: 1,
                explication: "C'est le sujet de l'écoconception, au niveau avancé."
            }
        ],

        // ---------------------------------------------------------------
        "les-gestes-symboliques": [
            // Série 1
            {
                q: "Que vaut réellement un courriel ordinaire ?",
                options: [
                    "Une fraction de gramme de CO₂e",
                    "Environ 10 grammes",
                    "Environ 50 grammes"
                ],
                a: 0,
                explication: "Le chiffre de 10 g venait d'une estimation ancienne, reprise pendant plus de dix ans sans vérification."
            },
            {
                q: "Quels gestes ont un effet important ?",
                options: [
                    "Garder plus longtemps, acheter reconditionné, réparer",
                    "Trier ses courriels, vider son cache, se désabonner",
                    "Baisser la luminosité et fermer les onglets"
                ],
                a: 0,
                explication: "Les trois portent sur le matériel. Aucun des autres n'y touche."
            },
            {
                q: "Vider le cache de son navigateur, quel effet ?",
                options: [
                    "Un gain modéré",
                    "Un gain important sur la durée",
                    "Aucun, voire négatif : il faut retélécharger ce qui était déjà là"
                ],
                a: 2,
                explication: "C'est l'exemple le plus net d'un geste qui donne le sentiment d'agir."
            },
            // Série 2
            {
                q: "Pourquoi les conseils inefficaces circulent-ils autant ?",
                options: [
                    "Ils sont gratuits, immédiats, gratifiants, et ne remettent aucun achat en cause",
                    "Ils viennent d'études sérieuses",
                    "Ils sont les seuls applicables"
                ],
                a: 0,
                explication: "« Gardez votre téléphone deux ans de plus » est moins confortable à relayer."
            },
            {
                q: "Quel est le vrai problème d'un geste inefficace ?",
                options: [
                    "Il coûte de l'argent",
                    "Il consomme l'attention et la bonne volonté disponibles, qui sont limitées",
                    "Il est difficile à tenir"
                ],
                a: 1,
                explication: "Trier ses courriels tous les mois et changer de téléphone tous les deux ans est un mauvais échange."
            },
            {
                q: "Quelle question poser avant d'adopter un geste ?",
                options: [
                    "Est-il facile à tenir ?",
                    "Combien de personnes le font ?",
                    "Porte-t-il sur le matériel ou sur l'usage ?"
                ],
                a: 2,
                explication: "Le premier compte, le second presque pas."
            }
        ],

        // ---------------------------------------------------------------
        "bien-acheter": [
            // Série 1
            {
                q: "Quel est le levier le plus puissant à disposition d'un particulier ?",
                options: [
                    "Choisir un modèle basse consommation",
                    "Acheter reconditionné",
                    "Recycler l'ancien appareil"
                ],
                a: 1,
                explication: "Il évite la quasi-totalité d'une fabrication. Aucun geste d'usage n'approche cet ordre de grandeur."
            },
            {
                q: "Quel critère détermine le plus souvent la fin de vie d'un appareil neuf ?",
                options: [
                    "La capacité de la batterie",
                    "Le nombre d'années de mises à jour garanties",
                    "La taille de l'écran"
                ],
                a: 1,
                explication: "C'est un critère d'achat, pas un détail."
            },
            {
                q: "Quelle est la hiérarchie utile, dans l'ordre ?",
                options: [
                    "Recycler, acheter neuf, réparer",
                    "Acheter écologique, puis recycler",
                    "Garder, réparer, reconditionner — l'achat neuf en dernier"
                ],
                a: 2,
                explication: "L'achat neuf vient quand les trois premiers sont épuisés."
            },
            // Série 2
            {
                q: "À quoi sert l'indice affiché à la vente ?",
                options: [
                    "À indiquer la consommation électrique",
                    "À comparer la réparabilité ou la durabilité entre modèles",
                    "À garantir une origine européenne"
                ],
                a: 1,
                explication: "Avec la durée de disponibilité des pièces détachées, c'est l'information la plus utile."
            },
            {
                q: "Un appareil surdimensionné par rapport au besoin :",
                options: [
                    "Dure plus longtemps",
                    "Consomme moins par usage",
                    "Coûte plus cher à fabriquer sans servir davantage"
                ],
                a: 2,
                explication: "Choisir la taille et la puissance nécessaires, pas au-dessus."
            },
            {
                q: "Que faut-il vérifier avant tout achat de remplacement ?",
                options: [
                    "Que l'ancien n'était pas réparable",
                    "Le prix du neuf comparé au reconditionné",
                    "La disponibilité en magasin"
                ],
                a: 0,
                explication: "Au moins demander le devis, pour comparer."
            }
        ]
    },

    // Questions de synthèse — distinctes de celles des sous-sections
    synthese: [
        {
            q: "Quel est le fait central de ce niveau ?",
            options: [
                "L'impact d'un terminal est dans sa fabrication, pas dans son usage",
                "Le numérique consomme surtout de l'électricité",
                "Les centres de données sont le principal responsable"
            ],
            a: 0,
            explication: "Tout le reste du parcours en découle."
        },
        {
            q: "Qu'ont en commun réparer, garder et acheter reconditionné ?",
            options: [
                "Les trois réduisent la consommation électrique",
                "Les trois coûtent plus cher",
                "Les trois évitent une fabrication"
            ],
            a: 2,
            explication: "C'est ce qui les sépare de tous les gestes d'usage."
        },
        {
            q: "Une personne trie ses courriels chaque mois et change de téléphone tous les deux ans. Que dire ?",
            options: [
                "Elle a fait le mauvais échange, sans le savoir",
                "Son bilan est équilibré",
                "Le tri compense le renouvellement"
            ],
            a: 0,
            explication: "L'effort porte sur la petite part pendant que la grande est décidée ailleurs."
        },
        {
            q: "Pourquoi ce parcours commence-t-il par des chiffres faux célèbres ?",
            options: [
                "Pour dédramatiser le sujet",
                "Parce que savoir écarter un mauvais chiffre vaut mieux que connaître dix bons gestes",
                "Parce que les bons chiffres n'existent pas"
            ],
            a: 1,
            explication: "Le domaine a diffusé des estimations fausses d'un facteur dix, reprises de bonne foi."
        },
        {
            q: "Que reste-t-il si l'on n'applique qu'une seule chose de ce niveau ?",
            options: [
                "Trier ses fichiers régulièrement",
                "Choisir des modèles économes",
                "Garder ses appareils plus longtemps"
            ],
            a: 2,
            explication: "Chaque année gagnée fait plus que tous les gestes d'usage réunis."
        },
        {
            q: "Un ami veut remplacer son ordinateur de quatre ans, qui fonctionne, par un modèle plus sobre. Que lui dire ?",
            options: [
                "C'est un bon calcul si l'écart de consommation dépasse 20 %",
                "Cela dépend du prix",
                "La fabrication du neuf sera immédiate et entière ; le gain de consommation porte sur la petite part"
            ],
            a: 2,
            explication: "Remplacer un appareil qui marche est presque toujours perdant, et souvent de loin."
        }
    ]
};
