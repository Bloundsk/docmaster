// ===================================
// QUESTION BANK — DATA & ANALYTICS, ADVANCED LEVEL (EN)
// ===================================
// 6 questions per sub-section: 3 shown, the other 3 take over after two weeks.
// The summary questions are distinct from the sub-section ones — none is reused.
//
// Les clefs de « sections » sont les ancres ANGLAISES de la page traduite :
// quiz.js apparie la banque au « id » du titre h3.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "margin-of-error": [
            // Series 1
            {
                q: "What does the margin of error of a poll mainly depend on?",
                options: [
                    "The size of the population",
                    "The size of the sample",
                    "The number of questions asked"
                ],
                a: 1,
                explication: "That is what makes polls possible: 1,000 people give the same precision for a city as for a country."
            },
            {
                q: "On 400 observations, a proportion of 50% carries a margin of error of about:",
                options: [
                    "± 1 point",
                    "± 5 points",
                    "± 15 points"
                ],
                a: 1,
                explication: "The real value therefore sits between 45% and 55%."
            },
            {
                q: "What does it take to halve a margin of error?",
                options: [
                    "Doubling the sample",
                    "Multiplying it by four",
                    "Multiplying it by ten"
                ],
                a: 1,
                explication: "That is why national polls stop at around 1,000 people: going further costs a great deal to gain very little."
            },
            // Series 2
            {
                q: "Version A at 42%, version B at 45%, margin of ± 5 points. What do you conclude?",
                options: [
                    "B is better",
                    "Nothing: the gap is smaller than the margin",
                    "The measurement should be redone"
                ],
                a: 1,
                explication: "Announcing that B wins would mean presenting noise as a result."
            },
            {
                q: "What does the margin of error not cover?",
                options: [
                    "The randomness of sampling",
                    "A badly worded questionnaire or a badly chosen population",
                    "The size of the sample"
                ],
                a: 1,
                explication: "Those biases do not shrink when you ask more people: they grow."
            },
            {
                q: "What is missing from “42% of users prefer version B”?",
                options: [
                    "The sample size and the collection method",
                    "The date of the measurement",
                    "The name of the tool"
                ],
                a: 0,
                explication: "Without that information the figure is not wrong: it is unverifiable."
            }
        ],

        // ---------------------------------------------------------------
        "ab-tests": [
            // Series 1
            {
                q: "What makes the A/B test a causal method?",
                options: [
                    "The size of the samples",
                    "Random assignment to groups and a single difference tested",
                    "The duration of the test"
                ],
                a: 1,
                explication: "It is the only everyday method that establishes causation rather than correlation."
            },
            {
                q: "When should the required sample size be calculated?",
                options: [
                    "Before launching the test",
                    "When the first results come in",
                    "At the end, as a check"
                ],
                a: 0,
                explication: "Afterwards it is too late to ask whether the test could conclude at all."
            },
            {
                q: "Base rate 3%, improvement targeted +20% relative: how many visitors per group?",
                options: [
                    "About 1,400",
                    "About 14,000",
                    "About 140,000"
                ],
                a: 1,
                explication: "At 1,000 visitors a day across all groups, that is about four weeks of testing."
            },
            // Series 2
            {
                q: "Why is checking an A/B test every day a mistake?",
                options: [
                    "It slows the test down",
                    "Look often enough and the gap crosses the threshold by chance",
                    "It distorts the collection"
                ],
                a: 1,
                explication: "A test you stop when it agrees with you is no longer testing anything."
            },
            {
                q: "Detecting an effect half the size takes:",
                options: [
                    "Twice the traffic",
                    "Four times the traffic",
                    "The same traffic, for longer"
                ],
                a: 1,
                explication: "That is what makes small gains so expensive to demonstrate."
            },
            {
                q: "Why not change several elements in the same version B?",
                options: [
                    "The test becomes too long",
                    "You will not know which one did the work, nor whether one makes things worse",
                    "The tools do not allow it"
                ],
                a: 1,
                explication: "The test then answers “is the whole thing better?” and no other question."
            }
        ],

        // ---------------------------------------------------------------
        "interpretation-traps": [
            // Series 1
            {
                q: "What is Simpson's paradox?",
                options: [
                    "A trend present in every group can reverse once the groups are pooled",
                    "A correlation that fades over time",
                    "A bias caused by sample size"
                ],
                a: 0,
                explication: "It happens as soon as the groups differ greatly in size."
            },
            {
                q: "What is survivorship bias?",
                options: [
                    "Analysing only those who stayed, when those who left hold the answer",
                    "Overestimating extreme values",
                    "Keeping old data for too long"
                ],
                a: 0,
                explication: "Analysing current customers to understand why people stay is the textbook case."
            },
            {
                q: "What is regression to the mean?",
                options: [
                    "A statistical trend calculation",
                    "An exceptionally bad month is usually followed by a better one, with no intervention",
                    "The convergence of two data series"
                ],
                a: 1,
                explication: "Any action taken after a low point will therefore look effective."
            },
            // Series 2
            {
                q: "How do you detect Simpson's paradox?",
                options: [
                    "By increasing the sample size",
                    "By segmenting and checking the make-up of the groups compared",
                    "By recalculating the averages"
                ],
                a: 1,
                explication: "An overall result that contradicts every segment signals an unbalanced split, not a discovery."
            },
            {
                q: "Do these three traps involve a calculation error?",
                options: [
                    "Yes, they come from badly applied formulas",
                    "No: the data is accurate, it is the reading that misleads",
                    "Yes, they come from collection errors"
                ],
                a: 1,
                explication: "That is what makes them hard to spot: nothing in the figures is wrong."
            },
            {
                q: "A corrective action follows a disastrous month, and the next month improves. What do you conclude?",
                options: [
                    "The action worked",
                    "Nothing: the improvement would probably have happened without the intervention",
                    "The action was not enough"
                ],
                a: 1,
                explication: "It is the most frequent illusion in reviews of corrective action."
            }
        ],

        // ---------------------------------------------------------------
        "data-pipeline": [
            // Series 1
            {
                q: "What are the four properties to watch on a data pipeline?",
                options: [
                    "Freshness, completeness, consistency, traceability",
                    "Speed, volume, variety, veracity",
                    "Cost, security, performance, availability"
                ],
                a: 0,
                explication: "An error at any link produces an impeccably presented and wrong dashboard."
            },
            {
                q: "Why is frozen data more dangerous than missing data?",
                options: [
                    "It takes up storage space",
                    "Nobody notices that it has stopped moving",
                    "It blocks new calculations"
                ],
                a: 1,
                explication: "Everything looks normal, the figures are plausible, and they are out of date."
            },
            {
                q: "Which simple check catches the majority of real incidents?",
                options: [
                    "An alert if the row volume differs sharply from the usual",
                    "A weekly manual check",
                    "A permissions review"
                ],
                a: 0,
                explication: "A source cut off, massive duplicates, an upstream format change: that trivial test catches them."
            },
            // Series 2
            {
                q: "Two dashboards give two different figures for “the number of customers”. Where does the problem come from?",
                options: [
                    "A calculation error",
                    "Diverging definitions that were never written down",
                    "An update lag"
                ],
                a: 1,
                explication: "And the effect is to destroy trust in both dashboards at once."
            },
            {
                q: "What is the traceability of a figure?",
                options: [
                    "The history of its values",
                    "Being able to trace it back to its source and to the transformation that produced it",
                    "The log of who viewed it"
                ],
                a: 1,
                explication: "Without it, an anomaly cannot be diagnosed."
            },
            {
                q: "What is the cheapest protection against silent failure?",
                options: [
                    "Running every job twice",
                    "Showing the last-updated date next to the figures",
                    "Backing up the raw data"
                ],
                a: 1,
                explication: "Otherwise a failed job leaves the dashboard showing the last known values."
            }
        ]
    },

    // ===================================================================
    // Summary questions — distinct from the sub-section ones
    // ===================================================================
    synthese: [
        // Series 1
        {
            q: "Which question does this level teach you to ask?",
            options: [
                "Which tool should I use?",
                "How much confidence does the figure deserve?",
                "How should I present the results?"
            ],
            a: 1,
            explication: "Is a 2% gap a result or noise? How many observations would it take to decide?"
        },
        {
            q: "An A/B test shows +3% after two days. What do you do?",
            options: [
                "Roll out the winning version",
                "Wait for the planned sample size before concluding",
                "Stop the test, the effect is demonstrated"
            ],
            a: 1,
            explication: "The gap crosses the threshold by chance if you look often enough, then goes back down."
        },
        {
            q: "What do the margin of error and the size of an A/B test have in common?",
            options: [
                "Both scale with the square root of the sample size",
                "Both depend on the total population",
                "Both are set by convention"
            ],
            a: 0,
            explication: "Hence the same consequence: halving the uncertainty or the detectable effect costs four times as many observations."
        },
        // Series 2
        {
            q: "The overall result contradicts what you see in every subgroup. What should you believe?",
            options: [
                "The total, which covers more observations",
                "The subgroups, and check how the traffic was split",
                "Neither, collect the data again"
            ],
            a: 1,
            explication: "When the total says the opposite of every part, it is not the total you should believe."
        },
        {
            q: "What caps the quality of an analysis?",
            options: [
                "The skill of the analyst",
                "The weakest link in the chain, which is rarely the analysis",
                "The power of the tools"
            ],
            a: 1,
            explication: "Collection, transport, storage, transformation: an error upstream produces a perfectly presented and wrong result."
        },
        {
            q: "Which document protects you from a hasty conclusion about a test?",
            options: [
                "The final report",
                "The assumptions written before launch: duration, sample size, threshold",
                "The tool's documentation"
            ],
            a: 1,
            explication: "That note protects you from yourself after three days."
        }
    ]
};
