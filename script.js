const subjectMenuDefaults = {
    formatives: {
        title: "FORMATIVES",
        color: "#8b2ca3"
    },
    summatives: {
        title: "SUMMATIVES",
        color: "#2110b8"
    }
};

const themeDefaults = {
    background: "#f6f6f6",
    outline: "#343840",
    text: "#ffffff",
    nonOutlineText: "#111111"
};

const themeStorageKeys = {
    background: "theme-background",
    outline: "theme-outline",
    text: "theme-text",
    nonOutlineText: "theme-non-outline-text",
    backgroundImage: "theme-background-image"
};

const themeSolidSwatches = [
    "#000000",
    "#5c5c5c",
    "#970000",
    "#ff3434",
    "#8848f5",
    "#0b9db5",
    "#38a9ef",
    "#343840",
    "#dedb29",
    "#5273f6",
    "#0c56ba",
    "#3c241b",
    "#08bf67",
    "#adf663",
    "#ffda59",
    "#ff914d",
    "#0f9bad",
    "#8f6200"
];

const themeGradientSwatches = [
    "linear-gradient(135deg, #000000, #13105e, #3744ff)",
    "linear-gradient(135deg, #079cad, #30b7a3, #72e042)",
    "linear-gradient(135deg, #6b45ff, #bd5de0, #ff8f4e)",
    "linear-gradient(180deg, #7649e9, #b96fa5, #ffda3d)",
    "linear-gradient(135deg, #c9f6dc, #c4f4df, #8cc4ff)",
    "linear-gradient(135deg, #5ee4cd, #18aab5, #1671e5)",
    "linear-gradient(135deg, #7d4dff, #d65bce, #ff8458)",
    "linear-gradient(135deg, #2262ff, #7545ee, #e161dc)",
    "linear-gradient(135deg, #ff2733, #ff553e, #ff8744)"
];

const pageContent =
    document.getElementById("page-content");

const homeLink =
    document.getElementById("home-link");

const formativesLink =
    document.getElementById("formatives-link");

const summativesLink =
    document.getElementById("summatives-link");

const reviewersLink =
    document.getElementById("reviewers-link");

const mainNavLinks =
    document.querySelectorAll(".main-nav .nav-item");

const subjectLinks =
    document.querySelectorAll(".subject-link");

const searchInput =
    document.getElementById("search-input");

const searchContainer =
    document.querySelector(".search-container");

const cardEditorOverlay =
    document.getElementById("card-editor-overlay");

const cardEditor =
    document.getElementById("card-editor");

const cardEditorClose =
    document.getElementById("card-editor-close");

const editorSubjectCode =
    document.getElementById("editor-subject-code");

const editorImageArea =
    document.getElementById("editor-image-area");

const editorImagePreview =
    document.getElementById("editor-image-preview");

const editorImagePlaceholder =
    document.getElementById("editor-image-placeholder");

const editorAddImage =
    document.getElementById("editor-add-image");

const editorImageInput =
    document.getElementById("editor-image-input");

const editorRemoveImage =
    document.getElementById("editor-remove-image");

const editorResetButton =
    document.getElementById("editor-reset-button");

const colorOptions =
    document.querySelectorAll(".color-option");

let currentSubjectId = null;
let currentCategory = null;
let activeReviewerFilter = null;

let editorTarget = {
    type: null,
    subjectId: null,
    category: null,
    itemIndex: null
};

const homePageHTML =
    pageContent.innerHTML;

function showSearchBar() {
    if (searchContainer) {
        searchContainer.style.display = "";
    }
}

function hideSearchBar() {
    if (searchContainer) {
        searchContainer.style.display = "none";
    }
}

function getSavedThemeValue(setting) {
    const saved =
        localStorage.getItem(
            themeStorageKeys[setting]
        );

    return saved || themeDefaults[setting];
}

function applyThemeSetting(
    setting,
    value,
    save = true
) {
    const root =
        document.documentElement;

    if (setting === "background") {
        root.style.setProperty(
            "--theme-background",
            value
        );
    }

    if (setting === "outline") {
        root.style.setProperty(
            "--theme-outline",
            value
        );
    }

    if (setting === "text") {
        root.style.setProperty(
            "--theme-text",
            value
        );
    }

    if (setting === "nonOutlineText") {
        root.style.setProperty(
            "--theme-non-outline-text",
            value
        );
    }

    if (save) {
        localStorage.setItem(
            themeStorageKeys[setting],
            value
        );
    }

    if (
        setting === "background" ||
        setting === "nonOutlineText"
    ) {
        scheduleAdaptiveBackgroundTextRefresh();
    }
}

function applyThemeBackgroundImage(
    imageData,
    save = true
) {
    if (!imageData) {
        document.body.style.backgroundImage =
            "";

        document.body.classList.remove(
            "theme-has-background-image"
        );

        if (save) {
            localStorage.removeItem(
                themeStorageKeys.backgroundImage
            );
        }

        adaptiveBackgroundImageCache.src = null;
        adaptiveBackgroundImageCache.image = null;
        adaptiveBackgroundImageCache.promise = null;

        scheduleAdaptiveBackgroundTextRefresh();

        return;
    }

    document.body.style.backgroundImage =
        `url("${imageData}")`;

    document.body.classList.add(
        "theme-has-background-image"
    );

    if (save) {
        localStorage.setItem(
            themeStorageKeys.backgroundImage,
            imageData
        );
    }

    adaptiveBackgroundImageCache.src = null;
    adaptiveBackgroundImageCache.image = null;
    adaptiveBackgroundImageCache.promise = null;

    scheduleAdaptiveBackgroundTextRefresh();
}

function loadSavedTheme() {
    applyThemeSetting(
        "background",
        getSavedThemeValue("background"),
        false
    );

    applyThemeSetting(
        "outline",
        getSavedThemeValue("outline"),
        false
    );

    applyThemeSetting(
        "text",
        getSavedThemeValue("text"),
        false
    );

    applyThemeSetting(
        "nonOutlineText",
        getSavedThemeValue("nonOutlineText"),
        false
    );

    const backgroundImage =
        localStorage.getItem(
            themeStorageKeys.backgroundImage
        );

    if (backgroundImage) {
        applyThemeBackgroundImage(
            backgroundImage,
            false
        );
    }
}

function resetGlobalTheme() {
    Object.keys(themeDefaults).forEach(
        function (setting) {
            localStorage.removeItem(
                themeStorageKeys[setting]
            );

            applyThemeSetting(
                setting,
                themeDefaults[setting],
                false
            );
        }
    );

    applyThemeBackgroundImage(
        null,
        true
    );
}



/* =========================================================
   ADAPTIVE BACKGROUND TEXT
   ========================================================= */

const adaptiveBackgroundTextSelector = [
    ".page-title",
    ".subject-heading h1",
    ".breadcrumb-home",
    ".breadcrumb-slash",
    ".empty-category-message",
    ".theme-page-header h1",
    ".theme-control-title",
    ".theme-remove-background-button"
].join(", ");

const adaptiveBackgroundImageCache = {
    src: null,
    image: null,
    promise: null
};

let adaptiveRefreshFrame = null;



/* =========================================================
   COLOR HELPERS
   ========================================================= */

function clampColorChannel(value) {
    return Math.max(
        0,
        Math.min(
            255,
            Math.round(value)
        )
    );
}

function parseThemeColor(value) {
    if (!value) {
        return null;
    }

    const color =
        value.trim();

    if (
        color.startsWith("linear-gradient") ||
        color.startsWith("radial-gradient")
    ) {
        return getAverageGradientColor(
            color
        );
    }

    if (color.startsWith("#")) {
        const hex =
            color.slice(1);

        if (hex.length === 3) {
            return {
                r: parseInt(hex[0] + hex[0], 16),
                g: parseInt(hex[1] + hex[1], 16),
                b: parseInt(hex[2] + hex[2], 16)
            };
        }

        if (hex.length >= 6) {
            return {
                r: parseInt(hex.slice(0, 2), 16),
                g: parseInt(hex.slice(2, 4), 16),
                b: parseInt(hex.slice(4, 6), 16)
            };
        }
    }

    const rgbMatch =
        color.match(
            /rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)/
        );

    if (rgbMatch) {
        return {
            r: clampColorChannel(Number(rgbMatch[1])),
            g: clampColorChannel(Number(rgbMatch[2])),
            b: clampColorChannel(Number(rgbMatch[3]))
        };
    }

    return null;
}

