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
                    "The size of the sample",
                    "The size of the population",
                    "The number of questions asked"
                ],
                a: 0,
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
                    "Multiplying it by ten",
                    "Multiplying it by four"
                ],
                a: 2,
                explication: "That is why national polls stop at around 1,000 people: going further costs a great deal to gain very little."
            },
            // Series 2
            {
                q: "Version A at 42%, version B at 45%, margin of ± 5 points. What do you conclude?",
                options: [
                    "Nothing: the gap is smaller than the margin",
                    "B is better",
                    "The measurement should be redone with a bigger sample"
                ],
                a: 0,
                explication: "Announcing that B wins would mean presenting noise as a result."
            },
            {
                q: "What does the margin of error not cover?",
                options: [
                    "The randomness of the sampling, which it does put a figure on",
                    "The size of the sample, on which it nevertheless depends directly",
                    "A badly worded questionnaire or a badly chosen population"
                ],
                a: 2,
                explication: "Those biases do not shrink when you ask more people: they grow."
            },
            {
                q: "What is missing from “42% of users prefer version B”?",
                options: [
                    "The date of the measurement, and the period covered",
                    "The sample size and the collection method",
                    "The name of the tool"
                ],
                a: 1,
                explication: "Without that information the figure is not wrong: it is unverifiable."
            }
        ],

        // ---------------------------------------------------------------
        "ab-tests": [
            // Series 1
            {
                q: "What makes the A/B test a causal method?",
                options: [
                    "The size of the samples, always large enough to drown out chance",
                    "Random assignment to groups and a single difference tested",
                    "The length of the test, long enough to cover every day of the week"
                ],
                a: 1,
                explication: "It is the only everyday method that establishes causation rather than correlation."
            },
            {
                q: "When should the required sample size be calculated?",
                options: [
                    "When the first results come in",
                    "At the end, as a check",
                    "Before launching the test"
                ],
                a: 2,
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
                    "It slows the test down, since it recalculates on every look",
                    "It distorts the collection, because the tool records every visit",
                    "Look often enough and the gap crosses the threshold by chance"
                ],
                a: 2,
                explication: "A test you stop when it agrees with you is no longer testing anything."
            },
            {
                q: "Detecting an effect half the size takes:",
                options: [
                    "Four times the traffic",
                    "Twice the traffic",
                    "The same traffic, for longer"
                ],
                a: 0,
                explication: "That is what makes small gains so expensive to demonstrate."
            },
            {
                q: "Why not change several elements in the same version B?",
                options: [
                    "You will not know which one did the work, nor whether one makes things worse",
                    "The test becomes too long to reach a usable conclusion within a reasonable time",
                    "The tools do not allow two changes to be tested"
                ],
                a: 0,
                explication: "The test then answers “is the whole thing better?” and no other question."
            }
        ],

        // ---------------------------------------------------------------
        "interpretation-traps": [
            // Series 1
            {
                q: "What is Simpson's paradox?",
                options: [
                    "A correlation that eventually fades with time, as the data accumulates",
                    "A trend present in every group can reverse once the groups are pooled",
                    "A bias caused by the sample size, far too small to represent the population"
                ],
                a: 1,
                explication: "It happens as soon as the groups differ greatly in size."
            },
            {
                q: "What is survivorship bias?",
                options: [
                    "Overestimating extreme values",
                    "Keeping old data for too long, which ends up distorting the average",
                    "Analysing only those who stayed, when those who left hold the answer"
                ],
                a: 2,
                explication: "Analysing current customers to understand why people stay is the textbook case."
            },
            {
                q: "What is regression to the mean?",
                options: [
                    "An exceptionally bad month is usually followed by a better one, with no intervention",
                    "A statistical trend calculation, which gradually pulls a series to its centre",
                    "Two series of data converging on the same average value, over repeated measurements"
                ],
                a: 0,
                explication: "Any action taken after a low point will therefore look effective."
            },
            // Series 2
            {
                q: "How do you detect Simpson's paradox?",
                options: [
                    "By segmenting and checking the make-up of the groups compared",
                    "By increasing the sample size until the gap becomes stable",
                    "By recalculating the averages"
                ],
                a: 0,
                explication: "An overall result that contradicts every segment signals an unbalanced split, not a discovery."
            },
            {
                q: "Do these three traps involve a calculation error?",
                options: [
                    "Yes, they come from formulas wrongly applied at the calculation stage",
                    "No: the data is accurate, it is the reading that misleads",
                    "Yes, they come from collection errors"
                ],
                a: 1,
                explication: "That is what makes them hard to spot: nothing in the figures is wrong."
            },
            {
                q: "A corrective action follows a disastrous month, and the next month improves. What do you conclude?",
                options: [
                    "Nothing: the improvement would probably have happened without the intervention",
                    "The action worked, and the recovery seen the following month proves it",
                    "The action was not enough: it will have to be stepped up next month"
                ],
                a: 0,
                explication: "It is the most frequent illusion in reviews of corrective action."
            }
        ],

        // ---------------------------------------------------------------
        "data-pipeline": [
            // Series 1
            {
                q: "What are the four properties to watch on a data pipeline?",
                options: [
                    "Speed, volume, variety, veracity",
                    "Cost, security, performance, availability",
                    "Freshness, completeness, consistency, traceability"
                ],
                a: 2,
                explication: "An error at any link produces an impeccably presented and wrong dashboard."
            },
            {
                q: "Why is frozen data more dangerous than missing data?",
                options: [
                    "It takes up storage space without anyone noticing",
                    "Nobody notices that it has stopped moving",
                    "It blocks new calculations"
                ],
                a: 1,
                explication: "Everything looks normal, the figures are plausible, and they are out of date."
            },
            {
                q: "Which simple check catches the majority of real incidents?",
                options: [
                    "A weekly manual check, carried out by the team that produces the data",
                    "An alert if the row volume differs sharply from the usual",
                    "A check on permissions, to make sure nobody overwrites anything"
                ],
                a: 1,
                explication: "A source cut off, massive duplicates, an upstream format change: that trivial test catches them."
            },
            // Series 2
            {
                q: "Two dashboards give two different figures for “the number of customers”. Where does the problem come from?",
                options: [
                    "A calculation error somewhere in one of the two pipelines",
                    "An update lag between the two dashboards being compared",
                    "Diverging definitions that were never written down"
                ],
                a: 2,
                explication: "And the effect is to destroy trust in both dashboards at once."
            },
            {
                q: "What is the traceability of a figure?",
                options: [
                    "The full history of its values, kept so that months, quarters and years can be compared",
                    "Being able to trace it back to its source and to the transformation that produced it",
                    "The access log, which says who looked at the figure and when"
                ],
                a: 1,
                explication: "Without it, an anomaly cannot be diagnosed."
            },
            {
                q: "What is the cheapest protection against silent failure?",
                options: [
                    "Running every job twice",
                    "Keeping the raw data, so that everything can be recalculated if needed",
                    "Showing the last-updated date next to the figures"
                ],
                a: 2,
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
                "How much confidence does the figure deserve?",
                "Which tool should I use?",
                "How should the results be presented to the team?"
            ],
            a: 0,
            explication: "Is a 2% gap a result or noise? How many observations would it take to decide?"
        },
        {
            q: "An A/B test shows +3% after two days. What do you do?",
            options: [
                "Wait for the planned sample size before concluding",
                "Roll out the winning version",
                "Stop the test, the effect is demonstrated"
            ],
            a: 0,
            explication: "The gap crosses the threshold by chance if you look often enough, then goes back down."
        },
        {
            q: "What do the margin of error and the size of an A/B test have in common?",
            options: [
                "Both depend on the size of the total population being studied",
                "Both scale with the square root of the sample size",
                "Both are set by convention"
            ],
            a: 1,
            explication: "Hence the same consequence: halving the uncertainty or the detectable effect costs four times as many observations."
        },
        // Series 2
        {
            q: "The overall result contradicts what you see in every subgroup. What should you believe?",
            options: [
                "The subgroups, and check how the traffic was split",
                "The total, which covers more observations",
                "Neither, collect the data again"
            ],
            a: 0,
            explication: "When the total says the opposite of every part, it is not the total you should believe."
        },
        {
            q: "What caps the quality of an analysis?",
            options: [
                "The analyst's skill, on which all the rest of the chain depends",
                "The weakest link in the chain, which is rarely the analysis",
                "The power of the tools, which sets what can be calculated and how fast"
            ],
            a: 1,
            explication: "Collection, transport, storage, transformation: an error upstream produces a perfectly presented and wrong result."
        },
        {
            q: "Which document protects you from a hasty conclusion about a test?",
            options: [
                "The final report, written carefully once all the results are known",
                "The documentation of the testing tool, which describes its default thresholds",
                "The assumptions written before launch: duration, sample size, threshold"
            ],
            a: 2,
            explication: "That note protects you from yourself after three days."
        }
    ]
};
