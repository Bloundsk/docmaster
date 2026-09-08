// ===================================
// BANQUE DE QUESTIONS — MARKETING, NIVEAU INTERMÉDIAIRE
// ===================================
// 6 questions par sous-section : 3 affichées, les 3 autres prennent le relais
// au bout de deux semaines. Les questions de synthèse sont distinctes de
// celles des sous-sections — aucune n'est reprise deux fois.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "parcours-achat": [
            // Série 1
            {
                q: "Quatre étapes retenant chacune 50 % des visiteurs laissent au final :",
                options: [
                    "6,25 %",
                    "50 %",
                    "12,5 %"
                ],
                a: 0,
                explication: "Les taux se multiplient. C'est le point que l'intuition rate systématiquement."
            },
            {
                q: "Que faire d'une étape à 20 % au milieu du parcours ?",
                options: [
                    "La corriger : elle plafonne tout ce qui précède",
                    "Amener plus de trafic pour compenser",
                    "L'ignorer si les autres étapes vont bien"
                ],
                a: 0,
                explication: "Le goulot reste le goulot, quel que soit le volume qui arrive dessus."
            },
            {
                q: "Faire passer l'ajout au panier de 25 à 35 % sur 1 000 visiteurs :",
                options: [
                    "N'a presque aucun effet",
                    "Double les commandes",
                    "Fait passer de 30 à 42 commandes, soit + 40 %"
                ],
                a: 2,
                explication: "Sans un euro de publicité supplémentaire."
            },
            // Série 2
            {
                q: "Quelles sont les causes fréquentes d'abandon en fin de parcours ?",
                options: [
                    "Un design daté",
                    "Prix découvert tard, inscription obligatoire, formulaire long, doute non levé",
                    "Un manque de choix"
                ],
                a: 1,
                explication: "Ce sont les quatre points à vérifier en priorité sur un tunnel qui fuit."
            },
            {
                q: "Que produit un doublement du budget publicitaire sur un tunnel à 1 % ?",
                options: [
                    "Une amélioration du taux de conversion",
                    "Une baisse du coût par client",
                    "Un doublement du coût pour un résultat proportionnel, sans rien corriger"
                ],
                a: 2,
                explication: "Le même budget consacré à comprendre pourquoi 99 % partent produit un effet durable."
            },
            {
                q: "Pourquoi corriger le parcours profite-t-il à tous les canaux ?",
                options: [
                    "Parce que le trafic augmente",
                    "Parce que les moteurs le valorisent",
                    "Parce que tous les visiteurs, quelle que soit leur provenance, franchissent les mêmes étapes"
                ],
                a: 2,
                explication: "Le gain se multiplie ensuite sur tout ce qui arrive."
            }
        ],

        // ---------------------------------------------------------------
        "intention-de-recherche": [
            // Série 1
            {
                q: "Combien d'intentions de recherche distingue-t-on couramment ?",
                options: [
                    "Deux",
                    "Quatre : informationnelle, navigationnelle, commerciale, transactionnelle",
                    "Six"
                ],
                a: 1,
                explication: "Chacune appelle un format de contenu différent."
            },
            {
                q: "Comment vérifier l'intention derrière une recherche en trente secondes ?",
                options: [
                    "Consulter un outil de volume",
                    "Demander à des clients",
                    "Taper la recherche et regarder ce qui est déjà classé"
                ],
                a: 2,
                explication: "Si les dix premiers résultats sont des articles, une page produit n'a aucune chance."
            },
            {
                q: "« Comment choisir un vélo électrique » relève de quelle intention ?",
                options: [
                    "Transactionnelle",
                    "Informationnelle",
                    "Navigationnelle"
                ],
                a: 1,
                explication: "Un guide comparatif convient ; une page produit fera partir le visiteur."
            },
            // Série 2
            {
                q: "Que reprocher à une page qui informe, compare et vend en même temps ?",
                options: [
                    "Elle réussit rarement les trois",
                    "Elle est trop longue",
                    "Elle est mal vue des moteurs"
                ],
                a: 0,
                explication: "Mieux vaut un guide qui informe et renvoie vers la page produit, chacun faisant son travail."
            },
            {
                q: "Pourquoi viser « vélo électrique pliant pour trajet domicile-travail » plutôt que « vélo électrique » ?",
                options: [
                    "L'intention est claire, la concurrence réaliste, et la conversion sans commune mesure",
                    "C'est plus court à écrire",
                    "Les moteurs préfèrent les phrases longues"
                ],
                a: 0,
                explication: "Cent fois moins de volume, mais des gens qui savent ce qu'ils veulent."
            },
            {
                q: "Un excellent contenu peut-il se placer sur une recherche dont il ne satisfait pas l'intention ?",
                options: [
                    "Oui, s'il est assez complet",
                    "Non : le moteur a déjà déterminé le type de réponse attendu",
                    "Oui, avec assez de liens entrants"
                ],
                a: 1,
                explication: "Le meilleur contenu du monde ne se placera pas s'il répond à une autre question."
            }
        ],

        // ---------------------------------------------------------------
        "mesurer-ses-actions": [
            // Série 1
            {
                q: "Quelle question permet de trier les indicateurs ?",
                options: [
                    "Est-il facile à obtenir ?",
                    "Quelle décision ce nombre peut-il changer ?",
                    "Est-il comparable au secteur ?"
                ],
                a: 1,
                explication: "Impressions, vues et abonnés montent avec le budget et ne déclenchent aucune décision."
            },
            {
                q: "À quoi servent les paramètres de suivi dans les liens ?",
                options: [
                    "À distinguer d'où viennent les visiteurs",
                    "À accélérer le chargement",
                    "À améliorer le référencement"
                ],
                a: 0,
                explication: "Sans eux, tout se mélange dans « accès direct »."
            },
            {
                q: "« source=infolettre » et « Source=Infolettre » :",
                options: [
                    "Sont équivalents",
                    "Créeront deux lignes différentes",
                    "Sont tous deux invalides"
                ],
                a: 1,
                explication: "Une convention simple et respectée vaut mieux qu'un système sophistiqué appliqué au hasard."
            },
            // Série 2
            {
                q: "Un canal à 8 % sur 40 visiteurs contre un canal à 3 % sur 5 000 : lequel apporte le plus ?",
                options: [
                    "Le second : 150 clients contre 3",
                    "Le premier, plus efficace",
                    "Ils sont équivalents"
                ],
                a: 0,
                explication: "Le taux mesure l'efficacité, le volume mesure l'apport. Les deux ensemble, jamais l'un seul."
            },
            {
                q: "Une personne voit une publication, en parle à un ami qui achète trois semaines plus tard. À quoi l'outil attribue-t-il la vente ?",
                options: [
                    "À la recherche de marque, c'est-à-dire à rien d'exploitable",
                    "À la publication",
                    "Il ne l'enregistre pas"
                ],
                a: 0,
                explication: "Une part du marketing reste invisible aux outils. La reconnaître évite deux erreurs de pilotage."
            },
            {
                q: "Quels indicateurs touchent réellement au parcours ?",
                options: [
                    "Impressions et portée",
                    "Nombre d'abonnés et de mentions",
                    "Conversion par étape, coût par client, part de nouveaux clients"
                ],
                a: 2,
                explication: "Ce sont ceux qui désignent où agir."
            }
        ],

        // ---------------------------------------------------------------
        "email-et-automatisation": [
            // Série 1
            {
                q: "Quel avantage l'e-mail conserve-t-il sur les réseaux sociaux ?",
                options: [
                    "Un meilleur taux de conversion garanti",
                    "Un coût nul",
                    "La liste t'appartient : aucun algorithme ne peut te priver de ton audience"
                ],
                a: 2,
                explication: "C'est le canal où l'on est le moins dépendant d'une plateforme."
            },
            {
                q: "Liste de 4 000 personnes, 32 % d'ouverture, 12 % de clic, 6 % de conversion : combien de ventes ?",
                options: [
                    "9",
                    "48",
                    "154"
                ],
                a: 0,
                explication: "Trois taux successifs qui se multiplient. L'entonnoir est plus étroit qu'il n'y paraît."
            },
            {
                q: "Quelles sont les trois séquences automatiques les plus rentables ?",
                options: [
                    "Anniversaire, soldes, nouveautés",
                    "Accueil, panier abandonné, réactivation",
                    "Hebdomadaire, mensuelle, trimestrielle"
                ],
                a: 1,
                explication: "Elles s'écrivent une fois et travaillent ensuite seules."
            },
            // Série 2
            {
                q: "Que vaut une liste de dix mille adresses achetées ?",
                options: [
                    "Moins qu'une liste de mille personnes consentantes : plaintes, réputation dégradée, risque juridique",
                    "Dix fois mieux qu'une liste de mille",
                    "Cela dépend du fournisseur"
                ],
                a: 0,
                explication: "Une liste construite sur le consentement est un actif. Une liste achetée est un passif."
            },
            {
                q: "Pourquoi retirer les adresses inactives depuis six mois ?",
                options: [
                    "Pour réduire le coût de l'outil",
                    "Parce que la loi l'impose",
                    "Parce que cela améliore la délivrabilité de tous les autres envois"
                ],
                a: 2,
                explication: "Le nettoyage régulier fait partie du travail."
            },
            {
                q: "Une case pré-cochée pour l'infolettre constitue-t-elle un consentement ?",
                options: [
                    "Oui, si elle est visible",
                    "Non, ce n'est pas un consentement valable au sens du RGPD",
                    "Oui, pour les clients existants"
                ],
                a: 1,
                explication: "Outre le risque juridique, cela remplit la liste de personnes qui n'ont rien demandé."
            }
        ]
    },

    // ===================================================================
    // Questions de synthèse — distinctes de celles des sous-sections
    // ===================================================================
    synthese: [
        // Série 1
        {
            q: "Qu'est-ce qui relie les quatre sujets de ce niveau ?",
            options: [
                "L'optimisation des budgets publicitaires",
                "La production de contenu",
                "Le passage de « faire des actions » à « comprendre un système »"
            ],
            a: 2,
            explication: "Le parcours, l'intention, la mesure et la relation forment un ensemble cohérent."
        },
        {
            q: "Quel point commun entre le parcours d'achat et l'entonnoir de l'e-mail ?",
            options: [
                "Ils dépendent tous deux du budget",
                "Des taux successifs qui se multiplient",
                "Ils se mesurent une fois par an"
            ],
            a: 1,
            explication: "Dans les deux cas, la première étape pèse le plus lourd sur le résultat final."
        },
        {
            q: "Tu as 1 000 € et un tunnel qui convertit à 1 %. Que faire ?",
            options: [
                "Comprendre pourquoi 99 % partent",
                "Acheter du trafic",
                "Ouvrir un nouveau canal"
            ],
            a: 0,
            explication: "Le gain profite ensuite à tous les canaux, y compris ceux qu'on ouvrira plus tard."
        },
        // Série 2
        {
            q: "Quel geste vérifie à la fois l'intention et la faisabilité d'un contenu ?",
            options: [
                "Consulter le volume de recherche",
                "Analyser les concurrents",
                "Taper la recherche visée et regarder les dix premiers résultats"
            ],
            a: 2,
            explication: "Une minute, et l'on sait quel format le moteur attend."
        },
        {
            q: "Qu'ont en commun les indicateurs de vanité et les listes achetées ?",
            options: [
                "Les deux coûtent cher",
                "Les deux donnent l'illusion d'un actif sans en être un",
                "Les deux sont interdits"
            ],
            a: 1,
            explication: "Un gros chiffre rassurant, aucune décision possible et aucun client derrière."
        },
        {
            q: "Pourquoi le consentement est-il présenté comme un enjeu marketing et pas seulement juridique ?",
            options: [
                "Parce qu'il conditionne la délivrabilité et la qualité de la relation",
                "Parce qu'il augmente la taille de la liste",
                "Parce qu'il améliore le référencement"
            ],
            a: 0,
            explication: "Les plaintes et désinscriptions dégradent la réputation d'expéditeur pour tous les envois suivants."
        }
    ]
};
