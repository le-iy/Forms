
/* ==========================================================
   PANDORA V.3 — QUIZ STUDIO BRIDGE
   Version 2

   Integrates:
   - Quiz Studio sidebar navigation
   - Built-in Practice Tests inside subject modules
   - Quiz-only subject modules
   - Shared quiz player and attempt history
   - Navigation coordination with Pandora Tasks
   - Dynamic quiz registration updates

   Requires:
   - pandora-quiz-registry.js
   - pandora-quiz-ui.js

   Does not modify:
   - Pandora Tasks source files
   - Calendar
   - Theme Builder
   - Subject resource data
   ========================================================== */

(() => {
    "use strict";

    if (window.PandoraQuizBridge) return;

    const Registry = window.PandoraQuizzes;
    const UI = window.PandoraQuizUI;

    if (!Registry || !UI) {
        console.error(
            "Quiz Bridge requires Quiz Registry and Quiz UI."
        );
        return;
    }

    const nav = document.getElementById("nav");
    const content = document.getElementById("content");

    if (!nav || !content) {
        console.error(
            "Quiz Bridge: navigation or content is missing."
        );
        return;
    }

    const NAV_SELECTOR = "[data-pq-navigate]";
    const PAGE_SELECTOR = "[data-pandora-quiz-page]";
    const SECTION_SELECTOR = "[data-pq-module-section]";

    let quizPageActive = false;
    let synchronizationQueued = false;

    /* ======================================================
       01. HELPERS
       ====================================================== */

    function escapeHTML(value) {
        return String(value ?? "").replace(
            /[&<>"']/g,
            character => ({
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            })[character]
        );
    }

    function scrollToTop() {
        window.scrollTo(0, 0);
    }

    function closeMobileSidebar() {
        document.querySelector(".sidebar")
            ?.classList.remove("open");
    }

    function getTaskNavigation() {
        return nav.querySelector(
            "[data-pt-navigate='tasks']"
        );
    }

    function isTasksActive() {
        return Boolean(
            getTaskNavigation()?.classList.contains("active")
        );
    }

    /* ======================================================
       02. SIDEBAR NAVIGATION
       ====================================================== */

    function installNavigation() {
        if (nav.querySelector(NAV_SELECTOR)) {
            return;
        }

        const button = document.createElement("button");

        button.type = "button";
        button.className = "nav-item pq-nav-item";
        button.dataset.pqNavigate = "quiz-studio";

        button.innerHTML = `
            <span class="nav-icon" aria-hidden="true">
                ✎
            </span>
            <span>Quiz Studio</span>
        `;

        const favorites = nav.querySelector(
            '[data-page="favorites"]'
        );

        const settings = nav.querySelector(
            '[data-page="settings"]'
        );

        if (favorites) {
            nav.insertBefore(button, favorites);
        } else if (settings) {
            nav.insertBefore(button, settings);
        } else {
            nav.appendChild(button);
        }
    }

    function updateNavigation() {
        const button = nav.querySelector(
            NAV_SELECTOR
        );

        if (!button) return;

        if (quizPageActive) {
            nav.querySelectorAll(".nav-item").forEach(
                item => {
                    item.classList.remove("active");
                    item.removeAttribute("aria-current");
                }
            );

            button.classList.add("active");
            button.setAttribute(
                "aria-current",
                "page"
            );
        } else {
            button.classList.remove("active");
            button.removeAttribute("aria-current");
        }
    }

    /* ======================================================
       03. TASKS NAVIGATION HANDOFF

       The Tasks bridge maintains its own active
       page state.

       If Tasks is active, navigate to a normal
       Pandora page first so its own bridge can
       release control of the content area.

       This does not modify task data.

       ====================================================== */

    function releaseTasksPage() {
        if (!isTasksActive()) return;

        const homeButton = nav.querySelector(
            '[data-page="home"]'
        );

        if (!homeButton) {
            console.warn(
                "Quiz Bridge could not find Home " +
                "for the Tasks navigation handoff."
            );
            return;
        }

        homeButton.click();
    }

    /* ======================================================
       04. QUIZ PAGE CONTAINER
       ====================================================== */

    function createQuizContainer() {
        let container = content.querySelector(
            PAGE_SELECTOR
        );

        if (!container) {
            content.innerHTML = `
                <div data-pandora-quiz-page></div>
            `;

            container = content.querySelector(
                PAGE_SELECTOR
            );
        }

        return container;
    }

    function showQuizPage() {
        releaseTasksPage();

        quizPageActive = true;

        installNavigation();
        updateNavigation();

        return createQuizContainer();
    }

    function openQuizStudio() {
        const container = showQuizPage();

        UI.mount(container);
        UI.openLibrary();

        closeMobileSidebar();
        scrollToTop();

        return true;
    }

    function openQuiz(quizId, source = null) {
        if (!Registry.get(quizId)) {
            console.warn(
                "Pandora Quiz Bridge: quiz not found.",
                quizId
            );

            return false;
        }

        const container = showQuizPage();

        UI.mount(container);

        const opened = UI.openQuiz(
            quizId,
            source
        );

        closeMobileSidebar();
        scrollToTop();

        return opened;
    }

    /* ======================================================
       05. CURRENT SUBJECT DETECTION

       Pandora renders subject headers as:
       SUBJECTCODE ✦

       Detect this without changing pandora-app.js.

       ====================================================== */

    function openHomeAttempt(attemptId) {
        const attempt =
            window.PandoraQuizSessions?.get(attemptId);

        if (!attempt) {
            console.warn(
                "Pandora Quiz Bridge: attempt not found.",
                attemptId
            );
            return false;
        }

        const container = showQuizPage();

        UI.mount(container);

        const opened = UI.openAttempt(attemptId);

        closeMobileSidebar();
        scrollToTop();

        return opened;
    }

    function currentSubject() {
        const heading = content.querySelector(
            ".hero h1"
        );

        if (!heading) return null;

        const headingText = heading.textContent
            .replace(/\s*✦\s*$/, "")
            .trim()
            .toUpperCase();

        const subjects =
            window.PANDORA_DATA?.subjects || [];

        const found = subjects.find(subject =>
            String(subject.id).toUpperCase() === headingText
        );

        return found?.id || null;
    }

    /* ======================================================
       06. QUIZ MODULE SECTION

       Reuses Pandora's existing editorial styles.
       Preserves the four-section design:

       1. Built-in Practice Tests
       2. Reviewers
       3. Linked Practice / Edit Modules
       4. References

       ====================================================== */

    function makeQuizSection(quizzes) {
        const section = document.createElement("section");

        section.className =
            "editorial-section pq-module-section";

        section.dataset.pqModuleSection = "";

        section.setAttribute(
            "aria-label",
            "Built-in Practice Tests"
        );

        section.innerHTML = `
            <div class="editorial-section-heading">
                <span
                    class="editorial-section-icon"
                    aria-hidden="true">
                    ✎
                </span>

                <div class="editorial-section-title">
                    <h3>Built-in Practice Tests</h3>
                    <p>
                        Interactive quizzes taken inside Pandora
                    </p>
                </div>

                <span class="editorial-section-count">
                    ${quizzes.length}
                </span>
            </div>

            <div class="editorial-section-resources">
                ${quizzes.map(quiz => `
                    <div class="pq-module-quiz">
                        <span
                            class="pq-module-quiz-icon"
                            aria-hidden="true">
                            ✎
                        </span>

                        <div class="pq-module-quiz-info">
                            <strong>
                                ${escapeHTML(quiz.title)}
                            </strong>

                            <small>
                                ${escapeHTML(quiz.kind)}
                                · ${quiz.questionCount}
                                questions
                            </small>
                        </div>

                        <button
                            type="button"
                            class="pq-module-open"
                            data-pq-open-quiz="${escapeHTML(quiz.id)}"
                            aria-label="Open ${escapeHTML(quiz.title)}">
                            Take Quiz →
                        </button>
                    </div>
                `).join("")}
            </div>
        `;

        return section;
    }

    /* ======================================================
       07. QUIZ-ONLY MODULES

       A module should exist even when it has
       built-in quizzes but no PDF/resources.

       ====================================================== */

    function createQuizOnlyModule(number) {
        const details = document.createElement("details");

        details.className = "academic-module";
        details.dataset.pqQuizOnlyModule = String(number);

        details.innerHTML = `
            <summary class="academic-module-heading">
                <span class="academic-module-number">
                    ${number}
                </span>

                <span class="academic-module-title">
                    <strong>Module ${number}</strong>
                    <small>Built-in quizzes</small>
                </span>

                <span class="academic-module-chevron">
                    ⌄
                </span>
            </summary>

            <div class="academic-module-body">
                <div class="editorial-sections"></div>
            </div>
        `;

        return details;
    }

    function getModuleNumber(details) {
        const label = details.querySelector(
            ".academic-module-number"
        )?.textContent.trim();

        const number = Number(label);

        return Number.isSafeInteger(number) && number > 0
            ? number
            : null;
    }

    function insertModuleInOrder(list, details, number) {
        const modules = [
            ...list.querySelectorAll(
                ":scope > details.academic-module"
            )
        ];

        const next = modules.find(existing => {
            const current = getModuleNumber(existing);

            // "Other Resources" goes after numbered modules.
            return current === null || current > number;
        });

        if (next) {
            list.insertBefore(details, next);
        } else {
            list.appendChild(details);
        }
    }

    /* ======================================================
       08. INSTALL QUIZZES INTO SUBJECT MODULES
       ====================================================== */

    function installSubjectQuizzes() {
        if (quizPageActive) return;

        const subject = currentSubject();

        if (!subject) return;

        const moduleList = content.querySelector(
            ".academic-module-list"
        );

        if (!moduleList) return;

        const quizzes = Registry.list({ subject });

        const grouped = new Map();

        quizzes.forEach(quiz => {
            if (!grouped.has(quiz.module)) {
                grouped.set(quiz.module, []);
            }

            grouped.get(quiz.module).push(quiz);
        });

        // Remove outdated quiz-only modules when
        // they no longer have registered quizzes.
        moduleList.querySelectorAll(
            "[data-pq-quiz-only-module]"
        ).forEach(details => {
            const number = Number(
                details.dataset.pqQuizOnlyModule
            );

            if (!grouped.has(number)) {
                details.remove();
            }
        });

        // Create missing modules for quiz-only content.
        grouped.forEach((moduleQuizzes, number) => {
            const exists = [
                ...moduleList.querySelectorAll(
                    ":scope > details.academic-module"
                )
            ].some(details =>
                getModuleNumber(details) === number
            );

            if (exists) return;

            insertModuleInOrder(
                moduleList,
                createQuizOnlyModule(number),
                number
            );
        });

        // Install or refresh quiz sections.
        moduleList.querySelectorAll(
            ":scope > details.academic-module"
        ).forEach(details => {
            const number = getModuleNumber(details);

            if (number === null) return;

            const moduleQuizzes = grouped.get(number) || [];

            const body = details.querySelector(
                ".academic-module-body"
            );

            if (!body) return;

            const existing = body.querySelector(
                SECTION_SELECTOR
            );

            if (!moduleQuizzes.length) {
                existing?.remove();
                return;
            }

            const signature = JSON.stringify(
                moduleQuizzes.map(quiz => [
                    quiz.id,
                    quiz.title,
                    quiz.kind,
                    quiz.questionCount,
                    quiz.version
                ])
            );

            if (
                existing &&
                existing.dataset.pqSignature === signature
            ) {
                return;
            }

            let sections = body.querySelector(
                ".editorial-sections"
            );

            if (!sections) {
                sections = document.createElement("div");
                sections.className = "editorial-sections";

                body.prepend(sections);
            }

            const replacement = makeQuizSection(
                moduleQuizzes
            );

            replacement.dataset.pqSignature = signature;

            if (existing) {
                existing.replaceWith(replacement);
            } else {
                // Built-in quizzes appear before Reviewers.
                sections.prepend(replacement);
            }
        });
    }

    /* ======================================================
       09. DOCUMENT NAVIGATION EVENTS

       Capture phase is used to coordinate with
       Pandora's existing navigation handlers.

       ====================================================== */

    document.addEventListener(
        "click",
        event => {
            if (!(event.target instanceof Element)) {
                return;
            }

            const quizNavigation = event.target.closest(
                NAV_SELECTOR
            );

            if (quizNavigation && nav.contains(quizNavigation)) {
                event.preventDefault();
                event.stopImmediatePropagation();

                openQuizStudio();
                return;
            }

            const homeAttemptButton = event.target.closest(
                "[data-pq-home-attempt]"
            );

            if (
                homeAttemptButton &&
                content.contains(homeAttemptButton)
            ) {
                event.preventDefault();
                event.stopImmediatePropagation();

                openHomeAttempt(
                    homeAttemptButton.dataset.pqHomeAttempt
                );

                return;
            }
            
            const quizButton = event.target.closest(
                "[data-pq-open-quiz]"
            );

            if (
                quizButton &&
                content.contains(quizButton)
            ) {
                event.preventDefault();
                event.stopImmediatePropagation();

                openQuiz(
                    quizButton.dataset.pqOpenQuiz,
                    "subject"
                );

                return;
            }

            const regularNavigation = event.target.closest(
                "#nav [data-page], #nav [data-pt-navigate]"
            );

            if (regularNavigation) {
                quizPageActive = false;
            }
        },
        true
    );

    /* ======================================================
       10. RESTORE / SYNCHRONIZE

       Pandora recreates the navigation on renders.

       Observe direct children only so quiz inputs
       and other UI changes do not cause render loops.

       ====================================================== */

    function synchronize() {
        installNavigation();

        if (isTasksActive()) {
            quizPageActive = false;
            updateNavigation();
            return;
        }

        if (quizPageActive) {
            updateNavigation();

            if (!content.querySelector(PAGE_SELECTOR)) {
                UI.mount(
                    createQuizContainer()
                );
            }

            return;
        }

        updateNavigation();
        installSubjectQuizzes();
    }

    function scheduleSynchronization() {
        if (synchronizationQueued) return;

        synchronizationQueued = true;

        queueMicrotask(() => {
            synchronizationQueued = false;
            synchronize();
        });
    }

    const observer = new MutationObserver(
        scheduleSynchronization
    );

    observer.observe(nav, {
        childList: true
    });

    observer.observe(content, {
        childList: true
    });

    document.addEventListener(
        "pandora:quizzes-changed",
        scheduleSynchronization
    );

    document.addEventListener(
        "pandora:quiz-manifest-changed",
        scheduleSynchronization
    );

    /* ======================================================
       11. PUBLIC API
       ====================================================== */

    window.PandoraQuizBridge = Object.freeze({
        openQuizStudio,
        openQuiz,
        synchronize
    });

    synchronize();

    console.info(
        "Pandora Quiz Studio Bridge v2 ready."
    );
})();
