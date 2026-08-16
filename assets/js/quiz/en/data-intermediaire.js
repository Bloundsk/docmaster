// ===================================
// QUESTION BANK — DATA & ANALYTICS, INTERMEDIATE LEVEL (EN)
// ===================================
// 6 questions per sub-section: 3 shown, the other 3 take over after two weeks.
// The summary questions are distinct from the sub-section ones — none is reused.
//
// Les clefs de « sections » sont les ancres ANGLAISES de la page traduite :
// quiz.js apparie la banque au « id » du titre h3.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "cleaning-data": [
            // Series 1
            {
                q: "What share of the time spent on an analysis does cleaning commonly take?",
                options: [
                    "A negligible share",
                    "Most of it",
                    "About 10%"
                ],
                a: 1,
                explication: "It is not a chore to get out of the way: it is where it is decided whether the result will mean anything."
            },
            {
                q: "A 50,000-row file with 8% duplicates then 12% missing values: how many rows are left?",
                options: [
                    "40,480 rows",
                    "44,000 rows",
                    "46,000 rows"
                ],
                a: 0,
                explication: "That is 81% of the original file. The problem would be presenting the result as covering 50,000."
            },
            {
                q: "What should you do with a €4 million order in a file of €80 orders?",
                options: [
                    "Delete it, it has to be an error",
                    "Check: it is either a data-entry error or the biggest customer",
                    "Replace it with the mean"
                ],
                a: 1,
                explication: "The distinction is not technical. It takes knowing the business."
            },
            // Series 2
            {
                q: "Why is deleting incomplete rows risky?",
                options: [
                    "It shrinks the file too much",
                    "Missing values are rarely spread at random",
                    "It distorts the mean"
                ],
                a: 1,
                explication: "An optional income field is filled in mostly by those the question does not bother."
            },
            {
                q: "What are the three possible courses of action for a missing value?",
                options: [
                    "Delete the row, estimate the value, or treat the absence as information",
                    "Delete, ignore, or start the collection again",
                    "Put zero, put the mean, or put the median"
                ],
                a: 0,
                explication: "The choice changes the result and should be written down somewhere."
            },
            {
                q: "Why document your cleaning decisions?",
                options: [
                    "The GDPR requires it",
                    "Without them the analysis becomes unverifiable, even by its author",
                    "To speed up later processing"
                ],
                a: 1,
                explication: "Three months later nobody remembers what was removed or why."
            }
        ],

        // ---------------------------------------------------------------
        "segmenting": [
            // Series 1
            {
                q: "What does an overall average do to a mixed population?",
                options: [
                    "It gives a good overview",
                    "It blends different behaviours and describes nobody",
                    "It systematically overestimates"
                ],
                a: 1,
                explication: "The figure is not wrong, it is useless."
            },
            {
                q: "An overall rate of 3% hiding 5.2% on desktop and 1.4% on mobile: what should you conclude?",
                options: [
                    "The overall rate is wrong",
                    "It masks a mobile problem, while mobile makes up two thirds of the traffic",
                    "The overall rate should no longer be tracked"
                ],
                a: 1,
                explication: "Segmenting means looking for the places where two groups behave differently."
            },
            {
                q: "What should always be shown next to a percentage?",
                options: [
                    "The sample size",
                    "The date it was calculated",
                    "The data source"
                ],
                a: 0,
                explication: "“40%” out of five people is two people."
            },
            // Series 2
            {
                q: "What is the limit of splitting into segments?",
                options: [
                    "The tools cannot keep up",
                    "Groups that are too small produce noise that gets taken for a signal",
                    "It becomes unreadable beyond three segments"
                ],
                a: 1,
                explication: "In a group of fifteen people, one special case moves the percentage by seven points."
            },
            {
                q: "“Sales rose by 12% after the redesign.” What is missing?",
                options: [
                    "The amount in euros",
                    "A point of comparison: an equivalent period or a control group",
                    "The name of the person responsible"
                ],
                a: 1,
                explication: "Without a reference, a change cannot be told apart from ordinary fluctuation."
            },
            {
                q: "What is the goal of segmentation?",
                options: [
                    "Producing more detailed tables",
                    "Finding where behaviour changes, because that is where the decisions hide",
                    "Splitting the data evenly"
                ],
                a: 1,
                explication: "A split that reveals no difference brings nothing."
            }
        ],

        // ---------------------------------------------------------------
        "correlation-causation": [
            // Series 1
            {
                q: "How many explanations can a correlation have?",
                options: [
                    "Only one: A causes B",
                    "Four: A causes B, B causes A, a third variable causes both, or chance",
                    "Two: a direct link or chance"
                ],
                a: 1,
                explication: "The third is the most frequent, and the one considered least."
            },
            {
                q: "What is a confounding variable?",
                options: [
                    "A badly measured variable",
                    "A third variable that causes both A and B",
                    "A variable that varies for no reason"
                ],
                a: 1,
                explication: "Loyalty causes both the app install and the high basket."
            },
            {
                q: "App users have a basket twice as large. What can you conclude?",
                options: [
                    "The app should be pushed to raise basket sizes",
                    "Nothing yet: the already loyal customers may be the ones who install it",
                    "The app improves the buying experience"
                ],
                a: 1,
                explication: "Pushing the app to occasional customers will not reproduce the effect, but it will spend the budget."
            },
            // Series 2
            {
                q: "Which method genuinely establishes causation?",
                options: [
                    "A correlation above 0.9",
                    "Experimentation, with random assignment",
                    "A convincing business argument"
                ],
                a: 1,
                explication: "Everything else stays a hypothesis, however plausible."
            },
            {
                q: "Which kind of correlation is the most dangerous?",
                options: [
                    "The absurd one",
                    "The one you can give a credible explanation for",
                    "The weak one"
                ],
                a: 1,
                explication: "A credible explanation is not proof. It only makes it harder to consider the other possibilities."
            },
            {
                q: "Why does chance sometimes produce correlations?",
                options: [
                    "The data was badly collected",
                    "Across hundreds of metrics compared, some line up with no link at all",
                    "Statistical tools are imprecise"
                ],
                a: 1,
                explication: "That is why the number of hypotheses tested must be known before interpreting a result."
            }
        ],

        // ---------------------------------------------------------------
        "the-dashboard": [
            // Series 1
            {
                q: "Which test tells you whether a metric deserves its place?",
                options: [
                    "Is it easy to calculate?",
                    "If this number doubled tomorrow, what would I do differently?",
                    "Has management asked for it?"
                ],
                a: 1,
                explication: "If the answer is “nothing”, the metric dilutes attention and creates the illusion of steering."
            },
            {
                q: "Why are most dashboards abandoned?",
                options: [
                    "They are too slow",
                    "They answer “what can we display?” instead of “what decision should we take?”",
                    "The data is not reliable"
                ],
                a: 1,
                explication: "The problem is rarely technical."
            },
            {
                q: "What is an actionable metric?",
                options: [
                    "A metric updated in real time",
                    "A metric you know what to do about when it moves",
                    "A metric calculated automatically"
                ],
                a: 1,
                explication: "It is the first of the four criteria for a good metric."
            },
            // Series 2
            {
                q: "What does an “average response time of 1.2s” hide?",
                options: [
                    "Nothing, it is a good measure",
                    "That 5% of users may be waiting eight seconds",
                    "That the measurement is distorted"
                ],
                a: 1,
                explication: "And they are the ones who leave. On service quality, an extreme value says more than the mean."
            },
            {
                q: "What happens if the definition of a metric changes along the way?",
                options: [
                    "Nothing, as long as it is documented",
                    "The series becomes unusable",
                    "The history has to be recalculated"
                ],
                a: 1,
                explication: "A stable definition is one of the criteria for a good metric."
            },
            {
                q: "Which tracking frequency should you choose for a metric?",
                options: [
                    "The highest possible",
                    "The one that matches how fast it moves",
                    "Once a month, always"
                ],
                a: 1,
                explication: "Watching a figure daily when it moves quarterly produces nothing but noise."
            }
        ]
    },

    // ===================================================================
    // Summary questions — distinct from the sub-section ones
    // ===================================================================
    synthese: [
        // Series 1
        {
            q: "Where do most analyses go wrong?",
            options: [
                "In the calculations",
                "In the data processing and the reasoning",
                "In the choice of tools"
            ],
            a: 1,
            explication: "That is the thread of this level: what to do to data before believing it, and the errors that turn an accurate figure into a false conclusion."
        },
        {
            q: "What do a too-small segment and an extreme value have in common?",
            options: [
                "A small number of observations weighs disproportionately on the result",
                "Both come from a collection error",
                "Both are fixed by deleting the data concerned"
            ],
            a: 0,
            explication: "Hence the importance of showing sample sizes and preferring the median on skewed distributions."
        },
        {
            q: "An analysis concludes that the app increases basket size. What should you ask first?",
            options: [
                "The sample size",
                "Which third variable could cause both",
                "The name of the tool used"
            ],
            a: 1,
            explication: "The confounding variable is the most frequent explanation, and the least considered."
        },
        // Series 2
        {
            q: "Why does cleaning determine the validity of an analysis?",
            options: [
                "Because it governs how fast the calculations run",
                "Because the choices made change the result, and are rarely documented",
                "Because the tools require it"
            ],
            a: 1,
            explication: "Deleting, estimating or keeping a missing value leads to three different results."
        },
        {
            q: "What separates a useful dashboard from a decorative one?",
            options: [
                "The number of charts",
                "The number of decisions it has triggered",
                "How often it is updated"
            ],
            a: 1,
            explication: "Every metric has to pass the “if this number doubled, what would I do?” test."
        },
        {
            q: "What should accompany any percentage you present?",
            options: [
                "The sample size and a point of comparison",
                "The formula used",
                "The name of the analyst"
            ],
            a: 0,
            explication: "Without a sample size the percentage is an impression; without a comparison it says nothing."
        }
    ]
};
