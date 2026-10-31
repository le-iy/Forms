
"use strict";

/* ==========================================================
   PANDORA V.3 — SUBJECT DATA ADAPTER

   Editorial Sections Update

   Supports:
   - Explicit resource module assignment
   - Automatic module detection from titles
   - Reviewers / Practice / References sections
   - Existing subject category compatibility
   - Existing resource links and edit links

   Load SUBJECTS/*.js before this file.
   ========================================================== */


/* ==========================================================
   01. ORIGINAL SUBJECT FILES
   ========================================================== */

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


/* ==========================================================
   02. SUBJECT COLORS
   ========================================================== */

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


/* ==========================================================
   03. IDENTIFY RESOURCE PLATFORM
   ========================================================== */

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


/* ==========================================================
   04. AUTOMATIC MODULE DETECTION

   Examples:

   "Canvas Module 1"       -> 1
   "Network Map Mod 02"    -> 2
   "Lecture Module 10"     -> 10
   "Generated Formative 1" -> null

   Explicit module assignments take priority.
   ========================================================== */

function getModuleNumber(title) {
    const text = String(title || "");

    const match = text.match(
        /(?:module|mod)\s*0*(\d+)/i
    );

    if (!match) {
        return null;
    }

    const number = Number(match[1]);

    return Number.isSafeInteger(number) && number > 0
        ? number
        : null;
}


/* ==========================================================
   05. EXPLICIT MODULE ASSIGNMENT

   Example:

   {
       title: "Canvas Module 1",
       module: 3,
       ...
   }

   The resource belongs to Module 3, even when the
   displayed title contains "Module 1".

   Without a valid explicit module, existing title
   detection is used.

   module: null -> unassigned
   ========================================================== */

function resolveModule(resource) {
    const value = resource.module;

    if (
        value !== undefined &&
        value !== null &&
        value !== ""
    ) {
        const number = Number(value);

        if (
            Number.isSafeInteger(number) &&
            number > 0
        ) {
            return number;
        }
    }

    return getModuleNumber(resource.title);
}


/* ==========================================================
   06. SECTION ASSIGNMENT

   Valid sections:

   reviewers
   practice
   references

   Defaults:
   - reviewers category  -> reviewers
   - formatives category -> practice
   - summatives category -> practice

   Explicit resource.section overrides the default.

   This DOES NOT change the original category or kind,
   so global Reviewers and Practice Links remain compatible.
   ========================================================== */

function resolveSection(resource, category) {
    const section = String(
        resource.section || ""
    ).trim().toLowerCase();

    const allowed = [
        "reviewers",
        "practice",
        "references"
    ];

    if (allowed.includes(section)) {
        return section;
    }

    return category === "reviewers"
        ? "reviewers"
        : "practice";
}


/* ==========================================================
   07. NORMALIZE SUBJECT INFORMATION
   ========================================================== */

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


/* ==========================================================
   08. CONVERT ORIGINAL RESOURCES

   Preserve:
   - Existing resource IDs
   - Titles and descriptions
   - Original categories
   - Original kinds
   - URLs and edit URLs
   - Source URLs
   - Existing references data

   Add:
   - Explicit / automatically resolved module
   - Editorial section
   ========================================================== */

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

        module: resolveModule(resource),

        section: resolveSection(resource, category),

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


/* ==========================================================
   09. CREATE SUBJECT AND RESOURCE COLLECTIONS
   ========================================================== */

const pandoraSubjects = [];
const pandoraResources = [];

const categories = [
    "formatives",
    "summatives",
    "reviewers"
];

originalSubjects.forEach(originalSubject => {

    if (!originalSubject) {
        return;
    }

    const subject = convertSubject(originalSubject);

    pandoraSubjects.push(subject);

    categories.forEach(category => {

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


/* ==========================================================
   10. EXPOSE DATA TO PANDORA V.3
   ========================================================== */

window.PANDORA_DATA = {
    subjects: pandoraSubjects,
    resources: pandoraResources
};


/* ==========================================================
   11. DEBUG INFORMATION
   ========================================================== */

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
    pandoraSubjects.map(subject => ({
        Subject: subject.id,

        Name: subject.name,

        Resources: pandoraResources.filter(
            resource => resource.subject === subject.id
        ).length
    }))
);


/* ==========================================================
   12. MODULE ASSIGNMENT DEBUG

   Display resources without detected / assigned modules.

   This is informational only.
   Unassigned resources are NOT removed.
   ========================================================== */

const unassignedResources = pandoraResources.filter(
    resource => resource.module === null
);

if (unassignedResources.length) {
    console.info(
        "Pandora: Resources without a module assignment:",
        unassignedResources.length
    );

    console.table(
        unassignedResources.map(resource => ({
            Subject: resource.subject,
            Title: resource.title,
            Category: resource.category,
            Section: resource.section
        }))
    );
}


/* ==========================================================
   13. SUBJECT LOAD CHECK
   ========================================================== */

if (pandoraSubjects.length !== 8) {
    console.warn(
        "Some subject files did not load. " +
        "Check the script paths in index.html."
    );
}

console.info(
    "Pandora Editorial Sections data adapter ready."
);
