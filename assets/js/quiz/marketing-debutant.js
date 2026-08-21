// ===================================
// BANQUE DE QUESTIONS — GUIDE MARKETING DIGITAL
// ===================================
// 6 questions par sous-section : 3 affichées, les 3 autres au bout de deux
// semaines. Les questions de synthèse sont distinctes.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "seo-référencement-naturel": [
            // Série 1
            {
                q: "Quels sont les trois piliers du référencement naturel ?",
                options: [
                    "Le budget, la publicité et les réseaux sociaux",
                    "Le contenu, la technique et la popularité",
                    "Le nom de domaine, le logo et la charte graphique"
                ],
                a: 1,
                explication: "Le contenu représente environ 70 % du travail : répondre réellement à la question posée."
            },
            {
                q: "Que désigne l'intention de recherche ?",
                options: [
                    "Le nombre de fois qu'un mot est tapé",
                    "L'attente réelle derrière la requête : comprendre, comparer ou agir",
                    "La position visée dans les résultats"
                ],
                a: 1,
                explication: "Proposer une page de vente à quelqu'un qui veut comprendre le fait fuir, et Google mesure ce départ."
            },
            {
                q: "Un site naissant doit-il viser « assurance auto » (100 000 recherches/mois) ?",
                options: [
                    "Oui, c'est là qu'est le volume",
                    "Non : la concurrence y est inaccessible, mieux vaut des requêtes longues et précises",
                    "Oui, à condition de publier chaque jour"
                ],
                a: 1,
                explication: "90 visiteurs qualifiés valent infiniment mieux que 0 visiteur sur un mot-clé hors de portée."
            },
            // Série 2
            {
                q: "Que produit aujourd'hui la répétition artificielle d'un mot-clé ?",
                options: [
                    "Un meilleur classement",
                    "Une pénalité : ces techniques sont détectées",
                    "Aucun effet, ni bon ni mauvais"
                ],
                a: 1,
                explication: "Le critère qui reste : le visiteur trouve-t-il sa réponse et repart-il satisfait ?"
            },
            {
                q: "Combien de temps avant d'obtenir des résultats sérieux en SEO ?",
                options: ["2 à 4 semaines", "6 à 12 mois", "2 à 3 ans minimum"],
                a: 1,
                explication: "Si un prestataire promet la première place en trois semaines, la question est réglée."
            },
            {
                q: "Quelle est la force principale du référencement naturel ?",
                options: [
                    "Il donne des résultats immédiats",
                    "Le trafic obtenu ne s'arrête pas quand on cesse de payer",
                    "Il ne demande aucun travail de contenu"
                ],
                a: 1,
                explication: "Sa faiblesse est symétrique : il faut des mois avant d'en voir la couleur."
            }
        ],

        // ---------------------------------------------------------------
        "publicité-en-ligne-sea": [
            // Série 1
            {
                q: "Sur une plateforme publicitaire, le plus offrant gagne-t-il toujours ?",
                options: [
                    "Oui, c'est le principe de l'enchère",
                    "Non : l'enchère est combinée à un score de qualité",
                    "Oui, sauf le week-end"
                ],
                a: 1,
                explication: "Une annonce bien conçue coûte moins cher qu'une annonce médiocre, à position égale."
            },
            {
                q: "1 000 € de budget, 1,20 € le clic, 2 % de conversion. Quel coût par client ?",
                options: ["12 €", "environ 59 €", "environ 120 €"],
                a: 1,
                explication: "833 visiteurs, 17 clients, soit 1 000 / 17 ≈ 59 €. Rentable seulement si un client rapporte davantage."
            },
            {
                q: "Quel levier réduit le plus efficacement le coût d'acquisition ?",
                options: [
                    "Baisser le coût par clic",
                    "Améliorer le taux de conversion du site",
                    "Augmenter le budget"
                ],
                a: 1,
                explication: "Passer de 2 % à 3 % ramène le coût de 59 € à 39 €, sans dépenser un euro de plus en publicité."
            },
            // Série 2
            {
                q: "Quelle différence entre publicité sur moteur de recherche et sur réseaux sociaux ?",
                options: [
                    "Aucune, seul le support change",
                    "Sur un moteur la personne exprime déjà un besoin ; sur un réseau on l'interrompt",
                    "Les réseaux sociaux convertissent toujours mieux"
                ],
                a: 1,
                explication: "D'où une meilleure conversion sur la recherche, mais un coût par clic plus élevé."
            },
            {
                q: "Vers quelle page une annonce doit-elle mener ?",
                options: [
                    "La page d'accueil, qui présente tout",
                    "Une page qui tient exactement la promesse de l'annonce",
                    "La page de contact"
                ],
                a: 1,
                explication: "C'est la correction la moins coûteuse et la plus rentable en publicité en ligne."
            },
            {
                q: "Que devient une campagne publicitaire quand le budget s'épuise ?",
                options: [
                    "Elle continue à portée réduite",
                    "Elle s'arrête net",
                    "Elle bascule automatiquement en référencement naturel"
                ],
                a: 1,
                explication: "C'est l'exact complément du SEO : instantanée et mesurable, mais sans effet résiduel."
            }
        ],

        // ---------------------------------------------------------------
        "réseaux-sociaux": [
            // Série 1
            {
                q: "Quelle plateforme privilégier pour la vente aux entreprises ?",
                options: ["TikTok", "LinkedIn", "Instagram"],
                a: 1,
                explication: "Instagram convient aux produits visuels, TikTok au grand public, YouTube aux sujets complexes."
            },
            {
                q: "Vaut-il mieux être présent partout ou sur une seule plateforme ?",
                options: [
                    "Partout, pour maximiser la portée",
                    "Une seule, bien tenue, produit davantage",
                    "Trois au minimum, jamais moins"
                ],
                a: 1,
                explication: "Le même contenu recyclé partout donne une présence médiocre partout."
            },
            {
                q: "Pourquoi la portée gratuite diminue-t-elle sur toutes les plateformes ?",
                options: [
                    "Parce que les utilisateurs publient moins",
                    "Parce qu'elles réduisent la visibilité gratuite pour vendre de la publicité",
                    "Pour des raisons techniques de stockage"
                ],
                a: 1,
                explication: "Forte visibilité au lancement pour attirer les créateurs, puis réduction progressive."
            },
            // Série 2
            {
                q: "Quelle conséquence stratégique tirer de cette baisse de portée ?",
                options: [
                    "Publier beaucoup plus souvent",
                    "Convertir son audience en canal que l'on possède, comme une liste de courriels",
                    "Payer systématiquement pour chaque publication"
                ],
                a: 1,
                explication: "Un compte peut être suspendu, une portée peut s'effondrer ; une liste d'abonnés reste."
            },
            {
                q: "Que vaut un compte de 50 000 abonnés inactifs ?",
                options: [
                    "Beaucoup : le nombre impressionne",
                    "Moins qu'un compte de 800 abonnés engagés",
                    "La même chose qu'un compte engagé"
                ],
                a: 1,
                explication: "Les jeux-concours attirent des profils venus pour le lot, qui font chuter le taux d'engagement."
            },
            {
                q: "Qu'est-ce qui fonctionne le mieux sur la durée ?",
                options: [
                    "Dix publications en une semaine puis plus rien",
                    "Deux publications par semaine tenues six mois",
                    "Une publication parfaite par trimestre"
                ],
                a: 1,
                explication: "Répondre aux commentaires compte aussi : les plateformes valorisent les échanges."
            }
        ],

        // ---------------------------------------------------------------
        "email-marketing": [
            // Série 1
            {
                q: "Pourquoi le courriel reste-t-il le canal au meilleur rendement ?",
                options: [
                    "Parce qu'il est gratuit",
                    "Parce que la liste t'appartient, sans algorithme entre toi et tes abonnés",
                    "Parce que les gens lisent tous leurs messages"
                ],
                a: 1,
                explication: "C'est le seul actif réellement à toi, contrairement à une audience louée à une plateforme."
            },
            {
                q: "Que produit une liste d'adresses achetée ?",
                options: [
                    "Un gain de temps appréciable",
                    "Des signalements en masse qui ruinent durablement ta réputation d'expéditeur",
                    "Les mêmes résultats qu'une liste construite"
                ],
                a: 1,
                explication: "Le consentement explicite est une obligation légale, et surtout la condition d'efficacité."
            },
            {
                q: "Quel indicateur est le plus fiable aujourd'hui ?",
                options: [
                    "Le taux d'ouverture",
                    "Le taux de clic",
                    "Le nombre d'abonnés"
                ],
                a: 1,
                explication: "Le taux d'ouverture est faussé depuis que certains services préchargent les images."
            },
            // Série 2
            {
                q: "Une liste de 5 000 abonnés passe de 1,8 % à 4 % de clics. Qu'a-t-on changé ?",
                options: [
                    "On a doublé la fréquence d'envoi",
                    "On a segmenté la liste et adapté le message à chaque groupe",
                    "On a changé de fournisseur d'envoi"
                ],
                a: 1,
                explication: "Même liste, même produit, un peu plus de travail de rédaction : le résultat double."
            },
            {
                q: "Quel signal est le plus grave pour un expéditeur ?",
                options: [
                    "Un taux d'ouverture en baisse",
                    "Les signalements en spam",
                    "Les désabonnements"
                ],
                a: 1,
                explication: "Quelques signalements suffisent à dégrader la délivrabilité de tous tes envois suivants."
            },
            {
                q: "Faut-il rendre le lien de désabonnement bien visible ?",
                options: [
                    "Non, cela encourage les départs",
                    "Oui : quelqu'un qui ne le trouve pas clique sur « spam », ce qui coûte bien plus cher",
                    "Peu importe, c'est un détail"
                ],
                a: 1,
                explication: "Un désabonnement est une perte d'un contact ; un signalement abîme toute ta liste."
            }
        ]
    },

    // -------------------------------------------------------------------
    // SYNTHÈSE
    // -------------------------------------------------------------------
    synthese: [
        // Série 1
        {
            q: "Quelle particularité distingue le marketing digital de l'affichage ou de la radio ?",
            options: [
                "Il coûte toujours moins cher",
                "Presque tout y est mesurable : on peut comparer le coût d'un client à ce qu'il rapporte",
                "Il touche un public plus large"
            ],
            a: 1,
            explication: "C'est le seul juge valable — et paradoxalement celui que beaucoup évitent de consulter."
        },
        {
            q: "Que faut-il connaître avant de lancer une campagne payante ?",
            options: [
                "Le nom de ses concurrents",
                "Ce que vaut un client sur sa durée de vie",
                "Le meilleur moment de la journée pour publier"
            ],
            a: 1,
            explication: "Sans ce chiffre, tu ne pilotes rien : tu dépenses."
        },
        {
            q: "Quel canal t'appartient réellement ?",
            options: [
                "Ton compte Instagram",
                "Ta liste de courriels",
                "Ta page Facebook"
            ],
            a: 1,
            explication: "Tu loues ton audience aux plateformes. La liste que tu en extrais est le seul actif durable."
        },
        // Série 2
        {
            q: "Tu hésites entre doubler ton budget publicitaire ou améliorer ta page de vente. Que faire d'abord ?",
            options: [
                "Doubler le budget, l'effet est immédiat",
                "Améliorer la conversion : le gain profite ensuite à tous tes canaux",
                "Les deux en même temps"
            ],
            a: 1,
            explication: "Doubler le taux de conversion coûte souvent moins cher que doubler le trafic."
        },
        {
            q: "Un prestataire garantit la première position sur Google en un mois. Comment l'interpréter ?",
            options: [
                "C'est ambitieux mais crédible s'il est expérimenté",
                "C'est un signal d'alerte : le SEO demande 6 à 12 mois",
                "C'est normal pour un site neuf"
            ],
            a: 1,
            explication: "Personne ne contrôle le classement de Google, et surtout pas sur ce délai."
        },
        {
            q: "SEO et publicité payante : comment les situer l'un par rapport à l'autre ?",
            options: [
                "Ils sont interchangeables",
                "Le SEO est lent mais durable, la publicité immédiate mais s'arrête avec le budget",
                "La publicité remplace avantageusement le SEO"
            ],
            a: 1,
            explication: "Ils sont complémentaires : l'un construit un actif, l'autre achète de la visibilité."
        }
    ]
};
