// ===================================
// QUESTION BANK — LAW & PROCEDURES, BEGINNER LEVEL (EN)
// ===================================
// 6 questions per sub-section: 3 shown, the other 3 take over after two weeks.
// The summary questions are distinct from the sub-section ones — none is reused.
//
// FRENCH LAW. No question is about an amount or a threshold: those values
// change, and a right answer gone wrong is worse than a missing question.
// Chaque question qui cite une règle la nomme comme française.
//
// Les clefs de « sections » sont les ancres ANGLAISES de la page traduite :
// quiz.js apparie la banque au « id » du titre h3.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "where-to-find-the-law": [
            // Series 1
            {
                q: "What is the right starting point for an everyday legal question?",
                options: [
                    "A specialist forum",
                    "Your government's official portal",
                    "The first search result"
                ],
                a: 1,
                explication: "The official explanation, in plain language, with the procedures and the forms."
            },
            {
                q: "What is the official legal database for, rather than the government portal?",
                options: [
                    "Reading the text of the law itself and checking it is in force",
                    "Doing your paperwork online",
                    "Asking a lawyer a question"
                ],
                a: 0,
                explication: "Useful when you need to cite an article, or make sure a rule still exists."
            },
            {
                q: "Which trap awaits a legal search in your own language?",
                options: [
                    "The results are too technical",
                    "A good share come from other countries that share the language",
                    "There are too few results"
                ],
                a: 1,
                explication: "The rules there are often close — and sometimes exactly the opposite."
            },
            // Series 2
            {
                q: "How do you tell an obligation from a mere custom?",
                options: [
                    "Does the claim cite a text you can check?",
                    "The custom is always older",
                    "An obligation is always written in capitals"
                ],
                a: 0,
                explication: "With no text it is a practice — sometimes an excellent one, but binding on nobody."
            },
            {
                q: "A well-written AI answer on a legal question:",
                options: [
                    "Can be perfectly wrong: form is not a sign of reliability",
                    "Is reliable if it is detailed",
                    "Is as good as an official source"
                ],
                a: 0,
                explication: "To be checked against an official source before drawing any decision from it."
            },
            {
                q: "Can a contract take away a right granted by law?",
                options: [
                    "Yes, once you have signed it",
                    "No: the clause has no effect even signed",
                    "Yes, if the clause is in bold"
                ],
                a: 1,
                explication: "Signing is not giving up. That is the subject of the advanced level."
            }
        ],

        // ---------------------------------------------------------------
        "deadlines-that-count": [
            // Series 1
            {
                q: "Does the right to withdraw apply to a purchase in a shop?",
                options: [
                    "Yes, for 14 days",
                    "No: it applies to distance selling only",
                    "Yes, if the item has not been used"
                ],
                a: 1,
                explication: "A retailer taking back an item bought in person is making a commercial gesture, not meeting an obligation."
            },
            {
                q: "How long does the legal guarantee of conformity last in France?",
                options: [
                    "14 days",
                    "1 year",
                    "2 years"
                ],
                a: 2,
                explication: "On any purchase from a trader, in a shop as well as online."
            },
            {
                q: "During the presumption period, who must prove what?",
                options: [
                    "It is for the seller to prove the goods conformed",
                    "It is for the buyer to prove the defect",
                    "Each side brings its own evidence"
                ],
                a: 0,
                explication: "That is the most useful point of all, and the least known."
            },
            // Series 2
            {
                q: "A seller replies that “the one-year manufacturer's warranty has run out”. What do you say?",
                options: [
                    "That the legal guarantee of conformity is separate and lasts two years",
                    "That the repair then has to be paid for",
                    "That you should have taken the extended warranty"
                ],
                a: 0,
                explication: "The legal guarantee is an obligation of the seller, distinct from the manufacturer's."
            },
            {
                q: "When does the withdrawal period start running?",
                options: [
                    "From the order",
                    "From receipt of the goods",
                    "From payment"
                ],
                a: 1,
                explication: "A period almost always starts from a precise event: receipt, or discovery of a defect."
            },
            {
                q: "What is the starting point for a hidden defect claim?",
                options: [
                    "The purchase date",
                    "Discovery of the defect",
                    "The manufacturing date"
                ],
                a: 1,
                explication: "Two years from discovery, which can be well after the purchase."
            }
        ],

        // ---------------------------------------------------------------
        "writing-that-counts": [
            // Series 1
            {
                q: "Which wording gets handled best in a complaint?",
                options: [
                    "“A commercial gesture”",
                    "“A refund of €149”",
                    "“Compensation reflecting the harm suffered”"
                ],
                a: 1,
                explication: "An itemised request gets processed; a vague one gets filed."
            },
            {
                q: "What makes a letter a formal demand?",
                options: [
                    "A lawyer drafting it",
                    "The usual five elements, and using the words “formal demand”",
                    "An official stamp"
                ],
                a: 1,
                explication: "It is not a solemn act: it is an ordinary letter, correctly written."
            },
            {
                q: "What does recorded delivery prove that an email does not always?",
                options: [
                    "That the recipient received it",
                    "That you wrote",
                    "The date of sending"
                ],
                a: 0,
                explication: "Email for a first complaint, recorded delivery as soon as a period starts running."
            },
            // Series 2
            {
                q: "Why avoid adjectives in a letter of complaint?",
                options: [
                    "They weaken the letter rather than strengthening it",
                    "They lengthen the processing time",
                    "They are forbidden"
                ],
                a: 0,
                explication: "The department receiving it looks for a request and a date. If it does not find them, the file waits."
            },
            {
                q: "What is the point of writing a deadline to reply?",
                options: [
                    "It starts something running; implied, it does nothing",
                    "It is polite",
                    "It gets a more detailed answer"
                ],
                a: 0,
                explication: "Fifteen days is reasonable and usual."
            },
            {
                q: "What will a conciliator or a judge ask for first?",
                options: [
                    "Did you send a formal demand?",
                    "Do you have a lawyer?",
                    "Did you phone?"
                ],
                a: 0,
                explication: "It is the file's starting document — and it costs a few euros."
            }
        ],

        // ---------------------------------------------------------------
        "keeping-documents": [
            // Series 1
            {
                q: "How long should payslips be kept?",
                options: [
                    "3 years",
                    "10 years",
                    "Indefinitely"
                ],
                a: 2,
                explication: "They are used to calculate the pension, sometimes decades later."
            },
            {
                q: "Why keep building work invoices for ten years?",
                options: [
                    "That is the length of the ten-year building guarantee in France",
                    "It is a tax obligation",
                    "For reselling the property"
                ],
                a: 0,
                explication: "Ten years during which certain defects stay covered."
            },
            {
                q: "Who generally bears the burden of proof?",
                options: [
                    "Whoever is claiming",
                    "The trader",
                    "It is shared"
                ],
                a: 0,
                explication: "Hence the prosaic importance of what you keep."
            },
            // Series 2
            {
                q: "What is a legible photo of a document worth?",
                options: [
                    "Nothing, only the original counts",
                    "The same as a photocopy: it counts as the beginning of proof",
                    "It counts as an original"
                ],
                a: 1,
                explication: "It suffices in the vast majority of exchanges."
            },
            {
                q: "Which document makes challenging deductions from a deposit possible?",
                options: [
                    "The tenancy agreement",
                    "The check-in inventory",
                    "The last rent receipt"
                ],
                a: 1,
                explication: "Without it, no comparison is possible when moving out."
            },
            {
                q: "What is wrong with a box of ten years of unsorted papers?",
                options: [
                    "It amounts to having no records: nothing can be found in time",
                    "It takes up space",
                    "The documents deteriorate"
                ],
                a: 0,
                explication: "An annual sort beats accumulation."
            }
        ]
    },

    // Summary questions — distinct from the sub-section ones
    synthese: [
        {
            q: "What is the thread running through this level?",
            options: [
                "Knowing where to look, how long is left, and what to write",
                "Knowing the civil code",
                "Finding a lawyer"
            ],
            a: 0,
            explication: "Three reflexes that settle most everyday difficulties."
        },
        {
            q: "What do an undated source and a document thrown away too soon have in common?",
            options: [
                "Both make a position indefensible on the day it has to be defended",
                "Both are forbidden",
                "Both concern consumer law"
            ],
            a: 0,
            explication: "A right you can neither ground nor prove is not a usable right."
        },
        {
            q: "An appliance bought online three months ago breaks down. Which right do you rely on?",
            options: [
                "The right to withdraw",
                "The legal guarantee of conformity",
                "None, the deadline has passed"
            ],
            a: 1,
            explication: "Withdrawal expired long ago; in France the guarantee still runs for nearly two years."
        },
        {
            q: "Why is the phone a poor way to complain?",
            options: [
                "It leaves no trace",
                "It is expensive",
                "Departments do not answer it"
            ],
            a: 0,
            explication: "A complaint that counts is written, dated and kept."
        },
        {
            q: "If you apply only one thing from this level, what should it be?",
            options: [
                "Checking any rule read online against your government's official site",
                "Sending everything by recorded delivery",
                "Keeping everything indefinitely"
            ],
            a: 0,
            explication: "Five minutes that avoid most nasty surprises."
        },
        {
            q: "A rule read on a blog dates from 2016 and looks clear. What do you do?",
            options: [
                "Check it: the law may have changed since, and nothing signals it to the reader",
                "Trust it, clarity is a good sign",
                "Look for a second blog saying the same thing"
            ],
            a: 0,
            explication: "Two out-of-date sources do not make one up-to-date source."
        }
    ]
};
