// course-data.js — All course content with modules and topics
module.exports = {
"fullstack-web-dev": {
  title: "Full-Stack Web Development Bootcamp",
  description: "Learn HTML, CSS, JavaScript, React, Node.js, and MongoDB in this comprehensive bootcamp. Build 15+ real projects from scratch and become a job-ready full-stack developer.",
  category: "Programming", categoryPage: "programming.html",
  provider: "freeCodeCamp", rating: "4.9", level: "Beginner to Advanced", duration: "300+ hours", learners: "45,000+",
  topics: ["HTML","CSS","JavaScript","React","Node.js","MongoDB"],
  modules: [
    { name: "HTML & Web Fundamentals", topics: [
      { title: "How the Web Works", desc: "HTTP, DNS, browsers, and client-server architecture", minutes: 30 },
      { title: "HTML Document Structure", desc: "DOCTYPE, head, body, semantic elements", minutes: 25 },
      { title: "Text, Links & Media", desc: "Headings, paragraphs, anchors, images, video, audio", minutes: 35 },
      { title: "Forms & Input Elements", desc: "Form controls, validation, accessibility", minutes: 40 },
      { title: "Semantic HTML5 & SEO", desc: "Article, section, nav, header, footer, meta tags", minutes: 30 }
    ]},
    { name: "CSS & Responsive Design", topics: [
      { title: "CSS Selectors & Specificity", desc: "Classes, IDs, pseudo-classes, combinators, cascade", minutes: 35 },
      { title: "Box Model & Layout", desc: "Margin, padding, border, display, positioning", minutes: 40 },
      { title: "Flexbox Deep Dive", desc: "Flex containers, items, alignment, ordering, wrapping", minutes: 45 },
      { title: "CSS Grid Mastery", desc: "Grid lines, areas, templates, auto-fit, minmax", minutes: 45 },
      { title: "Responsive Design & Media Queries", desc: "Mobile-first, breakpoints, fluid typography, units", minutes: 40 },
      { title: "CSS Animations & Transitions", desc: "Keyframes, transforms, transitions, performance", minutes: 35 }
    ]},
    { name: "JavaScript Fundamentals", topics: [
      { title: "Variables, Types & Operators", desc: "let, const, strings, numbers, booleans, type coercion", minutes: 30 },
      { title: "Functions & Scope", desc: "Declarations, expressions, arrow functions, closures", minutes: 40 },
      { title: "Arrays & Objects", desc: "Methods, destructuring, spread operator, iteration", minutes: 45 },
      { title: "DOM Manipulation", desc: "Selecting, creating, modifying elements, event handling", minutes: 50 },
      { title: "Async JavaScript", desc: "Callbacks, promises, async/await, fetch API", minutes: 45 },
      { title: "ES6+ Modern Features", desc: "Modules, classes, template literals, optional chaining", minutes: 35 }
    ]},
    { name: "React Frontend Framework", topics: [
      { title: "React Components & JSX", desc: "Functional components, JSX syntax, props, rendering", minutes: 40 },
      { title: "State & Hooks", desc: "useState, useEffect, useRef, custom hooks", minutes: 50 },
      { title: "React Router & Navigation", desc: "Routes, links, dynamic routes, protected routes", minutes: 35 },
      { title: "Context API & State Management", desc: "Global state, context providers, useReducer", minutes: 40 },
      { title: "Building Real React Projects", desc: "Todo app, weather app, e-commerce frontend", minutes: 60 }
    ]},
    { name: "Node.js & Backend Development", topics: [
      { title: "Node.js Fundamentals", desc: "Runtime, modules, npm, file system, events", minutes: 40 },
      { title: "Express.js Web Framework", desc: "Routes, middleware, error handling, templating", minutes: 45 },
      { title: "RESTful API Design", desc: "CRUD operations, status codes, authentication, JWT", minutes: 50 },
      { title: "MongoDB & Mongoose", desc: "NoSQL databases, schemas, models, queries, aggregation", minutes: 45 },
      { title: "Deployment & DevOps Basics", desc: "Heroku, Vercel, environment variables, CI/CD intro", minutes: 35 }
    ]}
  ]
},
"python-masterclass": {
  title: "Python Programming Masterclass",
  description: "Complete Python course covering fundamentals, OOP, data structures, web scraping, automation, and Django framework.",
  category: "Programming", categoryPage: "programming.html",
  provider: "MIT OpenCourseWare", rating: "4.8", level: "Beginner", duration: "80 hours", learners: "38,000+",
  topics: ["Python","OOP","Django","Automation"],
  modules: [
    { name: "Python Basics", topics: [
      { title: "Installing Python & IDE Setup", desc: "Python installation, VS Code, Jupyter notebooks", minutes: 20 },
      { title: "Variables & Data Types", desc: "Integers, floats, strings, booleans, type casting", minutes: 30 },
      { title: "Control Flow", desc: "If/elif/else, for loops, while loops, break/continue", minutes: 35 },
      { title: "Functions & Modules", desc: "Defining functions, parameters, return values, imports", minutes: 40 },
      { title: "Error Handling", desc: "Try/except, raising exceptions, custom exceptions", minutes: 25 }
    ]},
    { name: "Data Structures", topics: [
      { title: "Lists & Tuples", desc: "Creating, indexing, slicing, list comprehensions", minutes: 35 },
      { title: "Dictionaries & Sets", desc: "Key-value pairs, methods, set operations", minutes: 30 },
      { title: "Strings & String Methods", desc: "Formatting, slicing, regex basics, f-strings", minutes: 30 },
      { title: "File I/O", desc: "Reading, writing files, CSV, JSON handling", minutes: 35 }
    ]},
    { name: "Object-Oriented Programming", topics: [
      { title: "Classes & Objects", desc: "Creating classes, __init__, instances, attributes", minutes: 40 },
      { title: "Inheritance & Polymorphism", desc: "Super class, method overriding, abstract classes", minutes: 40 },
      { title: "Encapsulation & Properties", desc: "Private attributes, getters, setters, decorators", minutes: 35 },
      { title: "Magic Methods & Protocols", desc: "__str__, __repr__, __len__, context managers", minutes: 30 }
    ]},
    { name: "Web Scraping & Automation", topics: [
      { title: "Web Scraping with BeautifulSoup", desc: "Parsing HTML, finding elements, extracting data", minutes: 40 },
      { title: "Browser Automation with Selenium", desc: "Webdriver, navigating, clicking, form filling", minutes: 45 },
      { title: "Task Automation Scripts", desc: "File organization, email sending, PDF generation", minutes: 35 },
      { title: "Working with APIs", desc: "REST APIs, requests library, JSON parsing, auth", minutes: 35 }
    ]},
    { name: "Django Web Framework", topics: [
      { title: "Django Project Setup", desc: "Creating projects, apps, settings, URL routing", minutes: 35 },
      { title: "Models & Databases", desc: "ORM, migrations, model relationships, admin panel", minutes: 40 },
      { title: "Views & Templates", desc: "Function/class views, template language, forms", minutes: 40 },
      { title: "Authentication & Deployment", desc: "User auth, permissions, deploying to production", minutes: 35 }
    ]}
  ]
},
"javascript-complete": {
  title: "JavaScript: The Complete Guide",
  description: "Deep dive into modern JavaScript ES6+, async programming, closures, prototypes, and building interactive web applications.",
  category: "Programming", categoryPage: "programming.html",
  provider: "The Odin Project", rating: "4.9", level: "Intermediate", duration: "120 hours", learners: "32,000+",
  topics: ["JavaScript","ES6+","DOM","Async"],
  modules: [
    { name: "Advanced Functions & Closures", topics: [
      { title: "Closures In Depth", desc: "Lexical scope, closure patterns, memory implications", minutes: 40 },
      { title: "Higher-Order Functions", desc: "Map, filter, reduce, function composition", minutes: 35 },
      { title: "this Keyword Mastery", desc: "Binding rules, call, apply, bind, arrow functions", minutes: 40 },
      { title: "Currying & Partial Application", desc: "Function factories, partial application patterns", minutes: 30 }
    ]},
    { name: "Prototypes & OOP in JS", topics: [
      { title: "Prototype Chain", desc: "Object.create, __proto__, prototype inheritance", minutes: 40 },
      { title: "ES6 Classes", desc: "Constructor, methods, static, private fields", minutes: 35 },
      { title: "Design Patterns in JS", desc: "Module, observer, factory, singleton patterns", minutes: 45 },
      { title: "Mixins & Composition", desc: "Object composition over inheritance, mixins", minutes: 30 }
    ]},
    { name: "Asynchronous JavaScript", topics: [
      { title: "Event Loop Deep Dive", desc: "Call stack, task queue, microtasks, rendering", minutes: 45 },
      { title: "Promises Advanced", desc: "Promise.all, race, allSettled, error handling chains", minutes: 40 },
      { title: "Async/Await Patterns", desc: "Sequential vs parallel, error handling, generators", minutes: 40 },
      { title: "Web Workers & Service Workers", desc: "Background threads, offline caching, PWA basics", minutes: 35 }
    ]},
    { name: "DOM & Browser APIs", topics: [
      { title: "Advanced DOM Manipulation", desc: "Virtual DOM concepts, document fragments, MutationObserver", minutes: 40 },
      { title: "Event System Deep Dive", desc: "Bubbling, capturing, delegation, custom events", minutes: 35 },
      { title: "Browser Storage APIs", desc: "localStorage, sessionStorage, IndexedDB, cookies", minutes: 30 },
      { title: "Canvas & Animations", desc: "2D drawing, requestAnimationFrame, game loops", minutes: 45 }
    ]},
    { name: "Testing & Tooling", topics: [
      { title: "Unit Testing with Jest", desc: "Test setup, matchers, mocking, async tests", minutes: 40 },
      { title: "Webpack & Build Tools", desc: "Bundling, loaders, plugins, code splitting", minutes: 35 },
      { title: "Linting & Code Quality", desc: "ESLint, Prettier, code review best practices", minutes: 25 },
      { title: "Performance Optimization", desc: "Profiling, lazy loading, debouncing, memoization", minutes: 35 }
    ]}
  ]
},
"dsa": {
  title: "Data Structures & Algorithms",
  description: "Master essential computer science concepts including arrays, trees, graphs, sorting, dynamic programming, and system design.",
  category: "Programming", categoryPage: "programming.html",
  provider: "Khan Academy", rating: "4.7", level: "Intermediate", duration: "60 hours", learners: "28,000+",
  topics: ["DSA","Problem Solving","Big O"],
  modules: [
    { name: "Complexity Analysis", topics: [
      { title: "Big O Notation", desc: "Time and space complexity, common patterns", minutes: 35 },
      { title: "Best/Worst/Average Case", desc: "Analyzing algorithm performance scenarios", minutes: 25 },
      { title: "Recursive Complexity", desc: "Recurrence relations, master theorem", minutes: 30 }
    ]},
    { name: "Linear Data Structures", topics: [
      { title: "Arrays & Dynamic Arrays", desc: "Operations, resizing, two-pointer technique", minutes: 40 },
      { title: "Linked Lists", desc: "Singly, doubly, circular, operations, reversal", minutes: 40 },
      { title: "Stacks & Queues", desc: "LIFO, FIFO, implementations, applications", minutes: 35 },
      { title: "Hash Tables", desc: "Hashing, collision resolution, hash maps", minutes: 40 }
    ]},
    { name: "Trees & Graphs", topics: [
      { title: "Binary Trees & BST", desc: "Traversals, insertion, deletion, balancing", minutes: 45 },
      { title: "Heaps & Priority Queues", desc: "Min/max heaps, heap operations, applications", minutes: 35 },
      { title: "Graph Representations", desc: "Adjacency list vs matrix, directed vs undirected", minutes: 30 },
      { title: "Graph Traversals", desc: "BFS, DFS, topological sort, cycle detection", minutes: 45 }
    ]},
    { name: "Sorting & Searching", topics: [
      { title: "Comparison Sorts", desc: "Merge sort, quicksort, heap sort analysis", minutes: 40 },
      { title: "Non-Comparison Sorts", desc: "Counting sort, radix sort, bucket sort", minutes: 30 },
      { title: "Binary Search Variations", desc: "Rotated arrays, search range, peak finding", minutes: 35 }
    ]},
    { name: "Dynamic Programming", topics: [
      { title: "DP Fundamentals", desc: "Memoization, tabulation, optimal substructure", minutes: 45 },
      { title: "Classic DP Problems", desc: "Knapsack, LCS, coin change, edit distance", minutes: 50 },
      { title: "DP on Trees & Graphs", desc: "Tree DP, shortest paths, Dijkstra, Floyd-Warshall", minutes: 45 }
    ]}
  ]
},
"react-nextjs": {
  title: "React & Next.js Complete Course",
  description: "Build modern, production-ready web applications with React hooks, context, Redux, Next.js server-side rendering, and deployment.",
  category: "Programming", categoryPage: "programming.html",
  provider: "Scrimba", rating: "4.8", level: "Intermediate", duration: "45 hours", learners: "22,000+",
  topics: ["React","Next.js","Redux","SSR"],
  modules: [
    { name: "React Essentials", topics: [
      { title: "Component Architecture", desc: "Functional components, composition, props pattern", minutes: 35 },
      { title: "Hooks Deep Dive", desc: "useState, useEffect, useMemo, useCallback", minutes: 40 },
      { title: "Forms & Controlled Components", desc: "Form handling, validation, controlled vs uncontrolled", minutes: 30 },
      { title: "Custom Hooks", desc: "Extracting logic, useLocalStorage, useFetch hooks", minutes: 35 }
    ]},
    { name: "State Management", topics: [
      { title: "Context API Patterns", desc: "Creating contexts, consumers, provider composition", minutes: 35 },
      { title: "Redux Toolkit", desc: "Store, slices, reducers, async thunks, selectors", minutes: 45 },
      { title: "Zustand & Modern Alternatives", desc: "Lightweight state management comparison", minutes: 25 }
    ]},
    { name: "Next.js Framework", topics: [
      { title: "Pages & Routing", desc: "File-based routing, dynamic routes, catch-all routes", minutes: 35 },
      { title: "SSR, SSG & ISR", desc: "getServerSideProps, getStaticProps, revalidation", minutes: 40 },
      { title: "API Routes", desc: "Building backend APIs within Next.js, middleware", minutes: 35 },
      { title: "App Router & Server Components", desc: "React Server Components, streaming, suspense", minutes: 40 }
    ]},
    { name: "Production & Deployment", topics: [
      { title: "Performance Optimization", desc: "Code splitting, lazy loading, image optimization", minutes: 30 },
      { title: "Authentication with NextAuth", desc: "OAuth providers, sessions, protected routes", minutes: 35 },
      { title: "Testing React Apps", desc: "React Testing Library, component tests, integration", minutes: 30 },
      { title: "Deploying to Vercel", desc: "Build process, environment vars, custom domains", minutes: 25 }
    ]}
  ]
},
"git-github": {
  title: "Git & GitHub for Developers",
  description: "Learn version control from basics to advanced workflows including branching strategies, pull requests, CI/CD, and open source contribution.",
  category: "Programming", categoryPage: "programming.html",
  provider: "GitHub Learning", rating: "4.6", level: "Beginner", duration: "15 hours", learners: "50,000+",
  topics: ["Git","GitHub","CI/CD"],
  modules: [
    { name: "Git Fundamentals", topics: [
      { title: "Installing & Configuring Git", desc: "Setup, config, SSH keys, first repository", minutes: 20 },
      { title: "Basic Commands", desc: "init, add, commit, status, log, diff", minutes: 30 },
      { title: "Branching & Merging", desc: "Creating branches, switching, merge, rebase basics", minutes: 35 },
      { title: "Undoing Changes", desc: "Reset, revert, checkout, stash, reflog", minutes: 30 }
    ]},
    { name: "GitHub & Collaboration", topics: [
      { title: "Remote Repositories", desc: "Clone, push, pull, fetch, origin, upstream", minutes: 25 },
      { title: "Pull Requests & Code Review", desc: "Creating PRs, reviews, approvals, merge strategies", minutes: 30 },
      { title: "Issues & Project Management", desc: "Issue tracking, labels, milestones, project boards", minutes: 20 },
      { title: "GitHub Actions & CI/CD", desc: "Workflow files, automated testing, deployment", minutes: 35 }
    ]},
    { name: "Advanced Git", topics: [
      { title: "Interactive Rebase", desc: "Squashing, reordering, editing commits", minutes: 30 },
      { title: "Git Workflows", desc: "Gitflow, trunk-based, feature branch workflows", minutes: 25 },
      { title: "Contributing to Open Source", desc: "Forking, upstream, PR etiquette, guidelines", minutes: 30 }
    ]}
  ]
},
"intro-ml": {
  title: "Introduction to Machine Learning",
  description: "Learn ML fundamentals including supervised & unsupervised learning, neural networks, decision trees, and model evaluation with Python.",
  category: "Data Science", categoryPage: "data-science.html",
  provider: "Stanford Online", rating: "4.9", level: "Intermediate", duration: "60 hours", learners: "35,000+",
  topics: ["ML","Python","Scikit-learn","Neural Networks"],
  modules: [
    { name: "ML Foundations", topics: [
      { title: "What is Machine Learning?", desc: "Types of ML, applications, workflow overview", minutes: 25 },
      { title: "Python for ML Setup", desc: "NumPy, Pandas, Matplotlib, Jupyter environment", minutes: 30 },
      { title: "Data Preprocessing", desc: "Cleaning, normalization, encoding, train/test split", minutes: 40 },
      { title: "Feature Engineering", desc: "Feature selection, extraction, scaling, PCA", minutes: 35 }
    ]},
    { name: "Supervised Learning", topics: [
      { title: "Linear Regression", desc: "Cost functions, gradient descent, regularization", minutes: 45 },
      { title: "Logistic Regression", desc: "Classification, sigmoid, decision boundary, metrics", minutes: 40 },
      { title: "Decision Trees & Random Forests", desc: "Splitting criteria, pruning, ensemble methods", minutes: 40 },
      { title: "Support Vector Machines", desc: "Kernels, margin maximization, SVM classification", minutes: 35 }
    ]},
    { name: "Unsupervised Learning", topics: [
      { title: "K-Means Clustering", desc: "Algorithm, elbow method, cluster evaluation", minutes: 35 },
      { title: "Dimensionality Reduction", desc: "PCA, t-SNE, feature importance visualization", minutes: 35 },
      { title: "Anomaly Detection", desc: "Isolation forests, statistical methods, use cases", minutes: 30 }
    ]},
    { name: "Neural Networks Intro", topics: [
      { title: "Perceptrons & Activation Functions", desc: "Neurons, weights, biases, sigmoid, ReLU", minutes: 40 },
      { title: "Backpropagation", desc: "Chain rule, gradient computation, weight updates", minutes: 45 },
      { title: "Building Neural Networks", desc: "Layers, architectures, training with TensorFlow", minutes: 50 }
    ]},
    { name: "Model Evaluation & Deployment", topics: [
      { title: "Evaluation Metrics", desc: "Accuracy, precision, recall, F1, ROC-AUC", minutes: 30 },
      { title: "Cross-Validation & Hyperparameter Tuning", desc: "K-fold CV, grid search, random search", minutes: 35 },
      { title: "Model Deployment Basics", desc: "Saving models, Flask API, prediction pipeline", minutes: 35 }
    ]}
  ]
},
"python-data-analysis": {
  title: "Python for Data Analysis",
  description: "Master Pandas, NumPy, and Matplotlib for data wrangling, cleaning, exploration, and creating compelling visualizations.",
  category: "Data Science", categoryPage: "data-science.html",
  provider: "Kaggle Learn", rating: "4.8", level: "Beginner", duration: "40 hours", learners: "42,000+",
  topics: ["Pandas","NumPy","Matplotlib","Data Wrangling"],
  modules: [
    { name: "NumPy Foundations", topics: [
      { title: "Array Creation & Operations", desc: "Creating arrays, arithmetic, broadcasting", minutes: 30 },
      { title: "Indexing & Slicing", desc: "Fancy indexing, boolean masks, reshaping", minutes: 25 },
      { title: "Linear Algebra with NumPy", desc: "Matrix operations, dot product, eigenvalues", minutes: 35 },
      { title: "Random & Statistical Functions", desc: "Random generation, mean, std, distributions", minutes: 25 }
    ]},
    { name: "Pandas Mastery", topics: [
      { title: "Series & DataFrames", desc: "Creating, selecting, filtering, sorting data", minutes: 35 },
      { title: "Data Cleaning", desc: "Missing values, duplicates, type conversion, outliers", minutes: 40 },
      { title: "GroupBy & Aggregation", desc: "Split-apply-combine, pivot tables, cross-tabs", minutes: 40 },
      { title: "Merging & Joining", desc: "Merge, join, concat, handling different schemas", minutes: 35 },
      { title: "Time Series Analysis", desc: "DateTime indexing, resampling, rolling windows", minutes: 35 }
    ]},
    { name: "Data Visualization", topics: [
      { title: "Matplotlib Fundamentals", desc: "Figure, axes, line plots, bar charts, styling", minutes: 35 },
      { title: "Seaborn Statistical Plots", desc: "Distribution, categorical, regression, heatmaps", minutes: 35 },
      { title: "Interactive Visualizations", desc: "Plotly basics, interactive dashboards, hover data", minutes: 30 }
    ]},
    { name: "Real-World Projects", topics: [
      { title: "Exploratory Data Analysis Project", desc: "End-to-end EDA on a real dataset, insights", minutes: 60 },
      { title: "Data Cleaning Pipeline", desc: "Building reusable cleaning functions, automation", minutes: 45 },
      { title: "Dashboard & Reporting", desc: "Creating summary reports, exporting visualizations", minutes: 40 }
    ]}
  ]
},
"deep-learning": {
  title: "Deep Learning Specialization",
  description: "Comprehensive deep learning course covering CNNs, RNNs, transformers, GANs, and deploying models with TensorFlow and PyTorch.",
  category: "Data Science", categoryPage: "data-science.html",
  provider: "fast.ai", rating: "4.9", level: "Advanced", duration: "100 hours", learners: "18,000+",
  topics: ["Deep Learning","TensorFlow","PyTorch","CNNs"],
  modules: [
    { name: "Deep Learning Foundations", topics: [
      { title: "Neural Network Architecture", desc: "Layers, neurons, activation functions, loss", minutes: 40 },
      { title: "Training Deep Networks", desc: "Optimizers, learning rate, batch size, epochs", minutes: 45 },
      { title: "Regularization Techniques", desc: "Dropout, batch norm, data augmentation, early stopping", minutes: 35 },
      { title: "TensorFlow & Keras Setup", desc: "Installation, sequential/functional API, GPU setup", minutes: 30 }
    ]},
    { name: "Convolutional Neural Networks", topics: [
      { title: "Convolution Operations", desc: "Filters, stride, padding, feature maps", minutes: 40 },
      { title: "CNN Architectures", desc: "LeNet, VGG, ResNet, Inception, transfer learning", minutes: 45 },
      { title: "Image Classification Project", desc: "Building and training a CNN classifier", minutes: 50 },
      { title: "Object Detection Intro", desc: "YOLO, SSD, bounding boxes, IoU metrics", minutes: 40 }
    ]},
    { name: "Sequence Models", topics: [
      { title: "RNN & LSTM", desc: "Recurrent networks, long short-term memory, GRU", minutes: 45 },
      { title: "Attention Mechanism", desc: "Self-attention, query-key-value, scaled dot product", minutes: 40 },
      { title: "Transformers Architecture", desc: "Encoder-decoder, positional encoding, multi-head", minutes: 50 },
      { title: "NLP Applications", desc: "Text classification, sentiment analysis, NER", minutes: 40 }
    ]},
    { name: "Generative Models", topics: [
      { title: "Autoencoders", desc: "Encoder-decoder, variational autoencoders", minutes: 35 },
      { title: "GANs", desc: "Generator, discriminator, training loop, DCGAN", minutes: 45 },
      { title: "Diffusion Models Intro", desc: "Noise scheduling, denoising, image generation", minutes: 40 }
    ]},
    { name: "Deployment & Production", topics: [
      { title: "Model Optimization", desc: "Quantization, pruning, ONNX export", minutes: 30 },
      { title: "Serving ML Models", desc: "Flask, FastAPI, TensorFlow Serving, Docker", minutes: 40 },
      { title: "MLOps Overview", desc: "Experiment tracking, model registry, CI/CD for ML", minutes: 35 }
    ]}
  ]
},
"statistics-probability": {
  title: "Statistics & Probability Foundations",
  description: "Build a solid statistical foundation with hypothesis testing, regression analysis, Bayesian inference, and A/B testing methodologies.",
  category: "Data Science", categoryPage: "data-science.html",
  provider: "Khan Academy", rating: "4.7", level: "Beginner", duration: "35 hours", learners: "30,000+",
  topics: ["Statistics","Probability","Hypothesis Testing"],
  modules: [
    { name: "Descriptive Statistics", topics: [
      { title: "Measures of Central Tendency", desc: "Mean, median, mode, weighted averages", minutes: 25 },
      { title: "Measures of Spread", desc: "Range, variance, standard deviation, IQR", minutes: 30 },
      { title: "Data Visualization for Stats", desc: "Histograms, box plots, scatter plots, distributions", minutes: 30 }
    ]},
    { name: "Probability Theory", topics: [
      { title: "Basic Probability Rules", desc: "Addition, multiplication, complement, independence", minutes: 30 },
      { title: "Conditional Probability & Bayes", desc: "Bayes theorem, prior/posterior, applications", minutes: 35 },
      { title: "Probability Distributions", desc: "Normal, binomial, Poisson, exponential", minutes: 40 },
      { title: "Central Limit Theorem", desc: "Sampling distributions, standard error", minutes: 30 }
    ]},
    { name: "Inferential Statistics", topics: [
      { title: "Hypothesis Testing", desc: "Null/alternative, p-values, significance levels", minutes: 40 },
      { title: "Confidence Intervals", desc: "Construction, interpretation, margin of error", minutes: 30 },
      { title: "T-tests & Chi-Square Tests", desc: "One/two sample t-tests, independence tests", minutes: 35 },
      { title: "A/B Testing", desc: "Experiment design, sample size, statistical power", minutes: 35 }
    ]},
    { name: "Regression Analysis", topics: [
      { title: "Simple Linear Regression", desc: "Least squares, R-squared, residual analysis", minutes: 35 },
      { title: "Multiple Regression", desc: "Multiple predictors, multicollinearity, feature selection", minutes: 35 },
      { title: "Logistic Regression for Classification", desc: "Odds ratios, maximum likelihood, ROC curves", minutes: 35 }
    ]}
  ]
},
"sql-data-science": {
  title: "SQL for Data Science",
  description: "Master SQL queries, joins, subqueries, window functions, and database design for extracting and analyzing real-world datasets.",
  category: "Data Science", categoryPage: "data-science.html",
  provider: "Mode Analytics", rating: "4.6", level: "Beginner", duration: "25 hours", learners: "35,000+",
  topics: ["SQL","Databases","Analysis"],
  modules: [
    { name: "SQL Basics", topics: [
      { title: "SELECT & Filtering", desc: "SELECT, WHERE, ORDER BY, LIMIT, DISTINCT", minutes: 25 },
      { title: "Aggregation Functions", desc: "COUNT, SUM, AVG, MIN, MAX, GROUP BY, HAVING", minutes: 30 },
      { title: "Data Types & Table Creation", desc: "CREATE TABLE, constraints, INSERT, UPDATE, DELETE", minutes: 30 }
    ]},
    { name: "Joins & Relationships", topics: [
      { title: "INNER & OUTER Joins", desc: "LEFT, RIGHT, FULL joins, join conditions", minutes: 35 },
      { title: "Self Joins & Cross Joins", desc: "Joining table to itself, Cartesian product", minutes: 25 },
      { title: "Subqueries", desc: "Scalar, row, table subqueries, correlated", minutes: 35 }
    ]},
    { name: "Advanced SQL", topics: [
      { title: "Window Functions", desc: "ROW_NUMBER, RANK, LEAD, LAG, running totals", minutes: 40 },
      { title: "CTEs & Recursive Queries", desc: "WITH clause, recursive CTEs, hierarchical data", minutes: 35 },
      { title: "Performance & Indexing", desc: "EXPLAIN plans, indexes, query optimization", minutes: 30 }
    ]},
    { name: "Real-World Analysis", topics: [
      { title: "Business Analytics Queries", desc: "Retention, cohort analysis, funnel queries", minutes: 40 },
      { title: "Data Cleaning with SQL", desc: "CASE, COALESCE, string functions, date functions", minutes: 30 },
      { title: "Building Dashboards from SQL", desc: "Connecting to BI tools, creating views, automation", minutes: 30 }
    ]}
  ]
},
"data-viz": {
  title: "Data Visualization Mastery",
  description: "Create stunning dashboards and interactive charts with D3.js, Tableau Public, Plotly, and Seaborn for storytelling with data.",
  category: "Data Science", categoryPage: "data-science.html",
  provider: "Observable", rating: "4.8", level: "Intermediate", duration: "30 hours", learners: "15,000+",
  topics: ["D3.js","Tableau","Plotly","Seaborn"],
  modules: [
    { name: "Visualization Principles", topics: [
      { title: "Data Storytelling", desc: "Narrative structure, audience analysis, chart selection", minutes: 30 },
      { title: "Color Theory for Data", desc: "Sequential, diverging, categorical palettes, accessibility", minutes: 25 },
      { title: "Chart Types & When to Use Them", desc: "Bar, line, scatter, pie, treemap, sankey, heatmap", minutes: 30 }
    ]},
    { name: "Python Visualization", topics: [
      { title: "Matplotlib Advanced", desc: "Subplots, annotations, custom styles, 3D plots", minutes: 35 },
      { title: "Seaborn for Statistical Viz", desc: "Distribution, regression, categorical, multi-plot grids", minutes: 35 },
      { title: "Plotly Interactive Charts", desc: "Scatter, maps, 3D, animations, dash integration", minutes: 40 }
    ]},
    { name: "D3.js & Web Viz", topics: [
      { title: "D3 Selections & Data Binding", desc: "Select, append, enter-update-exit pattern", minutes: 40 },
      { title: "Scales & Axes", desc: "Linear, ordinal, time scales, axis generation", minutes: 35 },
      { title: "Interactive D3 Visualizations", desc: "Transitions, tooltips, zoom, brush interactions", minutes: 45 }
    ]},
    { name: "Dashboard Design", topics: [
      { title: "Tableau Public Dashboards", desc: "Connecting data, sheets, dashboard layout, publishing", minutes: 40 },
      { title: "Dashboard Best Practices", desc: "Layout, KPIs, drill-down, responsive design", minutes: 30 },
      { title: "Portfolio Visualization Project", desc: "End-to-end dashboard from data to presentation", minutes: 50 }
    ]}
  ]
}
},
"uiux-design": { title:"UI/UX Design Fundamentals", description:"Learn user-centered design principles, wireframing, prototyping with Figma, usability testing, and creating delightful user experiences.", category:"Design", categoryPage:"design.html", provider:"Google UX Design", rating:"4.9", level:"Beginner", duration:"50 hours", learners:"29,000+", topics:["UI/UX","Figma","Prototyping","Usability"], modules:[
  {name:"Design Thinking", topics:[{title:"What is UX Design?",desc:"UX vs UI, design thinking process, user empathy",minutes:25},{title:"User Research Methods",desc:"Interviews, surveys, personas, journey mapping",minutes:35},{title:"Information Architecture",desc:"Sitemaps, card sorting, navigation patterns",minutes:30},{title:"Accessibility & Inclusive Design",desc:"WCAG guidelines, screen readers, color contrast",minutes:30}]},
  {name:"Wireframing & Prototyping", topics:[{title:"Low-Fidelity Wireframes",desc:"Sketching, paper prototypes, wireframe tools",minutes:30},{title:"Figma Essentials",desc:"Frames, components, auto-layout, styles",minutes:40},{title:"Interactive Prototyping",desc:"Transitions, overlays, micro-interactions in Figma",minutes:35},{title:"Design Systems",desc:"Component libraries, tokens, documentation",minutes:35}]},
  {name:"Visual Design Principles", topics:[{title:"Typography in UI",desc:"Font pairing, hierarchy, readability, web fonts",minutes:30},{title:"Color Theory for Interfaces",desc:"Color psychology, palettes, contrast ratios",minutes:25},{title:"Layout & Grid Systems",desc:"12-column grid, spacing, visual hierarchy",minutes:30},{title:"Iconography & Imagery",desc:"Icon sets, illustrations, image optimization",minutes:25}]},
  {name:"Usability & Testing", topics:[{title:"Usability Testing Methods",desc:"Moderated/unmoderated, think-aloud, A/B testing",minutes:35},{title:"Heuristic Evaluation",desc:"Nielsen's heuristics, expert review, scoring",minutes:30},{title:"Analyzing User Feedback",desc:"Affinity diagrams, prioritization, iteration",minutes:25},{title:"Portfolio Project",desc:"End-to-end UX case study for your portfolio",minutes:50}]}
]},
"graphic-design": { title:"Graphic Design Masterclass", description:"Master typography, color theory, layout composition, branding, and logo design using free tools like Canva and GIMP.", category:"Design", categoryPage:"design.html", provider:"Canva Design School", rating:"4.7", level:"Beginner", duration:"35 hours", learners:"25,000+", topics:["Typography","Branding","Layout","Logo Design"], modules:[
  {name:"Design Fundamentals", topics:[{title:"Elements of Design",desc:"Line, shape, color, texture, space, form",minutes:25},{title:"Principles of Composition",desc:"Balance, contrast, alignment, proximity, repetition",minutes:30},{title:"Color Theory Deep Dive",desc:"Color wheel, harmony, psychology, brand colors",minutes:30},{title:"Typography Essentials",desc:"Typefaces, hierarchy, pairing, kerning, leading",minutes:30}]},
  {name:"Digital Tools", topics:[{title:"Canva for Design",desc:"Templates, elements, brand kit, collaboration",minutes:30},{title:"GIMP Photo Editing",desc:"Layers, masks, retouching, filters, export",minutes:35},{title:"Inkscape for Vectors",desc:"Paths, shapes, logos, scalable graphics",minutes:30}]},
  {name:"Branding & Identity", topics:[{title:"Brand Strategy",desc:"Mission, values, target audience, brand voice",minutes:30},{title:"Logo Design Process",desc:"Research, sketching, refinement, variations",minutes:40},{title:"Brand Guidelines",desc:"Style guides, usage rules, templates",minutes:25},{title:"Social Media Branding",desc:"Profile assets, post templates, consistency",minutes:25}]},
  {name:"Portfolio Projects", topics:[{title:"Poster & Flyer Design",desc:"Layout, hierarchy, print vs digital specs",minutes:35},{title:"Business Card & Stationery",desc:"Professional branding collateral",minutes:25},{title:"Complete Brand Identity Project",desc:"Full branding package for a fictional company",minutes:50}]}
]},
"motion-graphics": { title:"Motion Graphics & Animation", description:"Create stunning animations, kinetic typography, and visual effects using free tools and industry techniques.", category:"Design", categoryPage:"design.html", provider:"School of Motion", rating:"4.8", level:"Intermediate", duration:"40 hours", learners:"12,000+", topics:["Animation","Motion Design","Kinetic Typography"], modules:[
  {name:"Animation Principles", topics:[{title:"12 Principles of Animation",desc:"Squash, stretch, anticipation, timing, easing",minutes:35},{title:"Keyframes & Timing",desc:"Keyframe types, graph editor, bezier curves",minutes:30},{title:"Storyboarding for Motion",desc:"Planning animations, scene composition, pacing",minutes:25}]},
  {name:"2D Animation Tools", topics:[{title:"CSS Animations & Transitions",desc:"@keyframes, transform, transition properties",minutes:35},{title:"SVG Animation",desc:"Animating SVG paths, morphing, stroke animation",minutes:35},{title:"Lottie & After Effects Basics",desc:"Creating Lottie files, web integration",minutes:30}]},
  {name:"Kinetic Typography", topics:[{title:"Text Animation Techniques",desc:"Reveal, bounce, wave, typewriter effects",minutes:30},{title:"Lyric Video & Title Sequences",desc:"Timing to audio, creative text layouts",minutes:35},{title:"Responsive Text Animation",desc:"Fluid sizing, viewport animations",minutes:25}]},
  {name:"Motion for Web", topics:[{title:"GSAP Animation Library",desc:"Timelines, ScrollTrigger, morphing, complex sequences",minutes:40},{title:"Three.js Introduction",desc:"3D scenes, geometries, materials, camera controls",minutes:45},{title:"Performance Optimization",desc:"GPU acceleration, will-change, requestAnimationFrame",minutes:25}]}
]},
"web-design-css": { title:"Web Design with CSS & HTML", description:"Build beautiful, responsive websites from scratch using modern CSS techniques like Grid, Flexbox, animations, and custom properties.", category:"Design", categoryPage:"design.html", provider:"Kevin Powell", rating:"4.9", level:"Beginner", duration:"30 hours", learners:"35,000+", topics:["CSS","HTML","Responsive Design","Modern CSS"], modules:[
  {name:"Modern CSS Techniques", topics:[{title:"Custom Properties & Variables",desc:"CSS variables, theming, dynamic values",minutes:25},{title:"Advanced Selectors",desc:":is(), :where(), :has(), container queries",minutes:30},{title:"Clamp & Fluid Typography",desc:"clamp(), min(), max(), fluid scaling",minutes:25},{title:"CSS Nesting & Layers",desc:"Native nesting, @layer, cascade control",minutes:25}]},
  {name:"Layout Mastery", topics:[{title:"Flexbox Patterns",desc:"Holy grail, sidebar, card layouts, centering",minutes:35},{title:"CSS Grid Advanced",desc:"Subgrid, named areas, auto-placement, masonry",minutes:40},{title:"Responsive Without Media Queries",desc:"Intrinsic sizing, fluid grids, container queries",minutes:30}]},
  {name:"Visual Effects", topics:[{title:"Gradients & Backgrounds",desc:"Linear, radial, conic gradients, patterns",minutes:25},{title:"Shadows & Glassmorphism",desc:"Box-shadow, text-shadow, backdrop-filter",minutes:25},{title:"Blend Modes & Filters",desc:"mix-blend-mode, filter effects, image styling",minutes:25},{title:"Scroll-Driven Animations",desc:"scroll-timeline, view-timeline, parallax",minutes:30}]},
  {name:"Complete Website Projects", topics:[{title:"Portfolio Website",desc:"Building a complete responsive portfolio site",minutes:50},{title:"Landing Page Design",desc:"Hero, features, testimonials, CTA sections",minutes:45},{title:"Dark Mode Implementation",desc:"Color scheme toggle, prefers-color-scheme",minutes:25}]}
]},
"photography": { title:"Digital Photography Essentials", description:"Master camera settings, composition rules, lighting techniques, and post-processing with free editing software.", category:"Design", categoryPage:"design.html", provider:"Nikon School", rating:"4.6", level:"Beginner", duration:"20 hours", learners:"18,000+", topics:["Photography","Editing","Composition"], modules:[
  {name:"Camera Fundamentals", topics:[{title:"Exposure Triangle",desc:"Aperture, shutter speed, ISO relationship",minutes:30},{title:"Focus & Depth of Field",desc:"Auto vs manual focus, bokeh, f-stop control",minutes:25},{title:"White Balance & Color",desc:"Color temperature, presets, RAW vs JPEG",minutes:20},{title:"Camera Modes",desc:"Manual, aperture priority, shutter priority",minutes:20}]},
  {name:"Composition & Lighting", topics:[{title:"Rule of Thirds & Leading Lines",desc:"Composition guidelines, framing, symmetry",minutes:25},{title:"Natural Light Photography",desc:"Golden hour, diffused light, reflectors",minutes:25},{title:"Indoor & Artificial Lighting",desc:"Window light, continuous lights, flash basics",minutes:25}]},
  {name:"Post-Processing", topics:[{title:"Photo Editing with Free Tools",desc:"GIMP, RawTherapee, basic adjustments",minutes:30},{title:"Color Correction & Grading",desc:"Curves, levels, HSL, color harmony",minutes:25},{title:"Retouching & Export",desc:"Clone stamp, healing, sharpening, web export",minutes:25}]}
]},
"illustration": { title:"Illustration & Digital Art", description:"Develop your illustration skills with digital drawing techniques, character design, and concept art.", category:"Design", categoryPage:"design.html", provider:"Drawabox", rating:"4.8", level:"All Levels", duration:"45 hours", learners:"14,000+", topics:["Illustration","Digital Art","Character Design"], modules:[
  {name:"Drawing Fundamentals", topics:[{title:"Lines & Construction",desc:"Confident strokes, ghosting method, boxes",minutes:30},{title:"Perspective Drawing",desc:"1, 2, 3-point perspective, vanishing points",minutes:35},{title:"Form & Volume",desc:"3D forms, shading, light sources, cast shadows",minutes:35},{title:"Organic Forms",desc:"Curves, contour lines, natural shapes",minutes:30}]},
  {name:"Digital Art Tools", topics:[{title:"Krita for Digital Painting",desc:"Brushes, layers, blending modes, workflow",minutes:35},{title:"Vector Illustration",desc:"Inkscape paths, shapes, clean line art",minutes:30},{title:"Tablet Techniques",desc:"Pressure sensitivity, shortcuts, ergonomics",minutes:20}]},
  {name:"Character Design", topics:[{title:"Anatomy for Artists",desc:"Proportions, gesture drawing, poses",minutes:40},{title:"Character Ideation",desc:"Silhouettes, shapes, personality in design",minutes:30},{title:"Expressions & Poses",desc:"Facial expressions, body language, action poses",minutes:30},{title:"Character Turnaround",desc:"Front, side, back views, model sheets",minutes:35}]},
  {name:"Portfolio Development", topics:[{title:"Concept Art Workflow",desc:"Thumbnails, composition, final rendering",minutes:40},{title:"Building an Art Portfolio",desc:"Selecting work, presentation, online platforms",minutes:25}]}
]},
"digital-marketing": { title:"Digital Marketing Complete Guide", description:"Master SEO, social media marketing, Google Ads, email campaigns, content strategy, and analytics.", category:"Business", categoryPage:"business.html", provider:"Google Digital Garage", rating:"4.8", level:"Beginner", duration:"40 hours", learners:"55,000+", topics:["SEO","SEM","Social Media","Analytics"], modules:[
  {name:"Digital Marketing Foundations", topics:[{title:"Digital Marketing Landscape",desc:"Channels, strategies, customer journey, funnel",minutes:25},{title:"Building an Online Presence",desc:"Website, social profiles, Google Business",minutes:30},{title:"Content Marketing Strategy",desc:"Content pillars, calendar, formats, distribution",minutes:35},{title:"Email Marketing",desc:"List building, segmentation, automation, A/B testing",minutes:35}]},
  {name:"SEO & Search Marketing", topics:[{title:"On-Page SEO",desc:"Keywords, meta tags, headings, content optimization",minutes:35},{title:"Technical SEO",desc:"Site speed, mobile-first, sitemaps, structured data",minutes:30},{title:"Off-Page SEO & Link Building",desc:"Backlinks, guest posting, authority building",minutes:25},{title:"Google Ads Fundamentals",desc:"Campaigns, ad groups, keywords, bidding strategies",minutes:35}]},
  {name:"Social Media Marketing", topics:[{title:"Platform Strategies",desc:"Instagram, LinkedIn, Twitter, TikTok best practices",minutes:30},{title:"Content Creation & Scheduling",desc:"Visual content, captions, posting frequency, tools",minutes:30},{title:"Community Management",desc:"Engagement, moderation, crisis management",minutes:25},{title:"Influencer Marketing",desc:"Finding influencers, outreach, campaign measurement",minutes:25}]},
  {name:"Analytics & Optimization", topics:[{title:"Google Analytics 4",desc:"Setup, events, conversions, audience reports",minutes:35},{title:"KPIs & Reporting",desc:"Defining metrics, dashboards, monthly reports",minutes:25},{title:"Conversion Rate Optimization",desc:"Landing pages, A/B testing, user behavior analysis",minutes:30}]}
]},
"startup-launch": { title:"Startup Launch & Growth", description:"Learn lean startup methodology, MVP development, market validation, pitch deck creation, and scaling strategies.", category:"Business", categoryPage:"business.html", provider:"Y Combinator", rating:"4.9", level:"Intermediate", duration:"30 hours", learners:"20,000+", topics:["Startups","Strategy","Funding","MVP"], modules:[
  {name:"Ideation & Validation", topics:[{title:"Finding Startup Ideas",desc:"Problem identification, market gaps, ideation frameworks",minutes:30},{title:"Market Research",desc:"TAM/SAM/SOM, competitor analysis, target market",minutes:35},{title:"Customer Discovery",desc:"Customer interviews, pain points, validation",minutes:30},{title:"MVP Design",desc:"Minimum viable product, feature prioritization",minutes:30}]},
  {name:"Business Model", topics:[{title:"Business Model Canvas",desc:"Value proposition, channels, revenue streams",minutes:30},{title:"Revenue Models",desc:"SaaS, freemium, marketplace, subscription",minutes:25},{title:"Unit Economics",desc:"CAC, LTV, margins, break-even analysis",minutes:30}]},
  {name:"Fundraising", topics:[{title:"Pitch Deck Creation",desc:"Story structure, slides, design, delivery",minutes:40},{title:"Funding Options",desc:"Bootstrapping, angels, VCs, crowdfunding",minutes:25},{title:"Term Sheets & Negotiation",desc:"Valuation, equity, dilution, deal terms",minutes:30}]},
  {name:"Growth & Scaling", topics:[{title:"Growth Strategies",desc:"Product-led, sales-led, viral loops, referrals",minutes:30},{title:"Hiring & Team Building",desc:"First hires, culture, equity compensation",minutes:25},{title:"Metrics & Analytics",desc:"North star metric, cohorts, retention, churn",minutes:30}]}
]},
"financial-literacy": { title:"Financial Literacy & Investing", description:"Understand personal finance, budgeting, stock markets, cryptocurrency basics, and retirement planning.", category:"Business", categoryPage:"business.html", provider:"Khan Academy", rating:"4.7", level:"Beginner", duration:"25 hours", learners:"40,000+", topics:["Finance","Investing","Budgeting"], modules:[
  {name:"Personal Finance Basics", topics:[{title:"Budgeting Methods",desc:"50/30/20 rule, zero-based, envelope system",minutes:25},{title:"Emergency Fund & Savings",desc:"Setting goals, high-yield accounts, automation",minutes:20},{title:"Understanding Debt",desc:"Good vs bad debt, interest rates, payoff strategies",minutes:25},{title:"Credit Score & Reports",desc:"Building credit, monitoring, dispute process",minutes:20}]},
  {name:"Investing Fundamentals", topics:[{title:"Stock Market Basics",desc:"How stocks work, exchanges, market orders",minutes:30},{title:"Index Funds & ETFs",desc:"Passive investing, diversification, expense ratios",minutes:25},{title:"Bonds & Fixed Income",desc:"Government bonds, corporate bonds, yield curves",minutes:25},{title:"Retirement Accounts",desc:"401k, IRA, Roth, employer matching",minutes:25}]},
  {name:"Advanced Topics", topics:[{title:"Portfolio Construction",desc:"Asset allocation, rebalancing, risk tolerance",minutes:30},{title:"Real Estate Investing Intro",desc:"REITs, rental properties, mortgages",minutes:25},{title:"Cryptocurrency Basics",desc:"Blockchain, Bitcoin, Ethereum, risks",minutes:25},{title:"Tax-Efficient Investing",desc:"Capital gains, tax-loss harvesting, accounts",minutes:25}]}
]},
"project-management": { title:"Project Management Essentials", description:"Learn Agile, Scrum, Kanban methodologies and project planning.", category:"Business", categoryPage:"business.html", provider:"Google PM Certificate", rating:"4.8", level:"Beginner", duration:"35 hours", learners:"30,000+", topics:["Agile","Scrum","PM Tools","Planning"], modules:[
  {name:"PM Foundations", topics:[{title:"Project Lifecycle",desc:"Initiation, planning, execution, monitoring, closing",minutes:25},{title:"Scope & Requirements",desc:"Scope definition, WBS, stakeholder requirements",minutes:30},{title:"Scheduling & Timelines",desc:"Gantt charts, milestones, critical path method",minutes:30},{title:"Risk Management",desc:"Risk identification, assessment, mitigation plans",minutes:25}]},
  {name:"Agile & Scrum", topics:[{title:"Agile Manifesto & Principles",desc:"Values, principles, agile vs waterfall",minutes:20},{title:"Scrum Framework",desc:"Sprints, roles, ceremonies, artifacts",minutes:35},{title:"Kanban Method",desc:"Visual boards, WIP limits, flow optimization",minutes:25},{title:"User Stories & Estimation",desc:"Story points, planning poker, acceptance criteria",minutes:30}]},
  {name:"Tools & Communication", topics:[{title:"PM Tools Overview",desc:"Jira, Trello, Asana, Monday.com comparison",minutes:25},{title:"Stakeholder Communication",desc:"Status reports, meetings, escalation paths",minutes:25},{title:"Team Leadership",desc:"Motivation, conflict resolution, retrospectives",minutes:25},{title:"PM Career Path",desc:"Certifications, PMP, portfolio building",minutes:20}]}
]},
"business-strategy": { title:"Business Strategy & Analysis", description:"Develop strategic thinking with competitive analysis and data-driven decision making.", category:"Business", categoryPage:"business.html", provider:"Harvard Online", rating:"4.9", level:"Intermediate", duration:"45 hours", learners:"15,000+", topics:["Strategy","Analysis","Planning","Frameworks"], modules:[
  {name:"Strategic Frameworks", topics:[{title:"SWOT Analysis",desc:"Strengths, weaknesses, opportunities, threats",minutes:25},{title:"Porter's Five Forces",desc:"Industry competition analysis framework",minutes:30},{title:"PESTLE Analysis",desc:"Political, economic, social, tech, legal, environmental",minutes:25},{title:"Blue Ocean Strategy",desc:"Creating uncontested market space, value innovation",minutes:30}]},
  {name:"Competitive Strategy", topics:[{title:"Competitive Advantage",desc:"Cost leadership, differentiation, focus strategies",minutes:30},{title:"Market Positioning",desc:"Perceptual maps, value proposition design",minutes:25},{title:"Growth Strategies",desc:"Ansoff matrix, diversification, market penetration",minutes:30}]},
  {name:"Data-Driven Decisions", topics:[{title:"Business Analytics Intro",desc:"KPIs, dashboards, data-driven culture",minutes:30},{title:"Financial Analysis",desc:"P&L statements, cash flow, ratio analysis",minutes:35},{title:"Decision Frameworks",desc:"Decision trees, cost-benefit analysis, scoring models",minutes:25},{title:"Strategic Planning Document",desc:"Vision, mission, goals, OKRs, action plans",minutes:30}]}
]},
"leadership": { title:"Leadership & Team Management", description:"Build essential leadership skills including emotional intelligence, conflict resolution, and team motivation.", category:"Business", categoryPage:"business.html", provider:"Coursera Free", rating:"4.6", level:"All Levels", duration:"20 hours", learners:"22,000+", topics:["Leadership","Communication","Team Building"], modules:[
  {name:"Leadership Foundations", topics:[{title:"Leadership Styles",desc:"Transformational, servant, situational leadership",minutes:25},{title:"Self-Awareness & EQ",desc:"Emotional intelligence, strengths assessment",minutes:30},{title:"Vision & Influence",desc:"Setting direction, inspiring others, storytelling",minutes:25}]},
  {name:"Team Dynamics", topics:[{title:"Building High-Performance Teams",desc:"Team stages, psychological safety, trust",minutes:30},{title:"Delegation & Empowerment",desc:"Effective delegation, accountability, autonomy",minutes:25},{title:"Conflict Resolution",desc:"Sources of conflict, mediation, win-win solutions",minutes:25},{title:"Giving & Receiving Feedback",desc:"SBI model, constructive feedback, growth mindset",minutes:25}]},
  {name:"Communication & Growth", topics:[{title:"Effective Communication",desc:"Active listening, clarity, non-verbal, presentations",minutes:25},{title:"Difficult Conversations",desc:"Preparing, delivering tough messages, empathy",minutes:25},{title:"Coaching & Mentoring",desc:"Coaching frameworks, mentoring relationships",minutes:25},{title:"Personal Leadership Plan",desc:"Development goals, action items, accountability",minutes:20}]}
]},
"english-global": { title:"English for Global Communication", description:"Improve your English fluency with grammar, vocabulary, pronunciation, and IELTS/TOEFL preparation.", category:"Language Learning", categoryPage:"language-learning.html", provider:"British Council", rating:"4.8", level:"All Levels", duration:"60 hours", learners:"65,000+", topics:["Grammar","Speaking","Writing","IELTS"], modules:[
  {name:"Grammar Mastery", topics:[{title:"Tenses & Verb Forms",desc:"Present, past, future, perfect, continuous",minutes:35},{title:"Sentence Structure",desc:"Simple, compound, complex sentences, clauses",minutes:30},{title:"Common Grammar Mistakes",desc:"Subject-verb agreement, articles, prepositions",minutes:25},{title:"Advanced Grammar",desc:"Conditionals, passive voice, reported speech",minutes:30}]},
  {name:"Speaking & Pronunciation", topics:[{title:"Pronunciation Fundamentals",desc:"Vowel/consonant sounds, stress, intonation",minutes:30},{title:"Fluency Building",desc:"Conversation strategies, fillers, linking words",minutes:30},{title:"Business English Speaking",desc:"Meetings, presentations, negotiations, phone calls",minutes:35},{title:"Accent Reduction",desc:"Common pronunciation patterns, practice drills",minutes:25}]},
  {name:"Writing Skills", topics:[{title:"Academic Writing",desc:"Essay structure, thesis, arguments, citations",minutes:35},{title:"Professional Emails",desc:"Formal/informal tone, templates, etiquette",minutes:25},{title:"Creative Writing Basics",desc:"Narrative, descriptive, persuasive writing",minutes:30}]},
  {name:"Test Preparation", topics:[{title:"IELTS Overview & Strategy",desc:"Exam format, scoring, time management tips",minutes:30},{title:"TOEFL Preparation",desc:"Reading, listening, speaking, writing sections",minutes:30},{title:"Practice Tests & Review",desc:"Mock tests, error analysis, improvement plan",minutes:35}]}
]},
"spanish-fluency": { title:"Spanish from Zero to Fluency", description:"Complete Spanish course covering pronunciation, grammar, conversational skills, and cultural context.", category:"Language Learning", categoryPage:"language-learning.html", provider:"Duolingo", rating:"4.7", level:"Beginner", duration:"50 hours", learners:"48,000+", topics:["Spanish","Conversation","Grammar","Culture"], modules:[
  {name:"Spanish Basics", topics:[{title:"Alphabet & Pronunciation",desc:"Spanish sounds, accent marks, syllable stress",minutes:25},{title:"Greetings & Introductions",desc:"Hello, goodbye, name, nationality, basic phrases",minutes:20},{title:"Numbers, Dates & Time",desc:"Counting, days, months, telling time",minutes:25},{title:"Essential Vocabulary",desc:"Family, food, colors, body parts, clothing",minutes:30}]},
  {name:"Grammar Foundations", topics:[{title:"Present Tense Verbs",desc:"Regular -ar, -er, -ir verbs, conjugation",minutes:35},{title:"Ser vs Estar",desc:"Permanent vs temporary states, usage rules",minutes:25},{title:"Past Tenses",desc:"Preterite and imperfect, when to use each",minutes:35},{title:"Future & Conditional",desc:"Simple future, conditional mood, expressions",minutes:30}]},
  {name:"Conversation Skills", topics:[{title:"Everyday Conversations",desc:"Shopping, restaurants, directions, transportation",minutes:30},{title:"Expressing Opinions",desc:"Agreeing, disagreeing, preferences, feelings",minutes:25},{title:"Storytelling in Spanish",desc:"Narrative tenses, connecting words, sequencing",minutes:30}]},
  {name:"Culture & Advanced Topics", topics:[{title:"Spanish-Speaking Cultures",desc:"Spain, Mexico, Argentina, cultural differences",minutes:25},{title:"Subjunctive Mood",desc:"Wishes, doubts, emotions, triggers",minutes:35},{title:"Idioms & Slang",desc:"Common expressions, regional variations, humor",minutes:25},{title:"Reading & Listening Practice",desc:"News articles, podcasts, comprehension exercises",minutes:30}]}
]},
"mandarin-chinese": { title:"Mandarin Chinese Fundamentals", description:"Learn Chinese characters, tones, pinyin, basic conversations, and HSK exam preparation.", category:"Language Learning", categoryPage:"language-learning.html", provider:"ChinesePod", rating:"4.6", level:"Beginner", duration:"45 hours", learners:"15,000+", topics:["Mandarin","Characters","Tones","HSK"], modules:[
  {name:"Pronunciation & Tones", topics:[{title:"The Four Tones",desc:"Tone marks, tone pairs, practice drills",minutes:30},{title:"Pinyin System",desc:"Initials, finals, syllable structure",minutes:30},{title:"Common Sound Challenges",desc:"Tongue position, aspirated sounds, tone sandhi",minutes:25}]},
  {name:"Characters & Writing", topics:[{title:"Stroke Order & Radicals",desc:"Basic strokes, common radicals, writing practice",minutes:35},{title:"First 100 Characters",desc:"Most frequent characters, recognition, writing",minutes:40},{title:"Character Components",desc:"Semantic and phonetic components, mnemonics",minutes:30}]},
  {name:"Basic Conversations", topics:[{title:"Self-Introduction",desc:"Name, age, nationality, occupation, hobbies",minutes:25},{title:"Daily Life Phrases",desc:"Ordering food, shopping, transportation",minutes:30},{title:"Numbers & Money",desc:"Counting, prices, phone numbers, dates",minutes:25},{title:"Asking Questions",desc:"Question particles, who/what/where/when/how",minutes:25}]},
  {name:"HSK 1-2 Preparation", topics:[{title:"HSK 1 Vocabulary & Grammar",desc:"150 words, basic sentence patterns",minutes:35},{title:"HSK 2 Vocabulary & Grammar",desc:"300 words, comparisons, suggestions",minutes:35},{title:"Practice Tests",desc:"Mock exams, listening practice, time management",minutes:30}]}
]},
"french-conversation": { title:"French Conversation Mastery", description:"Develop natural French speaking skills with real-world dialogues and cultural lessons.", category:"Language Learning", categoryPage:"language-learning.html", provider:"FrenchPod101", rating:"4.8", level:"Beginner to Intermediate", duration:"40 hours", learners:"22,000+", topics:["French","Conversation","Culture","DELF"], modules:[
  {name:"French Basics", topics:[{title:"French Pronunciation",desc:"Nasal vowels, silent letters, liaison, elision",minutes:30},{title:"Essential Phrases",desc:"Greetings, politeness, survival phrases",minutes:20},{title:"Articles & Gender",desc:"Le, la, les, un, une, des, gender rules",minutes:25},{title:"Present Tense Conjugation",desc:"Regular verbs, être, avoir, aller, faire",minutes:30}]},
  {name:"Building Sentences", topics:[{title:"Negation & Questions",desc:"Ne...pas, inversion, est-ce que, question words",minutes:25},{title:"Past Tenses",desc:"Passé composé, imparfait, usage differences",minutes:35},{title:"Pronouns & Prepositions",desc:"Object pronouns, y, en, à, de, chez",minutes:30},{title:"Future & Conditional",desc:"Futur simple, conditional, si clauses",minutes:30}]},
  {name:"Conversational French", topics:[{title:"At the Restaurant",desc:"Ordering, dietary needs, paying, tipping",minutes:25},{title:"Travel & Directions",desc:"Asking directions, transportation, hotel",minutes:25},{title:"Expressing Opinions",desc:"Agreement, disagreement, preferences in French",minutes:25},{title:"Storytelling & Narration",desc:"Sequencing events, descriptive language",minutes:30}]},
  {name:"Culture & Certification", topics:[{title:"French Culture & Etiquette",desc:"Social norms, holidays, food culture, formality",minutes:25},{title:"DELF A1-A2 Preparation",desc:"Exam format, practice exercises, strategies",minutes:35},{title:"French Media & Reading",desc:"News, podcasts, books for learners",minutes:25}]}
]},
"japanese-language": { title:"Japanese Language & Culture", description:"Learn Hiragana, Katakana, basic Kanji, grammar patterns, and JLPT N5-N4 preparation.", category:"Language Learning", categoryPage:"language-learning.html", provider:"Tofugu", rating:"4.9", level:"Beginner", duration:"55 hours", learners:"19,000+", topics:["Japanese","Kanji","Culture","JLPT"], modules:[
  {name:"Writing Systems", topics:[{title:"Hiragana Mastery",desc:"All 46 characters, mnemonics, writing practice",minutes:35},{title:"Katakana Mastery",desc:"All 46 characters, loanwords, recognition",minutes:35},{title:"First 100 Kanji",desc:"Basic kanji, readings, radicals, mnemonics",minutes:40}]},
  {name:"Grammar Foundations", topics:[{title:"Sentence Structure",desc:"SOV order, particles wa, ga, wo, ni, de",minutes:35},{title:"Verb Conjugation",desc:"Ru/u verbs, masu form, te-form, past tense",minutes:40},{title:"Adjectives & Descriptions",desc:"I-adjectives, na-adjectives, conjugation",minutes:30},{title:"Counting & Classifiers",desc:"Number systems, counter words, dates, time",minutes:25}]},
  {name:"Conversation & Culture", topics:[{title:"Self-Introduction (Jikoshoukai)",desc:"Name, hobby, occupation, polite expressions",minutes:25},{title:"Daily Conversations",desc:"Shopping, restaurant, station, asking for help",minutes:30},{title:"Keigo (Polite Language)",desc:"Politeness levels, formal vs informal speech",minutes:30},{title:"Japanese Pop Culture",desc:"Anime vocabulary, manga, gaming, modern culture",minutes:20}]},
  {name:"JLPT Preparation", topics:[{title:"JLPT N5 Grammar & Vocab",desc:"Essential patterns, 800 words, practice",minutes:40},{title:"JLPT N4 Grammar & Vocab",desc:"Intermediate patterns, 1500 words, practice",minutes:45},{title:"Listening & Reading Practice",desc:"Comprehension exercises, mock tests, strategies",minutes:35}]}
]},
"public-speaking": { title:"Public Speaking & Presentation", description:"Master the art of public speaking with techniques for overcoming anxiety, storytelling, and persuasion.", category:"Language Learning", categoryPage:"language-learning.html", provider:"Toastmasters Online", rating:"4.7", level:"All Levels", duration:"20 hours", learners:"25,000+", topics:["Speaking","Presentation","Confidence","Persuasion"], modules:[
  {name:"Overcoming Fear", topics:[{title:"Understanding Speech Anxiety",desc:"Causes, symptoms, reframing nervousness",minutes:20},{title:"Breathing & Relaxation",desc:"Diaphragmatic breathing, progressive relaxation",minutes:15},{title:"Confidence Building Exercises",desc:"Power poses, visualization, positive self-talk",minutes:20},{title:"Practice Strategies",desc:"Recording yourself, mirror practice, gradual exposure",minutes:20}]},
  {name:"Speech Construction", topics:[{title:"Structuring a Speech",desc:"Opening hooks, body structure, memorable endings",minutes:25},{title:"Storytelling Techniques",desc:"Narrative arc, emotional connection, anecdotes",minutes:30},{title:"Persuasive Speaking",desc:"Ethos, pathos, logos, call-to-action",minutes:25},{title:"Visual Aids & Slides",desc:"Slide design, data presentation, less is more",minutes:25}]},
  {name:"Delivery Skills", topics:[{title:"Voice Projection & Variety",desc:"Volume, pace, pitch, pausing for effect",minutes:25},{title:"Body Language",desc:"Gestures, eye contact, movement, posture",minutes:25},{title:"Handling Q&A Sessions",desc:"Anticipating questions, bridging, composure",minutes:20},{title:"Virtual Presentations",desc:"Webcam presence, screen sharing, engagement online",minutes:20}]}
]},
"calculus": { title:"Calculus I & II Complete Course", description:"Master limits, derivatives, integrals, series, and multivariable calculus with practice problems.", category:"Academic", categoryPage:"academic.html", provider:"MIT OpenCourseWare", rating:"4.9", level:"Undergraduate", duration:"80 hours", learners:"40,000+", topics:["Calculus","Derivatives","Integrals","Series"], modules:[
  {name:"Limits & Continuity", topics:[{title:"Intuitive Limits",desc:"Approaching values, one-sided limits, infinity",minutes:30},{title:"Limit Laws & Techniques",desc:"Algebraic manipulation, squeeze theorem, L'Hopital",minutes:35},{title:"Continuity",desc:"Definition, types of discontinuity, IVT",minutes:25},{title:"Epsilon-Delta Definition",desc:"Formal limit definition, proofs",minutes:35}]},
  {name:"Derivatives", topics:[{title:"Derivative Definition & Rules",desc:"Power rule, product, quotient, chain rule",minutes:40},{title:"Implicit & Logarithmic Differentiation",desc:"Implicit equations, log differentiation tricks",minutes:30},{title:"Applications of Derivatives",desc:"Related rates, optimization, curve sketching",minutes:45},{title:"Mean Value Theorem",desc:"MVT, Rolle's theorem, applications",minutes:25}]},
  {name:"Integration", topics:[{title:"Definite & Indefinite Integrals",desc:"Antiderivatives, FTC, area under curves",minutes:35},{title:"Integration Techniques",desc:"Substitution, integration by parts, trig integrals",minutes:45},{title:"Partial Fractions",desc:"Decomposition, irreducible quadratics",minutes:30},{title:"Applications of Integration",desc:"Area between curves, volumes, arc length",minutes:40}]},
  {name:"Sequences & Series", topics:[{title:"Sequences & Convergence",desc:"Monotone, bounded, convergence tests",minutes:30},{title:"Infinite Series",desc:"Geometric, p-series, comparison, ratio tests",minutes:35},{title:"Taylor & Maclaurin Series",desc:"Taylor polynomials, remainder, common expansions",minutes:40},{title:"Power Series",desc:"Radius of convergence, interval, operations",minutes:30}]}
]},
"intro-physics": { title:"Introduction to Physics", description:"Explore classical mechanics, thermodynamics, electromagnetism through interactive simulations.", category:"Academic", categoryPage:"academic.html", provider:"Khan Academy", rating:"4.8", level:"High School / College", duration:"60 hours", learners:"45,000+", topics:["Mechanics","Waves","Energy","Electromagnetism"], modules:[
  {name:"Mechanics", topics:[{title:"Kinematics",desc:"Position, velocity, acceleration, projectile motion",minutes:35},{title:"Newton's Laws",desc:"Force, mass, acceleration, free body diagrams",minutes:35},{title:"Work, Energy & Power",desc:"Kinetic, potential energy, conservation, power",minutes:35},{title:"Momentum & Collisions",desc:"Linear momentum, impulse, elastic/inelastic",minutes:30}]},
  {name:"Waves & Sound", topics:[{title:"Wave Properties",desc:"Wavelength, frequency, amplitude, wave equation",minutes:25},{title:"Sound Waves",desc:"Speed of sound, resonance, Doppler effect",minutes:25},{title:"Light & Optics",desc:"Reflection, refraction, lenses, mirrors",minutes:30}]},
  {name:"Thermodynamics", topics:[{title:"Temperature & Heat",desc:"Thermal equilibrium, specific heat, calorimetry",minutes:25},{title:"Laws of Thermodynamics",desc:"First, second, third laws, entropy",minutes:35},{title:"Gas Laws",desc:"Ideal gas law, kinetic theory, PV diagrams",minutes:30}]},
  {name:"Electricity & Magnetism", topics:[{title:"Electric Charge & Fields",desc:"Coulomb's law, electric fields, potential",minutes:35},{title:"Circuits",desc:"Ohm's law, series/parallel, Kirchhoff's rules",minutes:35},{title:"Magnetism",desc:"Magnetic fields, Lorentz force, electromagnetic induction",minutes:30}]}
]},
"organic-chemistry": { title:"Organic Chemistry Fundamentals", description:"Learn molecular structures, reaction mechanisms, stereochemistry, and synthesis strategies.", category:"Academic", categoryPage:"academic.html", provider:"Yale Open Courses", rating:"4.7", level:"Undergraduate", duration:"50 hours", learners:"12,000+", topics:["Chemistry","Reactions","Molecules","Stereochemistry"], modules:[
  {name:"Structure & Bonding", topics:[{title:"Atomic Orbitals & Hybridization",desc:"sp3, sp2, sp hybridization, bond angles",minutes:35},{title:"Lewis Structures & Resonance",desc:"Drawing structures, formal charge, resonance forms",minutes:30},{title:"Molecular Geometry",desc:"VSEPR theory, bond polarity, dipole moments",minutes:25},{title:"Functional Groups",desc:"Alkanes, alkenes, alcohols, amines, carbonyls",minutes:30}]},
  {name:"Stereochemistry", topics:[{title:"Chirality & Enantiomers",desc:"Chiral centers, R/S configuration, optical activity",minutes:35},{title:"Diastereomers & Meso Compounds",desc:"Multiple stereocenters, meso identification",minutes:30},{title:"Conformational Analysis",desc:"Newman projections, chair conformations, strain",minutes:30}]},
  {name:"Reaction Mechanisms", topics:[{title:"SN1 & SN2 Reactions",desc:"Nucleophilic substitution, mechanism, stereochemistry",minutes:40},{title:"E1 & E2 Elimination",desc:"Elimination reactions, Zaitsev's rule, regioselectivity",minutes:35},{title:"Addition Reactions",desc:"Alkene additions, Markovnikov, hydrogenation",minutes:35},{title:"Radical Reactions",desc:"Free radical halogenation, mechanism, selectivity",minutes:25}]},
  {name:"Carbonyl Chemistry", topics:[{title:"Aldehydes & Ketones",desc:"Nucleophilic addition, Grignard, aldol condensation",minutes:35},{title:"Carboxylic Acids & Derivatives",desc:"Esters, amides, acid chlorides, Fischer esterification",minutes:35},{title:"Synthesis Strategy",desc:"Retrosynthetic analysis, multi-step synthesis",minutes:40}]}
]},
"biology": { title:"Biology: From Cells to Ecosystems", description:"Comprehensive biology course covering cell biology, genetics, evolution, and ecology.", category:"Academic", categoryPage:"academic.html", provider:"CK-12 Foundation", rating:"4.6", level:"High School / College", duration:"55 hours", learners:"38,000+", topics:["Biology","Genetics","Ecology","Evolution"], modules:[
  {name:"Cell Biology", topics:[{title:"Cell Structure",desc:"Organelles, prokaryotic vs eukaryotic, membrane",minutes:30},{title:"Cell Transport",desc:"Diffusion, osmosis, active transport, endocytosis",minutes:25},{title:"Cell Division",desc:"Mitosis, meiosis, cell cycle, checkpoints",minutes:35},{title:"Cellular Respiration",desc:"Glycolysis, Krebs cycle, electron transport chain",minutes:35}]},
  {name:"Genetics", topics:[{title:"DNA Structure & Replication",desc:"Double helix, base pairing, replication fork",minutes:30},{title:"Gene Expression",desc:"Transcription, translation, codons, mutations",minutes:35},{title:"Mendelian Genetics",desc:"Dominance, crosses, Punnett squares, probability",minutes:30},{title:"Modern Genetics",desc:"Gene therapy, CRISPR, genomics, epigenetics",minutes:30}]},
  {name:"Evolution", topics:[{title:"Natural Selection",desc:"Darwin, fitness, adaptation, evidence for evolution",minutes:30},{title:"Speciation",desc:"Allopatric, sympatric, reproductive isolation",minutes:25},{title:"Phylogenetics",desc:"Cladograms, molecular clocks, common ancestors",minutes:25}]},
  {name:"Ecology", topics:[{title:"Ecosystems & Energy Flow",desc:"Food webs, trophic levels, energy pyramids",minutes:25},{title:"Population Ecology",desc:"Growth models, carrying capacity, r/K selection",minutes:25},{title:"Community Interactions",desc:"Competition, predation, symbiosis, succession",minutes:25},{title:"Conservation Biology",desc:"Biodiversity, threats, conservation strategies",minutes:25}]}
]},
"linear-algebra": { title:"Linear Algebra & Applications", description:"Understand vectors, matrices, eigenvalues, and their applications in data science and engineering.", category:"Academic", categoryPage:"academic.html", provider:"3Blue1Brown", rating:"4.9", level:"Undergraduate", duration:"35 hours", learners:"32,000+", topics:["Matrices","Vectors","Transforms","Eigenvalues"], modules:[
  {name:"Vectors & Spaces", topics:[{title:"Vectors & Vector Operations",desc:"Addition, scalar multiplication, dot product, cross product",minutes:30},{title:"Linear Combinations & Span",desc:"Linear combinations, span, linear independence",minutes:30},{title:"Vector Spaces & Subspaces",desc:"Definition, axioms, null space, column space",minutes:30},{title:"Basis & Dimension",desc:"Finding bases, coordinates, rank",minutes:25}]},
  {name:"Matrices & Transformations", topics:[{title:"Matrix Operations",desc:"Addition, multiplication, transpose, inverse",minutes:30},{title:"Linear Transformations",desc:"Rotation, scaling, shear, composition",minutes:35},{title:"Determinants",desc:"Computation, properties, geometric interpretation",minutes:25},{title:"Systems of Equations",desc:"Gaussian elimination, row echelon form, solutions",minutes:30}]},
  {name:"Eigenvalues & Decomposition", topics:[{title:"Eigenvalues & Eigenvectors",desc:"Characteristic equation, finding eigenvalues/vectors",minutes:35},{title:"Diagonalization",desc:"When possible, applications, matrix powers",minutes:30},{title:"SVD Introduction",desc:"Singular value decomposition, applications",minutes:35}]},
  {name:"Applications", topics:[{title:"Linear Algebra in ML",desc:"PCA, least squares, neural network weights",minutes:30},{title:"Computer Graphics",desc:"Transformations, projections, 3D rendering",minutes:25},{title:"PageRank & Networks",desc:"Markov chains, Google PageRank algorithm",minutes:30}]}
]},
"world-history": { title:"World History: Civilizations", description:"Journey through human history from ancient civilizations to modern geopolitics.", category:"Academic", categoryPage:"academic.html", provider:"Crash Course", rating:"4.8", level:"All Levels", duration:"40 hours", learners:"50,000+", topics:["History","Civilizations","Culture","Geopolitics"], modules:[
  {name:"Ancient Civilizations", topics:[{title:"Mesopotamia & Egypt",desc:"Sumer, Babylon, pharaohs, pyramids, writing systems",minutes:35},{title:"Ancient Greece",desc:"Democracy, philosophy, Alexander, Hellenistic period",minutes:30},{title:"Roman Empire",desc:"Republic to empire, law, engineering, fall of Rome",minutes:35},{title:"Ancient India & China",desc:"Indus Valley, Maurya, Han Dynasty, Silk Road",minutes:30}]},
  {name:"Medieval & Renaissance", topics:[{title:"Medieval Europe",desc:"Feudalism, Crusades, Black Death, cathedral building",minutes:30},{title:"Islamic Golden Age",desc:"Science, mathematics, medicine, trade networks",minutes:25},{title:"Renaissance & Reformation",desc:"Art, humanism, printing press, Protestant reform",minutes:30},{title:"Age of Exploration",desc:"Columbus, Magellan, colonialism, global exchange",minutes:25}]},
  {name:"Modern Era", topics:[{title:"Industrial Revolution",desc:"Factories, urbanization, labor, technological change",minutes:25},{title:"World War I & II",desc:"Causes, major events, Holocaust, aftermath",minutes:40},{title:"Cold War",desc:"Superpowers, proxy wars, space race, fall of USSR",minutes:30},{title:"Post-Cold War & Globalization",desc:"EU, UN, internet age, modern challenges",minutes:25}]}
]},
"productivity": { title:"Productivity & Time Management", description:"Master GTD, Pomodoro, time blocking, and digital tools to maximize your efficiency.", category:"Personal Development", categoryPage:"personal-development.html", provider:"Coursera Free", rating:"4.8", level:"All Levels", duration:"20 hours", learners:"35,000+", topics:["Productivity","Habits","Tools","Focus"], modules:[
  {name:"Productivity Foundations", topics:[{title:"Understanding Productivity",desc:"Myths, science of focus, energy management",minutes:20},{title:"Goal Setting with SMART",desc:"Specific, measurable, achievable, relevant, time-bound",minutes:20},{title:"Priority Frameworks",desc:"Eisenhower matrix, 80/20 rule, MITs",minutes:25},{title:"Overcoming Procrastination",desc:"Causes, strategies, the 2-minute rule, implementation intentions",minutes:25}]},
  {name:"Time Management Methods", topics:[{title:"Pomodoro Technique",desc:"25-minute focus, breaks, tracking, adaptation",minutes:20},{title:"Time Blocking",desc:"Calendar blocking, batching, deep work sessions",minutes:25},{title:"GTD (Getting Things Done)",desc:"Capture, clarify, organize, reflect, engage",minutes:30},{title:"Weekly Planning & Review",desc:"Weekly review process, planning template, reflection",minutes:20}]},
  {name:"Digital Tools & Habits", topics:[{title:"Task Management Tools",desc:"Todoist, Notion, Obsidian comparison and setup",minutes:25},{title:"Automation & Templates",desc:"Keyboard shortcuts, text expansion, browser automation",minutes:20},{title:"Building Habits",desc:"Habit stacking, cue-routine-reward, tracking",minutes:25},{title:"Digital Minimalism",desc:"Reducing distractions, phone usage, focus modes",minutes:20}]}
]},
"emotional-intelligence": { title:"Emotional Intelligence Mastery", description:"Develop self-awareness, empathy, social skills, and emotional regulation for personal and professional success.", category:"Personal Development", categoryPage:"personal-development.html", provider:"Yale Online", rating:"4.9", level:"All Levels", duration:"25 hours", learners:"28,000+", topics:["EQ","Self-Awareness","Empathy","Social Skills"], modules:[
  {name:"Self-Awareness", topics:[{title:"Understanding Emotions",desc:"Emotion wheel, triggers, physiological responses",minutes:25},{title:"Self-Assessment",desc:"Strengths, weaknesses, values, beliefs inventory",minutes:25},{title:"Mindful Self-Reflection",desc:"Journaling, meditation, body awareness practices",minutes:25},{title:"Emotional Patterns",desc:"Identifying recurring patterns, childhood influences",minutes:25}]},
  {name:"Self-Regulation", topics:[{title:"Managing Strong Emotions",desc:"Anger, anxiety, frustration management techniques",minutes:25},{title:"Stress Response & Resilience",desc:"Fight-flight-freeze, building resilience toolkit",minutes:25},{title:"Impulse Control",desc:"Delayed gratification, response vs reaction",minutes:20},{title:"Emotional Agility",desc:"Accepting and working with difficult emotions",minutes:25}]},
  {name:"Social Skills & Empathy", topics:[{title:"Active Listening",desc:"Full attention, reflection, validation, empathic listening",minutes:20},{title:"Empathy Development",desc:"Cognitive vs emotional empathy, perspective-taking",minutes:25},{title:"Building Rapport",desc:"Mirror, match, genuine curiosity, trust building",minutes:20},{title:"Navigating Social Dynamics",desc:"Reading rooms, group dynamics, influence",minutes:25}]},
  {name:"EQ in Practice", topics:[{title:"EQ in the Workplace",desc:"Leadership, teamwork, conflict, negotiation",minutes:25},{title:"EQ in Relationships",desc:"Communication patterns, boundaries, vulnerability",minutes:25},{title:"Personal EQ Development Plan",desc:"Assessment, goals, practice commitments, accountability",minutes:20}]}
]},
"mindfulness": { title:"Mindfulness & Meditation", description:"Learn scientifically-backed mindfulness techniques, breathing exercises, and meditation practices.", category:"Personal Development", categoryPage:"personal-development.html", provider:"Headspace", rating:"4.7", level:"Beginner", duration:"15 hours", learners:"40,000+", topics:["Meditation","Stress Relief","Breathing","Mindfulness"], modules:[
  {name:"Meditation Basics", topics:[{title:"What is Mindfulness?",desc:"Definition, science, benefits, misconceptions",minutes:15},{title:"Sitting Meditation",desc:"Posture, breath focus, wandering mind, duration",minutes:20},{title:"Body Scan Meditation",desc:"Progressive relaxation, body awareness, tension release",minutes:20},{title:"Walking Meditation",desc:"Mindful movement, sensory awareness, outdoor practice",minutes:15}]},
  {name:"Breathing Techniques", topics:[{title:"Diaphragmatic Breathing",desc:"Belly breathing, 4-7-8 technique, calming response",minutes:15},{title:"Box Breathing",desc:"4-count inhale-hold-exhale-hold, stress reduction",minutes:15},{title:"Energizing Breathwork",desc:"Wim Hof basics, bellows breath, morning routine",minutes:15}]},
  {name:"Advanced Practices", topics:[{title:"Loving-Kindness Meditation",desc:"Metta practice, self-compassion, extending kindness",minutes:20},{title:"Mindful Eating",desc:"Slow eating, sensory awareness, hunger cues",minutes:15},{title:"Mindfulness in Daily Life",desc:"Mindful commuting, work, conversations, routines",minutes:20},{title:"Building a Daily Practice",desc:"Habit formation, consistency, tracking progress",minutes:15}]}
]},
"critical-thinking": { title:"Critical Thinking & Problem Solving", description:"Sharpen your analytical abilities with logical reasoning, cognitive bias awareness, and decision frameworks.", category:"Personal Development", categoryPage:"personal-development.html", provider:"edX Free", rating:"4.8", level:"Intermediate", duration:"30 hours", learners:"22,000+", topics:["Logic","Analysis","Decisions","Problem Solving"], modules:[
  {name:"Foundations of Thinking", topics:[{title:"What is Critical Thinking?",desc:"Definition, importance, characteristics of good thinkers",minutes:20},{title:"Cognitive Biases",desc:"Confirmation, anchoring, availability, dunning-kruger",minutes:30},{title:"Logical Reasoning",desc:"Deductive, inductive, abductive reasoning",minutes:25},{title:"Identifying Fallacies",desc:"Ad hominem, straw man, false dichotomy, appeals",minutes:30}]},
  {name:"Analytical Skills", topics:[{title:"Problem Definition",desc:"Root cause analysis, 5 whys, problem framing",minutes:25},{title:"Evidence Evaluation",desc:"Source credibility, statistical literacy, claims",minutes:25},{title:"Systems Thinking",desc:"Feedback loops, unintended consequences, complexity",minutes:30},{title:"Creative Problem Solving",desc:"Brainstorming, SCAMPER, lateral thinking, constraints",minutes:25}]},
  {name:"Decision Making", topics:[{title:"Decision Frameworks",desc:"Pros/cons, weighted scoring, decision matrices",minutes:25},{title:"Risk Assessment",desc:"Probability, impact, expected value, uncertainty",minutes:25},{title:"Group Decision Making",desc:"Consensus building, devils advocate, Delphi method",minutes:25},{title:"Reflective Practice",desc:"Post-mortems, lessons learned, continuous improvement",minutes:20}]}
]},
"goal-setting": { title:"Goal Setting & Achievement", description:"Create actionable life plans with SMART goals, vision boarding, habit tracking, and overcoming procrastination.", category:"Personal Development", categoryPage:"personal-development.html", provider:"Skillshare Free", rating:"4.6", level:"All Levels", duration:"12 hours", learners:"30,000+", topics:["Goals","Planning","Motivation","Habits"], modules:[
  {name:"Designing Your Vision", topics:[{title:"Life Audit & Reflection",desc:"Wheel of life, current state assessment, values",minutes:20},{title:"Vision & Mission Statements",desc:"Personal vision, purpose, long-term direction",minutes:20},{title:"SMART Goal Framework",desc:"Setting specific, measurable, achievable goals",minutes:25},{title:"Vision Boards & Visualization",desc:"Creating vision boards, daily visualization practice",minutes:20}]},
  {name:"Action Planning", topics:[{title:"Breaking Down Big Goals",desc:"Milestones, quarterly goals, weekly targets",minutes:20},{title:"Implementation Intentions",desc:"If-then planning, trigger-action pairs",minutes:15},{title:"Accountability Systems",desc:"Accountability partners, public commitments, tracking",minutes:20},{title:"Habit Stacking",desc:"Linking new habits to existing routines",minutes:15}]},
  {name:"Staying on Track", topics:[{title:"Overcoming Obstacles",desc:"Anticipating setbacks, contingency plans, flexibility",minutes:20},{title:"Motivation & Discipline",desc:"Intrinsic vs extrinsic, willpower, environment design",minutes:20},{title:"Progress Tracking & Review",desc:"Journaling, metrics, monthly reviews, celebrating wins",minutes:20},{title:"Course Correction & Growth",desc:"Pivoting, accepting failure, growth mindset",minutes:20}]}
]},
"communication-skills": { title:"Effective Communication Skills", description:"Master verbal and written communication, active listening, negotiation, and professional networking.", category:"Personal Development", categoryPage:"personal-development.html", provider:"LinkedIn Learning", rating:"4.7", level:"All Levels", duration:"18 hours", learners:"33,000+", topics:["Communication","Negotiation","Networking","Writing"], modules:[
  {name:"Communication Foundations", topics:[{title:"Communication Models",desc:"Sender-receiver, noise, feedback, channels",minutes:20},{title:"Active Listening",desc:"Full attention, paraphrasing, clarifying, validating",minutes:20},{title:"Non-Verbal Communication",desc:"Body language, facial expressions, tone of voice",minutes:20},{title:"Written Communication",desc:"Clarity, conciseness, structure, proofreading",minutes:25}]},
  {name:"Professional Communication", topics:[{title:"Email & Message Etiquette",desc:"Subject lines, formatting, tone, response time",minutes:20},{title:"Meeting Skills",desc:"Agendas, facilitation, note-taking, follow-ups",minutes:20},{title:"Presentation Skills",desc:"Structure, slides, delivery, handling Q&A",minutes:25},{title:"Cross-Cultural Communication",desc:"Cultural awareness, language barriers, adaptation",minutes:20}]},
  {name:"Influence & Networking", topics:[{title:"Negotiation Basics",desc:"BATNA, win-win, anchoring, distributive vs integrative",minutes:25},{title:"Persuasion Techniques",desc:"Reciprocity, social proof, scarcity, likability",minutes:20},{title:"Professional Networking",desc:"Building connections, elevator pitch, follow-up",minutes:20},{title:"Personal Brand Communication",desc:"Consistent messaging, online presence, LinkedIn",minutes:20}]}
]}
};
