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
                    "It applies, since it was read and accepted",
                    "It is deemed unwritten: it does not apply",
                    "It voids the whole contract"
                ],
                a: 1,
                explication: "The rest of the contract goes on applying."
            },
            {
                q: "What characterises an unfair term?",
                options: [
                    "A significant imbalance between the parties' rights and obligations",
                    "A price that is too high",
                    "Wording that is much too technical for an ordinary reader to understand"
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
                    "The preamble",
                    "The term and the cancellation conditions",
                    "The identity of the parties and their addresses"
                ],
                a: 1,
                explication: "How you get out, with what notice, at what cost: that is where the surprises are."
            },
            {
                q: "Do the terms and conditions form part of the contract?",
                options: [
                    "Yes, as soon as you were able to read them",
                    "No, unless they are signed separately as well",
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
                    "Yes, that is precisely its main purpose",
                    "No, not even by recorded delivery",
                    "Yes, if it is signed by a lawyer"
                ],
                a: 1,
                explication: "It is the costliest mistake in the field: it gives the feeling of having acted."
            },
            {
                q: "What does interrupt limitation?",
                options: [
                    "A chasing email",
                    "A recorded phone call",
                    "Issuing court proceedings, an enforcement measure, or acknowledgement of the debt"
                ],
                a: 2,
                explication: "An interruption restarts a whole fresh period from zero."
            },
            // Series 2
            {
                q: "Which period applies to a trader claiming a sum from a consumer?",
                options: [
                    "5 years",
                    "2 years",
                    "3 years"
                ],
                a: 1,
                explication: "The period depends on who is claiming from whom, and that changes everything."
            },
            {
                q: "What is the difference between suspending and interrupting limitation?",
                options: [
                    "They are two words for the same thing, used interchangeably by lawyers",
                    "Suspension pauses the period; interruption restarts it from zero",
                    "Suspension cancels the period"
                ],
                a: 1,
                explication: "A request for mediation suspends; a claim form interrupts."
            },
            {
                q: "At what date is limitation judged?",
                options: [
                    "The day you write to the other side",
                    "The day you consult a lawyer",
                    "The day the court is seised"
                ],
                a: 2,
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
                    "A modest flat fee, set by the court",
                    "A percentage of the sum actually at stake"
                ],
                a: 0,
                explication: "They are approached by a simple request, and the agreement reached can be approved by a judge."
            },
            {
                q: "Where do you find a company's consumer ombudsman?",
                options: [
                    "From the local court office",
                    "You have to ask the data protection authority",
                    "In its terms and conditions"
                ],
                a: 2,
                explication: "Traders must offer one, and it is free for the consumer."
            },
            {
                q: "What do you risk by going to court without attempting settlement, on a small claim?",
                options: [
                    "Having the claim declared inadmissible",
                    "A fine for bringing a claim judged abusive",
                    "Nothing in particular, the judge will decide"
                ],
                a: 0,
                explication: "In France that attempt is in principle compulsory for small claims."
            },
            // Series 2
            {
                q: "€1,500 claimed, €1,200 of costs, 60% chance: what does the calculation say?",
                options: [
                    "A positive expected gain",
                    "A negative average expected outcome: settling brings in more",
                    "A nil result"
                ],
                a: 1,
                explication: "And that leaves aside the months of waiting and the time spent."
            },
            {
                q: "What is legal aid?",
                options: [
                    "A free consultation at the town hall, on set days",
                    "Cover of all or part of the costs depending on means",
                    "A loan repayable after the case"
                ],
                a: 1,
                explication: "The ceilings are revised each year: check them on the official portal."
            },
            {
                q: "Which question should you ask before starting an action?",
                options: [
                    "Am I morally right?",
                    "Is the court nearby, and easy to get to?",
                    "On the other side, is there anything to pay with?"
                ],
                a: 2,
                explication: "Winning and being paid are two distinct stages, and enforcement has its own cost."
            }
        ],

        // ---------------------------------------------------------------
        "your-personal-data": [
            // Series 1
            {
                q: "How long does an organisation have to answer an access request?",
                options: [
                    "One week",
                    "Six months",
                    "One month, extendable by two if the request is complex"
                ],
                a: 2,
                explication: "If it extends, it must tell you."
            },
            {
                q: "Do you have to justify a request to access your data?",
                options: [
                    "Yes, you must show a legitimate interest",
                    "No, no reason has to be given",
                    "Yes, in the event of a dispute only"
                ],
                a: 1,
                explication: "A three-line email is enough."
            },
            {
                q: "What does the right to portability allow?",
                options: [
                    "Getting your data back in a reusable format",
                    "Having your data deleted",
                    "Changing supplier free of charge, and without notice"
                ],
                a: 0,
                explication: "It is one of the least known rights, and one of the most useful."
            },
            // Series 2
            {
                q: "Is the right to erasure absolute?",
                options: [
                    "Yes, without exception of any kind",
                    "Yes, except for banks",
                    "No: it gives way to a legal retention obligation"
                ],
                a: 2,
                explication: "Objecting to marketing, by contrast, admits no exception."
            },
            {
                q: "What do you do if the organisation does not answer in time?",
                options: [
                    "Go straight to court and ask a judge for an order against them",
                    "Wait another month",
                    "File a free complaint with your data protection authority"
                ],
                a: 2,
                explication: "Silence is itself admissible grounds."
            },
            {
                q: "Can the data protection authority obtain compensation for you?",
                options: [
                    "No: it is a supervisory body, not a court",
                    "Yes, it sets the amount",
                    "Yes, up to the amount of harm you declare"
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
                "Avoiding all written contracts",
                "Knowing the codes by heart",
                "Enforcing your rights, and knowing when it is worth it"
            ],
            a: 2,
            explication: "It is the level where we face a question the law never asks."
        },
        {
            q: "What do the court conciliator and the data protection authority have in common?",
            options: [
                "Both are free and largely under-used",
                "Both hand down judgments that bind the parties",
                "Both require you to instruct a lawyer"
            ],
            a: 0,
            explication: "The cheapest routes are the least travelled."
        },
        {
            q: "Two months of exchanging letters with the other side: what is the risk?",
            options: [
                "The other side can withdraw",
                "The letters lose their value as evidence",
                "The limitation period keeps running throughout"
            ],
            a: 2,
            explication: "If the deadline is approaching, you must go to court or formally start a mediation."
        },
        {
            q: "A contract contains a clause removing the legal guarantee. What do you do?",
            options: [
                "Ask a judge to annul it",
                "Nothing in particular: it is deemed unwritten and does not apply",
                "Refuse to sign, otherwise it will hold"
            ],
            a: 1,
            explication: "There is nothing to have annulled — legally it never existed."
        },
        {
            q: "Which two questions decide more often than the merits of the file?",
            options: [
                "Which court has jurisdiction, and which lawyer to choose?",
                "Am I still within the deadline, and does the other side have anything to pay with?",
                "Do I have a written contract, and is it signed?"
            ],
            a: 1,
            explication: "They are asked before starting anything."
        },
        {
            q: "If you apply only one thing from this level, what should it be?",
            options: [
                "Checking the limitation period before anything else",
                "Reading the terms and conditions in full",
                "Always going to court"
            ],
            a: 0,
            explication: "A mistake on that point cannot be undone, whatever the merits of the file."
        }
    ]
};
