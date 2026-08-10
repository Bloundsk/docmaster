// ===================================
// BANQUE DE QUESTIONS — CYBERSÉCURITÉ, NIVEAU AVANCÉ
// ===================================
// 6 questions par sous-section : 3 affichées, les 3 autres prennent le relais
// au bout de deux semaines. Les questions de synthèse sont distinctes de
// celles des sous-sections — aucune n'est reprise deux fois.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "fuites-de-donnees": [
            // Série 1
            {
                q: "Qu'appelle-t-on le rejeu d'identifiants ?",
                options: [
                    "Deviner un mot de passe par force brute",
                    "Essayer automatiquement des identifiants fuités sur d'autres services",
                    "Réutiliser un mot de passe volontairement"
                ],
                a: 1,
                explication: "Le taux de réussite est faible, mais appliqué à des millions de couples il suffit largement. Aucun attaquant humain n'intervient."
            },
            {
                q: "Pourquoi la longueur du mot de passe ne protège-t-elle pas d'une fuite ?",
                options: [
                    "Parce qu'il n'est pas deviné, il est connu",
                    "Parce que les fuites cassent le chiffrement",
                    "Parce que la longueur n'a jamais d'effet"
                ],
                a: 0,
                explication: "La force protège contre la recherche exhaustive, pas contre le vol de la base qui le contenait."
            },
            {
                q: "En quel ordre de grandeur se compte le délai de détection d'une intrusion ?",
                options: [
                    "En heures",
                    "En mois",
                    "En années"
                ],
                a: 1,
                explication: "S'y ajoutent souvent plusieurs semaines avant la notification. Quand vous êtes prévenu, les identifiants circulent déjà."
            },
            // Série 2
            {
                q: "Quel geste vient en premier après une fuite ?",
                options: [
                    "Changer le mot de passe du service concerné",
                    "Sécuriser la boîte mail de secours",
                    "Prévenir ses contacts"
                ],
                a: 1,
                explication: "Tant qu'un attaquant contrôle la messagerie de secours, il reprend tout ce que vous venez de changer."
            },
            {
                q: "Qu'est-ce qui survit à un changement de mot de passe ?",
                options: [
                    "Une règle de transfert automatique posée dans la messagerie",
                    "Le mot de passe précédent",
                    "Rien, le changement coupe tout"
                ],
                a: 0,
                explication: "Chaque message reçu continue d'être recopié à l'attaquant, y compris les futurs liens de réinitialisation."
            },
            {
                q: "Que signifie recevoir une notification de fuite ?",
                options: [
                    "Une alerte : l'attaque est en cours",
                    "Un constat : les données circulent depuis un moment",
                    "Une simple précaution légale sans conséquence"
                ],
                a: 1,
                explication: "Entre l'intrusion, sa détection et la notification, plusieurs mois se sont généralement écoulés."
            }
        ],

        // ---------------------------------------------------------------
        "ingenierie-sociale": [
            // Série 1
            {
                q: "Qu'est-ce qui distingue une attaque ciblée d'un hameçonnage de masse ?",
                options: [
                    "Elle ne présente aucun des signaux grossiers habituels",
                    "Elle vise uniquement les grandes entreprises",
                    "Elle utilise toujours une pièce jointe"
                ],
                a: 0,
                explication: "Elle est rédigée pour vous, à partir d'informations réelles, et demande une action qui a du sens dans votre contexte."
            },
            {
                q: "D'où proviennent le plus souvent les informations utilisées ?",
                options: [
                    "D'un piratage préalable",
                    "De sources publiques : profils, annonces, organigrammes",
                    "De listes vendues par les opérateurs"
                ],
                a: 1,
                explication: "Rien n'est piraté pour construire le message. Tout est simplement lu."
            },
            {
                q: "Quels leviers agissent ensemble dans le scénario classique ?",
                options: [
                    "Autorité, urgence et confidentialité",
                    "Peur, récompense et curiosité",
                    "Technique, juridique et financier"
                ],
                a: 0,
                explication: "La confidentialité sert à empêcher la seule chose qui déjouerait l'attaque : demander à quelqu'un d'autre."
            },
            // Série 2
            {
                q: "Quelle est la seule parade fiable ?",
                options: [
                    "Lire le message plus attentivement",
                    "Vérifier par un autre canal, avec un numéro déjà connu",
                    "Installer un filtre antispam plus strict"
                ],
                a: 1,
                explication: "Un message bien fait ne se distingue pas d'un vrai. Se croire capable de repérer l'imposture est précisément ce qui rend vulnérable."
            },
            {
                q: "Que montrent les études sur les personnes formées à ces attaques ?",
                options: [
                    "Elles ne se font plus jamais prendre",
                    "Elles se font prendre aussi, mais moins souvent",
                    "La formation n'a aucun effet mesurable"
                ],
                a: 1,
                explication: "La fatigue, la charge de travail et le contexte font le reste. D'où l'intérêt d'une règle écrite."
            },
            {
                q: "Pourquoi une règle écrite protège-t-elle mieux que la vigilance ?",
                options: [
                    "Elle agit même les jours où l'attention manque",
                    "Elle est plus rapide à appliquer",
                    "Elle est exigée par la loi"
                ],
                a: 0,
                explication: "« Aucun virement sans confirmation vocale » ne dépend pas de l'état de forme de la personne qui reçoit le message."
            }
        ],

        // ---------------------------------------------------------------
        "chiffrement-de-bout-en-bout": [
            // Série 1
            {
                q: "Que garantit le chiffrement de bout en bout ?",
                options: [
                    "Que seuls les correspondants peuvent lire le contenu",
                    "Que personne ne sait avec qui vous échangez",
                    "Que les messages sont supprimés automatiquement"
                ],
                a: 0,
                explication: "Ni le service, ni un intermédiaire, ni quiconque interceptant le trafic ne peut lire le contenu."
            },
            {
                q: "Qu'appelle-t-on métadonnées dans une messagerie ?",
                options: [
                    "Le texte des messages",
                    "Qui écrit à qui, quand, à quelle fréquence, depuis où",
                    "Les fichiers joints"
                ],
                a: 1,
                explication: "Elles circulent en clair chez la plupart des services, chiffrement ou non."
            },
            {
                q: "Pourquoi les métadonnées sont-elles sensibles ?",
                options: [
                    "Elles contiennent des extraits de messages",
                    "Elles suffisent souvent à reconstituer une situation",
                    "Elles permettent de déchiffrer le contenu"
                ],
                a: 1,
                explication: "Savoir qu'une personne a joint un service d'urgence, puis un avocat, puis sa banque le même après-midi ne demande de lire aucun message."
            },
            // Série 2
            {
                q: "Qu'est-ce qui peut annuler l'effet d'un chiffrement de bout en bout ?",
                options: [
                    "Une sauvegarde des conversations non chiffrée dans le nuage",
                    "Un mot de passe trop court",
                    "L'utilisation du wifi public"
                ],
                a: 0,
                explication: "La protection du transport reste intacte, et parfaitement inutile : les échanges redeviennent lisibles à qui accède au stockage."
            },
            {
                q: "Le chiffrement protège-t-il les terminaux ?",
                options: [
                    "Oui, l'appareil est chiffré par la messagerie",
                    "Non, il protège le transport ; le message s'affiche en clair à l'écran",
                    "Oui, tant que l'application est fermée"
                ],
                a: 1,
                explication: "Un appareil compromis lit les messages après déchiffrement, comme leur destinataire légitime."
            },
            {
                q: "Que peut faire votre correspondant, quel que soit le chiffrement ?",
                options: [
                    "Rien de particulier",
                    "Une capture d'écran, ou transmettre le contenu",
                    "Déchiffrer vos autres conversations"
                ],
                a: 1,
                explication: "Le chiffrement protège le trajet, pas la confiance accordée à l'autre extrémité."
            }
        ],

        // ---------------------------------------------------------------
        "surface-attaque": [
            // Série 1
            {
                q: "Qu'est-ce que la surface d'attaque ?",
                options: [
                    "Le nombre d'appareils possédés",
                    "L'ensemble des points par lesquels quelqu'un pourrait entrer",
                    "La quantité de données stockées"
                ],
                a: 1,
                explication: "Elle grandit sans décision : chaque compte créé, chaque application autorisée, chaque service essayé l'agrandit."
            },
            {
                q: "Pourquoi les comptes oubliés sont-ils particulièrement risqués ?",
                options: [
                    "Ils coûtent de l'argent",
                    "Ils gardent un vieux mot de passe et vous n'êtes pas prévenu s'ils fuitent",
                    "Ils ralentissent le navigateur"
                ],
                a: 1,
                explication: "Souvent inscrits à une époque où le même mot de passe servait partout, et sans double authentification."
            },
            {
                q: "Quel est souvent le maillon le plus faible d'un compte ?",
                options: [
                    "Le mot de passe",
                    "Le chemin de récupération",
                    "Le nom d'utilisateur"
                ],
                a: 1,
                explication: "Questions de sécurité, adresse de secours, numéro de téléphone : ces chemins parallèles sont fréquemment moins protégés que la porte principale."
            },
            // Série 2
            {
                q: "Comment traiter les questions de sécurité ?",
                options: [
                    "Répondre honnêtement pour ne pas les oublier",
                    "Comme un second mot de passe : réponse arbitraire, conservée dans le gestionnaire",
                    "Les désactiver systématiquement"
                ],
                a: 1,
                explication: "Le nom de jeune fille de votre mère ou votre ville de naissance sont publics ou faciles à deviner pour un proche."
            },
            {
                q: "Quel intérêt à supprimer un compte inutilisé ?",
                options: [
                    "Un compte supprimé ne fuite pas",
                    "Cela améliore la vitesse du réseau",
                    "Cela libère votre adresse électronique"
                ],
                a: 0,
                explication: "C'est la seule réduction de risque définitive : la porte n'existe plus."
            },
            {
                q: "Que faut-il vérifier concernant les applications tierces ?",
                options: [
                    "Leur note dans la boutique",
                    "Celles qui gardent un accès permanent à vos comptes principaux",
                    "Leur taille sur le disque"
                ],
                a: 1,
                explication: "Beaucoup conservent une autorisation longtemps après avoir cessé d'être utilisées."
            }
        ]
    },

    // ===================================================================
    // Questions de synthèse — distinctes de celles des sous-sections
    // ===================================================================
    synthese: [
        // Série 1
        {
            q: "Quel point commun entre les fuites de données et les attaques ciblées ?",
            options: [
                "Aucun outil ne les empêche du côté de l'utilisateur",
                "Elles visent uniquement les entreprises",
                "Elles exploitent toutes une faille logicielle"
            ],
            a: 0,
            explication: "L'une dépend de la sécurité d'un tiers, l'autre d'une décision humaine. Ce niveau porte précisément sur ce que les outils ne couvrent pas."
        },
        {
            q: "Une personne a un mot de passe unique, une double authentification et un VPN. Que reste-t-il d'exposé ?",
            options: [
                "Rien, la protection est complète",
                "Les métadonnées, les chemins de récupération et les demandes plausibles",
                "Uniquement les fichiers locaux"
            ],
            a: 1,
            explication: "Le risque ne disparaît pas quand les protections évidentes sont en place : il se déplace vers ce qui n'est pas filtrable."
        },
        {
            q: "Pourquoi la procédure l'emporte-t-elle sur le discernement ?",
            options: [
                "Parce qu'elle est plus rapide",
                "Parce qu'elle fonctionne aussi les jours de fatigue",
                "Parce qu'elle est obligatoire"
            ],
            a: 1,
            explication: "C'est le même raisonnement que pour les dispositifs du niveau précédent : ce qui dépend de la vigilance quotidienne finit par céder."
        },
        // Série 2
        {
            q: "Qu'est-ce qui, dans ce niveau, ne dépend pas du tout de vous ?",
            options: [
                "La sécurité des services auxquels vous confiez des données",
                "Le choix de vos mots de passe",
                "L'activation de la double authentification"
            ],
            a: 0,
            explication: "Vous ne pouvez pas empêcher une fuite. Vous pouvez seulement empêcher sa propagation."
        },
        {
            q: "Quelle action réduit la surface d'attaque de façon définitive ?",
            options: [
                "Changer tous ses mots de passe",
                "Supprimer les comptes inutilisés",
                "Installer un antivirus supplémentaire"
            ],
            a: 1,
            explication: "Les autres mesures protègent une porte existante. Celle-ci la fait disparaître."
        },
        {
            q: "Que faut-il conclure des limites du chiffrement de bout en bout ?",
            options: [
                "Qu'il ne sert à rien",
                "Qu'il protège très bien une chose précise, et rien d'autre",
                "Qu'il faut lui préférer un VPN"
            ],
            a: 1,
            explication: "Connaître le périmètre exact d'une protection évite de compter sur elle là où elle n'agit pas."
        }
    ]
};
