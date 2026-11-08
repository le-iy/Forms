
window.PandoraQuizzes.register({
  id: "IT0049-M03-F03",
  subject: "IT0049",
  module: 3,
  title: "Formative Assessment 3",
  kind: "formative",
  version: 1,
  description: "20-item formative assessment on CodeIgniter CRUD, validation, file uploads, and secure data handling.",
  createdAt: "2026-11-08T21:07:53+08:00",
  showOnHome: true,

  questions: [
    {
      id: "q1",
      type: "true_false",
      question: "Validation should normally run after saving the submitted data.",
      correctAnswer: false,
      explanation: "Validation must run before saving data to the database. It checks whether submitted values satisfy requirements such as required fields, valid formats, and allowed lengths. Saving first would allow invalid or potentially unsafe data to enter the database before rejection.",
      reference: "CodeIgniter 4 User Guide — Validation"
    },
    {
      id: "q2",
      type: "true_false",
      question: "The uploaded file's original name should always be trusted as the final server filename.",
      correctAnswer: false,
      explanation: "The original filename comes from the client and should not be blindly trusted. Using a generated filename reduces filename collisions and avoids depending on user-controlled names. The file must still undergo type, size, and security validation.",
      reference: "CodeIgniter 4 User Guide — Working with Uploaded Files"
    },
    {
      id: "q3",
      type: "true_false",
      question: "old() helps preserve submitted values when a form is redisplayed after validation failure.",
      correctAnswer: true,
      explanation: "The old() helper retrieves previously submitted input so a form can be repopulated after a failed validation attempt. In CodeIgniter 4, this is commonly used with a redirect that preserves input using withInput(). It improves usability by preventing users from reentering all their information.",
      reference: "CodeIgniter 4 User Guide — Form Helper and Validation"
    },
    {
      id: "q4",
      type: "multiple_choice",
      question: "Why should validation run before insert() or update() in a CodeIgniter controller?",
      options: [
        "It makes the view load before the controller.",
        "It automatically creates the database table.",
        "It removes the need for routes.",
        "It prevents invalid or unsafe input from being saved."
      ],
      correctAnswer: 3,
      explanation: "Validation checks submitted values before they are passed to insert() or update(). This helps prevent invalid records from being stored. It does not create tables, change the order of MVC execution, or eliminate routing. Database constraints, authorization, and safe query handling remain necessary.",
      reference: "CodeIgniter 4 User Guide — Validation and Models"
    },
    {
      id: "q5",
      type: "multiple_choice",
      question: "Which statement best describes CRUD?",
      options: [
        "A database credential format.",
        "A CodeIgniter file-upload library.",
        "A routing shortcut for GET requests only.",
        "The four record actions: create, read, update, and delete."
      ],
      correctAnswer: 3,
      explanation: "CRUD stands for Create, Read, Update, and Delete. These are the four fundamental operations performed on stored records. In CodeIgniter applications, controllers and models commonly coordinate these operations through database queries.",
      reference: "IT0049 — CRUD Operations; CodeIgniter 4 Models"
    },
    {
      id: "q6",
      type: "multiple_choice",
      question: "Which form attribute is required when a CodeIgniter page must upload a file?",
      options: [
        'target="_blank"',
        'method="GET"',
        'autocomplete="off"',
        'enctype="multipart/form-data"'
      ],
      correctAnswer: 3,
      explanation: "An HTML form must use enctype=\"multipart/form-data\" to send uploaded files in the request body. File uploads also normally use the POST method. The target and autocomplete attributes do not enable file uploads.",
      reference: "CodeIgniter 4 User Guide — Working with Uploaded Files; HTML Form Encoding"
    },
    {
      id: "q7",
      type: "multiple_choice",
      question: "Which approach is best when a real system should avoid permanently deleting user accounts?",
      options: [
        "Store deleted records in the view file.",
        "Remove validation rules for delete routes.",
        "Use an archive or deactivation status when possible.",
        "Run delete() through a GET link."
      ],
      correctAnswer: 2,
      explanation: "Archiving or deactivating accounts preserves records while preventing ordinary use of inactive accounts. This is useful when recovery, auditing, or retention is needed. Destructive actions should also require appropriate authorization and should not be triggered by an unprotected GET link.",
      reference: "IT0049 — CRUD Design and Account Deactivation"
    },
    {
      id: "q8",
      type: "multiple_choice",
      question: "What should be saved in the database after a successful public image upload?",
      options: [
        "Only the generated filename or path needed to display the file.",
        "The contents of $_FILES without checking it.",
        "The entire binary file inside a text column.",
        "The user's original computer folder path."
      ],
      correctAnswer: 0,
      explanation: "In a conventional file-based upload design, the application saves the validated file in controlled storage and stores its generated filename or relative path in the database. This avoids storing unnecessary binary content or user-provided local paths. The application must still enforce safe upload storage and access controls.",
      reference: "CodeIgniter 4 User Guide — Uploaded Files and Moving Files"
    },
    {
      id: "q9",
      type: "identification",
      question: "What file input form encoding is required for file uploads?",
      correctAnswer: "multipart/form-data",
      explanation: "The multipart/form-data encoding allows a browser to submit form fields and file contents together in an HTTP request. Without this encoding, uploaded file data will not be transmitted in the expected format.",
      reference: "HTML Form Encoding; CodeIgniter 4 User Guide — File Uploads"
    },
    {
      id: "q10",
      type: "multiple_choice",
      question: "A student saves uploaded avatars before checking file type and size. What is the main risk?",
      options: [
        "The database cannot store filenames.",
        "The browser will not display HTML.",
        "The controller will always skip routing.",
        "Unsafe or unexpected files may already be stored before rejection."
      ],
      correctAnswer: 3,
      explanation: "Saving an uploaded file before validating its type, size, and validity can allow unexpected or malicious content to reach application storage. The correct approach is to validate first, use a controlled destination, and generate a safe filename before moving an accepted file.",
      reference: "CodeIgniter 4 User Guide — File Validation and Uploaded Files"
    },
    {
      id: "q11",
      type: "identification",
      question: "What CodeIgniter constant points to the public front-controller path, often used when saving files under public/uploads?",
      correctAnswer: "FCPATH",
      explanation: "FCPATH is a CodeIgniter constant representing the directory containing the application's front controller, commonly the public directory. It can be used to construct a path such as FCPATH . 'uploads/' when storing public files. Public uploads need careful restrictions to prevent executable files from running.",
      reference: "CodeIgniter 4 User Guide — Directory Constants"
    },
    {
      id: "q12",
      type: "true_false",
      question: "File type and file size restrictions help reduce unsafe upload behavior.",
      correctAnswer: true,
      explanation: "Restricting allowed file types and maximum file sizes reduces the risk of uploading unexpected content, very large files, or files that could threaten application security. These controls should be combined with MIME validation, safe storage, and appropriate server configuration.",
      reference: "CodeIgniter 4 User Guide — File Validation"
    },
    {
      id: "q13",
      type: "true_false",
      question: "A CodeIgniter form that uploads files must use multipart/form-data.",
      correctAnswer: true,
      explanation: "File-upload forms must use multipart/form-data encoding so that uploaded file contents are included in the request. Without this form encoding, the server will not receive the uploaded files through the normal file-upload mechanism.",
      reference: "CodeIgniter 4 User Guide — Working with Uploaded Files"
    },
    {
      id: "q14",
      type: "multiple_choice",
      display: "dropdown",
      question: "Matching type. Match the term with the correct description.\n\nValidation rule",
      options: [
        "Describes what submitted input must satisfy before saving",
        "Transfers an accepted uploaded file to a target folder",
        "Reads an uploaded file object from the request",
        "Restores previously submitted input on a redisplayed form"
      ],
      correctAnswer: 0,
      explanation: "A validation rule defines a condition that submitted data must meet before being accepted, such as required, valid_email, or max_length. Rules help prevent incorrect input from being saved. They are different from file movement, file retrieval, and form-value restoration.",
      reference: "CodeIgniter 4 User Guide — Validation"
    },
    {
      id: "q15",
      type: "multiple_choice",
      question: "A form field is named email, but the controller validates user_email. What is the most likely result?",
      options: [
        "The database will rename the column.",
        "CodeIgniter will combine both names.",
        "Validation will not check the submitted email field correctly.",
        "The route will change automatically."
      ],
      correctAnswer: 2,
      explanation: "Validation rules normally refer to input field names. If the form submits email but the controller validates user_email, the rule targets a different field and may treat it as missing. The application must use consistent field names when retrieving, validating, and saving submitted data.",
      reference: "CodeIgniter 4 User Guide — Setting Validation Rules"
    },
    {
      id: "q16",
      type: "multiple_choice",
      question: "Which CodeIgniter UploadedFile method generates a safer unique filename before moving the file?",
      options: [
        "getRandomName()",
        "escapeName()",
        "makeSafe()",
        "newFilename()"
      ],
      correctAnswer: 0,
      explanation: "getRandomName() generates a randomized filename for an uploaded file, reducing collisions and dependence on the original client-supplied filename. It is commonly used with move(), for example $file->move($destination, $file->getRandomName()). A generated name is not a substitute for validating the uploaded file.",
      reference: "CodeIgniter 4 User Guide — Working with Uploaded Files"
    },
    {
      id: "q17",
      type: "multiple_choice",
      display: "dropdown",
      question: "Matching type. Match the term with the correct description.\n\nmove()",
      options: [
        "Describes what submitted input must satisfy before saving",
        "Transfers an accepted uploaded file to a target folder",
        "Reads an uploaded file object from the request",
        "Restores previously submitted input on a redisplayed form"
      ],
      correctAnswer: 1,
      explanation: "The move() method transfers an uploaded file from temporary storage to a specified destination directory. A developer can pass a generated filename as the second argument. The destination should be controlled by the application, and validation should happen before the move.",
      reference: "CodeIgniter 4 User Guide — UploadedFile::move()"
    },
    {
      id: "q18",
      type: "multiple_choice",
      display: "dropdown",
      question: "Matching type. Match the term with the correct description.\n\ngetFile()",
      options: [
        "Describes what submitted input must satisfy before saving",
        "Transfers an accepted uploaded file to a target folder",
        "Reads an uploaded file object from the request",
        "Restores previously submitted input on a redisplayed form"
      ],
      correctAnswer: 2,
      explanation: "The request object's getFile() method retrieves the uploaded-file object associated with a form input, such as $this->request->getFile('avatar'). The returned object can then be inspected, validated, and moved. getFile() does not move the file by itself.",
      reference: "CodeIgniter 4 User Guide — Accessing Uploaded Files"
    },
    {
      id: "q19",
      type: "multiple_choice",
      question: "Why is a random server filename safer than using the uploaded file's original name?",
      options: [
        "It reduces name collisions and avoids trusting user-supplied filenames.",
        "It makes images larger.",
        "It removes the need for file validation.",
        "It automatically compresses the file."
      ],
      correctAnswer: 0,
      explanation: "Randomly generated filenames reduce the likelihood of collisions and avoid directly trusting names supplied by users. They also make filenames less predictable. However, they do not automatically resize, compress, or validate uploaded content.",
      reference: "CodeIgniter 4 User Guide — getRandomName() and File Upload Security"
    },
    {
      id: "q20",
      type: "multiple_choice",
      display: "dropdown",
      question: "Matching type. Match the term with the correct description.\n\nold()",
      options: [
        "Describes what submitted input must satisfy before saving",
        "Transfers an accepted uploaded file to a target folder",
        "Reads an uploaded file object from the request",
        "Restores previously submitted input on a redisplayed form"
      ],
      correctAnswer: 3,
      explanation: "The old() helper retrieves previously submitted input, commonly after validation fails and the user is returned to the form. It lets a form display the user's earlier values so they do not need to be entered again. It is typically paired with redirect()->back()->withInput().",
      reference: "CodeIgniter 4 User Guide — Form Helper and Validation"
    }
  ]
});
