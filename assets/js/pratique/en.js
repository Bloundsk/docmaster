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
        // --- Unites et mots collés à un nombre ---------------------------------
        // Ces morceaux-là sont soudés à une valeur calculée : « 183 heures »,
        // « 26 jours », « 46 000 lignes ». Aucune entrée exacte ne peut les
        // couvrir puisque le nombre change à chaque saisie. Ils sont restés en
        // français sur cinq pages anglaises jusqu'au 16 août 2026 : l'ancien
        // contrôle cherchait des mots-outils, et « heures » n'en est pas un.
        " heures": " hours",
        " semaines": " weeks",
        " jours": " days",
        " jour": " day",          // « par jour » et « de la journée », plus longs, passent avant
        " lignes": " rows",
        " Ko": " kB",
        "% et ": "% and ",        // « 45.1% et 54.9% », les deux bornes d'un intervalle

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

        // --- Design ---------------------------------------------------------
        // Les quatre premiers servent aux libellés construits avec un nombre,
        // du type « Décider (Hick) — 4 familles » : aucune entrée exacte ne
        // peut les couvrir, puisque le nombre varie avec la saisie.
        "Décider (Hick) — ": "Deciding (Hick) — ",
        "Chercher — ": "Searching — ",
        " familles": " groups",
        "liste plate": "flat list",
        "sous la seconde : le fil de la pensée n'est pas rompu": "under a second: the train of thought holds",
        "un retour de progression devient nécessaire": "a progress indicator becomes necessary",

        // --- Développement web ------------------------------------------------
        // Comme pour Hick plus haut, le nombre de requêtes varie avec la saisie :
        // seul un fragment peut traduire le texte qui l'entoure.
        "Une requête par élément (": "One query per item (",
        " requêtes)": " queries)",
        "trop court : le regard revient trop souvent à la ligne": "too short: the eye wraps far too often",
        "trop long : l'œil perd le début de la ligne suivante": "too long: the eye loses the start of the next line",

        // --- Négociation --------------------------------------------------------
        // pratique.js applique les fragments du plus long au plus court : celui
        // qui contient « mots » ci-dessus passe donc avant lui, comme il faut.
        "au-delà de 150 mots, la plupart des lecteurs parcourent au lieu de lire":
            "beyond 150 words, most readers skim instead of reading",
        "le blocage coûte plus cher que ce qui reste à négocier":
            "the deadlock costs more than what is left to negotiate",
        "acceptable, mais continuer coûterait plus que ce que cela rapporterait":
            "acceptable, but carrying on would cost more than it would bring in",
        "une ancre invraisemblable fait perdre la crédibilité, et parfois la négociation":
            "an implausible anchor loses credibility, and sometimes the negotiation",
        "le partage de ces": "the split of that",
        ", pas l'accord lui-même": ", not the agreement itself",
        "vérifier vos estimations avant de vous y engager":
            "check your estimates before committing to them",
        "l'écart justifie encore de discuter": "the gap still justifies talking",
        "% de l'écart": "% of the gap",
        " des tests": " of the tests",
        " du temps": " of the time",
        "dans la zone confortable": "in the comfortable zone",
        " fois plus lent": "× slower",
        "longueur qui se lit vraiment": "a length that actually gets read",
        " de plus pour que continuer se justifie": " more to make carrying on worthwhile",
        "vous avez de la marge pour continuer": "you have room to continue",
        "un seul prix possible : ": "one possible price only: ",

        // --- Productivité -------------------------------------------------------
        " de la journée": " of the day",
        " par jour": " per day",
        "En 1 passage(s) groupé(s)": "In 1 batched pass",
        " passage(s) groupé(s)": " batched passes",
        "En ": "In ",
        " à ": " to ",
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

        // ====================================================================
        // DESIGN UX/UI
        // ====================================================================

        // --- Unités ---------------------------------------------------------
        "Ko": "kB",
        "Mb/s": "Mb/s",
        "ms": "ms",
        "options": "options",
        "fois": "times",
        "pers.": "people",
        "jours": "days",
        "px CSS": "CSS px",

        // --- ux-ou-ui --------------------------------------------------------
        "UX ou UI ?": "UX or UI?",
        "Cochez les décisions qui relèvent de l'UX plutôt que de l'UI. Quatre le sont.":
            "Tick the decisions that belong to UX rather than UI. Four of them do.",
        "Décider de l'ordre des étapes d'une inscription": "Deciding the order of the steps in a sign-up",
        "UX : c'est le parcours": "UX: this is the journey",
        "Choisir la couleur du bouton principal": "Choosing the colour of the main button",
        "UI : c'est l'apparence": "UI: this is the appearance",
        "Déterminer quelles informations demander, et lesquelles supprimer":
            "Deciding which information to ask for, and which to drop",
        "UX": "UX",
        "Définir l'échelle typographique": "Defining the type scale",
        "UI": "UI",
        "Comprendre pourquoi les gens abandonnent au paiement": "Understanding why people abandon at payment",
        "Décider qu'une erreur s'affiche sous le champ concerné plutôt qu'en haut":
            "Deciding that an error appears under the field concerned rather than at the top",
        "UX : cela change la capacité à corriger": "UX: it changes the ability to fix things",
        "Quatre de ces six décisions relèvent de l'UX.": "Four of these six decisions belong to UX.",
        "Quatre décisions relèvent de l'UX. Vérifiez avec les indications que ce sont les vôtres.":
            "Four decisions belong to UX. Check against the hints that they are the ones you picked.",
        "Plus de quatre : deux de ces décisions portent sur l'apparence, pas sur le parcours.":
            "More than four: two of these decisions are about appearance, not about the journey.",
        "L'UI se voit, l'UX se vit. Une interface superbe sur un parcours absurde reste inutilisable.":
            "UI is seen, UX is lived. A beautiful interface on an absurd journey is still unusable.",

        // --- qualite-wireframe -------------------------------------------------
        "Votre wireframe est-il utile ?": "Is your wireframe useful?",
        "Cochez ce qui est vrai de la maquette fil de fer que vous avez sous les yeux.":
            "Tick what is true of the wireframe in front of you.",
        "Il est en niveaux de gris, sans couleur ni image finale":
            "It is in greyscale, with no colour and no final images",
        "sinon la discussion glisse vers l'esthétique": "otherwise the discussion drifts towards aesthetics",
        "Le contenu est réaliste, pas du faux texte": "The content is realistic, not placeholder text",
        "un titre réel fait trois lignes, le faux texte en fait une":
            "a real headline runs to three lines, placeholder text to one",
        "La hiérarchie des éléments est visible sans explication":
            "The hierarchy of elements is visible without explanation",
        "Les états vides, en cours de chargement et en erreur sont prévus":
            "Empty, loading and error states are accounted for",
        "Il montre un parcours, pas un écran isolé": "It shows a journey, not an isolated screen",
        "Il est assez grossier pour qu'on ose le critiquer": "It is rough enough that people dare to criticise it",
        "trop léché, il paraît définitif et n'est plus discuté":
            "too polished, it looks settled and stops being discussed",
        "Cette maquette va produire des retours sur l'apparence, pas sur le fond.":
            "This mock-up will produce feedback on appearance, not on substance.",
        "Bonne base. Les états d'erreur et de chargement sont les grands oubliés.":
            "Good basis. Error and loading states are the great forgotten ones.",
        "Wireframe efficace : il fait parler de structure, pas de couleurs.":
            "An effective wireframe: it gets people talking about structure, not colours.",
        "Un wireframe trop soigné ne reçoit plus de critiques de structure : il paraît déjà décidé.":
            "A wireframe that is too neat stops attracting structural criticism: it already looks decided.",

        // --- hierarchie-visuelle -----------------------------------------------
        "Testez votre hiérarchie visuelle": "Test your visual hierarchy",
        "Plissez les yeux devant votre écran jusqu'à le voir flou, puis cochez.":
            "Squint at your screen until it blurs, then tick.",
        "Je distingue encore l'élément le plus important": "I can still make out the most important element",
        "L'action principale se repère sans lire": "The main action can be spotted without reading",
        "Les zones se détachent les unes des autres": "The areas stand apart from one another",
        "Rien ne rivalise avec l'élément principal": "Nothing competes with the main element",
        "deux éléments également saillants s'annulent": "two equally prominent elements cancel each other out",
        "Le regard suit un ordre naturel du haut vers le bas": "The eye follows a natural order from top to bottom",
        "Les espaces séparent ce qui doit l'être et rapprochent ce qui va ensemble":
            "Spacing separates what should be apart and groups what belongs together",
        "L'écran demande d'être lu entièrement pour être compris.":
            "The screen has to be read in full to be understood.",
        "Correct. Vérifiez surtout qu'un seul élément domine.":
            "Reasonable. Above all check that a single element dominates.",
        "Hiérarchie lisible : l'écran se comprend avant d'être lu.":
            "Readable hierarchy: the screen is understood before it is read.",
        "Si tout est mis en avant, plus rien ne l'est. Une hiérarchie suppose d'accepter que certaines choses passent au second plan.":
            "If everything is emphasised, nothing is. A hierarchy means accepting that some things move to the background.",

        // --- combien-de-testeurs -----------------------------------------------
        "Combien de testeurs faut-il ?": "How many testers do you need?",
        "La réponse surprend : bien moins qu'on ne croit, et les premiers rapportent presque tout.":
            "The answer is surprising: far fewer than people think, and the first ones find nearly everything.",
        "Nombre de participants": "Number of participants",
        "Part des problèmes qu'un participant révèle en moyenne":
            "Share of problems one participant reveals on average",
        "Problèmes détectés": "Problems found",
        "Apport du participant suivant": "What the next participant adds",
        "Problèmes encore invisibles": "Problems still invisible",
        "Mieux vaut trois séries de cinq tests à trois moments du projet qu'une seule série de quinze à la fin.":
            "Three rounds of five tests at three points in the project beat one round of fifteen at the end.",

        // --- audit-accessibilite -------------------------------------------------
        "Audit d'accessibilité en dix minutes": "A ten-minute accessibility audit",
        "Ces vérifications ne demandent aucun outil spécialisé.": "These checks need no specialist tool.",
        "Le contraste du texte atteint 4,5 pour 1 sur fond uni":
            "Text contrast reaches 4.5 to 1 against a plain background",
        "3 pour 1 suffit pour les grands titres": "3 to 1 is enough for large headings",
        "Je peux parcourir tout le site au clavier seul, sans souris":
            "I can go through the whole site with the keyboard alone, no mouse",
        "L'élément actif au clavier est visible en permanence":
            "The element focused by the keyboard is visible at all times",
        "ne jamais supprimer le contour de focus": "never remove the focus outline",
        "Les images porteuses d'information ont une description":
            "Images that carry information have a description",
        "Les images décoratives sont marquées comme telles": "Decorative images are marked as such",
        "Les boutons tactiles font au moins 44 pixels de côté":
            "Touch targets are at least 44 pixels on a side",
        "L'information n'est jamais portée par la couleur seule":
            "Information is never carried by colour alone",
        "un champ en erreur doit aussi porter un texte": "a field in error must also carry text",
        "Plusieurs obstacles bloquants subsistent, y compris pour des usages ordinaires.":
            "Several blocking obstacles remain, including for ordinary use.",
        "Bon niveau. Le parcours au clavier est le test le plus révélateur s'il manque.":
            "Good level. The keyboard run-through is the most revealing test if it is missing.",
        "Base solide : l'essentiel des obstacles courants est levé.":
            "Solid basis: most common obstacles have been removed.",
        "Cinq minutes de navigation au clavier révèlent l'essentiel des problèmes, sans aucun outil.":
            "Five minutes of keyboard navigation reveal most of the problems, with no tool at all.",

        // --- test-des-cartes -------------------------------------------------------
        "Votre navigation tient-elle debout ?": "Does your navigation stand up?",
        "Cochez ce qui est vrai du menu que vous avez sous les yeux.":
            "Tick what is true of the menu in front of you.",
        "Les entrées correspondent à des tâches, pas à l'organigramme":
            "The entries match tasks, not the org chart",
        "Un visiteur découvrant le site devinerait ce qu'il y a derrière chaque libellé":
            "A first-time visitor would guess what lies behind each label",
        "Aucun libellé n'utilise de vocabulaire interne à la maison":
            "No label uses in-house vocabulary",
        "Il y a moins de huit entrées de premier niveau": "There are fewer than eight top-level entries",
        "au-delà, il faut regrouper": "beyond that, they need grouping",
        "Deux entrées ne peuvent pas être confondues": "No two entries can be confused",
        "« Espace client » et « Mon compte » sur le même site":
            "“Customer area” and “My account” on the same site",
        "L'organisation a été vérifiée auprès de personnes extérieures":
            "The structure has been checked with people from outside",
        "Cette navigation est probablement claire pour vous seul.":
            "This navigation is probably clear to you alone.",
        "Correct. Le test auprès d'extérieurs est celui qui révèle le plus.":
            "Reasonable. Testing with outsiders is what reveals most.",
        "Navigation construite du point de vue du visiteur. C'est rare.":
            "Navigation built from the visitor's point of view. That is rare.",
        "Un menu construit sur l'organigramme est parfaitement logique de l'intérieur, et opaque de l'extérieur.":
            "A menu built on the org chart is perfectly logical from inside, and opaque from outside.",

        // --- cible-tactile ------------------------------------------------------------
        "Vos cibles tactiles sont-elles assez grandes ?": "Are your touch targets big enough?",
        "Un doigt couvre environ 9 millimètres. Les pixels CSS, eux, ne se voient pas.":
            "A finger covers about 9 millimetres. CSS pixels, for their part, cannot be seen.",
        "Taille de la cible": "Target size",
        "Espacement avec la cible voisine": "Spacing to the neighbouring target",
        "Taille réelle sur l'écran": "Real size on screen",
        "Zone atteignable avec l'espacement": "Reachable area including spacing",
        "Recommandation (44 px, soit 11,6 mm)": "Recommendation (44 px, that is 11.6 mm)",
        // Les trois verdicts que ce simulateur affiche, un seul mot chacun.
        "conforme": "compliant",
        "limite": "borderline",
        "trop petite": "too small",
        "Une cible trop petite ne produit pas une erreur du concepteur : elle produit un utilisateur qui croit s'être trompé.":
            "A target that is too small does not produce a designer's error: it produces a user who thinks they got it wrong.",

        // --- sante-systeme --------------------------------------------------------------
        "Votre système de design tient-il ?": "Is your design system holding up?",
        "Cochez ce qui est vrai aujourd'hui, pas ce qui était prévu.":
            "Tick what is true today, not what was planned.",
        "Les espacements suivent une échelle définie, pas des valeurs libres":
            "Spacing follows a defined scale, not free values",
        "Il existe une seule façon d'afficher une erreur": "There is exactly one way of showing an error",
        "Les couleurs sont nommées par leur rôle, pas par leur teinte":
            "Colours are named by role, not by hue",
        "« couleur de danger » plutôt que « rouge »": "“danger colour” rather than “red”",
        "La documentation décrit le produit réel, pas une version passée":
            "The documentation describes the real product, not a past version",
        "Quelqu'un est responsable d'arbitrer les exceptions": "Someone is responsible for ruling on exceptions",
        "Une exception acceptée est soit intégrée, soit corrigée":
            "An accepted exception is either absorbed or fixed",
        "jamais laissée vivre à côté": "never left to live alongside",
        "Ce système décrit probablement déjà un produit qui n'existe plus.":
            "This system probably already describes a product that no longer exists.",
        "Correct. L'absence de propriétaire est ce qui tue les systèmes en quelques mois.":
            "Reasonable. Having no owner is what kills systems within months.",
        "Système vivant : il ferme réellement des questions.":
            "A living system: it actually closes questions.",
        "Un système de design est un produit à part entière. Sans quelqu'un pour l'arbitrer, il ne survit pas.":
            "A design system is a product in its own right. Without someone to arbitrate it, it does not survive.",

        // --- budget-performance ------------------------------------------------------------
        "Calculez votre budget de performance": "Work out your performance budget",
        "Le poids d'une page se traduit directement en secondes d'attente.":
            "The weight of a page translates directly into seconds of waiting.",
        "Poids total de la page": "Total page weight",
        "Débit de la connexion": "Connection speed",
        "Latence aller-retour": "Round-trip latency",
        "Temps de chargement estimé": "Estimated load time",
        "Poids à retirer pour passer sous 1 s": "Weight to remove to get under 1 s",
        "Perception": "Perception",
        "perceptible, mais acceptable": "noticeable, but acceptable",
        "au-delà de la limite d'attention : la plupart abandonnent":
            "beyond the limit of attention: most people give up",
        "La liste des éléments à alléger est presque toujours dominée par les images non compressées.":
            "The list of things to slim down is almost always dominated by uncompressed images.",

        // --- loi-de-hick ---------------------------------------------------------------------
        "Décider, ou chercher : deux coûts différents": "Deciding, or searching: two different costs",
        "La loi de Hick décrit le choix entre des options <strong>déjà connues</strong>. Trouver une option inconnue relève du balayage visuel, dont le coût est tout autre.":
            "Hick's law describes choosing between options that are <strong>already known</strong>. Finding an unknown option is visual scanning, whose cost is quite different.",
        "Nombre d'options présentées": "Number of options presented",
        "Nombre de familles si vous les regroupez": "Number of groups if you group them",
        "Décider (Hick) — liste plate": "Deciding (Hick) — flat list",
        "Chercher — liste plate": "Searching — flat list",
        "Sur une option déjà connue, regrouper fait perdre un peu de temps. Sur une option qu'il faut trouver, le gain est considérable — et c'est le cas d'un visiteur qui découvre le site.":
            "For an option already known, grouping costs a little time. For an option that has to be found, the gain is considerable — and that is the case for a first-time visitor.",

        // --- schemas-sombres -------------------------------------------------------------------
        "Repérez les schémas sombres": "Spot the dark patterns",
        "Cochez ce que présente l'interface que vous examinez.":
            "Tick what the interface you are examining does.",
        "« Tout accepter » est plus visible que le refus": "“Accept all” is more visible than refusing",
        "non conforme : le refus doit être aussi facile": "non-compliant: refusing must be just as easy",
        "La résiliation est nettement plus longue que la souscription":
            "Cancelling takes markedly longer than subscribing",
        "non conforme au droit français": "non-compliant under French law",
        "Des frais apparaissent seulement à la fin du tunnel":
            "Fees only appear at the end of the checkout",
        "Le libellé du refus est rédigé pour être désagréable":
            "The wording of the refusal is written to be unpleasant",
        "« Non merci, je préfère payer plus cher »": "“No thanks, I'd rather pay more”",
        "Un compte à rebours ou une rareté sont affichés sans fondement":
            "A countdown or a scarcity claim is displayed with no basis",
        "Une case est pré-cochée en faveur du site": "A box is pre-ticked in the site's favour",
        "Aucun schéma repéré. Refaites le test après chaque évolution du tunnel.":
            "No pattern spotted. Run the test again after every change to the checkout.",
        "Des pratiques à corriger, dont certaines exposent juridiquement.":
            "Practices to correct, some of which carry legal exposure.",
        "Faisceau de pratiques trompeuses : plusieurs sont sanctionnées en droit européen.":
            "A cluster of deceptive practices: several are penalised under European law.",
        "Le test qui tranche : si l'utilisateur découvrait ce mécanisme, se sentirait-il floué ? L'intention ne change rien.":
            "The test that settles it: if the user discovered this mechanism, would they feel cheated? Intent changes nothing.",

        // --- gain-de-temps-utilisateur ------------------------------------------------------------
        "Chiffrez votre amélioration en heures": "Put your improvement in hours",
        "L'argument esthétique se discute. Le calcul beaucoup moins.":
            "The aesthetic argument is arguable. The arithmetic much less so.",
        "Secondes gagnées par tâche": "Seconds saved per task",
        "Fois par jour et par personne": "Times per day per person",
        "Personnes concernées": "People affected",
        "Jours d'usage par an": "Days of use per year",
        "Temps gagné par an": "Time saved per year",
        "Soit en journées de travail": "That is, in working days",
        "Par personne et par an": "Per person per year",
        "Cinq secondes ne se défendent pas en réunion. Cent quatre-vingts heures par an, si.":
            "Five seconds cannot be argued in a meeting. A hundred and eighty hours a year can.",

        // ====================================================================
        // DÉVELOPPEMENT WEB
        // ====================================================================

        // --- structure-html ----------------------------------------------------
        "Cochez ce qui est vrai de la page que vous avez sous les yeux.":
            "Tick what is true of the page in front of you.",
        "Un seul titre de niveau 1 par page": "Exactly one level-1 heading per page",
        "Les niveaux de titre se suivent sans sauter de rang": "Heading levels follow on without skipping a rank",
        "pas de h4 juste après un h2": "no h4 straight after an h2",
        "La navigation est dans un élément dédié, pas dans une division quelconque":
            "Navigation sits in a dedicated element, not in a generic division",
        "Les boutons qui déclenchent une action sont des boutons, pas des liens":
            "Buttons that trigger an action are buttons, not links",
        "Chaque champ de formulaire a une étiquette qui lui est liée":
            "Every form field has a label bound to it",
        "Les images informatives ont un texte de remplacement": "Informative images have alternative text",
        "Cette page se comprend visuellement, mais pas structurellement.":
            "This page can be understood visually, but not structurally.",
        "Bonne base. Les étiquettes de formulaire sont le manque le plus fréquent.":
            "Good basis. Form labels are the most frequent omission.",
        "Structure saine : lisible par un lecteur d'écran comme par un moteur de recherche.":
            "Sound structure: readable by a screen reader as well as by a search engine.",
        "Le bon élément HTML apporte gratuitement l'accessibilité et le comportement clavier. Une division n'apporte rien.":
            "The right HTML element brings accessibility and keyboard behaviour for free. A generic division brings nothing.",

        // --- css-ou-javascript -------------------------------------------------
        "Cochez ce qui se fait aujourd'hui en CSS seul. Quatre réponses.":
            "Tick what can be done today in CSS alone. Four answers.",
        "Afficher ou masquer un menu déroulant au survol": "Showing or hiding a dropdown menu on hover",
        "Animer une transition de couleur ou de taille": "Animating a colour or size transition",
        "CSS, et c'est plus fluide": "CSS, and it is smoother",
        "Adapter la mise en page à la largeur de l'écran": "Adapting the layout to the screen width",
        "Envoyer un formulaire sans recharger la page": "Submitting a form without reloading the page",
        "JavaScript nécessaire": "JavaScript required",
        "Coller un en-tête en haut de l'écran au défilement": "Sticking a header to the top of the screen on scroll",
        "Calculer un total à partir de champs saisis": "Calculating a total from entered fields",
        "Quatre de ces six tâches se font en CSS seul.": "Four of these six tasks can be done in CSS alone.",
        "Quatre réponses en CSS. Vérifiez avec les indications que ce sont bien celles-là.":
            "Four answers in CSS. Check against the hints that these are the right ones.",
        "Plus de quatre : deux de ces tâches demandent réellement du JavaScript.":
            "More than four: two of these tasks genuinely need JavaScript.",
        "Ce qui se fait en CSS fonctionne même si le JavaScript échoue à charger. C'est une robustesse gratuite.":
            "What is done in CSS still works if the JavaScript fails to load. That is robustness for free.",

        // --- client-ou-serveur ---------------------------------------------------
        "Cochez ce qui DOIT être fait côté serveur, sans exception.":
            "Tick what MUST be done on the server, without exception.",
        "Vérifier qu'un utilisateur a le droit d'accéder à une donnée":
            "Checking that a user is allowed to access a piece of data",
        "toujours côté serveur": "always on the server",
        "Vérifier qu'un champ est bien rempli avant envoi": "Checking that a field is filled in before sending",
        "côté navigateur pour le confort — mais le serveur doit revérifier":
            "in the browser for convenience — but the server must check again",
        "Calculer le prix final d'une commande": "Calculating the final price of an order",
        "serveur : sinon le prix se modifie depuis la console":
            "server: otherwise the price can be changed from the console",
        "Afficher une infobulle au survol": "Showing a tooltip on hover",
        "Décider si un compte peut être supprimé": "Deciding whether an account can be deleted",
        "Masquer un bouton réservé aux administrateurs": "Hiding a button reserved for administrators",
        "masquer ne protège pas : l'action doit être refusée côté serveur":
            "hiding protects nothing: the action must be refused on the server",
        "Quatre de ces six doivent impérativement être traités côté serveur.":
            "Four of these six must be handled on the server, without exception.",
        "Quatre traitements relèvent obligatoirement du serveur.":
            "Four of them belong on the server, compulsorily.",
        "Plus de quatre : deux de ces éléments relèvent du confort d'affichage.":
            "More than four: two of these are a matter of display convenience.",
        "Tout ce qui protège quelque chose se vérifie côté serveur. Le navigateur appartient à l'utilisateur.":
            "Anything that protects something is checked on the server. The browser belongs to the user.",

        // --- largeur-de-texte -------------------------------------------------------
        "Trouvez la bonne largeur de texte": "Find the right text width",
        "Une ligne trop longue fatigue l'œil, qui perd le début de la ligne suivante.":
            "A line that is too long tires the eye, which loses the start of the next line.",
        "Caractères par ligne visés": "Characters per line targeted",
        "Largeur de bloc recommandée": "Recommended block width",
        "En unités relatives": "In relative units",
        "La zone confortable se situe entre 45 et 75 caractères par ligne, quelle que soit la taille de l'écran.":
            "The comfortable zone lies between 45 and 75 characters per line, whatever the screen size.",

        // --- appels-api ---------------------------------------------------------------
        "Séquentiel ou parallèle ?": "Sequential or parallel?",
        "Le temps d'une page dépend surtout du nombre d'allers-retours.":
            "A page's timing depends mostly on the number of round trips.",
        "Latence réseau par appel": "Network latency per call",
        "Traitement serveur par appel": "Server processing per call",
        "En séquence": "In sequence",
        "En parallèle": "In parallel",
        "Temps économisé": "Time saved",
        "Le serveur n'est pas plus rapide dans le second cas. C'est l'organisation des appels qui change tout.":
            "The server is no faster in the second case. It is the arrangement of the calls that changes everything.",

        // --- requete-en-boucle ----------------------------------------------------------
        "Mesurez le coût d'une requête en boucle": "Measure the cost of a query in a loop",
        "Le défaut de performance le plus courant, et le plus invisible à la lecture du code.":
            "The most common performance fault, and the least visible when reading the code.",
        "Éléments à afficher": "Items to display",
        "Durée d'une requête simple": "Duration of a simple query",
        "Durée de la requête avec jointure": "Duration of the query with a join",
        "Une seule requête avec jointure": "A single query with a join",
        "Le code paraît identique dans les deux cas. Seul le compteur de requêtes révèle la différence.":
            "The code looks identical in both cases. Only the query counter reveals the difference.",

        // --- mise-en-ligne ------------------------------------------------------------------
        "Prêt à mettre en ligne ?": "Ready to go live?",
        "Cochez ce qui est vérifié. Ces points expliquent la quasi-totalité des premières mises en ligne ratées.":
            "Tick what has been checked. These points explain almost every failed first deployment.",
        "Aucun secret ne figure dans le code envoyé": "No secret appears in the code being sent",
        "clés d'API, mots de passe, jetons": "API keys, passwords, tokens",
        "La casse des noms de fichiers est exacte": "File name casing is exact",
        "le serveur distingue Image.png de image.png, pas Windows":
            "the server tells Image.png from image.png, Windows does not",
        "Les chemins fonctionnent depuis la racine du site": "Paths work from the site root",
        "Le HTTPS est actif et la redirection en place": "HTTPS is on and the redirect is in place",
        "Une page d'erreur personnalisée existe": "A custom error page exists",
        "Le déploiement envoie l'ensemble des fichiers, pas une sélection":
            "The deployment sends all the files, not a selection",
        "J'ai ouvert le site dans une fenêtre privée après déploiement":
            "I opened the site in a private window after deploying",
        "pour contourner le cache et voir ce que voient les autres":
            "to bypass the cache and see what everyone else sees",
        "Plusieurs points bloquants risquent d'apparaître après le déploiement.":
            "Several blocking problems are likely to surface after deployment.",
        "Presque. La casse des fichiers et les secrets sont les deux à ne pas manquer.":
            "Almost. File casing and secrets are the two not to miss.",
        "Prêt. Ces sept points couvrent l'essentiel des incidents de première mise en ligne.":
            "Ready. These seven points cover most first-deployment incidents.",
        "« Ça marche chez moi » et « c'est en ligne » diffèrent par quelques points précis, tous vérifiables d'avance.":
            "“It works on my machine” and “it is live” differ by a few precise points, all checkable in advance.",

        // --- historique-git ----------------------------------------------------------------------
        "Votre historique est-il utilisable ?": "Is your history usable?",
        "Cochez ce qui décrit vos habitudes réelles.": "Tick what describes your actual habits.",
        "Un commit correspond à une seule intention": "One commit matches one intention",
        "Les messages expliquent le pourquoi, pas seulement le quoi":
            "Messages explain the why, not just the what",
        "« fix » n'apprend rien à personne": "“fix” teaches nobody anything",
        "Un fichier d'exclusion existe depuis le premier jour": "An ignore file has existed since day one",
        "Aucun secret n'a jamais été commité": "No secret has ever been committed",
        "un secret poussé reste dans l'historique, même supprimé ensuite":
            "a pushed secret stays in the history, even if deleted afterwards",
        "La branche principale reste toujours fonctionnelle": "The main branch always stays working",
        "Les branches vivent quelques jours, pas quelques semaines":
            "Branches live for days, not weeks",
        "Je relis mon propre changement avant de le fusionner": "I review my own change before merging it",
        "Cet historique servira difficilement le jour où il faudra défaire quelque chose.":
            "This history will be of little help the day something has to be undone.",
        "Bonnes habitudes. Les branches longues sont la cause principale des conflits.":
            "Good habits. Long-lived branches are the main cause of conflicts.",
        "Historique exploitable : vous pourrez revenir en arrière proprement.":
            "Usable history: you will be able to roll back cleanly.",
        "Un commit fourre-tout ne peut pas être annulé proprement : on ne peut pas en retirer une partie.":
            "A catch-all commit cannot be undone cleanly: you cannot take part of it back out.",

        // --- cache-navigateur -----------------------------------------------------------------------
        "Ce que le cache économise": "What the cache saves",
        "Le seul levier qui améliore la performance sans rien alléger.":
            "The only lever that improves performance without slimming anything down.",
        "Poids total d'une page": "Total weight of a page",
        "Part de visites avec cache déjà rempli": "Share of visits with the cache already filled",
        "Première visite": "First visit",
        "Visite avec cache": "Visit with cache",
        "Volume moyen par visite": "Average volume per visit",
        "Un fichier fortement mis en cache ne peut plus changer en place : versionnez son nom, et le problème disparaît.":
            "A heavily cached file can no longer change in place: version its name, and the problem goes away.",

        // --- securite-applicative --------------------------------------------------------------------
        "Audit de sécurité applicative": "Application security audit",
        "Cochez ce qui est en place dans votre application.": "Tick what is in place in your application.",
        "Toutes les requêtes de base de données sont préparées": "All database queries are prepared statements",
        "aucune concaténation de valeurs saisies": "no concatenation of entered values",
        "Le contenu utilisateur est échappé à l'affichage": "User content is escaped on output",
        "Une politique de sécurité de contenu est déclarée": "A content security policy is declared",
        "Les formulaires sensibles portent un jeton anti-rejeu": "Sensitive forms carry an anti-replay token",
        "Toute autorisation est vérifiée côté serveur": "Every authorisation is checked on the server",
        "masquer un bouton ne protège rien": "hiding a button protects nothing",
        "Les dépendances sont mises à jour régulièrement": "Dependencies are updated regularly",
        "la majorité des compromissions passent par là": "most breaches come through there",
        "Les messages d'erreur en production ne révèlent rien du système":
            "Error messages in production reveal nothing about the system",
        "Plusieurs vulnérabilités classiques sont probablement exploitables.":
            "Several classic vulnerabilities are probably exploitable.",
        "Bon niveau. Les dépendances non mises à jour restent le vecteur le plus exploité.":
            "Good level. Out-of-date dependencies remain the most exploited route in.",
        "Les vulnérabilités les plus répandues sont couvertes.":
            "The most widespread vulnerabilities are covered.",
        "Toute donnée venant de l'extérieur est hostile jusqu'à preuve du contraire. C'est le principe qui règle l'essentiel.":
            "Any data coming from outside is hostile until proven otherwise. That principle settles most of it.",

        // --- tests-automatises -------------------------------------------------------------------------
        "Si elle dépasse quelques minutes, elle ne sera plus lancée à chaque modification.":
            "If it runs longer than a few minutes, it will stop being run on every change.",
        "Tests d'intégration": "Integration tests",
        "Durée d'un test de bout en bout": "Duration of one end-to-end test",
        "Durée totale de la suite": "Total duration of the suite",
        "Part des tests de bout en bout": "Share taken by end-to-end tests",
        "C'est cette poignée de tests lents qui décide si la suite tourne à chaque modification, ou une fois par semaine.":
            "It is this handful of slow tests that decides whether the suite runs on every change, or once a week.",

        // --- dette-technique --------------------------------------------------------------------------------
        "Le seul langage qui obtient du temps pour la corriger.":
            "The only language that gets you time to fix it.",
        "Heures perdues par semaine": "Hours lost per week",
        "Semaines travaillées par an": "Weeks worked per year",
        "Heures estimées pour corriger": "Estimated hours to fix",
        "Coût horaire chargé": "Loaded hourly cost",
        "Temps perdu par an": "Time lost per year",
        "Coût annuel": "Annual cost",
        "La correction est remboursée en": "The fix pays for itself in",
        "Formulé ainsi, l'arbitrage n'est plus une question de goût mais de délai de retour.":
            "Put that way, the trade-off is no longer a matter of taste but of payback period.",

        // ====================================================================
        // NÉGOCIATION & COMMUNICATION
        // ====================================================================

        // --- preparation-echange -----------------------------------------------
        "Êtes-vous prêt pour cet échange ?": "Are you ready for this conversation?",
        "Cochez ce que vous savez déjà, avant d'entrer dans la conversation.":
            "Tick what you already know, before going into the conversation.",
        "Je sais ce que je veux obtenir, en une phrase": "I know what I want to get, in one sentence",
        "Je sais à quoi je renonce si j'obtiens gain de cause": "I know what I give up if I get my way",
        "Je sais ce que l'autre cherche, ou j'ai prévu de le lui demander":
            "I know what the other side wants, or I have planned to ask them",
        "Je sais ce que je fais si nous n'arrivons à rien": "I know what I do if we get nowhere",
        "J'ai choisi le moment et le canal, plutôt que de les subir":
            "I chose the moment and the channel, rather than having them imposed",
        "Je sais ce qui, dans mon dossier, est le plus faible": "I know the weakest point in my case",
        "l'autre le trouvera de toute façon": "the other side will find it anyway",
        "Entrer sans préparation revient à improviser face à quelqu'un qui, peut-être, ne l'a pas fait.":
            "Going in unprepared means improvising against someone who possibly did prepare.",
        "Bonne base. Savoir ce qu'on fait en cas d'échec est ce qui manque le plus souvent — et ce qui change le plus.":
            "Good basis. Knowing what you do if it fails is what is most often missing — and what changes most.",
        "Préparation solide. L'essentiel d'une négociation se joue avant qu'elle ne commence.":
            "Solid preparation. Most of a negotiation is decided before it starts.",
        "La question la plus négligée n'est pas « qu'est-ce que je veux ? » mais « qu'est-ce que je fais si je ne l'obtiens pas ? ». C'est elle qui détermine la position réelle.":
            "The most neglected question is not “what do I want?” but “what do I do if I don't get it?”. That is what sets your real position.",

        // --- ecoute-active -------------------------------------------------------
        "Écoutez-vous, ou attendez-vous votre tour ?": "Are you listening, or waiting your turn?",
        "Cochez ce que vous faites réellement pendant que l'autre parle.":
            "Tick what you actually do while the other person is talking.",
        "Je ne prépare pas ma réponse pendant qu'il parle": "I do not prepare my answer while they speak",
        "Je reformule pour vérifier, avant de répondre": "I restate what I heard to check, before answering",
        "Je pose des questions ouvertes plutôt que des questions fermées":
            "I ask open questions rather than closed ones",
        "Je laisse un silence après sa réponse": "I leave a silence after their answer",
        "c'est souvent là que vient l'essentiel": "that is often where the important part comes",
        "Je demande « pourquoi est-ce important pour vous ? »": "I ask “why does that matter to you?”",
        "Je note ce qu'il dit, pas ce que je compte répondre":
            "I write down what they say, not what I plan to answer",
        "Attendre son tour n'est pas écouter. La plupart des informations utiles se perdent là.":
            "Waiting your turn is not listening. Most of the useful information is lost there.",
        "Bonne écoute. Le silence après une réponse est ce qui rapporte le plus, et ce qu'on supporte le moins.":
            "Good listening. The silence after an answer pays most, and is the hardest to bear.",
        "Vous écoutez vraiment. C'est le levier le moins coûteux et le plus rare.":
            "You are genuinely listening. It is the cheapest lever, and the rarest.",
        "Reformuler n'est pas une politesse : c'est le seul moyen de vérifier qu'on a compris, et cela révèle très souvent qu'on avait compris autre chose.":
            "Restating is not a courtesy: it is the only way of checking you understood, and it very often reveals you understood something else.",

        // --- longueur-message ------------------------------------------------------
        "Un message coûte le temps de tous ses destinataires, pas seulement celui de son auteur.":
            "A message costs the time of all its recipients, not just its author's.",
        "Temps mobilisé au total": "Total time taken up",
        "En divisant la longueur par deux": "Halving the length",
        "À garder en tête": "Worth keeping in mind",
        "Écrire court prend plus de temps à l'auteur et en fait gagner à tous les autres. C'est l'arbitrage, et il est presque toujours tranché dans le mauvais sens.":
            "Writing short takes the author longer and saves everyone else time. That is the trade-off, and it is almost always settled the wrong way.",

        // --- courriel-utile ----------------------------------------------------------
        "Ce courriel a-t-il une chance d'aboutir ?": "Does this email stand a chance?",
        "Cochez ce que contient réellement le message que vous vous apprêtez à envoyer.":
            "Tick what the message you are about to send actually contains.",
        "L'objet dit ce dont il s'agit ET ce qui est attendu":
            "The subject line says what it is about AND what is expected",
        "La demande est dans les deux premières lignes": "The request is in the first two lines",
        "Une seule demande, ou une liste numérotée s'il y en a plusieurs":
            "A single request, or a numbered list if there are several",
        "Une échéance est donnée": "A deadline is given",
        "Le destinataire principal est seul en « À », les autres en copie":
            "The main recipient is alone in “To”, the others in copy",
        "Le contexte vient après la demande, pas avant": "Context comes after the request, not before",
        "Message qui raconte avant de demander. Il sera lu en diagonale, et la demande passera inaperçue.":
            "A message that tells a story before asking. It will be skimmed, and the request will go unnoticed.",
        "Correct. La demande en tête et l'échéance écrite sont les deux qui changent le taux de réponse.":
            "Reasonable. The request up front and a written deadline are the two that change the reply rate.",
        "Message traitable. Il obtiendra une réponse parce qu'il est facile d'y répondre.":
            "A workable message. It will get an answer because it is easy to answer.",
        "Le lecteur cherche deux choses : ce qu'on lui demande et pour quand. Tout ce qui les précède retarde la réponse.":
            "The reader is looking for two things: what is being asked and by when. Everything before them delays the answer.",

        // --- solution-de-rechange --------------------------------------------------------
        "Votre MESORE — meilleure solution de rechange — est ce que vous obtenez si vous partez. Elle fixe votre point de rupture.":
            "Your BATNA — best alternative to a negotiated agreement — is what you get if you walk away. It sets your walk-away point.",
        "Offre actuellement sur la table": "Offer currently on the table",
        "Coût estimé de la poursuite": "Estimated cost of carrying on",
        "Gain par rapport à partir": "Gain compared with walking away",
        "Il faut gagner au moins": "You need to gain at least",
        "Sans solution de rechange chiffrée, on négocie à l'aveugle : impossible de savoir si une offre est bonne, seulement si elle est agréable.":
            "With no alternative worked out in figures, you negotiate blind: you cannot tell whether an offer is good, only whether it feels pleasant.",

        // --- zone-accord ----------------------------------------------------------------
        "Y a-t-il une zone d'accord ?": "Is there a zone of possible agreement?",
        "Le maximum que vous acceptez de payer, et le minimum estimé de l'autre. Entre les deux se trouve — ou non — un accord possible.":
            "The most you will pay, and your estimate of their minimum. Between the two lies — or does not — a possible agreement.",
        "Minimum estimé de l'autre": "Their estimated minimum",
        "Point médian": "Midpoint",
        "Ce qui se joue": "What is at stake",
        "Ce que cela signifie": "What that means",
        "La suite utile": "The useful next step",
        "Quand il n'y a pas de zone d'accord sur le prix, insister ne sert à rien. Ce qui débloque, c'est d'ajouter une variable : délai, volume, garantie, services.":
            "When there is no zone of agreement on price, insisting achieves nothing. What unblocks it is adding a variable: timing, volume, warranty, services.",

        // --- ancrage ----------------------------------------------------------------------
        "Quelle première offre annoncer ?": "What opening offer should you make?",
        "Le premier chiffre énoncé pèse sur tout ce qui suit — y compris quand chacun sait qu'il est négociable.":
            "The first number stated weighs on everything that follows — even when everyone knows it is negotiable.",
        "Résultat que vous visez": "Result you are aiming for",
        "Offre que vous attendez de l'autre": "Offer you expect from them",
        "Pour que le milieu tombe sur votre objectif": "For the midpoint to land on your target",
        "Écart avec votre objectif": "Gap from your target",
        "Point médian obtenu": "Midpoint obtained",
        "Le « coupons la poire en deux » paraît équitable et dépend entièrement du premier chiffre annoncé. C'est pour cela qu'il vaut mieux l'annoncer, en restant plausible.":
            "“Let's split the difference” sounds fair and depends entirely on the first number stated. That is why it is better to state it — while staying plausible.",

        // --- positions-interets ---------------------------------------------------------------
        "Position ou intérêt ?": "Position or interest?",
        "Une position est ce qu'on demande. Un intérêt est la raison pour laquelle on le demande. Cochez ce que vous connaissez.":
            "A position is what you ask for. An interest is why you ask for it. Tick what you know.",
        "Je sais ce que l'autre demande": "I know what the other side is asking for",
        "Je sais pourquoi il le demande": "I know why they are asking for it",
        "Je connais au moins deux façons de satisfaire cette raison":
            "I know at least two ways of satisfying that reason",
        "Je sais ce qui, pour lui, ne se négocie pas": "I know what, for them, is not negotiable",
        "J'ai identifié un point qui me coûte peu et lui rapporte beaucoup":
            "I have found a point that costs me little and is worth a lot to them",
        "Je sais ce que je peux échanger contre ce qui compte pour moi":
            "I know what I can trade for what matters to me",
        "Négociation sur les positions : chacun campe, et le seul résultat possible est de couper la différence.":
            "Negotiating on positions: both sides dig in, and the only possible result is splitting the difference.",
        "Bonne lecture. Le point qui coûte peu à l'un et rapporte à l'autre est ce qui débloque le plus souvent.":
            "Good reading. The point that costs one side little and is worth a lot to the other is what most often unblocks things.",
        "Vous négociez sur les intérêts. C'est là que se trouvent les accords que personne n'avait prévus.":
            "You are negotiating on interests. That is where the agreements nobody foresaw are found.",
        "Deux personnes qui veulent la même orange peuvent toutes deux être satisfaites : l'une voulait le jus, l'autre l'écorce. Encore fallait-il demander pourquoi.":
            "Two people who want the same orange can both be satisfied: one wanted the juice, the other the peel. Someone still had to ask why.",

        // --- conversation-difficile ----------------------------------------------------------------
        "Cette conversation est-elle préparée ?": "Is this conversation prepared?",
        "Un désaccord, un reproche à formuler, une nouvelle à annoncer. Cochez ce qui est prêt.":
            "A disagreement, a criticism to make, news to break. Tick what is ready.",
        "Je décris des faits observables, pas une interprétation":
            "I describe observable facts, not an interpretation",
        "« tu es arrivé après 10 h trois fois » et non « tu ne prends rien au sérieux »":
            "“you arrived after 10 three times”, not “you take nothing seriously”",
        "Je sais dire l'effet que cela produit, sans accuser":
            "I can say what effect it has, without accusing",
        "J'ai une demande précise, pas seulement un reproche":
            "I have a precise request, not just a complaint",
        "J'ai prévu du temps pour la réponse de l'autre": "I have allowed time for their answer",
        "Je le fais en tête-à-tête, et pas devant d'autres": "I do it one to one, not in front of others",
        "Je distingue ce qui est négociable de ce qui ne l'est pas":
            "I separate what is negotiable from what is not",
        "Sans faits datés ni demande précise, la conversation portera sur les intentions supposées — c'est-à-dire nulle part.":
            "With no dated facts and no precise request, the conversation will be about presumed intentions — that is, about nothing.",
        "Bonne base. S'en tenir aux faits observables est ce qui évite que la discussion parte sur l'intention.":
            "Good basis. Sticking to observable facts is what stops the discussion sliding onto intent.",
        "Conversation préparée. Elle sera désagréable et elle produira quelque chose.":
            "A prepared conversation. It will be unpleasant and it will produce something.",
        "Ce n'est pas le reproche qui bloque, c'est l'interprétation. Un fait se discute, une intention prêtée ne se discute pas : elle se nie.":
            "It is not the criticism that blocks things, it is the interpretation. A fact can be discussed; an attributed intention cannot — it can only be denied.",

        // --- biais-negociation -----------------------------------------------------------------------
        "Quels biais jouent contre vous ?": "Which biases are working against you?",
        "Cochez ce que vous reconnaissez dans votre façon de négocier.":
            "Tick what you recognise in the way you negotiate.",
        "Je me sens engagé par le temps déjà passé": "I feel committed by the time already spent",
        "coût irrécupérable : il ne devrait rien changer": "sunk cost: it should change nothing",
        "Je suppose que ce que je gagne, l'autre le perd":
            "I assume that what I gain, the other side loses",
        "vrai sur le prix seul, faux dès qu'il y a plusieurs variables":
            "true on price alone, false as soon as there are several variables",
        "Je m'accroche à mon premier chiffre par cohérence":
            "I cling to my first number out of consistency",
        "Je cherche surtout ce qui confirme ma lecture de la situation":
            "I mostly look for what confirms my reading of the situation",
        "Je surestime ce que l'autre sait de mes contraintes":
            "I overestimate what they know about my constraints",
        "Je juge l'accord à ce que j'ai obtenu, pas à mon point de rupture":
            "I judge the deal by what I got, not by my walk-away point",
        "Aucun reconnu. À vérifier après coup : ces biais se voient beaucoup mieux sur les autres.":
            "None recognised. Worth checking afterwards: these biases are far easier to see in other people.",
        "Deux repères utiles : le temps passé ne doit rien changer, et tout n'est pas à somme nulle.":
            "Two useful markers: time already spent should change nothing, and not everything is zero-sum.",
        "Plusieurs biais actifs. Le plus coûteux est de croire que ce que l'un gagne, l'autre le perd : il ferme les accords créatifs.":
            "Several biases active. The costliest is believing that one side's gain is the other's loss: it shuts down creative deals.",
        "Un accord se juge par rapport à sa solution de rechange, jamais par rapport à ce qu'on espérait au départ. C'est la seule comparaison qui ait un sens.":
            "A deal is judged against your alternative, never against what you hoped for at the start. That is the only comparison that means anything.",

        // --- manipulation -------------------------------------------------------------------------------
        "Reconnaissez-vous ces procédés ?": "Do you recognise these tactics?",
        "Cochez ceux que vous avez rencontrés dans cette négociation.":
            "Tick the ones you have met in this negotiation.",
        "Une urgence artificielle": "Artificial urgency",
        "Une concession minuscule présentée comme un effort majeur":
            "A tiny concession presented as a major effort",
        "Une demande supplémentaire une fois l'accord presque conclu":
            "An extra demand once the deal is nearly done",
        "Un « mon supérieur refuse » invérifiable": "An unverifiable “my boss says no”",
        "Un chiffre annoncé sans source, présenté comme une évidence":
            "A figure quoted with no source, presented as obvious",
        "Une mise en cause personnelle plutôt que du fond":
            "A personal attack rather than substance",
        "Rien de tout cela. La négociation porte sur le fond.":
            "None of that. The negotiation is about substance.",
        "Procédés repérés. Les nommer à voix haute, calmement, suffit le plus souvent à les faire cesser.":
            "Tactics spotted. Naming them out loud, calmly, is usually enough to stop them.",
        "Beaucoup de procédés. Votre meilleure réponse reste votre solution de rechange : c'est elle qui rend le départ crédible.":
            "A lot of tactics. Your best answer is still your alternative: it is what makes walking away credible.",
        "La réponse à un procédé n'est ni de le subir ni d'en user : c'est de le nommer. « Je note que le délai est très court — est-il négociable ? » désamorce sans affronter.":
            "The answer to a tactic is neither to suffer it nor to use one: it is to name it. “I notice the deadline is very short — is it negotiable?” defuses without confronting.",

        // --- cout-du-blocage ---------------------------------------------------------------------------------
        "Combien coûte de ne pas conclure ?": "What does not closing cost?",
        "Un désaccord qui dure a un prix, rarement calculé et souvent supérieur à l'écart qui reste à combler.":
            "A disagreement that drags on has a price, rarely calculated and often larger than the gap still to be bridged.",
        "Écart restant à combler": "Gap still to bridge",
        "Semaines de blocage prévisibles": "Predictable weeks of deadlock",
        "Heures par semaine consacrées au sujet": "Hours per week spent on the matter",
        "Temps consacré": "Time spent",
        "Coût de ce temps": "Cost of that time",
        "Comparé à l'écart restant": "Compared with the remaining gap",
        "Beaucoup de négociations continuent bien après le moment où elles coûtent plus qu'elles ne rapportent. Personne ne fait ce calcul, parce qu'il donne tort aux deux camps.":
            "Many negotiations carry on well past the point where they cost more than they bring in. Nobody does this calculation, because it makes both sides wrong.",

        // ====================================================================
        // LIBELLÉS COURTS ET UNITÉS
        //
        // Ils étaient passés au travers du contrôle : sans accent ni mot-outil,
        // l'heuristique du « français restant » ne les voyait pas, et un texte
        // qu'aucun fragment ne touche était compté comme traduit. Le critère
        // exige désormais qu'un fragment ait RÉELLEMENT transformé le texte.
        // ====================================================================
        "€": "€",
        "€/h": "€/h",
        "px": "px",
        "car.": "chars",
        "tests": "tests",
        "appels": "calls",
        "lignes": "lines",
        "familles": "groups",
        "CSS": "CSS",
        "UX ": "UX ",

        // --- Design ---------------------------------------------------------
        "Zone d'accord": "Zone of agreement",
        "Largeur": "Width",
        "nulle": "none",
        "l'accord tient, mais aucune marge de part et d'autre":
            "the deal holds, but neither side has any room",
        "Limite": "Limit",

        // --- Développement web -----------------------------------------------
        "Votre HTML a-t-il du sens ?": "Does your HTML mean anything?",
        "CSS ou JavaScript ?": "CSS or JavaScript?",
        "CSS suffit": "CSS is enough",
        "Navigateur ou serveur ?": "Browser or server?",
        "navigateur": "browser",
        "serveur": "server",
        "Taille de police": "Font size",
        "Confort de lecture": "Reading comfort",
        "Nombre d'appels d'API": "Number of API calls",
        "Dont fichiers statiques cachables": "Of which cacheable static files",
        "Combien de temps dure votre suite de tests ?": "How long does your test suite take?",
        "Tests unitaires": "Unit tests",
        "Tests de bout en bout": "End-to-end tests",
        "Mais ils occupent": "Yet they take up",
        "Chiffrez votre dette technique": "Put a figure on your technical debt",

        // --- Négociation -------------------------------------------------------
        "« l'offre expire ce soir »": "“the offer expires tonight”",
        "« si je comprends bien, … »": "“so if I understand correctly, …”",
        "Ce message sera-t-il lu ?": "Will this message be read?",
        "Longueur du message": "Message length",
        "Destinataires": "Recipients",
        "Temps de lecture": "Reading time",
        "Faut-il accepter cette offre ?": "Should you accept this offer?",
        "Valeur de votre solution de rechange": "Value of your alternative",
        "Point de rupture": "Walk-away point",
        "Votre maximum": "Your maximum",

        // ====================================================================
        // PRODUCTIVITÉ & ORGANISATION
        // ====================================================================

        // --- Unités ---------------------------------------------------------
        "min": "min",
        "msg": "msg",

        // --- rythme-journee --------------------------------------------------
        "Travaillez-vous au bon moment ?": "Are you working at the right time?",
        "Cochez ce qui décrit votre journée réelle.": "Tick what describes your actual day.",
        "Je connais mon meilleur créneau de concentration": "I know my best window for concentration",
        "observé, pas supposé": "observed, not assumed",
        "Le travail de fond y est effectivement placé": "Deep work is actually placed there",
        "Les tâches mécaniques occupent le creux d'après-midi":
            "Mechanical tasks fill the afternoon dip",
        "Je ne consacre pas ma première heure aux messages":
            "I do not give my first hour to messages",
        "Je prends des pauses qui changent de registre": "I take breaks that change register",
        "consulter son téléphone n'est pas une pause pour l'attention":
            "checking your phone is not a break for attention",
        "Je n'allonge pas la journée quand le travail déborde":
            "I do not lengthen the day when work overflows",
        "le total produit sur la semaine baisse": "the weekly output goes down",
        "Votre meilleur créneau est probablement consacré aux priorités des autres.":
            "Your best window is probably given over to other people's priorities.",
        "Bonne base. Protéger la première heure est le changement le plus rentable.":
            "Good basis. Protecting the first hour is the most profitable change.",
        "Vos heures les plus productives servent ce qui compte le plus.":
            "Your most productive hours serve what matters most.",
        "Deux heures au bon moment valent quatre heures au mauvais. C'est l'optimisation qui ne coûte rien.":
            "Two hours at the right time are worth four at the wrong one. That is the optimisation that costs nothing.",

        // --- habitude-durable ---------------------------------------------------
        "Votre habitude peut-elle tenir ?": "Can your habit last?",
        "Cochez ce qui est vrai de l'habitude que vous voulez installer.":
            "Tick what is true of the habit you want to establish.",
        "Elle est rattachée à une action déjà automatique": "It is attached to an already automatic action",
        "le déclencheur existe, rien à retenir": "the trigger exists, nothing to remember",
        "Sa version minimale est ridiculement petite": "Its minimal version is ridiculously small",
        "« écrire une phrase », « ouvrir le fichier »": "“write one sentence”, “open the file”",
        "J'ai retiré de la friction devant elle": "I have removed friction in front of it",
        "préparé la veille, outil déjà ouvert": "prepared the night before, tool already open",
        "J'ai ajouté de la friction devant ce qui la concurrence":
            "I have added friction in front of what competes with it",
        "J'ai une règle de reprise après une rupture": "I have a rule for restarting after a break",
        "ne jamais manquer deux fois de suite": "never miss twice in a row",
        "Je n'installe qu'une seule habitude à la fois": "I establish only one habit at a time",
        "Cette habitude repose encore sur la volonté, qui fluctue par nature.":
            "This habit still rests on willpower, which fluctuates by nature.",
        "Bonne conception. La règle de reprise est ce qui décide au deuxième mois.":
            "Well designed. The restart rule is what decides in the second month.",
        "Cette habitude ne dépend pas de votre motivation. Elle a une vraie chance.":
            "This habit does not depend on your motivation. It has a real chance.",
        "Ajouter vingt secondes d'effort réduit fortement la fréquence d'un geste. En retirer vingt l'augmente d'autant.":
            "Adding twenty seconds of effort sharply reduces how often something is done. Removing twenty raises it as much.",

        // --- cout-reunion ---------------------------------------------------------
        "Combien coûte cette réunion ?": "What does this meeting cost?",
        "Une réunion coûte sa durée multipliée par le nombre de participants.":
            "A meeting costs its length multiplied by the number of participants.",
        "Durée": "Length",
        "Participants": "Participants",
        "Coût horaire chargé moyen": "Average loaded hourly cost",
        "Occurrences par an": "Occurrences per year",
        "Heures de travail par séance": "Working hours per session",
        "Coût par séance": "Cost per session",
        "Une heure à huit personnes, c'est une journée de travail. La question « faut-il convier tout le monde ? » se pose alors autrement.":
            "One hour with eight people is a working day. The question “does everyone need to be there?” then looks different.",

        // --- revue-systeme ----------------------------------------------------------
        "Votre système résiste-t-il à la dérive ?": "Does your system resist drift?",
        "Cochez ce qui a effectivement lieu, à intervalle régulier.":
            "Tick what actually happens, at regular intervals.",
        "Une revue hebdomadaire de trente minutes, à heure fixe dans l'agenda":
            "A thirty-minute weekly review, at a fixed time in the calendar",
        "Un point mensuel sur ce qui n'a pas avancé, et pourquoi":
            "A monthly check on what has not moved, and why",
        "Un recul trimestriel sur ce qui compte vraiment":
            "A quarterly step back on what really matters",
        "Je pose devant chaque projet : « si cela n'existait pas, est-ce que je le commencerais ? »":
            "For each project I ask: “if this did not exist, would I start it?”",
        "J'ai arrêté au moins un engagement au cours des six derniers mois":
            "I have stopped at least one commitment in the last six months",
        "Rien de nouveau n'entre sans que quelque chose sorte":
            "Nothing new comes in without something going out",
        "Sans revue, ce système dérivera jusqu'à être abandonné en bloc.":
            "With no review, this system will drift until it is abandoned wholesale.",
        "Bonne discipline. Arrêter des choses reste la partie la plus difficile.":
            "Good discipline. Stopping things remains the hardest part.",
        "Votre système se corrige tout seul. C'est ce qui le fera durer.":
            "Your system corrects itself. That is what will make it last.",
        "Quand un système se dérègle, changer d'outil reporte le problème d'un trimestre. Ce qui manquait, c'était la revue.":
            "When a system goes off the rails, changing tool postpones the problem by a quarter. What was missing was the review.",

        // --- pomodoro --------------------------------------------------------------------
        "Que produit une journée en Pomodoro ?": "What does a Pomodoro day produce?",
        "Le total surprend : le temps réellement concentré est bien inférieur aux heures passées.":
            "The total is surprising: genuinely focused time is far below the hours spent.",
        "Durée d'une session": "Length of a session",
        "Pause entre deux sessions": "Break between two sessions",
        "Heures consacrées au travail de fond": "Hours given to deep work",
        "Sessions dans la plage": "Sessions in the window",
        "Temps réellement concentré": "Genuinely focused time",
        "Part de la plage": "Share of the window",
        "Quatre heures de présence donnent environ trois heures de concentration réelle. C'est déjà beaucoup.":
            "Four hours of presence give about three hours of real concentration. That is already a lot.",

        // --- systeme-gtd -----------------------------------------------------------------
        "Votre système tient-il debout ?": "Does your system stand up?",
        "Cochez ce qui est vrai aujourd'hui, pas ce que vous aviez prévu.":
            "Tick what is true today, not what you had planned.",
        "Tout ce que j'ai à faire est noté quelque part, hors de ma tête":
            "Everything I have to do is written down somewhere, outside my head",
        "Il existe un seul endroit pour capturer, pas cinq": "There is one place to capture, not five",
        "Chaque tâche commence par un verbe d'action": "Every task starts with an action verb",
        "« appeler le comptable » et non « comptable »": "“call the accountant”, not “accountant”",
        "Les tâches de plus d'une étape sont identifiées comme projets":
            "Tasks with more than one step are identified as projects",
        "Je vide mes boîtes de capture au moins une fois par semaine":
            "I empty my inboxes at least once a week",
        "Je fais confiance à mon système : je n'ai pas de liste parallèle mentale":
            "I trust my system: I keep no parallel list in my head",
        "Votre mémoire porte encore une partie du système, et elle le porte mal.":
            "Your memory is still carrying part of the system, and carrying it badly.",
        "Bonne base. La revue hebdomadaire est ce qui manque le plus souvent.":
            "Good basis. The weekly review is what is most often missing.",
        "Système fiable : votre tête n'a plus à servir de mémoire.":
            "A reliable system: your head no longer has to serve as memory.",
        "Un système auquel on ne fait pas confiance est doublé d'une liste mentale — et c'est elle qui fatigue.":
            "A system you do not trust is shadowed by a mental list — and it is the list that tires you.",

        // --- matrice-eisenhower -------------------------------------------------------------
        "Votre matrice sert-elle à quelque chose ?": "Is your matrix doing anything?",
        "Cochez ce qui est vrai de votre usage réel, pas de vos intentions.":
            "Tick what is true of how you actually use it, not of your intentions.",
        "J'ai classé les tâches de ma semaine dans les quatre cases":
            "I have sorted this week's tasks into the four boxes",
        "Le quadrant 4 n'est pas vide": "Quadrant 4 is not empty",
        "s'il l'est, c'est que rien n'a été renoncé": "if it is, nothing has been given up",
        "Un créneau récurrent est réservé au quadrant 2 dans mon agenda":
            "A recurring slot is reserved for quadrant 2 in my calendar",
        "important mais non urgent": "important but not urgent",
        "Devant une tâche urgente, je me demande « urgent pour qui ? »":
            "Faced with an urgent task, I ask myself “urgent for whom?”",
        "Les tâches du quadrant 3 sont déléguées ou expédiées, pas soignées":
            "Quadrant 3 tasks are delegated or dispatched, not polished",
        "Je refais l'exercice au moins une fois par mois": "I redo the exercise at least once a month",
        "L'exercice a été fait, mais rien n'a changé dans l'agenda : il n'a rien arbitré.":
            "The exercise was done, but nothing changed in the calendar: it settled nothing.",
        "Bon usage. Le créneau réservé au quadrant 2 est ce qui manque le plus souvent.":
            "Good use. The slot reserved for quadrant 2 is what is most often missing.",
        "La matrice arbitre réellement. C'est tout ce qu'on lui demande.":
            "The matrix genuinely settles things. That is all it is asked to do.",
        "L'urgent se signale de lui-même. L'important reste silencieux : il faut lui réserver du temps, ou il n'arrivera jamais.":
            "The urgent announces itself. The important stays silent: you have to reserve time for it, or it never happens.",

        // --- choisir-outil ----------------------------------------------------------------------
        "Cet outil vous convient-il ?": "Is this tool right for you?",
        "Cochez ce qui est vrai de l'outil que vous utilisez ou envisagez.":
            "Tick what is true of the tool you use or are considering.",
        "Capturer une tâche prend moins de cinq secondes": "Capturing a task takes less than five seconds",
        "au-delà, on ne capture plus": "beyond that, people stop capturing",
        "Il est accessible partout où les idées surviennent":
            "It is reachable everywhere ideas turn up",
        "Je n'ai pas passé plus d'une heure à le configurer":
            "I have not spent more than an hour configuring it",
        "Je l'utilise encore trois mois après l'avoir adopté":
            "I still use it three months after adopting it",
        "Il ne me demande pas de renseigner des champs dont je ne me sers pas":
            "It does not ask me to fill in fields I never use",
        "Je peux en sortir mes données si je change d'avis":
            "I can get my data out if I change my mind",
        "Cet outil consomme probablement plus d'énergie qu'il n'en fait gagner.":
            "This tool probably consumes more energy than it saves.",
        "Correct. La vraie question reste : l'utiliserez-vous dans trois mois ?":
            "Reasonable. The real question remains: will you still use it in three months?",
        "Outil adapté : il sert le système au lieu de le remplacer.":
            "A fitting tool: it serves the system instead of replacing it.",
        "Le meilleur outil est celui qu'on utilise encore dans six mois. Tous les autres critères passent après.":
            "The best tool is the one you still use in six months. Every other criterion comes after.",

        // --- cout-interruptions --------------------------------------------------------------------
        "Ce que coûtent vos interruptions": "What your interruptions cost",
        "Le temps perdu n'est pas la durée de l'interruption, c'est le temps de reprise.":
            "The time lost is not the length of the interruption, it is the time to get back in.",
        "Interruptions par jour": "Interruptions per day",
        "Durée moyenne d'une interruption": "Average length of an interruption",
        "Temps de reprise après coupure": "Time to get back in after a break",
        "Durée de la journée de travail": "Length of the working day",
        "Temps des interruptions": "Time in interruptions",
        "Temps de reprise": "Time getting back in",
        "Total perdu": "Total lost",
        "Une coupure de deux minutes en coûte vingt. C'est pourquoi le total surprend toujours.":
            "A two-minute interruption costs twenty. That is why the total always comes as a surprise.",

        // --- temps-disponible ------------------------------------------------------------------------
        "Combien de temps vous reste-t-il vraiment ?": "How much time do you really have left?",
        "Planifier plus que le disponible garantit d'échouer — par arithmétique, pas par manque de discipline.":
            "Planning more than you have guarantees failure — by arithmetic, not for lack of discipline.",
        "Durée de la journée": "Length of the day",
        "Réunions": "Meetings",
        "Traitement des messages": "Handling messages",
        "Imprévus et transitions": "Unplanned events and transitions",
        "Temps disponible pour le travail de fond": "Time available for deep work",
        "Part de la journée": "Share of the day",
        "À planifier raisonnablement (70 %)": "Reasonable to plan (70%)",
        "Une planification à 70 % tient. Une planification à 100 % casse à la première urgence.":
            "Planning to 70% holds. Planning to 100% breaks at the first emergency.",

        // --- traitement-par-lots -----------------------------------------------------------------------
        "Au fil de l'eau, ou par lots ?": "As they come, or in batches?",
        "Le travail est le même. Ce sont les transitions qui coûtent.":
            "The work is the same. It is the transitions that cost.",
        "Messages par jour": "Messages per day",
        "Temps de traitement par message": "Handling time per message",
        "Reprise après chaque interruption": "Getting back in after each interruption",
        "Nombre de passages par jour si traité par lots": "Number of passes per day if batched",
        "Au fil de l'eau": "As they come",
        "Économie": "Saving",
        "Ce n'est pas le nombre de messages qui coûte cher, c'est le nombre de fois qu'on les regarde.":
            "It is not the number of messages that costs, it is the number of times you look at them.",

        // --- dire-non ----------------------------------------------------------------------------------
        "Faut-il dire oui ?": "Should you say yes?",
        "Cochez ce que vous avez vérifié avant d'accepter cette demande.":
            "Tick what you checked before accepting this request.",
        "Je sais précisément ce que je ne ferai pas si j'accepte":
            "I know precisely what I will not do if I accept",
        "Cette chose abandonnée est moins importante que la demande":
            "The thing given up matters less than the request",
        "J'ai estimé la durée réelle, pas la durée annoncée":
            "I have estimated the real duration, not the stated one",
        "J'ai vérifié qu'elle rentre dans mon temps disponible, pas dans ma journée théorique":
            "I have checked it fits my available time, not my theoretical day",
        "Si je dois refuser, j'ai une formulation qui rend le coût visible":
            "If I have to refuse, I have wording that makes the cost visible",
        "report daté, arbitrage explicite, version réduite":
            "a dated postponement, an explicit trade-off, a reduced version",
        "La personne qui demande sait ce que cela décale":
            "The person asking knows what it pushes back",
        "Accepter ici, c'est refuser autre chose sans l'avoir décidé.":
            "Accepting here means refusing something else without having decided to.",
        "Il manque l'essentiel : nommer ce qui sera abandonné.":
            "The essential is missing: naming what will be given up.",
        "Décision instruite : c'est un vrai oui, ou un refus argumenté.":
            "An informed decision: a real yes, or a reasoned no.",
        "Personne ne vient réclamer le travail qui n'a pas été fait. C'est ce qui rend ce coût invisible.":
            "Nobody comes to claim the work that was not done. That is what makes this cost invisible.",

        // ====================================================================
        // DATA & ANALYTICS
        // ====================================================================

        // --- Unités ---------------------------------------------------------
        "obs.": "obs.",
        "vis./j": "vis./day",
        "val.": "val.",
        "critères": "criteria",
        "valeurs": "values",

        // --- marge-erreur ------------------------------------------------------
        "Calculez la marge d'erreur": "Work out the margin of error",
        "Elle dépend de la taille de l'échantillon, presque jamais de celle de la population.":
            "It depends on the size of the sample, almost never on that of the population.",
        "Taille de l'échantillon": "Sample size",
        "Proportion mesurée": "Proportion measured",
        "Marge d'erreur (95 %)": "Margin of error (95%)",
        "La valeur réelle se situe entre": "The real value lies between",
        "Pour diviser cette marge par deux, il faudrait": "To halve that margin you would need",
        "Deux chiffres dont les intervalles se chevauchent ne peuvent pas être déclarés différents.":
            "Two figures whose intervals overlap cannot be declared different.",

        // --- test-ab -------------------------------------------------------------
        "Dimensionnez votre test A/B": "Size your A/B test",
        "À décider avant de lancer. Après, il est trop tard pour savoir si le test pouvait conclure.":
            "To be decided before launching. Afterwards it is too late to know whether the test could conclude.",
        "Taux de conversion actuel": "Current conversion rate",
        "Amélioration relative visée": "Relative improvement targeted",
        "Visiteurs par jour, tous groupes confondus": "Visitors per day, all groups combined",
        "Visiteurs nécessaires par groupe": "Visitors needed per group",
        "Nouveau taux visé": "New rate targeted",
        "Durée du test à ce trafic": "Test duration at this traffic",
        "Détecter un effet deux fois plus petit demande quatre fois plus de trafic. C'est ce qui rend les petits gains si coûteux à prouver.":
            "Detecting an effect half the size takes four times the traffic. That is what makes small gains so expensive to prove.",

        // --- pieges-interpretation --------------------------------------------------
        "Identifiez le piège": "Spot the trap",
        "Cochez les situations où une conclusion serait probablement fausse.":
            "Tick the situations where a conclusion would probably be wrong.",
        "Le résultat global contredit ce qu'on observe dans chaque sous-groupe":
            "The overall result contradicts what is seen in each subgroup",
        "paradoxe de Simpson : vérifiez la répartition": "Simpson's paradox: check the split",
        "On analyse les clients actuels pour comprendre pourquoi les gens restent":
            "You analyse current customers to understand why people stay",
        "biais du survivant : les partis ont la réponse":
            "survivorship bias: the ones who left have the answer",
        "Une action a été prise après un mois exceptionnellement mauvais, et le mois suivant est meilleur":
            "Action was taken after an exceptionally bad month, and the next month is better",
        "régression vers la moyenne : cela arrive sans intervention":
            "regression to the mean: it happens without intervention",
        "Les groupes comparés ont des compositions très différentes":
            "The groups compared have very different compositions",
        "L'écart observé est inférieur à la marge d'erreur":
            "The observed gap is smaller than the margin of error",
        "On a testé cinquante hypothèses et retenu celle qui ressortait":
            "Fifty hypotheses were tested and the one that stood out was kept",
        "sur cinquante, certaines ressortent par hasard": "out of fifty, some stand out by chance",
        "Ces six situations conduisent toutes à des conclusions fausses à partir de données exactes.":
            "All six of these situations lead to false conclusions from accurate data.",
        "Bonne vigilance. Les six sont en réalité des pièges classiques.":
            "Good vigilance. All six are in fact classic traps.",
        "Les six situations sont effectivement piégeuses. Vous les reconnaissez toutes.":
            "All six situations are indeed traps. You recognise them all.",
        "Aucun de ces pièges ne suppose une erreur de calcul. Les données sont justes ; c'est la lecture qui trompe.":
            "None of these traps involves a calculation error. The data is correct; it is the reading that deceives.",

        // --- chaine-de-donnees ---------------------------------------------------------
        "Auditez votre chaîne de données": "Audit your data pipeline",
        "Cochez ce qui est en place aujourd'hui.": "Tick what is in place today.",
        "La date de dernière mise à jour est affichée à côté des chiffres":
            "The last-updated date is shown next to the figures",
        "la protection la moins coûteuse contre la panne silencieuse":
            "the cheapest protection against a silent failure",
        "Une alerte se déclenche si le volume reçu s'écarte de l'habitude":
            "An alert fires if the volume received departs from the usual",
        "Un traitement en échec produit une alerte, pas un silence":
            "A failed job produces an alert, not silence",
        "Les définitions des indicateurs sont écrites et partagées":
            "The definitions of the metrics are written down and shared",
        "Deux tableaux de bord différents donnent le même chiffre pour la même notion":
            "Two different dashboards give the same figure for the same idea",
        "Je peux remonter d'un chiffre affiché jusqu'à sa source":
            "I can trace a displayed figure back to its source",
        "Un incident en amont produirait aujourd'hui un tableau de bord faux et crédible.":
            "An upstream incident would today produce a dashboard that is wrong and believable.",
        "Correct. L'alerte sur le volume est le contrôle au meilleur rapport effort-utilité.":
            "Reasonable. The volume alert is the check with the best effort-to-usefulness ratio.",
        "Chaîne surveillée : une anomalie sera vue avant qu'une décision soit prise dessus.":
            "A monitored pipeline: an anomaly will be seen before a decision is taken on it.",
        "Une donnée figée depuis trois jours est plus dangereuse qu'une donnée absente : personne ne remarque qu'elle ne bouge plus.":
            "Data frozen for three days is more dangerous than missing data: nobody notices it has stopped moving.",

        // --- utilite-kpi ------------------------------------------------------------------
        "Votre indicateur est-il utile ?": "Is your metric useful?",
        "Prenez un indicateur que vous suivez, et cochez ce qui est vrai.":
            "Take a metric you track, and tick what is true.",
        "Je sais quoi faire différemment s'il double demain":
            "I know what I would do differently if it doubled tomorrow",
        "le test décisif : sinon, il occupe de la place pour rien":
            "the decisive test: otherwise it takes up space for nothing",
        "Il a un point de comparaison : période précédente, objectif ou groupe témoin":
            "It has a point of comparison: previous period, target or control group",
        "Sa définition est écrite et n'a pas changé depuis six mois":
            "Its definition is written down and has not changed in six months",
        "Sa fréquence de suivi correspond à sa vitesse d'évolution":
            "Its tracking frequency matches how fast it moves",
        "Il est accompagné de son effectif, pas seulement d'un pourcentage":
            "It comes with its count, not just a percentage",
        "Quelqu'un est nommément responsable de le regarder":
            "Someone is named as responsible for looking at it",
        "Cet indicateur donne surtout l'illusion du pilotage.":
            "This metric mostly gives the illusion of steering.",
        "Bonne base. La définition écrite est le point qui manque le plus souvent.":
            "Good basis. The written definition is what is most often missing.",
        "Indicateur solide : il peut réellement déclencher une décision.":
            "A solid metric: it can genuinely trigger a decision.",
        "Si personne ne change rien quand un chiffre bouge, ce chiffre n'est pas un indicateur : c'est une décoration.":
            "If nobody changes anything when a figure moves, that figure is not a metric: it is decoration.",

        // --- qualite-collecte --------------------------------------------------------------
        "Vos données disent-elles ce que vous croyez ?": "Does your data say what you think it does?",
        "Cochez ce qui est vrai de la façon dont ces données ont été recueillies.":
            "Tick what is true of the way this data was collected.",
        "Je sais qui a été mesuré, et qui ne l'a pas été":
            "I know who was measured, and who was not",
        "les absents faussent plus que les présents": "those absent distort more than those present",
        "La collecte est automatique, ou le questionnaire est identique pour tous":
            "Collection is automatic, or the questionnaire is identical for everyone",
        "Les personnes mesurées ne savaient pas qu'on cherchait ce résultat":
            "The people measured did not know what result was being looked for",
        "sinon leur comportement change": "otherwise their behaviour changes",
        "La période couverte est représentative": "The period covered is representative",
        "pas seulement les soldes, ou un mois avec deux jours fériés":
            "not just the sales period, or a month with two public holidays",
        "Je connais le taux de réponse ou de couverture": "I know the response or coverage rate",
        "Les définitions n'ont pas changé pendant la période":
            "The definitions did not change during the period",
        "Les données décrivent peut-être une population différente de celle visée.":
            "The data may describe a population different from the one intended.",
        "Acceptable. Notez les réserves à côté du résultat plutôt que de les oublier.":
            "Acceptable. Note the caveats next to the result rather than forgetting them.",
        "Collecte saine : les chiffres portent bien sur ce que vous croyez.":
            "Sound collection: the figures really are about what you think.",
        "Aucun traitement statistique ne rattrape une collecte biaisée. Il la rend seulement plus présentable.":
            "No statistical treatment rescues biased collection. It only makes it more presentable.",

        // --- choisir-graphique ---------------------------------------------------------------
        "Le bon graphique pour la bonne question": "The right chart for the right question",
        "Cochez les associations exactes. Quatre le sont.": "Tick the correct pairings. Four of them are.",
        "Comparer des catégories → barres": "Comparing categories → bars",
        "exact": "correct",
        "Suivre une évolution dans le temps → courbe": "Following a change over time → line",
        "Montrer une répartition en parts d'un tout → camembert, si peu de parts":
            "Showing shares of a whole → pie, if there are few shares",
        "exact, au-delà de cinq parts il devient illisible":
            "correct; beyond five shares it becomes unreadable",
        "Comparer des catégories → camembert": "Comparing categories → pie",
        "faux : l'œil compare mal des angles": "wrong: the eye compares angles badly",
        "Montrer une relation entre deux variables → nuage de points":
            "Showing a relationship between two variables → scatter plot",
        "Faire paraître une hausse plus forte → tronquer l'axe vertical":
            "Making a rise look bigger → truncating the vertical axis",
        "faux : c'est la manipulation la plus répandue":
            "wrong: it is the most widespread manipulation",
        "Quatre de ces six associations sont exactes.": "Four of these six pairings are correct.",
        "Quatre associations sont exactes. Vérifiez avec les indications que ce sont les vôtres.":
            "Four pairings are correct. Check against the hints that they are the ones you picked.",
        "Plus de quatre : deux de ces propositions sont fausses.":
            "More than four: two of these statements are wrong.",
        "Un axe vertical qui ne part pas de zéro n'est pas toujours malhonnête — mais il doit toujours être signalé.":
            "A vertical axis that does not start at zero is not always dishonest — but it must always be flagged.",

        // --- moyenne-mediane -------------------------------------------------------------------
        "Voyez une valeur extrême déformer la moyenne": "Watch one extreme value distort the mean",
        "C'est la raison pour laquelle la médiane existe.": "This is why the median exists.",
        "Nombre de valeurs ordinaires": "Number of ordinary values",
        "Valeur ordinaire": "Ordinary value",
        "Valeur extrême ajoutée": "Extreme value added",
        "Moyenne sans la valeur extrême": "Mean without the extreme value",
        "Moyenne avec la valeur extrême": "Mean with the extreme value",
        "Médiane (inchangée)": "Median (unchanged)",
        "La médiane ne bouge pas d'un centime. C'est pourquoi on la préfère dès qu'il existe des valeurs extrêmes — salaires, paniers, temps de réponse.":
            "The median does not move a penny. That is why it is preferred as soon as extreme values exist — salaries, basket sizes, response times.",

        // --- nettoyage-donnees -----------------------------------------------------------------
        "Combien de lignes restera-t-il ?": "How many rows will be left?",
        "Le chiffre à retenir n'est pas la taille du fichier, c'est la taille de ce qui est exploitable.":
            "The figure to remember is not the size of the file, it is the size of what is usable.",
        "Lignes dans le fichier": "Rows in the file",
        "Part de doublons": "Share of duplicates",
        "Part des lignes restantes avec une valeur manquante essentielle":
            "Share of remaining rows with an essential value missing",
        "Après suppression des doublons": "After removing duplicates",
        "Lignes réellement exploitables": "Genuinely usable rows",
        "Part du fichier de départ": "Share of the original file",
        "Le problème n'est jamais d'avoir perdu des lignes. C'est de présenter un résultat en laissant croire qu'il porte sur le fichier entier.":
            "The problem is never having lost rows. It is presenting a result while implying it covers the whole file.",

        // --- taille-segments ---------------------------------------------------------------------
        "Vos segments sont-ils assez fournis ?": "Are your segments big enough?",
        "Découper indéfiniment finit par produire du bruit qu'on prend pour du signal.":
            "Slicing indefinitely eventually produces noise mistaken for signal.",
        "Population totale": "Total population",
        "Nombre de critères croisés": "Number of criteria crossed",
        "Valeurs possibles par critère": "Possible values per criterion",
        "Segments produits": "Segments produced",
        "Observations par segment en moyenne": "Observations per segment on average",
        "Une seule observation fait bouger le taux de": "One observation moves the rate by",
        "Quand une observation déplace le pourcentage de plusieurs points, le segment ne mesure plus rien d'autre que lui-même.":
            "When one observation shifts the percentage by several points, the segment measures nothing but itself.",

        // --- correlation-causalite ------------------------------------------------------------------
        "Avant de conclure « A cause B »": "Before concluding “A causes B”",
        "Passez votre corrélation au crible : cochez ce que vous avez réellement vérifié.":
            "Put your correlation through the sieve: tick what you have actually checked.",
        "J'ai envisagé que B cause A": "I have considered that B causes A",
        "le sens inverse est souvent aussi plausible": "the reverse direction is often just as plausible",
        "J'ai cherché une troisième variable qui causerait les deux":
            "I have looked for a third variable causing both",
        "le cas le plus fréquent, et de loin": "by far the most frequent case",
        "J'ai vérifié que A précède bien B dans le temps":
            "I have checked that A does precede B in time",
        "L'effet persiste quand je segmente la population":
            "The effect persists when I segment the population",
        "Je n'ai pas comparé des dizaines d'indicateurs pour trouver celui-ci":
            "I did not compare dozens of metrics to find this one",
        "sur cent comparaisons, certaines coïncident par hasard":
            "out of a hundred comparisons, some coincide by chance",
        "Une expérimentation a été menée, ou est prévue":
            "An experiment has been run, or is planned",
        "la seule méthode qui établisse vraiment la causalité":
            "the only method that genuinely establishes causation",
        "À ce stade, vous avez une corrélation et une histoire plausible. Pas une cause.":
            "At this point you have a correlation and a plausible story. Not a cause.",
        "Il manque des vérifications. La variable confondante est celle qu'on oublie le plus.":
            "Checks are missing. The confounding variable is the one most often forgotten.",
        "Hypothèse sérieusement instruite. Reste que seule l'expérimentation tranche.":
            "A seriously examined hypothesis. Still, only an experiment settles it.",
        "Le danger n'est pas la corrélation absurde, qui se repère. C'est celle à laquelle on peut donner une explication crédible.":
            "The danger is not the absurd correlation, which is easy to spot. It is the one you can give a credible explanation for.",

        // --- tableau-de-bord ---------------------------------------------------------------------------
        "Passez votre tableau de bord au crible": "Put your dashboard through the sieve",
        "Cochez ce qui est vrai du tableau de bord que vous avez sous les yeux.":
            "Tick what is true of the dashboard in front of you.",
        "Chaque indicateur passe le test « si ce nombre doublait, que ferais-je ? »":
            "Every metric passes the test “if this number doubled, what would I do?”",
        "Aucun chiffre n'est affiché sans point de comparaison":
            "No figure is displayed without a point of comparison",
        "La date de dernière mise à jour est visible": "The last-updated date is visible",
        "Les effectifs accompagnent les pourcentages": "Counts accompany the percentages",
        "Sur les mesures de qualité, une valeur extrême est affichée en plus de la moyenne":
            "For quality measures, an extreme value is shown as well as the mean",
        "le neuvième décile en dit plus que la moyenne": "the ninth decile says more than the mean",
        "Il tient sur un écran sans défilement": "It fits on one screen without scrolling",
        "Ce tableau sera consulté deux semaines, puis oublié.":
            "This dashboard will be consulted for two weeks, then forgotten.",
        "Bon niveau. La date de mise à jour est le manque le plus dangereux.":
            "Good level. The update date is the most dangerous omission.",
        "Tableau de bord exploitable : il sert à décider, pas à rassurer.":
            "A usable dashboard: it serves decisions, not reassurance.",
        "Un tableau de bord se juge au nombre de décisions qu'il a déclenchées, pas au nombre de graphiques.":
            "A dashboard is judged by the number of decisions it has triggered, not the number of charts.",
    },
};
