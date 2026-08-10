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
        },

        // ================= INTELLIGENCE ARTIFICIELLE =================

        // ---------- Niveau débutant ----------

        "anatomie-llm": {
            type: "controle",
            titre: "Ce qu'un modèle de langage fait, et ne fait pas",
            intro: "Cochez uniquement les affirmations exactes. Trois le sont.",
            points: [
                { texte: "Il prédit le fragment de texte suivant, encore et encore", aide: "exact : c'est tout son fonctionnement" },
                { texte: "Il consulte une base de connaissances à chaque réponse", aide: "faux : sauf si on lui en branche une explicitement" },
                { texte: "Il peut produire une affirmation fausse avec une parfaite assurance", aide: "exact : rien dans son fonctionnement ne distingue vrai et plausible" },
                { texte: "Il comprend le sens comme un humain le comprend", aide: "faux, et la question reste débattue" },
                { texte: "Il n'a aucune mémoire entre deux conversations", aide: "exact : l'historique lui est renvoyé, il ne le retient pas" },
                { texte: "Il calcule ses réponses à partir de règles écrites par des humains", aide: "faux : les règles ne sont écrites nulle part, elles sont apprises" }
            ],
            verdict: (n) => {
                if (n === 3) return { texte: "Trois affirmations sont exactes. Vérifiez avec les indications que ce sont bien les vôtres.", ton: "bon" };
                if (n > 3) return { texte: "Plus de trois cases cochées : certaines affirmations sont fausses.", ton: "alerte" };
                return { texte: "Trois de ces affirmations sont exactes. Les indications vous disent lesquelles.", ton: "moyen" };
            },
            lecon: "Un modèle produit du texte plausible. Le vrai et le plausible coïncident souvent — pas toujours."
        },

        "anatomie-agent": {
            type: "controle",
            titre: "Distinguez un agent d'un assistant",
            intro: "Cochez ce qui caractérise un agent, par opposition à un simple assistant conversationnel.",
            points: [
                { texte: "Il peut appeler des outils extérieurs" },
                { texte: "Il enchaîne plusieurs étapes sans qu'on les lui dicte une par une" },
                { texte: "Il observe le résultat d'une action avant de décider de la suivante" },
                { texte: "Il poursuit un objectif plutôt que de répondre à une question" },
                { texte: "Il peut produire des effets réels : envoyer, écrire, supprimer", aide: "c'est ce qui rend le périmètre de ses outils décisif" }
            ],
            verdict: (n, total) => {
                if (n === total) return { texte: "Les cinq caractéristiques sont exactes. Un agent, c'est bien tout cela réuni.", ton: "bon" };
                if (n >= 3) return { texte: "Bonne base. Les points restants sont également exacts.", ton: "moyen" };
                return { texte: "Ces cinq points sont tous caractéristiques d'un agent.", ton: "moyen" };
            },
            lecon: "Ce n'est pas l'intelligence qui fait l'agent, c'est la capacité d'agir — et donc de se tromper avec conséquence."
        },

        "qualite-consigne": {
            type: "controle",
            titre: "Passez votre consigne au crible",
            intro: "Reprenez une consigne que vous avez écrite, et cochez ce qui y figure vraiment.",
            points: [
                { texte: "Le rôle ou le point de vue attendu est précisé" },
                { texte: "La tâche est décrite en une phrase claire" },
                { texte: "Le format de sortie est imposé", aide: "liste, tableau, longueur maximale, langue" },
                { texte: "Un ou deux exemples de ce qui est attendu sont fournis", aide: "l'ajout le plus efficace, presque toujours" },
                { texte: "Ce qu'il ne faut PAS faire est indiqué" },
                { texte: "La conduite à tenir en cas d'information manquante est prévue", aide: "sans quoi le modèle comblera le vide" }
            ],
            verdict: (n, total) => {
                if (n === total) return { texte: "Consigne complète. C'est déjà mieux que la plupart.", ton: "bon" };
                if (n >= 4) return { texte: "Solide. Les exemples et le cas « information manquante » sont les ajouts les plus rentables.", ton: "moyen" };
                return { texte: "Plusieurs éléments manquent : le modèle devra deviner, et il devinera.", ton: "alerte" };
            },
            lecon: "Un modèle ne demande jamais de précision. Ce que la consigne ne dit pas, il le comble tout seul."
        },

        "signaux-hallucination": {
            type: "controle",
            titre: "Repérez une réponse à vérifier",
            intro: "Cochez ce que présente la réponse que vous avez sous les yeux.",
            points: [
                { texte: "Elle cite une source précise — référence, article, page" },
                { texte: "Elle donne des chiffres exacts sans indiquer d'où ils viennent" },
                { texte: "Elle porte sur un fait récent ou daté" },
                { texte: "Elle porte sur un sujet de niche, peu documenté" },
                { texte: "Elle est affirmée sans la moindre nuance" },
                { texte: "Elle concerne une personne, un lieu ou une entreprise nommément" }
            ],
            verdict: (n) => {
                if (n === 0) return { texte: "Aucun signal. La vérification reste utile pour tout ce qui vous engage.", ton: "bon" };
                if (n <= 2) return { texte: "Quelques signaux. Vérifiez les éléments chiffrés et les noms propres.", ton: "moyen" };
                return { texte: "Réponse à vérifier avant tout usage : plusieurs facteurs de risque sont réunis.", ton: "alerte" };
            },
            lecon: "Les inventions les plus dangereuses sont les plus plausibles : une référence bien formée qui n'existe pas."
        },

        // ---------- Niveau intermédiaire ----------

        "cout-en-tokens": {
            titre: "Mesurez le coût réel d'une conversation",
            intro: "L'historique est relu à chaque tour. Ce n'est pas le dernier message qui coûte, c'est leur somme.",
            champs: [
                // 333 mots font 500 jetons : la valeur par defaut reproduit
                // exactement l exemple du cours, sans quoi le lecteur verrait
                // deux nombres differents pour la meme situation.
                { id: "mots", libelle: "Mots par échange (question et réponse)", unite: "mots", defaut: 333, min: 10, max: 20000, pas: 10 },
                { id: "tours", libelle: "Nombre d'échanges dans la conversation", unite: "tours", defaut: 10, min: 1, max: 200, pas: 1 },
                { id: "prix", libelle: "Prix d'entrée du modèle", unite: "€/M jetons", defaut: 3, min: 0, max: 100, pas: 0.5 }
            ],
            calculer: ({ mots, tours, prix }) => {
                // Environ trois jetons pour deux mots en francais.
                const parTour = Math.round(mots * 1.5);
                // Au tour n, le modele relit n fois le poids d un tour : n(n+1)/2 au total.
                const cumul = parTour * tours * (tours + 1) / 2;
                return [
                    { libelle: "Jetons par échange", valeur: nf(parTour) },
                    { libelle: "Total réellement lu sur la conversation", valeur: nf(cumul) + " jetons", fort: true },
                    { libelle: "Coût de la conversation", valeur: nf(cumul / 1e6 * prix, 3) + " €" }
                ];
            },
            lecon: "Doublez le nombre de tours et le total lu quadruple à peu près : la croissance n'est pas linéaire."
        },

        "dimensionner-un-rag": {
            titre: "Dimensionnez une base documentaire",
            intro: "Avant de choisir un outil, mesurez ce que vous avez réellement à indexer.",
            champs: [
                { id: "documents", libelle: "Nombre de documents", unite: "doc.", defaut: 200, min: 1, max: 100000, pas: 10 },
                { id: "pages", libelle: "Pages par document en moyenne", unite: "pages", defaut: 8, min: 1, max: 2000, pas: 1 },
                { id: "fragment", libelle: "Taille d'un fragment", unite: "jetons", defaut: 500, min: 100, max: 4000, pas: 50 }
            ],
            calculer: ({ documents, pages, fragment }) => {
                // Environ 500 mots par page, soit 750 jetons.
                const jetons = documents * pages * 750;
                const fragments = Math.ceil(jetons / fragment);
                return [
                    { libelle: "Volume total", valeur: nf(jetons) + " jetons" },
                    { libelle: "Fragments à indexer", valeur: nf(fragments), fort: true },
                    { libelle: "Si tout était envoyé au modèle d'un coup", valeur: nf(Math.round(jetons / 1000)) + " k jetons — bien au-delà de toute fenêtre" }
                ];
            },
            lecon: "C'est précisément parce que ce volume ne tient dans aucune fenêtre que la récupération existe."
        },

        "perimetre-outils": {
            type: "controle",
            titre: "Délimitez le périmètre de votre agent",
            intro: "Cochez ce qui est vrai de l'agent que vous concevez.",
            points: [
                { texte: "Chaque outil fait une chose précise et nommée", aide: "plutôt qu'un outil général du type « exécute cette requête »" },
                { texte: "Les outils qui lisent sont séparés de ceux qui écrivent" },
                { texte: "Toute action irréversible passe par une confirmation humaine", aide: "envoyer, supprimer, payer" },
                { texte: "Mon code vérifie les paramètres avant d'exécuter un appel", aide: "le modèle propose, votre code dispose" },
                { texte: "Un agent qui lit du contenu extérieur n'a pas d'outil d'envoi", aide: "cloisonnement : c'est la parade à l'injection de consigne" },
                { texte: "Les appels d'outils sont journalisés" }
            ],
            verdict: (n, total) => {
                if (n === total) return { texte: "Périmètre maîtrisé : même détourné, l'agent ne peut pas faire grand-chose.", ton: "bon" };
                if (n >= 4) return { texte: "Bonne architecture. La confirmation humaine et le cloisonnement sont les deux points à ne pas lâcher.", ton: "moyen" };
                return { texte: "L'agent peut aujourd'hui produire des effets que vous n'avez pas prévus.", ton: "alerte" };
            },
            lecon: "Ce qu'un agent peut casser est exactement ce que ses outils permettent. Rien de plus, rien de moins."
        },

        "arbitrage-modele": {
            titre: "Comparez le coût mensuel de deux modèles",
            intro: "Un écart minime par requête devient structurant à l'échelle du mois.",
            champs: [
                { id: "requetes", libelle: "Requêtes par mois", unite: "req.", defaut: 10000, min: 1, max: 10000000, pas: 100 },
                { id: "entree", libelle: "Jetons d'entrée par requête", unite: "jetons", defaut: 2000, min: 1, max: 200000, pas: 100 },
                { id: "sortie", libelle: "Jetons de sortie par requête", unite: "jetons", defaut: 500, min: 1, max: 50000, pas: 50 },
                { id: "prixA", libelle: "Modèle A — prix entrée / sortie (€/M)", unite: "€", defaut: 3, min: 0, max: 200, pas: 0.5 },
                { id: "prixB", libelle: "Modèle B — prix entrée / sortie (€/M)", unite: "€", defaut: 0.3, min: 0, max: 200, pas: 0.1 }
            ],
            calculer: ({ requetes, entree, sortie, prixA, prixB }) => {
                // La sortie est facturee environ trois fois l entree chez la plupart
                // des fournisseurs : l approximation evite deux champs de plus.
                const jetonsE = requetes * entree / 1e6;
                const jetonsS = requetes * sortie / 1e6;
                const coutA = jetonsE * prixA + jetonsS * prixA * 3;
                const coutB = jetonsE * prixB + jetonsS * prixB * 3;
                return [
                    { libelle: "Modèle A par mois", valeur: nf(coutA, 2) + " €" },
                    { libelle: "Modèle B par mois", valeur: nf(coutB, 2) + " €" },
                    { libelle: "Écart annuel", valeur: nf(Math.abs(coutA - coutB) * 12, 2) + " €", fort: true }
                ];
            },
            lecon: "La sortie coûte environ trois fois l'entrée : réduire la longueur des réponses est souvent le levier le plus rentable."
        },

        // ---------- Niveau avancé ----------

        "reglage-temperature": {
            type: "controle",
            titre: "Choisissez votre température",
            intro: "Cochez les tâches qui appellent une température BASSE.",
            points: [
                { texte: "Extraire des informations d'un document", aide: "oui : on veut la même réponse à chaque fois" },
                { texte: "Classer des messages par catégorie", aide: "oui" },
                { texte: "Proposer dix idées de titres", aide: "non : la variété est justement ce qu'on cherche" },
                { texte: "Générer du code", aide: "oui" },
                { texte: "Reformuler un texte avec plus de style", aide: "non" },
                { texte: "Répondre à une question factuelle", aide: "oui" }
            ],
            verdict: (n) => {
                if (n === 4) return { texte: "Quatre tâches appellent une température basse. Vérifiez que ce sont bien celles-là.", ton: "bon" };
                if (n > 4) return { texte: "Plus de quatre : deux de ces tâches gagnent au contraire à la variété.", ton: "alerte" };
                return { texte: "Quatre de ces six tâches appellent une température basse.", ton: "moyen" };
            },
            lecon: "Le réglage par défaut est intermédiaire. Il convient donc mal aux deux extrémités — dont l'extraction."
        },

        "jeu-de-test": {
            type: "controle",
            titre: "Évaluez votre méthode d'évaluation",
            intro: "Cochez ce qui est vrai de votre manière de mesurer.",
            points: [
                { texte: "J'ai au moins vingt cas de test écrits avec leur réponse attendue" },
                { texte: "Le jeu contient des cas limites, pas seulement des cas faciles" },
                { texte: "Il contient des cas où la bonne réponse est « je ne sais pas »", aide: "les plus révélateurs : un système qui invente échoue là" },
                { texte: "Un second jeu, jamais consulté pendant les réglages, sert de contrôle final" },
                { texte: "Je regarde le détail des cas, pas seulement le score global", aide: "un score qui monte peut cacher des régressions" },
                { texte: "Si j'utilise un modèle-juge, j'inverse l'ordre des candidats", aide: "un juge favorise ce qui est présenté en premier" }
            ],
            verdict: (n, total) => {
                if (n === total) return { texte: "Méthode solide : vos améliorations sont mesurées, pas ressenties.", ton: "bon" };
                if (n >= 3) return { texte: "Base correcte. Le jeu de contrôle mis à part et le détail des cas font la différence.", ton: "moyen" };
                return { texte: "Sans mesure, une amélioration ressentie sur trois essais peut être une dégradation sur cent.", ton: "alerte" };
            },
            lecon: "Le jeu de test est ce qui transforme une opinion sur un système en information sur un système."
        },

        "surface-injection": {
            type: "controle",
            titre: "Mesurez votre exposition à l'injection",
            intro: "Cochez ce qui s'applique à votre système.",
            points: [
                { texte: "L'agent lit des contenus que je ne maîtrise pas", aide: "pages web, courriels reçus, documents envoyés par des tiers" },
                { texte: "Il dispose d'outils capables d'envoyer ou de publier" },
                { texte: "Il peut supprimer ou modifier des données" },
                { texte: "Il accède à des informations confidentielles" },
                { texte: "Il agit sans validation humaine sur les actions irréversibles" },
                { texte: "Sa seule protection contre l'injection est une phrase dans la consigne", aide: "cela aide un peu, et se contourne" }
            ],
            verdict: (n) => {
                if (n === 0) return { texte: "Exposition faible. Reconsidérez à chaque nouvel outil ajouté.", ton: "bon" };
                if (n <= 2) return { texte: "Exposition limitée. Le cloisonnement lecture / écriture reste la précaution clé.", ton: "moyen" };
                return { texte: "Un texte placé dans un contenu lu par l'agent pourrait déclencher des actions non voulues.", ton: "alerte" };
            },
            lecon: "On ne referme pas l'injection de consigne. On réduit ce qu'elle permet d'obtenir."
        },

        "entrainer-ou-recuperer": {
            type: "controle",
            titre: "Faut-il entraîner, ou récupérer ?",
            intro: "Cochez les situations qui relèvent de la RÉCUPÉRATION plutôt que de l'entraînement.",
            points: [
                { texte: "Le modèle ignore nos procédures internes", aide: "récupération : mettez le document sous ses yeux" },
                { texte: "Le modèle ignore nos tarifs, qui changent chaque mois", aide: "récupération : des poids figés vieilliraient aussitôt" },
                { texte: "Les réponses ne respectent pas notre charte de ton", aide: "entraînement possible — après avoir essayé la consigne et des exemples" },
                { texte: "Le modèle ne connaît pas les événements récents", aide: "récupération" },
                { texte: "Le format de sortie doit suivre une structure très particulière", aide: "entraînement possible, en dernier recours" },
                { texte: "Le modèle doit citer ses sources", aide: "récupération : un modèle affiné ne peut pas citer ce qu'il a dilué" }
            ],
            verdict: (n) => {
                if (n === 4) return { texte: "Quatre situations relèvent de la récupération. Les deux autres, d'une question de forme.", ton: "bon" };
                if (n > 4) return { texte: "Plus de quatre : deux de ces situations concernent la forme, pas la connaissance.", ton: "alerte" };
                return { texte: "Quatre de ces six situations relèvent de la récupération.", ton: "moyen" };
            },
            lecon: "« Le modèle ne sait pas » appelle la récupération. « Le modèle répond mal » appelle d'abord la consigne."
        },

        // ================= DATA & ANALYTICS =================

        // ---------- Niveau débutant ----------

        "qualite-kpi": {
            type: "controle",
            titre: "Votre indicateur est-il utile ?",
            intro: "Prenez un indicateur que vous suivez, et cochez ce qui est vrai.",
            points: [
                { texte: "Je sais quoi faire différemment s'il double demain", aide: "le test décisif : sinon, il occupe de la place pour rien" },
                { texte: "Il a un point de comparaison : période précédente, objectif ou groupe témoin" },
                { texte: "Sa définition est écrite et n'a pas changé depuis six mois" },
                { texte: "Sa fréquence de suivi correspond à sa vitesse d'évolution" },
                { texte: "Il est accompagné de son effectif, pas seulement d'un pourcentage" },
                { texte: "Quelqu'un est nommément responsable de le regarder" }
            ],
            verdict: (n, total) => {
                if (n === total) return { texte: "Indicateur solide : il peut réellement déclencher une décision.", ton: "bon" };
                if (n >= 4) return { texte: "Bonne base. La définition écrite est le point qui manque le plus souvent.", ton: "moyen" };
                return { texte: "Cet indicateur donne surtout l'illusion du pilotage.", ton: "alerte" };
            },
            lecon: "Si personne ne change rien quand un chiffre bouge, ce chiffre n'est pas un indicateur : c'est une décoration."
        },

        "qualite-collecte": {
            type: "controle",
            titre: "Vos données disent-elles ce que vous croyez ?",
            intro: "Cochez ce qui est vrai de la façon dont ces données ont été recueillies.",
            points: [
                { texte: "Je sais qui a été mesuré, et qui ne l'a pas été", aide: "les absents faussent plus que les présents" },
                { texte: "La collecte est automatique, ou le questionnaire est identique pour tous" },
                { texte: "Les personnes mesurées ne savaient pas qu'on cherchait ce résultat", aide: "sinon leur comportement change" },
                { texte: "La période couverte est représentative", aide: "pas seulement les soldes, ou un mois avec deux jours fériés" },
                { texte: "Je connais le taux de réponse ou de couverture" },
                { texte: "Les définitions n'ont pas changé pendant la période" }
            ],
            verdict: (n, total) => {
                if (n === total) return { texte: "Collecte saine : les chiffres portent bien sur ce que vous croyez.", ton: "bon" };
                if (n >= 4) return { texte: "Acceptable. Notez les réserves à côté du résultat plutôt que de les oublier.", ton: "moyen" };
                return { texte: "Les données décrivent peut-être une population différente de celle visée.", ton: "alerte" };
            },
            lecon: "Aucun traitement statistique ne rattrape une collecte biaisée. Il la rend seulement plus présentable."
        },

        "choisir-son-graphique": {
            type: "controle",
            titre: "Le bon graphique pour la bonne question",
            intro: "Cochez les associations exactes. Quatre le sont.",
            points: [
                { texte: "Comparer des catégories → barres", aide: "exact" },
                { texte: "Suivre une évolution dans le temps → courbe", aide: "exact" },
                { texte: "Montrer une répartition en parts d'un tout → camembert, si peu de parts", aide: "exact, au-delà de cinq parts il devient illisible" },
                { texte: "Comparer des catégories → camembert", aide: "faux : l'œil compare mal des angles" },
                { texte: "Montrer une relation entre deux variables → nuage de points", aide: "exact" },
                { texte: "Faire paraître une hausse plus forte → tronquer l'axe vertical", aide: "faux : c'est la manipulation la plus répandue" }
            ],
            verdict: (n) => {
                if (n === 4) return { texte: "Quatre associations sont exactes. Vérifiez avec les indications que ce sont les vôtres.", ton: "bon" };
                if (n > 4) return { texte: "Plus de quatre : deux de ces propositions sont fausses.", ton: "alerte" };
                return { texte: "Quatre de ces six associations sont exactes.", ton: "moyen" };
            },
            lecon: "Un axe vertical qui ne part pas de zéro n'est pas toujours malhonnête — mais il doit toujours être signalé."
        },

        "effet-valeur-extreme": {
            titre: "Voyez une valeur extrême déformer la moyenne",
            intro: "C'est la raison pour laquelle la médiane existe.",
            champs: [
                { id: "nombre", libelle: "Nombre de valeurs ordinaires", unite: "val.", defaut: 19, min: 2, max: 1000, pas: 1 },
                { id: "typique", libelle: "Valeur ordinaire", unite: "€", defaut: 80, min: 0, max: 100000, pas: 5 },
                { id: "extreme", libelle: "Valeur extrême ajoutée", unite: "€", defaut: 40000, min: 0, max: 10000000, pas: 100 }
            ],
            calculer: ({ nombre, typique, extreme }) => {
                const sansExtreme = typique;
                const avecExtreme = (nombre * typique + extreme) / (nombre + 1);
                // Toutes les valeurs ordinaires etant identiques, la mediane du
                // groupe complet reste la valeur ordinaire des lors que n >= 2.
                return [
                    { libelle: "Moyenne sans la valeur extrême", valeur: euros(sansExtreme) },
                    { libelle: "Moyenne avec la valeur extrême", valeur: euros(avecExtreme), fort: true },
                    { libelle: "Médiane (inchangée)", valeur: euros(typique) }
                ];
            },
            lecon: "La médiane ne bouge pas d'un centime. C'est pourquoi on la préfère dès qu'il existe des valeurs extrêmes — salaires, paniers, temps de réponse."
        },

        // ---------- Niveau intermédiaire ----------

        "impact-du-nettoyage": {
            titre: "Combien de lignes restera-t-il ?",
            intro: "Le chiffre à retenir n'est pas la taille du fichier, c'est la taille de ce qui est exploitable.",
            champs: [
                { id: "lignes", libelle: "Lignes dans le fichier", unite: "lignes", defaut: 50000, min: 10, max: 10000000, pas: 1000 },
                { id: "doublons", libelle: "Part de doublons", unite: "%", defaut: 8, min: 0, max: 90, pas: 1 },
                { id: "manquantes", libelle: "Part des lignes restantes avec une valeur manquante essentielle", unite: "%", defaut: 12, min: 0, max: 90, pas: 1 }
            ],
            calculer: ({ lignes, doublons, manquantes }) => {
                const apresDoublons = lignes * (1 - doublons / 100);
                const exploitables = apresDoublons * (1 - manquantes / 100);
                return [
                    { libelle: "Après suppression des doublons", valeur: nf(Math.round(apresDoublons)) + " lignes" },
                    { libelle: "Lignes réellement exploitables", valeur: nf(Math.round(exploitables)) + " lignes", fort: true },
                    { libelle: "Part du fichier de départ", valeur: pourcent(exploitables / lignes * 100, 0) }
                ];
            },
            lecon: "Le problème n'est jamais d'avoir perdu des lignes. C'est de présenter un résultat en laissant croire qu'il porte sur le fichier entier."
        },

        "taille-des-segments": {
            titre: "Vos segments sont-ils assez fournis ?",
            intro: "Découper indéfiniment finit par produire du bruit qu'on prend pour du signal.",
            champs: [
                { id: "population", libelle: "Population totale", unite: "obs.", defaut: 5000, min: 10, max: 10000000, pas: 100 },
                { id: "criteres", libelle: "Nombre de critères croisés", unite: "critères", defaut: 2, min: 1, max: 6, pas: 1 },
                { id: "modalites", libelle: "Valeurs possibles par critère", unite: "valeurs", defaut: 4, min: 2, max: 20, pas: 1 }
            ],
            calculer: ({ population, criteres, modalites }) => {
                const segments = Math.pow(modalites, criteres);
                const taille = population / segments;
                const bougeDe = taille >= 1 ? 100 / taille : 100;
                return [
                    { libelle: "Segments produits", valeur: nf(Math.round(segments)) },
                    { libelle: "Observations par segment en moyenne", valeur: nf(Math.round(taille)), fort: true },
                    { libelle: "Une seule observation fait bouger le taux de", valeur: pourcent(bougeDe, 1) }
                ];
            },
            lecon: "Quand une observation déplace le pourcentage de plusieurs points, le segment ne mesure plus rien d'autre que lui-même."
        },

        "correlation-causalite": {
            type: "controle",
            titre: "Avant de conclure « A cause B »",
            intro: "Passez votre corrélation au crible : cochez ce que vous avez réellement vérifié.",
            points: [
                { texte: "J'ai envisagé que B cause A", aide: "le sens inverse est souvent aussi plausible" },
                { texte: "J'ai cherché une troisième variable qui causerait les deux", aide: "le cas le plus fréquent, et de loin" },
                { texte: "J'ai vérifié que A précède bien B dans le temps" },
                { texte: "L'effet persiste quand je segmente la population" },
                { texte: "Je n'ai pas comparé des dizaines d'indicateurs pour trouver celui-ci", aide: "sur cent comparaisons, certaines coïncident par hasard" },
                { texte: "Une expérimentation a été menée, ou est prévue", aide: "la seule méthode qui établisse vraiment la causalité" }
            ],
            verdict: (n, total) => {
                if (n === total) return { texte: "Hypothèse sérieusement instruite. Reste que seule l'expérimentation tranche.", ton: "bon" };
                if (n >= 3) return { texte: "Il manque des vérifications. La variable confondante est celle qu'on oublie le plus.", ton: "moyen" };
                return { texte: "À ce stade, vous avez une corrélation et une histoire plausible. Pas une cause.", ton: "alerte" };
            },
            lecon: "Le danger n'est pas la corrélation absurde, qui se repère. C'est celle à laquelle on peut donner une explication crédible."
        },

        "tableau-de-bord-utile": {
            type: "controle",
            titre: "Passez votre tableau de bord au crible",
            intro: "Cochez ce qui est vrai du tableau de bord que vous avez sous les yeux.",
            points: [
                { texte: "Chaque indicateur passe le test « si ce nombre doublait, que ferais-je ? »" },
                { texte: "Aucun chiffre n'est affiché sans point de comparaison" },
                { texte: "La date de dernière mise à jour est visible" },
                { texte: "Les effectifs accompagnent les pourcentages" },
                { texte: "Sur les mesures de qualité, une valeur extrême est affichée en plus de la moyenne", aide: "le neuvième décile en dit plus que la moyenne" },
                { texte: "Il tient sur un écran sans défilement" }
            ],
            verdict: (n, total) => {
                if (n === total) return { texte: "Tableau de bord exploitable : il sert à décider, pas à rassurer.", ton: "bon" };
                if (n >= 4) return { texte: "Bon niveau. La date de mise à jour est le manque le plus dangereux.", ton: "moyen" };
                return { texte: "Ce tableau sera consulté deux semaines, puis oublié.", ton: "alerte" };
            },
            lecon: "Un tableau de bord se juge au nombre de décisions qu'il a déclenchées, pas au nombre de graphiques."
        },

        // ---------- Niveau avancé ----------

        "marge-erreur": {
            titre: "Calculez la marge d'erreur",
            intro: "Elle dépend de la taille de l'échantillon, presque jamais de celle de la population.",
            champs: [
                { id: "taille", libelle: "Taille de l'échantillon", unite: "obs.", defaut: 400, min: 10, max: 1000000, pas: 50 },
                { id: "proportion", libelle: "Proportion mesurée", unite: "%", defaut: 50, min: 1, max: 99, pas: 1 }
            ],
            calculer: ({ taille, proportion }) => {
                const p = proportion / 100;
                // Intervalle de confiance a 95 % : 1,96 ecarts-types.
                const marge = 1.96 * Math.sqrt(p * (1 - p) / taille) * 100;
                const bas = Math.max(0, proportion - marge);
                const haut = Math.min(100, proportion + marge);
                // Pour diviser la marge par deux, il faut quadrupler l effectif.
                return [
                    { libelle: "Marge d'erreur (95 %)", valeur: "± " + pourcent(marge), fort: true },
                    { libelle: "La valeur réelle se situe entre", valeur: pourcent(bas) + " et " + pourcent(haut) },
                    { libelle: "Pour diviser cette marge par deux, il faudrait", valeur: nf(taille * 4) + " observations" }
                ];
            },
            lecon: "Deux chiffres dont les intervalles se chevauchent ne peuvent pas être déclarés différents."
        },

        "taille-test-ab": {
            titre: "Dimensionnez votre test A/B",
            intro: "À décider avant de lancer. Après, il est trop tard pour savoir si le test pouvait conclure.",
            champs: [
                { id: "base", libelle: "Taux de conversion actuel", unite: "%", defaut: 3, min: 0.1, max: 90, pas: 0.1 },
                { id: "effet", libelle: "Amélioration relative visée", unite: "%", defaut: 20, min: 1, max: 200, pas: 5 },
                { id: "trafic", libelle: "Visiteurs par jour, tous groupes confondus", unite: "vis./j", defaut: 1000, min: 10, max: 1000000, pas: 100 }
            ],
            calculer: ({ base, effet, trafic }) => {
                const p1 = base / 100;
                const p2 = p1 * (1 + effet / 100);
                const delta = p2 - p1;
                const moyenne = (p1 + p2) / 2;
                // Approximation usuelle : seuil 5 %, puissance 80 %.
                const parGroupe = delta > 0 ? Math.ceil(16 * moyenne * (1 - moyenne) / (delta * delta)) : 0;
                const jours = Math.ceil(parGroupe * 2 / trafic);
                return [
                    { libelle: "Visiteurs nécessaires par groupe", valeur: nf(parGroupe), fort: true },
                    { libelle: "Nouveau taux visé", valeur: pourcent(p2 * 100, 2) },
                    { libelle: "Durée du test à ce trafic", valeur: jours + " jour" + (jours > 1 ? "s" : "") + (jours > 13 ? ` (${nf(jours / 7, 1)} semaines)` : "") }
                ];
            },
            lecon: "Détecter un effet deux fois plus petit demande quatre fois plus de trafic. C'est ce qui rend les petits gains si coûteux à prouver."
        },

        "pieges-interpretation": {
            type: "controle",
            titre: "Identifiez le piège",
            intro: "Cochez les situations où une conclusion serait probablement fausse.",
            points: [
                { texte: "Le résultat global contredit ce qu'on observe dans chaque sous-groupe", aide: "paradoxe de Simpson : vérifiez la répartition" },
                { texte: "On analyse les clients actuels pour comprendre pourquoi les gens restent", aide: "biais du survivant : les partis ont la réponse" },
                { texte: "Une action a été prise après un mois exceptionnellement mauvais, et le mois suivant est meilleur", aide: "régression vers la moyenne : cela arrive sans intervention" },
                { texte: "Les groupes comparés ont des compositions très différentes" },
                { texte: "L'écart observé est inférieur à la marge d'erreur" },
                { texte: "On a testé cinquante hypothèses et retenu celle qui ressortait", aide: "sur cinquante, certaines ressortent par hasard" }
            ],
            verdict: (n, total) => {
                if (n === total) return { texte: "Les six situations sont effectivement piégeuses. Vous les reconnaissez toutes.", ton: "bon" };
                if (n >= 3) return { texte: "Bonne vigilance. Les six sont en réalité des pièges classiques.", ton: "moyen" };
                return { texte: "Ces six situations conduisent toutes à des conclusions fausses à partir de données exactes.", ton: "alerte" };
            },
            lecon: "Aucun de ces pièges ne suppose une erreur de calcul. Les données sont justes ; c'est la lecture qui trompe."
        },

        "sante-chaine-donnees": {
            type: "controle",
            titre: "Auditez votre chaîne de données",
            intro: "Cochez ce qui est en place aujourd'hui.",
            points: [
                { texte: "La date de dernière mise à jour est affichée à côté des chiffres", aide: "la protection la moins coûteuse contre la panne silencieuse" },
                { texte: "Une alerte se déclenche si le volume reçu s'écarte de l'habitude" },
                { texte: "Un traitement en échec produit une alerte, pas un silence" },
                { texte: "Les définitions des indicateurs sont écrites et partagées" },
                { texte: "Deux tableaux de bord différents donnent le même chiffre pour la même notion" },
                { texte: "Je peux remonter d'un chiffre affiché jusqu'à sa source" }
            ],
            verdict: (n, total) => {
                if (n === total) return { texte: "Chaîne surveillée : une anomalie sera vue avant qu'une décision soit prise dessus.", ton: "bon" };
                if (n >= 4) return { texte: "Correct. L'alerte sur le volume est le contrôle au meilleur rapport effort-utilité.", ton: "moyen" };
                return { texte: "Un incident en amont produirait aujourd'hui un tableau de bord faux et crédible.", ton: "alerte" };
            },
            lecon: "Une donnée figée depuis trois jours est plus dangereuse qu'une donnée absente : personne ne remarque qu'elle ne bouge plus."
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
