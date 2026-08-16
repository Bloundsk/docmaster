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
    },
};
