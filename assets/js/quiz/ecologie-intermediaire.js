// ===================================
// BANQUE DE QUESTIONS — SOBRIÉTÉ NUMÉRIQUE, NIVEAU INTERMÉDIAIRE
// ===================================
// 6 questions par sous-section : 3 affichées, les 3 autres prennent le relais
// au bout de deux semaines. Les questions de synthèse sont distinctes de
// celles des sous-sections — aucune n'est reprise deux fois.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "lire-un-chiffre-dimpact": [
            // Série 1
            {
                q: "Où se cachent le plus souvent les facteurs dix dans un chiffre d'impact ?",
                options: [
                    "Dans le périmètre : fabrication comprise, ou usage seul ?",
                    "Dans l'arrondi",
                    "Dans la devise utilisée"
                ],
                a: 0,
                explication: "C'est la première des cinq questions à poser."
            },
            {
                q: "Pourquoi le pays change-t-il tout ?",
                options: [
                    "L'électricité française émet cinq à dix fois moins que la moyenne européenne",
                    "Les réseaux sont différents",
                    "Les appareils ne sont pas les mêmes"
                ],
                a: 0,
                explication: "Le même calcul change complètement de résultat selon le pays."
            },
            {
                q: "Comment un chiffre faux s'installe-t-il ?",
                options: [
                    "Chaque reprise perd les hypothèses de la précédente, jusqu'à ce que la source disparaisse",
                    "Par une erreur de calcul initiale",
                    "Par manipulation délibérée"
                ],
                a: 0,
                explication: "C'est le trajet du « 3,2 kg par heure de vidéo », corrigé plus tard d'un facteur voisin de huit."
            },
            // Série 2
            {
                q: "Que faire d'un chiffre qui ne peut pas être remonté à sa source ?",
                options: [
                    "Ne pas le relayer",
                    "Le relayer avec une réserve",
                    "Le relayer s'il vient d'une institution"
                ],
                a: 0,
                explication: "Même s'il va dans le bon sens."
            },
            {
                q: "Pourquoi se méfier d'un chiffre de 2015 dans ce domaine ?",
                options: [
                    "Les intensités énergétiques du numérique baissent vite",
                    "Les méthodes de calcul étaient interdites",
                    "Les données n'étaient pas publiques"
                ],
                a: 0,
                explication: "Un chiffre ancien est souvent périmé, sans que rien ne le signale."
            },
            {
                q: "« Le streaming ne consomme rien » est-il une bonne correction du chiffre faux ?",
                options: [
                    "Non : c'est une affirmation inverse tout aussi tranchée",
                    "Oui, elle rétablit la vérité",
                    "Oui, si elle vient d'un chercheur"
                ],
                a: 0,
                explication: "La bonne réponse est un ordre de grandeur assorti d'une incertitude — ce qui se relaie mal."
            }
        ],

        // ---------------------------------------------------------------
        "le-cas-du-streaming": [
            // Série 1
            {
                q: "Qu'est-ce qui se calcule avec certitude dans le streaming ?",
                options: [
                    "La consommation de l'appareil : sa puissance multipliée par la durée",
                    "Le coût du réseau par gigaoctet",
                    "La part des centres de données"
                ],
                a: 0,
                explication: "Le reste est plus petit et beaucoup plus incertain."
            },
            {
                q: "Deux heures de vidéo par jour, sur téléviseur de 100 W contre téléphone de 3 W :",
                options: [
                    "4,4 kg contre 0,13 kg CO₂e par an — un facteur 33",
                    "Un écart négligeable",
                    "4,4 kg contre 2 kg"
                ],
                a: 0,
                explication: "Pour exactement le même contenu et la même durée."
            },
            {
                q: "Pourquoi un fichier deux fois plus lourd ne consomme-t-il pas deux fois plus sur le réseau ?",
                options: [
                    "Un réseau consomme surtout parce qu'il est allumé, pas parce qu'il transporte",
                    "Parce que la compression le compense",
                    "Parce que les fichiers sont mis en cache"
                ],
                a: 0,
                explication: "Les équipements tournent que le trafic soit fort ou faible."
            },
            // Série 2
            {
                q: "Baisser la qualité vidéo, quel effet ?",
                options: [
                    "Réel, mais sur la part la plus petite et la plus incertaine",
                    "Le plus important de tous",
                    "Aucun"
                ],
                a: 0,
                explication: "Le choix de l'écran a un effet des dizaines de fois plus grand."
            },
            {
                q: "Pourquoi les calculs « par gigaoctet » sont-ils trompeurs ?",
                options: [
                    "La consommation par gigaoctet baisse quand le trafic augmente",
                    "Les gigaoctets ne se mesurent pas",
                    "Ils ignorent la compression"
                ],
                a: 0,
                explication: "Cela explique une partie des erreurs passées du domaine."
            },
            {
                q: "Que consomme un ordinateur portable, en ordre de grandeur ?",
                options: [
                    "Environ 30 W",
                    "Environ 3 W",
                    "Environ 300 W"
                ],
                a: 0,
                explication: "Contre 100 W pour un téléviseur et 3 W pour un téléphone."
            }
        ],

        // ---------------------------------------------------------------
        "qui-pese-quoi": [
            // Série 1
            {
                q: "Quel poste domine l'impact du numérique en France ?",
                options: [
                    "Les terminaux",
                    "Les centres de données",
                    "Les réseaux"
                ],
                a: 0,
                explication: "Et au sein des terminaux, c'est la fabrication qui domine."
            },
            {
                q: "Pourquoi les centres de données occupent-ils toute la place dans les discussions ?",
                options: [
                    "Ils sont visibles, concentrés, et appartiennent à des entreprises qu'on peut nommer",
                    "Ils consomment le plus",
                    "Ils sont les plus mesurés"
                ],
                a: 0,
                explication: "Ce qui est facile à désigner passe pour le principal responsable."
            },
            {
                q: "Cette hiérarchie vaut-elle partout ?",
                options: [
                    "Non : elle est spécifique aux pays à électricité peu carbonée",
                    "Oui, elle est universelle",
                    "Oui, sauf en Asie"
                ],
                a: 0,
                explication: "La part des réseaux et des centres de données monte là où l'électricité émet davantage."
            },
            // Série 2
            {
                q: "Qu'est-ce qui domine la consommation des réseaux ?",
                options: [
                    "Les équipements allumés en permanence",
                    "Le volume de données transporté",
                    "Le nombre d'utilisateurs connectés"
                ],
                a: 0,
                explication: "C'est ce qui rend les raisonnements « par gigaoctet » si trompeurs."
            },
            {
                q: "Un service « hébergé dans un centre de données vert » agit sur quoi ?",
                options: [
                    "Sur le poste le plus petit des trois",
                    "Sur le poste dominant",
                    "Sur les terminaux des utilisateurs"
                ],
                a: 0,
                explication: "Ce n'est pas rien, et cela ne change pas la hiérarchie."
            },
            {
                q: "Pourquoi l'addition des terminaux dépasse-t-elle les centres de données ?",
                options: [
                    "Des milliards de petits objets fabriqués et remplacés pèsent plus que quelques milliers de bâtiments",
                    "Les terminaux consomment plus d'électricité",
                    "Les centres de données sont peu nombreux en France"
                ],
                a: 0,
                explication: "C'est un effet de nombre, pas de consommation unitaire."
            }
        ],

        // ---------------------------------------------------------------
        "le-deplacement-evite": [
            // Série 1
            {
                q: "Une réunion à 400 km, aller-retour en avion contre visioconférence :",
                options: [
                    "184 kg contre 3,6 grammes",
                    "184 kg contre 3,6 kg",
                    "18 kg contre 3,6 grammes"
                ],
                a: 0,
                explication: "Un rapport supérieur à 50 000. Aucun autre arbitrage du guide n'approche cet écart."
            },
            {
                q: "Quel mode émet le moins, par passager et par kilomètre ?",
                options: [
                    "Le train français",
                    "La voiture avec un seul occupant",
                    "L'avion court-courrier"
                ],
                a: 0,
                explication: "Quelques grammes, pour la même raison que l'électricité française."
            },
            {
                q: "À quelle condition l'argument du déplacement évité tient-il ?",
                options: [
                    "Que le déplacement soit réellement évité",
                    "Que la réunion dure moins de deux heures",
                    "Que la visioconférence soit en basse définition"
                ],
                a: 0,
                explication: "Une visio qui s'ajoute à des réunions physiques inchangées n'évite rien : elle ajoute."
            },
            // Série 2
            {
                q: "Que fait le télétravail au bilan, en toute rigueur ?",
                options: [
                    "Il déplace des consommations autant qu'il en supprime",
                    "Il les supprime intégralement",
                    "Il les augmente toujours"
                ],
                a: 0,
                explication: "Chauffage du domicile, équipements dédoublés : le bilan reste favorable mais bien plus serré."
            },
            {
                q: "Quelle est la faiblesse classique des bilans « d'évitement » ?",
                options: [
                    "Ils comparent à un scénario hypothétique que personne ne vérifie",
                    "Ils sous-estiment le numérique",
                    "Ils ignorent la fabrication"
                ],
                a: 0,
                explication: "La question honnête est celle du total : le nombre de déplacements a-t-il baissé ?"
            },
            {
                q: "Qu'a de particulier ce cas, dans tout le parcours ?",
                options: [
                    "C'est le seul où le numérique change l'ordre de grandeur au lieu de le grignoter",
                    "C'est le seul mesurable",
                    "C'est le seul qui concerne les entreprises"
                ],
                a: 0,
                explication: "Le rapport se compte en milliers, pas en pourcentages."
            }
        ]
    },

    // Questions de synthèse — distinctes de celles des sous-sections
    synthese: [
        {
            q: "Quel est le fil conducteur de ce niveau ?",
            options: [
                "Savoir écarter un mauvais chiffre vaut mieux que connaître dix bons gestes",
                "Réduire sa consommation de vidéo",
                "Choisir un hébergeur responsable"
            ],
            a: 0,
            explication: "C'est un niveau plus méthodologique que pratique, et c'est voulu."
        },
        {
            q: "Qu'ont en commun le « 10 g par courriel » et le « 3,2 kg par heure de vidéo » ?",
            options: [
                "Les deux ont circulé des années avant d'être corrigés d'un facteur dix",
                "Les deux étaient des inventions",
                "Les deux concernaient les centres de données"
            ],
            a: 0,
            explication: "Et les deux venaient d'estimations reprises sans leurs hypothèses."
        },
        {
            q: "Quelqu'un vous cite une étude allemande sur la répartition de l'impact. Quelle réserve ?",
            options: [
                "L'électricité allemande est bien plus carbonée : la répartition n'est pas transposable",
                "Les études allemandes sont moins fiables",
                "Aucune, les méthodes sont harmonisées"
            ],
            a: 0,
            explication: "C'est la deuxième des cinq questions, et la plus souvent oubliée."
        },
        {
            q: "Une entreprise annonce héberger son service dans un centre de données décarboné. Que manque-t-il ?",
            options: [
                "Le poste dominant : les terminaux de ses utilisateurs",
                "Le détail de sa consommation d'eau",
                "La certification de son fournisseur"
            ],
            a: 0,
            explication: "L'annonce traite le plus petit des trois postes."
        },
        {
            q: "Quel arbitrage de ce niveau mérite d'être connu avant tous les autres ?",
            options: [
                "Le déplacement évité",
                "Le choix de la résolution vidéo",
                "Le choix de l'hébergeur"
            ],
            a: 0,
            explication: "C'est le seul où l'ordre de grandeur bascule."
        },
        {
            q: "Que faire quand un chiffre d'impact vous frappe ?",
            options: [
                "Chercher sa source d'origine : dans la moitié des cas, elle n'existe pas ou dit autre chose",
                "Le vérifier auprès d'un deuxième article",
                "Le relayer avec la mention « selon certaines études »"
            ],
            a: 0,
            explication: "Deux articles qui se citent l'un l'autre ne font pas deux sources."
        }
    ]
};
