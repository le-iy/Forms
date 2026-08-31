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

const pageContent = document.getElementById("page-content");

const homeLink = document.getElementById("home-link");

const searchInput = document.getElementById("search-input");

const subjectLinks = document.querySelectorAll(".subject-link");



/* =========================================================
   SAVE ORIGINAL HOME PAGE
   ========================================================= */

/*
    We save the original HTML inside #page-content.

    This allows us to replace the content with a subject page,
    then restore the exact original Home page later.
*/

const homePageHTML = pageContent.innerHTML;



/* =========================================================
   IMAGE FUNCTIONS
   ========================================================= */

function saveImage(event, subjectId) {

    const file = event.target.files[0];


    if (!file) {
        return;
    }


    const reader = new FileReader();


    reader.onload = function () {

        const imageData = reader.result;


        localStorage.setItem(
            `subject-image-${subjectId}`,
            imageData
        );


        showSavedImage(
            subjectId,
            imageData
        );

    };


    reader.readAsDataURL(file);
}



/* =========================================================
   SHOW SAVED IMAGE
   ========================================================= */

function showSavedImage(subjectId, imageData) {

    const image =
        document.getElementById(
            `preview-${subjectId}`
        );


    const placeholder =
        document.getElementById(
            `placeholder-${subjectId}`
        );


    /*
        When we are inside a subject page,
        the Home card does not exist.

        So we check first before changing it.
    */

    if (!image || !placeholder) {
        return;
    }


    image.src = imageData;

    image.style.display = "block";

    placeholder.style.display = "none";
}



/* =========================================================
   LOAD SAVED SUBJECT IMAGES
   ========================================================= */

function loadSavedImages() {

    Object.keys(subjects).forEach(
        function (subjectId) {

            const savedImage =
                localStorage.getItem(
                    `subject-image-${subjectId}`
                );


            if (savedImage) {

                showSavedImage(
                    subjectId,
                    savedImage
                );

            }

        }
    );

}



/* =========================================================
   EDIT IMAGE BUTTONS
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

                    /*
                        Prevents the subject card itself
                        from opening.
                    */

                    event.stopPropagation();


                    const subjectId =
                        button.dataset.editSubject;


                    const input =
                        document.getElementById(
                            `input-${subjectId}`
                        );


                    if (input) {
                        input.click();
                    }

                }
            );

        }
    );



    const imageInputs =
        document.querySelectorAll(
            ".subject-image-input"
        );


    imageInputs.forEach(
        function (input) {

            input.addEventListener(
                "click",
                function (event) {

                    event.stopPropagation();

                }
            );


            input.addEventListener(
                "change",
                function (event) {

                    const subjectId =
                        input.dataset.subject;


                    saveImage(
                        event,
                        subjectId
                    );

                }
            );

        }
    );

}



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

    homeLink.classList.remove("active");


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


    subjectLink.classList.add(
        "active"
    );


    subjectLink.style.setProperty(
        "--subject-color",
        subjects[subjectId].color
    );

}



/* =========================================================
   SHOW HOME PAGE
   ========================================================= */

function showHomePage() {

    /*
        Restore original Home HTML.
    */

    pageContent.innerHTML =
        homePageHTML;


    /*
        Reset sidebar.
    */

    clearActiveNavigation();

    homeLink.classList.add(
        "active"
    );


    /*
        Search bar should show again normally.
    */

    searchInput.value = "";


    /*
        Because innerHTML was restored,
        event listeners need to be attached again.
    */

    addSubjectCardEvents();

    addImageEditEvents();

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


    searchInput.value = "";


    pageContent.innerHTML = `

        <div
            class="subject-heading"
            style="--subject-color: ${subject.color};"
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

                <div class="subject-menu-image formatives-bg">

                    <span class="subject-menu-placeholder">
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

                <div class="subject-menu-image summatives-bg">

                    <span class="subject-menu-placeholder">
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



    /* FORMATIVES AND SUMMATIVES CARDS */

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

/*
    For now, this function only detects which card
    was selected.

    Later we will replace this with the actual page
    containing the subject's formative/summative files.
*/

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


        /*
            Search only filters the Home subject cards.

            If no subject cards currently exist,
            nothing happens.
        */

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

                    card.style.display = "";

                }

                else {

                    card.style.display = "none";

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

loadSavedImages();