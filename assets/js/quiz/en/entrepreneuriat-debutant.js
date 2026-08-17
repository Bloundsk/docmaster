// ===================================
// QUESTION BANK — ENTREPRENEURSHIP GUIDE
// ===================================
// 6 questions per subsection: 3 shown, the other 3 after two weeks.
// The summary questions are distinct.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "the-business-plan": [
            // Set 1
            {
                q: "What is the most important function of a business plan?",
                options: [
                    "Convincing a banker",
                    "Making you think, even if you discover your assumptions do not hold",
                    "Meeting a legal obligation"
                ],
                a: 1,
                explication: "A plan that taught you nothing and made you doubt nothing was written to please, not to test."
            },
            {
                q: "What is the break-even point?",
                options: [
                    "The revenue above which you stop losing money",
                    "The minimum amount to invest at the start",
                    "The profit targeted in the first year"
                ],
                a: 0,
                explication: "It is the figure every reader looks for first in a business plan."
            },
            {
                q: "Fixed costs €2,500 a month, margin of €180 per job. What is the monthly break-even?",
                options: ["about 8 jobs", "about 14 jobs", "about 25 jobs"],
                a: 1,
                explication: "2,500 / 180 ≈ 14, roughly one job every day and a half of work. The calculation turns an intuition into a checkable question."
            },
            // Set 2
            {
                q: "Why does cash kill more businesses than profitability?",
                options: [
                    "Because taxes are taken in advance",
                    "Because customers pay at 30 or 60 days while costs fall due immediately",
                    "Because banks close loss-making accounts"
                ],
                a: 1,
                explication: "A month-by-month cash table is more useful than a forecast profit and loss account."
            },
            {
                q: "What is the “hockey stick”?",
                options: [
                    "Steady, prudent growth",
                    "Flat forecasts then a sudden explosion, with no justification",
                    "A fall followed by a recovery"
                ],
                a: 1,
                explication: "Every financier has seen that graph hundreds of times. Modest figures backed by explicit assumptions are worth more."
            },
            {
                q: "Which competitor is most often forgotten in a business plan?",
                options: [
                    "The large companies in the sector",
                    "“Doing nothing”, that is, the customer's current situation",
                    "Foreign competitors"
                ],
                a: 1,
                explication: "Many potential customers cope perfectly well with their current solution, however imperfect."
            }
        ],

        // ---------------------------------------------------------------
        "market-research": [
            // Set 1
            {
                q: "What is the aim of market research?",
                options: [
                    "Confirming the idea is good",
                    "Trying to demolish the idea: if it resists, you have something",
                    "Estimating the first year's revenue"
                ],
                a: 1,
                explication: "Looking for confirmation means learning nothing."
            },
            {
                q: "Which question yields the most reliable information?",
                options: [
                    "“Would you use an app to manage your invoices?”",
                    "“How did you handle your invoices last month?”",
                    "“Do you find this idea interesting?”"
                ],
                a: 1,
                explication: "Ask about the past, never about the future. A stated intention is worth nothing, past behaviour a great deal."
            },
            {
                q: "Why is the opinion of people close to you of little use?",
                options: [
                    "They do not know the sector",
                    "They want to encourage you: their opinion is affectionate, not informative",
                    "They do not have time to answer seriously"
                ],
                a: 1,
                explication: "A reasoned “no” is worth ten “that's brilliant”."
            },
            // Set 2
            {
                q: "What is the argument “the wellbeing market is worth 4 billion” worth?",
                options: [
                    "It is an excellent credibility argument",
                    "Nothing for you: you have to come down to the market you can genuinely reach",
                    "It is enough if the source is reliable"
                ],
                a: 1,
                explication: "A small, defensible number inspires more confidence than a huge, unreachable one."
            },
            {
                q: "What is the most convincing validation test?",
                options: [
                    "A questionnaire with 300 positive answers",
                    "A pre-sale: somebody takes out their card",
                    "The agreement in principle of a future partner"
                ],
                a: 1,
                explication: "Until somebody has paid, you have encouragement, not a market."
            },
            {
                q: "What does the “manual version” of a service consist of?",
                options: [
                    "Writing the instructions before building",
                    "Delivering the service by hand for the first customers, with no automation",
                    "Testing the product yourself before selling it"
                ],
                a: 1,
                explication: "You learn an enormous amount, and you have built nothing useless."
            }
        ],

        // ---------------------------------------------------------------
        "choosing-a-legal-form": [
            // Set 1
            {
                q: "Is the choice of legal form final?",
                options: [
                    "Yes, it commits you for the life of the business",
                    "No: it can be changed, better to start than to delay the project",
                    "Yes, except in liquidation"
                ],
                a: 1,
                explication: "Do not stall your project on this choice: changing form is expected and common."
            },
            {
                q: "What is the main advantage of the French micro-entreprise for testing an activity?",
                options: [
                    "It lets you deduct all your costs",
                    "Immediate online registration, no capital, no cost if revenue is nil",
                    "It offers the best social cover"
                ],
                a: 1,
                explication: "You move to a company when you approach the ceilings or when a partner arrives."
            },
            {
                q: "What is the main limit of the micro regime?",
                options: [
                    "It forbids having customers abroad",
                    "Business expenses are not deductible",
                    "It requires a minimum capital"
                ],
                a: 1,
                explication: "An activity requiring significant purchases is quickly penalised there."
            },
            // Set 2
            {
                q: "€40,000 of revenue, €22,000 of materials bought. Which form should you favour?",
                options: [
                    "The micro-entreprise, simpler",
                    "A company: under the micro regime, charges are calculated on the €40,000 received",
                    "It makes no difference, the result is the same"
                ],
                a: 1,
                explication: "The higher your real costs, the less the micro regime suits."
            },
            {
                q: "Which French form makes it easiest for investors to come into the capital?",
                options: ["The micro-entreprise", "The SASU / SAS", "The EURL"],
                a: 1,
                explication: "Its great freedom in the articles makes it the usual choice for projects meant to grow."
            },
            {
                q: "Why open a dedicated bank account from the first euro received?",
                options: [
                    "It is a legal obligation for every form",
                    "Mixing accounts makes the accounting painful and blurs the view of results",
                    "To get a better lending rate"
                ],
                a: 1,
                explication: "Five minutes to open, hours saved afterwards."
            }
        ],

        // ---------------------------------------------------------------
        "financing": [
            // Set 1
            {
                q: "What does an equity round really cost?",
                options: [
                    "High interest",
                    "A share of the capital and of the power to decide",
                    "A fixed commission"
                ],
                a: 1,
                explication: "You acquire partners who will have their say, including on whether you stay in charge."
            },
            {
                q: "What is an honour loan?",
                options: [
                    "A loan granted with no written document",
                    "An interest-free personal loan, without security, which counts as your own funds",
                    "A loan reserved for already profitable businesses"
                ],
                a: 1,
                explication: "Banks take it into account: it frequently unlocks another, larger loan."
            },
            {
                q: "What personal contribution does a bank generally expect?",
                options: ["5%", "20 to 30% of the need", "50% at least"],
                a: 1,
                explication: "If you risk nothing, why would it?"
            },
            // Set 2
            {
                q: "Is raising money a success in itself?",
                options: [
                    "Yes, it is the crowning of a project",
                    "No: it is a commitment to grow very fast, in exchange for part of the company",
                    "Yes, if the amount exceeds €500,000"
                ],
                a: 1,
                explication: "For the majority of projects, growing on customer revenue leaves more freedom."
            },
            {
                q: "What is the best financing for a young company?",
                options: [
                    "A fixed-rate bank loan",
                    "A customer who pays",
                    "A regional grant"
                ],
                a: 1,
                explication: "It is never repaid, it dilutes nothing, and it proves the market exists."
            },
            {
                q: "What does a bank look at beyond the figures?",
                options: [
                    "The design of the business plan",
                    "The coherence of the assumptions and your experience of the sector",
                    "The number of pages in the file"
                ],
                a: 1,
                explication: "Explicit assumptions beat flattering figures. A public guarantee scheme can also back part of the loan."
            }
        ]
    },

    // -------------------------------------------------------------------
    // SUMMARY
    // -------------------------------------------------------------------
    synthese: [
        // Set 1
        {
            q: "What is the most frequent cause of failure in a young company?",
            options: [
                "The founder not working hard enough",
                "The absence of a market: something is built that nobody had asked for",
                "Poor bookkeeping"
            ],
            a: 1,
            explication: "Hence the recommended order: check the problem exists before anything else."
        },
        {
            q: "What should a business project start with?",
            options: [
                "The name, the logo and the legal form",
                "Checking that somebody is ready to pay for the problem to go away",
                "Looking for financing"
            ],
            a: 1,
            explication: "Everything else comes after, and becomes much simpler once that answer is in."
        },
        {
            q: "Which document is most useful for steering the first year?",
            options: [
                "A forecast profit and loss account",
                "A month-by-month cash table",
                "A detailed market study"
            ],
            a: 1,
            explication: "A company profitable on paper can disappear for lack of cash."
        },
        // Set 2
        {
            q: "You hesitate between setting up your company now and finding a customer first. What should you do?",
            options: [
                "Set up the structure: it looks more serious to customers",
                "Look for a first paying customer: it validates the project and reassures financiers",
                "Both in parallel"
            ],
            a: 1,
            explication: "It sometimes saves you from creating a company you would have discovered too late had no market."
        },
        {
            q: "Twenty people tell you your idea is excellent. What can you conclude?",
            options: [
                "That the market is validated",
                "Nothing: none of them has paid",
                "That you can raise money"
            ],
            a: 1,
            explication: "Ask about the past rather than the future, and look for people who have no reason to spare your feelings."
        },
        {
            q: "Which free support is most under-used by founders?",
            options: [
                "Chambers of commerce and trade",
                "Private consulting firms",
                "Online forums"
            ],
            a: 0,
            explication: "Funded by the contributions you will pay, and often coupled with interest-free honour loans through local networks."
        }
    ]
};
