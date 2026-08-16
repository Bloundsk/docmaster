// ===================================
// QUESTION BANK — FINANCE, ADVANCED LEVEL
// ===================================
// 6 questions per subsection: 3 shown, the other 3 take over after two weeks.
// The summary questions are distinct from the subsection ones — none is used
// twice.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "order-of-withdrawal": [
            // Set 1
            {
                q: "What is taxed when you make a withdrawal?",
                options: [
                    "The whole amount withdrawn",
                    "Only the share of gains contained in the withdrawal",
                    "The capital originally paid in"
                ],
                a: 1,
                explication: "A withdrawal is deemed to consist of capital — never taxed — and gains. A contract containing 20% of gains triggers tax on only a fifth of the amount."
            },
            {
                q: "What happens to the annual allowance of a French assurance-vie if it is not used?",
                options: [
                    "It carries over to the following year",
                    "It is permanently lost",
                    "It is converted into a tax credit"
                ],
                a: 1,
                explication: "It renews every year but does not carry forward. Closing a contract in one go wastes all the following years' allowances."
            },
            {
                q: "Why does the order of withdrawal change the net amount received?",
                options: [
                    "Because each wrapper has its own exit tax",
                    "Because banks apply different fees",
                    "Because the tax rate changes with the day of the month"
                ],
                a: 0,
                explication: "On identical capital and performance, drawing from one wrapper rather than another changes the tax — sometimes by more than €1,200 on €20,000 withdrawn."
            },
            // Set 2
            {
                q: "What is the point of spreading a withdrawal over two calendar years?",
                options: [
                    "Reducing brokerage fees",
                    "Using the annual allowance twice",
                    "Avoiding social levies"
                ],
                a: 1,
                explication: "Concentrating the gains into a single tax year takes you past the allowance, and everything above is taxed at full rate."
            },
            {
                q: "A withdrawal from a French PEA held over five years is subject to what?",
                options: [
                    "Nothing at all",
                    "Social levies, but not income tax",
                    "Income tax, but not social levies"
                ],
                a: 1,
                explication: "The advantage applies to income tax. The 17.2% of social levies remain due in every case."
            },
            {
                q: "Which phase of investing is most often neglected?",
                options: [
                    "The choice of products",
                    "The exit, that is, how you withdraw",
                    "Opening the account"
                ],
                a: 1,
                explication: "People think hard about how to invest. Yet it is at withdrawal that tax really materialises."
            }
        ],

        // ---------------------------------------------------------------
        "bonds-and-rates": [
            // Set 1
            {
                q: "What happens to a bond you already hold when rates rise?",
                options: [
                    "Its price falls",
                    "Its price rises",
                    "Its price does not move"
                ],
                a: 0,
                explication: "A security paying 1% becomes unsellable at its original price if new issues pay 3%. Its price falls until its yield becomes comparable."
            },
            {
                q: "What does a bond's duration measure?",
                options: [
                    "The time left before it is repaid",
                    "Its sensitivity to changes in rates",
                    "The financial strength of the borrower"
                ],
                a: 1,
                explication: "Rule of thumb: a rate rise of 1 point pushes the price down by about 1% per year of duration."
            },
            {
                q: "Rates +1 point: what approximate fall for a bond with a duration of 10 years?",
                options: [
                    "About 1%",
                    "About 10%",
                    "About 100%"
                ],
                a: 1,
                explication: "Against only about 2% for a duration of 2 years. A ratio of one to five between two investments both described as “without default risk”."
            },
            // Set 2
            {
                q: "What does the safety of a government bond concern?",
                options: [
                    "The stability of its price",
                    "The borrower's risk of default",
                    "Both at once"
                ],
                a: 1,
                explication: "A long-duration government bond fund can lose more than 15% in a year without any government having defaulted."
            },
            {
                q: "What is the difference between holding a bond directly and holding a bond fund?",
                options: [
                    "The fund has no maturity and continually rolls its holdings",
                    "The fund guarantees the capital, the bond does not",
                    "None, they are two words for the same thing"
                ],
                a: 0,
                explication: "A bond held to maturity repays its face value: the fall is erased. In a fund it is real, and is offset over a period close to its duration."
            },
            {
                q: "Where should you put a sum you will need in two years?",
                options: [
                    "In long bonds, which pay more",
                    "In short-duration products, or ones with no price risk",
                    "It does not matter, bonds are safe"
                ],
                a: 1,
                explication: "A near-term need cannot take a price fall that would take ten years to work off."
            }
        ],

        // ---------------------------------------------------------------
        "real-diversification": [
            // Set 1
            {
                q: "What characterises real diversification?",
                options: [
                    "The number of holdings owned",
                    "The fact that the assets do not fall at the same time",
                    "Having at least ten different funds"
                ],
                a: 1,
                explication: "Twenty shares from the same country and the same sector form a single position cut into twenty pieces."
            },
            {
                q: "What weight does France represent in world stock market capitalisation?",
                options: [
                    "About 3%",
                    "About 15%",
                    "About 30%"
                ],
                a: 0,
                explication: "Yet French savers typically hold more than half of their equity pocket in domestic shares — an over-exposure by a factor of sixteen. The same pattern shows up in every country."
            },
            {
                q: "What happens to correlations during a crisis?",
                options: [
                    "They fall, and diversification protects better",
                    "They rise, and assets fall together more",
                    "They stay stable"
                ],
                a: 1,
                explication: "At the precise moment you are counting on diversification, it works less well. It softens, it does not protect."
            },
            // Set 2
            {
                q: "What is home bias?",
                options: [
                    "The tendency to overweight companies from your own country",
                    "Investing from home",
                    "A tax on foreign investments"
                ],
                a: 0,
                explication: "The saver then concentrates their wealth on the economy that already holds their job and often their home."
            },
            {
                q: "An American index gains 10% in dollars. What does an investor in euros receive?",
                options: [
                    "10%, the currency has no effect",
                    "It depends on how the dollar moved against the euro",
                    "Always less than 10%"
                ],
                a: 1,
                explication: "If the dollar has fallen by as much, the gain in euros is nil. Over a few years, this effect can dominate the result."
            },
            {
                q: "How do you check that funds do not overlap?",
                options: [
                    "By comparing their past performance",
                    "By comparing their main holdings",
                    "By checking that they have different names"
                ],
                a: 1,
                explication: "A “world” fund, a “North America” fund and a “technology” fund often contain the same large companies three times over."
            }
        ],

        // ---------------------------------------------------------------
        "the-behavioural-factor": [
            // Set 1
            {
                q: "What do we observe when comparing a fund's performance with that of its holders?",
                options: [
                    "Holders obtain on average less than the fund",
                    "Holders obtain on average more",
                    "The two are identical by construction"
                ],
                a: 0,
                explication: "Published performance assumes you stayed invested from beginning to end. In practice contributions arrive after the rises and withdrawals after the falls."
            },
            {
                q: "What becomes of €10,000 if you miss the 20 best sessions, against €60,000 by staying invested?",
                options: [
                    "About €50,000",
                    "About €18,000",
                    "About €5,000"
                ],
                a: 1,
                explication: "Some twenty days, out of thousands, explain two thirds of the result. Nobody can identify them in advance."
            },
            {
                q: "Where are the best market sessions most often located?",
                options: [
                    "In calm, rising periods",
                    "Immediately alongside the worst ones, in the middle of the turmoil",
                    "Spread evenly through the year"
                ],
                a: 1,
                explication: "That is why stepping out to “wait for things to calm down” almost always means missing the rebound."
            },
            // Set 2
            {
                q: "How does loss aversion show itself?",
                options: [
                    "A loss is felt about twice as strongly as an equivalent gain",
                    "You refuse any risky investment",
                    "You quickly forget your losses"
                ],
                a: 0,
                explication: "This asymmetry explains why a 20% fall prompts selling while a 20% rise does not prompt buying."
            },
            {
                q: "What remedy does the guide propose against decisions taken in the heat of the moment?",
                options: [
                    "Trusting your intuition more",
                    "Writing down, in the calm, your allocation and what you plan to do in a fall",
                    "Handing the management to a third party"
                ],
                a: 1,
                explication: "The remedy is not strength of character: a document written in the calm holds up better than a resolution taken in the heat."
            },
            {
                q: "Why do people overestimate their ability to withstand a sharp fall?",
                options: [
                    "Because the real thing comes with an anxious context absent from the theoretical exercise",
                    "Because falls are sharper than expected",
                    "Because the statistics are misleading"
                ],
                a: 0,
                explication: "Alarming headlines, worried people around you, sometimes a job under threat: none of that exists when you merely imagine the scene."
            }
        ]
    },

    // ===================================================================
    // Summary questions — distinct from those in the subsections
    // ===================================================================
    synthese: [
        // Set 1
        {
            q: "What links the mechanisms of this level?",
            options: [
                "They are counter-intuitive before being explained",
                "They only concern large portfolios",
                "They all depend on the economic cycle"
            ],
            a: 0,
            explication: "A bond falling when rates rise, a full portfolio that diversifies nothing, an investor earning less than their fund: each seems absurd, then obvious."
        },
        {
            q: "Two people hold the same portfolio and withdraw the same sum. What can make their net amounts differ?",
            options: [
                "The wrapper they draw from and how the withdrawal is spread",
                "Their bank",
                "Nothing, the net amount is identical"
            ],
            a: 0,
            explication: "The order of withdrawal is a lever in its own right, and one of the few that works without taking any extra risk."
        },
        {
            q: "What information should you look at before adding a bond fund?",
            options: [
                "Its performance last year",
                "Its duration",
                "The number of bonds it holds"
            ],
            a: 1,
            explication: "It indicates the size of the fall to expect if rates rise — the most useful piece of information, ahead of the yield on display."
        },
        // Set 2
        {
            q: "A portfolio contains twenty funds. What can you conclude about its diversification?",
            options: [
                "That it is very diversified",
                "Nothing: it all depends on the overlap between those funds",
                "That it is too expensive"
            ],
            a: 1,
            explication: "The number of holdings measures nothing. All that counts is what falls at the same time."
        },
        {
            q: "Which mistake statistically costs a long-term investor the most?",
            options: [
                "Choosing a slightly more expensive fund",
                "Leaving the market during a fall",
                "Rebalancing too often"
            ],
            a: 1,
            explication: "Missing the best sessions costs more than avoiding the worst ones gains, and the two happen at the same moment."
        },
        {
            q: "What should you take from the gap between a fund's performance and its holders'?",
            options: [
                "That funds publish false figures",
                "That the decisions taken in between have a measurable cost",
                "That fees explain everything"
            ],
            a: 1,
            explication: "This gap comes neither from the fund nor from the fees: it comes from the dates on which you entered and left."
        }
    ]
};
