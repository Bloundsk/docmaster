// ===================================
// BANQUE DE QUESTIONS — DÉVELOPPEMENT WEB, NIVEAU INTERMÉDIAIRE
// ===================================
// 6 questions par sous-section : 3 affichées, les 3 autres prennent le relais
// au bout de deux semaines. Les questions de synthèse sont distinctes de
// celles des sous-sections — aucune n'est reprise deux fois.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "api-et-json": [
            // Série 1
            {
                q: "Que définit une API bien conçue ?",
                options: [
                    "Uniquement l'adresse à appeler",
                    "L'adresse, ce qu'on envoie, ce qu'on reçoit, et ce qui se passe en cas d'erreur",
                    "Le format des données uniquement"
                ],
                a: 1,
                explication: "Le dernier point est celui qu'on oublie, et c'est celui qui fait tomber les applications en production."
            },
            {
                q: "Que signifie un code de retour 401 ?",
                options: [
                    "La ressource n'existe pas",
                    "Il faut s'identifier",
                    "Le serveur a échoué"
                ],
                a: 1,
                explication: "404 pour une ressource absente, 500 pour un échec serveur, 400 pour une demande mal formée."
            },
            {
                q: "8 appels à 150 ms chacun : combien de temps en séquence ?",
                options: [
                    "150 ms",
                    "1 200 ms",
                    "600 ms"
                ],
                a: 1,
                explication: "En parallèle, quand les appels sont indépendants, environ 150 ms. Le serveur n'est pas plus rapide : l'organisation change."
            },
            // Série 2
            {
                q: "Que reprocher à une API qui renvoie 200 avec un message d'erreur dans le corps ?",
                options: [
                    "Rien, c'est plus simple",
                    "Elle oblige chaque client à deviner qu'il y a eu une erreur",
                    "Elle consomme plus de bande passante"
                ],
                a: 1,
                explication: "Les codes de retour existent précisément pour éviter cette ambiguïté."
            },
            {
                q: "Où placer une clé d'API secrète ?",
                options: [
                    "Dans le code JavaScript, en la minifiant",
                    "Sur ton serveur, qui relaie la demande",
                    "Dans une variable du navigateur"
                ],
                a: 1,
                explication: "Tout ce que le navigateur reçoit est lisible : code, variables, en-têtes. Une clé placée là est publique."
            },
            {
                q: "Quel facteur domine le temps de chargement d'une page qui appelle une API ?",
                options: [
                    "La vitesse du serveur",
                    "Le nombre d'allers-retours",
                    "La taille des réponses"
                ],
                a: 1,
                explication: "C'est pourquoi paralléliser les appels indépendants change tout."
            }
        ],

        // ---------------------------------------------------------------
        "bases-de-donnees": [
            // Série 1
            {
                q: "Qu'apporte une base relationnelle par rapport à une base documentaire ?",
                options: [
                    "Plus de rapidité",
                    "La garantie de cohérence : impossible d'enregistrer une commande sans client existant",
                    "Moins de configuration"
                ],
                a: 1,
                explication: "Les données finissent presque toujours par avoir des relations, et il vaut mieux que la base les fasse respecter."
            },
            {
                q: "Afficher 50 articles avec une requête par auteur, à 4 ms : combien de temps ?",
                options: [
                    "4 ms",
                    "204 ms",
                    "50 ms"
                ],
                a: 1,
                explication: "Contre environ 6 ms avec une seule requête et une jointure. Un rapport de 34 pour 1."
            },
            {
                q: "À quoi sert un index ?",
                options: [
                    "À aller directement au bon endroit plutôt que parcourir toutes les lignes",
                    "À compresser les données",
                    "À garantir l'unicité des enregistrements"
                ],
                a: 0,
                explication: "Son prix : il ralentit un peu les écritures et occupe de l'espace."
            },
            // Série 2
            {
                q: "Quelles colonnes faut-il indexer ?",
                options: [
                    "Toutes, par précaution",
                    "Celles utilisées dans les filtres et les jointures",
                    "Aucune, la base optimise seule"
                ],
                a: 1,
                explication: "Chaque index a un coût en écriture et en espace."
            },
            {
                q: "Comment se protège-t-on de l'injection SQL ?",
                options: [
                    "En filtrant les caractères spéciaux",
                    "En utilisant des requêtes préparées, où les valeurs sont transmises séparément",
                    "En chiffrant la base"
                ],
                a: 1,
                explication: "La parade est simple et systématique. Aucune raison de faire autrement, jamais."
            },
            {
                q: "Pourquoi le problème des requêtes en boucle est-il difficile à repérer ?",
                options: [
                    "Il n'apparaît que sur de grosses bases",
                    "Le code paraît identique à la lecture : seul le compteur de requêtes révèle la différence",
                    "Les outils ne le mesurent pas"
                ],
                a: 1,
                explication: "C'est le défaut de performance le plus courant, et le plus invisible."
            }
        ],

        // ---------------------------------------------------------------
        "mettre-en-ligne": [
            // Série 1
            {
                q: "Quels sont les quatre éléments d'une mise en ligne ?",
                options: [
                    "Nom de domaine, hébergement, certificat, moyen de déployer",
                    "Serveur, base de données, cache, sauvegarde",
                    "Code, tests, documentation, monitoring"
                ],
                a: 0,
                explication: "Pour un site sans code serveur, l'hébergement statique suffit — souvent gratuit et très rapide."
            },
            {
                q: "Quelle est la panne la plus fréquente d'une première mise en ligne ?",
                options: [
                    "Un problème de certificat",
                    "La casse des noms de fichiers : le serveur distingue Image.png de image.png",
                    "Un dépassement de quota"
                ],
                a: 1,
                explication: "Windows ne fait pas cette distinction, le serveur si."
            },
            {
                q: "Où placer les secrets en production ?",
                options: [
                    "Dans un fichier de configuration versionné",
                    "Dans des variables d'environnement",
                    "Dans la base de données"
                ],
                a: 1,
                explication: "Ils ne peuvent plus être dans le code une fois le projet partagé."
            },
            // Série 2
            {
                q: "Que reprocher au déploiement par copie manuelle de quelques fichiers ?",
                options: [
                    "C'est trop lent",
                    "On finit par en oublier un, et le site casse pour tout le monde",
                    "Cela ne fonctionne pas en HTTPS"
                ],
                a: 1,
                explication: "Déploie toujours l'ensemble, depuis une source unique — idéalement automatiquement."
            },
            {
                q: "Pourquoi une modification peut-elle sembler absente après déploiement ?",
                options: [
                    "À cause du cache",
                    "Le déploiement a échoué",
                    "Le certificat n'est pas actif"
                ],
                a: 0,
                explication: "Ouvrir le site dans une fenêtre privée permet de voir ce que voient les autres."
            },
            {
                q: "Le HTTPS est-il compliqué à mettre en place aujourd'hui ?",
                options: [
                    "Oui, il faut acheter un certificat",
                    "Non, il est gratuit et automatique chez la plupart des hébergeurs",
                    "Il n'est nécessaire que pour les sites marchands"
                ],
                a: 1,
                explication: "Il n'y a plus aucune raison de s'en passer."
            }
        ],

        // ---------------------------------------------------------------
        "travail-a-plusieurs": [
            // Série 1
            {
                q: "À quoi sert Git, essentiellement ?",
                options: [
                    "À sauvegarder ses fichiers",
                    "À revenir en arrière et à travailler à plusieurs sans se marcher dessus",
                    "À héberger son code"
                ],
                a: 1,
                explication: "Le présenter comme un outil de sauvegarde conduit à mal s'en servir."
            },
            {
                q: "Que doit expliquer un message de commit ?",
                options: [
                    "Le quoi : quels fichiers ont changé",
                    "Le pourquoi : la raison du changement",
                    "Le nom de l'auteur"
                ],
                a: 1,
                explication: "« Correction du calcul de TVA sur les remboursements partiels » vaut infiniment mieux que « fix »."
            },
            {
                q: "Quel est le principe des branches ?",
                options: [
                    "La branche principale reste toujours fonctionnelle",
                    "Chaque développeur a sa branche permanente",
                    "Une branche par fichier modifié"
                ],
                a: 0,
                explication: "Chaque chantier vit à côté jusqu'à être prêt."
            },
            // Série 2
            {
                q: "Pourquoi une branche qui vit trois semaines pose-t-elle problème ?",
                options: [
                    "Elle occupe de l'espace disque",
                    "Le reste a bougé pendant ce temps, la réintégration devient difficile",
                    "Git limite la durée des branches"
                ],
                a: 1,
                explication: "Des branches courtes, fusionnées souvent, évitent l'essentiel des conflits."
            },
            {
                q: "Un mot de passe commité puis supprimé est-il en sécurité ?",
                options: [
                    "Oui, la suppression l'efface",
                    "Non : il reste dans l'historique et doit être considéré comme compromis",
                    "Oui, si le dépôt est privé"
                ],
                a: 1,
                explication: "Il faut le changer, pas seulement le retirer."
            },
            {
                q: "Que reprocher à un commit qui mélange correction, fonctionnalité et remise en forme ?",
                options: [
                    "Il est trop long à relire",
                    "Il est impossible d'annuler l'un sans les autres",
                    "Il fait grossir le dépôt"
                ],
                a: 1,
                explication: "Un commit, une intention. C'est ce qui rend l'historique utilisable."
            }
        ]
    },

    // ===================================================================
    // Questions de synthèse — distinctes de celles des sous-sections
    // ===================================================================
    synthese: [
        // Série 1
        {
            q: "Qu'est-ce qui transforme une page en application ?",
            options: [
                "Un cadriciel moderne",
                "Des morceaux qui communiquent, des données qui persistent, un déploiement",
                "Du JavaScript en quantité"
            ],
            a: 1,
            explication: "Ce sont les quatre sujets sur lesquels un projet personnel devient un projet réel."
        },
        {
            q: "Une page est lente. Par quoi commencer ?",
            options: [
                "Optimiser le code du serveur",
                "Compter le nombre de requêtes qu'elle déclenche",
                "Changer d'hébergeur"
            ],
            a: 1,
            explication: "Allers-retours d'API et requêtes en boucle expliquent la majorité des lenteurs."
        },
        {
            q: "Quel principe relie la clé d'API et la validation des formulaires ?",
            options: [
                "Ce qui est dans le navigateur appartient à l'utilisateur",
                "Il faut chiffrer les échanges",
                "Il faut minimiser le JavaScript"
            ],
            a: 0,
            explication: "Tout ce que le navigateur reçoit est lisible et modifiable. La vérification qui compte est côté serveur."
        },
        // Série 2
        {
            q: "Pourquoi le choix entre base relationnelle et documentaire compte-t-il moins qu'on ne le dit ?",
            options: [
                "Les deux ont les mêmes performances",
                "C'est la façon d'interroger la base qui décide de la performance",
                "Les bases documentaires ont disparu"
            ],
            a: 1,
            explication: "Une requête en boucle ruine les performances quel que soit le type de base."
        },
        {
            q: "Quelle habitude protège à la fois du déploiement raté et du conflit Git ?",
            options: [
                "Travailler par petits pas, souvent",
                "Documenter davantage",
                "Utiliser des outils plus récents"
            ],
            a: 0,
            explication: "Déployer l'ensemble depuis une source unique, fusionner des branches courtes : même logique."
        },
        {
            q: "Que faut-il vérifier après chaque déploiement ?",
            options: [
                "Le site dans une fenêtre privée, pour contourner le cache",
                "Les journaux du serveur",
                "La taille des fichiers envoyés"
            ],
            a: 0,
            explication: "C'est le seul moyen de voir ce que voient réellement les visiteurs."
        }
    ]
};
