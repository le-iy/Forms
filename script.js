/* =========================================================
   SUBJECT MENU DEFAULTS
   ========================================================= */

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



/* =========================================================
   MAIN ELEMENTS
   ========================================================= */

const pageContent =
    document.getElementById("page-content");

const homeLink =
    document.getElementById("home-link");

const searchInput =
    document.getElementById("search-input");

const subjectLinks =
    document.querySelectorAll(".subject-link");



/* =========================================================
   CARD EDITOR ELEMENTS
   ========================================================= */

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



/* =========================================================
   CURRENT PAGE STATE
   ========================================================= */

let currentSubjectId =
    null;

let currentCategory =
    null;



/* =========================================================
   CURRENT EDITOR TARGET
   ========================================================= */

let editorTarget = {

    type: null,

    subjectId: null,

    category: null

};



/* =========================================================
   SAVE ORIGINAL HOME PAGE
   ========================================================= */

const homePageHTML =
    pageContent.innerHTML;



/* =========================================================
   STORAGE KEYS
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



/* =========================================================
   GET SUBJECT COLOR
   ========================================================= */

function getSubjectColor(
    subjectId
) {

    const savedColor =
        localStorage.getItem(
            getHomeColorStorageKey(
                subjectId
            )
        );


    if (savedColor) {

        return savedColor;

    }


    return subjectData[
        subjectId
    ].color;

}



/* =========================================================
   GET MENU COLOR
   ========================================================= */

function getMenuColor(
    subjectId,
    category
) {

    const savedColor =
        localStorage.getItem(
            getMenuColorStorageKey(
                subjectId,
                category
            )
        );


    if (savedColor) {

        return savedColor;

    }


    return subjectMenuDefaults[
        category
    ].color;

}



/* =========================================================
   APPLY SUBJECT COLOR
   ========================================================= */

