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



/* =========================================================
   UI STYLE SYSTEM

   UI Style changes presentation only.
   It does NOT change:
   - theme colors
   - wallpaper
   - subject/card colors
   - uploaded card images
   ========================================================= */

const uiStyleStorageKey =
    "ui-style";


const uiStyleDefault =
    "default";


const uiStyles = [
    {
        id: "default",
        name: "Default"
    },
    {
        id: "retro-os",
        name: "Retro OS"
    },
    {
        id: "liquid-glass",
        name: "Liquid Glass"
    },
    {
        id: "pop-outline",
        name: "Pop Outline"
    },
    {
        id: "soft-product",
        name: "Soft Product UI"
    }
];


const uiStyleBodyClasses =
    uiStyles.map(
        function (style) {
            return `style-${style.id}`;
        }
    );


const themeSolidSwatches = [

    

    "#7c216d",
    "#750404",
    "#171e63",
    "#105505",
    "#30094e",
    "#873800",
    "#a99408",
    "#452404",
    "#000000",


    

    "#b23b9f",
    "#a00000",
    "#000c78",
    "#117800",
    "#430078",
    "#ae4901",
    "#d7bb00",
    "#6e3b0b",
    "#737373",


    

    "#e99ddd",
    "#c75f5f",
    "#3f4aa7",
    "#52a944",
    "#8e53bc",
    "#d79465",
    "#f7e360",
    "#ac7e52",
    "#b2b2b2",




    "#ff00d7",
    "#ff0000",
    "#001bff",
    "#23ff00",
    "#8f00ff",
    "#ff6900",
    "#ffdd00",
    "#452200",
    "#ffffff"
];



/* =========================================================
   PREMADE THEMES

   IMPORTANT:
   These change WEBSITE THEME settings only.
   They do NOT change card colors or card images.
   ========================================================= */

