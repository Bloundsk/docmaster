// ===================================
// BANQUE DE QUESTIONS — GUIDE CYBERSÉCURITÉ
// ===================================
// 6 questions par sous-section : 3 affichées, les 3 autres au bout de deux
// semaines. Les questions de synthèse sont distinctes.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "mots-de-passe-authentification": [
            // Série 1
            {
                q: "Quel est le principal danger lié aux mots de passe ?",
                options: [
                    "Leur complexité insuffisante",
                    "Leur réutilisation d'un site à l'autre",
                    "Leur longueur excessive"
                ],
                a: 1,
                explication: "Les listes issues de fuites sont rejouées automatiquement sur des centaines d'autres services."
            },
            {
                q: "Qu'est-ce que le credential stuffing ?",
                options: [
                    "Une technique de chiffrement des mots de passe",
                    "Rejouer automatiquement des identifiants volés sur d'autres sites",
                    "Un mot de passe trop long pour être stocké"
                ],
                a: 1,
                explication: "Aucun piratage sophistiqué : une simple liste et un script suffisent."
            },
            {
                q: "Quel mot de passe résiste le mieux ?",
                options: [
                    "P@ssw0rd!",
                    "tortue-agrafe-nuage-vinaigre",
                    "Marseille1987"
                ],
                a: 1,
                explication: "La longueur compte davantage que les caractères exotiques. Les substitutions classiques sont dans tous les dictionnaires d'attaque."
            },
            // Série 2
            {
                q: "Quel compte protéger en priorité par une double authentification ?",
                options: [
                    "Le compte d'un forum de loisirs",
                    "La messagerie principale",
                    "Un compte de streaming"
                ],
                a: 1,
                explication: "C'est par elle que passent toutes les réinitialisations de mot de passe : si elle tombe, tout suit."
            },
            {
                q: "Quelle méthode de double authentification est la plus vulnérable ?",
                options: [
                    "Une clé physique",
                    "Le SMS",
                    "Une application d'authentification"
                ],
                a: 1,
                explication: "Le SIM swapping permet à un escroc de faire transférer ton numéro sur sa propre carte SIM."
            },
            {
                q: "Que produit l'obligation de changer de mot de passe tous les 90 jours ?",
                options: [
                    "Une sécurité nettement renforcée",
                    "Des variantes minimes du même mot de passe, donc l'effet inverse",
                    "Une meilleure mémorisation"
                ],
                a: 1,
                explication: "Les organismes de sécurité, dont l'ANSSI, ne recommandent plus cette pratique."
            }
        ],

        // ---------------------------------------------------------------
        "le-phishing": [
            // Série 1
            {
                q: "Quels sont les trois ingrédients constants d'une tentative de phishing ?",
                options: [
                    "Une pièce jointe, un lien et une image",
                    "Une autorité, une urgence et une action immédiate",
                    "Une faute d'orthographe, un lien et un logo"
                ],
                a: 1,
                explication: "L'urgence n'est pas un détail : elle sert précisément à empêcher la vérification."
            },
            {
                q: "Pourquoi les fautes d'orthographe ne sont-elles plus un bon signal d'alerte ?",
                options: [
                    "Les escrocs recrutent des correcteurs",
                    "Les outils de rédaction automatique ont supprimé ce signal",
                    "Elles n'ont jamais été un signal"
                ],
                a: 1,
                explication: "Regarde plutôt le domaine, à droite du @ et avant le premier /."
            },
            {
                q: "Dans l'adresse banque.fr.verification-compte.net, quel est le vrai domaine ?",
                options: ["banque.fr", "verification-compte.net", "fr.verification"],
                a: 1,
                explication: "Tout ce qui précède le dernier point avant l'extension peut être inventé librement."
            },
            // Série 2
            {
                q: "Que prouve le cadenas HTTPS sur un site ?",
                options: [
                    "Que le site est honnête et vérifié",
                    "Uniquement que la connexion est chiffrée",
                    "Que le site appartient à une entreprise déclarée"
                ],
                a: 1,
                explication: "N'importe qui obtient un certificat gratuit en cinq minutes, y compris un escroc."
            },
            {
                q: "Un conseiller bancaire t'appelle et demande un code de validation. Que faire ?",
                options: [
                    "Le donner s'il connaît tes coordonnées",
                    "Raccrocher et rappeler le numéro au dos de ta carte",
                    "Demander son matricule puis le donner"
                ],
                a: 1,
                explication: "Un vrai conseiller le comprendra ; un escroc tentera de t'en dissuader."
            },
            {
                q: "Pourquoi les campagnes de test en entreprise montrent-elles des taux de clic élevés ?",
                options: [
                    "Parce que les salariés manquent de compétences techniques",
                    "Parce que la fatigue et la charge de travail comptent plus que la compétence",
                    "Parce que les tests sont truqués"
                ],
                a: 1,
                explication: "D'où la nécessité d'une habitude systématique plutôt que d'une vigilance ponctuelle."
            }
        ],

        // ---------------------------------------------------------------
        "les-pare-feux-et-antivirus": [
            // Série 1
            {
                q: "Contre quoi un antivirus ne protège-t-il pas ?",
                options: [
                    "Les logiciels malveillants connus",
                    "Le phishing et un mot de passe volé",
                    "Les fichiers infectés téléchargés"
                ],
                a: 1,
                explication: "Il ne voit rien quand tu saisis volontairement ton mot de passe sur un faux site."
            },
            {
                q: "Quelle est la mesure de protection la plus efficace ?",
                options: [
                    "Acheter une suite de sécurité payante",
                    "Installer les mises à jour",
                    "Changer d'antivirus chaque année"
                ],
                a: 1,
                explication: "Le correctif existe presque toujours avant l'attaque : c'est le délai d'installation qui crée la vulnérabilité."
            },
            {
                q: "Sur Windows, Defender suffit-il pour un usage personnel ?",
                options: [
                    "Non, il faut toujours une suite payante",
                    "Oui : il est gratuit et figure régulièrement en tête des tests indépendants",
                    "Non, il ne détecte que les virus anciens"
                ],
                a: 1,
                explication: "Payer pour une suite tierce n'apporte généralement pas de gain de sécurité mesurable."
            },
            // Série 2
            {
                q: "Quelle est la seule parade réellement fiable contre un rançongiciel ?",
                options: [
                    "Un antivirus à jour",
                    "La sauvegarde",
                    "Un pare-feu bien configuré"
                ],
                a: 1,
                explication: "Aucun antivirus ne garantit une protection contre le chiffrement de tes fichiers."
            },
            {
                q: "Que signifie la règle 3-2-1 en matière de sauvegarde ?",
                options: [
                    "3 sauvegardes par jour, 2 par semaine, 1 par mois",
                    "3 copies, 2 supports différents, 1 copie hors du lieu ou déconnectée",
                    "3 disques durs, 2 clés USB, 1 service en ligne"
                ],
                a: 1,
                explication: "Le point critique est le dernier : un disque branché en permanence est chiffré en même temps que le reste."
            },
            {
                q: "Qu'est-ce qui rend une sauvegarde réellement valable ?",
                options: [
                    "Sa taille",
                    "Le fait de l'avoir restaurée au moins une fois",
                    "Sa fréquence"
                ],
                a: 1,
                explication: "Essaie de restaurer un fichier au hasard une fois par an : une sauvegarde jamais testée n'en est pas une."
            }
        ],

        // ---------------------------------------------------------------
        "le-chiffrement-des-données": [
            // Série 1
            {
                q: "Que garantit exactement le HTTPS ?",
                options: [
                    "Que le site est légitime",
                    "Que personne ne peut lire ni modifier les échanges pendant le trajet",
                    "Que tes données ne seront pas revendues"
                ],
                a: 1,
                explication: "Le cadenas protège la route, pas la destination. Vérifie toujours le nom de domaine."
            },
            {
                q: "Quelle différence entre chiffrement en transit et au repos ?",
                options: [
                    "Le premier protège pendant le trajet, le second sur le disque",
                    "Le premier est plus sûr que le second",
                    "Ils désignent la même chose"
                ],
                a: 0,
                explication: "BitLocker ou FileVault rendent un disque volé illisible : essentiel sur un ordinateur portable."
            },
            {
                q: "Que signifie le chiffrement « de bout en bout » ?",
                options: [
                    "Le message est chiffré deux fois",
                    "Seuls l'expéditeur et le destinataire peuvent lire le contenu, pas même le fournisseur",
                    "Le message s'efface après lecture"
                ],
                a: 1,
                explication: "Beaucoup de messageries électroniques classiques ne l'appliquent pas : l'hébergeur peut lire tes courriels."
            },
            // Série 2
            {
                q: "Que révèlent les métadonnées d'un échange chiffré ?",
                options: [
                    "Rien, tout est protégé",
                    "Qui a parlé à qui, quand et combien de temps",
                    "Le contenu partiel des messages"
                ],
                a: 1,
                explication: "Ces informations sont souvent aussi parlantes que le contenu lui-même."
            },
            {
                q: "Un VPN protège-t-il du phishing ?",
                options: [
                    "Oui, il bloque les sites frauduleux",
                    "Non : il chiffre le trajet, rien de plus",
                    "Oui, s'il est payant"
                ],
                a: 1,
                explication: "Il déplace simplement la confiance de ton opérateur vers le fournisseur du VPN, qui voit tout ton trafic."
            },
            {
                q: "Quelle précaution reste utile sur un Wi-Fi public ?",
                options: [
                    "Ne jamais s'y connecter",
                    "Vérifier le nom exact du réseau auprès de l'établissement",
                    "Désactiver le HTTPS pour aller plus vite"
                ],
                a: 1,
                explication: "Un partage de connexion depuis son téléphone reste plus sûr pour les opérations sensibles."
            }
        ]
    },

    // -------------------------------------------------------------------
    // SYNTHÈSE
    // -------------------------------------------------------------------
    synthese: [
        // Série 1
        {
            q: "Sur quoi repose l'écrasante majorité des compromissions ?",
            options: [
                "Des failles techniques sophistiquées",
                "Un mot de passe réutilisé, un courriel bien imité, un logiciel non mis à jour",
                "Des attaques ciblées par des États"
            ],
            a: 1,
            explication: "Bonne nouvelle : quelques habitudes simples éliminent la plus grande partie du risque."
        },
        {
            q: "Quelles deux mesures offrent le meilleur rapport effort/protection ?",
            options: [
                "Un antivirus payant et un VPN",
                "Un gestionnaire de mots de passe et la double authentification sur la messagerie",
                "Un pare-feu matériel et un second ordinateur"
            ],
            a: 1,
            explication: "Une soirée de mise en place suffit à éliminer l'essentiel du risque personnel."
        },
        {
            q: "Un organisme légitime peut-il te demander ton mot de passe ?",
            options: [
                "Oui, s'il s'agit du service de sécurité",
                "Non, par aucun canal, sans exception",
                "Oui, par téléphone uniquement"
            ],
            a: 1,
            explication: "Cette règle n'a pas d'exception : ni mot de passe, ni code de validation."
        },
        // Série 2
        {
            q: "Tu reçois un SMS annonçant un colis bloqué, avec un lien. Que faire ?",
            options: [
                "Cliquer, puisque tu attends effectivement un colis",
                "Ouvrir toi-même le site du transporteur que tu connais",
                "Répondre au SMS pour demander des précisions"
            ],
            a: 1,
            explication: "Le réflexe unique : ne jamais utiliser le lien fourni. Si le message était vrai, l'information t'attendra."
        },
        {
            q: "Que faire en priorité si tu penses qu'un compte a été compromis ?",
            options: [
                "Lancer une analyse antivirus complète",
                "Changer le mot de passe de la messagerie principale depuis un appareil sain",
                "Supprimer le compte concerné"
            ],
            a: 1,
            explication: "Puis activer la double authentification, traiter les autres comptes, et déposer plainte."
        },
        {
            q: "Quelle phrase décrit le mieux une bonne posture de sécurité ?",
            options: [
                "Devenir invulnérable grâce aux bons outils",
                "Cesser d'être une cible facile",
                "Éviter internet autant que possible"
            ],
            a: 1,
            explication: "L'invulnérabilité n'existe pas ; la plupart des attaques visent les cibles les moins protégées."
        }
    ]
};
