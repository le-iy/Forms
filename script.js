/* =========================================================
   SUBJECT DATA
   ========================================================= */

/*
    Subject data is loaded before this file.

    subjects/*.js
        ↓
    subjectData
        ↓
    script.js
*/



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
   CURRENT EDITOR TARGET
   ========================================================= */

/*
    type:
        home
        menu

    subjectId:
        it0035
        it0035l
        etc.

    category:
        null
        formatives
        summatives
*/

let editorTarget = {

    type: null,

    subjectId: null,

    category: null

};



/* =========================================================
   CURRENT SUBJECT
   ========================================================= */

let currentSubjectId =
    null;



/* =========================================================
   SAVE ORIGINAL HOME HTML
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
   LOAD SAVED COLORS
   ========================================================= */

function loadSavedColors() {

    Object.keys(
        subjectData
    ).forEach(

        function (
            subjectId
        ) {

            const color =
                getSubjectColor(
                    subjectId
                );


            applySubjectColor(
                subjectId,
                color
            );

        }

    );

}



/* =========================================================
   SAVE EDITOR IMAGE
   ========================================================= */

function saveEditorImage(
    file
) {

    if (!file) {

        return;

    }


    if (
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



            /* =============================================
               HOME CARD
               ============================================= */

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



            /* =============================================
               FORMATIVES / SUMMATIVES
               ============================================= */

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
   SHOW HOME IMAGE
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



/* =========================================================
   HIDE HOME IMAGE
   ========================================================= */

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
   SHOW MENU IMAGE
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



/* =========================================================
   HIDE MENU IMAGE
   ========================================================= */

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
   LOAD SUBJECT MENU CUSTOMIZATION
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

            const color =
                getMenuColor(
                    subjectId,
                    category
                );


            applyMenuColor(
                subjectId,
                category,
                color
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
   SHOW IMAGE INSIDE EDITOR
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



/* =========================================================
   SHOW EDITOR PLACEHOLDER
   ========================================================= */

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
   OPEN HOME CARD EDITOR
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
   OPEN MENU CARD EDITOR
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
   HOME EDIT BUTTON EVENTS
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



                    const subjectId =
                        button.dataset.editSubject;


                    openHomeCardEditor(
                        subjectId
                    );

                }

            );

        }

    );

}



/* =========================================================
   MENU EDIT BUTTON EVENTS
   ========================================================= */

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



                    const subjectId =
                        button.dataset.editSubject;


                    const category =
                        button.dataset.editCategory;


                    openMenuCardEditor(
                        subjectId,
                        category
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



/* =========================================================
   EDITOR IMAGE BUTTON
   ========================================================= */

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



/* =========================================================
   IMAGE INPUT
   ========================================================= */

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



        /* =============================================
           HOME
           ============================================= */

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



        /* =============================================
           FORMATIVES / SUMMATIVES
           ============================================= */

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
   COLOR PALETTE
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

    /* =====================================================
       HOME
       ===================================================== */

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



    /* =====================================================
       MENU
       ===================================================== */

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
   SELECTED COLOR
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
   RESET CARD TO DEFAULT
   ========================================================= */

editorResetButton.addEventListener(

    "click",

    function () {

        if (
            !editorTarget.subjectId
        ) {

            return;

        }



        /* =================================================
           HOME RESET
           ================================================= */

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



        /* =================================================
           MENU RESET
           ================================================= */

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
   CLOSE EDITOR BUTTON
   ========================================================= */

cardEditorClose.addEventListener(

    "click",

    function () {

        closeCardEditor();

    }

);



/* =========================================================
   CLICK OUTSIDE EDITOR
   ========================================================= */

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



/* =========================================================
   PREVENT EDITOR CLICK FROM CLOSING
   ========================================================= */

cardEditor.addEventListener(

    "click",

    function (
        event
    ) {

        event.stopPropagation();

    }

);



/* =========================================================
   HOME SUBJECT CARDS
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

                    const subjectId =
                        card.dataset.subject;


                    showSubjectPage(
                        subjectId
                    );

                }

            );

        }

    );

}



/* =========================================================
   SUBJECT MENU CARDS
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

                    const subjectId =
                        card.dataset.subject;


                    const category =
                        card.dataset.category;


                    openSubjectCategory(

                        subjectId,

                        category

                    );

                }

            );

        }

    );


    addMenuEditEvents();

}



/* =========================================================
   CLEAR ACTIVE SIDEBAR
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


    const subjectColor =
        getSubjectColor(
            subjectId
        );


    subjectLink.classList.add(
        "active"
    );


    subjectLink.style.setProperty(

        "--subject-color",

        subjectColor

    );

}



/* =========================================================
   SHOW HOME PAGE
   ========================================================= */

function showHomePage() {

    currentSubjectId =
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



            <!-- =============================================
                 FORMATIVES
                 ============================================= -->

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



            <!-- =============================================
                 SUMMATIVES
                 ============================================= -->

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



    /* =====================================================
       HOME BREADCRUMB
       ===================================================== */

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



    /* =====================================================
       LOAD SAVED MENU CUSTOMIZATION
       ===================================================== */

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


    if (!subject) {

        return;

    }


    if (
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
       ===================================================== */

    let itemsHTML =
        "";



    /* =====================================================
       EMPTY CATEGORY
       ===================================================== */

    if (
        items.length === 0
    ) {

        itemsHTML = `

            <p class="empty-category-message">

                No ${categoryTitle.toLowerCase()} added yet.

            </p>

        `;

    }



    /* =====================================================
       CATEGORY HAS ITEMS
       ===================================================== */

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



                /* =========================================
                   LINKS
                   ========================================= */

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



                /* =========================================
                   ITEM CARD

                   Same structure as Home:
                   upper area = visual/color
                   lower area = title/details/links
                   ========================================= */

                itemsHTML += `

                    <div
                        class="subject-menu-card category-item-card"
                    >


                        <!-- =================================
                             UPPER VISUAL AREA
                             ================================= -->

                        <div
                            class="subject-menu-image category-item-image"
                            style="background: ${subjectColor};"
                        >

                        </div>



                        <!-- =================================
                             LOWER INFORMATION AREA
                             ================================= -->

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
                                        <div
                                            class="category-item-links"
                                        >

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
       ===================================================== */

    pageContent.innerHTML = `

        <div
            class="subject-heading"
            style="--subject-color: ${subjectColor};"
        >

            <h1>


                <!-- HOME -->

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



                <!-- SUBJECT -->

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



                <!-- CATEGORY -->

                <span>
                    ${categoryTitle}
                </span>


            </h1>

        </div>



        <section class="subject-menu-grid">

            ${itemsHTML}

        </section>

    `;



    /* =====================================================
       HOME BREADCRUMB EVENT
       ===================================================== */

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



    /* =====================================================
       SUBJECT BREADCRUMB EVENT
       ===================================================== */

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


                const subjectId =
                    link.dataset.subject;


                showSubjectPage(
                    subjectId
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



        const subjectCards =
            document.querySelectorAll(
                ".subject-card"
            );



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



                const subjectText =
                    `${subject.code} ${subject.name}`
                        .toLowerCase();



                if (
                    subjectText.includes(
                        searchText
                    )
                ) {

                    card.style.display =
                        "";

                }

                else {

                    card.style.display =
                        "none";

                }

            }

        );

    }

);



/* =========================================================
   INITIALIZE HOME PAGE
   ========================================================= */

addSubjectCardEvents();


addHomeEditEvents();


loadSavedColors();


loadSavedImages();