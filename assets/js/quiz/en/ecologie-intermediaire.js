// ===================================
// QUESTION BANK — DIGITAL SUSTAINABILITY, INTERMEDIATE LEVEL (EN)
// ===================================
// 6 questions per sub-section: 3 shown, the other 3 take over after two weeks.
// The summary questions are distinct from the sub-section ones — none is reused.
//
// Les clefs de « sections » sont les ancres ANGLAISES de la page traduite :
// quiz.js apparie la banque au « id » du titre h3.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "reading-an-impact-figure": [
            // Series 1
            {
                q: "Where do the factors of ten most often hide in an impact figure?",
                options: [
                    "In the rounding",
                    "In the scope: manufacturing included, or usage only?",
                    "In the currency used to convert the costs and the impacts"
                ],
                a: 1,
                explication: "That is the first of the five questions to ask."
            },
            {
                q: "Why does the country change everything?",
                options: [
                    "The networks are different",
                    "The devices are not the same",
                    "French electricity emits five to ten times less than the European average"
                ],
                a: 2,
                explication: "The same calculation gives a completely different result depending on the country."
            },
            {
                q: "How does a wrong figure take hold?",
                options: [
                    "Each repetition loses the previous one's assumptions, until the source disappears",
                    "Through an initial calculation error",
                    "Through deliberate manipulation"
                ],
                a: 0,
                explication: "That is the path of “3.2 kg per hour of video”, later corrected by a factor of around eight."
            },
            // Series 2
            {
                q: "What do you do with a figure that cannot be traced back to its source?",
                options: [
                    "Do not pass it on",
                    "Pass it on with a caveat",
                    "Pass it on if it comes from an institution"
                ],
                a: 0,
                explication: "Even if it points the right way."
            },
            {
                q: "Why be wary of a 2015 figure in this field?",
                options: [
                    "The calculation methods were banned from publication then",
                    "Digital's energy intensities are falling fast",
                    "The data was not public"
                ],
                a: 1,
                explication: "An old figure is often out of date, with nothing to signal it."
            },
            {
                q: "Is “streaming consumes nothing” a good correction of the wrong figure?",
                options: [
                    "No: it is an equally categorical claim in the opposite direction",
                    "Yes, it restores the truth",
                    "Yes, provided it comes from a researcher recognised in the field"
                ],
                a: 0,
                explication: "The right answer is an order of magnitude with an uncertainty — which passes on badly."
            }
        ],

        // ---------------------------------------------------------------
        "the-streaming-case": [
            // Series 1
            {
                q: "What can be calculated with certainty about streaming?",
                options: [
                    "The network cost per gigabyte carried, measured over a full year",
                    "The device's consumption: its power multiplied by the time",
                    "The data centres' share"
                ],
                a: 1,
                explication: "The rest is smaller and far more uncertain."
            },
            {
                q: "Two hours of video a day, on a 100 W television against a 3 W phone:",
                options: [
                    "A negligible gap",
                    "4.4 kg against 2 kg, so roughly half as much over the year",
                    "4.4 kg against 0.13 kg CO₂e a year — a factor of 33"
                ],
                a: 2,
                explication: "For exactly the same content and the same duration."
            },
            {
                q: "Why does a file twice as heavy not consume twice as much on the network?",
                options: [
                    "Because compression makes up for it",
                    "A network consumes mainly because it is switched on, not because it carries traffic",
                    "Because the files are cached"
                ],
                a: 1,
                explication: "The equipment runs whether traffic is heavy or light."
            },
            // Series 2
            {
                q: "Lowering the video quality: what effect?",
                options: [
                    "The most important of all the gestures anyone can make",
                    "Real, but on the smallest and most uncertain share",
                    "None"
                ],
                a: 1,
                explication: "The choice of screen has an effect tens of times larger."
            },
            {
                q: "Why are “per gigabyte” calculations misleading?",
                options: [
                    "Consumption per gigabyte falls as traffic rises",
                    "Gigabytes cannot be measured reliably across a network",
                    "They ignore compression"
                ],
                a: 0,
                explication: "That explains part of the field's past errors."
            },
            {
                q: "What does a laptop consume, as an order of magnitude?",
                options: [
                    "About 3 W",
                    "About 30 W",
                    "About 300 W"
                ],
                a: 1,
                explication: "Against 100 W for a television and 3 W for a phone."
            }
        ],

        // ---------------------------------------------------------------
        "what-weighs-what": [
            // Series 1
            {
                q: "Which item dominates digital's impact in France?",
                options: [
                    "Data centres",
                    "Networks",
                    "Devices"
                ],
                a: 2,
                explication: "And within devices, it is manufacturing that dominates."
            },
            {
                q: "Why do data centres take up all the space in discussions?",
                options: [
                    "They consume the most",
                    "They are the most measured",
                    "They are visible, concentrated, and belong to companies you can name"
                ],
                a: 2,
                explication: "Whatever is easy to point at is taken for the main culprit."
            },
            {
                q: "Does that ranking hold everywhere?",
                options: [
                    "No: it is specific to countries with low-carbon electricity",
                    "Yes, it is universal and holds for every country in the world",
                    "Yes, except in Asia"
                ],
                a: 0,
                explication: "The share of networks and data centres rises where electricity emits more."
            },
            // Series 2
            {
                q: "What dominates networks' consumption?",
                options: [
                    "The volume of data carried every day",
                    "The number of users connected at once",
                    "Equipment permanently switched on"
                ],
                a: 2,
                explication: "That is what makes “per gigabyte” reasoning so misleading."
            },
            {
                q: "A service “hosted in a green data centre” acts on what?",
                options: [
                    "On the smallest of the three items",
                    "On the dominant item of the whole balance",
                    "On the devices belonging to all its users"
                ],
                a: 0,
                explication: "That is not nothing, and it does not change the ranking."
            },
            {
                q: "Why does the sum of devices exceed the data centres?",
                options: [
                    "Devices use more electricity",
                    "There are few data centres in France",
                    "Billions of small objects manufactured and replaced weigh more than a few thousand buildings"
                ],
                a: 2,
                explication: "It is an effect of numbers, not of consumption per unit."
            }
        ],

        // ---------------------------------------------------------------
        "the-journey-avoided": [
            // Series 1
            {
                q: "A meeting 400 km away, return by plane against a video call:",
                options: [
                    "184 kg against 3.6 kg",
                    "18 kg against 3.6 grams",
                    "184 kg against 3.6 grams"
                ],
                a: 2,
                explication: "A ratio above 50,000. No other trade-off in the guide comes close."
            },
            {
                q: "Which mode emits least, per passenger per kilometre?",
                options: [
                    "French rail",
                    "A car with a single occupant",
                    "A short-haul flight"
                ],
                a: 0,
                explication: "A few grams, for the same reason as French electricity."
            },
            {
                q: "On what condition does the avoided-journey argument hold?",
                options: [
                    "That the journey is genuinely avoided",
                    "That the meeting lasts under two hours",
                    "That the video call is in low definition"
                ],
                a: 0,
                explication: "A call added on top of unchanged physical meetings avoids nothing: it adds."
            },
            // Series 2
            {
                q: "What does home working do to the balance, strictly speaking?",
                options: [
                    "It removes them entirely, with nothing in exchange",
                    "It always increases it",
                    "It shifts consumption as much as it removes it"
                ],
                a: 2,
                explication: "Home heating, duplicated equipment: the balance stays favourable but is far tighter."
            },
            {
                q: "What is the classic weakness of “avoidance” accounting?",
                options: [
                    "It systematically underestimates the real weight of digital tools",
                    "It ignores manufacturing",
                    "It compares against a hypothetical scenario nobody checks"
                ],
                a: 2,
                explication: "The honest question is about the total: has the number of journeys gone down?"
            },
            {
                q: "What is special about this case, in the whole path?",
                options: [
                    "It is the only one where digital changes the order of magnitude instead of nibbling at it",
                    "It is the only measurable one",
                    "It is the only one that concerns companies"
                ],
                a: 0,
                explication: "The ratio runs into thousands, not percentages."
            }
        ]
    },

    // Summary questions — distinct from the sub-section ones
    synthese: [
        {
            q: "What is the thread running through this level?",
            options: [
                "Cutting your video consumption",
                "Knowing how to discard a bad figure is worth more than knowing ten good habits",
                "Choosing a responsible host"
            ],
            a: 1,
            explication: "It is a more methodological level than a practical one, and deliberately so."
        },
        {
            q: "What do “10 g per email” and “3.2 kg per hour of video” have in common?",
            options: [
                "Both were inventions",
                "Both circulated for years before being corrected by a factor of ten",
                "Both concerned data centres"
            ],
            a: 1,
            explication: "And both came from estimates repeated without their assumptions."
        },
        {
            q: "Somebody quotes you a German study on how the impact splits. What is the caveat?",
            options: [
                "German studies are less reliable",
                "None, the methods are harmonised",
                "German electricity is far more carbon-intensive: the split does not transfer"
            ],
            a: 2,
            explication: "That is the second of the five questions, and the most often forgotten."
        },
        {
            q: "A company announces it hosts its service in a decarbonised data centre. What is missing?",
            options: [
                "The dominant item: its users' devices",
                "The detail of the water its cooling consumes",
                "The certification held by its hosting supplier"
            ],
            a: 0,
            explication: "The announcement addresses the smallest of the three items."
        },
        {
            q: "Which trade-off in this level deserves to be known before all the others?",
            options: [
                "The choice of video resolution",
                "The journey avoided",
                "The choice of hosting provider"
            ],
            a: 1,
            explication: "It is the only one where the order of magnitude flips."
        },
        {
            q: "What do you do when an impact figure strikes you?",
            options: [
                "Check it against a second article",
                "Look for its original source: half the time it does not exist or says something else",
                "Pass it on with “according to some studies”"
            ],
            a: 1,
            explication: "Two articles citing each other do not make two sources."
        }
    ]
};
