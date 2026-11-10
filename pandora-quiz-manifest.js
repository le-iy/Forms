
/* ==========================================================
   PANDORA V.3 — QUIZ MANIFEST

   Central loader for built-in quiz files.

   Quiz files are stored in:
   SUBJECTS/quizzes/SUBJECT_CODE/quiz-name.js

   Register each new quiz file in QUIZ_FILES.

   Dependencies:
   - pandora-quiz-registry.js

   ========================================================== */

(() => {
    "use strict";

    if (window.PandoraQuizManifest) return;

    const Registry = window.PandoraQuizzes;

    if (!Registry) {
        console.error(
            "Pandora Quiz Manifest requires " +
            "pandora-quiz-registry.js."
        );

        return;
    }

    /* ======================================================
       01. QUIZ FILE MANIFEST

       Add a quiz's relative path here once the
       corresponding file actually exists.

       Example:

       "./SUBJECTS/quizzes/GED0083L/formative-1.js"

       IMPORTANT:
       File paths are case-sensitive on GitHub Pages.
       ====================================================== */

    const QUIZ_FILES = [

        // GED0083 — Physics 2 Lecture
        "./SUBJECTS/quizzes/GED0083/formative-1.js",
        "./SUBJECTS/quizzes/GED0083/formative-3.js",
        "./SUBJECTS/quizzes/GED0083/formative-2.js",
        "./SUBJECTS/quizzes/GED0083/midterm-exam.js",
        "./SUBJECTS/quizzes/GED0083/formative-5.js",
        "./SUBJECTS/quizzes/GED0083/formative-4.js",
        "./SUBJECTS/quizzes/GED0083/formative-6.js",
        "./SUBJECTS/quizzes/GED0083/formative-7.js",
        "./SUBJECTS/quizzes/GED0083/formative-8.js",
        "./SUBJECTS/quizzes/GED0083/formative-9.js",

        // GED0083L — Physics 2 Laboratory

        // IT0015 — Networking 2
        "./SUBJECTS/quizzes/IT0015/diagnostic-2.js",
        "./SUBJECTS/quizzes/IT0015/summative-2.js",
        "./SUBJECTS/quizzes/IT0015/formative-2.js",

        // IT0035 — Applied Operating System
        "./SUBJECTS/quizzes/IT0035/diagnostic-test.js",
        "./SUBJECTS/quizzes/IT0035/formative-2.js",
        "./SUBJECTS/quizzes/IT0035/seatwork-2.js",
        "./SUBJECTS/quizzes/IT0035/seatwork-1.js",
        "./SUBJECTS/quizzes/IT0035/summative-1.js",
        "./SUBJECTS/quizzes/IT0035/midterm-exam.js",
        "./SUBJECTS/quizzes/IT0035/formative-3.js",

        // IT0035L — Applied Operating System Laboratory

        // IT0037 — System Analysis and Design

        // IT0049 — Web System Technologies
        "./SUBJECTS/quizzes/IT0049/formative-3.js",
        "./SUBJECTS/quizzes/IT0049/summative-1.js",
        "./SUBJECTS/quizzes/IT0049/summative-3.js",

        // IT0204 — Cybersecurity and Privacy
        "./SUBJECTS/quizzes/IT0204/summative-1.js",
        "./SUBJECTS/quizzes/IT0204/diagnostic-2.js",
        "./SUBJECTS/quizzes/IT0204/long-quiz-1.js",
        "./SUBJECTS/quizzes/IT0204/summative-2.js",
        "./SUBJECTS/quizzes/IT0204/formative-4.js",
        "./SUBJECTS/quizzes/IT0204/formative-3.js",
        "./SUBJECTS/quizzes/IT0204/summative-3.js",
        "./SUBJECTS/quizzes/IT0204/formative-5.js"

    ];

    /* ======================================================
       02. LOAD STATUS
       ====================================================== */

    const state = {
        status: "idle",
        loaded: [],
        failed: [],
        startedAt: null,
        finishedAt: null
    };

    let loadPromise = null;

    /* ======================================================
       03. DISPATCH STATUS EVENT
       ====================================================== */

    function notify() {
        document.dispatchEvent(
            new CustomEvent(
                "pandora:quiz-manifest-changed",
                {
                    detail: getStatus()
                }
            )
        );
    }

    /* ======================================================
       04. VALIDATE FILE PATHS
       ====================================================== */

    function validPath(path) {
        if (typeof path !== "string") {
            return false;
        }

        if (
            !path.startsWith("./SUBJECTS/quizzes/") ||
            !path.endsWith(".js")
        ) {
            return false;
        }

        if (
            path.includes("..") ||
            path.includes("\\") ||
            path.includes("?") ||
            path.includes("#")
        ) {
            return false;
        }

        return true;
    }

    /* ======================================================
       05. LOAD A SINGLE QUIZ FILE
       ====================================================== */

    function loadScript(path) {
        return new Promise((resolve, reject) => {
            if (!validPath(path)) {
                reject(
                    new Error(
                        `Invalid quiz file path: ${path}`
                    )
                );

                return;
            }

            const script = document.createElement("script");

            script.src = path;
            script.async = false;
            script.dataset.pandoraQuizFile = path;

            script.onload = () => {
                resolve(path);
            };

            script.onerror = () => {
                script.remove();

                reject(
                    new Error(
                        `Unable to load quiz file: ${path}`
                    )
                );
            };

            document.body.appendChild(script);
        });
    }

    /* ======================================================
       06. LOAD ALL REGISTERED FILES

       Sequential loading preserves manifest order.
       Each quiz file should call:

       window.PandoraQuizzes.register({...});

       ====================================================== */

    async function loadAll() {
        if (loadPromise) {
            return loadPromise;
        }

        state.status = "loading";
        state.loaded = [];
        state.failed = [];
        state.startedAt = new Date().toISOString();
        state.finishedAt = null;

        notify();

        loadPromise = (async () => {
            const uniqueFiles = [
                ...new Set(QUIZ_FILES)
            ];

            for (const path of uniqueFiles) {
                try {
                    await loadScript(path);

                    state.loaded.push(path);
                } catch (error) {
                    state.failed.push({
                        path,
                        message: error.message
                    });

                    console.error(
                        "Pandora Quiz Manifest:",
                        error
                    );
                }

                notify();
            }

            state.finishedAt = new Date().toISOString();

            state.status = state.failed.length
                ? "completed_with_errors"
                : "ready";

            notify();

            console.info(
                "Pandora Quiz Manifest loaded:",
                state.loaded.length,
                "files."
            );

            return getStatus();
        })();

        return loadPromise;
    }

    /* ======================================================
       07. READ-ONLY STATUS
       ====================================================== */

    function getStatus() {
        return {
            status: state.status,
            loaded: [...state.loaded],
            failed: state.failed.map(
                item => ({ ...item })
            ),
            startedAt: state.startedAt,
            finishedAt: state.finishedAt,
            quizCount: Registry.count()
        };
    }

    /* ======================================================
       08. PUBLIC API
       ====================================================== */

    window.PandoraQuizManifest = Object.freeze({
        loadAll,
        getStatus,
        files: () => [...QUIZ_FILES]
    });

    /* ======================================================
       09. INITIALIZE
       ====================================================== */

    loadAll();

    console.info("Pandora Quiz Manifest ready.");
})();
