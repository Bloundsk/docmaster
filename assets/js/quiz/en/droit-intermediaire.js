// ===================================
// QUESTION BANK — LAW & PROCEDURES, INTERMEDIATE LEVEL (EN)
// ===================================
// 6 questions per sub-section: 3 shown, the other 3 take over after two weeks.
// The summary questions are distinct from the sub-section ones — none is reused.
//
// FRENCH LAW. No question is about an amount or a threshold.
// Chaque question qui cite une règle la nomme comme française.
//
// Les clefs de « sections » sont les ancres ANGLAISES de la page traduite :
// quiz.js apparie la banque au « id » du titre h3.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "renting-a-home": [
            // Series 1
            {
                q: "What happens when there is no check-in inventory?",
                options: [
                    "The property is presumed to have been handed over in good condition",
                    "The tenancy agreement is void",
                    "The deposit is returned automatically"
                ],
                a: 0,
                explication: "The burden turns against the tenant, who has nothing left to compare."
            },
            {
                q: "Is a clause forbidding you to host a relative valid?",
                options: [
                    "Yes, if it is signed",
                    "No: it is deemed unwritten",
                    "Yes, in furnished lettings only"
                ],
                a: 1,
                explication: "Some clauses are prohibited and have no effect, whatever the signature."
            },
            {
                q: "By how much is a deposit returned late increased, in France?",
                options: [
                    "10% of the rent excluding charges per month started",
                    "5% of the deposit per month",
                    "There is no increase"
                ],
                a: 0,
                explication: "It is owed as of right. It is not negotiated, it is claimed."
            },
            // Series 2
            {
                q: "What is the deadline for returning the deposit?",
                options: [
                    "1 month if the check-out inventory matches, 2 months otherwise",
                    "2 months in every case",
                    "3 months"
                ],
                a: 0,
                explication: "Hence the value of a check-out inventory that finds nothing new."
            },
            {
                q: "Can the landlord retain a sum with no supporting document?",
                options: [
                    "No: a quote, an invoice or a joint report is needed",
                    "Yes, if they announce it in a letter",
                    "Yes, up to the amount of the deposit"
                ],
                a: 0,
                explication: "“Making good: €400” with nothing attached is not enough."
            },
            {
                q: "What must the landlord take into account before charging for making good?",
                options: [
                    "Wear and tear",
                    "The price of a new one",
                    "The length of the tenancy only"
                ],
                a: 0,
                explication: "A ten-year-old carpet cannot be charged at the price of a new one."
            }
        ],

        // ---------------------------------------------------------------
        "giving-notice": [
            // Series 1
            {
                q: "How long is the notice period on a furnished tenancy in France?",
                options: [
                    "1 month",
                    "2 months",
                    "3 months"
                ],
                a: 0,
                explication: "Against three months unfurnished, barring a case for reduction."
            },
            {
                q: "When does notice start running?",
                options: [
                    "From posting the letter",
                    "From the landlord's receipt of it",
                    "From the date written in the letter"
                ],
                a: 1,
                explication: "Two days in the post can shift the move-out, and therefore a whole month's rent."
            },
            {
                q: "What happens if you claim a shortened notice without giving the reason in writing?",
                options: [
                    "The notice stays three months",
                    "The reason can be given orally afterwards",
                    "The notice is void"
                ],
                a: 0,
                explication: "The missing sentence costs two months' rent, even if the condition was met."
            },
            // Series 2
            {
                q: "Is notice given by email valid?",
                options: [
                    "No: recorded delivery, a judicial officer, or handed over against signature",
                    "Yes, if read receipt is confirmed",
                    "Yes, for furnished lettings only"
                ],
                a: 0,
                explication: "The form is not a formality: it is what makes the date enforceable."
            },
            {
                q: "Does rent stay due throughout the notice period?",
                options: [
                    "Yes, unless the property is re-let before then with the landlord's agreement",
                    "No, it stops as soon as notice is sent",
                    "Yes, without exception"
                ],
                a: 0,
                explication: "In that case it stops being due from the new tenancy."
            },
            {
                q: "Why state your new address in the notice letter?",
                options: [
                    "The deposit must be returned there",
                    "It is a legal obligation",
                    "For forwarding the post"
                ],
                a: 0,
                explication: "Without it, the return bogs down."
            }
        ],

        // ---------------------------------------------------------------
        "employment-contract": [
            // Series 1
            {
                q: "What is the normal form of the employment contract?",
                options: [
                    "The permanent contract",
                    "The fixed-term contract",
                    "Both equally"
                ],
                a: 0,
                explication: "A fixed-term contract is an exception, limited to listed cases and its reason must be written."
            },
            {
                q: "What does a fixed-term contract with no writing or no valid reason risk?",
                options: [
                    "Reclassification as permanent",
                    "A fine for the employee",
                    "Nothing in particular"
                ],
                a: 0,
                explication: "It is one of the most frequent employment disputes."
            },
            {
                q: "Can a probation period be renewed tacitly?",
                options: [
                    "No: it needs a sector agreement, a clause in the contract and your written agreement",
                    "Yes, if the employer decides so",
                    "Yes, once only"
                ],
                a: 0,
                explication: "Without those three conditions it ends at its initial length."
            },
            // Series 2
            {
                q: "What is the notice period during probation?",
                options: [
                    "A period to observe when ending probation, growing with length of service",
                    "The resignation notice",
                    "The delay before the first payslip"
                ],
                a: 0,
                explication: "24 hours before 8 days, 48 hours up to a month, 2 weeks after a month, 1 month after three."
            },
            {
                q: "Where do you find the name of your sector agreement?",
                options: [
                    "On the payslip",
                    "On your health insurance card",
                    "Nowhere, you have to ask for it"
                ],
                a: 0,
                explication: "It very often provides better than the labour code: notice, bonuses, grading."
            },
            {
                q: "A non-compete clause with no financial consideration is:",
                options: [
                    "Void",
                    "Valid if limited in time",
                    "Valid since it was signed"
                ],
                a: 0,
                explication: "Many contracts still contain one."
            }
        ],

        // ---------------------------------------------------------------
        "registering-a-business": [
            // Series 1
            {
                q: "Is there an amount below which a regular activity need not be registered?",
                options: [
                    "No: even nil turnover has to be declared",
                    "Yes, an annual threshold",
                    "Yes, if the activity is occasional"
                ],
                a: 0,
                explication: "What does exist are simpler regimes depending on the amount — hence the confusion."
            },
            {
                q: "Under the micro-entrepreneur regime, how are actual costs treated?",
                options: [
                    "They are not deductible: the allowance is a flat rate",
                    "They are deducted against receipts",
                    "They are deducted at half their value"
                ],
                a: 0,
                explication: "A high-expense activity is penalised by it, whatever its turnover."
            },
            {
                q: "Which question decides between the flat-rate and the actual-accounts regime?",
                options: [
                    "What share of my receipts goes out in expenses?",
                    "How many customers do I have?",
                    "How long have I been trading?"
                ],
                a: 0,
                explication: "It is the only one that counts when choosing."
            },
            // Series 2
            {
                q: "Where should you check the thresholds and rates?",
                options: [
                    "On the official government and social security sites",
                    "In a recent blog article",
                    "From another self-employed person"
                ],
                a: 0,
                explication: "They are revised regularly: a value copied elsewhere ages without warning."
            },
            {
                q: "What does a single-member company bring over a sole trader?",
                options: [
                    "Separation of assets and the possibility of taking on partners",
                    "Fewer formalities",
                    "An exemption from contributions"
                ],
                a: 0,
                explication: "In exchange for heavier administration."
            },
            {
                q: "Does a non-profit association escape the tax rules of a profit-making activity?",
                options: [
                    "No: if the activity is in reality profit-making, it is taxed as such",
                    "Yes, that is its main advantage",
                    "Yes, below a certain amount"
                ],
                a: 0,
                explication: "An association is for an activity with no distribution of profits, not an exemption."
            }
        ]
    },

    // Summary questions — distinct from the sub-section ones
    synthese: [
        {
            q: "What do the three situations in this level have in common?",
            options: [
                "Everything is decided at signature, and nothing is recovered without evidence",
                "They all fall under the same code",
                "They all assume a lawyer"
            ],
            a: 0,
            explication: "Finding a home, working, registering a business: the same reflex applies."
        },
        {
            q: "What do the check-in inventory and the sector agreement have in common?",
            options: [
                "Both already exist and are simply ignored",
                "Both are optional",
                "Both are requested from the administration"
            ],
            a: 0,
            explication: "The most useful rights are often the ones nobody thinks to look up."
        },
        {
            q: "A tenant leaves without claiming the increase on a deposit returned late. What do they lose?",
            options: [
                "A sum owed as of right, which nobody pays spontaneously",
                "Nothing, it is paid automatically",
                "The right to challenge the deductions"
            ],
            a: 0,
            explication: "The increase is not negotiated: it is claimed."
        },
        {
            q: "A contract clause is less favourable than the sector agreement. Which applies?",
            options: [
                "The sector agreement",
                "The contract, since it was signed",
                "Whichever is more recent"
            ],
            a: 0,
            explication: "Whatever the contract provides that is less favourable than the law or the agreement does not apply."
        },
        {
            q: "Which one-off check pays off most in this level?",
            options: [
                "Reading your sector agreement's articles on notice and grading",
                "Re-reading your tenancy agreement every year",
                "Changing legal form"
            ],
            a: 0,
            explication: "Ten minutes that often reveal rights nobody mentioned."
        },
        {
            q: "If you apply only one thing from this level, what should it be?",
            options: [
                "Taking your time over the check-in inventory, and photographing it",
                "Signing faster",
                "Choosing the simplest regime by default"
            ],
            a: 0,
            explication: "Twenty minutes on arrival are worth several hundred euros on departure."
        }
    ]
};
