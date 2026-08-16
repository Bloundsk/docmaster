// ===================================
// QUESTION BANK — PRODUCTIVITY, ADVANCED LEVEL (EN)
// ===================================
// 6 questions per sub-section: 3 shown, the other 3 take over after two weeks.
//
// Les clefs de « sections » sont les ancres ANGLAISES de la page traduite :
// quiz.js apparie la banque au « id » du titre h3.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "energy-not-time": [
            // Series 1
            {
                q: "What attention rhythm is most frequently observed across a day?",
                options: [
                    "A steady rise until evening",
                    "A morning peak, an early-afternoon dip, a partial recovery",
                    "A constant level as long as you are rested"
                ],
                a: 1,
                explication: "The exact position of the phases varies a lot, but their existence is constant."
            },
            {
                q: "How do you spot your own rhythm?",
                options: [
                    "By noting your concentration level three times a day for two weeks",
                    "By trusting your general impression",
                    "By comparing with the average of your colleagues"
                ],
                a: 0,
                explication: "The pattern usually appears after ten days — and does not always match what you believed."
            },
            {
                q: "What does adding two evening hours to an already full day produce?",
                options: [
                    "A net gain of two hours of work",
                    "Hours of low output, and a degraded next day",
                    "A gain, provided you make up for it at the weekend"
                ],
                a: 1,
                explication: "Across a week, total output goes down. It is heavily documented."
            },
            // Series 2
            {
                q: "What makes a break effective?",
                options: [
                    "Its length",
                    "The fact that it changes register",
                    "The fact that it is taken at a fixed time"
                ],
                a: 1,
                explication: "Checking your phone is not a break for attention: it is the same resource, called on differently."
            },
            {
                q: "What is the practical consequence of the daily rhythm, rarely applied?",
                options: [
                    "Put deep work in the peak, mechanical tasks in the dip",
                    "Start earlier in the morning",
                    "Spread tasks evenly"
                ],
                a: 0,
                explication: "Yet the peak is very often given to messages and meetings."
            },
            {
                q: "Why does the drop in output from skipping breaks go unnoticed?",
                options: [
                    "Because it is small",
                    "Because you stay busy while producing less",
                    "Because it only appears after several weeks"
                ],
                a: 1,
                explication: "The activity stays visible; it is the result that falls."
            }
        ],

        // ---------------------------------------------------------------
        "systems-not-willpower": [
            // Series 1
            {
                q: "Why does a method that requires thinking of it every day eventually give way?",
                options: [
                    "Because it is badly designed",
                    "Because willpower is a limited resource, already largely consumed",
                    "Because it takes too much time"
                ],
                a: 1,
                explication: "It is not a question of personal weakness."
            },
            {
                q: "What effect does adding twenty seconds of effort in front of an action have?",
                options: [
                    "None, it is negligible",
                    "It sharply reduces how often it happens",
                    "It makes it more rewarding"
                ],
                a: 1,
                explication: "And removing twenty raises it as much. It is the most powerful lever in the field."
            },
            {
                q: "What does anchoring a habit consist of?",
                options: [
                    "Attaching it to an already automatic action",
                    "Noting it in your calendar",
                    "Committing to it publicly"
                ],
                a: 0,
                explication: "The trigger already exists: there is nothing to remember."
            },
            // Series 2
            {
                q: "Which restart rule separates a lasting habit from an aborted attempt?",
                options: [
                    "Making up the next day for what was missed",
                    "Never miss twice in a row",
                    "Starting the streak again from zero"
                ],
                a: 1,
                explication: "One missed day is an accident; two is the start of giving up."
            },
            {
                q: "What is the “minimal version” of a habit for?",
                options: [
                    "Getting a quick result",
                    "Never breaking the streak",
                    "Measuring your progress"
                ],
                a: 1,
                explication: "“Write one sentence”, “open the file”: the goal is not the result."
            },
            {
                q: "Why not establish five new habits on the same Monday?",
                options: [
                    "Because it exhausts the willpower reserve and makes them fail together",
                    "Because it takes too much time",
                    "Because they would contradict each other"
                ],
                a: 0,
                explication: "One habit at a time, six to eight weeks, then the next."
            }
        ],

        // ---------------------------------------------------------------
        "collective-productivity": [
            // Series 1
            {
                q: "What does a meeting really cost?",
                options: [
                    "Its length",
                    "Its length multiplied by the number of participants",
                    "The organiser's preparation time"
                ],
                a: 1,
                explication: "One hour with eight people is a whole working day."
            },
            {
                q: "What are the three cumulative conditions of a useful meeting?",
                options: [
                    "An agenda, minutes, a fixed time",
                    "Something to decide, the right people, preparation read beforehand",
                    "A room, a chair, a time limit"
                ],
                a: 1,
                explication: "An information meeting can be a message."
            },
            {
                q: "Why does writing cost less than synchronous communication?",
                options: [
                    "Because it is faster to produce",
                    "Because each person reads when they can, without fragmenting their day",
                    "Because it commits the author less"
                ],
                a: 1,
                explication: "It costs the sender more and all the recipients far less."
            },
            // Series 2
            {
                q: "A weekly 1 h 30 meeting with 7 people, at €45/h loaded: what cost per session?",
                options: [
                    "€68",
                    "€473",
                    "€315"
                ],
                a: 1,
                explication: "10 h 30 of work per session, that is about €22,700 a year."
            },
            {
                q: "What is a meeting that ends with no decision and no assigned action worth?",
                options: [
                    "It maintained team cohesion",
                    "It did not happen: it occupied time",
                    "It prepares the next one"
                ],
                a: 1,
                explication: "Something to decide is the first of the three conditions."
            },
            {
                q: "What does a culture where every message calls for an answer within minutes produce?",
                options: [
                    "A more responsive team",
                    "The impossibility of deep work, for everyone simultaneously",
                    "Better information flow"
                ],
                a: 1,
                explication: "Explicitly agreeing on response times frees the whole team at once."
            }
        ],

        // ---------------------------------------------------------------
        "stepping-back": [
            // Series 1
            {
                q: "What happens without a regular moment for stepping back?",
                options: [
                    "The system stabilises by itself",
                    "The drift accumulates until it is abandoned wholesale",
                    "Tasks sort themselves naturally"
                ],
                a: 1,
                explication: "Commitments made six months ago no longer make sense, and nobody decides to drop them."
            },
            {
                q: "What question should you ask about each current project?",
                options: [
                    "How much time have I already invested?",
                    "If this did not exist yet, would I start it today?",
                    "Who else could take it over?"
                ],
                a: 1,
                explication: "If the answer is no, the project survives only through inertia."
            },
            {
                q: "What should you do when an organising system goes off the rails?",
                options: [
                    "Adopt a new one",
                    "Reinstate the regular review",
                    "Reduce the number of projects tracked"
                ],
                a: 1,
                explication: "Changing tool simply postpones the problem by a quarter."
            },
            // Series 2
            {
                q: "What does the thirty-minute weekly review cover?",
                options: [
                    "Empty the inboxes, review the projects, plan the week",
                    "Revise your annual objectives",
                    "Compare the available tools"
                ],
                a: 0,
                explication: "It is the review that prevents accumulation."
            },
            {
                q: "What does the rule “nothing new without taking something out” force?",
                options: [
                    "The trade-off at the moment of adding, rather than six months later in a hurry",
                    "A permanent reduction in workload",
                    "Systematic delegation"
                ],
                a: 0,
                explication: "Adding is easy and gratifying; stopping means owning a renunciation."
            },
            {
                q: "Why should time already invested in a project not justify continuing it?",
                options: [
                    "Because it will not come back, whatever you do next",
                    "Because it was badly spent",
                    "Because another project is always more profitable"
                ],
                a: 0,
                explication: "Only the value of what remains to be done counts, not what has been spent."
            }
        ]
    },

    // Summary questions — distinct from the sub-section ones
    synthese: [
        {
            q: "What is the thread running through this level?",
            options: [
                "What lasts for years does not depend on motivation",
                "The strictest methods are the most effective",
                "The tool determines whether a system succeeds"
            ],
            a: 0,
            explication: "Body rhythm, environment, collective rules, regular review: none of it needs daily willpower."
        },
        {
            q: "What do arranging the environment and moving to asynchronous have in common?",
            options: [
                "Both remove an effort instead of demanding more discipline",
                "Both require dedicated software",
                "Both work only in a team"
            ],
            a: 0,
            explication: "One removes friction for the individual, the other for the group."
        },
        {
            q: "Why does personal organisation quickly reach a limit?",
            options: [
                "Because most interruptions and lost time are collective",
                "Because personal methods are unreliable",
                "Because it demands too much consistency"
            ],
            a: 0,
            explication: "A badly organised team cancels out everyone's individual organisation."
        },
        {
            q: "Someone fails for the third time to keep a habit. Which hypothesis is likeliest?",
            options: [
                "They lack discipline",
                "The habit rests on motivation rather than on the environment",
                "They chose the wrong habit"
            ],
            a: 1,
            explication: "Anchoring, minimal version, friction removed, restart rule: these are what is almost always missing."
        },
        {
            q: "Why does a new system work for a few weeks before drifting in its turn?",
            options: [
                "Because you have just reset everything, not because it is better",
                "Because novelty motivates durably",
                "Because it is better suited at the start"
            ],
            a: 0,
            explication: "It was not the method that was missing, it was the review."
        },
        {
            q: "If you apply only one thing from this level, what should it be?",
            options: [
                "Put hard work in your best window",
                "Reduce the number of meetings",
                "Adopt a single tool"
            ],
            a: 0,
            explication: "Two hours at the right time are worth four at the wrong one — and it costs nothing."
        }
    ]
};
