// ===================================
// QUESTION BANK — DIGITAL SUSTAINABILITY, ADVANCED LEVEL (EN)
// ===================================
// 6 questions per sub-section: 3 shown, the other 3 take over after two weeks.
// The summary questions are distinct from the sub-section ones — none is reused.
//
// Les clefs de « sections » sont les ancres ANGLAISES de la page traduite :
// quiz.js apparie la banque au « id » du titre h3.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "frugal-design": [
            // Series 1
            {
                q: "What is the worst effect of a heavy digital service?",
                options: [
                    "Making a device that was working obsolete",
                    "Its bandwidth consumption",
                    "Its loading time"
                ],
                a: 0,
                explication: "Since manufacturing dominates, a replacement you caused costs more than years of transfer."
            },
            {
                q: "What is the right design question?",
                options: [
                    "At what device age does my page become unusable?",
                    "How many kilobytes does my page weigh?",
                    "What is my score on a measurement tool?"
                ],
                a: 0,
                explication: "The two are linked, but the first is the one that counts."
            },
            {
                q: "A 3 MB site, 10,000 visits a month: what does halving the weight give?",
                options: [
                    "About 0.6 kg CO₂e a year instead of 1.3 — less than a tenth of a phone",
                    "A saving of several hundred kilos",
                    "No difference"
                ],
                a: 0,
                explication: "That does not make lightening pointless: its justification lies elsewhere."
            },
            // Series 2
            {
                q: "Why is infinite scroll a problem?",
                options: [
                    "It is a mechanism designed to stretch time spent",
                    "It uses too much memory",
                    "It blocks search ranking"
                ],
                a: 0,
                explication: "Increasing usage without giving the user anything is the opposite of frugality."
            },
            {
                q: "Which criteria do a service's frugality criteria almost entirely overlap with?",
                options: [
                    "Those of accessibility and performance",
                    "Those of search ranking",
                    "Those of security"
                ],
                a: 0,
                explication: "Good news: they can be argued in a meeting without invoking the environment."
            },
            {
                q: "Is announcing decarbonised hosting enough to call a service frugal?",
                options: [
                    "No: it addresses the smallest of the three items",
                    "Yes, it is the main criterion",
                    "Yes, if the supplier is certified"
                ],
                a: 0,
                explication: "It is not useless — it is often all that gets done."
            }
        ],

        // ---------------------------------------------------------------
        "company-fleet": [
            // Series 1
            {
                q: "100 machines at 200 kg CO₂e, cycle extended from 3 to 5 years:",
                options: [
                    "2,667 kg CO₂e saved every year",
                    "A one-off saving of 2,667 kg",
                    "No effect, the hardware is already bought"
                ],
                a: 0,
                explication: "One decision, once, and an effect renewed every year."
            },
            {
                q: "What most often triggers a machine's replacement?",
                options: [
                    "Software becoming demanding, not a breakdown",
                    "Keyboard wear",
                    "The warranty ending"
                ],
                a: 0,
                explication: "Hence the importance of choosing software that does not force replacement."
            },
            {
                q: "Does depreciation over three years oblige you to replace after three years?",
                options: [
                    "No: it is an accounting rule, not an obligation to replace",
                    "Yes, it is a tax obligation",
                    "Yes, barring an exemption"
                ],
                a: 0,
                explication: "Taking the fleet out of the automatic accounting cycle is one of the simplest levers."
            },
            // Series 2
            {
                q: "What is an email-sorting campaign worth against extending the fleet's life?",
                options: [
                    "It is visible, cheap and has no measurable effect",
                    "It is equivalent",
                    "It is more effective because it is collective"
                ],
                a: 0,
                explication: "Doing the first without the second is communication, not environmental action."
            },
            {
                q: "What should you do with a machine handed back by a demanding user?",
                options: [
                    "Refurbish it internally for another role",
                    "Always sell it on",
                    "Scrap it"
                ],
                a: 0,
                explication: "It serves a less demanding role perfectly well."
            },
            {
                q: "Why is the replacement cycle such an effective lever?",
                options: [
                    "It is a single decision, taken by a few people, that applies to the whole fleet",
                    "Because it cuts electricity consumption",
                    "Because it is compulsory"
                ],
                a: 0,
                explication: "No awareness campaign has that effort-to-result ratio."
            }
        ],

        // ---------------------------------------------------------------
        "regulatory-framework": [
            // Series 1
            {
                q: "What does the durability rating displayed at the point of sale score?",
                options: [
                    "Repairability and reliability",
                    "Electricity consumption",
                    "Geographic origin"
                ],
                a: 0,
                explication: "In France it succeeded the repairability index on several categories of device."
            },
            {
                q: "What is the WEEE scheme?",
                options: [
                    "The take-back and treatment of waste electrical and electronic equipment",
                    "A frugality label",
                    "A manufacturing standard"
                ],
                a: 0,
                explication: "It is funded by a contribution included in the purchase price."
            },
            {
                q: "What is lost when an end-of-life device enters no scheme?",
                options: [
                    "Twice over: the pollution of the waste, and the extraction to be done again",
                    "Only the benefit of recycling",
                    "Nothing significant"
                ],
                a: 0,
                explication: "Those devices contain metals whose extraction is the heaviest item."
            },
            // Series 2
            {
                q: "Must a retailer take back the old device when selling one?",
                options: [
                    "Yes, when selling an equivalent — but it rarely mentions it",
                    "No, it is an optional commercial service",
                    "Yes, for a fee"
                ],
                a: 0,
                explication: "It is a little-known and little-applied obligation."
            },
            {
                q: "Where does recycling sit in the hierarchy?",
                options: [
                    "Last, after reduce, reuse and repair",
                    "First",
                    "On the same level as repair"
                ],
                a: 0,
                explication: "It recovers some of the materials, never all, and consumes energy itself."
            },
            {
                q: "What does a message centred on recycling do?",
                options: [
                    "It moves attention from the purchase to the end of life",
                    "It makes manufacturers accountable",
                    "It reduces waste at source"
                ],
                a: 0,
                explication: "That is, from where everything is decided to where almost nothing is left to save."
            }
        ],

        // ---------------------------------------------------------------
        "rebound-effect": [
            // Series 1
            {
                q: "What is the rebound effect?",
                options: [
                    "Efficiency per unit improves, and the number of units rises more",
                    "A temporary rise after a fall",
                    "Hardware coming back after repair"
                ],
                a: 0,
                explication: "The unit gain is real, and the total goes up anyway."
            },
            {
                q: "What is the only question that counts when a gain is announced?",
                options: [
                    "Has the total gone down?",
                    "By what percentage?",
                    "Over what period?"
                ],
                a: 0,
                explication: "It is rarely asked, because the answer is often no."
            },
            {
                q: "A model twice as efficient used ten times as often:",
                options: [
                    "Consumes five times more",
                    "Consumes half as much",
                    "Consumes the same"
                ],
                a: 0,
                explication: "That is the arithmetic of rebound, and it is stubborn."
            },
            // Series 2
            {
                q: "Does the rebound effect mean efficiency is useless?",
                options: [
                    "No: without it, the growth in usage would cost far more",
                    "Yes, it is counterproductive",
                    "Yes, except in computing"
                ],
                a: 0,
                explication: "It says efficiency is not enough, not that it is useless."
            },
            {
                q: "What should an environmental dashboard measure?",
                options: [
                    "Totals, not ratios",
                    "Intensities per user",
                    "Percentage improvements"
                ],
                a: 0,
                explication: "A dashboard of intensities will improve indefinitely while the absolute rises."
            },
            {
                q: "Can a service efficient per request and hosted green still grow the total footprint?",
                options: [
                    "Yes, if it multiplies usage or accelerates hardware replacement",
                    "No, by construction",
                    "Only outside Europe"
                ],
                a: 0,
                explication: "Those qualities simply answer a different question from the one being asked."
            }
        ]
    },

    // Summary questions — distinct from the sub-section ones
    synthese: [
        {
            q: "Who is this level for, unlike the first two?",
            options: [
                "Those who decide: designing a service, managing a fleet, weighing choices",
                "Climate specialists",
                "Developers only"
            ],
            a: 0,
            explication: "That is where the levers change scale, and where faulty reasoning costs the most."
        },
        {
            q: "What do frugal design and extending a fleet's life have in common?",
            options: [
                "Both act on the dominant item: the manufacturing of devices",
                "Both cut electricity consumption",
                "Both are legal obligations"
            ],
            a: 0,
            explication: "One by pushing a replacement back, the other by deciding it."
        },
        {
            q: "A company runs an email-sorting campaign and replaces its fleet every three years. What can you say?",
            options: [
                "The visible act is standing in for the decision that counts",
                "The two actions complement each other",
                "The sorting partly makes up for it"
            ],
            a: 0,
            explication: "The question is then no longer environmental: it is one of communication."
        },
        {
            q: "Why are a service's frugality criteria easy to argue for?",
            options: [
                "They overlap with accessibility and performance, which have their own arguments",
                "They are required by law",
                "They cut hosting costs"
            ],
            a: 0,
            explication: "You can obtain them without ever invoking the environment."
        },
        {
            q: "If you keep only one thing from this level, what should it be?",
            options: [
                "Look for the total rather than the percentage",
                "Lighten your pages",
                "Choose a decarbonised host"
            ],
            a: 0,
            explication: "If it is not given, that generally means it is not moving the right way."
        },
        {
            q: "Twenty years of technical progress and a digital footprint that keeps rising: how is that explained?",
            options: [
                "By the rebound effect: efficiency improves and usage improves more",
                "By faulty measurements",
                "By population growth"
            ],
            a: 0,
            explication: "That is the field's trajectory, and efficiency alone does not reverse it."
        }
    ]
};
