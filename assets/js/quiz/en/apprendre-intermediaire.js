// ===================================
// QUESTION BANK — LEARNING HOW TO LEARN, INTERMEDIATE LEVEL (EN)
// ===================================
// 6 questions per sub-section: 3 shown, the other 3 take over after two weeks.
//
// Les clefs de « sections » sont les ancres ANGLAISES de la page traduite :
// quiz.js apparie la banque au « id » du titre h3.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "interleaving": [
            // Series 1
            {
                q: "Why does doing twenty exercises of the same type in a row deceive you?",
                options: [
                    "Because the exercises are too easy",
                    "Because you never have to identify which type it is",
                    "Because it takes too long"
                ],
                a: 1,
                explication: "You apply the method you have just read, and it comes out right. The series flows."
            },
            {
                q: "Over 48 exercises of four types, what gap separates blocked from interleaved practice on the delayed test?",
                options: [
                    "A negligible gap",
                    "About 10 passed against about 30",
                    "About 30 against about 10"
                ],
                a: 1,
                explication: "Same number of exercises, same time. Only the order changes."
            },
            {
                q: "Which part of the work does blocked practice leave out?",
                options: [
                    "Recognising the type of problem",
                    "Applying the method",
                    "The calculation itself"
                ],
                a: 0,
                explication: "On the day of the test nobody announces the type — and that is the hard part."
            },
            // Series 2
            {
                q: "What does interleaving feel like during the session?",
                options: [
                    "Like doing better",
                    "Like doing worse",
                    "No difference"
                ],
                a: 1,
                explication: "That feeling is accurate — at the time. It reverses on the delayed test."
            },
            {
                q: "What distinguishes interleaving from flitting about?",
                options: [
                    "Interleaving alternates exercises close enough to be confused",
                    "Interleaving changes subject every ten minutes",
                    "Nothing, they are two words for the same thing"
                ],
                a: 0,
                explication: "It is precisely the possible confusion that makes the exercise useful."
            },
            {
                q: "How should you approach a method you have just discovered?",
                options: [
                    "Twenty grouped exercises before moving on to something else",
                    "Straight into the mix, with no dedicated exercise",
                    "Two or three grouped exercises, then a mix of everything seen so far"
                ],
                a: 2,
                explication: "Long enough to understand the method, then put it in competition with the others."
            }
        ],

        // ---------------------------------------------------------------
        "elaboration": [
            // Series 1
            {
                q: "Which question sums up elaboration?",
                options: [
                    "How long will this take me?",
                    "Is it on the syllabus?",
                    "Why is this true?"
                ],
                a: 2,
                explication: "Then: how does it fit, or fail to fit, with what I already know?"
            },
            {
                q: "Why is an idea tied to others easier to retrieve?",
                options: [
                    "Because it is shorter",
                    "Because it becomes reachable by several routes",
                    "Because it is more interesting"
                ],
                a: 1,
                explication: "Only one route needs to work for you to find it."
            },
            {
                q: "Neatly copying out a definition exercises what?",
                options: [
                    "The hand",
                    "Memory",
                    "Understanding"
                ],
                a: 0,
                explication: "Restating it in your own words forces you to build meaning — and reveals if you have not understood."
            },
            // Series 2
            {
                q: "What is an example you found yourself worth?",
                options: [
                    "Less than the one in the course",
                    "It mainly serves to illustrate",
                    "It is the proof that you hold the idea"
                ],
                a: 2,
                explication: "The one in the course has been read, it proves nothing."
            },
            {
                q: "What do useful notes look like?",
                options: [
                    "A set of answers, nicely colour-coded",
                    "An exhaustive summary of the course",
                    "A set of questions, often ugly"
                ],
                a: 2,
                explication: "Recopying a course in colour takes hours, produces a handsome object and leaves little behind."
            },
            {
                q: "What counts in a reading session is:",
                options: [
                    "What you put the content through during that time",
                    "The time spent on the content",
                    "The number of pages covered"
                ],
                a: 0,
                explication: "An elaborated reading takes three times longer and leaves ten times more."
            }
        ],

        // ---------------------------------------------------------------
        "deliberate-practice": [
            // Series 1
            {
                q: "What are the three conditions of deliberate practice?",
                options: [
                    "Work for a long time, regularly, and in silence",
                    "Review, review, review",
                    "Work on what you get wrong, stay at the edge of your ability, get quick feedback"
                ],
                a: 2,
                explication: "The first is the simplest and the least respected."
            },
            {
                q: "Over 5 h a week for 12 weeks, what does moving from 20% to 60% of time on weak points change?",
                options: [
                    "12 useful hours against 36",
                    "A negligible gap",
                    "You have to work three times longer"
                ],
                a: 0,
                explication: "Three times the progress for the same total number of hours."
            },
            {
                q: "Why can someone drive for twenty years without driving better?",
                options: [
                    "Because age degrades reflexes",
                    "Because the roads change",
                    "Because practice alone does not produce improvement"
                ],
                a: 2,
                explication: "It takes all three conditions: weak points, the right difficulty, quick feedback."
            },
            // Series 2
            {
                q: "What does a good practice session look like?",
                options: [
                    "It runs without a single error",
                    "It leaves a trail of mistakes",
                    "It is long"
                ],
                a: 1,
                explication: "A faultless session mainly signals that you stayed on familiar ground."
            },
            {
                q: "What is “I spent six hours on it” worth as an indicator?",
                options: [
                    "It is the best indicator available",
                    "It depends on the subject",
                    "Nothing, until you know what on"
                ],
                a: 2,
                explication: "Counting hours is convenient and misleading; counting corrected mistakes is honest."
            },
            {
                q: "Does an exercise that is too hard produce improvement?",
                options: [
                    "Yes, the harder the better",
                    "Yes, provided you persist",
                    "No: too easy teaches nothing, too hard teaches nothing either"
                ],
                a: 2,
                explication: "The edge of your ability: make mistakes regularly, succeed most of the time."
            }
        ],

        // ---------------------------------------------------------------
        "sleep-and-consolidation": [
            // Series 1
            {
                q: "When does most of the consolidation happen?",
                options: [
                    "During the sleep that follows",
                    "During learning",
                    "During the next day's review"
                ],
                a: 0,
                explication: "The night after learning is not neutral time, it is working time."
            },
            {
                q: "For the same amount of time, what is revising in the evening then sleeping worth?",
                options: [
                    "More than revising on the morning of a test the next day",
                    "Less than revising in the morning",
                    "The same thing"
                ],
                a: 0,
                explication: "The content goes straight through the phase that fixes it."
            },
            {
                q: "What do you trade in an all-nighter of revision?",
                options: [
                    "Sleep against extra memory",
                    "Three hours of rereading against a whole day's consolidation",
                    "Nothing, provided you catch up afterwards"
                ],
                a: 1,
                explication: "Three hours of the worst method against a whole day's filing."
            },
            // Series 2
            {
                q: "Is checking your phone during a break a break?",
                options: [
                    "Yes, as long as you are not working",
                    "No: it is a change of subject, not a break for memory",
                    "Yes, if it is short"
                ],
                a: 1,
                explication: "A genuine break gives the brain time to replay what has just been seen."
            },
            {
                q: "Can a short night be made up at the weekend?",
                options: [
                    "Yes, completely",
                    "Yes, if you sleep two hours longer",
                    "No: what was not consolidated is not consolidated retroactively"
                ],
                a: 2,
                explication: "Regular hours weigh more than the weekly total of hours slept."
            },
            {
                q: "What weighs most on consolidation?",
                options: [
                    "Regular hours",
                    "The total number of hours in the week",
                    "The time you get up"
                ],
                a: 0,
                explication: "It is also the easiest part to put right."
            }
        ]
    },

    // Summary questions — distinct from the sub-section ones
    synthese: [
        {
            q: "What is the thread running through this level?",
            options: [
                "The organisation around learning: the order, the processing, the effort, the night",
                "Working more hours each week",
                "Choosing the right software"
            ],
            a: 0,
            explication: "The beginner level was about when to come back; this one about organising the in-between."
        },
        {
            q: "What do interleaving and deliberate practice have in common?",
            options: [
                "Both take more hours",
                "Both apply only to mathematics",
                "Both degrade the comfort of the session and improve the result at a distance"
            ],
            a: 2,
            explication: "That is the mark of useful difficulties, already met at the beginner level."
        },
        {
            q: "A pupil does thirty exercises of the same type and gets them all right. What should you conclude?",
            options: [
                "That they have mastered the topic",
                "That they are practising applying, not choosing",
                "That they should move on to the next type"
            ],
            a: 1,
            explication: "The hard part — recognising the type — has not been practised once."
        },
        {
            q: "Why is recopying your notes so popular?",
            options: [
                "Because it is effective",
                "Because it looks like work and produces a visible object",
                "Because it is quick"
            ],
            a: 1,
            explication: "The hand works, not the memory. A set of questions is ugly and it works."
        },
        {
            q: "Which measure in this level costs least and pays most?",
            options: [
                "Revising in the evening, then sleeping",
                "Adding two hours of work at the weekend",
                "Changing your note-taking method"
            ],
            a: 0,
            explication: "The cheapest review there is happens with your eyes closed."
        },
        {
            q: "If you apply only one thing from this level, what should it be?",
            options: [
                "Recopying your notes more carefully",
                "Mixing the types of exercise instead of grouping them",
                "Making the sessions longer"
            ],
            a: 1,
            explication: "You will make more mistakes. That is the sign it is working."
        }
    ]
};
