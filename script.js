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


const formativesLink =
    document.getElementById("formatives-link");


const summativesLink =
    document.getElementById("summatives-link");


const reviewersLink =
    document.getElementById("reviewers-link");


const mainNavLinks =
    document.querySelectorAll(
        ".main-nav .nav-item"
    );


const searchInput =
    document.getElementById("search-input");


const subjectLinks =
    document.querySelectorAll(
        ".subject-link"
    );



/* =========================================================
   CARD EDITOR ELEMENTS
   ========================================================= */

const cardEditorOverlay =
    document.getElementById(
        "card-editor-overlay"
    );


const cardEditor =
    document.getElementById(
        "card-editor"
    );


const cardEditorClose =
    document.getElementById(
        "card-editor-close"
    );


const editorSubjectCode =
    document.getElementById(
        "editor-subject-code"
    );


const editorImageArea =
    document.getElementById(
        "editor-image-area"
    );


const editorImagePreview =
    document.getElementById(
        "editor-image-preview"
    );


const editorImagePlaceholder =
    document.getElementById(
        "editor-image-placeholder"
    );


const editorAddImage =
    document.getElementById(
        "editor-add-image"
    );


const editorImageInput =
    document.getElementById(
        "editor-image-input"
    );


const editorRemoveImage =
    document.getElementById(
        "editor-remove-image"
    );


const editorResetButton =
    document.getElementById(
        "editor-reset-button"
    );


const colorOptions =
    document.querySelectorAll(
        ".color-option"
    );



/* =========================================================
   CURRENT PAGE STATE
   ========================================================= */

let currentSubjectId =
    null;


let currentCategory =
    null;


let activeReviewerFilter =
    null;



/* =========================================================
   CURRENT EDITOR TARGET

   type:
   - home
   - menu
   - item
   ========================================================= */

