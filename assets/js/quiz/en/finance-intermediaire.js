// ===================================
// QUESTION BANK — FINANCE, INTERMEDIATE LEVEL
// ===================================
// 6 questions per subsection: 3 shown, the other 3 take over after two weeks.
// The summary questions are distinct from the subsection ones — none is used
// twice.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "building-an-allocation": [
            // Set 1
            {
                q: "What does the choice of an allocation rest on first?",
                options: [
                    "The investor's temperament",
                    "The horizon, that is, the date of the need",
                    "The current level of the markets"
                ],
                a: 1,
                explication: "A temperament does not change how long a market takes to recover from a fall. It is the date of the need that determines what you can bear."
            },
            {
                q: "Can one person have several allocations at the same time?",
                options: [
                    "No, one per person",
                    "Yes: one per pocket, according to each plan's deadline",
                    "Yes, but only after 50"
                ],
                a: 1,
                explication: "A purchase in 2 years and retirement in 25 years do not call for the same exposure. These are three pockets of the same person, each with its own deadline."
            },
            {
                q: "What does the “100 minus your age” rule suggest?",
                options: [
                    "Holding in equities a percentage equal to 100 minus your age",
                    "Saving €100 a month until you retire",
                    "Never holding more than 100 positions in a portfolio"
                ],
                a: 0,
                explication: "70% equities at thirty, 40% at sixty. It reduces risk as the need approaches, but confuses age with the real horizon."
            },
            // Set 2
            {
                q: "What is the main limit of the “100 minus your age” rule?",
                options: [
                    "It is too complicated to work out",
                    "It confuses age with the investment horizon",
                    "It applies only to bonds"
                ],
                a: 1,
                explication: "Somebody of 60 who will not draw on their capital until 80 still has twenty years of horizon, not zero."
            },
            {
                q: "For a house deposit planned in 8 years, what exposure is coherent?",
                options: [
                    "0% equities, the need is certain",
                    "About 40% equities",
                    "100% equities, eight years is a long time"
                ],
                a: 1,
                explication: "Eight years leave time to partly erase a fall, but not fully. An intermediate exposure matches that intermediate horizon."
            },
            {
                q: "When should an allocation be revised?",
                options: [
                    "When markets rise or fall sharply",
                    "When the deadlines of your plans change",
                    "Every month, to stay responsive"
                ],
                a: 1,
                explication: "An allocation is set calmly, from known dates. Revising it with the news means buying dear and selling low."
            }
        ],

        // ---------------------------------------------------------------
        "fees": [
            // Set 1
            {
                q: "What distinguishes fees from performance?",
                options: [
                    "Fees are certain, performance is a hypothesis",
                    "Fees vary every year, performance is stable",
                    "Nothing, both are unpredictable"
                ],
                a: 0,
                explication: "Fees will be taken whatever happens, in good years as in bad. They are the only component of return known in advance."
            },
            {
                q: "Over 30 years on €20,000 invested at 6%, what does one extra point of annual fees cost?",
                options: [
                    "About €2,000",
                    "About €29,000, a quarter of the result",
                    "About €6,000"
                ],
                a: 1,
                explication: "€113,000 with 0.2% of fees, against €84,000 with 1.2%. The gap exceeds the capital invested at the start."
            },
            {
                q: "How are a fund's management fees taken?",
                options: [
                    "By an annual invoice sent to the client",
                    "Silently, from the assets, deducted from the performance shown",
                    "Only at the moment of selling"
                ],
                a: 1,
                explication: "They never appear as a debit line. That is precisely what makes them hard to notice."
            },
            // Set 2
            {
                q: "Why is the effect of fees so violent over a long period?",
                options: [
                    "Because they rise every year",
                    "Because they also deprive you of the interest the lost return would have produced",
                    "Because they are taken twice"
                ],
                a: 1,
                explication: "It is compound interest running backwards: every euro of fees is a euro that will never produce interest in the following years."
            },
            {
                q: "Which criterion should you compare first between two equivalent products?",
                options: [
                    "Their performance last year",
                    "Their annual fees",
                    "The number of stars given by comparison sites"
                ],
                a: 1,
                explication: "Past performance does not repeat reliably; fees repeat identically every year."
            },
            {
                q: "What fees are added to the fund's own inside a French assurance-vie contract?",
                options: [
                    "None, the fund includes everything",
                    "Annual wrapper fees on unit-linked funds",
                    "A state tax of 2%"
                ],
                a: 1,
                explication: "Fees stack: the fund's, the contract's, sometimes entry fees on every contribution. You have to ask for the total."
            }
        ],

        // ---------------------------------------------------------------
        "choosing-a-wrapper": [
            // Set 1
            {
                q: "What does the “wrapper” mean when investing?",
                options: [
                    "The container: PEA, securities account, assurance-vie",
                    "The maximum amount you can invest",
                    "The contract signed at opening"
                ],
                a: 0,
                explication: "The content — shares, ETFs — can be the same. What changes is the tax and the exit conditions."
            },
            {
                q: "After five years, what levies remain on the gains of a French PEA?",
                options: [
                    "No levy at all",
                    "Social levies only",
                    "Income tax only"
                ],
                a: 1,
                explication: "The exemption applies to income tax. The 17.2% social levies remain due."
            },
            {
                q: "On €10,000 of gains, what is the gap between a securities account and a PEA held over 5 years?",
                options: [
                    "None, the tax is identical",
                    "About €1,280 in favour of the PEA",
                    "About €5,000 in favour of the PEA"
                ],
                a: 1,
                explication: "€3,000 of tax on the securities account (30%) against about €1,720 on the PEA (17.2%). Same fund, same performance: only the container differs."
            },
            // Set 2
            {
                q: "When does the PEA's five-year clock start?",
                options: [
                    "At the first significant contribution",
                    "At the opening of the plan",
                    "At the first purchase of securities"
                ],
                a: 1,
                explication: "Opening a PEA with a modest sum starts the clock. Waiting until you “have enough” means giving up years of free seniority."
            },
            {
                q: "What is the main restriction of the PEA?",
                options: [
                    "It accepts only European shares and funds",
                    "It is reserved for the over-40s",
                    "Withdrawals are impossible before retirement"
                ],
                a: 0,
                explication: "The securities account, by contrast, has no geographic constraint — but its tax applies from the first euro of gain."
            },
            {
                q: "Which wrapper is “the best”?",
                options: [
                    "The PEA, in every case",
                    "The assurance-vie, in every case",
                    "The question is badly put: they answer different needs"
                ],
                a: 2,
                explication: "You choose the one matching the deadline and the content you have in mind, not the one that would be superior in the abstract."
            }
        ],

        // ---------------------------------------------------------------
        "investing-over-time": [
            // Set 1
            {
                q: "What do regular contributions really bring?",
                options: [
                    "A higher average return",
                    "The removal of the question of when to enter",
                    "A guarantee against losses"
                ],
                a: 1,
                explication: "On average they even return slightly less than investing everything at once. Their benefit is to make the wait bearable and to avoid endless postponement."
            },
            {
                q: "€200 a month at 6%: what capital after 20 years, for €48,000 paid in?",
                options: [
                    "About €55,000",
                    "About €92,000",
                    "About €150,000"
                ],
                a: 1,
                explication: "The interest ends up exceeding the contributions. Over 10 years only, the same effort produces about €33,000."
            },
            {
                q: "What does rebalancing consist of?",
                options: [
                    "Selling what is falling to limit losses",
                    "Returning to the target allocation, once a year",
                    "Changing allocation according to economic forecasts"
                ],
                a: 1,
                explication: "Without rebalancing, the pocket that grows most takes an increasing share: the risk rises without any decision being taken."
            },
            // Set 2
            {
                q: "Why is rebalancing counter-intuitive?",
                options: [
                    "It requires topping up whatever did worst",
                    "It forces you to sell everything each year",
                    "It costs more than it brings in"
                ],
                a: 0,
                explication: "It is precisely that discomfort which maintains the level of risk chosen at the start."
            },
            {
                q: "An allocation planned at 60% equities drifts to 75% after good years. What has happened?",
                options: [
                    "A mistake by the intermediary",
                    "The risk has risen with no conscious decision",
                    "Nothing abnormal, just let it run"
                ],
                a: 1,
                explication: "The drift is mechanical. It exposes you more than you had accepted, at the precise moment markets are high."
            },
            {
                q: "How often should you check a long-term portfolio?",
                options: [
                    "Every day, to stay responsive",
                    "An annual appointment is enough",
                    "Never, it should not be touched again"
                ],
                a: 1,
                explication: "Daily checking multiplies the occasions to see red, and so the temptations to act under the influence of emotion."
            }
        ]
    },

    // ===================================================================
    // Summary questions — distinct from those in the subsections
    // ===================================================================
    synthese: [
        // Set 1
        {
            q: "Which decision explains the largest share of the variation in results?",
            options: [
                "The choice of individual funds",
                "The allocation between risky and stable assets",
                "The precise moment of purchase"
            ],
            a: 1,
            explication: "Allocation is the most structural decision, well ahead of the choice of this or that fund."
        },
        {
            q: "Two investors obtain the same gross performance. What will open a gap between them?",
            options: [
                "The fees and the tax wrapper chosen",
                "The number of holdings owned",
                "The bank hosting the account"
            ],
            a: 0,
            explication: "Fees and tax apply every year and at every withdrawal. They are the only two levers genuinely under control."
        },
        {
            q: "Why does duration count for more than the amount invested?",
            options: [
                "Because fees fall over time",
                "Because interest itself produces interest",
                "Because markets always go up"
            ],
            a: 1,
            explication: "Doubling the duration does not double the capital: in the guide's example, it nearly triples it."
        },
        // Set 2
        {
            q: "An adviser cannot state the total annual fees of a contract. What should you conclude?",
            options: [
                "That is normal, those fees vary",
                "The absence of an answer is itself information",
                "You should ask for past performance instead"
            ],
            a: 1,
            explication: "Total fees are a known and documented figure, stated in the key information document. Not providing it is a signal."
        },
        {
            q: "What do allocation, fees, wrapper and regularity have in common?",
            options: [
                "They are elements the investor genuinely controls",
                "They all depend on the economic cycle",
                "They only concern large portfolios"
            ],
            a: 0,
            explication: "None of them requires predicting the markets. That is what makes them decisive, where prediction is not."
        },
        {
            q: "Why do most investment plans fail?",
            options: [
                "Through a calculation error at the start",
                "Through abandonment along the way",
                "Because the products chosen are bad"
            ],
            a: 1,
            explication: "Choosing an allocation is easy; not changing it when it is put to the test is much less so."
        }
    ]
};
