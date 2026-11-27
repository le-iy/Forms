
/* Pandora V.3 — Unified Theme Builder
   Replaces the standalone Custom Palette Editor.
   Load after pandora-app.js.
   Existing saved palette storage is retained.
*/

(() => {
  "use strict";

  if (window.PandoraPaletteEditor) return;

  const icons = window.PandoraIcons;
  const KEY = "pandora_personal_palettes_v1";
  const APP_KEY = "pandora_appearance";

  const FIELDS = [
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

  const BASE = [
    "#f5efea", "#fffaf7", "#f8f1ec",
    "#f2dfd7", "#4d3436", "#8f7776",
    "#c9837a", "#b86c64", "#eadfd8",
    "#fff9f5", "#efe3ea", "#ffffff"
  ];

  const hex = value =>
    /^#[\da-f]{6}$/i.test(String(value || ""));

  const esc = value =>
    String(value ?? "").replace(
      /[&<>"']/g,
      c => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      })[c]
    );

  const $ = (selector, root = document) =>
    root.querySelector(selector);

  function read(key, fallback) {
    try {
      return JSON.parse(
        localStorage.getItem(key)
      ) ?? fallback;
    } catch {
      return fallback;
    }
  }

  function write() {
    try {
      localStorage.setItem(
        KEY,
        JSON.stringify(store)
      );
      return true;
    } catch {
      alert("Palette could not be saved in this browser.");
      return false;
    }
  }

  function normalize(colors) {
    if (!colors || typeof colors !== "object") {
      return null;
    }

    const result = {};

    for (const [key] of FIELDS) {
      if (!hex(colors[key])) return null;
      result[key] = colors[key].toLowerCase();
    }

    return result;
  }

  function appearanceSignature() {
    const a = read(APP_KEY, {});

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

  const hangyodonPack = { id: "theme-pack-hangyodon", name: "Hangyodon", pack: "hangyodon", colors: { "--bg": "#e6f6f3", "--panel": "#fffdf5", "--panel-soft": "#eef9f7", "--panel-rose": "#f8c5ce", "--text": "#233942", "--muted": "#4b666c", "--accent": "#287982", "--accent-strong": "#185860", "--border": "#bbdcd8", "--sidebar": "#f0fbf9", "--tag": "#d0ede9", "--button-text": "#ffffff" }, icons: Object.fromEntries(Object.entries({ home: "home", subjects: "subjects", reviewers: "reviewers", practice: "practice-links", quiz: "quiz", favorites: "favorites", tasks: "tasks", settings: "settings", pdf: "pdf", form: "forms" }).map(([slot, icon]) => [slot, "hangyodon/pixel/" + icon])) };
  const raw = read(KEY, {});

  const store = {
    palettes: Array.isArray(raw.palettes)
      ? raw.palettes.filter(p =>
          p &&
          typeof p.id === "string" &&
          typeof p.name === "string" &&
          normalize(p.colors)
        ).map(p => ({
          id: p.id,
          name: p.name,
          colors: normalize(p.colors),
          icons: icons.normalize(p.icons), pack: p.pack === "hangyodon" ? p.pack : undefined
        }))
      : [],

    activeId: typeof raw.activeId === "string"
      ? raw.activeId
      : null,

    appearanceSignature:
      typeof raw.appearanceSignature === "string"
        ? raw.appearanceSignature
        : null
  };

  let draft = null;
  let draftIcons = null;
  let iconEditorOpen = false;
  const currentIcons = () => draftIcons ?? active()?.icons ?? {};
  let dirty = false;
  let expanded = false;
  let selectedId = store.activeId;
  let scheduled = false;

  const active = () =>
    store.palettes.find(
      p => p.id === store.activeId
    ) || (store.activeId === hangyodonPack.id ? hangyodonPack : null);

  function colorsFromTheme() {
    const style = getComputedStyle(document.body);

    return Object.fromEntries(
      FIELDS.map(([key], index) => {
        const value = style
          .getPropertyValue(key)
          .trim();

        return [
          key,
          hex(value)
            ? value.toLowerCase()
            : BASE[index]
        ];
      })
    );
  }

  function apply(colors) {
    if (!normalize(colors)) return;

    for (const [key] of FIELDS) {
      if (
        document.body.style
          .getPropertyValue(key)
          .trim()
          .toLowerCase() !== colors[key]
      ) {
        document.body.style.setProperty(
          key,
          colors[key]
        );
      }
    }
  }

  function resetToPandora() {
    store.activeId = null;
    store.appearanceSignature = null;
    write();

    draft = null;
    dirty = false;
    selectedId = null;

    location.reload();
  }

  function paletteSelectMarkup() {
    return store.palettes.map(p => `
      <button
        type="button"
        class="pu-saved-item ${
          selectedId === p.id ? "selected" : ""
        }"
        data-pu-select="${esc(p.id)}"
      >
        <span class="pu-saved-name">${esc(p.name)}</span><span data-pu-swatches aria-hidden="true">${["--bg", "--panel", "--accent", "--text"].map(key => `<span style="background:${esc(p.colors[key])}"></span>`).join("")}</span>${p.id === store.activeId ? `<small class="pu-theme-active">Active</small>` : ""}
      </button>
    `).join("");
  }

  function fieldsMarkup() {
    const visible = expanded
      ? FIELDS
      : FIELDS.filter(([key]) =>
          [
            "--bg",
            "--panel",
            "--panel-rose",
            "--text",
            "--accent",
            "--border"
          ].includes(key)
        );

    return visible.map(([key, title]) => {
      const color = (
        draft || colorsFromTheme()
      )[key];

      return `
        <div class="pu-field">
          <label
            class="pu-label"
            for="pu-hex-${key.slice(2)}"
          >
            ${esc(title)}
          </label>

          <div class="pu-controls">
            <input
              type="color"
              data-pu-picker="${key}"
              value="${esc(color)}"
              aria-label="${esc(title)} color picker"
            >

            <input
              id="pu-hex-${key.slice(2)}"
              type="text"
              data-pu-hex="${key}"
              value="${esc(color)}"
              maxlength="7"
              spellcheck="false"
              autocomplete="off"
              aria-label="${esc(title)} hexadecimal color"
            >
          </div>

          <small>${esc(key)}</small>
        </div>
      `;
    }).join("");
  }

  function markup() {
    return `
      <div class="pu-unified" data-pu-root>
        <div class="studio-divider"></div>

        <div class="builder-result">
          <div class="builder-result-top"><strong>Hangyodon</strong><button type="button" class="pu-secondary" data-pu-hangyodon aria-pressed="${active()?.pack === "hangyodon"}">${active()?.pack === "hangyodon" ? "Restore Hangyodon Defaults" : "Apply Hangyodon"}</button></div>
          <div class="builder-preview-colors" aria-hidden="true"><span style="background:#e6f6f3"></span><span style="background:#fffdf5"></span><span style="background:#d0ede9"></span><span style="background:#287982"></span><span style="background:#f8c5ce"></span></div>
        </div>
        <div class="studio-divider"></div>
        <div class="pu-heading">
          <div>
            <h3>4. Fine-tune Colors</h3>
            <p>
              Adjust all twelve theme colors.
              Changes preview immediately.
            </p>
          </div>

          <button
            type="button"
            class="text-action"
            data-pu-expand
          >
            ${expanded
              ? "Show essentials"
              : "Show all 12"}
          </button>
        </div>

        <div class="pu-grid">
          ${fieldsMarkup()}
        </div>

        <div class="studio-divider"></div>

        ${icons.editor(currentIcons(), iconEditorOpen, active()?.pack === "hangyodon" ? hangyodonPack.icons : null)}

        <div class="studio-divider"></div>

        <h3>6. Save Custom Theme</h3>

        <label class="pu-label" for="pu-name">
          Theme name
        </label>

        <input
          id="pu-name"
          data-pu-name
          type="text"
          maxlength="80"
          placeholder="e.g. My Cherry Academia"
          autocomplete="off"
        >

        <div class="pu-actions">
          <button
            type="button"
            class="btn"
            data-pu-save
          >
            Save &amp; Apply
          </button>

          <button
            type="button"
            class="pu-secondary"
            data-pu-cancel
          >
            Cancel Preview
          </button>
        </div>

        <div class="studio-divider"></div>

        <h3>Saved Themes</h3><p class="pu-theme-help">Save &amp; Apply keeps your current colors and icons together. To switch back later, select a saved theme and choose Apply Theme.</p>

        <div
          class="pu-saved-list"
          aria-label="Saved palettes"
        >
          ${paletteSelectMarkup() || `
            <p class="pu-empty">
              No saved palettes yet.
            </p>
          `}
        </div>

        <div class="pu-actions">
          <button
            type="button"
            class="pu-secondary"
            data-pu-apply
          >
            Apply Theme
          </button>

          <button
            type="button"
            class="pu-secondary"
            data-pu-rename
          >
            Rename
          </button>

          <button
            type="button"
            class="pu-secondary"
            data-pu-duplicate
          >
            Duplicate
          </button>

          <button
            type="button"
            class="pu-secondary"
            data-pu-delete
          >
            Delete
          </button>
        </div>

        <button
          type="button"
          class="text-action pu-return"
          data-pu-reset
        >
          ↺ Return to Pandora Theme
        </button>
      </div>
    `;
  }

  function mount() {
    const builder = $(
      ".theme-studio .builder-panel"
    );

    if (!builder) return;

    if ($("[data-pu-root]", builder)) return;

    builder.insertAdjacentHTML(
      "beforeend",
      markup()
    );
  }

  function refresh() {
    const root = $("[data-pu-root]");
    if (!root) return;

    const name = $(
      "[data-pu-name]",
      root
    )?.value || "";

    iconEditorOpen = $("[data-icon-editor]", root)?.open || false;
    root.outerHTML = markup();

    $("[data-pu-name]").value = name;
  }

  function ensureDraft() {
    if (!draft) {
      draft = colorsFromTheme();
    }

    return draft;
  }

  function activate(palette) {
    const previousId = store.activeId;
    const previousSignature = store.appearanceSignature;
    store.activeId = palette.id;
    store.appearanceSignature =
      appearanceSignature();

    if (!write()) {
      store.activeId = previousId;
      store.appearanceSignature = previousSignature;
      return false;
    }

    draftIcons = null;
    icons.apply(palette.icons);
    selectedId = palette.id;
    draft = { ...palette.colors };
    dirty = false;

    apply(draft);
    refresh();
    return true;
  }

  function chosen() {
    return store.palettes.find(
      p => p.id === selectedId
    );
  }

  function setIcon(key, value, focusSelector) {
    draftIcons = icons.normalize({ ...currentIcons(), [key]: value });
    icons.apply(draftIcons);
    refresh();
    $(focusSelector)?.focus();
  }

  document.addEventListener("input", event => {
    const input = event.target;
    if (!(input instanceof HTMLInputElement) || !input.matches("[data-icon-search]")) return;
    const query = input.value.trim().toLowerCase();
    input.closest("dialog").querySelectorAll("[data-icon-choice]").forEach(button => {
      button.hidden = !button.textContent.toLowerCase().includes(query);
    });
  });

  function click(event) {
    const target = event.target;

    if (!(target instanceof Element)) return;

    /* Customize Icons toggle */
    const summary = target.closest("[data-pu-root] [data-icon-editor] > summary");
    if (summary) {
      event.preventDefault();
      event.stopImmediatePropagation();
      const editor = summary.parentElement;
      editor.open = !editor.open;
      iconEditorOpen = editor.open;
      return;
    }

    const button = target.closest(
      "[data-pu-root] button"
    );

    if (!button) return;

    event.preventDefault();
    event.stopImmediatePropagation();

    if (button.hasAttribute("data-pu-hangyodon")) {
      if (activate(hangyodonPack)) {
        const name = $("[data-pu-name]");
        if (name && !name.value.trim()) name.value = "Hangyodon";
        $("[data-pu-hangyodon]")?.focus();
      }
      return;
    }

    if (button.dataset.iconOpen) {
      const dialog = $("[data-icon-dialog]");
      dialog.dataset.slot = button.dataset.iconOpen;
      dialog.showModal();
      $("[data-icon-search]", dialog).focus();
      return;
    }

    if (button.hasAttribute("data-icon-close")) {
      button.closest("dialog").close();
      return;
    }

    if (button.dataset.iconChoice) {
      const key = button.closest("dialog").dataset.slot;
      button.closest("dialog").close();
      setIcon(key, button.dataset.iconChoice, `[data-icon-open="${key}"]`);
      return;
    }

    if (button.dataset.iconReset) {
      const key = button.dataset.iconReset;
      setIcon(key, active()?.pack === "hangyodon" ? hangyodonPack.icons[key] : null, `[data-icon-open="${key}"]`);
      return;
    }

    if (button.hasAttribute("data-pu-select")) {
      selectedId = button.dataset.puSelect;
      refresh();
      return;
    }

    if (button.hasAttribute("data-pu-expand")) {
      expanded = !expanded;
      refresh();
      return;
    }

    if (button.hasAttribute("data-pu-save")) {
      const name = $(
        "[data-pu-name]"
      )?.value.trim();

      if (!name) {
        alert("Enter a palette name first.");
        $("[data-pu-name]")?.focus();
        return;
      }

      const colors = normalize(
        ensureDraft()
      );

      if (!colors) {
        alert("Some HEX colors are invalid.");
        return;
      }

      const palette = {
        id:
          "palette-" +
          Date.now() +
          "-" +
          Math.random().toString(36).slice(2, 8),
        name,
        colors,
        icons: icons.normalize(currentIcons()), pack: active()?.pack
      };

      store.palettes.push(palette);
      if (!activate(palette)) store.palettes.pop();
      return;
    }

    if (button.hasAttribute("data-pu-apply")) {
      const palette = chosen();

      if (palette) {
        activate(palette);
      }
      return;
    }

    if (button.hasAttribute("data-pu-rename")) {
      const palette = chosen();
      if (!palette) return;

      const name = prompt(
        "Rename palette:",
        palette.name
      )?.trim();

      if (!name) return;

      palette.name = name.slice(0, 80);
      write();
      refresh();
      return;
    }

    if (button.hasAttribute("data-pu-duplicate")) {
      const palette = chosen();
      if (!palette) return;

      const copy = {
        id: "palette-" + Date.now(),
        name: palette.name + " Copy",
        colors: { ...palette.colors },
        icons: { ...palette.icons }, pack: palette.pack
      };

      store.palettes.push(copy);
      selectedId = copy.id;

      write();
      refresh();
      return;
    }

    if (button.hasAttribute("data-pu-delete")) {
      const palette = chosen();

      if (
        !palette ||
        !confirm(
          `Delete palette "${palette.name}"?`
        )
      ) {
        return;
      }

      store.palettes = store.palettes.filter(
        item => item.id !== palette.id
      );

      const wasActive =
        store.activeId === palette.id;

      selectedId = null;

      if (wasActive) {
        store.activeId = null;
        store.appearanceSignature = null;
      }

      write();

      if (wasActive) {
        location.reload();
        return;
      }

      refresh();
      return;
    }

    if (button.hasAttribute("data-pu-cancel")) {
      location.reload();
      return;
    }
    if (button.hasAttribute("data-pu-reset")) {
      resetToPandora();
    }
  }

  document.addEventListener(
    "click",
    click,
    true
  );

  document.addEventListener(
    "input",
    event => {
      const target = event.target;

      if (
        !(target instanceof HTMLInputElement) ||
        !target.closest("[data-pu-root]")
      ) {
        return;
      }

      const token =
        target.dataset.puPicker ||
        target.dataset.puHex;

      if (!token) return;

      const value = target.value.trim();

      if (!hex(value)) {
        target.classList.add("pu-invalid");
        return;
      }

      target.classList.remove("pu-invalid");

      ensureDraft()[token] =
        value.toLowerCase();

      dirty = true;

      const other = target.dataset.puPicker
        ? $(`[data-pu-hex="${token}"]`)
        : $(`[data-pu-picker="${token}"]`);

      if (other && other !== target) {
        other.value = value;
      }

      apply(draft);
    },
    true
  );

  document.addEventListener(
    "change",
    event => {
      const target = event.target;

      if (!(target instanceof Element)) return;

      if (
        target.matches("[data-pu-picker]") &&
        hex(target.value)
      ) {
        ensureDraft()[
          target.dataset.puPicker
        ] = target.value.toLowerCase();

        dirty = true;

        const other = $(
          `[data-pu-hex="${target.dataset.puPicker}"]`
        );

        if (other) {
          other.value = target.value;
        }

        apply(draft);
      }
    },
    true
  );

  // Native Theme Builder controls remain owned
  // by Pandora's main application.

  document.addEventListener(
    "click",
    event => {
      const target = event.target;

      if (!(target instanceof Element)) return;

      if (target.closest("[data-pu-root]")) {
        return;
      }

      const control = target.closest(
        "button[data-theme], " +
        "[data-builder-base], " +
        "[data-builder-style], " +
        "[data-builder-mode], " +
        "[data-accent], " +
        "[data-background-type], " +
        "[data-background-fit], " +
        "[data-reset-appearance]"
      );

      if (!control) return;

      store.activeId = null;
      store.appearanceSignature = null;

      draft = null;
      draftIcons = null;
      dirty = false;
      selectedId = null;

      write();
    },
    true
  );

  function sync() {
    if (
      store.activeId &&
      store.appearanceSignature !==
        appearanceSignature()
    ) {
      store.activeId = null;
      store.appearanceSignature = null;

      draft = null;
      draftIcons = null;
      dirty = false;

      write();
    }

    if (dirty && draft) {
      apply(draft);
    } else {
      const palette = active();

      if (palette) {
        apply(palette.colors);
      }
    }

    icons.apply(currentIcons());
    mount();
  }

  const observer = new MutationObserver(() => {
    if (scheduled) return;

    scheduled = true;

    queueMicrotask(() => {
      scheduled = false;
      sync();
    });
  });

  observer.observe(document.body, {
    subtree: true,
    childList: true,
    attributes: true,
    attributeFilter: [
      "style",
      "data-theme"
    ]
  });

  const style = document.createElement("style");

  style.id = "pandora-unified-editor-styles";

  style.textContent = `
    .pu-unified {
      margin-top: 22px;
      color: var(--text);
    }

    .pu-unified h3 {
      font: 700 19px Georgia, serif;
      margin: 0 0 12px;
    }

    .pu-heading {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      flex-wrap: wrap;
    }

    .pu-heading p {
      color: var(--muted);
      font-size: 12px;
      margin: 0 0 12px;
    }

    .pu-grid {
      display: grid;
      grid-template-columns: repeat(
        2,
        minmax(0, 1fr)
      );
      gap: 12px 16px;
    }

    .pu-field {
      min-width: 0;
    }

    .pu-label {
      display: block;
      font-size: 12px;
      font-weight: 650;
      margin: 0 0 6px;
    }

    .pu-controls {
      display: flex;
      align-items: center;
      gap: 7px;
      min-width: 0;
    }

    .pu-controls input[type="color"] {
      width: 39px;
      height: 39px;
      flex-shrink: 0;
      padding: 4px;
      border: 1px solid var(--border);
      border-radius: 9px;
      background: var(--panel-soft);
      cursor: pointer;
    }

    .pu-controls input[type="text"],
    .pu-unified input[data-pu-name] {
      width: 100%;
      min-width: 0;
      min-height: 40px;
      padding: 10px;
      border: 1px solid var(--border);
      border-radius: 10px;
      background: var(--panel-soft);
      color: var(--text);
    }

    .pu-controls input:focus,
    .pu-unified input[data-pu-name]:focus {
      outline: 2px solid var(--accent);
      outline-offset: 1px;
    }

    .pu-controls .pu-invalid {
      border-color: #cc5555 !important;
    }

    .pu-field small {
      color: var(--muted);
      font-size: 10px;
    }

    .pu-saved-list {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
    }

    .pu-saved-item {
      padding: 9px 12px;
      border: 1px solid var(--border);
      border-radius: 10px;
      background: var(--panel-soft);
      color: var(--text);
      cursor: pointer;
    }

    .pu-saved-item.selected {
      border-color: var(--accent);
      background: var(--panel-rose);
      font-weight: 700;
    }

    .pu-empty {
      color: var(--muted);
      font-size: 12px;
    }

    .pu-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin: 12px 0 18px;
    }

    .pu-secondary {
      background: var(--panel-soft);
      color: var(--text);
      border: 1px solid var(--border);
      border-radius: 11px;
      padding: 9px 12px;
      font-size: 12px;
    }

    .pu-actions .btn {
      border-radius: 11px;
    }

    .pu-return {
      margin-top: 8px;
    }

    @media (max-width: 620px) {
      .pu-grid {
        grid-template-columns: minmax(0, 1fr);
      }

      .pu-unified {
        margin-top: 18px;
      }
    }
  `;

  document.head.appendChild(style);

  window.PandoraPaletteEditor =
    Object.freeze({
      mount,
      refresh: sync
    });

  sync();
})();
