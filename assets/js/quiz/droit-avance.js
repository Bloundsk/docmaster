// ===================================
// BANQUE DE QUESTIONS — DROIT & DÉMARCHES, NIVEAU AVANCÉ
// ===================================
// 6 questions par sous-section : 3 affichées, les 3 autres prennent le relais
// au bout de deux semaines. Les questions de synthèse sont distinctes de
// celles des sous-sections — aucune n'est reprise deux fois.
//
// Droit français. Aucune question ne porte sur un montant ou un seuil.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "lire-un-contrat": [
            // Série 1
            {
                q: "Que devient une clause abusive dans un contrat signé ?",
                options: [
                    "Elle est réputée non écrite : elle ne s'applique pas",
                    "Elle s'applique puisqu'elle a été acceptée",
                    "Elle annule tout le contrat"
                ],
                a: 0,
                explication: "Le reste du contrat, lui, continue de s'appliquer."
            },
            {
                q: "Qu'est-ce qui caractérise une clause abusive ?",
                options: [
                    "Un déséquilibre significatif entre les droits et obligations des parties",
                    "Un prix trop élevé",
                    "Une rédaction trop technique"
                ],
                a: 0,
                explication: "Le code de la consommation en dresse deux listes, selon la force de la présomption."
            },
            {
                q: "Une clause interdisant de saisir un juge est :",
                options: [
                    "Abusive, et donc sans effet",
                    "Valable si elle prévoit un arbitrage",
                    "Valable entre professionnels et particuliers"
                ],
                a: 0,
                explication: "Comme celle qui impose un tribunal éloigné."
            },
            // Série 2
            {
                q: "Quel est le premier endroit à lire dans un contrat avant de signer ?",
                options: [
                    "La durée et les conditions de résiliation",
                    "Le préambule",
                    "L'identité des parties"
                ],
                a: 0,
                explication: "Comment sort-on, avec quel préavis, à quel coût : c'est là que sont les surprises."
            },
            {
                q: "Les conditions générales font-elles partie du contrat ?",
                options: [
                    "Oui, dès lors qu'on a pu en prendre connaissance",
                    "Non, sauf si elles sont signées séparément",
                    "Seulement si elles sont annexées sur papier"
                ],
                a: 0,
                explication: "D'où l'importance de ce qui y est renvoyé."
            },
            {
                q: "« Vous avez signé » est-il un argument recevable pour écarter la garantie légale ?",
                options: [
                    "Non : ce que le contrat retire à la loi, la loi le reprend",
                    "Oui, la signature vaut acceptation",
                    "Oui, si la clause était en gras"
                ],
                a: 0,
                explication: "La signature engage sur ce qui est négociable, pas sur ce qui ne l'est pas."
            }
        ],

        // ---------------------------------------------------------------
        "la-prescription": [
            // Série 1
            {
                q: "Quel est le délai de prescription de droit commun ?",
                options: [
                    "2 ans",
                    "5 ans",
                    "10 ans"
                ],
                a: 1,
                explication: "À compter du jour où l'on a connu ou aurait dû connaître les faits."
            },
            {
                q: "Une mise en demeure interrompt-elle la prescription ?",
                options: [
                    "Non, même en recommandé",
                    "Oui, c'est son objet principal",
                    "Oui, si elle est signée par un avocat"
                ],
                a: 0,
                explication: "C'est l'erreur la plus coûteuse du domaine : elle donne le sentiment d'avoir agi."
            },
            {
                q: "Qu'est-ce qui interrompt la prescription ?",
                options: [
                    "Une assignation en justice, une mesure d'exécution, ou la reconnaissance de la dette",
                    "Un courriel de relance",
                    "Un appel téléphonique enregistré"
                ],
                a: 0,
                explication: "L'interruption fait repartir un délai entier à zéro."
            },
            // Série 2
            {
                q: "Quel délai s'applique à un professionnel qui réclame une somme à un particulier ?",
                options: [
                    "2 ans",
                    "5 ans",
                    "3 ans"
                ],
                a: 0,
                explication: "Le délai dépend de qui réclame à qui, et cela change tout."
            },
            {
                q: "Quelle est la différence entre suspendre et interrompre la prescription ?",
                options: [
                    "La suspension met le délai en pause ; l'interruption le fait repartir à zéro",
                    "Ce sont deux mots pour la même chose",
                    "La suspension annule le délai"
                ],
                a: 0,
                explication: "Une demande de médiation suspend ; une assignation interrompt."
            },
            {
                q: "À quelle date la prescription s'apprécie-t-elle ?",
                options: [
                    "Au jour où l'on saisit le juge",
                    "Au jour où l'on écrit à l'adversaire",
                    "Au jour où l'on consulte un avocat"
                ],
                a: 0,
                explication: "Négocier jusqu'à l'échéance profite également à l'adversaire de bonne et de mauvaise foi."
            }
        ],

        // ---------------------------------------------------------------
        "regler-sans-juge": [
            // Série 1
            {
                q: "Combien coûte le conciliateur de justice ?",
                options: [
                    "Rien : il est bénévole et gratuit",
                    "Un forfait modique",
                    "Un pourcentage de la somme en jeu"
                ],
                a: 0,
                explication: "Il se saisit par simple demande, et l'accord obtenu peut être homologué par un juge."
            },
            {
                q: "Où trouver les coordonnées du médiateur de la consommation d'une entreprise ?",
                options: [
                    "Dans ses conditions générales",
                    "Auprès du tribunal",
                    "Il faut les demander à la CNIL"
                ],
                a: 0,
                explication: "Les professionnels sont tenus de le proposer, et c'est gratuit pour le consommateur."
            },
            {
                q: "Que risque-t-on à saisir le juge sans tentative de règlement amiable pour un petit litige ?",
                options: [
                    "Voir la demande déclarée irrecevable",
                    "Une amende",
                    "Rien de particulier"
                ],
                a: 0,
                explication: "Cette tentative est en principe obligatoire pour les petits litiges."
            },
            // Série 2
            {
                q: "1 500 € réclamés, 1 200 € de frais, 60 % de chances : que dit le calcul ?",
                options: [
                    "Un résultat moyen attendu négatif : l'accord amiable rapporte davantage",
                    "Une espérance de gain positive",
                    "Un résultat nul"
                ],
                a: 0,
                explication: "Et cela sans compter les mois d'attente ni le temps passé."
            },
            {
                q: "Qu'est-ce que l'aide juridictionnelle ?",
                options: [
                    "Une prise en charge de tout ou partie des frais selon les ressources",
                    "Une consultation gratuite en mairie",
                    "Un prêt remboursable après le procès"
                ],
                a: 0,
                explication: "Les plafonds sont révisés chaque année : à vérifier sur service-public.fr."
            },
            {
                q: "Quelle question se poser avant d'engager une action ?",
                options: [
                    "En face, y a-t-il de quoi payer ?",
                    "Ai-je moralement raison ?",
                    "Le tribunal est-il proche ?"
                ],
                a: 0,
                explication: "Gagner et être payé sont deux étapes distinctes, et l'exécution a son propre coût."
            }
        ],

        // ---------------------------------------------------------------
        "vos-donnees-personnelles": [
            // Série 1
            {
                q: "Quel délai a un organisme pour répondre à une demande d'accès ?",
                options: [
                    "Un mois, prolongeable de deux si la demande est complexe",
                    "Une semaine",
                    "Six mois"
                ],
                a: 0,
                explication: "S'il prolonge, il doit vous en informer."
            },
            {
                q: "Faut-il justifier une demande d'accès à ses données ?",
                options: [
                    "Non, aucun motif n'est à donner",
                    "Oui, il faut invoquer un intérêt légitime",
                    "Oui, en cas de litige seulement"
                ],
                a: 0,
                explication: "Un courriel de trois lignes suffit."
            },
            {
                q: "Que permet le droit à la portabilité ?",
                options: [
                    "Récupérer ses données dans un format réutilisable",
                    "Faire supprimer ses données",
                    "Changer de fournisseur gratuitement"
                ],
                a: 0,
                explication: "C'est l'un des droits les moins connus, et des plus utiles."
            },
            // Série 2
            {
                q: "Le droit à l'effacement est-il absolu ?",
                options: [
                    "Non : il cède devant une obligation légale de conservation",
                    "Oui, sans exception",
                    "Oui, sauf pour les banques"
                ],
                a: 0,
                explication: "En revanche, l'opposition à la prospection commerciale ne souffre aucune exception."
            },
            {
                q: "Que faire si l'organisme ne répond pas dans le délai ?",
                options: [
                    "Déposer une plainte gratuite auprès de la CNIL",
                    "Saisir directement le tribunal",
                    "Attendre encore un mois"
                ],
                a: 0,
                explication: "Le silence est lui-même un motif recevable."
            },
            {
                q: "La CNIL peut-elle vous obtenir une indemnisation ?",
                options: [
                    "Non : c'est une autorité de contrôle, pas un tribunal",
                    "Oui, elle fixe le montant",
                    "Oui, à hauteur du préjudice déclaré"
                ],
                a: 0,
                explication: "Elle intervient auprès de l'organisme, ce qui suffit dans une grande partie des cas."
            }
        ]
    },

    // Questions de synthèse — distinctes de celles des sous-sections
    synthese: [
        {
            q: "Quel est le fil conducteur de ce niveau ?",
            options: [
                "Faire valoir ses droits, et savoir quand cela en vaut la peine",
                "Éviter tout contrat écrit",
                "Connaître les codes par cœur"
            ],
            a: 0,
            explication: "C'est le niveau où l'on regarde en face une question que le droit ne pose jamais."
        },
        {
            q: "Qu'ont en commun le conciliateur de justice et la CNIL ?",
            options: [
                "Les deux sont gratuits et largement sous-utilisés",
                "Les deux rendent des jugements",
                "Les deux exigent un avocat"
            ],
            a: 0,
            explication: "Les voies les moins chères sont les moins empruntées."
        },
        {
            q: "Deux mois d'échanges de courriers avec l'adversaire : quel risque ?",
            options: [
                "Le délai de prescription continue de courir pendant ce temps",
                "L'adversaire peut se rétracter",
                "Les courriers perdent leur valeur"
            ],
            a: 0,
            explication: "Si l'échéance approche, il faut saisir le juge ou engager formellement une médiation."
        },
        {
            q: "Un contrat contient une clause qui supprime la garantie légale. Que faire ?",
            options: [
                "Rien de particulier : elle est réputée non écrite et ne s'applique pas",
                "Demander au juge de l'annuler",
                "Refuser de signer, sinon elle vaudra"
            ],
            a: 0,
            explication: "Il n'y a rien à faire annuler — elle n'a juridiquement jamais existé."
        },
        {
            q: "Quelles deux questions décident plus souvent que le fond du dossier ?",
            options: [
                "Suis-je encore dans les délais, et l'adversaire a-t-il de quoi payer ?",
                "Quel est le tribunal compétent, et quel avocat choisir ?",
                "Ai-je un contrat écrit, et est-il signé ?"
            ],
            a: 0,
            explication: "Elles se posent avant d'engager quoi que ce soit."
        },
        {
            q: "Que reste-t-il si l'on n'applique qu'une seule chose de ce niveau ?",
            options: [
                "Vérifier le délai de prescription avant tout le reste",
                "Lire les conditions générales en entier",
                "Saisir systématiquement un juge"
            ],
            a: 0,
            explication: "Une erreur sur ce point est irrattrapable, quel que soit le mérite du dossier."
        }
    ]
};
