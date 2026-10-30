
"use strict";

// ==========================================
// PANDORA V.3 - SUBJECT DATA ADAPTER
// ==========================================

// Read the original subject files.
// These must load before pandora-data.js.

const originalSubjects = [
    typeof GED0083 !== "undefined" ? GED0083 : null,
    typeof GED0083L !== "undefined" ? GED0083L : null,
    typeof IT0015 !== "undefined" ? IT0015 : null,
    typeof IT0035 !== "undefined" ? IT0035 : null,
    typeof IT0035L !== "undefined" ? IT0035L : null,
    typeof IT0037 !== "undefined" ? IT0037 : null,
    typeof IT0049 !== "undefined" ? IT0049 : null,
    typeof IT0204 !== "undefined" ? IT0204 : null
];

// ==========================================
// 1. SUBJECT COLORS
// ==========================================

const subjectColors = {
    IT0035: "pink",
    IT0035L: "mint",
    IT0037: "pink",
    IT0049: "lavender",
    IT0204: "sage",
    IT0015: "peach",
    GED0083: "butter",
    GED0083L: "sky"
};

// ==========================================
// 2. IDENTIFY RESOURCE PLATFORM
// ==========================================

function getPlatform(resource) {
    const url = String(resource.link || "").toLowerCase();
    const title = String(resource.title || "").toLowerCase();

    if (
        url.includes("gizmo.ai") ||
        title.includes("gizmo")
    ) {
        return "Gizmo";
    }

    if (
        url.includes("forms.gle") ||
        url.includes("docs.google.com/forms")
    ) {
        return "Google Forms";
    }

    if (
        url.includes("forms.office.com") ||
        url.includes("forms.cloud.microsoft")
    ) {
        return "Microsoft Forms";
    }

    if (url.includes("itexams")) {
        return "ITExams";
    }

    if (
        url.includes("instructure.com") ||
        url.includes("canvas")
    ) {
        return "Canvas";
    }

    if (url.includes("github.com")) {
        return "GitHub";
    }

    if (url.split("?")[0].endsWith(".pdf")) {
        return "PDF";
    }

    if (title.includes("mamamo")) {
        return "Mamamo";
    }

    return "Other";
}

// ==========================================
// 3. IDENTIFY MODULE NUMBER
// ==========================================

function getModuleNumber(title) {
    const text = String(title || "");

    const match = text.match(
        /(?:module|mod)\s*0*(\d+)/i
    );

    if (!match) {
        return null;
    }

    return Number(match[1]);
}

// ==========================================
// 4. NORMALIZE SUBJECT INFORMATION
// ==========================================

function convertSubject(subject) {
    const subjectCode = String(
        subject.code || subject.id || ""
    ).toUpperCase();

    return {
        id: subjectCode,

        name: subject.name || subjectCode,

        color: subjectColors[subjectCode] || "pink"
    };
}

// ==========================================
// 5. CONVERT ORIGINAL RESOURCES
// ==========================================

function convertResource(
    resource,
    subjectCode,
    category,
    index
) {
    const resourceUrl = resource.link || "";

    const collaborationUrl = resource.collabLink || "";

    const hasEditLink =
        collaborationUrl !== "" &&
        collaborationUrl !== resourceUrl;

    return {
        id: `${subjectCode}-${category}-${index}`,

        title: resource.title || "Untitled Resource",

        description: resource.description || "",

        subject: subjectCode,

        category: category,

        kind: category === "reviewers"
            ? "reviewer"
            : "practice",

        platform: getPlatform(resource),

        module: getModuleNumber(resource.title),

        url: resourceUrl,

        editUrl: hasEditLink
            ? collaborationUrl
            : "",

        sourceUrl: resource.sourceUrl || "",

        references: Array.isArray(resource.references)
            ? resource.references
            : []
    };
}

// ==========================================
// 6. CREATE SUBJECT AND RESOURCE COLLECTIONS
// ==========================================

const pandoraSubjects = [];
const pandoraResources = [];

const categories = [
    "formatives",
    "summatives",
    "reviewers"
];

originalSubjects.forEach((originalSubject) => {

    // Skip files that failed to load.
    if (!originalSubject) {
        return;
    }

    const subject = convertSubject(originalSubject);

    pandoraSubjects.push(subject);

    categories.forEach((category) => {

        const entries =
            originalSubject.categories?.[category] || [];

        if (!Array.isArray(entries)) {
            return;
        }

        entries.forEach((resource, index) => {

            pandoraResources.push(
                convertResource(
                    resource,
                    subject.id,
                    category,
                    index
                )
            );

        });

    });

});

// ==========================================
// 7. EXPOSE DATA TO PANDORA V.3
// ==========================================

window.PANDORA_DATA = {
    subjects: pandoraSubjects,
    resources: pandoraResources
};

// ==========================================
// 8. DEBUG INFORMATION
// ==========================================

console.log("Pandora V.3 Data Loaded");

console.log(
    "Subjects:",
    pandoraSubjects.length
);

console.log(
    "Resources:",
    pandoraResources.length
);

console.table(
    pandoraSubjects.map((subject) => ({
        Subject: subject.id,
        Name: subject.name,
        Resources: pandoraResources.filter(
            (resource) => resource.subject === subject.id
        ).length
    }))
);

if (pandoraSubjects.length !== 8) {
    console.warn(
        "Some subject files did not load. Check the script paths in index.html."
    );
}
