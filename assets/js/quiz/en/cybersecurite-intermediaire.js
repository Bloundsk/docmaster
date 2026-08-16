// ===================================
// QUESTION BANK — CYBERSECURITY, INTERMEDIATE LEVEL (EN)
// ===================================
// 6 questions per sub-section: 3 shown, the other 3 take over after two weeks.
// The summary questions are distinct from the sub-section ones — none is reused.
//
// Les clefs de « sections » sont les ancres ANGLAISES de la page traduite :
// quiz.js apparie la banque au « id » du titre h3.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "password-manager": [
            // Series 1
            {
                q: "What is the main risk of a reused password?",
                options: [
                    "It is easier to guess",
                    "A single breach opens every account using it",
                    "It expires faster"
                ],
                a: 1,
                explication: "Lists from breaches are replayed automatically against hundreds of other services. The length of the password changes nothing: it is not guessed, it is known."
            },
            {
                q: "Out of 80 accounts, 60% sharing the same password: how many fall after a breach?",
                options: [
                    "Just 1",
                    "48",
                    "80"
                ],
                a: 1,
                explication: "With a unique password per service, the same breach would compromise only one."
            },
            {
                q: "What do you have to remember in order to use a password manager?",
                options: [
                    "One single password, the vault's",
                    "One password per category of site",
                    "Nothing, it is all automatic"
                ],
                a: 0,
                explication: "Each site gets a unique value you do not even know. You memorise only one."
            },
            // Series 2
            {
                q: "How do you answer the “all your eggs in one basket” objection?",
                options: [
                    "It is unfounded, the vault cannot be broken",
                    "The risk is concentrated, but on a point that is genuinely protected",
                    "It is better to write everything on paper"
                ],
                a: 1,
                explication: "Without a manager the risk is not spread: it is the same risk, laid across dozens of services whose security and breaches you control not at all."
            },
            {
                q: "Does the manager make passwords stronger?",
                options: [
                    "Yes, that is its main job",
                    "Mostly it makes reusing them unnecessary",
                    "No, it changes nothing about security"
                ],
                a: 1,
                explication: "A long password is still stolen if the service holding it leaks. What the manager removes is the spread."
            },
            {
                q: "Which precaution should you take if you settle for the browser's own list?",
                options: [
                    "Switch on two-factor authentication on the sync account",
                    "Change browser every year",
                    "Turn off synchronisation"
                ],
                a: 0,
                explication: "Synchronisation is often tied to an account protected by a plain password, and an open session is sometimes enough to read everything in clear."
            }
        ],

        // ---------------------------------------------------------------
        "two-factor-authentication": [
            // Series 1
            {
                q: "What does a second authentication factor check?",
                options: [
                    "Something you know",
                    "Something you have",
                    "The strength of the password"
                ],
                a: 1,
                explication: "The password is something you know, so it can be stolen or read in a breach. The second factor adds an object a remote attacker does not have."
            },
            {
                q: "Which form of second factor is the most fragile?",
                options: [
                    "SMS",
                    "The authenticator app",
                    "The physical key"
                ],
                a: 0,
                explication: "SIM swapping lets somebody receive the codes in your place. SMS nonetheless remains far better than no second factor at all."
            },
            {
                q: "Which account should be protected first?",
                options: [
                    "Social accounts",
                    "The main mailbox",
                    "The streaming account"
                ],
                a: 1,
                explication: "It receives the reset links for all the others. Whoever controls it controls the lot."
            },
            // Series 2
            {
                q: "Why does a physical key resist phishing?",
                options: [
                    "It encrypts the password",
                    "It checks the site's address and refuses to answer a copycat",
                    "It changes its code every second"
                ],
                a: 1,
                explication: "It is the only form of second factor that protects against a site imitating the original perfectly."
            },
            {
                q: "Where should you keep your backup codes?",
                options: [
                    "On the phone that carries the authenticator app",
                    "Elsewhere: printed, or in the password manager",
                    "In an email to yourself"
                ],
                a: 1,
                explication: "Leaving them on the device concerned makes the account unreachable the day that phone is lost, stolen or replaced."
            },
            {
                q: "Does a code generated by an app travel over the network?",
                options: [
                    "Yes, through the service's server",
                    "No, it is worked out on the device",
                    "Yes, by encrypted SMS"
                ],
                a: 1,
                explication: "There is therefore nothing to intercept, which explains its superiority over SMS."
            }
        ],

        // ---------------------------------------------------------------
        "backups-and-ransomware": [
            // Series 1
            {
                q: "What does the 3-2-1 rule say?",
                options: [
                    "3 copies, 2 different media, 1 outside the home",
                    "3 backups a day, 2 a week, 1 a month",
                    "3 passwords, 2 devices, 1 antivirus"
                ],
                a: 0,
                explication: "Each level covers a different risk: failure, batch defect, loss of the premises."
            },
            {
                q: "Why does an external disk left permanently plugged in not count as a backup?",
                options: [
                    "It wears out too fast",
                    "Ransomware encrypts everything the session can write to",
                    "It does not have enough capacity"
                ],
                a: 1,
                explication: "The plugged-in disk, the synced folder, the network drive: all of it goes, often within minutes."
            },
            {
                q: "What is the one answer that reliably works against ransomware?",
                options: [
                    "A good antivirus",
                    "A backup it could not reach",
                    "Paying the ransom"
                ],
                a: 1,
                explication: "The antivirus is one barrier among others. Paying guarantees nothing, neither the key nor that no copy of the data was kept."
            },
            // Series 2
            {
                q: "What does the “outside the home” copy specifically cover?",
                options: [
                    "Mishandling",
                    "Fire, flood, burglary",
                    "Disk failures"
                ],
                a: 1,
                explication: "Everything in the same place disappears together. It is the one risk that multiplying local copies does not cover."
            },
            {
                q: "What is a backup that has never been restored worth?",
                options: [
                    "A sufficient guarantee",
                    "Merely a hypothesis",
                    "Proof of good management"
                ],
                a: 1,
                explication: "A system that has said “backup successful” for three years may be empty or unreadable. You only find out at the worst moment."
            },
            {
                q: "How often should you test a restore?",
                options: [
                    "Never, if the software reports success",
                    "About once a quarter",
                    "Only after an incident"
                ],
                a: 1,
                explication: "Restoring a file at random is enough to check that the whole chain works."
            }
        ],

        // ---------------------------------------------------------------
        "network-and-vpn": [
            // Series 1
            {
                q: "What does a VPN actually do?",
                options: [
                    "It encrypts traffic as far as its server and goes out from there",
                    "It analyses traffic to block threats",
                    "It replaces HTTPS encryption"
                ],
                a: 0,
                explication: "Two consequences: the local network no longer sees the sites visited, and the sites see the server's address instead of yours."
            },
            {
                q: "Does a VPN protect against phishing?",
                options: [
                    "Yes, it blocks fraudulent sites",
                    "No, it carries the traffic without inspecting it",
                    "Yes, if it is a paid one"
                ],
                a: 1,
                explication: "A phishing site remains a phishing site, and a malicious file remains malicious."
            },
            {
                q: "Does a VPN make you anonymous on a service you are logged into?",
                options: [
                    "Yes, the IP address is hidden",
                    "No, the logged-in account identifies you by itself",
                    "Yes, if you clear the cookies"
                ],
                a: 1,
                explication: "You identified yourself by logging in. The VPN changes nothing about that."
            },
            // Series 2
            {
                q: "What is a VPN's main effect on trust?",
                options: [
                    "It removes it",
                    "It moves it from the internet provider to the VPN provider",
                    "It strengthens it on both sides"
                ],
                a: 1,
                explication: "The question becomes: does this provider deserve more trust than the last one?"
            },
            {
                q: "How far does HTTPS encrypt, compared with a VPN?",
                options: [
                    "All the way to the site visited, whereas the VPN stops at its server",
                    "As far as the VPN server only",
                    "Both protect exactly the same stretch"
                ],
                a: 0,
                explication: "They are two complementary protections, covering different parts of the journey."
            },
            {
                q: "What particular risk does a free, advertising-funded VPN carry?",
                options: [
                    "Reduced speed only",
                    "It receives all your traffic and has to make its money some other way",
                    "None, the encryption is identical"
                ],
                a: 1,
                explication: "Before installing a security tool, looking up who funds it is a useful habit."
            }
        ]
    },

    // ===================================================================
    // Summary questions — distinct from the sub-section ones
    // ===================================================================
    synthese: [
        // Series 1
        {
            q: "What separates this level from the previous one?",
            options: [
                "It is about arrangements rather than actions to repeat",
                "It is aimed at IT professionals",
                "It deals only with encryption"
            ],
            a: 0,
            explication: "Security resting on daily vigilance gives way in the end. Security resting on a mechanism holds even on the bad days."
        },
        {
            q: "What do the password manager and the disconnected backup have in common?",
            options: [
                "They are expensive",
                "You set them up once and they then work without you",
                "They require technical skills"
            ],
            a: 1,
            explication: "That is the criterion that puts them at this level: a one-off effort, permanent protection."
        },
        {
            q: "An attacker gets your mailbox password. What stops them?",
            options: [
                "An up-to-date antivirus",
                "Two-factor authentication by app or key",
                "An active VPN"
            ],
            a: 1,
            explication: "Neither the antivirus nor the VPN comes into play during a login with the right credentials."
        },
        // Series 2
        {
            q: "Which protection still acts once the attack has succeeded?",
            options: [
                "The firewall",
                "The disconnected backup",
                "The password manager"
            ],
            a: 1,
            explication: "The others prevent entry. This one lets you recover — a different kind of protection altogether."
        },
        {
            q: "Why start with the mailbox rather than the bank?",
            options: [
                "It holds more personal data",
                "It can reset every other account, the bank included",
                "It is attacked more often"
            ],
            a: 1,
            explication: "Protecting the bank while leaving the mailbox open is like locking a door and leaving the key on the one next to it."
        },
        {
            q: "What is the risk of a misunderstood security tool?",
            options: [
                "It slows the device down",
                "It makes you drop your guard where it really counts",
                "It conflicts with the antivirus"
            ],
            a: 1,
            explication: "Believing your browser protected by a VPN leads to clicking links more readily and opening files without thinking."
        }
    ]
};
