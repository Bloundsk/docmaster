// ===================================
// QUESTION BANK — WEB DEVELOPMENT, INTERMEDIATE LEVEL (EN)
// ===================================
// 6 questions per sub-section: 3 shown, the other 3 take over after two weeks.
//
// Les clefs de « sections » sont les ancres ANGLAISES de la page traduite :
// quiz.js apparie la banque au « id » du titre h3.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "apis-and-json": [
            // Series 1
            {
                q: "What does a well-designed API define?",
                options: [
                    "Only the address to call",
                    "The address, what you send, what you get back, and what happens on error",
                    "The data format only"
                ],
                a: 1,
                explication: "The last point is the one people forget, and it is the one that brings applications down in production."
            },
            {
                q: "What does a 401 status code mean?",
                options: [
                    "The resource does not exist",
                    "You need to identify yourself",
                    "The server failed"
                ],
                a: 1,
                explication: "404 for a missing resource, 500 for a server failure, 400 for a malformed request."
            },
            {
                q: "8 calls at 150 ms each: how long in sequence?",
                options: [
                    "150 ms",
                    "1,200 ms",
                    "600 ms"
                ],
                a: 1,
                explication: "In parallel, when the calls are independent, about 150 ms. The server is no faster: the arrangement changes."
            },
            // Series 2
            {
                q: "What is wrong with an API that returns 200 with an error message in the body?",
                options: [
                    "Nothing, it is simpler",
                    "It forces every client to guess that something went wrong",
                    "It uses more bandwidth"
                ],
                a: 1,
                explication: "Status codes exist precisely to avoid that ambiguity."
            },
            {
                q: "Where should a secret API key be kept?",
                options: [
                    "In the JavaScript, minified",
                    "On your server, which relays the request",
                    "In a browser variable"
                ],
                a: 1,
                explication: "Everything the browser receives can be read: code, variables, headers. A key placed there is public."
            },
            {
                q: "Which factor dominates the load time of a page that calls an API?",
                options: [
                    "The server's speed",
                    "The number of round trips",
                    "The size of the responses"
                ],
                a: 1,
                explication: "This is why parallelising independent calls changes everything."
            }
        ],

        // ---------------------------------------------------------------
        "databases": [
            // Series 1
            {
                q: "What does a relational database bring over a document one?",
                options: [
                    "More speed",
                    "A guarantee of consistency: you cannot record an order without an existing customer",
                    "Less configuration"
                ],
                a: 1,
                explication: "Data almost always ends up having relationships, and it is better for the database to enforce them."
            },
            {
                q: "Displaying 50 articles with one query per author, at 4 ms: how long?",
                options: [
                    "4 ms",
                    "204 ms",
                    "50 ms"
                ],
                a: 1,
                explication: "Against about 6 ms with a single query and a join. A ratio of 34 to 1."
            },
            {
                q: "What is an index for?",
                options: [
                    "Going straight to the right place rather than scanning every row",
                    "Compressing the data",
                    "Guaranteeing that records are unique"
                ],
                a: 0,
                explication: "Its price: it slows writes down a little and takes up space."
            },
            // Series 2
            {
                q: "Which columns should be indexed?",
                options: [
                    "All of them, to be safe",
                    "Those used in filters and joins",
                    "None, the database optimises by itself"
                ],
                a: 1,
                explication: "Every index has a cost in writes and in space."
            },
            {
                q: "How do you protect against SQL injection?",
                options: [
                    "By filtering special characters",
                    "By using prepared statements, where values are passed separately",
                    "By encrypting the database"
                ],
                a: 1,
                explication: "The defence is simple and systematic. There is no reason to do otherwise, ever."
            },
            {
                q: "Why is the query-in-a-loop problem hard to spot?",
                options: [
                    "It only shows up on large databases",
                    "The code looks identical when read: only the query counter reveals the difference",
                    "Tools do not measure it"
                ],
                a: 1,
                explication: "It is the most common performance fault, and the least visible."
            }
        ],

        // ---------------------------------------------------------------
        "going-live": [
            // Series 1
            {
                q: "What are the four elements of going live?",
                options: [
                    "Domain name, hosting, certificate, a way of deploying",
                    "Server, database, cache, backup",
                    "Code, tests, documentation, monitoring"
                ],
                a: 0,
                explication: "For a site with no server code, static hosting is enough — often free and very fast."
            },
            {
                q: "What is the most frequent failure of a first deployment?",
                options: [
                    "A certificate problem",
                    "File name casing: the server tells Image.png from image.png",
                    "Exceeding a quota"
                ],
                a: 1,
                explication: "Windows does not make that distinction, the server does."
            },
            {
                q: "Where should secrets go in production?",
                options: [
                    "In a versioned configuration file",
                    "In environment variables",
                    "In the database"
                ],
                a: 1,
                explication: "They can no longer sit in the code once the project is shared."
            },
            // Series 2
            {
                q: "What is wrong with deploying by manually copying a few files?",
                options: [
                    "It is too slow",
                    "You end up forgetting one, and the site breaks for everyone",
                    "It does not work over HTTPS"
                ],
                a: 1,
                explication: "Always deploy the whole thing, from a single source — ideally automatically."
            },
            {
                q: "Why can a change seem absent after deployment?",
                options: [
                    "Because of caching",
                    "The deployment failed",
                    "The certificate is not active"
                ],
                a: 0,
                explication: "Opening the site in a private window shows what everyone else sees."
            },
            {
                q: "Is HTTPS complicated to set up today?",
                options: [
                    "Yes, you have to buy a certificate",
                    "No, it is free and automatic with most hosts",
                    "It is only needed for shops"
                ],
                a: 1,
                explication: "There is no longer any reason to go without it."
            }
        ],

        // ---------------------------------------------------------------
        "working-with-others": [
            // Series 1
            {
                q: "What is Git essentially for?",
                options: [
                    "Backing up your files",
                    "Going back, and working with others without getting in each other's way",
                    "Hosting your code"
                ],
                a: 1,
                explication: "Presenting it as a backup tool leads to using it badly."
            },
            {
                q: "What should a commit message explain?",
                options: [
                    "The what: which files changed",
                    "The why: the reason for the change",
                    "The author's name"
                ],
                a: 1,
                explication: "“Fix VAT calculation on partial refunds” is worth infinitely more than “fix”."
            },
            {
                q: "What is the principle of branches?",
                options: [
                    "The main branch always stays working",
                    "Each developer has a permanent branch",
                    "One branch per changed file"
                ],
                a: 0,
                explication: "Each piece of work lives alongside until it is ready."
            },
            // Series 2
            {
                q: "Why is a branch that lives three weeks a problem?",
                options: [
                    "It takes up disk space",
                    "Everything else moved meanwhile, so merging back becomes hard",
                    "Git limits how long branches can live"
                ],
                a: 1,
                explication: "Short branches, merged often, avoid most conflicts."
            },
            {
                q: "Is a password committed then deleted safe?",
                options: [
                    "Yes, deleting removes it",
                    "No: it stays in the history and must be considered compromised",
                    "Yes, if the repository is private"
                ],
                a: 1,
                explication: "It has to be changed, not merely removed."
            },
            {
                q: "What is wrong with a commit mixing a fix, a feature and a reformat?",
                options: [
                    "It takes too long to review",
                    "It is impossible to undo one without the others",
                    "It makes the repository bigger"
                ],
                a: 1,
                explication: "One commit, one intention. That is what makes the history usable."
            }
        ]
    },

    // Summary questions — distinct from the sub-section ones
    synthese: [
        {
            q: "What turns a page into an application?",
            options: [
                "A modern framework",
                "Pieces that communicate, data that persists, a deployment",
                "Large amounts of JavaScript"
            ],
            a: 1,
            explication: "These are the four subjects on which a personal project becomes a real one."
        },
        {
            q: "A page is slow. Where do you start?",
            options: [
                "Optimising the server code",
                "Counting the number of queries it triggers",
                "Changing host"
            ],
            a: 1,
            explication: "API round trips and queries in a loop explain most slowness."
        },
        {
            q: "What principle links the API key and form validation?",
            options: [
                "What is in the browser belongs to the user",
                "Exchanges must be encrypted",
                "JavaScript should be minimised"
            ],
            a: 0,
            explication: "Everything the browser receives can be read and changed. The check that counts is on the server."
        },
        {
            q: "Why does the choice between relational and document matter less than people say?",
            options: [
                "Both perform identically",
                "It is the way you query the database that decides performance",
                "Document databases have disappeared"
            ],
            a: 1,
            explication: "A query in a loop ruins performance whatever the type of database."
        },
        {
            q: "Which habit protects against both a failed deployment and a Git conflict?",
            options: [
                "Working in small steps, often",
                "Documenting more",
                "Using newer tools"
            ],
            a: 0,
            explication: "Deploying the whole thing from a single source, merging short branches: the same logic."
        },
        {
            q: "What should be checked after every deployment?",
            options: [
                "The site in a private window, to bypass the cache",
                "The server logs",
                "The size of the files sent"
            ],
            a: 0,
            explication: "It is the only way of seeing what visitors actually see."
        }
    ]
};
