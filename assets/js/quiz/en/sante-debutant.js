// ===================================
// QUESTION BANK — HEALTH AT WORK, BEGINNER LEVEL (EN)
// ===================================
// 6 questions per sub-section: 3 shown, the other 3 take over after two weeks.
// The summary questions are distinct from the sub-section ones — none is reused.
//
// No question is about a symptom or a state of health.
// Les règles citées sont celles du DROIT FRANÇAIS, dit comme tel.
//
// Les clefs de « sections » sont les ancres ANGLAISES de la page traduite :
// quiz.js apparie la banque au « id » du titre h3.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "workstation-setup": [
            // Series 1
            {
                q: "Where should the top of the screen sit?",
                options: [
                    "At eye level, or just below",
                    "Clearly above eye level",
                    "As low as possible"
                ],
                a: 0,
                explication: "A screen too low tips the head forward for seven hours."
            },
            {
                q: "Why can a laptop on a desk not be well placed?",
                options: [
                    "The screen is fixed to the keyboard: one of the two is necessarily badly placed",
                    "It is too small",
                    "It runs too hot"
                ],
                a: 0,
                explication: "A stand and a separate keyboard resolve a contradiction, not a discomfort."
            },
            {
                q: "How should the screen face relative to the window?",
                options: [
                    "Towards it",
                    "At right angles",
                    "Backing onto it"
                ],
                a: 1,
                explication: "Facing the window you work against a backlight, backing onto it the screen throws reflections."
            },
            // Series 2
            {
                q: "What does a shoulder rising while typing indicate?",
                options: [
                    "A work surface that is too high",
                    "A chair too low for the back",
                    "A keyboard that is too wide"
                ],
                a: 0,
                explication: "The forearms should be horizontal, shoulders relaxed."
            },
            {
                q: "What causes harm at a desk job?",
                options: [
                    "Intense effort",
                    "The position held for hours",
                    "The number of keystrokes"
                ],
                a: 1,
                explication: "That is also good news: a position can be adjusted."
            },
            {
                q: "When should you set your workstation up?",
                options: [
                    "Before it hurts",
                    "At the first pain",
                    "When the discomfort becomes daily"
                ],
                a: 0,
                explication: "The signal is faint at first, and you get used to ignoring it."
            }
        ],

        // ---------------------------------------------------------------
        "sitting-still": [
            // Series 1
            {
                q: "Are physical activity and sedentary behaviour the same thing?",
                options: [
                    "Yes, one is the opposite of the other",
                    "No: you can be athletic and sedentary",
                    "Yes, if you count in hours"
                ],
                a: 1,
                explication: "One is measured in minutes of effort, the other in hours spent sitting."
            },
            {
                q: "What is the WHO benchmark for an adult?",
                options: [
                    "150 minutes of moderate activity per week",
                    "30 minutes a day of intense sport",
                    "10,000 steps a day"
                ],
                a: 0,
                explication: "And that benchmark says nothing about time spent sitting, which is a second lever."
            },
            {
                q: "9 hours sitting a day, 5 days a week: how much over a working year?",
                options: [
                    "About 2,025 hours",
                    "About 900 hours",
                    "About 4,000 hours"
                ],
                a: 0,
                explication: "45 hours a week, over forty-five weeks."
            },
            // Series 2
            {
                q: "What counts most in an interruption to sitting?",
                options: [
                    "Its length",
                    "The fact that it happens",
                    "The intensity of the effort"
                ],
                a: 1,
                explication: "Standing up for two minutes every hour looks like nothing and does the job."
            },
            {
                q: "Does an hour of sport on Saturday cancel eight hours of daily sitting?",
                options: [
                    "No: it improves activity without changing sedentary time",
                    "Yes, entirely",
                    "Yes, if the sport is intense"
                ],
                a: 0,
                explication: "Both count, and the second is easier to correct."
            },
            {
                q: "Which trick moves several hours a week with no organisational effort?",
                options: [
                    "Taking calls standing or walking",
                    "Taking longer breaks",
                    "Changing chair"
                ],
                a: 0,
                explication: "As does putting frequently used objects out of reach."
            }
        ],

        // ---------------------------------------------------------------
        "eye-strain": [
            // Series 1
            {
                q: "What does the so-called “three twenties” rule say?",
                options: [
                    "Every 20 minutes, look 6 metres away for 20 seconds",
                    "20 minutes of break every 20 hours",
                    "20 blinks a minute for 20 minutes"
                ],
                a: 0,
                explication: "The exact numbers matter little: the principle is to release the focusing muscle."
            },
            {
                q: "What happens to blinking in front of a screen?",
                options: [
                    "Its rate drops markedly",
                    "It increases",
                    "It does not change"
                ],
                a: 0,
                explication: "The tear film evaporates faster than it is renewed — hence dry eyes."
            },
            {
                q: "What does the evidence say about blue-light filters?",
                options: [
                    "They have not demonstrated much on eye strain",
                    "They reduce it markedly",
                    "They protect the retina"
                ],
                a: 0,
                explication: "What is better established concerns sleep, and depends mostly on the hour you stop."
            },
            // Series 2
            {
                q: "Should you work in the dark with a lit screen?",
                options: [
                    "No: the contrast is tolerated badly over time",
                    "Yes, it rests the eyes",
                    "It has no effect"
                ],
                a: 0,
                explication: "Screen brightness is better close to that of the room."
            },
            {
                q: "Visual discomfort lasting several days calls for what?",
                options: [
                    "An examination",
                    "A software filter",
                    "A longer break"
                ],
                a: 0,
                explication: "An unsuitable prescription is a frequent cause, and no display setting corrects it."
            },
            {
                q: "Why does the eye tire in front of a screen?",
                options: [
                    "It fixes on a close plane with no release",
                    "The screen gives off too much heat",
                    "The colours are too bright"
                ],
                a: 0,
                explication: "Looking into the distance for a few seconds is enough to release the focusing muscle."
            }
        ],

        // ---------------------------------------------------------------
        "breaks": [
            // Series 1
            {
                q: "What break does French law require beyond six hours of work?",
                options: [
                    "20 minutes",
                    "45 minutes",
                    "One hour"
                ],
                a: 0,
                explication: "It is a floor, and it says nothing about how the breaks are spread. Other countries set their own."
            },
            {
                q: "Which protects better: one block or several breaks?",
                options: [
                    "Several short breaks",
                    "A single twenty-minute block",
                    "The two are equivalent"
                ],
                a: 0,
                explication: "A usual ergonomic marker is about five minutes per hour worked."
            },
            {
                q: "Is scrolling a feed during a break a break?",
                options: [
                    "No: it is the same resource used differently",
                    "Yes, since you are not working",
                    "Yes, if it is short"
                ],
                a: 0,
                explication: "Sustained attention, close plane, screen: nothing has changed."
            },
            // Series 2
            {
                q: "What do people most often do when the load rises?",
                options: [
                    "They cut breaks, and output collapses",
                    "They lengthen them",
                    "They spread them better"
                ],
                a: 0,
                explication: "The time “saved” is paid for in errors and an unproductive end of day."
            },
            {
                q: "What makes a break restorative?",
                options: [
                    "It changes register",
                    "It lasts at least ten minutes",
                    "It happens at a fixed time"
                ],
                a: 0,
                explication: "Stand up, move, look elsewhere, talk about something else."
            },
            {
                q: "Does lunch taken at the screen break up the day?",
                options: [
                    "No: it lasts an hour and breaks nothing",
                    "Yes, it is a complete break",
                    "Yes, if you do not work during it"
                ],
                a: 0,
                explication: "Same logic as the phone during a break: the register does not change."
            }
        ]
    },

    // Summary questions — distinct from the sub-section ones
    synthese: [
        {
            q: "Which question does this path ask that the Productivity guide does not?",
            options: [
                "How not to harm yourself at work",
                "How to produce more",
                "How to organise yourself better"
            ],
            a: 0,
            explication: "Two neighbouring subjects, two different questions."
        },
        {
            q: "What do setting up the workstation and breaking up sitting have in common?",
            options: [
                "Both are done once, or automatically, and demand no motivation",
                "Both require equipment",
                "Both show results immediately"
            ],
            a: 0,
            explication: "That is what makes them workable, unlike good intentions."
        },
        {
            q: "Somebody runs three times a week and sits nine hours a day. What can you say?",
            options: [
                "The activity is good, the sedentary time is untouched — two distinct levers",
                "All is well, sport makes up for it",
                "Sport is pointless in that case"
            ],
            a: 0,
            explication: "The 2,025 annual hours of sitting do not move an inch."
        },
        {
            q: "Why are these adjustments so rarely made?",
            options: [
                "The signal is faint at first, and you get used to ignoring it",
                "They are expensive",
                "They are little known"
            ],
            a: 0,
            explication: "A bad position does not hurt on the first day, nor in the first month."
        },
        {
            q: "If you apply only one thing from this level, what should it be?",
            options: [
                "Setting your screen height",
                "Buying an ergonomic chair",
                "Installing a blue-light filter"
            ],
            a: 0,
            explication: "Two minutes, and the adjustment holds for months."
        },
        {
            q: "A wrist pain has lasted three weeks. What do you do?",
            options: [
                "See somebody: it is no longer a matter of workstation setup",
                "Change mouse",
                "Wait for it to pass"
            ],
            a: 0,
            explication: "Setup prevents; it does not treat what is already settled in."
        }
    ]
};
