// ===================================
// QUESTION BANK — FINANCE GUIDE
// ===================================
// 6 questions per subsection: 3 shown, the other 3 take over after two weeks.
// The summary questions are distinct from the subsection ones — none is used
// twice.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "saving": [
            // Set 1
            {
                q: "What does the emergency fund correspond to?",
                options: [
                    "3 to 6 months of income",
                    "3 to 6 months of everyday spending",
                    "10% of your annual salary"
                ],
                a: 1,
                explication: "It really is spending, not income. The gap between the two is often 30%."
            },
            {
                q: "Why build this reserve before investing?",
                options: [
                    "Because the law requires it",
                    "So as not to be forced to sell your investments at the wrong moment",
                    "Because it pays more than the stock market"
                ],
                a: 1,
                explication: "Financial shocks often happen when the economy is doing badly — that is, when markets are low."
            },
            {
                q: "Where should the emergency fund be held?",
                options: [
                    "Somewhere available within 48 hours and with no risk to the capital",
                    "A global equity ETF, which pays more",
                    "An investment locked up for 5 years so you cannot touch it"
                ],
                a: 0,
                explication: "This is not investing but insurance: the return matters little, availability is everything."
            },
            // Set 2
            {
                q: "Your monthly spending comes to €1,600. What reserve should you aim for as a minimum?",
                options: ["€1,600", "€4,800", "€16,000"],
                a: 1,
                explication: "3 months × €1,600 = €4,800. The upper bound, at 6 months, would be €9,600."
            },
            {
                q: "Which saving method proves the most effective over time?",
                options: [
                    "Setting aside whatever is left at the end of the month",
                    "An automatic transfer the day after payday",
                    "Saving one large sum once a year"
                ],
                a: 1,
                explication: "There is never anything left: spending naturally adjusts to whatever is available."
            },
            {
                q: "Why is it unwise to try to boost the return on this reserve?",
                options: [
                    "Because the gains are taxed at 100%",
                    "Because the possible gain is negligible while the risk is not",
                    "Because it is forbidden on a regulated savings account"
                ],
                a: 1,
                explication: "Taking risk with your safety cushion removes the very reason it exists."
            }
        ],

        // ---------------------------------------------------------------
        "investing": [
            // Set 1
            {
                q: "What does “investing” mean in financial terms?",
                options: [
                    "Placing your money with no risk at all",
                    "Accepting a risk of loss in exchange for a hoped-for return",
                    "Handing your money to a professional"
                ],
                a: 1,
                explication: "Risk is not a side effect: it is the counterpart of the return."
            },
            {
                q: "What does an investment promising a high return with no risk tell you?",
                options: [
                    "It is a product reserved for large portfolios",
                    "It is a scam, by definition",
                    "It is an ordinary capital-guaranteed fund"
                ],
                a: 1,
                explication: "A high return and the absence of risk are incompatible. It is the most reliable warning sign there is."
            },
            {
                q: "What is compound interest?",
                options: [
                    "A tax on capital gains",
                    "Return that itself produces further return",
                    "The total of several savings accounts"
                ],
                a: 1,
                explication: "Discreet over a few years, it becomes the dominant factor over several decades."
            },
            // Set 2
            {
                q: "Amélie invests €200 a month from age 25, Bruno from age 35, both until 65 at 5%. What does Bruno pay in less, and what does he lose?",
                options: [
                    "€24,000 less paid in, about €139,000 less in the result",
                    "€24,000 less paid in, about €24,000 less in the result",
                    "Nothing, he catches up by paying in more"
                ],
                a: 0,
                explication: "The gap in the result is nearly six times the gap in effort. Those ten years cannot be made up."
            },
            {
                q: "On €10,000 invested for 25 years at 6% gross, what is the gap between 0.2% and 2% of annual fees?",
                options: ["About €1,500", "About €5,000", "About €14,200"],
                a: 2,
                explication: "That is more than the capital invested at the start. Fees are the one variable you control entirely."
            },
            {
                q: "Why do regular contributions avoid having to find the right moment?",
                options: [
                    "Because they guarantee a minimum return",
                    "Because you mechanically buy more units when prices fall",
                    "Because fees are waived"
                ],
                a: 1,
                explication: "A fixed amount on a fixed date removes the question of timing, which nobody masters for long."
            }
        ],

        // ---------------------------------------------------------------
        "etfs": [
            // Set 1
            {
                q: "What does an ETF, or tracker, do?",
                options: [
                    "It tries to beat the market thanks to a manager",
                    "It reproduces the performance of an index",
                    "It guarantees the capital invested"
                ],
                a: 1,
                explication: "It does not try to do better than the index, which is what allows it to cost very little."
            },
            {
                q: "What are you buying with a unit of an ETF tracking the MSCI World?",
                options: [
                    "A share in one large global company",
                    "A fraction of more than 1,500 companies across 23 developed countries",
                    "An international government bond"
                ],
                a: 1,
                explication: "Rebuilding that spread holding by holding would be out of reach for an individual, if only on fees."
            },
            {
                q: "Does an ETF protect you from a general market fall?",
                options: [
                    "Yes, that is the whole point of diversification",
                    "No: it protects from the risk tied to one company, not from market risk",
                    "Yes, beyond 8 years of holding"
                ],
                a: 1,
                explication: "A global equity ETF has lost more than 30% in past crises. That is its normal behaviour."
            },
            // Set 2
            {
                q: "What is the first criterion when choosing an ETF?",
                options: [
                    "Its performance over the past year",
                    "Its ongoing charges, often labelled TER",
                    "The name of the company issuing it"
                ],
                a: 1,
                explication: "It is the only element known in advance. Return, by contrast, cannot be ordered."
            },
            {
                q: "What is the difference between an accumulating and a distributing ETF?",
                options: [
                    "The accumulating one automatically reinvests the dividends",
                    "The distributing one is reserved for professionals",
                    "The accumulating one guarantees the capital"
                ],
                a: 0,
                explication: "Automatic reinvestment serves compound interest directly."
            },
            {
                q: "What do studies comparing active funds and indices over 10 years show?",
                options: [
                    "Active funds almost always beat their index",
                    "The majority of active funds do worse, once fees are deducted",
                    "The two are exactly equivalent"
                ],
                a: 1,
                explication: "This does not mean no manager beats the market, but that identifying which ones in advance is another matter."
            }
        ],

        // ---------------------------------------------------------------
        "risk-management": [
            // Set 1
            {
                q: "In finance, what does the word “risk” mean?",
                options: [
                    "The probability of losing everything",
                    "The size of the swings, upwards as well as downwards",
                    "The amount of fees taken"
                ],
                a: 1,
                explication: "The higher an investment can rise, the lower it can fall. The two always go together."
            },
            {
                q: "Which question determines the acceptable level of risk?",
                options: [
                    "What return am I aiming for?",
                    "How long before I need this money?",
                    "How old am I?"
                ],
                a: 1,
                explication: "It is the horizon that commands, not the ambition for return."
            },
            {
                q: "Investing in equities for a need in 18 months is:",
                options: [
                    "Bold but defensible",
                    "Badly designed: the duration leaves no room to recover from a fall",
                    "The best choice for a short-term goal"
                ],
                a: 1,
                explication: "Under two years, no risk to the capital is justifiable."
            },
            // Set 2
            {
                q: "Is holding ten shares from the same sector diversifying?",
                options: [
                    "Yes, ten holdings are enough",
                    "No: real spreading works across several asset classes, regions and sectors",
                    "Yes, provided they are foreign"
                ],
                a: 1,
                explication: "A whole sector can fall as one block. Diversification plays out at several levels."
            },
            {
                q: "What test should you apply before choosing your allocation?",
                options: [
                    "Check the return over the last three years",
                    "Ask yourself whether you would hold without selling after a 35% fall",
                    "Compare the fees of three brokers"
                ],
                a: 1,
                explication: "The right level of risk is the one that lets you sleep and hold your strategy in the storm."
            },
            {
                q: "When does a fall become a real loss?",
                options: [
                    "As soon as it appears on the statement",
                    "At the moment of the sale",
                    "After a year"
                ],
                a: 1,
                explication: "As long as you do not sell, the fall stays notional. Hence the importance of never being forced to sell."
            }
        ],

        // ---------------------------------------------------------------
        "tax-on-savings": [
            // Set 1
            {
                q: "What is a tax “wrapper”?",
                options: [
                    "The container in which you house your investments",
                    "A type of investment in its own right",
                    "The document sent by the tax authority"
                ],
                a: 0,
                explication: "Two identical investments can leave very different sums depending on their container."
            },
            {
                q: "After how many years does a French PEA give exemption from income tax?",
                options: ["2 years", "5 years", "8 years"],
                a: 1,
                explication: "Social levies remain due. A withdrawal before 5 years closes the plan."
            },
            {
                q: "From what holding period does the French assurance-vie give an annual allowance?",
                options: ["5 years", "8 years", "12 years"],
                a: 1,
                explication: "The clock starts at the opening of the contract, not at the first significant contribution."
            },
            // Set 2
            {
                q: "What is the flat tax rate on a French ordinary securities account?",
                options: ["17.2%", "30%", "45%"],
                a: 1,
                explication: "That is 12.8% of income tax and 17.2% of social levies."
            },
            {
                q: "On €10,000 of gains, what is the gap between a securities account and a PEA held over 5 years?",
                options: ["About €300", "About €1,280", "None"],
                a: 1,
                explication: "€3,000 of tax against €1,720 of social levies, for exactly the same investments."
            },
            {
                q: "Why open a PEA early, even with a small sum?",
                options: [
                    "To get an opening bonus",
                    "Because the tax clock starts at opening and cannot be made up later",
                    "Because fees fall over time"
                ],
                a: 1,
                explication: "It is one of the rare financial decisions that costs almost nothing and cannot be caught up later."
            }
        ]
    },

    // -------------------------------------------------------------------
    // SUMMARY — cross-cutting questions, distinct from those above
    // -------------------------------------------------------------------
    synthese: [
        // Set 1
        {
            q: "In what order should you approach your financial situation?",
            options: [
                "Invest first, save afterwards out of the gains",
                "Build an emergency reserve, then invest the surplus",
                "Open a tax wrapper before anything else"
            ],
            a: 1,
            explication: "Investing without a safety cushion leads to having to sell at the worst moment."
        },
        {
            q: "Which factor weighs most on the result of a very long-term investment?",
            options: ["Choosing the right moment to enter", "The time spent invested", "The number of holdings owned"],
            a: 1,
            explication: "Starting modestly and early beats starting big and late by a wide margin."
        },
        {
            q: "Among these, which do you control entirely in advance?",
            options: ["The return", "The fees", "How long a crisis lasts"],
            a: 1,
            explication: "Return cannot be ordered; fees can. Hence their disproportionate importance."
        },
        // Set 2
        {
            q: "A friend offers you an investment paying 12% a year, guaranteed and risk-free. What should you do?",
            options: [
                "Invest a small sum to test it",
                "Refuse: a high return and the absence of risk are incompatible",
                "Ask for a higher return"
            ],
            a: 1,
            explication: "Always check that the intermediary is registered with your country's financial regulator."
        },
        {
            q: "You need €15,000 in 18 months for a house deposit. What direction?",
            options: [
                "Equities, to maximise the gain by then",
                "No risk to the capital: the horizon is too short",
                "50% equities, 50% guaranteed fund"
            ],
            a: 1,
            explication: "Under two years, a fall does not have time to be absorbed."
        },
        {
            q: "In what order should you reason when choosing an investment?",
            options: [
                "The wrapper, then the investment, then the need",
                "The need, then the horizon, then the investment, then the wrapper",
                "The return on display, then the rest"
            ],
            a: 1,
            explication: "A tax advantage never makes up for high fees or an unsuitable investment."
        }
    ]
};
