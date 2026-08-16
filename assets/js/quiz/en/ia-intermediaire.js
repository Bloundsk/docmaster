// ===================================
// QUESTION BANK — ARTIFICIAL INTELLIGENCE, INTERMEDIATE LEVEL (EN)
// ===================================
// 6 questions per sub-section: 3 shown, the other 3 take over after two weeks.
// The summary questions are distinct from the sub-section ones — none is reused.
//
// Les clefs de « sections » sont les ancres ANGLAISES de la page traduite :
// quiz.js apparie la banque au « id » du titre h3.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "context-and-tokens": [
            // Series 1
            {
                q: "What is a token to a language model?",
                options: [
                    "A complete word",
                    "A fragment of text, often a syllable or a short word",
                    "A whole sentence"
                ],
                a: 1,
                explication: "As a rule of thumb, count about three tokens for every two words."
            },
            {
                q: "What does the context window contain?",
                options: [
                    "Only the last question asked",
                    "The prompt, the documents, the history and the answer, added together",
                    "The model's permanent memory"
                ],
                a: 1,
                explication: "Everything the model has to read or produce in one go counts against that ceiling."
            },
            {
                q: "How does a model remember a conversation?",
                options: [
                    "It saves the history on its side",
                    "It remembers nothing: the history is sent back to it on every turn",
                    "It keeps an automatic summary"
                ],
                a: 1,
                explication: "That constant resending is what creates the illusion of memory — and what drives the cost up."
            },
            // Series 2
            {
                q: "A ten-turn conversation at 500 tokens per turn: how much does the model read in total?",
                options: [
                    "5,000 tokens",
                    "27,500 tokens",
                    "500 tokens"
                ],
                a: 1,
                explication: "The sum of the successive histories, not the last exchange. It is that total that gets billed."
            },
            {
                q: "What happens when the context window overflows?",
                options: [
                    "The call fails, or the beginning is silently truncated",
                    "The model automatically compresses the history",
                    "Nothing, the window grows"
                ],
                a: 0,
                explication: "The second case is the more treacherous: the model carries on answering, but has “forgotten” the initial instructions."
            },
            {
                q: "Does a very large context window settle everything?",
                options: [
                    "Yes, just send all your documents",
                    "No: the quality of attention degrades over very long texts",
                    "Yes, and it costs less"
                ],
                a: 1,
                explication: "Sending the three relevant pages almost always gives better results, and costs a hundred times less."
            }
        ],

        // ---------------------------------------------------------------
        "retrieval": [
            // Series 1
            {
                q: "What does RAG do, in one sentence?",
                options: [
                    "It trains the model on your documents",
                    "It finds the relevant passages then hands them to the model with the question",
                    "It compresses documents to make them fit in memory"
                ],
                a: 1,
                explication: "The model answers on the strength of those passages, not on its training memory."
            },
            {
                q: "What is an embedding?",
                options: [
                    "A list of numbers representing the meaning of a chunk",
                    "An automatic summary of the document",
                    "A compression of the text"
                ],
                a: 0,
                explication: "The question goes through the same treatment, then you look for the chunks whose numbers are closest."
            },
            {
                q: "Does RAG make the model cleverer?",
                options: [
                    "Yes, it increases its reasoning ability",
                    "No, it simply puts the right document in front of it",
                    "Yes, it adds knowledge to its weights"
                ],
                a: 1,
                explication: "The difference between a good and a bad answer often comes down to that alone."
            },
            // Series 2
            {
                q: "What is the real difficulty in a RAG system?",
                options: [
                    "The choice of model",
                    "Cutting the documents into chunks",
                    "The speed of the search"
                ],
                a: 1,
                explication: "Too small, chunks lose their context; too large, they dilute the information and cost more."
            },
            {
                q: "Does RAG remove invention?",
                options: [
                    "Yes, completely",
                    "No: if the search brings back nothing relevant, the model answers anyway",
                    "Yes, if the documents are up to date"
                ],
                a: 1,
                explication: "You have to instruct the model explicitly to say it cannot find it, and show the sources so the user can check."
            },
            {
                q: "What does a chunk that is too small lose?",
                options: [
                    "Its readability",
                    "Its context — “this period is fourteen days” does not say which period",
                    "Its position in the document"
                ],
                a: 1,
                explication: "That is why chunking should follow the real structure of the documents, not an arbitrary size."
            }
        ],

        // ---------------------------------------------------------------
        "tools-and-functions": [
            // Series 1
            {
                q: "What does a model do when it decides to use a tool?",
                options: [
                    "It runs the tool itself",
                    "It produces a call request, which your program runs or does not",
                    "It asks the user for permission"
                ],
                a: 1,
                explication: "The model proposes, your code disposes. The whole security of an agent sits at that point."
            },
            {
                q: "What turns an assistant into an agent?",
                options: [
                    "A better-performing model",
                    "The ability to call tools",
                    "A larger context window"
                ],
                a: 1,
                explication: "A model on its own only produces text."
            },
            {
                q: "Why prefer narrow tools to a general one?",
                options: [
                    "They are faster",
                    "They limit what a manipulated agent can do",
                    "They cost less"
                ],
                a: 1,
                explication: "A “run any query” tool amounts to handing the keys to the database to a system that can be manipulated by the text it reads."
            },
            // Series 2
            {
                q: "In the sequence of a tool call, which step belongs to you?",
                options: [
                    "The decision to call the tool",
                    "Checking and running the call",
                    "Writing the final answer"
                ],
                a: 1,
                explication: "Of four steps, the middle one is entirely yours."
            },
            {
                q: "How should tools with irreversible effects be handled?",
                options: [
                    "Separate them from the reading tools and put them behind a confirmation",
                    "Disable them in production",
                    "Hand them to a more reliable model"
                ],
                a: 0,
                explication: "An ambiguous instruction is enough to trigger a wrong action, with no malice at all."
            },
            {
                q: "How does the model know which tools are available?",
                options: [
                    "It discovers them by trying",
                    "You describe them to it: name, role, parameters expected",
                    "They are included in its training"
                ],
                a: 1,
                explication: "The quality of those descriptions largely determines how apt the calls are."
            }
        ],

        // ---------------------------------------------------------------
        "choosing-a-model": [
            // Series 1
            {
                q: "Which model is generally the right choice?",
                options: [
                    "The best-performing one available",
                    "The smallest one that succeeds at your task",
                    "The cheapest, always"
                ],
                a: 1,
                explication: "On a simple, repeated task, a smaller model answers just as well, faster and for a fraction of the price."
            },
            {
                q: "How is the cost of a model billed?",
                options: [
                    "Per request",
                    "Per million tokens, separating input from output",
                    "Per minute of use"
                ],
                a: 1,
                explication: "Output is generally several times more expensive than input."
            },
            {
                q: "Which criterion sometimes comes before all the others?",
                options: [
                    "The vendor's popularity",
                    "Where the data travels",
                    "The size of the context window"
                ],
                a: 1,
                explication: "An open model hosted by you sends no data out; a remote service does."
            },
            // Series 2
            {
                q: "What are public model leaderboards worth for your project?",
                options: [
                    "They give the answer directly",
                    "They measure general capabilities, not your particular case",
                    "They are of no interest at all"
                ],
                a: 1,
                explication: "Models do end up being optimised for those tests."
            },
            {
                q: "How do you seriously choose between two models?",
                options: [
                    "By reading the vendors' announcements",
                    "By running twenty examples representative of your real task past them",
                    "By comparing the number of parameters"
                ],
                a: 1,
                explication: "Half a day's work, and an answer that genuinely concerns you."
            },
            {
                q: "Why is latency a criterion in its own right?",
                options: [
                    "It changes the cost",
                    "Two seconds against ten changes everything in an interface where somebody is waiting",
                    "It indicates the quality of the model"
                ],
                a: 1,
                explication: "An excellent but slow model can be unusable in interactive use."
            }
        ]
    },

    // ===================================================================
    // Summary questions — distinct from the sub-section ones
    // ===================================================================
    synthese: [
        // Series 1
        {
            q: "What do the context window and the cost of a project have in common?",
            options: [
                "The volume of tokens read determines both",
                "They both depend on the number of users",
                "They are independent"
            ],
            a: 0,
            explication: "Understanding tokens means understanding both the technical limit and the bill."
        },
        {
            q: "A company wants the model to know its internal procedures. What should it do?",
            options: [
                "Train a model on its documents",
                "Set up document retrieval",
                "Choose a better-performing model"
            ],
            a: 1,
            explication: "RAG puts the right document in front of the model, and updates immediately."
        },
        {
            q: "What determines how much an agent can break?",
            options: [
                "The performance of the model chosen",
                "The scope of the tools it has been given",
                "The size of its context window"
            ],
            a: 1,
            explication: "Nothing more, nothing less: which is why narrow tools beat a general one."
        },
        // Series 2
        {
            q: "Why is sending a model an entire book rarely a good idea?",
            options: [
                "It is technically impossible",
                "Attention degrades and the cost explodes",
                "The model refuses long texts"
            ],
            a: 1,
            explication: "The three relevant pages do better, and a hundred times cheaper."
        },
        {
            q: "What is the thread running through this level?",
            options: [
                "Every technical choice translates into measurable cost and risk",
                "Models move too fast to be mastered",
                "Open models should always be preferred"
            ],
            a: 0,
            explication: "Context, retrieval, tools and choice of model: four decisions that can be costed and weighed."
        },
        {
            q: "Before choosing a model, which preparation pays off most?",
            options: [
                "Reading the public leaderboards",
                "Writing twenty representative test cases",
                "Comparing context window sizes"
            ],
            a: 1,
            explication: "They will then serve at every version change — and there will be some."
        }
    ]
};
