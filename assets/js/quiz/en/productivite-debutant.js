// ===================================
// QUESTION BANK — PRODUCTIVITY, BEGINNER LEVEL (EN)
// ===================================
// 6 questions per sub-section: 3 shown, the other 3 take over after two weeks.
//
// Les clefs de « sections » sont les ancres ANGLAISES de la page traduite :
// quiz.js apparie la banque au « id » du titre h3.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "the-pomodoro-technique": [
            // Series 1
            {
                q: "What is the basic rhythm of the Pomodoro technique?",
                options: [
                    "50 minutes of work followed by 10 full minutes of pause",
                    "90 minutes of work, 20 of break",
                    "25 minutes with no interruption, then 5 minutes of break"
                ],
                a: 2,
                explication: "After four cycles, a long break of 15 to 30 minutes."
            },
            {
                q: "What does the method act against first of all?",
                options: [
                    "End-of-day tiredness, which makes everything much harder",
                    "A lack of skills",
                    "Procrastination: a short commitment is easy to make"
                ],
                a: 2,
                explication: "“Work on this file” is vague and daunting; “give it 25 minutes” is doable."
            },
            {
                q: "What should you do with an idea that comes up during a pomodoro?",
                options: [
                    "Act on it immediately, without waiting",
                    "Note it on paper and carry on",
                    "Deliberately forget it and carry on"
                ],
                a: 1,
                explication: "Picking up the thread after a break takes several minutes of restarting."
            },
            // Series 2
            {
                q: "Where does the method's gain really come from?",
                options: [
                    "From removing the time lost restarting after each interruption",
                    "From working faster",
                    "From innate concentration"
                ],
                a: 0,
                explication: "Work interrupted six times an hour does not advance slowly: it never starts."
            },
            {
                q: "Should you skip breaks when the work is going well?",
                options: [
                    "No: breaks are part of the mechanism and let the fourth block be as good as the first",
                    "Yes, ride the momentum",
                    "Yes, provided you stop before two hours"
                ],
                a: 0,
                explication: "It is what produces exhaustion by the end of the day."
            },
            {
                q: "Is the 25-minute length untouchable?",
                options: [
                    "Yes, it is the scientific basis of the entire method used",
                    "No: some creative tasks need 50 minutes just to get into",
                    "Yes, otherwise the method stops working"
                ],
                a: 1,
                explication: "Adapt the length, keep the principle: a genuinely continuous block."
            }
        ],

        // ---------------------------------------------------------------
        "the-gtd-method": [
            // Series 1
            {
                q: "What observation is the GTD method based on?",
                options: [
                    "Memory is excellent for storing things over time",
                    "You have to work for longer",
                    "Memory is good for thinking and bad for storing"
                ],
                a: 2,
                explication: "As long as a task is written nowhere, the mind keeps returning to check it is not forgotten."
            },
            {
                q: "What are the five steps of GTD?",
                options: [
                    "Plan, delegate, execute, control, archive",
                    "List, prioritise, break down, do, celebrate",
                    "Capture, clarify, organise, review, engage"
                ],
                a: 2,
                explication: "Clarifying means defining, for each item, the next concrete physical action."
            },
            {
                q: "What is the two-minute rule?",
                options: [
                    "Think for two minutes before starting",
                    "If an action takes less than two minutes, do it immediately",
                    "Limit every task to two minutes"
                ],
                a: 1,
                explication: "Noting it, filing it, rereading it and finding it again would cost more than doing it."
            },
            // Series 2
            {
                q: "“Organise the seminar” has been put off for weeks. Why?",
                options: [
                    "It is not an action but a project: the brain does not know where to start",
                    "Lack of motivation",
                    "Because the deadline is far off"
                ],
                a: 0,
                explication: "“Call the caterer for a quote for 30 people” gets done without thinking."
            },
            {
                q: "Which step does everyone abandon first, although it holds the system together?",
                options: [
                    "The daily capture step",
                    "The weekly review",
                    "Organising by context"
                ],
                a: 1,
                explication: "Without it, the list fills with stale items, you stop believing in it, and go back to memory."
            },
            {
                q: "What is GTD's real goal?",
                options: [
                    "Doing absolutely everything in a single day",
                    "Having nothing left to remember",
                    "Working a good deal faster than before"
                ],
                a: 1,
                explication: "An unloaded mind thinks better. It is mental load the method targets, not speed."
            }
        ],

        // ---------------------------------------------------------------
        "the-eisenhower-matrix": [
            // Series 1
            {
                q: "Which two dimensions is the Eisenhower matrix built on?",
                options: [
                    "Urgency and importance",
                    "Difficulty and duration",
                    "Cost and expected benefit"
                ],
                a: 0,
                explication: "Four boxes: do now, schedule, delegate, drop."
            },
            {
                q: "Which quadrant has the most lasting effect?",
                options: [
                    "Urgent and important",
                    "Important but not urgent",
                    "Urgent but not important"
                ],
                a: 1,
                explication: "Training, prevention, relationships: none has a deadline, so none ever forces itself on you."
            },
            {
                q: "Where do most of today's emergencies come from?",
                options: [
                    "Unforeseeable events",
                    "Important but non-urgent tasks neglected six months ago",
                    "Colleagues being badly organised on their own side of things"
                ],
                a: 1,
                explication: "A skill left unmaintained becomes an emergency; a service postponed becomes a breakdown."
            },
            // Series 2
            {
                q: "What question should you ask about a task presented as urgent?",
                options: [
                    "Urgent for whom?",
                    "How long will it take?",
                    "Who asked for it first?"
                ],
                a: 0,
                explication: "Many emergencies are someone else's, transferred by an insistent message."
            },
            {
                q: "How do you concretely protect the important-but-not-urgent quadrant?",
                options: [
                    "By blocking a recurring slot in the calendar, treated as an appointment",
                    "By thinking about it every morning",
                    "By putting it at the top of your task list"
                ],
                a: 0,
                explication: "What is not in the calendar will always be absorbed by an emergency."
            },
            {
                q: "What does an empty “drop” quadrant mean?",
                options: [
                    "That you are well organised",
                    "That all your tasks are useful",
                    "That you have given nothing up: the exercise did not do its job"
                ],
                a: 2,
                explication: "The matrix forces a trade-off, and a trade-off means some things will not be done."
            }
        ],

        // ---------------------------------------------------------------
        "task-management-tools": [
            // Series 1
            {
                q: "What does a task management tool actually bring?",
                options: [
                    "It makes visible an organisation that already exists, or its absence",
                    "It makes you organised",
                    "It replaces the method"
                ],
                a: 0,
                explication: "No tool makes up for the absence of a system."
            },
            {
                q: "Which criterion matters most when choosing a tool?",
                options: [
                    "The number of features",
                    "Its integration with other software",
                    "Speed of capture: past five seconds, you will stop noting things"
                ],
                a: 2,
                explication: "The system collapses at the precise moment noting becomes tiresome."
            },
            {
                q: "What do three task apps used in parallel produce?",
                options: [
                    "The certainty that none is up to date",
                    "Fuller coverage of everything there is to do",
                    "A better split of the tasks by context"
                ],
                a: 0,
                explication: "An imperfect but single system beats three perfect ones."
            },
            // Series 2
            {
                q: "What is the real test of a new tool?",
                options: [
                    "The first few days of use",
                    "The third week, when the enthusiasm has gone",
                    "The number of tasks entered in the first month"
                ],
                a: 1,
                explication: "Every tool seems wonderful at the start: it is the novelty that pleases, not the tool."
            },
            {
                q: "What is Notion's main limitation for task management?",
                options: [
                    "It costs money",
                    "It does not work offline at all, and that is simply fatal",
                    "Its flexibility is a trap: you tinker instead of doing"
                ],
                a: 2,
                explication: "Reorganising your lists looks like work without being it."
            },
            {
                q: "You have changed tool three times this year. What is the signal?",
                options: [
                    "You are refining your own method as you go",
                    "The market for these tools moves fast",
                    "The problem is probably not the tool"
                ],
                a: 2,
                explication: "Comparing apps is a particularly comfortable form of procrastination."
            }
        ]
    },

    // Summary questions — distinct from the sub-section ones
    synthese: [
        {
            q: "What do the productivity methods presented try to reduce?",
            options: [
                "Total working time",
                "What costs without producing: interruptions, repeated decisions, mental load",
                "The number of projects run at once"
            ],
            a: 1,
            explication: "None of them aims to make you work faster."
        },
        {
            q: "How many methods should you adopt at once?",
            options: [
                "All of them, they complement each other",
                "One only, given three weeks to bed in",
                "Two at the very least, so as to compare them"
            ],
            a: 1,
            explication: "Stacking four systems amounts to having none."
        },
        {
            q: "What is the main risk of the productivity field itself?",
            options: [
                "You spend more time choosing a method than doing the work",
                "The methods contradict each other on almost every single point",
                "The tools are expensive"
            ],
            a: 0,
            explication: "Installing a new tool feels very close to having made progress — without having made any."
        },
        {
            q: "You have two hours for a demanding task and lots of notifications. What comes first?",
            options: [
                "Start immediately so as not to lose time",
                "Turn off notifications, then start a continuous block of work",
                "Deal with the notifications to clear your mind"
            ],
            a: 1,
            explication: "Without that step, the Pomodoro technique makes no sense."
        },
        {
            q: "A task has been lingering on your list for a month. What is the likeliest cause?",
            options: [
                "A lack of motivation",
                "It is not important enough to you at this precise moment",
                "It is badly phrased: it is not a concrete action"
            ],
            a: 2,
            explication: "Rephrasing it as a next physical action is often enough to unblock it."
        },
        {
            q: "What is the best task management tool?",
            options: [
                "The one you will still open in three weeks",
                "The one with the most features",
                "The one used by all the professionals in the field"
            ],
            a: 0,
            explication: "Every other criterion comes far behind. Paper kept seriously beats an abandoned system."
        }
    ]
};
