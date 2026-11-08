
/* ==========================================================
   PANDORA V.3 — QUIZ REGISTRY
   Version 2.4 — Dropdown Support

   Supports:
   - Multiple choice: cards or dropdown
   - Multiple select
   - True / false
   - Identification with alternative answers
   - Question images and option images
   - Optional createdAt and showOnHome
   - Optional PDF copy
   - Quiz versioning and validation

   Compatible with existing quiz files.
   No attempts or progress are stored here.
   ========================================================== */

(() => {
    "use strict";

    if (window.PandoraQuizzes) return;

    const quizzes = new Map();

    const supportedTypes = Object.freeze([
        "multiple_choice",
        "multiple_select",
        "true_false",
        "identification"
    ]);

    const supportedKinds = Object.freeze([
        "formative",
        "summative",
        "practice"
    ]);

    const supportedImageExtensions = Object.freeze([
        "png", "jpg", "jpeg", "webp", "gif"
    ]);

    const supportedDisplays = Object.freeze([
        "cards",
        "dropdown"
    ]);

    /* ======================================================
       01. HELPERS
       ====================================================== */

    function clone(value) {
        return structuredClone(value);
    }

    function fail(message) {
        throw new Error(message);
    }

    function normalizeSubject(value) {
        return String(value ?? "").trim().toUpperCase();
    }

    function normalizeText(value) {
        return String(value ?? "")
            .trim()
            .replace(/\s+/g, " ")
            .toLocaleLowerCase();
    }

    function validOptions(options) {
        return (
            Array.isArray(options) &&
            options.length >= 2 &&
            options.every(option =>
                typeof option === "string" &&
                option.trim().length > 0
            )
        );
    }

    function validOptionIndex(index, options) {
        return (
            Number.isInteger(index) &&
            index >= 0 &&
            index < options.length
        );
    }

    /* ======================================================
       02. IMAGE VALIDATION
       ====================================================== */

    function validImagePath(path, subject) {
        if (
            typeof path !== "string" ||
            !path ||
            path !== path.trim()
        ) {
            return false;
        }

        const prefix =
            `./SUBJECTS/quizzes/${subject}/imgs/`;

        if (!path.startsWith(prefix)) {
            return false;
        }

        const filename = path.slice(prefix.length);
        const segments = filename.split("/");

        if (
            segments.some(segment =>
                !segment ||
                segment === "." ||
                segment === ".." ||
                !/^[a-zA-Z0-9_.-]+$/.test(segment)
            )
        ) {
            return false;
        }

        const extension = filename
            .split(".")
            .pop()
            .toLowerCase();

        return supportedImageExtensions.includes(
            extension
        );
    }

    function validateImages(question, number, subject) {
        if (
            question.image !== undefined &&
            !validImagePath(question.image, subject)
        ) {
            fail(
                `Question ${number} has an invalid image path. ` +
                `Use ./SUBJECTS/quizzes/${subject}/imgs/filename.png`
            );
        }

        if (question.optionImages === undefined) {
            return;
        }

        if (
            question.type !== "multiple_choice" &&
            question.type !== "multiple_select"
        ) {
            fail(
                `Question ${number}: optionImages requires ` +
                `multiple_choice or multiple_select.`
            );
        }

        const images = question.optionImages;

        if (
            !Array.isArray(images) ||
            images.length !== question.options.length
        ) {
            fail(
                `Question ${number}: optionImages must have ` +
                `the same number of entries as options.`
            );
        }

        for (let index = 0; index < images.length; index++) {
            const path = images[index];

            if (
                path !== null &&
                !validImagePath(path, subject)
            ) {
                fail(
                    `Question ${number}, option ${index + 1} ` +
                    `has an invalid image path. ` +
                    `Use null for a text-only option.`
                );
            }
        }

        if (!images.some(path => path !== null)) {
            fail(
                `Question ${number}: optionImages must ` +
                `include at least one image path.`
            );
        }
    }

    /* ======================================================
       03. PDF COPY VALIDATION
       ====================================================== */

    function validPdfCopyPath(path) {
        if (
            typeof path !== "string" ||
            !path ||
            path !== path.trim() ||
            !path.startsWith("./File_Bank/") ||
            !/\.pdf$/i.test(path) ||
            /[\\?#:%\x00-\x1F]/.test(path)
        ) {
            return false;
        }

        const relativePath = path.slice(
            "./File_Bank/".length
        );

        return relativePath.split("/").every(segment =>
            segment.length > 0 &&
            segment !== "." &&
            segment !== ".." &&
            segment === segment.trim()
        );
    }

    /* ======================================================
       04. QUESTION DISPLAY VALIDATION

       display: "dropdown"
       - multiple_choice only
       - text options only
       - same correctAnswer format as cards

       display: "cards" or omitted
       - traditional Pandora answer choices
       ====================================================== */

    function validateDisplay(question, number) {
        if (question.display === undefined) {
            return;
        }

        if (
            typeof question.display !== "string" ||
            !supportedDisplays.includes(question.display)
        ) {
            fail(
                `Question ${number} has an invalid display. ` +
                `Use "cards" or "dropdown".`
            );
        }

        if (question.type !== "multiple_choice") {
            fail(
                `Question ${number}: display is supported ` +
                `only for multiple_choice questions.`
            );
        }

        if (
            question.display === "dropdown" &&
            question.optionImages !== undefined
        ) {
            fail(
                `Question ${number}: dropdown cannot use ` +
                `optionImages. Use choice cards instead.`
            );
        }
    }

    /* ======================================================
       05. QUESTION VALIDATION
       ====================================================== */

    function validateQuestion(question, index, subject) {
        const number = index + 1;

        if (
            !question ||
            typeof question !== "object" ||
            Array.isArray(question)
        ) {
            fail(`Question ${number} must be an object.`);
        }

        if (
            typeof question.id !== "string" ||
            !question.id.trim()
        ) {
            fail(`Question ${number} needs a unique ID.`);
        }

        if (
            typeof question.question !== "string" ||
            !question.question.trim()
        ) {
            fail(`Question ${number} needs question text.`);
        }

        if (!supportedTypes.includes(question.type)) {
            fail(
                `Question ${number} has unsupported type ` +
                `"${question.type}".`
            );
        }

        if (
            typeof question.explanation !== "string" ||
            !question.explanation.trim()
        ) {
            fail(`Question ${number} needs an explanation.`);
        }

        if (
            question.reference !== undefined &&
            typeof question.reference !== "string"
        ) {
            fail(`Question ${number} has an invalid reference.`);
        }

        const choiceQuestion =
            question.type === "multiple_choice" ||
            question.type === "multiple_select";

        if (
            choiceQuestion &&
            !validOptions(question.options)
        ) {
            fail(
                `Question ${number} needs at least ` +
                `two valid options.`
            );
        }

        if (
            question.type === "multiple_choice" &&
            !validOptionIndex(
                question.correctAnswer,
                question.options
            )
        ) {
            fail(
                `Question ${number} has an invalid ` +
                `multiple-choice answer.`
            );
        }

        if (question.type === "multiple_select") {
            const answers = question.correctAnswer;

            if (
                !Array.isArray(answers) ||
                answers.length < 2 ||
                !answers.every(answer =>
                    validOptionIndex(
                        answer,
                        question.options
                    )
                ) ||
                new Set(answers).size !== answers.length
            ) {
                fail(
                    `Question ${number} requires at least ` +
                    `two unique, valid correct-answer indices.`
                );
            }
        }

        if (
            question.type === "true_false" &&
            typeof question.correctAnswer !== "boolean"
        ) {
            fail(
                `Question ${number} needs a boolean answer.`
            );
        }

        if (question.type === "identification") {
            if (
                typeof question.correctAnswer !== "string" ||
                !question.correctAnswer.trim()
            ) {
                fail(
                    `Question ${number} needs a text answer.`
                );
            }

            if (question.acceptedAnswers !== undefined) {
                const answers = question.acceptedAnswers;

                if (
                    !Array.isArray(answers) ||
                    !answers.every(answer =>
                        typeof answer === "string" &&
                        answer.trim().length > 0
                    )
                ) {
                    fail(
                        `Question ${number} has invalid ` +
                        `acceptedAnswers.`
                    );
                }

                const normalized = [
                    question.correctAnswer,
                    ...answers
                ].map(normalizeText);

                if (
                    new Set(normalized).size !==
                    normalized.length
                ) {
                    fail(
                        `Question ${number} contains ` +
                        `duplicate accepted answers.`
                    );
                }
            }
        }

        validateDisplay(question, number);
        validateImages(question, number, subject);
    }

    /* ======================================================
       06. OPTIONAL PUBLICATION DATE
       ====================================================== */

    function normalizeCreatedAt(value, quizId) {
        if (value === undefined || value === null) {
            return null;
        }

        if (typeof value !== "string") {
            fail(
                `Quiz "${quizId}": createdAt must be ` +
                `an ISO date string.`
            );
        }

        const dateOnly = /^\d{4}-\d{2}-\d{2}$/;

        const timestamp =
            /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{1,3})?(?:Z|[+-]\d{2}:\d{2})$/;

        if (
            !dateOnly.test(value) &&
            !timestamp.test(value)
        ) {
            fail(
                `Quiz "${quizId}": use YYYY-MM-DD or ` +
                `an ISO timestamp with a timezone for createdAt.`
            );
        }

        const datePart = value.slice(0, 10);

        const calendarDate = new Date(
            `${datePart}T00:00:00.000Z`
        );

        if (
            !Number.isFinite(calendarDate.getTime()) ||
            calendarDate.toISOString().slice(0, 10) !==
                datePart
        ) {
            fail(
                `Quiz "${quizId}" has an invalid createdAt date.`
            );
        }

        const milliseconds = Date.parse(value);

        if (!Number.isFinite(milliseconds)) {
            fail(
                `Quiz "${quizId}" has an invalid createdAt.`
            );
        }

        return new Date(milliseconds).toISOString();
    }

    /* ======================================================
       07. QUIZ VALIDATION
       ====================================================== */

    function normalizeQuiz(quiz) {
        if (
            !quiz ||
            typeof quiz !== "object" ||
            Array.isArray(quiz)
        ) {
            fail("Invalid Pandora quiz.");
        }

        const id = String(quiz.id ?? "").trim();
        const subject = normalizeSubject(quiz.subject);
        const module = Number(quiz.module);
        const title = String(quiz.title ?? "").trim();

        const kind = String(quiz.kind ?? "practice")
            .trim()
            .toLowerCase();

        const version = quiz.version === undefined
            ? 1
            : quiz.version;

        if (!id) {
            fail("Quiz ID is required.");
        }

        if (
            !subject ||
            !/^[A-Z0-9_-]+$/.test(subject)
        ) {
            fail(
                `Quiz "${id}" needs a valid subject code.`
            );
        }

        if (
            !Number.isSafeInteger(module) ||
            module <= 0
        ) {
            fail(
                `Quiz "${id}" needs a valid module number.`
            );
        }

        if (!title) {
            fail(`Quiz "${id}" needs a title.`);
        }

        if (!supportedKinds.includes(kind)) {
            fail(
                `Quiz "${id}" has unsupported kind "${kind}".`
            );
        }

        if (
            !Number.isSafeInteger(version) ||
            version < 1
        ) {
            fail(
                `Quiz "${id}" needs a positive integer version.`
            );
        }

        if (
            quiz.description !== undefined &&
            typeof quiz.description !== "string"
        ) {
            fail(
                `Quiz "${id}" has an invalid description.`
            );
        }

        if (
            quiz.showOnHome !== undefined &&
            typeof quiz.showOnHome !== "boolean"
        ) {
            fail(
                `Quiz "${id}": showOnHome must be true or false.`
            );
        }

        const createdAt = normalizeCreatedAt(
            quiz.createdAt,
            id
        );

        if (
            quiz.pdfCopy !== undefined &&
            !validPdfCopyPath(quiz.pdfCopy)
        ) {
            fail(
                `Quiz "${id}" has an invalid pdfCopy path. ` +
                `Use ./File_Bank/SUBJECT_CODE/filename.pdf`
            );
        }

        if (
            !Array.isArray(quiz.questions) ||
            quiz.questions.length === 0
        ) {
            fail(
                `Quiz "${id}" must contain questions.`
            );
        }

        for (
            let index = 0;
            index < quiz.questions.length;
            index++
        ) {
            validateQuestion(
                quiz.questions[index],
                index,
                subject
            );
        }

        const questionIds = quiz.questions.map(
            question => question.id
        );

        if (
            new Set(questionIds).size !==
            questionIds.length
        ) {
            fail(
                `Quiz "${id}" contains duplicate question IDs.`
            );
        }

        return clone({
            ...quiz,
            id,
            subject,
            module,
            title,
            kind,
            version,
            createdAt,
            showOnHome: quiz.showOnHome ?? true,
            pdfCopy: quiz.pdfCopy ?? null,
            questionCount: quiz.questions.length
        });
    }

    /* ======================================================
       08. REGISTER / GET
       ====================================================== */

    function register(quiz) {
        const registered = normalizeQuiz(quiz);

        if (quizzes.has(registered.id)) {
            fail(
                `Quiz "${registered.id}" is already registered.`
            );
        }

        quizzes.set(registered.id, registered);

        document.dispatchEvent(
            new CustomEvent(
                "pandora:quizzes-changed",
                {
                    detail: {
                        quizId: registered.id,
                        version: registered.version
                    }
                }
            )
        );

        return registered.id;
    }

    function get(id) {
        const quiz = quizzes.get(String(id ?? ""));

        return quiz ? clone(quiz) : null;
    }

    /* ======================================================
       09. LIST QUIZZES
       ====================================================== */

    function list(filters = {}) {
        const subject = filters.subject
            ? normalizeSubject(filters.subject)
            : null;

        const module = filters.module == null
            ? null
            : Number(filters.module);

        const kind = filters.kind
            ? String(filters.kind)
                .trim()
                .toLowerCase()
            : null;

        const query = normalizeText(
            filters.search || ""
        );

        return Array.from(quizzes.values())
            .filter(quiz => {
                if (
                    subject &&
                    quiz.subject !== subject
                ) {
                    return false;
                }

                if (
                    module !== null &&
                    quiz.module !== module
                ) {
                    return false;
                }

                if (
                    kind &&
                    quiz.kind !== kind
                ) {
                    return false;
                }

                if (
                    typeof filters.showOnHome === "boolean" &&
                    quiz.showOnHome !== filters.showOnHome
                ) {
                    return false;
                }

                if (query) {
                    const searchable = [
                        quiz.title,
                        quiz.subject,
                        quiz.module,
                        quiz.kind,
                        quiz.description || ""
                    ].join(" ");

                    if (
                        !normalizeText(searchable)
                            .includes(query)
                    ) {
                        return false;
                    }
                }

                return true;
            })
            .sort((a, b) =>
                a.subject.localeCompare(b.subject) ||
                a.module - b.module ||
                a.title.localeCompare(b.title)
            )
            .map(quiz => ({
                id: quiz.id,
                title: quiz.title,
                subject: quiz.subject,
                module: quiz.module,
                kind: quiz.kind,
                version: quiz.version,
                description: quiz.description || "",
                questionCount: quiz.questionCount,
                createdAt: quiz.createdAt,
                showOnHome: quiz.showOnHome,
                pdfCopy: quiz.pdfCopy
            }));
    }

    function count() {
        return quizzes.size;
    }

    /* ======================================================
       10. PUBLIC API
       ====================================================== */

    window.PandoraQuizzes = Object.freeze({
        register,
        get,
        list,
        count,
        supportedTypes,
        supportedKinds,
        supportedImageExtensions,
        supportedDisplays
    });

    console.info(
        "Pandora Quiz Registry v2.4 ready."
    );
})();
