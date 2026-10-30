
/* ==========================================================
   PANDORA V.3 — TASKS INTERFACE
   Custom Dropdown Click Fix

   Complete replacement for pandora-tasks-ui.js

   Requires:
   - pandora-tasks.js
   - pandora-tasks.css

   Preserves:
   - Task creation, editing, deletion
   - Priority drag and drop
   - Dashboard widget
   - Task filtering and sorting
   - Backup and restore
   - Task completion
   ========================================================== */

(() => {
    "use strict";

    if (window.PandoraTasksUI) return;

    const API = window.PandoraTasks;

    if (!API) {
        console.error("Load pandora-tasks.js first.");
        return;
    }

    const state = {
        filter: "all",
        sort: "date-asc",
        category: "",
        editingId: null,
        draggedId: null,
        navigate: null
    };

    const $ = (selector, root = document) =>
        root.querySelector(selector);

    const $$ = (selector, root = document) =>
        Array.from(root.querySelectorAll(selector));

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

    function dateLabel(value) {
        if (!value) return "No date";

        const today = API.localDate();

        if (value === today) return "Today";

        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);

        if (value === API.localDate(tomorrow)) {
            return "Tomorrow";
        }

        const date = new Date(`${value}T12:00:00`);

        if (Number.isNaN(date.getTime())) {
            return value;
        }

        return date.toLocaleDateString(undefined, {
            month: "short",
            day: "numeric",
            year: "numeric"
        });
    }

    function timeLabel(value) {
        if (!value) return "";

        const [hours, minutes] = value
            .split(":")
            .map(Number);

        const hour = hours % 12 || 12;
        const period = hours >= 12 ? "PM" : "AM";

        return `${hour}:${String(minutes).padStart(2, "0")} ${period}`;
    }

    function categoryColor(name) {
        const category = API.getCategories().find(
            item => item.name === name
        );

        return category?.color || "#a68ccb";
    }

    function categoryOptions(selected = "") {
        return API.getCategories().map(category => `
            <option
                value="${escapeHTML(category.name)}"
                ${category.name === selected ? "selected" : ""}
            >
                ${escapeHTML(category.name)}
            </option>
        `).join("");
    }

    function notesPreview(notes) {
        const lines = String(notes ?? "")
            .split(/\r?\n/)
            .map(line => line.trim())
            .filter(Boolean);

        if (!lines.length) return "";

        return lines[0] + (lines.length > 1 ? "…" : "");
    }

    function filteredTasks() {
        let tasks = API.filterTasks(state.filter, {
            sort: state.sort
        });

        if (state.category) {
            tasks = tasks.filter(
                task => task.category === state.category
            );
        }

        return tasks;
    }

    /* ======================================================
       02. TASK CARDS
       ====================================================== */

    function taskCard(task, compact = false) {
        const overdue =
            !task.done && task.date < API.localDate();

        const color = categoryColor(task.category);
        const preview = notesPreview(task.notes);

        return `
            <article
                class="pt-task ${task.done ? "is-done" : ""}"
                data-task-id="${escapeHTML(task.id)}"
                draggable="${!compact && !task.done}"
                style="--pt-category:${escapeHTML(color)}"
            >
                ${compact ? "" : `
                    <span
                        class="pt-drag-handle"
                        aria-hidden="true"
                        title="Drag to move task"
                    >⠿</span>
                `}

                <input
                    type="checkbox"
                    class="pt-task-check"
                    data-pt-complete="${escapeHTML(task.id)}"
                    aria-label="Complete ${escapeHTML(task.title)}"
                    ${task.done ? "checked" : ""}
                >

                <div class="pt-task-info">
                    <div class="pt-task-name">
                        ${escapeHTML(task.title)}
                    </div>

                    <div class="pt-task-meta">
                        <span class="pt-category-label">
                            ${escapeHTML(task.category)}
                        </span>

                        <span class="${overdue ? "pt-overdue" : ""}">
                            ${overdue ? "Overdue · " : ""}
                            ${escapeHTML(dateLabel(task.date))}
                        </span>

                        ${task.time ? `
                            <span>
                                ${escapeHTML(timeLabel(task.time))}
                            </span>
                        ` : ""}
                    </div>

                    ${preview && !compact ? `
                        <p
                            class="pt-task-notes"
                            title="${escapeHTML(task.notes)}"
                        >${escapeHTML(preview)}</p>
                    ` : ""}
                </div>

                ${compact ? "" : `
                    <div class="pt-task-actions">
                        <button
                            type="button"
                            class="pt-icon-button"
                            data-pt-priority="${escapeHTML(task.id)}"
                            aria-label="${task.isPriority ? "Unpin" : "Pin"} task"
                            title="${task.isPriority ? "Remove priority" : "Make priority"}"
                        >${task.isPriority ? "📌" : "☆"}</button>

                        <button
                            type="button"
                            class="pt-icon-button"
                            data-pt-edit="${escapeHTML(task.id)}"
                            aria-label="Edit task"
                            title="Edit task"
                        >✎</button>

                        <button
                            type="button"
                            class="pt-icon-button pt-delete-button"
                            data-pt-delete="${escapeHTML(task.id)}"
                            aria-label="Delete task"
                            title="Delete task"
                        >×</button>
                    </div>
                `}
            </article>
        `;
    }

    /* ======================================================
       03. STATISTICS
       ====================================================== */

    function stats() {
        const data = API.getStats();

        return `
            <div class="pt-stats">
                <div class="pt-stat">
                    <small>Pending</small>
                    <strong>${data.pending}</strong>
                </div>

                <div class="pt-stat">
                    <small>Due Today</small>
                    <strong>${data.today}</strong>
                </div>

                <div class="pt-stat">
                    <small>Completed</small>
                    <strong>${data.completed}</strong>
                </div>
            </div>
        `;
    }

    function filterButton(value, label) {
        return `
            <button
                type="button"
                class="pt-filter ${state.filter === value ? "active" : ""}"
                data-pt-filter="${value}"
                aria-pressed="${state.filter === value}"
            >${label}</button>
        `;
    }

    /* ======================================================
       04. CUSTOM DROPDOWN DATA
       ====================================================== */

    const SORT_OPTIONS = [
        {
            value: "date-asc",
            label: "Deadline: Earliest"
        },
        {
            value: "date-desc",
            label: "Deadline: Latest"
        },
        {
            value: "newest",
            label: "Recently Created"
        },
        {
            value: "oldest",
            label: "Oldest Created"
        }
    ];

    function categoryDropdownOptions() {
        return [
            {
                value: "",
                label: "All Categories"
            },
            ...API.getCategories().map(category => ({
                value: category.name,
                label: category.name
            }))
        ];
    }

    function dropdownMarkup(kind, selected, options, label) {
        const current =
            options.find(option => option.value === selected) ||
            options[0];

        return `
            <div
                class="pt-custom-dropdown"
                data-pt-dropdown="${escapeHTML(kind)}"
            >
                <button
                    type="button"
                    class="pt-select pt-dropdown-trigger"
                    data-pt-dropdown-trigger="${escapeHTML(kind)}"
                    aria-label="${escapeHTML(label)}"
                    aria-haspopup="listbox"
                    aria-expanded="false"
                    aria-controls="pt-menu-${escapeHTML(kind)}"
                >
                    <span class="pt-dropdown-label">
                        ${escapeHTML(current.label)}
                    </span>

                    <span
                        class="pt-dropdown-chevron"
                        aria-hidden="true"
                    >⌄</span>
                </button>

                <div
                    id="pt-menu-${escapeHTML(kind)}"
                    class="pt-dropdown-menu"
                    role="listbox"
                    aria-label="${escapeHTML(label)}"
                    hidden
                >
                    ${options.map((option, index) => `
                        <button
                            type="button"
                            class="pt-dropdown-option ${option.value === selected ? "selected" : ""}"
                            data-pt-dropdown-option="${escapeHTML(kind)}"
                            data-pt-value="${escapeHTML(option.value)}"
                            role="option"
                            aria-selected="${option.value === selected}"
                            tabindex="-1"
                            id="pt-option-${escapeHTML(kind)}-${index}"
                        >
                            ${escapeHTML(option.label)}
                        </button>
                    `).join("")}
                </div>
            </div>
        `;
    }

    function categoryDropdown() {
        return dropdownMarkup(
            "category",
            state.category,
            categoryDropdownOptions(),
            "Filter tasks by category"
        );
    }

    function sortDropdown() {
        return dropdownMarkup(
            "sort",
            state.sort,
            SORT_OPTIONS,
            "Sort tasks"
        );
    }

    /* ======================================================
       05. DROPDOWN STATE
       ====================================================== */

    function closeDropdowns(restoreFocus = false) {
        $$(".pt-custom-dropdown.open").forEach(dropdown => {
            const trigger = $(
                ".pt-dropdown-trigger",
                dropdown
            );

            const menu = $(
                ".pt-dropdown-menu",
                dropdown
            );

            dropdown.classList.remove("open");

            if (trigger) {
                trigger.setAttribute(
                    "aria-expanded",
                    "false"
                );
            }

            if (menu) {
                menu.hidden = true;
            }

            if (restoreFocus && trigger) {
                trigger.focus();
            }
        });
    }

    function openDropdown(dropdown, focusOption = false, last = false) {
        if (!dropdown) return;

        closeDropdowns();

        const trigger = $(
            ".pt-dropdown-trigger",
            dropdown
        );

        const menu = $(
            ".pt-dropdown-menu",
            dropdown
        );

        if (!trigger || !menu) return;

        dropdown.classList.add("open");

        trigger.setAttribute(
            "aria-expanded",
            "true"
        );

        menu.hidden = false;

        if (focusOption) {
            const options = $$(
                "[data-pt-dropdown-option]",
                dropdown
            );

            const selected = options.find(
                option => option.classList.contains("selected")
            );

            const target = last
                ? options[options.length - 1]
                : selected || options[0];

            target?.focus();
        }
    }

    function chooseDropdownOption(option) {
        const kind = option.dataset.ptDropdownOption;
        const value = option.dataset.ptValue ?? "";

        if (kind === "category") {
            state.category = value;
        } else if (kind === "sort") {
            state.sort = value;
        } else {
            return;
        }

        closeDropdowns();

        refresh();

        const trigger = document.querySelector(
            `[data-pt-dropdown-trigger="${kind}"]`
        );

        trigger?.focus();
    }

    /* ======================================================
       06. DROPDOWN CLICK FIX

       Capture phase prevents Pandora's existing
       document click listeners from intercepting
       these dropdown interactions.

       Only applies to .pt-custom-dropdown.
       ====================================================== */

    document.addEventListener(
        "click",
        event => {
            const target = event.target;

            if (!(target instanceof Element)) {
                return;
            }

            const option = target.closest(
                "[data-pt-dropdown-option]"
            );

            if (option) {
                event.preventDefault();
                event.stopImmediatePropagation();

                chooseDropdownOption(option);
                return;
            }

            const trigger = target.closest(
                "[data-pt-dropdown-trigger]"
            );

            if (trigger) {
                event.preventDefault();
                event.stopImmediatePropagation();

                const dropdown = trigger.closest(
                    ".pt-custom-dropdown"
                );

                if (!dropdown) return;

                if (dropdown.classList.contains("open")) {
                    closeDropdowns();
                } else {
                    openDropdown(dropdown);
                }

                return;
            }

            if (!target.closest(".pt-custom-dropdown")) {
                closeDropdowns();
            }
        },
        true
    );

    /* ======================================================
       07. DROPDOWN CSS

       Explicit position and z-index so the menu
       stays clickable above the planner board.
       ====================================================== */

    const dropdownStyle = document.createElement("style");

    dropdownStyle.id = "pt-custom-dropdown-styles";

    dropdownStyle.textContent = `
        .pt-page .pt-toolbar,
        .pt-page .pt-selectors {
            overflow: visible;
        }

        .pt-page .pt-toolbar {
            position: relative;
            z-index: 30;
        }

        .pt-page .pt-selectors .pt-custom-dropdown {
            position: relative;
            z-index: 1;
            min-width: 165px;
            max-width: 220px;
        }

        .pt-page .pt-custom-dropdown.open {
            z-index: 50;
        }

        .pt-page .pt-dropdown-trigger {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;

            width: 100%;
            max-width: none;
            min-height: 39px;

            padding: 8px 12px;

            border: 1px solid var(--border);
            border-radius: var(--small-radius);

            background: var(--panel);
            color: var(--text);

            text-align: left;
            font-size: 12px;
            cursor: pointer;
        }

        .pt-page .pt-dropdown-trigger:hover,
        .pt-page .pt-custom-dropdown.open
        .pt-dropdown-trigger {
            border-color: var(--accent);
        }

        .pt-dropdown-label {
            min-width: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .pt-dropdown-chevron {
            flex-shrink: 0;
            color: var(--accent-strong);
            font-size: 17px;
            line-height: 1;
            transition: transform 180ms ease;
        }

        .pt-custom-dropdown.open .pt-dropdown-chevron {
            transform: rotate(180deg);
        }

        .pt-page .pt-dropdown-menu {
            position: absolute;
            top: calc(100% + 7px);
            left: 0;
            z-index: 100;

            width: max-content;
            min-width: 100%;
            max-width: min(270px, 85vw);

            max-height: 260px;
            overflow-y: auto;

            padding: 5px;

            border: 1px solid var(--border);
            border-radius: var(--small-radius);

            background: var(--panel);
            color: var(--text);

            box-shadow:
                0 10px 24px rgba(0, 0, 0, 0.12),
                0 20px 44px rgba(0, 0, 0, 0.10);
        }

        .pt-dropdown-menu[hidden] {
            display: none !important;
        }

        .pt-page .pt-dropdown-option {
            display: block;
            width: 100%;
            min-height: 37px;

            padding: 9px 11px;

            border: 0;
            border-radius: 9px;

            background: transparent;
            color: var(--text);

            text-align: left;
            font-size: 12px;
            line-height: 1.4;

            cursor: pointer;
        }

        .pt-page .pt-dropdown-option:hover,
        .pt-page .pt-dropdown-option:focus-visible {
            background: var(--panel-soft);
        }

        .pt-page .pt-dropdown-option.selected {
            background: var(--panel-rose);
            color: var(--accent-strong);
            font-weight: 700;
        }

        @media (max-width: 620px) {
            .pt-page .pt-selectors
            .pt-custom-dropdown {
                width: 100%;
                min-width: 0;
                max-width: none;
            }

            .pt-page .pt-dropdown-menu {
                width: 100%;
                min-width: 0;
            }
        }
    `;

    if (!document.getElementById(dropdownStyle.id)) {
        document.head.appendChild(dropdownStyle);
    }

    /* ======================================================
       08. PLANNER PAGE
       ====================================================== */

    function renderPage() {
        const visible = filteredTasks();

        const regular = API.sortTasks(
            visible.filter(task => !task.isPriority),
            state.sort
        );

        const priority = API.sortTasks(
            visible.filter(task => task.isPriority),
            state.sort
        );

        return `
            <section class="pt-page">
                <div class="pt-heading">
                    <div>
                        <span class="pt-eyebrow">
                            YOUR ACADEMIC ORGANIZER
                        </span>

                        <h1>My Planner ✦</h1>

                        <p>
                            Keep your tasks, deadlines, and
                            priorities in one cozy space.
                        </p>
                    </div>

                    <button
                        type="button"
                        class="pt-primary-button"
                        data-pt-add
                    >+ New Task</button>
                </div>

                ${stats()}

                <div class="pt-toolbar">
                    <div class="pt-filters">
                        ${filterButton("all", "All")}
                        ${filterButton("today", "Today")}
                        ${filterButton("upcoming", "Upcoming")}
                        ${filterButton("done", "Done")}
                    </div>

                    <div class="pt-selectors">
                        ${categoryDropdown()}
                        ${sortDropdown()}
                    </div>
                </div>

                <div class="pt-board">
                    <section
                        class="pt-column pt-main-column"
                        data-pt-dropzone="regular"
                        aria-label="Regular tasks"
                    >
                        <div class="pt-column-heading">
                            <div>
                                <h2>Task List</h2>
                                <p>
                                    Drag tasks to Priority to pin them.
                                </p>
                            </div>

                            <span class="pt-count">
                                ${regular.length}
                            </span>
                        </div>

                        <div class="pt-column-content">
                            ${regular.length
                                ? regular.map(task =>
                                    taskCard(task)
                                ).join("")
                                : `
                                    <div class="pt-empty">
                                        <span>✧</span>
                                        <strong>No tasks here</strong>
                                        <p>
                                            Your regular tasks
                                            will appear here.
                                        </p>
                                    </div>
                                `
                            }
                        </div>
                    </section>

                    <section
                        class="pt-column pt-priority-column"
                        data-pt-dropzone="priority"
                        aria-label="Priority tasks"
                    >
                        <div class="pt-column-heading">
                            <div>
                                <h2>📌 Priority Board</h2>
                                <p>
                                    Your most important tasks.
                                    Drag them back to unpin.
                                </p>
                            </div>

                            <span class="pt-count">
                                ${priority.length}
                            </span>
                        </div>

                        <div class="pt-column-content">
                            ${priority.length
                                ? priority.map(task =>
                                    taskCard(task)
                                ).join("")
                                : `
                                    <div class="pt-empty">
                                        <span>📌</span>
                                        <strong>
                                            Nothing pinned yet
                                        </strong>
                                        <p>
                                            Drag a task here
                                            or use its star button.
                                        </p>
                                    </div>
                                `
                            }
                        </div>
                    </section>
                </div>

                <div class="pt-footer">
                    <span>
                        Tasks are saved in this browser.
                    </span>

                    <div class="pt-footer-actions">
                        <button
                            type="button"
                            class="pt-text-button"
                            data-pt-export
                        >Export Backup</button>

                        <button
                            type="button"
                            class="pt-text-button"
                            data-pt-import
                        >Import Backup</button>

                        <input
                            type="file"
                            accept=".json,application/json"
                            data-pt-import-file
                            hidden
                        >
                    </div>
                </div>
            </section>
        `;
    }

    /* ======================================================
       09. DASHBOARD WIDGET
       ====================================================== */

    function renderWidget() {
        const data = API.getStats();
        const upcoming = API.getDashboardTasks(4);

        return `
            <aside class="pt-widget">
                <div class="pt-widget-heading">
                    <div>
                        <span class="pt-eyebrow">
                            YOUR PLANNER
                        </span>

                        <h2>My Tasks ✦</h2>
                    </div>

                    <button
                        type="button"
                        class="pt-icon-button"
                        data-pt-open-page
                        aria-label="Open full planner"
                        title="Open Planner"
                    >↗</button>
                </div>

                <div class="pt-widget-stats">
                    <div>
                        <small>Today</small>
                        <strong>${data.today}</strong>
                    </div>

                    <div>
                        <small>Priority</small>
                        <strong>${data.priority}</strong>
                    </div>
                </div>

                <div class="pt-widget-list">
                    <h3>Up Next</h3>

                    ${upcoming.length
                        ? upcoming.map(task =>
                            taskCard(task, true)
                        ).join("")
                        : `
                            <div class="pt-widget-empty">
                                ✿ You're all caught up!
                            </div>
                        `
                    }
                </div>

                <div class="pt-widget-footer">
                    <button
                        type="button"
                        class="pt-text-button"
                        data-pt-add
                    >+ New Task</button>

                    <button
                        type="button"
                        class="pt-text-button"
                        data-pt-open-page
                    >Open Planner ↗</button>
                </div>
            </aside>
        `;
    }

    /* ======================================================
       10. REFRESH
       ====================================================== */

    function refresh() {
        closeDropdowns();

        $$("[data-pandora-tasks-page]").forEach(container => {
            container.innerHTML = renderPage();
        });

        $$("[data-pandora-tasks-widget]").forEach(container => {
            container.innerHTML = renderWidget();
        });
    }

    /* ======================================================
       11. TASK MODAL
       ====================================================== */

    const modal = document.createElement("div");

    modal.className = "pt-modal-backdrop";
    modal.hidden = true;

    modal.innerHTML = `
        <div
            class="pt-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="pt-modal-title"
        >
            <div class="pt-modal-header">
                <h2 id="pt-modal-title">New Task</h2>

                <button
                    type="button"
                    class="pt-icon-button"
                    data-pt-close
                    aria-label="Close task editor"
                >×</button>
            </div>

            <form id="pt-task-form" class="pt-task-form">
                <label>
                    Task Title
                    <input
                        name="title"
                        type="text"
                        required
                        maxlength="180"
                        placeholder="What needs to be done?"
                    >
                </label>

                <div class="pt-form-grid">
                    <label>
                        Deadline
                        <input
                            name="date"
                            type="date"
                            required
                        >
                    </label>

                    <label>
                        Time (Optional)
                        <input
                            name="time"
                            type="time"
                        >
                    </label>
                </div>

                <label>
                    Category
                    <select name="category"></select>
                </label>

                <label>
                    Notes (Optional)
                    <textarea
                        name="notes"
                        rows="3"
                        maxlength="3000"
                        placeholder="Additional reminders..."
                    ></textarea>
                </label>

                <label class="pt-checkbox-label">
                    <input
                        name="priority"
                        type="checkbox"
                    >
                    Pin to Priority Board
                </label>

                <div class="pt-modal-actions">
                    <button
                        type="button"
                        class="pt-secondary-button"
                        data-pt-close
                    >Cancel</button>

                    <button
                        type="submit"
                        class="pt-primary-button"
                    >Save Task</button>
                </div>
            </form>
        </div>
    `;

    document.body.appendChild(modal);

    const form = $("#pt-task-form", modal);

    let previousFocus = null;

    function openModal(taskId = null) {
        const task = taskId
            ? API.getTasks().find(item => item.id === taskId)
            : null;

        if (taskId && !task) return;

        closeDropdowns();

        state.editingId = task?.id || null;
        previousFocus = document.activeElement;

        $("#pt-modal-title", modal).textContent =
            task ? "Edit Task" : "New Task";

        form.elements.title.value = task?.title || "";

        form.elements.date.value =
            task?.date || API.localDate();

        form.elements.time.value = task?.time || "";

        form.elements.category.innerHTML = categoryOptions(
            task?.category || ""
        );

        form.elements.notes.value = task?.notes || "";

        form.elements.priority.checked =
            Boolean(task?.isPriority);

        modal.hidden = false;

        document.body.classList.add("pt-modal-open");

        form.elements.title.focus();
    }

    function closeModal() {
        if (modal.hidden) return;

        modal.hidden = true;

        document.body.classList.remove("pt-modal-open");

        state.editingId = null;

        if (previousFocus?.isConnected) {
            previousFocus.focus();
        }

        previousFocus = null;
    }

    form.addEventListener("submit", event => {
        event.preventDefault();

        const data = {
            title: form.elements.title.value,
            date: form.elements.date.value,
            time: form.elements.time.value,
            category: form.elements.category.value,
            notes: form.elements.notes.value,
            isPriority: form.elements.priority.checked
        };

        try {
            const result = state.editingId
                ? API.updateTask(state.editingId, data)
                : API.createTask(data);

            if (!result) {
                alert("Unable to save task. Check browser storage.");
                return;
            }

            closeModal();
            refresh();
        } catch (error) {
            alert(error.message);
        }
    });

    /* ======================================================
       12. OTHER CLICK ACTIONS

       Kept in bubbling phase.
       Dropdown clicks are handled separately above.
       ====================================================== */

    document.addEventListener("click", event => {
        const target = event.target;

        if (!(target instanceof Element)) return;

        if (target === modal) {
            closeModal();
            return;
        }

        if (target.closest("[data-pt-close]")) {
            closeModal();
            return;
        }

        if (target.closest("[data-pt-add]")) {
            openModal();
            return;
        }

        if (target.closest("[data-pt-open-page]")) {
            if (typeof state.navigate === "function") {
                state.navigate();
            }
            return;
        }

        const edit = target.closest("[data-pt-edit]");

        if (edit) {
            openModal(edit.dataset.ptEdit);
            return;
        }

        const remove = target.closest("[data-pt-delete]");

        if (remove) {
            const id = remove.dataset.ptDelete;

            const task = API.getTasks().find(
                item => item.id === id
            );

            if (task && confirm(`Delete "${task.title}"?`)) {
                API.deleteTask(id);
            }

            return;
        }

        const priority = target.closest(
            "[data-pt-priority]"
        );

        if (priority) {
            API.togglePriority(
                priority.dataset.ptPriority
            );
            return;
        }

        const filter = target.closest("[data-pt-filter]");

        if (filter) {
            state.filter = filter.dataset.ptFilter;
            refresh();
            return;
        }

        if (target.closest("[data-pt-export]")) {
            exportBackup();
            return;
        }

        if (target.closest("[data-pt-import]")) {
            $("[data-pt-import-file]")?.click();
        }
    });

    /* ======================================================
       13. CHANGE HANDLERS
       ====================================================== */

    document.addEventListener("change", async event => {
        const target = event.target;

        if (!(target instanceof Element)) return;

        if (target.matches("[data-pt-complete]")) {
            API.completeTask(
                target.dataset.ptComplete,
                target.checked
            );

            return;
        }

        if (target.matches("[data-pt-import-file]")) {
            const file = target.files?.[0];

            if (file) {
                await importBackup(file);
            }

            target.value = "";
        }
    });

    /* ======================================================
       14. KEYBOARD ACCESSIBILITY
       ====================================================== */

    function handleDropdownKeyboard(event) {
        const target = event.target;

        if (!(target instanceof Element)) {
            return false;
        }

        const dropdown = target.closest(
            ".pt-custom-dropdown"
        );

        if (!dropdown) return false;

        const trigger = target.closest(
            "[data-pt-dropdown-trigger]"
        );

        const option = target.closest(
            "[data-pt-dropdown-option]"
        );

        const options = $$(
            "[data-pt-dropdown-option]",
            dropdown
        );

        if (trigger) {
            if (
                event.key === "Enter" ||
                event.key === " "
            ) {
                event.preventDefault();
                event.stopPropagation();

                if (dropdown.classList.contains("open")) {
                    closeDropdowns();
                } else {
                    openDropdown(dropdown);
                }

                return true;
            }

            if (event.key === "ArrowDown") {
                event.preventDefault();
                openDropdown(dropdown, true);
                return true;
            }

            if (event.key === "ArrowUp") {
                event.preventDefault();
                openDropdown(dropdown, true, true);
                return true;
            }

            if (event.key === "Escape") {
                closeDropdowns(true);
                return true;
            }
        }

        if (!option) return false;

        const index = options.indexOf(option);

        if (event.key === "ArrowDown") {
            event.preventDefault();

            options[
                Math.min(index + 1, options.length - 1)
            ]?.focus();

            return true;
        }

        if (event.key === "ArrowUp") {
            event.preventDefault();

            options[
                Math.max(index - 1, 0)
            ]?.focus();

            return true;
        }

        if (event.key === "Home") {
            event.preventDefault();
            options[0]?.focus();
            return true;
        }

        if (event.key === "End") {
            event.preventDefault();
            options[options.length - 1]?.focus();
            return true;
        }

        if (
            event.key === "Enter" ||
            event.key === " "
        ) {
            event.preventDefault();
            event.stopPropagation();

            chooseDropdownOption(option);
            return true;
        }

        if (event.key === "Escape") {
            event.preventDefault();
            closeDropdowns(true);
            return true;
        }

        if (event.key === "Tab") {
            closeDropdowns();
        }

        return false;
    }

    document.addEventListener(
        "keydown",
        event => {
            if (handleDropdownKeyboard(event)) {
                return;
            }

            if (event.key === "Escape") {
                if (!modal.hidden) {
                    event.preventDefault();
                    closeModal();
                    return;
                }

                if ($(".pt-custom-dropdown.open")) {
                    event.preventDefault();
                    closeDropdowns(true);
                }

                return;
            }

            if (
                modal.hidden ||
                event.key !== "Tab"
            ) {
                return;
            }

            const controls = $$(
                "input:not([disabled]), " +
                "select:not([disabled]), " +
                "textarea:not([disabled]), " +
                "button:not([disabled])",
                modal
            ).filter(element =>
                element.getClientRects().length > 0
            );

            if (!controls.length) return;

            const first = controls[0];
            const last = controls[controls.length - 1];

            if (
                event.shiftKey &&
                document.activeElement === first
            ) {
                event.preventDefault();
                last.focus();
            } else if (
                !event.shiftKey &&
                document.activeElement === last
            ) {
                event.preventDefault();
                first.focus();
            }
        },
        true
    );

    /* ======================================================
       15. PRIORITY DRAG AND DROP
       ====================================================== */

    document.addEventListener("dragstart", event => {
        const target = event.target;

        if (!(target instanceof Element)) return;

        const card = target.closest(
            ".pt-page .pt-task[draggable='true']"
        );

        if (!card) return;

        state.draggedId = card.dataset.taskId;

        card.classList.add("pt-dragging");

        if (event.dataTransfer) {
            event.dataTransfer.effectAllowed = "move";

            event.dataTransfer.setData(
                "text/plain",
                state.draggedId
            );
        }
    });

    document.addEventListener("dragover", event => {
        const target = event.target;

        if (!(target instanceof Element)) return;

        const zone = target.closest(
            "[data-pt-dropzone]"
        );

        if (!zone || !state.draggedId) return;

        event.preventDefault();

        if (event.dataTransfer) {
            event.dataTransfer.dropEffect = "move";
        }

        $$("[data-pt-dropzone]").forEach(element => {
            element.classList.toggle(
                "pt-drag-over",
                element === zone
            );
        });
    });

    document.addEventListener("drop", event => {
        const target = event.target;

        if (!(target instanceof Element)) return;

        const zone = target.closest(
            "[data-pt-dropzone]"
        );

        if (!zone || !state.draggedId) return;

        event.preventDefault();

        const isPriority =
            zone.dataset.ptDropzone === "priority";

        API.setPriority(
            state.draggedId,
            isPriority
        );

        state.draggedId = null;

        $$("[data-pt-dropzone]").forEach(element => {
            element.classList.remove("pt-drag-over");
        });
    });

    document.addEventListener("dragend", () => {
        state.draggedId = null;

        $$(".pt-dragging").forEach(element => {
            element.classList.remove("pt-dragging");
        });

        $$(".pt-drag-over").forEach(element => {
            element.classList.remove("pt-drag-over");
        });
    });

    /* ======================================================
       16. BACKUP EXPORT
       ====================================================== */

    function exportBackup() {
        const contents = JSON.stringify(
            API.exportData(),
            null,
            2
        );

        const blob = new Blob(
            [contents],
            { type: "application/json" }
        );

        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");

        link.href = url;
        link.download =
            `pandora-tasks-${API.localDate()}.json`;

        document.body.appendChild(link);
        link.click();
        link.remove();

        setTimeout(() => {
            URL.revokeObjectURL(url);
        }, 1000);
    }

    /* ======================================================
       17. BACKUP IMPORT
       ====================================================== */

    async function importBackup(file) {
        if (file.size > 5 * 1024 * 1024) {
            alert("Backup file is too large.");
            return;
        }

        try {
            const data = JSON.parse(await file.text());

            const shouldReplace = confirm(
                "Replace your existing tasks with this backup?\n\n" +
                "OK = Replace existing tasks\n" +
                "Cancel = Keep existing tasks and merge"
            );

            if (!shouldReplace) {
                const merge = confirm(
                    "Merge imported tasks with your current tasks?"
                );

                if (!merge) return;
            }

            const success = API.importData(
                data,
                shouldReplace
            );

            if (!success) {
                alert("Unable to import backup.");
                return;
            }

            refresh();

            alert("Task backup imported successfully.");
        } catch (error) {
            alert(`Import failed: ${error.message}`);
        }
    }

    /* ======================================================
       18. SYNCHRONIZATION
       ====================================================== */

    document.addEventListener(
        API.CHANGE_EVENT,
        refresh
    );

    window.addEventListener("storage", event => {
        if (
            event.key === API.STORAGE_KEY ||
            event.key === API.CATEGORY_KEY
        ) {
            refresh();
        }
    });

    /* ======================================================
       19. PUBLIC API
       ====================================================== */

    window.PandoraTasksUI = Object.freeze({
        renderPage,
        renderWidget,
        refresh,
        openModal,
        closeModal,

        setNavigator(callback) {
            state.navigate =
                typeof callback === "function"
                    ? callback
                    : null;
        }
    });

    console.info(
        "Pandora Tasks UI loaded — dropdown click fix."
    );
})();