const premadeThemes = [

    {
        id: "theme-1",
        name: "Theme 1",

        palette: [
            "#0E0000",
            "#440000",
            "#6E1313",
            "#F4B3B3",
            "#002028"
        ],

        settings: {
            background: "#F4B3B3",
            outline: "#002028",
            text: "#F4B3B3",
            nonOutlineText: "#0E0000"
        }
    },


    {
        id: "theme-2",
        name: "Theme 2",

        palette: [
            "#777374",
            "#262224",
            "#AB141C",
            "#68222A",
            "#94919E"
        ],

        settings: {
            background: "#94919E",
            outline: "#262224",
            text: "#F6F6F6",
            nonOutlineText: "#262224"
        }
    },


    {
        id: "theme-3",
        name: "Theme 3",

        palette: [
            "#4E0714",
            "#781727",
            "#AC5B67",
            "#E2B3C2",
            "#EFD4C4"
        ],

        settings: {
            background: "#EFD4C4",
            outline: "#4E0714",
            text: "#EFD4C4",
            nonOutlineText: "#4E0714"
        }
    },


    {
        id: "theme-4",
        name: "Theme 4",

        palette: [
            "#3F2A52",
            "#75619D",
            "#BEAEDB",
            "#E6EFF7",
            "#3A2D34"
        ],

        settings: {
            background: "#E6EFF7",
            outline: "#3F2A52",
            text: "#E6EFF7",
            nonOutlineText: "#3A2D34"
        }
    },


    {
        id: "theme-5",
        name: "Theme 5",

        palette: [
            "#766DA7",
            "#15191E",
            "#7A9663",
            "#556842",
            "#A0AE91"
        ],

        settings: {
            background: "#A0AE91",
            outline: "#15191E",
            text: "#A0AE91",
            nonOutlineText: "#15191E"
        }
    },


    {
        id: "theme-6",
        name: "Theme 6",

        palette: [
            "#BC6C25",
            "#DDA15E",
            "#FEFAE0",
            "#283618",
            "#606C38"
        ],

        settings: {
            background: "#FEFAE0",
            outline: "#283618",
            text: "#FEFAE0",
            nonOutlineText: "#283618"
        }
    },


    {
        id: "theme-7",
        name: "Theme 7",

        palette: [
            "#4C3D19",
            "#354024",
            "#889063",
            "#CFBB99",
            "#E5D7C4"
        ],

        settings: {
            background: "#E5D7C4",
            outline: "#354024",
            text: "#E5D7C4",
            nonOutlineText: "#354024"
        }
    },


    {
        id: "theme-8",
        name: "Theme 8",

        palette: [
            "#23330E",
            "#3C5718",
            "#678E34",
            "#A2CA6C",
            "#C7DFA7"
        ],

        settings: {
            background: "#C7DFA7",
            outline: "#23330E",
            text: "#C7DFA7",
            nonOutlineText: "#23330E"
        }
    },


    {
        id: "theme-9",
        name: "Theme 9",

        palette: [
            "#22303F",
            "#E7E8E7",
            "#8FBFDA",
            "#2C6485",
            "#394A56"
        ],

        settings: {
            background: "#E7E8E7",
            outline: "#22303F",
            text: "#E7E8E7",
            nonOutlineText: "#22303F"
        }
    },


    {
        id: "theme-10",
        name: "Theme 10",

        palette: [
            "#EEE2DF",
            "#DEC1DB",
            "#5B61B2",
            "#2F80E4",
            "#6DA0E1"
        ],

        settings: {
            background: "#EEE2DF",
            outline: "#5B61B2",
            text: "#EEE2DF",
            nonOutlineText: "#5B61B2"
        }
    },


    {
        id: "theme-11",
        name: "Theme 11",

        palette: [
            "#F2E199",
            "#6FB8E6",
            "#ECB44D",
            "#1B3A68",
            "#191939"
        ],

        settings: {
            background: "#F2E199",
            outline: "#1B3A68",
            text: "#F2E199",
            nonOutlineText: "#191939"
        }
    },


    {
        id: "theme-12",
        name: "Theme 12",

        palette: [
            "#0C141A",
            "#28487B",
            "#4468A6",
            "#6E94CF",
            "#B9CDEE"
        ],

        settings: {
            background: "#B9CDEE",
            outline: "#0C141A",
            text: "#B9CDEE",
            nonOutlineText: "#0C141A"
        }
    },


    {
        id: "theme-13",
        name: "Theme 13",

        palette: [
            "#041A38",
            "#4A9ACB",
            "#97D4F1",
            "#394C5C",
            "#D8E7EE"
        ],

        settings: {
            background: "#D8E7EE",
            outline: "#041A38",
            text: "#D8E7EE",
            nonOutlineText: "#041A38"
        }
    },


    {
        id: "theme-14",
        name: "Theme 14",

        palette: [
            "#24221B",
            "#E4DFD8",
            "#F2D04E"
        ],

        settings: {
            background: "#E4DFD8",
            outline: "#24221B",
            text: "#E4DFD8",
            nonOutlineText: "#24221B"
        }
    },


    {
        id: "theme-15",
        name: "Theme 15",

        palette: [
            "#E5E5E5",
            "#D9D7A3",
            "#B79E66",
            "#B48634",
            "#6B3F19"
        ],

        settings: {
            background: "#E5E5E5",
            outline: "#6B3F19",
            text: "#E5E5E5",
            nonOutlineText: "#6B3F19"
        }
    },


    {
        id: "theme-16",
        name: "Theme 16",

        palette: [
            "#ECDAB3",
            "#FCC36E",
            "#F7C02F",
            "#AA6B1C",
            "#3D230A"
        ],

        settings: {
            background: "#ECDAB3",
            outline: "#3D230A",
            text: "#ECDAB3",
            nonOutlineText: "#3D230A"
        }
    },


    {
        id: "theme-17",
        name: "Theme 17",

        palette: [
            "#D1861C",
            "#D89F3F",
            "#E7681D",
            "#A02E01",
            "#657A1C"
        ],

        settings: {
            background: "#D89F3F",
            outline: "#A02E01",
            text: "#F6F6F6",
            nonOutlineText: "#A02E01"
        }
    },


    {
        id: "theme-18",
        name: "Theme 18",

        palette: [
            "#F6724B",
            "#FC8A55",
            "#8F4E51",
            "#2B3349",
            "#223C63"
        ],

        settings: {
            background: "#FC8A55",
            outline: "#223C63",
            text: "#F6F6F6",
            nonOutlineText: "#2B3349"
        }
    },


    {
        id: "theme-19",
        name: "Theme 19",

        palette: [
            "#3D1203",
            "#BA3D03",
            "#E48523",
            "#E8C580",
            "#C5A07E"
        ],

        settings: {
            background: "#E8C580",
            outline: "#3D1203",
            text: "#E8C580",
            nonOutlineText: "#3D1203"
        }
    },


    {
        id: "theme-20",
        name: "Theme 20",

        palette: [
            "#6A2B09",
            "#C5620B",
            "#FCB861",
            "#6F7781",
            "#040404"
        ],

        settings: {
            background: "#FCB861",
            outline: "#040404",
            text: "#FCB861",
            nonOutlineText: "#6A2B09"
        }
    },


    {
        id: "theme-21",
        name: "Theme 21",

        palette: [
            "#3A345B",
            "#F3C8DD",
            "#D183A9",
            "#71557A",
            "#4B1535"
        ],

        settings: {
            background: "#F3C8DD",
            outline: "#3A345B",
            text: "#F3C8DD",
            nonOutlineText: "#4B1535"
        }
    },


    {
        id: "theme-22",
        name: "Theme 22",

        palette: [
            "#AA4761",
            "#C58997",
            "#746885",
            "#978E87",
            "#372D35"
        ],

        settings: {
            background: "#978E87",
            outline: "#372D35",
            text: "#F6F6F6",
            nonOutlineText: "#372D35"
        }
    },


    {
        id: "theme-23",
        name: "Theme 23",

        palette: [
            "#391B49",
            "#795690",
            "#9570C6",
            "#C29CE4",
            "#999ECF"
        ],

        settings: {
            background: "#C29CE4",
            outline: "#391B49",
            text: "#F6F6F6",
            nonOutlineText: "#391B49"
        }
    },


    {
        id: "theme-24",
        name: "Theme 24",

        palette: [
            "#11100D",
            "#7B3221",
            "#AC5840",
            "#828D85",
            "#7F858B"
        ],

        settings: {
            background: "#828D85",
            outline: "#11100D",
            text: "#F6F6F6",
            nonOutlineText: "#11100D"
        }
    },


    {
        id: "theme-25",
        name: "Theme 25",

        palette: [
            "#13110C",
            "#675449",
            "#AA9088",
            "#838382",
            "#9CA39D"
        ],

        settings: {
            background: "#9CA39D",
            outline: "#13110C",
            text: "#F6F6F6",
            nonOutlineText: "#13110C"
        }
    },


    {
        id: "theme-26",
        name: "Theme 26",

        palette: [
            "#AA4761",
            "#C58997",
            "#746885",
            "#978E87",
            "#372D35"
        ],

        settings: {
            background: "#978E87",
            outline: "#372D35",
            text: "#F6F6F6",
            nonOutlineText: "#372D35"
        }
    },


    {
        id: "theme-27",
        name: "Theme 27",

        palette: [
            "#541533",
            "#722548",
            "#221932",
            "#775E88",
            "#8882B9"
        ],

        settings: {
            background: "#8882B9",
            outline: "#060407",
            text: "#F6F6F6",
            nonOutlineText: "#221932"
        }
    },


    {
        id: "theme-28",
        name: "Theme 28",

        palette: [
            "#792E29",
            "#24201D",
            "#565538",
            "#ABA38F",
            "#D9D4C8"
        ],

        settings: {
            background: "#D9D4C8",
            outline: "#24201D",
            text: "#D9D4C8",
            nonOutlineText: "#24201D"
        }
    },


    {
        id: "theme-29",
        name: "Theme 29",

        palette: [
            "#26140C",
            "#492617",
            "#713B24",
            "#944E2F",
            "#B7603A"
        ],

        settings: {
            background: "#B7603A",
            outline: "#26140C",
            text: "#F6F6F6",
            nonOutlineText: "#26140C"
        }
    },


    {
        id: "theme-30",
        name: "Theme 30",

        palette: [
            "#33261F",
            "#4E4A27",
            "#D2A683",
            "#C66848",
            "#231C40"
        ],

        settings: {
            background: "#D2A683",
            outline: "#33261F",
            text: "#F6F6F6",
            nonOutlineText: "#33261F"
        }
    },


    {
        id: "theme-31",
        name: "Theme 31",

        palette: [
            "#684627",
            "#DAA38F",
            "#DFC49B",
            "#9B7D61",
            "#FED8A6"
        ],

        settings: {
            background: "#FED8A6",
            outline: "#684627",
            text: "#FED8A6",
            nonOutlineText: "#684627"
        }
    },


    {
        id: "theme-32",
        name: "Theme 32",

        palette: [
            "#F9E3B6",
            "#FBCE6B",
            "#D5A007",
            "#6C8B08",
            "#2B2202"
        ],

        settings: {
            background: "#F9E3B6",
            outline: "#2B2202",
            text: "#F9E3B6",
            nonOutlineText: "#2B2202"
        }
    },


    {
        id: "theme-33",
        name: "Theme 33",

        palette: [
            "#CAEDB8",
            "#56694F",
            "#963F2E",
            "#CD9B59",
            "#EDE490"
        ],

        settings: {
            background: "#CAEDB8",
            outline: "#56694F",
            text: "#F6F6F6",
            nonOutlineText: "#56694F"
        }
    }
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



/* =========================================================
   LINK VIEW SWITCH

   Practice Links -> item.link
   Edit Links     -> item.collabLink
   ========================================================= */

const linkViewStorageKey =
    "link-view-mode";


const linkViewDefault =
    "practice";


let currentLinkViewMode =
    localStorage.getItem(
        linkViewStorageKey
    ) === "edit"
        ? "edit"
        : linkViewDefault;



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



/* =========================================================
   SEARCH BAR VISIBILITY
   ========================================================= */

function showSearchBar() {
    if (searchContainer) {
        searchContainer.style.display =
            "";
    }
}


function hideSearchBar() {
    if (searchContainer) {
        searchContainer.style.display =
            "none";
    }
}



/* =========================================================
   LINK VIEW SWITCH HELPERS
   ========================================================= */

function getLinkForCurrentMode(item) {
    if (!item) {
        return "";
    }


    return currentLinkViewMode === "edit"
        ? item.collabLink || ""
        : item.link || "";
}



function getLinkLabelForCurrentMode() {
    return currentLinkViewMode === "edit"
        ? "Collab Link"
        : "Open";
}



function updateLinkViewSwitch() {
    document.querySelectorAll(
        ".link-view-option"
    ).forEach(
        function (button) {
            const isActive =
                button.dataset.linkView ===
                    currentLinkViewMode;


            button.classList.toggle(
                "active",
                isActive
            );


            button.setAttribute(
                "aria-pressed",
                isActive
                    ? "true"
                    : "false"
            );
        }
    );
}



function refreshCurrentPageForLinkView() {
    if (
        currentSubjectId &&
        (
            currentCategory === "formatives" ||
            currentCategory === "summatives"
        )
    ) {
        openSubjectCategory(
            currentSubjectId,
            currentCategory
        );


        return;
    }


    if (currentCategory === "reviewers") {
        const previousReviewerFilter =
            activeReviewerFilter;


        showReviewersPage();


        activeReviewerFilter =
            previousReviewerFilter;


        updateReviewerFilterButtons();


        filterReviewerCards();
    }
}



function setLinkViewMode(mode) {
    const resolvedMode =
        mode === "edit"
            ? "edit"
            : "practice";


    if (
        currentLinkViewMode ===
        resolvedMode
    ) {
        updateLinkViewSwitch();


        return;
    }


    currentLinkViewMode =
        resolvedMode;


    localStorage.setItem(
        linkViewStorageKey,
        currentLinkViewMode
    );


    updateLinkViewSwitch();


    refreshCurrentPageForLinkView();
}



function initializeLinkViewSwitch() {
    if (!searchContainer) {
        return;
    }


    let switchElement =
        document.getElementById(
            "link-view-switch"
        );


    if (!switchElement) {
        switchElement =
            document.createElement(
                "div"
            );


        switchElement.id =
            "link-view-switch";


        switchElement.className =
            "link-view-switch";


        switchElement.setAttribute(
            "role",
            "group"
        );


        switchElement.setAttribute(
            "aria-label",
            "Choose which links to show"
        );


        switchElement.innerHTML = `
            <button
                type="button"
                class="link-view-option"
                data-link-view="practice"
                aria-pressed="false"
            >
                Practice Links
            </button>

            <button
                type="button"
                class="link-view-option"
                data-link-view="edit"
                aria-pressed="false"
            >
                Edit Links
            </button>
        `;


        searchContainer.appendChild(
            switchElement
        );


        switchElement.querySelectorAll(
            ".link-view-option"
        ).forEach(
            function (button) {
                button.addEventListener(
                    "click",
                    function () {
                        setLinkViewMode(
                            button.dataset.linkView
                        );
                    }
                );
            }
        );
    }


    updateLinkViewSwitch();
}



/* =========================================================
   THEME STORAGE
   ========================================================= */

function getSavedThemeValue(setting) {
    const saved =
        localStorage.getItem(
            themeStorageKeys[setting]
        );


    return saved ||
        themeDefaults[setting];
}



/* =========================================================
   APPLY THEME SETTING
   ========================================================= */

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



/* =========================================================
   BACKGROUND IMAGE
   ========================================================= */

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


        adaptiveBackgroundImageCache.src =
            null;


        adaptiveBackgroundImageCache.image =
            null;


        adaptiveBackgroundImageCache.promise =
            null;


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


    adaptiveBackgroundImageCache.src =
        null;


    adaptiveBackgroundImageCache.image =
        null;


    adaptiveBackgroundImageCache.promise =
        null;


    scheduleAdaptiveBackgroundTextRefresh();
}



