// ===================================
// QUESTION BANK — WEB DEVELOPMENT, BEGINNER LEVEL (EN)
// ===================================
// 6 questions per sub-section: 3 shown, the other 3 take over after two weeks.
//
// Les clefs de « sections » sont les ancres ANGLAISES de la page traduite :
// quiz.js apparie la banque au « id » du titre h3. Ici elles coincident avec
// les francaises — html-css, javascript — parce que ce sont des noms propres.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "html-css": [
            // Series 1
            {
                q: "What does an HTML tag describe?",
                options: [
                    "The visual appearance of an element",
                    "The nature and role of a piece of content",
                    "The element's position on screen"
                ],
                a: 1,
                explication: "<h1> does not mean “big text” but “main heading of this page”."
            },
            {
                q: "What is the difference between <div class=\"big-title\"> and <h2>?",
                options: [
                    "None, only the styling changes",
                    "The <h2> is understood as a heading by Google and screen readers",
                    "The <div> renders faster"
                ],
                a: 1,
                explication: "Visually identical after a few lines of CSS. Functionally, worlds apart."
            },
            {
                q: "When two CSS rules apply to the same element, which wins?",
                options: [
                    "The one written last",
                    "The one whose selector is more specific",
                    "The one with more properties"
                ],
                a: 1,
                explication: "An id beats a class, which beats a tag. Most “this CSS doesn't work” comes from there."
            },
            // Series 2
            {
                q: "Which CSS tool should you choose to align elements along a single line?",
                options: [
                    "Grid",
                    "Flexbox",
                    "Tables"
                ],
                a: 1,
                explication: "Flexbox for one dimension, Grid for a two-dimensional grid."
            },
            {
                q: "What are CSS variables such as --primary for?",
                options: [
                    "Speeding up page loading",
                    "Centralising repeated values in one place",
                    "Hiding colours from the source code"
                ],
                a: 1,
                explication: "Changing the site's palette then means editing one line, instead of hunting a code through forty files."
            },
            {
                q: "Why avoid writing style directly in the HTML?",
                options: [
                    "Because it does not work",
                    "Because every change then means reopening every file",
                    "Because browsers forbid it"
                ],
                a: 1,
                explication: "That discipline costs five minutes at the start and saves days afterwards."
            }
        ],

        // ---------------------------------------------------------------
        "javascript": [
            // Series 1
            {
                q: "What is the DOM?",
                options: [
                    "The HTML file saved on disk",
                    "The in-memory representation of the page, which JavaScript manipulates",
                    "A programming language"
                ],
                a: 1,
                explication: "The original file does not change: refreshing the page undoes every modification."
            },
            {
                q: "How do you keep information after a page reload?",
                options: [
                    "By storing it in the DOM",
                    "By using localStorage or a server",
                    "It is not possible in JavaScript"
                ],
                a: 1,
                explication: "The DOM is rebuilt on every load: whatever you write into it disappears."
            },
            {
                q: "What is the basic pattern of most of a site's JavaScript?",
                options: [
                    "Calculate, display, save",
                    "Select an element, listen for an event, change a class",
                    "Load, compile, run"
                ],
                a: 1,
                explication: "The styling stays in the CSS: JavaScript merely adds or removes the class."
            },
            // Series 2
            {
                q: "What does the keyword await mean?",
                options: [
                    "Pause the program for one second",
                    "Wait for the result before continuing this function",
                    "Repeat the operation until it succeeds"
                ],
                a: 1,
                explication: "Without it, you manipulate an answer that has not arrived — a frequent cause of baffling bugs."
            },
            {
                q: "A script in the <head> fails with getElementById returning null. Why?",
                options: [
                    "The id is misspelled",
                    "The script runs before the HTML exists",
                    "Browsers block scripts in the <head>"
                ],
                a: 1,
                explication: "Two solutions: put the script just before </body>, or add the defer attribute."
            },
            {
                q: "Which developer-tools tab shows files returning a 404?",
                options: [
                    "Console",
                    "Network",
                    "Elements"
                ],
                a: 1,
                explication: "The Console shows JavaScript errors, Elements shows the DOM and the CSS actually applied."
            }
        ],

        // ---------------------------------------------------------------
        "frontend-vs-backend": [
            // Series 1
            {
                q: "Which question separates frontend from backend?",
                options: [
                    "Is the code written in JavaScript?",
                    "Does the code run on the visitor's machine or on a server?",
                    "Is the code visible in the editor?"
                ],
                a: 1,
                explication: "Everything sent to the browser can be read by the visitor, code and comments included."
            },
            {
                q: "Where should an API key be kept so that it stays secret?",
                options: [
                    "In a JavaScript file, under a different name",
                    "On the server only",
                    "In an HTML comment"
                ],
                a: 1,
                explication: "Robots constantly scan public sites for those keys; the delay before exploitation is measured in minutes."
            },
            {
                q: "An access check performed in browser-side JavaScript is:",
                options: [
                    "Sufficient if the code is minified",
                    "Bypassable in seconds",
                    "As safe as a server-side check"
                ],
                a: 1,
                explication: "The browser-side check is only there for convenience. What counts is checked on the server."
            },
            // Series 2
            {
                q: "Which kind of project does not need a backend?",
                options: [
                    "A shop with payments",
                    "A documentation site or a portfolio",
                    "An application with user accounts"
                ],
                a: 1,
                explication: "Faster, free to host, and practically unattackable: there is no database to breach."
            },
            {
                q: "What problem do React, Vue and Angular solve?",
                options: [
                    "A site's search visibility",
                    "Keeping a complex interface in step with constantly changing data",
                    "Compatibility between browsers"
                ],
                a: 1,
                explication: "On a ten-page site they mostly add complexity and weight."
            },
            {
                q: "Which order of learning is recommended?",
                options: [
                    "Start with a framework, it is more modern",
                    "Master JavaScript, meet the limit, then choose the tool that solves it",
                    "Learn both in parallel"
                ],
                a: 1,
                explication: "Every framework ends up producing HTML, CSS and JavaScript."
            }
        ],

        // ---------------------------------------------------------------
        "responsive-design": [
            // Series 1
            {
                q: "What happens if the viewport tag is missing?",
                options: [
                    "The site does not display at all on mobile",
                    "The phone shows a miniature version of the site at 980 px",
                    "Images disappear"
                ],
                a: 1,
                explication: "It is the first thing to check when a site looks tiny on a phone."
            },
            {
                q: "Why avoid fixed widths in pixels?",
                options: [
                    "They slow down rendering",
                    "They necessarily overflow on a narrower screen",
                    "They are forbidden by the standards"
                ],
                a: 1,
                explication: "Prefer %, rem, fr and max-width, which adapt to the space available."
            },
            {
                q: "What does the mobile-first approach consist of?",
                options: [
                    "Building a mobile app before the site",
                    "Writing the small-screen style first, then adding for larger ones",
                    "Testing on mobile after finishing the desktop version"
                ],
                a: 1,
                explication: "A narrow screen forces prioritising: there is room only for the essentials."
            },
            // Series 2
            {
                q: "What minimum size should you allow for something tapped with a finger?",
                options: [
                    "16 pixels",
                    "44 pixels",
                    "80 pixels"
                ],
                a: 1,
                explication: "A finger is not a cursor: below that, mis-taps multiply."
            },
            {
                q: "Why is a menu that opens on hover a problem?",
                options: [
                    "It is too slow",
                    "Hover does not exist on a touch screen",
                    "It uses too much memory"
                ],
                a: 1,
                explication: "The menu then becomes unreachable for the majority of visitors."
            },
            {
                q: "How do you stop a table overflowing on mobile?",
                options: [
                    "Reduce the font size",
                    "Put it in a container with overflow-x: auto",
                    "Remove columns"
                ],
                a: 1,
                explication: "The table then scrolls inside its own frame, without scrolling the whole page sideways."
            }
        ]
    },

    // Summary questions — distinct from the sub-section ones
    synthese: [
        {
            q: "What are the three foundations of a web page?",
            options: [
                "React, Node.js and a database",
                "HTML for structure, CSS for appearance, JavaScript for interactivity",
                "A server, a domain and a certificate"
            ],
            a: 1,
            explication: "They have not changed in twenty years, and every framework ends up producing those three things."
        },
        {
            q: "Your page does not do what you expect. What is the first reflex?",
            options: [
                "Rewrite the code from scratch",
                "Open the console with F12: the error is almost always written there, with its line",
                "Search for the answer on a forum"
            ],
            a: 1,
            explication: "Console for JavaScript errors, Network for missing files, Elements for the applied CSS."
        },
        {
            q: "Which statement about a site's security is accurate?",
            options: [
                "Minified code is protected well enough",
                "Everything that reaches the browser is public",
                "HTTPS prevents reading the source code"
            ],
            a: 1,
            explication: "Security is never written on the frontend: a right-click is enough to read everything."
        },
        {
            q: "You have to build a ten-page portfolio. Which approach should you favour?",
            options: [
                "A modern framework, to stay current",
                "Plain HTML, CSS and JavaScript files, served as they are",
                "A CMS with a database"
            ],
            a: 1,
            explication: "Faster, free to host, and with no database to breach."
        },
        {
            q: "What is the best way to make progress in web development?",
            options: [
                "Working through one tutorial after another",
                "Running a real project you care about",
                "Learning frameworks before the basics"
            ],
            a: 1,
            explication: "A real site confronts you with real problems — and it is in solving them that things stick."
        },
        {
            q: "A site uses <div class=\"big-title\"> everywhere instead of <h1> and <h2>. What follows?",
            options: [
                "The site displays badly",
                "Google and screen readers no longer understand its structure",
                "The site loads more slowly"
            ],
            a: 1,
            explication: "The appearance can be identical; the meaning has gone."
        }
    ]
};
