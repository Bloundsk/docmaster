// ===================================
// BANQUE DE QUESTIONS — SOBRIÉTÉ NUMÉRIQUE, NIVEAU AVANCÉ
// ===================================
// 6 questions par sous-section : 3 affichées, les 3 autres prennent le relais
// au bout de deux semaines. Les questions de synthèse sont distinctes de
// celles des sous-sections — aucune n'est reprise deux fois.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "lecoconception": [
            // Série 1
            {
                q: "Quel est le pire effet d'un service numérique lourd ?",
                options: [
                    "Rendre obsolète un appareil qui fonctionnait",
                    "Sa consommation de bande passante",
                    "Son temps de chargement"
                ],
                a: 0,
                explication: "Comme la fabrication domine, un renouvellement provoqué coûte plus cher que des années de transfert."
            },
            {
                q: "Quelle est la bonne question de conception ?",
                options: [
                    "À partir de quel âge d'appareil ma page devient-elle inutilisable ?",
                    "Combien pèse ma page en kilo-octets ?",
                    "Quel est mon score sur un outil de mesure ?"
                ],
                a: 0,
                explication: "Les deux sont liées, mais la première est celle qui compte."
            },
            {
                q: "Un site à 3 Mo, 10 000 visites par mois : que donne l'allègement de moitié ?",
                options: [
                    "Environ 0,6 kg CO₂e par an au lieu de 1,3 — moins qu'un dixième de téléphone",
                    "Une économie de plusieurs centaines de kilos",
                    "Aucune différence"
                ],
                a: 0,
                explication: "Cela ne rend pas l'allègement inutile : sa justification est ailleurs."
            },
            // Série 2
            {
                q: "Pourquoi le défilement infini pose-t-il problème ?",
                options: [
                    "C'est un mécanisme conçu pour allonger le temps passé",
                    "Il consomme trop de mémoire",
                    "Il empêche le référencement"
                ],
                a: 0,
                explication: "Augmenter l'usage sans rien apporter à l'utilisateur est l'inverse de la sobriété."
            },
            {
                q: "Que recoupent presque entièrement les critères de sobriété d'un service ?",
                options: [
                    "Ceux de l'accessibilité et de la performance",
                    "Ceux du référencement",
                    "Ceux de la sécurité"
                ],
                a: 0,
                explication: "Bonne nouvelle : ils se défendent en réunion sans invoquer l'écologie."
            },
            {
                q: "Annoncer un hébergement décarboné suffit-il à qualifier un service de sobre ?",
                options: [
                    "Non : cela traite le plus petit des trois postes",
                    "Oui, c'est le critère principal",
                    "Oui, si le fournisseur est certifié"
                ],
                a: 0,
                explication: "Ce n'est pas inutile — c'est souvent tout ce qui est fait."
            }
        ],

        // ---------------------------------------------------------------
        "le-parc-en-entreprise": [
            // Série 1
            {
                q: "100 postes à 200 kg CO₂e, renouvellement porté de 3 à 5 ans :",
                options: [
                    "2 667 kg CO₂e économisés chaque année",
                    "Une économie ponctuelle de 2 667 kg",
                    "Aucun effet, le matériel est déjà acheté"
                ],
                a: 0,
                explication: "Une décision, une fois, et un effet reconduit tous les ans."
            },
            {
                q: "Qu'est-ce qui déclenche le plus souvent le renouvellement d'un poste ?",
                options: [
                    "Le logiciel qui devient exigeant, pas la panne",
                    "L'usure du clavier",
                    "La fin de garantie"
                ],
                a: 0,
                explication: "D'où l'importance de choisir des logiciels qui n'imposent pas le renouvellement."
            },
            {
                q: "Un amortissement comptable sur trois ans oblige-t-il à remplacer au bout de trois ans ?",
                options: [
                    "Non : c'est une règle comptable, pas une obligation de remplacer",
                    "Oui, c'est une obligation fiscale",
                    "Oui, sauf dérogation"
                ],
                a: 0,
                explication: "Sortir le parc du cycle comptable automatique est l'un des leviers les plus simples."
            },
            // Série 2
            {
                q: "Que vaut une campagne de tri des courriels comparée à l'allongement du parc ?",
                options: [
                    "Elle est visible, peu coûteuse et sans effet mesurable",
                    "Elle est équivalente",
                    "Elle est plus efficace car collective"
                ],
                a: 0,
                explication: "Faire la première sans la seconde relève de la communication, pas de l'environnement."
            },
            {
                q: "Que faire d'un poste rendu par un utilisateur exigeant ?",
                options: [
                    "Le reconditionner en interne pour un autre usage",
                    "Le revendre systématiquement",
                    "Le mettre au rebut"
                ],
                a: 0,
                explication: "Il sert très bien à un poste moins gourmand."
            },
            {
                q: "Pourquoi la durée de renouvellement est-elle un levier si efficace ?",
                options: [
                    "C'est une décision unique, prise par quelques personnes, qui s'applique à tout le parc",
                    "Parce qu'elle réduit la consommation électrique",
                    "Parce qu'elle est obligatoire"
                ],
                a: 0,
                explication: "Aucune campagne de sensibilisation n'a ce rapport effort-résultat."
            }
        ],

        // ---------------------------------------------------------------
        "le-cadre-reglementaire": [
            // Série 1
            {
                q: "Que note l'indice de durabilité affiché à la vente ?",
                options: [
                    "La réparabilité et la fiabilité",
                    "La consommation électrique",
                    "L'origine géographique"
                ],
                a: 0,
                explication: "Il a succédé à l'indice de réparabilité sur plusieurs catégories d'appareils."
            },
            {
                q: "Qu'est-ce que la filière DEEE ?",
                options: [
                    "La reprise et le traitement des déchets d'équipements électriques et électroniques",
                    "Un label de sobriété",
                    "Une norme de fabrication"
                ],
                a: 0,
                explication: "Elle est financée par une contribution incluse au prix d'achat."
            },
            {
                q: "Que perd-on quand un appareil en fin de vie n'entre dans aucune filière ?",
                options: [
                    "Deux fois : la pollution du déchet, et l'extraction à recommencer",
                    "Seulement le bénéfice du recyclage",
                    "Rien de significatif"
                ],
                a: 0,
                explication: "Ces appareils contiennent des métaux dont l'extraction est le poste le plus lourd."
            },
            // Série 2
            {
                q: "Un distributeur doit-il reprendre l'ancien appareil lors d'une vente ?",
                options: [
                    "Oui, lors de la vente d'un équivalent — mais il le rappelle rarement",
                    "Non, c'est un service commercial facultatif",
                    "Oui, contre paiement"
                ],
                a: 0,
                explication: "C'est une obligation peu connue et peu appliquée."
            },
            {
                q: "Où se situe le recyclage dans la hiérarchie ?",
                options: [
                    "En dernier, après réduire, réemployer et réparer",
                    "En premier",
                    "Au même niveau que la réparation"
                ],
                a: 0,
                explication: "Il récupère une partie des matières, jamais la totalité, et consomme lui-même de l'énergie."
            },
            {
                q: "Que fait un discours centré sur le recyclage ?",
                options: [
                    "Il déplace l'attention de l'achat vers la fin de vie",
                    "Il responsabilise les fabricants",
                    "Il réduit les déchets à la source"
                ],
                a: 0,
                explication: "C'est-à-dire de l'endroit où tout se décide vers celui où il ne reste presque rien à sauver."
            }
        ],

        // ---------------------------------------------------------------
        "leffet-rebond": [
            // Série 1
            {
                q: "Qu'est-ce que l'effet rebond ?",
                options: [
                    "L'efficacité par unité s'améliore, et le nombre d'unités augmente davantage",
                    "Une hausse temporaire après une baisse",
                    "Le retour d'un matériel après réparation"
                ],
                a: 0,
                explication: "Le gain unitaire est réel, et le total monte quand même."
            },
            {
                q: "Quelle est la seule question qui compte devant un gain annoncé ?",
                options: [
                    "Le total a-t-il baissé ?",
                    "De combien de pourcents ?",
                    "Sur quelle période ?"
                ],
                a: 0,
                explication: "Elle est rarement posée, parce que la réponse est souvent non."
            },
            {
                q: "Un modèle deux fois plus efficace utilisé dix fois plus souvent :",
                options: [
                    "Consomme cinq fois plus",
                    "Consomme deux fois moins",
                    "Consomme autant"
                ],
                a: 0,
                explication: "C'est l'arithmétique du rebond, et elle est têtue."
            },
            // Série 2
            {
                q: "L'effet rebond signifie-t-il que l'efficacité est inutile ?",
                options: [
                    "Non : sans elle, la croissance des usages coûterait bien davantage",
                    "Oui, elle est contre-productive",
                    "Oui, sauf en informatique"
                ],
                a: 0,
                explication: "Il dit qu'elle ne suffit pas, pas qu'elle est inutile."
            },
            {
                q: "Que faut-il mesurer dans un tableau de bord environnemental ?",
                options: [
                    "Les totaux, pas les ratios",
                    "Les intensités par utilisateur",
                    "Les pourcentages d'amélioration"
                ],
                a: 0,
                explication: "Un tableau de bord d'intensités progressera indéfiniment pendant que l'absolu augmente."
            },
            {
                q: "Un service efficace par requête et hébergé au vert peut-il faire croître l'empreinte totale ?",
                options: [
                    "Oui, s'il multiplie les usages ou accélère le renouvellement du matériel",
                    "Non, par construction",
                    "Seulement en dehors de l'Europe"
                ],
                a: 0,
                explication: "Ces qualités répondent simplement à une autre question que celle qui est posée."
            }
        ]
    },

    // Questions de synthèse — distinctes de celles des sous-sections
    synthese: [
        {
            q: "À qui s'adresse ce niveau, contrairement aux deux premiers ?",
            options: [
                "À ceux qui décident : concevoir un service, gérer un parc, arbitrer",
                "Aux spécialistes du climat",
                "Aux développeurs uniquement"
            ],
            a: 0,
            explication: "C'est là que les leviers changent d'échelle, et que les raisonnements faux coûtent le plus cher."
        },
        {
            q: "Qu'ont en commun l'écoconception et l'allongement d'un parc ?",
            options: [
                "Les deux agissent sur le poste dominant : la fabrication des terminaux",
                "Les deux réduisent la consommation électrique",
                "Les deux relèvent d'une obligation légale"
            ],
            a: 0,
            explication: "L'un en repoussant un renouvellement, l'autre en le décidant."
        },
        {
            q: "Une entreprise lance une campagne de tri des courriels et renouvelle son parc tous les trois ans. Que dire ?",
            options: [
                "Le geste visible remplace la décision qui compte",
                "Les deux actions se complètent",
                "Le tri compense partiellement"
            ],
            a: 0,
            explication: "La question n'est alors plus environnementale : elle est de communication."
        },
        {
            q: "Pourquoi les critères de sobriété d'un service sont-ils faciles à défendre ?",
            options: [
                "Ils recoupent l'accessibilité et la performance, qui ont leurs propres arguments",
                "Ils sont imposés par la loi",
                "Ils réduisent les coûts d'hébergement"
            ],
            a: 0,
            explication: "On peut les obtenir sans jamais invoquer l'écologie."
        },
        {
            q: "Que reste-t-il si l'on ne retient qu'une chose de ce niveau ?",
            options: [
                "Chercher le total plutôt que le pourcentage",
                "Alléger ses pages",
                "Choisir un hébergeur décarboné"
            ],
            a: 0,
            explication: "S'il n'est pas donné, c'est en général qu'il ne va pas dans le bon sens."
        },
        {
            q: "Vingt ans de progrès techniques et une empreinte du numérique qui augmente : comment l'expliquer ?",
            options: [
                "Par l'effet rebond : l'efficacité progresse et les usages progressent davantage",
                "Par des mesures erronées",
                "Par la croissance de la population"
            ],
            a: 0,
            explication: "C'est la trajectoire du domaine, et elle ne s'inverse pas par l'efficacité seule."
        }
    ]
};