/* =========================================================
   LOAD SAVED THEME
   ========================================================= */

function loadSavedTheme() {
    applyThemeSetting(
        "background",
        getSavedThemeValue(
            "background"
        ),
        false
    );


    applyThemeSetting(
        "outline",
        getSavedThemeValue(
            "outline"
        ),
        false
    );


    applyThemeSetting(
        "text",
        getSavedThemeValue(
            "text"
        ),
        false
    );


    applyThemeSetting(
        "nonOutlineText",
        getSavedThemeValue(
            "nonOutlineText"
        ),
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



/* =========================================================
   RESET GLOBAL THEME
   ========================================================= */

function resetGlobalTheme() {
    Object.keys(
        themeDefaults
    ).forEach(
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
   UI STYLE STORAGE / APPLICATION
   ========================================================= */

function isValidUIStyle(styleId) {
    return uiStyles.some(
        function (style) {
            return style.id ===
                styleId;
        }
    );
}



function getSavedUIStyle() {
    const saved =
        localStorage.getItem(
            uiStyleStorageKey
        );


    return isValidUIStyle(saved)
        ? saved
        : uiStyleDefault;
}



function applyUIStyle(
    styleId,
    save = true
) {
    const resolvedStyle =
        isValidUIStyle(styleId)
            ? styleId
            : uiStyleDefault;


    uiStyleBodyClasses.forEach(
        function (className) {
            document.body.classList.remove(
                className
            );
        }
    );


    document.body.classList.add(
        `style-${resolvedStyle}`
    );


    if (save) {
        localStorage.setItem(
            uiStyleStorageKey,
            resolvedStyle
        );
    }


    const selector =
        document.getElementById(
            "ui-style-select"
        );


    if (selector) {
        selector.value =
            resolvedStyle;
    }


    scheduleAdaptiveBackgroundTextRefresh();
}



function loadSavedUIStyle() {
    applyUIStyle(
        getSavedUIStyle(),
        false
    );
}



function buildUIStyleOptionsHTML() {
    const savedStyle =
        localStorage.getItem(
            uiStyleStorageKey
        );


    const hasSavedStyle =
        isValidUIStyle(
            savedStyle
        );


    const placeholderSelected =
        hasSavedStyle
            ? ""
            : " selected";


    const styleOptions =
        uiStyles.map(
            function (style) {
                const selected =
                    hasSavedStyle &&
                    style.id ===
                        savedStyle
                        ? " selected"
                        : "";


                return `
                    <option
                        value="${style.id}"
                        ${selected}
                    >
                        ${style.name}
                    </option>
                `;
            }
        ).join("");


    return `
        <option
            value=""
            disabled
            ${placeholderSelected}
        >
            Select Here
        </option>

        ${styleOptions}
    `;
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
    ".theme-remove-background-button",
    ".premade-themes-title",
    ".premade-theme-name",
    ".ui-style-title",
    ".ui-style-hint"
].join(", ");


const adaptiveBackgroundImageCache = {
    src: null,
    image: null,
    promise: null
};


let adaptiveRefreshFrame =
    null;



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
        color.startsWith(
            "linear-gradient"
        ) ||
        color.startsWith(
            "radial-gradient"
        )
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
                r: parseInt(
                    hex[0] + hex[0],
                    16
                ),

                g: parseInt(
                    hex[1] + hex[1],
                    16
                ),

                b: parseInt(
                    hex[2] + hex[2],
                    16
                )
            };
        }


        if (hex.length >= 6) {
            return {
                r: parseInt(
                    hex.slice(0, 2),
                    16
                ),

                g: parseInt(
                    hex.slice(2, 4),
                    16
                ),

                b: parseInt(
                    hex.slice(4, 6),
                    16
                )
            };
        }
    }


    const rgbMatch =
        color.match(
            /rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)/
        );


    if (rgbMatch) {
        return {
            r: clampColorChannel(
                Number(
                    rgbMatch[1]
                )
            ),

            g: clampColorChannel(
                Number(
                    rgbMatch[2]
                )
            ),

            b: clampColorChannel(
                Number(
                    rgbMatch[3]
                )
            )
        };
    }


    return null;
}



