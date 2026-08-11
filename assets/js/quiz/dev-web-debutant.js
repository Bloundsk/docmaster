// ===================================
// BANQUE DE QUESTIONS — GUIDE DÉVELOPPEMENT WEB
// ===================================
// 6 questions par sous-section : 3 affichées, les 3 autres au bout de deux
// semaines. Les questions de synthèse sont distinctes.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "html-css": [
            // Série 1
            {
                q: "Que décrit une balise HTML ?",
                options: [
                    "L'apparence visuelle d'un élément",
                    "La nature et le rôle d'un contenu",
                    "La position de l'élément sur l'écran"
                ],
                a: 1,
                // Les chevrons s'ecrivent tels quels : le moteur affiche via
                // textContent, qui les traite comme du texte sans risque.
                explication: "<h1> ne veut pas dire « gros texte » mais « titre principal de cette page »."
            },
            {
                q: "Quelle différence entre <div class=\"titre-gros\"> et <h2> ?",
                options: [
                    "Aucune, seul le style change",
                    "Le <h2> est compris comme un titre par Google et les lecteurs d'écran",
                    "Le <div> est plus rapide à afficher"
                ],
                a: 1,
                explication: "Visuellement identiques après quelques lignes de CSS. Fonctionnellement, sans commune mesure."
            },
            {
                q: "Quand deux règles CSS s'appliquent au même élément, laquelle l'emporte ?",
                options: [
                    "Celle écrite en dernier",
                    "Celle dont le sélecteur est le plus spécifique",
                    "Celle qui contient le plus de propriétés"
                ],
                a: 1,
                explication: "Un identifiant bat une classe, qui bat une balise. La plupart des « ce CSS ne marche pas » viennent de là."
            },
            // Série 2
            {
                q: "Quel outil CSS choisir pour aligner des éléments sur une seule ligne ?",
                options: ["Grid", "Flexbox", "Les tableaux"],
                a: 1,
                explication: "Flexbox pour une dimension, Grid pour une grille à deux dimensions."
            },
            {
                q: "À quoi servent les variables CSS comme --primary ?",
                options: [
                    "À accélérer le chargement de la page",
                    "À centraliser les valeurs répétées en un seul endroit",
                    "À masquer les couleurs dans le code source"
                ],
                a: 1,
                explication: "Changer la charte du site revient alors à modifier une seule ligne, au lieu de chercher un code dans quarante fichiers."
            },
            {
                q: "Pourquoi éviter d'écrire le style directement dans le HTML ?",
                options: [
                    "Parce que cela ne fonctionne pas",
                    "Parce que chaque modification impose ensuite de rouvrir tous les fichiers",
                    "Parce que les navigateurs l'interdisent"
                ],
                a: 1,
                explication: "Cette discipline coûte cinq minutes au début et fait gagner des journées ensuite."
            }
        ],

        // ---------------------------------------------------------------
        "javascript": [
            // Série 1
            {
                q: "Qu'est-ce que le DOM ?",
                options: [
                    "Le fichier HTML enregistré sur le disque",
                    "La représentation en mémoire de la page, que JavaScript manipule",
                    "Un langage de programmation"
                ],
                a: 1,
                explication: "Le fichier d'origine ne change pas : actualiser la page annule toute modification."
            },
            {
                q: "Comment conserver une information après un rechargement de page ?",
                options: [
                    "En la stockant dans le DOM",
                    "En utilisant localStorage ou un serveur",
                    "Ce n'est pas possible en JavaScript"
                ],
                a: 1,
                explication: "Le DOM est reconstruit à chaque chargement : ce qu'on y écrit disparaît."
            },
            {
                q: "Quel est le schéma de base de la plupart du JavaScript d'un site ?",
                options: [
                    "Calculer, afficher, enregistrer",
                    "Sélectionner un élément, écouter un événement, modifier une classe",
                    "Charger, compiler, exécuter"
                ],
                a: 1,
                explication: "Le style reste dans le CSS : JavaScript se contente d'ajouter ou de retirer la classe."
            },
            // Série 2
            {
                q: "Que signifie le mot-clé await ?",
                options: [
                    "Mets le programme en pause pendant une seconde",
                    "Attends le résultat avant de poursuivre cette fonction",
                    "Répète l'opération jusqu'au succès"
                ],
                a: 1,
                explication: "Sans lui, on manipule une réponse qui n'est pas encore arrivée — une cause fréquente de bugs incompréhensibles."
            },
            {
                q: "Un script placé dans le <head> échoue avec getElementById qui renvoie null. Pourquoi ?",
                options: [
                    "L'identifiant est mal orthographié",
                    "Le script s'exécute avant que le HTML n'existe",
                    "Le navigateur bloque les scripts du <head>"
                ],
                a: 1,
                explication: "Deux solutions : placer le script juste avant </body>, ou ajouter l'attribut defer."
            },
            {
                q: "Quel onglet des outils de développement affiche les fichiers en erreur 404 ?",
                options: ["Console", "Réseau", "Éléments"],
                a: 1,
                explication: "La Console affiche les erreurs JavaScript, Éléments montre le DOM et le CSS réellement appliqué."
            }
        ],

        // ---------------------------------------------------------------
        "frontend-vs-backend": [
            // Série 1
            {
                q: "Quelle question départage frontend et backend ?",
                options: [
                    "Le code est-il écrit en JavaScript ?",
                    "Le code s'exécute-t-il chez le visiteur ou sur un serveur ?",
                    "Le code est-il visible dans l'éditeur ?"
                ],
                a: 1,
                explication: "Tout ce qui part vers le navigateur est lisible par le visiteur, code et commentaires compris."
            },
            {
                q: "Où placer une clé d'API pour qu'elle reste secrète ?",
                options: [
                    "Dans un fichier JavaScript, en la renommant",
                    "Côté serveur uniquement",
                    "Dans un commentaire HTML"
                ],
                a: 1,
                explication: "Des robots parcourent en permanence les sites publics à la recherche de ces clés ; le délai avant exploitation se compte en minutes."
            },
            {
                q: "Une vérification d'accès faite en JavaScript côté navigateur, c'est :",
                options: [
                    "Suffisant si le code est minifié",
                    "Contournable en quelques secondes",
                    "Aussi sûr qu'une vérification serveur"
                ],
                a: 1,
                explication: "Le contrôle côté navigateur n'est là que pour le confort d'usage. Ce qui compte se vérifie côté serveur."
            },
            // Série 2
            {
                q: "Quel type de projet n'a pas besoin de backend ?",
                options: [
                    "Une boutique avec paiements",
                    "Un site de documentation ou un portfolio",
                    "Une application avec comptes utilisateurs"
                ],
                a: 1,
                explication: "Plus rapide, gratuit à héberger, et pratiquement inattaquable : il n'y a pas de base de données à pirater."
            },
            {
                q: "Quel problème React, Vue ou Angular résolvent-ils ?",
                options: [
                    "Le référencement d'un site",
                    "Synchroniser une interface complexe avec des données qui changent sans arrêt",
                    "La compatibilité entre navigateurs"
                ],
                a: 1,
                explication: "Sur un site de dix pages, ils ajoutent surtout de la complexité et du poids."
            },
            {
                q: "Quel ordre d'apprentissage est recommandé ?",
                options: [
                    "Commencer par un framework, plus moderne",
                    "Maîtriser JavaScript, rencontrer la limite, puis choisir l'outil qui la résout",
                    "Apprendre les deux en parallèle"
                ],
                a: 1,
                explication: "Tous les frameworks finissent par produire du HTML, du CSS et du JavaScript."
            }
        ],

        // ---------------------------------------------------------------
        "responsive-design": [
            // Série 1
            {
                q: "Que se passe-t-il si la balise viewport est absente ?",
                options: [
                    "Le site ne s'affiche pas du tout sur mobile",
                    "Le mobile affiche une version miniature du site en 980 px",
                    "Les images disparaissent"
                ],
                a: 1,
                explication: "C'est la première chose à vérifier quand un site paraît minuscule sur téléphone."
            },
            {
                q: "Pourquoi éviter les largeurs fixes en pixels ?",
                options: [
                    "Elles ralentissent l'affichage",
                    "Elles débordent forcément sur un écran plus étroit",
                    "Elles sont interdites par les normes"
                ],
                a: 1,
                explication: "Préférez %, rem, fr et max-width, qui s'adaptent à la place disponible."
            },
            {
                q: "En quoi consiste l'approche mobile-first ?",
                options: [
                    "Créer une application mobile avant le site",
                    "Écrire d'abord le style pour petit écran, puis ajouter pour les grands",
                    "Tester sur mobile après avoir terminé la version bureau"
                ],
                a: 1,
                explication: "Un écran étroit oblige à hiérarchiser : il n'y a de place que pour l'essentiel."
            },
            // Série 2
            {
                q: "Quelle taille minimale prévoir pour un élément cliquable au doigt ?",
                options: ["16 pixels", "44 pixels", "80 pixels"],
                a: 1,
                explication: "Un doigt n'est pas un curseur : en dessous, les erreurs de frappe se multiplient."
            },
            {
                q: "Pourquoi un menu qui s'ouvre au survol pose-t-il problème ?",
                options: [
                    "Il est trop lent",
                    "Le survol n'existe pas sur écran tactile",
                    "Il consomme trop de mémoire"
                ],
                a: 1,
                explication: "Le menu devient alors inaccessible pour la majorité des visiteurs."
            },
            {
                q: "Comment empêcher un tableau de déborder sur mobile ?",
                options: [
                    "Réduire la taille de la police",
                    "Le placer dans un conteneur en overflow-x: auto",
                    "Supprimer des colonnes"
                ],
                a: 1,
                explication: "Le tableau défile alors dans son propre cadre, sans faire défiler toute la page horizontalement."
            }
        ]
    },

    // -------------------------------------------------------------------
    // SYNTHÈSE
    // -------------------------------------------------------------------
    synthese: [
        // Série 1
        {
            q: "Quelles sont les trois fondations d'une page web ?",
            options: [
                "React, Node.js et une base de données",
                "HTML pour la structure, CSS pour l'apparence, JavaScript pour l'interactivité",
                "Un serveur, un domaine et un certificat"
            ],
            a: 1,
            explication: "Elles n'ont pas changé depuis vingt ans, et tous les frameworks finissent par produire ces trois choses-là."
        },
        {
            q: "Votre page ne fait pas ce que vous attendez. Quel est le premier réflexe ?",
            options: [
                "Réécrire le code depuis le début",
                "Ouvrir la console avec F12 : l'erreur y est presque toujours écrite, avec sa ligne",
                "Chercher la réponse sur un forum"
            ],
            a: 1,
            explication: "Console pour les erreurs JavaScript, Réseau pour les fichiers manquants, Éléments pour le CSS appliqué."
        },
        {
            q: "Quelle affirmation sur la sécurité d'un site est exacte ?",
            options: [
                "Un code minifié est suffisamment protégé",
                "Tout ce qui arrive dans le navigateur est public",
                "Le HTTPS empêche de lire le code source"
            ],
            a: 1,
            explication: "La sécurité ne s'écrit jamais côté frontend : un clic droit suffit à tout lire."
        },
        // Série 2
        {
            q: "Vous devez créer un portfolio de dix pages. Quelle approche privilégier ?",
            options: [
                "Un framework moderne, pour être à jour",
                "Des fichiers HTML, CSS et JavaScript simples, servis tels quels",
                "Un CMS avec base de données"
            ],
            a: 1,
            explication: "Plus rapide, gratuit à héberger, et sans base de données à pirater."
        },
        {
            q: "Quel est le meilleur moyen de progresser en développement web ?",
            options: [
                "Enchaîner les tutoriels",
                "Mener un projet réel qui vous tient à cœur",
                "Apprendre les frameworks avant les bases"
            ],
            a: 1,
            explication: "Un site réel confronte à des problèmes réels — et c'est en cherchant à les résoudre qu'on retient."
        },
        {
            q: "Un site utilise <div class=\"gros-titre\"> partout au lieu de <h1> et <h2>. Quelle conséquence ?",
            options: [
                "Le site s'affiche mal",
                "Google et les lecteurs d'écran ne comprennent plus sa structure",
                "Le site charge plus lentement"
            ],
            a: 1,
            explication: "L'apparence peut être identique ; le sens, lui, a disparu."
        }
    ]
};
