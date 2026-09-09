// ===================================
// QUESTION BANK — HEALTH AT WORK, ADVANCED LEVEL (EN)
// ===================================
// 6 questions per sub-section: 3 shown, the other 3 take over after two weeks.
// The summary questions are distinct from the sub-section ones — none is reused.
//
// No question is about a symptom or a state of health: they are about rights,
// actors and procedures.
// Ce niveau décrit le DROIT FRANÇAIS. Chaque question qui cite une règle le
// dit, pour qu'un lecteur étranger ne la prenne pas pour la sienne.
//
// Les clefs de « sections » sont les ancres ANGLAISES de la page traduite :
// quiz.js apparie la banque au « id » du titre h3.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "occupational-medicine": [
            // Series 1
            {
                q: "Is the occupational doctor bound by medical confidentiality?",
                options: [
                    "No, they report to the employer",
                    "Only if the employee asks",
                    "Yes, like any doctor"
                ],
                a: 2,
                explication: "The employer only has access to the fitness conclusions, never to the content."
            },
            {
                q: "In France, can you request a visit without going through your employer?",
                options: [
                    "Yes, at any time and without justifying it",
                    "No, the request has to go through HR beforehand",
                    "Yes, but only once in any given calendar year"
                ],
                a: 0,
                explication: "The employer cannot object nor learn the reason. Arrangements differ in other countries."
            },
            {
                q: "How binding is a proposed adjustment to the job?",
                options: [
                    "It is a purely advisory opinion",
                    "It only applies after a sick leave of a certain length of time",
                    "It binds the employer, unless impossibility is demonstrated"
                ],
                a: 2,
                explication: "They can also request a study of the job and the working conditions."
            },
            // Series 2
            {
                q: "What is the occupational doctor's role?",
                options: [
                    "Treating employees",
                    "Exclusively preventive: stopping work from damaging health",
                    "Checking up on the sick leave that the employees have taken"
                ],
                a: 1,
                explication: "They do not treat. It is a frequent confusion."
            },
            {
                q: "What is the pre-return visit?",
                options: [
                    "A visit requested during a long sick leave, to prepare the return",
                    "The pre-employment check",
                    "A check before returning to work, imposed by the employer alone here"
                ],
                a: 0,
                explication: "Adjustments, phased return, redeployment: those are prepared beforehand."
            },
            {
                q: "When does the employee-requested visit take place?",
                options: [
                    "During working hours",
                    "During the employee's paid holiday",
                    "Outside working hours"
                ],
                a: 0,
                explication: "It costs neither money nor holiday days."
            }
        ],

        // ---------------------------------------------------------------
        "employer-duties": [
            // Series 1
            {
                q: "What does the employer's duty of safety bear on?",
                options: [
                    "Compensating the accidents that have happened",
                    "Prevention, not only redress",
                    "Providing the protective equipment needed"
                ],
                a: 1,
                explication: "Assess the risks, avoid them at source, adapt the work to the person."
            },
            {
                q: "Is mental health covered by that duty in French law?",
                options: [
                    "No, only physical health is actually covered by it",
                    "Only in large companies",
                    "Yes, it is explicitly named in the labour code"
                ],
                a: 2,
                explication: "The single document must also include psychosocial risks."
            },
            {
                q: "From how many employees is the single document compulsory in France?",
                options: [
                    "From eleven employees onwards",
                    "From fifty employees onwards",
                    "From the first employee"
                ],
                a: 2,
                explication: "It is accessible to employees, and asking for it is legitimate."
            },
            // Series 2
            {
                q: "What are the two conditions of the right of withdrawal?",
                options: [
                    "Works council approval and a prior written notice",
                    "A serious and imminent danger, and a withdrawal that does not endanger others",
                    "Authorisation from the labour inspectorate"
                ],
                a: 1,
                explication: "No penalty or pay deduction is possible on that ground alone."
            },
            {
                q: "What can you do if there is no works council in the company?",
                options: [
                    "Nothing is possible without representatives",
                    "One has to be elected first",
                    "The occupational health service and the labour inspectorate remain directly reachable"
                ],
                a: 2,
                explication: "The duty of safety exists whatever the size of the company."
            },
            {
                q: "Referring a matter to the labour inspectorate is:",
                options: [
                    "Free, and confidential on request",
                    "Paid for, and made public in the company",
                    "Reserved for employee representatives"
                ],
                a: 0,
                explication: "It is the remedy when nothing moves internally."
            }
        ],

        // ---------------------------------------------------------------
        "burnout": [
            // Series 1
            {
                q: "What are the three dimensions described in the literature?",
                options: [
                    "Exhaustion, detachment, loss of the sense of efficacy",
                    "Tiredness, stress, depression",
                    "Overload of work, isolation and a lasting demotivation"
                ],
                a: 0,
                explication: "They combine, and they serve to name rather than to conclude."
            },
            {
                q: "Does burnout appear as a standalone illness in the international classifications?",
                options: [
                    "Yes, since 2019",
                    "No: it is described there as a work-related phenomenon",
                    "Yes, it appears there as a fully fledged anxiety disorder"
                ],
                a: 1,
                explication: "Which takes nothing away from its reality or its seriousness."
            },
            {
                q: "Why will no online test do?",
                options: [
                    "Because serious questionnaires on the subject simply do not exist yet",
                    "A score with no framework can wrongly reassure or lastingly worry",
                    "Because it is forbidden"
                ],
                a: 1,
                explication: "Validated questionnaires exist, but within a framework, with an interview and an interpretation."
            },
            // Series 2
            {
                q: "What separates burnout from a difficult period?",
                options: [
                    "The sheer intensity of the load that is being carried",
                    "The industry",
                    "Duration, the absence of recovery, and settling in"
                ],
                a: 2,
                explication: "It is no longer a reaction to an event, it has become the baseline state."
            },
            {
                q: "Which sign recurs constantly in accounts?",
                options: [
                    "The people around noticed before the person concerned",
                    "An early physical pain",
                    "A clearly visible drop in the results that are obtained"
                ],
                a: 0,
                explication: "Gradual adaptation erases the points of comparison."
            },
            {
                q: "What is wrong with treating it as a failure of personal resilience?",
                options: [
                    "It has no consequence",
                    "It leaves the cause in place and makes the person carry what belongs to the organisation",
                    "It delays the medical diagnosis"
                ],
                a: 1,
                explication: "Lasting overload, no room to manoeuvre, lack of recognition, conflicts of values: these are documented factors."
            }
        ],

        // ---------------------------------------------------------------
        "serious-situations": [
            // Series 1
            {
                q: "Is intent to harm required to establish moral harassment in French law?",
                options: [
                    "Yes, it must be demonstrated",
                    "No: the effect is enough",
                    "Yes, except between colleagues"
                ],
                a: 1,
                explication: "A reporting line is not required either."
            },
            {
                q: "What is the first step to take?",
                options: [
                    "Take the case straight to an employment tribunal",
                    "Talk about it first to your closest colleagues",
                    "Write the facts down, dated, as they happen"
                ],
                a: 2,
                explication: "It is the first thing everybody will ask for, and the hardest to reconstruct afterwards."
            },
            {
                q: "What does a written alert to the employer trigger?",
                options: [
                    "Its duty to act",
                    "An automatic labour inspectorate investigation",
                    "Suspension of the contract"
                ],
                a: 0,
                explication: "An employer informed and doing nothing engages its liability."
            },
            // Series 2
            {
                q: "How is the burden of proof arranged in harassment cases, in France?",
                options: [
                    "The employee must prove everything",
                    "The employee presents facts, the employer must show they are explained otherwise",
                    "The employer must prove everything alone"
                ],
                a: 1,
                explication: "It is a considerable difference from the ordinary rule."
            },
            {
                q: "Can an employee who reports harassment be penalised on that ground?",
                options: [
                    "Yes, if the facts are not established",
                    "Yes, in the case of a public denunciation",
                    "No: a dismissal based on it is void"
                ],
                a: 2,
                explication: "The protection also covers witnesses."
            },
            {
                q: "Do you have to be sure of the legal characterisation before raising an alarm?",
                options: [
                    "No: describing dated facts to a competent person is enough",
                    "Yes, otherwise the alert is inadmissible",
                    "Yes, the applicable article of the labour code must be cited"
                ],
                a: 0,
                explication: "It is not for the employee to categorise the situation."
            }
        ]
    },

    // Summary questions — distinct from the sub-section ones
    synthese: [
        {
            q: "What is the thread running through this level?",
            options: [
                "Stress management techniques",
                "What does not sort itself out: the actors, the duties, the remedies",
                "Workstation layout"
            ],
            a: 1,
            explication: "It is the level most useful to read before you need it."
        },
        {
            q: "What do the visit on request and the dated written record have in common?",
            options: [
                "Both require the employer's agreement",
                "Both are free, on the employee's initiative, and very little used",
                "Both assume a lawyer"
            ],
            a: 1,
            explication: "And both make everything that follows possible."
        },
        {
            q: "Why does this guide offer no burnout test?",
            options: [
                "A score returned by a web page can wrongly reassure or lastingly worry",
                "Because those tests are paid for",
                "Because they are reserved for occupational doctors"
            ],
            a: 0,
            explication: "Neither error is acceptable."
        },
        {
            q: "A French employer claims to have no obligations without a works council. What do you answer?",
            options: [
                "The duty of safety and the single document exist whatever the size",
                "That is correct below eleven employees",
                "It depends on the collective agreement"
            ],
            a: 0,
            explication: "The single document is compulsory from the first employee."
        },
        {
            q: "Which step should be prepared before you need it?",
            options: [
                "Drafting a standard resignation letter",
                "Building a tribunal case file",
                "Noting down the contact details of your occupational health service"
            ],
            a: 2,
            explication: "The moment you need them is not the moment you have the energy to look for them."
        },
        {
            q: "If you keep only one thing from this level, what should it be?",
            options: [
                "You should go to the labour inspectorate at the slightest problem",
                "The right of withdrawal can be exercised freely",
                "In France the visit to the occupational doctor is a right, confidential, and does not go through the employer"
            ],
            a: 2,
            explication: "It is the most powerful lever in the field, and one of the most misunderstood."
        }
    ]
};