function getAverageGradientColor(gradient) {
    const colors = [];

    const hexMatches =
        gradient.match(
            /#[0-9a-fA-F]{3,8}\b/g
        ) || [];

    hexMatches.forEach(
        function (hex) {
            const parsed =
                parseThemeColor(hex);

            if (parsed) {
                colors.push(parsed);
            }
        }
    );

    const rgbMatches =
        gradient.match(
            /rgba?\([^)]*\)/g
        ) || [];

    rgbMatches.forEach(
        function (rgb) {
            const parsed =
                parseThemeColor(rgb);

            if (parsed) {
                colors.push(parsed);
            }
        }
    );

    if (!colors.length) {
        return null;
    }

    const total =
        colors.reduce(
            function (result, color) {
                result.r += color.r;
                result.g += color.g;
                result.b += color.b;

                return result;
            },
            {
                r: 0,
                g: 0,
                b: 0
            }
        );

    return {
        r: total.r / colors.length,
        g: total.g / colors.length,
        b: total.b / colors.length
    };
}

function getRelativeLuminance(color) {
    if (!color) {
        return 1;
    }

    const channels = [
        color.r,
        color.g,
        color.b
    ].map(
        function (channel) {
            const value =
                channel / 255;

            return value <= 0.03928
                ? value / 12.92
                : Math.pow(
                    (value + 0.055) / 1.055,
                    2.4
                );
        }
    );

    return (
        0.2126 * channels[0] +
        0.7152 * channels[1] +
        0.0722 * channels[2]
    );
}

function getContrastRatio(firstColor, secondColor) {
    const first =
        getRelativeLuminance(
            firstColor
        );

    const second =
        getRelativeLuminance(
            secondColor
        );

    const lighter =
        Math.max(
            first,
            second
        );

    const darker =
        Math.min(
            first,
            second
        );

    return (
        (lighter + 0.05) /
        (darker + 0.05)
    );
}

function rgbToCss(color) {
    return `rgb(${clampColorChannel(color.r)}, ${clampColorChannel(color.g)}, ${clampColorChannel(color.b)})`;
}

function getReadableAdaptiveTextColor(backgroundColor) {
    const preferredValue =
        getSavedThemeValue(
            "nonOutlineText"
        );

    const preferredColor =
        parseThemeColor(
            preferredValue
        );

    const black = {
        r: 17,
        g: 17,
        b: 17
    };

    const white = {
        r: 255,
        g: 255,
        b: 255
    };

    const requiredContrast =
        4.5;

    if (
        preferredColor &&
        getContrastRatio(
            preferredColor,
            backgroundColor
        ) >= requiredContrast
    ) {
        return preferredValue;
    }

    const blackContrast =
        getContrastRatio(
            black,
            backgroundColor
        );

    const whiteContrast =
        getContrastRatio(
            white,
            backgroundColor
        );

    return blackContrast >= whiteContrast
        ? rgbToCss(black)
        : rgbToCss(white);
}



/* =========================================================
   BACKGROUND IMAGE CACHE
   ========================================================= */

function getAdaptiveBackgroundImage() {
    const imageData =
        localStorage.getItem(
            themeStorageKeys.backgroundImage
        );

    if (!imageData) {
        return Promise.resolve(
            null
        );
    }

    if (
        adaptiveBackgroundImageCache.src === imageData &&
        adaptiveBackgroundImageCache.image
    ) {
        return Promise.resolve(
            adaptiveBackgroundImageCache.image
        );
    }

    if (
        adaptiveBackgroundImageCache.src === imageData &&
        adaptiveBackgroundImageCache.promise
    ) {
        return adaptiveBackgroundImageCache.promise;
    }

    const image =
        new Image();

    adaptiveBackgroundImageCache.src =
        imageData;

    adaptiveBackgroundImageCache.image =
        null;

    adaptiveBackgroundImageCache.promise =
        new Promise(
            function (resolve) {
                image.onload =
                    function () {
                        adaptiveBackgroundImageCache.image =
                            image;

                        adaptiveBackgroundImageCache.promise =
                            null;

                        resolve(
                            image
                        );
                    };

                image.onerror =
                    function () {
                        adaptiveBackgroundImageCache.src =
                            null;

                        adaptiveBackgroundImageCache.image =
                            null;

                        adaptiveBackgroundImageCache.promise =
                            null;

                        resolve(
                            null
                        );
                    };

                image.src =
                    imageData;
            }
        );

    return adaptiveBackgroundImageCache.promise;
}



/* =========================================================
   SAMPLE WALLPAPER COLOR BEHIND ELEMENT
   ========================================================= */

function sampleBackgroundImageBehindElement(
    image,
    element
) {
    if (
        !image ||
        !image.naturalWidth ||
        !image.naturalHeight
    ) {
        return null;
    }

    const rect =
        element.getBoundingClientRect();

    const viewportWidth =
        window.innerWidth;

    const viewportHeight =
        window.innerHeight;

    const scale =
        Math.max(
            viewportWidth / image.naturalWidth,
            viewportHeight / image.naturalHeight
        );

    const renderedWidth =
        image.naturalWidth * scale;

    const renderedHeight =
        image.naturalHeight * scale;

    const cropX =
        (renderedWidth - viewportWidth) / 2;

    const cropY =
        (renderedHeight - viewportHeight) / 2;

    const centerX =
        rect.left +
        rect.width / 2;

    const centerY =
        rect.top +
        rect.height / 2;

    const sourceX =
        (centerX + cropX) / scale;

    const sourceY =
        (centerY + cropY) / scale;

    const sourceRadius =
        Math.max(
            4,
            Math.min(
                image.naturalWidth,
                image.naturalHeight
            ) * 0.012
        );

    const sx =
        Math.max(
            0,
            sourceX - sourceRadius
        );

    const sy =
        Math.max(
            0,
            sourceY - sourceRadius
        );

    const sw =
        Math.min(
            sourceRadius * 2,
            image.naturalWidth - sx
        );

    const sh =
        Math.min(
            sourceRadius * 2,
            image.naturalHeight - sy
        );

    if (
        sw <= 0 ||
        sh <= 0
    ) {
        return null;
    }

    const canvas =
        document.createElement(
            "canvas"
        );

    canvas.width = 1;
    canvas.height = 1;

    const context =
        canvas.getContext(
            "2d",
            {
                willReadFrequently: true
            }
        );

    if (!context) {
        return null;
    }

    try {
        context.drawImage(
            image,
            sx,
            sy,
            sw,
            sh,
            0,
            0,
            1,
            1
        );

        const pixel =
            context.getImageData(
                0,
                0,
                1,
                1
            ).data;

        return {
            r: pixel[0],
            g: pixel[1],
            b: pixel[2]
        };
    }

    catch (error) {
        return null;
    }
}

async function refreshAdaptiveBackgroundText() {
    const elements =
        document.querySelectorAll(
            adaptiveBackgroundTextSelector
        );

    if (!elements.length) {
        return;
    }

    elements.forEach(
        function (element) {
            element.classList.add(
                "adaptive-background-text"
            );
        }
    );

    const wallpaper =
        await getAdaptiveBackgroundImage();

    const fallbackBackground =
        parseThemeColor(
            getSavedThemeValue(
                "background"
            )
        ) || {
            r: 246,
            g: 246,
            b: 246
        };

    elements.forEach(
        function (element) {
            let backgroundColor =
                fallbackBackground;

            if (wallpaper) {
                const sampled =
                    sampleBackgroundImageBehindElement(
                        wallpaper,
                        element
                    );

                if (sampled) {
                    backgroundColor =
                        sampled;
                }
            }

            const textColor =
                getReadableAdaptiveTextColor(
                    backgroundColor
                );

            element.style.setProperty(
                "--adaptive-background-text",
                textColor
            );
        }
    );
}

