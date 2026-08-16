// ===================================
// DOCMASTER - QUIZ INTERACTIF
// v2 : un quiz par sous-section + un quiz de synthèse, avec rotation
// ===================================
//
// Chaque guide charge sa banque de questions (assets/js/quiz/<guide>.js), qui
// définit window.QUIZ :
//
//   window.QUIZ = {
//       sections: { "ancre-de-la-sous-section": [ 6 questions ], ... },
//       synthese: [ 6 questions couvrant l'ensemble du guide ]
//   };
//
// Une question : { q: "énoncé", options: ["a","b","c"], a: index de la bonne }
//
// ROTATION
// Sur les 6 questions d'une banque, 3 sont affichées. Le jeu bascule sur les
// 3 autres toutes les deux semaines, automatiquement et sans intervention.
// Le calcul est déterministe : tous les visiteurs voient la même série au même
// moment, et un rechargement ne change rien — sinon on pourrait faire défiler
// les questions jusqu'à tomber sur celles qu'on connaît.

(function () {
    // Les libelles viennent de langues.js. Sans lui — page isolee, script non
    // charge — on retombe sur le texte francais plutot que sur rien.
    const T = (clef, repli) => {
        const L = window.DOCMASTER_LANGUES;
        return L ? L.t(clef) : repli;
    };

    const DUREE_CYCLE = 14 * 24 * 60 * 60 * 1000;   // deux semaines
    const EPOQUE = Date.UTC(2026, 0, 5);            // lundi de référence
    const QUESTIONS_AFFICHEES = 3;

    // Numéro de la série en cours. Avec 6 questions et 3 affichées, il y a
    // deux séries : le cycle complet dure donc quatre semaines.
    function serieCourante(taillePool) {
        const nbSeries = Math.max(1, Math.floor(taillePool / QUESTIONS_AFFICHEES));
        const cycles = Math.floor((Date.now() - EPOQUE) / DUREE_CYCLE);
        return ((cycles % nbSeries) + nbSeries) % nbSeries;   // jamais négatif
    }

    function selectionner(banque) {
        if (!Array.isArray(banque) || !banque.length) return [];
        const serie = serieCourante(banque.length);
        const debut = serie * QUESTIONS_AFFICHEES;
        const choix = banque.slice(debut, debut + QUESTIONS_AFFICHEES);
        // Si la banque n'est pas un multiple exact, on complète depuis le début
        // plutôt que d'afficher un quiz tronqué.
        return choix.length ? choix : banque.slice(0, QUESTIONS_AFFICHEES);
    }

    function prochaineBascule() {
        const cycles = Math.floor((Date.now() - EPOQUE) / DUREE_CYCLE);
        return new Date(EPOQUE + (cycles + 1) * DUREE_CYCLE);
    }

    // --- Rendu d'un quiz --------------------------------------------------

    function construireQuiz(questions, conteneur, titre, surtitre) {
        if (!questions.length) return;

        const bloc = document.createElement("div");
        bloc.className = "quiz-bloc";

        // Surtitre : marque nettement le passage du cours à l'exercice. Une
        // simple bordure ne suffisait pas à signaler la rupture.
        if (surtitre) {
            const s = document.createElement("p");
            s.className = "quiz-surtitre";
            s.textContent = surtitre;
            bloc.appendChild(s);
        }

        if (titre) {
            const h = document.createElement("p");
            h.className = "quiz-titre";
            h.textContent = titre;
            bloc.appendChild(h);
        }

        let repondues = 0;
        let justes = 0;

        const score = document.createElement("p");
        score.className = "quiz-score";
        score.setAttribute("role", "status");   // annoncé par les lecteurs d'écran

        questions.forEach((item, i) => {
            const q = document.createElement("div");
            q.className = "quiz-question";

            const enonce = document.createElement("p");
            enonce.textContent = (i + 1) + ". " + item.q;
            q.appendChild(enonce);

            const choix = document.createElement("div");
            choix.className = "quiz-options";

            item.options.forEach((texte, idx) => {
                const btn = document.createElement("button");
                btn.type = "button";
                btn.className = "quiz-option";
                btn.textContent = texte;

                btn.addEventListener("click", () => {
                    if (q.dataset.repondu) return;
                    q.dataset.repondu = "true";

                    const boutons = choix.querySelectorAll(".quiz-option");
                    boutons.forEach(b => b.disabled = true);

                    if (idx === item.a) {
                        btn.classList.add("correct");
                        justes++;
                    } else {
                        btn.classList.add("incorrect");
                        boutons[item.a].classList.add("correct");
                    }

                    repondues++;
                    score.textContent = T("quizScore", "{j} bonne(s) réponse(s) sur {r} question(s) répondue(s)")
                        .replace("{j}", justes).replace("{r}", repondues);

                    // L'explication n'apparaît qu'après la réponse : la donner
                    // avant reviendrait à donner la solution.
                    if (item.explication) {
                        const exp = document.createElement("p");
                        exp.className = "quiz-explication";
                        exp.textContent = item.explication;
                        q.appendChild(exp);
                    }
                });

                choix.appendChild(btn);
            });

            q.appendChild(choix);
            bloc.appendChild(q);
        });

        bloc.appendChild(score);
        conteneur.appendChild(bloc);
    }

    // --- Mise en place ----------------------------------------------------

    document.addEventListener("DOMContentLoaded", () => {
        // Compatibilité avec les guides pas encore migrés, qui définissent
        // encore un tableau `quizData` de 3 questions au lieu de window.QUIZ.
        // Sans ce repli, leur quiz s'afficherait vide pendant la migration.
        if (typeof window.QUIZ === "undefined") {
            if (typeof quizData !== "undefined" && Array.isArray(quizData)) {
                const conteneur = document.getElementById("quiz-container");
                if (conteneur) construireQuiz(quizData, conteneur, null);
            }
            return;
        }

        // 1. Un quiz au bas de chaque sous-section
        document.querySelectorAll("details.lecon").forEach(section => {
            const titreH3 = section.querySelector("summary h3");
            const corps = section.querySelector(".lecon-corps");
            if (!titreH3 || !corps) return;

            const banque = (window.QUIZ.sections || {})[titreH3.id];
            if (!banque) return;

            construireQuiz(selectionner(banque), corps, T("quizTitre", "🧠 Vérifiez votre compréhension"), T("quizSurtitre", "On passe au test"));
        });

        // 2. Le quiz de synthèse, en bas de page
        const conteneur = document.getElementById("quiz-container");
        if (conteneur && window.QUIZ.synthese) {
            construireQuiz(selectionner(window.QUIZ.synthese), conteneur, null);

            const info = document.getElementById("quiz-rotation");
            if (info) {
                const d = prochaineBascule();
                const L = window.DOCMASTER_LANGUES;
                info.textContent = T("quizRotation", "Les questions changent le ")
                    + d.toLocaleDateString(L ? L.locale() : "fr-FR", { day: "numeric", month: "long", year: "numeric" })
                    + T("quizRotationFin", ".");
            }
        }
    });
})();
