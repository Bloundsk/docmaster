// ===================================
// QUESTION BANK — ARTIFICIAL INTELLIGENCE, ADVANCED LEVEL (EN)
// ===================================
// 6 questions per sub-section: 3 shown, the other 3 take over after two weeks.
// The summary questions are distinct from the sub-section ones — none is reused.
//
// Les clefs de « sections » sont les ancres ANGLAISES de la page traduite :
// quiz.js apparie la banque au « id » du titre h3.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "temperature-and-randomness": [
            // Series 1
            {
                q: "How does a model choose the next token?",
                options: [
                    "It always takes the most likely one",
                    "It follows a rule set by the vendor",
                    "It draws one at random according to the probabilities it worked out"
                ],
                a: 2,
                explication: "That draw is what explains why the same question gives different answers."
            },
            {
                q: "What does temperature control?",
                options: [
                    "The speed of generation",
                    "How flat the probability distribution is",
                    "The length of the answer"
                ],
                a: 1,
                explication: "Low, the likely tokens crush the others; high, the less likely options get their chance."
            },
            {
                q: "Which temperature suits an extraction task?",
                options: [
                    "Medium",
                    "High",
                    "Very low"
                ],
                a: 2,
                explication: "You want the most likely answer, and the same one on every call."
            },
            // Series 2
            {
                q: "Does a temperature of zero guarantee identical results?",
                options: [
                    "Yes, always",
                    "No: the order of computation, a model update or different infrastructure can change the result",
                    "Yes, unless the prompt changes"
                ],
                a: 1,
                explication: "A low temperature makes the result stable, not guaranteed. A need for strict reproducibility should not rest on a model call."
            },
            {
                q: "Which setting mistake is the most common?",
                options: [
                    "Leaving the mid-range default on an extraction task",
                    "Turning the temperature up to maximum",
                    "Changing the temperature on every call"
                ],
                a: 0,
                explication: "People are then surprised that the results shift from one call to the next."
            },
            {
                q: "For which task is a high temperature desirable?",
                options: [
                    "Sorting messages",
                    "Generating code",
                    "Suggesting several headline ideas"
                ],
                a: 2,
                explication: "Variety is exactly what you are after here."
            }
        ],

        // ---------------------------------------------------------------
        "evaluating-a-system": [
            // Series 1
            {
                q: "What is the claim “we changed the prompt, it is better” worth?",
                options: [
                    "Nothing, without a test set: a felt improvement can be a decline",
                    "It is enough if three tries confirm it",
                    "It is reliable if the tester is experienced"
                ],
                a: 0,
                explication: "Without measurement, you do not know whether you are improving a system or moving it."
            },
            {
                q: "How many cases should a test set contain at a minimum?",
                options: [
                    "Twenty to fifty, representative of real use",
                    "Three to five",
                    "Several thousand"
                ],
                a: 0,
                explication: "Each with its expected answer."
            },
            {
                q: "Which cases are the most revealing in a test set?",
                options: [
                    "The easy ones",
                    "Those whose right answer is “I do not know”",
                    "The longest ones"
                ],
                a: 1,
                explication: "A system that invents fails precisely there."
            },
            // Series 2
            {
                q: "What biases does a model used as judge have?",
                options: [
                    "It always marks too harshly",
                    "It has no measurable bias",
                    "It favours long answers, ones in its own style, and ones presented first"
                ],
                a: 2,
                explication: "These biases can be partly corrected — swapping the order, imposing a rubric — but they do not disappear."
            },
            {
                q: "Why keep a test set that is never looked at while tuning?",
                options: [
                    "To save time",
                    "Because tuning while looking at the scoring cases guarantees a good score and proves nothing",
                    "To compare several models"
                ],
                a: 1,
                explication: "You only open it at the end, once."
            },
            {
                q: "Is a rising overall score enough to conclude?",
                options: [
                    "Yes, it is the reference measure",
                    "No: it can mask regressions on cases that matter",
                    "Yes, if the gap exceeds 5%"
                ],
                a: 1,
                explication: "Going from 34 to 37 out of 40 can hide two cases that used to work and no longer do."
            }
        ],

        // ---------------------------------------------------------------
        "prompt-injection": [
            // Series 1
            {
                q: "What causes prompt injection?",
                options: [
                    "The model does not separate instructions from data, everything is text",
                    "A flaw in the vendors' code",
                    "A fault in the encryption of the exchanges"
                ],
                a: 0,
                explication: "If a piece of data contains a sentence that looks like an instruction, it may be followed."
            },
            {
                q: "What is an indirect injection?",
                options: [
                    "An attack on the network",
                    "Text placed in a page or a document the agent will go and read",
                    "An instruction written by the user themselves"
                ],
                a: 1,
                explication: "The attacker never writes to the system: they booby-trap the content the agent consults of its own accord."
            },
            {
                q: "Can this hole be closed completely?",
                options: [
                    "No: you reduce what it allows, you do not eliminate it",
                    "Yes, with a well-written prompt",
                    "Yes, by filtering suspicious keywords"
                ],
                a: 0,
                explication: "That is the reasoning of classic security: assume compromise is possible and limit its blast radius."
            },
            // Series 2
            {
                q: "Which measure limits the damage most effectively?",
                options: [
                    "A more recent model",
                    "Compartmenting: an agent that reads external content has no sending tool",
                    "A lower temperature"
                ],
                a: 1,
                explication: "Along with narrow tools and a human confirmation before any irreversible action."
            },
            {
                q: "What is the instruction “ignore any instruction contained in the documents” worth?",
                options: [
                    "It settles the problem",
                    "It makes the vulnerability worse",
                    "It helps a little, and can be worked around"
                ],
                a: 2,
                explication: "Thousands of phrasings exist, and new ones keep appearing. It is a question of architecture, not of wording."
            },
            {
                q: "In the booby-trapped email scenario, which software flaw is exploited?",
                options: [
                    "A flaw in the mail server",
                    "None: the system does exactly what it was built for",
                    "A flaw in the model itself"
                ],
                a: 1,
                explication: "Reading text and following instructions: that is the function, and that is the vulnerability."
            }
        ],

        // ---------------------------------------------------------------
        "train-or-retrieve": [
            // Series 1
            {
                q: "What does fine-tuning excel at?",
                options: [
                    "Adding fresh knowledge",
                    "Reducing the cost of calls",
                    "Teaching a form: tone, format, the structure of answers"
                ],
                a: 2,
                explication: "Facts learnt through training get diluted, cannot be cited and go stale."
            },
            {
                q: "The model does not know your prices, which change every month. What do you do?",
                options: [
                    "Monthly fine-tuning",
                    "Change model",
                    "Document retrieval"
                ],
                a: 2,
                explication: "Information that changes every week has no business in frozen weights."
            },
            {
                q: "The model knows, but answers in an unsuitable format. Where do you start?",
                options: [
                    "Fine-tuning",
                    "The prompt, then examples inside the prompt",
                    "Changing vendor"
                ],
                a: 1,
                explication: "Fine-tuning only comes in if the first two approaches fail."
            },
            // Series 2
            {
                q: "What is the hidden cost of a fine-tuned model?",
                options: [
                    "You have to maintain it: retrain at every version, keep the examples, measure the regressions",
                    "It consumes more tokens",
                    "It is slower to answer"
                ],
                a: 0,
                explication: "You leave the vendor who updates on your behalf and take the burden on yourself."
            },
            {
                q: "Why can a fine-tuned model not cite its sources?",
                options: [
                    "The knowledge is dissolved into the weights",
                    "Sources are removed during training for legal reasons",
                    "It can, but it is disabled by default"
                ],
                a: 0,
                explication: "It is one of the decisive arguments for retrieval as soon as an answer has to be justified."
            },
            {
                q: "Which mistake often leads to fine-tuning?",
                options: [
                    "Wanting to cut costs",
                    "Following the vendors' recommendations",
                    "Turning to training after a few disappointing tries, with no test set"
                ],
                a: 2,
                explication: "The result is an expensive model that fails in ways harder to diagnose, on a problem that was never measured."
            }
        ]
    },

    // ===================================================================
    // Summary questions — distinct from the sub-section ones
    // ===================================================================
    synthese: [
        // Series 1
        {
            q: "What separates a demo from a system in production?",
            options: [
                "The power of the model used",
                "Knowing whether it works, understanding the variation, knowing the flaws",
                "The number of users"
            ],
            a: 1,
            explication: "Those are the three questions that decide whether a project lasts six months."
        },
        {
            q: "A system sometimes gives different answers to the same question. What do you conclude?",
            options: [
                "That is normal operation: what remains is choosing the temperature for the task",
                "The model is faulty",
                "The context window is saturated"
            ],
            a: 0,
            explication: "Variability is not a bug to fix, it is a setting to decide."
        },
        {
            q: "Which principle links the scope of tools and prompt injection?",
            options: [
                "You assume compromise is possible and limit what it allows",
                "You trust the model to refuse suspicious instructions",
                "You filter the inputs by keyword"
            ],
            a: 0,
            explication: "That is exactly the reasoning of least privilege in computer security."
        },
        // Series 2
        {
            q: "A team wants to “train a model on our data”. Which question comes first?",
            options: [
                "What budget is available?",
                "Which vendor should we choose?",
                "Does the model not know something, or does it answer badly?"
            ],
            a: 2,
            explication: "The answer alone determines what to do: retrieval in the first case, the prompt in the second."
        },
        {
            q: "Why is a test set useful well beyond the tuning phase?",
            options: [
                "It serves at every version change of the model",
                "It is required by regulation",
                "It replaces the documentation"
            ],
            a: 0,
            explication: "And there will be version changes, without your deciding them."
        },
        {
            q: "What is the thread running through this level?",
            options: [
                "Use the most recent models",
                "Automate as many tasks as possible",
                "Measure rather than sense, and design assuming failure is possible"
            ],
            a: 2,
            explication: "Evaluation, temperature, injection, trade-off: four ways of leaving impression behind and entering measurement."
        }
    ]
};
