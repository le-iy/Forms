
/* ==========================================================
   PANDORA V.3 — QUIZ STUDIO UI
   Version 2

   Requires:
   - pandora-quiz-registry.js v2
   - pandora-quiz-sessions.js v2

   Navigation integration:
   - pandora-quiz-bridge.js

   Existing Pandora CSS classes are preserved.
   ========================================================== */

(() => {
    "use strict";

    if (window.PandoraQuizUI) return;

    const Registry = window.PandoraQuizzes;
    const Sessions = window.PandoraQuizSessions;

    if (!Registry || !Sessions) {
        console.error("Quiz UI requires Registry and Sessions.");
        return;
    }

    const state = {
        view: "library",
        quizId: null,
        attemptId: null,
        search: "",
        subject: "all",
        kind: "all",
        sort: "subject",
        setupMode: "practice",
        setupTimer: "none",
        setupMinutes: 30,
        setupShuffle: false,
        returnTo: null
    };

    let root = null;
    let timerInterval = null;

    const $ = (selector) =>
        root?.querySelector(selector) || null;

    const escapeHTML = (value) =>
        String(value ?? "").replace(/[&<>"']/g, char => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        })[char]);

    function dateText(timestamp) {
        return timestamp
            ? new Date(timestamp).toLocaleString(undefined, {
                dateStyle: "medium",
                timeStyle: "short"
            })
            : "—";
    }

    function formatTime(ms) {
        const seconds = Math.max(0, Math.ceil(ms / 1000));
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;

        return h
            ? `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`
            : `${m}:${String(s).padStart(2, "0")}`;
    }

    function heading(title, subtitle = "") {
        return `
            <header class="pq-heading">
                <span class="pq-eyebrow">PANDORA ACADEMIC HUB</span>
                <h1>${escapeHTML(title)} ✦</h1>
                <p>${escapeHTML(subtitle)}</p>
            </header>
        `;
    }

    function button(label, action, extra = "") {
        return `
            <button type="button"
                class="pq-button ${extra}"
                data-pq-action="${escapeHTML(action)}">
                ${escapeHTML(label)}
            </button>
        `;
    }

    function quizMeta(quiz) {
        return `${escapeHTML(quiz.subject)} · Module ${quiz.module}
            · ${quiz.questionCount ?? quiz.questions?.length ?? 0} questions`;
    }

    function activeAttempt() {
        return state.attemptId
            ? Sessions.get(state.attemptId)
            : null;
    }

    function attemptQuiz(attempt) {
        return attempt
            ? Sessions.getQuizForAttempt(attempt)
            : null;
    }

    function answered(answer) {
        if (answer === undefined || answer === null) {
            return false;
        }

        if (Array.isArray(answer)) {
            return answer.length > 0;
        }

        if (typeof answer === "string") {
            return answer.trim().length > 0;
        }

        return true;
    }

    function isChecked(attempt, questionId) {
        return (
            attempt.settings.mode === "practice" &&
            attempt.checkedQuestions.includes(questionId)
        );
    }

    function questionById(quiz, id) {
        return quiz?.questions.find(q => q.id === id) || null;
    }

    
    /* ======================================================
       QUIZ IMAGE SUPPORT
       ====================================================== */

    function safeImagePath(path) {
        return (
            typeof path === "string" &&
            /^\.\/SUBJECTS\/quizzes\/[A-Z0-9_-]+\/imgs\/(?:[a-zA-Z0-9_-]+\/)*[a-zA-Z0-9_.-]+\.(?:png|jpg|jpeg|webp|gif)$/i.test(path)
        );
    }

    function imageButton(path, alt, extraClass = "") {
        if (!safeImagePath(path)) {
            return "";
        }

        return `
            <button
                type="button"
                class="pq-image-trigger ${extraClass}"
                data-pq-action="enlarge-image"
                data-pq-image-src="${escapeHTML(path)}"
                data-pq-image-alt="${escapeHTML(alt)}"
                title="Click to enlarge image"
                aria-label="Enlarge ${escapeHTML(alt)}">

                <img
                    src="${escapeHTML(path)}"
                    alt="${escapeHTML(alt)}"
                    loading="lazy">

                <span class="pq-image-hint">
                    ⤢ Click to enlarge
                </span>
            </button>
        `;
    }

    function questionImage(question) {
        if (!question.image) {
            return "";
        }

        return `
            <div class="pq-question-image">
                ${imageButton(
                    question.image,
                    `Diagram for ${question.id}`
                )}
            </div>
        `;
    }

    function reviewOptionImages(question) {
        if (!Array.isArray(question.optionImages)) {
            return "";
        }

        const images = question.optionImages
            .map((path, index) => {
                if (!safeImagePath(path)) return "";

                const letter = String.fromCharCode(65 + index);

                return `
                    <div class="pq-review-option-image">
                        <strong>Option ${letter}</strong>
                        ${imageButton(
                            path,
                            `Option ${letter} for ${question.id}`,
                            "pq-review-image-trigger"
                        )}
                    </div>
                `;
            })
            .filter(Boolean)
            .join("");

        return images
            ? `<div class="pq-review-option-images">${images}</div>`
            : "";
    }

    function openImageViewer(path, alt = "Quiz image") {
        if (!safeImagePath(path)) {
            console.warn(
                "Pandora Quiz: invalid image path.",
                path
            );
            return;
        }

        // Only one viewer at a time.
        document.querySelector(
            "[data-pq-image-viewer]"
        )?.remove();

        const dialog = document.createElement("dialog");
        dialog.className = "pq-image-viewer";
        dialog.dataset.pqImageViewer = "";
        dialog.setAttribute(
            "aria-label",
            "Enlarged quiz image"
        );

        const closeButton = document.createElement("button");
        closeButton.type = "button";
        closeButton.className = "pq-image-close";
        closeButton.textContent = "✕ Close";
        closeButton.setAttribute(
            "aria-label",
            "Close enlarged image"
        );

        const image = document.createElement("img");
        image.src = path;
        image.alt = alt;

        const caption = document.createElement("p");
        caption.textContent = alt;

        dialog.append(
            closeButton,
            image,
            caption
        );

        closeButton.addEventListener(
            "click",
            () => dialog.close()
        );

        dialog.addEventListener("click", event => {
            if (event.target === dialog) {
                dialog.close();
            }
        });

        dialog.addEventListener(
            "close",
            () => dialog.remove(),
            { once: true }
        );

        document.body.appendChild(dialog);
        dialog.showModal();
    }

    function getCorrectAnswerText(question) {
        if (question.type === "multiple_choice") {
            return question.options[question.correctAnswer] ?? "—";
        }

        if (question.type === "multiple_select") {
            return question.correctAnswer
                .map(index => question.options[index] ?? "—")
                .join(", ");
        }

        if (question.type === "true_false") {
            return question.correctAnswer ? "True" : "False";
        }

        return String(question.correctAnswer);
    }

    function displayAnswer(question, answer) {
        if (!answered(answer)) return "Unanswered";

        if (question.type === "multiple_choice") {
            return question.options[answer] ?? "Unknown option";
        }

        if (question.type === "multiple_select") {
            return Array.isArray(answer)
                ? answer.map(index =>
                    question.options[index] ?? "Unknown option"
                ).join(", ")
                : "Invalid selection";
        }

        if (question.type === "true_false") {
            return answer ? "True" : "False";
        }

        return String(answer);
    }

    /* ======================================================
       LIBRARY
       ====================================================== */

    function filteredQuizzes() {
        const quizzes = Registry.list({
            subject: state.subject === "all"
                ? undefined
                : state.subject,
            kind: state.kind === "all"
                ? undefined
                : state.kind,
            search: state.search
        });

        if (state.sort === "title") {
            quizzes.sort((a, b) =>
                a.title.localeCompare(b.title)
            );
        }

        if (state.sort === "questions") {
            quizzes.sort((a, b) =>
                b.questionCount - a.questionCount
            );
        }

        return quizzes;
    }

    function library() {
        const all = Registry.list();
        const shown = filteredQuizzes();
        const subjects = [
            ...new Set(all.map(q => q.subject))
        ].sort();

        return `
            ${heading(
                "Quiz Studio",
                "Your built-in practice tests, all in one place."
            )}

            <div class="pq-stats">
                <article class="pq-stat">
                    <strong>${all.length}</strong>
                    <span>Available Tests</span>
                </article>
                <article class="pq-stat">
                    <strong>${subjects.length}</strong>
                    <span>Subjects</span>
                </article>
                <article class="pq-stat">
                    <strong>${Sessions.list().length}</strong>
                    <span>Total Attempts</span>
                </article>
            </div>

            <div class="pq-toolbar">
                ${button("All Quizzes", "library", "pq-primary")}
                ${button("In Progress", "in-progress")}
                ${button("Attempt History", "history")}
            </div>

            <section class="pq-panel">
                <h2>Find a Practice Test</h2>
                <div class="pq-filters">
                    <input type="search"
                        data-pq-search
                        placeholder="Search quizzes..."
                        value="${escapeHTML(state.search)}">

                    <select data-pq-subject>
                        <option value="all">All Subjects</option>
                        ${subjects.map(subject => `
                            <option value="${escapeHTML(subject)}"
                                ${state.subject === subject ? "selected" : ""}>
                                ${escapeHTML(subject)}
                            </option>
                        `).join("")}
                    </select>

                    <select data-pq-kind>
                        <option value="all">All Types</option>
                        ${["formative", "summative", "practice"].map(kind => `
                            <option value="${kind}"
                                ${state.kind === kind ? "selected" : ""}>
                                ${kind[0].toUpperCase() + kind.slice(1)}
                            </option>
                        `).join("")}
                    </select>

                    <select data-pq-sort>
                        <option value="subject"
                            ${state.sort === "subject" ? "selected" : ""}>
                            Subject / Module
                        </option>
                        <option value="title"
                            ${state.sort === "title" ? "selected" : ""}>
                            Title
                        </option>
                        <option value="questions"
                            ${state.sort === "questions" ? "selected" : ""}>
                            Most Questions
                        </option>
                    </select>
                </div>
            </section>

            <section class="pq-panel">
                <div class="pq-section-title">
                    <h2>Available Quizzes</h2>
                    <span>${shown.length} results</span>
                </div>

                ${shown.length ? shown.map(quiz => `
                    <article class="pq-quiz-card">
                        <div class="pq-quiz-icon">✎</div>

                        <div class="pq-quiz-info">
                            <strong>${escapeHTML(quiz.title)}</strong>
                            <small>${quizMeta(quiz)}</small>
                            <span class="pq-kind">
                                ${escapeHTML(quiz.kind)}
                            </span>
                        </div>

                        <div class="pq-actions pq-quiz-actions">
                            ${quiz.pdfCopy ? `
                                <a
                                    class="pq-button pq-pdf-copy"
                                    href="${escapeHTML(quiz.pdfCopy)}"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="View the PDF copy of this quiz">
                                    ♧ See PDF Copy
                                </a>
                            ` : ""}

                            <button
                                type="button"
                                class="pq-button pq-primary"
                                data-pq-action="open-quiz"
                                data-pq-id="${escapeHTML(quiz.id)}">
                                Open Quiz
                            </button>
                        </div>

                    </article>
                `).join("") : `
                    <div class="pq-empty">
                        <strong>No quizzes available yet.</strong>
                        <p>
                            Add quiz files to the manifest to
                            populate the Quiz Studio.
                        </p>
                    </div>
                `}
            </section>
        `;
    }

    /* ======================================================
       SESSION SETUP
       ====================================================== */

    function setup() {
        const quiz = Registry.get(state.quizId);

        if (!quiz) return emptyQuiz();

        const existing = Sessions.findInProgress(quiz.id);

        return `
            ${heading(
                quiz.title,
                `${quiz.subject} · Module ${quiz.module}`
            )}

            <section class="pq-panel pq-setup">
                <div class="pq-section-title">
                    <h2>Before You Begin</h2>
                    <span>${quiz.questions.length} questions</span>
                </div>

                ${existing ? `
                    <div class="pq-notice">
                        <strong>You have an unfinished attempt.</strong>
                        <p>
                            Resume your saved attempt or start a
                            separate one.
                        </p>
                        <button type="button"
                            class="pq-button pq-primary"
                            data-pq-action="resume"
                            data-pq-id="${escapeHTML(existing.id)}">
                            Resume Attempt
                        </button>
                    </div>
                ` : ""}

                <div class="pq-setting-group">
                    <h3>Quiz Mode</h3>

                    <label>
                        <input type="radio" name="pq-mode"
                            value="practice"
                            ${state.setupMode === "practice" ? "checked" : ""}>
                        <span>
                            <strong>Practice Mode</strong>
                            <small>
                                Check answers and read explanations
                                as you go. Checked answers are locked.
                            </small>
                        </span>
                    </label>

                    <label>
                        <input type="radio" name="pq-mode"
                            value="exam"
                            ${state.setupMode === "exam" ? "checked" : ""}>
                        <span>
                            <strong>Exam Simulation</strong>
                            <small>
                                Answers and explanations appear
                                after submission.
                            </small>
                        </span>
                    </label>
                </div>

                <div class="pq-setting-group">
                    <h3>Timer</h3>

                    <label>
                        <input type="radio" name="pq-timer"
                            value="none"
                            ${state.setupTimer === "none" ? "checked" : ""}>
                        <span>No time limit</span>
                    </label>

                    <label>
                        <input type="radio" name="pq-timer"
                            value="countdown"
                            ${state.setupTimer === "countdown" ? "checked" : ""}>
                        <span>Custom countdown</span>
                    </label>

                    <div class="pq-time-input"
                        ${state.setupTimer === "none" ? "hidden" : ""}>
                        <label for="pq-minutes">Minutes</label>
                        <input id="pq-minutes"
                            type="number" min="1" max="1440"
                            value="${state.setupMinutes}"
                            data-pq-minutes>
                    </div>
                </div>

                <label class="pq-check">
                    <input type="checkbox"
                        data-pq-shuffle
                        ${state.setupShuffle ? "checked" : ""}>
                    Shuffle question order
                </label>

                <p class="pq-hint">
                    Progress is saved in this browser.
                    Countdown timers continue while you are away.
                </p>

                <div class="pq-actions">
                    ${button("← Back", "library")}
                    ${button(
                        "Start New Attempt →",
                        "start",
                        "pq-primary"
                    )}
                </div>
            </section>
        `;
    }

    /* ======================================================
       QUESTION OPTIONS
       ====================================================== */

    

    function questionChoices(question, answer, locked) {

        /* ==============================================
           IDENTIFICATION — unchanged
           ============================================== */

        if (question.type === "identification") {
            return `
                <label class="pq-identification">
                    Your answer
                    <input type="text"
                        data-pq-identification
                        value="${escapeHTML(answer ?? "")}"
                        autocomplete="off"
                        placeholder="Enter your answer..."
                        ${locked ? "disabled" : ""}>
                </label>
            `;
        }

        /* ==============================================
           DROPDOWN MULTIPLE CHOICE
           ============================================== */

        if (
            question.type === "multiple_choice" &&
            question.display === "dropdown"
        ) {
            return `
                <div class="pq-dropdown-answer">
                    <label
                        class="pq-dropdown-label"
                        for="pq-dropdown-choice">
                        Select your answer
                    </label>

                    <select
                        id="pq-dropdown-choice"
                        class="pq-dropdown-select"
                        data-pq-dropdown
                        ${locked ? "disabled" : ""}>

                        <option value=""
                            ${answer === null ||
                              answer === undefined
                                ? "selected"
                                : ""}>
                            — Choose an answer —
                        </option>

                        ${question.options.map((option, index) => `
                            <option
                                value="${index}"
                                ${answer === index
                                    ? "selected"
                                    : ""}>
                                ${escapeHTML(option)}
                            </option>
                        `).join("")}

                    </select>

                    <p class="pq-hint">
                        Choose one answer from the list.
                        Your selection is saved automatically.
                    </p>
                </div>
            `;
        }

        /* ==============================================
           REGULAR CHOICE CARDS
           MULTIPLE SELECT / TRUE-FALSE / MCQ
           ============================================== */

        const multiple =
            question.type === "multiple_select";

        const options =
            question.type === "true_false"
                ? ["True", "False"]
                : question.options;

        const selected = multiple && Array.isArray(answer)
            ? answer
            : [];

        return `
            ${multiple ? `
                <p class="pq-hint">
                    Select all correct answers.
                    Multiple selections are allowed.
                </p>
            ` : ""}

            <div class="pq-options">
                ${options.map((option, index) => {

                    const value =
                        question.type === "true_false"
                            ? index === 0
                            : index;

                    const checked = multiple
                        ? selected.includes(index)
                        : answer === value;

                    const letter =
                        String.fromCharCode(65 + index);

                    const optionImage =
                        question.optionImages?.[index];

                    const hasImage =
                        safeImagePath(optionImage);

                    return `
                        <div class="pq-option-with-image">
                            <label class="pq-option ${checked ? "selected" : ""}">
                                <input
                                    type="${multiple ? "checkbox" : "radio"}"
                                    name="pq-answer"
                                    ${multiple
                                        ? "data-pq-multi"
                                        : "data-pq-choice"}
                                    value="${index}"
                                    ${checked ? "checked" : ""}
                                    ${locked ? "disabled" : ""}>

                                <span class="pq-option-letter">
                                    ${letter}
                                </span>

                                <span class="pq-option-content">
                                    <span class="pq-option-text">
                                        ${escapeHTML(option)}
                                    </span>

                                    ${hasImage ? `
                                        <img
                                            class="pq-option-image"
                                            src="${escapeHTML(optionImage)}"
                                            alt="Option ${letter} diagram"
                                            loading="lazy">
                                    ` : ""}
                                </span>
                            </label>

                            ${hasImage ? `
                                <button
                                    type="button"
                                    class="pq-option-zoom"
                                    data-pq-action="enlarge-image"
                                    data-pq-image-src="${escapeHTML(optionImage)}"
                                    data-pq-image-alt="${escapeHTML(
                                        `Option ${letter} for ${question.id}`
                                    )}">
                                    ⤢ Enlarge image
                                </button>
                            ` : ""}
                        </div>
                    `;
                }).join("")}
            </div>
        `;
    }



    function feedback(question, attempt) {
        if (!isChecked(attempt, question.id)) {
            return "";
        }

        // Read-only scoring. Never write storage
        // while rendering feedback.
        const correct = Sessions.answerIsCorrect(
            question,
            attempt.answers[question.id]
        );

        const alternativeAnswers =
            question.type === "identification" &&
            question.acceptedAnswers?.length
                ? `
                    <p>
                        Also accepted:
                        ${escapeHTML(question.acceptedAnswers.join(", "))}
                    </p>
                `
                : "";

        return `
            <div class="pq-feedback" role="status">
                <strong>
                    ${correct ? "✓ Correct!" : "✕ Incorrect"}
                </strong>

                <p>
                    Correct answer:
                    <b>${escapeHTML(getCorrectAnswerText(question))}</b>
                </p>

                ${alternativeAnswers}

                <p>${escapeHTML(question.explanation)}</p>

                ${question.reference ? `
                    <small>
                        Reference: ${escapeHTML(question.reference)}
                    </small>
                ` : ""}
            </div>
        `;
    }

    /* ======================================================
       QUIZ PLAYER
       ====================================================== */

    function player() {
        const attempt = activeAttempt();

        if (!attempt) {
            state.view = "library";
            return library();
        }

        if (attempt.status !== "in_progress") {
            state.view = "results";
            return results();
        }

        const quiz = attemptQuiz(attempt);

        if (!quiz) return emptyQuiz();

        const index = attempt.currentQuestion;
        const questionId = attempt.questionOrder[index];
        const question = questionById(quiz, questionId);

        if (!question) return emptyQuiz();

        const progress = Sessions.progress(attempt.id);
        const flagged =
            attempt.flaggedQuestions.includes(questionId);
        const locked = isChecked(attempt, questionId);

        return `
            <div class="pq-player">
                <div class="pq-player-main">
                    <div class="pq-breadcrumb">
                        ${escapeHTML(quiz.subject)}
                        / Module ${quiz.module}
                        / ${escapeHTML(quiz.title)}
                    </div>

                    <section class="pq-panel pq-player-title">
                        <span class="pq-eyebrow">
                            BUILT-IN PRACTICE TEST
                        </span>
                        <h1>${escapeHTML(quiz.title)} ✦</h1>
                        <p>${quizMeta(quiz)}</p>
                    </section>

                    <section class="pq-panel pq-progress-bar">
                        <span>
                            Question ${index + 1} of ${progress.total}
                        </span>
                        <span>${progress.percentage}% answered</span>
                        <div class="pq-progress-track">
                            <div style="width:${progress.percentage}%"></div>
                        </div>
                    </section>

                    <section class="pq-panel pq-question-panel">
                        <div class="pq-question-tools">
                            <span class="pq-pill">
                                Question ${index + 1}
                            </span>

                            <div>
                                <button type="button"
                                    data-pq-action="flag"
                                    class="pq-text-button">
                                    ${flagged ? "⚑ Unflag" : "⚐ Flag"}
                                </button>

                                ${!locked ? `
                                    <button type="button"
                                        data-pq-action="clear-answer"
                                        class="pq-text-button">
                                        Clear Answer
                                    </button>
                                ` : ""}
                            </div>
                        </div>

                        <h2>${escapeHTML(question.question)}</h2>

                        ${questionImage(question)}

                        ${questionChoices(
                            question,
                            attempt.answers[questionId],
                            locked
                        )}

                        ${feedback(question, attempt)}

                        ${attempt.settings.mode === "practice" &&
                          !locked ? `
                            <div class="pq-check-answer">
                                ${button(
                                    "Check Answer",
                                    "check",
                                    "pq-primary"
                                )}
                            </div>
                        ` : ""}

                        <div class="pq-question-footer">
                            <button type="button"
                                class="pq-button"
                                data-pq-action="previous"
                                ${index === 0 ? "disabled" : ""}>
                                ← Previous
                            </button>

                            <button type="button"
                                class="pq-button pq-primary"
                                data-pq-action="next"
                                ${index === progress.total - 1
                                    ? "disabled"
                                    : ""}>
                                Next Question →
                            </button>
                        </div>
                    </section>

                    <div class="pq-bottom-actions">
                        ${button("← Exit & Save", "exit")}
                        ${button("Submit Quiz", "submit", "pq-primary")}
                    </div>
                </div>

                <aside class="pq-player-side">
                    <section class="pq-panel">
                        <h2>Quiz Overview</h2>

                        <div class="pq-details">
                            <span>Mode</span>
                            <strong>${escapeHTML(attempt.settings.mode)}</strong>

                            <span>Answered</span>
                            <strong>
                                ${progress.answered} / ${progress.total}
                            </strong>

                            <span>Flagged</span>
                            <strong>${progress.flagged}</strong>

                            <span>Time Remaining</span>
                            <strong data-pq-clock>
                                ${attempt.settings.timerType === "countdown"
                                    ? formatTime(progress.remainingMs ?? 0)
                                    : "No time limit"}
                            </strong>
                        </div>

                        <h3>Question Navigator</h3>

                        <div class="pq-navigator">
                            ${attempt.questionOrder.map((id, i) => {
                                const hasAnswer = answered(
                                    attempt.answers[id]
                                );

                                const isFlagged =
                                    attempt.flaggedQuestions.includes(id);

                                return `
                                    <button type="button"
                                        data-pq-action="jump"
                                        data-pq-index="${i}"
                                        class="pq-nav-number
                                            ${hasAnswer ? "answered" : ""}
                                            ${i === index ? "current" : ""}
                                            ${isFlagged ? "flagged" : ""}"
                                        title="Question ${i + 1}${isFlagged
                                            ? " · Flagged"
                                            : ""}">
                                        ${i + 1}
                                    </button>
                                `;
                            }).join("")}
                        </div>
                    </section>

                    <section class="pq-panel">
                        <h2>Quiz Scratchpad ✎</h2>
                        <p class="pq-hint">
                            Private notes for this attempt.
                            Saved automatically.
                        </p>

                        <textarea
                            data-pq-scratchpad
                            rows="8"
                            placeholder="Formulas, calculations, keywords...">${escapeHTML(attempt.scratchpad)}</textarea>

                        <small data-pq-save-status>
                            Saved locally
                        </small>
                    </section>
                </aside>
            </div>
        `;
    }

    /* ======================================================
       RESULTS
       ====================================================== */

    function results() {
        const attempt = activeAttempt();

        if (!attempt) return library();

        const quiz = attemptQuiz(attempt);
        const result = attempt.result;

        return `
            ${heading(
                "Quiz Results",
                `${attempt.subject} · ${attempt.title}`
            )}

            <section class="pq-panel pq-results-summary">
                <span class="pq-eyebrow">
                    ${attempt.status === "time_expired"
                        ? "TIME EXPIRED"
                        : attempt.status === "needs_review"
                            ? "REVIEW REQUIRED"
                            : "ATTEMPT COMPLETED"}
                </span>

                <div class="pq-result-score">
                    ${result
                        ? `${result.correct} / ${result.total}`
                        : "—"}
                </div>

                <p>
                    ${result
                        ? `${result.percentage}% correct`
                        : "This attempt could not be graded reliably."}
                </p>

                <small>
                    Finished: ${dateText(attempt.finishedAt)}
                </small>

                <div class="pq-actions">
                    ${button("Attempt History", "history")}

                    ${Registry.get(attempt.quizId)
                        ? button(
                            "Retake Quiz",
                            "retake",
                            "pq-primary"
                        )
                        : ""}
                </div>
            </section>

            ${quiz && result ? `
                <section class="pq-panel">
                    <h2>Answer Review</h2>

                    ${attempt.questionOrder.map((id, index) => {
                        const question = questionById(quiz, id);

                        if (!question) return "";

                        const row = result.results.find(
                            item => item.questionId === id
                        );

                        return `
                            <article class="pq-review-item">
                                <strong>
                                    ${index + 1}.
                                    ${escapeHTML(question.question)}
                                </strong>

                                ${questionImage(question)}
                                ${reviewOptionImages(question)}

                                <p>
                                    Your answer:
                                    ${escapeHTML(
                                        displayAnswer(
                                            question,
                                            attempt.answers[id]
                                        )
                                    )}
                                </p>

                                <p>
                                    Correct answer:
                                    <b>${escapeHTML(
                                        getCorrectAnswerText(question)
                                    )}</b>
                                </p>

                                ${question.type === "identification" &&
                                  question.acceptedAnswers?.length ? `
                                    <p>
                                        Also accepted:
                                        ${escapeHTML(
                                            question.acceptedAnswers.join(", ")
                                        )}
                                    </p>
                                ` : ""}

                                <span class="pq-result-label">
                                    ${row?.correct
                                        ? "✓ Correct"
                                        : "✕ Incorrect"}
                                </span>

                                <div class="pq-review-explanation">
                                    ${escapeHTML(question.explanation)}
                                </div>

                                ${question.reference ? `
                                    <small>
                                        Source:
                                        ${escapeHTML(question.reference)}
                                    </small>
                                ` : ""}
                            </article>
                        `;
                    }).join("")}
                </section>
            ` : ""}
        `;
    }

    /* ======================================================
       ATTEMPT HISTORY
       ====================================================== */

    function history(inProgressOnly = false) {
        const attempts = Sessions.list().filter(
            attempt =>
                !inProgressOnly ||
                attempt.status === "in_progress"
        );

        return `
            ${heading(
                inProgressOnly
                    ? "In Progress"
                    : "Attempt History",
                "Review, resume, or manage saved attempts."
            )}

            <div class="pq-toolbar">
                ${button("All Quizzes", "library")}
                ${button("In Progress", "in-progress")}
                ${button("Attempt History", "history")}
            </div>

            <section class="pq-panel">
                <h2>
                    ${inProgressOnly
                        ? "Unfinished Attempts"
                        : "Saved Quiz Attempts"}
                </h2>

                ${attempts.length ? attempts.map(attempt => `
                    <article class="pq-history-card">
                        <div>
                            <strong>${escapeHTML(attempt.title)}</strong>

                            <small>
                                ${escapeHTML(attempt.subject)}
                                · Module ${attempt.module}
                                · ${dateText(attempt.startedAt)}
                            </small>

                            <span class="pq-kind">
                                ${escapeHTML(
                                    attempt.status.replace(/_/g, " ")
                                )}
                            </span>

                            ${attempt.result ? `
                                <span>
                                    Score:
                                    ${attempt.result.correct}
                                    / ${attempt.result.total}
                                </span>
                            ` : ""}
                        </div>

                        <div class="pq-actions">
                            <button type="button"
                                class="pq-button pq-primary"
                                data-pq-action="open-attempt"
                                data-pq-id="${escapeHTML(attempt.id)}">
                                ${attempt.status === "in_progress"
                                    ? "Resume"
                                    : "Review"}
                            </button>

                            ${attempt.status === "in_progress" ? `
                                <button type="button"
                                    class="pq-button"
                                    data-pq-action="reset"
                                    data-pq-id="${escapeHTML(attempt.id)}">
                                    Reset
                                </button>
                            ` : ""}

                            <button type="button"
                                class="pq-button pq-danger"
                                data-pq-action="delete"
                                data-pq-id="${escapeHTML(attempt.id)}">
                                Delete
                            </button>
                        </div>
                    </article>
                `).join("") : `
                    <div class="pq-empty">
                        No attempts found.
                    </div>
                `}
            </section>
        `;
    }

    function emptyQuiz() {
        return `
            ${heading("Quiz Unavailable")}
            <section class="pq-panel pq-empty">
                <p>
                    The quiz or its original questions
                    are unavailable.
                </p>
                ${button("Back to Quiz Studio", "library")}
            </section>
        `;
    }

    /* ======================================================
       RENDERING
       ====================================================== */

    function render() {
        if (!root || !root.isConnected) return;

        let html;

        switch (state.view) {
            case "setup":
                html = setup();
                break;
            case "player":
                html = player();
                break;
            case "results":
                html = results();
                break;
            case "history":
                html = history(false);
                break;
            case "in-progress":
                html = history(true);
                break;
            default:
                html = library();
        }

        root.innerHTML = `
            <div class="pq-page">${html}</div>
        `;

        updateClockDisplay();
    }

    function updateClockDisplay() {
        if (
            state.view !== "player" ||
            !state.attemptId ||
            !root?.isConnected
        ) {
            return;
        }

        const attempt = activeAttempt();

        if (!attempt) return;

        if (attempt.status !== "in_progress") {
            state.view = "results";
            render();
            return;
        }

        const clock = $("[data-pq-clock]");

        if (!clock) return;

        clock.textContent =
            attempt.settings.timerType === "countdown"
                ? formatTime(
                    Sessions.getRemainingMs(attempt) ?? 0
                )
                : "No time limit";
    }

    /* ======================================================
       NAVIGATION
       ====================================================== */

    function openLibrary() {
        state.view = "library";
        state.quizId = null;
        state.attemptId = null;
        render();
    }

    function openQuiz(quizId, returnTo = null) {
        if (!Registry.get(quizId)) {
            console.warn("Quiz not found:", quizId);
            return false;
        }

        state.quizId = quizId;
        state.attemptId = null;
        state.returnTo = returnTo;
        state.view = "setup";

        render();
        return true;
    }

    function openAttempt(attemptId) {
        const attempt = Sessions.get(attemptId);

        if (!attempt) return false;

        state.attemptId = attemptId;
        state.quizId = attempt.quizId;

        state.view =
            attempt.status === "in_progress"
                ? "player"
                : "results";

        render();
        return true;
    }

    /* ======================================================
       ACTIONS
       ====================================================== */

    function handleAction(action, element) {
        try {
            
            if (action === "enlarge-image") {
                openImageViewer(
                    element.dataset.pqImageSrc,
                    element.dataset.pqImageAlt || "Quiz image"
                );
                return;
            }


            if (action === "library" || action === "exit") {
                openLibrary();
                return;
            }

            if (
                action === "history" ||
                action === "in-progress"
            ) {
                state.view = action;
                render();
                return;
            }

            if (action === "open-quiz") {
                openQuiz(element.dataset.pqId);
                return;
            }

            if (
                action === "resume" ||
                action === "open-attempt"
            ) {
                openAttempt(element.dataset.pqId);
                return;
            }

            if (action === "start") {
                const input = $("[data-pq-minutes]");

                const minutes =
                    state.setupTimer === "countdown"
                        ? Number(input?.value)
                        : state.setupMinutes;

                const attempt = Sessions.start(
                    state.quizId,
                    {
                        mode: state.setupMode,
                        timerType: state.setupTimer,
                        timerMinutes: minutes,
                        shuffleQuestions: state.setupShuffle
                    }
                );

                openAttempt(attempt.id);
                return;
            }

            if (action === "retake") {
                const previous = activeAttempt();

                if (!previous) return;

                const next = Sessions.retake(previous.id);
                openAttempt(next.id);
                return;
            }

            if (action === "reset") {
                const id = element.dataset.pqId;

                if (!confirm(
                    "Reset this attempt? Answers, flags, " +
                    "notes and timer progress will be erased."
                )) return;

                Sessions.reset(id);
                openAttempt(id);
                return;
            }

            if (action === "delete") {
                const id = element.dataset.pqId;

                if (!confirm(
                    "Permanently delete this quiz attempt?"
                )) return;

                Sessions.remove(id);
                render();
                return;
            }

            const attempt = activeAttempt();

            if (
                !attempt ||
                attempt.status !== "in_progress"
            ) {
                return;
            }

            if (
                action === "next" ||
                action === "previous" ||
                action === "jump"
            ) {
                const index = action === "jump"
                    ? Number(element.dataset.pqIndex)
                    : attempt.currentQuestion +
                        (action === "next" ? 1 : -1);

                Sessions.setCurrentQuestion(
                    attempt.id,
                    index
                );

                render();
                return;
            }

            const questionId = attempt.questionOrder[
                attempt.currentQuestion
            ];

            if (action === "flag") {
                Sessions.setFlag(
                    attempt.id,
                    questionId,
                    !attempt.flaggedQuestions.includes(questionId)
                );

                render();
                return;
            }

            if (action === "clear-answer") {
                Sessions.saveAnswer(
                    attempt.id,
                    questionId,
                    null
                );

                render();
                return;
            }

            if (action === "check") {
                Sessions.checkAnswer(
                    attempt.id,
                    questionId
                );

                render();
                return;
            }

            if (action === "submit") {
                const progress = Sessions.progress(
                    attempt.id
                );

                const message =
                    "Submit this quiz?\n\n" +
                    `${progress.answered} answered\n` +
                    `${progress.unanswered} unanswered\n\n` +
                    "You cannot edit this attempt afterward.";

                if (!confirm(message)) return;

                Sessions.submit(attempt.id);

                state.view = "results";
                render();
            }

        } catch (error) {
            console.error("Pandora Quiz UI:", error);
            alert(error.message || "Unable to complete action.");
        }
    }

    /* ======================================================
       INPUT EVENTS
       ====================================================== */


    function handleChange(event) {
        const target = event.target;

        if (!(target instanceof HTMLElement)) {
            return;
        }

        /* ==============================================
           QUIZ SETTINGS
           ============================================== */

        if (target.matches("[name='pq-mode']")) {
            state.setupMode = target.value;
            return;
        }

        if (target.matches("[name='pq-timer']")) {
            state.setupTimer = target.value;

            const field = $(".pq-time-input");

            if (field) {
                field.hidden = target.value === "none";
            }

            return;
        }

        if (target.matches("[data-pq-shuffle]")) {
            state.setupShuffle = target.checked;
            return;
        }

        /* ==============================================
           LIBRARY FILTERS
           ============================================== */

        if (target.matches("[data-pq-subject]")) {
            state.subject = target.value;
            render();
            return;
        }

        if (target.matches("[data-pq-kind]")) {
            state.kind = target.value;
            render();
            return;
        }

        if (target.matches("[data-pq-sort]")) {
            state.sort = target.value;
            render();
            return;
        }

        /* ==============================================
           ANSWER INPUT TYPES
           ============================================== */

        const dropdown = target.matches(
            "[data-pq-dropdown]"
        );

        const single = target.matches(
            "[data-pq-choice]"
        );

        const multiple = target.matches(
            "[data-pq-multi]"
        );

        if (!dropdown && !single && !multiple) {
            return;
        }

        try {
            const attempt = activeAttempt();

            if (
                !attempt ||
                attempt.status !== "in_progress"
            ) {
                return;
            }

            const quiz = attemptQuiz(attempt);

            const questionId = attempt.questionOrder[
                attempt.currentQuestion
            ];

            const question = questionById(
                quiz,
                questionId
            );

            if (!question) {
                return;
            }

            if (isChecked(attempt, questionId)) {
                render();
                return;
            }

            let answer;

            /* ------------------------------------------
               DROPDOWN ANSWER
               ------------------------------------------ */

            if (dropdown) {
                if (
                    question.type !== "multiple_choice" ||
                    question.display !== "dropdown"
                ) {
                    return;
                }

                if (target.value === "") {
                    answer = null;
                } else {
                    const index = Number(target.value);

                    if (
                        !Number.isInteger(index) ||
                        index < 0 ||
                        index >= question.options.length
                    ) {
                        return;
                    }

                    answer = index;
                }

            /* ------------------------------------------
               MULTIPLE SELECT
               ------------------------------------------ */

            } else if (multiple) {
                const previous = Array.isArray(
                    attempt.answers[questionId]
                )
                    ? [...attempt.answers[questionId]]
                    : [];

                const index = Number(target.value);

                if (target.checked) {
                    if (!previous.includes(index)) {
                        previous.push(index);
                    }
                } else {
                    const position = previous.indexOf(index);

                    if (position !== -1) {
                        previous.splice(position, 1);
                    }
                }

                answer = previous.sort(
                    (a, b) => a - b
                );

            /* ------------------------------------------
               REGULAR MULTIPLE CHOICE / TRUE-FALSE
               ------------------------------------------ */

            } else {
                const index = Number(target.value);

                answer = question.type === "true_false"
                    ? index === 0
                    : index;
            }

            /* ==============================================
               SAVE TO EXISTING SESSION MANAGER
               ============================================== */

            Sessions.saveAnswer(
                attempt.id,
                questionId,
                answer
            );

            render();

        } catch (error) {
            console.error(
                "Quiz answer save failed:",
                error
            );

            alert(
                error.message ||
                "Unable to save answer."
            );

            render();
        }
    }

    function handleInput(event) {
        const target = event.target;

        if (!(target instanceof HTMLElement)) return;

        if (target.matches("[data-pq-search]")) {
            const cursor = target.selectionStart;
            state.search = target.value;

            render();

            const replacement = $("[data-pq-search]");

            if (replacement) {
                replacement.focus();

                if (cursor !== null) {
                    replacement.setSelectionRange(
                        cursor,
                        cursor
                    );
                }
            }

            return;
        }

        if (target.matches("[data-pq-minutes]")) {
            state.setupMinutes = Number(target.value);
            return;
        }

        if (
            !target.matches("[data-pq-identification]") &&
            !target.matches("[data-pq-scratchpad]")
        ) {
            return;
        }

        try {
            const attempt = activeAttempt();

            if (
                !attempt ||
                attempt.status !== "in_progress"
            ) return;

            const questionId = attempt.questionOrder[
                attempt.currentQuestion
            ];

            if (target.matches("[data-pq-identification]")) {
                Sessions.saveAnswer(
                    attempt.id,
                    questionId,
                    target.value
                );
            }

            if (target.matches("[data-pq-scratchpad]")) {
                Sessions.saveScratchpad(
                    attempt.id,
                    target.value
                );
            }

            const indicator = $("[data-pq-save-status]");

            if (indicator) {
                indicator.textContent = "Saved locally ✓";
            }

        } catch (error) {
            console.error("Quiz autosave failed:", error);

            const indicator = $("[data-pq-save-status]");

            if (indicator) {
                indicator.textContent = "Save failed";
            }

            // Keep the typed text visible so the user
            // can copy it if browser storage fails.
            alert(
                "Could not save your latest input. " +
                "Check browser storage before leaving this page."
            );
        }
    }

    /* ======================================================
       MOUNT

       Event delegation is attached once to each
       container. No DOM replacement of the old root.

       ====================================================== */

    const mountedContainers = new WeakSet();

    function mount(container) {
        if (!(container instanceof HTMLElement)) {
            throw new Error(
                "Quiz Studio requires a valid container."
            );
        }

        root = container;

        if (!mountedContainers.has(container)) {
            mountedContainers.add(container);

            container.addEventListener("click", event => {
                event.stopPropagation();

                if (!(event.target instanceof Element)) {
                    return;
                }

                const action = event.target.closest(
                    "[data-pq-action]"
                );

                if (!action || !container.contains(action)) {
                    return;
                }

                event.preventDefault();

                handleAction(
                    action.dataset.pqAction,
                    action
                );
            });

            container.addEventListener(
                "change",
                handleChange
            );

            container.addEventListener(
                "input",
                handleInput
            );
        }

        render();

        if (!timerInterval) {
            timerInterval = window.setInterval(() => {
                if (!root?.isConnected) return;
                updateClockDisplay();
            }, 1000);
        }

        return root;
    }

    /* ======================================================
       PUBLIC API
       ====================================================== */

    window.PandoraQuizUI = Object.freeze({
        mount,
        render,
        openLibrary,
        openQuiz,
        openAttempt
    });

    console.info(
        "Pandora Quiz UI v2 ready."
    );
})();
