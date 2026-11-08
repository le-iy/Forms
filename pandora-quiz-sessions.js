
/* ==========================================================
   PANDORA V.3 — QUIZ SESSION MANAGER
   Version 2

   Features:
   - Persistent quiz attempts
   - Question snapshots and version tracking
   - Multiple-choice / multiple-select scoring
   - True/false and identification scoring
   - Case-insensitive identification answers
   - Alternative accepted answers
   - Practice / exam modes
   - Locked answers after practice checking
   - Autosaved answers, flags and scratchpad
   - Refresh and navigation recovery
   - Countdown timers with fixed deadlines
   - Submission, reset, retake and history
   - Compatibility with older saved attempts

   Requires:
   pandora-quiz-registry.js

   ========================================================== */

(() => {
    "use strict";

    if (window.PandoraQuizSessions) return;

    const Registry = window.PandoraQuizzes;

    if (!Registry) {
        console.error(
            "Quiz Sessions requires pandora-quiz-registry.js."
        );
        return;
    }

    const STORAGE_KEY = "pandora_quiz_attempts_v1";
    const CHANGE_EVENT = "pandora:quiz-attempts-changed";
    const MAX_ATTEMPTS = 1000;

    const VALID_MODES = ["practice", "exam"];
    const VALID_TIMERS = ["none", "countdown"];

    /* ======================================================
       01. UTILITIES
       ====================================================== */

    function clone(value) {
        return structuredClone(value);
    }

    function now() {
        return Date.now();
    }

    function makeId() {
        if (
            typeof crypto !== "undefined" &&
            typeof crypto.randomUUID === "function"
        ) {
            return crypto.randomUUID();
        }

        return (
            "attempt-" +
            now() +
            "-" +
            Math.random().toString(36).slice(2, 12)
        );
    }

    function normalizeText(value) {
        return String(value ?? "")
            .trim()
            .replace(/\s+/g, " ")
            .toLocaleLowerCase();
    }

    function shuffle(values) {
        const result = [...values];

        for (let i = result.length - 1; i > 0; i--) {
            const j = Math.floor(
                Math.random() * (i + 1)
            );

            [result[i], result[j]] = [
                result[j], result[i]
            ];
        }

        return result;
    }

    function isAnswered(answer) {
        if (
            answer === undefined ||
            answer === null ||
            answer === ""
        ) {
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

    /* ======================================================
       02. STORAGE

       Existing localStorage key is retained.

       ====================================================== */

    function readAll() {
        const raw = localStorage.getItem(STORAGE_KEY);

        if (raw === null) {
            return [];
        }

        let data;

        try {
            data = JSON.parse(raw);
        } catch (error) {
            throw new Error(
                "Quiz attempt storage could not be read. " +
                "Your existing data has NOT been overwritten."
            );
        }

        if (!Array.isArray(data)) {
            throw new Error(
                "Quiz attempt storage has an invalid format. " +
                "Your existing data has NOT been overwritten."
            );
        }

        return data.filter(item =>
            item &&
            typeof item.id === "string" &&
            typeof item.quizId === "string"
        );
    }

    function saveAll(attempts) {
        try {
            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(attempts)
            );

            document.dispatchEvent(
                new CustomEvent(CHANGE_EVENT, {
                    detail: {
                        count: attempts.length
                    }
                })
            );

            return true;
        } catch (error) {
            console.error(
                "Pandora: unable to save quiz attempts.",
                error
            );

            return false;
        }
    }

    function requireSave(attempts) {
        if (!saveAll(attempts)) {
            throw new Error(
                "Could not save quiz progress. " +
                "Check available browser storage."
            );
        }
    }

    function saveOne(updated) {
        const attempts = readAll();

        const index = attempts.findIndex(
            item => item.id === updated.id
        );

        if (index === -1) {
            throw new Error(
                "This quiz attempt no longer exists."
            );
        }

        attempts[index] = updated;

        requireSave(attempts);

        return clone(updated);
    }

    /* ======================================================
       03. QUIZ SNAPSHOTS

       A new attempt stores its own copy of the quiz.

       Changing a quiz file later will not change
       questions, answers or explanations in that
       existing attempt.

       ====================================================== */

    function getQuizForAttempt(attemptOrId) {
        const attempt =
            typeof attemptOrId === "string"
                ? get(attemptOrId)
                : attemptOrId;

        if (!attempt) {
            return null;
        }

        if (
            attempt.quizSnapshot &&
            Array.isArray(attempt.quizSnapshot.questions)
        ) {
            return clone(attempt.quizSnapshot);
        }

        // Legacy attempts created before snapshots.
        const currentQuiz = Registry.get(attempt.quizId);

        if (!currentQuiz) {
            return null;
        }

        const originalIds = Array.isArray(
            attempt.originalQuestionIds
        )
            ? attempt.originalQuestionIds
            : attempt.questionOrder;

        if (
            !Array.isArray(originalIds) ||
            originalIds.length !==
                currentQuiz.questions.length
        ) {
            return null;
        }

        const currentIds = new Set(
            currentQuiz.questions.map(q => q.id)
        );

        if (
            !originalIds.every(id => currentIds.has(id))
        ) {
            return null;
        }

        // Legacy data has no snapshot, so content
        // changes with unchanged IDs cannot be detected.
        return clone(currentQuiz);
    }

    function getQuestion(attempt, questionId) {
        const quiz = getQuizForAttempt(attempt);

        if (!quiz) {
            return null;
        }

        return quiz.questions.find(
            question => question.id === questionId
        ) || null;
    }

    /* ======================================================
       04. SETTINGS
       ====================================================== */

    function normalizeSettings(settings = {}) {
        const mode = VALID_MODES.includes(settings.mode)
            ? settings.mode
            : "practice";

        const timerType = VALID_TIMERS.includes(
            settings.timerType
        )
            ? settings.timerType
            : "none";

        let timerMinutes = null;

        if (timerType === "countdown") {
            timerMinutes = Number(
                settings.timerMinutes
            );

            if (
                !Number.isInteger(timerMinutes) ||
                timerMinutes < 1 ||
                timerMinutes > 1440
            ) {
                throw new Error(
                    "Countdown must be between " +
                    "1 and 1440 minutes."
                );
            }
        }

        return {
            mode,
            timerType,
            timerMinutes,
            shuffleQuestions: Boolean(
                settings.shuffleQuestions
            )
        };
    }

    /* ======================================================
       05. ANSWER VALIDATION
       ====================================================== */

    function validateAnswer(question, answer) {
        if (
            answer === null ||
            answer === undefined ||
            answer === ""
        ) {
            return null;
        }

        if (question.type === "multiple_choice") {
            if (
                !Number.isInteger(answer) ||
                answer < 0 ||
                answer >= question.options.length
            ) {
                throw new Error(
                    "Invalid multiple-choice answer."
                );
            }

            return answer;
        }

        if (question.type === "multiple_select") {
            if (!Array.isArray(answer)) {
                throw new Error(
                    "Multiple-select answers must be an array."
                );
            }

            if (
                answer.some(index =>
                    !Number.isInteger(index) ||
                    index < 0 ||
                    index >= question.options.length
                )
            ) {
                throw new Error(
                    "Multiple-select contains an invalid option."
                );
            }

            const unique = [...new Set(answer)];

            if (unique.length !== answer.length) {
                throw new Error(
                    "Multiple-select contains duplicate options."
                );
            }

            return unique.sort((a, b) => a - b);
        }

        if (question.type === "true_false") {
            if (typeof answer !== "boolean") {
                throw new Error(
                    "True/false answer must be a boolean."
                );
            }

            return answer;
        }

        if (question.type === "identification") {
            if (typeof answer !== "string") {
                throw new Error(
                    "Identification answer must be text."
                );
            }

            return answer.slice(0, 2000);
        }

        throw new Error(
            "Unsupported question type."
        );
    }

    /* ======================================================
       06. ANSWER SCORING
       ====================================================== */

    function answerIsCorrect(question, answer) {
        if (!isAnswered(answer)) {
            return false;
        }

        if (question.type === "multiple_choice") {
            return (
                Number.isInteger(answer) &&
                answer === question.correctAnswer
            );
        }

        if (question.type === "multiple_select") {
            if (!Array.isArray(answer)) {
                return false;
            }

            const selected = [...new Set(answer)]
                .sort((a, b) => a - b);

            const correct = [
                ...question.correctAnswer
            ].sort((a, b) => a - b);

            return (
                selected.length === answer.length &&
                selected.length === correct.length &&
                selected.every(
                    (value, index) =>
                        value === correct[index]
                )
            );
        }

        if (question.type === "true_false") {
            return (
                typeof answer === "boolean" &&
                answer === question.correctAnswer
            );
        }

        if (question.type === "identification") {
            if (typeof answer !== "string") {
                return false;
            }

            const accepted = [
                question.correctAnswer,
                ...(question.acceptedAnswers || [])
            ];

            return accepted.some(
                valid =>
                    normalizeText(answer) ===
                    normalizeText(valid)
            );
        }

        return false;
    }

    function grade(attempt) {
        const quiz = getQuizForAttempt(attempt);

        if (!quiz) {
            return null;
        }

        const results = quiz.questions.map(question => {
            const answer = attempt.answers[
                question.id
            ];

            return {
                questionId: question.id,
                correct: answerIsCorrect(
                    question,
                    answer
                ),
                answered: isAnswered(answer)
            };
        });

        const correct = results.filter(
            item => item.correct
        ).length;

        const total = results.length;

        return {
            correct,
            total,
            percentage: total
                ? Math.round(
                    (correct / total) * 10000
                ) / 100
                : 0,
            results
        };
    }

    /* ======================================================
       07. FINISH / TIME EXPIRY
       ====================================================== */

    function getRemainingMs(attempt) {
        if (
            !attempt ||
            attempt.status !== "in_progress" ||
            attempt.settings?.timerType !== "countdown" ||
            !Number.isFinite(attempt.deadlineAt)
        ) {
            return null;
        }

        return Math.max(
            0,
            attempt.deadlineAt - now()
        );
    }

    function finishRaw(attempt, reason = "submitted") {
        if (attempt.status !== "in_progress") {
            return attempt;
        }

        const result = grade(attempt);
        const finishedAt = now();

        attempt.result = result;

        if (!result) {
            attempt.status = "needs_review";
            attempt.finishReason = "quiz_unavailable";
        } else {
            attempt.status =
                reason === "time_expired"
                    ? "time_expired"
                    : "completed";

            attempt.finishReason = reason;
        }

        attempt.finishedAt = finishedAt;
        attempt.updatedAt = finishedAt;

        return attempt;
    }

    function refreshTimeout(attemptId) {
        const attempts = readAll();

        const index = attempts.findIndex(
            item => item.id === attemptId
        );

        if (index === -1) {
            return null;
        }

        const attempt = attempts[index];

        if (
            attempt.status === "in_progress" &&
            attempt.settings?.timerType === "countdown" &&
            Number.isFinite(attempt.deadlineAt) &&
            now() >= attempt.deadlineAt
        ) {
            attempts[index] = finishRaw(
                attempt,
                "time_expired"
            );

            requireSave(attempts);
        }

        return clone(attempts[index]);
    }

    /* ======================================================
       08. START ATTEMPT
       ====================================================== */

    function start(quizId, settings = {}) {
        const quiz = Registry.get(quizId);

        if (!quiz) {
            throw new Error(
                `Quiz "${quizId}" is not registered.`
            );
        }

        const attempts = readAll();

        if (attempts.length >= MAX_ATTEMPTS) {
            throw new Error(
                "Attempt history is full. " +
                "Delete older attempts before continuing."
            );
        }

        const normalized = normalizeSettings(settings);

        const startedAt = now();

        const originalQuestionIds = quiz.questions.map(
            question => question.id
        );

        const questionOrder =
            normalized.shuffleQuestions
                ? shuffle(originalQuestionIds)
                : [...originalQuestionIds];

        const attempt = {
            id: makeId(),

            quizId: quiz.id,
            quizVersion: quiz.version || 1,
            quizSnapshot: clone(quiz),

            subject: quiz.subject,
            module: quiz.module,
            title: quiz.title,
            kind: quiz.kind,

            status: "in_progress",
            settings: normalized,

            startedAt,
            updatedAt: startedAt,
            finishedAt: null,
            finishReason: null,

            deadlineAt:
                normalized.timerType === "countdown"
                    ? startedAt +
                        normalized.timerMinutes * 60000
                    : null,

            originalQuestionIds,
            questionOrder,
            currentQuestion: 0,

            answers: {},
            checkedQuestions: [],
            flaggedQuestions: [],
            scratchpad: "",

            result: null
        };

        attempts.push(attempt);

        requireSave(attempts);

        return clone(attempt);
    }

    /* ======================================================
       09. GET / LIST / RESUME
       ====================================================== */

    function get(attemptId) {
        return refreshTimeout(attemptId);
    }

    function list(filters = {}) {
        const quizId = filters.quizId || null;

        const subject = filters.subject
            ? String(filters.subject)
                .trim()
                .toUpperCase()
            : null;

        const status = filters.status || null;

        return readAll()
            .filter(attempt => {
                if (
                    quizId &&
                    attempt.quizId !== quizId
                ) {
                    return false;
                }

                if (
                    subject &&
                    attempt.subject !== subject
                ) {
                    return false;
                }

                return true;
            })
            .map(attempt =>
                refreshTimeout(attempt.id)
            )
            .filter(Boolean)
            .filter(attempt =>
                !status ||
                attempt.status === status
            )
            .sort(
                (a, b) =>
                    b.startedAt - a.startedAt
            );
    }

    function findInProgress(quizId) {
        return list({
            quizId,
            status: "in_progress"
        })[0] || null;
    }

    function requireEditable(attemptId) {
        const attempt = get(attemptId);

        if (!attempt) {
            throw new Error(
                "Quiz attempt not found."
            );
        }

        if (attempt.status !== "in_progress") {
            throw new Error(
                "This attempt is no longer editable."
            );
        }

        const quiz = getQuizForAttempt(attempt);

        if (!quiz) {
            throw new Error(
                "The original quiz is unavailable. " +
                "This attempt cannot be edited safely."
            );
        }

        return {
            attempt,
            quiz
        };
    }

    /* ======================================================
       10. SAVE ANSWER
       ====================================================== */

    function saveAnswer(attemptId, questionId, answer) {
        const { attempt, quiz } =
            requireEditable(attemptId);

        const question = quiz.questions.find(
            item => item.id === questionId
        );

        if (!question) {
            throw new Error(
                "Question does not exist."
            );
        }

        if (
            attempt.settings.mode === "practice" &&
            attempt.checkedQuestions.includes(questionId)
        ) {
            throw new Error(
                "This answer has already been checked. " +
                "Start a new attempt to try again."
            );
        }

        const validated = validateAnswer(
            question,
            answer
        );

        if (
            validated === null ||
            (
                Array.isArray(validated) &&
                validated.length === 0
            )
        ) {
            delete attempt.answers[questionId];
        } else {
            attempt.answers[questionId] = validated;
        }

        attempt.updatedAt = now();

        return saveOne(attempt);
    }

    /* ======================================================
       11. PRACTICE MODE — CHECK ANSWER
       ====================================================== */

    function checkAnswer(attemptId, questionId) {
        const { attempt, quiz } =
            requireEditable(attemptId);

        if (attempt.settings.mode !== "practice") {
            throw new Error(
                "Answer checking is available " +
                "only in Practice Mode."
            );
        }

        const question = quiz.questions.find(
            item => item.id === questionId
        );

        if (!question) {
            throw new Error(
                "Question not found."
            );
        }

        const answer = attempt.answers[questionId];

        if (!isAnswered(answer)) {
            throw new Error(
                "Answer the question before checking."
            );
        }

        if (
            !attempt.checkedQuestions.includes(
                questionId
            )
        ) {
            attempt.checkedQuestions.push(questionId);
            attempt.updatedAt = now();

            saveOne(attempt);
        }

        return {
            questionId,
            correct: answerIsCorrect(
                question,
                answer
            ),
            correctAnswer: clone(
                question.correctAnswer
            ),
            explanation: question.explanation || "",
            reference: question.reference || ""
        };
    }

    /* ======================================================
       12. QUESTION NAVIGATION
       ====================================================== */

    function setCurrentQuestion(attemptId, index) {
        const { attempt } =
            requireEditable(attemptId);

        if (
            !Number.isInteger(index) ||
            index < 0 ||
            index >= attempt.questionOrder.length
        ) {
            throw new Error(
                "Invalid question position."
            );
        }

        attempt.currentQuestion = index;
        attempt.updatedAt = now();

        return saveOne(attempt);
    }

    /* ======================================================
       13. QUESTION FLAGS
       ====================================================== */

    function setFlag(
        attemptId,
        questionId,
        flagged = true
    ) {
        const { attempt } =
            requireEditable(attemptId);

        if (
            !attempt.questionOrder.includes(questionId)
        ) {
            throw new Error(
                "Invalid question ID."
            );
        }

        const flags = new Set(
            attempt.flaggedQuestions
        );

        if (flagged) {
            flags.add(questionId);
        } else {
            flags.delete(questionId);
        }

        attempt.flaggedQuestions = [...flags];
        attempt.updatedAt = now();

        return saveOne(attempt);
    }

    /* ======================================================
       14. SCRATCHPAD
       ====================================================== */

    function saveScratchpad(attemptId, text) {
        const { attempt } =
            requireEditable(attemptId);

        attempt.scratchpad = String(
            text ?? ""
        ).slice(0, 20000);

        attempt.updatedAt = now();

        return saveOne(attempt);
    }

    /* ======================================================
       15. SUBMIT
       ====================================================== */

    function submit(attemptId) {
        const attempt = get(attemptId);

        if (!attempt) {
            throw new Error(
                "Attempt not found."
            );
        }

        if (attempt.status !== "in_progress") {
            return attempt;
        }

        return saveOne(
            finishRaw(attempt, "submitted")
        );
    }

    /* ======================================================
       16. RESET UNFINISHED ATTEMPT
       ====================================================== */

    function reset(attemptId) {
        const { attempt, quiz } =
            requireEditable(attemptId);

        const resetAt = now();

        attempt.startedAt = resetAt;
        attempt.updatedAt = resetAt;

        attempt.finishedAt = null;
        attempt.finishReason = null;

        attempt.deadlineAt =
            attempt.settings.timerType === "countdown"
                ? resetAt +
                    attempt.settings.timerMinutes * 60000
                : null;

        const ids = quiz.questions.map(
            question => question.id
        );

        attempt.questionOrder =
            attempt.settings.shuffleQuestions
                ? shuffle(ids)
                : [...ids];

        attempt.originalQuestionIds = [...ids];

        attempt.currentQuestion = 0;
        attempt.answers = {};
        attempt.checkedQuestions = [];
        attempt.flaggedQuestions = [];
        attempt.scratchpad = "";
        attempt.result = null;

        return saveOne(attempt);
    }

    /* ======================================================
       17. RETAKE — NEW ATTEMPT
       ====================================================== */

    function retake(
        attemptId,
        settingsOverride = null
    ) {
        const previous = get(attemptId);

        if (!previous) {
            throw new Error(
                "Attempt not found."
            );
        }

        const settings = settingsOverride
            ? {
                ...previous.settings,
                ...settingsOverride
            }
            : previous.settings;

        // Retakes use the current registered quiz.
        // Previous attempts retain their own snapshots.
        return start(
            previous.quizId,
            settings
        );
    }

    /* ======================================================
       18. DELETE ONE ATTEMPT
       ====================================================== */

    function remove(attemptId) {
        const attempts = readAll();

        if (
            !attempts.some(
                attempt => attempt.id === attemptId
            )
        ) {
            return false;
        }

        requireSave(
            attempts.filter(
                attempt => attempt.id !== attemptId
            )
        );

        return true;
    }

    /* ======================================================
       19. CLEAR ATTEMPT HISTORY
       ====================================================== */

    function clearHistory(quizId = null) {
        const attempts = readAll();

        const remaining = quizId
            ? attempts.filter(
                attempt => attempt.quizId !== quizId
            )
            : [];

        requireSave(remaining);

        return true;
    }

    /* ======================================================
       20. PROGRESS
       ====================================================== */

    function progress(attemptId) {
        const attempt = get(attemptId);

        if (!attempt) {
            return null;
        }

        const total = attempt.questionOrder.length;

        const answered = attempt.questionOrder.filter(
            id => isAnswered(attempt.answers[id])
        ).length;

        return {
            total,
            answered,
            unanswered: total - answered,
            flagged: attempt.flaggedQuestions.length,
            percentage: total
                ? Math.round(
                    (answered / total) * 100
                )
                : 0,
            remainingMs: getRemainingMs(attempt),
            status: attempt.status
        };
    }

    /* ======================================================
       21. PUBLIC API

       Existing method names retained for the UI.

       New:
       - getQuizForAttempt
       - getQuestion
       - answerIsCorrect

       ====================================================== */

    window.PandoraQuizSessions = Object.freeze({
        start,
        get,
        list,
        findInProgress,

        getQuizForAttempt,
        getQuestion,
        answerIsCorrect,

        saveAnswer,
        checkAnswer,
        setCurrentQuestion,
        setFlag,
        saveScratchpad,

        submit,
        reset,
        retake,

        remove,
        clearHistory,

        progress,
        getRemainingMs,

        storageKey: STORAGE_KEY
    });

    console.info(
        "Pandora Quiz Session Manager v2 ready."
    );
})();