function scheduleAdaptiveBackgroundTextRefresh() {
    if (adaptiveRefreshFrame) {
        cancelAnimationFrame(
            adaptiveRefreshFrame
        );
    }

    adaptiveRefreshFrame =
        requestAnimationFrame(
            function () {
                adaptiveRefreshFrame =
                    null;

                refreshAdaptiveBackgroundText();
            }
        );
}

function startAdaptiveBackgroundTextObserver() {
    if (!pageContent) {
        return;
    }

    const observer =
        new MutationObserver(
            function () {
                scheduleAdaptiveBackgroundTextRefresh();
            }
        );

    observer.observe(
        pageContent,
        {
            childList: true,
            subtree: true
        }
    );

    window.addEventListener(
        "resize",
        scheduleAdaptiveBackgroundTextRefresh
    );

    window.addEventListener(
        "scroll",
        scheduleAdaptiveBackgroundTextRefresh,
        {
            passive: true
        }
    );
}



/* =========================================================
   THEME SWATCHES
   ========================================================= */

function buildThemeSwatches(
    setting,
    allowGradient
) {
    const currentValue =
        getSavedThemeValue(setting);

    let values =
        [...themeSolidSwatches];

    if (allowGradient) {
        values =
            values.concat(
                themeGradientSwatches
            );
    }

    return values.map(
        function (value) {
            const selected =
                value === currentValue
                    ? " selected"
                    : "";

            return `
                <button
                    type="button"
                    class="theme-swatch${selected}"
                    data-theme-setting="${setting}"
                    data-theme-value="${encodeURIComponent(value)}"
                    style="--theme-swatch: ${value};"
                    aria-label="Theme color option"
                ></button>
            `;
        }
    ).join("");
}

function updateThemePreview(
    setting,
    value
) {
    if (setting === "outline") {
        const outlineAccent =
            document.getElementById(
                "theme-outline-preview-accent"
            );

        if (outlineAccent) {
            outlineAccent.style.background =
                value;
        }

        const textPreview =
            document.querySelector(
                ".theme-text-preview"
            );

        if (textPreview) {
            textPreview.style.background =
                value;
        }
    }

    if (setting === "text") {
        document.querySelectorAll(
            ".theme-text-preview strong, .theme-text-preview span"
        ).forEach(
            function (textElement) {
                textElement.style.color =
                    value;
            }
        );
    }

    if (setting === "nonOutlineText") {
        document.querySelectorAll(
            ".theme-non-outline-preview strong, .theme-non-outline-preview span"
        ).forEach(
            function (textElement) {
                textElement.style.color =
                    value;
            }
        );
    }
}

function updateSelectedThemeSwatch(
    setting,
    value
) {
    document.querySelectorAll(
        `.theme-swatch[data-theme-setting="${setting}"]`
    ).forEach(
        function (swatch) {
            swatch.classList.remove(
                "selected"
            );

            const swatchValue =
                decodeURIComponent(
                    swatch.dataset.themeValue
                );

            if (swatchValue === value) {
                swatch.classList.add(
                    "selected"
                );
            }
        }
    );
}

function addThemeSettingsButtonEvents() {
    const button =
        document.getElementById(
            "theme-settings-button"
        );

    if (!button) {
        return;
    }

    button.addEventListener(
        "click",
        function (event) {
            event.preventDefault();

            event.stopPropagation();

            showThemeSettingsPage();
        }
    );
}



/* =========================================================
   THEME SETTINGS PAGE
   ========================================================= */

function showThemeSettingsPage() {
    currentSubjectId = null;
    currentCategory = "theme";
    activeReviewerFilter = null;

    clearActiveNavigation();

    hideSearchBar();

    const outline =
        getSavedThemeValue(
            "outline"
        );

    const text =
        getSavedThemeValue(
            "text"
        );

    const nonOutlineText =
        getSavedThemeValue(
            "nonOutlineText"
        );

    const backgroundImage =
        localStorage.getItem(
            themeStorageKeys.backgroundImage
        );

    pageContent.innerHTML = `
        <section class="theme-page">

            <div class="theme-page-header">
                <h1>
                    ISTETIK ;P
                </h1>
            </div>

            <div class="theme-settings-columns">

                <div class="theme-settings-column">

                    <div class="theme-control-group">

                        <h2 class="theme-control-title">
                            Background
                        </h2>

                        <button
                            type="button"
                            class="theme-background-image-button"
                            id="theme-background-image-button"
                            aria-label="Add or change background image"
                        >

                            <img
                                class="theme-background-preview-image"
                                id="theme-background-preview-image"
                                src="${backgroundImage || ""}"
                                alt="Background preview"
                                style="display: ${backgroundImage ? "block" : "none"};"
                            >

                            <span
                                class="theme-background-preview-icon"
                                id="theme-background-preview-icon"
                                style="display: ${backgroundImage ? "none" : ""};"
                                aria-hidden="true"
                            >
                                ▣
                            </span>

                        </button>

                        <input
                            type="file"
                            id="theme-background-image-input"
                            accept="image/*"
                            hidden
                        >

                        <button
                            type="button"
                            class="theme-remove-background-button"
                            id="theme-remove-background-button"
                            ${backgroundImage ? "" : "hidden"}
                        >
                            Remove Background Image
                        </button>

                        <div class="theme-swatch-grid">
                            ${buildThemeSwatches(
                                "background",
                                true
                            )}
                        </div>

                    </div>

                    <div class="theme-control-group">

                        <h2 class="theme-control-title">
                            Text
                        </h2>

                        <div
                            class="theme-preview theme-text-preview"
                            style="background: ${outline};"
                        >

                            <strong
                                style="color: ${text};"
                            >
                                TEXT
                            </strong>

                            <span
                                style="color: ${text};"
                            >
                                TEXT
                            </span>

                        </div>

                        <div class="theme-swatch-grid">
                            ${buildThemeSwatches(
                                "text",
                                false
                            )}
                        </div>

                    </div>

                </div>

                <div class="theme-settings-column">

                    <div class="theme-control-group">

                        <h2 class="theme-control-title">
                            Outline
                        </h2>

                        <div
                            class="theme-preview theme-outline-preview"
                        >

                            <div
                                class="theme-outline-preview-accent"
                                id="theme-outline-preview-accent"
                                style="background: ${outline};"
                            ></div>

                            <div
                                class="theme-outline-preview-body"
                            ></div>

                        </div>

                        <div class="theme-swatch-grid">
                            ${buildThemeSwatches(
                                "outline",
                                true
                            )}
                        </div>

                    </div>

                    <div class="theme-control-group">

                        <h2 class="theme-control-title">
                            Non-Outline Text
                        </h2>

                        <div
                            class="theme-preview theme-non-outline-preview"
                        >

                            <strong
                                style="color: ${nonOutlineText};"
                            >
                                TEXT
                            </strong>

                            <span
                                style="color: ${nonOutlineText};"
                            >
                                TEXT
                            </span>

                        </div>

                        <div class="theme-swatch-grid">
                            ${buildThemeSwatches(
                                "nonOutlineText",
                                false
                            )}
                        </div>

                    </div>

                </div>

            </div>

            <div class="theme-actions">

                <button
                    type="button"
                    class="theme-reset-button"
                    id="theme-reset-button"
                >
                    Reset Theme
                </button>

                <button
                    type="button"
                    class="theme-back-button"
                    id="theme-back-button"
                >
                    Back to Home
                </button>

            </div>

            <div class="theme-page-spacer"></div>

        </section>
    `;

    addThemePageEvents();
}

