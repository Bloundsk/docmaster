// ===================================
// BANQUE DE QUESTIONS — MARKETING, NIVEAU AVANCÉ
// ===================================
// 6 questions par sous-section : 3 affichées, les 3 autres prennent le relais
// au bout de deux semaines. Les questions de synthèse sont distinctes de
// celles des sous-sections — aucune n'est reprise deux fois.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "attribution": [
            // Série 1
            {
                q: "Quel modèle d'attribution est le réglage par défaut de la plupart des outils ?",
                options: [
                    "Le dernier clic",
                    "Le premier clic",
                    "L'attribution répartie"
                ],
                a: 0,
                explication: "C'est aussi le plus trompeur : il récompense systématiquement ce qui intervient en fin de parcours."
            },
            {
                q: "Que récompense mécaniquement le dernier clic ?",
                options: [
                    "Le canal de découverte",
                    "La recherche de marque et le courriel",
                    "Les réseaux sociaux"
                ],
                a: 1,
                explication: "Ils interviennent juste avant l'achat, sans forcément avoir convaincu."
            },
            {
                q: "Un modèle d'attribution est-il « vrai » ?",
                options: [
                    "Oui, s'il est bien paramétré",
                    "Non : aucun ne sait ce qui s'est passé dans la tête de l'acheteur",
                    "Oui, le modèle réparti"
                ],
                a: 1,
                explication: "Tous sont conventionnels. Le choix change les budgets, pas la réalité."
            },
            // Série 2
            {
                q: "Quelle est la seule méthode fiable pour connaître l'apport d'un canal ?",
                options: [
                    "Changer de modèle d'attribution",
                    "L'arrêter ou le réduire, et observer l'effet sur le total",
                    "Comparer avec le secteur"
                ],
                a: 1,
                explication: "C'est la seule approche causale, exactement comme un test contrôlé."
            },
            {
                q: "Que se passe-t-il quand on coupe le canal de découverte sur la foi du dernier clic ?",
                options: [
                    "Rien, il ne convertissait pas",
                    "Les canaux qui semblaient performer baissent quelques semaines plus tard",
                    "La conversion globale augmente"
                ],
                a: 1,
                explication: "On observe alors une chute générale sans cause visible, et l'on cherche le problème là où il n'est pas."
            },
            {
                q: "Sur un parcours à quatre points de contact, que donne l'attribution répartie ?",
                options: [
                    "100 % au dernier",
                    "25 % à chacun",
                    "50 % au premier et 50 % au dernier"
                ],
                a: 1,
                explication: "Plus juste, plus complexe, et toujours conventionnel."
            }
        ],

        // ---------------------------------------------------------------
        "retention-et-cycle-de-vie": [
            // Série 1
            {
                q: "Perdre 12 % de ses clients par mois donne une durée de vie moyenne de :",
                options: [
                    "Environ 8,3 mois",
                    "Environ 12 mois",
                    "Environ 4 mois"
                ],
                a: 0,
                explication: "Ramener cette perte à 8 % la porte à 12,5 mois, soit un allongement de 50 %."
            },
            {
                q: "Combien coûte le fait de faire revenir un client, comparé à en acquérir un ?",
                options: [
                    "Autant",
                    "Cinq à sept fois moins, selon les secteurs",
                    "Deux fois plus"
                ],
                a: 1,
                explication: "Pourtant, cette ligne figure rarement dans un plan marketing."
            },
            {
                q: "Pourquoi la rétention intéresse-t-elle moins que l'acquisition ?",
                options: [
                    "Elle rapporte moins",
                    "Elle ne se voit pas dans un tableau de campagne",
                    "Elle est plus difficile techniquement"
                ],
                a: 1,
                explication: "Elle produit pourtant l'essentiel du résultat."
            },
            // Série 2
            {
                q: "Quels sont les trois leviers de rétention, par coût croissant ?",
                options: [
                    "Tenir sa promesse, accompagner le début, reprendre contact avant l'oubli",
                    "Remises, programme de fidélité, service client",
                    "Publicité de rappel, parrainage, cadeaux"
                ],
                a: 0,
                explication: "Le premier ne coûte rien de plus : il s'agit que la première commande se passe comme annoncé."
            },
            {
                q: "Que produit une remise réservée aux nouveaux clients ?",
                options: [
                    "Une croissance saine",
                    "Un message clair aux fidèles : leur fidélité ne vaut rien",
                    "Un meilleur bouche-à-oreille"
                ],
                a: 1,
                explication: "Le calcul est perdant deux fois : on paie plus cher un client moins rentable, et on démotive celui qui rapportait le plus."
            },
            {
                q: "Quatre points de rétention en plus valent :",
                options: [
                    "Une amélioration marginale",
                    "Plus que quatre fois le budget publicitaire",
                    "L'équivalent d'une campagne bien optimisée"
                ],
                a: 1,
                explication: "Aucune optimisation publicitaire ne produit un effet de cette ampleur."
            }
        ],

        // ---------------------------------------------------------------
        "persuasion-ethique": [
            // Série 1
            {
                q: "Quel critère sépare la persuasion de la manipulation ?",
                options: [
                    "L'intensité du message",
                    "La véracité de l'information, et l'accord du client s'il découvrait le mécanisme",
                    "Le canal utilisé"
                ],
                a: 1,
                explication: "Le texte peut être identique. Ce qui change, c'est la vérité."
            },
            {
                q: "« Plus que 3 en stock » avec un stock réel de 3 :",
                options: [
                    "Est une manipulation",
                    "Est légitime : la personne remercierait presque d'avoir été prévenue",
                    "Est interdit"
                ],
                a: 1,
                explication: "Le même message avec 400 unités disponibles serait une tromperie."
            },
            {
                q: "Quand la preuve sociale devient-elle un mensonge ?",
                options: [
                    "Quand le chiffre est inventé ou invérifiable",
                    "Dès qu'on affiche un nombre de clients",
                    "Quand elle est mise en avant"
                ],
                a: 0,
                explication: "« 2 400 clients » informe si c'est vrai. Un compteur inventé est un mensonge."
            },
            // Série 2
            {
                q: "Pourquoi les techniques trompeuses sont-elles un mauvais calcul économique ?",
                options: [
                    "Elles ne fonctionnent pas",
                    "Le gain apparaît ce mois-ci, le coût se répartit sur deux ans sans être attribué",
                    "Elles coûtent cher à mettre en place"
                ],
                a: 1,
                explication: "Remboursements, avis négatifs et réputation n'apparaissent jamais dans le tableau de bord de la campagne."
            },
            {
                q: "Que produit un compte à rebours qui recommence à chaque visite ?",
                options: [
                    "Un effet d'urgence sans inconvénient",
                    "Une partie du public le repère, n'achètera plus, et le dira",
                    "Une amélioration durable de la conversion"
                ],
                a: 1,
                explication: "Une échéance réelle produit le même effet, sans le risque."
            },
            {
                q: "Toute communication emploie-t-elle des leviers de persuasion ?",
                options: [
                    "Oui : la question est où passe la limite",
                    "Non, seules les publicités en utilisent",
                    "Uniquement dans la vente en ligne"
                ],
                a: 0,
                explication: "Ces mécanismes sont documentés depuis des décennies et fonctionnent réellement."
            }
        ],

        // ---------------------------------------------------------------
        "cadre-juridique": [
            // Série 1
            {
                q: "Quel est le principe pour prospecter un particulier par courriel ?",
                options: [
                    "Le consentement préalable, libre et spécifique",
                    "L'information préalable suffit",
                    "Aucune règle particulière"
                ],
                a: 0,
                explication: "Une exception existe pour les clients existants, sur des produits analogues, s'ils ont pu s'y opposer à la collecte."
            },
            {
                q: "Que doit contenir tout message de prospection ?",
                options: [
                    "Une offre commerciale",
                    "L'identité de l'expéditeur, un objet non trompeur, et une désinscription en un clic",
                    "Les mentions légales complètes"
                ],
                a: 1,
                explication: "La désinscription doit en outre être effective rapidement."
            },
            {
                q: "Quel document est demandé en premier lors d'un contrôle ?",
                options: [
                    "Le registre des traitements",
                    "La liste des clients",
                    "Les statuts de l'entreprise"
                ],
                a: 0,
                explication: "Il décrit ce que tu collectes, pourquoi, et pendant combien de temps."
            },
            // Série 2
            {
                q: "Qui est responsable d'une liste achetée sans consentement valable ?",
                options: [
                    "Le vendeur de la liste",
                    "Celui qui utilise les données",
                    "Les deux à parts égales"
                ],
                a: 1,
                explication: "En cas de plainte, c'est à toi de prouver le consentement."
            },
            {
                q: "Une allégation environnementale vague et non justifiée constitue :",
                options: [
                    "Un simple argument marketing",
                    "Une pratique commerciale trompeuse",
                    "Une obligation d'information"
                ],
                a: 1,
                explication: "Les mentions écologiques sont particulièrement surveillées."
            },
            {
                q: "Une publication rémunérée par une marque doit :",
                options: [
                    "Être identifiée comme telle",
                    "Rester discrète pour ne pas nuire à l'authenticité",
                    "Mentionner le montant perçu"
                ],
                a: 0,
                explication: "L'obligation vaut aussi pour le créateur avec qui tu travailles."
            }
        ]
    },

    // ===================================================================
    // Questions de synthèse — distinctes de celles des sous-sections
    // ===================================================================
    synthese: [
        // Série 1
        {
            q: "Sur quoi porte ce niveau ?",
            options: [
                "Les angles morts : ce que les outils attribuent mal et ce que la loi encadre",
                "Les techniques les plus récentes",
                "L'optimisation des budgets"
            ],
            a: 0,
            explication: "Ce que les équipes négligent parce que c'est moins visible, et les règles qui s'appliquent qu'on les connaisse ou non."
        },
        {
            q: "Quel point commun entre l'attribution et la rétention ?",
            options: [
                "Les deux sont mal servies par les tableaux de bord de campagne",
                "Les deux relèvent du service juridique",
                "Les deux se mesurent quotidiennement"
            ],
            a: 0,
            explication: "L'une est faussée par le modèle, l'autre n'y figure simplement pas."
        },
        {
            q: "Quelle question résume le test éthique d'une campagne ?",
            options: [
                "Est-elle rentable ?",
                "Que répondrais-je si un client découvrait exactement comment elle fonctionne ?",
                "Est-elle conforme aux usages du secteur ?"
            ],
            a: 1,
            explication: "Ce test attrape aussi les manipulations involontaires, où personne n'a voulu tromper."
        },
        // Série 2
        {
            q: "Une campagne affiche d'excellents résultats en dernier clic. Que vérifier avant de réallouer le budget ?",
            options: [
                "Le coût par clic",
                "Ce que deviennent ces résultats si le canal de découverte est réduit",
                "La saisonnalité"
            ],
            a: 1,
            explication: "Le dernier clic récolte, il ne convainc pas nécessairement."
        },
        {
            q: "Pourquoi le juridique figure-t-il dans un guide marketing ?",
            options: [
                "Parce que les sanctions visent l'entreprise, pas le prestataire qui a exécuté",
                "Parce que c'est une contrainte imposée par la direction",
                "Parce que cela rassure les clients"
            ],
            a: 0,
            explication: "Les règles s'appliquent qu'on les connaisse ou non."
        },
        {
            q: "Qu'ont en commun un faux compte à rebours et une liste achetée ?",
            options: [
                "Les deux produisent un gain immédiat et un coût différé bien plus élevé",
                "Les deux sont efficaces à long terme",
                "Les deux sont sans conséquence"
            ],
            a: 0,
            explication: "Et dans les deux cas, le coût n'est jamais attribué à sa cause dans les tableaux de bord."
        }
    ]
};
