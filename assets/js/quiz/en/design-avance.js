// ===================================
// QUESTION BANK — UX/UI DESIGN, ADVANCED LEVEL (EN)
// ===================================
// 6 questions per sub-section: 3 shown, the other 3 take over after two weeks.
//
// Les clefs de « sections » sont les ancres ANGLAISES de la page traduite :
// quiz.js apparie la banque au « id » du titre h3.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "perceived-performance": [
            // Series 1
            {
                q: "Below what delay does a reaction feel instantaneous?",
                options: [
                    "0.1 second",
                    "1 second",
                    "3 seconds"
                ],
                a: 0,
                explication: "Below that, the user has the impression of manipulating the object directly."
            },
            {
                q: "From what delay must progress be shown?",
                options: [
                    "1 second",
                    "10 seconds, the limit of attention",
                    "30 seconds"
                ],
                a: 1,
                explication: "Beyond it, the person moves on to something else."
            },
            {
                q: "Compared with an occupied wait of the same length, an empty wait feels:",
                options: [
                    "Shorter",
                    "About twice as long",
                    "The same"
                ],
                a: 1,
                explication: "Hence content skeletons and immediate feedback on click."
            },
            // Series 2
            {
                q: "What is optimistic display?",
                options: [
                    "Showing the expected result before the server confirms",
                    "Hiding errors from the user",
                    "Preloading every page of the site"
                ],
                a: 0,
                explication: "Correcting it if it fails. This is what makes modern messaging apps feel so fluid."
            },
            {
                q: "What is wrong with a loading animation that shows no progress?",
                options: [
                    "It drains the battery",
                    "It informs of nothing and feels longer for being indeterminate",
                    "It is not accessible"
                ],
                a: 1,
                explication: "For a short operation, a skeleton beats a spinner."
            },
            {
                q: "A 2,500 kB page on a 10 Mb/s connection takes roughly:",
                options: [
                    "0.2 second to transfer",
                    "2 seconds to transfer",
                    "20 seconds to transfer"
                ],
                a: 1,
                explication: "Plus latency and rendering time."
            }
        ],

        // ---------------------------------------------------------------
        "cognitive-load": [
            // Series 1
            {
                q: "How does decision time grow according to Hick's law?",
                options: [
                    "Linearly with the number of options",
                    "With the logarithm of the number of options",
                    "Exponentially"
                ],
                a: 1,
                explication: "Going from 2 to 4 choices costs as much as going from 4 to 8. Adding options to an already long list costs almost nothing."
            },
            {
                q: "Applied as it stands, what does Hick's law conclude about submenus?",
                options: [
                    "That they always speed up navigation",
                    "That a flat list beats a two-tier navigation, since it makes you decide only once",
                    "That they have no effect"
                ],
                a: 1,
                explication: "That is the opposite of what is usually written — and it is what the formula says."
            },
            {
                q: "So what makes grouping win?",
                options: [
                    "Visual scanning: finding without reading",
                    "Hick's law",
                    "User habit"
                ],
                a: 0,
                explication: "A visitor discovering a menu is not choosing, they are searching — and that run costs roughly linearly."
            },
            // Series 2
            {
                q: "What does the time to reach a target depend on, under Fitts's law?",
                options: [
                    "Its colour and contrast",
                    "Its distance and its size",
                    "The number of elements on screen"
                ],
                a: 1,
                explication: "Hence the value of edges and corners: the cursor stops there by itself."
            },
            {
                q: "How many items does working memory hold at once?",
                options: [
                    "Around four",
                    "Exactly seven",
                    "About fifteen"
                ],
                a: 0,
                explication: "That is the order of magnitude commonly accepted today, not the seven long quoted."
            },
            {
                q: "What does confusing simple with minimal consist of?",
                options: [
                    "Adding too many explanations",
                    "Removing labels and landmarks: the screen looks cleaner, the mental load goes up",
                    "Using too many colours"
                ],
                a: 1,
                explication: "A simple interface is not the one that shows least, it is the one that takes least effort."
            }
        ],

        // ---------------------------------------------------------------
        "dark-patterns": [
            // Series 1
            {
                q: "What is a dark pattern?",
                options: [
                    "An interface in night mode",
                    "An interface designed to obtain what the user would not have chosen knowingly",
                    "An ergonomic mistake"
                ],
                a: 1,
                explication: "These are not clumsy mistakes: they are deliberate decisions, often tested and optimised."
            },
            {
                q: "What does European law say about consent?",
                options: [
                    "It must be as easy to refuse as to give",
                    "It is enough for a refusal link to exist somewhere",
                    "It is not regulated on this point"
                ],
                a: 0,
                explication: "A banner with no “reject all” button at the same level as “accept all” is non-compliant."
            },
            {
                q: "What does French law require regarding cancellation?",
                options: [
                    "Thirty days' notice",
                    "A means as simple as the one used to subscribe",
                    "Confirmation by post"
                ],
                a: 1,
                explication: "Signing up in thirty seconds and having to hunt for a hidden page to leave is not compliant."
            },
            // Series 2
            {
                q: "Why are dark patterns a bad bet?",
                options: [
                    "They do not work",
                    "The gain is immediate and measured, the cost deferred and diffuse",
                    "They are technically complex"
                ],
                a: 1,
                explication: "Cancellations, refunds, negative reviews and distrust do not appear on the conversion dashboard."
            },
            {
                q: "Which test identifies an unintentional dark pattern?",
                options: [
                    "Checking legal compliance",
                    "If the user discovered this mechanism, would they feel cheated?",
                    "Asking the sales team"
                ],
                a: 1,
                explication: "Intent changes nothing about the result for the user."
            },
            {
                q: "“No thanks, I'd rather pay more” is an example of:",
                options: [
                    "A deliberate brand tone",
                    "Shaming the refusal: wording written to be unpleasant to click",
                    "A useful clarification"
                ],
                a: 1,
                explication: "It is one of the most widespread dark patterns, and one of the easiest to fix."
            }
        ],

        // ---------------------------------------------------------------
        "measuring-design": [
            // Series 1
            {
                q: "What is the most important measure in a usability test?",
                options: [
                    "Task time",
                    "Success rate",
                    "Declared satisfaction"
                ],
                a: 1,
                explication: "It is also the most often forgotten."
            },
            {
                q: "Why must task time be read with care?",
                options: [
                    "It is hard to measure",
                    "Faster is not always better, particularly on an important decision",
                    "It varies too much between participants"
                ],
                a: 1,
                explication: "On a significant purchase, a longer time can signal careful reading."
            },
            {
                q: "A usability test mainly shows:",
                options: [
                    "Where people fail, rarely why",
                    "Why people fail",
                    "What people prefer"
                ],
                a: 0,
                explication: "The why comes from observation and from the questions asked afterwards."
            },
            // Series 2
            {
                q: "What is an isolated figure worth in design?",
                options: [
                    "Nothing: it is the comparison that produces the information",
                    "It is enough if measured rigorously",
                    "It is better than nothing"
                ],
                a: 0,
                explication: "Before and after, version A and version B: with no reference, a score says nothing."
            },
            {
                q: "Why is time spent on a page a poor indicator?",
                options: [
                    "It is hard to collect",
                    "It is ambiguous: interest or confusion?",
                    "It varies between browsers"
                ],
                a: 1,
                explication: "A convenient but uninterpretable indicator is worse than none: it gives the impression of knowing."
            },
            {
                q: "How do you turn an improvement into a budgetary argument?",
                options: [
                    "By counting the hours saved per year across all users",
                    "By citing sector best practice",
                    "By showing before-and-after mock-ups"
                ],
                a: 0,
                explication: "Five seconds on three daily tasks for two hundred people is about 183 hours a year."
            }
        ]
    },

    // Summary questions — distinct from the sub-section ones
    synthese: [
        {
            q: "What is this level about, compared with the previous ones?",
            options: [
                "What happens in the person opposite",
                "Design tools",
                "Front-end implementation"
            ],
            a: 0,
            explication: "How long they think they are waiting, how many options their attention can take, and what makes them give up."
        },
        {
            q: "What ethical question does this level raise?",
            options: [
                "Should this knowledge be used to help, or to manipulate?",
                "Should user behaviour be measured?",
                "Should users be told about psychological laws?"
            ],
            a: 0,
            explication: "The same mechanisms serve to smooth a journey or to trap a consent."
        },
        {
            q: "Two levers act on perceived waiting. Which?",
            options: [
                "Cutting weight, and occupying the wait",
                "Raising bandwidth, and hiding errors",
                "Preloading, and compressing"
            ],
            a: 0,
            explication: "The first acts on real time, the second on felt time. Both count."
        },
        {
            q: "Why does this level insist on measurement?",
            options: [
                "Because without measurement a design does not improve: it changes",
                "Because regulation requires it",
                "Because the tools make it easy"
            ],
            a: 0,
            explication: "“It's prettier” is not an admissible argument, and “the client prefers it” even less so."
        },
        {
            q: "What separates a simple interface from a minimal one?",
            options: [
                "The simple one takes little effort, the minimal one shows few things",
                "Nothing, they are two words for the same thing",
                "The minimal one is more accessible"
            ],
            a: 0,
            explication: "Removing landmarks cleans up the screen and raises the mental load: the user has to guess."
        },
        {
            q: "A countdown that resets on every visit is an example of:",
            options: [
                "False urgency, therefore a dark pattern",
                "An accepted conversion technique",
                "A technical fault"
            ],
            a: 0,
            explication: "Like “3 people are looking at this item” with no basis at all."
        }
    ]
};
