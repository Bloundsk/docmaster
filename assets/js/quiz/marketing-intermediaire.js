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
                    "50 %",
                    "6,25 %",
                    "12,5 %"
                ],
                a: 1,
                explication: "Les taux se multiplient. C'est le point que l'intuition rate systématiquement."
            },
            {
                q: "Que faire d'une étape à 20 % au milieu du parcours ?",
                options: [
                    "Amener plus de trafic pour compenser",
                    "La corriger : elle plafonne tout ce qui précède",
                    "L'ignorer si les autres étapes vont bien"
                ],
                a: 1,
                explication: "Le goulot reste le goulot, quel que soit le volume qui arrive dessus."
            },
            {
                q: "Faire passer l'ajout au panier de 25 à 35 % sur 1 000 visiteurs :",
                options: [
                    "N'a presque aucun effet",
                    "Fait passer de 30 à 42 commandes, soit + 40 %",
                    "Double les commandes"
                ],
                a: 1,
                explication: "Sans un euro de publicité supplémentaire."
            },
            // Série 2
            {
                q: "Quelles sont les causes fréquentes d'abandon en fin de parcours ?",
                options: [
                    "Prix découvert tard, inscription obligatoire, formulaire long, doute non levé",
                    "Un design daté",
                    "Un manque de choix"
                ],
                a: 0,
                explication: "Ce sont les quatre points à vérifier en priorité sur un tunnel qui fuit."
            },
            {
                q: "Que produit un doublement du budget publicitaire sur un tunnel à 1 % ?",
                options: [
                    "Un doublement du coût pour un résultat proportionnel, sans rien corriger",
                    "Une amélioration du taux de conversion",
                    "Une baisse du coût par client"
                ],
                a: 0,
                explication: "Le même budget consacré à comprendre pourquoi 99 % partent produit un effet durable."
            },
            {
                q: "Pourquoi corriger le parcours profite-t-il à tous les canaux ?",
                options: [
                    "Parce que le trafic augmente",
                    "Parce que tous les visiteurs, quelle que soit leur provenance, franchissent les mêmes étapes",
                    "Parce que les moteurs le valorisent"
                ],
                a: 1,
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
                    "Taper la recherche et regarder ce qui est déjà classé",
                    "Demander à des clients"
                ],
                a: 1,
                explication: "Si les dix premiers résultats sont des articles, une page produit n'a aucune chance."
            },
            {
                q: "« Comment choisir un vélo électrique » relève de quelle intention ?",
                options: [
                    "Informationnelle",
                    "Transactionnelle",
                    "Navigationnelle"
                ],
                a: 0,
                explication: "Un guide comparatif convient ; une page produit fera partir le visiteur."
            },
            // Série 2
            {
                q: "Que reprocher à une page qui informe, compare et vend en même temps ?",
                options: [
                    "Elle est trop longue",
                    "Elle réussit rarement les trois",
                    "Elle est mal vue des moteurs"
                ],
                a: 1,
                explication: "Mieux vaut un guide qui informe et renvoie vers la page produit, chacun faisant son travail."
            },
            {
                q: "Pourquoi viser « vélo électrique pliant pour trajet domicile-travail » plutôt que « vélo électrique » ?",
                options: [
                    "C'est plus court à écrire",
                    "L'intention est claire, la concurrence réaliste, et la conversion sans commune mesure",
                    "Les moteurs préfèrent les phrases longues"
                ],
                a: 1,
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
                    "À accélérer le chargement",
                    "À distinguer d'où viennent les visiteurs",
                    "À améliorer le référencement"
                ],
                a: 1,
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
                    "Le premier, plus efficace",
                    "Le second : 150 clients contre 3",
                    "Ils sont équivalents"
                ],
                a: 1,
                explication: "Le taux mesure l'efficacité, le volume mesure l'apport. Les deux ensemble, jamais l'un seul."
            },
            {
                q: "Une personne voit une publication, en parle à un ami qui achète trois semaines plus tard. À quoi l'outil attribue-t-il la vente ?",
                options: [
                    "À la publication",
                    "À la recherche de marque, c'est-à-dire à rien d'exploitable",
                    "Il ne l'enregistre pas"
                ],
                a: 1,
                explication: "Une part du marketing reste invisible aux outils. La reconnaître évite deux erreurs de pilotage."
            },
            {
                q: "Quels indicateurs touchent réellement au parcours ?",
                options: [
                    "Impressions et portée",
                    "Conversion par étape, coût par client, part de nouveaux clients",
                    "Nombre d'abonnés et de mentions"
                ],
                a: 1,
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
                    "La liste vous appartient : aucun algorithme ne peut vous priver de votre audience",
                    "Un coût nul"
                ],
                a: 1,
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
                    "Accueil, panier abandonné, réactivation",
                    "Anniversaire, soldes, nouveautés",
                    "Hebdomadaire, mensuelle, trimestrielle"
                ],
                a: 0,
                explication: "Elles s'écrivent une fois et travaillent ensuite seules."
            },
            // Série 2
            {
                q: "Que vaut une liste de dix mille adresses achetées ?",
                options: [
                    "Dix fois mieux qu'une liste de mille",
                    "Moins qu'une liste de mille personnes consentantes : plaintes, réputation dégradée, risque juridique",
                    "Cela dépend du fournisseur"
                ],
                a: 1,
                explication: "Une liste construite sur le consentement est un actif. Une liste achetée est un passif."
            },
            {
                q: "Pourquoi retirer les adresses inactives depuis six mois ?",
                options: [
                    "Pour réduire le coût de l'outil",
                    "Parce que cela améliore la délivrabilité de tous les autres envois",
                    "Parce que la loi l'impose"
                ],
                a: 1,
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
                "Le passage de « faire des actions » à « comprendre un système »",
                "L'optimisation des budgets publicitaires",
                "La production de contenu"
            ],
            a: 0,
            explication: "Le parcours, l'intention, la mesure et la relation forment un ensemble cohérent."
        },
        {
            q: "Quel point commun entre le parcours d'achat et l'entonnoir de l'e-mail ?",
            options: [
                "Des taux successifs qui se multiplient",
                "Ils dépendent tous deux du budget",
                "Ils se mesurent une fois par an"
            ],
            a: 0,
            explication: "Dans les deux cas, la première étape pèse le plus lourd sur le résultat final."
        },
        {
            q: "Vous avez 1 000 € et un tunnel qui convertit à 1 %. Que faire ?",
            options: [
                "Acheter du trafic",
                "Comprendre pourquoi 99 % partent",
                "Ouvrir un nouveau canal"
            ],
            a: 1,
            explication: "Le gain profite ensuite à tous les canaux, y compris ceux qu'on ouvrira plus tard."
        },
        // Série 2
        {
            q: "Quel geste vérifie à la fois l'intention et la faisabilité d'un contenu ?",
            options: [
                "Consulter le volume de recherche",
                "Taper la recherche visée et regarder les dix premiers résultats",
                "Analyser les concurrents"
            ],
            a: 1,
            explication: "Une minute, et l'on sait quel format le moteur attend."
        },
        {
            q: "Qu'ont en commun les indicateurs de vanité et les listes achetées ?",
            options: [
                "Les deux donnent l'illusion d'un actif sans en être un",
                "Les deux coûtent cher",
                "Les deux sont interdits"
            ],
            a: 0,
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
