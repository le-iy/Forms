/* =========================================================
   SUBJECT DATA
   ========================================================= */

const subjects = {
    it0035: {
        code: "IT0035",
        name: "APPLIED OPERATING SYSTEM",
        color: "#d899e8"
    },

    it0035l: {
        code: "IT0035L",
        name: "APPLIED OPERATING SYSTEM LAB",
        color: "#20e99d"
    },

    it0037: {
        code: "IT0037",
        name: "SYSTEM ANALYSIS AND DESIGN",
        color: "#3ca8e8"
    },

    it0049: {
        code: "IT0049",
        name: "IT ELECTIVE – WEB SYSTEM TECHNOLOGIES",
        color: "#ff5757"
    },

    it0204: {
        code: "IT0204",
        name: "IT SPECIALIZATION 7 – CYBERSECURITY AND PRIVACY: LAWS, POLICIES, AND COMPLIANCE",
        color: "#d4d4d4"
    },

    it0015: {
        code: "IT0015",
        name: "NETWORKING 2",
        color: "#ffbc59"
    },

    ged0083: {
        code: "GED0083",
        name: "COLLEGE PHYSICS 2 LECTURE",
        color: "#8848f5"
    },

    ged0083l: {
        code: "GED0083L",
        name: "COLLEGE PHYSICS 2 LABORATORY",
        color: "#ffde59"
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
   CUSTOM COLOR PICKER ELEMENTS
   ========================================================= */

const customColorButton =
    document.getElementById("custom-color-button");

const customColorInput =
    document.getElementById("custom-color-input");



/* =========================================================
   CURRENT EDITED SUBJECT
   ========================================================= */

let activeEditorSubject = null;



/* =========================================================
   SAVE ORIGINAL HOME PAGE
   ========================================================= */

const homePageHTML =
    pageContent.innerHTML;



/* =========================================================
   STORAGE KEYS
   ========================================================= */

function getImageStorageKey(subjectId) {

    return `subject-image-${subjectId}`;

}


function getColorStorageKey(subjectId) {

    return `subject-color-${subjectId}`;

}



/* =========================================================
   GET SUBJECT COLOR
   ========================================================= */

function getSubjectColor(subjectId) {

    const savedColor =
        localStorage.getItem(
            getColorStorageKey(subjectId)
        );


    if (savedColor) {
        return savedColor;
    }


    return subjects[subjectId].color;

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
   LOAD SAVED COLORS
   ========================================================= */

function loadSavedColors() {

    Object.keys(subjects).forEach(
        function (subjectId) {

            const color =
                getSubjectColor(subjectId);


            applySubjectColor(
                subjectId,
                color
            );

        }
    );

}



/* =========================================================
   SAVE IMAGE
   ========================================================= */

function saveImage(
    file,
    subjectId
) {

    if (!file) {
        return;
    }


    const reader =
        new FileReader();


    reader.onload =
        function () {

            const imageData =
                reader.result;


            localStorage.setItem(
                getImageStorageKey(subjectId),
                imageData
            );


            showSavedImage(
                subjectId,
                imageData
            );


            showEditorImage(
                imageData
            );

        };


    reader.readAsDataURL(file);

}



/* =========================================================
   SHOW SAVED IMAGE ON CARD
   ========================================================= */

function showSavedImage(
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
   HIDE SAVED IMAGE
   ========================================================= */

function hideSavedImage(subjectId) {

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
   LOAD SAVED IMAGES
   ========================================================= */

function loadSavedImages() {

    Object.keys(subjects).forEach(
        function (subjectId) {

            const savedImage =
                localStorage.getItem(
                    getImageStorageKey(subjectId)
                );


            if (savedImage) {

                showSavedImage(
                    subjectId,
                    savedImage
                );

            }

            else {

                hideSavedImage(
                    subjectId
                );

            }

        }
    );

}



/* =========================================================
   SHOW IMAGE INSIDE EDITOR
   ========================================================= */

function showEditorImage(imageData) {

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
   OPEN CARD EDITOR
   ========================================================= */

function openCardEditor(subjectId) {

    const subject =
        subjects[subjectId];


    if (!subject) {
        return;
    }


    activeEditorSubject =
        subjectId;


    editorSubjectCode.textContent =
        subject.code;


    const currentColor =
        getSubjectColor(subjectId);


    customColorInput.value =
        currentColor;


    updateCustomColorButton(
        currentColor
    );


    const savedImage =
        localStorage.getItem(
            getImageStorageKey(subjectId)
        );


    if (savedImage) {

        showEditorImage(
            savedImage
        );

    }

    else {

        showEditorPlaceholder();

    }


    updateSelectedColor(
        currentColor
    );


    cardEditorOverlay.hidden =
        false;

}



/* =========================================================
   CLOSE CARD EDITOR
   ========================================================= */

function closeCardEditor() {

    cardEditorOverlay.hidden =
        true;


    activeEditorSubject =
        null;


    editorImageInput.value =
        "";

}



/* =========================================================
   EDIT BUTTON EVENTS
   ========================================================= */

function addImageEditEvents() {

    const editButtons =
        document.querySelectorAll(
            ".edit-image-button"
        );


    editButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();

                    event.stopPropagation();


                    const subjectId =
                        button.dataset.editSubject;


                    openCardEditor(
                        subjectId
                    );

                }
            );

        }
    );

}



/* =========================================================
   OPEN IMAGE FILE PICKER
   ========================================================= */

function openImagePicker() {

    if (!activeEditorSubject) {
        return;
    }


    editorImageInput.click();

}



/* =========================================================
   EDITOR IMAGE BUTTONS
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

        if (!activeEditorSubject) {
            return;
        }


        const file =
            editorImageInput.files[0];


        if (!file) {
            return;
        }


        saveImage(
            file,
            activeEditorSubject
        );

    }
);



/* =========================================================
   REMOVE IMAGE
   ========================================================= */

editorRemoveImage.addEventListener(
    "click",
    function () {

        if (!activeEditorSubject) {
            return;
        }


        localStorage.removeItem(
            getImageStorageKey(
                activeEditorSubject
            )
        );


        hideSavedImage(
            activeEditorSubject
        );


        showEditorPlaceholder();


        editorImageInput.value =
            "";

    }
);



/* =========================================================
   PRESET COLOR PALETTE
   ========================================================= */

colorOptions.forEach(
    function (button) {

        /*
            Custom color picker is also a .color-option,
            but it does not have data-color.
        */

        if (!button.dataset.color) {
            return;
        }


        button.addEventListener(
            "click",
            function () {

                if (!activeEditorSubject) {
                    return;
                }


                const color =
                    button.dataset.color;


                applySelectedColor(
                    activeEditorSubject,
                    color
                );

            }
        );

    }
);



/* =========================================================
   CUSTOM COLOR PICKER
   ========================================================= */

customColorButton.addEventListener(
    "click",
    function () {

        if (!activeEditorSubject) {
            return;
        }


        customColorInput.click();

    }
);



customColorInput.addEventListener(
    "input",
    function () {

        if (!activeEditorSubject) {
            return;
        }


        const color =
            customColorInput.value;


        applySelectedColor(
            activeEditorSubject,
            color
        );


        updateCustomColorButton(
            color
        );

    }
);



/* =========================================================
   APPLY SELECTED COLOR
   ========================================================= */

function applySelectedColor(
    subjectId,
    color
) {

    /*
        Save selected solid color.
    */

    localStorage.setItem(
        getColorStorageKey(subjectId),
        color
    );


    /*
        Choosing a color switches the card
        back to solid-color mode.
    */

    localStorage.removeItem(
        getImageStorageKey(subjectId)
    );


    hideSavedImage(
        subjectId
    );


    showEditorPlaceholder();


    applySubjectColor(
        subjectId,
        color
    );


    updateSelectedColor(
        color
    );


    customColorInput.value =
        color;

}



/* =========================================================
   CUSTOM COLOR BUTTON PREVIEW
   ========================================================= */

function updateCustomColorButton(color) {

    customColorButton.style.backgroundColor =
        color;

}



/* =========================================================
   SHOW SELECTED COLOR
   ========================================================= */

function updateSelectedColor(color) {

    let presetMatched =
        false;


    colorOptions.forEach(
        function (button) {

            button.classList.remove(
                "selected"
            );


            const buttonColor =
                button.dataset.color;


            /*
                Custom picker has no data-color.
            */

            if (!buttonColor) {
                return;
            }


            if (
                buttonColor.toLowerCase() ===
                color.toLowerCase()
            ) {

                button.classList.add(
                    "selected"
                );


                presetMatched =
                    true;

            }

        }
    );


    /*
        If the selected color is not one
        of the preset swatches, highlight
        the custom color button instead.
    */

    customColorButton.classList.remove(
        "selected"
    );


    if (!presetMatched) {

        customColorButton.classList.add(
            "selected"
        );

    }


    updateCustomColorButton(
        color
    );

}



/* =========================================================
   RESET CARD TO DEFAULT
   ========================================================= */

editorResetButton.addEventListener(
    "click",
    function () {

        if (!activeEditorSubject) {
            return;
        }


        const subject =
            subjects[
                activeEditorSubject
            ];


        localStorage.removeItem(
            getImageStorageKey(
                activeEditorSubject
            )
        );


        localStorage.removeItem(
            getColorStorageKey(
                activeEditorSubject
            )
        );


        applySubjectColor(
            activeEditorSubject,
            subject.color
        );


        hideSavedImage(
            activeEditorSubject
        );


        showEditorPlaceholder();


        customColorInput.value =
            subject.color;


        updateSelectedColor(
            subject.color
        );


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
   CLICK OUTSIDE POPUP TO CLOSE
   ========================================================= */

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



/* =========================================================
   PREVENT POPUP CLICK FROM CLOSING
   ========================================================= */

cardEditor.addEventListener(
    "click",
    function (event) {

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
        function (card) {

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
   CLEAR SIDEBAR ACTIVE STATES
   ========================================================= */

function clearActiveNavigation() {

    homeLink.classList.remove(
        "active"
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



/* =========================================================
   SET ACTIVE SUBJECT
   ========================================================= */

function setActiveSubject(subjectId) {

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

    pageContent.innerHTML =
        homePageHTML;


    clearActiveNavigation();


    homeLink.classList.add(
        "active"
    );


    searchInput.value =
        "";


    addSubjectCardEvents();

    addImageEditEvents();

    loadSavedColors();

    loadSavedImages();

}



/* =========================================================
   SHOW SUBJECT PAGE
   ========================================================= */

function showSubjectPage(subjectId) {

    const subject =
        subjects[subjectId];


    if (!subject) {
        return;
    }


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

                <span class="subject-heading-highlight">
                    ${subject.code} - ${subject.name}
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
                    class="subject-menu-image formatives-bg"
                >

                    <span
                        class="subject-menu-placeholder"
                    >
                        ▣
                    </span>

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
                    class="subject-menu-image summatives-bg"
                >

                    <span
                        class="subject-menu-placeholder"
                    >
                        ▣
                    </span>

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



    /* HOME BREADCRUMB */

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



    /* FORMATIVES / SUMMATIVES */

    const menuCards =
        document.querySelectorAll(
            ".subject-menu-card"
        );


    menuCards.forEach(
        function (card) {

            card.addEventListener(
                "click",
                function () {

                    const selectedSubject =
                        card.dataset.subject;


                    const category =
                        card.dataset.category;


                    openSubjectCategory(
                        selectedSubject,
                        category
                    );

                }
            );

        }
    );

}



/* =========================================================
   SUBJECT CATEGORY
   ========================================================= */

function openSubjectCategory(
    subjectId,
    category
) {

    const subject =
        subjects[subjectId];


    console.log(
        "Subject:",
        subject.code
    );


    console.log(
        "Category:",
        category
    );

}



/* =========================================================
   SIDEBAR SUBJECT LINKS
   ========================================================= */

subjectLinks.forEach(
    function (link) {

        link.addEventListener(
            "click",
            function (event) {

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
    function (event) {

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
            function (card) {

                const subjectId =
                    card.dataset.subject;


                const subject =
                    subjects[subjectId];


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

addImageEditEvents();

loadSavedColors();

loadSavedImages();