// ===================================
// DOCMASTER - QUIZ INTERACTIF
// ===================================

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("quiz-container");
    const scoreEl = document.getElementById("quiz-score");
    if (!container || typeof quizData === "undefined") return;

    let answered = 0;
    let correct = 0;

    quizData.forEach((item, qIndex) => {
        const block = document.createElement("div");
        block.className = "quiz-question";

        const question = document.createElement("p");
        question.textContent = (qIndex + 1) + ". " + item.q;
        block.appendChild(question);

        const optionsWrap = document.createElement("div");
        optionsWrap.className = "quiz-options";

        item.options.forEach((optionText, oIndex) => {
            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = "quiz-option";
            btn.textContent = optionText;

            btn.addEventListener("click", () => {
                if (btn.dataset.locked) return;

                const buttons = optionsWrap.querySelectorAll(".quiz-option");
                buttons.forEach(b => b.dataset.locked = "true");

                if (oIndex === item.a) {
                    btn.classList.add("correct");
                    correct++;
                } else {
                    btn.classList.add("incorrect");
                    buttons[item.a].classList.add("correct");
                }

                answered++;
                scoreEl.textContent = `Score : ${correct} / ${quizData.length} question(s) répondues (${answered}/${quizData.length})`;
            });

            optionsWrap.appendChild(btn);
        });

        block.appendChild(optionsWrap);
        container.appendChild(block);
    });
});
