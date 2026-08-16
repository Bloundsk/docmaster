// ===================================
// QUESTION BANK — LEARNING HOW TO LEARN, ADVANCED LEVEL (EN)
// ===================================
// 6 questions per sub-section: 3 shown, the other 3 take over after two weeks.
//
// Les clefs de « sections » sont les ancres ANGLAISES de la page traduite :
// quiz.js apparie la banque au « id » du titre h3.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "frequency-and-vocabulary": [
            // Series 1
            {
                q: "What share of an ordinary text do the 1,000 most frequent words cover?",
                options: [
                    "About 50%",
                    "About 80%",
                    "About 95%"
                ],
                a: 1,
                explication: "The next thousand add only five points. The returns fall away very fast."
            },
            {
                q: "With 2,000 words known, how many unknown words per 250-word page?",
                options: [
                    "About 37",
                    "About 10",
                    "About 3"
                ],
                a: 0,
                explication: "85% coverage. The text stays unreadable despite the impression of knowing nearly everything."
            },
            {
                q: "What coverage does fluent reading require?",
                options: [
                    "About 85%",
                    "About 92%",
                    "About 98%"
                ],
                a: 2,
                explication: "That is on the order of 10,000 words — much further off than it seems at 2,000."
            },
            // Series 2
            {
                q: "Where should you start when you are below 2,000 words?",
                options: [
                    "Frequency lists",
                    "The vocabulary of a theme you like",
                    "Reading novels"
                ],
                a: 0,
                explication: "The first thousand pays as much as the next nine thousand combined."
            },
            {
                q: "Beyond 2,000 words, what becomes more profitable than lists?",
                options: [
                    "Reading accessible texts",
                    "Longer lists",
                    "Grammar"
                ],
                a: 0,
                explication: "It brings words in their context, and context is what distinguishes their uses."
            },
            {
                q: "Does this reasoning about frequency apply only to languages?",
                options: [
                    "Yes, it is specific to vocabulary",
                    "No: in any field, a small fraction of the ideas covers the majority of cases",
                    "Yes, except in mathematics"
                ],
                a: 1,
                explication: "This is what justifies choosing the order of learning rather than submitting to it."
            }
        ],

        // ---------------------------------------------------------------
        "transfer": [
            // Series 1
            {
                q: "What is transfer?",
                options: [
                    "The ability to use elsewhere what you learned here",
                    "The passage from short-term to long-term memory",
                    "The act of changing method"
                ],
                a: 0,
                explication: "It is the implicit goal of all learning, and it happens less often than people assume."
            },
            {
                q: "Why does a pupil get stuck in physics on an equation they solve in maths?",
                options: [
                    "Because they have forgotten the method",
                    "Because nothing in the new setting calls for the memory",
                    "Because physics is harder"
                ],
                a: 1,
                explication: "The knowledge is there; the cue that triggers it is not."
            },
            {
                q: "What do brain-training games actually improve?",
                options: [
                    "Memory in general",
                    "Mostly those games, and very close tasks",
                    "Attention at work"
                ],
                a: 1,
                explication: "This is not anecdotal: it is the general rule of transfer."
            },
            // Series 2
            {
                q: "What is the strongest lever for encouraging transfer?",
                options: [
                    "Varying the contexts",
                    "Repeating more",
                    "Taking better notes"
                ],
                a: 0,
                explication: "The same idea met in four settings detaches itself from each of them."
            },
            {
                q: "Why go back to the principle rather than the recipe?",
                options: [
                    "Because a recipe does not travel, a principle does",
                    "Because it is shorter",
                    "Because it is easier to remember"
                ],
                a: 0,
                explication: "Hence the use of the question “what is this a particular case of?”."
            },
            {
                q: "Revising for an oral exam by reading it in your head — what is the problem?",
                options: [
                    "The practice is on something other than what will be asked",
                    "It takes too long",
                    "There isn't one"
                ],
                a: 0,
                explication: "You get good at what you practise, not at what resembles it."
            }
        ],

        // ---------------------------------------------------------------
        "judging-a-method": [
            // Series 1
            {
                q: "What is the decisive question when judging a learning method?",
                options: [
                    "Measured how long afterwards?",
                    "On how many people?",
                    "Published in which journal?"
                ],
                a: 0,
                explication: "Almost every pleasant method wins the immediate test and loses the one a week later."
            },
            {
                q: "What is a method compared with “doing nothing” worth?",
                options: [
                    "Nothing: it has to do better than another method",
                    "That is a sufficient comparison",
                    "It depends on the duration"
                ],
                a: 0,
                explication: "Almost anything beats not working. That is not what we are trying to find out."
            },
            {
                q: "What does the state of the research say about learning styles?",
                options: [
                    "Matching teaching to the supposed style does not produce the announced effect",
                    "They have been confirmed since the 2000s",
                    "They only concern children"
                ],
                a: 0,
                explication: "The idea stays popular among teachers; studies that test it properly do not find it."
            },
            // Series 2
            {
                q: "Where does the “we remember 10% of what we read, 90% of what we teach” pyramid come from?",
                options: [
                    "No identifiable source: the numbers were never measured",
                    "An American study from the 1960s",
                    "Ebbinghaus's work"
                ],
                a: 0,
                explication: "Round numbers that have circulated for decades with no support."
            },
            {
                q: "What did the study behind the “Mozart effect” actually show?",
                options: [
                    "A very limited effect, on one specific task, for a few minutes",
                    "A lasting rise in IQ",
                    "An effect in infants"
                ],
                a: 0,
                explication: "The rest is a media stampede."
            },
            {
                q: "Why are the methods that survive scrutiny uncomfortable?",
                options: [
                    "Because retrieval effort is what strengthens the trace",
                    "By coincidence",
                    "Because they are badly designed"
                ],
                a: 0,
                explication: "A method promising retention without effort contradicts the known mechanism."
            }
        ],

        // ---------------------------------------------------------------
        "building-your-system": [
            // Series 1
            {
                q: "What flaw do all the techniques in this path share?",
                options: [
                    "They assume you think of them",
                    "They are expensive",
                    "They require software"
                ],
                a: 0,
                explication: "Motivation falls, weeks get heavy, and a method requiring daily thought gives way."
            },
            {
                q: "In what form should content enter the system?",
                options: [
                    "As questions",
                    "As well-written notes",
                    "As summaries"
                ],
                a: 0,
                explication: "Otherwise, on the day, you will reread instead of testing yourself."
            },
            {
                q: "What is the five-minute version for?",
                options: [
                    "Keeping the streak unbroken on impossible days",
                    "Making faster progress",
                    "Catching up on a backlog"
                ],
                a: 0,
                explication: "Its purpose is not to make progress."
            },
            // Series 2
            {
                q: "What does a card failed ten times in a row tell you?",
                options: [
                    "That it is badly written",
                    "That it is difficult",
                    "That it should come up more often"
                ],
                a: 0,
                explication: "The monthly review exists precisely to rephrase what always comes back wrong."
            },
            {
                q: "What test should you apply before adding something to the system?",
                options: [
                    "Will I need this from memory?",
                    "Is it interesting?",
                    "Is it on the syllabus?"
                ],
                a: 0,
                explication: "If the answer is no, it belongs in a note you can look up, not on a card."
            },
            {
                q: "Fifteen minutes daily or two hours on Sunday?",
                options: [
                    "Fifteen minutes daily, by a long way",
                    "Two hours on Sunday",
                    "The two are equivalent"
                ],
                a: 0,
                explication: "What is not in the calendar does not happen; and spacing does the rest."
            }
        ]
    },

    // Summary questions — distinct from the sub-section ones
    synthese: [
        {
            q: "What is the thread running through this level?",
            options: [
                "Stopping applying methods and starting to judge them",
                "Learning faster",
                "Memorising more"
            ],
            a: 0,
            explication: "Including the ones in this guide: the question of delay applies to it too."
        },
        {
            q: "What do lexical frequency and the choice of your weak points have in common?",
            options: [
                "Both say the effort must be placed, not merely supplied",
                "Both concern languages",
                "Both require software"
            ],
            a: 0,
            explication: "A small number of elements carries most of the result, in both cases."
        },
        {
            q: "An app promises a thousand words with no effort in three weeks. What does that signal?",
            options: [
                "The promise contradicts the known mechanism of memory",
                "It is plausible with a good method",
                "You should check the number of users"
            ],
            a: 0,
            explication: "Retrieval effort is precisely what strengthens the trace."
        },
        {
            q: "Why does a learning system need a review?",
            options: [
                "Because it drifts: useless cards, badly framed questions, abandoned topics",
                "Because software changes",
                "Because memory evolves"
            ],
            a: 0,
            explication: "A quarter of an hour a month is enough to stop it being abandoned wholesale."
        },
        {
            q: "Someone tells you they are “more of a visual learner”. What is a useful reply?",
            options: [
                "That everyone has preferences, but matching teaching to them does not improve results",
                "That they should favour diagrams",
                "That it is a matter of genetics"
            ],
            a: 0,
            explication: "The preference is real; it is the effect on learning that is not found."
        },
        {
            q: "If you apply only one thing from this level, what should it be?",
            options: [
                "Asking “measured how long afterwards?” of any method",
                "Learning vocabulary by frequency",
                "Doing a monthly review"
            ],
            a: 0,
            explication: "A single question is enough to sort most of the field."
        }
    ]
};
