// ===================================
// QUESTION BANK — WEB DEVELOPMENT, ADVANCED LEVEL (EN)
// ===================================
// 6 questions per sub-section: 3 shown, the other 3 take over after two weeks.
//
// Les clefs de « sections » sont les ancres ANGLAISES de la page traduite :
// quiz.js apparie la banque au « id » du titre h3.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "performance-and-caching": [
            // Series 1
            {
                q: "Where should you start when optimising a page?",
                options: [
                    "Minifying the JavaScript",
                    "Measuring, and attacking the biggest bar",
                    "Changing framework"
                ],
                a: 1,
                explication: "Optimising without measuring is guessing. The cause is almost never the one you imagine."
            },
            {
                q: "Why is caching a particular kind of lever?",
                options: [
                    "It improves performance without slimming anything down",
                    "It reduces file sizes",
                    "It speeds up the server"
                ],
                a: 0,
                explication: "One line of configuration removes the download entirely for returning visitors."
            },
            {
                q: "How do you change a heavily cached file?",
                options: [
                    "By clearing visitors' caches",
                    "By changing its name: style.a3f9.css",
                    "By reducing the cache duration"
                ],
                a: 1,
                explication: "A change alters the name, therefore the address, so the cache is bypassed naturally."
            },
            // Series 2
            {
                q: "What weighs most, in the vast majority of cases?",
                options: [
                    "The application's own code",
                    "Badly sized images",
                    "Style sheets"
                ],
                a: 1,
                explication: "Then third-party scripts — analytics, widgets, banners — and only then the application's code."
            },
            {
                q: "A 1,800 kB page with 1,500 cacheable, and 60% returning visits: what average volume?",
                options: [
                    "1,800 kB",
                    "900 kB",
                    "300 kB"
                ],
                a: 1,
                explication: "Half as much, without having slimmed anything down."
            },
            {
                q: "What does an image with no declared dimensions cause?",
                options: [
                    "Slower loading",
                    "Content shifting while the page loads",
                    "A loss of quality"
                ],
                a: 1,
                explication: "The user clicks the wrong thing. Declaring dimensions removes the fault without speeding anything up."
            }
        ],

        // ---------------------------------------------------------------
        "application-security": [
            // Series 1
            {
                q: "Which principle settles most of application security?",
                options: [
                    "Encrypt all data",
                    "Any data coming from outside is hostile until proven otherwise",
                    "Restrict user permissions"
                ],
                a: 1,
                explication: "Forms, addresses, headers, uploaded files, responses from a third-party API."
            },
            {
                q: "What do prepared statements protect against?",
                options: [
                    "SQL injection",
                    "Injected scripts",
                    "Forged requests"
                ],
                a: 0,
                explication: "Values are passed separately from the query text."
            },
            {
                q: "What are “validate on input” and “escape on output”?",
                options: [
                    "Two names for the same operation",
                    "Two distinct acts: refuse what has the wrong shape, neutralise what is displayed",
                    "Two stages of encryption"
                ],
                a: 1,
                explication: "One does not replace the other."
            },
            // Series 2
            {
                q: "Is a browser-side check enough?",
                options: [
                    "Yes, if it is well written",
                    "No: it can be bypassed in three seconds, only the server counts",
                    "Yes, for simple forms"
                ],
                a: 1,
                explication: "It improves comfort. It protects nothing."
            },
            {
                q: "Where do most breaches come through?",
                options: [
                    "Novel flaws",
                    "A known, un-updated library",
                    "Brute-force attacks"
                ],
                a: 1,
                explication: "Updating dependencies is the defence with the best effort-to-result ratio."
            },
            {
                q: "What should be done with error messages in production?",
                options: [
                    "Show them in full to help support",
                    "A generic message for the visitor, the detail in the logs",
                    "Disable them completely"
                ],
                a: 1,
                explication: "A page showing the SQL query or the server version hands out a free map."
            }
        ],

        // ---------------------------------------------------------------
        "automated-testing": [
            // Series 1
            {
                q: "What are automated tests for?",
                options: [
                    "Proving the code is correct",
                    "Being able to change the code without fear",
                    "Satisfying a quality requirement"
                ],
                a: 1,
                explication: "A project with no tests becomes a project nobody dares touch, and that is how it dies."
            },
            {
                q: "What proportion between the three levels of tests?",
                options: [
                    "Many unit, a few integration, very few end-to-end",
                    "As many of each",
                    "Mostly end-to-end, closer to reality"
                ],
                a: 0,
                explication: "The reverse produces a slow suite nobody waits for any more."
            },
            {
                q: "What should be tested first?",
                options: [
                    "The appearance of the screens",
                    "Business logic and critical journeys",
                    "The code of the libraries used"
                ],
                a: 1,
                explication: "Calculations, rules, edge cases, then sign-up, payment, sending."
            },
            // Series 2
            {
                q: "What should be done with a test that fails one time in ten for no reason?",
                options: [
                    "Rerun it until it passes",
                    "Fix it or delete it",
                    "Disable it temporarily"
                ],
                a: 1,
                explication: "It teaches the team to ignore alerts. The day it detects a real problem, nobody believes it."
            },
            {
                q: "400 unit at 5 ms, 60 integration at 200 ms, 12 end-to-end at 8 s: what share of the time for the last ones?",
                options: [
                    "About 25%",
                    "About 87%",
                    "About 50%"
                ],
                a: 1,
                explication: "For 2.5% of the tests. It is this handful that decides whether the suite runs on every change."
            },
            {
                q: "What does not deserve a test?",
                options: [
                    "The edge cases of a calculation",
                    "Trivial getters and the exact appearance of a screen",
                    "The payment journey"
                ],
                a: 1,
                explication: "The appearance will change anyway, and libraries are tested by their authors."
            }
        ],

        // ---------------------------------------------------------------
        "technical-debt": [
            // Series 1
            {
                q: "What does the technical debt metaphor actually say?",
                options: [
                    "The code is badly written",
                    "You borrow time today and repay it later, with interest",
                    "The project is behind schedule"
                ],
                a: 1,
                explication: "The problem is not borrowing, it is never repaying."
            },
            {
                q: "What separates chosen debt from inherited debt?",
                options: [
                    "Its size",
                    "Chosen debt is owned, documented and dated",
                    "Inherited debt is cheaper"
                ],
                a: 1,
                explication: "The first can be managed. The second builds up silently."
            },
            {
                q: "3 hours lost per week amounts to how much per year?",
                options: [
                    "About 36 hours",
                    "About 144 hours, nearly four weeks",
                    "About 300 hours"
                ],
                a: 1,
                explication: "If fixing it takes 40 hours, the operation pays for itself in under four months."
            },
            // Series 2
            {
                q: "Why does a complete rewrite often fail?",
                options: [
                    "It costs too much",
                    "The existing code contains years of fixes for special cases nobody remembers",
                    "Teams lack motivation"
                ],
                a: 1,
                explication: "Gradual refactoring is less gratifying and far safer."
            },
            {
                q: "What becomes of a library not updated for two years?",
                options: [
                    "It keeps working without trouble",
                    "It becomes hard to move forward: the breaking changes pile up",
                    "It is replaced automatically"
                ],
                a: 1,
                explication: "Updating in small steps costs far less than one big jump every three years."
            },
            {
                q: "How do you get time to fix technical debt?",
                options: [
                    "By explaining that the code is badly written",
                    "By putting a figure on the hours lost per week",
                    "By waiting for an outage"
                ],
                a: 1,
                explication: "Put that way, the trade-off is no longer a matter of taste but of payback period."
            }
        ]
    },

    // Summary questions — distinct from the sub-section ones
    synthese: [
        {
            q: "What is this level about, compared with the previous one?",
            options: [
                "The lifespan of the application",
                "The choice of technologies",
                "How teams are organised"
            ],
            a: 0,
            explication: "Holding up under load, resisting attacks, being changeable without fear, ageing without becoming unreadable."
        },
        {
            q: "What do tests and dependency updates have in common?",
            options: [
                "Both make change possible later on",
                "Both are required by regulation",
                "Both slow development down"
            ],
            a: 0,
            explication: "Neglecting either leads to the same result: a project nobody dares touch."
        },
        {
            q: "A page is slow and a 4 MB image sits at the top. What do you do?",
            options: [
                "Optimise the application code first",
                "Deal with the image first",
                "Add caching"
            ],
            a: 1,
            explication: "Starting with your own code while a huge image waits is a frequent error of priority."
        },
        {
            q: "Which reasoning applies to both security and testing?",
            options: [
                "Assume things will go wrong, and design accordingly",
                "Automate as much as possible",
                "Document every decision"
            ],
            a: 0,
            explication: "Never trust outside data; never assume a change has no effect."
        },
        {
            q: "Why does caching force you to version file names?",
            options: [
                "To save space",
                "Because a heavily cached file can no longer be changed in place",
                "To comply with HTTP standards"
            ],
            a: 1,
            explication: "Changing the name changes the address, which bypasses the cache naturally."
        },
        {
            q: "Which figure turns a request for a rewrite into a decision?",
            options: [
                "The number of lines of code",
                "The hours lost each week because of the current code",
                "The age of the project"
            ],
            a: 1,
            explication: "The figure changes the conversation, because it compares with the cost of the fix."
        }
    ]
};
