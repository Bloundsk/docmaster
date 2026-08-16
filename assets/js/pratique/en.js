/* ---------------------------------------------------------------------------
 * DOCMASTER — TEXTES DES SIMULATEURS, EN ANGLAIS
 *
 * Chargé par les pages de « en/ », juste avant pratique.js, qui fait passer
 * chaque texte visible par ce dictionnaire.
 *
 * ON NE DUPLIQUE PAS LES SIMULATEURS, seulement leurs textes. Les formules
 * restent uniques dans pratique.js : deux copies d'un calcul finissent par
 * diverger, et une formule fausse ne se voit pas à l'écran — elle produit un
 * nombre plausible.
 *
 * « textes »    correspondance exacte  — titres, libellés, leçons, verdicts
 * « fragments » remplacement partiel   — les mots pris dans une valeur
 *               calculée, comme « 12 sur 40 » ou « 250 mots »
 *
 * Une entrée absente laisse le texte français : mieux vaut une phrase non
 * traduite qu'une clef technique affichée au visiteur.
 * ------------------------------------------------------------------------- */
window.PRATIQUE_TEXTES = {
    fragments: {
        " sur ": " of ",
        " éléments": " items",
        " exercices": " exercises",
        " mots": " words",
        " moins de temps": " less time",
        "plus d'une page": "more than a page",
        "lecture fluide": "fluent reading",
        "lecture possible, dictionnaire à portée": "readable, with a dictionary at hand",
        "lecture laborieuse": "heavy going",
        "lecture impossible sans traduction": "unreadable without a translation",
    },

    textes: {
        // --- Commandes communes ------------------------------------------
        "À vous d'essayer": "Your turn",
        "Renseignez": "Fill in",
        "pour voir le résultat.": "to see the result.",

        // --- Unités --------------------------------------------------------
        // Celles qui ne changent pas sont déclarées quand même : sans cela, on
        // ne saurait pas si elles ont été examinées ou oubliées.
        "j": "d",
        "mois": "months",
        "sem.": "wks",
        "mots": "words",
        "s": "s",
        "h": "h",
        "%": "%",

        // --- courbe-oubli --------------------------------------------------
        "Que reste-t-il dans une semaine ?": "What will be left in a week?",
        "Sans révision, l'oubli suit une courbe : très rapide au début, puis de plus en plus lente.":
            "Without review, forgetting follows a curve: very fast at first, then slower and slower.",
        "Éléments appris": "Items learned",
        "Jours écoulés": "Days elapsed",
        "Part encore su": "Share still known",
        "Éléments encore su": "Items still known",
        "Éléments à réapprendre": "Items to relearn",
        "L'essentiel de la perte a lieu dans les deux premiers jours. C'est là qu'une révision coûte le moins et rapporte le plus.":
            "Most of the loss happens in the first two days. That is when a review costs least and pays most.",

        // --- repetition-espacee --------------------------------------------
        "Combien coûte vraiment une révision espacée ?": "What does spaced review really cost?",
        "Comparé à tout relire chaque semaine, pour la même échéance.":
            "Compared with rereading everything weekly, for the same deadline.",
        "Éléments à retenir": "Items to remember",
        "Temps par élément et par passage": "Time per item, per pass",
        "Horizon": "Horizon",
        "Passages de révision": "Review passes",
        "Temps total, en espacé": "Total time, spaced",
        "Temps total, en relisant chaque semaine": "Total time, rereading weekly",
        "Rapport": "Ratio",
        "L'espacement ne demande pas plus de travail : il en demande beaucoup moins, au prix d'un calendrier à tenir.":
            "Spacing does not ask for more work — it asks for far less, at the price of a schedule to keep.",

        // --- effet-test ------------------------------------------------------
        "Relire, ou se tester ?": "Reread, or test yourself?",
        "À temps de travail égal, réglez la part consacrée à vous interroger plutôt qu'à relire.":
            "For the same study time, set how much of it goes to testing yourself rather than rereading.",
        "Part du temps passée à se tester": "Share of time spent self-testing",
        "Rétention à une semaine": "Retention after one week",
        "Écart avec la relecture seule": "Difference from rereading alone",
        "Se tester n'est pas une façon de vérifier qu'on a appris : c'est la façon d'apprendre. Le contrôle est l'exercice.":
            "Testing yourself is not a way of checking that you have learned: it is the way of learning. The test is the exercise.",

        // --- illusion-maitrise -----------------------------------------------
        "Le savez-vous vraiment ?": "Do you really know it?",
        "Cochez ce qui est vrai d'un sujet que vous pensez maîtriser.":
            "Tick what is true of a topic you believe you have mastered.",
        "Je peux le réexpliquer sans regarder mes notes": "I can explain it again without looking at my notes",
        "Je peux l'expliquer à quelqu'un qui n'y connaît rien": "I can explain it to someone who knows nothing about it",
        "Je sais donner un exemple qui n'était pas dans le cours": "I can give an example that was not in the course",
        "Je sais dire dans quels cas cela ne s'applique pas": "I can say in which cases it does not apply",
        "Je m'en suis souvenu au moins une fois après plusieurs jours": "I have recalled it at least once after several days",
        "Je peux le retrouver sans le reconnaître d'abord": "I can retrieve it without first recognising it",
        "reconnaître un texte n'est pas savoir le produire": "recognising a text is not being able to produce it",
        "C'est acquis. Rien de tout cela ne s'obtient en relisant.":
            "This one is learned. None of it is obtained by rereading.",
        "Solide, mais incomplet : les cases restantes sont précisément celles que la relecture ne coche jamais.":
            "Solid but incomplete: the remaining boxes are exactly the ones rereading never ticks.",
        "Sentiment de maîtrise sans les preuves. C'est le piège habituel de la relecture : le texte devient familier, pas connu.":
            "A feeling of mastery without the evidence. That is rereading's usual trap: the text becomes familiar, not known.",
        "La familiarité se confond avec la connaissance. Un texte relu quatre fois paraît évident — et reste introuvable une semaine plus tard.":
            "Familiarity is easily mistaken for knowledge. A text read four times feels obvious — and is nowhere to be found a week later.",

        // --- elaboration -------------------------------------------------------
        "Traitez-vous vraiment ce que vous lisez ?": "Are you really processing what you read?",
        "Cochez ce que vous faites réellement pendant une séance de travail.":
            "Tick what you actually do during a study session.",
        "Je me demande « pourquoi est-ce vrai ? » avant de passer à la suite":
            "I ask myself “why is this true?” before moving on",
        "Je relie la notion à quelque chose que je connais déjà": "I connect the idea to something I already know",
        "Je reformule avec mes propres mots, pas ceux du cours": "I restate it in my own words, not the course's",
        "Je cherche un contre-exemple ou un cas limite": "I look for a counter-example or an edge case",
        "Je pose par écrit une question à laquelle le cours ne répond pas":
            "I write down a question the course does not answer",
        "Je m'arrête pour anticiper la suite avant de la lire": "I stop to predict what comes next before reading it",
        "Vous traitez le contenu au lieu de le parcourir. C'est ce qui laisse une trace.":
            "You are processing the content instead of skimming it. That is what leaves a trace.",
        "Bon départ. Les questions « pourquoi » et les contre-exemples sont ce qui rapporte le plus.":
            "Good start. “Why” questions and counter-examples are what pay off most.",
        "Lecture passive : le texte défile et rien ne s'y accroche. Une seule question posée à voix haute change déjà le résultat.":
            "Passive reading: the text scrolls by and nothing sticks to it. One question asked out loud already changes the result.",
        "Une notion isolée s'oublie ; une notion rattachée à dix autres se retrouve par dix chemins.":
            "An isolated idea is forgotten; an idea tied to ten others can be found by ten routes.",

        // --- entrelacement -------------------------------------------------------
        "En blocs ou entrelacé ?": "Blocked or interleaved?",
        "Réglez la part d'exercices mélangés plutôt que groupés par type.":
            "Set the share of exercises mixed together rather than grouped by type.",
        "Exercices au total": "Exercises in total",
        "Part d'exercices entrelacés": "Share of interleaved exercises",
        "Réussite au test différé": "Success on the delayed test",
        "Exercices réussis": "Exercises passed",
        "Écart avec la pratique groupée": "Difference from blocked practice",
        "Grouper par type donne l'impression d'avancer plus vite : on applique la même méthode sans avoir à la choisir. Le test, lui, ne prévient pas du type.":
            "Grouping by type feels faster: you apply the same method without having to choose it. The test, however, does not announce the type.",

        // --- couverture-vocabulaire ------------------------------------------------
        "Combien de mots faut-il pour lire ?": "How many words does reading take?",
        "Les mots les plus fréquents couvrent une part énorme d'un texte — et les suivants rapportent de moins en moins.":
            "The most frequent words cover an enormous share of any text — and the next ones pay less and less.",
        "Mots connus": "Words known",
        "Mots par page": "Words per page",
        "Couverture du texte": "Text coverage",
        "Mots inconnus par page": "Unknown words per page",
        "Soit un mot inconnu tous les": "That is one unknown word every",
        "Verdict": "Verdict",
        "Les mille premiers mots font le gros du travail. Les mille suivants en font dix fois moins — d'où l'intérêt de les apprendre dans l'ordre de leur fréquence.":
            "The first thousand words do most of the work. The next thousand do ten times less — which is why frequency order is worth following.",

        // --- pratique-deliberee ------------------------------------------------------
        "Où passe votre temps de travail ?": "Where does your study time go?",
        "Le temps passé sur ce qu'on réussit déjà entretient ; il ne fait pas progresser.":
            "Time spent on what you already get right maintains; it does not improve.",
        "Heures de travail par semaine": "Study hours per week",
        "Part passée sur ce que vous ratez": "Share spent on what you get wrong",
        "Sur combien de semaines": "Over how many weeks",
        "Heures utiles par semaine": "Useful hours per week",
        "Heures de confort par semaine": "Comfort hours per week",
        "Heures utiles sur la période": "Useful hours over the period",
        "À 60 %, la même période donnerait": "At 60%, the same period would give",
        "Refaire ce qu'on réussit est agréable et mesurable. Travailler ce qu'on rate est désagréable et c'est la seule chose qui déplace le niveau.":
            "Redoing what you get right is pleasant and measurable. Working on what you get wrong is unpleasant, and it is the only thing that moves the level.",

        // --- sommeil-consolidation -------------------------------------------------------
        "Votre nuit fait-elle son travail ?": "Is your night doing its job?",
        "La mémoire se consolide pendant le sommeil, pas pendant la révision.":
            "Memory consolidates during sleep, not during review.",
        "Je dors au moins sept heures la nuit qui suit un apprentissage":
            "I sleep at least seven hours on the night after learning something",
        "Je révise le soir plutôt que de tout repousser au matin de l'examen":
            "I review in the evening rather than leaving it all to the morning of the exam",
        "Je ne remplace pas une nuit par une nuit blanche de révision":
            "I do not trade a night's sleep for an all-nighter of revision",
        "Mes horaires de coucher varient de moins d'une heure d'un jour à l'autre":
            "My bedtime varies by less than an hour from one day to the next",
        "Je fais des pauses réelles pendant l'apprentissage, sans écran":
            "I take real breaks while learning, away from screens",
        "Je n'attends pas d'un rattrapage le week-end qu'il annule la semaine":
            "I do not expect a weekend catch-up to cancel out the week",
        "Vos nuits travaillent pour vous. C'est l'heure de révision la moins chère qui existe.":
            "Your nights are working for you. It is the cheapest hour of review there is.",
        "Correct. La nuit qui suit l'apprentissage est celle qui compte le plus.":
            "Reasonable. The night after learning is the one that counts most.",
        "Une nuit blanche avant un examen échange la consolidation contre quelques heures de relecture. Le change est mauvais.":
            "An all-nighter before an exam trades consolidation for a few hours of rereading. It is a bad exchange.",
        "Réviser tard puis dormir bat réviser tard puis veiller. Ce n'est pas une question de discipline, c'est le moment où le cerveau range.":
            "Revising late then sleeping beats revising late then staying up. This is not about discipline: it is when the brain files things away.",

        // --- systeme-apprentissage ---------------------------------------------------------
        "Votre système tiendra-t-il six mois ?": "Will your system last six months?",
        "Cochez ce qui existe déjà, pas ce que vous comptez mettre en place.":
            "Tick what already exists, not what you intend to set up.",
        "Un endroit unique où atterrit ce que je veux retenir":
            "A single place where anything I want to remember lands",
        "Un moment fixe pour réviser, dans l'agenda": "A fixed time for review, in the calendar",
        "Des questions écrites, pas seulement des notes à relire":
            "Written questions, not just notes to reread",
        "Un calendrier d'espacement, même approximatif": "A spacing schedule, even a rough one",
        "Une trace de ce que je rate régulièrement": "A record of what I keep getting wrong",
        "Une séance ramenée à cinq minutes les jours chargés": "A five-minute version of the session for busy days",
        "ce qui évite de rompre la série": "which is what keeps the streak from breaking",
        "Un système, et non une bonne intention. C'est ce qui survit aux semaines difficiles.":
            "A system, not a good intention. That is what survives the hard weeks.",
        "Presque. Le créneau fixe et la version courte sont ce qui fait tenir les autres.":
            "Almost. The fixed slot and the short version are what hold the rest together.",
        "Rien de tout cela ne demande de motivation une fois posé — c'est précisément pour cela qu'il faut le poser.":
            "None of this needs motivation once it is in place — which is precisely why it should be put in place.",
        "Ce qui dure ne dépend pas de l'envie du jour. Un créneau et une version de cinq minutes valent mieux qu'un plan ambitieux.":
            "What lasts does not depend on the mood of the day. A slot and a five-minute version beat an ambitious plan.",

        // --- transfert -----------------------------------------------------------------------
        "Ce que vous apprenez servira-t-il ailleurs ?": "Will what you learn be of use elsewhere?",
        "Cochez ce qui est vrai de votre façon d'apprendre ce sujet.":
            "Tick what is true of the way you are learning this subject.",
        "Je m'entraîne sur des cas variés, pas toujours le même format":
            "I practise on varied cases, not always the same format",
        "Je m'entraîne dans les conditions où je devrai m'en servir":
            "I practise in the conditions where I will have to use it",
        "Je sais énoncer le principe, pas seulement la recette":
            "I can state the principle, not just the recipe",
        "J'ai déjà appliqué la notion à un cas qu'on ne m'avait pas montré":
            "I have already applied the idea to a case nobody showed me",
        "Je m'entraîne sans les indices qui seront absents le jour venu":
            "I practise without the cues that will be missing on the day",
        "Je ne compte pas sur un exercice de logique pour améliorer autre chose":
            "I do not count on a logic puzzle to improve anything else",
        "les jeux d'entraînement cérébral améliorent surtout ces jeux":
            "brain-training games mostly improve brain-training games",
        "Ce que vous apprenez a une chance de sortir de la salle de classe.":
            "What you are learning has a chance of leaving the classroom.",
        "Partiel. La variété des cas est le levier le plus fort, et le plus négligé.":
            "Partial. Variety of cases is the strongest lever, and the most neglected.",
        "Apprentissage collé à son contexte : il fonctionnera sur les exercices du cours, et nulle part ailleurs.":
            "Learning glued to its context: it will work on the course exercises, and nowhere else.",
        "Le transfert ne va pas de soi : il se prépare. Ce qu'on apprend dans un seul décor reste attaché à ce décor.":
            "Transfer is not automatic: it is prepared. What is learned in a single setting stays attached to that setting.",

        // --- evaluer-methode -------------------------------------------------------------------
        "Cette méthode vaut-elle votre temps ?": "Is this method worth your time?",
        "Cochez ce qui est vrai de la méthode d'apprentissage qu'on vous propose.":
            "Tick what is true of the learning method being offered to you.",
        "Elle a été comparée à une autre méthode, pas seulement à rien":
            "It has been compared with another method, not merely with nothing",
        "Elle a été mesurée après plusieurs jours, pas juste après la séance":
            "It was measured several days later, not right after the session",
        "Elle mesure ce qu'on retient, pas ce qu'on a ressenti":
            "It measures what is retained, not what was felt",
        "Elle ne repose pas sur les « styles d'apprentissage »": "It does not rest on “learning styles”",
        "visuel, auditif, kinesthésique : hypothèse non confirmée par les études":
            "visual, auditory, kinaesthetic: a hypothesis studies have not confirmed",
        "Elle n'invoque pas de pourcentages du type « on retient 10 % de ce qu'on lit »":
            "It does not cite percentages of the “we remember 10% of what we read” kind",
        "cette pyramide n'a aucune source": "that pyramid has no source",
        "Elle ne promet pas un résultat sans effort": "It does not promise a result without effort",
        "Méthode défendable. Elle mérite qu'on lui consacre quelques semaines.":
            "A defensible method. It deserves a few weeks.",
        "À creuser. Vérifiez surtout le délai du test : c'est là que la plupart des méthodes s'effondrent.":
            "Worth digging into. Check the delay before testing above all: that is where most methods collapse.",
        "Beaucoup de promesses, peu de mesures. Le domaine en est plein.":
            "Many promises, few measurements. The field is full of them.",
        "Une méthode qui rend l'apprentissage agréable sur le moment est souvent celle qui laisse le moins de traces. La difficulté utile n'a pas bonne presse.":
            "A method that makes learning pleasant in the moment is often the one that leaves the least behind. Useful difficulty has a bad name.",
    },
};
