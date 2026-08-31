function saveImage(event, subjectId) {
    const file = event.target.files[0];

    if (!file) {
        return;
    }

    const reader = new FileReader();

    reader.onload = function () {
        const imageData = reader.result;

        localStorage.setItem(`subject-image-${subjectId}`, imageData);

        showSavedImage(subjectId, imageData);
    };

    reader.readAsDataURL(file);
}


function showSavedImage(subjectId, imageData) {
    const image = document.getElementById(`preview-${subjectId}`);
    const placeholder = document.getElementById(`placeholder-${subjectId}`);

    image.src = imageData;
    image.style.display = "block";

    placeholder.style.display = "none";
}


function loadSavedImages() {
    const subjects = [
        "it0035",
        "it0035l",
        "it0037",
        "it0049",
        "it0204",
        "it0015",
        "ged0083",
        "ged0083l"
    ];

    subjects.forEach(function (subjectId) {
        const savedImage = localStorage.getItem(
            `subject-image-${subjectId}`
        );

        if (savedImage) {
            showSavedImage(subjectId, savedImage);
        }
    });
}


loadSavedImages();