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
                    "Une seule fuite ouvre tous les comptes qui l'utilisent",
                    "Il est plus facile à deviner pour un attaquant un peu patient",
                    "Il expire plus vite"
                ],
                a: 0,
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
                    "Un mot de passe par catégorie de site visité",
                    "Un seul mot de passe, celui du coffre",
                    "Rien du tout : tout est automatique une fois installé"
                ],
                a: 1,
                explication: "Chaque site reçoit une valeur unique que tu ne connais même pas. Tu n'en mémorises qu'une."
            },
            // Série 2
            {
                q: "Que répondre à l'objection « tous les œufs dans le même panier » ?",
                options: [
                    "Elle est infondée : le coffre est réputé techniquement inviolable",
                    "Il vaut mieux tout noter sur papier",
                    "Le risque est concentré, mais sur un point réellement protégé"
                ],
                a: 2,
                explication: "Sans gestionnaire, le risque n'est pas réparti : c'est le même risque, étalé sur des dizaines de services dont tu ne maîtrises ni la sécurité ni les fuites."
            },
            {
                q: "Le gestionnaire rend-il les mots de passe plus forts ?",
                options: [
                    "Oui, c'est son rôle principal",
                    "Il rend surtout leur réutilisation inutile",
                    "Non, il ne change rien à la sécurité réelle des comptes"
                ],
                a: 1,
                explication: "Un mot de passe long reste volé si le service qui le détenait fuite. Ce que le gestionnaire supprime, c'est la propagation."
            },
            {
                q: "Quelle précaution prendre si l'on se contente du carnet du navigateur ?",
                options: [
                    "Changer de navigateur chaque année",
                    "Activer la double authentification sur le compte de synchronisation",
                    "Désactiver la synchronisation"
                ],
                a: 1,
                explication: "La synchronisation est souvent liée à un compte protégé par un simple mot de passe, et une session ouverte suffit parfois à tout lire en clair."
            }
        ],

        // ---------------------------------------------------------------
        "double-authentification": [
            // Série 1
            {
                q: "Que vérifie un second facteur d'authentification ?",
                options: [
                    "Quelque chose que l'on sait déjà",
                    "La force du mot de passe choisi",
                    "Quelque chose que l'on possède"
                ],
                a: 2,
                explication: "Le mot de passe est une chose que l'on sait, donc qui peut être volée ou lue dans une fuite. Le second facteur ajoute un objet qu'un attaquant distant n'a pas."
            },
            {
                q: "Quelle forme de second facteur est la plus fragile ?",
                options: [
                    "L'application d'authentification",
                    "Le SMS",
                    "La clé physique"
                ],
                a: 1,
                explication: "Le détournement de carte SIM permet de recevoir les codes à ta place. Le SMS reste néanmoins très supérieur à l'absence de second facteur."
            },
            {
                q: "Quel compte protéger en priorité ?",
                options: [
                    "La boîte mail principale",
                    "Les réseaux sociaux d'abord",
                    "Le compte de streaming familial"
                ],
                a: 0,
                explication: "C'est elle qui reçoit les liens de réinitialisation de tous les autres. Qui la contrôle contrôle l'ensemble."
            },
            // Série 2
            {
                q: "Pourquoi une clé physique résiste-t-elle au hameçonnage ?",
                options: [
                    "Elle chiffre le mot de passe",
                    "Elle change de code toutes les secondes",
                    "Elle vérifie l'adresse du site et refuse de répondre à un imitateur"
                ],
                a: 2,
                explication: "C'est la seule forme de second facteur qui protège contre un site imitant parfaitement l'original."
            },
            {
                q: "Où conserver ses codes de secours ?",
                options: [
                    "Sur le téléphone qui porte l'application d'authentification",
                    "Dans un courriel adressé à soi-même",
                    "Ailleurs : imprimés, ou dans le gestionnaire de mots de passe"
                ],
                a: 2,
                explication: "Les laisser sur l'appareil concerné rend le compte inaccessible le jour où ce téléphone est perdu, volé ou remplacé."
            },
            {
                q: "Un code généré par application transite-t-il sur le réseau ?",
                options: [
                    "Non, il est calculé sur l'appareil",
                    "Oui, par le serveur du service concerné",
                    "Oui, par SMS chiffré de bout en bout"
                ],
                a: 0,
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
                    "Il n'a pas assez de capacité pour conserver plusieurs versions"
                ],
                a: 1,
                explication: "Le disque branché, le dossier synchronisé, le lecteur réseau : tout y passe, souvent en quelques minutes."
            },
            {
                q: "Quelle est la seule réponse qui fonctionne à coup sûr contre un rançongiciel ?",
                options: [
                    "Une sauvegarde qu'il n'a pas pu atteindre",
                    "Un bon antivirus, tenu à jour chaque semaine",
                    "Payer la rançon demandée, en dernier recours"
                ],
                a: 0,
                explication: "L'antivirus est une barrière parmi d'autres. Payer ne garantit rien, ni la clé ni l'absence de copie des données."
            },
            // Série 2
            {
                q: "Que couvre spécifiquement la copie « hors du logement » ?",
                options: [
                    "Les erreurs de manipulation et les suppressions",
                    "Les pannes de disque",
                    "L'incendie, le dégât des eaux, le cambriolage"
                ],
                a: 2,
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
                    "Environ une fois par trimestre",
                    "Jamais, si le logiciel affiche un succès",
                    "Uniquement après un incident réel"
                ],
                a: 0,
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
                explication: "Deux conséquences : le réseau local ne voit plus les sites visités, et les sites voient l'adresse du serveur au lieu de la tienne."
            },
            {
                q: "Un VPN protège-t-il du hameçonnage ?",
                options: [
                    "Oui, il bloque l'accès aux sites frauduleux connus",
                    "Oui, s'il est payant",
                    "Non, il transporte le trafic sans l'inspecter"
                ],
                a: 2,
                explication: "Un site de hameçonnage reste un site de hameçonnage, et un fichier malveillant reste malveillant."
            },
            {
                q: "Un VPN rend-il anonyme sur un service où l'on est connecté ?",
                options: [
                    "Oui, l'adresse IP est masquée",
                    "Oui, à condition d'effacer les cookies avant de s'y rendre",
                    "Non, le compte connecté t'identifie de lui-même"
                ],
                a: 2,
                explication: "Tu t'es identifié toi-même en te connectant. Le VPN n'y change rien."
            },
            // Série 2
            {
                q: "Quel est l'effet principal d'un VPN sur la confiance ?",
                options: [
                    "Il la déplace du fournisseur d'accès vers le fournisseur de VPN",
                    "Il la supprime",
                    "Il la renforce des deux côtés"
                ],
                a: 0,
                explication: "La question devient : ce fournisseur mérite-t-il plus de confiance que le précédent ?"
            },
            {
                q: "Jusqu'où HTTPS chiffre-t-il, comparé à un VPN ?",
                options: [
                    "Jusqu'au serveur VPN uniquement",
                    "Les deux protègent exactement la même portion",
                    "Jusqu'au site visité, alors que le VPN s'arrête à son serveur"
                ],
                a: 2,
                explication: "Ce sont deux protections complémentaires, qui ne couvrent pas le même trajet."
            },
            {
                q: "Quel risque particulier présente un VPN gratuit financé par la publicité ?",
                options: [
                    "Une vitesse réduite seulement",
                    "Aucun, le chiffrement est identique",
                    "Il reçoit la totalité de ton trafic et doit se rémunérer autrement"
                ],
                a: 2,
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
                "Ils se mettent en place une fois et travaillent ensuite sans toi",
                "Ils coûtent cher",
                "Ils demandent des compétences techniques"
            ],
            a: 0,
            explication: "C'est le critère qui les fait figurer à ce niveau : un effort ponctuel, une protection permanente."
        },
        {
            q: "Un attaquant obtient ton mot de passe de messagerie. Qu'est-ce qui l'arrête ?",
            options: [
                "Un antivirus à jour, doublé d'un pare-feu bien réglé",
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
                "Le pare-feu intégré au système",
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
                "Il entre en conflit avec l'antivirus déjà en place sur le poste"
            ],
            a: 1,
            explication: "Croire son navigateur protégé par un VPN conduit à cliquer plus facilement sur les liens et à ouvrir les fichiers sans réfléchir."
        }
    ]
};
