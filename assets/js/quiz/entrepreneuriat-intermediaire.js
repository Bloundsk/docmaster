// ===================================
// BANQUE DE QUESTIONS — ENTREPRENEURIAT, NIVEAU INTERMÉDIAIRE
// ===================================
// 6 questions par sous-section : 3 affichées, les 3 autres prennent le relais
// au bout de deux semaines. Les questions de synthèse sont distinctes de
// celles des sous-sections — aucune n'est reprise deux fois.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "valider-avant-de-construire": [
            // Série 1
            {
                q: "Quelle est la cause la plus fréquente d'échec d'un projet ?",
                options: [
                    "Un produit mal réalisé",
                    "Avoir construit quelque chose dont personne n'avait besoin",
                    "Le manque de financement"
                ],
                a: 1,
                explication: "Ni l'équipe, ni le produit, ni l'argent n'arrivent en tête."
            },
            {
                q: "Quelle question produit une information exploitable en entretien ?",
                options: [
                    "« Utiliseriez-vous un service qui ferait ceci ? »",
                    "« Racontez-moi la dernière fois où vous avez eu ce problème »",
                    "« Combien seriez-vous prêt à payer ? »"
                ],
                a: 1,
                explication: "Le passé se vérifie, le futur s'imagine. Les gens se projettent mal et répondent poliment."
            },
            {
                q: "Quel signal indique un besoin réel ?",
                options: [
                    "La personne trouve l'idée intéressante",
                    "La personne a déjà bricolé une solution de son côté",
                    "La personne connaît des gens que ça intéresserait"
                ],
                a: 1,
                explication: "Le problème est assez douloureux pour qu'elle y ait consacré du temps."
            },
            // Série 2
            {
                q: "Qu'est-ce qu'un produit minimum viable ?",
                options: [
                    "Une version bâclée du produit final",
                    "Le moyen le plus économique de répondre à une question",
                    "La première version vendable"
                ],
                a: 1,
                explication: "Souvent ce n'est même pas un produit : une page de présentation, un service rendu à la main, un tableur."
            },
            {
                q: "Pourquoi ne pas valider auprès de ses proches ?",
                options: [
                    "Ils ne sont pas la cible",
                    "Ils veulent vous encourager : leur retour est affectueux et sans valeur",
                    "Ils manquent de compétence"
                ],
                a: 1,
                explication: "La validation suppose des inconnus qui n'ont aucune raison d'être aimables."
            },
            {
                q: "Quel signal vaut cinquante entretiens polis ?",
                options: [
                    "Un « c'est une super idée »",
                    "Un « je peux payer maintenant ? »",
                    "Une inscription à une liste d'attente"
                ],
                a: 1,
                explication: "Ce qui valide un besoin n'est pas ce que les gens disent, c'est ce qu'ils font."
            }
        ],

        // ---------------------------------------------------------------
        "modele-economique": [
            // Série 1
            {
                q: "Quelle approche permet de se faire payer correctement ?",
                options: [
                    "Fixer le prix par les coûts, en ajoutant une marge",
                    "Fixer le prix par la valeur pour le client",
                    "S'aligner sur la concurrence"
                ],
                a: 1,
                explication: "Si votre service fait gagner deux heures par semaine, la référence est la valeur de ces deux heures, pas votre coût de revient."
            },
            {
                q: "Prix 49 €, coût variable 11 €, charges fixes 4 000 € : combien de clients pour l'équilibre ?",
                options: [
                    "82",
                    "106",
                    "4 000 divisé par 49, soit 82"
                ],
                a: 1,
                explication: "Le calcul se fait sur la marge de 38 €, pas sur le prix affiché. 82 serait faux de près d'un quart."
            },
            {
                q: "Pourquoi baisser son prix au démarrage est-il risqué ?",
                options: [
                    "Cela attire trop de clients d'un coup",
                    "Il faut vendre bien plus, on attire les clients les plus sensibles au prix, et remonter est difficile",
                    "Cela n'a aucun inconvénient"
                ],
                a: 1,
                explication: "Il est presque toujours plus facile de baisser un prix que de l'augmenter."
            },
            // Série 2
            {
                q: "Que faut-il inclure dans les charges fixes dès le départ ?",
                options: [
                    "Une provision pour imprévus",
                    "La rémunération du fondateur",
                    "Le coût des futurs recrutements"
                ],
                a: 1,
                explication: "Sans elle, l'activité paraît rentable alors qu'elle repose sur un travail gratuit qui ne durera pas."
            },
            {
                q: "Quand faut-il travailler son modèle économique ?",
                options: [
                    "Avant d'avoir des clients",
                    "Une fois les premiers clients acquis",
                    "Au moment de lever des fonds"
                ],
                a: 0,
                explication: "Beaucoup de projets attendent d'avoir des clients pour s'y intéresser. C'est l'ordre inverse qui fonctionne."
            },
            {
                q: "Une vente sans marge, c'est :",
                options: [
                    "Un client gagné qu'on rentabilisera plus tard",
                    "Une perte qui grandit avec le volume",
                    "Un investissement commercial"
                ],
                a: 1,
                explication: "Le volume n'a jamais corrigé une marge négative."
            }
        ],

        // ---------------------------------------------------------------
        "premiers-clients": [
            // Série 1
            {
                q: "D'où viennent les dix premiers clients ?",
                options: [
                    "De campagnes publicitaires bien ciblées",
                    "D'actions qui ne passent pas à l'échelle : contacts un par un, déplacements, service rendu à la main",
                    "Du bouche-à-oreille naturel"
                ],
                a: 1,
                explication: "C'est inefficace, et c'est exactement ce qu'il faut faire : ces échanges apprennent le vocabulaire et les objections réelles."
            },
            {
                q: "Budget 800 €, 1 600 visiteurs, 1,5 % de conversion : quel coût par client ?",
                options: [
                    "33 €",
                    "50 €",
                    "12 €"
                ],
                a: 0,
                explication: "24 clients pour 800 €. Ce chiffre n'a de sens que comparé à la marge et à la durée de vie."
            },
            {
                q: "Combien de canaux d'acquisition ouvrir au démarrage ?",
                options: [
                    "Un seul, poussé jusqu'à savoir s'il fonctionne",
                    "Le plus possible, pour multiplier les chances",
                    "Trois, pour comparer"
                ],
                a: 0,
                explication: "Cinq canaux à la fois garantissent de n'en maîtriser aucun et de ne rien pouvoir mesurer."
            },
            // Série 2
            {
                q: "Quel est le bon canal d'acquisition ?",
                options: [
                    "Celui qui est à la mode",
                    "Celui où vos clients sont déjà, en train de chercher une solution",
                    "Le moins cher"
                ],
                a: 1,
                explication: "La mode change ; la présence de vos clients quelque part est un fait."
            },
            {
                q: "Des milliers de vues et zéro vente. Que conclure ?",
                options: [
                    "Il faut attendre que la notoriété se transforme",
                    "L'audience n'est pas la clientèle",
                    "Le produit est mal présenté"
                ],
                a: 1,
                explication: "Le seul indicateur qui compte au démarrage est le nombre de personnes qui paient."
            },
            {
                q: "Pourquoi faire d'abord ce qui ne passe pas à l'échelle ?",
                options: [
                    "C'est moins cher",
                    "C'est là qu'on apprend ce qu'il faudra automatiser ensuite",
                    "C'est plus rapide à mettre en place"
                ],
                a: 1,
                explication: "Aucune campagne publicitaire ne fournit l'information qu'apportent dix conversations directes."
            }
        ],

        // ---------------------------------------------------------------
        "piloter-tresorerie": [
            // Série 1
            {
                q: "Une entreprise rentable peut-elle disparaître ?",
                options: [
                    "Non, la rentabilité garantit la survie",
                    "Oui, faute de trésorerie : le résultat et le solde bancaire mesurent deux choses différentes",
                    "Seulement en cas de fraude"
                ],
                a: 1,
                explication: "Vous facturez en janvier, vous êtes payé en mars, mais les salaires sont dus entre-temps."
            },
            {
                q: "Qu'est-ce que le besoin en fonds de roulement ?",
                options: [
                    "Le montant du capital social",
                    "Le décalage entre les encaissements et les décaissements",
                    "La trésorerie de sécurité"
                ],
                a: 1,
                explication: "Et il augmente avec la croissance : plus vous vendez, plus vous avancez d'argent."
            },
            {
                q: "Trésorerie 18 000 €, dépenses 5 200 €, encaissements 3 100 € : quelle autonomie ?",
                options: [
                    "3,5 mois",
                    "8,6 mois",
                    "5,8 mois"
                ],
                a: 1,
                explication: "18 000 divisé par la perte mensuelle de 2 100 €. C'est le nombre le plus important de tous."
            },
            // Série 2
            {
                q: "Quel réflexe simple améliore le plus la trésorerie ?",
                options: [
                    "Facturer immédiatement plutôt qu'en fin de mois",
                    "Négocier des délais fournisseurs plus longs",
                    "Augmenter les prix"
                ],
                a: 0,
                explication: "Chaque jour de retard de facturation est un jour de retard de paiement."
            },
            {
                q: "Une facture impayée doit être relancée :",
                options: [
                    "À 60 jours, quand le retard est établi",
                    "Sans attendre, à quelques jours",
                    "Uniquement par lettre recommandée"
                ],
                a: 1,
                explication: "Relancée tôt, elle se règle souvent d'elle-même. À 60 jours, elle devient très difficile à recouvrer."
            },
            {
                q: "Que reprocher à « on a fait 12 000 € ce mois-ci » ?",
                options: [
                    "Rien, c'est l'indicateur de référence",
                    "Cela ne dit rien de l'argent disponible : encaissements, TVA et charges engagées",
                    "C'est un chiffre trop faible"
                ],
                a: 1,
                explication: "Le seul chiffre à regarder chaque semaine est le solde disponible après déduction de ce qui est dû."
            }
        ]
    },

    // ===================================================================
    // Questions de synthèse — distinctes de celles des sous-sections
    // ===================================================================
    synthese: [
        // Série 1
        {
            q: "Dans quel ordre traiter les quatre questions de ce niveau ?",
            options: [
                "Besoin réel, marge, clients, trésorerie",
                "Clients, marge, trésorerie, besoin",
                "L'ordre n'a pas d'importance"
            ],
            a: 0,
            explication: "Et la dernière tue plus d'entreprises que les trois autres réunies."
        },
        {
            q: "Quel point commun entre l'entretien de validation et le suivi de trésorerie ?",
            options: [
                "Les deux reposent sur des faits, non sur des intentions",
                "Les deux demandent un logiciel spécialisé",
                "Les deux se font une fois par an"
            ],
            a: 0,
            explication: "Ce que les gens ont déjà fait, et ce qui est réellement encaissé : deux mesures qui ne se discutent pas."
        },
        {
            q: "Un projet a des clients enthousiastes et perd de l'argent sur chaque vente. Que faire d'abord ?",
            options: [
                "Augmenter le volume",
                "Corriger le prix ou le coût variable",
                "Chercher un financement"
            ],
            a: 1,
            explication: "Le volume amplifie une marge négative, il ne la corrige jamais."
        },
        // Série 2
        {
            q: "Pourquoi la croissance peut-elle mettre une entreprise en difficulté ?",
            options: [
                "Parce qu'elle augmente le besoin en fonds de roulement",
                "Parce qu'elle attire la concurrence",
                "Parce qu'elle complique la comptabilité"
            ],
            a: 0,
            explication: "Plus vous vendez, plus vous avancez d'argent avant d'être payé."
        },
        {
            q: "Quel indicateur regarder chaque semaine au démarrage ?",
            options: [
                "Le nombre de visiteurs",
                "Le solde disponible et le nombre de mois d'autonomie",
                "Le chiffre d'affaires cumulé"
            ],
            a: 1,
            explication: "Il indique combien de temps il reste pour atteindre l'équilibre, donc quand il faudra décider autre chose."
        },
        {
            q: "Qu'est-ce qui distingue une audience d'une clientèle ?",
            options: [
                "La taille",
                "Le fait de payer",
                "La fidélité"
            ],
            a: 1,
            explication: "Des centaines d'abonnés et zéro vente est un cas très courant."
        }
    ]
};
