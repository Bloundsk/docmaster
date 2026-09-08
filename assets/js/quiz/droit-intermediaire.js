// ===================================
// BANQUE DE QUESTIONS — DROIT & DÉMARCHES, NIVEAU INTERMÉDIAIRE
// ===================================
// 6 questions par sous-section : 3 affichées, les 3 autres prennent le relais
// au bout de deux semaines. Les questions de synthèse sont distinctes de
// celles des sous-sections — aucune n'est reprise deux fois.
//
// Droit français. Aucune question ne porte sur un montant ou un seuil.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "louer-un-logement": [
            // Série 1
            {
                q: "Que se passe-t-il en l'absence d'état des lieux d'entrée ?",
                options: [
                    "Le bail est nul",
                    "Le logement est présumé avoir été remis en bon état",
                    "Le dépôt de garantie est rendu automatiquement au départ"
                ],
                a: 1,
                explication: "La charge se retourne contre le locataire, qui ne peut plus rien comparer."
            },
                        {
                q: "Une clause du bail interdisant d'héberger un proche est-elle valable ?",
                options: [
                    "Oui, si elle est signée par les deux parties",
                    "Non : elle est réputée non écrite",
                    "Oui, dans les logements meublés seulement"
                ],
                a: 1,
                explication: "Certaines clauses sont interdites et sans effet, quelle que soit la signature."
            },
            {
                q: "De combien un dépôt de garantie rendu en retard est-il majoré ?",
                options: [
                    "10 % du loyer hors charges par mois entamé",
                    "5 % du dépôt par mois",
                    "Il n'y a pas de majoration prévue par la loi"
                ],
                a: 0,
                explication: "Elle est due de plein droit. Elle ne se négocie pas, elle se réclame."
            },
            // Série 2
            {
                q: "Quel est le délai de restitution du dépôt de garantie ?",
                options: [
                    "1 mois si l'état des lieux de sortie est conforme, 2 mois sinon",
                    "2 mois dans tous les cas",
                    "3 mois"
                ],
                a: 0,
                explication: "D'où l'intérêt d'un état des lieux de sortie qui ne relève rien de nouveau."
            },
            {
                q: "Le bailleur peut-il retenir une somme sans pièce justificative ?",
                options: [
                    "Oui, s'il l'annonce dans un courrier suffisamment motivé",
                    "Non : devis, facture ou constat sont nécessaires",
                    "Oui, dans la limite du dépôt"
                ],
                a: 1,
                explication: "« Remise en état : 400 € » sans pièce jointe ne suffit pas."
            },
            {
                q: "Que doit prendre en compte le bailleur avant de facturer une remise en état ?",
                options: [
                    "Le prix du neuf",
                    "La durée du bail seulement",
                    "La vétusté"
                ],
                a: 2,
                explication: "Une moquette de dix ans n'est pas facturable au prix du neuf."
            }
        ],

        // ---------------------------------------------------------------
        "donner-conge": [
            // Série 1
            {
                q: "Quelle est la durée du préavis en location meublée ?",
                options: [
                    "1 mois",
                    "2 mois",
                    "3 mois"
                ],
                a: 0,
                explication: "Contre trois mois en location vide, sauf cas de réduction."
            },
            {
                q: "À partir de quand court le préavis ?",
                options: [
                    "De l'envoi du courrier recommandé",
                    "De la date inscrite dans la lettre",
                    "De sa réception par le bailleur"
                ],
                a: 2,
                explication: "Deux jours d'acheminement peuvent décaler la sortie, et donc un loyer entier."
            },
            {
                q: "Que se passe-t-il si l'on invoque un préavis réduit sans en donner le motif par écrit ?",
                options: [
                    "Le motif peut être donné oralement ensuite",
                    "Le congé est nul et doit être refait",
                    "Le préavis reste de trois mois"
                ],
                a: 2,
                explication: "La phrase manquante coûte deux loyers, même si la condition était remplie."
            },
            // Série 2
            {
                q: "Un congé donné par courriel est-il valable ?",
                options: [
                    "Non : recommandé, acte de commissaire de justice ou remise en main propre contre signature",
                    "Oui, s'il est accusé de réception",
                    "Oui, en meublé uniquement"
                ],
                a: 0,
                explication: "La forme n'est pas une formalité : c'est ce qui rend la date opposable."
            },
            {
                q: "Le loyer reste-t-il dû pendant tout le préavis ?",
                options: [
                    "Non, il cesse dès l'envoi du congé",
                    "Oui, sans exception",
                    "Oui, sauf si le logement est reloué avant avec l'accord du bailleur"
                ],
                a: 2,
                explication: "Dans ce cas, il cesse d'être dû à compter de la nouvelle location."
            },
            {
                q: "Pourquoi indiquer sa nouvelle adresse dans la lettre de congé ?",
                options: [
                    "C'est une obligation légale prévue par le bail",
                    "Pour le suivi du courrier",
                    "Le dépôt de garantie doit y être restitué"
                ],
                a: 2,
                explication: "Sans elle, la restitution s'enlise."
            }
        ],

        // ---------------------------------------------------------------
        "le-contrat-de-travail": [
            // Série 1
            {
                q: "Quelle est la forme normale du contrat de travail ?",
                options: [
                    "Le CDI",
                    "Le CDD, plus souple",
                    "Les deux à égalité"
                ],
                a: 0,
                explication: "Le CDD est une exception, limitée à des cas énumérés et dont le motif doit être écrit."
            },
            {
                q: "Que risque un CDD sans écrit ou sans motif valable ?",
                options: [
                    "Une requalification en CDI",
                    "Une amende pour le salarié fautif",
                    "Rien de particulier, le CDD reste valable"
                ],
                a: 0,
                explication: "C'est l'un des contentieux prud'homaux les plus fréquents."
            },
            {
                q: "La période d'essai peut-elle se renouveler tacitement ?",
                options: [
                    "Oui, si l'employeur le décide",
                    "Non : il faut un accord de branche, une clause au contrat et ton accord écrit",
                    "Oui, une seule fois"
                ],
                a: 1,
                explication: "Sans ces trois conditions, elle s'arrête à sa durée initiale."
            },
            // Série 2
            {
                q: "Qu'est-ce que le délai de prévenance ?",
                options: [
                    "Un délai à respecter pour rompre la période d'essai, qui croît avec l'ancienneté",
                    "Le préavis de démission",
                    "Le délai avant la première paie"
                ],
                a: 0,
                explication: "24 heures avant 8 jours, 48 heures jusqu'à un mois, 2 semaines après un mois, 1 mois après trois."
            },
            {
                q: "Où trouve-t-on le nom de sa convention collective ?",
                options: [
                    "Sur la carte vitale du salarié",
                    "Sur le bulletin de paie",
                    "Nulle part, il faut la demander"
                ],
                a: 1,
                explication: "Elle prévoit très souvent mieux que le code du travail : préavis, primes, classification."
            },
            {
                q: "Une clause de non-concurrence sans contrepartie financière est :",
                options: [
                    "Valable si elle est limitée dans le temps",
                    "Nulle",
                    "Valable puisqu'elle a été signée"
                ],
                a: 1,
                explication: "Beaucoup de contrats en contiennent encore."
            }
        ],

        // ---------------------------------------------------------------
        "declarer-une-activite": [
            // Série 1
            {
                q: "Existe-t-il un montant en dessous duquel une activité régulière n'a pas à être déclarée ?",
                options: [
                    "Oui, un seuil annuel",
                    "Oui, si l'activité reste tout à fait occasionnelle",
                    "Non : un chiffre d'affaires nul se déclare aussi"
                ],
                a: 2,
                explication: "Ce qui existe, ce sont des régimes plus simples selon le montant — d'où la confusion."
            },
            {
                q: "En micro-entreprise, comment sont traitées les charges réelles ?",
                options: [
                    "Elles se déduisent sur justificatif",
                    "Elles ne sont pas déductibles : l'abattement est forfaitaire",
                    "Elles se déduisent à hauteur de la moitié du chiffre d'affaires"
                ],
                a: 1,
                explication: "Une activité à fortes dépenses y est pénalisée, quel que soit son chiffre d'affaires."
            },
            {
                q: "Quelle question décide du choix entre micro et régime réel ?",
                options: [
                    "Combien de clients ai-je ?",
                    "Depuis combien de temps est-ce que j'exerce cette activité ?",
                    "Quelle part de mes recettes part en dépenses ?"
                ],
                a: 2,
                explication: "C'est la seule qui compte au moment de choisir."
            },
            // Série 2
            {
                q: "Où vérifier les seuils et taux de la micro-entreprise ?",
                options: [
                    "Sur service-public.fr ou le site de l'URSSAF",
                    "Dans un article de blog récent",
                    "Auprès d'un autre auto-entrepreneur du secteur"
                ],
                a: 0,
                explication: "Ils sont révisés régulièrement : une valeur recopiée ailleurs vieillit sans prévenir."
            },
            {
                q: "Qu'apporte une EURL ou une SASU par rapport à l'entreprise individuelle ?",
                options: [
                    "La séparation du patrimoine et la possibilité d'accueillir des associés",
                    "Moins de formalités",
                    "Une exonération de cotisations"
                ],
                a: 0,
                explication: "En contrepartie d'une gestion plus lourde."
            },
            {
                q: "Une association permet-elle d'échapper aux règles fiscales d'une activité lucrative ?",
                options: [
                    "Oui, c'est son intérêt principal",
                    "Oui, en dessous d'un certain montant",
                    "Non : si l'activité est en réalité lucrative, elle est imposée comme telle"
                ],
                a: 2,
                explication: "L'association vise une activité sans partage de bénéfices, pas une exonération."
            }
        ]
    },

    // Questions de synthèse — distinctes de celles des sous-sections
    synthese: [
        {
            q: "Quel est le point commun des trois situations de ce niveau ?",
            options: [
                "Tout se joue au moment de signer, et rien ne se rattrape sans preuve",
                "Elles relèvent toutes du même code",
                "Elles supposent toutes un avocat"
            ],
            a: 0,
            explication: "Se loger, travailler, déclarer une activité : le même réflexe s'applique."
        },
        {
            q: "Qu'ont en commun l'état des lieux d'entrée et la convention collective ?",
            options: [
                "Les deux sont facultatifs",
                "Les deux existent déjà et sont simplement ignorés",
                "Les deux se demandent à l'administration compétente"
            ],
            a: 1,
            explication: "Les droits les plus utiles sont souvent ceux qu'on ne pense pas à consulter."
        },
        {
            q: "Un locataire part sans réclamer la majoration sur son dépôt rendu en retard. Que perd-il ?",
            options: [
                "Une somme due de plein droit, que personne ne verse spontanément",
                "Rien, elle est versée automatiquement",
                "Le droit de contester les retenues"
            ],
            a: 0,
            explication: "La majoration ne se négocie pas : elle se réclame."
        },
        {
            q: "Une clause du contrat est moins favorable que la convention collective. Laquelle s'applique ?",
            options: [
                "La convention collective",
                "Le contrat, puisqu'il a été signé",
                "La plus récente des deux, par principe"
            ],
            a: 0,
            explication: "Ce que le contrat prévoit de moins favorable que la loi ou la convention ne s'applique pas."
        },
        {
            q: "Quelle vérification, faite une fois, rapporte le plus dans ce niveau ?",
            options: [
                "Relire son bail chaque année",
                "Lire les articles de sa convention collective sur le préavis et la classification",
                "Changer de statut juridique"
            ],
            a: 1,
            explication: "Dix minutes qui révèlent souvent des droits ignorés."
        },
        {
            q: "Que reste-t-il si l'on n'applique qu'une seule chose de ce niveau ?",
            options: [
                "Signer plus vite",
                "Choisir la micro-entreprise par défaut",
                "Prendre son temps sur l'état des lieux d'entrée, et le photographier"
            ],
            a: 2,
            explication: "Vingt minutes à l'entrée valent plusieurs centaines d'euros à la sortie."
        }
    ]
};