function addThemePageEvents() {
    document.querySelectorAll(
        ".theme-swatch"
    ).forEach(
        function (swatch) {
            swatch.addEventListener(
                "click",
                function () {
                    const setting =
                        swatch.dataset.themeSetting;

                    const value =
                        decodeURIComponent(
                            swatch.dataset.themeValue
                        );

                    if (
                        !setting ||
                        !value
                    ) {
                        return;
                    }

                    if (setting === "background") {
                        applyThemeBackgroundImage(
                            null
                        );

                        const preview =
                            document.getElementById(
                                "theme-background-preview-image"
                            );

                        const icon =
                            document.getElementById(
                                "theme-background-preview-icon"
                            );

                        const removeButton =
                            document.getElementById(
                                "theme-remove-background-button"
                            );

                        if (preview) {
                            preview.src = "";

                            preview.style.display =
                                "none";
                        }

                        if (icon) {
                            icon.style.display =
                                "";
                        }

                        if (removeButton) {
                            removeButton.hidden =
                                true;
                        }
                    }

                    applyThemeSetting(
                        setting,
                        value
                    );

                    updateThemePreview(
                        setting,
                        value
                    );

                    updateSelectedThemeSwatch(
                        setting,
                        value
                    );
                }
            );
        }
    );

    const backgroundButton =
        document.getElementById(
            "theme-background-image-button"
        );

    const backgroundInput =
        document.getElementById(
            "theme-background-image-input"
        );

    const removeButton =
        document.getElementById(
            "theme-remove-background-button"
        );

    if (
        backgroundButton &&
        backgroundInput
    ) {
        backgroundButton.addEventListener(
            "click",
            function () {
                backgroundInput.click();
            }
        );

        backgroundInput.addEventListener(
            "change",
            function () {
                const file =
                    backgroundInput.files[0];

                if (!file) {
                    return;
                }

                const reader =
                    new FileReader();

                reader.onload =
                    function () {
                        const imageData =
                            reader.result;

                        applyThemeBackgroundImage(
                            imageData
                        );

                        const preview =
                            document.getElementById(
                                "theme-background-preview-image"
                            );

                        const icon =
                            document.getElementById(
                                "theme-background-preview-icon"
                            );

                        if (preview) {
                            preview.src =
                                imageData;

                            preview.style.display =
                                "block";
                        }

                        if (icon) {
                            icon.style.display =
                                "none";
                        }

                        if (removeButton) {
                            removeButton.hidden =
                                false;
                        }

                        document.querySelectorAll(
                            '.theme-swatch[data-theme-setting="background"]'
                        ).forEach(
                            function (swatch) {
                                swatch.classList.remove(
                                    "selected"
                                );
                            }
                        );
                    };

                reader.readAsDataURL(
                    file
                );
            }
        );
    }

    if (removeButton) {
        removeButton.addEventListener(
            "click",
            function () {
                applyThemeBackgroundImage(
                    null
                );

                const preview =
                    document.getElementById(
                        "theme-background-preview-image"
                    );

                const icon =
                    document.getElementById(
                        "theme-background-preview-icon"
                    );

                if (preview) {
                    preview.src = "";

                    preview.style.display =
                        "none";
                }

                if (icon) {
                    icon.style.display =
                        "";
                }

                removeButton.hidden =
                    true;

                updateSelectedThemeSwatch(
                    "background",
                    getSavedThemeValue(
                        "background"
                    )
                );
            }
        );
    }

    const resetButton =
        document.getElementById(
            "theme-reset-button"
        );

    if (resetButton) {
        resetButton.addEventListener(
            "click",
            function () {
                resetGlobalTheme();

                showThemeSettingsPage();
            }
        );
    }

    const backButton =
        document.getElementById(
            "theme-back-button"
        );

    if (backButton) {
        backButton.addEventListener(
            "click",
            function () {
                showHomePage();
            }
        );
    }
}



/* =========================================================
   CARD STORAGE
   ========================================================= */

function getHomeImageStorageKey(
    subjectId
) {
    return `subject-image-${subjectId}`;
}

function getHomeColorStorageKey(
    subjectId
) {
    return `subject-color-${subjectId}`;
}

function getMenuImageStorageKey(
    subjectId,
    category
) {
    return `subject-menu-image-${subjectId}-${category}`;
}

function getMenuColorStorageKey(
    subjectId,
    category
) {
    return `subject-menu-color-${subjectId}-${category}`;
}

function getItemImageStorageKey(
    subjectId,
    category,
    itemIndex
) {
    return `subject-item-image-${subjectId}-${category}-${itemIndex}`;
}

function getItemColorStorageKey(
    subjectId,
    category,
    itemIndex
) {
    return `subject-item-color-${subjectId}-${category}-${itemIndex}`;
}

function getSubjectColor(
    subjectId
) {
    return (
        localStorage.getItem(
            getHomeColorStorageKey(subjectId)
        ) ||
        subjectData[subjectId].color
    );
}

function getMenuColor(
    subjectId,
    category
) {
    return (
        localStorage.getItem(
            getMenuColorStorageKey(
                subjectId,
                category
            )
        ) ||
        subjectMenuDefaults[category].color
    );
}

function getItemColor(
    subjectId,
    category,
    itemIndex
) {
    return (
        localStorage.getItem(
            getItemColorStorageKey(
                subjectId,
                category,
                itemIndex
            )
        ) ||
        getSubjectColor(subjectId)
    );
}

function applySubjectColor(
    subjectId,
    color
) {
    const card =
        document.getElementById(
            `card-image-${subjectId}`
        );

    if (card) {
        card.style.background =
            color;
    }

    const dot =
        document.querySelector(
            `.subject-link[data-subject="${subjectId}"] .subject-dot`
        );

    if (dot) {
        dot.style.background =
            color;
    }
}

function applyMenuColor(
    subjectId,
    category,
    color
) {
    const card =
        document.getElementById(
            `menu-image-${subjectId}-${category}`
        );

    if (card) {
        card.style.background =
            color;
    }
}

function applyItemCustomization(
    subjectId,
    category,
    itemIndex
) {
    const color =
        getItemColor(
            subjectId,
            category,
            itemIndex
        );

    const imageData =
        localStorage.getItem(
            getItemImageStorageKey(
                subjectId,
                category,
                itemIndex
            )
        );

    document.querySelectorAll(
        `.item-visual[data-subject="${subjectId}"][data-category="${category}"][data-item-index="${itemIndex}"]`
    ).forEach(
        function (visual) {
            visual.style.background =
                color;

            const image =
                visual.querySelector(
                    ".item-custom-image"
                );

            if (!image) {
                return;
            }

            if (imageData) {
                image.src =
                    imageData;

                image.style.display =
                    "block";
            }

            else {
                image.src = "";

                image.style.display =
                    "none";
            }
        }
    );
}

function loadSavedColors() {
    Object.keys(subjectData).forEach(
        function (subjectId) {
            applySubjectColor(
                subjectId,
                getSubjectColor(subjectId)
            );
        }
    );
}

function showHomeImage(
    subjectId,
    imageData
) {
    const image =
        document.getElementById(
            `preview-${subjectId}`
        );

    if (!image) {
        return;
    }

    image.src =
        imageData;

    image.style.display =
        "block";
}

function hideHomeImage(
    subjectId
) {
    const image =
        document.getElementById(
            `preview-${subjectId}`
        );

    if (!image) {
        return;
    }

    image.src = "";

    image.style.display =
        "none";
}

function showMenuImage(
    subjectId,
    category,
    imageData
) {
    const image =
        document.getElementById(
            `menu-preview-${subjectId}-${category}`
        );

    if (!image) {
        return;
    }

    image.src =
        imageData;

    image.style.display =
        "block";
}

function hideMenuImage(
    subjectId,
    category
) {
    const image =
        document.getElementById(
            `menu-preview-${subjectId}-${category}`
        );

    if (!image) {
        return;
    }

    image.src = "";

    image.style.display =
        "none";
}

function loadSavedImages() {
    Object.keys(subjectData).forEach(
        function (subjectId) {
            const imageData =
                localStorage.getItem(
                    getHomeImageStorageKey(
                        subjectId
                    )
                );

            if (imageData) {
                showHomeImage(
                    subjectId,
                    imageData
                );
            }

            else {
                hideHomeImage(
                    subjectId
                );
            }
        }
    );
}

function loadSubjectMenuCustomization(
    subjectId
) {
    [
        "formatives",
        "summatives"
    ].forEach(
        function (category) {
            applyMenuColor(
                subjectId,
                category,
                getMenuColor(
                    subjectId,
                    category
                )
            );

            const imageData =
                localStorage.getItem(
                    getMenuImageStorageKey(
                        subjectId,
                        category
                    )
                );

            if (imageData) {
                showMenuImage(
                    subjectId,
                    category,
                    imageData
                );
            }

            else {
                hideMenuImage(
                    subjectId,
                    category
                );
            }
        }
    );
}



