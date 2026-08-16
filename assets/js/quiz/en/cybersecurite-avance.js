// ===================================
// QUESTION BANK — CYBERSECURITY, ADVANCED LEVEL (EN)
// ===================================
// 6 questions per sub-section: 3 shown, the other 3 take over after two weeks.
// The summary questions are distinct from the sub-section ones — none is reused.
//
// Les clefs de « sections » sont les ancres ANGLAISES de la page traduite :
// quiz.js apparie la banque au « id » du titre h3.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "data-breaches": [
            // Series 1
            {
                q: "What is credential stuffing?",
                options: [
                    "Guessing a password by brute force",
                    "Automatically trying leaked credentials on other services",
                    "Reusing a password deliberately"
                ],
                a: 1,
                explication: "The success rate is low, but applied to millions of pairs it is more than enough. No human attacker is involved."
            },
            {
                q: "Why does the length of the password not protect against a breach?",
                options: [
                    "Because it is not guessed, it is known",
                    "Because breaches break the encryption",
                    "Because length never has any effect"
                ],
                a: 0,
                explication: "Strength protects against exhaustive search, not against the theft of the database holding it."
            },
            {
                q: "What order of magnitude is the time to detect an intrusion?",
                options: [
                    "Hours",
                    "Months",
                    "Years"
                ],
                a: 1,
                explication: "Several weeks before notification are often added. By the time you are told, the credentials are already circulating."
            },
            // Series 2
            {
                q: "Which step comes first after a breach?",
                options: [
                    "Changing the password of the service concerned",
                    "Securing the recovery mailbox",
                    "Warning your contacts"
                ],
                a: 1,
                explication: "As long as an attacker controls the recovery mailbox, they take back everything you have just changed."
            },
            {
                q: "What survives a password change?",
                options: [
                    "An automatic forwarding rule set in the mailbox",
                    "The previous password",
                    "Nothing, the change cuts everything off"
                ],
                a: 0,
                explication: "Every message received keeps being copied to the attacker, including future reset links."
            },
            {
                q: "What does receiving a breach notification mean?",
                options: [
                    "An alert: the attack is under way",
                    "A statement of fact: the data has been circulating for a while",
                    "A mere legal precaution with no consequence"
                ],
                a: 1,
                explication: "Between the intrusion, its detection and the notification, several months have generally passed."
            }
        ],

        // ---------------------------------------------------------------
        "social-engineering": [
            // Series 1
            {
                q: "What separates a targeted attack from mass phishing?",
                options: [
                    "It shows none of the usual crude signs",
                    "It only goes after large companies",
                    "It always uses an attachment"
                ],
                a: 0,
                explication: "It is written for you, from real information, and asks for an action that makes sense in your context."
            },
            {
                q: "Where does the information used most often come from?",
                options: [
                    "A prior hack",
                    "Public sources: profiles, job adverts, org charts",
                    "Lists sold by operators"
                ],
                a: 1,
                explication: "Nothing is hacked to build the message. Everything is simply read."
            },
            {
                q: "Which levers act together in the classic scenario?",
                options: [
                    "Authority, urgency and confidentiality",
                    "Fear, reward and curiosity",
                    "Technical, legal and financial"
                ],
                a: 0,
                explication: "Confidentiality is there to prevent the one thing that would defeat the attack: asking somebody else."
            },
            // Series 2
            {
                q: "What is the only reliable defence?",
                options: [
                    "Reading the message more carefully",
                    "Checking through another channel, on a number you already knew",
                    "Installing a stricter spam filter"
                ],
                a: 1,
                explication: "A well-made message cannot be told apart from a real one. Believing yourself able to spot the impersonation is precisely what makes you vulnerable."
            },
            {
                q: "What do studies show about people trained against these attacks?",
                options: [
                    "They never get caught again",
                    "They get caught too, but less often",
                    "Training has no measurable effect"
                ],
                a: 1,
                explication: "Tiredness, workload and context do the rest. Hence the value of a written rule."
            },
            {
                q: "Why does a written rule protect better than vigilance?",
                options: [
                    "It acts even on the days attention is lacking",
                    "It is quicker to apply",
                    "It is required by law"
                ],
                a: 0,
                explication: "“No transfer without voice confirmation” does not depend on the state of the person receiving the message."
            }
        ],

        // ---------------------------------------------------------------
        "encryption-limits": [
            // Series 1
            {
                q: "What does end-to-end encryption guarantee?",
                options: [
                    "That only the correspondents can read the content",
                    "That nobody knows who you exchange messages with",
                    "That messages are deleted automatically"
                ],
                a: 0,
                explication: "Neither the service, nor an intermediary, nor anybody intercepting the traffic can read the content."
            },
            {
                q: "What is called metadata in a messaging service?",
                options: [
                    "The text of the messages",
                    "Who writes to whom, when, how often, from where",
                    "The attached files"
                ],
                a: 1,
                explication: "It travels in clear on most services, encryption or not."
            },
            {
                q: "Why is metadata sensitive?",
                options: [
                    "It contains extracts of messages",
                    "It is often enough to reconstruct a situation",
                    "It allows the content to be decrypted"
                ],
                a: 1,
                explication: "Knowing that somebody contacted an emergency service, then a lawyer, then their bank the same afternoon requires reading no message at all."
            },
            // Series 2
            {
                q: "What can cancel the effect of end-to-end encryption?",
                options: [
                    "An unencrypted cloud backup of the conversations",
                    "A password that is too short",
                    "Using public wifi"
                ],
                a: 0,
                explication: "The protection of the transport stays intact, and perfectly useless: the exchanges become readable again to whoever reaches the storage."
            },
            {
                q: "Does encryption protect the devices?",
                options: [
                    "Yes, the device is encrypted by the messaging app",
                    "No, it protects the transport; the message appears in clear on screen",
                    "Yes, as long as the app is closed"
                ],
                a: 1,
                explication: "A compromised device reads the messages after decryption, just like their rightful recipient."
            },
            {
                q: "What can your correspondent do, whatever the encryption?",
                options: [
                    "Nothing in particular",
                    "Take a screenshot, or pass the content on",
                    "Decrypt your other conversations"
                ],
                a: 1,
                explication: "Encryption protects the journey, not the trust placed in the other end."
            }
        ],

        // ---------------------------------------------------------------
        "attack-surface": [
            // Series 1
            {
                q: "What is the attack surface?",
                options: [
                    "The number of devices owned",
                    "The set of points through which somebody could get in",
                    "The amount of data stored"
                ],
                a: 1,
                explication: "It grows with no decision: every account created, every application authorised, every service tried widens it."
            },
            {
                q: "Why are forgotten accounts particularly risky?",
                options: [
                    "They cost money",
                    "They keep an old password and you are not told if they leak",
                    "They slow the browser down"
                ],
                a: 1,
                explication: "Often signed up to at a time when the same password served everywhere, and with no two-factor authentication."
            },
            {
                q: "What is often the weakest link of an account?",
                options: [
                    "The password",
                    "The recovery route",
                    "The username"
                ],
                a: 1,
                explication: "Security questions, recovery address, phone number: those parallel routes are frequently less protected than the front door."
            },
            // Series 2
            {
                q: "How should security questions be handled?",
                options: [
                    "Answer honestly so as not to forget them",
                    "Like a second password: an arbitrary answer, kept in the manager",
                    "Disable them systematically"
                ],
                a: 1,
                explication: "Your mother's maiden name or your town of birth are public or easy for someone close to you to guess."
            },
            {
                q: "What is the point of deleting an unused account?",
                options: [
                    "A deleted account does not leak",
                    "It improves network speed",
                    "It frees up your email address"
                ],
                a: 0,
                explication: "It is the only permanent reduction in risk: the door no longer exists."
            },
            {
                q: "What should you check about third-party applications?",
                options: [
                    "Their rating in the store",
                    "Which ones keep permanent access to your main accounts",
                    "Their size on disk"
                ],
                a: 1,
                explication: "Many keep an authorisation long after they stopped being used."
            }
        ]
    },

    // ===================================================================
    // Summary questions — distinct from the sub-section ones
    // ===================================================================
    synthese: [
        // Series 1
        {
            q: "What do data breaches and targeted attacks have in common?",
            options: [
                "No tool prevents them on the user's side",
                "They only go after companies",
                "They all exploit a software flaw"
            ],
            a: 0,
            explication: "One depends on a third party's security, the other on a human decision. This level is precisely about what the tools do not cover."
        },
        {
            q: "Somebody has a unique password, two-factor authentication and a VPN. What is still exposed?",
            options: [
                "Nothing, the protection is complete",
                "Metadata, recovery routes and plausible requests",
                "Local files only"
            ],
            a: 1,
            explication: "Risk does not disappear once the obvious protections are in place: it moves to what cannot be filtered."
        },
        {
            q: "Why does procedure beat judgement?",
            options: [
                "Because it is faster",
                "Because it also works on the tired days",
                "Because it is compulsory"
            ],
            a: 1,
            explication: "It is the same reasoning as for the previous level's arrangements: whatever depends on daily vigilance gives way in the end."
        },
        // Series 2
        {
            q: "What, at this level, does not depend on you at all?",
            options: [
                "The security of the services you entrust data to",
                "The choice of your passwords",
                "Switching on two-factor authentication"
            ],
            a: 0,
            explication: "You cannot prevent a breach. You can only prevent its spread."
        },
        {
            q: "Which action reduces the attack surface permanently?",
            options: [
                "Changing all your passwords",
                "Deleting unused accounts",
                "Installing an extra antivirus"
            ],
            a: 1,
            explication: "The other measures protect an existing door. This one makes it disappear."
        },
        {
            q: "What should you conclude from the limits of end-to-end encryption?",
            options: [
                "That it is useless",
                "That it protects one precise thing very well, and nothing else",
                "That a VPN should be preferred to it"
            ],
            a: 1,
            explication: "Knowing the exact scope of a protection stops you relying on it where it does not act."
        }
    ]
};
