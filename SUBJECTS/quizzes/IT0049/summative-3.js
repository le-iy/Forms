
window.PandoraQuizzes.register({
  id: "IT0049-M05-S03",
  subject: "IT0049",
  module: 5,
  title: "Summative Assessment 3",
  kind: "summative",
  version: 1,
  description: "50-item assessment covering Laravel fundamentals, Blade, Artisan, Eloquent, migrations, seeders, routes, controllers, and comparison with CodeIgniter. Original score: 49/50.",
  createdAt: "2026-11-10T07:10:40+08:00",
  showOnHome: true,

  questions: [
    {
      id: "q1",
      type: "multiple_choice",
      question: "Why does Laravel use the public folder as the web-accessible entry point?",
      options: [
        "To replace the need for routes.",
        "To expose only public assets and the front controller, not the whole application source.",
        "To store database passwords in public.",
        "To make every PHP file downloadable."
      ],
      correctAnswer: 1,
      explanation: "Laravel places its front controller, public/index.php, and publicly accessible assets in the public directory. The web server should use this directory as its document root so application source, configuration, and sensitive files outside public are not directly exposed. Routes are still needed to direct incoming requests.",
      reference: "Laravel Documentation — Directory Structure; Deployment"
    },
    {
      id: "q2",
      type: "true_false",
      question: "A Blade view should normally perform all database queries directly.",
      correctAnswer: false,
      explanation: "Blade is Laravel's templating engine and primarily handles presentation. Database queries should normally be performed through Eloquent models, query services, or controllers before data is passed to a Blade view. This separation makes the application easier to maintain, test, and secure.",
      reference: "Laravel Documentation — Blade Templates; Controllers; Eloquent"
    },
    {
      id: "q3",
      type: "true_false",
      question: "The public folder should contain all application controllers and models.",
      correctAnswer: false,
      explanation: "Laravel controllers and Eloquent models are application classes normally located under app/Http/Controllers and app/Models. The public directory contains the web entry point and public assets. Placing application classes in the public web root would unnecessarily expose internal code.",
      reference: "Laravel Documentation — Directory Structure"
    },
    {
      id: "q4",
      type: "true_false",
      question: "Migrations help define database tables in code.",
      correctAnswer: true,
      explanation: "Laravel migrations are version-controlled PHP files that describe database schema changes. They can create tables, define columns, add indexes, and modify structures using Laravel's Schema Builder. This helps teams apply the same database structure consistently.",
      reference: "Laravel Documentation — Database Migrations"
    },
    {
      id: "q5",
      type: "multiple_choice",
      question: "Which property is commonly used in an Eloquent model to allow mass assignment for selected columns?",
      options: [
        "$fillable",
        "$columnsAllowed",
        "$massRoutes",
        "$tableOnly"
      ],
      correctAnswer: 0,
      explanation: "An Eloquent model's $fillable property lists the attributes that may be mass-assigned through operations such as create() and fill(). For example, protected $fillable = ['title', 'status']; permits those attributes. This is conceptually similar to CodeIgniter's $allowedFields, although each framework implements field protection differently.",
      reference: "Laravel Documentation — Eloquent: Mass Assignment"
    },
    {
      id: "q6",
      type: "multiple_choice",
      question: "What is Blade?",
      options: [
        "A route placeholder.",
        "A database migration tool only.",
        "Laravel's templating engine for views.",
        "A password hashing package."
      ],
      correctAnswer: 2,
      explanation: "Blade is Laravel's templating engine. It provides syntax such as {{ $value }}, @if, @foreach, and reusable components for producing HTML views. Blade is not a routing, database migration, or password-hashing tool.",
      reference: "Laravel Documentation — Blade Templates"
    },
    {
      id: "q7",
      type: "multiple_choice",
      display: "dropdown",
      question: "Matching type. Match the term with the correct description.\n\nBlade",
      options: [
        "Laravel templating engine",
        "Defines database structure changes in code",
        "Laravel command-line tool",
        "Represents a database-backed entity",
        "Adds sample or starting data"
      ],
      correctAnswer: 0,
      explanation: "Blade is Laravel's templating engine for creating application views. It supports layouts, reusable components, conditional statements, loops, and escaped output. Database schema changes are handled by migrations, while seeders populate data and Artisan provides command-line tools.",
      reference: "Laravel Documentation — Blade Templates"
    },
    {
      id: "q8",
      type: "multiple_choice",
      question: "Which Laravel file commonly contains database connection values such as DB_DATABASE and DB_USERNAME?",
      options: [
        "app/Http/Kernel.php",
        ".env",
        "resources/views/db.blade.php",
        "routes/web.php"
      ],
      correctAnswer: 1,
      explanation: "Laravel's .env file provides environment-specific settings such as DB_CONNECTION, DB_DATABASE, DB_USERNAME, and DB_PASSWORD. These values are used by the application configuration. The .env file should not be publicly accessible or committed with actual secrets.",
      reference: "Laravel Documentation — Configuration; Environment Variables"
    },
    {
      id: "q9",
      type: "identification",
      question: "What is Laravel's command-line tool called?",
      correctAnswer: "Artisan",
      explanation: "Artisan is Laravel's built-in command-line interface. Developers use it for tasks such as starting the development server, generating controllers and models, running migrations, and clearing caches. For example, php artisan serve starts the local development server in supported environments.",
      reference: "Laravel Documentation — Artisan Console"
    },
    {
      id: "q10",
      type: "multiple_choice",
      question: "A route should display a welcome page using a controller method. Which route shape is appropriate?",
      options: [
        "Blade::get('/welcome');",
        "Route::model('/welcome', 'welcome');",
        "Route::get('/welcome', [PageController::class, 'welcome']);",
        "Controller::route('welcome');"
      ],
      correctAnswer: 2,
      explanation: "Route::get() defines a route that handles an HTTP GET request. The array [PageController::class, 'welcome'] tells Laravel to invoke the welcome method of PageController. Blade renders views but does not define routes, and Controller::route() is not the standard routing API.",
      reference: "Laravel Documentation — Routing to Controller Actions"
    },
    {
      id: "q11",
      type: "multiple_choice",
      question: "Which command is commonly used to create a Laravel controller?",
      options: [
        "composer controller PageController",
        "php blade:controller PageController",
        "php artisan make:controller PageController",
        "php artisan new:view PageController"
      ],
      correctAnswer: 2,
      explanation: "Laravel's Artisan command php artisan make:controller PageController generates a controller class in the appropriate application directory. Artisan offers many make: commands to generate framework files. Composer manages PHP dependencies rather than directly generating controllers using this syntax.",
      reference: "Laravel Documentation — Controllers; Artisan make:controller"
    },
    {
      id: "q12",
      type: "multiple_choice",
      question: "Which Laravel file commonly stores web route definitions?",
      options: [
        "resources/views/routes.php",
        "database/web.php",
        "routes/web.php",
        "app/Models/web.php"
      ],
      correctAnswer: 2,
      explanation: "In a standard Laravel application, routes/web.php defines routes for the web interface. These routes may use controllers, closures, and middleware. Database files and Blade views serve different purposes.",
      reference: "Laravel Documentation — Basic Routing"
    },
    {
      id: "q13",
      type: "true_false",
      question: "A controller method can return a Blade view using return view(...).",
      correctAnswer: true,
      explanation: "A controller can return a Blade-based view using Laravel's view() helper, for example return view('welcome');. Laravel resolves the corresponding Blade template in resources/views and renders it as part of the HTTP response.",
      reference: "Laravel Documentation — Views; Controllers"
    },
    {
      id: "q14",
      type: "multiple_choice",
      display: "dropdown",
      question: "Matching type. Match the term with the correct description.\n\nMigration",
      options: [
        "Laravel templating engine",
        "Defines database structure changes in code",
        "Laravel command-line tool",
        "Represents a database-backed entity",
        "Adds sample or starting data"
      ],
      correctAnswer: 1,
      explanation: "A migration represents a version-controlled database schema change. It defines operations such as creating a table, changing columns, or adding indexes through Laravel's Schema Builder. A migration changes the structure; a seeder is used to insert sample or starting data.",
      reference: "Laravel Documentation — Database Migrations"
    },
    {
      id: "q15",
      type: "multiple_choice",
      question: "A student wants to copy CodeIgniter syntax directly into Laravel routes. What is the best guidance?",
      options: [
        "Avoid routes entirely.",
        "Move Laravel views to app/Views.",
        "Compare the idea, then use Laravel's Route facade syntax.",
        "Tell them both frameworks use identical code."
      ],
      correctAnswer: 2,
      explanation: "CodeIgniter and Laravel both use routing concepts but implement them with different APIs and project structures. Laravel commonly uses the Route facade in routes/web.php, while CodeIgniter uses its own route collection. Understanding the shared purpose helps when transferring knowledge between frameworks.",
      reference: "Laravel Documentation — Routing; CodeIgniter 4 — URI Routing"
    },
    {
      id: "q16",
      type: "multiple_choice",
      question: "A developer changes .env but Laravel still uses old configuration values. What might be needed in some situations?",
      options: [
        "Delete the routes folder.",
        "Clear cached configuration.",
        "Rename every controller.",
        "Move views into public."
      ],
      correctAnswer: 1,
      explanation: "Laravel may continue using previously cached configuration even after .env values change. Running php artisan config:clear removes the cached configuration so Laravel can load updated settings. Deleting routes or moving views does not resolve the configuration cache.",
      reference: "Laravel Documentation — Configuration Caching; Artisan config:clear"
    },
    {
      id: "q17",
      type: "multiple_choice",
      question: "Which comparison between CodeIgniter and Laravel is accurate for beginners?",
      options: [
        "Laravel cannot use controllers.",
        "Only Laravel can render HTML.",
        "CodeIgniter has no routes.",
        "Both can use MVC-like organization, routes, controllers, and views."
      ],
      correctAnswer: 3,
      explanation: "Both CodeIgniter and Laravel support route definitions, controllers, views, and model-based data access. Their directory layouts, APIs, and conventions differ, but the general separation of responsibilities is comparable. Neither framework has a monopoly on rendering HTML.",
      reference: "Laravel Documentation — Application Structure; CodeIgniter 4 User Guide"
    },
    {
      id: "q18",
      type: "multiple_choice",
      question: "Which syntax outputs an escaped variable in a Blade view?",
      options: [
        "<%= $name %>",
        "!! $name !!",
        "{{ $name }}",
        "<?= raw($name) ?>"
      ],
      correctAnswer: 2,
      explanation: "Blade's double curly braces {{ $name }} escape the value for HTML output, helping prevent cross-site scripting when displaying untrusted text. Blade's unescaped output syntax is {!! $name !!}, which should be used only with trusted or carefully sanitized HTML.",
      reference: "Laravel Documentation — Blade: Displaying Data; HTML Escaping"
    },
    {
      id: "q19",
      type: "identification",
      question: "What Laravel feature populates sample database records?",
      correctAnswer: "Seeder",
      explanation: "A database seeder populates tables with sample, initial, or reference records. Laravel stores seeder classes in database/seeders and can run them using php artisan db:seed. A migration defines database structure, whereas a seeder inserts data into that structure.",
      reference: "Laravel Documentation — Database Seeding"
    },
    {
      id: "q20",
      type: "multiple_choice",
      question: "Why should students compare Eloquent with CodeIgniter Models?",
      options: [
        "To avoid learning controllers.",
        "To see how both centralize data access while using different syntax.",
        "To prove one framework does not use databases.",
        "To replace SQL injection concepts."
      ],
      correctAnswer: 1,
      explanation: "Eloquent and CodeIgniter Models both help organize database operations in an application's data layer, but they use different conventions and APIs. Comparing them helps students recognize familiar concepts such as retrieving records and managing table data while learning a new framework.",
      reference: "Laravel Documentation — Eloquent ORM; CodeIgniter 4 — Models"
    },
    {
      id: "q21",
      type: "true_false",
      question: "The .env file commonly stores Laravel database connection settings.",
      correctAnswer: true,
      explanation: "Laravel uses environment variables to configure database connections, often through DB_DATABASE, DB_USERNAME, and DB_PASSWORD entries in .env. These values are referenced by configuration files and should be protected from public access.",
      reference: "Laravel Documentation — Database Configuration; .env"
    },
    {
      id: "q22",
      type: "multiple_choice",
      question: "Which command creates a model with a migration in many Laravel versions?",
      options: [
        "php artisan model Product --view",
        "php artisan make:model Product -m",
        "php artisan create:db Product",
        "composer make Product migration"
      ],
      correctAnswer: 1,
      explanation: "The command php artisan make:model Product -m creates an Eloquent model and a corresponding migration file. The -m flag requests migration generation. Developers can then edit the generated migration to define the database table's columns.",
      reference: "Laravel Documentation — Eloquent Models; make:model -m"
    },
    {
      id: "q23",
      type: "true_false",
      question: "php artisan serve can start a local Laravel development server.",
      correctAnswer: true,
      explanation: "The Artisan serve command starts a local development server for supported Laravel environments. It is intended for development and testing rather than replacing a properly configured production web server.",
      reference: "Laravel Documentation — Local Development; Artisan"
    },
    {
      id: "q24",
      type: "multiple_choice",
      question: "Why are migrations useful when working in a team?",
      options: [
        "They automatically write every view.",
        "They remove the need for controllers.",
        "They make database structure changes repeatable and shareable.",
        "They hide all model code."
      ],
      correctAnswer: 2,
      explanation: "Migration files describe database schema changes in version-controlled code. Team members can run the same migrations to create consistent development and testing databases. Migrations do not generate every view or replace controllers.",
      reference: "Laravel Documentation — Database Migrations"
    },
    {
      id: "q25",
      type: "multiple_choice",
      question: "When should a teacher emphasize Artisan commands in Module 5?",
      options: [
        "Never, because Laravel does not use CLI tools.",
        "When showing repeatable project tasks like serving the app or generating a controller.",
        "Only after authentication is complete.",
        "Only when writing SQL queries manually."
      ],
      correctAnswer: 1,
      explanation: "Artisan commands demonstrate repeatable Laravel development tasks, such as starting the local server, generating classes, running migrations, and clearing caches. Introducing them alongside the corresponding concepts helps students understand the development workflow.",
      reference: "Laravel Documentation — Artisan Console"
    },
    {
      id: "q26",
      type: "true_false",
      question: "Laravel's .env file is used for environment-specific settings.",
      correctAnswer: true,
      explanation: "The .env file stores values that may differ between local development, testing, and production environments. Examples include database connection settings and application configuration. Sensitive values should not be shared publicly.",
      reference: "Laravel Documentation — Environment Configuration"
    },
    {
      id: "q27",
      type: "identification",
      question: "What is Laravel's templating engine called?",
      correctAnswer: "Blade",
      explanation: "Blade is Laravel's templating engine, commonly used in files with the .blade.php extension under resources/views. It provides escaped variable output, directives, components, and layout features.",
      reference: "Laravel Documentation — Blade Templates"
    },
    {
      id: "q28",
      type: "multiple_choice",
      question: "Which controller-to-view line correctly passes tasks to a Blade view?",
      options: [
        "return Task::view($tasks);",
        "return routes('tasks', $tasks);",
        "return view('tasks.index', ['tasks' => $tasks]);",
        "return blade('tasks.index', $tasks->view());"
      ],
      correctAnswer: 2,
      explanation: "Laravel's view() helper loads a Blade template and passes data through an associative array. In view('tasks.index', ['tasks' => $tasks]), the key tasks becomes available in the view as $tasks. The template normally resolves to resources/views/tasks/index.blade.php.",
      reference: "Laravel Documentation — Views: Passing Data"
    },
    {
      id: "q29",
      type: "multiple_choice",
      question: "Which method retrieves one Eloquent record by primary key?",
      options: [
        "Task::row($id)",
        "Task::primary($id)",
        "Task::find($id)",
        "Task::getOne($id)"
      ],
      correctAnswer: 2,
      explanation: "Eloquent's find($id) method looks up a model record using its primary key and returns the matching model or null. Developers can use findOrFail($id) when they want a model-not-found exception if the record does not exist.",
      reference: "Laravel Documentation — Eloquent: Retrieving Models"
    },
    {
      id: "q30",
      type: "multiple_choice",
      question: "Which approach is best for a repeatable classroom demo database?",
      options: [
        "Create migrations and seeders so each student can rebuild the same structure and data.",
        "Store all sample rows in a Blade comment.",
        "Skip the database until the final project.",
        "Tell students to invent any table names."
      ],
      correctAnswer: 0,
      explanation: "Migrations define a repeatable schema, while seeders insert consistent initial records. Together, they allow students to recreate comparable databases during demonstrations, debugging, and testing.",
      reference: "Laravel Documentation — Database Migrations and Seeding"
    },
    {
      id: "q31",
      type: "multiple_choice",
      question: "Which practice makes a Laravel demo easier for students to trace?",
      options: [
        "Use random class names unrelated to pages.",
        "Use named files, simple routes, and small controller methods connected to visible Blade output.",
        "Avoid showing the route file.",
        "Put all code into one Blade file."
      ],
      correctAnswer: 1,
      explanation: "Clear names and small, focused methods help students follow the request flow from a route to a controller and then to a Blade view. Putting all code in one file or hiding the route definitions makes the architecture harder to understand.",
      reference: "Laravel Documentation — Routing, Controllers, and Views"
    },
    {
      id: "q32",
      type: "multiple_choice",
      question: "Which Laravel folder contains application classes such as controllers and models?",
      options: [
        "public",
        "storage/logs only",
        "vendor/bin",
        "app"
      ],
      correctAnswer: 3,
      explanation: "Laravel's app directory contains application classes. Controllers are commonly found in app/Http/Controllers, and Eloquent models in app/Models. The public directory holds the web entry point and assets, while vendor contains installed dependencies.",
      reference: "Laravel Documentation — Directory Structure"
    },
    {
      id: "q33",
      type: "multiple_choice",
      display: "dropdown",
      question: "Matching type. Match the term with the correct description.\n\nArtisan",
      options: [
        "Laravel templating engine",
        "Defines database structure changes in code",
        "Laravel command-line tool",
        "Represents a database-backed entity",
        "Adds sample or starting data"
      ],
      correctAnswer: 2,
      explanation: "Artisan is Laravel's built-in command-line interface. It runs commands for creating models and controllers, serving the application, running migrations, and other development operations. Blade is the templating engine, while migrations and seeders work with database structure and data.",
      reference: "Laravel Documentation — Artisan Console"
    },
    {
      id: "q34",
      type: "multiple_choice",
      question: "A student places controller files inside public so they are easy to find. What is the issue?",
      options: [
        "Laravel requires all controllers in public.",
        "Artisan will convert them automatically.",
        "Application source should remain outside the public web root.",
        "Blade cannot call controllers unless public."
      ],
      correctAnswer: 2,
      explanation: "The public folder is intended to expose only the application's front controller and public assets. Controller source belongs in the app directory, outside the directly accessible web root. This reduces the risk of exposing application implementation details.",
      reference: "Laravel Documentation — Directory Structure and Deployment"
    },
    {
      id: "q35",
      type: "true_false",
      question: "Laravel commonly stores web routes in routes/web.php.",
      correctAnswer: true,
      explanation: "A standard Laravel installation uses routes/web.php for web-facing route definitions. These routes can point to closures or controller methods and typically use the web middleware configuration.",
      reference: "Laravel Documentation — Routing"
    },
    {
      id: "q36",
      type: "multiple_choice",
      question: "A query uses User::where('role', 'admin')->orderBy('name')->get(). What does the chain do?",
      options: [
        "Sends an email to every admin.",
        "Stores role in the session.",
        "Creates a new migration.",
        "Filters admin users and sorts them by name."
      ],
      correctAnswer: 3,
      explanation: "where('role', 'admin') filters the query to users whose role is admin. orderBy('name') sorts the matching records by name in ascending order by default, and get() executes the query and returns the collection.",
      reference: "Laravel Documentation — Eloquent Query Builder"
    },
    {
      id: "q37",
      type: "identification",
      question: "What Laravel feature defines database tables in code?",
      correctAnswer: "Migration",
      explanation: "A migration records a database schema change in PHP code. Laravel migrations use Schema Builder methods to create or modify tables, allowing the structure to be recreated through the migration system.",
      reference: "Laravel Documentation — Database Migrations"
    },
    {
      id: "q38",
      type: "true_false",
      question: "Laravel and CodeIgniter have exactly the same folder structure and syntax.",
      correctAnswer: false,
      explanation: "Laravel and CodeIgniter share web-development concepts such as MVC, routing, controllers, and models, but their directory structures, helper functions, ORM features, and APIs differ. Their syntax is not interchangeable without modification.",
      reference: "Laravel Documentation — Directory Structure; CodeIgniter 4 User Guide"
    },
    {
      id: "q39",
      type: "multiple_choice",
      question: "Which command starts a local Laravel development server?",
      options: [
        "composer run view",
        "php artisan serve",
        "artisan public",
        "php laravel start"
      ],
      correctAnswer: 1,
      explanation: "The php artisan serve command starts Laravel's development server in supported environments. This provides a convenient way to run the project locally during development.",
      reference: "Laravel Documentation — Artisan Serve"
    },
    {
      id: "q40",
      type: "true_false",
      question: "Task::all() retrieves only one row by primary key.",
      correctAnswer: false,
      explanation: "Eloquent's all() method retrieves a collection of records from the associated table, not a single record by primary key. For a single primary-key lookup, use find($id) or findOrFail($id).",
      reference: "Laravel Documentation — Eloquent: Retrieving Models"
    },
    {
      id: "q41",
      type: "multiple_choice",
      question: "Which Eloquent query retrieves tasks where status is done?",
      options: [
        "Task::status('done')->all();",
        "Task::get('status', 'done');",
        "Task::filterDone();",
        "Task::where('status', 'done')->get();"
      ],
      correctAnswer: 3,
      explanation: "The where('status', 'done') condition filters tasks by their status. The get() method executes the database query and returns matching records as an Eloquent collection. The other choices are not standard Eloquent query patterns for the stated condition.",
      reference: "Laravel Documentation — Eloquent Query Builder"
    },
    {
      id: "q42",
      type: "multiple_choice",
      question: "A Blade view shows Undefined variable $tasks after the controller retrieved records. What should be checked first?",
      options: [
        "Whether every route uses POST.",
        "Whether the controller passed a tasks key to the view.",
        "Whether the public folder stores the model.",
        "Whether migrations were named in uppercase."
      ],
      correctAnswer: 1,
      explanation: "A controller must pass the tasks data into the Blade view, for example return view('tasks.index', ['tasks' => $tasks]);. If that key is missing, Blade may not have a $tasks variable even when the controller successfully retrieved records.",
      reference: "Laravel Documentation — Views: Passing Data"
    },
    {
      id: "q43",
      type: "true_false",
      question: "Blade files are usually stored in resources/views.",
      correctAnswer: true,
      explanation: "Laravel normally stores Blade templates in resources/views, using filenames ending in .blade.php. Subdirectories can organize related templates, and view names use dot notation to reference nested files.",
      reference: "Laravel Documentation — Blade Templates"
    },
    {
      id: "q44",
      type: "identification",
      question: "What ORM is built into Laravel for model-based database work?",
      correctAnswer: "Eloquent",
      explanation: "Eloquent is Laravel's object-relational mapper. It represents database records as PHP model objects and provides methods for creating, retrieving, updating, deleting, and relating those records.",
      reference: "Laravel Documentation — Eloquent ORM"
    },
    {
      id: "q45",
      type: "multiple_choice",
      question: "What is the purpose of a seeder?",
      options: [
        "To populate a database table with sample or starting data.",
        "To resize uploaded images.",
        "To display validation errors.",
        "To protect a route from guests."
      ],
      correctAnswer: 0,
      explanation: "A seeder inserts initial or sample data into the database, often for development, testing, or demonstration. For example, a seeder may create sample products or users. Image resizing, validation error display, and route protection are separate application tasks.",
      reference: "Laravel Documentation — Database Seeding"
    },
    {
      id: "q46",
      type: "multiple_choice",
      question: "A team edits production tables manually but never updates migrations. What is the long-term issue?",
      options: [
        "Users cannot log out.",
        "Laravel will stop rendering all Blade files.",
        "Artisan cannot create controllers.",
        "The code no longer documents the expected database structure."
      ],
      correctAnswer: 3,
      explanation: "When production schema changes are made manually without equivalent migrations, the version-controlled migration history no longer represents the actual schema. Other environments may become inconsistent, and rebuilding the database can fail to reproduce production structure.",
      reference: "Laravel Documentation — Database Migrations and Schema Management"
    },
    {
      id: "q47",
      type: "true_false",
      question: "$fillable controls which fields may be mass-assigned.",
      correctAnswer: true,
      explanation: "An Eloquent model's $fillable attribute array identifies which attributes can be mass-assigned using methods such as create() or fill(). This helps protect against unintended changes to sensitive columns. Authorization and validation are still needed.",
      reference: "Laravel Documentation — Eloquent Mass Assignment"
    },
    {
      id: "q48",
      type: "multiple_choice",
      question: "What is Eloquent in Laravel?",
      options: [
        "A mail server setting.",
        "Laravel's ORM for working with database records as model objects.",
        "Laravel's CSS compiler.",
        "A route placeholder."
      ],
      correctAnswer: 1,
      explanation: "Eloquent is Laravel's built-in ORM, allowing developers to interact with database records using model classes and object-oriented queries. It supports relationships, mass assignment rules, and record lifecycle operations.",
      reference: "Laravel Documentation — Eloquent ORM"
    },
    {
      id: "q49",
      type: "multiple_choice",
      display: "dropdown",
      question: "Matching type. Match the term with the correct description.\n\nEloquent Model",
      options: [
        "Laravel templating engine",
        "Defines database structure changes in code",
        "Laravel command-line tool",
        "Represents a database-backed entity",
        "Adds sample or starting data"
      ],
      correctAnswer: 3,
      explanation: "An Eloquent Model is a PHP class representing a database-backed entity, such as a Product, Task, or User. It provides convenient methods for retrieving and changing records. Migrations describe schema changes, and seeders populate the database with data.",
      reference: "Laravel Documentation — Eloquent Models"
    },
    {
      id: "q50",
      type: "multiple_choice",
      display: "dropdown",
      question: "Matching type. Match the term with the correct description.\n\nSeeder",
      options: [
        "Laravel templating engine",
        "Defines database structure changes in code",
        "Laravel command-line tool",
        "Represents a database-backed entity",
        "Adds sample or starting data"
      ],
      correctAnswer: 4,
      explanation: "A Seeder class inserts sample, initial, or reference records into a database. It complements migrations: migrations create or change table structures, while seeders fill those tables with data. Laravel can run seeders through Artisan.",
      reference: "Laravel Documentation — Database Seeders"
    }
  ]
});