/* =========================================================
   CARD EDITOR
   ========================================================= */

function showEditorImage(
    imageData
) {
    editorImagePreview.src =
        imageData;

    editorImagePreview.style.display =
        "block";

    editorImagePlaceholder.style.display =
        "none";

    editorRemoveImage.hidden =
        false;
}

function showEditorPlaceholder() {
    editorImagePreview.src = "";

    editorImagePreview.style.display =
        "none";

    editorImagePlaceholder.style.display =
        "";

    editorRemoveImage.hidden =
        true;
}

function getEditorColor() {
    if (editorTarget.type === "home") {
        return getSubjectColor(
            editorTarget.subjectId
        );
    }

    if (editorTarget.type === "menu") {
        return getMenuColor(
            editorTarget.subjectId,
            editorTarget.category
        );
    }

    if (editorTarget.type === "item") {
        return getItemColor(
            editorTarget.subjectId,
            editorTarget.category,
            editorTarget.itemIndex
        );
    }

    return "#d4d4d4";
}

function getEditorImage() {
    if (editorTarget.type === "home") {
        return localStorage.getItem(
            getHomeImageStorageKey(
                editorTarget.subjectId
            )
        );
    }

    if (editorTarget.type === "menu") {
        return localStorage.getItem(
            getMenuImageStorageKey(
                editorTarget.subjectId,
                editorTarget.category
            )
        );
    }

    if (editorTarget.type === "item") {
        return localStorage.getItem(
            getItemImageStorageKey(
                editorTarget.subjectId,
                editorTarget.category,
                editorTarget.itemIndex
            )
        );
    }

    return null;
}

function prepareEditor() {
    const imageData =
        getEditorImage();

    if (imageData) {
        showEditorImage(
            imageData
        );
    }

    else {
        showEditorPlaceholder();
    }

    updateSelectedColor(
        getEditorColor()
    );

    cardEditorOverlay.hidden =
        false;
}

function openHomeCardEditor(
    subjectId
) {
    const subject =
        subjectData[subjectId];

    if (!subject) {
        return;
    }

    editorTarget = {
        type: "home",
        subjectId: subjectId,
        category: null,
        itemIndex: null
    };

    editorSubjectCode.textContent =
        subject.code;

    prepareEditor();
}

function openMenuCardEditor(
    subjectId,
    category
) {
    const subject =
        subjectData[subjectId];

    if (
        !subject ||
        !subjectMenuDefaults[category]
    ) {
        return;
    }

    editorTarget = {
        type: "menu",
        subjectId: subjectId,
        category: category,
        itemIndex: null
    };

    editorSubjectCode.textContent =
        `${subject.code} - ${subjectMenuDefaults[category].title}`;

    prepareEditor();
}

function getItemFallbackTitle(
    category,
    index
) {
    if (category === "formatives") {
        return `Formative ${index + 1}`;
    }

    if (category === "summatives") {
        return `Summative ${index + 1}`;
    }

    if (category === "reviewers") {
        return `Module ${index + 1}`;
    }

    return `Item ${index + 1}`;
}

function openItemCardEditor(
    subjectId,
    category,
    itemIndex
) {
    const subject =
        subjectData[subjectId];

    const items =
        subject?.categories?.[category];

    if (
        !subject ||
        !Array.isArray(items) ||
        !items[itemIndex]
    ) {
        return;
    }

    const title =
        items[itemIndex].title ||
        getItemFallbackTitle(
            category,
            itemIndex
        );

    editorTarget = {
        type: "item",
        subjectId: subjectId,
        category: category,
        itemIndex: itemIndex
    };

    editorSubjectCode.textContent =
        `${subject.code} - ${title}`;

    prepareEditor();
}

function closeCardEditor() {
    cardEditorOverlay.hidden =
        true;

    editorTarget = {
        type: null,
        subjectId: null,
        category: null,
        itemIndex: null
    };

    editorImageInput.value =
        "";
}

function saveEditorImage(
    file
) {
    if (
        !file ||
        !editorTarget.subjectId
    ) {
        return;
    }

    const reader =
        new FileReader();

    reader.onload =
        function () {
            const imageData =
                reader.result;

            if (editorTarget.type === "home") {
                localStorage.setItem(
                    getHomeImageStorageKey(
                        editorTarget.subjectId
                    ),
                    imageData
                );

                showHomeImage(
                    editorTarget.subjectId,
                    imageData
                );
            }

            if (editorTarget.type === "menu") {
                localStorage.setItem(
                    getMenuImageStorageKey(
                        editorTarget.subjectId,
                        editorTarget.category
                    ),
                    imageData
                );

                showMenuImage(
                    editorTarget.subjectId,
                    editorTarget.category,
                    imageData
                );
            }

            if (editorTarget.type === "item") {
                localStorage.setItem(
                    getItemImageStorageKey(
                        editorTarget.subjectId,
                        editorTarget.category,
                        editorTarget.itemIndex
                    ),
                    imageData
                );

                applyItemCustomization(
                    editorTarget.subjectId,
                    editorTarget.category,
                    editorTarget.itemIndex
                );
            }

            showEditorImage(
                imageData
            );
        };

    reader.readAsDataURL(
        file
    );
}

function addHomeEditEvents() {
    document.querySelectorAll(
        ".edit-image-button"
    ).forEach(
        function (button) {
            button.addEventListener(
                "click",
                function (event) {
                    event.preventDefault();

                    event.stopPropagation();

                    openHomeCardEditor(
                        button.dataset.editSubject
                    );
                }
            );
        }
    );
}

function addMenuEditEvents() {
    document.querySelectorAll(
        ".menu-edit-button:not(.item-edit-button)"
    ).forEach(
        function (button) {
            button.addEventListener(
                "click",
                function (event) {
                    event.preventDefault();

                    event.stopPropagation();

                    openMenuCardEditor(
                        button.dataset.editSubject,
                        button.dataset.editCategory
                    );
                }
            );
        }
    );
}

function addItemEditEvents() {
    document.querySelectorAll(
        ".item-edit-button"
    ).forEach(
        function (button) {
            button.addEventListener(
                "click",
                function (event) {
                    event.preventDefault();

                    event.stopPropagation();

                    openItemCardEditor(
                        button.dataset.editSubject,
                        button.dataset.editCategory,
                        Number(
                            button.dataset.editIndex
                        )
                    );
                }
            );
        }
    );
}

function openImagePicker() {
    if (!editorTarget.subjectId) {
        return;
    }

    editorImageInput.click();
}

editorImageArea.addEventListener(
    "click",
    openImagePicker
);

editorAddImage.addEventListener(
    "click",
    openImagePicker
);

editorImageInput.addEventListener(
    "change",
    function () {
        const file =
            editorImageInput.files[0];

        if (file) {
            saveEditorImage(
                file
            );
        }
    }
);

editorRemoveImage.addEventListener(
    "click",
    function () {
        if (!editorTarget.subjectId) {
            return;
        }

        if (editorTarget.type === "home") {
            localStorage.removeItem(
                getHomeImageStorageKey(
                    editorTarget.subjectId
                )
            );

            hideHomeImage(
                editorTarget.subjectId
            );
        }

        if (editorTarget.type === "menu") {
            localStorage.removeItem(
                getMenuImageStorageKey(
                    editorTarget.subjectId,
                    editorTarget.category
                )
            );

            hideMenuImage(
                editorTarget.subjectId,
                editorTarget.category
            );
        }

        if (editorTarget.type === "item") {
            localStorage.removeItem(
                getItemImageStorageKey(
                    editorTarget.subjectId,
                    editorTarget.category,
                    editorTarget.itemIndex
                )
            );

            applyItemCustomization(
                editorTarget.subjectId,
                editorTarget.category,
                editorTarget.itemIndex
            );
        }

        showEditorPlaceholder();

        editorImageInput.value =
            "";
    }
);

