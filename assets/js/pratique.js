// ===================================
// DOCMASTER - EXERCICES ET SIMULATEURS
// ===================================
//
// On n acquiert pas une competence en lisant. Chaque section de cours porte
// donc un bloc de pratique, ou le lecteur entre ses propres nombres et voit
// le mecanisme se produire sur son cas plutot que sur un exemple.
//
// Un moteur unique et des simulateurs declaratifs : le balisage se reduit a
// <div class="pratique" data-pratique="nom"></div>. Ecrire treize simulateurs
// a la main, ce serait treize occasions de diverger sur l accessibilite, le
// formatage des nombres ou la gestion des saisies vides.
//
// Deux types d exercice, parce que toutes les competences ne se chiffrent pas.
// En finance, la pratique est un calcul ; en cybersecurite, c est une
// verification. Forcer la seconde dans le moule de la premiere aurait donne
// des simulateurs artificiels.
//
// Type « calcul » (par defaut) :
//   titre     ce qu on y fait
//   intro     la question a laquelle il repond          (facultatif)
//   champs    [{ id, libelle, unite, defaut, min, max, pas }]
//   calculer  (valeurs) -> [{ libelle, valeur, fort }]  la ou les lignes de resultat
//   lecon     phrase affichee sous le resultat, qui relie au cours (facultatif)
//
// Type « controle » :
//   type      "controle"
//   points    [{ texte, aide }]   ce qu il faut verifier, un par case
//   verdict   (coches, total) -> { texte, ton }   ton : "bon" | "moyen" | "alerte"

