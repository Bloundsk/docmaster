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

    // Une duree en minutes s affiche en heures et minutes : « 247 » ne parle
    // pas, « 4 h 08 min » si. Les minutes sont completees a deux chiffres des
    // qu il y a des heures, faute de quoi « 4 h 8 min » se lit mal.
    // Un nombre saisi au demi : « 10,5 » garde sa decimale, « 10,0 » la perd.
    const souple = (n) => nf(n, Number.isInteger(n) ? 0 : 1);

    const heuresMinutes = (minutes) => {
        const total = Math.round(minutes);
        const h = Math.floor(total / 60);
        const m = total % 60;
        if (h === 0) return nf(m) + " min";
        if (m === 0) return nf(h) + " h";
        return nf(h) + " h " + String(m).padStart(2, "0") + " min";
    };

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

    // --- Memoire et apprentissage -----------------------------------------
    //
    // Les constantes qui suivent viennent de travaux publies. Elles sont
    // regroupees ici plutot que dispersees dans les simulateurs : une valeur
    // ecrite en clair a un seul endroit se verifie, une valeur recopiee dans
    // trois formules diverge tot ou tard.

    // Oubli sans revision. La decroissance suit une loi de puissance et non une
    // exponentielle : elle est brutale les premiers jours puis s aplatit. Une
    // exponentielle ferait tomber la retention a zero en une semaine, ce que
    // personne n observe.
    const PENTE_OUBLI = 0.75;
    const retenu = (jours) => 100 * Math.pow(1 + Math.max(0, jours), -PENTE_OUBLI);

    // Intervalles d espacement usuels, en jours. Chaque revision reussie
    // repousse la suivante d environ trois fois plus loin.
    const INTERVALLES = [1, 3, 7, 21, 60, 180];

    // Roediger & Karpicke (2006) : a une semaine, pour un temps de travail
    // identique, la relecture laisse environ 40 % du materiel et le rappel
    // actif environ 61 %.
    const RELECTURE = 40;
    const RAPPEL = 61;

    // Rohrer & Taylor : au test differe, la pratique groupee par type donne
    // environ 20 % de reussite, la pratique entrelacee environ 63 %.
    const BLOC = 20;
    const ENTRELACE = 63;

    // Couverture d un texte selon le nombre de mots connus. Ajustement
    // logarithmique sur les reperes usuels des etudes de frequence lexicale :
    // 1 000 mots couvrent environ 80 % d un texte courant, 2 000 environ 85 %,
    // 5 000 environ 92 %, 10 000 environ 98 %. Plafonne a 99 : les noms
    // propres et les termes rares ne disparaissent jamais completement.
    const couvertureLexicale = (mots) =>
        Math.min(99, 26.84 + 7.696 * Math.log(Math.max(1, mots)));

    // --- Delais juridiques ------------------------------------------------
    //
    // Droit francais. Seuls figurent ici des delais inscrits dans la loi et
    // stables depuis des annees. Tout ce qui est revise chaque annee — seuils
    // de la micro-entreprise, plafonds de l aide juridictionnelle, SMIC — est
    // volontairement absent : un chiffre perime dans un guide juridique est
    // pire qu une absence de chiffre.

    const JOURS_RETRACTATION = 14;      // vente a distance, art. L221-18 conso
    const MOIS_CONFORMITE = 24;         // garantie legale, art. L217-3 conso
    const JOURS_PAR_MOIS = 30.44;       // moyenne, pour convertir sans calendrier

    // Restitution du depot de garantie, loi n° 89-462 art. 22 : un mois si
    // l etat des lieux de sortie est conforme a celui d entree, deux sinon.
    // Passe ce delai, la somme due est majoree de 10 % du loyer mensuel hors
    // charges par mois de retard commence.
    const MAJORATION_DEPOT = 10;

    // Delai de prevenance en periode d essai, art. L1221-25 code du travail.
    // Il est a la charge de l employeur et croit avec l anciennete.
    function delaiDePrevenance(joursPresence) {
        if (joursPresence < 8) return "24 heures";
        if (joursPresence < 31) return "48 heures";
        if (joursPresence < 91) return "2 semaines";
        return "1 mois";
    }

    // --- Sante au travail -------------------------------------------------
    //
    // Meme prudence que pour le droit : seules figurent ici des references
    // stables et publiques. Rien de ce qui suit ne permet d evaluer l etat de
    // sante de qui que ce soit — ce sont des reperes, pas des mesures.

    // Recommandation de l Organisation mondiale de la sante pour un adulte :
    // 150 a 300 minutes d activite d intensite moderee par semaine.
    const ACTIVITE_OMS = 150;

    // Repos minimaux, code du travail. Stables et opposables :
    // 11 heures consecutives entre deux journees (art. L3131-1),
    // 35 heures consecutives par semaine (art. L3132-2),
    // 20 minutes de pause au-dela de 6 heures de travail (art. L3121-16).
    const REPOS_QUOTIDIEN = 11;
    const REPOS_HEBDOMADAIRE = 35;
    const PAUSE_LEGALE = 20;
    const SEUIL_PAUSE = 6;

    // Modele de Karasek, utilise en sante au travail depuis les annees 1980.
    // Il croise l exigence du poste et la latitude laissee pour y repondre ;
    // le soutien social, ajoute ensuite, en module l effet. La combinaison
    // « forte demande, faible latitude » est celle associee au risque le plus
    // eleve — d autant plus si le soutien manque.
    function quadrantKarasek(demande, latitude) {
        if (demande >= 5 && latitude >= 5) return "actif";
        if (demande >= 5) return "tendu";
        if (latitude >= 5) return "détendu";
        return "passif";
    }

    // --- Empreinte du numerique -------------------------------------------
    //
    // Domaine ou circulent des chiffres massivement faux — « un mail = 10 g »,
    // « une heure de streaming = 3,2 kg » — repris pendant des annees avant
    // d etre corriges d un facteur dix. La regle suivie ici : ne calculer que
    // ce qui se calcule, et laisser en entree ce qui est incertain.
    //
    // Ce qui est solide : la consommation d un appareil (watts x heures) et
    // l intensite carbone de l electricite. Ce qui l est beaucoup moins :
    // l energie par gigaoctet transfere, qui varie d un facteur dix selon les
    // etudes et diminue vite. Elle est donc un champ, jamais une constante
    // cachee dans une formule.

    // Electricite francaise, ordre de grandeur. Tres bas comparativement,
    // grace au nucleaire et a l hydraulique : le meme calcul en Pologne ou en
    // Allemagne donnerait cinq a dix fois plus.
    const G_PAR_KWH_FR = 60;

    // Facteurs d emission par passager et par kilometre, ordres de grandeur
    // issus des bases publiques. Le train francais est bas pour la meme
    // raison que l electricite.
    const G_PAR_KM = { train: 3, voiture: 120, avion: 230 };

    // Un appareil ne coute pas que son electricite : sa fabrication est
    // amortie sur sa duree de vie. C est le poste dominant pour un terminal,
    // et c est ce que la plupart des raisonnements oublient.
    const annualiser = (fabrication, annees) => fabrication / Math.max(0.25, annees);

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
        },

        // ================= DESIGN UX/UI =================

        // ---------- Niveau débutant ----------

        "ux-ou-ui": {
            type: "controle",
            titre: "UX ou UI ?",
            intro: "Cochez les décisions qui relèvent de l'UX plutôt que de l'UI. Quatre le sont.",
            points: [
                { texte: "Décider de l'ordre des étapes d'une inscription", aide: "UX : c'est le parcours" },
                { texte: "Choisir la couleur du bouton principal", aide: "UI : c'est l'apparence" },
                { texte: "Déterminer quelles informations demander, et lesquelles supprimer", aide: "UX" },
                { texte: "Définir l'échelle typographique", aide: "UI" },
                { texte: "Comprendre pourquoi les gens abandonnent au paiement", aide: "UX" },
                { texte: "Décider qu'une erreur s'affiche sous le champ concerné plutôt qu'en haut", aide: "UX : cela change la capacité à corriger" }
            ],
            verdict: (n) => {
                if (n === 4) return { texte: "Quatre décisions relèvent de l'UX. Vérifiez avec les indications que ce sont les vôtres.", ton: "bon" };
                if (n > 4) return { texte: "Plus de quatre : deux de ces décisions portent sur l'apparence, pas sur le parcours.", ton: "alerte" };
                return { texte: "Quatre de ces six décisions relèvent de l'UX.", ton: "moyen" };
            },
            lecon: "L'UI se voit, l'UX se vit. Une interface superbe sur un parcours absurde reste inutilisable."
        },

        "qualite-wireframe": {
            type: "controle",
            titre: "Votre wireframe est-il utile ?",
            intro: "Cochez ce qui est vrai de la maquette fil de fer que vous avez sous les yeux.",
            points: [
                { texte: "Il est en niveaux de gris, sans couleur ni image finale", aide: "sinon la discussion glisse vers l'esthétique" },
                { texte: "Le contenu est réaliste, pas du faux texte", aide: "un titre réel fait trois lignes, le faux texte en fait une" },
                { texte: "La hiérarchie des éléments est visible sans explication" },
                { texte: "Les états vides, en cours de chargement et en erreur sont prévus" },
                { texte: "Il montre un parcours, pas un écran isolé" },
                { texte: "Il est assez grossier pour qu'on ose le critiquer", aide: "trop léché, il paraît définitif et n'est plus discuté" }
            ],
            verdict: (n, total) => {
                if (n === total) return { texte: "Wireframe efficace : il fait parler de structure, pas de couleurs.", ton: "bon" };
                if (n >= 4) return { texte: "Bonne base. Les états d'erreur et de chargement sont les grands oubliés.", ton: "moyen" };
                return { texte: "Cette maquette va produire des retours sur l'apparence, pas sur le fond.", ton: "alerte" };
            },
            lecon: "Un wireframe trop soigné ne reçoit plus de critiques de structure : il paraît déjà décidé."
        },

        "hierarchie-visuelle": {
            type: "controle",
            titre: "Testez votre hiérarchie visuelle",
            intro: "Plissez les yeux devant votre écran jusqu'à le voir flou, puis cochez.",
            points: [
                { texte: "Je distingue encore l'élément le plus important" },
                { texte: "L'action principale se repère sans lire" },
                { texte: "Les zones se détachent les unes des autres" },
                { texte: "Rien ne rivalise avec l'élément principal", aide: "deux éléments également saillants s'annulent" },
                { texte: "Le regard suit un ordre naturel du haut vers le bas" },
                { texte: "Les espaces séparent ce qui doit l'être et rapprochent ce qui va ensemble" }
            ],
            verdict: (n, total) => {
                if (n === total) return { texte: "Hiérarchie lisible : l'écran se comprend avant d'être lu.", ton: "bon" };
                if (n >= 4) return { texte: "Correct. Vérifiez surtout qu'un seul élément domine.", ton: "moyen" };
                return { texte: "L'écran demande d'être lu entièrement pour être compris.", ton: "alerte" };
            },
            lecon: "Si tout est mis en avant, plus rien ne l'est. Une hiérarchie suppose d'accepter que certaines choses passent au second plan."
        },

        "combien-de-testeurs": {
            titre: "Combien de testeurs faut-il ?",
            intro: "La réponse surprend : bien moins qu'on ne croit, et les premiers rapportent presque tout.",
            champs: [
                { id: "testeurs", libelle: "Nombre de participants", unite: "pers.", defaut: 5, min: 1, max: 40, pas: 1 },
                { id: "detection", libelle: "Part des problèmes qu'un participant révèle en moyenne", unite: "%", defaut: 31, min: 5, max: 60, pas: 1 }
            ],
            calculer: ({ testeurs, detection }) => {
                const l = detection / 100;
                const part = (1 - Math.pow(1 - l, testeurs)) * 100;
                const avecUnDeplus = (1 - Math.pow(1 - l, testeurs + 1)) * 100;
                return [
                    { libelle: "Problèmes détectés", valeur: pourcent(part, 0), fort: true },
                    { libelle: "Apport du participant suivant", valeur: "+ " + pourcent(avecUnDeplus - part, 1) },
                    { libelle: "Problèmes encore invisibles", valeur: pourcent(100 - part, 0) }
                ];
            },
            lecon: "Mieux vaut trois séries de cinq tests à trois moments du projet qu'une seule série de quinze à la fin."
        },

        // ---------- Niveau intermédiaire ----------

        "audit-accessibilite": {
            type: "controle",
            titre: "Audit d'accessibilité en dix minutes",
            intro: "Ces vérifications ne demandent aucun outil spécialisé.",
            points: [
                { texte: "Le contraste du texte atteint 4,5 pour 1 sur fond uni", aide: "3 pour 1 suffit pour les grands titres" },
                { texte: "Je peux parcourir tout le site au clavier seul, sans souris" },
                { texte: "L'élément actif au clavier est visible en permanence", aide: "ne jamais supprimer le contour de focus" },
                { texte: "Les images porteuses d'information ont une description" },
                { texte: "Les images décoratives sont marquées comme telles" },
                { texte: "Les boutons tactiles font au moins 44 pixels de côté" },
                { texte: "L'information n'est jamais portée par la couleur seule", aide: "un champ en erreur doit aussi porter un texte" }
            ],
            verdict: (n, total) => {
                if (n === total) return { texte: "Base solide : l'essentiel des obstacles courants est levé.", ton: "bon" };
                if (n >= 5) return { texte: "Bon niveau. Le parcours au clavier est le test le plus révélateur s'il manque.", ton: "moyen" };
                return { texte: "Plusieurs obstacles bloquants subsistent, y compris pour des usages ordinaires.", ton: "alerte" };
            },
            lecon: "Cinq minutes de navigation au clavier révèlent l'essentiel des problèmes, sans aucun outil."
        },

        "test-des-cartes": {
            type: "controle",
            titre: "Votre navigation tient-elle debout ?",
            intro: "Cochez ce qui est vrai du menu que vous avez sous les yeux.",
            points: [
                { texte: "Les entrées correspondent à des tâches, pas à l'organigramme" },
                { texte: "Un visiteur découvrant le site devinerait ce qu'il y a derrière chaque libellé" },
                { texte: "Aucun libellé n'utilise de vocabulaire interne à la maison" },
                { texte: "Il y a moins de huit entrées de premier niveau", aide: "au-delà, il faut regrouper" },
                { texte: "Deux entrées ne peuvent pas être confondues", aide: "« Espace client » et « Mon compte » sur le même site" },
                { texte: "L'organisation a été vérifiée auprès de personnes extérieures" }
            ],
            verdict: (n, total) => {
                if (n === total) return { texte: "Navigation construite du point de vue du visiteur. C'est rare.", ton: "bon" };
                if (n >= 4) return { texte: "Correct. Le test auprès d'extérieurs est celui qui révèle le plus.", ton: "moyen" };
                return { texte: "Cette navigation est probablement claire pour vous seul.", ton: "alerte" };
            },
            lecon: "Un menu construit sur l'organigramme est parfaitement logique de l'intérieur, et opaque de l'extérieur."
        },

        "cible-tactile": {
            titre: "Vos cibles tactiles sont-elles assez grandes ?",
            intro: "Un doigt couvre environ 9 millimètres. Les pixels CSS, eux, ne se voient pas.",
            champs: [
                { id: "taille", libelle: "Taille de la cible", unite: "px CSS", defaut: 32, min: 8, max: 200, pas: 2 },
                { id: "espacement", libelle: "Espacement avec la cible voisine", unite: "px CSS", defaut: 4, min: 0, max: 60, pas: 2 }
            ],
            calculer: ({ taille, espacement }) => {
                // 1 pixel CSS vaut 1/96 de pouce, soit environ 0,2646 mm.
                const mm = taille * 25.4 / 96;
                const zone = (taille + espacement) * 25.4 / 96;
                const verdict = taille >= 44 ? "conforme" : (taille >= 32 ? "limite" : "trop petite");
                return [
                    { libelle: "Taille réelle sur l'écran", valeur: nf(mm, 1) + " mm", fort: true },
                    { libelle: "Zone atteignable avec l'espacement", valeur: nf(zone, 1) + " mm" },
                    { libelle: "Recommandation (44 px, soit 11,6 mm)", valeur: verdict }
                ];
            },
            lecon: "Une cible trop petite ne produit pas une erreur du concepteur : elle produit un utilisateur qui croit s'être trompé."
        },

        "sante-systeme": {
            type: "controle",
            titre: "Votre système de design tient-il ?",
            intro: "Cochez ce qui est vrai aujourd'hui, pas ce qui était prévu.",
            points: [
                { texte: "Les espacements suivent une échelle définie, pas des valeurs libres" },
                { texte: "Il existe une seule façon d'afficher une erreur" },
                { texte: "Les couleurs sont nommées par leur rôle, pas par leur teinte", aide: "« couleur de danger » plutôt que « rouge »" },
                { texte: "La documentation décrit le produit réel, pas une version passée" },
                { texte: "Quelqu'un est responsable d'arbitrer les exceptions" },
                { texte: "Une exception acceptée est soit intégrée, soit corrigée", aide: "jamais laissée vivre à côté" }
            ],
            verdict: (n, total) => {
                if (n === total) return { texte: "Système vivant : il ferme réellement des questions.", ton: "bon" };
                if (n >= 4) return { texte: "Correct. L'absence de propriétaire est ce qui tue les systèmes en quelques mois.", ton: "moyen" };
                return { texte: "Ce système décrit probablement déjà un produit qui n'existe plus.", ton: "alerte" };
            },
            lecon: "Un système de design est un produit à part entière. Sans quelqu'un pour l'arbitrer, il ne survit pas."
        },

        // ---------- Niveau avancé ----------

        "budget-performance": {
            titre: "Calculez votre budget de performance",
            intro: "Le poids d'une page se traduit directement en secondes d'attente.",
            champs: [
                { id: "poids", libelle: "Poids total de la page", unite: "Ko", defaut: 2500, min: 50, max: 50000, pas: 100 },
                { id: "debit", libelle: "Débit de la connexion", unite: "Mb/s", defaut: 10, min: 0.5, max: 200, pas: 0.5 },
                { id: "latence", libelle: "Latence aller-retour", unite: "ms", defaut: 150, min: 5, max: 1000, pas: 10 }
            ],
            calculer: ({ poids, debit, latence }) => {
                // Un octet vaut 8 bits : 2 500 Ko font 20 000 Kb, soit 20 Mb.
                const secondes = (poids * 8 / 1000) / debit + latence / 1000;
                let seuil;
                if (secondes < 1) seuil = "sous la seconde : le fil de la pensée n'est pas rompu";
                else if (secondes < 3) seuil = "perceptible, mais acceptable";
                else if (secondes < 10) seuil = "un retour de progression devient nécessaire";
                else seuil = "au-delà de la limite d'attention : la plupart abandonnent";
                return [
                    { libelle: "Temps de chargement estimé", valeur: nf(secondes, 1) + " s", fort: true },
                    { libelle: "Poids à retirer pour passer sous 1 s", valeur: nf(Math.max(0, Math.round(poids - (1 - latence / 1000) * debit * 1000 / 8))) + " Ko" },
                    { libelle: "Perception", valeur: seuil }
                ];
            },
            lecon: "La liste des éléments à alléger est presque toujours dominée par les images non compressées."
        },

        "loi-de-hick": {
            titre: "Décider, ou chercher : deux coûts différents",
            intro: "La loi de Hick décrit le choix entre des options <strong>déjà connues</strong>. Trouver une option inconnue relève du balayage visuel, dont le coût est tout autre.",
            champs: [
                { id: "options", libelle: "Nombre d'options présentées", unite: "options", defaut: 20, min: 2, max: 100, pas: 1 },
                { id: "groupes", libelle: "Nombre de familles si vous les regroupez", unite: "familles", defaut: 4, min: 1, max: 20, pas: 1 }
            ],
            calculer: ({ options, groupes }) => {
                // Hick : T = a + b log2(n+1). Le terme constant represente le temps
                // qui n est pas de la decision ; une navigation en deux etapes le
                // paie donc deux fois, ce qui la desavantage sur de courtes listes.
                const hick = (n) => 0.2 + 0.15 * Math.log2(n + 1);
                const parFamille = Math.max(1, Math.round(options / groupes));
                const decisionPlate = hick(options);
                const decisionGroupee = hick(groupes) + hick(parFamille);

                // Balayage visuel d une liste inconnue : le cout est proche du
                // lineaire, environ un dixieme de seconde par element parcouru.
                const balayagePlat = 0.1 * options;
                const balayageGroupe = 0.1 * (groupes + parFamille);

                return [
                    { libelle: "Décider (Hick) — liste plate", valeur: nf(decisionPlate, 2) + " s" },
                    { libelle: `Décider (Hick) — ${groupes} familles`, valeur: nf(decisionGroupee, 2) + " s" },
                    { libelle: "Chercher — liste plate", valeur: nf(balayagePlat, 2) + " s" },
                    { libelle: `Chercher — ${groupes} familles`, valeur: nf(balayageGroupe, 2) + " s", fort: balayageGroupe < balayagePlat }
                ];
            },
            lecon: "Sur une option déjà connue, regrouper fait perdre un peu de temps. Sur une option qu'il faut trouver, le gain est considérable — et c'est le cas d'un visiteur qui découvre le site."
        },

        "schemas-sombres": {
            type: "controle",
            titre: "Repérez les schémas sombres",
            intro: "Cochez ce que présente l'interface que vous examinez.",
            points: [
                { texte: "« Tout accepter » est plus visible que le refus", aide: "non conforme : le refus doit être aussi facile" },
                { texte: "La résiliation est nettement plus longue que la souscription", aide: "non conforme au droit français" },
                { texte: "Des frais apparaissent seulement à la fin du tunnel" },
                { texte: "Le libellé du refus est rédigé pour être désagréable", aide: "« Non merci, je préfère payer plus cher »" },
                { texte: "Un compte à rebours ou une rareté sont affichés sans fondement" },
                { texte: "Une case est pré-cochée en faveur du site" }
            ],
            verdict: (n) => {
                if (n === 0) return { texte: "Aucun schéma repéré. Refaites le test après chaque évolution du tunnel.", ton: "bon" };
                if (n <= 2) return { texte: "Des pratiques à corriger, dont certaines exposent juridiquement.", ton: "moyen" };
                return { texte: "Faisceau de pratiques trompeuses : plusieurs sont sanctionnées en droit européen.", ton: "alerte" };
            },
            lecon: "Le test qui tranche : si l'utilisateur découvrait ce mécanisme, se sentirait-il floué ? L'intention ne change rien."
        },

        "gain-de-temps-utilisateur": {
            titre: "Chiffrez votre amélioration en heures",
            intro: "L'argument esthétique se discute. Le calcul beaucoup moins.",
            champs: [
                { id: "secondes", libelle: "Secondes gagnées par tâche", unite: "s", defaut: 5, min: 0.5, max: 600, pas: 0.5 },
                { id: "frequence", libelle: "Fois par jour et par personne", unite: "fois", defaut: 3, min: 0.1, max: 200, pas: 0.5 },
                { id: "personnes", libelle: "Personnes concernées", unite: "pers.", defaut: 200, min: 1, max: 1000000, pas: 10 },
                { id: "jours", libelle: "Jours d'usage par an", unite: "jours", defaut: 220, min: 1, max: 365, pas: 5 }
            ],
            calculer: ({ secondes, frequence, personnes, jours }) => {
                const total = secondes * frequence * personnes * jours;
                const heures = total / 3600;
                return [
                    { libelle: "Temps gagné par an", valeur: nf(heures, 0) + " heures", fort: true },
                    { libelle: "Soit en journées de travail", valeur: nf(heures / 7, 0) + " jours" },
                    { libelle: "Par personne et par an", valeur: nf(total / personnes / 60, 0) + " minutes" }
                ];
            },
            lecon: "Cinq secondes ne se défendent pas en réunion. Cent quatre-vingts heures par an, si."
        },

        // ================= ENTREPRENEURIAT =================

        // ---------- Niveau débutant ----------

        "qualite-business-plan": {
            type: "controle",
            titre: "Votre business plan tient-il debout ?",
            intro: "Cochez ce qui figure réellement dans votre document, pas ce que vous avez en tête.",
            points: [
                { texte: "Le problème résolu est décrit avant la solution" },
                { texte: "Les clients visés sont nommés précisément", aide: "« les PME » n'est pas une cible, c'est une catégorie" },
                { texte: "Les hypothèses chiffrées sont justifiées, pas posées", aide: "d'où vient le taux de conversion retenu ?" },
                { texte: "La rémunération du fondateur figure dans les charges" },
                { texte: "Un scénario dégradé est prévu, pas seulement le scénario prévu" },
                { texte: "Le besoin de trésorerie du démarrage est calculé, pas estimé" }
            ],
            verdict: (n, total) => {
                if (n === total) return { texte: "Document solide : il servira à décider, pas seulement à convaincre.", ton: "bon" };
                if (n >= 4) return { texte: "Bonne base. Le scénario dégradé et la rémunération sont les oublis les plus fréquents.", ton: "moyen" };
                return { texte: "Ce plan décrit une intention, pas encore un projet vérifiable.", ton: "alerte" };
            },
            lecon: "Un business plan sert d'abord à vous : c'est l'exercice qui révèle les hypothèses que vous n'aviez pas vues."
        },

        "taille-de-marche": {
            titre: "Estimez votre marché de façon honnête",
            intro: "Trois cercles concentriques, du plus large au plus atteignable.",
            champs: [
                { id: "total", libelle: "Clients potentiels au total", unite: "clients", defaut: 200000, min: 10, max: 100000000, pas: 1000 },
                { id: "accessible", libelle: "Part réellement accessible (zone, langue, segment)", unite: "%", defaut: 8, min: 0.1, max: 100, pas: 0.5 },
                { id: "part", libelle: "Part de marché visée à 3 ans", unite: "%", defaut: 3, min: 0.1, max: 100, pas: 0.5 },
                { id: "panier", libelle: "Chiffre d'affaires annuel par client", unite: "€", defaut: 590, min: 1, max: 1000000, pas: 10 }
            ],
            calculer: ({ total, accessible, part, panier }) => {
                const marcheAccessible = total * accessible / 100;
                const clients = marcheAccessible * part / 100;
                return [
                    { libelle: "Marché accessible", valeur: nf(Math.round(marcheAccessible)) + " clients" },
                    { libelle: "Clients visés à 3 ans", valeur: nf(Math.round(clients)), fort: true },
                    { libelle: "Chiffre d'affaires correspondant", valeur: euros(clients * panier) + " par an" }
                ];
            },
            lecon: "Si le résultat paraît trop beau, c'est la part accessible qui est optimiste — presque jamais le panier."
        },

        "choisir-statut": {
            type: "controle",
            titre: "Quel statut vous correspond ?",
            intro: "Cochez ce qui décrit votre situation. Les réponses orientent, elles ne décident pas.",
            points: [
                { texte: "Je démarre seul, sans investissement initial important" },
                { texte: "Mon chiffre d'affaires restera sous les seuils de la micro-entreprise" },
                { texte: "Je n'ai pas besoin de déduire de charges importantes", aide: "en micro, l'abattement est forfaitaire" },
                { texte: "Je souhaite protéger mon patrimoine personnel" },
                { texte: "J'envisage d'accueillir des associés ou des investisseurs" },
                { texte: "Je vais recruter dans les douze mois" }
            ],
            verdict: (n) => {
                if (n <= 2) return { texte: "Situation à préciser : listez vos charges prévisionnelles avant de trancher.", ton: "moyen" };
                if (n === 3) return { texte: "Profil orienté micro-entreprise. Vérifiez les seuils et l'absence de charges lourdes.", ton: "bon" };
                return { texte: "Les trois derniers points orientent vers une société. Faites-vous accompagner.", ton: "moyen" };
            },
            lecon: "Le statut se change, mais rarement sans coût. Mieux vaut anticiper douze mois que reprendre dans six."
        },

        "besoin-de-financement": {
            titre: "Chiffrez votre besoin de démarrage",
            intro: "Le poste le plus souvent oublié n'est pas l'investissement : c'est la trésorerie d'attente.",
            champs: [
                { id: "investissement", libelle: "Matériel, aménagement, développement", unite: "€", defaut: 12000, min: 0, max: 5000000, pas: 500 },
                { id: "chargesMensuelles", libelle: "Charges mensuelles hors investissement", unite: "€", defaut: 3200, min: 0, max: 500000, pas: 100 },
                { id: "moisAvantRevenu", libelle: "Mois avant les premiers encaissements", unite: "mois", defaut: 6, min: 1, max: 48, pas: 1 },
                { id: "apport", libelle: "Apport personnel disponible", unite: "€", defaut: 15000, min: 0, max: 5000000, pas: 500 }
            ],
            calculer: ({ investissement, chargesMensuelles, moisAvantRevenu, apport }) => {
                const tresorerie = chargesMensuelles * moisAvantRevenu;
                const besoin = investissement + tresorerie;
                const aTrouver = Math.max(0, besoin - apport);
                return [
                    { libelle: "Trésorerie d'attente nécessaire", valeur: euros(tresorerie) },
                    { libelle: "Besoin total de démarrage", valeur: euros(besoin), fort: true },
                    { libelle: "Reste à financer après apport", valeur: euros(aTrouver) }
                ];
            },
            lecon: "Un plan qui ne finance que l'investissement conduit à manquer d'argent au troisième mois, alors que tout se passe bien."
        },

        // ---------- Niveau intermédiaire ----------

        "test-de-validation": {
            type: "controle",
            titre: "Votre besoin est-il vraiment validé ?",
            intro: "Cochez ce que vous avez constaté, pas ce qu'on vous a dit.",
            points: [
                { texte: "J'ai interrogé des inconnus, pas seulement mes proches" },
                { texte: "Mes questions portaient sur le passé, pas sur des intentions", aide: "« la dernière fois que... » et non « utiliseriez-vous... »" },
                { texte: "Des personnes ont déjà bricolé une solution de leur côté", aide: "signal fort : le problème est assez douloureux" },
                { texte: "Certaines ont déjà dépensé de l'argent pour ce problème" },
                { texte: "On m'a demandé spontanément quand ce serait disponible" },
                { texte: "Au moins une personne a proposé de payer maintenant", aide: "cela vaut cinquante entretiens polis" }
            ],
            verdict: (n, total) => {
                if (n >= 5) return { texte: "Besoin réel, confirmé par des comportements et non par des paroles.", ton: "bon" };
                if (n >= 3) return { texte: "Signaux encourageants. Cherchez maintenant une preuve de paiement.", ton: "moyen" };
                return { texte: "Vous avez de l'encouragement, pas encore de validation.", ton: "alerte" };
            },
            lecon: "Un compliment poli ne vaut rien. Un « je peux payer maintenant ? » vaut cinquante entretiens."
        },

        "marge-et-prix": {
            titre: "Calculez votre marge et votre équilibre",
            intro: "Le nombre de clients à atteindre se calcule sur la marge, jamais sur le prix affiché.",
            champs: [
                { id: "prix", libelle: "Prix de vente mensuel", unite: "€", defaut: 49, min: 1, max: 100000, pas: 1 },
                { id: "variable", libelle: "Coût variable par client", unite: "€", defaut: 11, min: 0, max: 100000, pas: 1 },
                { id: "fixes", libelle: "Charges fixes mensuelles, rémunération comprise", unite: "€", defaut: 4000, min: 0, max: 1000000, pas: 100 }
            ],
            calculer: ({ prix, variable, fixes }) => {
                const marge = prix - variable;
                const taux = prix > 0 ? marge / prix * 100 : 0;
                const clients = marge > 0 ? Math.ceil(fixes / marge) : 0;
                const naif = prix > 0 ? Math.ceil(fixes / prix) : 0;
                return [
                    { libelle: "Marge unitaire", valeur: euros(marge) + " (" + pourcent(taux, 0) + ")" },
                    { libelle: "Clients pour atteindre l'équilibre", valeur: marge > 0 ? nf(clients) : "jamais", fort: true },
                    { libelle: "Le calcul sur le prix affiché donnerait", valeur: nf(naif) + " — c'est faux" }
                ];
            },
            lecon: "Une vente sans marge n'est pas un client gagné : c'est une perte qui grandit avec le volume."
        },

        "cout-acquisition": {
            titre: "Combien vous coûte un client ?",
            intro: "Le chiffre n'a de sens que comparé à ce que le client rapporte.",
            champs: [
                { id: "budget", libelle: "Budget d'acquisition mensuel", unite: "€", defaut: 800, min: 0, max: 1000000, pas: 50 },
                { id: "visiteurs", libelle: "Visiteurs générés", unite: "vis.", defaut: 1600, min: 1, max: 10000000, pas: 100 },
                { id: "conversion", libelle: "Taux de conversion en client", unite: "%", defaut: 1.5, min: 0.01, max: 100, pas: 0.1 },
                { id: "marge", libelle: "Marge mensuelle par client", unite: "€", defaut: 38, min: 0, max: 100000, pas: 1 }
            ],
            calculer: ({ budget, visiteurs, conversion, marge }) => {
                const clients = visiteurs * conversion / 100;
                const cout = clients > 0 ? budget / clients : 0;
                const mois = marge > 0 ? cout / marge : 0;
                return [
                    { libelle: "Clients gagnés par mois", valeur: nf(Math.round(clients)) },
                    { libelle: "Coût d'acquisition par client", valeur: euros(cout), fort: true },
                    { libelle: "Mois avant remboursement", valeur: marge > 0 ? nf(mois, 1) + " mois" : "jamais" }
                ];
            },
            lecon: "Un coût d'acquisition n'est ni bon ni mauvais dans l'absolu. Il l'est par rapport à la marge et à la durée de vie."
        },

        "seuil-de-rentabilite": {
            titre: "Combien de mois d'autonomie ?",
            intro: "Le chiffre le plus important de tous : combien de temps il reste pour atteindre l'équilibre.",
            champs: [
                { id: "tresorerie", libelle: "Trésorerie disponible", unite: "€", defaut: 18000, min: 0, max: 10000000, pas: 500 },
                { id: "depenses", libelle: "Décaissements mensuels", unite: "€", defaut: 5200, min: 0, max: 1000000, pas: 100 },
                { id: "encaissements", libelle: "Encaissements mensuels", unite: "€", defaut: 3100, min: 0, max: 1000000, pas: 100 }
            ],
            calculer: ({ tresorerie, depenses, encaissements }) => {
                const perte = depenses - encaissements;
                const mois = perte > 0 ? tresorerie / perte : Infinity;
                return [
                    { libelle: perte > 0 ? "Perte de trésorerie mensuelle" : "Excédent mensuel", valeur: euros(Math.abs(perte)) },
                    { libelle: "Autonomie", valeur: perte > 0 ? nf(mois, 1) + " mois" : "à l'équilibre ou positif", fort: true },
                    { libelle: "Encaissements nécessaires pour l'équilibre", valeur: euros(depenses) + " par mois" }
                ];
            },
            lecon: "Surveillez votre autonomie en mois, pas votre chiffre d'affaires. C'est elle qui dit combien de temps il reste."
        },

        // ---------- Niveau avancé ----------

        "cac-ltv": {
            titre: "Vos unit economics tiennent-elles ?",
            intro: "La valeur vie se calcule sur la marge, jamais sur le chiffre d'affaires.",
            champs: [
                { id: "marge", libelle: "Marge mensuelle par client", unite: "€", defaut: 38, min: 0.1, max: 100000, pas: 1 },
                { id: "duree", libelle: "Durée de vie moyenne d'un client", unite: "mois", defaut: 14, min: 1, max: 240, pas: 1 },
                { id: "cac", libelle: "Coût d'acquisition d'un client", unite: "€", defaut: 145, min: 0, max: 1000000, pas: 5 }
            ],
            calculer: ({ marge, duree, cac }) => {
                const ltv = marge * duree;
                const ratio = cac > 0 ? ltv / cac : Infinity;
                const payback = marge > 0 ? cac / marge : 0;
                let verdict;
                if (ratio < 1) verdict = "chaque client fait perdre de l'argent";
                else if (ratio < 3) verdict = "fragile : peu de marge pour investir";
                else if (ratio <= 5) verdict = "sain";
                else verdict = "très élevé : vous n'investissez peut-être pas assez en acquisition";
                return [
                    { libelle: "Valeur vie du client", valeur: euros(ltv) },
                    { libelle: "Ratio valeur vie / coût d'acquisition", valeur: nf(ratio, 1) + " — " + verdict, fort: true },
                    { libelle: "Période de récupération", valeur: nf(payback, 1) + " mois" }
                ];
            },
            lecon: "Augmenter la durée de vie de 14 à 20 mois fait gagner 43 % de valeur vie, sans un euro d'acquisition en plus."
        },

        "dilution": {
            titre: "Mesurez votre dilution",
            intro: "Ce qu'on cède en capital ne se récupère pas.",
            champs: [
                { id: "montant", libelle: "Montant levé", unite: "€", defaut: 300000, min: 1000, max: 100000000, pas: 10000 },
                { id: "valorisation", libelle: "Valorisation avant opération", unite: "€", defaut: 1200000, min: 1000, max: 1000000000, pas: 50000 },
                { id: "part", libelle: "Votre part actuelle du capital", unite: "%", defaut: 100, min: 1, max: 100, pas: 1 },
                { id: "tours", libelle: "Tours de table supplémentaires envisagés", unite: "tours", defaut: 2, min: 0, max: 8, pas: 1 }
            ],
            calculer: ({ montant, valorisation, part, tours }) => {
                const apres = valorisation + montant;
                const cede = montant / apres;
                const partApres = part * (1 - cede);
                // Les tours suivants sont supposes diluer dans les memes proportions.
                const partFinale = partApres * Math.pow(1 - cede, tours);
                return [
                    { libelle: "Part cédée à l'investisseur", valeur: pourcent(cede * 100, 1) },
                    { libelle: "Votre part après cette levée", valeur: pourcent(partApres, 1), fort: true },
                    { libelle: `Après ${tours} tour(s) comparable(s)`, valeur: pourcent(partFinale, 1) + (partFinale < 50 ? " — sous la majorité" : "") }
                ];
            },
            lecon: "Lever n'est pas gagner de l'argent : c'est prendre un engagement de croissance devant des gens qui attendent une sortie."
        },

        "cout-reel-salarie": {
            titre: "Combien coûte réellement un salarié ?",
            intro: "Le salaire brut n'est qu'une partie de l'addition.",
            champs: [
                { id: "brut", libelle: "Salaire brut mensuel", unite: "€", defaut: 2600, min: 500, max: 50000, pas: 100 },
                { id: "coefficient", libelle: "Coefficient de charges patronales", unite: "×", defaut: 1.45, min: 1, max: 2, pas: 0.05 },
                { id: "margeTaux", libelle: "Taux de marge de l'activité", unite: "%", defaut: 60, min: 1, max: 100, pas: 5 }
            ],
            calculer: ({ brut, coefficient, margeTaux }) => {
                const mensuel = brut * coefficient;
                const annuel = mensuel * 12;
                const caNecessaire = annuel / (margeTaux / 100);
                return [
                    { libelle: "Coût employeur mensuel", valeur: euros(mensuel) },
                    { libelle: "Coût annuel", valeur: euros(annuel), fort: true },
                    { libelle: "Chiffre d'affaires supplémentaire nécessaire", valeur: euros(caNecessaire) + " par an" }
                ];
            },
            lecon: "La question devient concrète : cette personne apportera-t-elle ce chiffre d'affaires, ou libérera-t-elle assez de votre temps pour que vous le fassiez ?"
        },

        "risques-juridiques": {
            type: "controle",
            titre: "Ce qui est écrit, et ce qui ne l'est pas",
            intro: "Cochez ce qui existe aujourd'hui, sous forme écrite et signée.",
            points: [
                { texte: "Un accord entre associés prévoit le départ de l'un d'eux", aide: "la première cause de conflit mortel pour une jeune entreprise" },
                { texte: "Les prestataires ont signé une cession de droits", aide: "sans elle, le logo et le code restent à leur auteur" },
                { texte: "Des conditions de vente encadrent délais, pénalités et responsabilité" },
                { texte: "Un registre des traitements de données personnelles existe" },
                { texte: "Les personnes dont je détiens les données sont informées" },
                { texte: "La marque a fait l'objet d'une recherche d'antériorité", aide: "gratuite sur la base de l'INPI" },
                { texte: "Les contrats importants ont été relus par un professionnel" }
            ],
            verdict: (n, total) => {
                if (n === total) return { texte: "Base juridique saine : les conflits les plus coûteux sont anticipés.", ton: "bon" };
                if (n >= 4) return { texte: "Correct. L'accord entre associés est celui à ne pas repousser.", ton: "moyen" };
                return { texte: "Plusieurs risques majeurs reposent aujourd'hui sur la bonne entente.", ton: "alerte" };
            },
            lecon: "Ce qui coûte cher n'est pas le contrat qu'on rédige, c'est celui qu'on n'a pas rédigé."
        },

        // ================= DÉVELOPPEMENT WEB =================

        // ---------- Niveau débutant ----------

        "semantique-html": {
            type: "controle",
            titre: "Votre HTML a-t-il du sens ?",
            intro: "Cochez ce qui est vrai de la page que vous avez sous les yeux.",
            points: [
                { texte: "Un seul titre de niveau 1 par page" },
                { texte: "Les niveaux de titre se suivent sans sauter de rang", aide: "pas de h4 juste après un h2" },
                { texte: "La navigation est dans un élément dédié, pas dans une division quelconque" },
                { texte: "Les boutons qui déclenchent une action sont des boutons, pas des liens" },
                { texte: "Chaque champ de formulaire a une étiquette qui lui est liée" },
                { texte: "Les images informatives ont un texte de remplacement" }
            ],
            verdict: (n, total) => {
                if (n === total) return { texte: "Structure saine : lisible par un lecteur d'écran comme par un moteur de recherche.", ton: "bon" };
                if (n >= 4) return { texte: "Bonne base. Les étiquettes de formulaire sont le manque le plus fréquent.", ton: "moyen" };
                return { texte: "Cette page se comprend visuellement, mais pas structurellement.", ton: "alerte" };
            },
            lecon: "Le bon élément HTML apporte gratuitement l'accessibilité et le comportement clavier. Une division n'apporte rien."
        },

        "js-ou-css": {
            type: "controle",
            titre: "CSS ou JavaScript ?",
            intro: "Cochez ce qui se fait aujourd'hui en CSS seul. Quatre réponses.",
            points: [
                { texte: "Afficher ou masquer un menu déroulant au survol", aide: "CSS suffit" },
                { texte: "Animer une transition de couleur ou de taille", aide: "CSS, et c'est plus fluide" },
                { texte: "Adapter la mise en page à la largeur de l'écran", aide: "CSS" },
                { texte: "Envoyer un formulaire sans recharger la page", aide: "JavaScript nécessaire" },
                { texte: "Coller un en-tête en haut de l'écran au défilement", aide: "CSS" },
                { texte: "Calculer un total à partir de champs saisis", aide: "JavaScript nécessaire" }
            ],
            verdict: (n) => {
                if (n === 4) return { texte: "Quatre réponses en CSS. Vérifiez avec les indications que ce sont bien celles-là.", ton: "bon" };
                if (n > 4) return { texte: "Plus de quatre : deux de ces tâches demandent réellement du JavaScript.", ton: "alerte" };
                return { texte: "Quatre de ces six tâches se font en CSS seul.", ton: "moyen" };
            },
            lecon: "Ce qui se fait en CSS fonctionne même si le JavaScript échoue à charger. C'est une robustesse gratuite."
        },

        "ou-placer-la-logique": {
            type: "controle",
            titre: "Navigateur ou serveur ?",
            intro: "Cochez ce qui DOIT être fait côté serveur, sans exception.",
            points: [
                { texte: "Vérifier qu'un utilisateur a le droit d'accéder à une donnée", aide: "toujours côté serveur" },
                { texte: "Vérifier qu'un champ est bien rempli avant envoi", aide: "côté navigateur pour le confort — mais le serveur doit revérifier" },
                { texte: "Calculer le prix final d'une commande", aide: "serveur : sinon le prix se modifie depuis la console" },
                { texte: "Afficher une infobulle au survol", aide: "navigateur" },
                { texte: "Décider si un compte peut être supprimé", aide: "serveur" },
                { texte: "Masquer un bouton réservé aux administrateurs", aide: "masquer ne protège pas : l'action doit être refusée côté serveur" }
            ],
            verdict: (n) => {
                if (n === 4) return { texte: "Quatre traitements relèvent obligatoirement du serveur.", ton: "bon" };
                if (n > 4) return { texte: "Plus de quatre : deux de ces éléments relèvent du confort d'affichage.", ton: "alerte" };
                return { texte: "Quatre de ces six doivent impérativement être traités côté serveur.", ton: "moyen" };
            },
            lecon: "Tout ce qui protège quelque chose se vérifie côté serveur. Le navigateur appartient à l'utilisateur."
        },

        "largeur-de-ligne": {
            titre: "Trouvez la bonne largeur de texte",
            intro: "Une ligne trop longue fatigue l'œil, qui perd le début de la ligne suivante.",
            champs: [
                { id: "police", libelle: "Taille de police", unite: "px", defaut: 17, min: 10, max: 40, pas: 1 },
                { id: "caracteres", libelle: "Caractères par ligne visés", unite: "car.", defaut: 68, min: 30, max: 140, pas: 1 }
            ],
            calculer: ({ police, caracteres }) => {
                // Un caractere occupe en moyenne environ la moitie de la taille
                // de police dans une fonte proportionnelle courante.
                const largeur = Math.round(police * 0.5 * caracteres);
                let verdict;
                if (caracteres < 45) verdict = "trop court : le regard revient trop souvent à la ligne";
                else if (caracteres <= 75) verdict = "dans la zone confortable";
                else verdict = "trop long : l'œil perd le début de la ligne suivante";
                return [
                    { libelle: "Largeur de bloc recommandée", valeur: nf(largeur) + " px", fort: true },
                    { libelle: "En unités relatives", valeur: nf(caracteres * 0.5, 1) + " em" },
                    { libelle: "Confort de lecture", valeur: verdict }
                ];
            },
            lecon: "La zone confortable se situe entre 45 et 75 caractères par ligne, quelle que soit la taille de l'écran."
        },

        // ---------- Niveau intermédiaire ----------

        "cout-des-appels": {
            titre: "Séquentiel ou parallèle ?",
            intro: "Le temps d'une page dépend surtout du nombre d'allers-retours.",
            champs: [
                { id: "appels", libelle: "Nombre d'appels d'API", unite: "appels", defaut: 8, min: 1, max: 200, pas: 1 },
                { id: "latence", libelle: "Latence réseau par appel", unite: "ms", defaut: 120, min: 1, max: 2000, pas: 10 },
                { id: "traitement", libelle: "Traitement serveur par appel", unite: "ms", defaut: 30, min: 0, max: 5000, pas: 5 }
            ],
            calculer: ({ appels, latence, traitement }) => {
                const unAppel = latence + traitement;
                const sequentiel = appels * unAppel;
                // En parallele, la duree est celle de l appel le plus long.
                const parallele = unAppel;
                return [
                    { libelle: "En séquence", valeur: nf(sequentiel) + " ms" },
                    { libelle: "En parallèle", valeur: nf(parallele) + " ms", fort: true },
                    { libelle: "Temps économisé", valeur: nf(sequentiel - parallele) + " ms" }
                ];
            },
            lecon: "Le serveur n'est pas plus rapide dans le second cas. C'est l'organisation des appels qui change tout."
        },

        "probleme-n-plus-1": {
            titre: "Mesurez le coût d'une requête en boucle",
            intro: "Le défaut de performance le plus courant, et le plus invisible à la lecture du code.",
            champs: [
                { id: "lignes", libelle: "Éléments à afficher", unite: "lignes", defaut: 50, min: 1, max: 10000, pas: 10 },
                { id: "duree", libelle: "Durée d'une requête simple", unite: "ms", defaut: 4, min: 0.1, max: 500, pas: 0.5 },
                { id: "jointure", libelle: "Durée de la requête avec jointure", unite: "ms", defaut: 6, min: 0.1, max: 5000, pas: 1 }
            ],
            calculer: ({ lignes, duree, jointure }) => {
                const enBoucle = (lignes + 1) * duree;
                const rapport = jointure > 0 ? enBoucle / jointure : 0;
                return [
                    { libelle: `Une requête par élément (${nf(lignes + 1)} requêtes)`, valeur: nf(enBoucle, 0) + " ms" },
                    { libelle: "Une seule requête avec jointure", valeur: nf(jointure, 0) + " ms" },
                    { libelle: "Rapport", valeur: nf(rapport, 0) + " fois plus lent", fort: rapport > 5 }
                ];
            },
            lecon: "Le code paraît identique dans les deux cas. Seul le compteur de requêtes révèle la différence."
        },

        "checklist-mise-en-ligne": {
            type: "controle",
            titre: "Prêt à mettre en ligne ?",
            intro: "Cochez ce qui est vérifié. Ces points expliquent la quasi-totalité des premières mises en ligne ratées.",
            points: [
                { texte: "Aucun secret ne figure dans le code envoyé", aide: "clés d'API, mots de passe, jetons" },
                { texte: "La casse des noms de fichiers est exacte", aide: "le serveur distingue Image.png de image.png, pas Windows" },
                { texte: "Les chemins fonctionnent depuis la racine du site" },
                { texte: "Le HTTPS est actif et la redirection en place" },
                { texte: "Une page d'erreur personnalisée existe" },
                { texte: "Le déploiement envoie l'ensemble des fichiers, pas une sélection" },
                { texte: "J'ai ouvert le site dans une fenêtre privée après déploiement", aide: "pour contourner le cache et voir ce que voient les autres" }
            ],
            verdict: (n, total) => {
                if (n === total) return { texte: "Prêt. Ces sept points couvrent l'essentiel des incidents de première mise en ligne.", ton: "bon" };
                if (n >= 5) return { texte: "Presque. La casse des fichiers et les secrets sont les deux à ne pas manquer.", ton: "moyen" };
                return { texte: "Plusieurs points bloquants risquent d'apparaître après le déploiement.", ton: "alerte" };
            },
            lecon: "« Ça marche chez moi » et « c'est en ligne » diffèrent par quelques points précis, tous vérifiables d'avance."
        },

        "hygiene-git": {
            type: "controle",
            titre: "Votre historique est-il utilisable ?",
            intro: "Cochez ce qui décrit vos habitudes réelles.",
            points: [
                { texte: "Un commit correspond à une seule intention" },
                { texte: "Les messages expliquent le pourquoi, pas seulement le quoi", aide: "« fix » n'apprend rien à personne" },
                { texte: "Un fichier d'exclusion existe depuis le premier jour" },
                { texte: "Aucun secret n'a jamais été commité", aide: "un secret poussé reste dans l'historique, même supprimé ensuite" },
                { texte: "La branche principale reste toujours fonctionnelle" },
                { texte: "Les branches vivent quelques jours, pas quelques semaines" },
                { texte: "Je relis mon propre changement avant de le fusionner" }
            ],
            verdict: (n, total) => {
                if (n === total) return { texte: "Historique exploitable : vous pourrez revenir en arrière proprement.", ton: "bon" };
                if (n >= 5) return { texte: "Bonnes habitudes. Les branches longues sont la cause principale des conflits.", ton: "moyen" };
                return { texte: "Cet historique servira difficilement le jour où il faudra défaire quelque chose.", ton: "alerte" };
            },
            lecon: "Un commit fourre-tout ne peut pas être annulé proprement : on ne peut pas en retirer une partie."
        },

        // ---------- Niveau avancé ----------

        "impact-du-cache": {
            titre: "Ce que le cache économise",
            intro: "Le seul levier qui améliore la performance sans rien alléger.",
            champs: [
                { id: "poids", libelle: "Poids total d'une page", unite: "Ko", defaut: 1800, min: 10, max: 100000, pas: 50 },
                { id: "statique", libelle: "Dont fichiers statiques cachables", unite: "Ko", defaut: 1500, min: 0, max: 100000, pas: 50 },
                { id: "retours", libelle: "Part de visites avec cache déjà rempli", unite: "%", defaut: 60, min: 0, max: 100, pas: 5 }
            ],
            calculer: ({ poids, statique, retours }) => {
                const cachable = Math.min(statique, poids);
                const visiteRetour = poids - cachable;
                const moyenne = poids * (1 - retours / 100) + visiteRetour * (retours / 100);
                return [
                    { libelle: "Première visite", valeur: nf(poids) + " Ko" },
                    { libelle: "Visite avec cache", valeur: nf(visiteRetour) + " Ko" },
                    { libelle: "Volume moyen par visite", valeur: nf(Math.round(moyenne)) + " Ko", fort: true }
                ];
            },
            lecon: "Un fichier fortement mis en cache ne peut plus changer en place : versionnez son nom, et le problème disparaît."
        },

        "audit-securite-web": {
            type: "controle",
            titre: "Audit de sécurité applicative",
            intro: "Cochez ce qui est en place dans votre application.",
            points: [
                { texte: "Toutes les requêtes de base de données sont préparées", aide: "aucune concaténation de valeurs saisies" },
                { texte: "Le contenu utilisateur est échappé à l'affichage" },
                { texte: "Une politique de sécurité de contenu est déclarée" },
                { texte: "Les formulaires sensibles portent un jeton anti-rejeu" },
                { texte: "Toute autorisation est vérifiée côté serveur", aide: "masquer un bouton ne protège rien" },
                { texte: "Les dépendances sont mises à jour régulièrement", aide: "la majorité des compromissions passent par là" },
                { texte: "Les messages d'erreur en production ne révèlent rien du système" }
            ],
            verdict: (n, total) => {
                if (n === total) return { texte: "Les vulnérabilités les plus répandues sont couvertes.", ton: "bon" };
                if (n >= 5) return { texte: "Bon niveau. Les dépendances non mises à jour restent le vecteur le plus exploité.", ton: "moyen" };
                return { texte: "Plusieurs vulnérabilités classiques sont probablement exploitables.", ton: "alerte" };
            },
            lecon: "Toute donnée venant de l'extérieur est hostile jusqu'à preuve du contraire. C'est le principe qui règle l'essentiel."
        },

        "pyramide-des-tests": {
            titre: "Combien de temps dure votre suite de tests ?",
            intro: "Si elle dépasse quelques minutes, elle ne sera plus lancée à chaque modification.",
            champs: [
                { id: "unitaires", libelle: "Tests unitaires", unite: "tests", defaut: 400, min: 0, max: 100000, pas: 10 },
                { id: "integration", libelle: "Tests d'intégration", unite: "tests", defaut: 60, min: 0, max: 10000, pas: 5 },
                { id: "boutEnBout", libelle: "Tests de bout en bout", unite: "tests", defaut: 12, min: 0, max: 1000, pas: 1 },
                { id: "dureeE2E", libelle: "Durée d'un test de bout en bout", unite: "s", defaut: 8, min: 0.5, max: 300, pas: 0.5 }
            ],
            calculer: ({ unitaires, integration, boutEnBout, dureeE2E }) => {
                // Ordres de grandeur usuels : 5 ms et 200 ms.
                const tU = unitaires * 0.005;
                const tI = integration * 0.2;
                const tE = boutEnBout * dureeE2E;
                const total = tU + tI + tE;
                const nb = unitaires + integration + boutEnBout;
                const partTemps = total > 0 ? tE / total * 100 : 0;
                const partNombre = nb > 0 ? boutEnBout / nb * 100 : 0;
                return [
                    { libelle: "Durée totale de la suite", valeur: nf(total, 0) + " s", fort: true },
                    { libelle: "Part des tests de bout en bout", valeur: pourcent(partNombre, 1) + " des tests" },
                    { libelle: "Mais ils occupent", valeur: pourcent(partTemps, 0) + " du temps" }
                ];
            },
            lecon: "C'est cette poignée de tests lents qui décide si la suite tourne à chaque modification, ou une fois par semaine."
        },

        "cout-de-la-dette": {
            titre: "Chiffrez votre dette technique",
            intro: "Le seul langage qui obtient du temps pour la corriger.",
            champs: [
                { id: "heures", libelle: "Heures perdues par semaine", unite: "h", defaut: 3, min: 0.5, max: 40, pas: 0.5 },
                { id: "semaines", libelle: "Semaines travaillées par an", unite: "sem.", defaut: 48, min: 1, max: 52, pas: 1 },
                { id: "correction", libelle: "Heures estimées pour corriger", unite: "h", defaut: 40, min: 1, max: 5000, pas: 5 },
                { id: "taux", libelle: "Coût horaire chargé", unite: "€/h", defaut: 55, min: 0, max: 500, pas: 5 }
            ],
            calculer: ({ heures, semaines, correction, taux }) => {
                const perduAn = heures * semaines;
                const retour = heures > 0 ? correction / heures : 0;
                return [
                    { libelle: "Temps perdu par an", valeur: nf(perduAn, 0) + " heures (" + nf(perduAn / 35, 1) + " semaines)" },
                    { libelle: "Coût annuel", valeur: euros(perduAn * taux), fort: true },
                    { libelle: "La correction est remboursée en", valeur: nf(retour, 0) + " semaines" }
                ];
            },
            lecon: "Formulé ainsi, l'arbitrage n'est plus une question de goût mais de délai de retour."
        },

        // ================= MARKETING DIGITAL =================

        // ---------- Niveau débutant ----------

        "bases-seo": {
            type: "controle",
            titre: "Les fondations du référencement",
            intro: "Cochez ce qui est vrai de la page que vous voulez positionner.",
            points: [
                { texte: "Le titre de la page décrit son contenu et contient les mots recherchés" },
                { texte: "Un seul titre de niveau 1, qui annonce le sujet" },
                { texte: "La page répond réellement à la question posée dans la recherche" },
                { texte: "Elle se charge en moins de trois secondes sur mobile" },
                { texte: "Les images ont un texte de remplacement descriptif" },
                { texte: "D'autres pages du site pointent vers elle" },
                { texte: "L'adresse est lisible : pas de suite de chiffres" }
            ],
            verdict: (n, total) => {
                if (n === total) return { texte: "Fondations en place. Le reste dépend surtout du contenu et du temps.", ton: "bon" };
                if (n >= 5) return { texte: "Bonne base. Les liens internes sont le point le plus souvent négligé.", ton: "moyen" };
                return { texte: "Plusieurs fondamentaux manquent : aucun effort de contenu ne les compensera.", ton: "alerte" };
            },
            lecon: "Le référencement récompense d'abord une page qui répond vraiment. Le reste n'est que de la mise en forme."
        },

        "budget-sea": {
            titre: "Que rapporte votre budget publicitaire ?",
            intro: "Trois chiffres suffisent à savoir si une campagne peut être rentable.",
            champs: [
                { id: "budget", libelle: "Budget mensuel", unite: "€", defaut: 600, min: 10, max: 1000000, pas: 50 },
                { id: "cpc", libelle: "Coût par clic", unite: "€", defaut: 0.9, min: 0.01, max: 100, pas: 0.1 },
                { id: "conversion", libelle: "Taux de conversion de la page", unite: "%", defaut: 2.5, min: 0.1, max: 100, pas: 0.1 },
                { id: "marge", libelle: "Marge par vente", unite: "€", defaut: 35, min: 0, max: 100000, pas: 5 }
            ],
            calculer: ({ budget, cpc, conversion, marge }) => {
                const clics = budget / cpc;
                const ventes = clics * conversion / 100;
                const cout = ventes > 0 ? budget / ventes : 0;
                const resultat = ventes * marge - budget;
                return [
                    { libelle: "Clics obtenus", valeur: nf(Math.round(clics)) },
                    { libelle: "Ventes attendues", valeur: nf(Math.round(ventes)) + " (coût : " + euros(cout) + " par vente)", fort: true },
                    { libelle: "Résultat net", valeur: (resultat >= 0 ? "+ " : "− ") + euros(Math.abs(resultat)) }
                ];
            },
            lecon: "Si le coût par vente dépasse la marge, aucun volume ne rendra la campagne rentable."
        },

        "choisir-reseau": {
            type: "controle",
            titre: "Faut-il être sur ce réseau ?",
            intro: "Cochez ce qui est vrai pour le réseau que vous envisagez.",
            points: [
                { texte: "Mes clients y sont réellement présents", aide: "pas « des gens comme eux » : eux" },
                { texte: "Je peux y publier au format attendu sans me forcer", aide: "vidéo, photo, texte long : ce n'est pas interchangeable" },
                { texte: "Je peux tenir un rythme régulier pendant six mois" },
                { texte: "J'ai un objectif clair : notoriété, trafic, ou vente" },
                { texte: "Je sais comment j'y mesurerai le résultat" },
                { texte: "Je préfère un seul réseau tenu qu'à trois à moitié" }
            ],
            verdict: (n, total) => {
                if (n === total) return { texte: "Choix fondé. Tenez-le six mois avant d'en juger.", ton: "bon" };
                if (n >= 4) return { texte: "Plausible. La régularité est ce qui manque le plus souvent, pas la créativité.", ton: "moyen" };
                return { texte: "Ce réseau risque de consommer du temps sans rien rapporter.", ton: "alerte" };
            },
            lecon: "Un compte abandonné après trois mois nuit plus qu'un compte inexistant : il signale une activité arrêtée."
        },

        "qualite-email": {
            type: "controle",
            titre: "Votre message a-t-il une chance ?",
            intro: "Cochez ce qui est vrai du courriel que vous vous apprêtez à envoyer.",
            points: [
                { texte: "L'objet dit ce que contient le message, sans promesse excessive" },
                { texte: "Le nom d'expéditeur est reconnaissable" },
                { texte: "Il y a une seule action attendue, clairement visible" },
                { texte: "Le message est lisible sans images" },
                { texte: "Il se comprend sur un écran de téléphone" },
                { texte: "Le lien de désinscription est visible et fonctionne" },
                { texte: "Chaque destinataire a demandé à le recevoir" }
            ],
            verdict: (n, total) => {
                if (n === total) return { texte: "Message prêt : lisible, honnête, et conforme.", ton: "bon" };
                if (n >= 5) return { texte: "Presque. L'objet et l'action unique font l'essentiel du résultat.", ton: "moyen" };
                return { texte: "Ce message risque d'être ignoré, ou signalé.", ton: "alerte" };
            },
            lecon: "L'objet décide de l'ouverture, l'action unique décide du clic. Le reste compte beaucoup moins."
        },

        // ---------- Niveau intermédiaire ----------

        "points-de-fuite": {
            titre: "Où partent vos visiteurs ?",
            intro: "Les taux se multiplient : c'est ce que l'intuition rate systématiquement.",
            champs: [
                { id: "visiteurs", libelle: "Visiteurs", unite: "vis.", defaut: 1000, min: 1, max: 10000000, pas: 100 },
                { id: "etape1", libelle: "Voient la page produit", unite: "%", defaut: 40, min: 0.1, max: 100, pas: 1 },
                { id: "etape2", libelle: "Ajoutent au panier", unite: "%", defaut: 25, min: 0.1, max: 100, pas: 1 },
                { id: "etape3", libelle: "Commencent la commande", unite: "%", defaut: 60, min: 0.1, max: 100, pas: 1 },
                { id: "etape4", libelle: "Finalisent le paiement", unite: "%", defaut: 50, min: 0.1, max: 100, pas: 1 }
            ],
            calculer: ({ visiteurs, etape1, etape2, etape3, etape4 }) => {
                const taux = [etape1, etape2, etape3, etape4];
                const commandes = visiteurs * taux.reduce((a, t) => a * t / 100, 1);
                const global = visiteurs > 0 ? commandes / visiteurs * 100 : 0;
                // L etape la plus faible est celle qui plafonne tout le reste.
                const pire = taux.indexOf(Math.min(...taux));
                const noms = ["page produit", "ajout au panier", "début de commande", "paiement"];
                return [
                    { libelle: "Commandes", valeur: nf(Math.round(commandes)), fort: true },
                    { libelle: "Conversion globale", valeur: pourcent(global, 2) },
                    { libelle: "Étape la plus fuyante", valeur: noms[pire] + " (" + pourcent(taux[pire], 0) + ")" }
                ];
            },
            lecon: "Quatre étapes à 50 % ne laissent pas la moitié à l'arrivée, mais 6,25 %. La perte se compose."
        },

        "intention-de-recherche": {
            type: "controle",
            titre: "Votre contenu répond-il à l'intention ?",
            intro: "Cochez ce que vous avez vérifié avant d'écrire.",
            points: [
                { texte: "J'ai tapé la recherche visée et regardé les dix premiers résultats", aide: "le test le plus rapide et le plus fiable" },
                { texte: "Mon format correspond à ce qui est déjà classé", aide: "guide, comparatif, page produit : le moteur a déjà tranché" },
                { texte: "La recherche est assez précise pour que l'intention soit claire" },
                { texte: "Ma page traite une seule intention, pas trois à la fois" },
                { texte: "Je réponds à la question dès le début, sans introduction inutile" },
                { texte: "La page suivante logique est proposée", aide: "un guide qui informe renvoie vers la page qui vend" }
            ],
            verdict: (n, total) => {
                if (n === total) return { texte: "Contenu aligné sur l'intention. C'est la moitié du travail de référencement.", ton: "bon" };
                if (n >= 4) return { texte: "Bonne base. Vérifier les résultats existants reste le geste le plus rentable.", ton: "moyen" };
                return { texte: "Ce contenu risque de ne jamais se placer, quelle que soit sa qualité.", ton: "alerte" };
            },
            lecon: "Si les dix premiers résultats sont des articles, une page produit n'a aucune chance : le moteur a compris ce que les gens veulent."
        },

        "vanity-metrics": {
            type: "controle",
            titre: "Ce chiffre sert-il à quelque chose ?",
            intro: "Cochez les indicateurs qui peuvent réellement changer une décision. Trois le peuvent.",
            points: [
                { texte: "Nombre d'impressions", aide: "monte avec le budget, ne dit rien du résultat" },
                { texte: "Coût par client acquis", aide: "décisionnel : il se compare à la marge" },
                { texte: "Nombre d'abonnés", aide: "l'audience n'est pas la clientèle" },
                { texte: "Taux de conversion par étape du parcours", aide: "décisionnel : il désigne où agir" },
                { texte: "Portée d'une publication", aide: "sans action associée, elle ne décide de rien" },
                { texte: "Part de nouveaux clients dans le chiffre d'affaires", aide: "décisionnel : il arbitre acquisition et rétention" }
            ],
            verdict: (n) => {
                if (n === 3) return { texte: "Trois indicateurs sont décisionnels. Vérifiez que ce sont bien ceux-là.", ton: "bon" };
                if (n > 3) return { texte: "Plus de trois : certains de ces chiffres ne changent aucune décision.", ton: "alerte" };
                return { texte: "Trois de ces six indicateurs peuvent réellement changer une décision.", ton: "moyen" };
            },
            lecon: "Le taux mesure l'efficacité, le volume mesure l'apport. Un indicateur sans l'autre induit en erreur."
        },

        "impact-taux-ouverture": {
            titre: "Ce que rapporte un envoi",
            intro: "L'e-mail est un entonnoir : trois taux successifs se multiplient.",
            champs: [
                { id: "liste", libelle: "Personnes dans la liste", unite: "pers.", defaut: 4000, min: 1, max: 10000000, pas: 100 },
                { id: "ouverture", libelle: "Taux d'ouverture", unite: "%", defaut: 32, min: 0.1, max: 100, pas: 1 },
                { id: "clic", libelle: "Taux de clic sur les ouvertures", unite: "%", defaut: 12, min: 0.1, max: 100, pas: 0.5 },
                { id: "conversion", libelle: "Conversion des clics", unite: "%", defaut: 6, min: 0.1, max: 100, pas: 0.5 },
                { id: "panier", libelle: "Marge par vente", unite: "€", defaut: 28, min: 0, max: 100000, pas: 2 }
            ],
            calculer: ({ liste, ouverture, clic, conversion, panier }) => {
                const ouvrent = liste * ouverture / 100;
                const cliquent = ouvrent * clic / 100;
                const ventes = cliquent * conversion / 100;
                return [
                    { libelle: "Ouvertures", valeur: nf(Math.round(ouvrent)) + " · clics : " + nf(Math.round(cliquent)) },
                    { libelle: "Ventes par envoi", valeur: nf(Math.round(ventes)), fort: true },
                    { libelle: "Marge dégagée", valeur: euros(ventes * panier) }
                ];
            },
            lecon: "Le premier taux pèse le plus lourd : c'est l'objet du message, pas son contenu, qui décide de la suite."
        },

        // ---------- Niveau avancé ----------

        "attribution-comparee": {
            titre: "À qui revient la vente ?",
            intro: "Le même parcours, trois modèles, trois décisions budgétaires opposées.",
            champs: [
                { id: "ventes", libelle: "Ventes sur la période", unite: "ventes", defaut: 200, min: 1, max: 1000000, pas: 10 },
                { id: "contacts", libelle: "Points de contact avant achat", unite: "contacts", defaut: 4, min: 1, max: 20, pas: 1 },
                { id: "budget", libelle: "Budget du canal de découverte", unite: "€", defaut: 2000, min: 0, max: 10000000, pas: 100 }
            ],
            calculer: ({ ventes, contacts, budget }) => {
                const reparti = ventes / contacts;
                const coutDernierClic = "0 vente attribuée";
                const coutReparti = reparti > 0 ? budget / reparti : 0;
                return [
                    { libelle: "Dernier clic — canal de découverte", valeur: coutDernierClic },
                    { libelle: "Attribution répartie — canal de découverte", valeur: nf(reparti, 1) + " ventes", fort: true },
                    { libelle: "Coût par vente selon le modèle réparti", valeur: euros(coutReparti) }
                ];
            },
            lecon: "En dernier clic, le canal de découverte affiche toujours zéro. Le couper fait baisser, quelques semaines plus tard, ceux qui semblaient performer."
        },

        "effet-retention": {
            titre: "Ce que vaut un point de fidélité",
            intro: "La durée moyenne d'une relation se déduit du taux de perte mensuel.",
            champs: [
                { id: "perte", libelle: "Clients perdus par mois", unite: "%", defaut: 12, min: 0.5, max: 90, pas: 0.5 },
                { id: "amelioration", libelle: "Réduction visée de cette perte", unite: "points", defaut: 4, min: 0.5, max: 50, pas: 0.5 },
                { id: "marge", libelle: "Marge mensuelle par client", unite: "€", defaut: 28, min: 0, max: 100000, pas: 2 }
            ],
            calculer: ({ perte, amelioration, marge }) => {
                const dureeAvant = 100 / perte;
                const perteApres = Math.max(0.5, perte - amelioration);
                const dureeApres = 100 / perteApres;
                const gain = (dureeApres / dureeAvant - 1) * 100;
                return [
                    { libelle: "Durée de vie actuelle", valeur: nf(dureeAvant, 1) + " mois (" + euros(dureeAvant * marge) + ")" },
                    { libelle: `Avec ${nf(amelioration, 1)} points de moins`, valeur: nf(dureeApres, 1) + " mois (" + euros(dureeApres * marge) + ")", fort: true },
                    { libelle: "Gain de valeur par client", valeur: "+ " + pourcent(gain, 0) }
                ];
            },
            lecon: "Aucune optimisation publicitaire ne produit un effet de cette ampleur — et personne n'en parle en réunion."
        },

        "persuasion-ethique": {
            type: "controle",
            titre: "Persuasion ou manipulation ?",
            intro: "Cochez les pratiques légitimes. Trois le sont.",
            points: [
                { texte: "Afficher « 2 400 clients » quand c'est le nombre réel", aide: "légitime : information vraie et vérifiable" },
                { texte: "Afficher « plus que 3 en stock » avec 400 unités disponibles", aide: "tromperie" },
                { texte: "Annoncer une échéance réelle et la rappeler", aide: "légitime" },
                { texte: "Un compte à rebours qui se réinitialise à chaque visite", aide: "tromperie" },
                { texte: "Offrir un contenu qui a une valeur réelle", aide: "légitime" },
                { texte: "Citer une certification qu'on ne détient pas", aide: "tromperie, et souvent une infraction" }
            ],
            verdict: (n) => {
                if (n === 3) return { texte: "Trois pratiques sont légitimes. Vérifiez que ce sont bien celles-là.", ton: "bon" };
                if (n > 3) return { texte: "Plus de trois : certaines de ces pratiques reposent sur une information fausse.", ton: "alerte" };
                return { texte: "Trois de ces six pratiques sont légitimes. Le critère est la véracité.", ton: "moyen" };
            },
            lecon: "Le texte peut être identique. Ce qui change, c'est que l'information soit vraie — et que le client l'accepterait s'il le savait."
        },

        "conformite-prospection": {
            type: "controle",
            titre: "Votre prospection est-elle conforme ?",
            intro: "Cochez ce qui est en place aujourd'hui.",
            points: [
                { texte: "Chaque adresse de particulier provient d'un consentement libre et spécifique", aide: "pas une case pré-cochée" },
                { texte: "Le lien de désinscription est visible et effectif rapidement" },
                { texte: "L'identité de l'expéditeur est claire et l'objet non trompeur" },
                { texte: "Un registre des traitements existe", aide: "premier document demandé lors d'un contrôle" },
                { texte: "Une durée de conservation est fixée et appliquée" },
                { texte: "Le bandeau de cookies permet de refuser aussi facilement que d'accepter" },
                { texte: "Les partenariats rémunérés sont identifiés comme tels" },
                { texte: "Je peux prouver l'origine de chaque adresse de ma liste" }
            ],
            verdict: (n, total) => {
                if (n === total) return { texte: "Conforme sur les points les plus contrôlés.", ton: "bon" };
                if (n >= 6) return { texte: "Bon niveau. Le registre et la durée de conservation sont les oublis les plus fréquents.", ton: "moyen" };
                return { texte: "Plusieurs manquements exposent l'entreprise, pas le prestataire qui a exécuté.", ton: "alerte" };
            },
            lecon: "En cas de plainte, c'est à vous de prouver le consentement — pas à la personne de prouver qu'elle n'a rien accepté."
        },

        // ================= PRODUCTIVITÉ & ORGANISATION =================

        // ---------- Niveau débutant ----------

        "rythme-pomodoro": {
            titre: "Que produit une journée en Pomodoro ?",
            intro: "Le total surprend : le temps réellement concentré est bien inférieur aux heures passées.",
            champs: [
                { id: "session", libelle: "Durée d'une session", unite: "min", defaut: 25, min: 5, max: 120, pas: 5 },
                { id: "pause", libelle: "Pause entre deux sessions", unite: "min", defaut: 5, min: 1, max: 60, pas: 1 },
                { id: "heures", libelle: "Heures consacrées au travail de fond", unite: "h", defaut: 4, min: 0.5, max: 12, pas: 0.5 }
            ],
            calculer: ({ session, pause, heures }) => {
                const cycle = session + pause;
                const cycles = Math.floor(heures * 60 / cycle);
                const concentre = cycles * session;
                return [
                    { libelle: "Sessions dans la plage", valeur: nf(cycles) },
                    { libelle: "Temps réellement concentré", valeur: heuresMinutes(concentre), fort: true },
                    { libelle: "Part de la plage", valeur: pourcent(concentre / (heures * 60) * 100, 0) }
                ];
            },
            lecon: "Quatre heures de présence donnent environ trois heures de concentration réelle. C'est déjà beaucoup."
        },

        "sante-gtd": {
            type: "controle",
            titre: "Votre système tient-il debout ?",
            intro: "Cochez ce qui est vrai aujourd'hui, pas ce que vous aviez prévu.",
            points: [
                { texte: "Tout ce que j'ai à faire est noté quelque part, hors de ma tête" },
                { texte: "Il existe un seul endroit pour capturer, pas cinq" },
                { texte: "Chaque tâche commence par un verbe d'action", aide: "« appeler le comptable » et non « comptable »" },
                { texte: "Les tâches de plus d'une étape sont identifiées comme projets" },
                { texte: "Je vide mes boîtes de capture au moins une fois par semaine" },
                { texte: "Je fais confiance à mon système : je n'ai pas de liste parallèle mentale" }
            ],
            verdict: (n, total) => {
                if (n === total) return { texte: "Système fiable : votre tête n'a plus à servir de mémoire.", ton: "bon" };
                if (n >= 4) return { texte: "Bonne base. La revue hebdomadaire est ce qui manque le plus souvent.", ton: "moyen" };
                return { texte: "Votre mémoire porte encore une partie du système, et elle le porte mal.", ton: "alerte" };
            },
            lecon: "Un système auquel on ne fait pas confiance est doublé d'une liste mentale — et c'est elle qui fatigue."
        },

        "matrice-eisenhower": {
            type: "controle",
            titre: "Votre matrice sert-elle à quelque chose ?",
            intro: "Cochez ce qui est vrai de votre usage réel, pas de vos intentions.",
            points: [
                { texte: "J'ai classé les tâches de ma semaine dans les quatre cases" },
                { texte: "Le quadrant 4 n'est pas vide", aide: "s'il l'est, c'est que rien n'a été renoncé" },
                { texte: "Un créneau récurrent est réservé au quadrant 2 dans mon agenda", aide: "important mais non urgent" },
                { texte: "Devant une tâche urgente, je me demande « urgent pour qui ? »" },
                { texte: "Les tâches du quadrant 3 sont déléguées ou expédiées, pas soignées" },
                { texte: "Je refais l'exercice au moins une fois par mois" }
            ],
            verdict: (n, total) => {
                if (n === total) return { texte: "La matrice arbitre réellement. C'est tout ce qu'on lui demande.", ton: "bon" };
                if (n >= 4) return { texte: "Bon usage. Le créneau réservé au quadrant 2 est ce qui manque le plus souvent.", ton: "moyen" };
                return { texte: "L'exercice a été fait, mais rien n'a changé dans l'agenda : il n'a rien arbitré.", ton: "alerte" };
            },
            lecon: "L'urgent se signale de lui-même. L'important reste silencieux : il faut lui réserver du temps, ou il n'arrivera jamais."
        },

        "choisir-outil": {
            type: "controle",
            titre: "Cet outil vous convient-il ?",
            intro: "Cochez ce qui est vrai de l'outil que vous utilisez ou envisagez.",
            points: [
                { texte: "Capturer une tâche prend moins de cinq secondes", aide: "au-delà, on ne capture plus" },
                { texte: "Il est accessible partout où les idées surviennent" },
                { texte: "Je n'ai pas passé plus d'une heure à le configurer" },
                { texte: "Je l'utilise encore trois mois après l'avoir adopté" },
                { texte: "Il ne me demande pas de renseigner des champs dont je ne me sers pas" },
                { texte: "Je peux en sortir mes données si je change d'avis" }
            ],
            verdict: (n, total) => {
                if (n === total) return { texte: "Outil adapté : il sert le système au lieu de le remplacer.", ton: "bon" };
                if (n >= 4) return { texte: "Correct. La vraie question reste : l'utiliserez-vous dans trois mois ?", ton: "moyen" };
                return { texte: "Cet outil consomme probablement plus d'énergie qu'il n'en fait gagner.", ton: "alerte" };
            },
            lecon: "Le meilleur outil est celui qu'on utilise encore dans six mois. Tous les autres critères passent après."
        },

        // ---------- Niveau intermédiaire ----------

        "cout-changement-tache": {
            titre: "Ce que coûtent vos interruptions",
            intro: "Le temps perdu n'est pas la durée de l'interruption, c'est le temps de reprise.",
            champs: [
                { id: "nombre", libelle: "Interruptions par jour", unite: "fois", defaut: 9, min: 0, max: 100, pas: 1 },
                { id: "duree", libelle: "Durée moyenne d'une interruption", unite: "min", defaut: 3, min: 0.5, max: 120, pas: 0.5 },
                { id: "reprise", libelle: "Temps de reprise après coupure", unite: "min", defaut: 12, min: 0, max: 60, pas: 1 },
                { id: "journee", libelle: "Durée de la journée de travail", unite: "h", defaut: 8, min: 1, max: 16, pas: 0.5 }
            ],
            calculer: ({ nombre, duree, reprise, journee }) => {
                const interruptions = nombre * duree;
                const rattrapage = nombre * reprise;
                const total = interruptions + rattrapage;
                return [
                    { libelle: "Temps des interruptions", valeur: heuresMinutes(interruptions) },
                    { libelle: "Temps de reprise", valeur: heuresMinutes(rattrapage) },
                    { libelle: "Total perdu", valeur: heuresMinutes(total) + " (" + pourcent(total / (journee * 60) * 100, 0) + " de la journée)", fort: true }
                ];
            },
            lecon: "Une coupure de deux minutes en coûte vingt. C'est pourquoi le total surprend toujours."
        },

        "blocage-de-temps": {
            titre: "Combien de temps vous reste-t-il vraiment ?",
            intro: "Planifier plus que le disponible garantit d'échouer — par arithmétique, pas par manque de discipline.",
            champs: [
                { id: "journee", libelle: "Durée de la journée", unite: "h", defaut: 8, min: 1, max: 16, pas: 0.5 },
                { id: "reunions", libelle: "Réunions", unite: "h", defaut: 2.5, min: 0, max: 12, pas: 0.5 },
                { id: "messages", libelle: "Traitement des messages", unite: "h", defaut: 1.25, min: 0, max: 8, pas: 0.25 },
                { id: "imprevus", libelle: "Imprévus et transitions", unite: "h", defaut: 1, min: 0, max: 8, pas: 0.25 }
            ],
            calculer: ({ journee, reunions, messages, imprevus }) => {
                const restant = journee - reunions - messages - imprevus;
                const heures = Math.max(0, restant);
                // Une planification a 70 % survit aux aleas ; a 100 % elle casse.
                const raisonnable = heures * 0.7;
                return [
                    { libelle: "Temps disponible pour le travail de fond", valeur: heuresMinutes(heures * 60), fort: true },
                    { libelle: "Part de la journée", valeur: pourcent(heures / journee * 100, 0) },
                    { libelle: "À planifier raisonnablement (70 %)", valeur: heuresMinutes(raisonnable * 60) }
                ];
            },
            lecon: "Une planification à 70 % tient. Une planification à 100 % casse à la première urgence."
        },

        "flux-entrant": {
            titre: "Au fil de l'eau, ou par lots ?",
            intro: "Le travail est le même. Ce sont les transitions qui coûtent.",
            champs: [
                { id: "messages", libelle: "Messages par jour", unite: "msg", defaut: 45, min: 1, max: 500, pas: 5 },
                { id: "traitement", libelle: "Temps de traitement par message", unite: "min", defaut: 1.5, min: 0.1, max: 30, pas: 0.5 },
                { id: "reprise", libelle: "Reprise après chaque interruption", unite: "min", defaut: 4, min: 0, max: 30, pas: 1 },
                { id: "lots", libelle: "Nombre de passages par jour si traité par lots", unite: "fois", defaut: 2, min: 1, max: 20, pas: 1 }
            ],
            calculer: ({ messages, traitement, reprise, lots }) => {
                const pur = messages * traitement;
                const auFilDeLeau = pur + messages * reprise;
                const parLots = pur + lots * reprise;
                return [
                    { libelle: "Au fil de l'eau", valeur: heuresMinutes(auFilDeLeau) },
                    { libelle: "En " + nf(lots) + " passage(s) groupé(s)", valeur: heuresMinutes(parLots), fort: true },
                    { libelle: "Économie", valeur: heuresMinutes(auFilDeLeau - parLots) + " par jour" }
                ];
            },
            lecon: "Ce n'est pas le nombre de messages qui coûte cher, c'est le nombre de fois qu'on les regarde."
        },

        "cout-opportunite": {
            type: "controle",
            titre: "Faut-il dire oui ?",
            intro: "Cochez ce que vous avez vérifié avant d'accepter cette demande.",
            points: [
                { texte: "Je sais précisément ce que je ne ferai pas si j'accepte" },
                { texte: "Cette chose abandonnée est moins importante que la demande" },
                { texte: "J'ai estimé la durée réelle, pas la durée annoncée" },
                { texte: "J'ai vérifié qu'elle rentre dans mon temps disponible, pas dans ma journée théorique" },
                { texte: "Si je dois refuser, j'ai une formulation qui rend le coût visible", aide: "report daté, arbitrage explicite, version réduite" },
                { texte: "La personne qui demande sait ce que cela décale" }
            ],
            verdict: (n, total) => {
                if (n === total) return { texte: "Décision instruite : c'est un vrai oui, ou un refus argumenté.", ton: "bon" };
                if (n >= 3) return { texte: "Il manque l'essentiel : nommer ce qui sera abandonné.", ton: "moyen" };
                return { texte: "Accepter ici, c'est refuser autre chose sans l'avoir décidé.", ton: "alerte" };
            },
            lecon: "Personne ne vient réclamer le travail qui n'a pas été fait. C'est ce qui rend ce coût invisible."
        },

        // ---------- Niveau avancé ----------

        "rythme-energie": {
            type: "controle",
            titre: "Travaillez-vous au bon moment ?",
            intro: "Cochez ce qui décrit votre journée réelle.",
            points: [
                { texte: "Je connais mon meilleur créneau de concentration", aide: "observé, pas supposé" },
                { texte: "Le travail de fond y est effectivement placé" },
                { texte: "Les tâches mécaniques occupent le creux d'après-midi" },
                { texte: "Je ne consacre pas ma première heure aux messages" },
                { texte: "Je prends des pauses qui changent de registre", aide: "consulter son téléphone n'est pas une pause pour l'attention" },
                { texte: "Je n'allonge pas la journée quand le travail déborde", aide: "le total produit sur la semaine baisse" }
            ],
            verdict: (n, total) => {
                if (n === total) return { texte: "Vos heures les plus productives servent ce qui compte le plus.", ton: "bon" };
                if (n >= 4) return { texte: "Bonne base. Protéger la première heure est le changement le plus rentable.", ton: "moyen" };
                return { texte: "Votre meilleur créneau est probablement consacré aux priorités des autres.", ton: "alerte" };
            },
            lecon: "Deux heures au bon moment valent quatre heures au mauvais. C'est l'optimisation qui ne coûte rien."
        },

        "friction-habitude": {
            type: "controle",
            titre: "Votre habitude peut-elle tenir ?",
            intro: "Cochez ce qui est vrai de l'habitude que vous voulez installer.",
            points: [
                { texte: "Elle est rattachée à une action déjà automatique", aide: "le déclencheur existe, rien à retenir" },
                { texte: "Sa version minimale est ridiculement petite", aide: "« écrire une phrase », « ouvrir le fichier »" },
                { texte: "J'ai retiré de la friction devant elle", aide: "préparé la veille, outil déjà ouvert" },
                { texte: "J'ai ajouté de la friction devant ce qui la concurrence" },
                { texte: "J'ai une règle de reprise après une rupture", aide: "ne jamais manquer deux fois de suite" },
                { texte: "Je n'installe qu'une seule habitude à la fois" }
            ],
            verdict: (n, total) => {
                if (n === total) return { texte: "Cette habitude ne dépend pas de votre motivation. Elle a une vraie chance.", ton: "bon" };
                if (n >= 4) return { texte: "Bonne conception. La règle de reprise est ce qui décide au deuxième mois.", ton: "moyen" };
                return { texte: "Cette habitude repose encore sur la volonté, qui fluctue par nature.", ton: "alerte" };
            },
            lecon: "Ajouter vingt secondes d'effort réduit fortement la fréquence d'un geste. En retirer vingt l'augmente d'autant."
        },

        "cout-reunion": {
            titre: "Combien coûte cette réunion ?",
            intro: "Une réunion coûte sa durée multipliée par le nombre de participants.",
            champs: [
                { id: "duree", libelle: "Durée", unite: "h", defaut: 1.5, min: 0.25, max: 8, pas: 0.25 },
                { id: "participants", libelle: "Participants", unite: "pers.", defaut: 7, min: 1, max: 200, pas: 1 },
                { id: "taux", libelle: "Coût horaire chargé moyen", unite: "€/h", defaut: 45, min: 0, max: 500, pas: 5 },
                { id: "frequence", libelle: "Occurrences par an", unite: "fois", defaut: 48, min: 1, max: 365, pas: 1 }
            ],
            calculer: ({ duree, participants, taux, frequence }) => {
                const heuresSeance = duree * participants;
                const coutSeance = heuresSeance * taux;
                return [
                    { libelle: "Heures de travail par séance", valeur: nf(heuresSeance, 1) + " h" },
                    { libelle: "Coût par séance", valeur: euros(coutSeance) },
                    { libelle: "Coût annuel", valeur: euros(coutSeance * frequence), fort: true }
                ];
            },
            lecon: "Une heure à huit personnes, c'est une journée de travail. La question « faut-il convier tout le monde ? » se pose alors autrement."
        },

        "revue-reguliere": {
            type: "controle",
            titre: "Votre système résiste-t-il à la dérive ?",
            intro: "Cochez ce qui a effectivement lieu, à intervalle régulier.",
            points: [
                { texte: "Une revue hebdomadaire de trente minutes, à heure fixe dans l'agenda" },
                { texte: "Un point mensuel sur ce qui n'a pas avancé, et pourquoi" },
                { texte: "Un recul trimestriel sur ce qui compte vraiment" },
                { texte: "Je pose devant chaque projet : « si cela n'existait pas, est-ce que je le commencerais ? »" },
                { texte: "J'ai arrêté au moins un engagement au cours des six derniers mois" },
                { texte: "Rien de nouveau n'entre sans que quelque chose sorte" }
            ],
            verdict: (n, total) => {
                if (n === total) return { texte: "Votre système se corrige tout seul. C'est ce qui le fera durer.", ton: "bon" };
                if (n >= 4) return { texte: "Bonne discipline. Arrêter des choses reste la partie la plus difficile.", ton: "moyen" };
                return { texte: "Sans revue, ce système dérivera jusqu'à être abandonné en bloc.", ton: "alerte" };
            },
            lecon: "Quand un système se dérègle, changer d'outil reporte le problème d'un trimestre. Ce qui manquait, c'était la revue."
        },

        // =====================================================================
        // APPRENDRE A APPRENDRE
        // =====================================================================

        "courbe-oubli": {
            titre: "Que reste-t-il dans une semaine ?",
            intro: "Sans révision, l'oubli suit une courbe : très rapide au début, puis de plus en plus lente.",
            champs: [
                { id: "elements", libelle: "Éléments appris", unite: "", defaut: 40, min: 1, max: 500, pas: 1 },
                { id: "jours", libelle: "Jours écoulés", unite: "j", defaut: 7, min: 0, max: 365, pas: 1 }
            ],
            calculer: ({ elements, jours }) => {
                const retention = retenu(jours);
                const restants = elements * retention / 100;
                return [
                    { libelle: "Part encore su", valeur: pourcent(retention, 0) },
                    { libelle: "Éléments encore su", valeur: nf(Math.round(restants)) + " sur " + nf(elements), fort: true },
                    { libelle: "Éléments à réapprendre", valeur: nf(Math.round(elements - restants)) }
                ];
            },
            lecon: "L'essentiel de la perte a lieu dans les deux premiers jours. C'est là qu'une révision coûte le moins et rapporte le plus."
        },

        "repetition-espacee": {
            titre: "Combien coûte vraiment une révision espacée ?",
            intro: "Comparé à tout relire chaque semaine, pour la même échéance.",
            champs: [
                { id: "elements", libelle: "Éléments à retenir", unite: "", defaut: 60, min: 1, max: 2000, pas: 10 },
                { id: "secondes", libelle: "Temps par élément et par passage", unite: "s", defaut: 8, min: 1, max: 120, pas: 1 },
                { id: "mois", libelle: "Horizon", unite: "mois", defaut: 6, min: 1, max: 60, pas: 1 }
            ],
            calculer: ({ elements, secondes, mois }) => {
                const horizon = mois * 30;
                // Intervalles classiques : chaque revision reussie multiplie le
                // suivant. On ne compte que les passages qui tombent avant
                // l echeance — reviser apres ne sert plus a rien.
                const passages = INTERVALLES.filter((j) => j <= horizon).length;
                const coutEspace = passages * elements * secondes;
                const coutHebdo = Math.floor(horizon / 7) * elements * secondes;
                return [
                    { libelle: "Passages de révision", valeur: nf(passages) },
                    { libelle: "Temps total, en espacé", valeur: heuresMinutes(coutEspace / 60), fort: true },
                    { libelle: "Temps total, en relisant chaque semaine", valeur: heuresMinutes(coutHebdo / 60) },
                    { libelle: "Rapport", valeur: coutEspace > 0 ? "× " + nf(coutHebdo / coutEspace, 1) + " moins de temps" : "—" }
                ];
            },
            lecon: "L'espacement ne demande pas plus de travail : il en demande beaucoup moins, au prix d'un calendrier à tenir."
        },

        "effet-test": {
            titre: "Relire, ou se tester ?",
            intro: "À temps de travail égal, réglez la part consacrée à vous interroger plutôt qu'à relire.",
            champs: [
                { id: "elements", libelle: "Éléments à retenir", unite: "", defaut: 100, min: 1, max: 500, pas: 10 },
                { id: "part", libelle: "Part du temps passée à se tester", unite: "%", defaut: 50, min: 0, max: 100, pas: 5 }
            ],
            calculer: ({ elements, part }) => {
                // Roediger & Karpicke : a une semaine, la relecture laisse
                // environ 40 % et le rappel actif environ 61 %, pour un temps
                // de travail identique. On interpole entre les deux.
                const retention = RELECTURE + (RAPPEL - RELECTURE) * (part / 100);
                const retenus = Math.round(elements * retention / 100);
                const parRelecture = Math.round(elements * RELECTURE / 100);
                return [
                    { libelle: "Rétention à une semaine", valeur: pourcent(retention, 0) },
                    { libelle: "Éléments encore su", valeur: nf(retenus) + " sur " + nf(elements), fort: true },
                    { libelle: "Écart avec la relecture seule", valeur: (retenus >= parRelecture ? "+ " : "− ") + nf(Math.abs(retenus - parRelecture)) + " éléments" }
                ];
            },
            lecon: "Se tester n'est pas une façon de vérifier qu'on a appris : c'est la façon d'apprendre. Le contrôle est l'exercice."
        },

        "illusion-maitrise": {
            type: "controle",
            titre: "Le savez-vous vraiment ?",
            intro: "Cochez ce qui est vrai d'un sujet que vous pensez maîtriser.",
            points: [
                { texte: "Je peux le réexpliquer sans regarder mes notes" },
                { texte: "Je peux l'expliquer à quelqu'un qui n'y connaît rien" },
                { texte: "Je sais donner un exemple qui n'était pas dans le cours" },
                { texte: "Je sais dire dans quels cas cela ne s'applique pas" },
                { texte: "Je m'en suis souvenu au moins une fois après plusieurs jours" },
                { texte: "Je peux le retrouver sans le reconnaître d'abord", aide: "reconnaître un texte n'est pas savoir le produire" }
            ],
            verdict: (n, total) => {
                if (n === total) return { texte: "C'est acquis. Rien de tout cela ne s'obtient en relisant.", ton: "bon" };
                if (n >= 4) return { texte: "Solide, mais incomplet : les cases restantes sont précisément celles que la relecture ne coche jamais.", ton: "moyen" };
                return { texte: "Sentiment de maîtrise sans les preuves. C'est le piège habituel de la relecture : le texte devient familier, pas connu.", ton: "alerte" };
            },
            lecon: "La familiarité se confond avec la connaissance. Un texte relu quatre fois paraît évident — et reste introuvable une semaine plus tard."
        },

        "entrelacement": {
            titre: "En blocs ou entrelacé ?",
            intro: "Réglez la part d'exercices mélangés plutôt que groupés par type.",
            champs: [
                { id: "exercices", libelle: "Exercices au total", unite: "", defaut: 48, min: 4, max: 500, pas: 4 },
                { id: "part", libelle: "Part d'exercices entrelacés", unite: "%", defaut: 50, min: 0, max: 100, pas: 10 }
            ],
            calculer: ({ exercices, part }) => {
                // Rohrer & Taylor : au test differe, la pratique groupee laisse
                // environ 20 % de reussite, l entrelacee environ 63 %.
                const differe = BLOC + (ENTRELACE - BLOC) * (part / 100);
                return [
                    { libelle: "Réussite au test différé", valeur: pourcent(differe, 0), fort: true },
                    { libelle: "Exercices réussis", valeur: nf(Math.round(exercices * differe / 100)) + " sur " + nf(exercices) },
                    { libelle: "Écart avec la pratique groupée", valeur: "+ " + nf(Math.round(exercices * (differe - BLOC) / 100)) + " exercices" }
                ];
            },
            lecon: "Grouper par type donne l'impression d'avancer plus vite : on applique la même méthode sans avoir à la choisir. Le test, lui, ne prévient pas du type."
        },

        "elaboration": {
            type: "controle",
            titre: "Traitez-vous vraiment ce que vous lisez ?",
            intro: "Cochez ce que vous faites réellement pendant une séance de travail.",
            points: [
                { texte: "Je me demande « pourquoi est-ce vrai ? » avant de passer à la suite" },
                { texte: "Je relie la notion à quelque chose que je connais déjà" },
                { texte: "Je reformule avec mes propres mots, pas ceux du cours" },
                { texte: "Je cherche un contre-exemple ou un cas limite" },
                { texte: "Je pose par écrit une question à laquelle le cours ne répond pas" },
                { texte: "Je m'arrête pour anticiper la suite avant de la lire" }
            ],
            verdict: (n, total) => {
                if (n >= total - 1) return { texte: "Vous traitez le contenu au lieu de le parcourir. C'est ce qui laisse une trace.", ton: "bon" };
                if (n >= 3) return { texte: "Bon départ. Les questions « pourquoi » et les contre-exemples sont ce qui rapporte le plus.", ton: "moyen" };
                return { texte: "Lecture passive : le texte défile et rien ne s'y accroche. Une seule question posée à voix haute change déjà le résultat.", ton: "alerte" };
            },
            lecon: "Une notion isolée s'oublie ; une notion rattachée à dix autres se retrouve par dix chemins."
        },

        "pratique-deliberee": {
            titre: "Où passe votre temps de travail ?",
            intro: "Le temps passé sur ce qu'on réussit déjà entretient ; il ne fait pas progresser.",
            champs: [
                { id: "heures", libelle: "Heures de travail par semaine", unite: "h", defaut: 5, min: 0.5, max: 60, pas: 0.5 },
                { id: "part", libelle: "Part passée sur ce que vous ratez", unite: "%", defaut: 20, min: 0, max: 100, pas: 5 },
                { id: "semaines", libelle: "Sur combien de semaines", unite: "sem.", defaut: 12, min: 1, max: 104, pas: 1 }
            ],
            calculer: ({ heures, part, semaines }) => {
                const utiles = heures * part / 100;
                return [
                    { libelle: "Heures utiles par semaine", valeur: heuresMinutes(utiles * 60), fort: true },
                    { libelle: "Heures de confort par semaine", valeur: heuresMinutes((heures - utiles) * 60) },
                    { libelle: "Heures utiles sur la période", valeur: heuresMinutes(utiles * semaines * 60) },
                    { libelle: "À 60 %, la même période donnerait", valeur: heuresMinutes(heures * 0.6 * semaines * 60) }
                ];
            },
            lecon: "Refaire ce qu'on réussit est agréable et mesurable. Travailler ce qu'on rate est désagréable et c'est la seule chose qui déplace le niveau."
        },

        "sommeil-consolidation": {
            type: "controle",
            titre: "Votre nuit fait-elle son travail ?",
            intro: "La mémoire se consolide pendant le sommeil, pas pendant la révision.",
            points: [
                { texte: "Je dors au moins sept heures la nuit qui suit un apprentissage" },
                { texte: "Je révise le soir plutôt que de tout repousser au matin de l'examen" },
                { texte: "Je ne remplace pas une nuit par une nuit blanche de révision" },
                { texte: "Mes horaires de coucher varient de moins d'une heure d'un jour à l'autre" },
                { texte: "Je fais des pauses réelles pendant l'apprentissage, sans écran" },
                { texte: "Je n'attends pas d'un rattrapage le week-end qu'il annule la semaine" }
            ],
            verdict: (n, total) => {
                if (n >= total - 1) return { texte: "Vos nuits travaillent pour vous. C'est l'heure de révision la moins chère qui existe.", ton: "bon" };
                if (n >= 3) return { texte: "Correct. La nuit qui suit l'apprentissage est celle qui compte le plus.", ton: "moyen" };
                return { texte: "Une nuit blanche avant un examen échange la consolidation contre quelques heures de relecture. Le change est mauvais.", ton: "alerte" };
            },
            lecon: "Réviser tard puis dormir bat réviser tard puis veiller. Ce n'est pas une question de discipline, c'est le moment où le cerveau range."
        },

        "couverture-vocabulaire": {
            titre: "Combien de mots faut-il pour lire ?",
            intro: "Les mots les plus fréquents couvrent une part énorme d'un texte — et les suivants rapportent de moins en moins.",
            champs: [
                { id: "mots", libelle: "Mots connus", unite: "mots", defaut: 2000, min: 100, max: 20000, pas: 100 },
                { id: "longueur", libelle: "Mots par page", unite: "mots", defaut: 250, min: 50, max: 1000, pas: 50 }
            ],
            calculer: ({ mots, longueur }) => {
                const couverture = couvertureLexicale(mots);
                const inconnus = longueur * (100 - couverture) / 100;
                let verdict;
                if (couverture >= 98) verdict = "lecture fluide";
                else if (couverture >= 95) verdict = "lecture possible, dictionnaire à portée";
                else if (couverture >= 90) verdict = "lecture laborieuse";
                else verdict = "lecture impossible sans traduction";
                return [
                    { libelle: "Couverture du texte", valeur: pourcent(couverture, 1), fort: true },
                    { libelle: "Mots inconnus par page", valeur: nf(Math.round(inconnus)) },
                    { libelle: "Soit un mot inconnu tous les", valeur: inconnus >= 1 ? nf(Math.round(longueur / inconnus)) + " mots" : "plus d'une page" },
                    { libelle: "Verdict", valeur: verdict }
                ];
            },
            lecon: "Les mille premiers mots font le gros du travail. Les mille suivants en font dix fois moins — d'où l'intérêt de les apprendre dans l'ordre de leur fréquence."
        },

        "transfert": {
            type: "controle",
            titre: "Ce que vous apprenez servira-t-il ailleurs ?",
            intro: "Cochez ce qui est vrai de votre façon d'apprendre ce sujet.",
            points: [
                { texte: "Je m'entraîne sur des cas variés, pas toujours le même format" },
                { texte: "Je m'entraîne dans les conditions où je devrai m'en servir" },
                { texte: "Je sais énoncer le principe, pas seulement la recette" },
                { texte: "J'ai déjà appliqué la notion à un cas qu'on ne m'avait pas montré" },
                { texte: "Je m'entraîne sans les indices qui seront absents le jour venu" },
                { texte: "Je ne compte pas sur un exercice de logique pour améliorer autre chose", aide: "les jeux d'entraînement cérébral améliorent surtout ces jeux" }
            ],
            verdict: (n, total) => {
                if (n >= total - 1) return { texte: "Ce que vous apprenez a une chance de sortir de la salle de classe.", ton: "bon" };
                if (n >= 3) return { texte: "Partiel. La variété des cas est le levier le plus fort, et le plus négligé.", ton: "moyen" };
                return { texte: "Apprentissage collé à son contexte : il fonctionnera sur les exercices du cours, et nulle part ailleurs.", ton: "alerte" };
            },
            lecon: "Le transfert ne va pas de soi : il se prépare. Ce qu'on apprend dans un seul décor reste attaché à ce décor."
        },

        "evaluer-methode": {
            type: "controle",
            titre: "Cette méthode vaut-elle votre temps ?",
            intro: "Cochez ce qui est vrai de la méthode d'apprentissage qu'on vous propose.",
            points: [
                { texte: "Elle a été comparée à une autre méthode, pas seulement à rien" },
                { texte: "Elle a été mesurée après plusieurs jours, pas juste après la séance" },
                { texte: "Elle mesure ce qu'on retient, pas ce qu'on a ressenti" },
                { texte: "Elle ne repose pas sur les « styles d'apprentissage »", aide: "visuel, auditif, kinesthésique : hypothèse non confirmée par les études" },
                { texte: "Elle n'invoque pas de pourcentages du type « on retient 10 % de ce qu'on lit »", aide: "cette pyramide n'a aucune source" },
                { texte: "Elle ne promet pas un résultat sans effort" }
            ],
            verdict: (n, total) => {
                if (n >= total - 1) return { texte: "Méthode défendable. Elle mérite qu'on lui consacre quelques semaines.", ton: "bon" };
                if (n >= 4) return { texte: "À creuser. Vérifiez surtout le délai du test : c'est là que la plupart des méthodes s'effondrent.", ton: "moyen" };
                return { texte: "Beaucoup de promesses, peu de mesures. Le domaine en est plein.", ton: "alerte" };
            },
            lecon: "Une méthode qui rend l'apprentissage agréable sur le moment est souvent celle qui laisse le moins de traces. La difficulté utile n'a pas bonne presse."
        },

        "systeme-apprentissage": {
            type: "controle",
            titre: "Votre système tiendra-t-il six mois ?",
            intro: "Cochez ce qui existe déjà, pas ce que vous comptez mettre en place.",
            points: [
                { texte: "Un endroit unique où atterrit ce que je veux retenir" },
                { texte: "Un moment fixe pour réviser, dans l'agenda" },
                { texte: "Des questions écrites, pas seulement des notes à relire" },
                { texte: "Un calendrier d'espacement, même approximatif" },
                { texte: "Une trace de ce que je rate régulièrement" },
                { texte: "Une séance ramenée à cinq minutes les jours chargés", aide: "ce qui évite de rompre la série" }
            ],
            verdict: (n, total) => {
                if (n >= total - 1) return { texte: "Un système, et non une bonne intention. C'est ce qui survit aux semaines difficiles.", ton: "bon" };
                if (n >= 4) return { texte: "Presque. Le créneau fixe et la version courte sont ce qui fait tenir les autres.", ton: "moyen" };
                return { texte: "Rien de tout cela ne demande de motivation une fois posé — c'est précisément pour cela qu'il faut le poser.", ton: "alerte" };
            },
            lecon: "Ce qui dure ne dépend pas de l'envie du jour. Un créneau et une version de cinq minutes valent mieux qu'un plan ambitieux."
        },

        // =====================================================================
        // DROIT ET DEMARCHES ADMINISTRATIVES
        // =====================================================================

        "source-fiable": {
            type: "controle",
            titre: "Cette réponse juridique vaut-elle quelque chose ?",
            intro: "Cochez ce qui est vrai de la source où vous venez de lire une règle.",
            points: [
                { texte: "Elle vient d'un site officiel", aide: "service-public.fr, Légifrance, un site en .gouv.fr" },
                { texte: "Elle cite un article de loi ou de code que je peux aller vérifier" },
                { texte: "Elle porte une date, et cette date est récente" },
                { texte: "Elle concerne bien le droit français", aide: "beaucoup de réponses en ligne sont belges, suisses ou canadiennes" },
                { texte: "Elle distingue ce qui est obligatoire de ce qui est d'usage" },
                { texte: "Ce n'est pas un message de forum ni une réponse d'IA prise telle quelle" }
            ],
            verdict: (n, total) => {
                if (n >= total - 1) return { texte: "Source solide. Vous pouvez vous en servir, et la citer si besoin.", ton: "bon" };
                if (n >= 4) return { texte: "Probablement juste, mais vérifiez la date et l'article cité avant d'agir.", ton: "moyen" };
                return { texte: "À ne pas utiliser pour décider. Le droit change, et une réponse plausible peut être périmée ou étrangère.", ton: "alerte" };
            },
            lecon: "La plupart des erreurs juridiques du quotidien ne viennent pas d'une règle mal comprise, mais d'une règle qui n'existe plus, ou qui n'a jamais existé en France."
        },

        "delais-consommateur": {
            titre: "Que vous reste-t-il comme recours ?",
            intro: "Pour un achat auprès d'un professionnel. Comptez à partir du jour où vous avez reçu le bien.",
            champs: [
                { id: "jours", libelle: "Jours depuis la réception", unite: "j", defaut: 20, min: 0, max: 1500, pas: 1 },
                { id: "presomption", libelle: "Présomption : 24 (neuf) ou 12 (occasion)", unite: "mois", defaut: 24, min: 12, max: 24, pas: 12 }
            ],
            calculer: ({ jours, presomption }) => {
                const resteRetractation = JOURS_RETRACTATION - jours;
                const resteConformite = MOIS_CONFORMITE * JOURS_PAR_MOIS - jours;
                const restePresomption = presomption * JOURS_PAR_MOIS - jours;
                return [
                    {
                        libelle: "Rétractation (achat à distance)",
                        valeur: resteRetractation > 0 ? "encore " + nf(resteRetractation) + " jour(s)" : "délai expiré"
                    },
                    {
                        libelle: "Garantie légale de conformité",
                        valeur: resteConformite > 0 ? "encore " + nf(Math.floor(resteConformite / JOURS_PAR_MOIS)) + " mois" : "délai expiré",
                        fort: true
                    },
                    {
                        libelle: "C'est au vendeur de prouver que le bien était conforme",
                        valeur: restePresomption > 0 ? "encore " + nf(Math.floor(restePresomption / JOURS_PAR_MOIS)) + " mois" : "terminé : la preuve vous revient"
                    },
                    { libelle: "Vice caché", valeur: "2 ans à compter de la découverte" }
                ];
            },
            lecon: "La rétractation ne dure que quatorze jours et ne vaut qu'à distance ; la garantie de conformité dure deux ans et vaut partout. Ce sont deux droits distincts, souvent confondus."
        },

        "lettre-efficace": {
            type: "controle",
            titre: "Votre courrier vaudra-t-il preuve ?",
            intro: "Cochez ce que contient réellement le courrier que vous vous apprêtez à envoyer.",
            points: [
                { texte: "Vos coordonnées complètes et la référence du dossier ou du contrat" },
                { texte: "Les faits, datés, sans commentaire ni reproche" },
                { texte: "Ce que vous demandez, précisément", aide: "« le remboursement de 149 € », pas « un geste »" },
                { texte: "Un délai de réponse, raisonnable et écrit" },
                { texte: "Le fondement invoqué", aide: "un article de loi, ou à défaut la clause du contrat" },
                { texte: "Un envoi qui laisse une trace", aide: "recommandé avec accusé de réception, ou courriel conservé" }
            ],
            verdict: (n, total) => {
                if (n >= total - 1) return { texte: "Courrier utilisable. S'il reste sans réponse, il servira de point de départ à la suite.", ton: "bon" };
                if (n >= 4) return { texte: "Correct. La demande chiffrée et le délai écrit sont ce qui manque le plus souvent.", ton: "moyen" };
                return { texte: "Ce courrier exprime un mécontentement. Il ne constitue pas une mise en demeure et ne fera courir aucun délai.", ton: "alerte" };
            },
            lecon: "Un courrier de réclamation n'a pas à être bien tourné. Il doit être daté, chiffré, fondé et prouvable — le reste est décoratif."
        },

        "conserver-papiers": {
            type: "controle",
            titre: "Gardez-vous ce qu'il faut, aussi longtemps qu'il faut ?",
            intro: "Cochez ce qui est vrai de vos archives personnelles.",
            points: [
                { texte: "Je garde mes bulletins de paie sans limite de durée", aide: "ils servent au calcul de la retraite" },
                { texte: "Je garde mes avis d'imposition au moins trois ans" },
                { texte: "Je garde mes quittances de loyer au moins trois ans après le départ" },
                { texte: "Je garde les factures de travaux dix ans", aide: "durée de la garantie décennale" },
                { texte: "J'ai une copie numérique de mes papiers d'identité, stockée à part" },
                { texte: "Quelqu'un d'autre saurait où les trouver en cas de besoin" }
            ],
            verdict: (n, total) => {
                if (n >= total - 1) return { texte: "Archives solides. C'est ce qui rend une contestation possible plutôt que théorique.", ton: "bon" };
                if (n >= 4) return { texte: "Bon ensemble. Les bulletins de paie et les factures de travaux sont ceux qu'on jette le plus vite, et qu'on regrette le plus.", ton: "moyen" };
                return { texte: "Sans document, un droit reste un droit — mais il n'est pas défendable. La charge de la preuve pèse sur celui qui réclame.", ton: "alerte" };
            },
            lecon: "Un litige se gagne rarement sur le fond et souvent sur la pièce qu'on peut produire. Jeter trop tôt coûte plus cher que classer."
        },

        "depot-de-garantie": {
            titre: "Votre dépôt de garantie vous revient-il ?",
            intro: "Location vide ou meublée, après la remise des clés.",
            champs: [
                { id: "depot", libelle: "Dépôt de garantie versé", unite: "€", defaut: 700, min: 0, max: 20000, pas: 50 },
                { id: "loyer", libelle: "Loyer mensuel hors charges", unite: "€", defaut: 700, min: 0, max: 10000, pas: 50 },
                { id: "retenues", libelle: "Retenues justifiées par le bailleur", unite: "€", defaut: 0, min: 0, max: 20000, pas: 50 },
                { id: "retard", libelle: "Mois de retard entamés", unite: "mois", defaut: 3, min: 0, max: 36, pas: 1 }
            ],
            calculer: ({ depot, loyer, retenues, retard }) => {
                const du = Math.max(0, depot - retenues);
                const majoration = retard * loyer * MAJORATION_DEPOT / 100;
                return [
                    { libelle: "Somme qui vous revient", valeur: euros(du) },
                    { libelle: "Délai légal de restitution", valeur: "1 mois si l'état des lieux est conforme, 2 mois sinon" },
                    { libelle: "Majoration de retard", valeur: euros(majoration) + " (" + nf(MAJORATION_DEPOT) + " % du loyer par mois entamé)" },
                    { libelle: "Total réclamable", valeur: euros(du + majoration), fort: true }
                ];
            },
            lecon: "La majoration n'est pas une faveur à demander : elle est due de plein droit. Encore faut-il la réclamer — personne ne la verse spontanément."
        },

        "preavis-bail": {
            type: "controle",
            titre: "Votre congé est-il valable ?",
            intro: "Cochez ce qui est vrai du congé que vous donnez à votre bailleur.",
            points: [
                { texte: "Il est donné par écrit", aide: "recommandé avec accusé de réception, acte d'huissier ou remise en main propre contre signature" },
                { texte: "Je connais la durée de mon préavis", aide: "3 mois en location vide, 1 mois en meublé ou en zone tendue" },
                { texte: "Je sais que le préavis court à compter de la réception, pas de l'envoi" },
                { texte: "Si j'invoque un préavis réduit, j'en donne le motif dans la lettre", aide: "sans motif écrit, le préavis reste de trois mois" },
                { texte: "J'ai gardé l'état des lieux d'entrée pour le comparer à celui de sortie" },
                { texte: "J'ai relevé les compteurs et gardé une photo datée du logement" }
            ],
            verdict: (n, total) => {
                if (n >= total - 1) return { texte: "Congé en règle. Les deux dernières cases sont ce qui protège le dépôt de garantie.", ton: "bon" };
                if (n >= 4) return { texte: "L'essentiel y est. Attention au motif écrit : c'est lui qui justifie un préavis réduit.", ton: "moyen" };
                return { texte: "Congé fragile. Un préavis mal donné se prolonge, et un mois de loyer supplémentaire coûte plus cher qu'un recommandé.", ton: "alerte" };
            },
            lecon: "Le point de départ du préavis est la réception, jamais l'envoi. Deux jours de courrier peuvent décaler la sortie d'un mois entier."
        },

        "periode-essai": {
            titre: "Où en êtes-vous de votre période d'essai ?",
            intro: "Contrat à durée indéterminée. La durée initiale dépend de la catégorie : 2 mois employé, 3 mois agent de maîtrise, 4 mois cadre.",
            champs: [
                { id: "duree", libelle: "Durée initiale prévue", unite: "mois", defaut: 4, min: 1, max: 4, pas: 1 },
                { id: "jours", libelle: "Jours depuis l'embauche", unite: "j", defaut: 45, min: 0, max: 400, pas: 1 }
            ],
            calculer: ({ duree, jours }) => {
                const total = duree * JOURS_PAR_MOIS;
                const reste = total - jours;
                return [
                    {
                        libelle: "Fin de la période d'essai",
                        valeur: reste > 0 ? "dans " + nf(Math.round(reste)) + " jour(s)" : "dépassée depuis " + nf(Math.round(-reste)) + " jour(s)",
                        fort: true
                    },
                    { libelle: "Durée maximale avec renouvellement", valeur: nf(duree * 2) + " mois" },
                    { libelle: "Délai de prévenance applicable aujourd'hui", valeur: delaiDePrevenance(jours) },
                    { libelle: "Renouvellement", valeur: "possible seulement si le contrat le prévoit et avec votre accord écrit" }
                ];
            },
            lecon: "Le renouvellement ne se présume jamais : sans clause au contrat et sans accord écrit, la période d'essai s'arrête à sa durée initiale."
        },

        "micro-entreprise": {
            type: "controle",
            titre: "La micro-entreprise vous convient-elle ?",
            intro: "Cochez ce qui correspond à votre situation réelle.",
            points: [
                { texte: "Mon chiffre d'affaires reste sous les seuils du régime", aide: "seuils révisés régulièrement : à vérifier sur service-public.fr" },
                { texte: "Mes charges réelles sont faibles", aide: "en micro, elles ne sont pas déductibles : l'abattement est forfaitaire" },
                { texte: "Je n'ai pas besoin de récupérer la TVA sur mes achats" },
                { texte: "Je n'ai pas d'associé et n'envisage pas d'en prendre" },
                { texte: "Je n'ai pas besoin de protéger un patrimoine important" },
                { texte: "J'ai vérifié que mon activité est éligible", aide: "certaines professions en sont exclues" }
            ],
            verdict: (n, total) => {
                if (n >= total - 1) return { texte: "La micro-entreprise est probablement adaptée. C'est le régime le plus simple à ouvrir et à fermer.", ton: "bon" };
                if (n >= 4) return { texte: "Possible, mais regardez de près les cases non cochées : ce sont elles qui coûtent cher en cours de route.", ton: "moyen" };
                return { texte: "Plusieurs signaux pointent vers une autre forme. Un rendez-vous gratuit en chambre consulaire vaut mieux qu'un choix par défaut.", ton: "alerte" };
            },
            lecon: "En micro-entreprise, les charges ne se déduisent pas : l'abattement est forfaitaire. Une activité à fortes dépenses y est fiscalement pénalisée, quel que soit son chiffre d'affaires."
        },

        "clauses-abusives": {
            type: "controle",
            titre: "Ce contrat contient-il des clauses à écarter ?",
            intro: "Contrat entre un professionnel et un particulier. Cochez ce que vous y trouvez.",
            points: [
                { texte: "Une clause qui supprime ou réduit le droit à réparation en cas de faute du professionnel" },
                { texte: "Une clause qui autorise le professionnel à modifier le contrat seul, sans motif prévu" },
                { texte: "Une clause qui impose une preuve impossible à apporter" },
                { texte: "Une clause qui prive de la garantie légale de conformité" },
                { texte: "Une clause qui impose de renoncer à saisir un juge" },
                { texte: "Une clause qui engage sans durée ni possibilité de résilier" }
            ],
            verdict: (n) => {
                if (n === 0) return { texte: "Rien de manifestement abusif dans cette liste. Cela ne dispense pas de lire les conditions de résiliation.", ton: "bon" };
                if (n <= 2) return { texte: "Une clause abusive est réputée non écrite : elle ne s'applique pas, même signée. Le reste du contrat, lui, reste valable.", ton: "moyen" };
                return { texte: "Beaucoup de clauses déséquilibrées. Signer n'y change rien — mais mieux vaut le savoir avant qu'après.", ton: "alerte" };
            },
            lecon: "Une clause abusive est réputée non écrite. Signer un contrat qui en contient ne la rend pas valable : ce que le contrat retire à la loi, la loi le reprend."
        },

        "prescription": {
            titre: "Est-il encore temps d'agir ?",
            intro: "Délai de droit commun : 5 ans. Certains délais sont plus courts — 2 ans pour un professionnel réclamant à un particulier, 3 ans pour les salaires ou les loyers.",
            champs: [
                { id: "ecoules", libelle: "Mois écoulés depuis les faits", unite: "mois", defaut: 36, min: 0, max: 240, pas: 1 },
                { id: "delai", libelle: "Délai applicable", unite: "ans", defaut: 5, min: 1, max: 30, pas: 1 }
            ],
            calculer: ({ ecoules, delai }) => {
                const total = delai * 12;
                const reste = total - ecoules;
                const annees = Math.floor(Math.abs(reste) / 12);
                const mois = Math.abs(reste) % 12;
                // « 2 an(s) 0 mois » se lit mal : on n affiche que ce qui existe.
                const enClair = [
                    annees ? nf(annees) + " an" + (annees > 1 ? "s" : "") : "",
                    mois ? nf(mois) + " mois" : ""
                ].filter(Boolean).join(" ") || "0 mois";
                return [
                    { libelle: "Délai total", valeur: nf(delai) + " ans" },
                    { libelle: "Déjà écoulé", valeur: nf(ecoules) + " mois" },
                    {
                        libelle: reste > 0 ? "Il vous reste" : "Prescrit depuis",
                        valeur: enClair,
                        fort: true
                    },
                    { libelle: "Verdict", valeur: reste > 0 ? "l'action est encore ouverte" : "l'action n'est plus recevable" }
                ];
            },
            lecon: "La prescription s'apprécie à la date où l'on saisit le juge, pas à celle où l'on commence à s'en occuper. Une mise en demeure ne l'interrompt pas ; une assignation, si."
        },

        "cout-litige": {
            titre: "Le procès en vaut-il la peine ?",
            intro: "Une estimation honnête avant de saisir un juge — pour comparer avec un règlement amiable.",
            champs: [
                { id: "montant", libelle: "Somme réclamée", unite: "€", defaut: 1500, min: 0, max: 200000, pas: 100 },
                { id: "honoraires", libelle: "Frais estimés", unite: "€", defaut: 1200, min: 0, max: 50000, pas: 100 },
                { id: "chances", libelle: "Chances de gagner, à votre estime", unite: "%", defaut: 60, min: 0, max: 100, pas: 5 }
            ],
            calculer: ({ montant, honoraires, chances }) => {
                const p = chances / 100;
                const siGagne = montant - honoraires;
                const esperance = p * siGagne - (1 - p) * honoraires;
                return [
                    { libelle: "Si vous gagnez", valeur: euros(siGagne) },
                    // Le conciliateur de justice est gratuit : des frais nuls
                    // sont un cas reel, et « − 0 € » se lit mal.
                    { libelle: "Si vous perdez", valeur: honoraires > 0 ? "− " + euros(honoraires) : "0 €" },
                    { libelle: "Résultat moyen attendu", valeur: (esperance >= 0 ? "" : "− ") + euros(Math.abs(esperance)), fort: true },
                    {
                        libelle: "Verdict",
                        valeur: esperance >= 0
                            ? "l'action se défend, sans compter le temps qu'elle prendra"
                            : "un accord amiable, même partiel, rapporterait davantage"
                    }
                ];
            },
            lecon: "Sous 5 000 €, l'avocat n'est pas obligatoire et le conciliateur de justice est gratuit. Beaucoup de litiges du quotidien ne valent économiquement pas le procès qu'ils méritent moralement."
        },

        "droits-rgpd": {
            type: "controle",
            titre: "Savez-vous ce que vous pouvez exiger ?",
            intro: "Cochez les droits que vous savez pouvoir exercer auprès de n'importe quelle entreprise détenant vos données.",
            points: [
                { texte: "Obtenir la copie de toutes les données détenues sur moi" },
                { texte: "Faire corriger une information inexacte" },
                { texte: "Faire effacer mes données, hors obligation légale de conservation" },
                { texte: "M'opposer à la prospection commerciale, sans avoir à me justifier" },
                { texte: "Récupérer mes données dans un format réutilisable" },
                { texte: "Saisir la CNIL gratuitement si l'entreprise ne répond pas sous un mois" }
            ],
            verdict: (n, total) => {
                if (n >= total - 1) return { texte: "Vous connaissez vos droits. Ils s'exercent par un simple courriel, sans motif à donner.", ton: "bon" };
                if (n >= 4) return { texte: "Bonne base. Le droit à la portabilité et le délai d'un mois sont les moins connus, et les plus utiles.", ton: "moyen" };
                return { texte: "Ces droits existent depuis 2018 et ne coûtent rien à exercer. Ils sont surtout inutilisés.", ton: "alerte" };
            },
            lecon: "Une demande d'accès se fait par courriel, sans justification, et l'entreprise a un mois pour répondre. Le silence est lui-même un motif de plainte."
        },

        // =====================================================================
        // SANTE ET BIEN-ETRE AU TRAVAIL
        //
        // Aucun de ces outils n evalue un etat de sante. Les controles portent
        // sur des conditions de travail et sur des demarches — jamais sur des
        // symptomes notes puis totalises. Un score de sante mentale rendu par
        // une page web serait a la fois faux et dangereux.
        // =====================================================================

        "poste-de-travail": {
            type: "controle",
            titre: "Votre poste est-il correctement réglé ?",
            intro: "Installez-vous comme d'habitude, puis cochez ce qui est vrai.",
            points: [
                { texte: "Le haut de l'écran est à hauteur des yeux, ou juste en dessous" },
                { texte: "L'écran est à environ une longueur de bras" },
                { texte: "Mes avant-bras sont horizontaux, épaules relâchées" },
                { texte: "Mes pieds reposent à plat, cuisses horizontales" },
                { texte: "L'écran est perpendiculaire à la fenêtre", aide: "ni face à la lumière, ni dos à elle" },
                { texte: "Sur portable, j'utilise un support et un clavier séparé", aide: "sinon l'écran et les mains ne peuvent pas être bien placés en même temps" }
            ],
            verdict: (n, total) => {
                if (n >= total - 1) return { texte: "Poste correctement réglé. Le réglage tient des mois : c'est du temps très bien placé.", ton: "bon" };
                if (n >= 4) return { texte: "Bonne base. La hauteur d'écran et la position des avant-bras sont les deux réglages qui pèsent le plus.", ton: "moyen" };
                return { texte: "Plusieurs réglages à reprendre. Une gêne quotidienne finit par devenir une douleur installée.", ton: "alerte" };
            },
            lecon: "Un portable posé sur un bureau place forcément soit l'écran trop bas, soit les mains trop haut. Le support et le clavier séparé règlent une contradiction, pas un confort."
        },

        "sedentarite": {
            titre: "Combien de temps passez-vous assis ?",
            intro: "Et ce que l'activité physique en compense réellement.",
            champs: [
                { id: "heures", libelle: "Heures assis par jour", unite: "h", defaut: 9, min: 0, max: 20, pas: 0.5 },
                { id: "jours", libelle: "Jours par semaine", unite: "j", defaut: 5, min: 1, max: 7, pas: 1 },
                { id: "activite", libelle: "Minutes d'activité modérée par semaine", unite: "min", defaut: 60, min: 0, max: 1000, pas: 10 }
            ],
            calculer: ({ heures, jours, activite }) => {
                const parSemaine = heures * jours;
                const manque = Math.max(0, ACTIVITE_OMS - activite);
                return [
                    { libelle: "Heures assis par semaine", valeur: souple(parSemaine) + " h" },
                    { libelle: "Soit, sur une année de travail", valeur: nf(Math.round(parSemaine * 45)) + " h", fort: true },
                    { libelle: "Repère de l'OMS", valeur: nf(ACTIVITE_OMS) + " min d'activité modérée par semaine" },
                    {
                        libelle: manque > 0 ? "Il vous manque" : "Repère atteint",
                        valeur: manque > 0
                            ? nf(manque) + " min par semaine"
                            : (activite > ACTIVITE_OMS ? "+ " + nf(activite - ACTIVITE_OMS) + " min au-delà" : "tout juste")
                    }
                ];
            },
            lecon: "Couper la position assise toutes les heures compte autant que la durée totale. Se lever deux minutes n'a l'air de rien et ne se remplace pas par une séance de sport le samedi."
        },

        "pauses-legales": {
            titre: "Vos pauses sont-elles à la hauteur ?",
            intro: "Au-delà de six heures de travail, vingt minutes de pause sont dues. C'est un plancher, pas un objectif.",
            champs: [
                { id: "travail", libelle: "Heures travaillées dans la journée", unite: "h", defaut: 8, min: 1, max: 16, pas: 0.5 },
                { id: "pauses", libelle: "Minutes de pause réellement prises", unite: "min", defaut: 15, min: 0, max: 240, pas: 5 }
            ],
            calculer: ({ travail, pauses }) => {
                const due = travail > SEUIL_PAUSE ? PAUSE_LEGALE : 0;
                // Repere ergonomique usuel : une courte coupure par heure de
                // travail sur ecran, distincte du minimum legal.
                const conseillees = Math.round(travail) * 5;
                return [
                    { libelle: "Pause légale minimale", valeur: due > 0 ? nf(due) + " min" : "aucune en dessous de 6 h" },
                    { libelle: "Pauses réellement prises", valeur: nf(pauses) + " min" },
                    { libelle: "Écart au minimum légal", valeur: pauses >= due ? "respecté" : "− " + nf(due - pauses) + " min", fort: true },
                    { libelle: "Repère ergonomique sur écran", valeur: "environ " + nf(conseillees) + " min, réparties dans la journée" }
                ];
            },
            lecon: "Le minimum légal est de vingt minutes d'un bloc. Ce qui protège vraiment, ce sont des coupures courtes et fréquentes — l'un n'est pas la version réduite de l'autre."
        },

        "fatigue-visuelle": {
            type: "controle",
            titre: "Ménagez-vous vos yeux ?",
            intro: "Cochez ce que vous faites réellement au cours d'une journée d'écran.",
            points: [
                { texte: "Je regarde au loin quelques secondes toutes les vingt minutes environ" },
                { texte: "Je pense à cligner des yeux quand je fixe longtemps", aide: "la fréquence de clignement chute nettement devant un écran" },
                { texte: "La luminosité de l'écran est proche de celle de la pièce" },
                { texte: "Je ne travaille pas dans le noir avec un écran allumé" },
                { texte: "Ma correction visuelle est à jour" },
                { texte: "Je consulte si la gêne persiste plusieurs jours", aide: "maux de tête, vision floue en fin de journée" }
            ],
            verdict: (n, total) => {
                if (n >= total - 1) return { texte: "Bonnes habitudes. La fatigue visuelle est réversible quand on la prend tôt.", ton: "bon" };
                if (n >= 4) return { texte: "Correct. Regarder au loin régulièrement est le geste le plus simple et le plus efficace.", ton: "moyen" };
                return { texte: "Plusieurs habitudes à reprendre. Une gêne qui dure ne se traite pas par un filtre logiciel.", ton: "alerte" };
            },
            lecon: "L'œil qui fixe un plan rapproché pendant des heures ne se repose jamais. Regarder au loin quelques secondes suffit à relâcher le muscle qui accommode."
        },

        "charge-recuperation": {
            titre: "Votre semaine laisse-t-elle place à la récupération ?",
            intro: "Les repos minimaux du code du travail servent de repère : 11 heures entre deux journées, 35 heures consécutives par semaine.",
            champs: [
                { id: "heures", libelle: "Heures travaillées par semaine", unite: "h", defaut: 45, min: 0, max: 100, pas: 1 },
                { id: "coupure", libelle: "Coupure la plus courte entre deux journées", unite: "h", defaut: 10, min: 0, max: 24, pas: 0.5 },
                { id: "weekend", libelle: "Heures consécutives de repos en fin de semaine", unite: "h", defaut: 40, min: 0, max: 100, pas: 1 }
            ],
            calculer: ({ heures, coupure, weekend }) => {
                const alertes = [];
                if (coupure < REPOS_QUOTIDIEN) alertes.push("repos quotidien");
                if (weekend < REPOS_HEBDOMADAIRE) alertes.push("repos hebdomadaire");
                return [
                    { libelle: "Repos quotidien minimal", valeur: nf(REPOS_QUOTIDIEN) + " h — le vôtre : " + souple(coupure) + " h" },
                    { libelle: "Repos hebdomadaire minimal", valeur: nf(REPOS_HEBDOMADAIRE) + " h — le vôtre : " + nf(weekend) + " h" },
                    { libelle: "Heures travaillées", valeur: nf(heures) + " h par semaine" },
                    {
                        libelle: "Constat",
                        valeur: alertes.length === 0
                            ? "les deux repos minimaux sont respectés"
                            : "en dessous du minimum : " + alertes.join(" et "),
                        fort: true
                    }
                ];
            },
            lecon: "Ces durées ne sont pas des recommandations de confort : ce sont des minimums opposables. Passer en dessous régulièrement se signale au service de santé au travail."
        },

        "karasek": {
            titre: "Où se situe votre poste ?",
            intro: "Trois curseurs, de 0 à 10, selon le modèle utilisé en santé au travail depuis les années 1980. Notez ce que vous ressentez de votre poste, pas ce qu'il devrait être.",
            champs: [
                { id: "demande", libelle: "Exigence du poste", unite: "/10", defaut: 7, min: 0, max: 10, pas: 1 },
                { id: "latitude", libelle: "Latitude : marge de décision et d'organisation", unite: "/10", defaut: 3, min: 0, max: 10, pas: 1 },
                { id: "soutien", libelle: "Soutien des collègues et de la hiérarchie", unite: "/10", defaut: 4, min: 0, max: 10, pas: 1 }
            ],
            calculer: ({ demande, latitude, soutien }) => {
                const quadrant = quadrantKarasek(demande, latitude);
                const isole = soutien < 5;
                const lecture = {
                    actif: "exigeant mais tenable : la marge de manœuvre compense l'exigence",
                    tendu: "forte exigence, peu de marge — c'est la combinaison la plus associée au risque",
                    "détendu": "peu exigeant, avec de la marge",
                    passif: "peu exigeant et peu de marge : usure par l'ennui plutôt que par la charge"
                };
                return [
                    { libelle: "Situation décrite", valeur: quadrant, fort: true },
                    { libelle: "Lecture", valeur: lecture[quadrant] },
                    { libelle: "Soutien", valeur: isole ? "faible — il aggrave chacune des situations ci-dessus" : "présent — il amortit l'exigence" },
                    { libelle: "À retenir", valeur: quadrant === "tendu" && isole ? "situation à évoquer avec le service de santé au travail" : "repère à relire dans quelques mois" }
                ];
            },
            lecon: "Ce n'est pas l'exigence seule qui use, c'est l'exigence sans marge de manœuvre. Deux postes également chargés n'ont pas le même effet selon ce qu'ils laissent décider."
        },

        "stress-chronique": {
            type: "controle",
            titre: "Aigu ou installé ?",
            intro: "Cochez ce qui décrit votre situation de travail depuis plusieurs semaines.",
            points: [
                { texte: "La pression ne retombe pas entre deux périodes chargées" },
                { texte: "Le week-end ne suffit plus à récupérer" },
                { texte: "Je pense au travail à des moments où je n'y pensais pas avant" },
                { texte: "Mon sommeil a changé depuis plusieurs semaines" },
                { texte: "J'ai réduit ce qui me faisait du bien en dehors du travail" },
                { texte: "Mon entourage me l'a fait remarquer" }
            ],
            verdict: (n) => {
                if (n === 0) return { texte: "Aucun de ces signaux. Un stress qui retombe entre deux pics est le fonctionnement normal.", ton: "bon" };
                if (n <= 2) return { texte: "Quelques signaux. Ils méritent d'être observés sur les prochaines semaines plutôt qu'écartés.", ton: "moyen" };
                return { texte: "Plusieurs signaux installés. Ce n'est pas un diagnostic — c'est une raison d'en parler à un médecin ou au service de santé au travail, qui sont tenus au secret.", ton: "alerte" };
            },
            lecon: "Le stress aigu monte puis retombe : c'est une réponse normale. Ce qui abîme, c'est l'absence de retour à la normale — et cela se remarque bien plus tôt de l'extérieur que de l'intérieur."
        },

        "deconnexion": {
            type: "controle",
            titre: "Vos frontières tiennent-elles ?",
            intro: "Cochez ce qui est vrai d'une semaine ordinaire.",
            points: [
                { texte: "Je ne consulte pas mes messages professionnels le soir" },
                { texte: "Les notifications professionnelles sont coupées en dehors des heures" },
                { texte: "Je ne réponds pas le week-end, sauf urgence réelle" },
                { texte: "Mon équipe sait que je ne réponds pas en soirée" },
                { texte: "Je n'envoie pas de messages tard, ou j'en diffère l'envoi", aide: "un message envoyé à 23 h met les autres sous pression" },
                { texte: "Mes congés sont réellement sans travail" }
            ],
            verdict: (n, total) => {
                if (n >= total - 1) return { texte: "Frontières nettes. C'est ce qui permet à la récupération d'avoir lieu.", ton: "bon" };
                if (n >= 4) return { texte: "Correct. Différer l'envoi des messages tardifs coûte un clic et change les attentes de toute l'équipe.", ton: "moyen" };
                return { texte: "Le travail déborde largement. Le droit à la déconnexion existe précisément parce que la frontière ne tient pas toute seule.", ton: "alerte" };
            },
            lecon: "La déconnexion n'est pas qu'une affaire individuelle : ce qu'on envoie le soir fixe ce que les autres croient devoir faire."
        },

        "medecine-travail": {
            type: "controle",
            titre: "Savez-vous ce que le médecin du travail peut faire ?",
            intro: "Cochez ce que vous saviez déjà.",
            points: [
                { texte: "Je peux le consulter à ma demande, sans passer par mon employeur" },
                { texte: "Il est tenu au secret médical : mon employeur n'apprend pas ce que je dis" },
                { texte: "Il peut proposer un aménagement de poste, qui s'impose à l'employeur sauf impossibilité" },
                { texte: "Il peut demander une étude du poste et des conditions de travail" },
                { texte: "Une visite de préreprise existe pendant un arrêt long, à ma demande" },
                { texte: "Je sais comment joindre mon service de prévention et de santé au travail" }
            ],
            verdict: (n, total) => {
                if (n >= total - 1) return { texte: "Vous connaissez ce levier. C'est l'un des plus efficaces et des moins utilisés.", ton: "bon" };
                if (n >= 4) return { texte: "Bonne base. La visite à la demande du salarié et le secret médical sont les deux points les plus souvent ignorés.", ton: "moyen" };
                return { texte: "Le médecin du travail n'est pas le médecin de l'employeur. La visite est de droit, confidentielle, et sur le temps de travail.", ton: "alerte" };
            },
            lecon: "La visite à la demande du salarié est un droit, elle est confidentielle, et l'employeur ne peut pas en connaître le contenu — seulement les conclusions d'aptitude."
        },

        "duerp": {
            type: "controle",
            titre: "Votre employeur tient-il ses obligations ?",
            intro: "Cochez ce dont vous avez connaissance dans votre entreprise.",
            points: [
                { texte: "Un document unique d'évaluation des risques existe et est accessible" },
                { texte: "Les risques psychosociaux y figurent, pas seulement les risques physiques" },
                { texte: "Il est mis à jour, et pas seulement archivé" },
                { texte: "Des représentants du personnel ou un CSE existent et sont identifiables" },
                { texte: "Une procédure est prévue pour signaler une situation dangereuse" },
                { texte: "Je sais que je peux me retirer d'une situation de danger grave et imminent", aide: "droit de retrait, sans sanction possible pour ce seul motif" }
            ],
            verdict: (n, total) => {
                if (n >= total - 1) return { texte: "Cadre en place. Il rend les demandes beaucoup plus simples à formuler.", ton: "bon" };
                if (n >= 4) return { texte: "Partiel. Le document unique est obligatoire dès le premier salarié, et doit couvrir les risques psychosociaux.", ton: "moyen" };
                return { texte: "L'employeur a une obligation de sécurité, qui ne dépend pas de votre demande. Le CSE et l'inspection du travail sont les interlocuteurs quand rien ne bouge.", ton: "alerte" };
            },
            lecon: "L'obligation de sécurité de l'employeur est une obligation de moyens renforcée : elle porte sur la prévention, pas seulement sur la réparation une fois le dommage survenu."
        },

        "epuisement": {
            type: "controle",
            titre: "Les trois dimensions décrites dans la littérature",
            intro: "Cochez ce que vous reconnaissez. Ceci n'est pas un test et ne rend aucun résultat : c'est une aide à mettre des mots avant d'en parler.",
            points: [
                { texte: "Épuisement : la fatigue ne cède plus au repos" },
                { texte: "Distance : je me suis mis à distance des gens ou du sens de mon travail" },
                { texte: "Efficacité : j'ai le sentiment de ne plus rien réussir" },
                { texte: "Cela dure depuis plusieurs semaines" },
                { texte: "Mon entourage l'a remarqué avant moi" },
                { texte: "Je n'en ai encore parlé à aucun professionnel" }
            ],
            verdict: (n) => {
                if (n === 0) return { texte: "Rien de reconnu ici. Cette section reste utile pour reconnaître la situation chez quelqu'un d'autre.", ton: "bon" };
                if (n <= 2) return { texte: "Ce que vous reconnaissez mérite d'être dit à un médecin. Aucun outil en ligne, celui-ci compris, ne peut aller plus loin.", ton: "moyen" };
                return { texte: "Parlez-en à votre médecin traitant ou au médecin du travail — c'est la seule suite utile à cet exercice. En cas de détresse, le 3114 répond gratuitement, 24 h sur 24.", ton: "alerte" };
            },
            lecon: "L'épuisement professionnel n'est pas un diagnostic qu'on pose soi-même, et surtout pas au moyen d'un questionnaire en ligne. Ces trois dimensions servent à nommer, pas à conclure."
        },

        "situation-grave": {
            type: "controle",
            titre: "Face à une situation grave, dans l'ordre",
            intro: "Harcèlement, discrimination, danger : cochez ce qui est déjà fait.",
            points: [
                { texte: "J'ai noté les faits par écrit, datés, au fur et à mesure" },
                { texte: "J'ai conservé les messages, courriels et documents" },
                { texte: "J'ai identifié d'éventuels témoins" },
                { texte: "J'ai alerté par écrit l'employeur ou le service des ressources humaines" },
                { texte: "J'ai contacté un représentant du personnel ou le CSE" },
                { texte: "J'ai consulté le médecin du travail, l'inspection du travail ou un défenseur des droits" }
            ],
            verdict: (n, total) => {
                if (n >= total - 1) return { texte: "Démarche complète. Les écrits datés sont ce qui rendra la suite possible, quelle qu'elle soit.", ton: "bon" };
                if (n >= 3) return { texte: "En cours. L'alerte écrite à l'employeur est l'étape qui déclenche son obligation d'agir.", ton: "moyen" };
                return { texte: "Commencez par écrire les faits, datés. C'est la première chose que demanderont tous les interlocuteurs — et la plus difficile à reconstituer après coup.", ton: "alerte" };
            },
            lecon: "L'employeur informé par écrit d'une situation de harcèlement a l'obligation de réagir. Ne rien écrire le dispense de fait, quelle que soit la gravité des faits."
        },

        // =====================================================================
        // ECOLOGIE ET SOBRIETE NUMERIQUE
        // =====================================================================

        "empreinte-appareil": {
            titre: "Ce que change la durée de garde",
            intro: "La fabrication est payée une fois. Plus l'appareil sert longtemps, plus elle se dilue.",
            champs: [
                { id: "fabrication", libelle: "Fabrication de l'appareil", unite: "kg CO₂e", defaut: 60, min: 5, max: 500, pas: 5 },
                { id: "usage", libelle: "Électricité consommée par an", unite: "kg CO₂e", defaut: 5, min: 0, max: 200, pas: 1 },
                { id: "annees", libelle: "Durée de garde", unite: "ans", defaut: 2.5, min: 0.5, max: 15, pas: 0.5 }
            ],
            calculer: ({ fabrication, usage, annees }) => {
                const amortie = annualiser(fabrication, annees);
                const total = amortie + usage;
                const plusLong = annualiser(fabrication, annees + 2) + usage;
                const gain = total > 0 ? (total - plusLong) / total * 100 : 0;
                return [
                    { libelle: "Fabrication, ramenée à l'année", valeur: nf(amortie, 1) + " kg CO₂e" },
                    { libelle: "Total par an", valeur: nf(total, 1) + " kg CO₂e", fort: true },
                    { libelle: "Part de la fabrication", valeur: total > 0 ? pourcent(amortie / total * 100, 0) : "—" },
                    // « soit 37 % de moins » plutot que « − 37 % » : le signe
                    // moins colle mal a un pourcentage deja formate en francais.
                    { libelle: "En le gardant 2 ans de plus", valeur: nf(plusLong, 1) + " kg CO₂e par an, soit " + pourcent(gain, 0) + " de moins" }
                ];
            },
            lecon: "Pour un terminal, l'essentiel de l'impact est déjà payé quand vous l'allumez. Le seul levier vraiment puissant est la durée pendant laquelle il servira."
        },

        "parc-du-foyer": {
            titre: "L'empreinte du parc, pas de l'usage",
            intro: "Comptez tout ce qui est branché : téléphones, ordinateurs, téléviseur, tablette, box, console, montre.",
            champs: [
                { id: "appareils", libelle: "Appareils dans le foyer", unite: "", defaut: 8, min: 1, max: 60, pas: 1 },
                { id: "fabrication", libelle: "Fabrication moyenne par appareil", unite: "kg CO₂e", defaut: 60, min: 5, max: 500, pas: 5 },
                { id: "duree", libelle: "Durée de vie moyenne", unite: "ans", defaut: 4, min: 1, max: 20, pas: 1 }
            ],
            calculer: ({ appareils, fabrication, duree }) => {
                const totale = appareils * fabrication;
                const parAn = annualiser(totale, duree);
                return [
                    { libelle: "Fabrication de tout le parc", valeur: nf(Math.round(totale)) + " kg CO₂e" },
                    { libelle: "Ramenée à l'année", valeur: nf(Math.round(parAn)) + " kg CO₂e", fort: true },
                    { libelle: "Soit, en voiture", valeur: "environ " + nf(Math.round(parAn * 1000 / G_PAR_KM.voiture)) + " km" },
                    { libelle: "Un appareil de moins ferait", valeur: "− " + nf(Math.round(annualiser(fabrication, duree))) + " kg CO₂e par an" }
                ];
            },
            lecon: "La question utile n'est pas « comment mieux utiliser mes appareils » mais « combien en ai-je, et combien de temps les garderai-je »."
        },

        "duree-de-vie": {
            type: "controle",
            titre: "Faites-vous durer vos appareils ?",
            intro: "Cochez ce que vous faites réellement.",
            points: [
                { texte: "Je garde mon téléphone au moins quatre ans" },
                { texte: "J'utilise une coque et une protection d'écran", aide: "la casse est la première cause de remplacement" },
                { texte: "Je fais remplacer la batterie plutôt que l'appareil" },
                { texte: "Je continue les mises à jour de sécurité tant qu'elles existent" },
                { texte: "Je fais réparer avant de remplacer, au moins pour comparer le devis" },
                { texte: "Je revends ou je donne au lieu de garder l'ancien dans un tiroir" }
            ],
            verdict: (n, total) => {
                if (n >= total - 1) return { texte: "C'est l'essentiel de ce qui est en votre pouvoir sur le sujet.", ton: "bon" };
                if (n >= 4) return { texte: "Bonne base. Le remplacement de batterie est le geste au meilleur rapport, et le plus souvent écarté.", ton: "moyen" };
                return { texte: "Chaque année gagnée sur la durée de vie fait plus que tous les gestes d'usage réunis.", ton: "alerte" };
            },
            lecon: "Un appareil rangé dans un tiroir a la même empreinte de fabrication qu'un appareil utilisé. Le revendre, c'est éviter la fabrication de celui qui aurait été acheté à sa place."
        },

        "gestes-symboliques": {
            type: "controle",
            titre: "Ces gestes servent-ils à quelque chose ?",
            intro: "Cochez ceux qui ont un effet mesurable sur l'empreinte du numérique.",
            points: [
                { texte: "Garder son téléphone deux ans de plus", aide: "effet réel et important" },
                { texte: "Supprimer ses vieux courriels", aide: "effet réel mais très faible : quelques grammes" },
                { texte: "Acheter reconditionné plutôt que neuf", aide: "effet réel et important" },
                { texte: "Vider le cache de son navigateur", aide: "aucun effet, voire négatif" },
                { texte: "Réduire la résolution vidéo sur un téléphone", aide: "effet marginal comparé au choix de l'écran" },
                { texte: "Réparer au lieu de remplacer", aide: "effet réel et important" }
            ],
            verdict: (n) => {
                if (n === 3) return { texte: "Trois gestes ont un effet important : garder, acheter reconditionné, réparer. Si ce sont ceux-là, c'est exact.", ton: "bon" };
                if (n < 3) return { texte: "Trois gestes de cette liste comptent vraiment, et ils portent tous sur le matériel, jamais sur l'usage.", ton: "moyen" };
                return { texte: "Trois seulement pèsent réellement. Les autres occupent l'attention et déplacent l'effort là où il ne change presque rien.", ton: "alerte" };
            },
            lecon: "Les gestes qui circulent le plus — vider sa boîte mail, supprimer des photos — portent sur l'usage, où presque rien ne se joue. Le matériel décide."
        },

        "streaming": {
            titre: "Regarder une vidéo : ce qui pèse",
            intro: "Le calcul certain est celui de l'appareil : sa puissance multipliée par la durée. Le reste — réseau, serveurs — est plus petit et beaucoup plus incertain.",
            champs: [
                { id: "heures", libelle: "Heures de vidéo par jour", unite: "h", defaut: 2, min: 0, max: 16, pas: 0.5 },
                { id: "puissance", libelle: "Puissance de l'écran utilisé", unite: "W", defaut: 100, min: 1, max: 500, pas: 1 },
                { id: "comparee", libelle: "Puissance d'un autre écran, pour comparer", unite: "W", defaut: 3, min: 1, max: 500, pas: 1 }
            ],
            calculer: ({ heures, puissance, comparee }) => {
                const kwhAn = heures * 365 * puissance / 1000;
                const kgAn = kwhAn * G_PAR_KWH_FR / 1000;
                const kgCompare = heures * 365 * comparee / 1000 * G_PAR_KWH_FR / 1000;
                return [
                    { libelle: "Consommation annuelle de l'écran", valeur: nf(kwhAn, 1) + " kWh" },
                    { libelle: "Émissions, électricité française", valeur: nf(kgAn, 1) + " kg CO₂e par an", fort: true },
                    { libelle: "Sur l'autre écran, ce serait", valeur: nf(kgCompare, 2) + " kg CO₂e par an" },
                    {
                        // Le rapport doit se lire dans les deux sens : compare a
                        // un ecran plus gourmand, « x 0,2 » n a aucun sens et
                        // s arrondissait a « x 0 ».
                        libelle: "Écart",
                        valeur: (() => {
                            if (kgAn === 0 || kgCompare === 0) return "—";
                            const r = kgAn / kgCompare;
                            return r >= 1
                                ? "× " + nf(r, r < 10 ? 1 : 0) + " de plus"
                                : "× " + nf(1 / r, 1 / r < 10 ? 1 : 0) + " de moins";
                        })()
                    }
                ];
            },
            lecon: "L'écran choisi pèse bien plus que la qualité vidéo sélectionnée. Regarder sur un téléviseur ou sur un téléphone n'est pas le même geste, d'un facteur considérable."
        },

        "visio-vs-deplacement": {
            titre: "Se déplacer, ou pas",
            intro: "Une réunion, comparée selon la façon de s'y rendre. Aller-retour compris.",
            champs: [
                { id: "distance", libelle: "Distance aller", unite: "km", defaut: 400, min: 1, max: 20000, pas: 10 },
                { id: "duree", libelle: "Durée de la réunion en visio", unite: "h", defaut: 2, min: 0.5, max: 12, pas: 0.5 },
                { id: "puissance", libelle: "Puissance de votre appareil", unite: "W", defaut: 30, min: 1, max: 500, pas: 1 }
            ],
            calculer: ({ distance, duree, puissance }) => {
                const ar = distance * 2;
                const enVisio = duree * puissance / 1000 * G_PAR_KWH_FR;
                return [
                    { libelle: "En train", valeur: nf(ar * G_PAR_KM.train / 1000, 1) + " kg CO₂e" },
                    { libelle: "En voiture, seul", valeur: nf(ar * G_PAR_KM.voiture / 1000, 1) + " kg CO₂e" },
                    { libelle: "En avion", valeur: nf(ar * G_PAR_KM.avion / 1000, 1) + " kg CO₂e", fort: true },
                    { libelle: "En visioconférence", valeur: nf(enVisio, 1) + " g CO₂e" }
                ];
            },
            lecon: "C'est le seul endroit du numérique où l'ordre de grandeur bascule : un déplacement évité pèse mille fois ce que coûte la visioconférence qui l'a remplacé."
        },

        "lire-un-chiffre": {
            type: "controle",
            titre: "Ce chiffre d'impact tient-il ?",
            intro: "Cochez ce qui est vrai du chiffre qu'on vous présente.",
            points: [
                { texte: "Son périmètre est précisé", aide: "fabrication comprise, ou usage seul ?" },
                { texte: "Le pays est indiqué", aide: "l'électricité française émet cinq à dix fois moins que la moyenne européenne" },
                { texte: "La source est identifiable et datée" },
                { texte: "L'unité est explicite", aide: "grammes de CO₂e, kWh, litres d'eau : ce ne sont pas des équivalents" },
                { texte: "Il n'est pas repris d'un article qui le reprend d'un autre" },
                { texte: "Une incertitude est donnée, ou au moins mentionnée" }
            ],
            verdict: (n, total) => {
                if (n >= total - 1) return { texte: "Chiffre exploitable. Il est rare qu'un chiffre médiatique coche tout cela.", ton: "bon" };
                if (n >= 4) return { texte: "Utilisable avec prudence. Vérifiez surtout le périmètre : c'est là que se cachent les facteurs dix.", ton: "moyen" };
                return { texte: "À ne pas relayer. Ce domaine a diffusé pendant des années des chiffres faux d'un facteur dix, repris de bonne foi.", ton: "alerte" };
            },
            lecon: "« Un mail = 10 g » et « une heure de streaming = 3,2 kg » ont circulé des années avant d'être corrigés d'un facteur dix. Les deux venaient d'estimations reprises sans vérification."
        },

        "achat-responsable": {
            type: "controle",
            titre: "Avant d'acheter un appareil",
            intro: "Cochez ce que vous avez réellement vérifié.",
            points: [
                { texte: "J'ai vérifié que l'ancien n'était pas réparable" },
                { texte: "J'ai regardé le reconditionné", aide: "il évite la quasi-totalité de la fabrication" },
                { texte: "J'ai comparé les indices de réparabilité ou de durabilité" },
                { texte: "J'ai vérifié la durée de disponibilité des pièces détachées" },
                { texte: "J'ai vérifié combien d'années de mises à jour sont garanties" },
                { texte: "J'ai choisi la taille et la puissance dont j'ai besoin, pas au-dessus" }
            ],
            verdict: (n, total) => {
                if (n >= total - 1) return { texte: "Achat réfléchi. La durée de mise à jour est le critère le plus décisif et le moins regardé.", ton: "bon" };
                if (n >= 4) return { texte: "Bonne démarche. Le reconditionné reste le levier le plus fort quand il est possible.", ton: "moyen" };
                return { texte: "L'achat est le moment où tout se joue : c'est là que la fabrication est décidée, et elle représente l'essentiel de l'impact.", ton: "alerte" };
            },
            lecon: "Un appareil qui cesse de recevoir des mises à jour de sécurité devient difficile à garder, quel que soit son état matériel. C'est un critère d'achat, pas un détail."
        },

        "poids-page": {
            titre: "Le poids d'une page, à l'échelle du site",
            intro: "Le volume transféré est certain. L'énergie par gigaoctet l'est beaucoup moins : elle varie d'un facteur dix selon les études, et diminue vite.",
            champs: [
                { id: "poids", libelle: "Poids d'une page", unite: "Mo", defaut: 3, min: 0.05, max: 100, pas: 0.5 },
                { id: "visites", libelle: "Visites par mois", unite: "", defaut: 10000, min: 1, max: 10000000, pas: 1000 },
                { id: "intensite", libelle: "Énergie par gigaoctet transféré", unite: "kWh/Go", defaut: 0.06, min: 0.005, max: 1, pas: 0.005 }
            ],
            calculer: ({ poids, visites, intensite }) => {
                const goParAn = poids * visites * 12 / 1024;
                const kgParAn = goParAn * intensite * G_PAR_KWH_FR / 1000;
                const moitie = kgParAn / 2;
                return [
                    { libelle: "Transféré par an", valeur: nf(goParAn, 1) + " Go" },
                    { libelle: "Émissions estimées", valeur: nf(kgParAn, 1) + " kg CO₂e par an", fort: true },
                    { libelle: "En divisant le poids par deux", valeur: nf(moitie, 1) + " kg CO₂e par an" },
                    { libelle: "À garder en tête", valeur: "l'effet le plus net d'une page légère est sur les vieux appareils et les connexions lentes" }
                ];
            },
            lecon: "Alléger une page se justifie d'abord parce qu'elle devient utilisable sur un appareil ancien — donc gardé plus longtemps. Le gain carbone direct, lui, est modeste."
        },

        "ecoconception": {
            type: "controle",
            titre: "Ce service est-il sobre ?",
            intro: "Cochez ce qui est vrai du site ou de l'application que vous concevez ou utilisez.",
            points: [
                { texte: "Il reste utilisable sur un appareil de cinq ans" },
                { texte: "Il fonctionne sur une connexion lente" },
                { texte: "Les vidéos ne se lancent pas automatiquement" },
                { texte: "Il n'y a pas de défilement infini", aide: "un mécanisme conçu pour allonger le temps passé" },
                { texte: "Les images sont dimensionnées pour leur affichage réel" },
                { texte: "Le service fait ce qu'on attend de lui sans fonctions ajoutées par habitude" }
            ],
            verdict: (n, total) => {
                if (n >= total - 1) return { texte: "Service sobre. Il sera aussi plus rapide et plus accessible — les trois vont ensemble.", ton: "bon" };
                if (n >= 4) return { texte: "Bonne direction. La compatibilité avec les appareils anciens est le critère qui compte le plus.", ton: "moyen" };
                return { texte: "L'écoconception n'est pas d'abord une affaire de kilo-octets : c'est de ne pas rendre obsolète un appareil qui fonctionne.", ton: "alerte" };
            },
            lecon: "Le pire effet d'un service lourd n'est pas sa consommation : c'est de pousser au renouvellement d'un appareil qui marchait encore."
        },

        "parc-entreprise": {
            titre: "Allonger le renouvellement d'un parc",
            intro: "Le calcul qui décide, dans une entreprise, avant toute campagne de sensibilisation.",
            champs: [
                { id: "postes", libelle: "Postes de travail", unite: "", defaut: 100, min: 1, max: 100000, pas: 10 },
                { id: "fabrication", libelle: "Fabrication d'un poste", unite: "kg CO₂e", defaut: 200, min: 20, max: 2000, pas: 10 },
                { id: "actuel", libelle: "Renouvellement actuel", unite: "ans", defaut: 3, min: 1, max: 15, pas: 1 },
                { id: "vise", libelle: "Renouvellement visé", unite: "ans", defaut: 5, min: 1, max: 15, pas: 1 }
            ],
            calculer: ({ postes, fabrication, actuel, vise }) => {
                const avant = postes * annualiser(fabrication, actuel);
                const apres = postes * annualiser(fabrication, vise);
                const gain = avant - apres;
                return [
                    { libelle: "Aujourd'hui", valeur: nf(Math.round(avant)) + " kg CO₂e par an" },
                    { libelle: "Après allongement", valeur: nf(Math.round(apres)) + " kg CO₂e par an" },
                    // Raccourcir le renouvellement est un cas valide, et il
                    // coute au lieu de rapporter : le libelle doit suivre, sans
                    // quoi on lit « economie : − 2 667 kg ».
                    {
                        libelle: gain >= 0 ? "Économie annuelle" : "Surcoût annuel",
                        valeur: nf(Math.round(Math.abs(gain))) + " kg CO₂e",
                        fort: true
                    },
                    { libelle: "Soit, en voiture", valeur: "environ " + nf(Math.round(Math.abs(gain) * 1000 / G_PAR_KM.voiture)) + " km" }
                ];
            },
            lecon: "Deux ans de plus sur un parc de cent postes pèsent davantage que toutes les consignes d'usage envoyées aux salariés — et ne demandent rien à personne."
        },

        "effet-rebond": {
            type: "controle",
            titre: "Ce gain va-t-il tenir ?",
            intro: "Une amélioration technique est souvent absorbée par un usage accru. Cochez ce que vous reconnaissez.",
            points: [
                { texte: "Les appareils consomment moins, et il y en a davantage" },
                { texte: "Le stockage coûte moins cher, et on garde tout" },
                { texte: "Les réseaux vont plus vite, et les contenus sont plus lourds" },
                { texte: "Un modèle plus efficace est utilisé bien plus souvent" },
                { texte: "Le gain est annoncé en pourcentage, jamais en total" },
                { texte: "Personne ne mesure ce que le service remplace vraiment" }
            ],
            verdict: (n) => {
                if (n === 0) return { texte: "Un gain d'efficacité sans report d'usage : c'est rare, et cela mérite d'être vérifié dans le temps.", ton: "bon" };
                if (n <= 3) return { texte: "Effet rebond partiel. La question à poser reste la même : le total a-t-il baissé ?", ton: "moyen" };
                return { texte: "Gain probablement absorbé. L'efficacité par unité progresse et le total augmente : c'est la trajectoire du numérique depuis vingt ans.", ton: "alerte" };
            },
            lecon: "Un pourcentage d'amélioration ne dit rien tant qu'on ne connaît pas l'évolution du total. C'est la seule question qui vaille, et c'est celle qu'on évite."
        },

        // =====================================================================
        // NEGOCIATION ET COMMUNICATION
        // =====================================================================

        "preparer-echange": {
            type: "controle",
            titre: "Êtes-vous prêt pour cet échange ?",
            intro: "Cochez ce que vous savez déjà, avant d'entrer dans la conversation.",
            points: [
                { texte: "Je sais ce que je veux obtenir, en une phrase" },
                { texte: "Je sais à quoi je renonce si j'obtiens gain de cause" },
                { texte: "Je sais ce que l'autre cherche, ou j'ai prévu de le lui demander" },
                { texte: "Je sais ce que je fais si nous n'arrivons à rien" },
                { texte: "J'ai choisi le moment et le canal, plutôt que de les subir" },
                { texte: "Je sais ce qui, dans mon dossier, est le plus faible", aide: "l'autre le trouvera de toute façon" }
            ],
            verdict: (n, total) => {
                if (n >= total - 1) return { texte: "Préparation solide. L'essentiel d'une négociation se joue avant qu'elle ne commence.", ton: "bon" };
                if (n >= 4) return { texte: "Bonne base. Savoir ce qu'on fait en cas d'échec est ce qui manque le plus souvent — et ce qui change le plus.", ton: "moyen" };
                return { texte: "Entrer sans préparation revient à improviser face à quelqu'un qui, peut-être, ne l'a pas fait.", ton: "alerte" };
            },
            lecon: "La question la plus négligée n'est pas « qu'est-ce que je veux ? » mais « qu'est-ce que je fais si je ne l'obtiens pas ? ». C'est elle qui détermine la position réelle."
        },

        "ecoute-active": {
            type: "controle",
            titre: "Écoutez-vous, ou attendez-vous votre tour ?",
            intro: "Cochez ce que vous faites réellement pendant que l'autre parle.",
            points: [
                { texte: "Je ne prépare pas ma réponse pendant qu'il parle" },
                { texte: "Je reformule pour vérifier, avant de répondre", aide: "« si je comprends bien, … »" },
                { texte: "Je pose des questions ouvertes plutôt que des questions fermées" },
                { texte: "Je laisse un silence après sa réponse", aide: "c'est souvent là que vient l'essentiel" },
                { texte: "Je demande « pourquoi est-ce important pour vous ? »" },
                { texte: "Je note ce qu'il dit, pas ce que je compte répondre" }
            ],
            verdict: (n, total) => {
                if (n >= total - 1) return { texte: "Vous écoutez vraiment. C'est le levier le moins coûteux et le plus rare.", ton: "bon" };
                if (n >= 4) return { texte: "Bonne écoute. Le silence après une réponse est ce qui rapporte le plus, et ce qu'on supporte le moins.", ton: "moyen" };
                return { texte: "Attendre son tour n'est pas écouter. La plupart des informations utiles se perdent là.", ton: "alerte" };
            },
            lecon: "Reformuler n'est pas une politesse : c'est le seul moyen de vérifier qu'on a compris, et cela révèle très souvent qu'on avait compris autre chose."
        },

        "longueur-message": {
            titre: "Ce message sera-t-il lu ?",
            intro: "Un message coûte le temps de tous ses destinataires, pas seulement celui de son auteur.",
            champs: [
                { id: "mots", libelle: "Longueur du message", unite: "mots", defaut: 400, min: 10, max: 5000, pas: 10 },
                { id: "destinataires", libelle: "Destinataires", unite: "", defaut: 8, min: 1, max: 500, pas: 1 }
            ],
            calculer: ({ mots, destinataires }) => {
                // 250 mots par minute : rythme de lecture courant sur ecran.
                const minutes = mots / 250;
                const total = minutes * destinataires;
                // heuresMinutes arrondit a la minute : sous dix minutes, il
                // afficherait « 1 min » aussi bien pour le total que pour sa
                // moitie, et la comparaison disparaitrait.
                const duree = (m) => (m < 10 ? nf(m, 1) + " min" : heuresMinutes(m));
                return [
                    { libelle: "Temps de lecture", valeur: nf(minutes, 1) + " min" },
                    { libelle: "Temps mobilisé au total", valeur: duree(total), fort: true },
                    { libelle: "En divisant la longueur par deux", valeur: duree(total / 2) },
                    { libelle: "À garder en tête", valeur: mots > 150 ? "au-delà de 150 mots, la plupart des lecteurs parcourent au lieu de lire" : "longueur qui se lit vraiment" }
                ];
            },
            lecon: "Écrire court prend plus de temps à l'auteur et en fait gagner à tous les autres. C'est l'arbitrage, et il est presque toujours tranché dans le mauvais sens."
        },

        "courriel-lu": {
            type: "controle",
            titre: "Ce courriel a-t-il une chance d'aboutir ?",
            intro: "Cochez ce que contient réellement le message que vous vous apprêtez à envoyer.",
            points: [
                { texte: "L'objet dit ce dont il s'agit ET ce qui est attendu" },
                { texte: "La demande est dans les deux premières lignes" },
                { texte: "Une seule demande, ou une liste numérotée s'il y en a plusieurs" },
                { texte: "Une échéance est donnée" },
                { texte: "Le destinataire principal est seul en « À », les autres en copie" },
                { texte: "Le contexte vient après la demande, pas avant" }
            ],
            verdict: (n, total) => {
                if (n >= total - 1) return { texte: "Message traitable. Il obtiendra une réponse parce qu'il est facile d'y répondre.", ton: "bon" };
                if (n >= 4) return { texte: "Correct. La demande en tête et l'échéance écrite sont les deux qui changent le taux de réponse.", ton: "moyen" };
                return { texte: "Message qui raconte avant de demander. Il sera lu en diagonale, et la demande passera inaperçue.", ton: "alerte" };
            },
            lecon: "Le lecteur cherche deux choses : ce qu'on lui demande et pour quand. Tout ce qui les précède retarde la réponse."
        },

        "mesore": {
            titre: "Faut-il accepter cette offre ?",
            intro: "Votre MESORE — meilleure solution de rechange — est ce que vous obtenez si vous partez. Elle fixe votre point de rupture.",
            champs: [
                { id: "mesore", libelle: "Valeur de votre solution de rechange", unite: "€", defaut: 28000, min: 0, max: 10000000, pas: 500 },
                { id: "offre", libelle: "Offre actuellement sur la table", unite: "€", defaut: 30000, min: 0, max: 10000000, pas: 500 },
                { id: "cout", libelle: "Coût estimé de la poursuite", unite: "€", defaut: 500, min: 0, max: 1000000, pas: 100 }
            ],
            calculer: ({ mesore, offre, cout }) => {
                const gain = offre - mesore;
                return [
                    { libelle: "Point de rupture", valeur: euros(mesore) },
                    { libelle: "Gain par rapport à partir", valeur: (gain >= 0 ? "+ " : "− ") + euros(Math.abs(gain)), fort: true },
                    { libelle: "Il faut gagner au moins", valeur: euros(cout) + " de plus pour que continuer se justifie" },
                    {
                        libelle: "Verdict",
                        valeur: gain < 0
                            ? "cette offre est moins bonne que votre solution de rechange"
                            : (gain < cout ? "acceptable, mais continuer coûterait plus que ce que cela rapporterait" : "vous avez de la marge pour continuer")
                    }
                ];
            },
            lecon: "Sans solution de rechange chiffrée, on négocie à l'aveugle : impossible de savoir si une offre est bonne, seulement si elle est agréable."
        },

        "zopa": {
            titre: "Y a-t-il une zone d'accord ?",
            intro: "Le maximum que vous acceptez de payer, et le minimum estimé de l'autre. Entre les deux se trouve — ou non — un accord possible.",
            champs: [
                { id: "maxAcheteur", libelle: "Votre maximum", unite: "€", defaut: 32000, min: 0, max: 10000000, pas: 500 },
                { id: "minVendeur", libelle: "Minimum estimé de l'autre", unite: "€", defaut: 27000, min: 0, max: 10000000, pas: 500 }
            ],
            calculer: ({ maxAcheteur, minVendeur }) => {
                const largeur = maxAcheteur - minVendeur;
                if (largeur < 0) {
                    return [
                        { libelle: "Zone d'accord", valeur: "aucune", fort: true },
                        { libelle: "Écart à combler", valeur: euros(-largeur) },
                        { libelle: "Ce que cela signifie", valeur: "aucun prix ne convient aux deux en l'état" },
                        { libelle: "La suite utile", valeur: "élargir la discussion à autre chose que le prix" }
                    ];
                }
                // Largeur nulle : les deux limites se touchent. Il existe un
                // accord et un seul, et « le partage de ces 0 € » se lit mal.
                if (largeur === 0) {
                    return [
                        { libelle: "Zone d'accord", valeur: "un seul prix possible : " + euros(maxAcheteur), fort: true },
                        { libelle: "Largeur", valeur: "nulle" },
                        { libelle: "Ce que cela signifie", valeur: "l'accord tient, mais aucune marge de part et d'autre" },
                        { libelle: "La suite utile", valeur: "vérifier vos estimations avant de vous y engager" }
                    ];
                }
                return [
                    { libelle: "Zone d'accord", valeur: euros(minVendeur) + " à " + euros(maxAcheteur), fort: true },
                    { libelle: "Largeur", valeur: euros(largeur) },
                    { libelle: "Point médian", valeur: euros(minVendeur + largeur / 2) },
                    { libelle: "Ce qui se joue", valeur: "le partage de ces " + euros(largeur) + ", pas l'accord lui-même" }
                ];
            },
            lecon: "Quand il n'y a pas de zone d'accord sur le prix, insister ne sert à rien. Ce qui débloque, c'est d'ajouter une variable : délai, volume, garantie, services."
        },

        "ancrage": {
            titre: "Quelle première offre annoncer ?",
            intro: "Le premier chiffre énoncé pèse sur tout ce qui suit — y compris quand chacun sait qu'il est négociable.",
            champs: [
                { id: "objectif", libelle: "Résultat que vous visez", unite: "€", defaut: 29000, min: 0, max: 10000000, pas: 500 },
                { id: "attendue", libelle: "Offre que vous attendez de l'autre", unite: "€", defaut: 27000, min: 0, max: 10000000, pas: 500 }
            ],
            calculer: ({ objectif, attendue }) => {
                // Le point median entre deux offres tombe sur l objectif si la
                // premiere offre est symetrique de celle de l autre.
                const ancre = 2 * objectif - attendue;
                const ecart = ancre - objectif;
                return [
                    { libelle: "Pour que le milieu tombe sur votre objectif", valeur: euros(ancre), fort: true },
                    { libelle: "Écart avec votre objectif", valeur: (ecart >= 0 ? "+ " : "− ") + euros(Math.abs(ecart)) },
                    { libelle: "Point médian obtenu", valeur: euros((ancre + attendue) / 2) },
                    { libelle: "Limite", valeur: "une ancre invraisemblable fait perdre la crédibilité, et parfois la négociation" }
                ];
            },
            lecon: "Le « coupons la poire en deux » paraît équitable et dépend entièrement du premier chiffre annoncé. C'est pour cela qu'il vaut mieux l'annoncer, en restant plausible."
        },

        "interets-positions": {
            type: "controle",
            titre: "Position ou intérêt ?",
            intro: "Une position est ce qu'on demande. Un intérêt est la raison pour laquelle on le demande. Cochez ce que vous connaissez.",
            points: [
                { texte: "Je sais ce que l'autre demande" },
                { texte: "Je sais pourquoi il le demande" },
                { texte: "Je connais au moins deux façons de satisfaire cette raison" },
                { texte: "Je sais ce qui, pour lui, ne se négocie pas" },
                { texte: "J'ai identifié un point qui me coûte peu et lui rapporte beaucoup" },
                { texte: "Je sais ce que je peux échanger contre ce qui compte pour moi" }
            ],
            verdict: (n, total) => {
                if (n >= total - 1) return { texte: "Vous négociez sur les intérêts. C'est là que se trouvent les accords que personne n'avait prévus.", ton: "bon" };
                if (n >= 4) return { texte: "Bonne lecture. Le point qui coûte peu à l'un et rapporte à l'autre est ce qui débloque le plus souvent.", ton: "moyen" };
                return { texte: "Négociation sur les positions : chacun campe, et le seul résultat possible est de couper la différence.", ton: "alerte" };
            },
            lecon: "Deux personnes qui veulent la même orange peuvent toutes deux être satisfaites : l'une voulait le jus, l'autre l'écorce. Encore fallait-il demander pourquoi."
        },

        "conversation-difficile": {
            type: "controle",
            titre: "Cette conversation est-elle préparée ?",
            intro: "Un désaccord, un reproche à formuler, une nouvelle à annoncer. Cochez ce qui est prêt.",
            points: [
                { texte: "Je décris des faits observables, pas une interprétation", aide: "« tu es arrivé après 10 h trois fois » et non « tu ne prends rien au sérieux »" },
                { texte: "Je sais dire l'effet que cela produit, sans accuser" },
                { texte: "J'ai une demande précise, pas seulement un reproche" },
                { texte: "J'ai prévu du temps pour la réponse de l'autre" },
                { texte: "Je le fais en tête-à-tête, et pas devant d'autres" },
                { texte: "Je distingue ce qui est négociable de ce qui ne l'est pas" }
            ],
            verdict: (n, total) => {
                if (n >= total - 1) return { texte: "Conversation préparée. Elle sera désagréable et elle produira quelque chose.", ton: "bon" };
                if (n >= 4) return { texte: "Bonne base. S'en tenir aux faits observables est ce qui évite que la discussion parte sur l'intention.", ton: "moyen" };
                return { texte: "Sans faits datés ni demande précise, la conversation portera sur les intentions supposées — c'est-à-dire nulle part.", ton: "alerte" };
            },
            lecon: "Ce n'est pas le reproche qui bloque, c'est l'interprétation. Un fait se discute, une intention prêtée ne se discute pas : elle se nie."
        },

        "biais-negociation": {
            type: "controle",
            titre: "Quels biais jouent contre vous ?",
            intro: "Cochez ce que vous reconnaissez dans votre façon de négocier.",
            points: [
                { texte: "Je me sens engagé par le temps déjà passé", aide: "coût irrécupérable : il ne devrait rien changer" },
                { texte: "Je suppose que ce que je gagne, l'autre le perd", aide: "vrai sur le prix seul, faux dès qu'il y a plusieurs variables" },
                { texte: "Je m'accroche à mon premier chiffre par cohérence" },
                { texte: "Je cherche surtout ce qui confirme ma lecture de la situation" },
                { texte: "Je surestime ce que l'autre sait de mes contraintes" },
                { texte: "Je juge l'accord à ce que j'ai obtenu, pas à mon point de rupture" }
            ],
            verdict: (n) => {
                if (n === 0) return { texte: "Aucun reconnu. À vérifier après coup : ces biais se voient beaucoup mieux sur les autres.", ton: "bon" };
                if (n <= 2) return { texte: "Deux repères utiles : le temps passé ne doit rien changer, et tout n'est pas à somme nulle.", ton: "moyen" };
                return { texte: "Plusieurs biais actifs. Le plus coûteux est de croire que ce que l'un gagne, l'autre le perd : il ferme les accords créatifs.", ton: "alerte" };
            },
            lecon: "Un accord se juge par rapport à sa solution de rechange, jamais par rapport à ce qu'on espérait au départ. C'est la seule comparaison qui ait un sens."
        },

        "manipulation": {
            type: "controle",
            titre: "Reconnaissez-vous ces procédés ?",
            intro: "Cochez ceux que vous avez rencontrés dans cette négociation.",
            points: [
                { texte: "Une urgence artificielle", aide: "« l'offre expire ce soir »" },
                { texte: "Une concession minuscule présentée comme un effort majeur" },
                { texte: "Une demande supplémentaire une fois l'accord presque conclu" },
                { texte: "Un « mon supérieur refuse » invérifiable" },
                { texte: "Un chiffre annoncé sans source, présenté comme une évidence" },
                { texte: "Une mise en cause personnelle plutôt que du fond" }
            ],
            verdict: (n) => {
                if (n === 0) return { texte: "Rien de tout cela. La négociation porte sur le fond.", ton: "bon" };
                if (n <= 2) return { texte: "Procédés repérés. Les nommer à voix haute, calmement, suffit le plus souvent à les faire cesser.", ton: "moyen" };
                return { texte: "Beaucoup de procédés. Votre meilleure réponse reste votre solution de rechange : c'est elle qui rend le départ crédible.", ton: "alerte" };
            },
            lecon: "La réponse à un procédé n'est ni de le subir ni d'en user : c'est de le nommer. « Je note que le délai est très court — est-il négociable ? » désamorce sans affronter."
        },

        "cout-du-desaccord": {
            titre: "Combien coûte de ne pas conclure ?",
            intro: "Un désaccord qui dure a un prix, rarement calculé et souvent supérieur à l'écart qui reste à combler.",
            champs: [
                { id: "ecart", libelle: "Écart restant à combler", unite: "€", defaut: 1500, min: 0, max: 1000000, pas: 100 },
                { id: "semaines", libelle: "Semaines de blocage prévisibles", unite: "sem.", defaut: 6, min: 0, max: 200, pas: 1 },
                { id: "heures", libelle: "Heures par semaine consacrées au sujet", unite: "h", defaut: 3, min: 0, max: 40, pas: 0.5 },
                { id: "taux", libelle: "Coût horaire chargé", unite: "€/h", defaut: 45, min: 0, max: 500, pas: 5 }
            ],
            calculer: ({ ecart, semaines, heures, taux }) => {
                const temps = semaines * heures;
                const cout = temps * taux;
                return [
                    { libelle: "Temps consacré", valeur: heuresMinutes(temps * 60) },
                    { libelle: "Coût de ce temps", valeur: euros(cout), fort: true },
                    { libelle: "Comparé à l'écart restant", valeur: ecart > 0 ? pourcent(cout / ecart * 100, 0) + " de l'écart" : "—" },
                    {
                        libelle: "Verdict",
                        valeur: cout >= ecart
                            ? "le blocage coûte plus cher que ce qui reste à négocier"
                            : "l'écart justifie encore de discuter"
                    }
                ];
            },
            lecon: "Beaucoup de négociations continuent bien après le moment où elles coûtent plus qu'elles ne rapportent. Personne ne fait ce calcul, parce qu'il donne tort aux deux camps."
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
