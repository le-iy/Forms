
/* ==========================================================
   PANDORA V.3 — DASHBOARD CALENDAR
   Mini monthly calendar above My Tasks

   Requires:
   - pandora-tasks.js
   - pandora-tasks-ui.js
   - pandora-tasks-bridge.js

   Separate module. No changes to task storage.
   ========================================================== */

(() => {
    "use strict";

    if (window.PandoraCalendar) return;

    const API = window.PandoraTasks;

    if (!API) {
        console.error("Pandora Calendar: Tasks engine missing.");
        return;
    }

    const today = new Date();

    const state = {
        year: today.getFullYear(),
        month: today.getMonth(),
        selected: API.localDate(today)
    };

    const WEEKDAYS = [
        "Sun", "Mon", "Tue", "Wed",
        "Thu", "Fri", "Sat"
    ];

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
            }[character])
        );
    }

    function dateKey(year, month, day) {
        return API.localDate(
            new Date(year, month, day)
        );
    }

    function monthTitle() {
        return new Date(
            state.year,
            state.month,
            1
        ).toLocaleDateString("en-US", {
            month: "long",
            year: "numeric"
        });
    }

    function getTasksForDate(date) {
        return API.getTasks()
            .filter(task =>
                !task.done && task.date === date
            )
            .sort((a, b) =>
                (a.time || "23:59").localeCompare(
                    b.time || "23:59"
                )
            );
    }

    function taskCounts() {
        const counts = new Map();

        API.getTasks().forEach(task => {
            if (task.done || !task.date) return;

            counts.set(
                task.date,
                (counts.get(task.date) || 0) + 1
            );
        });

        return counts;
    }

    function selectedDateLabel() {
        if (!state.selected) return "Select a date";

        const date = new Date(
            `${state.selected}T12:00:00`
        );

        return date.toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric"
        });
    }

    /* ======================================================
       02. CALENDAR GRID
       ====================================================== */

    function renderDays() {
        const firstDay = new Date(
            state.year,
            state.month,
            1
        ).getDay();

        const daysInMonth = new Date(
            state.year,
            state.month + 1,
            0
        ).getDate();

        const counts = taskCounts();
        const current = API.localDate();

        let html = "";

        WEEKDAYS.forEach(day => {
            html += `
                <div class="pc-weekday">
                    ${day}
                </div>
            `;
        });

        for (let i = 0; i < firstDay; i++) {
            html += `
                <div
                    class="pc-day-spacer"
                    aria-hidden="true"
                ></div>
            `;
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const key = dateKey(
                state.year,
                state.month,
                day
            );

            const count = counts.get(key) || 0;
            const isToday = key === current;
            const isSelected = key === state.selected;

            html += `
                <button
                    type="button"
                    class="pc-day
                        ${isToday ? "is-today" : ""}
                        ${isSelected ? "is-selected" : ""}
                        ${count ? "has-tasks" : ""}"
                    data-pc-date="${key}"
                    aria-label="${escapeHTML(
                        new Date(
                            `${key}T12:00:00`
                        ).toLocaleDateString("en-US", {
                            weekday: "long",
                            month: "long",
                            day: "numeric"
                        })
                    )}, ${count} pending task${count === 1 ? "" : "s"}"
                    aria-pressed="${isSelected}"
                    title="${count} pending task${count === 1 ? "" : "s"}"
                >
                    <span class="pc-day-number">
                        ${day}
                    </span>

                    <span
                        class="pc-day-dot ${count ? "visible" : ""}"
                        aria-hidden="true"
                    ></span>
                </button>
            `;
        }

        return html;
    }

    /* ======================================================
       03. SELECTED DAY PREVIEW
       ====================================================== */

    function renderDayPreview() {
        const tasks = state.selected
            ? getTasksForDate(state.selected)
            : [];

        const count = tasks.length;

        return `
            <div class="pc-preview">
                <div class="pc-preview-heading">
                    <div>
                        <strong>
                            ${escapeHTML(selectedDateLabel())}
                        </strong>

                        <small>
                            ${count} pending
                            task${count === 1 ? "" : "s"}
                        </small>
                    </div>

                    <span aria-hidden="true">✦</span>
                </div>

                ${count ? `
                    <div class="pc-preview-list">
                        ${tasks.slice(0, 3).map(task => `
                            <div class="pc-preview-task">
                                <span class="pc-preview-bullet">
                                    •
                                </span>

                                <span class="pc-preview-title"
                                    title="${escapeHTML(task.title)}"
                                >
                                    ${escapeHTML(task.title)}
                                </span>

                                ${task.isPriority ? `
                                    <span
                                        aria-label="Priority"
                                        title="Priority task"
                                    >📌</span>
                                ` : ""}
                            </div>
                        `).join("")}

                        ${count > 3 ? `
                            <small class="pc-preview-more">
                                +${count - 3} more
                            </small>
                        ` : ""}
                    </div>
                ` : `
                    <p class="pc-preview-empty">
                        No pending tasks for this date.
                    </p>
                `}
            </div>
        `;
    }

    /* ======================================================
       04. FULL CALENDAR WIDGET
       ====================================================== */

    function render() {
        return `
            <section
                class="pc-calendar"
                aria-label="Academic task calendar"
            >
                <div class="pc-heading">
                    <div>
                        <span class="pc-eyebrow">
                            YOUR SCHEDULE
                        </span>

                        <h2>Calendar ✦</h2>
                    </div>

                    <span
                        class="pc-heading-icon"
                        aria-hidden="true"
                    >▦</span>
                </div>

                <div class="pc-monthbar">
                    <strong>
                        ${escapeHTML(monthTitle())}
                    </strong>

                    <div class="pc-month-actions">
                        <button
                            type="button"
                            class="pc-month-btn"
                            data-pc-nav="-1"
                            aria-label="Previous month"
                            title="Previous month"
                        >‹</button>

                        <button
                            type="button"
                            class="pc-month-btn"
                            data-pc-nav="1"
                            aria-label="Next month"
                            title="Next month"
                        >›</button>
                    </div>
                </div>

                <div class="pc-grid">
                    ${renderDays()}
                </div>

                ${renderDayPreview()}
            </section>
        `;
    }

    /* ======================================================
       05. THEME-AWARE STYLES
       ====================================================== */

    const style = document.createElement("style");

    style.id = "pandora-calendar-styles";

    style.textContent = `
        .pc-calendar {
            min-width: 0;
            padding: 21px;
            margin-bottom: 16px;

            border: 1px solid var(--border);
            border-radius: var(--card-radius);

            background: var(--panel);
            color: var(--text);

            box-shadow: var(--surface-shadow, var(--shadow));
        }

        .pc-calendar *,
        .pc-calendar *::before,
        .pc-calendar *::after {
            box-sizing: border-box;
        }

        .pc-heading {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 12px;
            margin-bottom: 20px;
        }

        .pc-eyebrow {
            display: block;
            margin-bottom: 4px;

            color: var(--accent-strong);
            font-size: 10px;
            font-weight: 750;
            letter-spacing: 0.12em;
        }

        .pc-heading h2 {
            margin: 0;
            font: 700 23px/1.3 Georgia, serif;
            letter-spacing: -0.025em;
        }

        .pc-heading-icon {
            color: var(--accent-strong);
            font-size: 25px;
            line-height: 1;
        }

        .pc-monthbar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            margin-bottom: 13px;
        }

        .pc-monthbar strong {
            font: 700 15px/1.3 Georgia, serif;
        }

        .pc-month-actions {
            display: flex;
            gap: 5px;
        }

        .pc-month-btn {
            display: grid;
            place-items: center;

            width: 30px;
            height: 30px;

            padding: 0;
            border: 1px solid var(--border);
            border-radius: var(--small-radius);

            background: var(--panel-soft);
            color: var(--text);

            font-size: 23px;
            line-height: 1;
            cursor: pointer;
        }

        .pc-month-btn:hover {
            border-color: var(--accent);
            background: var(--panel-rose);
        }

        .pc-grid {
            display: grid;
            grid-template-columns: repeat(7, minmax(0, 1fr));
            gap: 3px;
        }

        .pc-weekday {
            display: grid;
            place-items: center;
            min-width: 0;
            height: 28px;

            color: var(--muted);
            font-size: 10px;
            font-weight: 700;
        }

        .pc-day-spacer {
            min-width: 0;
            height: 36px;
        }

        .pc-day {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            gap: 2px;

            min-width: 0;
            width: 100%;
            height: 36px;

            padding: 2px 0;

            border: 1px solid transparent;
            border-radius: 10px;

            background: transparent;
            color: var(--text);

            font-size: 12px;
            cursor: pointer;
        }

        .pc-day:hover {
            background: var(--panel-soft);
            border-color: var(--border);
        }

        .pc-day.is-today {
            border-color: var(--accent);
        }

        .pc-day.is-selected {
            background: var(--panel-rose);
            border-color: var(--accent);
            color: var(--text);
            font-weight: 800;
        }

        .pc-day:focus-visible,
        .pc-month-btn:focus-visible {
            outline: 2px solid var(--accent-strong);
            outline-offset: 2px;
        }

        .pc-day-number {
            line-height: 1.1;
        }

        .pc-day-dot {
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background: transparent;
        }

        .pc-day-dot.visible {
            background: var(--accent-strong);
        }

        .pc-preview {
            margin-top: 17px;
            padding-top: 15px;
            border-top: 1px solid var(--border);
        }

        .pc-preview-heading {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
        }

        .pc-preview-heading > div {
            display: grid;
            gap: 3px;
        }

        .pc-preview-heading strong {
            font-size: 12px;
            font-weight: 700;
        }

        .pc-preview-heading small {
            color: var(--muted);
            font-size: 11px;
        }

        .pc-preview-heading > span {
            color: var(--accent-strong);
            font-size: 19px;
        }

        .pc-preview-list {
            display: grid;
            gap: 8px;
            margin-top: 12px;
        }

        .pc-preview-task {
            display: flex;
            align-items: center;
            gap: 7px;

            min-width: 0;
            color: var(--text);
            font-size: 11px;
        }

        .pc-preview-bullet {
            flex-shrink: 0;
            color: var(--accent-strong);
            font-size: 16px;
        }

        .pc-preview-title {
            flex: 1;
            min-width: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .pc-preview-more {
            color: var(--muted);
            font-size: 10px;
        }

        .pc-preview-empty {
            margin: 11px 0 0;
            color: var(--muted);
            font-size: 11px;
            line-height: 1.5;
        }

        @media (max-width: 620px) {
            .pc-calendar {
                padding: 17px;
            }

            .pc-heading h2 {
                font-size: 21px;
            }

            .pc-grid {
                gap: 2px;
            }
        }

        @media (prefers-reduced-motion: reduce) {
            .pc-calendar *,
            .pc-calendar *::before,
            .pc-calendar *::after {
                transition-duration: 0.01ms !important;
            }
        }
    `;

    if (!document.getElementById(style.id)) {
        document.head.appendChild(style);
    }

    /* ======================================================
       06. INSERT ABOVE DASHBOARD TASKS

       Pandora's Tasks UI sometimes replaces the widget
       contents. Observe and restore the calendar safely.
       ====================================================== */

    let scheduled = false;

    function mount() {
        const container = document.querySelector(
            "[data-pandora-tasks-widget]"
        );

        if (!container) return;

        let calendar = container.querySelector(
            "[data-pandora-calendar]"
        );

        if (!calendar) {
            calendar = document.createElement("div");
            calendar.setAttribute(
                "data-pandora-calendar",
                ""
            );

            container.prepend(calendar);
        }

        calendar.innerHTML = render();
    }

    function scheduleMount() {
        if (scheduled) return;

        scheduled = true;

        queueMicrotask(() => {
            scheduled = false;

            const container = document.querySelector(
                "[data-pandora-tasks-widget]"
            );

            if (
                container &&
                !container.querySelector(
                    "[data-pandora-calendar]"
                )
            ) {
                mount();
            }
        });
    }

    const content = document.getElementById("content");

    if (content) {
        const observer = new MutationObserver(
            scheduleMount
        );

        observer.observe(content, {
            childList: true,
            subtree: true
        });
    }

    /* ======================================================
       07. CALENDAR INTERACTIONS
       ====================================================== */

    document.addEventListener(
        "click",
        event => {
            if (!(event.target instanceof Element)) {
                return;
            }

            const calendar = event.target.closest(
                "[data-pandora-calendar]"
            );

            if (!calendar) return;

            const navigation = event.target.closest(
                "[data-pc-nav]"
            );

            if (navigation) {
                event.preventDefault();
                event.stopImmediatePropagation();

                const direction = Number(
                    navigation.dataset.pcNav
                );

                const next = new Date(
                    state.year,
                    state.month + direction,
                    1
                );

                state.year = next.getFullYear();
                state.month = next.getMonth();

                state.selected = null;

                mount();
                return;
            }

            const day = event.target.closest(
                "[data-pc-date]"
            );

            if (day) {
                event.preventDefault();
                event.stopImmediatePropagation();

                state.selected = day.dataset.pcDate;

                mount();
            }
        },
        true
    );

    /* ======================================================
       08. REFRESH WHEN TASKS CHANGE
       ====================================================== */

    document.addEventListener(
        API.CHANGE_EVENT,
        () => {
            // Allow the Tasks UI to update first.
            queueMicrotask(mount);
        }
    );

    window.addEventListener("storage", event => {
        if (
            event.key === API.STORAGE_KEY ||
            event.key === API.CATEGORY_KEY
        ) {
            queueMicrotask(mount);
        }
    });

    /* ======================================================
       09. PUBLIC API
       ====================================================== */

    window.PandoraCalendar = Object.freeze({
        mount,

        goToToday() {
            const current = new Date();

            state.year = current.getFullYear();
            state.month = current.getMonth();
            state.selected = API.localDate(current);

            mount();
        }
    });

    mount();

    console.info("Pandora dashboard calendar ready.");
})();