function getAverageGradientColor(
    gradient
) {
    const colors = [];


    const hexMatches =
        gradient.match(
            /#[0-9a-fA-F]{3,8}\b/g
        ) || [];


    hexMatches.forEach(
        function (hex) {
            const parsed =
                parseThemeColor(
                    hex
                );


            if (parsed) {
                colors.push(
                    parsed
                );
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
                parseThemeColor(
                    rgb
                );


            if (parsed) {
                colors.push(
                    parsed
                );
            }
        }
    );


    if (!colors.length) {
        return null;
    }


    const total =
        colors.reduce(
            function (
                result,
                color
            ) {
                result.r +=
                    color.r;

                result.g +=
                    color.g;

                result.b +=
                    color.b;


                return result;
            },
            {
                r: 0,
                g: 0,
                b: 0
            }
        );


    return {
        r:
            total.r /
            colors.length,

        g:
            total.g /
            colors.length,

        b:
            total.b /
            colors.length
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
                    (
                        value +
                        0.055
                    ) /
                        1.055,
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



function getContrastRatio(
    firstColor,
    secondColor
) {
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



function getReadableAdaptiveTextColor(
    backgroundColor
) {
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


    return blackContrast >=
        whiteContrast
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
            viewportWidth /
                image.naturalWidth,

            viewportHeight /
                image.naturalHeight
        );


    const renderedWidth =
        image.naturalWidth *
        scale;


    const renderedHeight =
        image.naturalHeight *
        scale;


    const cropX =
        (
            renderedWidth -
            viewportWidth
        ) / 2;


    const cropY =
        (
            renderedHeight -
            viewportHeight
        ) / 2;


    const centerX =
        rect.left +
        rect.width / 2;


    const centerY =
        rect.top +
        rect.height / 2;


    const sourceX =
        (
            centerX +
            cropX
        ) /
        scale;


    const sourceY =
        (
            centerY +
            cropY
        ) /
        scale;


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
            sourceX -
                sourceRadius
        );


    const sy =
        Math.max(
            0,
            sourceY -
                sourceRadius
        );


    const sw =
        Math.min(
            sourceRadius * 2,
            image.naturalWidth -
                sx
        );


    const sh =
        Math.min(
            sourceRadius * 2,
            image.naturalHeight -
                sy
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
                willReadFrequently:
                    true
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
        getSavedThemeValue(
            setting
        );


    const values =
        [
            ...themeSolidSwatches
        ];


    return values.map(
        function (value) {
            const selected =
                value ===
                currentValue
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


            if (
                swatchValue.toLowerCase() ===
                value.toLowerCase()
            ) {
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
   PREMADE THEME HELPERS
   ========================================================= */

function getActivePremadeThemeId() {
    const backgroundImage =
        localStorage.getItem(
            themeStorageKeys.backgroundImage
        );


    if (backgroundImage) {
        return null;
    }


    const currentSettings = {
        background:
            getSavedThemeValue(
                "background"
            ),

        outline:
            getSavedThemeValue(
                "outline"
            ),

        text:
            getSavedThemeValue(
                "text"
            ),

        nonOutlineText:
            getSavedThemeValue(
                "nonOutlineText"
            )
    };


    const match =
        premadeThemes.find(
            function (theme) {
                return (
                    theme.settings.background.toLowerCase() ===
                        currentSettings.background.toLowerCase() &&

                    theme.settings.outline.toLowerCase() ===
                        currentSettings.outline.toLowerCase() &&

                    theme.settings.text.toLowerCase() ===
                        currentSettings.text.toLowerCase() &&

                    theme.settings.nonOutlineText.toLowerCase() ===
                        currentSettings.nonOutlineText.toLowerCase()
                );
            }
        );


    return match
        ? match.id
        : null;
}



function buildPremadeThemesHTML() {
    const activeThemeId =
        getActivePremadeThemeId();


    return premadeThemes.map(
        function (theme) {
            const activeClass =
                theme.id === activeThemeId
                    ? " active"
                    : "";


            const paletteHTML =
                theme.palette.map(
                    function (color) {
                        return `
                            <span
                                class="premade-theme-color"
                                style="background: ${color};"
                                aria-hidden="true"
                            ></span>
                        `;
                    }
                ).join("");


            return `
                <button
                    type="button"
                    class="premade-theme-option${activeClass}"
                    data-premade-theme="${theme.id}"
                    aria-label="Apply ${theme.name}"
                >

                    <span class="premade-theme-name">
                        ${theme.name}
                    </span>

                    <span class="premade-theme-palette">
                        ${paletteHTML}
                    </span>

                </button>
            `;
        }
    ).join("");
}



function updatePremadeThemeSelection() {
    const activeThemeId =
        getActivePremadeThemeId();


    document.querySelectorAll(
        ".premade-theme-option"
    ).forEach(
        function (button) {
            button.classList.toggle(
                "active",
                button.dataset.premadeTheme ===
                    activeThemeId
            );
        }
    );
}



function clearThemeBackgroundPreview() {
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
        preview.src =
            "";


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



function applyPremadeTheme(themeId) {
    const theme =
        premadeThemes.find(
            function (item) {
                return item.id ===
                    themeId;
            }
        );


    if (!theme) {
        return;
    }


    applyThemeBackgroundImage(
        null
    );


    clearThemeBackgroundPreview();


    Object.keys(
        theme.settings
    ).forEach(
        function (setting) {
            const value =
                theme.settings[
                    setting
                ];


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


    updatePremadeThemeSelection();


    scheduleAdaptiveBackgroundTextRefresh();
}



/* =========================================================
   THEME SETTINGS PAGE
   ========================================================= */

function showThemeSettingsPage() {
    currentSubjectId =
        null;


    currentCategory =
        "theme";


    activeReviewerFilter =
        null;


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
                                false
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
                                false
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


            <!-- =========================================
                 THEMES + UI STYLE
                 ========================================= -->

            <div class="theme-choice-grid">

                <section class="premade-themes-section">

                    <h2 class="premade-themes-title">
                        THEMES
                    </h2>


                    <button
                        type="button"
                        class="premade-themes-toggle"
                        id="premade-themes-toggle"
                        aria-expanded="false"
                        aria-controls="premade-themes-content"
                    >

                        <span class="premade-themes-placeholder">
                            Select Here
                        </span>


                        <span
                            class="premade-themes-arrow"
                            id="premade-themes-arrow"
                            aria-hidden="true"
                        >
                            ▼
                        </span>

                    </button>

                </section>



                <section class="ui-style-section">

                    <h2 class="ui-style-title">
                        UI STYLE
                    </h2>


                    <div class="ui-style-selector-wrap">

                        <select
                            class="ui-style-select"
                            id="ui-style-select"
                            aria-label="Choose interface style"
                        >
                            ${buildUIStyleOptionsHTML()}
                        </select>

                    </div>

                </section>

            </div>


            <div
                class="premade-themes-content"
                id="premade-themes-content"
                hidden
            >

                <div class="premade-themes-grid">
                    ${buildPremadeThemesHTML()}
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


    scheduleAdaptiveBackgroundTextRefresh();
}



/* =========================================================
   THEME PAGE EVENTS
   ========================================================= */

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



                    /* -------------------------------------
                       Background color replaces wallpaper
                       ------------------------------------- */

                    if (setting === "background") {
                        applyThemeBackgroundImage(
                            null
                        );


                        clearThemeBackgroundPreview();
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


                    updatePremadeThemeSelection();
                }
            );
        }
    );



    /* =====================================================
       PREMADE THEME BUTTONS
       ===================================================== */

    document.querySelectorAll(
        ".premade-theme-option"
    ).forEach(
        function (button) {
            button.addEventListener(
                "click",
                function () {
                    applyPremadeTheme(
                        button.dataset.premadeTheme
                    );
                }
            );
        }
    );



    /* =====================================================
       PREMADE THEMES DROPDOWN
       ===================================================== */

    const premadeThemesToggle =
        document.getElementById(
            "premade-themes-toggle"
        );


    const premadeThemesContent =
        document.getElementById(
            "premade-themes-content"
        );


    const premadeThemesArrow =
        document.getElementById(
            "premade-themes-arrow"
        );


    if (
        premadeThemesToggle &&
        premadeThemesContent
    ) {
        premadeThemesToggle.addEventListener(
            "click",
            function () {
                const willOpen =
                    premadeThemesContent.hidden;


                premadeThemesContent.hidden =
                    !willOpen;


                premadeThemesToggle.setAttribute(
                    "aria-expanded",
                    String(willOpen)
                );


                if (premadeThemesArrow) {
                    premadeThemesArrow.textContent =
                        willOpen
                            ? "▲"
                            : "▼";
                }


                scheduleAdaptiveBackgroundTextRefresh();
            }
        );
    }



    /* =====================================================
       UI STYLE SELECTOR
       ===================================================== */

    const uiStyleSelect =
        document.getElementById(
            "ui-style-select"
        );


    if (uiStyleSelect) {
        const savedStyle =
            localStorage.getItem(
                uiStyleStorageKey
            );


        uiStyleSelect.value =
            isValidUIStyle(savedStyle)
                ? savedStyle
                : "";


        uiStyleSelect.addEventListener(
            "change",
            function () {
                if (!uiStyleSelect.value) {
                    return;
                }


                applyUIStyle(
                    uiStyleSelect.value
                );
            }
        );
    }



    /* =====================================================
       BACKGROUND IMAGE
       ===================================================== */

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


                        updatePremadeThemeSelection();
                    };


                reader.readAsDataURL(
                    file
                );
            }
        );
    }



    /* =====================================================
       REMOVE BACKGROUND IMAGE
       ===================================================== */

    if (removeButton) {
        removeButton.addEventListener(
            "click",
            function () {
                applyThemeBackgroundImage(
                    null
                );


                clearThemeBackgroundPreview();


                updateSelectedThemeSwatch(
                    "background",
                    getSavedThemeValue(
                        "background"
                    )
                );


                updatePremadeThemeSelection();
            }
        );
    }



    /* =====================================================
       RESET THEME

       IMPORTANT:
       This resets COLORS + WALLPAPER only.

       It intentionally does NOT reset UI Style.
       UI Style is a separate customization system.
       ===================================================== */

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



    /* =====================================================
       BACK TO HOME
       ===================================================== */

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
            getHomeColorStorageKey(
                subjectId
            )
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
        subjectMenuDefaults[
            category
        ].color
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
        getSubjectColor(
            subjectId
        )
    );
}



/* =========================================================
   APPLY SUBJECT COLOR
   ========================================================= */

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



/* =========================================================
   APPLY MENU COLOR
   ========================================================= */

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



/* =========================================================
   APPLY ITEM CUSTOMIZATION
   ========================================================= */

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
                image.src =
                    "";


                image.style.display =
                    "none";
            }
        }
    );
}



