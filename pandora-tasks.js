
/* ==========================================
   PANDORA V.3 — TASKS MODULE
   Step 1: Independent Task Engine

   No external libraries.
   No changes to Pandora's existing pages.
   ========================================== */

(() => {
    "use strict";

    if (window.PandoraTasks) {
        return;
    }

    const STORAGE_KEY = "pandora_tasks_v1";
    const CATEGORY_KEY = "pandora_task_categories_v1";
    const CHANGE_EVENT = "pandora:tasks-changed";

    const DEFAULT_CATEGORIES = [
        { name: "Study", color: "#7aa9cf" },
        { name: "Errand", color: "#e4b576" },
        { name: "Personal", color: "#d99ebd" },
        { name: "Project", color: "#a68ccb" }
    ];

    const ALLOWED_FILTERS = [
        "all",
        "today",
        "upcoming",
        "done"
    ];

    function readStorage(key, fallback) {
        try {
            const value = localStorage.getItem(key);

            return value === null
                ? fallback
                : JSON.parse(value);
        } catch (error) {
            console.warn("Unable to read task storage.", error);
            return fallback;
        }
    }

    function writeStorage(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (error) {
            console.error("Unable to save task data.", error);
            return false;
        }
    }

    function announceChange() {
        document.dispatchEvent(
            new CustomEvent(CHANGE_EVENT, {
                detail: {
                    tasks: getTasks(),
                    categories: getCategories()
                }
            })
        );
    }

    function localDate(date = new Date()) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");

        return `${year}-${month}-${day}`;
    }

    function validDate(value) {
        if (typeof value !== "string") {
            return false;
        }

        if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
            return false;
        }

        const date = new Date(`${value}T12:00:00`);

        return !Number.isNaN(date.getTime()) &&
            localDate(date) === value;
    }

    function validTime(value) {
        return value === "" ||
            /^([01]\d|2[0-3]):[0-5]\d$/.test(value);
    }

    function makeId() {
        if (typeof crypto !== "undefined" && crypto.randomUUID) {
            return crypto.randomUUID();
        }

        return `task-${Date.now()}-${Math.random()
            .toString(36)
            .slice(2, 10)}`;
    }

    function getTasks() {
        const data = readStorage(STORAGE_KEY, []);

        if (!Array.isArray(data)) {
            return [];
        }

        return data.filter((task) =>
            task &&
            typeof task === "object" &&
            typeof task.id === "string" &&
            typeof task.title === "string"
        );
    }

    function getCategories() {
        const saved = readStorage(CATEGORY_KEY, null);

        if (!Array.isArray(saved)) {
            return DEFAULT_CATEGORIES.map((category) => ({
                ...category
            }));
        }

        return saved.filter((category) =>
            category &&
            typeof category.name === "string" &&
            typeof category.color === "string" &&
            /^#[0-9a-fA-F]{6}$/.test(category.color)
        );
    }

    function saveTasks(tasks) {
        if (!writeStorage(STORAGE_KEY, tasks)) {
            return false;
        }

        announceChange();
        return true;
    }

    function saveCategories(categories) {
        if (!writeStorage(CATEGORY_KEY, categories)) {
            return false;
        }

        announceChange();
        return true;
    }

    function normalizeTitle(value) {
        return String(value ?? "").trim().slice(0, 180);
    }

    function normalizeNotes(value) {
        return String(value ?? "").trim().slice(0, 3000);
    }

    function normalizeCategory(value) {
        const requested = String(value ?? "").trim();
        const categories = getCategories();

        if (categories.some((category) =>
            category.name === requested
        )) {
            return requested;
        }

        return categories[0]?.name || "General";
    }

    function createTask(data = {}) {
        const title = normalizeTitle(data.title);

        if (!title) {
            throw new Error("Task title is required.");
        }

        const date = data.date || localDate();

        if (!validDate(date)) {
            throw new Error("Enter a valid task date.");
        }

        const time = String(data.time ?? "");

        if (!validTime(time)) {
            throw new Error("Enter a valid task time.");
        }

        const task = {
            id: makeId(),
            title,
            date,
            time,
            category: normalizeCategory(data.category),
            notes: normalizeNotes(data.notes),
            done: false,
            isPriority: Boolean(data.isPriority),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            completedAt: null
        };

        const tasks = getTasks();

        return saveTasks([...tasks, task])
            ? task
            : null;
    }

    function updateTask(id, changes = {}) {
        const tasks = getTasks();
        const index = tasks.findIndex((task) =>
            task.id === id
        );

        if (index === -1) {
            return null;
        }

        const current = tasks[index];
        const next = { ...current };

        if (Object.hasOwn(changes, "title")) {
            next.title = normalizeTitle(changes.title);

            if (!next.title) {
                throw new Error("Task title cannot be empty.");
            }
        }

        if (Object.hasOwn(changes, "date")) {
            if (!validDate(changes.date)) {
                throw new Error("Invalid task date.");
            }

            next.date = changes.date;
        }

        if (Object.hasOwn(changes, "time")) {
            const time = String(changes.time ?? "");

            if (!validTime(time)) {
                throw new Error("Invalid task time.");
            }

            next.time = time;
        }

        if (Object.hasOwn(changes, "category")) {
            next.category = normalizeCategory(
                changes.category
            );
        }

        if (Object.hasOwn(changes, "notes")) {
            next.notes = normalizeNotes(changes.notes);
        }

        if (Object.hasOwn(changes, "done")) {
            next.done = Boolean(changes.done);

            next.completedAt = next.done
                ? current.completedAt || new Date().toISOString()
                : null;
        }

        if (Object.hasOwn(changes, "isPriority")) {
            next.isPriority = Boolean(changes.isPriority);
        }

        next.updatedAt = new Date().toISOString();

        tasks[index] = next;

        return saveTasks(tasks) ? next : null;
    }

    function deleteTask(id) {
        const tasks = getTasks();

        if (!tasks.some((task) => task.id === id)) {
            return false;
        }

        return saveTasks(
            tasks.filter((task) => task.id !== id)
        );
    }

    function completeTask(id, done = true) {
        return updateTask(id, {
            done: Boolean(done)
        });
    }

    function toggleComplete(id) {
        const task = getTasks().find((item) =>
            item.id === id
        );

        if (!task) {
            return null;
        }

        return completeTask(id, !task.done);
    }

    function setPriority(id, isPriority = true) {
        return updateTask(id, {
            isPriority: Boolean(isPriority)
        });
    }

    function togglePriority(id) {
        const task = getTasks().find((item) =>
            item.id === id
        );

        if (!task) {
            return null;
        }

        return setPriority(id, !task.isPriority);
    }

    function addCategory(name, color = "#a68ccb") {
        const normalized = String(name ?? "").trim().slice(0, 50);

        if (!normalized) {
            throw new Error("Category name is required.");
        }

        if (!/^#[0-9a-fA-F]{6}$/.test(color)) {
            throw new Error("Invalid category color.");
        }

        const categories = getCategories();

        if (categories.some((category) =>
            category.name.toLowerCase() === normalized.toLowerCase()
        )) {
            throw new Error("Category already exists.");
        }

        const category = {
            name: normalized,
            color
        };

        return saveCategories([...categories, category])
            ? category
            : null;
    }

    function updateCategory(name, changes = {}) {
        const categories = getCategories();
        const index = categories.findIndex((category) =>
            category.name === name
        );

        if (index === -1) {
            return null;
        }

        const nextName = String(
            changes.name ?? name
        ).trim().slice(0, 50);

        const nextColor = String(
            changes.color ?? categories[index].color
        );

        if (!nextName) {
            throw new Error("Category name cannot be empty.");
        }

        if (!/^#[0-9a-fA-F]{6}$/.test(nextColor)) {
            throw new Error("Invalid category color.");
        }

        if (categories.some((category, position) =>
            position !== index &&
            category.name.toLowerCase() === nextName.toLowerCase()
        )) {
            throw new Error("Category already exists.");
        }

        const updated = {
            name: nextName,
            color: nextColor
        };

        const tasks = getTasks().map((task) =>
            task.category === name
                ? {
                    ...task,
                    category: nextName,
                    updatedAt: new Date().toISOString()
                }
                : task
        );

        // Save tasks first, then categories.
        if (!writeStorage(STORAGE_KEY, tasks)) {
            return null;
        }

        return saveCategories(
            categories.map((category, position) =>
                position === index ? updated : category
            )
        ) ? updated : null;
    }

    function deleteCategory(name) {
        const categories = getCategories();

        if (!categories.some((category) =>
            category.name === name
        )) {
            return false;
        }

        const remaining = categories.filter((category) =>
            category.name !== name
        );

        const replacement = remaining[0]?.name || "General";

        const tasks = getTasks().map((task) =>
            task.category === name
                ? {
                    ...task,
                    category: replacement,
                    updatedAt: new Date().toISOString()
                }
                : task
        );

        if (!writeStorage(STORAGE_KEY, tasks)) {
            return false;
        }

        return saveCategories(remaining);
    }

    function sortTasks(tasks, mode = "date-asc") {
        const copy = [...tasks];

        if (mode === "date-desc") {
            return copy.sort((a, b) =>
                `${b.date}T${b.time || "23:59"}`
                    .localeCompare(`${a.date}T${a.time || "23:59"}`)
            );
        }

        if (mode === "newest") {
            return copy.sort((a, b) =>
                String(b.createdAt || "")
                    .localeCompare(String(a.createdAt || ""))
            );
        }

        if (mode === "oldest") {
            return copy.sort((a, b) =>
                String(a.createdAt || "")
                    .localeCompare(String(b.createdAt || ""))
            );
        }

        return copy.sort((a, b) =>
            `${a.date}T${a.time || "23:59"}`
                .localeCompare(`${b.date}T${b.time || "23:59"}`)
        );
    }

    function filterTasks(filter = "all", options = {}) {
        const selected = ALLOWED_FILTERS.includes(filter)
            ? filter
            : "all";

        const today = localDate();

        let tasks = getTasks().filter((task) => {
            if (selected === "done") {
                return task.done;
            }

            if (task.done) {
                return false;
            }

            if (selected === "today") {
                return task.date === today;
            }

            if (selected === "upcoming") {
                return task.date > today;
            }

            return true;
        });

        if (options.category) {
            tasks = tasks.filter((task) =>
                task.category === options.category
            );
        }

        if (options.priority === true) {
            tasks = tasks.filter((task) =>
                task.isPriority
            );
        }

        if (options.priority === false) {
            tasks = tasks.filter((task) =>
                !task.isPriority
            );
        }

        return sortTasks(tasks, options.sort || "date-asc");
    }

    function getStats() {
        const tasks = getTasks();
        const today = localDate();

        return {
            total: tasks.length,
            pending: tasks.filter((task) =>
                !task.done
            ).length,
            today: tasks.filter((task) =>
                !task.done && task.date === today
            ).length,
            overdue: tasks.filter((task) =>
                !task.done && task.date < today
            ).length,
            priority: tasks.filter((task) =>
                !task.done && task.isPriority
            ).length,
            completed: tasks.filter((task) =>
                task.done
            ).length
        };
    }

    function getDashboardTasks(limit = 4) {
        const today = localDate();

        const tasks = getTasks().filter((task) =>
            !task.done
        );

        const rank = (task) => {
            if (task.date < today) return 0;
            if (task.date === today) return 1;
            if (task.isPriority) return 2;
            return 3;
        };

        tasks.sort((a, b) => {
            const difference = rank(a) - rank(b);

            if (difference !== 0) {
                return difference;
            }

            return `${a.date}T${a.time || "23:59"}`
                .localeCompare(`${b.date}T${b.time || "23:59"}`);
        });

        return tasks.slice(
            0,
            Math.max(0, Math.min(20, Number(limit) || 4))
        );
    }

    function exportData() {
        return {
            format: "pandora-tasks",
            version: 1,
            exportedAt: new Date().toISOString(),
            categories: getCategories(),
            tasks: getTasks()
        };
    }

    function importData(data, replace = false) {
        if (
            !data ||
            data.format !== "pandora-tasks" ||
            data.version !== 1 ||
            !Array.isArray(data.tasks) ||
            !Array.isArray(data.categories)
        ) {
            throw new Error("Unsupported task backup format.");
        }

        if (data.tasks.length > 10000) {
            throw new Error("Backup contains too many tasks.");
        }

        const cleanCategories = data.categories
            .filter((category) =>
                category &&
                typeof category.name === "string" &&
                category.name.trim() &&
                typeof category.color === "string" &&
                /^#[0-9a-fA-F]{6}$/.test(category.color)
            )
            .map((category) => ({
                name: category.name.trim().slice(0, 50),
                color: category.color
            }));

        const existing = replace ? [] : getTasks();

        const byId = new Map(
            existing.map((task) => [task.id, task])
        );

        const knownCategories = replace
            ? cleanCategories
            : [...getCategories(), ...cleanCategories];

        const uniqueCategories = [
            ...new Map(
                knownCategories.map((category) => [
                    category.name.toLowerCase(),
                    category
                ])
            ).values()
        ];

        for (const entry of data.tasks) {
            if (
                !entry ||
                typeof entry.title !== "string" ||
                !entry.title.trim() ||
                !validDate(entry.date) ||
                !validTime(String(entry.time ?? ""))
            ) {
                continue;
            }

            const id = typeof entry.id === "string" &&
                entry.id.trim()
                ? entry.id
                : makeId();

            const cleanTask = {
                id,
                title: normalizeTitle(entry.title),
                date: entry.date,
                time: String(entry.time ?? ""),
                category: String(entry.category ?? "General").slice(0, 50),
                notes: normalizeNotes(entry.notes),
                done: Boolean(entry.done),
                isPriority: Boolean(entry.isPriority),
                createdAt: String(entry.createdAt || new Date().toISOString()),
                updatedAt: String(entry.updatedAt || new Date().toISOString()),
                completedAt: entry.done
                    ? String(entry.completedAt || new Date().toISOString())
                    : null
            };

            byId.set(id, cleanTask);
        }

        const tasks = [...byId.values()];

        if (!writeStorage(STORAGE_KEY, tasks)) {
            return false;
        }

        return saveCategories(uniqueCategories);
    }

    window.PandoraTasks = Object.freeze({
        STORAGE_KEY,
        CATEGORY_KEY,
        CHANGE_EVENT,

        localDate,
        getTasks,
        getCategories,

        createTask,
        updateTask,
        deleteTask,

        completeTask,
        toggleComplete,

        setPriority,
        togglePriority,

        addCategory,
        updateCategory,
        deleteCategory,

        sortTasks,
        filterTasks,
        getStats,
        getDashboardTasks,

        exportData,
        importData
    });

    console.info("Pandora Tasks module loaded.");
})();
