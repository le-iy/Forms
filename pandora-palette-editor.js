
/* ==========================================================
   PANDORA V.3 — CUSTOM PALETTE EDITOR

   File: pandora-palette-editor.js

   Standalone extension for Pandora's Theme Studio.

   Features:
   - 12 editable theme colors
   - Native color pickers and HEX inputs
   - Live preview across Pandora
   - Save and activate named palettes
   - Duplicate and delete personal palettes
   - Preserve existing themes and Theme Builder
   - Preserve corners, spacing and subject covers
   - Local browser storage

   Load AFTER pandora-app.js.
   ========================================================== */

(() => {
    "use strict";

    if (window.PandoraPaletteEditor) return;

    const STORAGE_KEY = "pandora_personal_palettes_v1";
    const APPEARANCE_KEY = "pandora_appearance";

    const TOKENS = [
        ["--bg", "Background"],
        ["--panel", "Main Panels"],
        ["--panel-soft", "Soft Surface"],
        ["--panel-rose", "Highlight Surface"],
        ["--text", "Primary Text"],
        ["--muted", "Muted Text"],
        ["--accent", "Accent"],
        ["--accent-strong", "Strong Accent"],
        ["--border", "Borders"],
        ["--sidebar", "Sidebar"],
        ["--tag", "Tags"],
        ["--button-text", "Button Text"]
    ];

    const PRESETS = {
        "Soft Original": [
            "#f5efea", "#fffaf7", "#f8f1ec",
            "#f2dfd7", "#4d3436", "#8f7776",
            "#c9837a", "#b86c64", "#eadfd8",
            "#fff9f5", "#efe3ea", "#ffffff"
        ],
        "Black Cherry": [
            "#21191e", "#2f252b", "#382c35",
            "#49323f", "#f7edf1", "#c6acb7",
            "#d38d93", "#e7b0b5", "#58444f",
            "#281f2c", "#473341", "#21191e"
        ],
        "Rosewood": [
            "#241b1d", "#332629", "#3d2d30",
            "#50353c", "#f9e8e5", "#c3a5a7",
            "#d58e9b", "#ecb0b9", "#63464d",
            "#2a2023", "#50343e", "#271a1e"
        ],
        "Sage Paper": [
            "#e9eee6", "#fffefa", "#f3f6ef",
            "#dce8d8", "#384b40", "#79877b",
            "#7c9c84", "#53775d", "#d3dfd2",
            "#e5ebe0", "#dce7dd", "#ffffff"
        ]
    };

    const $ = (selector, root = document) =>
        root.querySelector(selector);

    const $$ = (selector, root = document) =>
        Array.from(root.querySelectorAll(selector));

    const validHex = value =>
        /^#[0-9a-f]{6}$/i.test(String(value || ""));

    const escapeHTML = value =>
        String(value ?? "").replace(
            /[&<>"']/g,
            character => ({
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            })[character]
        );

    function readJSON(key, fallback) {
        try {
            const value = JSON.parse(
                localStorage.getItem(key)
            );

            return value ?? fallback;
        } catch {
            return fallback;
        }
    }

    function writeJSON(key, value) {
        try {
            localStorage.setItem(
                key,
                JSON.stringify(value)
            );

            return true;
        } catch {
            alert("Unable to save the palette in this browser.");
            return false;
        }
    }

    function normalizeColors(colors) {
        if (!colors || typeof colors !== "object") {
            return null;
        }

        const result = {};

        for (const [token] of TOKENS) {
            const value = colors[token];

            if (!validHex(value)) return null;

            result[token] = value.toLowerCase();
        }

        return result;
    }

    function presetColors(name) {
        const values = PRESETS[name];

        if (!values) return null;

        return Object.fromEntries(
            TOKENS.map(([token], index) => [
                token,
                values[index]
            ])
        );
    }

    function currentColors() {
        const computed = getComputedStyle(document.body);
        const fallback = presetColors("Soft Original");

        return Object.fromEntries(
            TOKENS.map(([token]) => {
                const value = computed
                    .getPropertyValue(token)
                    .trim();

                return [
                    token,
                    validHex(value)
                        ? value.toLowerCase()
                        : fallback[token]
                ];
            })
        );
    }

    /* ======================================================
       STORAGE
       ====================================================== */

    function loadStore() {
        const data = readJSON(STORAGE_KEY, {});

        const palettes = Array.isArray(data.palettes)
            ? data.palettes
                .filter(item =>
                    item &&
                    typeof item.id === "string" &&
                    typeof item.name === "string" &&
                    normalizeColors(item.colors)
                )
                .map(item => ({
                    id: item.id,
                    name: item.name,
                    colors: normalizeColors(item.colors)
                }))
            : [];

        return {
            palettes,
            activeId: typeof data.activeId === "string"
                ? data.activeId
                : null,
            appearanceSignature:
                typeof data.appearanceSignature === "string"
                    ? data.appearanceSignature
                    : null
        };
    }

    let store = loadStore();

    function saveStore() {
        return writeJSON(STORAGE_KEY, store);
    }

    function getActivePalette() {
        return store.palettes.find(
            item => item.id === store.activeId
        ) || null;
    }

    /* ======================================================
       APPEARANCE COMPATIBILITY

       Track color-affecting settings only.

       Changing density or corners does not disable a
       saved custom palette.

       Selecting another preset, Builder combination,
       accent, or background does.
       ====================================================== */

    function appearanceSignature() {
        const a = readJSON(APPEARANCE_KEY, {});

        return JSON.stringify({
            theme: a.theme || "soft",
            base: a.base || "pink",
            style: a.style || "pastel",
            mode: a.mode || "light",
            accent: a.accent || "",
            backgroundType: a.backgroundType || "default",
            backgroundColor: a.backgroundColor || "#f5efea",
            backgroundImage: a.backgroundImage || ""
        });
    }

    function checkAppearanceChanges() {
        const current = appearanceSignature();

        if (
            store.activeId &&
            store.appearanceSignature &&
            current !== store.appearanceSignature
        ) {
            store.activeId = null;
            store.appearanceSignature = null;
            saveStore();

            draft = null;
            editingId = null;

            return true;
        }

        return false;
    }

    /* ======================================================
       EDITOR STATE
       ====================================================== */

    let draft = null;
    let editingId = null;
    let expanded = false;
    let selectedPreset = "";
    let selectedSavedId = null;
    let editing = false;
    let pendingRender = false;

    const activeOnStart = getActivePalette();

    if (activeOnStart) {
        draft = { ...activeOnStart.colors };
        editingId = activeOnStart.id;
    }

    /* ======================================================
       APPLY COLORS

       Inline CSS variables are used because the main
       Pandora app already resolves themes on BODY.
       ====================================================== */

    function applyColors(colors) {
        const normalized = normalizeColors(colors);

        if (!normalized) return;

        for (const [token] of TOKENS) {
            const value = normalized[token];

            if (
                document.body.style.getPropertyValue(token)
                    .trim()
                    .toLowerCase() !== value
            ) {
                document.body.style.setProperty(
                    token,
                    value
                );
            }
        }
    }

    function restoreCurrentTheme() {
        /*
         Remove custom overrides without changing
         Pandora's stored theme selection.

         For Builder themes, Pandora already has its
         own inline variables. Its next appearance
         update restores those values.

         In the editor, we avoid manually erasing
         Builder variables because that would leave
         an incorrectly styled page.
        */

        const a = readJSON(APPEARANCE_KEY, {});

        if (a.theme === "builder") {
            /*
             Instead of forcing another copy of the
             Theme Builder generator, reload the page
             after deactivating a custom palette.
            */
            location.reload();
            return;
        }

        for (const [token] of TOKENS) {
            document.body.style.removeProperty(token);
        }

        /*
         Background overrides are managed by Pandora.
         Its background settings remain stored.
        */
        if (a.backgroundType === "color" && validHex(a.backgroundColor)) {
            document.body.style.setProperty(
                "--bg",
                a.backgroundColor
            );
        }

        if (a.accent && validHex(a.accent)) {
            document.body.style.setProperty(
                "--accent",
                a.accent
            );
        }
    }

    function syncPalette() {
        const changed = checkAppearanceChanges();

        if (changed) {
            /*
             Pandora has just applied a different theme.
             Leave its own colors alone.
            */
            return;
        }

        if (editing && draft) {
            applyColors(draft);
            return;
        }

        const active = getActivePalette();

        if (active) {
            applyColors(active.colors);
        }
    }

    /* ======================================================
       EDITOR MARKUP
       ====================================================== */

    function presetMarkup() {
        return Object.entries(PRESETS).map(
            ([name, values]) => `
                <button
                    type="button"
                    class="pe-preset ${selectedPreset === name ? "selected" : ""}"
                    data-pe-preset="${escapeHTML(name)}"
                >
                    <span class="pe-swatches">
                        ${[
                            values[0],
                            values[1],
                            values[3],
                            values[6],
                            values[7]
                        ].map(color => `
                            <i style="background:${color}"></i>
                        `).join("")}
                    </span>

                    <span class="pe-preset-label">
                        ${escapeHTML(name)}
                        ${selectedPreset === name ? " ✓" : ""}
                    </span>
                </button>
            `
        ).join("");
    }

    function tokenMarkup() {
        const colors = draft || currentColors();

        const visibleTokens = expanded
            ? TOKENS
            : TOKENS.filter(([token]) =>
                [
                    "--bg",
                    "--panel",
                    "--panel-rose",
                    "--accent",
                    "--text",
                    "--border"
                ].includes(token)
            );

        return visibleTokens.map(([token, label]) => `
            <label class="pe-token">
                <span>${escapeHTML(label)}</span>

                <span class="pe-field">
                    <input
                        type="color"
                        data-pe-picker="${token}"
                        value="${escapeHTML(colors[token])}"
                        aria-label="${escapeHTML(label)} color"
                    >

                    <input
                        type="text"
                        data-pe-hex="${token}"
                        value="${escapeHTML(colors[token])}"
                        maxlength="7"
                        spellcheck="false"
                        aria-label="${escapeHTML(label)} HEX color"
                    >
                </span>

                <small>${token}</small>
            </label>
        `).join("");
    }

    function savedMarkup() {
        if (!store.palettes.length) {
            return `
                <p class="pe-muted">
                    No personal palettes saved yet.
                </p>
            `;
        }

        const active = getActivePalette();
        const selectedId = editingId || active?.id || "";
        const selected = store.palettes.find(
            item => item.id === selectedId
        );

        return `
            <div class="pe-saved-dropdown" data-pe-dropdown>
                <button
                    type="button"
                    class="pe-saved-trigger"
                    data-pe-dropdown-trigger
                    aria-haspopup="listbox"
                    aria-expanded="false"
                >
                    <span>
                        ${escapeHTML(
                            selected?.name || "Choose a saved palette"
                        )}
                    </span>
                    <span aria-hidden="true">⌄</span>
                </button>

                <div
                    class="pe-saved-options"
                    data-pe-dropdown-menu
                    role="listbox"
                    aria-label="Saved palettes"
                    hidden
                >
                    ${store.palettes.map(item => `
                        <button
                            type="button"
                            class="pe-saved-option"
                            data-pe-select="${escapeHTML(item.id)}"
                            role="option"
                            aria-selected="${item.id === selectedId}"
                        >
                            ${escapeHTML(item.name)}
                        </button>
                    `).join("")}
                </div>
            </div>

            <div class="pe-actions">
                <button
                    type="button"
                    class="pe-button"
                    data-pe-activate
                >Apply Selected</button>

                <button
                    type="button"
                    class="pe-button"
                    data-pe-duplicate
                >Duplicate</button>

                <button
                    type="button"
                    class="pe-button"
                    data-pe-delete
                >Delete</button>
            </div>
        `;
    }

    function renderEditor() {
        const root = $("[data-pe-root]");
        if (!root) return;

        const currentName = store.palettes.find(
            item => item.id === editingId
        )?.name || "";

        const active = getActivePalette();

        root.innerHTML = `
            <div class="pe-head">
                <div>
                    <span class="pe-eyebrow">
                        PERSONAL COLOR STUDIO
                    </span>

                    <h2>Custom Palette Editor ✦</h2>

                    <p>
                        Fine-tune Pandora's colors and
                        save your own themes.
                    </p>
                </div>

                <span class="pe-status">
                    ${active
                        ? "Active: " + escapeHTML(active.name)
                        : "Preset Theme"}
                </span>
            </div>

            <div class="pe-section">
                <strong class="pe-section-title">
                    Start from a palette
                </strong>

                <div class="pe-preset-grid">
                    ${presetMarkup()}
                </div>

                <button
                    type="button"
                    class="pe-link"
                    data-pe-current
                >
                    Use current Pandora colors
                </button>
            </div>

            <div class="pe-divider"></div>

            <div class="pe-section">
                <div class="pe-section-head">
                    <strong class="pe-section-title">
                        Edit individual colors
                    </strong>

                    <button
                        type="button"
                        class="pe-link"
                        data-pe-expand
                    >
                        ${expanded
                            ? "Show essentials"
                            : "Show all 12"}
                    </button>
                </div>

                <div class="pe-token-grid">
                    ${tokenMarkup()}
                </div>
            </div>

            <div class="pe-divider"></div>

            <div class="pe-section">
                <strong class="pe-section-title">
                    Save Your Palette
                </strong>

                <label class="pe-name-label">
                    Palette name

                    <input
                        class="pe-name"
                        data-pe-name
                        maxlength="45"
                        placeholder="e.g. My Cherry Academia"
                        value="${escapeHTML(currentName)}"
                    >
                </label>

                <div class="pe-actions">
                    <button
                        type="button"
                        class="pe-button pe-primary"
                        data-pe-save
                    >
                        Save & Apply
                    </button>

                    <button
                        type="button"
                        class="pe-button"
                        data-pe-cancel
                    >
                        Cancel Preview
                    </button>
                </div>

                <p class="pe-muted">
                    Colors preview across Pandora before
                    saving. Cancel restores your selected theme.
                </p>
            </div>

            <div class="pe-divider"></div>

            <div class="pe-section">
                <strong class="pe-section-title">
                    My Saved Palettes
                </strong>

                ${savedMarkup()}
            </div>

            <div class="pe-divider"></div>

            <div class="pe-actions">
                <button
                    type="button"
                    class="pe-link"
                    data-pe-reset
                >
                    ↺ Return to Pandora Theme
                </button>
            </div>
        `;
    }

    /* ======================================================
       SETTINGS INJECTION

       Find Pandora's actual Theme Studio.
       Insert after Curated Themes / Accent Colors panel.
       ====================================================== */

    function mount() {
        const studio = $(".theme-studio");
        if (!studio) return;

        const left = studio.firstElementChild;
        if (!left) return;

        let root = $("[data-pe-root]", left);

        if (!root) {
            root = document.createElement("section");

            root.className =
                "studio-panel builder-panel pe-editor";

            root.setAttribute("data-pe-root", "");

            const firstPanel = left.querySelector(
                ".studio-panel"
            );

            if (firstPanel) {
                firstPanel.insertAdjacentElement(
                    "afterend",
                    root
                );
            } else {
                left.prepend(root);
            }

            renderEditor();
        }
    }

    /* ======================================================
       ACTIONS
       ====================================================== */

    function beginEditing(colors, id = null) {
        draft = normalizeColors(colors);
        editingId = id;
        editing = true;

        applyColors(draft);
        renderEditor();
    }

    function savePalette() {
        const input = $("[data-pe-name]");
        const name = input?.value.trim();

        if (!name) {
            alert("Please enter a palette name.");
            input?.focus();
            return;
        }

        const colors = normalizeColors(
            draft || currentColors()
        );

        if (!colors) {
            alert("Please enter valid six-digit HEX colors.");
            return;
        }

        /*
         A new name creates a new palette.
         An unchanged name updates the selected one.
        */

        const existing = store.palettes.find(
            item => item.id === editingId
        );

        let id;

        if (existing && existing.name === name) {
            id = existing.id;
            existing.colors = colors;
        } else {
            id = "palette-" +
                Date.now().toString(36) +
                "-" +
                Math.random().toString(36).slice(2, 8);

            store.palettes.push({
                id,
                name,
                colors
            });
        }

        store.activeId = id;
        store.appearanceSignature = appearanceSignature();

        if (!saveStore()) return;

        editingId = id;
        editing = false;
        selectedPreset = "";

        applyColors(colors);
        renderEditor();
    }

    function activateSaved() {
        const id = selectedSavedId || editingId || store.activeId;

        const palette = store.palettes.find(
            item => item.id === id
        );

        if (!palette) return;

        store.activeId = id;
        store.appearanceSignature = appearanceSignature();

        if (!saveStore()) return;

        draft = { ...palette.colors };
        editingId = id;
        editing = false;
        selectedPreset = "";

        applyColors(palette.colors);
        renderEditor();
    }

    function duplicateSaved() {
        const id = selectedSavedId || editingId || store.activeId;

        const original = store.palettes.find(
            item => item.id === id
        );

        if (!original) {
            alert("Choose a saved palette first.");
            return;
        }

        beginEditing(original.colors, null);

        const name = $("[data-pe-name]");

        if (name) {
            name.value = `${original.name} Copy`;
            name.focus();
        }
    }

    function deleteSaved() {
        const id = selectedSavedId || editingId || store.activeId;

        const item = store.palettes.find(
            palette => palette.id === id
        );

        if (!item) {
            alert("Choose a saved palette first.");
            return;
        }

        if (!confirm(`Delete "${item.name}"?`)) {
            return;
        }

        const wasActive = store.activeId === id;

        store.palettes = store.palettes.filter(
            palette => palette.id !== id
        );

        if (wasActive) {
            store.activeId = null;
            store.appearanceSignature = null;
        }

        if (!saveStore()) return;

        draft = null;
        editingId = null;
        editing = false;
        selectedPreset = "";

        if (wasActive) {
            restoreCurrentTheme();
        }

        renderEditor();
    }

    function cancelPreview() {
        editing = false;
        selectedPreset = "";

        const active = getActivePalette();

        if (active) {
            draft = { ...active.colors };
            editingId = active.id;
            applyColors(active.colors);
        } else {
            draft = null;
            editingId = null;
            restoreCurrentTheme();
        }

        renderEditor();
    }

    function returnToTheme() {
        store.activeId = null;
        store.appearanceSignature = null;

        if (!saveStore()) return;

        draft = null;
        editingId = null;
        editing = false;
        selectedPreset = "";

        restoreCurrentTheme();
        renderEditor();
    }

    /* ======================================================
       CLICK EVENTS

       Capture phase is limited to this editor.
       It does not interfere with Pandora's accordions,
       planner dropdowns or task buttons.
       ====================================================== */

    document.addEventListener(
        "click",
        event => {
            const target = event.target;

            if (!(target instanceof Element)) return;

            const root = target.closest("[data-pe-root]");

            if (!root) return;

            const button = target.closest("button");

            if (!button) return;

            event.preventDefault();
            event.stopImmediatePropagation();

            if (button.hasAttribute("data-pe-dropdown-trigger")) {
                const dropdown = button.closest("[data-pe-dropdown]");
                const menu = dropdown?.querySelector(
                    "[data-pe-dropdown-menu]"
                );

                if (!menu) return;

                const opening = menu.hidden;

                menu.hidden = !opening;

                button.setAttribute(
                    "aria-expanded",
                    String(opening)
                );

                return;
            }

            if (button.hasAttribute("data-pe-select")) {
                selectedSavedId = button.dataset.peSelect;

                const chosen = store.palettes.find(
                    item => item.id === selectedSavedId
                );

                const dropdown = button.closest("[data-pe-dropdown]");

                const label = dropdown?.querySelector(
                    ".pe-saved-trigger span"
                );

                if (label && chosen) {
                    label.textContent = chosen.name;
                }

                const trigger = dropdown?.querySelector(
                    "[data-pe-dropdown-trigger]"
                );

                const menu = dropdown?.querySelector(
                    "[data-pe-dropdown-menu]"
                );

                if (menu) menu.hidden = true;

                trigger?.setAttribute("aria-expanded", "false");

                return;
            }

            if (button.hasAttribute("data-pe-preset")) {
                const name = button.dataset.pePreset;

                if (!PRESETS[name]) return;

                selectedPreset = name;

                beginEditing(presetColors(name));
                return;
            }

            if (button.hasAttribute("data-pe-current")) {
                beginEditing(currentColors());
                selectedPreset = "";
                return;
            }

            if (button.hasAttribute("data-pe-expand")) {
                /*
                 Preserve draft and the palette-name field
                 before rebuilding the token inputs.
                */

                const name = $("[data-pe-name]")?.value || "";

                expanded = !expanded;
                renderEditor();

                const field = $("[data-pe-name]");
                if (field) field.value = name;

                return;
            }

            if (button.hasAttribute("data-pe-save")) {
                savePalette();
                return;
            }

            if (button.hasAttribute("data-pe-activate")) {
                activateSaved();
                return;
            }

            if (button.hasAttribute("data-pe-duplicate")) {
                duplicateSaved();
                return;
            }

            if (button.hasAttribute("data-pe-delete")) {
                deleteSaved();
                return;
            }

            if (button.hasAttribute("data-pe-cancel")) {
                cancelPreview();
                return;
            }

            if (button.hasAttribute("data-pe-reset")) {
                returnToTheme();
            }
        },
        true
    );

    /* ======================================================
       COLOR INPUT EVENTS
       ====================================================== */

    document.addEventListener(
        "input",
        event => {
            const target = event.target;

            if (!(target instanceof HTMLInputElement)) {
                return;
            }

            if (!target.closest("[data-pe-root]")) {
                return;
            }

            const token =
                target.dataset.pePicker ||
                target.dataset.peHex;

            if (!token) return;

            const value = target.value.trim();

            if (!validHex(value)) {
                target.classList.add("pe-invalid");
                return;
            }

            target.classList.remove("pe-invalid");

            if (!draft) {
                draft = currentColors();
            }

            draft[token] = value.toLowerCase();

            editing = true;
            selectedPreset = "";

            const otherSelector = target.dataset.pePicker
                ? `[data-pe-hex="${token}"]`
                : `[data-pe-picker="${token}"]`;

            const other = $(otherSelector);

            if (other) other.value = draft[token];

            applyColors(draft);
        },
        true
    );

    /* ======================================================
       THEME SWITCH DETECTION

       The main app owns these controls.
       We only clear the custom activation marker.
       Pandora still handles the actual clicks.
       ====================================================== */

    document.addEventListener(
        "click",
        event => {
            const target = event.target;

            if (!(target instanceof Element)) return;

            if (!target.closest(".theme-studio")) return;

            const nativeThemeControl = target.closest(
                "[data-theme], " +
                "[data-builder-base], " +
                "[data-builder-style], " +
                "[data-builder-mode], " +
                "[data-accent], " +
                "[data-reset-appearance], " +
                "[data-background-type], " +
                "[data-background-fit]"
            );

            if (!nativeThemeControl) return;

            /*
             Do not prevent the click.
             The existing Pandora app remains in charge.
            */

            store.activeId = null;
            store.appearanceSignature = null;

            saveStore();

            draft = null;
            editingId = null;
            editing = false;
            selectedPreset = "";
        },
        true
    );

    /* ======================================================
       EDITOR STYLES

       Every visible theme color comes from Pandora's
       existing CSS variables.
       ====================================================== */

    const style = document.createElement("style");

    style.id = "pandora-palette-editor-styles";

    style.textContent = `
        .pe-editor {
            margin-top: 20px;
            color: var(--text);
        }

        .pe-editor *,
        .pe-editor *::before,
        .pe-editor *::after {
            box-sizing: border-box;
        }

        .pe-head {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 14px;
            margin-bottom: 24px;
        }

        .pe-eyebrow {
            display: block;
            margin-bottom: 7px;
            color: var(--accent-strong);
            font-size: 10px;
            font-weight: 750;
            letter-spacing: .11em;
        }

        .pe-head h2 {
            margin: 0 0 7px;
            font: 700 23px/1.3 Georgia, serif;
        }

        .pe-head p {
            margin: 0;
            color: var(--muted);
            font-size: 12px;
            line-height: 1.6;
        }

        .pe-status {
            padding: 7px 10px;
            border: 1px solid var(--border);
            border-radius: 999px;
            background: var(--panel-soft);
            color: var(--muted);
            font-size: 10px;
        }

        .pe-section {
            display: grid;
            gap: 13px;
        }

        .pe-section-head {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
        }

        .pe-section-title {
            color: var(--text);
            font-size: 13px;
            font-weight: 750;
        }

        .pe-divider {
            height: 1px;
            margin: 22px 0;
            background: var(--border);
        }

        .pe-preset-grid {
            display: grid;
            grid-template-columns:
                repeat(2, minmax(0, 1fr));
            gap: 10px;
        }

        .pe-preset {
            display: grid;
            gap: 9px;
            min-width: 0;
            padding: 10px;

            border: 1px solid var(--border);
            border-radius: var(--small-radius);

            background: var(--panel-soft);
            color: var(--text);
            text-align: left;

            cursor: pointer;
        }

        .pe-preset:hover,
        .pe-preset.selected {
            border-color: var(--accent);
        }

        .pe-swatches {
            display: flex;
            height: 25px;
            gap: 2px;
            overflow: hidden;
            border-radius: 6px;
        }

        .pe-swatches i {
            flex: 1;
            min-width: 0;
        }

        .pe-preset-label {
            color: var(--text);
            font-size: 11px;
            font-weight: 650;
        }

        .pe-link {
            justify-self: start;
            padding: 5px 0;
            border: 0;
            background: transparent;
            color: var(--accent-strong);
            font-size: 11px;
            font-weight: 650;
            cursor: pointer;
        }

        .pe-link:hover {
            text-decoration: underline;
            text-underline-offset: 4px;
        }

        .pe-token-grid {
            display: grid;
            grid-template-columns:
                repeat(2, minmax(0, 1fr));
            gap: 14px;
        }

        .pe-token {
            display: grid;
            align-content: start;
            min-width: 0;
            gap: 6px;
        }

        .pe-token > span:first-child {
            color: var(--text);
            font-size: 11px;
            font-weight: 650;
        }

        .pe-token small {
            color: var(--muted);
            font-size: 9px;
        }

        .pe-field {
            display: flex;
            align-items: center;
            gap: 7px;
            min-width: 0;
        }

        .pe-field input[type="color"] {
            flex-shrink: 0;
            width: 38px;
            height: 38px;
            padding: 3px;
            border: 1px solid var(--border);
            border-radius: 9px;
            background: var(--panel-soft);
            cursor: pointer;
        }

        .pe-field input[type="text"] {
            width: 100%;
            min-width: 0;
            height: 38px;
            padding: 8px;
            border: 1px solid var(--border);
            border-radius: 9px;
            background: var(--panel-soft);
            color: var(--text);
            font-size: 11px;
            font-family: Consolas, monospace;
        }

        .pe-field .pe-invalid {
            border-color: #d65b73 !important;
        }

        .pe-name-label {
            display: grid;
            gap: 7px;
            color: var(--text);
            font-size: 11px;
            font-weight: 650;
        }

        .pe-name,
        .pe-saved-select {
            width: 100%;
            min-height: 42px;
            padding: 10px 12px;

            border: 1px solid var(--border);
            border-radius: var(--small-radius);

            background: var(--panel-soft);
            color: var(--text);
            font-size: 12px;
        }

        .pe-actions {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }

        .pe-button {
            min-height: 37px;
            padding: 8px 12px;

            border: 1px solid var(--border);
            border-radius: var(--small-radius);

            background: var(--panel-soft);
            color: var(--text);

            font-size: 11px;
            font-weight: 650;
            cursor: pointer;
        }

        .pe-button:hover {
            border-color: var(--accent);
        }

        .pe-button.pe-primary {
            border-color: transparent;
            background: var(--accent);
            color: var(--button-text);
        }

        .pe-muted {
            margin: 0;
            color: var(--muted);
            font-size: 10px;
            line-height: 1.6;
        }

        .pe-editor button:focus-visible,
        .pe-editor input:focus-visible,
        .pe-editor select:focus-visible {
            outline: 2px solid var(--accent-strong);
            outline-offset: 2px;
        }

        @media (max-width: 620px) {
            .pe-token-grid {
                gap: 10px;
            }

            .pe-field {
                flex-wrap: wrap;
            }

            .pe-field input[type="text"] {
                flex-basis: 100%;
            }
        }

        .pe-saved-dropdown {
            position: relative;
            width: 100%;
            z-index: 20;
        }

        .pe-saved-trigger {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;

            width: 100%;
            min-height: 42px;
            padding: 10px 13px;

            border: 1px solid var(--border);
            border-radius: var(--small-radius);

            background: var(--panel-soft);
            color: var(--text);

            font-size: 12px;
            text-align: left;
            cursor: pointer;
        }

        .pe-saved-trigger:hover {
            border-color: var(--accent);
        }

        .pe-saved-options {
            position: absolute;
            top: calc(100% + 6px);
            left: 0;
            z-index: 100;

            width: 100%;
            max-height: 230px;
            overflow-y: auto;

            padding: 5px;

            border: 1px solid var(--border);
            border-radius: var(--small-radius);

            background: var(--panel);
            box-shadow: var(--surface-shadow-hover);
        }

        .pe-saved-options[hidden] {
            display: none !important;
        }

        .pe-saved-option {
            display: block;
            width: 100%;

            padding: 10px 12px;

            border: 0;
            border-radius: 9px;

            background: transparent;
            color: var(--text);

            font-size: 12px;
            text-align: left;
            cursor: pointer;
        }

        .pe-saved-option:hover,
        .pe-saved-option:focus-visible {
            background: var(--panel-rose);
        }
    `;

    if (!document.getElementById(style.id)) {
        document.head.appendChild(style);
    }

    /* ======================================================
       WATCH SETTINGS RENDERS AND APPEARANCE UPDATES

       The main app replaces Settings markup on render.
       Reinsert only when the editor is missing.

       Watching BODY style allows a saved palette to
       survive regular Pandora appearance updates.
       ====================================================== */

    function scheduleSync() {
        if (pendingRender) return;

        pendingRender = true;

        queueMicrotask(() => {
            pendingRender = false;

            syncPalette();
            mount();
        });
    }

    const observer = new MutationObserver(scheduleSync);

    observer.observe(document.body, {
        attributes: true,
        attributeFilter: [
            "style",
            "data-theme",
            "data-corners",
            "data-density",
            "data-background"
        ],
        childList: true,
        subtree: true
    });

    window.addEventListener("storage", event => {
        if (event.key === STORAGE_KEY) {
            store = loadStore();

            const active = getActivePalette();

            editing = false;
            editingId = active?.id || null;
            draft = active ? { ...active.colors } : null;

            if (!active) {
                restoreCurrentTheme();
            } else {
                applyColors(active.colors);
            }

            renderEditor();
        }
    });

    /* ======================================================
       PUBLIC API
       ====================================================== */

    window.PandoraPaletteEditor = Object.freeze({
        mount,
        refresh: scheduleSync,

        getPalettes() {
            return store.palettes.map(item => ({
                id: item.id,
                name: item.name,
                colors: { ...item.colors }
            }));
        },

        getActivePalette() {
            const item = getActivePalette();

            return item
                ? {
                    id: item.id,
                    name: item.name,
                    colors: { ...item.colors }
                }
                : null;
        }
    });

    if (checkAppearanceChanges()) {
        draft = null;
        editingId = null;
    }

    syncPalette();
    mount();

    console.info("Pandora Custom Palette Editor ready.");
})();
