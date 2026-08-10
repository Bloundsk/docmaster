// ===================================
// BANQUE DE QUESTIONS — CYBERSÉCURITÉ, NIVEAU INTERMÉDIAIRE
// ===================================
// 6 questions par sous-section : 3 affichées, les 3 autres prennent le relais
// au bout de deux semaines. Les questions de synthèse sont distinctes de
// celles des sous-sections — aucune n'est reprise deux fois.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "gestionnaire-de-mots-de-passe": [
            // Série 1
            {
                q: "Quel est le principal risque d'un mot de passe réutilisé ?",
                options: [
                    "Il est plus facile à deviner",
                    "Une seule fuite ouvre tous les comptes qui l'utilisent",
                    "Il expire plus vite"
                ],
                a: 1,
                explication: "Les listes issues de fuites sont rejouées automatiquement sur des centaines d'autres services. La longueur du mot de passe n'y change rien : il n'est pas deviné, il est connu."
            },
            {
                q: "Sur 80 comptes dont 60 % partagent le même mot de passe, combien tombent après une fuite ?",
                options: [
                    "1 seul",
                    "48",
                    "80"
                ],
                a: 1,
                explication: "Avec un mot de passe unique par service, la même fuite n'en compromettrait qu'un."
            },
            {
                q: "Que faut-il retenir pour utiliser un gestionnaire de mots de passe ?",
                options: [
                    "Un seul mot de passe, celui du coffre",
                    "Un mot de passe par catégorie de site",
                    "Rien, tout est automatique"
                ],
                a: 0,
                explication: "Chaque site reçoit une valeur unique que vous ne connaissez même pas. Vous n'en mémorisez qu'une."
            },
            // Série 2
            {
                q: "Que répondre à l'objection « tous les œufs dans le même panier » ?",
                options: [
                    "Elle est infondée, le coffre est inviolable",
                    "Le risque est concentré, mais sur un point réellement protégé",
                    "Il vaut mieux tout noter sur papier"
                ],
                a: 1,
                explication: "Sans gestionnaire, le risque n'est pas réparti : c'est le même risque, étalé sur des dizaines de services dont vous ne maîtrisez ni la sécurité ni les fuites."
            },
            {
                q: "Le gestionnaire rend-il les mots de passe plus forts ?",
                options: [
                    "Oui, c'est son rôle principal",
                    "Il rend surtout leur réutilisation inutile",
                    "Non, il ne change rien à la sécurité"
                ],
                a: 1,
                explication: "Un mot de passe long reste volé si le service qui le détenait fuite. Ce que le gestionnaire supprime, c'est la propagation."
            },
            {
                q: "Quelle précaution prendre si l'on se contente du carnet du navigateur ?",
                options: [
                    "Activer la double authentification sur le compte de synchronisation",
                    "Changer de navigateur chaque année",
                    "Désactiver la synchronisation"
                ],
                a: 0,
                explication: "La synchronisation est souvent liée à un compte protégé par un simple mot de passe, et une session ouverte suffit parfois à tout lire en clair."
            }
        ],

        // ---------------------------------------------------------------
        "double-authentification": [
            // Série 1
            {
                q: "Que vérifie un second facteur d'authentification ?",
                options: [
                    "Quelque chose que l'on sait",
                    "Quelque chose que l'on possède",
                    "La force du mot de passe"
                ],
                a: 1,
                explication: "Le mot de passe est une chose que l'on sait, donc qui peut être volée ou lue dans une fuite. Le second facteur ajoute un objet qu'un attaquant distant n'a pas."
            },
            {
                q: "Quelle forme de second facteur est la plus fragile ?",
                options: [
                    "Le SMS",
                    "L'application d'authentification",
                    "La clé physique"
                ],
                a: 0,
                explication: "Le détournement de carte SIM permet de recevoir les codes à votre place. Le SMS reste néanmoins très supérieur à l'absence de second facteur."
            },
            {
                q: "Quel compte protéger en priorité ?",
                options: [
                    "Les réseaux sociaux",
                    "La boîte mail principale",
                    "Le compte de streaming"
                ],
                a: 1,
                explication: "C'est elle qui reçoit les liens de réinitialisation de tous les autres. Qui la contrôle contrôle l'ensemble."
            },
            // Série 2
            {
                q: "Pourquoi une clé physique résiste-t-elle au hameçonnage ?",
                options: [
                    "Elle chiffre le mot de passe",
                    "Elle vérifie l'adresse du site et refuse de répondre à un imitateur",
                    "Elle change de code toutes les secondes"
                ],
                a: 1,
                explication: "C'est la seule forme de second facteur qui protège contre un site imitant parfaitement l'original."
            },
            {
                q: "Où conserver ses codes de secours ?",
                options: [
                    "Sur le téléphone qui porte l'application d'authentification",
                    "Ailleurs : imprimés, ou dans le gestionnaire de mots de passe",
                    "Dans un courriel adressé à soi-même"
                ],
                a: 1,
                explication: "Les laisser sur l'appareil concerné rend le compte inaccessible le jour où ce téléphone est perdu, volé ou remplacé."
            },
            {
                q: "Un code généré par application transite-t-il sur le réseau ?",
                options: [
                    "Oui, par le serveur du service",
                    "Non, il est calculé sur l'appareil",
                    "Oui, par SMS chiffré"
                ],
                a: 1,
                explication: "Il n'y a donc rien à intercepter, ce qui explique sa supériorité sur le SMS."
            }
        ],

        // ---------------------------------------------------------------
        "sauvegarde-et-rancongiciel": [
            // Série 1
            {
                q: "Que dit la règle 3-2-1 ?",
                options: [
                    "3 copies, 2 supports différents, 1 hors du logement",
                    "3 sauvegardes par jour, 2 par semaine, 1 par mois",
                    "3 mots de passe, 2 appareils, 1 antivirus"
                ],
                a: 0,
                explication: "Chaque niveau couvre un risque différent : panne, défaut de série, sinistre du lieu."
            },
            {
                q: "Pourquoi un disque externe branché en permanence ne compte-t-il pas comme sauvegarde ?",
                options: [
                    "Il s'use trop vite",
                    "Un rançongiciel chiffre tout ce que la session peut écrire",
                    "Il n'a pas assez de capacité"
                ],
                a: 1,
                explication: "Le disque branché, le dossier synchronisé, le lecteur réseau : tout y passe, souvent en quelques minutes."
            },
            {
                q: "Quelle est la seule réponse qui fonctionne à coup sûr contre un rançongiciel ?",
                options: [
                    "Un bon antivirus",
                    "Une sauvegarde qu'il n'a pas pu atteindre",
                    "Payer la rançon"
                ],
                a: 1,
                explication: "L'antivirus est une barrière parmi d'autres. Payer ne garantit rien, ni la clé ni l'absence de copie des données."
            },
            // Série 2
            {
                q: "Que couvre spécifiquement la copie « hors du logement » ?",
                options: [
                    "Les erreurs de manipulation",
                    "L'incendie, le dégât des eaux, le cambriolage",
                    "Les pannes de disque"
                ],
                a: 1,
                explication: "Tout ce qui est au même endroit disparaît ensemble. C'est le seul risque que la multiplication des copies locales ne couvre pas."
            },
            {
                q: "Que vaut une sauvegarde jamais restaurée ?",
                options: [
                    "Une garantie suffisante",
                    "Une simple hypothèse",
                    "Une preuve de bonne gestion"
                ],
                a: 1,
                explication: "Un dispositif affichant « sauvegarde réussie » depuis trois ans peut être vide ou illisible. On ne le découvre qu'au pire moment."
            },
            {
                q: "À quelle fréquence tester une restauration ?",
                options: [
                    "Jamais, si le logiciel affiche un succès",
                    "Environ une fois par trimestre",
                    "Uniquement après un incident"
                ],
                a: 1,
                explication: "Restaurer un fichier au hasard suffit à vérifier que la chaîne complète fonctionne."
            }
        ],

        // ---------------------------------------------------------------
        "reseau-et-vpn": [
            // Série 1
            {
                q: "Que fait réellement un VPN ?",
                options: [
                    "Il chiffre le trafic jusqu'à son serveur et sort depuis celui-ci",
                    "Il analyse le trafic pour bloquer les menaces",
                    "Il remplace le chiffrement HTTPS"
                ],
                a: 0,
                explication: "Deux conséquences : le réseau local ne voit plus les sites visités, et les sites voient l'adresse du serveur au lieu de la vôtre."
            },
            {
                q: "Un VPN protège-t-il du hameçonnage ?",
                options: [
                    "Oui, il bloque les sites frauduleux",
                    "Non, il transporte le trafic sans l'inspecter",
                    "Oui, s'il est payant"
                ],
                a: 1,
                explication: "Un site de hameçonnage reste un site de hameçonnage, et un fichier malveillant reste malveillant."
            },
            {
                q: "Un VPN rend-il anonyme sur un service où l'on est connecté ?",
                options: [
                    "Oui, l'adresse IP est masquée",
                    "Non, le compte connecté vous identifie de lui-même",
                    "Oui, si l'on efface les cookies"
                ],
                a: 1,
                explication: "Vous vous êtes identifié vous-même en vous connectant. Le VPN n'y change rien."
            },
            // Série 2
            {
                q: "Quel est l'effet principal d'un VPN sur la confiance ?",
                options: [
                    "Il la supprime",
                    "Il la déplace du fournisseur d'accès vers le fournisseur de VPN",
                    "Il la renforce des deux côtés"
                ],
                a: 1,
                explication: "La question devient : ce fournisseur mérite-t-il plus de confiance que le précédent ?"
            },
            {
                q: "Jusqu'où HTTPS chiffre-t-il, comparé à un VPN ?",
                options: [
                    "Jusqu'au site visité, alors que le VPN s'arrête à son serveur",
                    "Jusqu'au serveur VPN uniquement",
                    "Les deux protègent exactement la même portion"
                ],
                a: 0,
                explication: "Ce sont deux protections complémentaires, qui ne couvrent pas le même trajet."
            },
            {
                q: "Quel risque particulier présente un VPN gratuit financé par la publicité ?",
                options: [
                    "Une vitesse réduite seulement",
                    "Il reçoit la totalité de votre trafic et doit se rémunérer autrement",
                    "Aucun, le chiffrement est identique"
                ],
                a: 1,
                explication: "Avant d'installer un outil de sécurité, chercher qui le finance est un réflexe utile."
            }
        ]
    },

    // ===================================================================
    // Questions de synthèse — distinctes de celles des sous-sections
    // ===================================================================
    synthese: [
        // Série 1
        {
            q: "Qu'est-ce qui distingue ce niveau du précédent ?",
            options: [
                "Il porte sur des dispositifs plutôt que sur des gestes à répéter",
                "Il s'adresse aux professionnels de l'informatique",
                "Il traite uniquement du chiffrement"
            ],
            a: 0,
            explication: "La sécurité qui repose sur la vigilance quotidienne finit par céder. Celle qui repose sur un mécanisme tient même les mauvais jours."
        },
        {
            q: "Quel point commun entre le gestionnaire de mots de passe et la sauvegarde déconnectée ?",
            options: [
                "Ils coûtent cher",
                "Ils se mettent en place une fois et travaillent ensuite sans vous",
                "Ils demandent des compétences techniques"
            ],
            a: 1,
            explication: "C'est le critère qui les fait figurer à ce niveau : un effort ponctuel, une protection permanente."
        },
        {
            q: "Un attaquant obtient votre mot de passe de messagerie. Qu'est-ce qui l'arrête ?",
            options: [
                "Un antivirus à jour",
                "Une double authentification par application ou clé",
                "Un VPN actif"
            ],
            a: 1,
            explication: "Ni l'antivirus ni le VPN n'interviennent lors d'une connexion avec les bons identifiants."
        },
        // Série 2
        {
            q: "Quelle protection agit encore quand l'attaque a déjà réussi ?",
            options: [
                "Le pare-feu",
                "La sauvegarde déconnectée",
                "Le gestionnaire de mots de passe"
            ],
            a: 1,
            explication: "Les autres empêchent l'entrée. Celle-ci permet de s'en remettre — c'est une nature de protection différente."
        },
        {
            q: "Pourquoi commencer par la boîte mail plutôt que par la banque ?",
            options: [
                "Elle contient plus de données personnelles",
                "Elle permet de réinitialiser tous les autres comptes, banque comprise",
                "Elle est plus souvent attaquée"
            ],
            a: 1,
            explication: "Protéger la banque en laissant la messagerie ouverte revient à verrouiller une porte en laissant la clé sur la voisine."
        },
        {
            q: "Quel est le risque d'un outil de sécurité mal compris ?",
            options: [
                "Il ralentit l'appareil",
                "Il fait baisser la garde là où elle compte vraiment",
                "Il entre en conflit avec l'antivirus"
            ],
            a: 1,
            explication: "Croire son navigateur protégé par un VPN conduit à cliquer plus facilement sur les liens et à ouvrir les fichiers sans réfléchir."
        }
    ]
};