colorOptions.forEach(
    function (button) {
        button.addEventListener(
            "click",
            function () {
                const color =
                    button.dataset.color;

                if (
                    color &&
                    editorTarget.subjectId
                ) {
                    applyEditorColor(
                        color
                    );
                }
            }
        );
    }
);

function applyEditorColor(
    color
) {
    if (editorTarget.type === "home") {
        localStorage.setItem(
            getHomeColorStorageKey(
                editorTarget.subjectId
            ),
            color
        );

        localStorage.removeItem(
            getHomeImageStorageKey(
                editorTarget.subjectId
            )
        );

        hideHomeImage(
            editorTarget.subjectId
        );

        applySubjectColor(
            editorTarget.subjectId,
            color
        );
    }

    if (editorTarget.type === "menu") {
        localStorage.setItem(
            getMenuColorStorageKey(
                editorTarget.subjectId,
                editorTarget.category
            ),
            color
        );

        localStorage.removeItem(
            getMenuImageStorageKey(
                editorTarget.subjectId,
                editorTarget.category
            )
        );

        hideMenuImage(
            editorTarget.subjectId,
            editorTarget.category
        );

        applyMenuColor(
            editorTarget.subjectId,
            editorTarget.category,
            color
        );
    }

    if (editorTarget.type === "item") {
        localStorage.setItem(
            getItemColorStorageKey(
                editorTarget.subjectId,
                editorTarget.category,
                editorTarget.itemIndex
            ),
            color
        );

        localStorage.removeItem(
            getItemImageStorageKey(
                editorTarget.subjectId,
                editorTarget.category,
                editorTarget.itemIndex
            )
        );

        applyItemCustomization(
            editorTarget.subjectId,
            editorTarget.category,
            editorTarget.itemIndex
        );
    }

    showEditorPlaceholder();

    updateSelectedColor(
        color
    );
}

function updateSelectedColor(
    color
) {
    colorOptions.forEach(
        function (button) {
            button.classList.remove(
                "selected"
            );

            if (
                button.dataset.color &&
                color &&
                button.dataset.color.toLowerCase() ===
                    color.toLowerCase()
            ) {
                button.classList.add(
                    "selected"
                );
            }
        }
    );
}

editorResetButton.addEventListener(
    "click",
    function () {
        if (!editorTarget.subjectId) {
            return;
        }

        if (editorTarget.type === "home") {
            const subject =
                subjectData[
                    editorTarget.subjectId
                ];

            localStorage.removeItem(
                getHomeImageStorageKey(
                    editorTarget.subjectId
                )
            );

            localStorage.removeItem(
                getHomeColorStorageKey(
                    editorTarget.subjectId
                )
            );

            hideHomeImage(
                editorTarget.subjectId
            );

            applySubjectColor(
                editorTarget.subjectId,
                subject.color
            );

            updateSelectedColor(
                subject.color
            );
        }

        if (editorTarget.type === "menu") {
            const color =
                subjectMenuDefaults[
                    editorTarget.category
                ].color;

            localStorage.removeItem(
                getMenuImageStorageKey(
                    editorTarget.subjectId,
                    editorTarget.category
                )
            );

            localStorage.removeItem(
                getMenuColorStorageKey(
                    editorTarget.subjectId,
                    editorTarget.category
                )
            );

            hideMenuImage(
                editorTarget.subjectId,
                editorTarget.category
            );

            applyMenuColor(
                editorTarget.subjectId,
                editorTarget.category,
                color
            );

            updateSelectedColor(
                color
            );
        }

        if (editorTarget.type === "item") {
            localStorage.removeItem(
                getItemImageStorageKey(
                    editorTarget.subjectId,
                    editorTarget.category,
                    editorTarget.itemIndex
                )
            );

            localStorage.removeItem(
                getItemColorStorageKey(
                    editorTarget.subjectId,
                    editorTarget.category,
                    editorTarget.itemIndex
                )
            );

            applyItemCustomization(
                editorTarget.subjectId,
                editorTarget.category,
                editorTarget.itemIndex
            );

            updateSelectedColor(
                getSubjectColor(
                    editorTarget.subjectId
                )
            );
        }

        showEditorPlaceholder();

        editorImageInput.value =
            "";
    }
);

cardEditorClose.addEventListener(
    "click",
    closeCardEditor
);

cardEditorOverlay.addEventListener(
    "click",
    function (event) {
        if (
            event.target ===
            cardEditorOverlay
        ) {
            closeCardEditor();
        }
    }
);

cardEditor.addEventListener(
    "click",
    function (event) {
        event.stopPropagation();
    }
);



/* =========================================================
   NAVIGATION
   ========================================================= */

function clearActiveNavigation() {
    mainNavLinks.forEach(
        function (link) {
            link.classList.remove(
                "active"
            );
        }
    );

    subjectLinks.forEach(
        function (link) {
            link.classList.remove(
                "active"
            );

            link.style.removeProperty(
                "--subject-color"
            );
        }
    );
}

function setActiveSubject(
    subjectId
) {
    clearActiveNavigation();

    const link =
        document.querySelector(
            `.subject-link[data-subject="${subjectId}"]`
        );

    if (!link) {
        return;
    }

    link.classList.add(
        "active"
    );

    link.style.setProperty(
        "--subject-color",
        getSubjectColor(subjectId)
    );
}

function addSubjectCardEvents() {
    document.querySelectorAll(
        ".subject-card"
    ).forEach(
        function (card) {
            card.addEventListener(
                "click",
                function () {
                    showSubjectPage(
                        card.dataset.subject
                    );
                }
            );
        }
    );
}



/* =========================================================
   HOME
   ========================================================= */

function showHomePage() {
    currentSubjectId = null;
    currentCategory = null;
    activeReviewerFilter = null;

    showSearchBar();

    pageContent.innerHTML =
        homePageHTML;

    clearActiveNavigation();

    homeLink.classList.add(
        "active"
    );

    searchInput.value =
        "";

    addSubjectCardEvents();
    addHomeEditEvents();
    addThemeSettingsButtonEvents();

    loadSavedColors();
    loadSavedImages();
}



/* =========================================================
   SUBJECT PAGE
   ========================================================= */

function showSubjectPage(
    subjectId
) {
    const subject =
        subjectData[subjectId];

    if (!subject) {
        return;
    }

    showSearchBar();

    currentSubjectId =
        subjectId;

    currentCategory =
        null;

    activeReviewerFilter =
        null;

    setActiveSubject(
        subjectId
    );

    searchInput.value =
        "";

    const color =
        getSubjectColor(
            subjectId
        );

    pageContent.innerHTML = `
        <div
            class="subject-heading"
            style="--subject-color: ${color};"
        >

            <h1>

                <button
                    type="button"
                    class="breadcrumb-home"
                    id="breadcrumb-home"
                >
                    HOME
                </button>

                <span class="breadcrumb-slash">
                    /
                </span>

                <span class="subject-heading-highlight">
                    ${subject.code}
                </span>

            </h1>

        </div>

        <section class="subject-menu-grid">

            <div
                class="subject-menu-card"
                data-subject="${subjectId}"
                data-category="formatives"
            >

                <div
                    class="subject-menu-image"
                    id="menu-image-${subjectId}-formatives"
                >

                    <img
                        id="menu-preview-${subjectId}-formatives"
                        class="subject-menu-custom-image"
                        src=""
                        alt=""
                    >

                    <button
                        type="button"
                        class="menu-edit-button"
                        data-edit-subject="${subjectId}"
                        data-edit-category="formatives"
                    >

                        <img
                            src="File_Bank/ASSETS/editImg_icon.png"
                            alt=""
                        >

                    </button>

                </div>

                <div class="subject-menu-info">

                    <h2>
                        FORMATIVES
                    </h2>

                    <p>
                        ${subject.name}
                    </p>

                </div>

            </div>

            <div
                class="subject-menu-card"
                data-subject="${subjectId}"
                data-category="summatives"
            >

                <div
                    class="subject-menu-image"
                    id="menu-image-${subjectId}-summatives"
                >

                    <img
                        id="menu-preview-${subjectId}-summatives"
                        class="subject-menu-custom-image"
                        src=""
                        alt=""
                    >

                    <button
                        type="button"
                        class="menu-edit-button"
                        data-edit-subject="${subjectId}"
                        data-edit-category="summatives"
                    >

                        <img
                            src="File_Bank/ASSETS/editImg_icon.png"
                            alt=""
                        >

                    </button>

                </div>

                <div class="subject-menu-info">

                    <h2>
                        SUMMATIVES
                    </h2>

                    <p>
                        ${subject.name}
                    </p>

                </div>

            </div>

        </section>
    `;

    document.getElementById(
        "breadcrumb-home"
    ).addEventListener(
        "click",
        showHomePage
    );

    loadSubjectMenuCustomization(
        subjectId
    );

    addSubjectMenuEvents();
}

