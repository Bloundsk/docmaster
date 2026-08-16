// ===================================
// QUESTION BANK — PRODUCTIVITY, INTERMEDIATE LEVEL (EN)
// ===================================
// 6 questions per sub-section: 3 shown, the other 3 take over after two weeks.
//
// Les clefs de « sections » sont les ancres ANGLAISES de la page traduite :
// quiz.js apparie la banque au « id » du titre h3.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "cost-of-switching": [
            // Series 1
            {
                q: "After an interruption, how long does it take to regain concentration on a demanding task?",
                options: [
                    "A few seconds",
                    "On the order of fifteen to twenty minutes",
                    "About an hour"
                ],
                a: 1,
                explication: "That is why a two-minute break costs twenty."
            },
            {
                q: "What do 9 interruptions of 3 minutes really cost, with 12 minutes to get back in each time?",
                options: [
                    "27 minutes",
                    "1 h 48",
                    "2 h 15"
                ],
                a: 2,
                explication: "27 minutes of interruption and 108 minutes getting back in: nearly 28% of an 8-hour day."
            },
            {
                q: "Does the brain handle two demanding tasks in parallel?",
                options: [
                    "No: it alternates, paying the switching cost on every round trip",
                    "Yes, with training",
                    "Yes, provided they are of different kinds"
                ],
                a: 0,
                explication: "What looks like parallel work is sequential work with transition fees."
            },
            // Series 2
            {
                q: "Is turning off notifications enough to protect concentration?",
                options: [
                    "Yes, it is the decisive measure",
                    "No, if you check for yourself every ten minutes",
                    "Yes, provided you turn them off all day"
                ],
                a: 1,
                explication: "Self-interruption produces exactly the same restart cost."
            },
            {
                q: "Why note where you were before stopping?",
                options: [
                    "To justify the time spent",
                    "Because it markedly shortens getting back in",
                    "To share progress with the team"
                ],
                a: 1,
                explication: "The context is then on paper rather than to be rebuilt from memory."
            },
            {
                q: "Why announce a window of unavailability?",
                options: [
                    "So that others do not have to interrupt",
                    "To assert your status",
                    "To avoid having to reply afterwards"
                ],
                a: 0,
                explication: "The interruption becomes unnecessary rather than merely refused."
            }
        ],

        // ---------------------------------------------------------------
        "time-blocking": [
            // Series 1
            {
                q: "What does a calendar say better than a task list?",
                options: [
                    "The list says what to do, but not when",
                    "The list says when, but not what",
                    "The list says how long it will take"
                ],
                a: 0,
                explication: "A list of twenty items facing an empty calendar mostly produces guilt."
            },
            {
                q: "On an 8-hour day with 2 h 30 of meetings, 1 h 15 of messages and 1 h of unplanned events, what is left?",
                options: [
                    "5 hours",
                    "3 h 15",
                    "6 hours"
                ],
                a: 1,
                explication: "Planning six hours of output for that day fails by arithmetic, not for lack of discipline."
            },
            {
                q: "What does Parkinson's law say?",
                options: [
                    "A task tends to fill all the time allotted to it",
                    "Work grows with the number of participants",
                    "Urgent tasks drive out important ones"
                ],
                a: 0,
                explication: "Hence the value of setting a duration before starting, even arbitrarily."
            },
            // Series 2
            {
                q: "Why does a slot hold better than an intention?",
                options: [
                    "Because a slot can be defended, an intention cannot",
                    "Because it is longer",
                    "Because colleagues can see it"
                ],
                a: 0,
                explication: "The difference is as much psychological as practical."
            },
            {
                q: "At what fill level does a plan survive the unexpected?",
                options: [
                    "100%, so as to lose nothing",
                    "About 70%",
                    "50% at most"
                ],
                a: 1,
                explication: "A calendar with no empty space does not survive the first emergency."
            },
            {
                q: "What does it reveal when the tasks do not fit in the calendar?",
                options: [
                    "That you should work faster",
                    "That there are too many of them",
                    "That the calendar is badly designed"
                ],
                a: 1,
                explication: "The list hid it; the calendar shows it. That is the useful confrontation."
            }
        ],

        // ---------------------------------------------------------------
        "handling-streams": [
            // Series 1
            {
                q: "Why handle messages in batches rather than as they come?",
                options: [
                    "The handling time is identical, but without the switching fees",
                    "The handling itself is faster",
                    "There are fewer messages"
                ],
                a: 0,
                explication: "The work is the same; it was the transitions that cost hours."
            },
            {
                q: "How do you settle the fear of missing an emergency when batching?",
                options: [
                    "By checking every hour anyway",
                    "By agreeing on a channel reserved for real emergencies",
                    "By warning each sender individually"
                ],
                a: 1,
                explication: "The phone, usually. That is enough to defuse the fear."
            },
            {
                q: "What principle actually empties an inbox?",
                options: [
                    "Replying to everything the same day",
                    "Touching each item once, and deciding immediately",
                    "Archiving everything each Friday"
                ],
                a: 1,
                explication: "Reply, schedule, delegate, archive or delete — but decide."
            },
            // Series 2
            {
                q: "What makes an inbox overflow?",
                options: [
                    "The volume of messages received",
                    "Reading messages without doing anything with them, then rereading them",
                    "The absence of folders"
                ],
                a: 1,
                explication: "It is not the number of messages that costs, it is how often you look at them."
            },
            {
                q: "Why not start the day with your messages?",
                options: [
                    "Because it gives your best window to other people's priorities",
                    "Because morning messages are less important",
                    "Because it is better to wait for yesterday's replies"
                ],
                a: 0,
                explication: "The first hour is generally when attention is most available."
            },
            {
                q: "How many dedicated passes at messages are enough in most jobs?",
                options: [
                    "One, at the end of the day",
                    "Two",
                    "One every hour"
                ],
                a: 1,
                explication: "Two slots a day cover the great majority of situations."
            }
        ],

        // ---------------------------------------------------------------
        "prioritising-for-real": [
            // Series 1
            {
                q: "What does prioritising really consist of?",
                options: [
                    "Ordering tasks by importance",
                    "Giving some up",
                    "Spreading them over several weeks"
                ],
                a: 1,
                explication: "As long as no task is dropped, there has been no prioritising, only sorting."
            },
            {
                q: "What question should you ask before accepting a request?",
                options: [
                    "How long will it take?",
                    "What will I not do if I say yes?",
                    "Could someone else do it?"
                ],
                a: 1,
                explication: "If the answer is “nothing important”, it is a real yes."
            },
            {
                q: "Why does the cost of a “yes” stay invisible?",
                options: [
                    "Because it is small",
                    "Because nobody comes to claim the work that was not done",
                    "Because it is pushed to the following month"
                ],
                a: 1,
                explication: "The refusal is real, it is simply silent."
            },
            // Series 2
            {
                q: "What does “I can do it, but it pushes project X back a week” achieve?",
                options: [
                    "It makes the cost visible and returns the decision to whoever is asking",
                    "It avoids having to answer",
                    "It turns a refusal into a promise"
                ],
                a: 0,
                explication: "The explicit trade-off: neither a flat refusal, nor a yes that hides the cost."
            },
            {
                q: "Why does the important never arrive spontaneously in a day?",
                options: [
                    "Because it is harder",
                    "Because it stays silent, unlike the urgent",
                    "Because it mostly concerns the long term"
                ],
                a: 1,
                explication: "You have to reserve time for it, or the urgent fills the day entirely."
            },
            {
                q: "What should you do with a task list that has been growing for six months?",
                options: [
                    "Push it to the next quarter",
                    "Review it and delete what will never be done",
                    "Break it into sub-tasks"
                ],
                a: 1,
                explication: "Those items take up attention on every reread and maintain a permanent sense of failure."
            }
        ]
    },

    // Summary questions — distinct from the sub-section ones
    synthese: [
        {
            q: "What is the thread running through this level?",
            options: [
                "Filling the calendar more efficiently",
                "Protecting attention rather than multiplying tasks",
                "Adopting the right management tool"
            ],
            a: 1,
            explication: "Attention is the scarce resource; time only appears to be."
        },
        {
            q: "What do handling messages as they come and supposedly parallel work have in common?",
            options: [
                "Both pay a repeated switching cost",
                "Both save time",
                "Both require a good tool"
            ],
            a: 0,
            explication: "It is the same mechanism, applied to messages in one case and tasks in the other."
        },
        {
            q: "Why do a 100% plan and a list that never shrinks fail for the same reason?",
            options: [
                "Both refuse to make a trade-off",
                "Both lack method",
                "Both depend on software"
            ],
            a: 0,
            explication: "Neither the calendar nor the list drops anything: reality does it, in a hurry."
        },
        {
            q: "Which measure in this level costs least and pays most?",
            options: [
                "Changing task management tool",
                "An hour of deep work before opening your mail",
                "Adding two hours to the day"
            ],
            a: 1,
            explication: "Nothing important is lost in sixty minutes, and the whole day is changed by it."
        },
        {
            q: "A colleague spends the morning on messages “to be free afterwards”. What is the problem?",
            options: [
                "They handle messages too slowly",
                "They give their best window to other people's priorities",
                "They should handle them in three batches"
            ],
            a: 1,
            explication: "The window where attention is most available then serves what needs it least."
        },
        {
            q: "If you apply only one thing from this level, what should it be?",
            options: [
                "Reserve time for important work in the calendar, and defend it",
                "Install a new app",
                "Reply to requests faster"
            ],
            a: 0,
            explication: "What is not in the calendar will be absorbed by the urgent, always."
        }
    ]
};
