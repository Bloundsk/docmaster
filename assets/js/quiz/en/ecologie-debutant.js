// ===================================
// QUESTION BANK — DIGITAL SUSTAINABILITY, BEGINNER LEVEL (EN)
// ===================================
// 6 questions per sub-section: 3 shown, the other 3 take over after two weeks.
// The summary questions are distinct from the sub-section ones — none is reused.
//
// No question rests on an unsourced media figure: this field circulated false
// ones for years.
//
// Les clefs de « sections » sont les ancres ANGLAISES de la page traduite :
// quiz.js apparie la banque au « id » du titre h3.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "impact-is-in-manufacturing": [
            // Series 1
            {
                q: "For a phone or a computer, where is most of the footprint?",
                options: [
                    "In the electricity used while it is in service",
                    "In the manufacturing",
                    "In the transport"
                ],
                a: 1,
                explication: "The electricity used over years of service weighs far less."
            },
            {
                q: "Why does manufacturing weigh so much?",
                options: [
                    "Because devices are heavy",
                    "Because of the packaging",
                    "Extraction, clean rooms, assembly — a long and very energy-hungry chain"
                ],
                a: 2,
                explication: "And located in countries whose electricity is far more carbon-intensive than France's."
            },
            {
                q: "A phone kept 2½ years costs 29 kg CO₂e a year. And kept two years longer?",
                options: [
                    "18.3 kg a year, that is 37% less",
                    "26 kg a year",
                    "The same total"
                ],
                a: 0,
                explication: "Without changing anything about how it is used."
            },
            // Series 2
            {
                q: "Replacing a working device with a model that uses 30% less:",
                options: [
                    "Pays off in the first year",
                    "Almost always loses: the 30% applies to the small share",
                    "Depends on the brand"
                ],
                a: 1,
                explication: "And manufacturing the new device is immediate and complete."
            },
            {
                q: "What variable is left once the device is bought?",
                options: [
                    "How long it will serve",
                    "How it is charged",
                    "How many apps are installed"
                ],
                a: 0,
                explication: "Most of it is already paid for by the time you switch it on."
            },
            {
                q: "What becomes of usage advice in that light?",
                options: [
                    "It goes after the small share",
                    "It is the most effective kind",
                    "It is wrong"
                ],
                a: 0,
                explication: "Not wrong — but it occupies attention while the decision that counts is taken elsewhere."
            }
        ],

        // ---------------------------------------------------------------
        "extending-lifetime": [
            // Series 1
            {
                q: "What is the leading cause of phone replacement?",
                options: [
                    "Electronic failure",
                    "Running out of storage",
                    "Breakage"
                ],
                a: 2,
                explication: "And the least fatal: a case and a screen protector cost a few pounds."
            },
            {
                q: "What is a device kept in a drawer “just in case” worth?",
                options: [
                    "It has no impact once switched off",
                    "It counts for half",
                    "It has the same manufacturing footprint as one in use"
                ],
                a: 2,
                explication: "It has already been spent. Selling or giving it away avoids another manufacturing cycle."
            },
            {
                q: "What often determines end of life, before any breakdown?",
                options: [
                    "Screen wear",
                    "The end of security updates",
                    "The warranty expiring"
                ],
                a: 1,
                explication: "A device with no patches becomes hard to keep, whatever its physical condition."
            },
            // Series 2
            {
                q: "Replacing a battery rather than the device:",
                options: [
                    "Is not worth it",
                    "Costs a fraction of the price, and avoids a whole manufacturing cycle",
                    "Reduces performance"
                ],
                a: 1,
                explication: "It has the best return of any action, and is the most often dismissed."
            },
            {
                q: "A phone replaced after six months comes to how much per year?",
                options: [
                    "125 kg CO₂e, of which 96% is manufacturing alone",
                    "29 kg CO₂e",
                    "60 kg CO₂e"
                ],
                a: 0,
                explication: "The same device, the same usage, seven times the impact of one kept 4½ years."
            },
            {
                q: "Why does software shorten hardware's life?",
                options: [
                    "It wears the components out",
                    "Apps and sites become more demanding, and make the device uncomfortable",
                    "It uses more electricity"
                ],
                a: 1,
                explication: "That is the subject of frugal design, at the advanced level."
            }
        ],

        // ---------------------------------------------------------------
        "symbolic-habits": [
            // Series 1
            {
                q: "What is an ordinary email actually worth?",
                options: [
                    "A fraction of a gram of CO₂e",
                    "About 10 grams",
                    "About 50 grams"
                ],
                a: 0,
                explication: "The 10 g figure came from an old estimate, repeated for over ten years without checking."
            },
            {
                q: "Which habits have a substantial effect?",
                options: [
                    "Keeping longer, buying refurbished, repairing",
                    "Sorting your email, clearing your cache, unsubscribing",
                    "Lowering the brightness and closing tabs"
                ],
                a: 0,
                explication: "All three concern the hardware. None of the others touches it."
            },
            {
                q: "Clearing your browser cache: what effect?",
                options: [
                    "A moderate gain",
                    "A substantial gain over time",
                    "None, possibly negative: what was already there has to be downloaded again"
                ],
                a: 2,
                explication: "It is the clearest example of an act that gives the feeling of doing something."
            },
            // Series 2
            {
                q: "Why does ineffective advice circulate so much?",
                options: [
                    "It is free, immediate, gratifying, and calls no purchase into question",
                    "It comes from serious studies",
                    "It is the only kind that can be applied"
                ],
                a: 0,
                explication: "“Keep your phone two years longer” is less comfortable to pass on."
            },
            {
                q: "What is the real problem with an ineffective habit?",
                options: [
                    "It costs money",
                    "It consumes the available attention and goodwill, which are limited",
                    "It is hard to keep up"
                ],
                a: 1,
                explication: "Sorting your email monthly and changing phone every two years is a bad trade."
            },
            {
                q: "Which question should you ask before adopting a habit?",
                options: [
                    "Is it easy to keep up?",
                    "How many people do it?",
                    "Does it concern the hardware or the usage?"
                ],
                a: 2,
                explication: "The first counts, the second barely."
            }
        ],

        // ---------------------------------------------------------------
        "buying-well": [
            // Series 1
            {
                q: "What is the most powerful lever available to an individual?",
                options: [
                    "Choosing a low-consumption model",
                    "Buying refurbished",
                    "Recycling the old device"
                ],
                a: 1,
                explication: "It avoids nearly all of a manufacturing cycle. No usage habit comes close."
            },
            {
                q: "Which criterion most often determines a new device's end of life?",
                options: [
                    "The battery capacity",
                    "The number of years of guaranteed updates",
                    "The screen size"
                ],
                a: 1,
                explication: "That is a buying criterion, not a detail."
            },
            {
                q: "What is the useful hierarchy, in order?",
                options: [
                    "Recycle, buy new, repair",
                    "Buy green, then recycle",
                    "Keep, repair, refurbish — buying new last"
                ],
                a: 2,
                explication: "Buying new comes when the first three are exhausted."
            },
            // Series 2
            {
                q: "What is the rating displayed at the point of sale for?",
                options: [
                    "Indicating electricity consumption",
                    "Comparing repairability or durability between models",
                    "Guaranteeing European origin"
                ],
                a: 1,
                explication: "Along with how long spare parts stay available, it is the most useful information there is."
            },
            {
                q: "A device oversized relative to the need:",
                options: [
                    "Lasts longer",
                    "Uses less per task",
                    "Costs more to manufacture without serving any better"
                ],
                a: 2,
                explication: "Choose the size and power you need, not more."
            },
            {
                q: "What should you check before any replacement purchase?",
                options: [
                    "That the old one could not be repaired",
                    "The price of new against refurbished",
                    "Availability in shops"
                ],
                a: 0,
                explication: "At the very least get the repair quote, to compare."
            }
        ]
    },

    // Summary questions — distinct from the sub-section ones
    synthese: [
        {
            q: "What is the central fact of this level?",
            options: [
                "A device's impact is in its manufacturing, not its usage",
                "Digital mostly consumes electricity",
                "Data centres are the main culprit"
            ],
            a: 0,
            explication: "Everything else in the path follows from it."
        },
        {
            q: "What do repairing, keeping and buying refurbished have in common?",
            options: [
                "All three cut electricity consumption",
                "All three cost more",
                "All three avoid a manufacturing cycle"
            ],
            a: 2,
            explication: "That is what separates them from every usage habit."
        },
        {
            q: "Somebody sorts their email every month and changes phone every two years. What can you say?",
            options: [
                "They made the wrong trade, without knowing it",
                "Their balance is even",
                "The sorting offsets the replacement"
            ],
            a: 0,
            explication: "The effort goes to the small share while the large one is decided elsewhere."
        },
        {
            q: "Why does this path start with famous wrong figures?",
            options: [
                "To defuse the subject",
                "Because knowing how to discard a bad figure is worth more than knowing ten good habits",
                "Because good figures do not exist"
            ],
            a: 1,
            explication: "The field circulated estimates wrong by a factor of ten, repeated in good faith."
        },
        {
            q: "If you apply only one thing from this level, what should it be?",
            options: [
                "Sorting your files regularly",
                "Choosing frugal models",
                "Keeping your devices longer"
            ],
            a: 2,
            explication: "Every year gained does more than all the usage habits put together."
        },
        {
            q: "A friend wants to replace a working four-year-old computer with a more frugal model. What do you say?",
            options: [
                "It is a good call if the consumption gap exceeds 20%",
                "It depends on the price",
                "Manufacturing the new one is immediate and complete; the consumption gain applies to the small share"
            ],
            a: 2,
            explication: "Replacing a working device almost always loses, and often by a lot."
        }
    ]
};
