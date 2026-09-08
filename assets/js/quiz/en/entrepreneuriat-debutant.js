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
                    "Making you think, even if you discover your assumptions do not hold",
                    "Convincing a banker to lend the money the project needs to start",
                    "Meeting a legal obligation that applies to every new business at creation"
                ],
                a: 0,
                explication: "A plan that taught you nothing and made you doubt nothing was written to please, not to test."
            },
            {
                q: "What is the break-even point?",
                options: [
                    "The revenue above which you stop losing money",
                    "The minimum amount you have to invest at the start",
                    "The profit you are targeting in the first year"
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
                    "Because banks automatically close loss-making accounts after a few months"
                ],
                a: 1,
                explication: "A month-by-month cash table is more useful than a forecast profit and loss account."
            },
            {
                q: "What is the “hockey stick”?",
                options: [
                    "Steady, prudent growth, year after year, with no sudden jumps",
                    "A fall followed by a recovery, once the market settles down again",
                    "Flat forecasts then a sudden explosion, with no justification"
                ],
                a: 2,
                explication: "Every financier has seen that graph hundreds of times. Modest figures backed by explicit assumptions are worth more."
            },
            {
                q: "Which competitor is most often forgotten in a business plan?",
                options: [
                    "The large companies in the sector, already established and well funded",
                    "“Doing nothing”, that is, the customer's current situation",
                    "Foreign competitors, often cheaper and already established here"
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
                    "Confirming that the idea is a good one before spending on it",
                    "Estimating the first year's revenue, month by month, before starting",
                    "Trying to demolish the idea: if it resists, you have something"
                ],
                a: 2,
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
                    "They do not have the time to answer that sort of question seriously"
                ],
                a: 1,
                explication: "A reasoned “no” is worth ten “that's brilliant”."
            },
            // Set 2
            {
                q: "What is the argument “the wellbeing market is worth 4 billion” worth?",
                options: [
                    "It is an excellent credibility argument in front of an investor",
                    "It is enough if the source is reliable",
                    "Nothing for you: you have to come down to the market you can genuinely reach"
                ],
                a: 2,
                explication: "A small, defensible number inspires more confidence than a huge, unreachable one."
            },
            {
                q: "What is the most convincing validation test?",
                options: [
                    "An online questionnaire with 300 positive answers",
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
                    "Testing the product on yourself before selling it to anybody else"
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
                    "No: it can be changed, better to start than to delay the project",
                    "Yes, it commits you for the whole life of the business and cannot change",
                    "Yes, except in liquidation or in a sale of the whole business"
                ],
                a: 0,
                explication: "Do not stall your project on this choice: changing form is expected and common."
            },
            {
                q: "What is the main advantage of the French micro-entreprise for testing an activity?",
                options: [
                    "It lets you deduct all of your costs against the revenue you make",
                    "Immediate online registration, no capital, no cost if revenue is nil",
                    "It offers the best social cover"
                ],
                a: 1,
                explication: "You move to a company when you approach the ceilings or when a partner arrives."
            },
            {
                q: "What is the main limit of the micro regime?",
                options: [
                    "Business expenses are not deductible",
                    "It forbids you from having any customers abroad",
                    "It requires a minimum capital at registration"
                ],
                a: 0,
                explication: "An activity requiring significant purchases is quickly penalised there."
            },
            // Set 2
            {
                q: "€40,000 of revenue, €22,000 of materials bought. Which form should you favour?",
                options: [
                    "The micro-entreprise, simpler",
                    "A company: under the micro regime, charges are calculated on the €40,000 received",
                    "It makes no difference, the result after tax comes out the same"
                ],
                a: 1,
                explication: "The higher your real costs, the less the micro regime suits."
            },
            {
                q: "Which French form makes it easiest for investors to come into the capital?",
                options: ["The micro-entreprise", "The EURL, which is simpler", "The SASU / SAS"],
                a: 2,
                explication: "Its great freedom in the articles makes it the usual choice for projects meant to grow."
            },
            {
                q: "Why open a dedicated bank account from the first euro received?",
                options: [
                    "It is a legal obligation that applies to every legal form, with no exception",
                    "To get a better lending rate",
                    "Mixing accounts makes the accounting painful and blurs the view of results"
                ],
                a: 2,
                explication: "Five minutes to open, hours saved afterwards."
            }
        ],

        // ---------------------------------------------------------------
        "financing": [
            // Set 1
            {
                q: "What does an equity round really cost?",
                options: [
                    "A share of the capital and of the power to decide",
                    "High interest, repaid over several years to the lender",
                    "A fixed commission, paid to the investor at the outset of the deal"
                ],
                a: 0,
                explication: "You acquire partners who will have their say, including on whether you stay in charge."
            },
            {
                q: "What is an honour loan?",
                options: [
                    "An interest-free personal loan, without security, which counts as your own funds",
                    "A loan granted with no written document",
                    "A loan reserved for businesses that are already profitable and established"
                ],
                a: 0,
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
                    "Yes, it is the crowning of a project and proof that it stands up",
                    "Yes, if the amount exceeds €500,000",
                    "No: it is a commitment to grow very fast, in exchange for part of the company"
                ],
                a: 2,
                explication: "For the majority of projects, growing on customer revenue leaves more freedom."
            },
            {
                q: "What is the best financing for a young company?",
                options: [
                    "A fixed-rate bank loan",
                    "A customer who pays",
                    "A regional grant, applied for at the start"
                ],
                a: 1,
                explication: "It is never repaid, it dilutes nothing, and it proves the market exists."
            },
            {
                q: "What does a bank look at beyond the figures?",
                options: [
                    "The coherence of the assumptions and your experience of the sector",
                    "The design of the business plan and the quality of its presentation",
                    "The number of pages in the file"
                ],
                a: 0,
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
                "The absence of a market: something is built that nobody had asked for",
                "The founder not working hard enough on the project day to day",
                "Poor bookkeeping"
            ],
            a: 0,
            explication: "Hence the recommended order: check the problem exists before anything else."
        },
        {
            q: "What should a business project start with?",
            options: [
                "The name, the logo and the legal form of the company you intend to create",
                "Looking for the financing the project is going to need to start",
                "Checking that somebody is ready to pay for the problem to go away"
            ],
            a: 2,
            explication: "Everything else comes after, and becomes much simpler once that answer is in."
        },
        {
            q: "Which document is most useful for steering the first year?",
            options: [
                "A month-by-month cash table",
                "A forecast profit and loss account",
                "A detailed market study, with figures"
            ],
            a: 0,
            explication: "A company profitable on paper can disappear for lack of cash."
        },
        // Set 2
        {
            q: "You hesitate between setting up your company now and finding a customer first. What should you do?",
            options: [
                "Set up the structure first: it looks a great deal more serious to customers",
                "Both in parallel",
                "Look for a first paying customer: it validates the project and reassures financiers"
            ],
            a: 2,
            explication: "It sometimes saves you from creating a company you would have discovered too late had no market."
        },
        {
            q: "Twenty people tell you your idea is excellent. What can you conclude?",
            options: [
                "Nothing: none of them has paid",
                "That the market has been validated",
                "That you are in a position to raise money"
            ],
            a: 0,
            explication: "Ask about the past rather than the future, and look for people who have no reason to spare your feelings."
        },
        {
            q: "Which free support is most under-used by founders?",
            options: [
                "Private consulting firms that specialise in it",
                "Online forums between founders",
                "Chambers of commerce and trade"
            ],
            a: 2,
            explication: "Funded by the contributions you will pay, and often coupled with interest-free honour loans through local networks."
        }
    ]
};
