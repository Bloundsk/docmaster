// ===================================
// QUESTION BANK — ENTREPRENEURSHIP, ADVANCED LEVEL
// ===================================
// 6 questions per subsection: 3 shown, the other 3 take over after two weeks.
// The summary questions are distinct from the subsection ones — none is used
// twice.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "unit-economics": [
            // Set 1
            {
                q: "What is a customer's lifetime value worked out on?",
                options: [
                    "The revenue they generate",
                    "The margin they bring in",
                    "The subscription price"
                ],
                a: 1,
                explication: "Worked out on revenue, it is fantasy and leads to over-investing in acquisition."
            },
            {
                q: "Monthly margin €38, lifetime 14 months, acquisition cost €145: what ratio?",
                options: [
                    "1.4",
                    "3.7",
                    "14"
                ],
                a: 1,
                explication: "A lifetime value of €532 for €145 spent. A ratio of 3 is generally considered healthy."
            },
            {
                q: "What does a lifetime value / acquisition cost ratio below 1 mean?",
                options: [
                    "That growth is too slow",
                    "That the price is too high for the market being addressed",
                    "That you are paying to lose money on every customer"
                ],
                a: 2,
                explication: "Every new customer then makes things worse."
            },
            // Set 2
            {
                q: "What does the payback period indicate?",
                options: [
                    "How long before the customer has repaid their acquisition cost",
                    "The average length of a subscription",
                    "The time left before the whole business becomes profitable"
                ],
                a: 0,
                explication: "It drives the cash requirement directly: the longer it is, the more money you have to advance."
            },
            {
                q: "Raising the lifetime from 14 to 20 months increases lifetime value by:",
                options: [
                    "About 10%",
                    "About 43%",
                    "About 100%"
                ],
                a: 1,
                explication: "Without spending a single extra euro on acquisition. No advertising optimisation produces such an effect."
            },
            {
                q: "What does growth produce with negative unit economics?",
                options: [
                    "It amplifies the loss while giving the appearance of success",
                    "It always ends up fixing them, through economies of scale",
                    "It has no effect on profitability"
                ],
                a: 0,
                explication: "Revenue goes up, cash goes down faster."
            }
        ],

        // ---------------------------------------------------------------
        "raising-money": [
            // Set 1
            {
                q: "What does a founder really sell in a funding round?",
                options: [
                    "Shares in their own company",
                    "A licence to use their technology",
                    "A promise of fast growth"
                ],
                a: 2,
                explication: "The investor is looking for an exit within five to ten years at a substantial multiple."
            },
            {
                q: "A round of €300,000 on a pre-money valuation of €1,200,000: what share is given up?",
                options: [
                    "25%",
                    "30%",
                    "20%"
                ],
                a: 2,
                explication: "300,000 measured against the post-money valuation, that is €1,500,000."
            },
            {
                q: "A profitable business growing 15% a year is:",
                options: [
                    "An excellent investment for a fund, which looks for exactly that profile",
                    "An excellent affair for its founder, and a bad investment for a fund",
                    "A classic fundraising case, of the kind funds see every week"
                ],
                a: 1,
                explication: "The two logics do not meet. That is why raising suits a minority of projects."
            },
            // Set 2
            {
                q: "Which alternative finances without diluting and validates demand?",
                options: [
                    "A bank loan, guaranteed by the founder's own personal contribution",
                    "Grants and subsidies from public bodies, applied for at the start",
                    "Financing by customers: deposits, pre-sales, annual subscriptions"
                ],
                a: 2,
                explication: "The money comes from those with a real need, which is itself a validation."
            },
            {
                q: "What happens after three rounds each diluting by 20%?",
                options: [
                    "The founder keeps 40%",
                    "The founder drops below 52%, and loses control of decisions needing a majority",
                    "The dilution adds up to 60%, but the founder still keeps control of decisions"
                ],
                a: 1,
                explication: "Dilution multiplies, it does not add: 0.8 to the power of 3."
            },
            {
                q: "Why not raise before you have a model that works?",
                options: [
                    "Money accelerates what exists: it finances a loss for longer, with pressure on top",
                    "Investors would refuse",
                    "The valuation would be too low to interest any serious investor at this stage"
                ],
                a: 0,
                explication: "Many failures look exactly like that."
            }
        ],

        // ---------------------------------------------------------------
        "hiring-and-delegating": [
            // Set 1
            {
                q: "In France, an employee costs about how many times their gross salary?",
                options: [
                    "1.1 times",
                    "1.45 times",
                    "2.5 times"
                ],
                a: 1,
                explication: "Not counting equipment, training and the management time of the first months. The multiplier differs by country; check yours."
            },
            {
                q: "Gross €2,600, a 60% margin: how much extra annual revenue is needed?",
                options: [
                    "About €31,000",
                    "About €75,000",
                    "About €45,000"
                ],
                a: 1,
                explication: "An annual cost of €45,240 divided by a margin rate of 60%."
            },
            {
                q: "What does successful delegation assume?",
                options: [
                    "A defined, documented and measurable task",
                    "A competent person, available straight away",
                    "A permanent contract signed by both sides"
                ],
                a: 0,
                explication: "Handing over a vague problem — “take care of marketing” — mostly produces frustration."
            },
            // Set 2
            {
                q: "Which test comes before delegating?",
                options: [
                    "Do you have the budget?",
                    "Could you explain in ten minutes what has to be done and what a good result looks like?",
                    "Does the person have experience?"
                ],
                a: 1,
                explication: "If not, the task is not ready to be delegated."
            },
            {
                q: "Is being overloaded a reason to hire?",
                options: [
                    "Yes, it is the main signal",
                    "Yes, if the overload lasts more than six months and shows no sign of easing",
                    "No: without the corresponding margin, an employee turns overwork into a cash problem"
                ],
                a: 2,
                explication: "A hire is decided on identified extra revenue."
            },
            {
                q: "Which forms of work are reversible?",
                options: [
                    "A permanent contract, which can be ended at any time",
                    "None of them: every commitment binds the company for good",
                    "A one-off contractor, an apprentice, part-time work"
                ],
                a: 2,
                explication: "To be considered before a commitment you cannot undo."
            }
        ],

        // ---------------------------------------------------------------
        "legal-risks": [
            // Set 1
            {
                q: "Where do a young company's legal difficulties come from?",
                options: [
                    "What was never written down, at a time when everyone was getting along",
                    "An obscure regulation that nobody really understands at the outset",
                    "Administrative inspections"
                ],
                a: 0,
                explication: "These questions are easy to settle at the start and become conflicts later."
            },
            {
                q: "Does what a contractor produces belong to you automatically?",
                options: [
                    "No: a written assignment of rights is needed",
                    "Yes, as soon as you have paid the invoice for it",
                    "Yes, if it was commissioned work"
                ],
                a: 0,
                explication: "Without it, the logo, the code or the copy stays with whoever made it."
            },
            {
                q: "From when does the GDPR apply?",
                options: [
                    "From 250 employees in the company",
                    "Only for online shops that sell",
                    "From the very first customer file"
                ],
                a: 2,
                explication: "A record of processing, informing the people concerned, retention periods. It applies across the European Union."
            },
            // Set 2
            {
                q: "What must an agreement between partners cover?",
                options: [
                    "Who decides what, what happens if one leaves, how the shares are valued",
                    "Only how the capital is split between the partners at the start",
                    "The level of pay"
                ],
                a: 0,
                explication: "A disagreement two years later, with nothing written down, is not settled amicably — and blocks every decision."
            },
            {
                q: "How does the cost of a shareholders' agreement compare with that of a conflict?",
                options: [
                    "The two are comparable",
                    "A few thousand euros against several tens of thousands and two years of proceedings",
                    "The agreement costs more"
                ],
                a: 1,
                explication: "It is one of the rare expenses whose return is measured in multiples."
            },
            {
                q: "Which check is free before choosing a brand name?",
                options: [
                    "A provisional filing made with a notary before the launch",
                    "A prior-rights search on the trade mark office database",
                    "A lawyer's opinion"
                ],
                a: 1,
                explication: "It takes a few minutes and avoids having to rename everything after a year of trading."
            }
        ]
    },

    // ===================================================================
    // Summary questions — distinct from those in the subsections
    // ===================================================================
    synthese: [
        // Set 1
        {
            q: "What do the four decisions of this level have in common?",
            options: [
                "They are all about financing",
                "They all happen during the first year of trading",
                "They commit you for the long term and are hard to undo"
            ],
            a: 2,
            explication: "Whether to accelerate, with whose money, with whom, and under what constraints."
        },
        {
            q: "Which lever improves unit economics most without spending more?",
            options: [
                "Optimisation of the advertising campaigns",
                "Retention of existing customers",
                "Lowering prices in order to sell more"
            ],
            a: 1,
            explication: "Almost always more profitable than work on acquisition, and almost always done less because it is less visible."
        },
        {
            q: "A company has a lifetime value to acquisition cost ratio of 0.8 and wants to raise money to grow. What should you think?",
            options: [
                "Raising would mean financing a loss for longer, with pressure on top",
                "It is the right moment, the round will finance the growth",
                "They should raise a larger amount"
            ],
            a: 0,
            explication: "Outside money accelerates what exists. It does not replace a model that does not work yet."
        },
        // Set 2
        {
            q: "Which reasoning applies equally to hiring and to raising money?",
            options: [
                "Wait until you are profitable",
                "Cost the commitment before taking it, and check it is bearable if it goes wrong",
                "Consult a professional in every case, before taking any decision at all"
            ],
            a: 1,
            explication: "Write down the downside scenario: if it is bearable, go ahead; if not, reduce the commitment."
        },
        {
            q: "Why are legal risks covered at this level rather than at the start?",
            options: [
                "They arise from the commitments made: partners, contractors, customers, employees",
                "They only exist above a certain size",
                "They are far too technical for a beginner to handle without help"
            ],
            a: 0,
            explication: "Each committing decision at this level creates a corresponding need to write something down."
        },
        {
            q: "What do a missing shareholders' agreement and uncalculated unit economics have in common?",
            options: [
                "Both are matters for legal advice that founders put off paying for",
                "Both cost dearly at the exact moment you can least afford it",
                "Both are easily fixed"
            ],
            a: 1,
            explication: "One blows up when the company becomes interesting, the other when it accelerates."
        }
    ]
};
