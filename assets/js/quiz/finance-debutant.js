// ===================================
// BANQUE DE QUESTIONS — GUIDE FINANCE
// ===================================
// 6 questions par sous-section : 3 affichées, les 3 autres prennent le relais
// au bout de deux semaines. Les questions de synthèse sont distinctes de
// celles des sous-sections — aucune n'est reprise deux fois.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "lépargne": [
            // Série 1
            {
                q: "À quoi correspond l'épargne de précaution ?",
                options: [
                    "3 à 6 mois de revenus",
                    "3 à 6 mois de dépenses courantes",
                    "10 % de son salaire annuel"
                ],
                a: 1,
                explication: "Ce sont bien les dépenses, pas les revenus. L'écart entre les deux représente souvent 30 %."
            },
            {
                q: "Pourquoi constituer cette réserve avant d'investir ?",
                options: [
                    "Parce que la loi l'impose",
                    "Pour ne pas être contraint de vendre ses placements au mauvais moment",
                    "Parce qu'elle rapporte davantage que la bourse"
                ],
                a: 1,
                explication: "Les imprévus financiers surviennent souvent quand l'économie va mal, c'est-à-dire quand les marchés sont bas."
            },
            {
                q: "Sur quel support placer son épargne de précaution ?",
                options: [
                    "Un support disponible sous 48 h et sans risque en capital",
                    "Un ETF actions mondiales, plus rentable",
                    "Un placement bloqué 5 ans pour éviter d'y toucher"
                ],
                a: 0,
                explication: "Ce n'est pas de l'investissement mais de l'assurance : le rendement importe peu, la disponibilité est tout."
            },
            // Série 2
            {
                q: "Tes dépenses mensuelles s'élèvent à 1 600 €. Quelle réserve viser au minimum ?",
                options: ["1 600 €", "4 800 €", "16 000 €"],
                a: 1,
                explication: "3 mois × 1 600 € = 4 800 €. La borne haute, à 6 mois, serait de 9 600 €."
            },
            {
                q: "Quelle méthode d'épargne se révèle la plus efficace dans la durée ?",
                options: [
                    "Mettre de côté ce qui reste à la fin du mois",
                    "Un virement automatique le lendemain de la paie",
                    "Épargner une grosse somme une fois par an"
                ],
                a: 1,
                explication: "Il ne reste jamais rien : les dépenses s'ajustent naturellement à ce qui est disponible."
            },
            {
                q: "Pourquoi est-il déconseillé de chercher à optimiser le rendement de cette réserve ?",
                options: [
                    "Parce que les gains y sont imposés à 100 %",
                    "Parce que le gain possible est négligeable et le risque, lui, ne l'est pas",
                    "Parce que c'est interdit sur un livret réglementé"
                ],
                a: 1,
                explication: "Prendre du risque sur son matelas de sécurité revient à supprimer sa raison d'être."
            }
        ],

        // ---------------------------------------------------------------
        "linvestissement": [
            // Série 1
            {
                q: "Que signifie « investir » d'un point de vue financier ?",
                options: [
                    "Placer son argent sans aucun risque",
                    "Accepter un risque de perte en échange d'un rendement espéré",
                    "Confier son argent à un professionnel"
                ],
                a: 1,
                explication: "Le risque n'est pas un effet secondaire : c'est la contrepartie du rendement."
            },
            {
                q: "Que promet un placement à rendement élevé et sans risque ?",
                options: [
                    "Un produit réservé aux gros patrimoines",
                    "Une arnaque, par définition",
                    "Un fonds euros classique"
                ],
                a: 1,
                explication: "Rendement élevé et absence de risque sont incompatibles. C'est le signal d'alerte le plus fiable."
            },
            {
                q: "Qu'est-ce que l'intérêt composé ?",
                options: [
                    "Un impôt sur les plus-values",
                    "Le rendement qui produit à son tour du rendement",
                    "Le cumul de plusieurs comptes d'épargne"
                ],
                a: 1,
                explication: "Discret sur quelques années, il devient le facteur dominant sur plusieurs décennies."
            },
            // Série 2
            {
                q: "Amélie place 200 €/mois dès 25 ans, Bruno dès 35 ans, tous deux jusqu'à 65 ans à 5 %. Que verse Bruno en moins, et que perd-il ?",
                options: [
                    "24 000 € de moins, environ 139 000 € de résultat en moins",
                    "24 000 € de moins, environ 24 000 € de résultat en moins",
                    "Rien, il rattrape en versant davantage"
                ],
                a: 0,
                explication: "L'écart de résultat représente près de six fois l'écart d'effort. Ces dix ans ne se rattrapent pas."
            },
            {
                q: "Sur 10 000 € placés 25 ans à 6 % brut, quel écart entre 0,2 % et 2 % de frais annuels ?",
                options: ["Environ 1 500 €", "Environ 5 000 €", "Environ 14 200 €"],
                a: 2,
                explication: "Soit davantage que le capital investi au départ. Les frais sont la seule variable que tu maîtrises totalement."
            },
            {
                q: "Pourquoi l'investissement programmé évite-t-il de chercher le bon moment ?",
                options: [
                    "Parce qu'il garantit un rendement minimum",
                    "Parce qu'on achète mécaniquement plus de parts quand les prix baissent",
                    "Parce que les frais y sont supprimés"
                ],
                a: 1,
                explication: "Un montant fixe à date fixe supprime la question du timing, que personne ne maîtrise durablement."
            }
        ],

        // ---------------------------------------------------------------
        "les-etf": [
            // Série 1
            {
                q: "Que fait un ETF, ou tracker ?",
                options: [
                    "Il tente de battre le marché grâce à un gérant",
                    "Il reproduit la performance d'un indice",
                    "Il garantit le capital investi"
                ],
                a: 1,
                explication: "Il ne cherche pas à faire mieux que l'indice, ce qui lui permet de coûter très peu."
            },
            {
                q: "Qu'achète-t-on avec une part d'ETF répliquant le MSCI World ?",
                options: [
                    "Une action d'une grande entreprise mondiale",
                    "Une fraction de plus de 1 500 entreprises de 23 pays développés",
                    "Une obligation d'État internationale"
                ],
                a: 1,
                explication: "Reconstituer cette répartition ligne par ligne serait hors de portée d'un particulier, ne serait-ce qu'en frais."
            },
            {
                q: "Un ETF protège-t-il d'une baisse générale des marchés ?",
                options: [
                    "Oui, c'est tout l'intérêt de la diversification",
                    "Non : il protège du risque lié à une entreprise, pas du risque de marché",
                    "Oui, au-delà de 8 ans de détention"
                ],
                a: 1,
                explication: "Un ETF actions mondiales a perdu plus de 30 % lors de crises passées. C'est son fonctionnement normal."
            },
            // Série 2
            {
                q: "Quel est le premier critère de choix d'un ETF ?",
                options: [
                    "Sa performance de l'année écoulée",
                    "Ses frais courants, souvent notés TER",
                    "Le nom de la société qui l'émet"
                ],
                a: 1,
                explication: "C'est le seul élément connu à l'avance. Le rendement, lui, ne se commande pas."
            },
            {
                q: "Quelle différence entre un ETF capitalisant et un ETF distribuant ?",
                options: [
                    "Le capitalisant réinvestit automatiquement les dividendes",
                    "Le distribuant est réservé aux professionnels",
                    "Le capitalisant est garanti en capital"
                ],
                a: 0,
                explication: "Le réinvestissement automatique sert directement l'intérêt composé."
            },
            {
                q: "Que montrent les études comparant fonds actifs et indices sur 10 ans ?",
                options: [
                    "Les fonds actifs battent presque toujours leur indice",
                    "La majorité des fonds actifs font moins bien, une fois les frais déduits",
                    "Les deux se valent exactement"
                ],
                a: 1,
                explication: "Cela ne signifie pas qu'aucun gérant ne bat le marché, mais qu'identifier lesquels à l'avance est une autre affaire."
            }
        ],

        // ---------------------------------------------------------------
        "la-gestion-du-risque": [
            // Série 1
            {
                q: "En finance, que désigne le mot « risque » ?",
                options: [
                    "La probabilité de tout perdre",
                    "L'ampleur des variations, à la hausse comme à la baisse",
                    "Le montant des frais prélevés"
                ],
                a: 1,
                explication: "Plus un placement peut monter fort, plus il peut descendre bas. Les deux vont toujours ensemble."
            },
            {
                q: "Quelle question détermine le niveau de risque acceptable ?",
                options: [
                    "Quel rendement je vise ?",
                    "Dans combien de temps aurai-je besoin de cet argent ?",
                    "Quel est mon âge ?"
                ],
                a: 1,
                explication: "C'est l'horizon qui commande, pas l'ambition de rendement."
            },
            {
                q: "Un placement en actions pour un besoin dans 18 mois, c'est :",
                options: [
                    "Audacieux mais défendable",
                    "Mal conçu : la durée ne laisse aucune marge pour se remettre d'une baisse",
                    "Le meilleur choix pour un objectif court"
                ],
                a: 1,
                explication: "Sous deux ans, aucun risque en capital n'est justifiable."
            },
            // Série 2
            {
                q: "Détenir dix actions du même secteur, est-ce diversifier ?",
                options: [
                    "Oui, dix lignes suffisent",
                    "Non : une vraie répartition joue sur plusieurs classes d'actifs, zones et secteurs",
                    "Oui, à condition qu'elles soient étrangères"
                ],
                a: 1,
                explication: "Un secteur entier peut chuter d'un bloc. La diversification se joue à plusieurs niveaux."
            },
            {
                q: "Quel test appliquer avant de choisir sa répartition ?",
                options: [
                    "Vérifier le rendement des trois dernières années",
                    "Se demander si l'on tiendrait sans vendre après une baisse de 35 %",
                    "Comparer les frais de trois courtiers"
                ],
                a: 1,
                explication: "Le bon niveau de risque est celui qui te laisse dormir et tenir ta stratégie dans la tempête."
            },
            {
                q: "Quand une baisse devient-elle une perte réelle ?",
                options: [
                    "Dès qu'elle apparaît sur le relevé",
                    "Au moment de la vente",
                    "Au bout d'un an"
                ],
                a: 1,
                explication: "Tant qu'on ne vend pas, la baisse reste virtuelle. D'où l'importance de ne jamais être contraint de vendre."
            }
        ],

        // ---------------------------------------------------------------
        "la-fiscalité-de-lépargne": [
            // Série 1
            {
                q: "Qu'appelle-t-on une « enveloppe » fiscale ?",
                options: [
                    "Le contenant dans lequel on loge ses placements",
                    "Un type de placement à part entière",
                    "Le document envoyé par l'administration fiscale"
                ],
                a: 0,
                explication: "Deux placements identiques peuvent laisser des sommes très différentes selon leur contenant."
            },
            {
                q: "Au bout de combien d'années un PEA permet-il l'exonération d'impôt sur le revenu ?",
                options: ["2 ans", "5 ans", "8 ans"],
                a: 1,
                explication: "Les prélèvements sociaux restent dus. Un retrait avant 5 ans entraîne la clôture du plan."
            },
            {
                q: "À partir de quelle durée l'assurance-vie ouvre-t-elle droit à un abattement annuel ?",
                options: ["5 ans", "8 ans", "12 ans"],
                a: 1,
                explication: "Le compteur démarre à l'ouverture du contrat, pas au premier versement important."
            },
            // Série 2
            {
                q: "Quel est le taux du prélèvement forfaitaire unique sur un compte-titres ordinaire ?",
                options: ["17,2 %", "30 %", "45 %"],
                a: 1,
                explication: "Soit 12,8 % d'impôt sur le revenu et 17,2 % de prélèvements sociaux."
            },
            {
                q: "Sur 10 000 € de plus-value, quel écart entre un compte-titres et un PEA de plus de 5 ans ?",
                options: ["Environ 300 €", "Environ 1 280 €", "Aucun"],
                a: 1,
                explication: "3 000 € d'impôt contre 1 720 € de prélèvements sociaux, pour exactement les mêmes placements."
            },
            {
                q: "Pourquoi ouvrir tôt un PEA, même avec une petite somme ?",
                options: [
                    "Pour bénéficier d'une prime d'ouverture",
                    "Parce que le compteur fiscal démarre à l'ouverture et ne se rattrape pas",
                    "Parce que les frais baissent avec le temps"
                ],
                a: 1,
                explication: "C'est l'une des rares décisions financières qui ne coûte presque rien et ne se rattrape pas plus tard."
            }
        ]
    },

    // -------------------------------------------------------------------
    // SYNTHÈSE — questions transversales, distinctes de celles ci-dessus
    // -------------------------------------------------------------------
    synthese: [
        // Série 1
        {
            q: "Dans quel ordre aborder sa situation financière ?",
            options: [
                "Investir d'abord, épargner ensuite avec les gains",
                "Constituer une réserve de précaution, puis investir le surplus",
                "Ouvrir un PEA avant toute chose"
            ],
            a: 1,
            explication: "Investir sans matelas de sécurité conduit à devoir vendre au pire moment."
        },
        {
            q: "Quel facteur pèse le plus sur le résultat d'un placement à très long terme ?",
            options: ["Le choix du bon moment d'entrée", "Le temps passé investi", "Le nombre de supports détenus"],
            a: 1,
            explication: "Commencer modestement et tôt bat largement commencer fort et tard."
        },
        {
            q: "Parmi ces éléments, lequel maîtrises-tu totalement à l'avance ?",
            options: ["Le rendement", "Les frais", "La durée d'une crise"],
            a: 1,
            explication: "Le rendement ne se commande pas ; les frais, si. D'où leur importance disproportionnée."
        },
        // Série 2
        {
            q: "Un ami te propose un placement à 12 % par an garanti sans risque. Que faire ?",
            options: [
                "Investir une petite somme pour tester",
                "Refuser : rendement élevé et absence de risque sont incompatibles",
                "Demander un rendement plus élevé"
            ],
            a: 1,
            explication: "Vérifie systématiquement l'enregistrement de l'intermédiaire auprès de l'ORIAS ou de l'ACPR."
        },
        {
            q: "Tu as besoin de 15 000 € dans 18 mois pour un apport immobilier. Quelle orientation ?",
            options: [
                "Actions, pour maximiser le gain d'ici là",
                "Aucun risque en capital : l'horizon est trop court",
                "50 % actions, 50 % fonds euros"
            ],
            a: 1,
            explication: "Sous deux ans, une baisse n'a pas le temps d'être absorbée."
        },
        {
            q: "Quel ordre de raisonnement suivre pour choisir un placement ?",
            options: [
                "L'enveloppe fiscale, puis le placement, puis le besoin",
                "Le besoin, puis l'horizon, puis le placement, puis l'enveloppe",
                "Le rendement affiché, puis le reste"
            ],
            a: 1,
            explication: "Un avantage fiscal ne compense jamais des frais élevés ou un placement inadapté."
        }
    ]
};