let editorTarget = {

    type: null,

    subjectId: null,

    category: null,

    itemIndex: null

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
   GET INDIVIDUAL ITEM COLOR
   ========================================================= */

function getItemColor(
    subjectId,
    category,
    itemIndex
) {

    const savedColor =
        localStorage.getItem(
            getItemColorStorageKey(
                subjectId,
                category,
                itemIndex
            )
        );


    if (savedColor) {

        return savedColor;

    }


    /*
        Default item color:
        use the subject color.
    */

    return getSubjectColor(
        subjectId
    );

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
   APPLY INDIVIDUAL ITEM CUSTOMIZATION

   Works for:
   - formatives
   - summatives
   - reviewers
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


    const savedImage =
        localStorage.getItem(
            getItemImageStorageKey(
                subjectId,
                category,
                itemIndex
            )
        );


    const visuals =
        document.querySelectorAll(
            `.item-visual[data-subject="${subjectId}"][data-category="${category}"][data-item-index="${itemIndex}"]`
        );


    visuals.forEach(

        function (
            visual
        ) {

            visual.style.background =
                color;


            const image =
                visual.querySelector(
                    ".item-custom-image"
                );


            if (!image) {

                return;

            }


            if (savedImage) {

                image.src =
                    savedImage;


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
   LOAD SAVED SUBJECT COLORS
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

        category: null,

        itemIndex: null

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

        category: category,

        itemIndex: null

    };


    editorSubjectCode.textContent =
        `${subject.code} - ${menu.title}`;


    prepareEditor();

}



/* =========================================================
   GET ITEM FALLBACK TITLE
   ========================================================= */

function getItemFallbackTitle(
    category,
    itemIndex
) {

    if (
        category ===
        "formatives"
    ) {

        return `Formative ${itemIndex + 1}`;

    }


    if (
        category ===
        "summatives"
    ) {

        return `Summative ${itemIndex + 1}`;

    }


    if (
        category ===
        "reviewers"
    ) {

        return `Module ${itemIndex + 1}`;

    }


    return `Item ${itemIndex + 1}`;

}



/* =========================================================
   OPEN INDIVIDUAL ITEM EDITOR

   Works for:
   - formative
   - summative
   - reviewer
   ========================================================= */

function openItemCardEditor(
    subjectId,
    category,
    itemIndex
) {

    const subject =
        subjectData[
            subjectId
        ];


    if (
        !subject ||
        !subject.categories ||
        !Array.isArray(
            subject.categories[
                category
            ]
        )
    ) {

        return;

    }


    const item =
        subject.categories[
            category
        ][
            itemIndex
        ];


    if (!item) {

        return;

    }


    const itemTitle =
        item.title ||
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
        `${subject.code} - ${itemTitle}`;


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

        category: null,

        itemIndex: null

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



            /* =================================================
               HOME
               ================================================= */

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



            /* =================================================
               SUBJECT MENU
               ================================================= */

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



            /* =================================================
               INDIVIDUAL ITEM
               ================================================= */

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


                    openHomeCardEditor(
                        button.dataset.editSubject
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
            ".menu-edit-button:not(.item-edit-button)"
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
   INDIVIDUAL ITEM EDIT EVENTS
   ========================================================= */

function addItemEditEvents() {

    const buttons =
        document.querySelectorAll(
            ".item-edit-button"
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



/* =========================================================
   IMAGE PICKER EVENTS
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



        /* =================================================
           HOME
           ================================================= */

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



        /* =================================================
           MENU
           ================================================= */

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



        /* =================================================
           ITEM
           ================================================= */

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
       SUBJECT MENU
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



    /* =====================================================
       INDIVIDUAL ITEM
       ===================================================== */

    if (
        editorTarget.type ===
        "item"
    ) {

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



        /* =================================================
           RESET HOME
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
           RESET SUBJECT MENU
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



        /* =================================================
           RESET INDIVIDUAL ITEM

           Falls back to subject color.
           ================================================= */

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
   CLOSE EDITOR EVENTS
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
            ".subject-menu-card[data-category]:not(.global-category-card):not(.category-item-card):not(.reviewer-card)"
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

    mainNavLinks.forEach(

        function (
            link
        ) {

            link.classList.remove(
                "active"
            );

        }

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


    activeReviewerFilter =
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

   Used for:
   - Formatives
   - Summatives
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


    if (
        !Array.isArray(
            items
        )
    ) {

        return;

    }


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


    const categoryInfo =
        subjectMenuDefaults[
            category
        ];


    const categoryTitle =
        categoryInfo
            ? categoryInfo.title
            : category.toUpperCase();


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
       BUILD ITEMS
       ===================================================== */

    else {

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


                const itemDescription =
                    item.description ||
                    "No description yet.";


                const itemColor =
                    getItemColor(
                        subjectId,
                        category,
                        index
                    );


                const savedItemImage =
                    localStorage.getItem(
                        getItemImageStorageKey(
                            subjectId,
                            category,
                            index
                        )
                    );


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
                        data-subject="${subjectId}"
                        data-category="${category}"
                        data-item-index="${index}"
                    >

                        <div
                            class="subject-menu-image category-item-image item-visual"
                            data-subject="${subjectId}"
                            data-category="${category}"
                            data-item-index="${index}"
                            style="background: ${itemColor};"
                        >

                            <img
                                class="subject-menu-custom-image item-custom-image"
                                src="${savedItemImage || ""}"
                                alt="${itemTitle} image"
                                style="display: ${savedItemImage ? "block" : "none"};"
                            >


                            <button
                                class="menu-edit-button item-edit-button"
                                type="button"
                                data-edit-subject="${subjectId}"
                                data-edit-category="${category}"
                                data-edit-index="${index}"
                                aria-label="Customize ${itemTitle}"
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


    addItemEditEvents();

}



/* =========================================================
   SHOW ALL CATEGORY ITEMS

   Global:
   - Formatives
   - Summatives
   ========================================================= */

function showAllCategoryItems(
    category
) {

    currentSubjectId =
        null;


    currentCategory =
        category;


    activeReviewerFilter =
        null;


    clearActiveNavigation();



    if (
        category ===
        "formatives" &&
        formativesLink
    ) {

        formativesLink.classList.add(
            "active"
        );

    }


    if (
        category ===
        "summatives" &&
        summativesLink
    ) {

        summativesLink.classList.add(
            "active"
        );

    }


    searchInput.value =
        "";


    const categoryInfo =
        subjectMenuDefaults[
            category
        ];


    const categoryTitle =
        categoryInfo
            ? categoryInfo.title
            : category.toUpperCase();


    let itemsHTML =
        "";



    /* =====================================================
       LOOP THROUGH SUBJECTS
       ===================================================== */

    Object.keys(
        subjectData
    ).forEach(

        function (
            subjectId
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


            if (
                !Array.isArray(
                    items
                )
            ) {

                return;

            }



            /* =================================================
               LOOP THROUGH ITEMS
               ================================================= */

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


                    const itemDescription =
                        item.description ||
                        "";


                    const itemColor =
                        getItemColor(
                            subjectId,
                            category,
                            index
                        );


                    const savedItemImage =
                        localStorage.getItem(
                            getItemImageStorageKey(
                                subjectId,
                                category,
                                index
                            )
                        );


                    itemsHTML += `

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
                                style="background: ${itemColor};"
                            >

                                <img
                                    class="subject-menu-custom-image item-custom-image"
                                    src="${savedItemImage || ""}"
                                    alt="${itemTitle} image"
                                    style="display: ${savedItemImage ? "block" : "none"};"
                                >


                                <button
                                    class="menu-edit-button item-edit-button"
                                    type="button"
                                    data-edit-subject="${subjectId}"
                                    data-edit-category="${category}"
                                    data-edit-index="${index}"
                                    aria-label="Customize ${subject.code} ${itemTitle}"
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

                                    ${itemDescription}

                                    ${categoryTitle}

                                </span>

                            </div>

                        </div>

                    `;

                }

            );

        }

    );



    /* =====================================================
       EMPTY
       ===================================================== */

    if (
        itemsHTML.trim() ===
        ""
    ) {

        itemsHTML = `

            <p class="empty-category-message">

                No ${categoryTitle.toLowerCase()} added yet.

            </p>

        `;

    }



    /* =====================================================
       RENDER
       ===================================================== */

    pageContent.innerHTML = `

        <h1 class="page-title">
            ${categoryTitle}
        </h1>


        <section class="subject-menu-grid">

            ${itemsHTML}

        </section>

    `;



    /* =====================================================
       GLOBAL CARD EVENTS
       ===================================================== */

    const globalCards =
        document.querySelectorAll(
            ".global-category-card"
        );


    globalCards.forEach(

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


    addItemEditEvents();

}



/* =========================================================
   BUILD REVIEWER FILTER CHIPS
   ========================================================= */

function buildReviewerFilterChips() {

    let filtersHTML =
        "";


    Object.keys(
        subjectData
    ).forEach(

        function (
            subjectId
        ) {

            const subject =
                subjectData[
                    subjectId
                ];


            if (!subject) {

                return;

            }


            const subjectColor =
                getSubjectColor(
                    subjectId
                );


            filtersHTML += `

                <button
                    type="button"
                    class="reviewer-filter-button"
                    data-reviewer-filter="${subjectId}"
                    style="--filter-color: ${subjectColor};"
                >

                    ${subject.code}

                </button>

            `;

        }

    );


    return filtersHTML;

}



/* =========================================================
   FILTER REVIEWER CARDS

   Combines:
   - selected subject filter
   - search bar
   ========================================================= */

function filterReviewerCards() {

    const cards =
        document.querySelectorAll(
            ".reviewer-card"
        );


    const searchText =
        searchInput.value
            .toLowerCase()
            .trim();


    cards.forEach(

        function (
            card
        ) {

            const cardSubject =
                card.dataset.subject;


            const searchableText =
                card.textContent
                    .toLowerCase()
                    .trim();


            const matchesSubject =
                !activeReviewerFilter ||
                cardSubject ===
                    activeReviewerFilter;


            const matchesSearch =
                searchableText.includes(
                    searchText
                );


            card.style.display =
                matchesSubject &&
                matchesSearch
                    ? ""
                    : "none";

        }

    );

}



/* =========================================================
   UPDATE REVIEWER FILTER BUTTONS
   ========================================================= */

function updateReviewerFilterButtons() {

    const buttons =
        document.querySelectorAll(
            ".reviewer-filter-button"
        );


    buttons.forEach(

        function (
            button
        ) {

            const subjectId =
                button.dataset.reviewerFilter;


            if (
                subjectId ===
                activeReviewerFilter
            ) {

                button.classList.add(
                    "active"
                );

            }

            else {

                button.classList.remove(
                    "active"
                );

            }

        }

    );

}



/* =========================================================
   REVIEWER FILTER EVENTS
   ========================================================= */

function addReviewerFilterEvents() {

    const buttons =
        document.querySelectorAll(
            ".reviewer-filter-button"
        );


    buttons.forEach(

        function (
            button
        ) {

            button.addEventListener(

                "click",

                function () {

                    const selectedSubject =
                        button.dataset.reviewerFilter;


                    /*
                        Click selected subject again
                        to show ALL reviewers.
                    */

                    if (
                        activeReviewerFilter ===
                        selectedSubject
                    ) {

                        activeReviewerFilter =
                            null;

                    }

                    else {

                        activeReviewerFilter =
                            selectedSubject;

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

    const cards =
        document.querySelectorAll(
            ".reviewer-card"
        );


    cards.forEach(

        function (
            card
        ) {

            card.addEventListener(

                "click",

                function () {

                    const link =
                        card.dataset.link;


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
   SHOW REVIEWERS PAGE
   ========================================================= */

function showReviewersPage() {

    currentSubjectId =
        null;


    currentCategory =
        "reviewers";


    activeReviewerFilter =
        null;


    clearActiveNavigation();


    if (
        reviewersLink
    ) {

        reviewersLink.classList.add(
            "active"
        );

    }


    searchInput.value =
        "";


    const filtersHTML =
        buildReviewerFilterChips();


    let reviewerCardsHTML =
        "";



    /* =====================================================
       LOOP THROUGH ALL SUBJECTS
       ===================================================== */

    Object.keys(
        subjectData
    ).forEach(

        function (
            subjectId
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


            const reviewers =
                subject.categories.reviewers;


            if (
                !Array.isArray(
                    reviewers
                )
            ) {

                return;

            }



            /* =================================================
               LOOP THROUGH REVIEWERS
               ================================================= */

            reviewers.forEach(

                function (
                    item,
                    index
                ) {

                    const itemTitle =
                        item.title ||
                        getItemFallbackTitle(
                            "reviewers",
                            index
                        );


                    const itemDescription =
                        item.description ||
                        "";


                    const itemColor =
                        getItemColor(
                            subjectId,
                            "reviewers",
                            index
                        );


                    const savedItemImage =
                        localStorage.getItem(
                            getItemImageStorageKey(
                                subjectId,
                                "reviewers",
                                index
                            )
                        );


                    const itemLink =
                        item.link ||
                        "";


                    reviewerCardsHTML += `

                        <div
                            class="subject-menu-card global-category-card reviewer-card"
                            data-subject="${subjectId}"
                            data-category="reviewers"
                            data-item-index="${index}"
                            data-link="${itemLink}"
                        >

                            <!-- REVIEWER VISUAL -->

                            <div
                                class="subject-menu-image global-category-image item-visual"
                                data-subject="${subjectId}"
                                data-category="reviewers"
                                data-item-index="${index}"
                                style="background: ${itemColor};"
                            >

                                <img
                                    class="subject-menu-custom-image item-custom-image"
                                    src="${savedItemImage || ""}"
                                    alt="${itemTitle} image"
                                    style="display: ${savedItemImage ? "block" : "none"};"
                                >


                                <button
                                    class="menu-edit-button item-edit-button"
                                    type="button"
                                    data-edit-subject="${subjectId}"
                                    data-edit-category="reviewers"
                                    data-edit-index="${index}"
                                    aria-label="Customize ${subject.code} ${itemTitle}"
                                >

                                    <img
                                        src="File_Bank/ASSETS/editImg_icon.png"
                                        alt=""
                                    >

                                </button>

                            </div>



                            <!-- REVIEWER INFO -->

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

                                    ${itemDescription}

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



    /* =====================================================
       EMPTY REVIEWERS
       ===================================================== */

    if (
        reviewerCardsHTML.trim() ===
        ""
    ) {

        reviewerCardsHTML = `

            <p class="empty-category-message">

                No reviewers added yet.

            </p>

        `;

    }



    /* =====================================================
       RENDER REVIEWERS PAGE
       ===================================================== */

    pageContent.innerHTML = `

        <h1 class="page-title">
            REVIEWERS
        </h1>


        <div class="reviewer-filter-bar">

            ${filtersHTML}

        </div>


        <section class="subject-menu-grid reviewer-grid">

            ${reviewerCardsHTML}

        </section>

    `;



    addReviewerFilterEvents();


    addReviewerCardEvents();


    addItemEditEvents();

}



/* =========================================================
   FORMATIVES SIDEBAR
   ========================================================= */

if (
    formativesLink
) {

    formativesLink.addEventListener(

        "click",

        function (
            event
        ) {

            event.preventDefault();


            showAllCategoryItems(
                "formatives"
            );

        }

    );

}



/* =========================================================
   SUMMATIVES SIDEBAR
   ========================================================= */

if (
    summativesLink
) {

    summativesLink.addEventListener(

        "click",

        function (
            event
        ) {

            event.preventDefault();


            showAllCategoryItems(
                "summatives"
            );

        }

    );

}



/* =========================================================
   REVIEWERS SIDEBAR
   ========================================================= */

if (
    reviewersLink
) {

    reviewersLink.addEventListener(

        "click",

        function (
            event
        ) {

            event.preventDefault();


            showReviewersPage();

        }

    );

}



/* =========================================================
   SUBJECT SIDEBAR LINKS
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
           REVIEWERS

           Keep subject filter active while searching.
           ================================================= */

        const reviewerCards =
            document.querySelectorAll(
                ".reviewer-card"
            );


        if (
            reviewerCards.length > 0
        ) {

            filterReviewerCards();


            return;

        }



        /* =================================================
           HOME SUBJECT CARDS
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
           SUBJECT / GLOBAL / CATEGORY CARDS
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
   INITIALIZE HOME
   ========================================================= */

addSubjectCardEvents();


addHomeEditEvents();


loadSavedColors();


loadSavedImages();