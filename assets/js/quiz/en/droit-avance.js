// ===================================
// QUESTION BANK — LAW & PROCEDURES, ADVANCED LEVEL (EN)
// ===================================
// 6 questions per sub-section: 3 shown, the other 3 take over after two weeks.
// The summary questions are distinct from the sub-section ones — none is reused.
//
// FRENCH LAW. No question is about an amount or a threshold.
// Chaque question qui cite une règle la nomme comme française, sauf les
// droits RGPD, qui valent dans toute l'Union européenne.
//
// Les clefs de « sections » sont les ancres ANGLAISES de la page traduite :
// quiz.js apparie la banque au « id » du titre h3.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "reading-a-contract": [
            // Series 1
            {
                q: "What becomes of an unfair term in a signed contract?",
                options: [
                    "It is deemed unwritten: it does not apply",
                    "It applies since it was accepted",
                    "It voids the whole contract"
                ],
                a: 0,
                explication: "The rest of the contract goes on applying."
            },
            {
                q: "What characterises an unfair term?",
                options: [
                    "A significant imbalance between the parties' rights and obligations",
                    "A price that is too high",
                    "Wording that is too technical"
                ],
                a: 0,
                explication: "The French consumer code sets out two lists, by strength of presumption."
            },
            {
                q: "A clause forbidding recourse to a court is:",
                options: [
                    "Unfair, and therefore of no effect",
                    "Valid if it provides for arbitration",
                    "Valid between traders and consumers"
                ],
                a: 0,
                explication: "As is one imposing a distant court."
            },
            // Series 2
            {
                q: "What is the first place to read in a contract before signing?",
                options: [
                    "The term and the cancellation conditions",
                    "The preamble",
                    "The identity of the parties"
                ],
                a: 0,
                explication: "How you get out, with what notice, at what cost: that is where the surprises are."
            },
            {
                q: "Do the terms and conditions form part of the contract?",
                options: [
                    "Yes, as soon as you were able to read them",
                    "No, unless signed separately",
                    "Only if attached on paper"
                ],
                a: 0,
                explication: "Hence the importance of whatever is referred to them."
            },
            {
                q: "Is “you signed” a valid argument for setting aside the legal guarantee?",
                options: [
                    "No: what the contract takes from the law, the law takes back",
                    "Yes, signing is acceptance",
                    "Yes, if the clause was in bold"
                ],
                a: 0,
                explication: "A signature commits you on what is negotiable, not on what is not."
            }
        ],

        // ---------------------------------------------------------------
        "limitation-periods": [
            // Series 1
            {
                q: "What is the general limitation period in French law?",
                options: [
                    "2 years",
                    "5 years",
                    "10 years"
                ],
                a: 1,
                explication: "From the day you knew or should have known the facts."
            },
            {
                q: "Does a formal demand interrupt limitation?",
                options: [
                    "No, not even by recorded delivery",
                    "Yes, that is its main purpose",
                    "Yes, if signed by a lawyer"
                ],
                a: 0,
                explication: "It is the costliest mistake in the field: it gives the feeling of having acted."
            },
            {
                q: "What does interrupt limitation?",
                options: [
                    "Issuing court proceedings, an enforcement measure, or acknowledgement of the debt",
                    "A chasing email",
                    "A recorded phone call"
                ],
                a: 0,
                explication: "An interruption restarts a whole fresh period from zero."
            },
            // Series 2
            {
                q: "Which period applies to a trader claiming a sum from a consumer?",
                options: [
                    "2 years",
                    "5 years",
                    "3 years"
                ],
                a: 0,
                explication: "The period depends on who is claiming from whom, and that changes everything."
            },
            {
                q: "What is the difference between suspending and interrupting limitation?",
                options: [
                    "Suspension pauses the period; interruption restarts it from zero",
                    "They are two words for the same thing",
                    "Suspension cancels the period"
                ],
                a: 0,
                explication: "A request for mediation suspends; a claim form interrupts."
            },
            {
                q: "At what date is limitation judged?",
                options: [
                    "The day the court is seised",
                    "The day you write to the other side",
                    "The day you consult a lawyer"
                ],
                a: 0,
                explication: "Negotiating up to the deadline benefits the other side equally, in good faith or bad."
            }
        ],

        // ---------------------------------------------------------------
        "settling-without-a-judge": [
            // Series 1
            {
                q: "What does the court conciliator cost in France?",
                options: [
                    "Nothing: they are a volunteer and free",
                    "A modest flat fee",
                    "A percentage of the sum at stake"
                ],
                a: 0,
                explication: "They are approached by a simple request, and the agreement reached can be approved by a judge."
            },
            {
                q: "Where do you find a company's consumer ombudsman?",
                options: [
                    "In its terms and conditions",
                    "From the court",
                    "You have to ask the data protection authority"
                ],
                a: 0,
                explication: "Traders must offer one, and it is free for the consumer."
            },
            {
                q: "What do you risk by going to court without attempting settlement, on a small claim?",
                options: [
                    "Having the claim declared inadmissible",
                    "A fine",
                    "Nothing in particular"
                ],
                a: 0,
                explication: "In France that attempt is in principle compulsory for small claims."
            },
            // Series 2
            {
                q: "€1,500 claimed, €1,200 of costs, 60% chance: what does the calculation say?",
                options: [
                    "A negative average expected outcome: settling brings in more",
                    "A positive expected gain",
                    "A nil result"
                ],
                a: 0,
                explication: "And that leaves aside the months of waiting and the time spent."
            },
            {
                q: "What is legal aid?",
                options: [
                    "Cover of all or part of the costs depending on means",
                    "A free consultation at the town hall",
                    "A loan repayable after the case"
                ],
                a: 0,
                explication: "The ceilings are revised each year: check them on the official portal."
            },
            {
                q: "Which question should you ask before starting an action?",
                options: [
                    "On the other side, is there anything to pay with?",
                    "Am I morally right?",
                    "Is the court nearby?"
                ],
                a: 0,
                explication: "Winning and being paid are two distinct stages, and enforcement has its own cost."
            }
        ],

        // ---------------------------------------------------------------
        "your-personal-data": [
            // Series 1
            {
                q: "How long does an organisation have to answer an access request?",
                options: [
                    "One month, extendable by two if the request is complex",
                    "One week",
                    "Six months"
                ],
                a: 0,
                explication: "If it extends, it must tell you."
            },
            {
                q: "Do you have to justify a request to access your data?",
                options: [
                    "No, no reason has to be given",
                    "Yes, you must show a legitimate interest",
                    "Yes, in the event of a dispute only"
                ],
                a: 0,
                explication: "A three-line email is enough."
            },
            {
                q: "What does the right to portability allow?",
                options: [
                    "Getting your data back in a reusable format",
                    "Having your data deleted",
                    "Changing supplier free of charge"
                ],
                a: 0,
                explication: "It is one of the least known rights, and one of the most useful."
            },
            // Series 2
            {
                q: "Is the right to erasure absolute?",
                options: [
                    "No: it gives way to a legal retention obligation",
                    "Yes, without exception",
                    "Yes, except for banks"
                ],
                a: 0,
                explication: "Objecting to marketing, by contrast, admits no exception."
            },
            {
                q: "What do you do if the organisation does not answer in time?",
                options: [
                    "File a free complaint with your data protection authority",
                    "Go straight to court",
                    "Wait another month"
                ],
                a: 0,
                explication: "Silence is itself admissible grounds."
            },
            {
                q: "Can the data protection authority obtain compensation for you?",
                options: [
                    "No: it is a supervisory body, not a court",
                    "Yes, it sets the amount",
                    "Yes, up to the harm declared"
                ],
                a: 0,
                explication: "It intervenes with the organisation, which is enough in a large share of cases."
            }
        ]
    },

    // Summary questions — distinct from the sub-section ones
    synthese: [
        {
            q: "What is the thread running through this level?",
            options: [
                "Enforcing your rights, and knowing when it is worth it",
                "Avoiding all written contracts",
                "Knowing the codes by heart"
            ],
            a: 0,
            explication: "It is the level where we face a question the law never asks."
        },
        {
            q: "What do the court conciliator and the data protection authority have in common?",
            options: [
                "Both are free and largely under-used",
                "Both hand down judgments",
                "Both require a lawyer"
            ],
            a: 0,
            explication: "The cheapest routes are the least travelled."
        },
        {
            q: "Two months of exchanging letters with the other side: what is the risk?",
            options: [
                "The limitation period keeps running throughout",
                "The other side can withdraw",
                "The letters lose their value"
            ],
            a: 0,
            explication: "If the deadline is approaching, you must go to court or formally start a mediation."
        },
        {
            q: "A contract contains a clause removing the legal guarantee. What do you do?",
            options: [
                "Nothing in particular: it is deemed unwritten and does not apply",
                "Ask a judge to annul it",
                "Refuse to sign, otherwise it will hold"
            ],
            a: 0,
            explication: "There is nothing to have annulled — legally it never existed."
        },
        {
            q: "Which two questions decide more often than the merits of the file?",
            options: [
                "Am I still within the deadline, and does the other side have anything to pay with?",
                "Which court has jurisdiction, and which lawyer to choose?",
                "Do I have a written contract, and is it signed?"
            ],
            a: 0,
            explication: "They are asked before starting anything."
        },
        {
            q: "If you apply only one thing from this level, what should it be?",
            options: [
                "Checking the limitation period before anything else",
                "Reading terms and conditions in full",
                "Always going to court"
            ],
            a: 0,
            explication: "A mistake on that point cannot be undone, whatever the merits of the file."
        }
    ]
};