function applySubjectColor(
    subjectId,
    color
) {

    const cardImage =
        document.getElementById(
            `card-image-${subjectId}`
        );


    if (cardImage) {

        cardImage.style.background =
            color;

    }


    const subjectDot =
        document.querySelector(
            `.subject-link[data-subject="${subjectId}"] .subject-dot`
        );


    if (subjectDot) {

        subjectDot.style.backgroundColor =
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

    const cardImage =
        document.getElementById(
            `menu-image-${subjectId}-${category}`
        );


    if (!cardImage) {

        return;

    }


    cardImage.style.background =
        color;

}



/* =========================================================
   LOAD SAVED HOME COLORS
   ========================================================= */

function loadSavedColors() {

    Object.keys(
        subjectData
    ).forEach(

        function (
            subjectId
        ) {

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
   LOAD SAVED HOME IMAGES
   ========================================================= */

function loadSavedImages() {

    Object.keys(
        subjectData
    ).forEach(

        function (
            subjectId
        ) {

            const savedImage =
                localStorage.getItem(
                    getHomeImageStorageKey(
                        subjectId
                    )
                );


            if (savedImage) {

                showHomeImage(
                    subjectId,
                    savedImage
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
   LOAD MENU CUSTOMIZATION
   ========================================================= */

function loadSubjectMenuCustomization(
    subjectId
) {

    const categories = [
        "formatives",
        "summatives"
    ];


    categories.forEach(

        function (
            category
        ) {

            applyMenuColor(

                subjectId,

                category,

                getMenuColor(
                    subjectId,
                    category
                )

            );


            const savedImage =
                localStorage.getItem(

                    getMenuImageStorageKey(
                        subjectId,
                        category
                    )

                );


            if (savedImage) {

                showMenuImage(
                    subjectId,
                    category,
                    savedImage
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
   EDITOR IMAGE DISPLAY
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



/* =========================================================
   GET EDITOR COLOR
   ========================================================= */

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


    return "#d4d4d4";

}



/* =========================================================
   GET EDITOR IMAGE
   ========================================================= */

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


    return null;

}



/* =========================================================
   PREPARE EDITOR
   ========================================================= */

function prepareEditor() {

    const savedImage =
        getEditorImage();


    if (savedImage) {

        showEditorImage(
            savedImage
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



/* =========================================================
   OPEN HOME EDITOR
   ========================================================= */

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

        category: null

    };


    editorSubjectCode.textContent =
        subject.code;


    prepareEditor();

}



/* =========================================================
   OPEN MENU EDITOR
   ========================================================= */

function openMenuCardEditor(
    subjectId,
    category
) {

    const subject =
        subjectData[
            subjectId
        ];


    const menu =
        subjectMenuDefaults[
            category
        ];


    if (
        !subject ||
        !menu
    ) {

        return;

    }


    editorTarget = {

        type: "menu",

        subjectId: subjectId,

        category: category

    };


    editorSubjectCode.textContent =
        `${subject.code} - ${menu.title}`;


    prepareEditor();

}



/* =========================================================
   CLOSE EDITOR
   ========================================================= */

function closeCardEditor() {

    cardEditorOverlay.hidden =
        true;


    editorTarget = {

        type: null,

        subjectId: null,

        category: null

    };


    editorImageInput.value =
        "";

}



/* =========================================================
   SAVE EDITOR IMAGE
   ========================================================= */

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


            showEditorImage(
                imageData
            );

        };


    reader.readAsDataURL(
        file
    );

}



/* =========================================================
   EDIT BUTTON EVENTS
   ========================================================= */

function addHomeEditEvents() {

    const buttons =
        document.querySelectorAll(
            ".edit-image-button"
        );


    buttons.forEach(

        function (
            button
        ) {

            button.addEventListener(

                "click",

                function (
                    event
                ) {

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

    const buttons =
        document.querySelectorAll(
            ".menu-edit-button"
        );


    buttons.forEach(

        function (
            button
        ) {

            button.addEventListener(

                "click",

                function (
                    event
                ) {

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
   EDITOR IMAGE BUTTONS
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

    function () {

        openImagePicker();

    }

);


editorAddImage.addEventListener(

    "click",

    function () {

        openImagePicker();

    }

);


editorImageInput.addEventListener(

    "change",

    function () {

        const file =
            editorImageInput.files[0];


        if (!file) {

            return;

        }


        saveEditorImage(
            file
        );

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


        showEditorPlaceholder();


        editorImageInput.value =
            "";

    }

);



/* =========================================================
   COLOR OPTIONS
   ========================================================= */

colorOptions.forEach(

    function (
        button
    ) {

        button.addEventListener(

            "click",

            function () {

                if (
                    !editorTarget.subjectId
                ) {

                    return;

                }


                const color =
                    button.dataset.color;


                if (!color) {

                    return;

                }


                applyEditorColor(
                    color
                );

            }

        );

    }

);



/* =========================================================
   APPLY EDITOR COLOR
   ========================================================= */

function applyEditorColor(
    color
) {

    if (
        editorTarget.type ===
        "home"
    ) {

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



    if (
        editorTarget.type ===
        "menu"
    ) {

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


    showEditorPlaceholder();


    updateSelectedColor(
        color
    );

}



/* =========================================================
   UPDATE SELECTED COLOR
   ========================================================= */

function updateSelectedColor(
    color
) {

    colorOptions.forEach(

        function (
            button
        ) {

            button.classList.remove(
                "selected"
            );


            const buttonColor =
                button.dataset.color;


            if (
                !buttonColor ||
                !color
            ) {

                return;

            }


            if (
                buttonColor.toLowerCase() ===
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
   RESET CARD
   ========================================================= */

editorResetButton.addEventListener(

    "click",

    function () {

        if (
            !editorTarget.subjectId
        ) {

            return;

        }



        if (
            editorTarget.type ===
            "home"
        ) {

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



        if (
            editorTarget.type ===
            "menu"
        ) {

            const defaultColor =
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
                defaultColor
            );


            updateSelectedColor(
                defaultColor
            );

        }


        showEditorPlaceholder();


        editorImageInput.value =
            "";

    }

);



/* =========================================================
   EDITOR CLOSE EVENTS
   ========================================================= */

cardEditorClose.addEventListener(

    "click",

    function () {

        closeCardEditor();

    }

);


cardEditorOverlay.addEventListener(

    "click",

    function (
        event
    ) {

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

    function (
        event
    ) {

        event.stopPropagation();

    }

);



/* =========================================================
   HOME SUBJECT CARD EVENTS
   ========================================================= */

function addSubjectCardEvents() {

    const subjectCards =
        document.querySelectorAll(
            ".subject-card"
        );


    subjectCards.forEach(

        function (
            card
        ) {

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
   SUBJECT MENU CARD EVENTS
   ========================================================= */

function addSubjectMenuEvents() {

    const menuCards =
        document.querySelectorAll(
            ".subject-menu-card[data-category]"
        );


    menuCards.forEach(

        function (
            card
        ) {

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
   CLEAR ACTIVE NAVIGATION
   ========================================================= */

function clearActiveNavigation() {

    homeLink.classList.remove(
        "active"
    );


    subjectLinks.forEach(

        function (
            link
        ) {

            link.classList.remove(
                "active"
            );


            link.style.removeProperty(
                "--subject-color"
            );

        }

    );

}



/* =========================================================
   SET ACTIVE SUBJECT
   ========================================================= */

function setActiveSubject(
    subjectId
) {

    clearActiveNavigation();


    const subjectLink =
        document.querySelector(
            `.subject-link[data-subject="${subjectId}"]`
        );


    if (!subjectLink) {

        return;

    }


    subjectLink.classList.add(
        "active"
    );


    subjectLink.style.setProperty(

        "--subject-color",

        getSubjectColor(
            subjectId
        )

    );

}



/* =========================================================
   SHOW HOME PAGE
   ========================================================= */

function showHomePage() {

    currentSubjectId =
        null;

    currentCategory =
        null;


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

    loadSavedColors();

    loadSavedImages();

}



/* =========================================================
   SHOW SUBJECT PAGE
   ========================================================= */

function showSubjectPage(
    subjectId
) {

    const subject =
        subjectData[
            subjectId
        ];


    if (!subject) {

        return;

    }


    currentSubjectId =
        subjectId;

    currentCategory =
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


                <span
                    class="subject-heading-highlight"
                >
                    ${subject.code}
                </span>

            </h1>

        </div>



        <section class="subject-menu-grid">


            <!-- FORMATIVES -->

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
                        alt="${subject.code} Formatives image"
                    >


                    <button
                        class="menu-edit-button"
                        type="button"
                        data-edit-subject="${subjectId}"
                        data-edit-category="formatives"
                        aria-label="Customize ${subject.code} Formatives"
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



            <!-- SUMMATIVES -->

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
                        alt="${subject.code} Summatives image"
                    >


                    <button
                        class="menu-edit-button"
                        type="button"
                        data-edit-subject="${subjectId}"
                        data-edit-category="summatives"
                        aria-label="Customize ${subject.code} Summatives"
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


    const breadcrumbHome =
        document.getElementById(
            "breadcrumb-home"
        );


    breadcrumbHome.addEventListener(

        "click",

        function () {

            showHomePage();

        }

    );


    loadSubjectMenuCustomization(
        subjectId
    );


    addSubjectMenuEvents();

}



/* =========================================================
   OPEN SUBJECT CATEGORY
   ========================================================= */

function openSubjectCategory(
    subjectId,
    category
) {

    const subject =
        subjectData[
            subjectId
        ];


    if (
        !subject ||
        !subject.categories
    ) {

        return;

    }


    const items =
        subject.categories[
            category
        ];


    if (!items) {

        return;

    }


    currentSubjectId =
        subjectId;

    currentCategory =
        category;


    setActiveSubject(
        subjectId
    );


    searchInput.value =
        "";


    const subjectColor =
        getSubjectColor(
            subjectId
        );


    const categoryInfo =
        subjectMenuDefaults[
            category
        ];


    const categoryTitle =
        categoryInfo
            ? categoryInfo.title
            : category.toUpperCase();



    /* =====================================================
       BUILD CATEGORY ITEMS
       ========================================================= */

    let itemsHTML =
        "";


    if (
        items.length === 0
    ) {

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

                const itemTitle =
                    item.title ||
                    `${categoryTitle} ${index + 1}`;


                const itemDescription =
                    item.description ||
                    "No description yet.";


                let linksHTML =
                    "";



                if (
                    item.link
                ) {

                    linksHTML += `

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



                if (
                    item.collabLink
                ) {

                    linksHTML += `

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
                        data-item-index="${index}"
                    >

                        <!-- UPPER VISUAL AREA -->

                        <div
                            class="subject-menu-image category-item-image"
                            style="background: ${subjectColor};"
                        >
                        </div>



                        <!-- LOWER INFORMATION AREA -->

                        <div
                            class="subject-menu-info category-item-info"
                        >

                            <h2>
                                ${itemTitle}
                            </h2>


                            <p>
                                ${itemDescription}
                            </p>


                            ${
                                linksHTML
                                    ? `
                                        <div class="category-item-links">
                                            ${linksHTML}
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
       CATEGORY PAGE
       ========================================================= */

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



    const breadcrumbHome =
        document.getElementById(
            "breadcrumb-home"
        );


    breadcrumbHome.addEventListener(

        "click",

        function () {

            showHomePage();

        }

    );



    const breadcrumbSubject =
        document.getElementById(
            "breadcrumb-subject"
        );


    breadcrumbSubject.addEventListener(

        "click",

        function () {

            showSubjectPage(
                subjectId
            );

        }

    );

}



/* =========================================================
   SIDEBAR SUBJECT LINKS
   ========================================================= */

subjectLinks.forEach(

    function (
        link
    ) {

        link.addEventListener(

            "click",

            function (
                event
            ) {

                event.preventDefault();


                showSubjectPage(
                    link.dataset.subject
                );

            }

        );

    }

);



/* =========================================================
   HOME SIDEBAR LINK
   ========================================================= */

homeLink.addEventListener(

    "click",

    function (
        event
    ) {

        event.preventDefault();


        showHomePage();

    }

);



/* =========================================================
   SEARCH
   ========================================================= */

searchInput.addEventListener(

    "input",

    function () {

        const searchText =
            searchInput.value
                .toLowerCase()
                .trim();



        /* =================================================
           HOME
           ================================================= */

        const subjectCards =
            document.querySelectorAll(
                ".subject-card"
            );


        if (
            subjectCards.length > 0
        ) {

            subjectCards.forEach(

                function (
                    card
                ) {

                    const subjectId =
                        card.dataset.subject;


                    const subject =
                        subjectData[
                            subjectId
                        ];


                    if (!subject) {

                        return;

                    }


                    const searchableText =
                        `${subject.code} ${subject.name}`
                            .toLowerCase();


                    card.style.display =
                        searchableText.includes(
                            searchText
                        )
                            ? ""
                            : "none";

                }

            );


            return;

        }



        /* =================================================
           SUBJECT PAGE + FORMATIVES/SUMMATIVES ITEMS
           ================================================= */

        const innerCards =
            document.querySelectorAll(
                ".subject-menu-card"
            );


        innerCards.forEach(

            function (
                card
            ) {

                const searchableText =
                    card.textContent
                        .toLowerCase()
                        .trim();


                card.style.display =
                    searchableText.includes(
                        searchText
                    )
                        ? ""
                        : "none";

            }

        );

    }

);



/* =========================================================
   INITIALIZE
   ========================================================= */

addSubjectCardEvents();

addHomeEditEvents();

loadSavedColors();

loadSavedImages();