function addSubjectMenuEvents() {
    document.querySelectorAll(
        ".subject-menu-card[data-category]:not(.global-category-card):not(.category-item-card):not(.reviewer-card)"
    ).forEach(
        function (card) {
            card.addEventListener(
                "click",
                function () {
                    openSubjectCategory(
                        card.dataset.subject,
                        card.dataset.category
                    );
                }
            );
        }
    );

    addMenuEditEvents();
}



/* =========================================================
   SUBJECT CATEGORY
   ========================================================= */

function openSubjectCategory(
    subjectId,
    category
) {
    const subject =
        subjectData[subjectId];

    const items =
        subject?.categories?.[category];

    if (
        !subject ||
        !Array.isArray(items)
    ) {
        return;
    }

    showSearchBar();

    currentSubjectId =
        subjectId;

    currentCategory =
        category;

    activeReviewerFilter =
        null;

    setActiveSubject(
        subjectId
    );

    searchInput.value =
        "";

    const subjectColor =
        getSubjectColor(
            subjectId
        );

    const categoryTitle =
        subjectMenuDefaults[category]
            ? subjectMenuDefaults[category].title
            : category.toUpperCase();

    let itemsHTML = "";

    if (items.length === 0) {
        itemsHTML = `
            <p class="empty-category-message">
                No ${categoryTitle.toLowerCase()} added yet.
            </p>
        `;
    }

    else {
        items.forEach(
            function (
                item,
                index
            ) {
                const title =
                    item.title ||
                    getItemFallbackTitle(
                        category,
                        index
                    );

                const description =
                    item.description ||
                    "No description yet.";

                const color =
                    getItemColor(
                        subjectId,
                        category,
                        index
                    );

                const image =
                    localStorage.getItem(
                        getItemImageStorageKey(
                            subjectId,
                            category,
                            index
                        )
                    );

                let links = "";

                if (item.link) {
                    links += `
                        <a
                            href="${item.link}"
                            class="category-item-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Open
                        </a>
                    `;
                }

                if (item.collabLink) {
                    links += `
                        <a
                            href="${item.collabLink}"
                            class="category-item-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Collab Link
                        </a>
                    `;
                }

                itemsHTML += `
                    <div
                        class="subject-menu-card category-item-card"
                        data-subject="${subjectId}"
                        data-category="${category}"
                        data-item-index="${index}"
                    >

                        <div
                            class="subject-menu-image category-item-image item-visual"
                            data-subject="${subjectId}"
                            data-category="${category}"
                            data-item-index="${index}"
                            style="background: ${color};"
                        >

                            <img
                                class="subject-menu-custom-image item-custom-image"
                                src="${image || ""}"
                                alt=""
                                style="display: ${image ? "block" : "none"};"
                            >

                            <button
                                type="button"
                                class="menu-edit-button item-edit-button"
                                data-edit-subject="${subjectId}"
                                data-edit-category="${category}"
                                data-edit-index="${index}"
                            >

                                <img
                                    src="File_Bank/ASSETS/editImg_icon.png"
                                    alt=""
                                >

                            </button>

                        </div>

                        <div
                            class="subject-menu-info category-item-info"
                        >

                            <h2>
                                ${title}
                            </h2>

                            <p>
                                ${description}
                            </p>

                            ${
                                links
                                    ? `
                                        <div class="category-item-links">
                                            ${links}
                                        </div>
                                    `
                                    : ""
                            }

                        </div>

                    </div>
                `;
            }
        );
    }

    pageContent.innerHTML = `
        <div
            class="subject-heading"
            style="--subject-color: ${subjectColor};"
        >

            <h1>

                <button
                    type="button"
                    class="breadcrumb-home"
                    id="breadcrumb-home"
                >
                    HOME
                </button>

                <span class="breadcrumb-slash">
                    /
                </span>

                <button
                    type="button"
                    class="breadcrumb-home subject-heading-highlight"
                    id="breadcrumb-subject"
                    style="--subject-color: ${subjectColor};"
                >
                    ${subject.code}
                </button>

                <span class="breadcrumb-slash">
                    /
                </span>

                <span>
                    ${categoryTitle}
                </span>

            </h1>

        </div>

        <section class="subject-menu-grid">
            ${itemsHTML}
        </section>
    `;

    document.getElementById(
        "breadcrumb-home"
    ).addEventListener(
        "click",
        showHomePage
    );

    document.getElementById(
        "breadcrumb-subject"
    ).addEventListener(
        "click",
        function () {
            showSubjectPage(
                subjectId
            );
        }
    );

    addItemEditEvents();
}



/* =========================================================
   GLOBAL FORMATIVES / SUMMATIVES
   ========================================================= */

function showAllCategoryItems(
    category
) {
    showSearchBar();

    currentSubjectId =
        null;

    currentCategory =
        category;

    activeReviewerFilter =
        null;

    clearActiveNavigation();

    if (
        category === "formatives" &&
        formativesLink
    ) {
        formativesLink.classList.add(
            "active"
        );
    }

    if (
        category === "summatives" &&
        summativesLink
    ) {
        summativesLink.classList.add(
            "active"
        );
    }

    searchInput.value =
        "";

    const title =
        subjectMenuDefaults[category].title;

    let html = "";

    Object.keys(subjectData).forEach(
        function (subjectId) {
            const subject =
                subjectData[subjectId];

            const items =
                subject?.categories?.[category];

            if (!Array.isArray(items)) {
                return;
            }

            items.forEach(
                function (
                    item,
                    index
                ) {
                    const itemTitle =
                        item.title ||
                        getItemFallbackTitle(
                            category,
                            index
                        );

                    const description =
                        item.description ||
                        "";

                    const color =
                        getItemColor(
                            subjectId,
                            category,
                            index
                        );

                    const image =
                        localStorage.getItem(
                            getItemImageStorageKey(
                                subjectId,
                                category,
                                index
                            )
                        );

                    html += `
                        <div
                            class="subject-menu-card global-category-card"
                            data-subject="${subjectId}"
                            data-category="${category}"
                            data-item-index="${index}"
                        >

                            <div
                                class="subject-menu-image global-category-image item-visual"
                                data-subject="${subjectId}"
                                data-category="${category}"
                                data-item-index="${index}"
                                style="background: ${color};"
                            >

                                <img
                                    class="subject-menu-custom-image item-custom-image"
                                    src="${image || ""}"
                                    alt=""
                                    style="display: ${image ? "block" : "none"};"
                                >

                                <button
                                    type="button"
                                    class="menu-edit-button item-edit-button"
                                    data-edit-subject="${subjectId}"
                                    data-edit-category="${category}"
                                    data-edit-index="${index}"
                                >

                                    <img
                                        src="File_Bank/ASSETS/editImg_icon.png"
                                        alt=""
                                    >

                                </button>

                            </div>

                            <div
                                class="subject-menu-info global-category-info"
                            >

                                <h2>
                                    ${subject.code}
                                </h2>

                                <p>
                                    ${itemTitle}
                                </p>

                                <span
                                    class="global-search-text"
                                    hidden
                                >
                                    ${subject.name}
                                    ${description}
                                    ${title}
                                </span>

                            </div>

                        </div>
                    `;
                }
            );
        }
    );

    if (!html.trim()) {
        html = `
            <p class="empty-category-message">
                No ${title.toLowerCase()} added yet.
            </p>
        `;
    }

    pageContent.innerHTML = `
        <h1 class="page-title">
            ${title}
        </h1>

        <section class="subject-menu-grid">
            ${html}
        </section>
    `;

    document.querySelectorAll(
        ".global-category-card"
    ).forEach(
        function (card) {
            card.addEventListener(
                "click",
                function () {
                    openSubjectCategory(
                        card.dataset.subject,
                        card.dataset.category
                    );
                }
            );
        }
    );

    addItemEditEvents();
}



