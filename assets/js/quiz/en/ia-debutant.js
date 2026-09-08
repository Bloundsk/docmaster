// ===================================
// QUESTION BANK — ARTIFICIAL INTELLIGENCE, BEGINNER LEVEL (EN)
// ===================================
// 6 questions per sub-section: 3 shown, the other 3 take over after two weeks.
// The summary questions are distinct from the sub-section ones.
//
// Les clefs de « sections » sont les ancres ANGLAISES de la page traduite :
// quiz.js apparie la banque au « id » du titre h3.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "what-is-an-llm": [
            // Series 1
            {
                q: "What is the job of a language model (LLM)?",
                options: [
                    "Looking up the answer in a database",
                    "Predicting the most likely continuation of a sequence of text",
                    "Reasoning from rules written by engineers"
                ],
                a: 1,
                explication: "At each step it works out a probability for every possible token, picks one, then starts again."
            },
            {
                q: "What is a token?",
                options: [
                    "A whole word",
                    "A fragment of a word, the unit text is cut into",
                    "A login identifier"
                ],
                a: 1,
                explication: "“Antidisestablishmentarianism” may come to four tokens, “the” to just one."
            },
            {
                q: "Why does an LLM sometimes invent bibliographic references?",
                options: [
                    "Because it deliberately lies",
                    "Because its database is incomplete",
                    "Because the format of a reference is very regular, its content is not"
                ],
                a: 2,
                explication: "It produces a plausible continuation. Nothing in the mechanism separates “I know” from “I am completing”."
            },
            // Series 2
            {
                q: "What does the “knowledge cutoff” refer to?",
                options: [
                    "The model's expiry date",
                    "The maximum length of a conversation",
                    "The date at which its training corpus stops"
                ],
                a: 2,
                explication: "Without a search tool, anything later is unknown to it."
            },
            {
                q: "What happens when a conversation goes past the context window?",
                options: [
                    "The start of the conversation is forgotten",
                    "The model refuses to answer",
                    "The answer is automatically shortened"
                ],
                a: 0,
                explication: "Context is what the model “sees” in one go. Beyond it, information leaves its field of view."
            },
            {
                q: "Why can the same question get two different answers?",
                options: [
                    "Because the model learns from your exchanges live",
                    "Because it regenerates every time instead of consulting a database",
                    "Because the internet connection varies"
                ],
                a: 1,
                explication: "The amount of randomness in choosing tokens is called temperature."
            }
        ],

        // ---------------------------------------------------------------
        "ai-agents": [
            // Series 1
            {
                q: "What separates an agent from a plain chatbot?",
                options: [
                    "It has tools and chains steps towards a goal",
                    "It answers faster",
                    "It uses a more recent model"
                ],
                a: 0,
                explication: "An agent acts, observes the result, decides what comes next, and starts again until it reaches its goal."
            },
            {
                q: "What is the most important difference when something goes wrong?",
                options: [
                    "The agent apologises automatically",
                    "A chatbot produces a wrong answer to read, an agent has already carried out the action",
                    "There is no difference"
                ],
                a: 1,
                explication: "A chatbot that errs costs you a minute. An agent has already deleted the file or sent the message."
            },
            {
                q: "What is prompt injection?",
                options: [
                    "Text slipped into outside content, written to manipulate the agent",
                    "A method for speeding up answers",
                    "The addition of extra training data"
                ],
                a: 0,
                explication: "The defence: what an agent reads is data, never an order. Only the user gives orders."
            },
            // Series 2
            {
                q: "On which actions should a well-designed agent stop and ask for confirmation?",
                options: [
                    "All of them, without exception",
                    "Irreversible ones: delete, send, pay, publish",
                    "None, otherwise it loses its point"
                ],
                a: 1,
                explication: "A well-designed agent hands you back control over what cannot be undone."
            },
            {
                q: "What does “tidy my inbox” authorise the agent to do?",
                options: [
                    "Read the messages, but not carry out the instructions they contain",
                    "Carry out whatever the messages it finds there ask for",
                    "Delete every message over a year old"
                ],
                a: 0,
                explication: "A request to sort authorises reading, not executing what is read."
            },
            {
                q: "Faced with “find the three most cited articles and summarise them”, what is the agent's advantage?",
                options: [
                    "It answers from memory, so faster",
                    "It actually consults the documents, including working around a dead link",
                    "It invents more credible citations"
                ],
                a: 1,
                explication: "Every claim then rests on a document actually opened, not on an approximate memory."
            }
        ],

        // ---------------------------------------------------------------
        "prompt-engineering": [
            // Series 1
            {
                q: "What does the model do with whatever you have not stated?",
                options: [
                    "It fills it in with whatever is statistically most common",
                    "It asks you about it",
                    "It leaves a blank"
                ],
                a: 0,
                explication: "That is, with the generic. Hence the importance of stating the format and the context."
            },
            {
                q: "What are the four parts of a good prompt?",
                options: [
                    "Politeness, length, urgency, reward",
                    "Subject, verb, object, punctuation",
                    "Context, task, format, constraints"
                ],
                a: 2,
                explication: "The task has to be a precise verb: “summarise”, “compare” — not “tell me about”."
            },
            {
                q: "Which technique works best for getting the right format?",
                options: [
                    "Describing the format in detail",
                    "Repeating the instruction twice",
                    "Giving an example of the expected result"
                ],
                a: 2,
                explication: "A model imitates far better than it follows a description."
            },
            // Series 2
            {
                q: "Why ask for the reasoning before the conclusion?",
                options: [
                    "To keep the model busy longer",
                    "Because each step supports the next, which improves reliability",
                    "Because it is nicer to read"
                ],
                a: 1,
                explication: "The effect is clear on multi-step problems, much less so on a simple question."
            },
            {
                q: "What effect does threatening or flattering a model have?",
                options: [
                    "No lasting effect: what counts is the precision of the prompt",
                    "It answers markedly better",
                    "It refuses to answer"
                ],
                a: 0,
                explication: "The rest is superstition. Precision, examples and the expected format make the difference."
            },
            {
                q: "What does adding “if you are not sure, say so” produce?",
                options: [
                    "A marked reduction in invented claims",
                    "Systematically evasive answers",
                    "A refusal to answer hard questions"
                ],
                a: 0,
                explication: "Explicitly allowing ignorance is one of the most profitable instructions there is."
            }
        ],

        // ---------------------------------------------------------------
        "limits-and-risks": [
            // Series 1
            {
                q: "In which areas are hallucinations most likely?",
                options: [
                    "General explanations and definitions",
                    "Translations",
                    "Precise figures, dates, quotations and little-known references"
                ],
                a: 2,
                explication: "Anywhere the answer is very specific and the training corpus was thin."
            },
            {
                q: "Which signal should trigger a check?",
                options: [
                    "A very precise answer on an obscure subject",
                    "A long answer",
                    "An answer that starts with “I think”"
                ],
                a: 0,
                explication: "The more precise the claim on a poorly documented subject, the more it deserves checking."
            },
            {
                q: "Which question should you ask before pasting content into a consumer AI?",
                options: [
                    "Is the text too long?",
                    "Is the subject interesting?",
                    "Would I be comfortable if this text appeared in a public document?"
                ],
                a: 2,
                explication: "That rules out health data, confidential contracts, passwords and access keys."
            },
            // Series 2
            {
                q: "Where do a model's biases come from?",
                options: [
                    "An intention programmed by its designers",
                    "The regularities of its training data, stereotypes included",
                    "A calculation fault"
                ],
                a: 1,
                explication: "It becomes serious as soon as an AI takes part in sifting applications or in an assessment."
            },
            {
                q: "Why is an LLM unreliable on exact calculation?",
                options: [
                    "Because mathematics is excluded from its training",
                    "Because it always rounds",
                    "Because it predicts text, it does not calculate"
                ],
                a: 2,
                explication: "Unless it has a calculation tool. Otherwise a spreadsheet remains better."
            },
            {
                q: "Why does the writing quality of an AI pose a problem?",
                options: [
                    "It makes texts too long",
                    "It neutralises our usual error detector: ordinarily, dubious content is badly written",
                    "It stops you spotting spelling mistakes"
                ],
                a: 1,
                explication: "You therefore have to judge the substance independently of the form — an effort that does not come naturally."
            }
        ]
    },

    // -------------------------------------------------------------------
    // SUMMARY
    // -------------------------------------------------------------------
    synthese: [
        // Series 1
        {
            q: "What is the safest way to use an AI?",
            options: [
                "On subjects you do not know, to fill the gaps",
                "On any subject, trusting it",
                "On subjects you can evaluate, so you spot the errors"
            ],
            a: 2,
            explication: "On an unfamiliar subject, you have no way of seeing the error."
        },
        {
            q: "A model states something confidently. What can you conclude?",
            options: [
                "That the information is probably accurate",
                "Nothing: the confidence is identical whether it knows or is completing",
                "That it has checked its source"
            ],
            a: 1,
            explication: "Introducing the distinction between knowing and completing is your job, by checking."
        },
        {
            q: "The more a system acts on the real world, which question takes priority?",
            options: [
                "How well does it perform?",
                "How much does it cost?",
                "What happens if it is wrong?"
            ],
            a: 2,
            explication: "That is what separates evaluating a chatbot from evaluating an agent."
        },
        // Series 2
        {
            q: "You need an internal memo written. Which request will give the best result?",
            options: [
                "A request stating the audience, the length, the tone and three expected examples",
                "“Write a text about computer security”",
                "“Do your best, you know what is needed”"
            ],
            a: 0,
            explication: "Thirty extra seconds writing the prompt saves three rounds of back-and-forth."
        },
        {
            q: "An AI offers you a precise legal reference with a clause number. What do you do?",
            options: [
                "Use it as it stands, precision is a mark of reliability",
                "Ask whether it is sure, its answer will do",
                "Check it at the source: that is exactly the profile of a hallucination"
            ],
            a: 2,
            explication: "References, dates and precise figures on poorly documented subjects are the riskiest areas."
        },
        {
            q: "Which limit has no technical progress removed to date?",
            options: [
                "Responsibility for judgement, which remains human",
                "The ability to produce fluent text",
                "The ability to translate between languages"
            ],
            a: 0,
            explication: "A model can list the arguments in a difficult decision; it does not carry the responsibility. You do."
        }
    ]
};
