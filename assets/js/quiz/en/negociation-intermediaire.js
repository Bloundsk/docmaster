// ===================================
// QUESTION BANK — NEGOTIATION, INTERMEDIATE LEVEL (EN)
// ===================================
// 6 questions per sub-section: 3 shown, the other 3 take over after two weeks.
//
// Les clefs de « sections » sont les ancres ANGLAISES de la page traduite :
// quiz.js apparie la banque au « id » du titre h3.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "your-alternative": [
            // Series 1
            {
                q: "Where does power in a negotiation come from?",
                options: [
                    "From the quality of your arguments",
                    "From what you get if you walk away",
                    "From your confidence"
                ],
                a: 1,
                explication: "It is what explains why two equally skilled people do not have the same power."
            },
            {
                q: "What is a BATNA?",
                options: [
                    "The minimum amount the other side will accept",
                    "The average of the offers received",
                    "The best alternative to a negotiated agreement"
                ],
                a: 2,
                explication: "It sets your walk-away point: no offer below it deserves accepting."
            },
            {
                q: "Alternative worth €28,000, offer of €30,000, cost of carrying on €500:",
                options: [
                    "A gain of €2,000 — you have room to continue",
                    "You should accept immediately",
                    "The offer is worse than walking away"
                ],
                a: 0,
                explication: "At €28,200 the offer would still beat walking away, but continuing would cost more than it brings."
            },
            // Series 2
            {
                q: "When do you strengthen your position?",
                options: [
                    "During it, through firmness",
                    "Before the negotiation, by improving your alternative",
                    "At the end, by threatening to leave"
                ],
                a: 1,
                explication: "Getting a second proposal moves the walk-away point."
            },
            {
                q: "What does the other side's alternative tell you?",
                options: [
                    "What they think of you",
                    "Their exact budget",
                    "How far they can go"
                ],
                a: 2,
                explication: "A supplier who has only you as a customer does not negotiate like one with twenty."
            },
            {
                q: "What is “I can easily go elsewhere” worth when it is not true?",
                options: [
                    "It is a proven technique",
                    "It has no effect at all",
                    "It works once, and is paid for if the other side calls the bluff"
                ],
                a: 2,
                explication: "A real alternative, however modest, beats a threat credible for five minutes."
            }
        ],

        // ---------------------------------------------------------------
        "zone-of-agreement": [
            // Series 1
            {
                q: "Buyer's maximum €32,000, seller's minimum €27,000: what is at stake?",
                options: [
                    "The split of €5,000, not the deal itself",
                    "Whether a deal is possible",
                    "The choice of the midpoint"
                ],
                a: 0,
                explication: "Everything said will serve to move the cursor within that range."
            },
            {
                q: "What should you do when there is no zone of agreement on price?",
                options: [
                    "Insist and repeat the arguments",
                    "Drag it out to wear the other side down",
                    "Add a variable: timing, volume, warranty, services"
                ],
                a: 2,
                explication: "A single-variable negotiation is a split; with two, trades become possible."
            },
            {
                q: "Should you announce your maximum limit?",
                options: [
                    "Yes, to save time",
                    "Yes, if the other side asks",
                    "No: announcing it amounts to offering it"
                ],
                a: 2,
                explication: "The limit is there to help you decide, not to be communicated."
            },
            // Series 2
            {
                q: "What does the absence of a zone of agreement mean?",
                options: [
                    "No price suits both sides as things stand",
                    "One of them is lying about their limit",
                    "You should split the difference"
                ],
                a: 0,
                explication: "That is valuable information: it saves weeks."
            },
            {
                q: "What is the negotiation about when a zone of agreement exists?",
                options: [
                    "How that zone is shared",
                    "Whether a deal is possible at all",
                    "The good faith of the parties"
                ],
                a: 0,
                explication: "A deal is already possible: what remains is where you stop within the range."
            },
            {
                q: "Why does a single variable make the negotiation zero-sum?",
                options: [
                    "Because the parties dig in",
                    "Because price is always the hard point",
                    "What one side gains on that variable, the other necessarily loses"
                ],
                a: 2,
                explication: "That is why adding a variable unblocks stuck situations."
            }
        ],

        // ---------------------------------------------------------------
        "anchoring": [
            // Series 1
            {
                q: "Target €29,000, expected offer from them €27,000: what opening offer?",
                options: [
                    "€29,000",
                    "€31,000",
                    "€35,000"
                ],
                a: 1,
                explication: "That is €2,000 above the target, so that the midpoint lands on it."
            },
            {
                q: "Is the advice “never state the first number” sound?",
                options: [
                    "Yes, always",
                    "Yes, except between professionals",
                    "No: whoever opens steers the discussion, provided they stay plausible"
                ],
                a: 2,
                explication: "The work on anchoring contradicts it."
            },
            {
                q: "When is it better to let the other side open?",
                options: [
                    "When you are in a strong position",
                    "When the relationship must last",
                    "When you do not know what the thing being negotiated is worth"
                ],
                a: 2,
                explication: "Opening without information exposes you to anchoring against yourself."
            },
            // Series 2
            {
                q: "What does an opening offer far removed from the market produce?",
                options: [
                    "It disqualifies rather than moves",
                    "A decisive advantage",
                    "No effect at all"
                ],
                a: 0,
                explication: "The other side concludes you do not know the subject, or are not negotiating in good faith."
            },
            {
                q: "What characterises an effective anchor?",
                options: [
                    "It is ambitious and defensible in one sentence",
                    "It is as high as possible",
                    "It is close to the real target"
                ],
                a: 0,
                explication: "Ambition without justification turns against whoever states it."
            },
            {
                q: "Does the anchoring effect disappear when everyone knows the number is negotiable?",
                options: [
                    "Yes, between professionals",
                    "No: it is one of the best replicated effects in the psychology of decision",
                    "Yes, if the number is announced as indicative"
                ],
                a: 1,
                explication: "It has been measured in experts warned about the set-up."
            }
        ],

        // ---------------------------------------------------------------
        "positions-and-interests": [
            // Series 1
            {
                q: "What is the difference between a position and an interest?",
                options: [
                    "The position is firm, the interest negotiable",
                    "The position is what you ask for, the interest is why you ask for it",
                    "The position is written, the interest implicit"
                ],
                a: 1,
                explication: "Positions clash; interests, often, do not."
            },
            {
                q: "What happens as long as you discuss positions?",
                options: [
                    "Each side defends its arguments",
                    "The deal gets closer",
                    "Only a split exists"
                ],
                a: 2,
                explication: "As soon as you know the interests, other solutions appear."
            },
            {
                q: "Faced with “I need a 15% discount”, which solutions can appear?",
                options: [
                    "Spreading payment, itemising the quote, or adjusting the scope",
                    "Offering 7.5%",
                    "Refusing and waiting"
                ],
                a: 0,
                explication: "None of those three appears while you argue about the percentage."
            },
            // Series 2
            {
                q: "What is an asymmetric trade?",
                options: [
                    "Each gives what costs them little and receives what is worth a lot to them",
                    "A deal where one side concedes more",
                    "A negotiation between unequal parties"
                ],
                a: 0,
                explication: "It produces the best deals, and never appears in the opening discussion."
            },
            {
                q: "The assumption “what one gains, the other loses” is:",
                options: [
                    "Always true",
                    "True for a single variable, false as soon as there are several",
                    "Always false"
                ],
                a: 1,
                explication: "It is nonetheless almost everyone's default assumption."
            },
            {
                q: "What should be prepared before every negotiation, beyond your objective?",
                options: [
                    "Three fallback arguments",
                    "What costs me little and is worth a lot to them",
                    "The point at which I will give in"
                ],
                a: 1,
                explication: "A deadline, a reference, an exclusivity, flexibility on the schedule."
            }
        ]
    },

    // Summary questions — distinct from the sub-section ones
    synthese: [
        {
            q: "What is the thread running through this level?",
            options: [
                "You have to hold your position",
                "The best negotiator is the most patient",
                "A negotiation can largely be worked out before it starts"
            ],
            a: 2,
            explication: "Four ideas are enough, and they all translate into figures."
        },
        {
            q: "What do your alternative and your maximum limit have in common?",
            options: [
                "Both should be announced early",
                "Both are there to help you decide, not to be communicated",
                "Both are worked out after the first offer"
            ],
            a: 1,
            explication: "Announcing them amounts to offering them."
        },
        {
            q: "Someone accepts a deal after six months, citing the time invested. What do you say?",
            options: [
                "Six months justify closing",
                "The time spent is lost whatever happens; only the comparison with the alternative counts",
                "A deadline should have been set"
            ],
            a: 1,
            explication: "That is the sunk cost bias, developed at the advanced level."
        },
        {
            q: "Two parties have been stuck on price for three weeks. What is the lead?",
            options: [
                "Check whether a zone of agreement exists, then add a variable",
                "Split the difference",
                "Bring in a third party"
            ],
            a: 0,
            explication: "If there is no zone, insisting will never produce a deal on price alone."
        },
        {
            q: "What should a deal be compared with to judge it?",
            options: [
                "What you hoped for at the start",
                "Your alternative",
                "What the other side got"
            ],
            a: 1,
            explication: "It is the only comparison that corresponds to a reality."
        },
        {
            q: "If you apply only one thing from this level, what should it be?",
            options: [
                "Write down, before starting, what you get if the negotiation fails",
                "Always state the first number",
                "Never reveal your budget"
            ],
            a: 0,
            explication: "That is the line that decides everything else."
        }
    ]
};
