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
                    "Delete it: at that scale, it can only be a data-entry error",
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
                    "It distorts the mean",
                    "Missing values are rarely spread at random"
                ],
                a: 2,
                explication: "An optional income field is filled in mostly by those the question does not bother."
            },
            {
                q: "What are the three possible courses of action for a missing value?",
                options: [
                    "Delete the row, ignore the gap, or start the whole collection again",
                    "Delete the row, estimate the value, or treat the absence as information",
                    "Put zero, put the column average, or put the median of the same segment"
                ],
                a: 1,
                explication: "The choice changes the result and should be written down somewhere."
            },
            {
                q: "Why document your cleaning decisions?",
                options: [
                    "The GDPR requires it",
                    "To speed up the later processing, which starts from the clean file",
                    "Without them the analysis becomes unverifiable, even by its author"
                ],
                a: 2,
                explication: "Three months later nobody remembers what was removed or why."
            }
        ],

        // ---------------------------------------------------------------
        "segmenting": [
            // Series 1
            {
                q: "What does an overall average do to a mixed population?",
                options: [
                    "It blends different behaviours and describes nobody",
                    "It gives a good overall view, good enough to steer day to day",
                    "It systematically overstates, pulling the result towards large volumes"
                ],
                a: 0,
                explication: "The figure is not wrong, it is useless."
            },
            {
                q: "An overall rate of 3% hiding 5.2% on desktop and 1.4% on mobile: what should you conclude?",
                options: [
                    "It masks a mobile problem, while mobile makes up two thirds of the traffic",
                    "The overall rate is wrong",
                    "The overall rate should no longer be tracked, since it hides the two audiences"
                ],
                a: 0,
                explication: "Segmenting means looking for the places where two groups behave differently."
            },
            {
                q: "What should always be shown next to a percentage?",
                options: [
                    "The date it was calculated",
                    "The sample size",
                    "The data source"
                ],
                a: 1,
                explication: "“40%” out of five people is two people."
            },
            // Series 2
            {
                q: "What is the limit of splitting into segments?",
                options: [
                    "Groups that are too small produce noise that gets taken for a signal",
                    "The tools cannot keep up",
                    "It becomes unreadable beyond three segments, and nobody reads the table"
                ],
                a: 0,
                explication: "In a group of fifteen people, one special case moves the percentage by seven points."
            },
            {
                q: "“Sales rose by 12% after the redesign.” What is missing?",
                options: [
                    "A point of comparison: an equivalent period or a control group",
                    "The amount in euros",
                    "The name of the person responsible for the redesign and its budget"
                ],
                a: 0,
                explication: "Without a reference, a change cannot be told apart from ordinary fluctuation."
            },
            {
                q: "What is the goal of segmentation?",
                options: [
                    "To produce more detailed tables that each team can filter as it likes",
                    "To split the data into groups of equal size, so as to compare fairly",
                    "Finding where behaviour changes, because that is where the decisions hide"
                ],
                a: 2,
                explication: "A split that reveals no difference brings nothing."
            }
        ],

        // ---------------------------------------------------------------
        "correlation-causation": [
            // Series 1
            {
                q: "How many explanations can a correlation have?",
                options: [
                    "Four: A causes B, B causes A, a third variable causes both, or chance",
                    "Only one: A causes B",
                    "Two only: either A causes B, or it is a coincidence, and common sense decides"
                ],
                a: 0,
                explication: "The third is the most frequent, and the one considered least."
            },
            {
                q: "What is a confounding variable?",
                options: [
                    "A third variable that causes both A and B",
                    "A badly measured variable",
                    "A variable that varies for no reason"
                ],
                a: 0,
                explication: "Loyalty causes both the app install and the high basket."
            },
            {
                q: "App users have a basket twice as large. What can you conclude?",
                options: [
                    "You should push installation of the app to bring basket sizes up",
                    "Nothing yet: the already loyal customers may be the ones who install it",
                    "The app improves the buying experience, so the basket size follows"
                ],
                a: 1,
                explication: "Pushing the app to occasional customers will not reproduce the effect, but it will spend the budget."
            },
            // Series 2
            {
                q: "Which method genuinely establishes causation?",
                options: [
                    "Experimentation, with random assignment",
                    "A correlation above 0.9",
                    "A convincing business rationale, agreed by the teams"
                ],
                a: 0,
                explication: "Everything else stays a hypothesis, however plausible."
            },
            {
                q: "Which kind of correlation is the most dangerous?",
                options: [
                    "The one that is plainly absurd, with no possible mechanism",
                    "The one you can give a credible explanation for",
                    "The weak one"
                ],
                a: 1,
                explication: "A credible explanation is not proof. It only makes it harder to consider the other possibilities."
            },
            {
                q: "Why does chance sometimes produce correlations?",
                options: [
                    "The data is badly collected, and the noise ends up looking like a signal",
                    "Across hundreds of metrics compared, some line up with no link at all",
                    "Statistical tools lose precision as soon as the volume of data grows"
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
                    "Is it asked for by management, who look at it every week?",
                    "If this number doubled tomorrow, what would I do differently?"
                ],
                a: 2,
                explication: "If the answer is “nothing”, the metric dilutes attention and creates the illusion of steering."
            },
            {
                q: "Why are most dashboards abandoned?",
                options: [
                    "They are too slow",
                    "They answer “what can we display?” instead of “what decision should we take?”",
                    "The data behind them is not reliable enough for anyone to base a decision on it"
                ],
                a: 1,
                explication: "The problem is rarely technical."
            },
            {
                q: "What is an actionable metric?",
                options: [
                    "A metric updated in real time, visible to everyone",
                    "A metric you know what to do about when it moves",
                    "A metric calculated automatically, with no human involvement"
                ],
                a: 1,
                explication: "It is the first of the four criteria for a good metric."
            },
            // Series 2
            {
                q: "What does an “average response time of 1.2s” hide?",
                options: [
                    "Nothing: it is a sound measurement, taken across all the calls",
                    "That the measurement is distorted",
                    "That 5% of users may be waiting eight seconds"
                ],
                a: 2,
                explication: "And they are the ones who leave. On service quality, an extreme value says more than the mean."
            },
            {
                q: "What happens if the definition of a metric changes along the way?",
                options: [
                    "Nothing, as long as it is documented",
                    "The history has to be recalculated",
                    "The series becomes unusable"
                ],
                a: 2,
                explication: "A stable definition is one of the criteria for a good metric."
            },
            {
                q: "Which tracking frequency should you choose for a metric?",
                options: [
                    "The one that matches how fast it moves",
                    "The highest possible, so as to be able to react without delay",
                    "Once a month, in step with the usual reporting"
                ],
                a: 0,
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
                "In the choice of tools",
                "In the data processing and the reasoning"
            ],
            a: 2,
            explication: "That is the thread of this level: what to do to data before believing it, and the errors that turn an accurate figure into a false conclusion."
        },
        {
            q: "What do a too-small segment and an extreme value have in common?",
            options: [
                "Both come from a collection error that could have been avoided upstream",
                "Both are fixed by removing the data concerned from the final calculation",
                "A small number of observations weighs disproportionately on the result"
            ],
            a: 2,
            explication: "Hence the importance of showing sample sizes and preferring the median on skewed distributions."
        },
        {
            q: "An analysis concludes that the app increases basket size. What should you ask first?",
            options: [
                "Which third variable could cause both",
                "The size of the sample, and how it splits between the two groups",
                "The name of the tool used"
            ],
            a: 0,
            explication: "The confounding variable is the most frequent explanation, and the least considered."
        },
        // Series 2
        {
            q: "Why does cleaning determine the validity of an analysis?",
            options: [
                "Because it governs how fast the calculations run, and therefore the deadlines",
                "Because the tools require it",
                "Because the choices made change the result, and are rarely documented"
            ],
            a: 2,
            explication: "Deleting, estimating or keeping a missing value leads to three different results."
        },
        {
            q: "What separates a useful dashboard from a decorative one?",
            options: [
                "The number of decisions it has triggered",
                "The number of charts and metrics it displays",
                "How often it is refreshed, ideally every day"
            ],
            a: 0,
            explication: "Every metric has to pass the “if this number doubled, what would I do?” test."
        },
        {
            q: "What should accompany any percentage you present?",
            options: [
                "The formula used",
                "The sample size and a point of comparison",
                "The name of the analyst"
            ],
            a: 1,
            explication: "Without a sample size the percentage is an impression; without a comparison it says nothing."
        }
    ]
};