/* =========================================================
   LOAD SAVED CARD COLORS
   ========================================================= */

function loadSavedColors() {
    Object.keys(
        subjectData
    ).forEach(
        function (subjectId) {
            applySubjectColor(
                subjectId,
                getSubjectColor(
                    subjectId
                )
            );
        }
    );
}



/* =========================================================
   HOME IMAGE
   ========================================================= */

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


    image.src =
        "";


    image.style.display =
        "none";
}



/* =========================================================
   MENU IMAGE
   ========================================================= */

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


    image.src =
        "";


    image.style.display =
        "none";
}



/* =========================================================
   LOAD SAVED IMAGES
   ========================================================= */

function loadSavedImages() {
    Object.keys(
        subjectData
    ).forEach(
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



/* =========================================================
   LOAD SUBJECT MENU CUSTOMIZATION
   ========================================================= */

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
    editorImagePreview.src =
        "";


    editorImagePreview.style.display =
        "none";


    editorImagePlaceholder.style.display =
        "";


    editorRemoveImage.hidden =
        true;
}


function getEditorColor() {
    if (
        editorTarget.type ===
        "home"
    ) {
        return getSubjectColor(
            editorTarget.subjectId
        );
    }


    if (
        editorTarget.type ===
        "menu"
    ) {
        return getMenuColor(
            editorTarget.subjectId,
            editorTarget.category
        );
    }


    if (
        editorTarget.type ===
        "item"
    ) {
        return getItemColor(
            editorTarget.subjectId,
            editorTarget.category,
            editorTarget.itemIndex
        );
    }


    return "#d4d4d4";
}


function getEditorImage() {
    if (
        editorTarget.type ===
        "home"
    ) {
        return localStorage.getItem(
            getHomeImageStorageKey(
                editorTarget.subjectId
            )
        );
    }


    if (
        editorTarget.type ===
        "menu"
    ) {
        return localStorage.getItem(
            getMenuImageStorageKey(
                editorTarget.subjectId,
                editorTarget.category
            )
        );
    }


    if (
        editorTarget.type ===
        "item"
    ) {
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
        subjectData[
            subjectId
        ];


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
        subjectData[
            subjectId
        ];


    if (
        !subject ||
        !subjectMenuDefaults[
            category
        ]
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
    if (
        category ===
        "formatives"
    ) {
        return `Formative ${index + 1}`;
    }


    if (
        category ===
        "summatives"
    ) {
        return `Summative ${index + 1}`;
    }


    if (
        category ===
        "reviewers"
    ) {
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
        subjectData[
            subjectId
        ];


    const items =
        subject
            ?.categories
            ?.[category];


    if (
        !subject ||
        !Array.isArray(
            items
        ) ||
        !items[
            itemIndex
        ]
    ) {
        return;
    }


    const title =
        items[
            itemIndex
        ].title ||
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


function saveEditorImage(file) {
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



            /* ---------------------------------------------
               HOME CARD IMAGE
               --------------------------------------------- */

            if (
                editorTarget.type ===
                "home"
            ) {
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



            /* ---------------------------------------------
               SUBJECT MENU IMAGE
               --------------------------------------------- */

            if (
                editorTarget.type ===
                "menu"
            ) {
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



            /* ---------------------------------------------
               INDIVIDUAL ITEM IMAGE
               --------------------------------------------- */

            if (
                editorTarget.type ===
                "item"
            ) {
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



/* =========================================================
   HOME EDIT EVENTS
   ========================================================= */

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



/* =========================================================
   MENU EDIT EVENTS
   ========================================================= */

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



/* =========================================================
   ITEM EDIT EVENTS
   ========================================================= */

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



/* =========================================================
   OPEN IMAGE PICKER
   ========================================================= */

function openImagePicker() {
    if (
        !editorTarget.subjectId
    ) {
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



/* =========================================================
   REMOVE IMAGE
   ========================================================= */

editorRemoveImage.addEventListener(
    "click",
    function () {
        if (
            !editorTarget.subjectId
        ) {
            return;
        }



        /* ---------------------------------------------
           HOME
           --------------------------------------------- */

        if (
            editorTarget.type ===
            "home"
        ) {
            localStorage.removeItem(
                getHomeImageStorageKey(
                    editorTarget.subjectId
                )
            );


            hideHomeImage(
                editorTarget.subjectId
            );
        }



        /* ---------------------------------------------
           MENU
           --------------------------------------------- */

        if (
            editorTarget.type ===
            "menu"
        ) {
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



        /* ---------------------------------------------
           ITEM
           --------------------------------------------- */

        if (
            editorTarget.type ===
            "item"
        ) {
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


/* =========================================================
   COLOR OPTIONS
   ========================================================= */

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



/* =========================================================
   APPLY EDITOR COLOR
   ========================================================= */

function applyEditorColor(color) {

    /* =====================================================
       HOME
       ===================================================== */

    if (editorTarget.type === "home") {
        localStorage.setItem(
            getHomeColorStorageKey(
                editorTarget.subjectId
            ),
            color
        );


        /*
            Choosing a color removes the
            currently uploaded image.
        */

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



    /* =====================================================
       SUBJECT MENU
       ===================================================== */

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



    /* =====================================================
       ITEM
       ===================================================== */

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



/* =========================================================
   UPDATE SELECTED CARD COLOR
   ========================================================= */

function updateSelectedColor(color) {
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



/* =========================================================
   RESET CARD CUSTOMIZATION
   ========================================================= */

editorResetButton.addEventListener(
    "click",
    function () {
        if (!editorTarget.subjectId) {
            return;
        }



        /* =================================================
           RESET HOME CARD
           ================================================= */

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



        /* =================================================
           RESET MENU CARD
           ================================================= */

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



        /* =================================================
           RESET INDIVIDUAL ITEM
           ================================================= */

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



/* =========================================================
   CLOSE CARD EDITOR
   ========================================================= */

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



function setActiveSubject(subjectId) {
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
        getSubjectColor(
            subjectId
        )
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
   WHOLE CATEGORY ITEM CARD LINK

   The entire Formative / Summative item card follows
   the currently selected link mode:

   Practice Links -> item.link
   Edit Links     -> item.collabLink

   EXCEPT:
   - edit icon
   - the actual visible hyperlink

   The visible hyperlink is excluded so clicking it
   does not trigger two new tabs.
   ========================================================= */

function addCategoryItemCardEvents() {
    document.querySelectorAll(
        ".category-item-card"
    ).forEach(
        function (card) {
            card.addEventListener(
                "click",
                function (event) {

                    /* -------------------------------------
                       EDIT ICON

                       Editor only.
                       Do not follow card link.
                       ------------------------------------- */

                    if (
                        event.target.closest(
                            ".item-edit-button"
                        )
                    ) {
                        return;
                    }



                    /* -------------------------------------
                       ACTUAL HYPERLINK

                       Let the <a> element handle itself.
                       Prevents opening the link twice.
                       ------------------------------------- */

                    if (
                        event.target.closest(
                            ".category-item-link"
                        )
                    ) {
                        return;
                    }


                    const subjectId =
                        card.dataset.subject;


                    const category =
                        card.dataset.category;


                    const itemIndex =
                        Number(
                            card.dataset.itemIndex
                        );


                    const subject =
                        subjectData[
                            subjectId
                        ];


                    const item =
                        subject
                            ?.categories
                            ?.[category]
                            ?.[itemIndex];


                    if (!item) {
                        return;
                    }


                    const link =
                        getLinkForCurrentMode(
                            item
                        );


                    if (!link) {
                        return;
                    }


                    window.open(
                        link,
                        "_blank",
                        "noopener,noreferrer"
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
    currentSubjectId =
        null;


    currentCategory =
        null;


    activeReviewerFilter =
        null;


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


    updateLinkViewSwitch();


    scheduleAdaptiveBackgroundTextRefresh();
}



/* =========================================================
   SUBJECT PAGE
   ========================================================= */

function showSubjectPage(subjectId) {
    const subject =
        subjectData[
            subjectId
        ];


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


    updateLinkViewSwitch();


    scheduleAdaptiveBackgroundTextRefresh();
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
        subjectData[
            subjectId
        ];


    const items =
        subject
            ?.categories
            ?.[category];


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
        subjectMenuDefaults[
            category
        ]
            ? subjectMenuDefaults[
                category
            ].title
            : category.toUpperCase();


    let itemsHTML =
        "";



    /* =====================================================
       EMPTY CATEGORY
       ===================================================== */

    if (items.length === 0) {
        itemsHTML = `
            <p class="empty-category-message">
                No ${categoryTitle.toLowerCase()} added yet.
            </p>
        `;
    }



    /* =====================================================
       CATEGORY ITEMS
       ===================================================== */

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



                /* =========================================
                   LINK VIEW

                   Practice Links:
                   uses item.link only

                   Edit Links:
                   uses item.collabLink only
                   ========================================= */

                const activeLink =
                    getLinkForCurrentMode(
                        item
                    );


                const activeLinkLabel =
                    getLinkLabelForCurrentMode();


                let links =
                    "";


                if (activeLink) {
                    links = `
                        <a
                            href="${activeLink}"
                            class="category-item-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            ${activeLinkLabel}
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



    /* =====================================================
       CATEGORY PAGE HTML
       ===================================================== */

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


    /*
        NEW:
        Makes the whole Formative / Summative
        item card clickable.

        addItemEditEvents() is kept first so the
        edit button continues to behave normally.
    */

    addCategoryItemCardEvents();


    updateLinkViewSwitch();


    scheduleAdaptiveBackgroundTextRefresh();
}



/* =========================================================
   GLOBAL FORMATIVES / SUMMATIVES
   ========================================================= */

function showAllCategoryItems(category) {
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
        subjectMenuDefaults[
            category
        ].title;


    let html =
        "";


    Object.keys(
        subjectData
    ).forEach(
        function (subjectId) {
            const subject =
                subjectData[
                    subjectId
                ];


            const items =
                subject
                    ?.categories
                    ?.[category];


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
                function (event) {

                    if (
                        event.target.closest(
                            ".item-edit-button"
                        )
                    ) {
                        return;
                    }


                    openSubjectCategory(
                        card.dataset.subject,
                        card.dataset.category
                    );
                }
            );
        }
    );


    addItemEditEvents();


    updateLinkViewSwitch();


    scheduleAdaptiveBackgroundTextRefresh();
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
                subjectData[
                    subjectId
                ];


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



/* =========================================================
   UPDATE REVIEWER FILTER BUTTONS
   ========================================================= */

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



/* =========================================================
   FILTER REVIEWER CARDS
   ========================================================= */

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



/* =========================================================
   REVIEWER FILTER EVENTS
   ========================================================= */

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



/* =========================================================
   REVIEWER CARD EVENTS
   ========================================================= */

function addReviewerCardEvents() {
    document.querySelectorAll(
        ".reviewer-card"
    ).forEach(
        function (card) {
            card.addEventListener(
                "click",
                function (event) {

                    if (
                        event.target.closest(
                            ".item-edit-button"
                        )
                    ) {
                        return;
                    }


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



/* =========================================================
   SHOW REVIEWERS PAGE
   ========================================================= */

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


    let cards =
        "";


    Object.keys(
        subjectData
    ).forEach(
        function (subjectId) {
            const subject =
                subjectData[
                    subjectId
                ];


            const reviewers =
                subject
                    ?.categories
                    ?.reviewers;


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


                    /*
                        Reviewer card destination also follows
                        Practice Links / Edit Links.
                    */

                    const reviewerLink =
                        getLinkForCurrentMode(
                            item
                        );


                    cards += `
                        <div
                            class="subject-menu-card global-category-card reviewer-card"
                            data-subject="${subjectId}"
                            data-category="reviewers"
                            data-item-index="${index}"
                            data-link="${reviewerLink}"
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


    updateLinkViewSwitch();


    scheduleAdaptiveBackgroundTextRefresh();
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



        /* =================================================
           REVIEWERS SEARCH
           ================================================= */

        const reviewerCards =
            document.querySelectorAll(
                ".reviewer-card"
            );


        if (reviewerCards.length) {
            filterReviewerCards();


            return;
        }



        /* =================================================
           HOME SEARCH
           ================================================= */

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



        /* =================================================
           SUBJECT / GLOBAL CATEGORY SEARCH
           ================================================= */

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


loadSavedUIStyle();


initializeLinkViewSwitch();


addSubjectCardEvents();


addHomeEditEvents();


addThemeSettingsButtonEvents();


loadSavedColors();


loadSavedImages();


updateLinkViewSwitch();


startAdaptiveBackgroundTextObserver();


scheduleAdaptiveBackgroundTextRefresh();