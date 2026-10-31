
(() => {
    "use strict";

    // ==========================================
    // 1. APPLICATION DATA
    // ==========================================

    const D = window.PANDORA_DATA || {
        subjects: [],
        resources: []
    };

    const $ = (id) => document.getElementById(id);

    const pages = [
        ["home", "⌂", "Home"],
        ["subjects", "▤", "Subjects"],
        ["reviewers", "▧", "Reviewers"],
        ["practice", "↗", "Practice Links"],
        ["favorites", "♡", "Favorites"],
        ["settings", "⚙", "Settings"]
    ];

    let page = "home";
    let selectedSubject = null;
    let search = "";
    let platform = "All";
    let subjectFilter = "All";
    let categoryFilter = "All";
    let editingCover = null;
    let modalReturnFocus = null;

    // ==========================================
    // 2. THEME DEFINITIONS
    // ==========================================

    const themes = {
        soft: ["Soft Academia", "#f5efea", "#fffaf7", "#c9837a"],
        cherry: ["Black Cherry", "#21191e", "#2f252b", "#d38d93"],
        lavender: ["Lavender Haze", "#f3eff7", "#fffcff", "#a388b8"],
        sage: ["Sage Garden", "#eef2ea", "#fcfdf9", "#7d957f"],
        rose: ["Rose Milk", "#f9eaec", "#fff9f8", "#d995a4"],
        buttercream: ["Buttercream", "#fff5dc", "#fffcf2", "#d5a65b"],
        cloud: ["Cloud Blue", "#eaf2f8", "#fbfdff", "#83a9cd"],
        matcha: ["Matcha Latte", "#e8ebdd", "#fafbf2", "#8d9c72"],
        mocha: ["Mocha", "#eae0d7", "#f8f2ec", "#a47c65"],
        midnight: ["Midnight Lilac", "#211d2d", "#30283c", "#b49acf"]
    };

    const bases = {
        red: ["Red", "#ca535a", "#fff1f0", "#eca8a5", "#784947"],
        blue: ["Blue", "#5185cd", "#edf7ff", "#a9cef0", "#405f7c"],
        green: ["Green", "#509968", "#f0faef", "#b7dcb0", "#486d4b"],
        violet: ["Violet", "#9063c4", "#f7f0ff", "#d2b9f1", "#654d80"],
        orange: ["Orange", "#d78442", "#fff5ea", "#f5c8a2", "#805c41"],
        yellow: ["Yellow", "#c4a02d", "#fffceb", "#f4e29b", "#796b3c"],
        brown: ["Brown", "#876553", "#f8f2ee", "#dcc3b3", "#685046"],
        black: ["Black", "#55565d", "#f5f5f7", "#ccccd5", "#484852"],
        pink: ["Pink", "#d775a3", "#fff0f7", "#f2bcd8", "#824d6b"]
    };

    const styles = {
        classic: "Classic",
        matte: "Matte",
        neon: "Neon",
        pastel: "Pastel"
    };

    const modes = {
        light: "Light",
        dark: "Dark"
    };

    const accents = [
        "#c9837a", "#a388b8", "#7d957f", "#709fc0",
        "#c49a59", "#b76a91", "#df897a", "#974f67",
        "#b8755b", "#858bc3", "#559a99", "#71aa8e",
        "#906c5c", "#c5a46c"
    ];

    const defaultAppearance = {
        theme: "soft",
        accent: "",
        corners: "rounded",
        density: "comfortable",
        base: "pink",
        style: "pastel",
        mode: "light",
        backgroundType: "default",
        backgroundColor: "#f5efea",
        backgroundImage: "",
        backgroundOpacity: 55,
        backgroundFit: "cover"
    };

    // ==========================================
    // 3. SUBJECT COVER DEFINITIONS
    // ==========================================

    const coverDesigns = {
        floral: ["Floral", "✿"],
        stars: ["Stars", "✧"],
        clouds: ["Clouds", "☁"],
        grid: ["Grid", "▦"],
        waves: ["Waves", "〰"],
        minimal: ["Minimal", "●"]
    };

    const COVER_KEY = "pandora_subject_covers";

    // ==========================================
    // 4. GENERAL HELPERS
    // ==========================================

    function safe(value) {
        return String(value ?? "").replace(/[&<>"']/g, (char) => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        }[char]));
    }


    function validUrl(value) {
        if (!value) return null;

        try {
            const url = new URL(value, location.href);

            const allowedProtocols = ["http:", "https:"];

            // Allow local resources only during file:// previews.
            if (location.protocol === "file:") {
                allowedProtocols.push("file:");
            }

            return allowedProtocols.includes(url.protocol)
                ? url.href
                : null;

        } catch {
            return null;
        }
    }


    function validHex(value) {
        return /^#[0-9a-fA-F]{6}$/.test(value || "");
    }

    function validImage(value) {
        return Boolean(
            validUrl(value) ||
            /^data:image\/(?:png|jpeg|webp);base64,/i.test(value || "")
        );
    }

    function readStorage(key, fallback) {
        try {
            return JSON.parse(localStorage.getItem(key)) ?? fallback;
        } catch {
            return fallback;
        }
    }

    function saveStorage(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch {
            alert(
                "Unable to save. Your browser storage may be full. " +
                "Try a smaller image."
            );
            return false;
        }
    }

    function empty(message = "No resources available.") {
        return `<div class="empty">${safe(message)}</div>`;
    }

    function matching(resource) {
        const text = [
            resource.title,
            resource.description,
            resource.subject,
            resource.platform,
            resource.module,
            resource.kind,
            resource.category
        ].join(" ").toLowerCase();

        return text.includes(search.toLowerCase());
    }

    function head(title, subtitle, compact = false) {
        return `
            <section class="hero ${compact ? "compact" : ""}">
                <div class="hero-copy">
                    <h1>${safe(title)} ✦</h1>
                    <p>${safe(subtitle)}</p>
                </div>
            </section>
        `;
    }

    // ==========================================
    // 5. COLOR UTILITIES
    // ==========================================

    function rgb(hex) {
        const value = hex.replace("#", "");

        return [0, 2, 4].map((index) =>
            parseInt(value.slice(index, index + 2), 16)
        );
    }

    function toHex(values) {
        return "#" + values.map((value) =>
            Math.round(Math.max(0, Math.min(255, value)))
                .toString(16)
                .padStart(2, "0")
        ).join("");
    }

    function mix(first, second, amount) {
        const a = rgb(first);
        const b = rgb(second);

        return toHex(a.map((value, index) =>
            value * (1 - amount) + b[index] * amount
        ));
    }

    function luminance(hex) {
        const channels = rgb(hex).map((value) => {
            const c = value / 255;

            return c <= 0.04045
                ? c / 12.92
                : Math.pow((c + 0.055) / 1.055, 2.4);
        });

        return (
            channels[0] * 0.2126 +
            channels[1] * 0.7152 +
            channels[2] * 0.0722
        );
    }

    function contrast(first, second) {
        const a = luminance(first);
        const b = luminance(second);

        return (Math.max(a, b) + 0.05) /
            (Math.min(a, b) + 0.05);
    }

    function ensureContrast(foreground, background, minimum = 4.5) {
        if (contrast(foreground, background) >= minimum) {
            return foreground;
        }

        const target = luminance(background) > 0.4
            ? "#17151b"
            : "#ffffff";

        for (let step = 1; step <= 20; step++) {
            const color = mix(foreground, target, step / 20);

            if (contrast(color, background) >= minimum) {
                return color;
            }
        }

        return target;
    }

    // ==========================================
    // 6. THEME GENERATOR
    // ==========================================

    function generatePalette(baseId, styleId, modeId) {
        const base = bases[baseId] || bases.pink;
        const style = styles[styleId] ? styleId : "pastel";
        const dark = modeId === "dark";

        const color = base[1];
        const black = "#17151b";
        const white = "#ffffff";

        let bg;
        let panel;
        let soft;
        let highlight;
        let accent;
        let text;
        let muted;
        let border;
        let sidebar;

        if (style === "pastel") {
            accent = base[3];

            if (!dark) {
                bg = base[2];
                panel = mix(bg, white, 0.91);
                soft = mix(bg, white, 0.38);
                highlight = mix(accent, white, 0.66);
                sidebar = mix(bg, white, 0.55);
                border = mix(accent, white, 0.65);
                text = base[4];
                muted = mix(text, bg, 0.37);
            } else {
                bg = mix(color, black, 0.85);
                panel = mix(color, black, 0.76);
                soft = mix(color, black, 0.68);
                highlight = mix(color, black, 0.60);
                sidebar = mix(color, black, 0.81);
                border = mix(accent, black, 0.61);
                accent = mix(accent, white, 0.16);
                text = "#f8f3fa";
                muted = mix(text, panel, 0.36);
            }
        } else if (style === "matte") {
            const matte = mix(color, "#888586", 0.42);
            accent = matte;

            if (!dark) {
                bg = mix(matte, white, 0.83);
                panel = mix(bg, white, 0.81);
                soft = mix(matte, white, 0.80);
                highlight = mix(matte, white, 0.67);
                sidebar = mix(bg, white, 0.42);
                border = mix(matte, white, 0.69);
                text = mix(matte, black, 0.69);
                muted = mix(text, bg, 0.37);
            } else {
                bg = mix(matte, black, 0.84);
                panel = mix(matte, black, 0.76);
                soft = mix(matte, black, 0.68);
                highlight = mix(matte, black, 0.60);
                sidebar = mix(matte, black, 0.81);
                border = mix(matte, black, 0.47);
                accent = mix(matte, white, 0.30);
                text = "#f5f2f1";
                muted = mix(text, panel, 0.38);
            }
        } else if (style === "neon") {
            const vivid = baseId === "black"
                ? "#a9b0c4"
                : color;

            accent = vivid;

            if (!dark) {
                bg = mix(vivid, white, 0.91);
                panel = white;
                soft = mix(vivid, white, 0.92);
                highlight = mix(vivid, white, 0.78);
                sidebar = mix(vivid, white, 0.94);
                border = mix(vivid, white, 0.77);
                text = mix(vivid, black, 0.77);
                muted = mix(text, white, 0.40);
            } else {
                bg = "#101019";
                panel = mix(vivid, "#17151f", 0.89);
                soft = mix(vivid, "#17151f", 0.81);
                highlight = mix(vivid, "#17151f", 0.72);
                sidebar = "#15141e";
                border = mix(vivid, "#17151f", 0.56);
                accent = mix(vivid, white, 0.19);
                text = "#f7f7ff";
                muted = "#c8c4d2";
            }
        } else {
            accent = color;

            if (!dark) {
                bg = mix(color, white, 0.87);
                panel = mix(bg, white, 0.88);
                soft = mix(color, white, 0.86);
                highlight = mix(color, white, 0.70);
                sidebar = mix(color, white, 0.92);
                border = mix(color, white, 0.76);
                text = mix(color, black, 0.72);
                muted = mix(text, bg, 0.37);
            } else {
                bg = mix(color, black, 0.85);
                panel = mix(color, black, 0.77);
                soft = mix(color, black, 0.68);
                highlight = mix(color, black, 0.56);
                sidebar = mix(color, black, 0.82);
                border = mix(color, black, 0.49);
                accent = mix(color, white, 0.27);
                text = "#f8f5fa";
                muted = mix(text, panel, 0.36);
            }
        }

        text = ensureContrast(text, panel, 7);
        muted = ensureContrast(muted, panel, 4.5);

        return {
            bg,
            panel,
            soft,
            highlight,
            text,
            muted,
            accent,
            strong: dark
                ? mix(accent, white, 0.12)
                : mix(accent, black, 0.25),
            border,
            sidebar,
            tag: highlight,
            shadow: dark
                ? "0 12px 30px rgba(0,0,0,0.25)"
                : "0 10px 30px rgba(60,45,55,0.08)"
        };
    }

    // ==========================================
    // 7. APPEARANCE STORAGE
    // ==========================================

    function loadAppearance() {
        const saved = readStorage("pandora_appearance", {});
        const previous = localStorage.getItem("pandora_theme");

        const theme = saved.theme === "builder" ||
            Object.hasOwn(themes, saved.theme)
            ? saved.theme
            : Object.hasOwn(themes, previous)
                ? previous
                : "soft";

        return {
            ...defaultAppearance,
            ...saved,
            theme,
            accent: accents.includes(saved.accent)
                ? saved.accent
                : "",
            base: bases[saved.base] ? saved.base : "pink",
            style: styles[saved.style] ? saved.style : "pastel",
            mode: modes[saved.mode] ? saved.mode : "light",
            corners: ["rounded", "square"].includes(saved.corners)
                ? saved.corners
                : "rounded",
            density: ["compact", "comfortable"].includes(saved.density)
                ? saved.density
                : "comfortable",
            backgroundType: ["default", "color", "image"].includes(
                saved.backgroundType
            ) ? saved.backgroundType : "default",
            backgroundColor: validHex(saved.backgroundColor)
                ? saved.backgroundColor
                : "#f5efea",
            backgroundImage: typeof saved.backgroundImage === "string" &&
                validImage(saved.backgroundImage)
                ? saved.backgroundImage
                : "",
            backgroundOpacity: Number.isFinite(
                Number(saved.backgroundOpacity)
            )
                ? Math.max(0, Math.min(100, Number(saved.backgroundOpacity)))
                : 55,
            backgroundFit: ["cover", "contain"].includes(
                saved.backgroundFit
            ) ? saved.backgroundFit : "cover"
        };
    }

    let appearance = loadAppearance();

    function darkTheme() {
        return appearance.theme === "builder"
            ? appearance.mode === "dark"
            : ["cherry", "midnight"].includes(appearance.theme);
    }

    function applyAppearance() {
        const body = document.body;

        body.dataset.theme = appearance.theme;
        body.dataset.corners = appearance.corners;
        body.dataset.density = appearance.density;
        body.dataset.background = appearance.backgroundType;

        const variables = [
            "--bg", "--panel", "--panel-soft", "--panel-rose",
            "--text", "--muted", "--accent", "--accent-strong",
            "--border", "--sidebar", "--tag", "--shadow",
            "--button-text"
        ];

        variables.forEach((name) => {
            body.style.removeProperty(name);
        });

        if (appearance.theme === "builder") {
            const palette = generatePalette(
                appearance.base,
                appearance.style,
                appearance.mode
            );

            const values = {
                "--bg": palette.bg,
                "--panel": palette.panel,
                "--panel-soft": palette.soft,
                "--panel-rose": palette.highlight,
                "--text": palette.text,
                "--muted": palette.muted,
                "--accent": palette.accent,
                "--accent-strong": palette.strong,
                "--border": palette.border,
                "--sidebar": palette.sidebar,
                "--tag": palette.tag,
                "--shadow": palette.shadow
            };

            Object.entries(values).forEach(([name, value]) => {
                body.style.setProperty(name, value);
            });
        }

        if (appearance.accent) {
            body.style.setProperty("--accent", appearance.accent);

            body.style.setProperty(
                "--accent-strong",
                darkTheme()
                    ? mix(appearance.accent, "#ffffff", 0.17)
                    : mix(appearance.accent, "#17151b", 0.24)
            );
        }

        const accent = getComputedStyle(body)
            .getPropertyValue("--accent")
            .trim() || "#c9837a";

        body.style.setProperty(
            "--button-text",
            ensureContrast("#ffffff", accent)
        );

        body.style.removeProperty("--background-image");
        body.style.removeProperty("--background-overlay");
        body.style.removeProperty("--background-fit");

        if (appearance.backgroundType === "color") {
            body.style.setProperty(
                "--bg",
                appearance.backgroundColor
            );
        }

        if (
            appearance.backgroundType === "image" &&
            appearance.backgroundImage &&
            validImage(appearance.backgroundImage)
        ) {
            const image = appearance.backgroundImage.replace(
                /["\\\r\n]/g,
                ""
            );

            body.style.setProperty(
                "--background-image",
                `url("${image}")`
            );

            const overlay = darkTheme()
                ? "12, 10, 18"
                : "255, 252, 249";

            body.style.setProperty(
                "--background-overlay",
                `rgba(${overlay}, ${appearance.backgroundOpacity / 100})`
            );

            body.style.setProperty(
                "--background-fit",
                appearance.backgroundFit
            );
        }
    }

    function updateAppearance(changes) {
        const next = { ...appearance, ...changes };

        if (!saveStorage("pandora_appearance", next)) {
            return;
        }

        appearance = next;

        try {
            localStorage.setItem("pandora_theme", appearance.theme);
        } catch {
            // Primary appearance settings were already saved.
        }

        applyAppearance();
        render();
    }

    // ==========================================
    // 8. SUBJECT COVER STORAGE
    // ==========================================

    let covers = readStorage(COVER_KEY, {});

    if (!covers || typeof covers !== "object" || Array.isArray(covers)) {
        covers = {};
    }

    function subjectExists(id) {
        return D.subjects.some((subject) => subject.id === id);
    }

    function getCover(id) {
        return covers[id] || {
            type: "default",
            design: "floral",
            color: "#f5d6d3",
            image: ""
        };
    }

    function updateCover(id, changes) {
        if (!subjectExists(id)) return;

        const next = {
            ...covers,
            [id]: {
                ...getCover(id),
                ...changes
            }
        };

        if (saveStorage(COVER_KEY, next)) {
            covers = next;
            refreshAfterCoverChange();
        }
    }

    function resetCover(id) {
        if (!subjectExists(id)) return;

        const next = { ...covers };
        delete next[id];

        if (saveStorage(COVER_KEY, next)) {
            covers = next;
            refreshAfterCoverChange();
        }
    }

    function coverStyle(subject) {
        const cover = getCover(subject.id);

        if (
            cover.type === "image" &&
            cover.image &&
            validImage(cover.image)
        ) {
            return {
                className: "custom-image",
                style: "",
                image: cover.image,
                symbol: ""
            };
        }

        if (cover.type === "color" && validHex(cover.color)) {
            return {
                className: "custom-color",
                style: `background-color:${cover.color};`,
                image: "",
                symbol: "✦"
            };
        }

        if (
            cover.type === "preset" &&
            Object.hasOwn(coverDesigns, cover.design)
        ) {
            return {
                className: `design-${cover.design}`,
                style: "",
                image: "",
                symbol: coverDesigns[cover.design][1]
            };
        }

        return {
            className: subject.color || "pink",
            style: "",
            image: "",
            symbol: "✦"
        };
    }

    function coverArtwork(subject, preview = false) {
        const cover = coverStyle(subject);

        return `
            <div
                class="${preview ? "cover-modal-preview" : "cover"} ${safe(cover.className)}"
                style="${safe(cover.style)}"
            >
                ${cover.image
                    ? `
                        <img
                            class="subject-cover-image"
                            src="${safe(cover.image)}"
                            alt=""
                        >
                    `
                    : `
                        <span class="cover-symbol">
                            ${safe(cover.symbol)}
                        </span>
                    `}
            </div>
        `;
    }

    // ==========================================
    // 9. IMAGE PROCESSING
    // ==========================================

    function processImage(file, limit, quality = 0.72) {
        return new Promise((resolve, reject) => {
            if (!file || ![
                "image/jpeg",
                "image/png",
                "image/webp"
            ].includes(file.type)) {
                reject(new Error("Choose a JPG, PNG, or WebP image."));
                return;
            }

            if (file.size > 12 * 1024 * 1024) {
                reject(new Error("Image must be below 12 MB."));
                return;
            }

            const reader = new FileReader();

            reader.onerror = () => {
                reject(new Error("Unable to read the image."));
            };

            reader.onload = () => {
                const image = new Image();

                image.onerror = () => {
                    reject(new Error("Invalid image file."));
                };

                image.onload = () => {
                    const scale = Math.min(
                        1,
                        limit / Math.max(image.width, image.height)
                    );

                    const canvas = document.createElement("canvas");

                    canvas.width = Math.max(
                        1,
                        Math.round(image.width * scale)
                    );

                    canvas.height = Math.max(
                        1,
                        Math.round(image.height * scale)
                    );

                    const context = canvas.getContext("2d");

                    if (!context) {
                        reject(new Error("Image processing unavailable."));
                        return;
                    }

                    context.drawImage(
                        image,
                        0,
                        0,
                        canvas.width,
                        canvas.height
                    );

                    const result = canvas.toDataURL(
                        "image/jpeg",
                        quality
                    );

                    if (result.length > 1200000) {
                        reject(new Error(
                            "Image is still too large after compression."
                        ));
                        return;
                    }

                    resolve(result);
                };

                image.src = reader.result;
            };

            reader.readAsDataURL(file);
        });
    }

    async function uploadCover(id, file) {
        try {
            const image = await processImage(file, 800, 0.70);

            updateCover(id, {
                type: "image",
                image
            });
        } catch (error) {
            alert(error.message);
        }
    }

    async function uploadBackground(file) {
        try {
            const image = await processImage(file, 1600, 0.72);

            updateAppearance({
                backgroundType: "image",
                backgroundImage: image
            });
        } catch (error) {
            alert(error.message);
        }
    }

    // ==========================================
    // 10. FAVORITES
    // ==========================================

    function getFav() {
        const data = readStorage("pandora_favs", []);
        return Array.isArray(data) ? data : [];
    }

    function toggleFavorite(id) {
        const favorites = getFav();

        const updated = favorites.includes(id)
            ? favorites.filter((item) => item !== id)
            : [...favorites, id];

        if (saveStorage("pandora_favs", updated)) {
            render();
        }
    }

    function favoriteButton(resource) {
        const active = getFav().includes(resource.id);

        return `
            <button
                type="button"
                class="favorite-btn ${active ? "is-favorite" : ""}"
                data-fav="${safe(resource.id)}"
                aria-label="${active ? "Remove from Favorites" : "Add to Favorites"}"
                aria-pressed="${active}"
                title="${active ? "Remove from Favorites" : "Add to Favorites"}"
            >
                ${active ? "♥" : "♡"}
            </button>
        `;
    }

    // ==========================================
    // 11. SUBJECT CARDS
    // ==========================================

    function subjectCard(subject) {
        const count = D.resources.filter(
            (resource) => resource.subject === subject.id
        ).length;

        return `
            <article class="card">
                ${coverArtwork(subject)}

                <div class="card-body">
                    <h3>${safe(subject.id)}</h3>
                    <p>${safe(subject.name)}</p>

                    <button
                        type="button"
                        class="foot"
                        data-subject="${safe(subject.id)}"
                    >
                        <span>${count} resources</span>
                        <span>View →</span>
                    </button>
                </div>
            </article>
        `;
    }

    // ==========================================
    // 12. RESOURCE CARDS
    // ==========================================

    function resourceIcon(resource) {
        const platform = String(
            resource.platform || ""
        ).toLowerCase();

        if (platform.includes("pdf")) {
            return { icon: "📄", tone: "pdf" };
        }

        if (
            platform.includes("google forms") ||
            platform.includes("microsoft forms")
        ) {
            return { icon: "📝", tone: "form" };
        }

        if (platform.includes("gizmo")) {
            return { icon: "🔗", tone: "gizmo" };
        }

        if (resource.kind === "reviewer") {
            return { icon: "📚", tone: "reviewer" };
        }

        return { icon: "↗", tone: "generic" };
    }

    function resourceCard(resource) {
        const primary = validUrl(resource.url);
        const edit = validUrl(resource.editUrl);
        const icon = resourceIcon(resource);

        const actionLabel = resource.kind === "practice"
            ? "Practice"
            : "Open";

        return `
            <article class="resource-card">
                <div class="resource-left">
                    <div class="resource-tile tone-${safe(icon.tone)}">
                        ${safe(icon.icon)}
                    </div>

                    <div class="resource-main">
                        <div class="resource-title">
                            ${safe(resource.title)}
                        </div>

                        <div class="meta">
                            ${safe(resource.subject)}
                            · ${safe(resource.platform || resource.kind)}
                            ${resource.module
                                ? ` · Module ${safe(resource.module)}`
                                : ""}
                        </div>

                        ${resource.description
                            ? `
                                <p class="resource-description">
                                    ${safe(resource.description)}
                                </p>
                            `
                            : ""}

                        <div class="tag-row">
                            <span class="tag">
                                ${safe(resource.subject)}
                            </span>

                            ${resource.category
                                ? `
                                    <span class="tag muted-tag">
                                        ${safe(resource.category)}
                                    </span>
                                `
                                : ""}
                        </div>
                    </div>
                </div>

                <div class="resource-right">
                    <div class="resource-actions">
                        ${primary
                            ? `
                                <a
                                    class="btn"
                                    href="${safe(primary)}"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    ${actionLabel}
                                </a>
                            `
                            : ""}

                        ${edit
                            ? `
                                <a
                                    class="btn outline"
                                    href="${safe(edit)}"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Edit
                                </a>
                            `
                            : ""}
                    </div>

                    ${favoriteButton(resource)}
                </div>
            </article>
        `;
    }

    // ==========================================
    // 13. NEW COMPACT LIBRARY ROW
    // ==========================================

    function libraryRow(resource) {
        const url = validUrl(resource.url);
        const edit = validUrl(resource.editUrl);
        const icon = resourceIcon(resource);

        const label = resource.kind === "practice"
            ? "Practice"
            : "Open";

        const favorite = getFav().includes(resource.id);

        return `
            <div class="library-row">
                ${url
                    ? `
                        <a
                            class="library-row-primary"
                            href="${safe(url)}"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="${label}: ${safe(resource.title)}"
                        >
                            <span class="library-row-icon tone-${safe(icon.tone)}">
                                ${safe(icon.icon)}
                            </span>

                            <span class="library-row-info">
                                <strong>
                                    ${safe(resource.title)}
                                </strong>

                                <span class="library-row-meta">
                                    ${safe(resource.platform || resource.kind)}
                                    ${resource.category
                                        ? ` · ${safe(resource.category)}`
                                        : ""}
                                </span>

                                ${resource.description
                                    ? `
                                        <span class="library-row-description">
                                            ${safe(resource.description)}
                                        </span>
                                    `
                                    : ""}
                            </span>

                            <span
                                class="library-row-arrow"
                                aria-hidden="true"
                            >
                                ↗
                            </span>
                        </a>
                    `
                    : `
                        <div class="library-row-primary unavailable">
                            <span class="library-row-icon tone-${safe(icon.tone)}">
                                ${safe(icon.icon)}
                            </span>

                            <span class="library-row-info">
                                <strong>${safe(resource.title)}</strong>
                                <span class="library-row-meta">
                                    No link available
                                </span>
                            </span>
                        </div>
                    `}

                <div class="library-row-actions">
                    ${edit
                        ? `
                            <a
                                class="library-edit"
                                href="${safe(edit)}"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Edit ${safe(resource.title)}"
                            >
                                ✎ <span>Edit</span>
                            </a>
                        `
                        : ""}

                    <button
                        type="button"
                        class="library-heart ${favorite ? "active" : ""}"
                        data-fav="${safe(resource.id)}"
                        aria-label="${favorite ? "Remove from Favorites" : "Add to Favorites"}: ${safe(resource.title)}"
                        aria-pressed="${favorite}"
                        title="${favorite ? "Remove from Favorites" : "Add to Favorites"}"
                    >
                        ${favorite ? "♥" : "♡"}
                    </button>
                </div>
            </div>
        `;
    }

    // ==========================================
    // 14. SIDEBAR AND HOME
    // ==========================================

    function nav() {
        $("nav").innerHTML = pages.map(([id, icon, label]) => `
            <button
                type="button"
                class="nav-item ${page === id ? "active" : ""}"
                data-page="${id}"
            >
                <span class="nav-icon">${icon}</span>
                ${label}
            </button>
        `).join("");
    }

    function home() {
        const subjects = D.subjects.filter((subject) => {
            const text = `${subject.id} ${subject.name}`.toLowerCase();

            return !search || text.includes(search.toLowerCase());
        });

        const recent = D.resources
            .filter(matching)
            .slice(-4)
            .reverse();

        const shortcuts = [
            ["reviewers", "▧", "Reviewers", "Open study materials"],
            ["practice", "↗", "Practice Links", "Gizmo, forms, and drills"],
            ["favorites", "♡", "Favorites", "Your saved resources"],
            ["subjects", "▤", "All Subjects", "Browse course materials"]
        ];

        return `
            ${head(
                "Dashboard",
                "PANDORA v3 - Remodeled Coz Y Not"
            )}

            <div class="section-head">
                <h2>Your Subjects</h2>

                <button class="ghost" data-page="subjects">
                    View all subjects →
                </button>
            </div>

            <div class="cards">
                ${subjects.map(subjectCard).join("")}
            </div>

            <div class="section-head">
                <h2>Recently Added</h2>
            </div>

            <div class="resource-list compact-list">
                ${recent.length
                    ? recent.map(resourceCard).join("")
                    : empty()}
            </div>

            <div class="quick-grid">
                ${shortcuts.map(([id, icon, label, description]) => `
                    <button
                        type="button"
                        class="quick-card"
                        data-page="${id}"
                    >
                        <span class="quick-icon">${icon}</span>
                        <strong>${label}</strong>
                        <small>${description}</small>
                    </button>
                `).join("")}
            </div>
        `;
    }

    
    // ==========================================
    // EDITORIAL SECTIONS WITHIN EACH MODULE
    // ==========================================

    function moduleEditorialSections(resources) {
        const sections = [
            {
                id: "reviewers",
                title: "Reviewers",
                icon: "▧",
                description: "Study materials and review notes"
            },
            {
                id: "practice",
                title: "Practice / Edit Links",
                icon: "✎",
                description: "Exercises, quizzes and practice activities"
            },
            {
                id: "references",
                title: "References",
                icon: "▤",
                description: "Supporting documents and learning resources"
            }
        ];

        return `
            <div class="editorial-sections">
                ${sections.map(section => {
                    const items = resources.filter(resource => {
                        const explicit = String(
                            resource.section || ""
                        ).toLowerCase();

                        const resolved = [
                            "reviewers",
                            "practice",
                            "references"
                        ].includes(explicit)
                            ? explicit
                            : resource.kind === "reviewer"
                                ? "reviewers"
                                : "practice";

                        return resolved === section.id;
                    });

                    if (!items.length) return "";

                    return `
                        <section
                            class="editorial-section"
                            aria-label="${safe(section.title)}"
                        >
                            <div class="editorial-section-heading">
                                <span
                                    class="editorial-section-icon"
                                    aria-hidden="true"
                                >
                                    ${section.icon}
                                </span>

                                <div class="editorial-section-title">
                                    <h3>${safe(section.title)}</h3>

                                    <p>
                                        ${safe(section.description)}
                                    </p>
                                </div>

                                <span class="editorial-section-count">
                                    ${items.length}
                                </span>
                            </div>

                            <div class="editorial-section-resources">
                                ${items.map(libraryRow).join("")}
                            </div>
                        </section>
                    `;
                }).join("")}
            </div>
        `;
    }



    // ==========================================
    // 15. REDESIGNED SUBJECT LIBRARY
    // Editorial Module Sections
    // ==========================================

    function subjects() {
        if (!selectedSubject) {
            const list = D.subjects.filter((subject) => {
                const text = `${subject.id} ${subject.name}`
                    .toLowerCase();

                return !search ||
                    text.includes(search.toLowerCase());
            });

            return `
                ${head(
                    "Subjects",
                    "Browse your courses and modules.",
                    true
                )}

                <div class="cards">
                    ${list.map(subjectCard).join("")}
                </div>
            `;
        }

        const subject = D.subjects.find(
            item => item.id === selectedSubject
        );

        if (!subject) {
            return empty("Subject not found.");
        }

        const allResources = D.resources.filter(
            resource => resource.subject === subject.id
        );

        const list = allResources.filter(matching);

        const modules = [
            ...new Set(
                list.map(
                    resource => resource.module ?? "Other"
                )
            )
        ].sort((a, b) => {
            if (a === "Other") return 1;
            if (b === "Other") return -1;

            return Number(a) - Number(b);
        });

        const allModules = new Set(
            allResources.map(
                resource => resource.module ?? "Other"
            )
        );

        return `
            <button
                type="button"
                class="ghost back-btn"
                data-back
            >
                ← All Subjects
            </button>

            ${head(subject.id, subject.name, true)}

            <div class="library-stats">
                <div class="library-stat">
                    <span class="library-stat-icon">
                        ▤
                    </span>

                    <div>
                        <strong>
                            ${allModules.size}
                        </strong>

                        <small>
                            Modules
                        </small>
                    </div>
                </div>

                <div class="library-stat">
                    <span class="library-stat-icon">
                        ▧
                    </span>

                    <div>
                        <strong>
                            ${allResources.length}
                        </strong>

                        <small>
                            Resources
                        </small>
                    </div>
                </div>
            </div>

            <div class="academic-module-list">
                ${modules.length
                    ? modules.map((number, index) => {

                        const resources = list.filter(
                            resource =>
                                (resource.module ?? "Other") === number
                        );

                        const label = number === "Other"
                            ? "Other Resources"
                            : `Module ${number}`;

                        return `
                            <details
                                class="academic-module"
                                ${search ? "open" : ""}
                            >
                                <summary
                                    class="academic-module-heading"
                                >
                                    <span
                                        class="academic-module-number"
                                    >
                                        ${number === "Other"
                                            ? "✦"
                                            : safe(number)}
                                    </span>

                                    <span
                                        class="academic-module-title"
                                    >
                                        <strong>
                                            ${safe(label)}
                                        </strong>

                                        <small>
                                            ${resources.length}
                                            ${resources.length === 1
                                                ? "resource"
                                                : "resources"}
                                        </small>
                                    </span>

                                    <span
                                        class="academic-module-chevron"
                                    >
                                        ⌄
                                    </span>
                                </summary>

                                <div class="academic-module-body">
                                    ${moduleEditorialSections(resources)}
                                </div>
                            </details>
                        `;
                    }).join("")
                    : empty("No module resources available.")}
            </div>
        `;
    }


    // ==========================================
    // 16. SUBJECT DROPDOWN
    // ==========================================

    function subjectDropdown() {
        const selected = subjectFilter === "All"
            ? "All Subjects"
            : subjectFilter;

        const options = [
            { id: "All", label: "All Subjects" },
            ...D.subjects.map((subject) => ({
                id: subject.id,
                label: subject.id
            }))
        ];

        return `
            <div class="custom-dropdown" id="subjectDropdown">
                <button
                    type="button"
                    class="dropdown-trigger"
                    data-dropdown-toggle
                    aria-expanded="false"
                >
                    <span>${safe(selected)}</span>
                    <span class="dropdown-arrow">⌄</span>
                </button>

                <div
                    id="subjectDropdownOptions"
                    class="dropdown-options"
                    hidden
                >
                    ${options.map((option) => `
                        <button
                            type="button"
                            class="dropdown-option ${subjectFilter === option.id ? "selected" : ""}"
                            data-subject-option="${safe(option.id)}"
                        >
                            ${safe(option.label)}
                        </button>
                    `).join("")}
                </div>
            </div>
        `;
    }

    function closeDropdown() {
        const dropdown = $("subjectDropdown");

        if (!dropdown) return;

        dropdown.classList.remove("open");

        const options = $("subjectDropdownOptions");
        const trigger = dropdown.querySelector(".dropdown-trigger");

        if (options) options.hidden = true;

        if (trigger) {
            trigger.setAttribute("aria-expanded", "false");
        }
    }

    function toggleDropdown() {
        const dropdown = $("subjectDropdown");

        if (!dropdown) return;

        const options = $("subjectDropdownOptions");
        const trigger = dropdown.querySelector(".dropdown-trigger");

        const open = !dropdown.classList.contains("open");

        dropdown.classList.toggle("open", open);
        options.hidden = !open;

        trigger.setAttribute("aria-expanded", String(open));
    }

    // ==========================================
    // 17. FILTERS AND LIBRARY
    // ==========================================

    function filterPanel(kind) {
        const practice = kind === "practice";

        const platforms = [
            "All",
            ...new Set(
                D.resources
                    .filter((resource) => resource.kind === kind)
                    .map((resource) => resource.platform)
                    .filter(Boolean)
            )
        ];

        const categories = [
            "All",
            "formatives",
            "summatives"
        ];

        return `
            <section class="filter-panel">
                <div class="section-head no-margin">
                    <h2>Filter Resources</h2>
                </div>

                <div class="filter-grid">
                    ${practice
                        ? `
                            <div class="filter-group">
                                <div class="filter-label">
                                    Category
                                </div>

                                <div class="filters">
                                    ${categories.map((category) => `
                                        <button
                                            type="button"
                                            class="chip ${categoryFilter === category ? "active" : ""}"
                                            data-category="${category}"
                                        >
                                            ${category === "All"
                                                ? "All Resources"
                                                : category.charAt(0).toUpperCase() +
                                                  category.slice(1)}
                                        </button>
                                    `).join("")}
                                </div>
                            </div>
                        `
                        : ""}

                    <div class="filter-group">
                        <div class="filter-label">Platform</div>

                        <div class="filters">
                            ${platforms.map((item) => `
                                <button
                                    type="button"
                                    class="chip ${platform === item ? "active" : ""}"
                                    data-platform="${safe(item)}"
                                >
                                    ${safe(item)}
                                </button>
                            `).join("")}
                        </div>
                    </div>

                    <div class="filter-group subject-group">
                        <div class="filter-label">Subject</div>
                        ${subjectDropdown()}
                    </div>
                </div>
            </section>
        `;
    }

    function library(kind) {
        const practice = kind === "practice";

        const list = D.resources.filter((resource) => {
            if (resource.kind !== kind || !matching(resource)) {
                return false;
            }

            if (
                platform !== "All" &&
                resource.platform !== platform
            ) {
                return false;
            }

            if (
                subjectFilter !== "All" &&
                resource.subject !== subjectFilter
            ) {
                return false;
            }

            if (
                practice &&
                categoryFilter !== "All" &&
                resource.category !== categoryFilter
            ) {
                return false;
            }

            return true;
        });

        return `
            ${head(
                practice ? "Practice Links" : "Reviewers",
                practice
                    ? "Gizmo, Google Forms, Microsoft Forms, and more."
                    : "Study links and online reviewer resources.",
                true
            )}

            ${filterPanel(kind)}

            <div class="resource-list compact-list">
                ${list.length
                    ? list.map(resourceCard).join("")
                    : empty("No resources found in this category.")}
            </div>
        `;
    }

    function favorites() {
        const ids = getFav();

        const list = D.resources.filter(
            (resource) =>
                ids.includes(resource.id) &&
                matching(resource)
        );

        return `
            ${head(
                "Favorites",
                "Your saved resources in this browser.",
                true
            )}

            <div class="resource-list compact-list">
                ${list.length
                    ? list.map(resourceCard).join("")
                    : empty("No favorites yet. Click ♡ on a resource to save it.")}
            </div>
        `;
    }

    // ==========================================
    // 18. CURATED THEMES
    // ==========================================

    function curatedThemeCards() {
        return Object.entries(themes).map(([id, data]) => `
            <button
                type="button"
                class="theme-card ${appearance.theme === id ? "selected" : ""}"
                data-theme="${id}"
            >
                <span class="theme-color-row">
                    ${data.slice(1).map((color) => `
                        <span style="background:${color}"></span>
                    `).join("")}
                </span>

                <span class="theme-card-label">
                    <strong>${safe(data[0])}</strong>
                    <span>${appearance.theme === id ? "✓" : ""}</span>
                </span>
            </button>
        `).join("");
    }

    // ==========================================
    // 19. THEME BUILDER
    // ==========================================

    function themeBuilder() {
        const palette = generatePalette(
            appearance.base,
            appearance.style,
            appearance.mode
        );

        const title = [
            bases[appearance.base][0],
            styles[appearance.style],
            modes[appearance.mode]
        ].join(" · ");

        return `
            <section class="studio-panel builder-panel">
                <div class="builder-heading">
                    <div>
                        <h2>Theme Builder</h2>
                        <p>Mix color, style, and appearance.</p>
                    </div>

                    <span class="builder-count">
                        72 combinations
                    </span>
                </div>

                <div class="builder-section">
                    <label class="builder-label">
                        1. Base Color
                    </label>

                    <div class="builder-colors">
                        ${Object.entries(bases).map(([id, data]) => `
                            <button
                                type="button"
                                class="builder-color ${appearance.base === id ? "selected" : ""}"
                                data-builder-base="${id}"
                            >
                                <span
                                    class="builder-color-dot"
                                    style="background:${data[1]}"
                                ></span>

                                <span class="builder-color-name">
                                    ${safe(data[0])}
                                </span>
                            </button>
                        `).join("")}
                    </div>
                </div>

                <div class="builder-section">
                    <label class="builder-label">
                        2. Color Style
                    </label>

                    <div class="builder-options">
                        ${Object.entries(styles).map(([id, name]) => `
                            <button
                                type="button"
                                class="builder-option ${appearance.style === id ? "selected" : ""}"
                                data-builder-style="${id}"
                            >
                                ${name}
                            </button>
                        `).join("")}
                    </div>
                </div>

                <div class="builder-section">
                    <label class="builder-label">
                        3. Appearance
                    </label>

                    <div class="builder-options">
                        ${Object.entries(modes).map(([id, name]) => `
                            <button
                                type="button"
                                class="builder-option ${appearance.mode === id ? "selected" : ""}"
                                data-builder-mode="${id}"
                            >
                                ${id === "dark" ? "☾" : "☀"}
                                ${name}
                            </button>
                        `).join("")}
                    </div>
                </div>

                <div class="builder-result">
                    <div class="builder-result-top">
                        <strong>${safe(title)}</strong>

                        <small>
                            ${appearance.theme === "builder"
                                ? "✓ Applied"
                                : "Select to apply"}
                        </small>
                    </div>

                    <div class="builder-preview-colors">
                        ${[
                            palette.bg,
                            palette.panel,
                            palette.highlight,
                            palette.accent,
                            palette.text
                        ].map((color) => `
                            <span style="background:${color}"></span>
                        `).join("")}
                    </div>
                </div>
            </section>
        `;
    }

    // ==========================================
    // 20. BACKGROUND STUDIO
    // ==========================================

    function backgroundStudio() {
        const type = appearance.backgroundType;

        const isUploaded = appearance.backgroundImage.startsWith(
            "data:image/"
        );

        const urlValue = isUploaded
            ? ""
            : appearance.backgroundImage;

        return `
            <section class="studio-panel builder-panel">
                <div class="studio-heading">
                    <h2>Background Studio</h2>
                    <p>Customize your workspace background.</p>
                </div>

                <div class="background-mode-grid">
                    ${[
                        ["default", "Theme Default"],
                        ["color", "Solid Color"],
                        ["image", "Image"]
                    ].map(([id, label]) => `
                        <button
                            type="button"
                            class="background-mode ${type === id ? "selected" : ""}"
                            data-background-type="${id}"
                        >
                            ${label}
                        </button>
                    `).join("")}
                </div>

                ${type === "color"
                    ? `
                        <div class="background-controls">
                            <div class="background-field">
                                <label for="backgroundColor">
                                    Background Color
                                </label>

                                <div class="background-color-row">
                                    <input
                                        id="backgroundColor"
                                        type="color"
                                        value="${safe(appearance.backgroundColor)}"
                                    >

                                    <strong>
                                        ${safe(appearance.backgroundColor)}
                                    </strong>
                                </div>
                            </div>
                        </div>
                    `
                    : ""}

                ${type === "image"
                    ? `
                        <div class="background-controls">
                            <div class="background-field">
                                <label for="backgroundUpload">
                                    Upload Image
                                </label>

                                <input
                                    type="file"
                                    id="backgroundUpload"
                                    accept="image/png,image/jpeg,image/webp"
                                >
                            </div>

                            <div class="background-field">
                                <label for="backgroundUrl">
                                    Or Paste Image URL
                                </label>

                                <input
                                    id="backgroundUrl"
                                    type="url"
                                    value="${safe(urlValue)}"
                                    placeholder="https://example.com/image.jpg"
                                >

                                <button
                                    type="button"
                                    class="background-apply"
                                    data-background-url
                                >
                                    Apply Image URL
                                </button>
                            </div>

                            <div class="background-field">
                                <div class="background-value">
                                    <label for="backgroundOpacity">
                                        Overlay Strength
                                    </label>

                                    <strong>
                                        ${appearance.backgroundOpacity}%
                                    </strong>
                                </div>

                                <input
                                    id="backgroundOpacity"
                                    type="range"
                                    min="0"
                                    max="100"
                                    step="5"
                                    value="${appearance.backgroundOpacity}"
                                >
                            </div>

                            <div class="background-field">
                                <label>Image Fit</label>

                                <div class="builder-options">
                                    ${[
                                        ["cover", "Fill Screen"],
                                        ["contain", "Fit Image"]
                                    ].map(([id, label]) => `
                                        <button
                                            type="button"
                                            class="builder-option ${appearance.backgroundFit === id ? "selected" : ""}"
                                            data-background-fit="${id}"
                                        >
                                            ${label}
                                        </button>
                                    `).join("")}
                                </div>
                            </div>
                        </div>
                    `
                    : ""}

                <div class="studio-divider"></div>

                <button
                    type="button"
                    class="reset-button"
                    data-background-reset
                >
                    ↺ Reset Background Only
                </button>
            </section>
        `;
    }

    // ==========================================
    // 21. SUBJECT COVER STUDIO
    // ==========================================

    function coverEditorCard(subject) {
        return `
            <article class="cover-editor-card">
                <div class="cover-editor-preview">
                    ${coverArtwork(subject, true)}
                </div>

                <div class="cover-editor-details">
                    <strong>${safe(subject.id)}</strong>
                    <small>${safe(subject.name)}</small>

                    <button
                        type="button"
                        class="cover-edit-button"
                        data-cover-edit="${safe(subject.id)}"
                        aria-label="Customize ${safe(subject.id)} cover"
                    >
                        Customize Cover
                    </button>
                </div>
            </article>
        `;
    }

    function subjectCoverStudio() {
        return `
            <section class="studio-panel builder-panel">
                <div class="studio-heading">
                    <h2>Subject Cover Studio</h2>

                    <p>
                        Select a subject to open its pop-up editor.
                    </p>
                </div>

                <div class="cover-editor-grid">
                    ${D.subjects.map(coverEditorCard).join("")}
                </div>

                <p class="status">
                    Each cover is saved separately in this browser.
                    Original subject files remain unchanged.
                </p>
            </section>
        `;
    }

    // ==========================================
    // 22. COVER EDITOR MODAL
    // ==========================================

    const modal = document.createElement("div");

    modal.id = "pandoraCoverModal";
    modal.className = "cover-modal-overlay";
    modal.hidden = true;

    document.body.appendChild(modal);

    function modalContent(subject) {
        const cover = getCover(subject.id);
        const type = cover.type || "default";

        return `
            <div
                class="cover-modal-dialog"
                role="dialog"
                aria-modal="true"
                aria-labelledby="coverModalTitle"
                tabindex="-1"
            >
                <div class="cover-modal-header">
                    <div>
                        <h2 id="coverModalTitle">
                            Edit ${safe(subject.id)} Cover
                        </h2>

                        <p>${safe(subject.name)}</p>
                    </div>

                    <button
                        type="button"
                        class="cover-modal-close"
                        data-cover-close
                        aria-label="Close cover editor"
                    >
                        ×
                    </button>
                </div>

                <div class="cover-modal-body">
                    <div class="cover-modal-preview-shell">
                        ${coverArtwork(subject, true)}

                        <div class="cover-modal-preview-details">
                            <strong>${safe(subject.id)}</strong>
                            <small>${safe(subject.name)}</small>
                        </div>
                    </div>

                    <p class="cover-modal-hint">
                        Changes apply and save automatically.
                    </p>

                    <div class="cover-modal-tabs">
                        ${[
                            ["default", "Default"],
                            ["preset", "Design"],
                            ["color", "Color"],
                            ["image", "Image"]
                        ].map(([id, label]) => `
                            <button
                                type="button"
                                class="cover-modal-tab ${type === id ? "selected" : ""}"
                                data-cover-type="${id}"
                                data-cover-id="${safe(subject.id)}"
                                aria-pressed="${type === id}"
                            >
                                ${label}
                            </button>
                        `).join("")}
                    </div>

                    ${type === "default"
                        ? `
                            <div class="cover-modal-message">
                                <strong>Original Subject Cover</strong>

                                <p>
                                    Uses the original pastel color
                                    assigned to ${safe(subject.id)}.
                                </p>
                            </div>
                        `
                        : ""}

                    ${type === "preset"
                        ? `
                            <div class="cover-preset-grid">
                                ${Object.entries(coverDesigns).map(
                                    ([id, data]) => `
                                        <button
                                            type="button"
                                            class="cover-preset design-${id} ${cover.design === id ? "selected" : ""}"
                                            data-cover-preset="${id}"
                                            data-cover-id="${safe(subject.id)}"
                                            aria-pressed="${cover.design === id}"
                                        >
                                            <span>${safe(data[1])}</span>
                                            <small>${safe(data[0])}</small>
                                        </button>
                                    `
                                ).join("")}
                            </div>
                        `
                        : ""}

                    ${type === "color"
                        ? `
                            <div class="background-controls">
                                <div class="background-field">
                                    <label for="coverColor">
                                        Custom Cover Color
                                    </label>

                                    <div class="background-color-row">
                                        <input
                                            id="coverColor"
                                            type="color"
                                            data-cover-id="${safe(subject.id)}"
                                            value="${validHex(cover.color)
                                                ? cover.color
                                                : "#f5d6d3"}"
                                        >

                                        <strong>
                                            ${safe(cover.color || "#f5d6d3")}
                                        </strong>
                                    </div>
                                </div>
                            </div>
                        `
                        : ""}

                    ${type === "image"
                        ? `
                            <div class="background-controls">
                                <div class="background-field">
                                    <label for="coverUpload">
                                        Upload Cover Image
                                    </label>

                                    <input
                                        id="coverUpload"
                                        type="file"
                                        data-cover-id="${safe(subject.id)}"
                                        accept="image/jpeg,image/png,image/webp"
                                    >

                                    <p class="background-help">
                                        JPG, PNG, or WebP.
                                        Images are compressed and saved
                                        locally in this browser.
                                    </p>
                                </div>
                            </div>
                        `
                        : ""}
                </div>

                <div class="cover-modal-footer">
                    <button
                        type="button"
                        class="reset-button"
                        data-cover-reset="${safe(subject.id)}"
                    >
                        ↺ Reset Cover
                    </button>

                    <button
                        type="button"
                        class="cover-modal-done"
                        data-cover-close
                    >
                        Done
                    </button>
                </div>
            </div>
        `;
    }

    function renderModal(focusSelector = null) {
        if (!editingCover) return;

        const subject = D.subjects.find(
            (item) => item.id === editingCover
        );

        if (!subject) {
            closeCoverModal();
            return;
        }

        const previousScroll = modal.querySelector(
            ".cover-modal-body"
        )?.scrollTop ?? 0;

        modal.innerHTML = modalContent(subject);
        modal.hidden = false;

        document.body.classList.add("cover-modal-open");

        const body = modal.querySelector(".cover-modal-body");

        if (body) {
            body.scrollTop = previousScroll;
        }

        if (focusSelector) {
            const control = modal.querySelector(focusSelector);

            if (control) {
                control.focus({ preventScroll: true });
                return;
            }
        }

        modal.querySelector(".cover-modal-dialog")
            ?.focus({ preventScroll: true });
    }

    function openCoverModal(id, trigger) {
        if (!subjectExists(id)) return;

        modalReturnFocus = trigger || document.activeElement;
        editingCover = id;

        renderModal();
    }

    function closeCoverModal() {
        editingCover = null;

        modal.hidden = true;
        modal.innerHTML = "";

        document.body.classList.remove("cover-modal-open");

        if (modalReturnFocus?.isConnected) {
            modalReturnFocus.focus({ preventScroll: true });
        }

        modalReturnFocus = null;
    }

    function refreshAfterCoverChange() {
        const scroll = window.scrollY;

        render();

        window.scrollTo(0, scroll);

        if (editingCover) {
            renderModal();
        }
    }

    // ==========================================
    // 23. SETTINGS PAGE
    // ==========================================

    function settings() {
        const currentTheme = appearance.theme === "builder"
            ? [
                bases[appearance.base][0],
                styles[appearance.style],
                modes[appearance.mode]
            ].join(" ")
            : themes[appearance.theme]?.[0] || "Soft Academia";

        return `
            ${head(
                "Theme Studio",
                "Personalize your academic workspace.",
                true
            )}

            <div class="theme-studio">
                <div>
                    <section class="studio-panel">
                        <div class="studio-heading">
                            <h2>Curated Themes</h2>
                            <p>Ten ready-made palettes.</p>
                        </div>

                        <div class="theme-grid">
                            ${curatedThemeCards()}
                        </div>

                        <div class="studio-divider"></div>

                        <div class="studio-heading">
                            <h2>Accent Colors</h2>
                            <p>Customize buttons and highlights.</p>
                        </div>

                        <div class="accent-grid">
                            ${accents.map((color) => `
                                <button
                                    type="button"
                                    class="accent-choice ${appearance.accent === color ? "selected" : ""}"
                                    style="--choice-color:${color}"
                                    data-accent="${color}"
                                    aria-label="Accent ${color}"
                                >
                                    ${appearance.accent === color
                                        ? "✓"
                                        : ""}
                                </button>
                            `).join("")}
                        </div>

                        <button
                            type="button"
                            class="text-action"
                            data-accent=""
                        >
                            Use preset accent
                        </button>
                    </section>

                    ${themeBuilder()}

                    ${backgroundStudio()}

                    ${subjectCoverStudio()}

                    <section class="studio-panel builder-panel">
                        <div class="studio-heading">
                            <h2>Layout Preferences</h2>
                            <p>Customize corners and spacing.</p>
                        </div>

                        <div class="builder-section">
                            <label class="builder-label">
                                Card Corners
                            </label>

                            <div class="option-group">
                                ${[
                                    ["rounded", "Rounded"],
                                    ["square", "Square"]
                                ].map(([id, label]) => `
                                    <button
                                        type="button"
                                        class="option-btn ${appearance.corners === id ? "selected" : ""}"
                                        data-corners="${id}"
                                    >
                                        ${label}
                                    </button>
                                `).join("")}
                            </div>
                        </div>

                        <div class="builder-section">
                            <label class="builder-label">
                                Card Spacing
                            </label>

                            <div class="option-group">
                                ${[
                                    ["comfortable", "Comfortable"],
                                    ["compact", "Compact"]
                                ].map(([id, label]) => `
                                    <button
                                        type="button"
                                        class="option-btn ${appearance.density === id ? "selected" : ""}"
                                        data-density="${id}"
                                    >
                                        ${label}
                                    </button>
                                `).join("")}
                            </div>
                        </div>

                        <div class="studio-divider"></div>

                        <button
                            type="button"
                            class="reset-button"
                            data-reset-appearance
                        >
                            ↺ Reset Appearance Settings
                        </button>
                    </section>
                </div>

                <section class="studio-panel preview-panel">
                    <div class="studio-heading">
                        <h2>Live Preview</h2>
                        <p>Changes apply across Pandora immediately.</p>
                    </div>

                    <div class="preview-area">
                        <div class="preview-top">
                            <strong>PANDORA</strong>
                            <span>✿</span>
                        </div>

                        <div class="preview-resource">
                            <div class="preview-file">📄</div>

                            <div class="preview-info">
                                <strong>Network Map Module 1</strong>
                                <small>GED0083 · PDF</small>
                            </div>

                            <div class="preview-button">Open</div>
                        </div>

                        <div class="preview-chips">
                            <span class="preview-chip active">All</span>
                            <span class="preview-chip">PDF</span>
                            <span class="preview-chip">Gizmo</span>
                        </div>
                    </div>

                    <div class="preview-summary">
                        <span>Theme</span>
                        <strong>${safe(currentTheme)}</strong>

                        <span>Accent</span>
                        <strong>
                            ${appearance.accent ? "Custom" : "Preset"}
                        </strong>

                        <span>Background</span>
                        <strong>${safe(appearance.backgroundType)}</strong>

                        <span>Corners</span>
                        <strong>${safe(appearance.corners)}</strong>

                        <span>Spacing</span>
                        <strong>${safe(appearance.density)}</strong>
                    </div>
                </section>
            </div>
        `;
    }

    // ==========================================
    // 24. EXISTING FEATURE STYLES
    // ==========================================

    function installStyles() {
        const style = document.createElement("style");
        style.id = "pandora-extra-styles";

        style.textContent = `
            .builder-panel {
                margin-top: 20px;
            }

            .builder-heading {
                display: flex;
                align-items: center;
                justify-content: space-between;
                flex-wrap: wrap;
                gap: 12px;
            }

            .builder-heading h2 {
                margin: 0 0 6px;
                font: 700 22px Georgia, serif;
            }

            .builder-heading p {
                color: var(--muted);
                font-size: 14px;
                margin: 0;
            }

            .builder-count {
                border-radius: 999px;
                background: var(--panel-rose);
                padding: 7px 12px;
                font-size: 12px;
            }

            .builder-section {
                margin-top: 22px;
            }

            .builder-label {
                display: block;
                font-weight: 650;
                margin-bottom: 11px;
            }

            .builder-colors {
                display: grid;
                grid-template-columns: repeat(9, minmax(0, 1fr));
                gap: 9px;
            }

            .builder-color {
                min-width: 0;
                border: 2px solid var(--border);
                background: var(--panel-soft);
                color: var(--text);
                border-radius: var(--small-radius);
                padding: 9px 4px;
                display: grid;
                justify-items: center;
                gap: 7px;
            }

            .builder-color-dot {
                width: 34px;
                height: 34px;
                border-radius: 50%;
            }

            .builder-color-name {
                font-size: 11px;
            }

            .builder-color.selected,
            .builder-option.selected {
                border-color: var(--accent);
                background: var(--panel-rose);
            }

            .builder-options {
                display: flex;
                flex-wrap: wrap;
                gap: 9px;
            }

            .builder-option {
                border: 1px solid var(--border);
                border-radius: var(--small-radius);
                padding: 10px 16px;
                background: var(--panel-soft);
                color: var(--text);
            }

            .builder-result {
                margin-top: 23px;
                padding: 16px;
                border-radius: var(--small-radius);
                background: var(--panel-soft);
                border: 1px solid var(--border);
            }

            .builder-result-top {
                display: flex;
                justify-content: space-between;
                gap: 12px;
                flex-wrap: wrap;
            }

            .builder-result-top small {
                color: var(--muted);
            }

            .builder-preview-colors {
                display: flex;
                overflow: hidden;
                height: 36px;
                border-radius: var(--small-radius);
                margin-top: 13px;
            }

            .builder-preview-colors span {
                flex: 1;
            }

            /* Background Studio */

            body[data-background="color"] {
                background-color: var(--bg);
            }

            body[data-background="color"] main {
                background-color: var(--bg);
            }

            body[data-background="image"]::before {
                display: none;
            }

            body[data-background="image"] main {
                background-image:
                    linear-gradient(
                        var(--background-overlay),
                        var(--background-overlay)
                    ),
                    var(--background-image);

                background-size:
                    cover,
                    var(--background-fit, cover);

                background-position: center;
                background-repeat: no-repeat;
                background-attachment: fixed;
            }

            body[data-background="image"] .content {
                background: transparent;
            }

            .background-mode-grid {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
            }

            .background-mode {
                border: 1px solid var(--border);
                border-radius: var(--small-radius);
                padding: 12px;
                background: var(--panel-soft);
                color: var(--text);
            }

            .background-mode.selected {
                border-color: var(--accent);
                background: var(--panel-rose);
                font-weight: 700;
            }

            .background-controls {
                display: grid;
                gap: 17px;
                margin-top: 20px;
            }

            .background-field {
                display: grid;
                gap: 9px;
            }

            .background-field label {
                font-weight: 650;
                font-size: 14px;
            }

            .background-field input[type="url"],
            .background-field input[type="file"] {
                width: 100%;
                min-width: 0;
                padding: 12px;
                background: var(--panel-soft);
                color: var(--text);
                border: 1px solid var(--border);
                border-radius: var(--small-radius);
            }

            .background-color-row {
                display: flex;
                align-items: center;
                gap: 12px;
            }

            .background-color-row input[type="color"] {
                width: 64px;
                height: 46px;
                border: 1px solid var(--border);
                border-radius: var(--small-radius);
                cursor: pointer;
            }

            .background-field input[type="range"] {
                width: 100%;
                accent-color: var(--accent);
            }

            .background-value {
                display: flex;
                justify-content: space-between;
                gap: 10px;
            }

            .background-apply {
                border: 0;
                border-radius: var(--small-radius);
                padding: 11px 16px;
                background: var(--accent);
                color: var(--button-text, #ffffff);
            }

            .background-help {
                color: var(--muted);
                font-size: 12px;
                line-height: 1.5;
            }

            /* Subject Cover Studio */

            .cover-editor-grid {
                display: grid;
                grid-template-columns: repeat(2, minmax(0, 1fr));
                gap: 12px;
            }

            .cover-editor-card {
                min-width: 0;
                border: 1px solid var(--border);
                border-radius: var(--small-radius);
                overflow: hidden;
                background: var(--panel-soft);
            }

            .cover-editor-preview {
                height: 112px;
                position: relative;
                overflow: hidden;
            }

            .cover-editor-preview > .cover-modal-preview {
                height: 100%;
            }

            .cover-editor-details {
                padding: 12px;
                display: grid;
                gap: 5px;
            }

            .cover-editor-details strong {
                font: 700 17px Georgia, serif;
            }

            .cover-editor-details small {
                color: var(--muted);
                line-height: 1.4;
            }

            .cover-edit-button {
                margin-top: 7px;
                background: var(--panel);
                color: var(--accent-strong);
                border: 1px solid var(--border);
                border-radius: var(--small-radius);
                padding: 10px;
            }

            .cover-edit-button:hover {
                background: var(--panel-rose);
            }

            .cover,
            .cover-modal-preview {
                position: relative;
                overflow: hidden;
            }

            .cover-modal-preview {
                min-height: 115px;
                display: grid;
                place-items: center;
            }

            .cover-modal-preview .cover-symbol {
                font-size: 52px;
            }

            .subject-cover-image {
                position: absolute;
                inset: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
                display: block;
            }

            .design-floral {
                background: linear-gradient(130deg, #f7dce5, #f9eaf0);
                color: #af718d;
            }

            .design-stars {
                background: linear-gradient(130deg, #e0d8f5, #f1e8fc);
                color: #9071bc;
            }

            .design-clouds {
                background: linear-gradient(130deg, #dcecff, #f0f8ff);
                color: #749dc9;
            }

            .design-grid {
                background-color: #e2e9dc;
                background-image:
                    linear-gradient(#aec3ad55 1px, transparent 1px),
                    linear-gradient(90deg, #aec3ad55 1px, transparent 1px);
                background-size: 18px 18px;
                color: #698b6a;
            }

            .design-waves {
                background: repeating-radial-gradient(
                    circle at bottom left,
                    #f5dcbf 0 14px,
                    #fff2e1 15px 28px
                );
                color: #ae845e;
            }

            .design-minimal {
                background: #eee9e5;
                color: #776e6a;
            }

            .cover[class*="design-"] .cover-symbol,
            .cover-modal-preview[class*="design-"] .cover-symbol {
                color: inherit;
                opacity: 0.85;
            }

            /* Cover Editor Modal */

            .cover-modal-overlay[hidden] {
                display: none !important;
            }

            .cover-modal-overlay {
                position: fixed;
                inset: 0;
                z-index: 9999;
                padding: 18px;
                background: rgba(16, 12, 19, 0.72);
                backdrop-filter: blur(5px);
                display: grid;
                place-items: center;
            }

            body.cover-modal-open {
                overflow: hidden;
            }

            .cover-modal-dialog {
                width: min(100%, 620px);
                max-height: calc(100dvh - 36px);
                display: flex;
                flex-direction: column;
                overflow: hidden;
                background: var(--panel);
                color: var(--text);
                border: 1px solid var(--border);
                border-radius: var(--card-radius);
                box-shadow: 0 24px 75px rgba(0,0,0,0.35);
                outline: none;
            }

            .cover-modal-header {
                padding: 19px 22px;
                border-bottom: 1px solid var(--border);
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                gap: 16px;
                flex-shrink: 0;
            }

            .cover-modal-header h2 {
                margin: 0 0 6px;
                font: 700 23px Georgia, serif;
            }

            .cover-modal-header p {
                margin: 0;
                color: var(--muted);
                font-size: 13px;
            }

            .cover-modal-close {
                width: 36px;
                height: 36px;
                flex-shrink: 0;
                border: 1px solid var(--border);
                border-radius: var(--small-radius);
                background: var(--panel-soft);
                color: var(--text);
                font-size: 25px;
            }

            .cover-modal-body {
                flex: 1;
                min-height: 0;
                overflow-y: auto;
                padding: 19px 22px;
            }

            .cover-modal-preview-shell {
                background: var(--panel-soft);
                border: 1px solid var(--border);
                border-radius: var(--small-radius);
                overflow: hidden;
            }

            .cover-modal-preview-shell .cover-modal-preview {
                height: 145px;
            }

            .cover-modal-preview-details {
                display: grid;
                gap: 4px;
                padding: 12px 16px;
            }

            .cover-modal-preview-details strong {
                font: 700 18px Georgia, serif;
            }

            .cover-modal-preview-details small {
                color: var(--muted);
                font-size: 12px;
            }

            .cover-modal-hint {
                font-size: 12px;
                color: var(--muted);
                margin: 12px 0;
            }

            .cover-modal-tabs {
                display: grid;
                grid-template-columns: repeat(4, minmax(0, 1fr));
                gap: 8px;
                margin: 17px 0;
            }

            .cover-modal-tab {
                min-width: 0;
                padding: 12px 6px;
                border: 1px solid var(--border);
                border-radius: var(--small-radius);
                background: var(--panel-soft);
                color: var(--text);
            }

            .cover-modal-tab.selected {
                border-color: var(--accent);
                background: var(--panel-rose);
                font-weight: 700;
            }

            .cover-modal-message {
                padding: 17px;
                background: var(--panel-soft);
                border: 1px solid var(--border);
                border-radius: var(--small-radius);
            }

            .cover-modal-message p {
                margin: 8px 0 0;
                color: var(--muted);
                font-size: 13px;
            }

            .cover-preset-grid {
                display: grid;
                grid-template-columns: repeat(3, minmax(0, 1fr));
                gap: 10px;
            }

            .cover-preset {
                border: 2px solid var(--border);
                border-radius: var(--small-radius);
                min-height: 100px;
                padding: 12px;
                color: #59465d;
                display: grid;
                gap: 5px;
                place-items: center;
            }

            .cover-preset span {
                font-size: 32px;
            }

            .cover-preset small {
                font-size: 12px;
            }

            .cover-preset.selected {
                border-color: var(--accent);
                outline: 1px solid var(--accent);
                outline-offset: 2px;
            }

            .cover-modal-footer {
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;
                gap: 12px;
                padding: 15px 22px;
                border-top: 1px solid var(--border);
            }

            .cover-modal-done {
                border: 0;
                border-radius: var(--small-radius);
                padding: 12px 26px;
                background: var(--accent);
                color: var(--button-text, #ffffff);
                font-weight: 650;
            }

            body[data-theme="builder"] .btn:not(.outline),
            body[data-theme="builder"] .chip.active,
            body[data-theme="builder"] .preview-button,
            body[data-theme="builder"] .preview-chip.active {
                color: var(--button-text);
            }

            @media (max-width: 1100px) {
                .builder-colors {
                    grid-template-columns: repeat(5, minmax(0, 1fr));
                }
            }

            @media (max-width: 620px) {
                .builder-colors {
                    grid-template-columns: repeat(3, minmax(0, 1fr));
                }

                .cover-editor-grid {
                    grid-template-columns: repeat(2, minmax(0, 1fr));
                }

                .cover-preset-grid {
                    grid-template-columns: repeat(2, minmax(0, 1fr));
                }

                .cover-modal-overlay {
                    padding: 10px;
                }

                .cover-modal-dialog {
                    max-height: calc(100dvh - 20px);
                }

                .cover-modal-header,
                .cover-modal-body,
                .cover-modal-footer {
                    padding-left: 15px;
                    padding-right: 15px;
                }
            }
        `;

        document.head.appendChild(style);
    }

    // ==========================================
    // 25. NEW ACADEMIC LIBRARY STYLES
    // ==========================================

    function installLibraryStyles() {
        const style = document.createElement("style");
        style.id = "pandora-library-styles";

        style.textContent = `
            /* Subject Summary */

            .library-stats {
                display: grid;
                grid-template-columns: repeat(2, minmax(0, 1fr));
                gap: 14px;
                margin: 0 0 22px;
            }

            .library-stat {
                display: flex;
                align-items: center;
                gap: 14px;
                padding: 18px 20px;
                background: var(--panel);
                border: 1px solid var(--border);
                border-radius: var(--card-radius);
                box-shadow: var(--shadow);
            }

            .library-stat-icon {
                width: 44px;
                height: 44px;
                display: grid;
                place-items: center;
                flex-shrink: 0;
                background: var(--panel-rose);
                color: var(--accent-strong);
                border-radius: var(--small-radius);
                font-size: 22px;
            }

            .library-stat div {
                display: grid;
                gap: 2px;
            }

            .library-stat strong {
                color: var(--text);
                font: 700 24px Georgia, serif;
            }

            .library-stat small {
                color: var(--muted);
                font-size: 12px;
            }

            /* Module Accordion */

            .academic-module-list {
                display: grid;
                gap: 13px;
            }

            .academic-module {
                overflow: hidden;
                background: var(--panel);
                border: 1px solid var(--border);
                border-radius: var(--card-radius);
                box-shadow: var(--shadow);
            }

            .academic-module-heading {
                display: flex;
                align-items: center;
                gap: 14px;
                min-height: 80px;
                padding: 14px 18px;
                cursor: pointer;
                list-style: none;
                transition: background 150ms ease;
            }

            .academic-module-heading::-webkit-details-marker {
                display: none;
            }

            .academic-module-heading::marker {
                content: "";
            }

            .academic-module-heading:hover {
                background: var(--panel-soft);
            }

            .academic-module-number {
                width: 48px;
                height: 48px;
                display: grid;
                place-items: center;
                flex-shrink: 0;
                background: var(--panel-rose);
                color: var(--accent-strong);
                border-radius: var(--small-radius);
                font: 700 20px Georgia, serif;
            }

            .academic-module-title {
                display: grid;
                gap: 3px;
                min-width: 0;
                flex: 1;
            }

            .academic-module-title strong {
                color: var(--text);
                font: 700 18px Georgia, serif;
            }

            .academic-module-title small {
                color: var(--muted);
                font-size: 12px;
            }

            .academic-module-chevron {
                font-size: 25px;
                color: var(--accent-strong);
                transition: transform 150ms ease;
            }

            .academic-module[open] .academic-module-chevron {
                transform: rotate(180deg);
            }

            .academic-module-body {
                padding: 0 14px 14px;
                display: grid;
                gap: 8px;
            }

            /* Entire Resource Row */

            .library-row {
                display: flex;
                align-items: stretch;
                gap: 0;
                min-width: 0;
                background: var(--panel-soft);
                border: 1px solid var(--border);
                border-radius: var(--small-radius);
                transition:
                    border-color 150ms ease,
                    background 150ms ease,
                    transform 150ms ease;
            }

            .library-row:hover {
                border-color: var(--accent);
                background: var(--panel-rose);
                transform: translateY(-1px);
            }

            .library-row:focus-within {
                border-color: var(--accent-strong);
            }

            .library-row-primary {
                display: flex;
                align-items: center;
                gap: 14px;
                flex: 1;
                min-width: 0;
                padding: 14px 16px;
                text-decoration: none;
                color: var(--text);
                border-radius: var(--small-radius);
            }

            .library-row-primary:hover {
                color: var(--text);
            }

            .library-row-primary.unavailable {
                cursor: default;
            }

            .library-row-icon {
                width: 48px;
                height: 48px;
                display: grid;
                place-items: center;
                flex-shrink: 0;
                border-radius: var(--small-radius);
                background: var(--panel-rose);
                color: var(--text);
                font-size: 23px;
            }

            .library-row-icon.tone-pdf {
                background: #f4dedd;
            }

            .library-row-icon.tone-form {
                background: #ebe2f5;
            }

            .library-row-icon.tone-gizmo {
                background: #dcebe3;
            }

            .library-row-icon.tone-reviewer {
                background: #f7e8cf;
            }

            body[data-theme="cherry"] .library-row-icon,
            body[data-theme="midnight"] .library-row-icon,
            body[data-theme="builder"] .library-row-icon {
                background: var(--panel-rose);
            }

            .library-row-info {
                display: grid;
                gap: 4px;
                flex: 1;
                min-width: 0;
            }

            .library-row-info strong {
                color: var(--text);
                font: 700 16px/1.4 Georgia, serif;
                overflow-wrap: anywhere;
            }

            .library-row-meta {
                color: var(--muted);
                font-size: 12px;
                line-height: 1.5;
                text-transform: capitalize;
            }

            .library-row-description {
                color: var(--muted);
                font-size: 12px;
                line-height: 1.5;
            }

            .library-row-arrow {
                color: var(--accent-strong);
                font-size: 18px;
                flex-shrink: 0;
            }

            /* Independent Actions */

            .library-row-actions {
                display: flex;
                align-items: center;
                gap: 8px;
                padding: 10px 12px 10px 4px;
            }

            .library-edit {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: 5px;
                min-height: 38px;
                padding: 8px 12px;
                text-decoration: none;
                background: var(--panel);
                color: var(--accent-strong);
                border: 1px solid var(--border);
                border-radius: var(--small-radius);
                font-size: 13px;
                white-space: nowrap;
            }

            .library-edit:hover {
                background: var(--panel-rose);
                border-color: var(--accent);
            }

            .library-heart {
                width: 40px;
                height: 40px;
                display: grid;
                place-items: center;
                flex-shrink: 0;
                background: var(--panel);
                color: var(--muted);
                border: 1px solid var(--border);
                border-radius: var(--small-radius);
                font-size: 23px;
                line-height: 1;
            }

            .library-heart:hover,
            .library-heart.active {
                background: var(--panel-rose);
                color: var(--accent-strong);
                border-color: var(--accent);
            }

            /* Compact Setting */

            body[data-density="compact"] .academic-module-heading {
                min-height: 65px;
                padding: 10px 14px;
            }

            body[data-density="compact"] .library-row-primary {
                padding: 9px 12px;
            }

            body[data-density="compact"] .library-row-icon {
                width: 38px;
                height: 38px;
                font-size: 19px;
            }

            body[data-density="compact"] .library-row-info strong {
                font-size: 14px;
            }

            /* Mobile */

            @media (max-width: 700px) {
                .library-stats {
                    gap: 9px;
                }

                .library-stat {
                    padding: 12px;
                    gap: 9px;
                }

                .library-stat-icon {
                    width: 38px;
                    height: 38px;
                    font-size: 18px;
                }

                .library-stat strong {
                    font-size: 20px;
                }

                .academic-module-heading {
                    padding: 12px;
                    min-height: 70px;
                }

                .academic-module-body {
                    padding: 0 9px 9px;
                }

                .library-row-primary {
                    gap: 9px;
                    padding: 11px;
                }

                .library-row-icon {
                    width: 38px;
                    height: 38px;
                    font-size: 19px;
                }

                .library-row-info strong {
                    font-size: 14px;
                }

                .library-row-arrow {
                    display: none;
                }

                .library-row-actions {
                    padding: 7px 8px 7px 0;
                    gap: 5px;
                }

                .library-edit {
                    padding: 7px;
                    min-height: 36px;
                }

                .library-edit span {
                    display: none;
                }

                .library-heart {
                    width: 36px;
                    height: 36px;
                    font-size: 20px;
                }
            }

            @media (max-width: 440px) {
                .library-row {
                    flex-wrap: wrap;
                }

                .library-row-primary {
                    flex-basis: 100%;
                }

                .library-row-actions {
                    width: 100%;
                    justify-content: flex-end;
                    padding: 0 10px 10px;
                }
            }

            @media (prefers-reduced-motion: reduce) {
                .library-row,
                .academic-module-chevron {
                    transition: none;
                }

                .library-row:hover {
                    transform: none;
                }
            }
        `;

        document.head.appendChild(style);
    }

    // ==========================================
    // 26. RENDER
    // ==========================================

    function render() {
        nav();

        const views = {
            home,
            subjects,
            reviewers: () => library("reviewer"),
            practice: () => library("practice"),
            favorites,
            settings
        };

        $("content").innerHTML = (views[page] || home)();
    }

    // ==========================================
    // 27. CLICK EVENTS
    // ==========================================

    document.addEventListener("click", (event) => {
        const heading = event.target.closest(
            ".academic-module-heading"
        );

        if (!heading) return;

        const module = heading.closest(
            "details.academic-module"
        );

        if (!module) return;

        event.preventDefault();
        event.stopImmediatePropagation();

        module.open = !module.open;
    }, true);

    document.addEventListener("click", (event) => {
        if (editingCover && event.target === modal) {
            closeCoverModal();
            return;
        }

        const element = event.target.closest(
            [
                "[data-page]",
                "[data-subject]",
                "[data-back]",
                "[data-platform]",
                "[data-category]",
                "[data-fav]",
                "button[data-theme]",
                "[data-accent]",
                "[data-corners]",
                "[data-density]",
                "[data-reset-appearance]",
                "[data-dropdown-toggle]",
                "[data-subject-option]",
                "[data-builder-base]",
                "[data-builder-style]",
                "[data-builder-mode]",
                "[data-background-type]",
                "[data-background-fit]",
                "[data-background-reset]",
                "[data-background-url]",
                "[data-cover-edit]",
                "[data-cover-close]",
                "[data-cover-type]",
                "[data-cover-preset]",
                "[data-cover-reset]"
            ].join(",")
        );


        if (!element) {
            if (!event.target.closest(".custom-dropdown")) {
                closeDropdown();
            }

            return;
        }


        if (element.hasAttribute("data-cover-close")) {
            closeCoverModal();
            return;
        }

        if (element.hasAttribute("data-cover-edit")) {
            openCoverModal(
                element.dataset.coverEdit,
                element
            );
            return;
        }

        if (element.hasAttribute("data-cover-type")) {
            const type = element.dataset.coverType;
            const id = element.dataset.coverId;

            if (!["default", "preset", "color", "image"].includes(type)) {
                return;
            }

            updateCover(id, { type });
            return;
        }

        if (element.hasAttribute("data-cover-preset")) {
            const design = element.dataset.coverPreset;

            if (!Object.hasOwn(coverDesigns, design)) {
                return;
            }

            updateCover(element.dataset.coverId, {
                type: "preset",
                design
            });

            return;
        }

        if (element.hasAttribute("data-cover-reset")) {
            resetCover(element.dataset.coverReset);
            return;
        }

        if (element.hasAttribute("data-dropdown-toggle")) {
            toggleDropdown();
            return;
        }

        if (element.hasAttribute("data-subject-option")) {
            subjectFilter = element.dataset.subjectOption;
            render();
            return;
        }

        if (element.hasAttribute("data-page")) {
            page = element.dataset.page;
            selectedSubject = null;
            platform = "All";
            subjectFilter = "All";
            categoryFilter = "All";

            closeCoverModal();
            render();

            document.querySelector(".sidebar")
                ?.classList.remove("open");

            return;
        }

        if (element.hasAttribute("data-subject")) {
            selectedSubject = element.dataset.subject;
            page = "subjects";
            render();
            return;
        }

        if (element.hasAttribute("data-back")) {
            selectedSubject = null;
            render();
            return;
        }

        if (element.hasAttribute("data-platform")) {
            platform = element.dataset.platform;
            render();
            return;
        }

        if (element.hasAttribute("data-category")) {
            categoryFilter = element.dataset.category;
            render();
            return;
        }

        if (element.hasAttribute("data-fav")) {
            toggleFavorite(element.dataset.fav);
            return;
        }

        if (element.hasAttribute("data-theme")) {
            if (!Object.hasOwn(themes, element.dataset.theme)) return;

            updateAppearance({
                theme: element.dataset.theme,
                accent: ""
            });
            return;
        }

        if (element.hasAttribute("data-builder-base")) {
            if (!Object.hasOwn(bases, element.dataset.builderBase)) return;

            updateAppearance({
                theme: "builder",
                base: element.dataset.builderBase,
                accent: ""
            });
            return;
        }

        if (element.hasAttribute("data-builder-style")) {
            if (!Object.hasOwn(styles, element.dataset.builderStyle)) return;

            updateAppearance({
                theme: "builder",
                style: element.dataset.builderStyle,
                accent: ""
            });
            return;
        }

        if (element.hasAttribute("data-builder-mode")) {
            if (!Object.hasOwn(modes, element.dataset.builderMode)) return;

            updateAppearance({
                theme: "builder",
                mode: element.dataset.builderMode,
                accent: ""
            });
            return;
        }

        if (element.hasAttribute("data-accent")) {
            const accent = element.dataset.accent;

            if (accent && !accents.includes(accent)) return;

            updateAppearance({ accent });
            return;
        }

        if (element.hasAttribute("data-corners")) {
            const corners = element.dataset.corners;

            if (!["rounded", "square"].includes(corners)) return;

            updateAppearance({ corners });
            return;
        }

        if (element.hasAttribute("data-density")) {
            const density = element.dataset.density;

            if (!["comfortable", "compact"].includes(density)) return;

            updateAppearance({ density });
            return;
        }

        if (element.hasAttribute("data-reset-appearance")) {
            updateAppearance({ ...defaultAppearance });
            return;
        }

        if (element.hasAttribute("data-background-type")) {
            const backgroundType = element.dataset.backgroundType;

            if (!["default", "color", "image"].includes(backgroundType)) {
                return;
            }

            updateAppearance({ backgroundType });
            return;
        }

        if (element.hasAttribute("data-background-fit")) {
            const backgroundFit = element.dataset.backgroundFit;

            if (!["cover", "contain"].includes(backgroundFit)) return;

            updateAppearance({ backgroundFit });
            return;
        }

        if (element.hasAttribute("data-background-reset")) {
            updateAppearance({
                backgroundType: "default",
                backgroundImage: "",
                backgroundColor: "#f5efea",
                backgroundOpacity: 55,
                backgroundFit: "cover"
            });
            return;
        }

        if (element.hasAttribute("data-background-url")) {
            const value = $("backgroundUrl")?.value.trim();

            if (!validUrl(value)) {
                alert("Enter a valid HTTP or HTTPS image URL.");
                return;
            }

            updateAppearance({
                backgroundType: "image",
                backgroundImage: value
            });
        }
    });

    // ==========================================
    // 28. INPUT EVENTS
    // ==========================================

    document.addEventListener("change", (event) => {
        const input = event.target;

        if (input.id === "backgroundColor") {
            if (validHex(input.value)) {
                updateAppearance({
                    backgroundType: "color",
                    backgroundColor: input.value
                });
            }
            return;
        }

        if (input.id === "backgroundOpacity") {
            updateAppearance({
                backgroundOpacity: Number(input.value)
            });
            return;
        }

        if (input.id === "backgroundUpload") {
            if (input.files?.[0]) {
                uploadBackground(input.files[0]);
            }
            return;
        }

        if (input.id === "coverColor") {
            if (validHex(input.value)) {
                updateCover(input.dataset.coverId, {
                    type: "color",
                    color: input.value
                });
            }
            return;
        }

        if (input.id === "coverUpload") {
            if (input.files?.[0]) {
                uploadCover(
                    input.dataset.coverId,
                    input.files[0]
                );
            }
        }
    });

    // ==========================================
    // 29. KEYBOARD ACCESSIBILITY
    // ==========================================

    document.addEventListener("keydown", (event) => {
        if (editingCover) {
            if (event.key === "Escape") {
                event.preventDefault();
                closeCoverModal();
                return;
            }

            if (event.key === "Tab") {
                const controls = [
                    ...modal.querySelectorAll(
                        'button:not([disabled]), input:not([disabled])'
                    )
                ].filter((control) => control.getClientRects().length);

                if (!controls.length) return;

                const first = controls[0];
                const last = controls[controls.length - 1];

                if (event.shiftKey && document.activeElement === first) {
                    event.preventDefault();
                    last.focus();
                } else if (
                    !event.shiftKey &&
                    document.activeElement === last
                ) {
                    event.preventDefault();
                    first.focus();
                }
            }

            return;
        }

        if (event.key === "Escape") {
            closeDropdown();
        }
    });

    // ==========================================
    // 30. SEARCH AND MOBILE
    // ==========================================

    $("search").addEventListener("input", (event) => {
        search = event.target.value.trim();
        render();
    });

    $("mobileMenu").addEventListener("click", () => {
        document.querySelector(".sidebar")
            .classList.toggle("open");
    });

    // ==========================================
    // 31. INITIALIZE
    // ==========================================

    installStyles();
    installLibraryStyles();
    applyAppearance();
    render();

})();