(function () {

    // --- Formatage --------------------------------------------------------
    // Les nombres sont formates en francais : espace insecable comme separateur
    // de milliers, virgule decimale. « 108000 » ne se lit pas, « 108 000 € » si.

    const nf = (n, decimales = 0) =>
        new Intl.NumberFormat("fr-FR", {
            minimumFractionDigits: decimales,
            maximumFractionDigits: decimales
        }).format(n);

    const euros = (n) => nf(Math.round(n)) + " €";
    const pourcent = (n, d = 1) => nf(n, d) + " %";

    // Valeur future d un capital et de versements mensuels, interets composes
    // mensuellement. Formule classique de l annuite : le versement du mois m
    // travaille pendant (total - m) mois.
    function valeurFuture(capital, mensuel, tauxAnnuel, annees) {
        const i = tauxAnnuel / 100 / 12;
        const m = Math.round(annees * 12);
        if (i === 0) return capital + mensuel * m;
        const facteur = Math.pow(1 + i, m);
        return capital * facteur + mensuel * (facteur - 1) / i;
    }

    // --- Les simulateurs --------------------------------------------------

    const SIMULATEURS = {

        // ---------- Niveau débutant ----------

        "reserve-precaution": {
            titre: "Calculez votre réserve de précaution",
            intro: "Elle se calcule sur vos <strong>dépenses</strong>, jamais sur vos revenus.",
            champs: [
                { id: "depenses", libelle: "Dépenses mensuelles", unite: "€", defaut: 1600, min: 100, max: 20000, pas: 50 },
                { id: "effort", libelle: "Ce que vous pouvez mettre de côté chaque mois", unite: "€", defaut: 250, min: 10, max: 5000, pas: 10 }
            ],
            calculer: ({ depenses, effort }) => {
                const basse = depenses * 3, haute = depenses * 6;
                const mois = Math.ceil(basse / effort);
                return [
                    { libelle: "Objectif minimal (3 mois)", valeur: euros(basse), fort: true },
                    { libelle: "Objectif confortable (6 mois)", valeur: euros(haute) },
                    { libelle: "Temps pour atteindre le minimum", valeur: mois + " mois" + (mois > 23 ? ` (${nf(mois / 12, 1)} ans)` : "") }
                ];
            },
            lecon: "À partir du moment où cette réserve existe, un imprévu cesse d'être une catastrophe financière."
        },

        "interets-composes": {
            titre: "Voyez travailler les intérêts composés",
            intro: "La part qui vient des intérêts, et non de votre effort, est ce qui grandit avec le temps.",
            champs: [
                { id: "capital", libelle: "Capital de départ", unite: "€", defaut: 1000, min: 0, max: 500000, pas: 100 },
                { id: "mensuel", libelle: "Versement mensuel", unite: "€", defaut: 150, min: 0, max: 5000, pas: 10 },
                { id: "taux", libelle: "Rendement annuel supposé", unite: "%", defaut: 5, min: 0, max: 15, pas: 0.5 },
                { id: "duree", libelle: "Durée", unite: "ans", defaut: 20, min: 1, max: 45, pas: 1 }
            ],
            calculer: ({ capital, mensuel, taux, duree }) => {
                const final = valeurFuture(capital, mensuel, taux, duree);
                const verse = capital + mensuel * Math.round(duree * 12);
                const interets = final - verse;
                // Sans capital ni versement, le total est nul : la part des
                // interets n a alors pas de sens et vaudrait « NaN % ».
                const part = final > 0 ? " (" + pourcent(interets / final * 100, 0) + " du total)" : "";
                return [
                    { libelle: "Capital au terme", valeur: euros(final), fort: true },
                    { libelle: "Dont versé par vous", valeur: euros(verse) },
                    { libelle: "Dont produit par les intérêts", valeur: euros(interets) + part }
                ];
            },
            lecon: "Allongez la durée de dix ans sans rien changer d'autre : c'est le levier le plus puissant du tableau."
        },

        "etf-vs-livret": {
            titre: "Comparez un placement et un livret",
            intro: "Le livret protège le capital ; il ne le fait pas croître. Les deux ont un rôle distinct.",
            champs: [
                { id: "montant", libelle: "Somme placée", unite: "€", defaut: 10000, min: 100, max: 500000, pas: 100 },
                { id: "duree", libelle: "Durée", unite: "ans", defaut: 20, min: 1, max: 45, pas: 1 },
                { id: "tauxLivret", libelle: "Taux du livret", unite: "%", defaut: 2.4, min: 0, max: 10, pas: 0.1 },
                { id: "tauxPlacement", libelle: "Rendement supposé du placement", unite: "%", defaut: 6, min: 0, max: 15, pas: 0.5 }
            ],
            calculer: ({ montant, duree, tauxLivret, tauxPlacement }) => {
                const livret = montant * Math.pow(1 + tauxLivret / 100, duree);
                const place = montant * Math.pow(1 + tauxPlacement / 100, duree);
                return [
                    { libelle: "Sur le livret", valeur: euros(livret) },
                    { libelle: "Sur le placement", valeur: euros(place), fort: true },
                    { libelle: "Écart", valeur: euros(place - livret) }
                ];
            },
            lecon: "Le placement n'est pas garanti, le livret si. L'écart est le prix du risque accepté — pas un gain acquis."
        },

        "asymetrie-perte": {
            titre: "Mesurez l'asymétrie d'une baisse",
            intro: "Une baisse et la hausse qui la répare ne sont jamais du même montant.",
            champs: [
                { id: "capital", libelle: "Capital investi", unite: "€", defaut: 10000, min: 100, max: 500000, pas: 100 },
                { id: "baisse", libelle: "Baisse subie", unite: "%", defaut: 30, min: 1, max: 90, pas: 1 }
            ],
            calculer: ({ capital, baisse }) => {
                const apres = capital * (1 - baisse / 100);
                const hausseNecessaire = (capital / apres - 1) * 100;
                return [
                    { libelle: "Capital après la baisse", valeur: euros(apres) },
                    { libelle: "Hausse nécessaire pour revenir au point de départ", valeur: pourcent(hausseNecessaire), fort: true }
                ];
            },
            lecon: "Perdre 50 % impose de regagner 100 % pour revenir à zéro. C'est pourquoi éviter les pertes lourdes compte plus que capter les hausses."
        },

        "pea-vs-cto": {
            titre: "Comparez la fiscalité à la sortie",
            intro: "Même support, même performance : seul le contenant change.",
            champs: [
                { id: "gain", libelle: "Gain réalisé", unite: "€", defaut: 10000, min: 100, max: 500000, pas: 100 }
            ],
            calculer: ({ gain }) => {
                const cto = gain * 0.30;
                const pea = gain * 0.172;
                return [
                    { libelle: "Prélèvement sur compte-titres (30 %)", valeur: euros(cto) },
                    { libelle: "Prélèvement sur PEA de plus de 5 ans (17,2 %)", valeur: euros(pea) },
                    { libelle: "Écart en votre faveur", valeur: euros(cto - pea), fort: true }
                ];
            },
            lecon: "Ce montant n'a demandé aucune performance supplémentaire : seulement d'avoir ouvert le bon contenant, assez tôt."
        },

        // ---------- Niveau intermédiaire ----------

        "perte-max-portefeuille": {
            titre: "Traduisez votre allocation en perte possible",
            intro: "Une allocation ne se juge pas sur son rendement espéré, mais sur ce qu'elle fait perdre au pire moment.",
            champs: [
                { id: "capital", libelle: "Capital total", unite: "€", defaut: 20000, min: 100, max: 1000000, pas: 500 },
                { id: "partActions", libelle: "Part en actions", unite: "%", defaut: 60, min: 0, max: 100, pas: 5 },
                { id: "chute", libelle: "Chute du marché actions envisagée", unite: "%", defaut: 35, min: 5, max: 80, pas: 5 }
            ],
            calculer: ({ capital, partActions, chute }) => {
                const perte = capital * (partActions / 100) * (chute / 100);
                return [
                    { libelle: "Perte du portefeuille", valeur: euros(perte), fort: true },
                    { libelle: "Soit, sur le total", valeur: pourcent(perte / capital * 100) },
                    { libelle: "Il vous resterait", valeur: euros(capital - perte) }
                ];
            },
            lecon: "Si ce montant vous empêcherait de dormir, l'allocation est trop exposée — quelle que soit la qualité du raisonnement qui l'a produite."
        },

        "cout-des-frais": {
            titre: "Chiffrez ce que vous coûtent les frais",
            intro: "La performance est une hypothèse. Les frais, eux, sont certains.",
            champs: [
                { id: "capital", libelle: "Capital de départ", unite: "€", defaut: 20000, min: 100, max: 1000000, pas: 500 },
                { id: "mensuel", libelle: "Versement mensuel", unite: "€", defaut: 0, min: 0, max: 5000, pas: 10 },
                { id: "brut", libelle: "Rendement annuel avant frais", unite: "%", defaut: 6, min: 0, max: 15, pas: 0.5 },
                { id: "fraisA", libelle: "Frais du support A", unite: "%", defaut: 0.2, min: 0, max: 5, pas: 0.1 },
                { id: "fraisB", libelle: "Frais du support B", unite: "%", defaut: 1.2, min: 0, max: 5, pas: 0.1 },
                { id: "duree", libelle: "Durée", unite: "ans", defaut: 30, min: 1, max: 45, pas: 1 }
            ],
            calculer: ({ capital, mensuel, brut, fraisA, fraisB, duree }) => {
                const a = valeurFuture(capital, mensuel, brut - fraisA, duree);
                const b = valeurFuture(capital, mensuel, brut - fraisB, duree);
                const ecart = a - b;
                return [
                    { libelle: `Avec ${nf(fraisA, 1)} % de frais`, valeur: euros(a) },
                    { libelle: `Avec ${nf(fraisB, 1)} % de frais`, valeur: euros(b) },
                    { libelle: "Coût de l'écart de frais", valeur: euros(ecart) + " (" + pourcent(ecart / a * 100, 0) + " du résultat)", fort: true }
                ];
            },
            lecon: "Rien de cet écart n'apparaîtra jamais sur un relevé : il se déduit silencieusement, chaque année."
        },

        "comparateur-enveloppes": {
            titre: "Comparez les trois enveloppes sur un même gain",
            intro: "L'abattement de l'assurance-vie est annuel : il ne se reporte pas d'une année sur l'autre.",
            champs: [
                { id: "gain", libelle: "Gain réalisé", unite: "€", defaut: 10000, min: 100, max: 500000, pas: 100 },
                { id: "abattement", libelle: "Abattement annuel disponible (assurance-vie de plus de 8 ans)", unite: "€", defaut: 4600, min: 0, max: 9200, pas: 100 }
            ],
            calculer: ({ gain, abattement }) => {
                const cto = gain * 0.30;
                const pea = gain * 0.172;
                const imposable = Math.max(0, gain - abattement);
                const av = gain * 0.172 + imposable * 0.075;   // sociaux sur tout, IR réduit au-delà de l'abattement
                const lignes = [
                    { libelle: "Compte-titres", valeur: euros(gain - cto) + " net" },
                    { libelle: "PEA de plus de 5 ans", valeur: euros(gain - pea) + " net" },
                    { libelle: "Assurance-vie de plus de 8 ans", valeur: euros(gain - av) + " net" }
                ];
                const meilleur = Math.max(gain - cto, gain - pea, gain - av);
                lignes.push({ libelle: "Meilleur net", valeur: euros(meilleur), fort: true });
                return lignes;
            },
            lecon: "Les taux évoluent et votre situation aussi : ce calcul montre un ordre de grandeur, pas une réponse définitive."
        },

        "effet-duree": {
            titre: "Isolez l'effet de la durée",
            intro: "Même effort mensuel, trois durées : l'écart ne vient que du temps laissé aux intérêts.",
            champs: [
                { id: "mensuel", libelle: "Versement mensuel", unite: "€", defaut: 200, min: 10, max: 5000, pas: 10 },
                { id: "taux", libelle: "Rendement annuel supposé", unite: "%", defaut: 6, min: 0, max: 15, pas: 0.5 }
            ],
            calculer: ({ mensuel, taux }) => {
                return [10, 20, 30].map(ans => {
                    const final = valeurFuture(0, mensuel, taux, ans);
                    const verse = mensuel * ans * 12;
                    return {
                        libelle: `Après ${ans} ans (${euros(verse)} versés)`,
                        valeur: euros(final),
                        fort: ans === 30
                    };
                });
            },
            lecon: "Triplez la durée et le capital est bien plus que triplé : c'est la durée, non le montant, qui fait le résultat."
        },

        // ---------- Niveau avancé ----------

        "part-de-gains-imposee": {
            titre: "Décomposez un retrait",
            intro: "Retirer 20 000 € ne signifie pas être imposé sur 20 000 €.",
            champs: [
                { id: "retrait", libelle: "Montant retiré", unite: "€", defaut: 20000, min: 100, max: 500000, pas: 500 },
                { id: "partGains", libelle: "Part de gains dans le contrat", unite: "%", defaut: 50, min: 0, max: 100, pas: 5 },
                { id: "abattement", libelle: "Abattement annuel disponible", unite: "€", defaut: 4600, min: 0, max: 9200, pas: 100 }
            ],
            calculer: ({ retrait, partGains, abattement }) => {
                const gains = retrait * partGains / 100;
                const capital = retrait - gains;
                const imposable = Math.max(0, gains - abattement);
                return [
                    { libelle: "Part de capital (jamais imposée)", valeur: euros(capital) },
                    { libelle: "Part de gains", valeur: euros(gains) },
                    { libelle: "Gains effectivement imposables après abattement", valeur: euros(imposable), fort: true }
                ];
            },
            lecon: "Étaler le même retrait sur deux années civiles permet d'utiliser deux fois l'abattement."
        },

        "sensibilite-duration": {
            titre: "Calculez la sensibilité aux taux",
            intro: "Règle d'approximation : la baisse de prix vaut la duration multipliée par la variation de taux.",
            champs: [
                { id: "montant", libelle: "Montant placé en obligations", unite: "€", defaut: 10000, min: 100, max: 1000000, pas: 500 },
                { id: "duration", libelle: "Duration du support", unite: "ans", defaut: 7, min: 0.5, max: 25, pas: 0.5 },
                { id: "variation", libelle: "Hausse des taux", unite: "points", defaut: 1, min: 0.25, max: 5, pas: 0.25 }
            ],
            calculer: ({ montant, duration, variation }) => {
                const baisse = duration * variation;
                const perte = montant * baisse / 100;
                return [
                    { libelle: "Baisse de prix attendue", valeur: "− " + pourcent(baisse), fort: true },
                    { libelle: "Soit, sur votre montant", valeur: "− " + euros(perte) },
                    { libelle: "Valeur après la hausse des taux", valeur: euros(montant - perte) }
                ];
            },
            lecon: "Aucun emprunteur n'a fait défaut dans ce calcul : la baisse est purement arithmétique."
        },

        "biais-domestique": {
            titre: "Mesurez votre biais domestique",
            intro: "Les marchés français pèsent environ 3 % de la capitalisation mondiale.",
            champs: [
                { id: "montant", libelle: "Poche actions", unite: "€", defaut: 10000, min: 100, max: 1000000, pas: 500 },
                { id: "partFrance", libelle: "Part investie en France", unite: "%", defaut: 50, min: 0, max: 100, pas: 5 }
            ],
            calculer: ({ montant, partFrance }) => {
                const chezVous = montant * partFrance / 100;
                const neutre = montant * 0.03;
                const facteur = partFrance / 3;
                return [
                    { libelle: "Investi en France", valeur: euros(chezVous) },
                    { libelle: "Une répartition mondiale en mettrait", valeur: euros(neutre) },
                    { libelle: "Surexposition", valeur: "× " + nf(facteur, 1), fort: facteur > 1.5 }
                ];
            },
            lecon: "Votre emploi et souvent votre logement dépendent déjà de cette même économie."
        },

        "cout-du-report": {
            titre: "Chiffrez le coût d'attendre",
            intro: "Reporter le démarrage paraît sans conséquence. Le calcul dit autre chose.",
            champs: [
                { id: "mensuel", libelle: "Versement mensuel", unite: "€", defaut: 200, min: 10, max: 5000, pas: 10 },
                { id: "taux", libelle: "Rendement annuel supposé", unite: "%", defaut: 6, min: 0, max: 15, pas: 0.5 },
                { id: "duree", libelle: "Horizon total", unite: "ans", defaut: 25, min: 2, max: 45, pas: 1 },
                { id: "report", libelle: "Report du démarrage", unite: "ans", defaut: 3, min: 1, max: 20, pas: 1 }
            ],
            calculer: ({ mensuel, taux, duree, report }) => {
                const restant = Math.max(0, duree - report);
                const sansReport = valeurFuture(0, mensuel, taux, duree);
                const avecReport = valeurFuture(0, mensuel, taux, restant);
                return [
                    { libelle: "En démarrant maintenant", valeur: euros(sansReport) },
                    { libelle: `En démarrant dans ${report} an${report > 1 ? "s" : ""}`, valeur: euros(avecReport) },
                    { libelle: "Coût du report", valeur: euros(sansReport - avecReport), fort: true }
                ];
            },
            lecon: "Ce sont les dernières années qui portent les intérêts les plus lourds — et ce sont elles qu'un report supprime."
        },

        // ================= CYBERSÉCURITÉ =================

        // ---------- Niveau débutant ----------

        "force-mot-de-passe": {
            titre: "Mesurez la solidité d'un mot de passe",
            intro: "La longueur pèse bien plus lourd que la complexité. Ce calcul le montre.",
            champs: [
                { id: "longueur", libelle: "Nombre de caractères", unite: "car.", defaut: 12, min: 4, max: 40, pas: 1 },
                { id: "jeu", libelle: "Caractères différents utilisés (26 = minuscules, 62 = + majuscules et chiffres, 95 = + symboles)", unite: "", defaut: 62, min: 10, max: 95, pas: 1 },
                { id: "vitesse", libelle: "Essais par seconde de l'attaquant", unite: "milliards", defaut: 100, min: 1, max: 10000, pas: 10 }
            ],
            calculer: ({ longueur, jeu, vitesse }) => {
                // Math.pow deborde vite : on raisonne en logarithmes.
                const log10Combinaisons = longueur * Math.log10(jeu);
                const log10Secondes = log10Combinaisons - Math.log10(vitesse * 1e9) - Math.log10(2);
                const log10Annees = log10Secondes - Math.log10(3.15e7);

                let duree;
                if (log10Secondes < 0) duree = "moins d'une seconde";
                else if (log10Secondes < 1.78) duree = "quelques secondes";
                else if (log10Secondes < 3.56) duree = "moins d'une heure";
                else if (log10Secondes < 4.94) duree = "quelques heures";
                else if (log10Annees < 0) duree = "moins d'un an";
                else if (log10Annees < 6) duree = nf(Math.pow(10, log10Annees)) + " ans";
                else duree = "10^" + Math.round(log10Annees) + " ans";

                return [
                    { libelle: "Combinaisons possibles", valeur: "10^" + Math.round(log10Combinaisons) },
                    { libelle: "Temps de recherche exhaustive", valeur: duree, fort: true }
                ];
            },
            lecon: "Ajoutez deux caractères plutôt qu'un symbole : l'effet sur le temps de recherche est sans commune mesure."
        },

        "signaux-phishing": {
            type: "controle",
            titre: "Passez un message suspect au crible",
            intro: "Cochez ce que vous constatez sur le message que vous avez sous les yeux.",
            points: [
                { texte: "Il crée l'urgence : compte bloqué, dernier avertissement, délai de 24 h" },
                { texte: "L'adresse de l'expéditeur ne correspond pas exactement au domaine officiel", aide: "survolez-la, ne lisez pas seulement le nom affiché" },
                { texte: "Le lien pointe ailleurs que ce qu'il annonce", aide: "survolez sans cliquer et lisez l'adresse réelle" },
                { texte: "On me demande un mot de passe, un code ou des coordonnées bancaires" },
                { texte: "Le message est inattendu, ou concerne un service que je n'utilise pas" },
                { texte: "La formule d'appel est générique — « Cher client » plutôt que mon nom" },
                { texte: "Une pièce jointe m'est envoyée sans que je l'aie demandée" }
            ],
            verdict: (n) => {
                if (n === 0) return { texte: "Aucun signal relevé. Vérifiez tout de même en passant par le site officiel, jamais par le lien du message.", ton: "bon" };
                if (n <= 2) return { texte: "Signaux relevés. Ne cliquez pas : rendez-vous sur le site officiel par vos propres moyens.", ton: "moyen" };
                return { texte: "Faisceau clair d'indices. Supprimez le message et signalez-le.", ton: "alerte" };
            },
            lecon: "Un seul signal suffit à justifier la méfiance. Aucun ne suffit à garantir l'authenticité."
        },

        "protections-de-base": {
            type: "controle",
            titre: "Vérifiez vos protections de base",
            intro: "Les quatre premières lignes coûtent zéro euro et couvrent l'essentiel du risque courant.",
            points: [
                { texte: "Les mises à jour de mon système sont installées automatiquement" },
                { texte: "Les mises à jour de mon navigateur le sont aussi", aide: "c'est lui qui affronte le web en première ligne" },
                { texte: "Le pare-feu de mon système est actif" },
                { texte: "Un antivirus est actif et à jour", aide: "celui intégré au système suffit dans la plupart des cas" },
                { texte: "Je n'installe de logiciels que depuis leur site officiel ou une boutique d'applications" },
                { texte: "Ma session est protégée par un mot de passe ou une biométrie" }
            ],
            verdict: (n, total) => {
                if (n === total) return { texte: "Base saine. C'est le socle sur lequel tout le reste s'appuie.", ton: "bon" };
                if (n >= total - 2) return { texte: "Presque. Les points restants sont ceux qui demandent le moins d'effort.", ton: "moyen" };
                return { texte: "Plusieurs protections élémentaires manquent — commencez par les mises à jour automatiques.", ton: "alerte" };
            },
            lecon: "La grande majorité des compromissions exploitent une faille déjà corrigée par une mise à jour disponible."
        },

        "ou-est-le-chiffrement": {
            type: "controle",
            titre: "Repérez où vos données sont chiffrées",
            intro: "Le chiffrement ne protège que là où il est effectivement appliqué.",
            points: [
                { texte: "Le disque de mon ordinateur est chiffré", aide: "BitLocker sous Windows, FileVault sous macOS" },
                { texte: "Mon téléphone est chiffré et verrouillé par code" },
                { texte: "Les sites que j'utilise affichent bien « https » " },
                { texte: "Mes sauvegardes sont chiffrées, pas seulement copiées" },
                { texte: "Ma messagerie sensible utilise un chiffrement de bout en bout" },
                { texte: "Ma clé USB, si j'en utilise une, est chiffrée", aide: "c'est l'objet le plus facile à perdre" }
            ],
            verdict: (n, total) => {
                if (n === total) return { texte: "Vos données sont protégées au repos comme en transit.", ton: "bon" };
                if (n >= 3) return { texte: "L'essentiel est couvert. Les points restants concernent surtout la perte ou le vol.", ton: "moyen" };
                return { texte: "Un appareil perdu livrerait aujourd'hui son contenu à qui le trouve.", ton: "alerte" };
            },
            lecon: "Le chiffrement du disque ne coûte rien et ne se remarque pas — jusqu'au jour où l'appareil disparaît."
        },

        // ---------- Niveau intermédiaire ----------

        "propagation-fuite": {
            titre: "Mesurez la propagation d'une fuite",
            intro: "Un mot de passe réutilisé transforme une fuite unique en compromission générale.",
            champs: [
                { id: "comptes", libelle: "Nombre de comptes en ligne que vous possédez", unite: "comptes", defaut: 80, min: 1, max: 500, pas: 5 },
                { id: "reutilisation", libelle: "Part de ces comptes partageant le même mot de passe", unite: "%", defaut: 60, min: 0, max: 100, pas: 5 }
            ],
            calculer: ({ comptes, reutilisation }) => {
                const exposes = Math.round(comptes * reutilisation / 100);
                return [
                    { libelle: "Comptes utilisant ce mot de passe", valeur: nf(exposes) },
                    { libelle: "Comptes accessibles après UNE seule fuite", valeur: nf(exposes), fort: true },
                    { libelle: "Comptes restés hors d'atteinte", valeur: nf(comptes - exposes) }
                ];
            },
            lecon: "Les listes issues de fuites sont rejouées automatiquement sur des centaines d'autres services. Aucun attaquant humain n'intervient."
        },

        "robustesse-2fa": {
            type: "controle",
            titre: "Classez vos comptes par exposition",
            intro: "Tous les comptes ne se valent pas : certains servent à récupérer tous les autres.",
            points: [
                { texte: "Ma boîte mail principale a une double authentification", aide: "c'est la clé de tout le reste : elle réinitialise les autres comptes" },
                { texte: "Mes comptes bancaires en ont une" },
                { texte: "Mon gestionnaire de mots de passe en a une" },
                { texte: "Mes réseaux sociaux en ont une" },
                { texte: "J'utilise une application ou une clé physique plutôt que le SMS", aide: "le SMS est interceptable par détournement de carte SIM" },
                { texte: "J'ai conservé mes codes de secours ailleurs que sur le téléphone concerné" }
            ],
            verdict: (n, total) => {
                if (n === total) return { texte: "Vos comptes critiques sont protégés, y compris en cas de perte du téléphone.", ton: "bon" };
                if (n >= 3) return { texte: "Bonne base. Traitez la boîte mail en priorité si elle n'est pas encore couverte.", ton: "moyen" };
                return { texte: "Un mot de passe volé suffirait aujourd'hui à entrer.", ton: "alerte" };
            },
            lecon: "Protéger sa boîte mail avant tout le reste : c'est elle qui permet de réinitialiser les autres comptes."
        },

        "regle-3-2-1": {
            type: "controle",
            titre: "Confrontez vos sauvegardes à la règle 3-2-1",
            intro: "Trois copies, sur deux supports différents, dont une hors ligne.",
            points: [
                { texte: "Mes données existent en au moins trois exemplaires" },
                { texte: "Elles sont sur au moins deux supports de nature différente", aide: "disque interne et disque externe, par exemple" },
                { texte: "Une copie est hors du logement", aide: "un incendie ou un vol emporte tout ce qui est au même endroit" },
                { texte: "Une copie est déconnectée en permanence", aide: "un rançongiciel chiffre tout ce qui est accessible, y compris le disque branché" },
                { texte: "J'ai déjà restauré un fichier depuis cette sauvegarde", aide: "une sauvegarde jamais restaurée n'est qu'une hypothèse" }
            ],
            verdict: (n, total) => {
                if (n === total) return { texte: "Vous survivriez à un rançongiciel comme à une panne matérielle.", ton: "bon" };
                if (n >= 3) return { texte: "Il manque l'essentiel : la copie déconnectée, ou le test de restauration.", ton: "moyen" };
                return { texte: "Une seule mauvaise journée suffirait à tout perdre.", ton: "alerte" };
            },
            lecon: "Une sauvegarde branchée en permanence est chiffrée en même temps que l'original. Elle ne compte pas."
        },

        "ce-que-protege-un-vpn": {
            type: "controle",
            titre: "Cochez ce qu'un VPN protège réellement",
            intro: "Cochez uniquement les affirmations exactes. Certaines sont fausses.",
            points: [
                { texte: "Il masque mon adresse IP au site que je visite", aide: "exact" },
                { texte: "Il empêche le gestionnaire du wifi public de voir les sites visités", aide: "exact" },
                { texte: "Il me rend anonyme sur les sites où je suis connecté", aide: "faux : un compte connecté vous identifie, VPN ou non" },
                { texte: "Il protège contre le phishing et les logiciels malveillants", aide: "faux : il transporte le trafic, il ne l'inspecte pas" },
                { texte: "Il remplace le HTTPS", aide: "faux : HTTPS chiffre jusqu'au site, le VPN seulement jusqu'à son propre serveur" },
                { texte: "Il déplace ma confiance du fournisseur d'accès vers le fournisseur de VPN", aide: "exact, et c'est le point le plus important" }
            ],
            verdict: (n, total) => {
                if (n === 3) return { texte: "Trois affirmations sont exactes. Si vous en avez coché exactement trois, vérifiez lesquelles.", ton: "moyen" };
                if (n > 3) return { texte: "Plus de trois cases cochées : certaines affirmations sont fausses. Lisez les indications.", ton: "alerte" };
                return { texte: "Trois de ces affirmations sont exactes. Les indications vous disent lesquelles.", ton: "moyen" };
            },
            lecon: "Un VPN déplace la confiance, il ne la supprime pas. La question devient : ce fournisseur mérite-t-il plus de confiance que le précédent ?"
        },

        // ---------- Niveau avancé ----------

        "reflexes-apres-fuite": {
            type: "controle",
            titre: "Établissez votre conduite après une fuite",
            intro: "L'ordre compte : certains gestes rendent les suivants inutiles s'ils sont faits trop tard.",
            points: [
                { texte: "Changer d'abord le mot de passe de la boîte mail de secours", aide: "sans elle, l'attaquant reprend tout le reste" },
                { texte: "Changer ensuite le mot de passe du service concerné" },
                { texte: "Changer partout où ce mot de passe avait été réutilisé" },
                { texte: "Vérifier les règles de redirection automatique de la messagerie", aide: "une règle de transfert survit à un changement de mot de passe" },
                { texte: "Déconnecter toutes les sessions actives depuis les réglages du compte" },
                { texte: "Vérifier les appareils et applications autorisés" },
                { texte: "Activer la double authentification si elle ne l'était pas" }
            ],
            verdict: (n, total) => {
                if (n === total) return { texte: "Conduite complète, y compris les points que la plupart oublient.", ton: "bon" };
                if (n >= 4) return { texte: "L'essentiel y est. Les règles de redirection sont le point le plus souvent négligé.", ton: "moyen" };
                return { texte: "Changer le mot de passe ne suffit pas à reprendre le contrôle.", ton: "alerte" };
            },
            lecon: "Une règle de transfert automatique posée par un attaquant continue de fonctionner après le changement de mot de passe."
        },

        "signaux-spear-phishing": {
            type: "controle",
            titre: "Reconnaissez une attaque ciblée",
            intro: "Le hameçonnage ciblé ne présente aucun des signaux grossiers du hameçonnage de masse.",
            points: [
                { texte: "Le message me connaît : mon nom, mon poste, un projet en cours" },
                { texte: "Il semble venir d'un collègue ou d'un supérieur" },
                { texte: "Il demande une action inhabituelle mais plausible", aide: "un virement urgent, un changement de coordonnées bancaires" },
                { texte: "Il insiste sur la discrétion ou l'urgence" },
                { texte: "Il arrive à un moment opportun — veille de congés, clôture comptable" },
                { texte: "Il évite le téléphone et privilégie l'écrit" }
            ],
            verdict: (n) => {
                if (n === 0) return { texte: "Aucun signal. La vérification par un autre canal reste la seule certitude.", ton: "bon" };
                if (n <= 2) return { texte: "Vérifiez par un canal différent — appelez un numéro que vous connaissez déjà.", ton: "moyen" };
                return { texte: "Profil typique d'une attaque ciblée. N'agissez pas avant vérification directe.", ton: "alerte" };
            },
            lecon: "Contre une attaque ciblée, la parade n'est pas de mieux lire le message : c'est de vérifier par un autre canal."
        },

        "metadonnees-visibles": {
            type: "controle",
            titre: "Distinguez le contenu des métadonnées",
            intro: "Cochez ce qui reste visible malgré un chiffrement de bout en bout.",
            points: [
                { texte: "Le texte de mes messages", aide: "non : c'est précisément ce que le chiffrement protège" },
                { texte: "L'identité de mes correspondants", aide: "oui, dans la plupart des messageries" },
                { texte: "La date et l'heure de chaque échange", aide: "oui" },
                { texte: "La fréquence et le volume de mes échanges", aide: "oui" },
                { texte: "Mon adresse IP, donc une localisation approximative", aide: "oui, sauf protection spécifique" },
                { texte: "Le fait même que je sois inscrit sur ce service", aide: "oui" }
            ],
            verdict: (n) => {
                if (n === 5) return { texte: "Cinq de ces éléments restent visibles. Si vous avez coché les cinq derniers, c'est exact.", ton: "bon" };
                if (n >= 6) return { texte: "Le contenu, lui, est bien protégé : c'est le seul élément à ne pas cocher.", ton: "alerte" };
                return { texte: "Cinq de ces six éléments restent visibles. Les indications précisent lesquels.", ton: "moyen" };
            },
            lecon: "Qui parle à qui, quand et à quelle fréquence : ces données seules suffisent souvent à reconstituer une situation."
        },

        "score-exposition": {
            titre: "Chiffrez votre surface d'attaque",
            intro: "Le nombre de comptes compte moins que la proportion de ceux qui sont mal protégés.",
            champs: [
                { id: "comptes", libelle: "Comptes en ligne possédés", unite: "comptes", defaut: 80, min: 1, max: 500, pas: 5 },
                { id: "uniques", libelle: "Part avec un mot de passe unique", unite: "%", defaut: 40, min: 0, max: 100, pas: 5 },
                { id: "avec2fa", libelle: "Part avec double authentification", unite: "%", defaut: 20, min: 0, max: 100, pas: 5 }
            ],
            calculer: ({ comptes, uniques, avec2fa }) => {
                const fragiles = Math.round(comptes * (100 - uniques) / 100);
                const sansSecond = Math.round(comptes * (100 - avec2fa) / 100);
                const score = Math.round((uniques * 0.6 + avec2fa * 0.4));
                return [
                    { libelle: "Comptes à mot de passe partagé", valeur: nf(fragiles) },
                    { libelle: "Comptes sans second facteur", valeur: nf(sansSecond) },
                    { libelle: "Indice de protection", valeur: score + " / 100", fort: true }
                ];
            },
            lecon: "Aucun de ces deux chiffres ne descend tout seul. Les faire baisser demande une séance, une fois — pas une vigilance permanente."
        }
    };

    // --- Construction du bloc ---------------------------------------------

    function construire(bloc, simulateur) {
        const nom = bloc.dataset.pratique;

        const entete = document.createElement("div");
        entete.className = "pratique-entete";
        entete.innerHTML =
            '<span class="pratique-surtitre">À vous d\'essayer</span>' +
            "<h4>" + simulateur.titre + "</h4>" +
            (simulateur.intro ? "<p class=\"pratique-intro\">" + simulateur.intro + "</p>" : "");
        bloc.appendChild(entete);

        if (simulateur.type === "controle") { construireControle(bloc, simulateur, nom); return; }

        const form = document.createElement("div");
        form.className = "pratique-champs";

        const entrees = {};
        for (const champ of simulateur.champs) {
            const id = "pratique-" + nom + "-" + champ.id;
            const ligne = document.createElement("div");
            ligne.className = "pratique-champ";

            const label = document.createElement("label");
            label.setAttribute("for", id);
            label.textContent = champ.libelle;

            const groupe = document.createElement("div");
            groupe.className = "pratique-saisie";

            const input = document.createElement("input");
            input.type = "number";
            input.id = id;
            input.value = champ.defaut;
            input.min = champ.min;
            input.max = champ.max;
            input.step = champ.pas;
            input.inputMode = "decimal";

            const unite = document.createElement("span");
            unite.className = "pratique-unite";
            unite.textContent = champ.unite;
            unite.setAttribute("aria-hidden", "true");

            groupe.appendChild(input);
            groupe.appendChild(unite);
            ligne.appendChild(label);
            ligne.appendChild(groupe);
            form.appendChild(ligne);

            entrees[champ.id] = { input, champ };
        }
        bloc.appendChild(form);

        // aria-live : le resultat change sans rechargement ni validation, une
        // personne utilisant un lecteur d ecran doit en etre informee.
        const resultat = document.createElement("div");
        resultat.className = "pratique-resultat";
        resultat.setAttribute("role", "status");
        resultat.setAttribute("aria-live", "polite");
        bloc.appendChild(resultat);

        if (simulateur.lecon) {
            const lecon = document.createElement("p");
            lecon.className = "pratique-lecon";
            lecon.textContent = simulateur.lecon;
            bloc.appendChild(lecon);
        }

        function recalculer() {
            const valeurs = {};
            let invalide = null;

            for (const [cle, { input, champ }] of Object.entries(entrees)) {
                const brut = input.value.trim().replace(",", ".");
                const v = brut === "" ? NaN : Number(brut);
                if (!isFinite(v)) { invalide = champ.libelle; break; }
                // On borne plutot que de refuser : une saisie hors limites doit
                // donner un resultat coherent, pas un message d erreur bloquant.
                valeurs[cle] = Math.min(Math.max(v, champ.min), champ.max);
            }

            if (invalide) {
                resultat.innerHTML = '<p class="pratique-invalide">Renseignez « ' + invalide + " » pour voir le résultat.</p>";
                return;
            }

            const lignes = simulateur.calculer(valeurs);
            resultat.innerHTML = lignes.map(l =>
                '<div class="pratique-ligne' + (l.fort ? " fort" : "") + '">' +
                '<span class="pratique-libelle">' + l.libelle + "</span>" +
                '<span class="pratique-valeur">' + l.valeur + "</span>" +
                "</div>"
            ).join("");
        }

        for (const { input } of Object.values(entrees)) {
            input.addEventListener("input", recalculer);
        }
        recalculer();
    }

    // --- Exercice de verification ----------------------------------------
    // Une liste de points a cocher et un verdict qui evolue a mesure. Le
    // verdict est deliberement formule sans culpabiliser : l objectif est
    // qu on aille cocher les cases manquantes, pas qu on referme la page.

    function construireControle(bloc, simulateur, nom) {
        const liste = document.createElement("ul");
        liste.className = "pratique-controle";

        const cases = [];
        simulateur.points.forEach((point, i) => {
            const id = "pratique-" + nom + "-" + i;
            const li = document.createElement("li");

            const input = document.createElement("input");
            input.type = "checkbox";
            input.id = id;

            const label = document.createElement("label");
            label.setAttribute("for", id);
            label.textContent = point.texte;

            li.appendChild(input);
            li.appendChild(label);

            if (point.aide) {
                const aide = document.createElement("span");
                aide.className = "pratique-aide";
                aide.textContent = point.aide;
                li.appendChild(aide);
            }

            liste.appendChild(li);
            cases.push(input);
        });
        bloc.appendChild(liste);

        const resultat = document.createElement("div");
        resultat.className = "pratique-resultat";
        resultat.setAttribute("role", "status");
        resultat.setAttribute("aria-live", "polite");
        bloc.appendChild(resultat);

        if (simulateur.lecon) {
            const lecon = document.createElement("p");
            lecon.className = "pratique-lecon";
            lecon.textContent = simulateur.lecon;
            bloc.appendChild(lecon);
        }

        function evaluer() {
            const coches = cases.filter(c => c.checked).length;
            const total = cases.length;
            const v = simulateur.verdict(coches, total);
            resultat.innerHTML =
                '<div class="pratique-ligne fort ton-' + (v.ton || "moyen") + '">' +
                '<span class="pratique-libelle">' + v.texte + "</span>" +
                '<span class="pratique-valeur">' + coches + " / " + total + "</span>" +
                "</div>";
        }

        cases.forEach(c => c.addEventListener("change", evaluer));
        evaluer();
    }

    function demarrer() {
        document.querySelectorAll(".pratique[data-pratique]").forEach(bloc => {
            const simulateur = SIMULATEURS[bloc.dataset.pratique];
            if (!simulateur) {
                // Un nom inconnu laisse le bloc vide plutot que d afficher une
                // zone cassee : le cours reste lisible.
                bloc.remove();
                return;
            }
            construire(bloc, simulateur);
        });
    }

    // Hors navigateur — c est le cas quand les formules sont mises a l epreuve
    // par les tests — il n y a aucun document a parcourir. Les calculs, eux,
    // restent exportes : ce sont eux qu il faut verifier, et une formule fausse
    // ne se voit pas a l ecran, elle produit un nombre plausible.
    if (typeof document !== "undefined") {
        if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", demarrer);
        else demarrer();
    }

    if (typeof module !== "undefined" && module.exports) {
        module.exports = { SIMULATEURS, valeurFuture };
    }
})();
