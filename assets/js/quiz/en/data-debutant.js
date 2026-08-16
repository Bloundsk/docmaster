// ===================================
// QUESTION BANK — DATA & ANALYTICS, BEGINNER LEVEL (EN)
// ===================================
// 6 questions per sub-section: 3 shown, the other 3 take over after two weeks.
//
// Les clefs de « sections » sont les ancres ANGLAISES de la page traduite :
// quiz.js apparie la banque au « id » du titre h3.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "metrics": [
            // Series 1
            {
                q: "What are the three conditions for a good metric?",
                options: [
                    "Impressive, easy to calculate, going up",
                    "Tied to a specific goal, measurable over time, actionable",
                    "Simple, visual and shareable"
                ],
                a: 1,
                explication: "Being actionable is the most discriminating criterion, and the one most often forgotten."
            },
            {
                q: "Which test lets you spot a vanity metric?",
                options: [
                    "Check whether competitors publish it",
                    "Ask yourself: if this figure dropped by 20%, what would I do differently?",
                    "See whether it goes up every month"
                ],
                a: 1,
                explication: "If the answer is “nothing”, it is not a metric, it is decoration."
            },
            {
                q: "Traffic goes from 100,000 to 180,000 visitors, sales from 1,200 to 1,300. What do you conclude?",
                options: [
                    "A fine result: +80% traffic",
                    "The conversion rate falls by 40%: the campaign targeted badly",
                    "Both metrics are equally useful"
                ],
                a: 1,
                explication: "Both figures are accurate. Only one leads to a decision: review the targeting."
            },
            // Series 2
            {
                q: "What is the difference between a lagging and a leading indicator?",
                options: [
                    "The first records, the second warns and leaves time to react",
                    "The first is financial, the second commercial",
                    "None, they are two names for the same thing"
                ],
                a: 0,
                explication: "Revenue records; the number of quotes sent this week announces next month's revenue."
            },
            {
                q: "A useful dashboard contains…",
                options: [
                    "As many metrics as are available",
                    "Both lagging and leading indicators",
                    "Financial metrics only"
                ],
                a: 1,
                explication: "Without a leading indicator you only see problems once it is too late to act."
            },
            {
                q: "What should you do before you start tracking a metric?",
                options: [
                    "Choose the visualisation tool",
                    "Write down the decision it will serve",
                    "Compare against the industry"
                ],
                a: 1,
                explication: "The hard part is not collecting, it is sorting."
            }
        ],

        // ---------------------------------------------------------------
        "data-collection": [
            // Series 1
            {
                q: "What can quantitative data do, and what can it not do?",
                options: [
                    "It says how many, where and when, but never why",
                    "It says why, but not how many",
                    "It answers every question"
                ],
                a: 0,
                explication: "Quantitative data locates the problem, qualitative data explains it. They complement each other without replacing each other."
            },
            {
                q: "5,000 customers contacted, 200 replies, average score 4.3/5. What does that figure measure?",
                options: [
                    "Customer satisfaction",
                    "The satisfaction of the people who replied",
                    "The quality of the service"
                ],
                a: 1,
                explication: "The 4,800 who stayed silent, including those who left for a competitor, are not in the calculation."
            },
            {
                q: "What is the most common collection flaw, and the hardest to see?",
                options: [
                    "Data-entry errors",
                    "Selection bias: those who reply are not like those who stayed silent",
                    "Not enough volume"
                ],
                a: 1,
                explication: "Before trusting a figure, ask who was not counted."
            },
            // Series 2
            {
                q: "To understand why customers abandon their basket, what should you do?",
                options: [
                    "Analyse the table of figures more finely",
                    "Talk to five people",
                    "Increase the sample size"
                ],
                a: 1,
                explication: "Looking for the cause of an abandoned basket in figures alone is a waste of time."
            },
            {
                q: "What does the “collect everything, we will see later” strategy produce?",
                options: [
                    "A rich, usable database",
                    "Huge databases where nothing can be found, and correlations due to chance",
                    "A competitive advantage"
                ],
                a: 1,
                explication: "The question comes before the collection, never the other way round."
            },
            {
                q: "Which questions should you ask before using a figure?",
                options: [
                    "Who produced it and when was it published?",
                    "Who was measured and who was left out, how, and over what period?",
                    "Does it match what I expected?"
                ],
                a: 1,
                explication: "A week of school holidays does not predict an ordinary week."
            }
        ],

        // ---------------------------------------------------------------
        "data-visualisation": [
            // Series 1
            {
                q: "What is a chart, fundamentally?",
                options: [
                    "Decoration placed on top of a table",
                    "An argument: it steers the reading and puts one thing forward",
                    "A neutral rendering of the data"
                ],
                a: 1,
                explication: "The same data, depending on how it is laid out, can lead to two opposite decisions."
            },
            {
                q: "Which format should you choose to compare quantities with each other?",
                options: [
                    "A pie chart",
                    "Sorted horizontal bars",
                    "A line chart"
                ],
                a: 1,
                explication: "The eye compares angles badly: keep the pie chart to three slices, for proportions."
            },
            {
                q: "A = 51 sales, B = 49. With an axis starting at 48, what does the reader see?",
                options: [
                    "Two almost identical bars, which is faithful",
                    "A bar for A three times taller: the 4% gap looks crushing",
                    "An unreadable chart"
                ],
                a: 1,
                explication: "No figure was falsified. Only the scale changed."
            },
            // Series 2
            {
                q: "What is the first reflex to acquire in front of a chart?",
                options: [
                    "Read the legend",
                    "Look at where the vertical axis starts",
                    "Check the source"
                ],
                a: 1,
                explication: "Many tools truncate the axis by default: the manipulation is often unintentional."
            },
            {
                q: "What title should you give a chart?",
                options: [
                    "“2026 sales”",
                    "“Sales have doubled in 6 months”",
                    "None, the axes are enough"
                ],
                a: 1,
                explication: "A good title states the conclusion. A good visual reads in three seconds."
            },
            {
                q: "What does a chart that needs its legend to be understood tell you?",
                options: [
                    "That it is rich in information",
                    "That it has failed at its job",
                    "That it is aimed at experts"
                ],
                a: 1,
                explication: "One idea per chart, axes named with their unit."
            }
        ],

        // ---------------------------------------------------------------
        "statistics-basics": [
            // Series 1
            {
                q: "Nine salaries at €2,000 and one at €20,000. What is the mean, and what does it describe?",
                options: [
                    "€2,000, it describes the situation of nine people",
                    "€3,800, it describes the reality of none of the ten employees",
                    "€11,000, it describes the gap between the extremes"
                ],
                a: 1,
                explication: "The median, at €2,000, describes the situation of nine of them."
            },
            {
                q: "When should you prefer the median to the mean?",
                options: [
                    "When the sample is small",
                    "As soon as extreme values exist: salaries, property prices, response times",
                    "When the data is old"
                ],
                a: 1,
                explication: "Publishing both is better still: the gap between them reveals the skew of the distribution on its own."
            },
            {
                q: "Two variables move together. Which explanations remain possible?",
                options: [
                    "A causes B, necessarily",
                    "A causes B, B causes A, or a third factor causes both",
                    "It is always a coincidence"
                ],
                a: 1,
                explication: "The third case is the most frequent and the most overlooked — ice creams and drownings, both caused by heat."
            },
            // Series 2
            {
                q: "“Our customers who use the app buy 3 times more.” What can you conclude?",
                options: [
                    "The app triggers the purchase, we should invest in it",
                    "Nothing certain: the already loyal customers may be the ones who install it",
                    "The app should be made compulsory"
                ],
                a: 1,
                explication: "Deciding to invest millions on that basis is a bet, not a deduction."
            },
            {
                q: "Going from 2% to 3% is how much?",
                options: [
                    "+1 point or +50%, both are accurate",
                    "+1% only",
                    "+50% only"
                ],
                a: 0,
                explication: "The second wording is spectacular and often chosen for that reason. Look for the absolute value."
            },
            {
                q: "What does stopping a test on the day the gap turns favourable guarantee?",
                options: [
                    "Valuable time saved",
                    "Finding a winner, even between two identical versions",
                    "A more reliable conclusion"
                ],
                a: 1,
                explication: "The duration of a test is fixed before launching it."
            }
        ]
    },

    // -------------------------------------------------------------------
    // SUMMARY
    // -------------------------------------------------------------------
    synthese: [
        // Series 1
        {
            q: "What is data for, fundamentally?",
            options: [
                "Producing impressive dashboards",
                "Answering a specific question with a known degree of certainty",
                "Justifying decisions already taken"
            ],
            a: 1,
            explication: "Badly collected data is worse than no data: it gives false confidence."
        },
        {
            q: "Which two questions filter out most hasty conclusions?",
            options: [
                "Who produced the data, and when?",
                "What is the sample size, and could the gap come from chance?",
                "Is the tool reliable, and up to date?"
            ],
            a: 1,
            explication: "Below a few hundred observations, a gap of a few points is nothing but noise."
        },
        {
            q: "A report shows “+50% conversions”. What should you ask?",
            options: [
                "Over what period?",
                "What is the absolute value behind that percentage?",
                "Who took the measurement?"
            ],
            a: 1,
            explication: "Going from 2 to 3 conversions is also a 50% rise."
        },
        // Series 2
        {
            q: "You have to compare two versions of a page. What do you need before concluding?",
            options: [
                "A few hundred visitors per version",
                "A few hundred conversions per version, not visitors",
                "A difference visible to the naked eye"
            ],
            a: 1,
            explication: "And a duration fixed in advance, otherwise you always find a winner."
        },
        {
            q: "Your tool produces a chart whose axis starts at 48 instead of 0. What do you do?",
            options: [
                "Leave it: the tool knows what it is doing",
                "Fix the axis: it artificially exaggerates a 4% gap",
                "Add a note under the chart"
            ],
            a: 1,
            explication: "That reflex will stop you being misled — including by your own charts."
        },
        {
            q: "What order should a data approach follow?",
            options: [
                "Collect broadly, then look for what the data says",
                "Frame the question, then collect what answers it",
                "Choose the tool, then define the metrics"
            ],
            a: 1,
            explication: "On a large volume you always end up digging out a spectacular correlation due to chance alone."
        }
    ]
};
