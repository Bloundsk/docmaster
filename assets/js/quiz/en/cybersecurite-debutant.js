// ===================================
// QUESTION BANK — CYBERSECURITY, BEGINNER LEVEL (EN)
// ===================================
// 6 questions per sub-section: 3 shown, the other 3 take over after two weeks.
// The summary questions are distinct from the sub-section ones.
//
// Les clefs de « sections » sont les ancres ANGLAISES de la page traduite :
// quiz.js apparie la banque au « id » du titre h3.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "passwords-and-authentication": [
            // Series 1
            {
                q: "What is the main danger around passwords?",
                options: [
                    "They are not complex enough",
                    "They get reused from one site to another",
                    "They are excessively long"
                ],
                a: 1,
                explication: "Lists from breaches are replayed automatically against hundreds of other services."
            },
            {
                q: "What is credential stuffing?",
                options: [
                    "A technique for encrypting passwords",
                    "Automatically replaying stolen credentials on other sites",
                    "A password too long to be stored"
                ],
                a: 1,
                explication: "No sophisticated hacking: a plain list and a script are enough."
            },
            {
                q: "Which password holds up best?",
                options: [
                    "P@ssw0rd!",
                    "turtle-stapler-cloud-vinegar",
                    "Bristol1987"
                ],
                a: 1,
                explication: "Length counts for more than exotic characters. The classic substitutions are in every attack dictionary."
            },
            // Series 2
            {
                q: "Which account should get two-factor authentication first?",
                options: [
                    "A hobby forum account",
                    "The main mailbox",
                    "A streaming account"
                ],
                a: 1,
                explication: "Every password reset goes through it: if it falls, everything follows."
            },
            {
                q: "Which two-factor method is the most vulnerable?",
                options: [
                    "A physical key",
                    "SMS",
                    "An authenticator app"
                ],
                a: 1,
                explication: "SIM swapping lets a fraudster have your number moved to their own SIM card."
            },
            {
                q: "What does forcing a password change every 90 days produce?",
                options: [
                    "Markedly stronger security",
                    "Tiny variants of the same password, so the opposite effect",
                    "Better memorisation"
                ],
                a: 1,
                explication: "Security agencies no longer recommend the practice."
            }
        ],

        // ---------------------------------------------------------------
        "phishing": [
            // Series 1
            {
                q: "What are the three constant ingredients of a phishing attempt?",
                options: [
                    "An attachment, a link and an image",
                    "An authority, an urgency and an immediate action",
                    "A spelling mistake, a link and a logo"
                ],
                a: 1,
                explication: "The urgency is not a detail: it exists precisely to prevent checking."
            },
            {
                q: "Why are spelling mistakes no longer a good warning sign?",
                options: [
                    "Fraudsters hire proofreaders",
                    "Automatic writing tools removed that signal",
                    "They were never a signal"
                ],
                a: 1,
                explication: "Look instead at the domain, to the right of the @ and before the first /."
            },
            {
                q: "In the address bank.com.account-check.net, which is the real domain?",
                options: ["bank.com", "account-check.net", "com.account"],
                a: 1,
                explication: "Everything before the last dot preceding the extension can be invented freely."
            },
            // Series 2
            {
                q: "What does the HTTPS padlock prove about a site?",
                options: [
                    "That the site is honest and vetted",
                    "Only that the connection is encrypted",
                    "That the site belongs to a registered company"
                ],
                a: 1,
                explication: "Anybody gets a free certificate in five minutes, a fraudster included."
            },
            {
                q: "A bank adviser calls you and asks for a verification code. What do you do?",
                options: [
                    "Give it if they know your details",
                    "Hang up and call the number on the back of your card",
                    "Ask for their staff number, then give it"
                ],
                a: 1,
                explication: "A real adviser will understand; a fraudster will try to talk you out of it."
            },
            {
                q: "Why do corporate test campaigns show high click rates?",
                options: [
                    "Because employees lack technical skills",
                    "Because tiredness and workload count for more than competence",
                    "Because the tests are rigged"
                ],
                a: 1,
                explication: "Hence the need for a systematic habit rather than occasional vigilance."
            }
        ],

        // ---------------------------------------------------------------
        "firewalls-and-antivirus": [
            // Series 1
            {
                q: "What does an antivirus not protect against?",
                options: [
                    "Known malicious software",
                    "Phishing and a stolen password",
                    "Infected files downloaded"
                ],
                a: 1,
                explication: "It sees nothing when you deliberately type your password into a fake site."
            },
            {
                q: "What is the most effective protective measure?",
                options: [
                    "Buying a paid security suite",
                    "Installing updates",
                    "Changing antivirus every year"
                ],
                a: 1,
                explication: "The fix almost always exists before the attack: it is the delay in installing it that creates the vulnerability."
            },
            {
                q: "On Windows, is Defender enough for personal use?",
                options: [
                    "No, you always need a paid suite",
                    "Yes: it is free and regularly comes top in independent tests",
                    "No, it only detects old viruses"
                ],
                a: 1,
                explication: "Paying for a third-party suite generally brings no measurable security gain."
            },
            // Series 2
            {
                q: "What is the only genuinely reliable defence against ransomware?",
                options: [
                    "An up-to-date antivirus",
                    "The backup",
                    "A well-configured firewall"
                ],
                a: 1,
                explication: "No antivirus guarantees protection against your files being encrypted."
            },
            {
                q: "What does the 3-2-1 backup rule mean?",
                options: [
                    "3 backups a day, 2 a week, 1 a month",
                    "3 copies, 2 different media, 1 copy off site or disconnected",
                    "3 hard disks, 2 USB sticks, 1 online service"
                ],
                a: 1,
                explication: "The critical point is the last: a disk left permanently plugged in gets encrypted along with the rest."
            },
            {
                q: "What makes a backup genuinely worth having?",
                options: [
                    "Its size",
                    "Having restored from it at least once",
                    "Its frequency"
                ],
                a: 1,
                explication: "Try restoring a file at random once a year: a backup never tested is not one."
            }
        ],

        // ---------------------------------------------------------------
        "data-encryption": [
            // Series 1
            {
                q: "What exactly does HTTPS guarantee?",
                options: [
                    "That the site is legitimate",
                    "That nobody can read or alter the exchanges during the journey",
                    "That your data will not be sold on"
                ],
                a: 1,
                explication: "The padlock protects the road, not the destination. Always check the domain name."
            },
            {
                q: "What is the difference between encryption in transit and at rest?",
                options: [
                    "The first protects during the journey, the second on the disk",
                    "The first is safer than the second",
                    "They mean the same thing"
                ],
                a: 0,
                explication: "BitLocker or FileVault make a stolen disk unreadable: essential on a laptop."
            },
            {
                q: "What does “end-to-end” encryption mean?",
                options: [
                    "The message is encrypted twice",
                    "Only the sender and recipient can read the content, not even the provider",
                    "The message deletes itself after reading"
                ],
                a: 1,
                explication: "Many conventional email services do not apply it: the host can read your messages."
            },
            // Series 2
            {
                q: "What do the metadata of an encrypted exchange reveal?",
                options: [
                    "Nothing, everything is protected",
                    "Who spoke to whom, when and for how long",
                    "Part of the content of the messages"
                ],
                a: 1,
                explication: "That information is often as telling as the content itself."
            },
            {
                q: "Does a VPN protect against phishing?",
                options: [
                    "Yes, it blocks fraudulent sites",
                    "No: it encrypts the journey, nothing more",
                    "Yes, if it is a paid one"
                ],
                a: 1,
                explication: "It simply moves trust from your internet provider to the VPN provider, who sees all your traffic."
            },
            {
                q: "Which precaution is still worth taking on public Wi-Fi?",
                options: [
                    "Never connecting to it",
                    "Checking the exact name of the network with the venue",
                    "Turning off HTTPS to go faster"
                ],
                a: 1,
                explication: "Tethering from your phone remains safer for sensitive operations."
            }
        ]
    },

    // -------------------------------------------------------------------
    // SUMMARY
    // -------------------------------------------------------------------
    synthese: [
        // Series 1
        {
            q: "What does the overwhelming majority of compromises rest on?",
            options: [
                "Sophisticated technical flaws",
                "A reused password, a well-imitated email, unpatched software",
                "Targeted attacks by states"
            ],
            a: 1,
            explication: "The good news: a few simple habits remove most of the risk."
        },
        {
            q: "Which two measures offer the best effort-to-protection ratio?",
            options: [
                "A paid antivirus and a VPN",
                "A password manager and two-factor authentication on the mailbox",
                "A hardware firewall and a second computer"
            ],
            a: 1,
            explication: "One evening of setup is enough to remove most of your personal risk."
        },
        {
            q: "Can a legitimate organisation ask you for your password?",
            options: [
                "Yes, if it is the security team",
                "No, through no channel, without exception",
                "Yes, by phone only"
            ],
            a: 1,
            explication: "That rule has no exceptions: no password, no verification code."
        },
        // Series 2
        {
            q: "You get a text about a held parcel, with a link. What do you do?",
            options: [
                "Click, since you are indeed expecting a parcel",
                "Open the carrier's site yourself, the one you know",
                "Reply to the text asking for details"
            ],
            a: 1,
            explication: "The single reflex: never use the link supplied. If the message was real, the information will be waiting."
        },
        {
            q: "What comes first if you think an account has been compromised?",
            options: [
                "Running a full antivirus scan",
                "Changing your main mailbox password from a clean device",
                "Deleting the account concerned"
            ],
            a: 1,
            explication: "Then switch on two-factor authentication, deal with the other accounts, and file a report."
        },
        {
            q: "Which sentence best describes a good security posture?",
            options: [
                "Becoming invulnerable thanks to the right tools",
                "No longer being an easy target",
                "Avoiding the internet as much as possible"
            ],
            a: 1,
            explication: "Invulnerability does not exist; most attacks go for the least protected targets."
        }
    ]
};
