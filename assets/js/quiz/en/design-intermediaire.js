// ===================================
// QUESTION BANK — UX/UI DESIGN, INTERMEDIATE LEVEL (EN)
// ===================================
// 6 questions per sub-section: 3 shown, the other 3 take over after two weeks.
//
// Les clefs de « sections » sont les ancres ANGLAISES de la page traduite :
// quiz.js apparie la banque au « id » du titre h3.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "accessibility": [
            // Series 1
            {
                q: "Who benefits from accessibility?",
                options: [
                    "A small minority of disabled people",
                    "Everyone: disability is often temporary or situational",
                    "Only public services, which are obliged to provide it"
                ],
                a: 1,
                explication: "A plastered arm, a screen in bright sun, a child in your arms: all put you in the position accessibility accounts for."
            },
            {
                q: "What contrast ratio is required for normal-sized text?",
                options: [
                    "3 to 1",
                    "4.5 to 1",
                    "7 to 1"
                ],
                a: 1,
                explication: "3 to 1 is enough for large headings. Light grey on white fails systematically."
            },
            {
                q: "What must never be removed from an element focused by the keyboard?",
                options: [
                    "Its focus outline",
                    "Its label",
                    "Its animation"
                ],
                a: 0,
                explication: "Removing it because it is judged unsightly makes the site unusable for anyone who cannot aim a mouse."
            },
            // Series 2
            {
                q: "What is the minimum size for a touch target?",
                options: [
                    "24 CSS pixels",
                    "44 CSS pixels, that is about 9 to 11 millimetres",
                    "64 CSS pixels"
                ],
                a: 1,
                explication: "That is the order of magnitude of the area a finger covers."
            },
            {
                q: "A purely decorative image must be:",
                options: [
                    "Described in detail",
                    "Marked as decorative, so it is not read out pointlessly",
                    "Removed"
                ],
                a: 1,
                explication: "Only images that carry information need a description."
            },
            {
                q: "When should accessibility be dealt with?",
                options: [
                    "From the mock-ups onwards",
                    "At the end, during acceptance testing",
                    "After launch, if a user complains"
                ],
                a: 0,
                explication: "Picked up at the end it becomes an overhaul: contrast, palette, markup. Taken on at the start it costs almost nothing."
            }
        ],

        // ---------------------------------------------------------------
        "information-architecture": [
            // Series 1
            {
                q: "What should navigation be built on?",
                options: [
                    "The org chart of the organisation",
                    "The users' tasks",
                    "The chronological order of the content"
                ],
                a: 1,
                explication: "A visitor is not looking for “the membership department”: they are looking for “how do I sign up”."
            },
            {
                q: "What does card sorting consist of?",
                options: [
                    "Ranking pages by traffic",
                    "Asking participants to group content and name the groups",
                    "Sorting content by publication date"
                ],
                a: 1,
                explication: "The groupings that recur across most participants indicate the expected structure."
            },
            {
                q: "How do you judge a menu label?",
                options: [
                    "By how concise it is",
                    "Does someone new to the site know what they will find behind it?",
                    "By how well it fits the editorial guidelines"
                ],
                a: 1,
                explication: "In-house vocabulary almost always fails that test."
            },
            // Series 2
            {
                q: "What is wrong with “Our solutions” as a menu entry?",
                options: [
                    "It is too long",
                    "It says nothing about what you will find",
                    "It is too commercial"
                ],
                a: 1,
                explication: "“Pricing” says everything, in one word."
            },
            {
                q: "What does having both “Customer area” and “My account” produce?",
                options: [
                    "Better coverage of user needs",
                    "Hesitation at every visit: the visitor has to guess",
                    "Nothing, both are understood"
                ],
                a: 1,
                explication: "Two entries that can be confused cost more than they bring in."
            },
            {
                q: "Beyond how many top-level entries should you group?",
                options: [
                    "Three",
                    "About seven",
                    "Fifteen"
                ],
                a: 1,
                explication: "And the grouping must come from users, not from an internal arbitration."
            }
        ],

        // ---------------------------------------------------------------
        "mobile-first": [
            // Series 1
            {
                q: "Why design for the small screen first?",
                options: [
                    "Because it is quicker to draw",
                    "Because the constraint forces you to identify what really matters",
                    "Because the tools recommend it"
                ],
                a: 1,
                explication: "Widening afterwards is easy; cutting in a hurry produces amputated mobile versions."
            },
            {
                q: "What should breakpoints be set on?",
                options: [
                    "The phone models of the moment",
                    "The content, where the layout starts to age badly",
                    "Universal standard values"
                ],
                a: 1,
                explication: "Models change every year and there are hundreds of them."
            },
            {
                q: "What is hiding half the elements behind a menu on mobile worth?",
                options: [
                    "It is the good practice of responsive design",
                    "It postpones the decision: if content has no place there, does it deserve one elsewhere?",
                    "It depends on the number of elements"
                ],
                a: 1,
                explication: "The small screen does not shrink the interface: it reveals what had no place in it."
            },
            // Series 2
            {
                q: "Roughly what area does a finger cover?",
                options: [
                    "3 millimetres",
                    "9 millimetres",
                    "20 millimetres"
                ],
                a: 1,
                explication: "Hence the recommendation of 44 CSS pixels for a touch target."
            },
            {
                q: "A 24-pixel link surrounded by other tightly packed links produces:",
                options: [
                    "A compact and effective interface",
                    "Handling errors, which the user will blame on themselves",
                    "A problem only on small phones"
                ],
                a: 1,
                explication: "The user will think they got it wrong. It is the designer who was at fault."
            },
            {
                q: "What must be checked besides the size of a target?",
                options: [
                    "Its colour",
                    "The spacing to neighbouring targets",
                    "Its hover animation"
                ],
                a: 1,
                explication: "Two large targets stuck together produce as many errors as one small one."
            }
        ],

        // ---------------------------------------------------------------
        "design-system": [
            // Series 1
            {
                q: "What is a design system, essentially?",
                options: [
                    "A component library",
                    "A set of decisions taken once",
                    "A brand style guide"
                ],
                a: 1,
                explication: "Components are only the embodiment of those decisions."
            },
            {
                q: "What is a design system mainly for?",
                options: [
                    "Making things prettier",
                    "Closing questions, so they are not retaken on every screen",
                    "Speeding up development"
                ],
                a: 1,
                explication: "Every time a designer wonders “what size for this heading?”, the system should have answered beforehand."
            },
            {
                q: "Why prefer a spacing scale to free values?",
                options: [
                    "Free values are technically heavier",
                    "The constraint reduces decisions and makes consistency automatic",
                    "The scale is imposed by browsers"
                ],
                a: 1,
                explication: "Without a scale, spacing comes out at 12, 15, 18, 20, 24 depending on the day. Nothing is wrong, the whole looks slapdash."
            },
            // Series 2
            {
                q: "What is design debt?",
                options: [
                    "The cost of building the system",
                    "The build-up of small exceptions accepted “just for this screen”",
                    "The documentation falling behind"
                ],
                a: 1,
                explication: "Each looks harmless; their sum makes the system unusable, since it no longer describes the real product."
            },
            {
                q: "What should be done with an accepted exception?",
                options: [
                    "Absorb it into the system, or fix it",
                    "Document it as a special case",
                    "Leave it be, it is marginal"
                ],
                a: 0,
                explication: "Leaving it to live alongside is the beginning of the end."
            },
            {
                q: "What becomes of a design system with no owner?",
                options: [
                    "It stabilises by itself",
                    "It becomes wrong within months, and teams stop consulting it",
                    "It keeps working if the documentation is good"
                ],
                a: 1,
                explication: "A design system is a product in its own right. Without someone to arbitrate it, it does not survive."
            }
        ]
    },

    // Summary questions — distinct from the sub-section ones
    synthese: [
        {
            q: "What common problem do these four topics address?",
            options: [
                "What appears when a project grows beyond an isolated mock-up",
                "The aesthetics of interfaces",
                "Technical performance"
            ],
            a: 0,
            explication: "Users who are not like you, dozens of screens to hold together, very different screen sizes."
        },
        {
            q: "Which test reveals the most accessibility problems in five minutes?",
            options: [
                "Checking contrast",
                "Navigating your own site with the keyboard alone",
                "Reading the source code"
            ],
            a: 1,
            explication: "Without a mouse, the blocking obstacles jump out immediately."
        },
        {
            q: "What do a menu built on the org chart and a system with no owner have in common?",
            options: [
                "Both are perfectly clear from inside, and unusable from outside",
                "Both are expensive to produce",
                "Both are forbidden by regulation"
            ],
            a: 0,
            explication: "The internal point of view is the shared trap of this level."
        },
        {
            q: "A button measures 32 pixels on a side. What should you make of that?",
            options: [
                "It is compliant",
                "It is below the 44-pixel recommendation",
                "Size does not matter if the contrast is good"
            ],
            a: 1,
            explication: "About 8.5 mm on screen, against the 9 mm a finger covers: the errors are predictable."
        },
        {
            q: "Why must accessibility be considered at the mock-up stage?",
            options: [
                "To respect deadlines",
                "Because afterwards the palette and the markup have to be revisited: it becomes an overhaul",
                "Because the tools require it"
            ],
            a: 1,
            explication: "At the start it is mostly a matter of choosing the right colours and sizes."
        },
        {
            q: "What approach links card sorting and the keyboard test?",
            options: [
                "Checking against reality rather than reasoning from your desk",
                "Automating the checks",
                "Documenting the decisions"
            ],
            a: 0,
            explication: "Both consist of stepping outside your own point of view, which is precisely the designer's bias."
        }
    ]
};
