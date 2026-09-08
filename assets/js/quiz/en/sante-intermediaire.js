// ===================================
// QUESTION BANK — HEALTH AT WORK, INTERMEDIATE LEVEL (EN)
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
        "acute-or-chronic": [
            // Series 1
            {
                q: "Is stress a pathology?",
                options: [
                    "Yes, as soon as it appears",
                    "No: it is an adaptive response, useful and normal",
                    "Yes, if it is frequent"
                ],
                a: 1,
                explication: "The problem is not that it fires, it is that it no longer stops."
            },
            {
                q: "What separates chronic stress from acute stress?",
                options: [
                    "Its intensity",
                    "Its cause",
                    "The absence of a return to normal"
                ],
                a: 2,
                explication: "It is not “a lot of acute stress”: it is a different state."
            },
            {
                q: "What is the right marker for situating yourself?",
                options: [
                    "Recovery, not intensity",
                    "The number of hours worked",
                    "The level of responsibility"
                ],
                a: 0,
                explication: "A busy period followed by a restorative weekend is the expected functioning."
            },
            // Series 2
            {
                q: "Why is chronic stress settling in hard to see in yourself?",
                options: [
                    "People refuse to admit it",
                    "The adaptation is gradual and moves the point of comparison",
                    "The symptoms are invisible"
                ],
                a: 1,
                explication: "Hence “it is fine, it is just a busy patch” held for eight months."
            },
            {
                q: "Who often notices the situation first?",
                options: [
                    "The person concerned",
                    "The people around you",
                    "The employer"
                ],
                a: 1,
                explication: "It is more visible from the outside than from within."
            },
            {
                q: "What does “I handle stress badly” assume?",
                options: [
                    "That the person lacks method",
                    "That the job is badly defined",
                    "That the load is a given and coping is a skill"
                ],
                a: 2,
                explication: "But organisational factors are documented and are the employer's responsibility."
            }
        ],

        // ---------------------------------------------------------------
        "demand-and-latitude": [
            // Series 1
            {
                q: "Which combination is most associated with risk?",
                options: [
                    "High demand and low latitude",
                    "High demand and high latitude",
                    "Low demand and low latitude"
                ],
                a: 0,
                explication: "It is the combination that counts, not the demand alone."
            },
            {
                q: "What is meant by latitude?",
                options: [
                    "The room left to respond to the demand",
                    "The number of working hours",
                    "The level of pay"
                ],
                a: 0,
                explication: "Deciding the order, the method, the moment; having a grip on what happens."
            },
            {
                q: "What effect does social support have in this model?",
                options: [
                    "It has no measured effect",
                    "It replaces latitude",
                    "It changes the effect of everything else"
                ],
                a: 2,
                explication: "The most unfavourable situation combines high demand, low latitude and low support."
            },
            // Series 2
            {
                q: "A job called “active” in this model is:",
                options: [
                    "Undemanding and autonomous",
                    "Demanding, with room to manoeuvre",
                    "Very demanding and constrained"
                ],
                a: 1,
                explication: "Demanding but sustainable, often stimulating."
            },
            {
                q: "Is a “passive” job comfortable?",
                options: [
                    "No: it is a long-documented wearing situation, through boredom",
                    "Yes, it is the most enviable",
                    "Yes, if it is well paid"
                ],
                a: 0,
                explication: "Disengagement, loss of skills, growing difficulty in getting out of it."
            },
            {
                q: "What is this model mainly useful for in practice?",
                options: [
                    "Naming what is missing, so it can be asked for",
                    "Filing yourself into a box",
                    "Comparing two companies"
                ],
                a: 0,
                explication: "“I have little room on the order of priorities” opens a concrete conversation."
            }
        ],

        // ---------------------------------------------------------------
        "recovery": [
            // Series 1
            {
                q: "What is the minimum daily rest between two working days, in French law?",
                options: [
                    "8 consecutive hours",
                    "11 consecutive hours",
                    "9 consecutive hours"
                ],
                a: 1,
                explication: "And 35 consecutive hours per week. In France these are enforceable minimums; check your own country."
            },
            {
                q: "Are three lots of two hours worth six hours of recovery?",
                options: [
                    "No: recovery needs continuous time",
                    "Yes, the total is the same",
                    "Yes, if the breaks are well spread"
                ],
                a: 0,
                explication: "Fragmented, it does not happen."
            },
            {
                q: "What are the three conditions of real recovery?",
                options: [
                    "Psychological detachment, control, a change of register",
                    "Sleep, sport, diet",
                    "Silence, darkness, stillness"
                ],
                a: 0,
                explication: "An evening spent doing nothing while ruminating meets none of them."
            },
            // Series 2
            {
                q: "What does “enforceable minimums” mean?",
                options: [
                    "That they are advised",
                    "They are not comfort recommendations: they are binding",
                    "That they vary by company"
                ],
                a: 1,
                explication: "Regularly falling below them engages the employer's liability."
            },
            {
                q: "How long do a holiday's benefits last?",
                options: [
                    "They fade within a few weeks of returning",
                    "All year",
                    "Until the next holiday"
                ],
                a: 0,
                explication: "A holiday repairs fatigue; it does not correct the organisation that produces it."
            },
            {
                q: "What is psychological detachment?",
                options: [
                    "Keeping your distance from colleagues",
                    "Reducing your involvement at work",
                    "No longer thinking about it, and not just no longer doing it"
                ],
                a: 2,
                explication: "It is the most often missing of the three conditions."
            }
        ],

        // ---------------------------------------------------------------
        "disconnecting": [
            // Series 1
            {
                q: "Can not replying outside working hours be held against you, in France?",
                options: [
                    "No: that is the very point of the right to disconnect",
                    "Yes, if it is urgent",
                    "Yes, in the absence of a company agreement"
                ],
                a: 0,
                explication: "The right has existed in French law since 2017. Arrangements differ elsewhere."
            },
            {
                q: "What effect does a work message sent at 11 pm have?",
                options: [
                    "None, if you say not to reply",
                    "It signals to the recipients what is expected",
                    "It lightens the following day"
                ],
                a: 1,
                explication: "That is why scheduled sending changes habits more than a charter on the wall."
            },
            {
                q: "Staying reachable “just in case” without receiving anything: what is the cost?",
                options: [
                    "None, if nothing comes in",
                    "Only the tiredness from the phone",
                    "The expectation prevents detachment, and so recovery"
                ],
                a: 2,
                explication: "It is not the number of messages received that weighs, it is the possibility of receiving one."
            },
            // Series 2
            {
                q: "What must French companies define on this subject?",
                options: [
                    "A time at which the servers shut down",
                    "Nothing, it is an individual matter",
                    "How the right to disconnect is exercised, by agreement or by charter"
                ],
                a: 2,
                explication: "The arrangements range from no obligation to reply to scheduled sending."
            },
            {
                q: "What replaces separation by place, when working from home?",
                options: [
                    "A completely separate room, without which nothing works",
                    "Markers: an end time, a dedicated space, a closing ritual",
                    "Hours imposed by the employer"
                ],
                a: 1,
                explication: "These signals are artificial and they work: the brain uses context to change mode."
            },
            {
                q: "Is disconnecting purely an individual matter?",
                options: [
                    "Yes, everybody manages their own boundaries",
                    "No: it plays out largely in what each person sends",
                    "Yes, except where there is a company agreement"
                ],
                a: 1,
                explication: "What you send in the evening sets what others believe they must do."
            }
        ]
    },

    // Summary questions — distinct from the sub-section ones
    synthese: [
        {
            q: "What is the thread running through this level?",
            options: [
                "How to reduce your workload",
                "How to withstand stress better",
                "What makes a load sustainable, or stops it being so"
            ],
            a: 2,
            explication: "The distinction is not between stressful and not stressful."
        },
        {
            q: "What do latitude and support have in common?",
            options: [
                "Both depend on the employee",
                "Both change the effect of the same workload",
                "Both are measured in hours"
            ],
            a: 1,
            explication: "Two equally loaded jobs do not have the same effect."
        },
        {
            q: "Somebody works 45 h a week with a 10 h break between two days. What can you say?",
            options: [
                "In France the 11 h minimum daily rest is not met",
                "Everything is compliant",
                "It depends on the sector only"
            ],
            a: 0,
            explication: "A one-hour gap, repeated all year, appearing on no dashboard."
        },
        {
            q: "Why write down, dated, how you are at work today?",
            options: [
                "To build legal evidence",
                "To show it to your employer",
                "Because adaptation erases the points of comparison"
            ],
            a: 2,
            explication: "Re-read in six months, that piece of paper will say what memory will not."
        },
        {
            q: "Which measure in this level costs least and changes most for a team?",
            options: [
                "Cutting the number of meetings",
                "Adding a disconnection charter",
                "Scheduling late messages instead of sending them"
            ],
            a: 2,
            explication: "One click, and it changes everybody's expectations."
        },
        {
            q: "A colleague says they have not recovered for weeks. What is the useful response?",
            options: [
                "Advise them to manage their stress better",
                "Suggest they take some holiday",
                "Point them to a doctor or an occupational doctor, both bound by confidentiality"
            ],
            a: 2,
            explication: "Neither this guide nor somebody close can go further than naming and directing."
        }
    ]
};
