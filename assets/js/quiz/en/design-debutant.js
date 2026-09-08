// ===================================
// QUESTION BANK — UX/UI DESIGN, BEGINNER LEVEL (EN)
// ===================================
// 6 questions per sub-section: 3 shown, the other 3 take over after two weeks.
//
// Les clefs de « sections » sont les ancres ANGLAISES de la page traduite :
// quiz.js apparie la banque au « id » du titre h3.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "ux-vs-ui": [
            // Series 1
            {
                q: "What does UX deal with, as opposed to UI?",
                options: [
                    "Colours, typography, and everything that makes up the visual styling of a page",
                    "What the person goes through: do they understand, do they reach their goal?",
                    "Loading speed"
                ],
                a: 1,
                explication: "UI is what you see, UX is what you live. You can get the first right and miss the second."
            },
            {
                q: "A magnificent emergency exit sign leading to a sealed door illustrates what?",
                options: [
                    "Excellent UX, since the sign can be seen from afar",
                    "A purely technical problem, nothing to do with design",
                    "Excellent UI and catastrophic UX"
                ],
                a: 2,
                explication: "A handwritten note pointing to the right exit: poor UI, successful UX. The second saves lives."
            },
            {
                q: "Where does most of the UX work happen?",
                options: [
                    "In the choice of the colour palette, the typography and the illustrations",
                    "Upstream: who is this for, what problem does it solve, in what order?",
                    "At the final testing stage"
                ],
                a: 1,
                explication: "A graphic overhaul never repairs a badly designed journey: it makes getting lost more elegant."
            },
            // Series 2
            {
                q: "What cannot be rescued by aesthetics?",
                options: [
                    "The choice of typeface and its size",
                    "The number of steps in a form",
                    "The size of the margins around the text"
                ],
                a: 1,
                explication: "Every extra step loses a share of users. No animation compensates for twelve fields."
            },
            {
                q: "Which error message is useful?",
                options: [
                    "“An error has occurred, please try again later”",
                    "“Error 500: the server did not respond in time”",
                    "“This postcode does not match any town”"
                ],
                a: 2,
                explication: "The first helps nobody; the second lets you act."
            },
            {
                q: "What is the right test for judging an interface?",
                options: [
                    "Does it look good in a screenshot?",
                    "Does somebody seeing it for the first time get there straight away?",
                    "Does it match the trends of the moment in this trade and this sector?"
                ],
                a: 1,
                explication: "Trends regularly produce interfaces that are attractive and painful to use."
            }
        ],

        // ---------------------------------------------------------------
        "wireframing": [
            // Series 1
            {
                q: "Why is a wireframe deliberately ugly?",
                options: [
                    "To go faster",
                    "Because the mock-up tools available today are still too limited for that",
                    "So that people criticise the structure instead of a button's colour"
                ],
                a: 2,
                explication: "Faced with a finished mock-up, feedback lands on visual detail. Faced with grey rectangles, people finally discuss substance."
            },
            {
                q: "What does it cost to rethink a journey at the paper sketch stage?",
                options: [
                    "A few minutes",
                    "One to two days",
                    "Several weeks"
                ],
                a: 0,
                explication: "At the mock-up stage: one to two days. After development: weeks, and a lopsided compromise."
            },
            {
                q: "What does low fidelity allow?",
                options: [
                    "Presenting to the final client, who can picture the result",
                    "Handing over to development",
                    "Exploring several routes and deciding the structure"
                ],
                a: 2,
                explication: "High fidelity is for handing over and presenting, not for exploring."
            },
            // Series 2
            {
                q: "Why use real content rather than Latin placeholder text?",
                options: [
                    "A real product name sometimes runs to three lines where the example ran to one",
                    "It is more pleasant to read",
                    "It speeds up sign-off"
                ],
                a: 0,
                explication: "Otherwise those overflows are discovered during development — too late."
            },
            {
                q: "What happens if you spend a day polishing a wireframe?",
                options: [
                    "You become attached to it and stop questioning it",
                    "The final result is better, because it was better prepared",
                    "Development goes faster"
                ],
                a: 0,
                explication: "A wireframe must stay ugly enough that you dare to throw it away."
            },
            {
                q: "Which classic mistake wastes the benefit of the wireframe?",
                options: [
                    "Doing it on paper rather than on screen",
                    "Jumping straight to high fidelity",
                    "Showing it to the team too early, before it holds"
                ],
                a: 1,
                explication: "You gain an impression of fast progress, you lose the ability to be wrong cheaply."
            }
        ],

        // ---------------------------------------------------------------
        "visual-design-principles": [
            // Series 1
            {
                q: "How does the eye approach a page?",
                options: [
                    "It scans and ranks elements by apparent importance",
                    "It reads from left to right, line by line, as in a book",
                    "It settles in the centre first"
                ],
                a: 0,
                explication: "Size, contrast, position and surrounding space set that order in a fraction of a second."
            },
            {
                q: "What happens if every element on a page is emphasised?",
                options: [
                    "The user has more choice and can decide for themselves what matters most",
                    "Nothing is: they have to read everything to decide, and most give up",
                    "The page looks richer"
                ],
                a: 1,
                explication: "Choosing what matters means accepting that the rest stays quiet."
            },
            {
                q: "What does the “squint test” consist of?",
                options: [
                    "Shrinking the browser window",
                    "Squinting until the text becomes unreadable and seeing what stands out",
                    "Printing the page in black and white, then looking at it from a distance"
                ],
                a: 1,
                explication: "If the main action is not part of it, the hierarchy needs revisiting."
            },
            // Series 2
            {
                q: "What does the principle of proximity mean?",
                options: [
                    "Elements that are close together are perceived as related",
                    "Elements should be grouped by colour, never by position",
                    "Margins must be identical everywhere"
                ],
                a: 0,
                explication: "A label stuck to the wrong form field creates an error the best wording will not repair."
            },
            {
                q: "What contrast ratio do accessibility standards recommend for body text?",
                options: [
                    "2:1",
                    "4.5:1",
                    "10:1"
                ],
                a: 1,
                explication: "This is not a constraint for a minority: it is comfort for everyone, in real conditions."
            },
            {
                q: "Why should information never be carried by colour alone?",
                options: [
                    "Because screens render colours badly",
                    "Because it makes the code heavier",
                    "Because a field marked red with no message stays invisible to someone with colour blindness"
                ],
                a: 2,
                explication: "That is roughly one man in twelve."
            }
        ],

        // ---------------------------------------------------------------
        "user-testing": [
            // Series 1
            {
                q: "Why can you not evaluate your own interface?",
                options: [
                    "For lack of emotional objectivity",
                    "Because it requires a formal certification that very few people actually have",
                    "Because you know where everything is, and that knowledge cannot be undone"
                ],
                a: 2,
                explication: "The only way to find out is to watch somebody else try."
            },
            {
                q: "How many users are enough to reveal the majority of major problems?",
                options: [
                    "2",
                    "5",
                    "30"
                ],
                a: 1,
                explication: "The ones after that mostly confirm what has been seen. Five tests at each stage beat thirty at the end."
            },
            {
                q: "What instruction should you give a participant?",
                options: [
                    "“Find the price of an annual subscription and start signing up”",
                    "“What do you think of this page, and of its overall look?”",
                    "“Browse freely for a few minutes”"
                ],
                a: 0,
                explication: "Give a task, not a guided tour. What people do is worth more than what they declare."
            },
            // Series 2
            {
                q: "What is the hardest behaviour to keep up during a test?",
                options: [
                    "Saying nothing",
                    "Taking notes as you go",
                    "Timing every step"
                ],
                a: 0,
                explication: "The moment you help, the test is over: the real user will have nobody beside them."
            },
            {
                q: "When should you test?",
                options: [
                    "A week before launch",
                    "After launch, with real users and real data to look at",
                    "On the wireframe, while everything can still change at no cost"
                ],
                a: 2,
                explication: "A late test no longer helps you decide: it documents problems you cannot fix in time."
            },
            {
                q: "A user gets it wrong during a test. Who failed to understand?",
                options: [
                    "The interface, which failed to be clear",
                    "The user",
                    "The person who designed the test, and worded the task"
                ],
                a: 0,
                explication: "That reversal is the foundation of the trade."
            }
        ]
    },

    // Summary questions — distinct from the sub-section ones
    synthese: [
        {
            q: "What characterises the best interfaces?",
            options: [
                "They leave an impression",
                "They follow the latest trends",
                "They go unnoticed"
            ],
            a: 2,
            explication: "Nobody compliments a door for opening the right way."
        },
        {
            q: "Is interface design a matter of personal taste?",
            options: [
                "No: it is a discipline with rules that come from how vision and attention work",
                "Yes, everyone has their own sensibility",
                "Yes, except for institutional sites"
            ],
            a: 0,
            explication: "Those rules can be checked, and they can be learned."
        },
        {
            q: "What does successful design do?",
            options: [
                "It subtracts more than it adds",
                "It adds distinctive visual elements",
                "It reproduces the codes of the sector"
            ],
            a: 0,
            explication: "Before adding an element, ask what it helps to understand. If it helps with nothing, it adds noise."
        },
        {
            q: "Your team finds a button “obvious”. How do you check?",
            options: [
                "Ask another designer's opinion, from outside the project team",
                "Compare with competitor sites",
                "Watch five people attempt the task, without helping them"
            ],
            a: 2,
            explication: "None of these problems is visible from inside the project."
        },
        {
            q: "You have to ship fast. What should you not cut?",
            options: [
                "The care taken over wireframes and their presentation",
                "User testing, even informally on a paper mock-up",
                "The colour palette"
            ],
            a: 1,
            explication: "Five minutes, one task, a mock-up even on paper: infinitely better than testing nothing."
        },
        {
            q: "Light grey text on white, elegant on your screen. What is the problem?",
            options: [
                "It uses more ink when the page is printed out on paper",
                "It becomes unreadable in the sun or for someone over fifty",
                "It slows down loading"
            ],
            a: 1,
            explication: "Free checkers measure contrast in a few seconds."
        }
    ]
};
