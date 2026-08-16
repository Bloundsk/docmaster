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
                    "No: it is an adaptive response, useful and normal",
                    "Yes, as soon as it appears",
                    "Yes, if it is frequent"
                ],
                a: 0,
                explication: "The problem is not that it fires, it is that it no longer stops."
            },
            {
                q: "What separates chronic stress from acute stress?",
                options: [
                    "The absence of a return to normal",
                    "Its intensity",
                    "Its cause"
                ],
                a: 0,
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
                    "The adaptation is gradual and moves the point of comparison",
                    "People refuse to admit it",
                    "The symptoms are invisible"
                ],
                a: 0,
                explication: "Hence “it is fine, it is just a busy patch” held for eight months."
            },
            {
                q: "Who often notices the situation first?",
                options: [
                    "The people around you",
                    "The person concerned",
                    "The employer"
                ],
                a: 0,
                explication: "It is more visible from the outside than from within."
            },
            {
                q: "What does “I handle stress badly” assume?",
                options: [
                    "That the load is a given and coping is a skill",
                    "That the person lacks method",
                    "That the job is badly defined"
                ],
                a: 0,
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
                    "It changes the effect of everything else",
                    "It has no measured effect",
                    "It replaces latitude"
                ],
                a: 0,
                explication: "The most unfavourable situation combines high demand, low latitude and low support."
            },
            // Series 2
            {
                q: "A job called “active” in this model is:",
                options: [
                    "Demanding, with room to manoeuvre",
                    "Undemanding and autonomous",
                    "Very demanding and constrained"
                ],
                a: 0,
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
                    "11 consecutive hours",
                    "8 consecutive hours",
                    "9 consecutive hours"
                ],
                a: 0,
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
                    "They are not comfort recommendations: they are binding",
                    "That they are advised",
                    "That they vary by company"
                ],
                a: 0,
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
                    "No longer thinking about it, and not just no longer doing it",
                    "Keeping your distance from colleagues",
                    "Reducing your involvement at work"
                ],
                a: 0,
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
                    "It signals to the recipients what is expected",
                    "None, if you say not to reply",
                    "It lightens the following day"
                ],
                a: 0,
                explication: "That is why scheduled sending changes habits more than a charter on the wall."
            },
            {
                q: "Staying reachable “just in case” without receiving anything: what is the cost?",
                options: [
                    "The expectation prevents detachment, and so recovery",
                    "None, if nothing comes in",
                    "Only the tiredness from the phone"
                ],
                a: 0,
                explication: "It is not the number of messages received that weighs, it is the possibility of receiving one."
            },
            // Series 2
            {
                q: "What must French companies define on this subject?",
                options: [
                    "How the right to disconnect is exercised, by agreement or by charter",
                    "A time at which the servers shut down",
                    "Nothing, it is an individual matter"
                ],
                a: 0,
                explication: "The arrangements range from no obligation to reply to scheduled sending."
            },
            {
                q: "What replaces separation by place, when working from home?",
                options: [
                    "Markers: an end time, a dedicated space, a closing ritual",
                    "A completely separate room, without which nothing works",
                    "Hours imposed by the employer"
                ],
                a: 0,
                explication: "These signals are artificial and they work: the brain uses context to change mode."
            },
            {
                q: "Is disconnecting purely an individual matter?",
                options: [
                    "No: it plays out largely in what each person sends",
                    "Yes, everybody manages their own boundaries",
                    "Yes, except where there is a company agreement"
                ],
                a: 0,
                explication: "What you send in the evening sets what others believe they must do."
            }
        ]
    },

    // Summary questions — distinct from the sub-section ones
    synthese: [
        {
            q: "What is the thread running through this level?",
            options: [
                "What makes a load sustainable, or stops it being so",
                "How to reduce your workload",
                "How to withstand stress better"
            ],
            a: 0,
            explication: "The distinction is not between stressful and not stressful."
        },
        {
            q: "What do latitude and support have in common?",
            options: [
                "Both change the effect of the same workload",
                "Both depend on the employee",
                "Both are measured in hours"
            ],
            a: 0,
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
                "Because adaptation erases the points of comparison",
                "To build legal evidence",
                "To show it to your employer"
            ],
            a: 0,
            explication: "Re-read in six months, that piece of paper will say what memory will not."
        },
        {
            q: "Which measure in this level costs least and changes most for a team?",
            options: [
                "Scheduling late messages instead of sending them",
                "Cutting the number of meetings",
                "Adding a disconnection charter"
            ],
            a: 0,
            explication: "One click, and it changes everybody's expectations."
        },
        {
            q: "A colleague says they have not recovered for weeks. What is the useful response?",
            options: [
                "Point them to a doctor or an occupational doctor, both bound by confidentiality",
                "Advise them to manage their stress better",
                "Suggest they take some holiday"
            ],
            a: 0,
            explication: "Neither this guide nor somebody close can go further than naming and directing."
        }
    ]
};
