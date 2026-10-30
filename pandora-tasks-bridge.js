
/* =====================================================
   PANDORA V.3 — TASKS INTEGRATION BRIDGE
   Step 4

   Connects the independent planner to:
   - Pandora sidebar navigation
   - Home dashboard widget
   - Dedicated Tasks page

   Does not modify pandora-app.js.
   ===================================================== */

(() => {
    "use strict";

    if (window.PandoraTasksBridge) return;

    const tasks = window.PandoraTasks;
    const ui = window.PandoraTasksUI;

    if (!tasks || !ui) {
        console.error(
            "Pandora Tasks Bridge requires " +
            "pandora-tasks.js and pandora-tasks-ui.js."
        );
        return;
    }

    const nav = document.getElementById("nav");
    const content = document.getElementById("content");

    if (!nav || !content) {
        console.error(
            "Pandora navigation or content container not found."
        );
        return;
    }

    let tasksPageActive = false;
    let observerScheduled = false;

    /* ==========================================
       1. BRIDGE-SPECIFIC LAYOUT STYLES
       ========================================== */

    const style = document.createElement("style");

    style.id = "pandora-tasks-bridge-styles";

    style.textContent = `
        .pt-home-layout {
            display: grid;
            grid-template-columns:
                minmax(0, 1.6fr)
                minmax(285px, 0.85fr);
            align-items: start;
            gap: 21px;
        }

        .pt-home-main {
            min-width: 0;
        }

        .pt-home-aside {
            min-width: 0;
            position: sticky;
            top: 20px;
            align-self: start;
        }

        .pt-home-main > .section-head:first-child {
            margin-top: 0;
        }

        #content > [data-pandora-tasks-page] {
            display: block;
            width: 100%;
            min-width: 0;
        }

        #nav .pt-nav-item {
            width: 100%;
        }

        #nav .pt-nav-item.active {
            background: var(--panel-rose);
            color: var(--text);
            font-weight: 650;
        }

        @media (max-width: 1250px) {
            .pt-home-layout {
                grid-template-columns:
                    minmax(0, 1.25fr)
                    minmax(265px, 0.9fr);
                gap: 15px;
            }
        }

        @media (max-width: 1050px) {
            .pt-home-layout {
                grid-template-columns: minmax(0, 1fr);
            }

            .pt-home-aside {
                position: static;
                grid-row: 1;
            }
        }

        @media (max-width: 620px) {
            .pt-home-layout {
                gap: 14px;
            }
        }
    `;

    if (!document.getElementById(style.id)) {
        document.head.appendChild(style);
    }

    /* ==========================================
       2. ADD TASKS TO THE SIDEBAR
       ========================================== */

    function installTaskNavigation() {
        if (nav.querySelector(".pt-nav-item")) {
            return;
        }

        const button = document.createElement("button");

        button.type = "button";
        button.className = "nav-item pt-nav-item";
        button.dataset.ptNavigate = "tasks";

        button.innerHTML = `
            <span class="nav-icon" aria-hidden="true">☷</span>
            <span>Tasks</span>
        `;

        const settingsButton = nav.querySelector(
            '[data-page="settings"]'
        );

        if (settingsButton) {
            nav.insertBefore(button, settingsButton);
        } else {
            nav.appendChild(button);
        }
    }

    function updateNavigation() {
        const taskButton = nav.querySelector(".pt-nav-item");

        if (!taskButton) return;

        if (tasksPageActive) {
            nav.querySelectorAll(".nav-item").forEach(
                (button) => {
                    button.classList.remove("active");
                }
            );

            taskButton.classList.add("active");
            taskButton.setAttribute("aria-current", "page");
        } else {
            taskButton.classList.remove("active");
            taskButton.removeAttribute("aria-current");
        }
    }

    /* ==========================================
       3. OPEN THE DEDICATED TASKS PAGE
       ========================================== */

    function openTasksPage() {
        tasksPageActive = true;

        installTaskNavigation();
        updateNavigation();

        content.innerHTML = `
            <div data-pandora-tasks-page></div>
        `;

        ui.refresh();

        const sidebar = document.querySelector(".sidebar");

        if (sidebar) {
            sidebar.classList.remove("open");
        }

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });
    }

    /* ==========================================
       4. HOME DASHBOARD INTEGRATION
       ========================================== */

    function isHomePage() {
        if (tasksPageActive) {
            return false;
        }

        const activePage = nav.querySelector(
            '.nav-item.active[data-page]'
        );

        return activePage?.dataset.page === "home";
    }

    function installHomeWidget() {
        if (!isHomePage()) return;

        if (content.querySelector(".pt-home-layout")) {
            return;
        }

        const hero = content.querySelector(".hero");

        if (!hero) return;

        const nextElements = [];
        let current = hero.nextElementSibling;

        while (current) {
            nextElements.push(current);
            current = current.nextElementSibling;
        }

        if (!nextElements.length) return;

        const layout = document.createElement("div");
        layout.className = "pt-home-layout";

        const main = document.createElement("div");
        main.className = "pt-home-main";

        const aside = document.createElement("div");
        aside.className = "pt-home-aside";
        aside.setAttribute(
            "data-pandora-tasks-widget",
            ""
        );

        for (const element of nextElements) {
            main.appendChild(element);
        }

        layout.appendChild(main);
        layout.appendChild(aside);
        content.appendChild(layout);

        ui.refresh();
    }

    /* ==========================================
       5. HANDLE PAGE CHANGES
       ========================================== */

    document.addEventListener(
        "click",
        (event) => {
            if (!(event.target instanceof Element)) {
                return;
            }

            const taskNavigation = event.target.closest(
                "[data-pt-navigate='tasks']"
            );

            if (taskNavigation) {
                event.preventDefault();
                event.stopImmediatePropagation();

                openTasksPage();
                return;
            }

            const existingNavigation = event.target.closest(
                "#nav [data-page]"
            );

            if (existingNavigation) {
                tasksPageActive = false;
            }
        },
        true
    );

    ui.setNavigator(openTasksPage);

    /* ==========================================
       6. RESTORE TASKS AFTER APP RENDERS
       ========================================== */

    function synchronize() {
        installTaskNavigation();

        if (tasksPageActive) {
            updateNavigation();

            if (!content.querySelector(
                "[data-pandora-tasks-page]"
            )) {
                content.innerHTML = `
                    <div data-pandora-tasks-page></div>
                `;

                ui.refresh();
            }

            return;
        }

        updateNavigation();
        installHomeWidget();
    }

    function queueSynchronization() {
        if (observerScheduled) return;

        observerScheduled = true;

        queueMicrotask(() => {
            observerScheduled = false;
            synchronize();
        });
    }

    /* ==========================================
       7. OBSERVE EXISTING PANDORA RENDERS

       Pandora re-creates navigation and content
       whenever the active page changes.

       Watch only direct child changes so task
       editing does not trigger an infinite loop.
       ========================================== */

    const observer = new MutationObserver(
        queueSynchronization
    );

    observer.observe(nav, {
        childList: true
    });

    observer.observe(content, {
        childList: true
    });

    /* ==========================================
       8. PUBLIC INTERFACE
       ========================================== */

    window.PandoraTasksBridge = Object.freeze({
        openTasksPage,
        synchronize
    });

    synchronize();

    console.info(
        "Pandora Tasks integration bridge ready."
    );
})();
