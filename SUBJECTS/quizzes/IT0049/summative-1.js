
window.PandoraQuizzes.register({
  id: "IT0049-M02-S01",
  subject: "IT0049",
  module: 2,
  title: "Summative Assessment 1",
  kind: "summative",
  version: 1,
  description: "50-item assessment covering CodeIgniter 4 Modules 1 and 2: MVC, routing, controllers, views, models, database configuration, Query Builder, and secure data handling. Original score: 46/50.",
  createdAt: "2026-11-10T07:03:35+08:00",
  showOnHome: true,
  questions: [
    {
      id: "q1",
      type: "multiple_choice",
      question: "Why would skipping the Model layer and querying the database directly inside a View be considered bad practice?",
      options: [
        "It breaks the separation of concerns central to MVC, mixing data access with presentation and making the code harder to maintain",
        "It would make the page load faster",
        "It is not possible for PHP to run database queries inside a .php file",
        "Views cannot technically connect to a database in CodeIgniter"
      ],
      correctAnswer: 0,
      explanation: "MVC separates data access, application logic, and presentation. A View should focus on displaying information, while the Model manages data access. Putting database queries directly in Views mixes responsibilities and makes testing, maintenance, and reuse harder. It is technically possible to execute PHP queries in a View, but that does not make it a good design.",
      reference: "CodeIgniter 4 — MVC Architecture and Models"
    },
    {
      id: "q2",
      type: "multiple_choice",
      question: "A model defines protected $allowedFields = ['title', 'status'];, but a controller attempts to insert a record with a description field as well. What will most likely happen?",
      options: [
        "The description value is silently ignored because it is not in $allowedFields",
        "CodeIgniter automatically adds description to $allowedFields",
        "The entire insert operation succeeds, including description",
        "An exception is always thrown, halting the application"
      ],
      correctAnswer: 0,
      explanation: "CodeIgniter's Model field protection permits mass assignment only to fields listed in $allowedFields. Since description is absent, that value is filtered out before the insert. However, if no permitted fields remain, some situations can result in a DataException. The property does not automatically update itself.",
      reference: "CodeIgniter 4 User Guide — Models: $allowedFields"
    },
    {
      id: "q3",
      type: "multiple_choice",
      display: "dropdown",
      question: "Matching type. Match the term with the correct description.\n\nController",
      options: [
        "Maps a URL pattern to a controller method",
        "Displays the final output to the user",
        "Stores environment-specific settings such as database credentials",
        "Manages data and communicates with the database",
        "Decides how to respond to a matched route",
        "Filters query results based on a condition",
        "Retrieves every record from a Model's table"
      ],
      correctAnswer: 4,
      explanation: "A Controller receives a request selected by the routing system, processes the application's logic, works with Models when data is needed, and chooses the response or View to return. The Router determines which Controller method is called, while the View displays content.",
      reference: "CodeIgniter 4 User Guide — Controllers"
    },
    {
      id: "q4",
      type: "multiple_choice",
      display: "dropdown",
      question: "Matching type. Match the term with the correct description.\n\nwhere()",
      options: [
        "Stores environment-specific settings such as database credentials",
        "Displays the final output to the user",
        "Retrieves every record from a Model's table",
        "Manages data and communicates with the database",
        "Decides how to respond to a matched route",
        "Maps a URL pattern to a controller method",
        "Filters query results based on a condition"
      ],
      correctAnswer: 6,
      explanation: "The where() method adds conditions to a database query. For example, where('status', 'done') restricts the returned records to those whose status is done. It does not retrieve all records by itself; methods such as findAll() can execute the filtered query.",
      reference: "CodeIgniter 4 User Guide — Query Builder: where()"
    },
    {
      id: "q5",
      type: "multiple_choice",
      question: "After correctly configuring .env and creating a Model, a page still shows a database connection error. Which of these is the LEAST likely cause?",
      options: [
        "The database credentials in .env are incorrect",
        "MySQL is not running",
        "The view file does not contain a <title> tag",
        "The database name in .env does not match the actual database"
      ],
      correctAnswer: 2,
      explanation: "The HTML title tag affects a page's document title, not the application's database connection. Incorrect credentials, a stopped database server, or an incorrect database name can prevent a successful connection. Database errors should be diagnosed through configuration and connection status rather than page markup.",
      reference: "CodeIgniter 4 — Database Configuration and Connection Troubleshooting"
    },
    {
      id: "q6",
      type: "multiple_choice",
      question: "In the typical CodeIgniter data flow, which component calls the Model to retrieve data before passing it to the View?",
      options: [
        "The route",
        "The Controller",
        "The .env file",
        "The View itself"
      ],
      correctAnswer: 1,
      explanation: "The Controller handles the incoming request, calls the Model to retrieve or modify data, and passes the resulting information to the View. Routes determine which controller method handles a URL, while .env provides environment settings.",
      reference: "CodeIgniter 4 — MVC Request Flow"
    },
    {
      id: "q7",
      type: "multiple_choice",
      question: "Which property in a Model tells CodeIgniter which database table the Model represents?",
      options: [
        "$source",
        "$from",
        "$table",
        "$dataset"
      ],
      correctAnswer: 2,
      explanation: "The protected $table property identifies the database table associated with a CodeIgniter Model. For instance, protected $table = 'tasks'; tells the Model to operate on the tasks table. $primaryKey identifies its primary-key column instead.",
      reference: "CodeIgniter 4 User Guide — Model Configuration: $table"
    },
    {
      id: "q8",
      type: "true_false",
      question: "The public folder should contain the application's business logic, including all Models.",
      correctAnswer: false,
      explanation: "CodeIgniter's public directory contains the front controller and publicly accessible assets. Application logic, Models, Controllers, and Views belong in the app directory, not in a web-accessible folder. This separation reduces exposure of application source code.",
      reference: "CodeIgniter 4 — Application Directory Structure"
    },
    {
      id: "q9",
      type: "multiple_choice",
      question: "Why does CodeIgniter separate \"define the route,\" \"handle the request,\" \"manage the data,\" and \"display the result\" into four different responsibilities instead of one large file?",
      options: [
        "It allows each part of the application to be changed, tested, or reused independently, without affecting the others",
        "It is a legal requirement for PHP applications",
        "It makes the code run without a web server",
        "It removes the need for a database entirely"
      ],
      correctAnswer: 0,
      explanation: "Separating routing, controllers, models, and views creates clearer responsibilities and reduces tight coupling. It makes applications easier to debug, test, expand, and maintain. It does not eliminate server or database requirements.",
      reference: "CodeIgniter 4 — Separation of Concerns and MVC"
    },
    {
      id: "q10",
      type: "identification",
      question: "What Query Builder method would you use to retrieve only records where a specific column matches a given value?",
      correctAnswer: "where",
      explanation: "The where() method restricts a database query using a condition, such as where('status', 'pending'). After specifying the condition, a retrieval method such as get() or findAll() obtains matching records. where() may be chained with other methods.",
      reference: "CodeIgniter 4 — Query Builder: where()"
    },
    {
      id: "q11",
      type: "multiple_choice",
      question: "A project combining routing (Module 1) and data access (Module 2) needs a task list page. A developer skips creating a Model entirely and runs raw SQL queries directly inside the Controller instead. What is the most significant long-term drawback?",
      options: [
        "It is not technically possible to query a database from inside a Controller",
        "Controllers technically cannot contain SQL syntax",
        "Database logic becomes scattered across multiple controllers instead of centralized in one reusable place, making the code harder to maintain",
        "It would make the page load slower in every case"
      ],
      correctAnswer: 2,
      explanation: "Controllers can technically query a database directly, but placing data access throughout controller code makes reuse and maintenance difficult. A dedicated Model centralizes common queries, table rules, and data operations. Direct SQL does not necessarily make every request slower.",
      reference: "CodeIgniter 4 — Models and Separation of Concerns"
    },
    {
      id: "q12",
      type: "multiple_choice",
      display: "dropdown",
      question: "Matching type. Match the term with the correct description.\n\nModel",
      options: [
        "Displays the final output to the user",
        "Retrieves every record from a Model's table",
        "Decides how to respond to a matched route",
        "Maps a URL pattern to a controller method",
        "Stores environment-specific settings such as database credentials",
        "Manages data and communicates with the database",
        "Filters query results based on a condition"
      ],
      correctAnswer: 5,
      explanation: "A Model represents application data and provides methods for working with the database. It can retrieve, insert, update, and delete records and define table-related properties. Controllers use Models to obtain the data needed for responses.",
      reference: "CodeIgniter 4 User Guide — Models"
    },
    {
      id: "q13",
      type: "true_false",
      question: "The Model layer in MVC is responsible for rendering the final HTML sent to the browser.",
      correctAnswer: false,
      explanation: "The Model handles application data and related database operations. The View is responsible for the presentation, including the HTML displayed to the user. The Controller coordinates requests and decides what response or View to return. Therefore, the Model does not normally render the final HTML.",
      reference: "CodeIgniter 4 — Model, View, Controller Responsibilities"
    },
    {
      id: "q14",
      type: "multiple_choice",
      question: "Which of these correctly loads the view file located at app/Views/tasks/index.php?",
      options: [
        "view('tasks.index.php');",
        "render('tasks/index');",
        "view('tasks/index');",
        "include('tasks/index');"
      ],
      correctAnswer: 2,
      explanation: "CodeIgniter's view() helper accepts the View path relative to app/Views, normally without the .php extension. Thus view('tasks/index') loads app/Views/tasks/index.php. The alternatives either use the wrong path syntax or are not the standard CodeIgniter helper call.",
      reference: "CodeIgniter 4 User Guide — Views"
    },
    {
      id: "q15",
      type: "true_false",
      question: "Chaining Query Builder methods, such as where() followed by orderBy(), allows you to filter and sort a query in a single statement.",
      correctAnswer: true,
      explanation: "Query Builder supports method chaining. For example, where('status', 'done')->orderBy('created_at', 'DESC')->get() filters rows by status, sorts the results by creation date, and executes the query. Each chained method contributes to the same query.",
      reference: "CodeIgniter 4 — Query Builder Method Chaining"
    },
    {
      id: "q16",
      type: "multiple_choice",
      question: "A Model needs to only allow updates to the 'title' and 'status' fields, not 'created_at'. Which property correctly enforces this?",
      options: [
        "protected $readOnly = ['title', 'status'];",
        "protected $allowedFields = ['title', 'status'];",
        "protected $primaryKey = ['title', 'status'];",
        "protected $table = ['title', 'status'];"
      ],
      correctAnswer: 1,
      explanation: "The $allowedFields array lists fields permitted through the Model's mass-assignment methods. Including title and status while excluding created_at protects that column from ordinary mass assignment. $table names the associated table, and $primaryKey identifies the record key.",
      reference: "CodeIgniter 4 User Guide — Model Field Protection"
    },
    {
      id: "q17",
      type: "multiple_choice",
      question: "What does the $primaryKey property in a CodeIgniter Model define?",
      options: [
        "The column CodeIgniter treats as the unique identifier for each row",
        "The first column displayed in a View",
        "The name of the database itself",
        "The default sorting column for all queries"
      ],
      correctAnswer: 0,
      explanation: "The Model's $primaryKey property identifies the database column used to uniquely identify records. It allows methods such as find($id), save(), and update($id, $data) to target records correctly. It does not determine View display order or the database name.",
      reference: "CodeIgniter 4 — Model $primaryKey"
    },
    {
      id: "q18",
      type: "multiple_choice",
      question: "Which of the following correctly describes the \"C\" in MVC?",
      options: ["Component", "Configuration", "Controller", "Class"],
      correctAnswer: 2,
      explanation: "MVC stands for Model, View, Controller. The Controller handles incoming requests, coordinates application behavior, and selects the response. Model handles data, while View presents the result.",
      reference: "CodeIgniter 4 — MVC Architecture"
    },
    {
      id: "q19",
      type: "true_false",
      question: "Using Query Builder instead of writing raw SQL strings reduces the risk of SQL injection because Query Builder escapes values automatically.",
      correctAnswer: true,
      explanation: "CodeIgniter Query Builder handles escaping or binding of values in its standard supported methods, reducing SQL injection risk compared with concatenating untrusted input directly into SQL. Developers must still avoid unsafe raw expressions or unvalidated SQL identifiers.",
      reference: "CodeIgniter 4 — Query Builder and SQL Injection Prevention"
    },
    {
      id: "q20",
      type: "true_false",
      question: "It is possible for a single CodeIgniter controller to have multiple methods, each handling a different route.",
      correctAnswer: true,
      explanation: "A CodeIgniter Controller can contain several public methods such as index(), create(), edit(), or delete(). Different routes can point to different methods in that Controller, providing organized handling of related requests.",
      reference: "CodeIgniter 4 — Controllers and Routing"
    },
    {
      id: "q21",
      type: "true_false",
      question: "A route placeholder such as (:num) will also match non-numeric text like \"abc123\".",
      correctAnswer: false,
      explanation: "The (:num) route placeholder matches numeric path segments. A mixed alphanumeric value such as abc123 does not satisfy that condition. A broader placeholder, such as (:segment), would match a non-slash string segment.",
      reference: "CodeIgniter 4 — Route Placeholders"
    },
    {
      id: "q22",
      type: "multiple_choice",
      question: "A developer chooses to hardcode a list of tasks directly in a controller using a PHP array, even though a database table already exists for tasks. What is the main drawback of this approach?",
      options: [
        "Controllers are not allowed to contain arrays",
        "Any changes to the task list require editing code instead of just the data, and the two data sources can fall out of sync",
        "PHP arrays cannot store multiple records",
        "Views cannot loop through array data"
      ],
      correctAnswer: 1,
      explanation: "Hardcoded arrays require source-code changes whenever the task list changes. If a database already stores tasks, maintaining a separate hardcoded list can also create inconsistent information. PHP controllers can use arrays, and Views can iterate over them.",
      reference: "IT0049 — Dynamic Data with Models and Databases"
    },
    {
      id: "q23",
      type: "multiple_choice",
      question: "What must be included in a controller class definition for it to work correctly in CodeIgniter 4?",
      options: [
        "It must implement the ViewInterface",
        "It must extend the BaseController class",
        "It must include a Model property",
        "It must be named \"Controller.php\""
      ],
      correctAnswer: 1,
      explanation: "In the standard CodeIgniter 4 application structure, controllers commonly extend App\\Controllers\\BaseController, which provides shared setup and helper functionality. A Controller does not have to declare its own Model property or use the filename Controller.php. The framework also supports other compatible controller inheritance patterns, but BaseController is the intended course convention.",
      reference: "CodeIgniter 4 User Guide — Controllers and BaseController"
    },
    {
      id: "q24",
      type: "multiple_choice",
      question: "Which symbol/syntax is used in a CodeIgniter View to output an escaped PHP value directly into HTML?",
      options: [
        "<?= ?>",
        "<%= %>",
        "{{ }}",
        "<# #>"
      ],
      correctAnswer: 0,
      explanation: "The intended choice is PHP's short echo syntax, <?= ... ?>, which prints a value in a View. However, PHP's short echo syntax does not escape HTML automatically. To safely output an escaped value in CodeIgniter, write <?= esc($value) ?>. The question is technically defective because none of the listed bare syntax forms guarantees escaping. The first option is retained as the intended course answer.",
      reference: "CodeIgniter 4 User Guide — Alternative PHP Syntax and esc()"
    },
    {
      id: "q25",
      type: "true_false",
      question: "Once a route is defined, visiting a matching URL will always run the associated controller method, regardless of whether that method actually exists.",
      correctAnswer: false,
      explanation: "A route maps a URL to a target handler, but the associated Controller and method must be available and accessible. A missing method cannot be invoked successfully and generally results in an error or unavailable route response.",
      reference: "CodeIgniter 4 — Routing and Controller Methods"
    },
    {
      id: "q26",
      type: "multiple_choice",
      question: "Which line correctly retrieves all tasks with a status of 'done' using a TaskModel instance named $model?",
      options: [
        "$model->findAll('status', 'done');",
        "$model->where('status', 'done')->findAll();",
        "$model->filterBy('done');",
        "$model->status('done');"
      ],
      correctAnswer: 1,
      explanation: "The where('status', 'done') method applies a filter, and findAll() retrieves all records satisfying it. The findAll() parameters are not field-value filters. The other methods are not standard CodeIgniter Model query methods.",
      reference: "CodeIgniter 4 — Models: where() and findAll()"
    },
    {
      id: "q27",
      type: "identification",
      question: "What is the name of the CodeIgniter file where database connection settings are typically stored?",
      correctAnswer: "Database.php",
      explanation: "In CodeIgniter 4, the main database configuration file is app/Config/Database.php. Its class defines connection settings and database groups. A .env file may also provide environment-specific overrides. The uppercase D matters on case-sensitive filesystems; this differs from CodeIgniter 3's older database.php convention.",
      reference: "CodeIgniter 4 User Guide — Database Configuration"
    },
    {
      id: "q28",
      type: "true_false",
      question: "Passing data from a controller to a view typically involves an associative array, where each key becomes a variable name inside the view.",
      correctAnswer: true,
      explanation: "A Controller can pass an associative data array to view(), such as ['tasks' => $tasks]. Inside that View, the key tasks becomes available as the variable $tasks. This allows the Controller to supply information without embedding database access in the View.",
      reference: "CodeIgniter 4 — Passing Data to Views"
    },
    {
      id: "q29",
      type: "multiple_choice",
      question: "A route is defined as $routes->get('/tasks/(:num)', 'Tasks::show/$1');. What happens if a user visits /tasks/abc?",
      options: [
        "It works normally because CodeIgniter ignores the placeholder type",
        "It automatically redirects to /tasks",
        "It throws a database error",
        "It does not match this route, since (:num) only accepts numeric segments"
      ],
      correctAnswer: 3,
      explanation: "The (:num) placeholder matches numeric segments such as 45, but not alphabetic text such as abc. Therefore, /tasks/abc does not match that route. Another matching route could handle the URL if one exists, but this specific definition will not.",
      reference: "CodeIgniter 4 — Route Placeholders"
    },
    {
      id: "q30",
      type: "true_false",
      question: "CodeIgniter automatically creates database tables the first time a Model is used.",
      correctAnswer: false,
      explanation: "Defining or using a Model does not automatically create its database table. The table must already exist, commonly through a migration, SQL script, or database management tool. A Model specifies how the application interacts with that table.",
      reference: "CodeIgniter 4 — Models and Database Migrations"
    },
    {
      id: "q31",
      type: "identification",
      question: "What term refers to the practice of dividing an application into Model, View, and Controller layers, each with a distinct responsibility?",
      correctAnswer: "MVC",
      explanation: "MVC stands for Model–View–Controller. Model manages data, View handles presentation, and Controller processes requests and coordinates application behavior. Keeping these responsibilities separate improves code organization and maintainability.",
      reference: "CodeIgniter 4 — MVC Architectural Pattern"
    },
    {
      id: "q32",
      type: "multiple_choice",
      display: "dropdown",
      question: "Matching type. Match the term with the correct description.\n\nfindAll()",
      options: [
        "Maps a URL pattern to a controller method",
        "Manages data and communicates with the database",
        "Filters query results based on a condition",
        "Retrieves every record from a Model's table",
        "Decides how to respond to a matched route",
        "Stores environment-specific settings such as database credentials",
        "Displays the final output to the user"
      ],
      correctAnswer: 3,
      explanation: "findAll() retrieves multiple records from a CodeIgniter Model's table. Without a filter, it normally retrieves all available rows, subject to Model settings such as soft deletes. When chained after where(), it retrieves only the records matching that condition.",
      reference: "CodeIgniter 4 User Guide — Model findAll()"
    },
    {
      id: "q33",
      type: "true_false",
      question: "The Controller is the component in MVC responsible for deciding what response to send back for a given request.",
      correctAnswer: true,
      explanation: "A Controller handles an incoming request, decides which application operations are needed, interacts with a Model when appropriate, and returns a response such as a rendered View, redirect, or JSON data.",
      reference: "CodeIgniter 4 — Controllers and Responses"
    },
    {
      id: "q34",
      type: "multiple_choice",
      question: "Why might project structure (separating routes, controllers, models, and views into their own folders) matter more as an application grows larger?",
      options: [
        "It is only useful for teams larger than 10 developers",
        "It has no real benefit; it is purely a style preference",
        "It reduces the number of files needed by half",
        "It keeps related code easy to find and reduces the chance that changes in one part accidentally break another"
      ],
      correctAnswer: 3,
      explanation: "Organized files and clearly separated responsibilities make larger projects easier to navigate and maintain. Changes can be localized to the relevant component, reducing unnecessary coupling. This benefits individual developers as well as teams of any size.",
      reference: "CodeIgniter 4 — Application Structure and MVC"
    },
    {
      id: "q35",
      type: "multiple_choice",
      question: "Between SELECT * FROM tasks WHERE status = '$status' built by directly inserting a variable into a SQL string, versus $builder->where('status', $status)->get();, which is safer and why?",
      options: [
        "Both are equally safe since PHP validates all strings by default",
        "Neither is safe unless a Model class is used",
        "The Query Builder version is safer because it automatically escapes the value, protecting against SQL injection",
        "The raw SQL is safer because it is more explicit"
      ],
      correctAnswer: 2,
      explanation: "Query Builder handles query values using its normal escaping and parameter-handling mechanisms, reducing the risk of SQL injection. Directly concatenating untrusted input into SQL can let malicious characters alter query logic. Query Builder is not a replacement for authorization or careful handling of raw SQL expressions.",
      reference: "CodeIgniter 4 — Query Builder and SQL Injection"
    },
    {
      id: "q36",
      type: "multiple_choice",
      question: "A Model's $allowedFields includes 'title' and 'status'. A new 'priority' column is added to the database table, but $allowedFields is never updated. What happens when a controller tries to save a priority value?",
      options: [
        "The priority value is silently dropped and not saved, even though the column exists",
        "The Model refuses to run any queries at all",
        "The database automatically adds it to $allowedFields",
        "CodeIgniter throws a fatal, uncatchable error immediately"
      ],
      correctAnswer: 0,
      explanation: "The Model's mass-assignment field protection permits only columns included in $allowedFields. Adding a database column does not automatically update the Model's allowed list, so priority is filtered out from standard Model insert or update data. It must be explicitly added if assignments are intended.",
      reference: "CodeIgniter 4 — Model Field Protection"
    },
    {
      id: "q37",
      type: "multiple_choice",
      display: "dropdown",
      question: "Matching type. Match the term with the correct description.\n\n.env",
      options: [
        "Decides how to respond to a matched route",
        "Retrieves every record from a Model's table",
        "Maps a URL pattern to a controller method",
        "Displays the final output to the user",
        "Stores environment-specific settings such as database credentials",
        "Filters query results based on a condition",
        "Manages data and communicates with the database"
      ],
      correctAnswer: 4,
      explanation: "The .env file stores environment-dependent configuration values such as database hostnames, credentials, and application settings. Separating these values from source code makes it easier to configure different development and production environments. Secrets must still be protected from public access and version-control exposure.",
      reference: "CodeIgniter 4 — Environment Variables and .env"
    },
    {
      id: "q38",
      type: "multiple_choice",
      question: "A route is defined only as $routes->get('/tasks', 'Tasks::index');. A user submits a form via POST to the same /tasks URL expecting Tasks::store() to run. What will most likely happen?",
      options: [
        "The request fails or returns an error, since no POST route was defined for /tasks",
        "Tasks::store() runs normally because the URL matches",
        "The database saves the data anyway, bypassing the routing system",
        "CodeIgniter automatically creates a POST route based on the GET one"
      ],
      correctAnswer: 0,
      explanation: "The get() route matches GET requests, not POST submissions. To handle a POST to /tasks, a corresponding post() route must be defined, assuming no other route handles it. Routes are matched by both URL and HTTP method.",
      reference: "CodeIgniter 4 — HTTP Method-Based Routing"
    },
    {
      id: "q39",
      type: "multiple_choice",
      question: "What is the main advantage of separating an application's routes into app/Config/Routes.php rather than scattering URL logic throughout controllers?",
      options: [
        "It makes the application run faster",
        "It gives a single, organized place to see and manage all the URLs the application responds to",
        "It removes the need for controllers entirely",
        "It is required for Composer to function"
      ],
      correctAnswer: 1,
      explanation: "Routes.php centralizes URL-to-handler mappings. Keeping routing definitions together makes available endpoints easier to review, update, and troubleshoot. This organization does not remove Controllers or automatically improve execution speed.",
      reference: "CodeIgniter 4 — Route Definitions"
    },
    {
      id: "q40",
      type: "true_false",
      question: "A Model's $allowedFields property lists the database columns that are permitted to be set through mass assignment (like insert() or update()).",
      correctAnswer: true,
      explanation: "The $allowedFields property specifies the fields that a Model permits in mass-assignment operations such as insert() and update(). Fields not included are normally filtered out to reduce unintended modification of sensitive columns.",
      reference: "CodeIgniter 4 — Model $allowedFields"
    },
    {
      id: "q41",
      type: "true_false",
      question: "findAll() returns only the first matching record from a table.",
      correctAnswer: false,
      explanation: "findAll() retrieves multiple matching records, usually as an array of rows. find() retrieves a record by primary key, while first() returns a single first matching result. Therefore, findAll() is not limited to one record.",
      reference: "CodeIgniter 4 — Model Retrieval Methods"
    },
    {
      id: "q42",
      type: "multiple_choice",
      question: "A developer renames a View file from about.php to About.php on a case-sensitive server, but the controller still calls view('about'). What will most likely happen?",
      options: [
        "Nothing changes; CodeIgniter ignores case",
        "The route will automatically update",
        "The Model will regenerate the file",
        "The page will likely fail to load because the filename case no longer matches"
      ],
      correctAnswer: 3,
      explanation: "On a case-sensitive filesystem, about.php and About.php are different filenames. A request to view('about') may fail to locate the renamed View when the case does not match. Routes and Models do not automatically rename View references.",
      reference: "CodeIgniter 4 — View Paths and Case-Sensitive Filesystems"
    },
    {
      id: "q43",
      type: "multiple_choice",
      question: "A developer needs a route where visiting /users/45/edit loads the edit form for user ID 45. Which route definition is correct?",
      options: [
        "$routes->get('/users/edit/(:num)', 'Users::edit');",
        "$routes->view('/users/45/edit');",
        "$routes->get('/users/(:num)/edit', 'Users::edit/$1');",
        "$routes->post('/users/(:num)/edit', 'Users::edit');"
      ],
      correctAnswer: 2,
      explanation: "The route pattern /users/(:num)/edit matches a numeric user ID between users and edit. The $1 reference passes the captured ID to Users::edit(). A GET request is appropriate for displaying an edit form, while POST is commonly used to submit changes.",
      reference: "CodeIgniter 4 — Route Placeholders and Parameters"
    },
    {
      id: "q44",
      type: "identification",
      question: "What is the term for the special class in CodeIgniter that represents and manages a specific database table?",
      correctAnswer: "model",
      explanation: "A Model is a class used to represent and manage application data associated with a database table. CodeIgniter Models can provide common database operations such as retrieving, inserting, updating, and deleting records.",
      reference: "CodeIgniter 4 User Guide — Models"
    },
    {
      id: "q45",
      type: "multiple_choice",
      question: "A controller method is defined as public function about() { return view('about'); }. What must exist for this to work correctly?",
      options: [
        "A Model named About",
        "A database table named about",
        "A .env entry named ABOUT",
        "A route pointing to this method, and a view file at app/Views/about.php"
      ],
      correctAnswer: 3,
      explanation: "The application needs a way to route the intended URL to the about() method and a View file named about.php in app/Views. The method can return a static View without a Model, database table, or special environment variable.",
      reference: "CodeIgniter 4 — Controllers, Routes, and Views"
    },
    {
      id: "q46",
      type: "true_false",
      question: "The .env file is used to store view templates.",
      correctAnswer: false,
      explanation: "The .env file holds environment configuration such as database settings. View templates are normally stored under app/Views. Confusing the two would mix application configuration with presentation files.",
      reference: "CodeIgniter 4 — Environment Configuration and Views"
    },
    {
      id: "q47",
      type: "multiple_choice",
      question: "Why is using CodeIgniter's Query Builder generally considered safer than concatenating raw SQL strings with user input?",
      options: [
        "Query Builder is faster to type",
        "Query Builder does not require a database connection",
        "Query Builder automatically escapes values, reducing the risk of SQL injection",
        "Raw SQL cannot retrieve more than one row"
      ],
      correctAnswer: 2,
      explanation: "Query Builder's ordinary methods safely handle values in SQL expressions, lowering the risk that user input will be interpreted as executable SQL. Concatenating untrusted data into raw SQL strings is dangerous unless proper parameter binding is used. Safe query construction does not eliminate the need for validation and authorization.",
      reference: "CodeIgniter 4 — Query Builder Security"
    },
    {
      id: "q48",
      type: "identification",
      question: "What term describes an unauthorized attempt to manipulate a database by injecting malicious SQL through user input, which Query Builder helps prevent?",
      correctAnswer: "SQL injection",
      explanation: "SQL injection occurs when attacker-controlled input changes the structure or meaning of a database query. Using bound parameters and safe Query Builder methods prevents user-supplied values from becoming part of SQL command syntax.",
      reference: "OWASP — SQL Injection; CodeIgniter 4 Query Builder"
    },
    {
      id: "q49",
      type: "multiple_choice",
      question: "Which method would you chain to where('status', 'pending') to also sort the returned records by their creation date, newest first?",
      options: [
        "filter('created_at')",
        "arrange('created_at', 'newest')",
        "sort('created_at')",
        "orderBy('created_at', 'DESC')"
      ],
      correctAnswer: 3,
      explanation: "orderBy('created_at', 'DESC') sorts results by the created_at field in descending order, placing the newest dates first. It can be chained after where() before retrieving the records. The other options are not the standard Query Builder sorting method.",
      reference: "CodeIgniter 4 — Query Builder orderBy()"
    },
    {
      id: "q50",
      type: "multiple_choice",
      question: "A view attempts to display $tasks using a foreach loop, but the page shows the error \"Undefined variable $tasks.\" What is the most likely cause?",
      options: [
        "The Model's $table property is misspelled",
        "The database connection failed",
        "The route was defined with the wrong HTTP verb",
        "The controller did not include tasks in the data array passed to view()"
      ],
      correctAnswer: 3,
      explanation: "A View can access $tasks when the Controller supplies a matching key, for example view('tasks/index', ['tasks' => $tasks]). If that key is omitted, the View may report $tasks as undefined. This is primarily a data-passing problem rather than a database schema or routing issue.",
      reference: "CodeIgniter 4 — Passing Data from Controllers to Views"
    }
  ]
});
