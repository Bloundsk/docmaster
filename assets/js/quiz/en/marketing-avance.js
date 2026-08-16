// ===================================
// QUESTION BANK — DIGITAL MARKETING, ADVANCED LEVEL (EN)
// ===================================
// 6 questions per sub-section: 3 shown, the other 3 take over after two weeks.
// The summary questions are distinct from the sub-section ones — none is reused.
//
// Les clefs de « sections » sont les ancres ANGLAISES de la page traduite :
// quiz.js apparie la banque au « id » du titre h3.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "attribution": [
            // Series 1
            {
                q: "Which attribution model is the default setting in most tools?",
                options: [
                    "Last click",
                    "First click",
                    "Distributed attribution"
                ],
                a: 0,
                explication: "It is also the most misleading: it systematically rewards whatever comes at the end of the journey."
            },
            {
                q: "What does last click mechanically reward?",
                options: [
                    "The discovery channel",
                    "Brand search and email",
                    "Social networks"
                ],
                a: 1,
                explication: "They come just before the purchase, without necessarily having convinced anybody."
            },
            {
                q: "Is any attribution model “true”?",
                options: [
                    "Yes, if it is set up properly",
                    "No: none knows what went on in the buyer's head",
                    "Yes, the distributed model"
                ],
                a: 1,
                explication: "All of them are conventions. The choice changes budgets, not reality."
            },
            // Series 2
            {
                q: "What is the only reliable method for knowing a channel's contribution?",
                options: [
                    "Changing the attribution model",
                    "Stopping or cutting it, and watching the effect on the total",
                    "Comparing against the sector"
                ],
                a: 1,
                explication: "It is the only causal approach, exactly like a controlled test."
            },
            {
                q: "What happens when the discovery channel is cut on the strength of last click?",
                options: [
                    "Nothing, it was not converting",
                    "The channels that looked like they were performing fall a few weeks later",
                    "Overall conversion goes up"
                ],
                a: 1,
                explication: "What is then observed is a general fall with no visible cause, and people look for the problem where it is not."
            },
            {
                q: "On a journey with four touchpoints, what does distributed attribution give?",
                options: [
                    "100% to the last",
                    "25% to each",
                    "50% to the first and 50% to the last"
                ],
                a: 1,
                explication: "Fairer, more complex, and still a convention."
            }
        ],

        // ---------------------------------------------------------------
        "retention": [
            // Series 1
            {
                q: "Losing 12% of your customers a month gives an average lifetime of:",
                options: [
                    "About 8.3 months",
                    "About 12 months",
                    "About 4 months"
                ],
                a: 0,
                explication: "Bringing that loss down to 8% takes it to 12.5 months, a 50% increase."
            },
            {
                q: "How much does bringing a customer back cost, compared with acquiring one?",
                options: [
                    "The same",
                    "Five to seven times less, depending on the sector",
                    "Twice as much"
                ],
                a: 1,
                explication: "And yet that line rarely appears in a marketing plan."
            },
            {
                q: "Why does retention interest people less than acquisition?",
                options: [
                    "It brings in less",
                    "It does not show up in a campaign report",
                    "It is technically harder"
                ],
                a: 1,
                explication: "It nonetheless produces most of the result."
            },
            // Series 2
            {
                q: "What are the three retention levers, in increasing order of cost?",
                options: [
                    "Keeping your promise, supporting the start, getting back in touch before you are forgotten",
                    "Discounts, loyalty scheme, customer service",
                    "Reminder advertising, referrals, gifts"
                ],
                a: 0,
                explication: "The first costs nothing extra: it is about the first order going exactly as announced."
            },
            {
                q: "What does a discount reserved for new customers produce?",
                options: [
                    "Healthy growth",
                    "A clear message to the loyal: their loyalty is worth nothing",
                    "Better word of mouth"
                ],
                a: 1,
                explication: "The arithmetic loses twice: you pay more for a less profitable customer, and demotivate the one who brought in the most."
            },
            {
                q: "Four points more retention are worth:",
                options: [
                    "A marginal improvement",
                    "More than four times the advertising budget",
                    "The equivalent of a well-optimised campaign"
                ],
                a: 1,
                explication: "No advertising optimisation produces an effect of that size."
            }
        ],

        // ---------------------------------------------------------------
        "ethical-persuasion": [
            // Series 1
            {
                q: "Which criterion separates persuasion from manipulation?",
                options: [
                    "How forceful the message is",
                    "Whether the information is true, and whether the customer would be fine with it knowing the mechanism",
                    "The channel used"
                ],
                a: 1,
                explication: "The wording can be identical. What changes is the truth."
            },
            {
                q: "“Only 3 left in stock” with a real stock of 3:",
                options: [
                    "Is manipulation",
                    "Is legitimate: the person would almost thank you for the warning",
                    "Is banned"
                ],
                a: 1,
                explication: "The same message with 400 units available would be a deception."
            },
            {
                q: "When does social proof become a lie?",
                options: [
                    "When the figure is invented or unverifiable",
                    "As soon as you display a number of customers",
                    "When it is given prominence"
                ],
                a: 0,
                explication: "“2,400 customers” informs if it is true. An invented counter is a lie."
            },
            // Series 2
            {
                q: "Why are deceptive techniques bad economics?",
                options: [
                    "They do not work",
                    "The gain appears this month, the cost spreads over two years without being attributed",
                    "They are expensive to set up"
                ],
                a: 1,
                explication: "Refunds, negative reviews and reputation never appear in the campaign's dashboard."
            },
            {
                q: "What does a countdown that restarts on every visit produce?",
                options: [
                    "Urgency with no downside",
                    "Part of the audience spots it, will not buy again, and will say so",
                    "A lasting improvement in conversion"
                ],
                a: 1,
                explication: "A real deadline produces the same effect, without the risk."
            },
            {
                q: "Does all communication use persuasion levers?",
                options: [
                    "Yes: the question is where the line runs",
                    "No, only advertising uses them",
                    "Only in online selling"
                ],
                a: 0,
                explication: "These mechanisms have been documented for decades and genuinely work."
            }
        ],

        // ---------------------------------------------------------------
        "legal-framework": [
            // Series 1
            {
                q: "What is the principle for emailing a private individual?",
                options: [
                    "Prior consent, freely given and specific",
                    "Prior information is enough",
                    "No particular rule"
                ],
                a: 0,
                explication: "An exception exists for existing customers, on similar products, if they could object at collection."
            },
            {
                q: "What must every outreach message contain?",
                options: [
                    "A commercial offer",
                    "The sender's identity, a subject line that is not misleading, and one-click unsubscribe",
                    "The full legal notices"
                ],
                a: 1,
                explication: "The unsubscribe must also take effect quickly."
            },
            {
                q: "Which document is asked for first in an inspection?",
                options: [
                    "The record of processing activities",
                    "The customer list",
                    "The company's articles of association"
                ],
                a: 0,
                explication: "It describes what you collect, why, and for how long."
            },
            // Series 2
            {
                q: "Who is responsible for a list bought without valid consent?",
                options: [
                    "The seller of the list",
                    "Whoever uses the data",
                    "Both equally"
                ],
                a: 1,
                explication: "If a complaint is made, it is for you to prove consent."
            },
            {
                q: "A vague, unsupported environmental claim is:",
                options: [
                    "A simple marketing argument",
                    "A misleading commercial practice",
                    "An information obligation"
                ],
                a: 1,
                explication: "Environmental wording is watched particularly closely."
            },
            {
                q: "A post paid for by a brand must:",
                options: [
                    "Be identified as such",
                    "Stay discreet so as not to harm authenticity",
                    "State the amount received"
                ],
                a: 0,
                explication: "The obligation also applies to the creator you work with."
            }
        ]
    },

    // ===================================================================
    // Summary questions — distinct from the sub-section ones
    // ===================================================================
    synthese: [
        // Series 1
        {
            q: "What is this level about?",
            options: [
                "The blind spots: what the tools attribute badly and what the law governs",
                "The most recent techniques",
                "Optimising budgets"
            ],
            a: 0,
            explication: "What teams neglect because it is less visible, and the rules that apply whether you know them or not."
        },
        {
            q: "What do attribution and retention have in common?",
            options: [
                "Both are badly served by campaign dashboards",
                "Both belong to the legal department",
                "Both are measured daily"
            ],
            a: 0,
            explication: "One is distorted by the model, the other simply does not appear there."
        },
        {
            q: "Which question sums up the ethical test of a campaign?",
            options: [
                "Is it profitable?",
                "What would I say if a customer found out exactly how it works?",
                "Does it match the sector's usual practice?"
            ],
            a: 1,
            explication: "That test also catches unintentional manipulation, where nobody meant to deceive."
        },
        // Series 2
        {
            q: "A campaign shows excellent results under last click. What should you check before reallocating budget?",
            options: [
                "The cost per click",
                "What becomes of those results if the discovery channel is cut back",
                "Seasonality"
            ],
            a: 1,
            explication: "Last click collects, it does not necessarily convince."
        },
        {
            q: "Why does the legal side appear in a marketing guide?",
            options: [
                "Because the penalties fall on the business, not the contractor who carried the work out",
                "Because it is a constraint imposed by management",
                "Because it reassures customers"
            ],
            a: 0,
            explication: "The rules apply whether you know them or not."
        },
        {
            q: "What do a fake countdown and a bought list have in common?",
            options: [
                "Both produce an immediate gain and a far larger deferred cost",
                "Both are effective in the long run",
                "Both are without consequence"
            ],
            a: 0,
            explication: "And in both cases, the cost is never attributed to its cause in the dashboards."
        }
    ]
};
