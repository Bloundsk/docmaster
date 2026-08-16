// ===================================
// QUESTION BANK — LEARNING HOW TO LEARN, BEGINNER LEVEL (EN)
// ===================================
// 6 questions per sub-section: 3 shown, the other 3 take over after two weeks.
// The summary questions are distinct from the sub-section ones — none is used
// twice.
//
// Les clefs de « sections » sont les ancres ANGLAISES de la page traduite, et
// non celles de la version francaise : quiz.js apparie la banque au « id » du
// titre h3. Une clef francaise laisserait la section sans quiz, en silence.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "the-forgetting-curve": [
            // Series 1
            {
                q: "What shape does the forgetting curve have?",
                options: [
                    "A steady decline",
                    "Very fast at first, then slower and slower",
                    "Slow at first, then brutal"
                ],
                a: 1,
                explication: "It is this shape, not the average speed, that dictates when to review."
            },
            {
                q: "Out of 40 terms learned today and never revisited, how many are left after a week?",
                options: [
                    "About 8",
                    "About 24",
                    "About 30"
                ],
                a: 0,
                explication: "24 the next day, 18 after two days, 8 after a week."
            },
            {
                q: "When is a review most profitable?",
                options: [
                    "Three weeks later, once everything has settled",
                    "Early, while the loss is fastest",
                    "The timing does not matter"
                ],
                a: 1,
                explication: "A review the next day saves more material than a late one, for the same time."
            },
            // Series 2
            {
                q: "Why does cramming the night before work for the exam?",
                options: [
                    "Because it anchors things durably",
                    "Because the curve starts high and the exam falls before it comes down",
                    "Because stress improves memory"
                ],
                a: 1,
                explication: "It then comes down exactly the same: three weeks later, almost nothing is left."
            },
            {
                q: "Forgetting something seen only once is a sign of what?",
                options: [
                    "Badly done learning",
                    "The normal working of memory",
                    "A lack of attention"
                ],
                a: 1,
                explication: "The useful question is not “how do I learn better first time” but “when do I come back to it”."
            },
            {
                q: "What share of the total loss happens in the first two days?",
                options: [
                    "More than half",
                    "About a tenth",
                    "It is spread evenly across the month"
                ],
                a: 0,
                explication: "Waiting for the weekend to review is arriving after the battle."
            }
        ],

        // ---------------------------------------------------------------
        "spaced-repetition": [
            // Series 1
            {
                q: "What does a successful review do to the forgetting curve?",
                options: [
                    "It only lifts it back up",
                    "It lifts it back up and flattens it",
                    "It does not change it"
                ],
                a: 1,
                explication: "What lasted a day then lasts three days, then a week, then three."
            },
            {
                q: "What principle governs the intervals?",
                options: [
                    "Review at constant intervals",
                    "Come back just before forgetting",
                    "Review whenever you have a moment"
                ],
                a: 1,
                explication: "Too early wastes time on what is still known; too late amounts to relearning."
            },
            {
                q: "For 60 terms to hold for six months, at 8 seconds per term, what does spacing cost?",
                options: [
                    "48 minutes in total",
                    "3 h 20 in total",
                    "An hour a week"
                ],
                a: 0,
                explication: "Against 3 h 20 rereading everything weekly: four times less time."
            },
            // Series 2
            {
                q: "What makes spaced repetition hard to keep up?",
                options: [
                    "The effort it demands",
                    "The schedule it assumes",
                    "The equipment required"
                ],
                a: 1,
                explication: "Nobody keeps in their head that one term is due in 21 days and another in 3."
            },
            {
                q: "What do flashcard programs such as Anki do?",
                options: [
                    "They keep the review schedule",
                    "They memorise for you",
                    "They write the cards"
                ],
                a: 0,
                explication: "A card box and five dividers do the same job, without a screen."
            },
            {
                q: "What does a review session where everything comes out right tell you?",
                options: [
                    "That the topic is learned",
                    "That the intervals are too short",
                    "That the questions are well written"
                ],
                a: 1,
                explication: "A good session is one where you make mistakes regularly."
            }
        ],

        // ---------------------------------------------------------------
        "testing-rather-than-rereading": [
            // Series 1
            {
                q: "What is the role of the test in learning?",
                options: [
                    "It checks what has been learned",
                    "It is the learning itself",
                    "It is mainly for marking"
                ],
                a: 1,
                explication: "Searching your memory for an answer strengthens the trace far more than rereading it."
            },
            {
                q: "Tested a week later, what results do rereaders and self-testers get?",
                options: [
                    "About 40% against about 61%",
                    "Equivalent results",
                    "About 61% against about 40%"
                ],
                a: 0,
                explication: "For identical study time. Tested immediately the ratio is reversed — hence the illusion."
            },
            {
                q: "Why does testing yourself with the course open not work?",
                options: [
                    "It takes longer",
                    "It removes the retrieval effort that produces the effect",
                    "It is more tiring"
                ],
                a: 1,
                explication: "Recognising an answer and retrieving it are two different operations."
            },
            // Series 2
            {
                q: "What should you do with a section heading in order to test yourself?",
                options: [
                    "Highlight it",
                    "Turn it into a question",
                    "Copy it out"
                ],
                a: 1,
                explication: "“The forgetting curve” becomes “what shape does it have, and what does that change?”."
            },
            {
                q: "Is it better to answer and get it wrong, or to read the right answer straight away?",
                options: [
                    "Read it straight away, so as not to anchor the mistake",
                    "Answer first, even if you get it wrong",
                    "The two are equivalent"
                ],
                a: 1,
                explication: "Getting it wrong then seeing the correction sticks better than reading the right answer straight away."
            },
            {
                q: "What does a comfortable revision session signal?",
                options: [
                    "That it is probably not doing much",
                    "That the topic is well chosen",
                    "That you are on good form"
                ],
                a: 0,
                explication: "The uncomfortable moment when you search without finding is not a failure: it is the method."
            }
        ],

        // ---------------------------------------------------------------
        "the-illusions-of-mastery": [
            // Series 1
            {
                q: "What does the ease of rereading a text read four times measure?",
                options: [
                    "Mastery of the content",
                    "Familiarity with its layout and its phrasing",
                    "The quality of the text"
                ],
                a: 1,
                explication: "The brain reads that fluency as a sign of mastery. That is the central trap."
            },
            {
                q: "Why does highlighting remain so widespread?",
                options: [
                    "Because it is effective",
                    "Because it is rewarding at the time",
                    "Because studies recommend it"
                ],
                a: 1,
                explication: "The bill arrives later, when you have to produce without the text in front of you."
            },
            {
                q: "Which test settles the difference between knowing and recognising?",
                options: [
                    "Rereading one last time",
                    "Closing everything and writing ten lines from memory",
                    "Telling yourself you have understood"
                ],
                a: 1,
                explication: "What comes out is what you know. The rest you would have identified in a list."
            },
            // Series 2
            {
                q: "What do spacing, self-testing and interleaving have in common?",
                options: [
                    "All three degrade immediate performance and improve performance at a distance",
                    "All three make learning faster",
                    "All three require software"
                ],
                a: 0,
                explication: "That is the paradox of useful difficulties, and the reason people give them up."
            },
            {
                q: "When should a learning method be judged?",
                options: [
                    "At the end of the session",
                    "A week later, by what remains",
                    "In the first few days, by how it feels"
                ],
                a: 1,
                explication: "“This method doesn't suit me” is said exactly when every good method looks less effective."
            },
            {
                q: "Are our judgements about our own mastery reliable?",
                options: [
                    "Yes, everyone knows what they know",
                    "No: they are systematically too optimistic just after studying",
                    "Yes, provided you pay attention"
                ],
                a: 1,
                explication: "The real obstacle is not the difficulty of learning, it is the difficulty of knowing what you know."
            }
        ]
    },

    // Summary questions — distinct from the sub-section ones
    synthese: [
        {
            q: "What is the thread running through this level?",
            options: [
                "The most widespread methods are among the least effective",
                "You have to work for longer",
                "Everyone learns in their own way"
            ],
            a: 0,
            explication: "Rereading, highlighting, recopying notes: habits that produce a feeling of progress."
        },
        {
            q: "What do spacing and the testing effect have in common?",
            options: [
                "Both exploit the effort of retrieval",
                "Both take more time",
                "Both work only in writing"
            ],
            a: 0,
            explication: "Searching your memory, just before forgetting: the same mechanism seen from two angles."
        },
        {
            q: "A student rereads their course four times and feels ready. What does this guide predict?",
            options: [
                "They will pass a test tomorrow and have forgotten everything in three weeks",
                "They will retain it durably",
                "They will fail as soon as tomorrow"
            ],
            a: 0,
            explication: "Rereading wins the immediate test and loses the distant one. That is what makes it so persistent."
        },
        {
            q: "Why is knowing that rereading deceives not enough to give it up?",
            options: [
                "Because the illusion of fluency persists despite knowing it exists",
                "Because there is no alternative",
                "Because the other methods take too long"
            ],
            a: 0,
            explication: "Only a measurement corrects it: test yourself at a distance and look at the result, not the impression."
        },
        {
            q: "If you apply only one thing from this level, what should it be?",
            options: [
                "Close the course and write from memory what you remember",
                "Reread more slowly",
                "Take better notes"
            ],
            a: 0,
            explication: "It is both the most reliable test and a review in its own right."
        },
        {
            q: "You learned something this morning. When will a review pay most?",
            options: [
                "Today or tomorrow",
                "In two weeks",
                "Just before you need it"
            ],
            a: 0,
            explication: "Most of the loss happens in the first 48 hours."
        }
    ]
};