/* =========================================================
   REVIEWERS
   ========================================================= */

function buildReviewerFilterChips() {
    return Object.keys(
        subjectData
    ).map(
        function (subjectId) {
            const subject =
                subjectData[subjectId];

            return `
                <button
                    type="button"
                    class="reviewer-filter-button"
                    data-reviewer-filter="${subjectId}"
                    style="--filter-color: ${getSubjectColor(subjectId)};"
                >
                    ${subject.code}
                </button>
            `;
        }
    ).join("");
}

function updateReviewerFilterButtons() {
    document.querySelectorAll(
        ".reviewer-filter-button"
    ).forEach(
        function (button) {
            button.classList.toggle(
                "active",
                button.dataset.reviewerFilter ===
                    activeReviewerFilter
            );
        }
    );
}

function filterReviewerCards() {
    const search =
        searchInput.value
            .toLowerCase()
            .trim();

    document.querySelectorAll(
        ".reviewer-card"
    ).forEach(
        function (card) {
            const matchesSubject =
                !activeReviewerFilter ||
                card.dataset.subject ===
                    activeReviewerFilter;

            const matchesSearch =
                card.textContent
                    .toLowerCase()
                    .includes(search);

            card.style.display =
                matchesSubject &&
                matchesSearch
                    ? ""
                    : "none";
        }
    );
}

function addReviewerFilterEvents() {
    document.querySelectorAll(
        ".reviewer-filter-button"
    ).forEach(
        function (button) {
            button.addEventListener(
                "click",
                function () {
                    const subjectId =
                        button.dataset.reviewerFilter;

                    if (
                        activeReviewerFilter ===
                        subjectId
                    ) {
                        activeReviewerFilter =
                            null;
                    }

                    else {
                        activeReviewerFilter =
                            subjectId;
                    }

                    updateReviewerFilterButtons();

                    filterReviewerCards();
                }
            );
        }
    );
}

function addReviewerCardEvents() {
    document.querySelectorAll(
        ".reviewer-card"
    ).forEach(
        function (card) {
            card.addEventListener(
                "click",
                function () {
                    const link =
                        card.dataset.link;

                    if (link) {
                        window.open(
                            link,
                            "_blank",
                            "noopener,noreferrer"
                        );
                    }
                }
            );
        }
    );
}

function showReviewersPage() {
    showSearchBar();

    currentSubjectId =
        null;

    currentCategory =
        "reviewers";

    activeReviewerFilter =
        null;

    clearActiveNavigation();

    if (reviewersLink) {
        reviewersLink.classList.add(
            "active"
        );
    }

    searchInput.value =
        "";

    let cards = "";

    Object.keys(subjectData).forEach(
        function (subjectId) {
            const subject =
                subjectData[subjectId];

            const reviewers =
                subject?.categories?.reviewers;

            if (!Array.isArray(reviewers)) {
                return;
            }

            reviewers.forEach(
                function (
                    item,
                    index
                ) {
                    const title =
                        item.title ||
                        getItemFallbackTitle(
                            "reviewers",
                            index
                        );

                    const description =
                        item.description ||
                        "";

                    const color =
                        getItemColor(
                            subjectId,
                            "reviewers",
                            index
                        );

                    const image =
                        localStorage.getItem(
                            getItemImageStorageKey(
                                subjectId,
                                "reviewers",
                                index
                            )
                        );

                    cards += `
                        <div
                            class="subject-menu-card global-category-card reviewer-card"
                            data-subject="${subjectId}"
                            data-category="reviewers"
                            data-item-index="${index}"
                            data-link="${item.link || ""}"
                        >

                            <div
                                class="subject-menu-image global-category-image item-visual"
                                data-subject="${subjectId}"
                                data-category="reviewers"
                                data-item-index="${index}"
                                style="background: ${color};"
                            >

                                <img
                                    class="subject-menu-custom-image item-custom-image"
                                    src="${image || ""}"
                                    alt=""
                                    style="display: ${image ? "block" : "none"};"
                                >

                                <button
                                    type="button"
                                    class="menu-edit-button item-edit-button"
                                    data-edit-subject="${subjectId}"
                                    data-edit-category="reviewers"
                                    data-edit-index="${index}"
                                >

                                    <img
                                        src="File_Bank/ASSETS/editImg_icon.png"
                                        alt=""
                                    >

                                </button>

                            </div>

                            <div
                                class="subject-menu-info global-category-info"
                            >

                                <h2>
                                    ${subject.code}
                                </h2>

                                <p>
                                    ${title}
                                </p>

                                <span
                                    class="global-search-text"
                                    hidden
                                >
                                    ${subject.name}
                                    ${description}
                                    reviewers
                                    module
                                </span>

                            </div>

                        </div>
                    `;
                }
            );
        }
    );

    if (!cards.trim()) {
        cards = `
            <p class="empty-category-message">
                No reviewers added yet.
            </p>
        `;
    }

    pageContent.innerHTML = `
        <h1 class="page-title">
            REVIEWERS
        </h1>

        <div class="reviewer-filter-bar">
            ${buildReviewerFilterChips()}
        </div>

        <section class="subject-menu-grid reviewer-grid">
            ${cards}
        </section>
    `;

    addReviewerFilterEvents();

    addReviewerCardEvents();

    addItemEditEvents();
}



/* =========================================================
   SIDEBAR NAVIGATION
   ========================================================= */

homeLink.addEventListener(
    "click",
    function (event) {
        event.preventDefault();

        showHomePage();
    }
);

if (formativesLink) {
    formativesLink.addEventListener(
        "click",
        function (event) {
            event.preventDefault();

            showAllCategoryItems(
                "formatives"
            );
        }
    );
}

if (summativesLink) {
    summativesLink.addEventListener(
        "click",
        function (event) {
            event.preventDefault();

            showAllCategoryItems(
                "summatives"
            );
        }
    );
}

if (reviewersLink) {
    reviewersLink.addEventListener(
        "click",
        function (event) {
            event.preventDefault();

            showReviewersPage();
        }
    );
}

subjectLinks.forEach(
    function (link) {
        link.addEventListener(
            "click",
            function (event) {
                event.preventDefault();

                showSubjectPage(
                    link.dataset.subject
                );
            }
        );
    }
);



/* =========================================================
   SEARCH
   ========================================================= */

searchInput.addEventListener(
    "input",
    function () {
        const search =
            searchInput.value
                .toLowerCase()
                .trim();

        const reviewerCards =
            document.querySelectorAll(
                ".reviewer-card"
            );

        if (reviewerCards.length) {
            filterReviewerCards();

            return;
        }

        const homeCards =
            document.querySelectorAll(
                ".subject-card"
            );

        if (homeCards.length) {
            homeCards.forEach(
                function (card) {
                    const subject =
                        subjectData[
                            card.dataset.subject
                        ];

                    const text =
                        `${subject.code} ${subject.name}`
                            .toLowerCase();

                    card.style.display =
                        text.includes(search)
                            ? ""
                            : "none";
                }
            );

            return;
        }

        document.querySelectorAll(
            ".subject-menu-card"
        ).forEach(
            function (card) {
                const text =
                    card.textContent
                        .toLowerCase();

                card.style.display =
                    text.includes(search)
                        ? ""
                        : "none";
            }
        );
    }
);



/* =========================================================
   INITIALIZE
   ========================================================= */

loadSavedTheme();

addSubjectCardEvents();

addHomeEditEvents();

addThemeSettingsButtonEvents();

loadSavedColors();

loadSavedImages();

startAdaptiveBackgroundTextObserver();

scheduleAdaptiveBackgroundTextRefresh();