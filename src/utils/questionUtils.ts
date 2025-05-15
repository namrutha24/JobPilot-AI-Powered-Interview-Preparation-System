// Technical interview questions for various domains and roles

type Question = {
  id: number;
  question: string;
  keywords: string[];
  difficulty: string;
  domain: string;
  role: string;
};

// Information Technology - Software Engineer questions
const softwareEngineerQuestions: Question[] = [
  // Beginner
  {
    id: 101,
    question: "Explain the difference between == and === in JavaScript.",
    keywords: ["loose equality", "strict equality", "type coercion", "comparison", "type checking"],
    difficulty: "beginner",
    domain: "it",
    role: "software-engineer"
  },
  {
    id: 102,
    question: "What is the difference between let, const, and var in JavaScript?",
    keywords: ["scope", "hoisting", "block", "reassignment", "declaration"],
    difficulty: "beginner",
    domain: "it",
    role: "software-engineer"
  },
  {
    id: 103,
    question: "Explain what a REST API is and its key principles.",
    keywords: ["representational", "stateless", "resource", "http", "endpoints", "json"],
    difficulty: "beginner",
    domain: "it",
    role: "software-engineer"
  },
  {
    id: 104,
    question: "What is the box model in CSS?",
    keywords: ["content", "padding", "border", "margin", "box-sizing", "width", "height"],
    difficulty: "beginner",
    domain: "it",
    role: "software-engineer"
  },
  {
    id: 105,
    question: "Explain the concept of responsive design in web development.",
    keywords: ["media queries", "viewport", "fluid grid", "flexible images", "breakpoints", "mobile-first"],
    difficulty: "beginner",
    domain: "it",
    role: "software-engineer"
  },
  {
    id: 106,
    question: "What is the difference between HTML and HTML5?",
    keywords: ["semantic elements", "canvas", "local storage", "offline applications", "multimedia", "form enhancements"],
    difficulty: "beginner",
    domain: "it",
    role: "software-engineer"
  },
  {
    id: 107,
    question: "Explain the concept of inheritance in object-oriented programming.",
    keywords: ["parent class", "child class", "subclass", "superclass", "override", "extend", "reuse"],
    difficulty: "beginner",
    domain: "it",
    role: "software-engineer"
  },
  // Intermediate
  {
    id: 108,
    question: "Describe the differences between optimistic and pessimistic concurrency control in databases.",
    keywords: ["locks", "conflicts", "transactions", "performance", "consistency", "versioning"],
    difficulty: "intermediate",
    domain: "it",
    role: "software-engineer"
  },
  {
    id: 109,
    question: "Explain the concept of closures in JavaScript and provide a practical example.",
    keywords: ["scope", "lexical", "encapsulation", "private variables", "memory", "function"],
    difficulty: "intermediate",
    domain: "it",
    role: "software-engineer"
  },
  {
    id: 110,
    question: "What are the principles of SOLID in object-oriented programming?",
    keywords: ["single responsibility", "open-closed", "liskov substitution", "interface segregation", "dependency inversion"],
    difficulty: "intermediate",
    domain: "it",
    role: "software-engineer"
  },
  {
    id: 111,
    question: "Explain the difference between client-side and server-side rendering in web applications.",
    keywords: ["SEO", "performance", "hydration", "time to interactive", "SPA", "SSR"],
    difficulty: "intermediate",
    domain: "it",
    role: "software-engineer"
  },
  {
    id: 112,
    question: "What is a callback hell in JavaScript and how can you avoid it?",
    keywords: ["promises", "async/await", "nesting", "readability", "error handling", "control flow"],
    difficulty: "intermediate",
    domain: "it",
    role: "software-engineer"
  },
  {
    id: 113,
    question: "Explain the concept of database normalization with examples.",
    keywords: ["normal forms", "redundancy", "anomalies", "functional dependencies", "primary key", "foreign key"],
    difficulty: "intermediate",
    domain: "it",
    role: "software-engineer"
  },
  {
    id: 114,
    question: "What are WebSockets and how do they differ from HTTP requests?",
    keywords: ["real-time", "bidirectional", "persistent connection", "full-duplex", "handshake", "polling"],
    difficulty: "intermediate",
    domain: "it",
    role: "software-engineer"
  },
  {
    id: 115,
    question: "Explain the concept of virtual DOM in frameworks like React.",
    keywords: ["performance", "reconciliation", "diffing", "render", "updates", "efficiency"],
    difficulty: "intermediate",
    domain: "it",
    role: "software-engineer"
  },
  // Advanced
  {
    id: 116,
    question: "Explain the CAP theorem and its implications for distributed database systems.",
    keywords: ["consistency", "availability", "partition tolerance", "trade-offs", "distributed systems"],
    difficulty: "advanced",
    domain: "it",
    role: "software-engineer"
  },
  {
    id: 117,
    question: "Design a scalable system for a social media platform that can handle millions of users. Detail the architecture, database choices, and caching strategies.",
    keywords: ["microservices", "load balancing", "sharding", "caching", "nosql", "horizontal scaling"],
    difficulty: "advanced",
    domain: "it",
    role: "software-engineer"
  },
  {
    id: 118,
    question: "Explain how OAuth 2.0 works and its different flow types.",
    keywords: ["authorization", "tokens", "client credentials", "authorization code", "refresh token", "security"],
    difficulty: "advanced",
    domain: "it",
    role: "software-engineer"
  },
  {
    id: 119,
    question: "Discuss strategies for optimizing database query performance in high-traffic applications.",
    keywords: ["indexing", "query optimization", "execution plan", "denormalization", "caching", "partitioning"],
    difficulty: "advanced",
    domain: "it",
    role: "software-engineer"
  },
  {
    id: 120,
    question: "Explain the concept of event sourcing and CQRS architectural patterns.",
    keywords: ["command query responsibility segregation", "events", "immutability", "audit trail", "eventual consistency", "domain driven design"],
    difficulty: "advanced",
    domain: "it",
    role: "software-engineer"
  },
  {
    id: 121,
    question: "Discuss the approaches to handling concurrency in a distributed system.",
    keywords: ["locking", "eventual consistency", "consensus algorithms", "transactions", "optimistic concurrency", "conflict resolution"],
    difficulty: "advanced",
    domain: "it",
    role: "software-engineer"
  },
  {
    id: 122,
    question: "Explain how you would implement a secure authentication system that scales to millions of users.",
    keywords: ["hashing", "salting", "JWT", "OAuth", "rate limiting", "session management", "2FA"],
    difficulty: "advanced",
    domain: "it",
    role: "software-engineer"
  },
  {
    id: 123,
    question: "What are the advantages of using a microservices architecture?",
    keywords: ["scalability", "independent deployment", "fault isolation", "technology diversity", "organization alignment"],
    difficulty: "intermediate",
    domain: "it",
    role: "software-engineer"
  },
  {
    id: 124,
    question: "Explain the difference between authentication and authorization.",
    keywords: ["identity verification", "access control", "credentials", "roles", "permissions", "security"],
    difficulty: "beginner",
    domain: "it",
    role: "software-engineer"
  },
  {
    id: 125,
    question: "What is the purpose of unit testing?",
    keywords: ["code quality", "early detection", "isolation", "regression testing", "TDD", "confidence"],
    difficulty: "beginner",
    domain: "it",
    role: "software-engineer"
  },
  {
    id: 126,
    question: "Describe the differences between SQL and NoSQL databases.",
    keywords: ["relational", "schema", "scalability", "consistency", "ACID", "CAP theorem", "data models"],
    difficulty: "intermediate",
    domain: "it",
    role: "software-engineer"
  },
  {
    id: 127,
    question: "Explain the concept of dependency injection.",
    keywords: ["inversion of control", "loose coupling", "testability", "frameworks", "design patterns"],
    difficulty: "intermediate",
    domain: "it",
    role: "software-engineer"
  }
];

// Information Technology - Data Scientist questions
const dataScientistQuestions: Question[] = [
  // Beginner
  {
    id: 201,
    question: "Explain the difference between supervised and unsupervised learning with examples.",
    keywords: ["labeled data", "unlabeled", "classification", "regression", "clustering"],
    difficulty: "beginner",
    domain: "it",
    role: "data-scientist"
  },
  {
    id: 202,
    question: "What is the purpose of feature normalization in machine learning?",
    keywords: ["scaling", "standardization", "gradient descent", "convergence", "bias"],
    difficulty: "beginner",
    domain: "it",
    role: "data-scientist"
  },
  {
    id: 203,
    question: "Explain the concept of overfitting and how to prevent it.",
    keywords: ["regularization", "cross-validation", "training data", "validation", "generalization"],
    difficulty: "beginner",
    domain: "it",
    role: "data-scientist"
  },
  {
    id: 204,
    question: "What is the difference between correlation and causation?",
    keywords: ["relationship", "causality", "spurious", "confounding", "statistical", "inference"],
    difficulty: "beginner",
    domain: "it",
    role: "data-scientist"
  },
  {
    id: 205,
    question: "Explain what precision and recall are in the context of classification problems.",
    keywords: ["true positive", "false positive", "false negative", "F1 score", "accuracy", "metrics"],
    difficulty: "beginner",
    domain: "it",
    role: "data-scientist"
  },
  {
    id: 206,
    question: "What are the key differences between Python and R for data science?",
    keywords: ["libraries", "visualization", "statistics", "flexibility", "community", "industry"],
    difficulty: "beginner",
    domain: "it",
    role: "data-scientist"
  },
  {
    id: 207,
    question: "Explain the concept of dimensionality reduction and why it's important in machine learning.",
    keywords: ["PCA", "t-SNE", "curse of dimensionality", "visualization", "feature selection", "efficiency"],
    difficulty: "beginner",
    domain: "it",
    role: "data-scientist"
  },
  // Intermediate
  {
    id: 208,
    question: "Explain the bias-variance tradeoff in machine learning models.",
    keywords: ["overfitting", "underfitting", "generalization", "complexity", "error"],
    difficulty: "intermediate",
    domain: "it",
    role: "data-scientist"
  },
  {
    id: 209,
    question: "How would you handle class imbalance in a classification problem?",
    keywords: ["sampling", "SMOTE", "class weights", "ensemble", "evaluation metrics", "precision-recall"],
    difficulty: "intermediate",
    domain: "it",
    role: "data-scientist"
  },
  {
    id: 210,
    question: "Explain the differences between Decision Trees, Random Forests, and Gradient Boosting machines.",
    keywords: ["ensemble", "bagging", "boosting", "feature importance", "weak learners", "overfitting"],
    difficulty: "intermediate",
    domain: "it",
    role: "data-scientist"
  },
  {
    id: 211,
    question: "Describe how you would approach a time series forecasting problem.",
    keywords: ["seasonality", "trend", "stationarity", "ARIMA", "autocorrelation", "moving average"],
    difficulty: "intermediate",
    domain: "it",
    role: "data-scientist"
  },
  {
    id: 212,
    question: "Explain the concept of cross-validation and its importance in model evaluation.",
    keywords: ["k-fold", "train-test split", "generalization", "overfitting", "model selection", "hyperparameters"],
    difficulty: "intermediate",
    domain: "it",
    role: "data-scientist"
  },
  {
    id: 213,
    question: "What are the main components of a recommendation system? Explain different approaches.",
    keywords: ["collaborative filtering", "content-based", "hybrid", "matrix factorization", "cold start", "user-item"],
    difficulty: "intermediate",
    domain: "it",
    role: "data-scientist"
  },
  {
    id: 214,
    question: "How would you detect and handle outliers in your dataset?",
    keywords: ["z-score", "IQR", "boxplot", "robust statistics", "winsorizing", "anomaly detection"],
    difficulty: "intermediate",
    domain: "it",
    role: "data-scientist"
  },
  // Advanced
  {
    id: 215,
    question: "Describe the mathematics behind gradient descent optimization and its variants.",
    keywords: ["learning rate", "stochastic", "momentum", "adam", "partial derivatives"],
    difficulty: "advanced",
    domain: "it",
    role: "data-scientist"
  },
  {
    id: 216,
    question: "Explain how transformers work in modern NLP and their advantages over RNNs.",
    keywords: ["attention", "self-attention", "parallelization", "bert", "embeddings", "positional encoding"],
    difficulty: "advanced",
    domain: "it",
    role: "data-scientist"
  },
  {
    id: 217,
    question: "Describe techniques for explaining black-box machine learning models.",
    keywords: ["SHAP", "LIME", "feature importance", "partial dependence", "interpretability", "explainable AI"],
    difficulty: "advanced",
    domain: "it",
    role: "data-scientist"
  },
  {
    id: 218,
    question: "Discuss the challenges and approaches for deploying machine learning models in a production environment.",
    keywords: ["CI/CD", "model versioning", "A/B testing", "monitoring", "scaling", "concept drift"],
    difficulty: "advanced",
    domain: "it",
    role: "data-scientist"
  },
  {
    id: 219,
    question: "Explain the mathematics behind Support Vector Machines and kernel tricks.",
    keywords: ["hyperplane", "margin", "dual problem", "lagrangian", "non-linear", "feature space"],
    difficulty: "advanced",
    domain: "it",
    role: "data-scientist"
  },
  {
    id: 220,
    question: "How would you apply deep learning techniques to solve a complex computer vision problem?",
    keywords: ["CNN", "transfer learning", "data augmentation", "object detection", "segmentation", "feature extraction"],
    difficulty: "advanced",
    domain: "it",
    role: "data-scientist"
  },
  {
    id: 221,
    question: "Discuss the ethical considerations and biases in machine learning models and how to address them.",
    keywords: ["fairness", "transparency", "accountability", "disparate impact", "representation", "bias mitigation"],
    difficulty: "advanced",
    domain: "it",
    role: "data-scientist"
  },
  {
    id: 222,
    question: "What is the difference between L1 and L2 regularization?",
    keywords: ["lasso", "ridge", "feature selection", "sparsity", "coefficients", "overfitting"],
    difficulty: "intermediate",
    domain: "it",
    role: "data-scientist"
  },
  {
    id: 223,
    question: "Explain the concept of ensemble learning and its benefits.",
    keywords: ["bagging", "boosting", "random forest", "gradient boosting", "model averaging", "variance reduction"],
    difficulty: "intermediate",
    domain: "it",
    role: "data-scientist"
  },
  {
    id: 224,
    question: "How would you evaluate the performance of a clustering algorithm?",
    keywords: ["silhouette score", "inertia", "Davies-Bouldin index", "visual inspection", "domain knowledge"],
    difficulty: "intermediate",
    domain: "it",
    role: "data-scientist"
  },
  {
    id: 225,
    question: "What are the challenges of working with big data and how would you address them?",
    keywords: ["volume", "velocity", "variety", "veracity", "Hadoop", "Spark", "distributed computing"],
    difficulty: "advanced",
    domain: "it",
    role: "data-scientist"
  },
  {
    id: 226,
    question: "Explain the concept of transfer learning and its applications.",
    keywords: ["pre-trained models", "fine-tuning", "feature extraction", "domain adaptation", "image recognition", "NLP"],
    difficulty: "advanced",
    domain: "it",
    role: "data-scientist"
  }
];

// Information Technology - UX Designer questions
const uxDesignerQuestions: Question[] = [
  // Beginner
  {
    id: 301,
    question: "What is the difference between UX and UI design?",
    keywords: ["user experience", "user interface", "usability", "visuals", "research", "interaction"],
    difficulty: "beginner",
    domain: "it",
    role: "ux-designer"
  },
  {
    id: 302,
    question: "Explain what a user persona is and why it's important in UX design.",
    keywords: ["user research", "demographics", "goals", "behaviors", "empathy", "design decision"],
    difficulty: "beginner",
    domain: "it",
    role: "ux-designer"
  },
  {
    id: 303,
    question: "What is information architecture and why is it important?",
    keywords: ["organization", "structure", "categorization", "navigation", "hierarchy", "findability"],
    difficulty: "beginner",
    domain: "it",
    role: "ux-designer"
  },
  {
    id: 304,
    question: "Describe the process of creating a user journey map.",
    keywords: ["touchpoints", "emotions", "pain points", "stages", "interactions", "timeline"],
    difficulty: "beginner",
    domain: "it",
    role: "ux-designer"
  },
  {
    id: 305,
    question: "What are wireframes and why are they used in the design process?",
    keywords: ["skeleton", "layout", "low-fidelity", "structure", "prototyping", "feedback"],
    difficulty: "beginner",
    domain: "it",
    role: "ux-designer"
  },
  {
    id: 306,
    question: "Explain the concept of usability in UX design.",
    keywords: ["effectiveness", "efficiency", "satisfaction", "learnability", "memorability", "errors"],
    difficulty: "beginner",
    domain: "it",
    role: "ux-designer"
  },
  {
    id: 307,
    question: "What is the role of user research in the UX design process?",
    keywords: ["insights", "validation", "testing", "interviews", "surveys", "observations"],
    difficulty: "beginner",
    domain: "it",
    role: "ux-designer"
  },
  // Intermediate
  {
    id: 308,
    question: "Explain different types of user testing methods and when each is most appropriate.",
    keywords: ["usability testing", "A/B testing", "card sorting", "tree testing", "guerrilla testing", "heatmaps"],
    difficulty: "intermediate",
    domain: "it",
    role: "ux-designer"
  },
  {
    id: 309,
    question: "Describe the concept of accessibility in UX design and its importance.",
    keywords: ["WCAG", "screen readers", "color contrast", "keyboard navigation", "alt text", "inclusive design"],
    difficulty: "intermediate",
    domain: "it",
    role: "ux-designer"
  },
  {
    id: 310,
    question: "How do you incorporate user feedback into the iterative design process?",
    keywords: ["prototyping", "usability testing", "prioritization", "validation", "implementation", "refinement"],
    difficulty: "intermediate",
    domain: "it",
    role: "ux-designer"
  },
  {
    id: 311,
    question: "Explain the concept of design systems and their benefits.",
    keywords: ["consistency", "efficiency", "components", "patterns", "documentation", "scalability"],
    difficulty: "intermediate",
    domain: "it",
    role: "ux-designer"
  },
  {
    id: 312,
    question: "Describe how you would conduct a heuristic evaluation of a website or application.",
    keywords: ["Nielsen's heuristics", "expert review", "usability principles", "systematic", "checklist", "severity ratings"],
    difficulty: "intermediate",
    domain: "it",
    role: "ux-designer"
  },
  {
    id: 313,
    question: "What is information scent in UX design and why is it important for navigation?",
    keywords: ["wayfinding", "cognitive", "predictability", "labels", "clarity", "expectations"],
    difficulty: "intermediate",
    domain: "it",
    role: "ux-designer"
  },
  {
    id: 314,
    question: "How do you balance business goals with user needs in your design process?",
    keywords: ["stakeholders", "priority", "metrics", "compromise", "value", "strategy"],
    difficulty: "intermediate",
    domain: "it",
    role: "ux-designer"
  },
  // Advanced
  {
    id: 315,
    question: "How would you design a complex system with multiple user types and competing priorities?",
    keywords: ["user roles", "prioritization", "design system", "information architecture", "user flows", "modular design"],
    difficulty: "advanced",
    domain: "it",
    role: "ux-designer"
  },
  {
    id: 316,
    question: "Discuss the ethical considerations in UX design related to user data and persuasive design patterns.",
    keywords: ["dark patterns", "privacy", "consent", "transparency", "manipulation", "ethics"],
    difficulty: "advanced",
    domain: "it",
    role: "ux-designer"
  },
  {
    id: 317,
    question: "How would you approach designing for cross-cultural or global audiences?",
    keywords: ["localization", "cultural differences", "translation", "internationalization", "research", "adaptation"],
    difficulty: "advanced",
    domain: "it",
    role: "ux-designer"
  },
  {
    id: 318,
    question: "Discuss strategies for designing AI or machine learning-powered interfaces that are transparent and trustworthy.",
    keywords: ["explainability", "feedback", "confidence levels", "user control", "error handling", "mental models"],
    difficulty: "advanced",
    domain: "it",
    role: "ux-designer"
  },
  {
    id: 319,
    question: "How would you design a seamless omnichannel user experience across multiple platforms and devices?",
    keywords: ["consistency", "continuity", "responsive", "adaptive", "cross-platform", "device-specific"],
    difficulty: "advanced",
    domain: "it",
    role: "ux-designer"
  },
  {
    id: 320,
    question: "Analyze the impact of emerging technologies (AR, VR, voice interfaces) on UX design practices and principles.",
    keywords: ["immersive", "spatial", "multimodal", "conversational", "gesture", "interaction paradigms"],
    difficulty: "advanced",
    domain: "it",
    role: "ux-designer"
  },
  {
    id: 321,
    question: "Discuss approaches for measuring and quantifying UX success beyond traditional usability metrics.",
    keywords: ["engagement", "retention", "satisfaction", "NPS", "task completion", "business impact", "analytics"],
    difficulty: "advanced",
    domain: "it",
    role: "ux-designer"
  },
  {
    id: 322,
    question: "What is interaction design and how does it relate to UX design?",
    keywords: ["user behavior", "affordances", "feedback", "mental models", "usability", "accessibility"],
    difficulty: "intermediate",
    domain: "it",
    role: "ux-designer"
  },
  {
    id: 323,
    question: "Explain the concept of a design sprint and its benefits.",
    keywords: ["prototyping", "testing", "validation", "collaboration", "time-boxed", "user-centered"],
    difficulty: "intermediate",
    domain: "it",
    role: "ux-designer"
  },
  {
    id: 324,
    question: "How would you conduct user research to understand user needs and pain points?",
    keywords: ["interviews", "surveys", "usability testing", "analytics", "contextual inquiry", "ethnography"],
    difficulty: "intermediate",
    domain: "it",
    role: "ux-designer"
  },
  {
    id: 325,
    question: "What are the key principles of visual design and how do they impact UX?",
    keywords: ["typography", "color theory", "layout", "hierarchy", "imagery", "consistency", "accessibility"],
    difficulty: "advanced",
    domain: "it",
    role: "ux-designer"
  },
  {
    id: 326,
    question: "Discuss the challenges of designing for emerging technologies like AI and voice interfaces.",
    keywords: ["explainability", "trust", "natural language processing", "conversational design", "ethics"],
    difficulty: "advanced",
    domain: "it",
    role: "ux-designer"
  }
];

// Information Technology - Product Manager questions
const productManagerQuestions: Question[] = [
  // Beginner
  {
    id: 401,
    question: "What is the difference between a product roadmap and a product backlog?",
    keywords: ["strategic", "tactical", "prioritization", "timeline", "vision", "user stories"],
    difficulty: "beginner",
    domain: "it",
    role: "product-manager"
  },
  {
    id: 402,
    question: "Explain the concept of MVP (Minimum Viable Product) and its importance.",
    keywords: ["validation", "hypothesis", "feedback", "iteration", "lean", "risk reduction"],
    difficulty: "beginner",
    domain: "it",
    role: "product-manager"
  },
  {
    id: 403,
    question: "What is the role of a product manager in an agile development process?",
    keywords: ["backlog", "sprint planning", "stakeholders", "prioritization", "refinement", "vision"],
    difficulty: "beginner",
    domain: "it",
    role: "product-manager"
  },
  {
    id: 404,
    question: "Explain the difference between customer needs and product features.",
    keywords: ["problem", "solution", "job-to-be-done", "requirements", "benefits", "user-centered"],
    difficulty: "beginner",
    domain: "it",
    role: "product-manager"
  },
  {
    id: 405,
    question: "What is a user story and how do you write an effective one?",
    keywords: ["persona", "action", "benefit", "acceptance criteria", "format", "granularity"],
    difficulty: "beginner",
    domain: "it",
    role: "product-manager"
  },
  {
    id: 406,
    question: "How do you gather and prioritize product requirements?",
    keywords: ["user research", "feedback", "stakeholders", "impact", "effort", "value"],
    difficulty: "beginner",
    domain: "it",
    role: "product-manager"
  },
  {
    id: 407,
    question: "What is the difference between outputs and outcomes in product management?",
    keywords: ["features", "impact", "metrics", "deliverables", "value", "customer success"],
    difficulty: "beginner",
    domain: "it",
    role: "product-manager"
  },
  // Intermediate
  {
    id: 408,
    question: "How do you define and measure product success?",
    keywords: ["KPIs", "metrics", "goals", "OKRs", "retention", "engagement", "revenue"],
    difficulty: "intermediate",
    domain: "it",
    role: "product-manager"
  },
  {
    id: 409,
    question: "Describe your approach to prioritizing features in a product backlog.",
    keywords: ["value", "effort", "RICE", "MoSCoW", "impact", "customer feedback", "strategic alignment"],
    difficulty: "intermediate",
    domain: "it",
    role: "product-manager"
  },
  {
    id: 410,
    question: "How do you collaborate with design and engineering teams to deliver successful products?",
    keywords: ["communication", "collaboration", "requirements", "technical constraints", "trade-offs", "specifications"],
    difficulty: "intermediate",
    domain: "it",
    role: "product-manager"
  },
  {
    id: 411,
    question: "Explain how you would conduct effective user research to inform product decisions.",
    keywords: ["interviews", "surveys", "usability testing", "analytics", "feedback loops", "insights"],
    difficulty: "intermediate",
    domain: "it",
    role: "product-manager"
  },
  {
    id: 412,
    question: "How do you balance short-term fixes with long-term product vision?",
    keywords: ["technical debt", "roadmap", "stakeholder management", "prioritization", "strategy", "incremental"],
    difficulty: "intermediate",
    domain: "it",
    role: "product-manager"
  },
  {
    id: 413,
    question: "Describe how you would use data to make product decisions.",
    keywords: ["analytics", "A/B testing", "user behavior", "quantitative", "qualitative", "hypothesis validation"],
    difficulty: "intermediate",
    domain: "it",
    role: "product-manager"
  },
  {
    id: 414,
    question: "How do you manage stakeholder expectations throughout the product development process?",
    keywords: ["communication", "transparency", "alignment", "updates", "demos", "roadmap", "trade-offs"],
    difficulty: "intermediate",
    domain: "it",
    role: "product-manager"
  },
  // Advanced
  {
    id: 415,
    question: "How would you approach internationalization and localization for a global product?",
    keywords: ["cultural differences", "language", "market research", "UI adaptation", "regulation", "regional preferences"],
    difficulty: "advanced",
    domain: "it",
    role: "product-manager"
  },
  {
    id: 416,
    question: "Explain how you would manage a major product pivot based on changing market conditions.",
    keywords: ["stakeholder management", "resource allocation", "risk assessment", "communication", "validation", "strategy"],
    difficulty: "advanced",
    domain: "it",
    role: "product-manager"
  },
  {
    id: 417,
    question: "Describe how you would develop a pricing strategy for a new SaaS product.",
    keywords: ["value-based", "competitor analysis", "customer segments", "tiers", "freemium", "monetization"],
    difficulty: "advanced",
    domain: "it",
    role: "product-manager"
  },
  {
    id: 418,
    question: "How would you approach building a product in a highly regulated industry with strict compliance requirements?",
    keywords: ["legal", "compliance", "risk management", "documentation", "audit", "security", "privacy"],
    difficulty: "advanced",
    domain: "it",
    role: "product-manager"
  },
  {
    id: 419,
    question: "Discuss strategies for managing a mature product with declining growth.",
    keywords: ["lifecycle", "sunset", "pivot", "cost optimization", "customer retention", "market analysis"],
    difficulty: "advanced",
    domain: "it",
    role: "product-manager"
  },
  {
    id: 420,
    question: "How would you implement a customer feedback loop in the product development cycle?",
    keywords: ["user testing", "metrics", "continuous improvement", "beta program", "feedback channels", "prioritization"],
    difficulty: "advanced",
    domain: "it",
    role: "product-manager"
  },
  {
    id: 421,
    question: "Explain how you would create and manage a product strategy for an enterprise B2B solution.",
    keywords: ["value proposition", "competitive analysis", "market position", "user personas", "go-to-market", "ROI"],
    difficulty: "advanced",
    domain: "it",
    role: "product-manager"
  },
  {
    id: 422,
    question: "What metrics would you use to evaluate the success of a subscription-based product?",
    keywords: ["MRR", "churn rate", "LTV", "CAC", "retention", "engagement", "conversion"],
    difficulty: "intermediate",
    domain: "it",
    role: "product-manager"
  },
  {
    id: 423,
    question: "How do you incorporate competitive analysis into your product strategy?",
    keywords: ["benchmarking", "differentiation", "market gaps", "feature comparison", "positioning", "SWOT"],
    difficulty: "intermediate",
    domain: "it",
    role: "product-manager"
  }
];

// Information Technology - DevOps Engineer questions
const devOpsEngineerQuestions: Question[] = [
  // Beginner
  {
    id: 501,
    question: "Explain the concept of CI/CD and its benefits.",
    keywords: ["continuous integration", "continuous delivery", "automation", "deployment", "testing", "feedback"],
    difficulty: "beginner",
    domain: "it",
    role: "devops-engineer"
  },
  {
    id: 502,
    question: "What is infrastructure as code and why is it important?",
    keywords: ["automation", "reproducibility", "versioning", "terraform", "ansible", "consistency"],
    difficulty: "beginner",
    domain: "it",
    role: "devops-engineer"
  },
  {
    id: 503,
    question: "Explain the difference between containers and virtual machines.",
    keywords: ["isolation", "resources", "hypervisor", "docker", "virtualization", "overhead"],
    difficulty: "beginner",
    domain: "it",
    role: "devops-engineer"
  },
  {
    id: 504,
    question: "What is Docker and what problems does it solve?",
    keywords: ["containerization", "consistency", "isolation", "portability", "microservices", "deployment"],
    difficulty: "beginner",
    domain: "it",
    role: "devops-engineer"
  },
  {
    id: 505,
    question: "Describe the purpose of version control in software development.",
    keywords: ["git", "history", "collaboration", "branches", "merging", "tracking"],
    difficulty: "beginner",
    domain: "it",
    role: "devops-engineer"
  },
  // Intermediate
  {
    id: 506,
    question: "Explain the concept of blue-green deployments.",
    keywords: ["zero-downtime", "environment", "switching", "rollback", "testing", "production"],
    difficulty: "intermediate",
    domain: "it",
    role: "devops-engineer"
  },
  {
    id: 507,
    question: "How would you approach monitoring in a microservices architecture?",
    keywords: ["distributed tracing", "centralized logging", "metrics", "alerts", "service mesh", "observability"],
    difficulty: "intermediate",
    domain: "it",
    role: "devops-engineer"
  },
  {
    id: 508,
    question: "What is Kubernetes and what problems does it solve?",
    keywords: ["container orchestration", "scaling", "service discovery", "load balancing", "self-healing", "declarative"],
    difficulty: "intermediate",
    domain: "it",
    role: "devops-engineer"
  },
  {
    id: 509,
    question: "Describe strategies for securing Docker containers.",
    keywords: ["least privilege", "image scanning", "read-only", "user namespace", "secrets management", "network policies"],
    difficulty: "intermediate",
    domain: "it",
    role: "devops-engineer"
  },
  {
    id: 510,
    question: "How would you implement secrets management in a cloud environment?",
    keywords: ["vault", "KMS", "encryption", "rotation", "access control", "key management"],
    difficulty: "intermediate",
    domain: "it",
    role: "devops-engineer"
  },
  // Advanced
  {
    id: 511,
    question: "Design a disaster recovery strategy for a critical application with minimal downtime.",
    keywords: ["RTO", "RPO", "multi-region", "backup", "failover", "automated recovery", "resilience"],
    difficulty: "advanced",
    domain: "it",
    role: "devops-engineer"
  },
  {
    id: 512,
    question: "How would you architect a zero-downtime database migration?",
    keywords: ["blue-green", "dual writes", "replication", "schema changes", "validation", "rollback plan"],
    difficulty: "advanced",
    domain: "it",
    role: "devops-engineer"
  },
  {
    id: 513,
    question: "Explain service mesh architecture and its benefits for microservices.",
    keywords: ["istio", "linkerd", "sidecar", "traffic management", "security", "observability", "policy"],
    difficulty: "advanced",
    domain: "it",
    role: "devops-engineer"
  },
  {
    id: 514,
    question: "How would you implement GitOps for Kubernetes environments?",
    keywords: ["flux", "argocd", "declarative", "reconciliation", "git as source of truth", "automation"],
    difficulty: "advanced",
    domain: "it",
    role: "devops-engineer"
  },
  {
    id: 515,
    question: "Design an autoscaling strategy that balances performance and cost for a variable workload.",
    keywords: ["horizontal scaling", "vertical scaling", "predictive scaling", "metrics", "thresholds", "spot instances"],
    difficulty: "advanced",
    domain: "it",
    role: "devops-engineer"
  }
];

// Finance - Financial Analyst questions
const financialAnalystQuestions: Question[] = [
  // Beginner
  {
    id: 601,
    question: "Explain the three main financial statements and how they are interconnected.",
    keywords: ["income statement", "balance sheet", "cash flow statement", "net income", "retained earnings", "EBITDA"],
    difficulty: "beginner",
    domain: "finance",
    role: "financial-analyst"
  },
  {
    id: 602,
    question: "What is the difference between CAPEX and OPEX?",
    keywords: ["capital expenditure", "operational expenditure", "assets", "depreciation", "tax treatment", "budgeting"],
    difficulty: "beginner",
    domain: "finance",
    role: "financial-analyst"
  },
  {
    id: 603,
    question: "Explain the concept of time value of money.",
    keywords: ["present value", "future value", "discount rate", "compounding", "opportunity cost", "NPV"],
    difficulty: "beginner",
    domain: "finance",
    role: "financial-analyst"
  },
  {
    id: 604,
    question: "What is working capital and why is it important?",
    keywords: ["current assets", "current liabilities", "liquidity", "cash conversion cycle", "operational efficiency"],
    difficulty: "beginner",
    domain: "finance",
    role: "financial-analyst"
  },
  {
    id: 605,
    question: "Describe different methods of depreciation and their impact on financial statements.",
    keywords: ["straight line", "declining balance", "units of production", "tax implications", "EBITDA", "book value"],
    difficulty: "beginner",
    domain: "finance",
    role: "financial-analyst"
  },
  // Intermediate
  {
    id: 606,
    question: "How would you evaluate a potential investment opportunity using DCF analysis?",
    keywords: ["discount rate", "terminal value", "free cash flow", "WACC", "sensitivity analysis", "growth rate"],
    difficulty: "intermediate",
    domain: "finance",
    role: "financial-analyst"
  },
  {
    id: 607,
    question: "Explain the concept of leverage and its impact on a company's financial health.",
    keywords: ["debt-to-equity", "interest coverage", "financial risk", "ROE", "bankruptcy", "optimal capital structure"],
    difficulty: "intermediate",
    domain: "finance",
    role: "financial-analyst"
  },
  {
    id: 608,
    question: "How do you perform a sensitivity analysis in financial modeling?",
    keywords: ["variables", "scenarios", "what-if", "risk assessment", "data tables", "monte carlo"],
    difficulty: "intermediate",
    domain: "finance",
    role: "financial-analyst"
  },
  {
    id: 609,
    question: "Explain the calculation and significance of WACC (Weighted Average Cost of Capital).",
    keywords: ["cost of equity", "cost of debt", "capital structure", "market value", "risk premium", "beta"],
    difficulty: "intermediate",
    domain: "finance",
    role: "financial-analyst"
  },
  {
    id: 610,
    question: "How would you perform a variance analysis between actual and budgeted financial results?",
    keywords: ["favorable variance", "unfavorable variance", "price variance", "volume variance", "efficiency", "spending"],
    difficulty: "intermediate",
    domain: "finance",
    role: "financial-analyst"
  },
  // Advanced
  {
    id: 611,
    question: "How would you value a company with negative earnings or cash flows?",
    keywords: ["multiples", "comparable companies", "asset-based", "growth projections", "turnaround", "liquidation value"],
    difficulty: "advanced",
    domain: "finance",
    role: "financial-analyst"
  },
  {
    id: 612,
    question: "Explain how you would build a three-statement financial model from scratch.",
    keywords: ["assumptions", "drivers", "income statement", "balance sheet", "cash flow", "circularity", "forecasting"],
    difficulty: "advanced",
    domain: "finance",
    role: "financial-analyst"
  },
  {
    id: 613,
    question: "How would you evaluate the impact of an M&A transaction on the acquirer's financial statements?",
    keywords: ["accretion", "dilution", "goodwill", "synergies", "pro forma", "EPS impact", "deal structure"],
    difficulty: "advanced",
    domain: "finance",
    role: "financial-analyst"
  },
  {
    id: 614,
    question: "Discuss how global economic factors affect financial analysis and forecasting.",
    keywords: ["currency risk", "interest rates", "inflation", "GDP growth", "geopolitical", "scenario planning"],
    difficulty: "advanced",
    domain: "finance",
    role: "financial-analyst"
  },
  {
    id: 615,
    question: "How would you construct and interpret a Monte Carlo simulation for risk analysis?",
    keywords: ["probability distribution", "random variables", "iterations", "confidence intervals", "risk profile", "correlation"],
    difficulty: "advanced",
    domain: "finance",
    role: "financial-analyst"
  }
];

// Healthcare - Physician questions
const physicianQuestions: Question[] = [
  // Beginner
  {
    id: 701,
    question: "Explain the components of a comprehensive patient history and physical examination.",
    keywords: ["chief complaint", "HPI", "review of systems", "past medical history", "family history", "SOAP"],
    difficulty: "beginner",
    domain: "healthcare",
    role: "physician"
  },
  {
    id: 702,
    question: "What is the difference between primary, secondary, and tertiary prevention in healthcare?",
    keywords: ["risk factors", "screening", "early detection", "complications", "rehabilitation", "public health"],
    difficulty: "beginner",
    domain: "healthcare",
    role: "physician"
  },
  {
    id: 703,
    question: "Explain the concept of evidence-based medicine and its importance in clinical practice.",
    keywords: ["research", "clinical trials", "guidelines", "meta-analysis", "patient values", "best practices"],
    difficulty: "beginner",
    domain: "healthcare",
    role: "physician"
  },
  {
    id: 704,
    question: "What are the key components of informed consent?",
    keywords: ["disclosure", "capacity", "voluntariness", "understanding", "documentation", "risks and benefits"],
    difficulty: "beginner",
    domain: "healthcare",
    role: "physician"
  },
  {
    id: 705,
    question: "Describe the process of differential diagnosis in clinical reasoning.",
    keywords: ["symptoms", "hypothesis", "probability", "testing", "rule out", "clinical judgment"],
    difficulty: "beginner",
    domain: "healthcare",
    role: "physician"
  },
  // Intermediate
  {
    id: 706,
    question: "How would you approach the management of a patient with multiple chronic conditions?",
    keywords: ["polypharmacy", "prioritization", "care coordination", "treatment goals", "quality of life", "guidelines"],
    difficulty: "intermediate",
    domain: "healthcare",
    role: "physician"
  },
  {
    id: 707,
    question: "Explain how you interpret laboratory results in the context of the patient's clinical presentation.",
    keywords: ["reference ranges", "clinical correlation", "false positives", "trending", "pre-test probability", "sensitivity"],
    difficulty: "intermediate",
    domain: "healthcare",
    role: "physician"
  },
  {
    id: 708,
    question: "How would you handle a situation where a patient refuses recommended treatment?",
    keywords: ["autonomy", "capacity", "alternatives", "risks", "documentation", "therapeutic relationship"],
    difficulty: "intermediate",
    domain: "healthcare",
    role: "physician"
  },
  {
    id: 709,
    question: "Describe your approach to managing pain in patients with consideration for the opioid crisis.",
    keywords: ["multimodal", "non-pharmacologic", "risk assessment", "monitoring", "NSAIDS", "physical therapy"],
    difficulty: "intermediate",
    domain: "healthcare",
    role: "physician"
  },
  {
    id: 710,
    question: "How do social determinants of health affect patient outcomes, and how do you address them?",
    keywords: ["socioeconomic", "access", "housing", "food security", "community resources", "disparities"],
    difficulty: "intermediate",
    domain: "healthcare",
    role: "physician"
  },
  // Advanced
  {
    id: 711,
    question: "Discuss how emerging technologies like AI and machine learning are impacting clinical practice.",
    keywords: ["diagnostic algorithms", "clinical decision support", "predictive analytics", "imaging", "ethics", "validation"],
    difficulty: "advanced",
    domain: "healthcare",
    role: "physician"
  },
  {
    id: 712,
    question: "How would you implement and lead a quality improvement initiative in a clinical setting?",
    keywords: ["PDSA cycle", "outcomes measurement", "stakeholder engagement", "protocols", "benchmarking", "sustainability"],
    difficulty: "advanced",
    domain: "healthcare",
    role: "physician"
  },
  {
    id: 713,
    question: "Describe your approach to addressing medical errors and promoting a culture of safety.",
    keywords: ["disclosure", "root cause analysis", "systems thinking", "just culture", "reporting", "prevention"],
    difficulty: "advanced",
    domain: "healthcare",
    role: "physician"
  },
  {
    id: 714,
    question: "How would you approach the care of patients with rare diseases or conditions outside your expertise?",
    keywords: ["consultation", "research", "patient advocacy", "multidisciplinary", "care coordination", "lifelong learning"],
    difficulty: "advanced",
    domain: "healthcare",
    role: "physician"
  },
  {
    id: 715,
    question: "Discuss the ethical considerations in allocating scarce medical resources during a crisis.",
    keywords: ["triage", "utilitarianism", "equity", "transparency", "protocols", "vulnerability", "prioritization"],
    difficulty: "advanced",
    domain: "healthcare",
    role: "physician"
  }
];

// Education - Teacher questions
const teacherQuestions: Question[] = [
  // Beginner
  {
    id: 801,
    question: "Explain the difference between formative and summative assessment.",
    keywords: ["ongoing", "feedback", "improvement", "final", "evaluation", "grading"],
    difficulty: "beginner",
    domain: "education",
    role: "teacher"
  },
  {
    id: 802,
    question: "What strategies would you use to differentiate instruction in a diverse classroom?",
    keywords: ["learning styles", "ability levels", "interests", "flexible grouping", "scaffolding", "choice"],
    difficulty: "beginner",
    domain: "education",
    role: "teacher"
  },
  {
    id: 803,
    question: "How do you establish classroom rules and procedures?",
    keywords: ["consistency", "student input", "expectations", "logical consequences", "routines", "positive environment"],
    difficulty: "beginner",
    domain: "education",
    role: "teacher"
  },
  {
    id: 804,
    question: "Explain Bloom's taxonomy and how you would use it in lesson planning.",
    keywords: ["remembering", "understanding", "applying", "analyzing", "evaluating", "creating", "higher-order thinking"],
    difficulty: "beginner",
    domain: "education",
    role: "teacher"
  },
  {
    id: 805,
    question: "How do you communicate with parents about student progress?",
    keywords: ["conferences", "emails", "newsletters", "positive feedback", "concerns", "collaboration"],
    difficulty: "beginner",
    domain: "education",
    role: "teacher"
  },
  // Intermediate
  {
    id: 806,
    question: "How would you adapt your teaching for students with special needs or learning disabilities?",
    keywords: ["IEP", "accommodations", "modifications", "inclusive", "collaboration", "strengths-based"],
    difficulty: "intermediate",
    domain: "education",
    role: "teacher"
  },
  {
    id: 807,
    question: "Describe how you would use data to inform your instructional decisions.",
    keywords: ["assessment results", "patterns", "intervention", "enrichment", "progress monitoring", "goals"],
    difficulty: "intermediate",
    domain: "education",
    role: "teacher"
  },
  {
    id: 808,
    question: "How do you integrate technology meaningfully into your teaching?",
    keywords: ["SAMR model", "engagement", "digital literacy", "collaboration", "creation", "equity"],
    difficulty: "intermediate",
    domain: "education",
    role: "teacher"
  },
  {
    id: 809,
    question: "Explain your approach to classroom management for challenging behaviors.",
    keywords: ["positive reinforcement", "consistent consequences", "relationship building", "triggers", "self-regulation"],
    difficulty: "intermediate",
    domain: "education",
    role: "teacher"
  },
  {
    id: 810,
    question: "How do you incorporate culturally responsive teaching in your classroom?",
    keywords: ["diverse perspectives", "student backgrounds", "relevance", "equity", "representation", "inclusion"],
    difficulty: "intermediate",
    domain: "education",
    role: "teacher"
  },
  // Advanced
  {
    id: 811,
    question: "How would you lead a curriculum redesign process in your subject area?",
    keywords: ["standards", "backward design", "vertical alignment", "assessment", "collaboration", "research-based"],
    difficulty: "advanced",
    domain: "education",
    role: "teacher"
  },
  {
    id: 812,
    question: "Discuss approaches to creating equitable learning environments that address systemic barriers.",
    keywords: ["access", "bias", "opportunity gap", "representation", "cultural competence", "advocacy"],
    difficulty: "advanced",
    domain: "education",
    role: "teacher"
  },
  {
    id: 813,
    question: "How would you design and implement a project-based learning unit that meets multiple learning standards?",
    keywords: ["authentic", "inquiry", "collaboration", "assessment", "reflection", "cross-curricular", "real-world"],
    difficulty: "advanced",
    domain: "education",
    role: "teacher"
  },
  {
    id: 814,
    question: "Describe how you would mentor new teachers or lead professional development for colleagues.",
    keywords: ["modeling", "coaching", "feedback", "resources", "collaboration", "reflective practice"],
    difficulty: "advanced",
    domain: "education",
    role: "teacher"
  },
  {
    id: 815,
    question: "How would you approach teaching controversial or sensitive topics while maintaining an inclusive classroom?",
    keywords: ["multiple perspectives", "ground rules", "critical thinking", "primary sources", "respect", "objectivity"],
    difficulty: "advanced",
    domain: "education",
    role: "teacher"
  }
];

// HR Manager Questions
const hrManagerQuestions: Question[] = [
  // Beginner
  {
    id: 901,
    question: "What are the key responsibilities of an HR manager?",
    keywords: ["recruitment", "employee relations", "compliance", "training", "benefits"],
    difficulty: "beginner",
    domain: "management",
    role: "hr-manager"
  },
  {
    id: 902,
    question: "How would you handle a basic employee complaint?",
    keywords: ["conflict resolution", "documentation", "policies", "fairness", "communication"],
    difficulty: "beginner",
    domain: "management",
    role: "hr-manager"
  },
  {
    id: 903,
    question: "What are the essential components of an employee handbook?",
    keywords: ["policies", "procedures", "compliance", "communication", "guidelines"],
    difficulty: "beginner",
    domain: "management",
    role: "hr-manager"
  },
  {
    id: 904,
    question: "How would you conduct a basic performance review?",
    keywords: ["feedback", "documentation", "goals", "development", "communication"],
    difficulty: "beginner",
    domain: "management",
    role: "hr-manager"
  },
  {
    id: 905,
    question: "What are the key elements of an effective onboarding process?",
    keywords: ["orientation", "training", "documentation", "integration", "culture"],
    difficulty: "beginner",
    domain: "management",
    role: "hr-manager"
  },

  // Intermediate
  {
    id: 906,
    question: "How would you develop and implement an effective employee retention strategy?",
    keywords: ["engagement", "recognition", "development", "compensation", "culture"],
    difficulty: "intermediate",
    domain: "management",
    role: "hr-manager"
  },
  {
    id: 907,
    question: "Describe your approach to handling a complex employee relations issue.",
    keywords: ["investigation", "documentation", "legal compliance", "mediation", "resolution"],
    difficulty: "intermediate",
    domain: "management",
    role: "hr-manager"
  },
  {
    id: 908,
    question: "How would you design and implement a diversity and inclusion program?",
    keywords: ["training", "policies", "metrics", "leadership", "culture"],
    difficulty: "intermediate",
    domain: "management",
    role: "hr-manager"
  },
  {
    id: 909,
    question: "What strategies would you use to improve employee engagement?",
    keywords: ["communication", "recognition", "development", "feedback", "culture"],
    difficulty: "intermediate",
    domain: "management",
    role: "hr-manager"
  },
  {
    id: 910,
    question: "How would you handle a situation where an employee is not meeting performance expectations?",
    keywords: ["performance management", "documentation", "improvement plan", "feedback", "termination"],
    difficulty: "intermediate",
    domain: "management",
    role: "hr-manager"
  },

  // Advanced
  {
    id: 911,
    question: "How would you develop and implement a comprehensive talent management strategy?",
    keywords: ["succession planning", "leadership development", "performance management", "career paths", "retention"],
    difficulty: "advanced",
    domain: "management",
    role: "hr-manager"
  },
  {
    id: 912,
    question: "Describe your approach to organizational restructuring and change management.",
    keywords: ["communication", "stakeholder management", "transition planning", "employee support", "metrics"],
    difficulty: "advanced",
    domain: "management",
    role: "hr-manager"
  },
  {
    id: 913,
    question: "How would you design and implement a compensation and benefits strategy that aligns with business goals?",
    keywords: ["market analysis", "budgeting", "performance metrics", "employee value proposition", "compliance"],
    difficulty: "advanced",
    domain: "management",
    role: "hr-manager"
  },
  {
    id: 914,
    question: "What strategies would you use to develop future HR leaders within the organization?",
    keywords: ["succession planning", "mentoring", "development programs", "leadership competencies", "assessment"],
    difficulty: "advanced",
    domain: "management",
    role: "hr-manager"
  },
  {
    id: 915,
    question: "How would you measure and improve the effectiveness of HR programs and initiatives?",
    keywords: ["metrics", "analytics", "ROI", "benchmarking", "continuous improvement"],
    difficulty: "advanced",
    domain: "management",
    role: "hr-manager"
  }
];

// Recruiter Questions
const recruiterQuestions: Question[] = [
  // Beginner
  {
    id: 916,
    question: "What are the key steps in the recruitment process?",
    keywords: ["sourcing", "screening", "interviewing", "selection", "onboarding"],
    difficulty: "beginner",
    domain: "management",
    role: "recruiter"
  },
  {
    id: 917,
    question: "How would you write an effective job description?",
    keywords: ["requirements", "responsibilities", "qualifications", "company culture", "compensation"],
    difficulty: "beginner",
    domain: "management",
    role: "recruiter"
  },
  {
    id: 918,
    question: "What are the best practices for conducting a phone screening interview?",
    keywords: ["preparation", "questions", "evaluation", "communication", "documentation"],
    difficulty: "beginner",
    domain: "management",
    role: "recruiter"
  },
  {
    id: 919,
    question: "How would you use LinkedIn for candidate sourcing?",
    keywords: ["search", "networking", "messaging", "profile evaluation", "Boolean search"],
    difficulty: "beginner",
    domain: "management",
    role: "recruiter"
  },
  {
    id: 920,
    question: "What are the key elements of a good candidate experience?",
    keywords: ["communication", "timeliness", "feedback", "professionalism", "transparency"],
    difficulty: "beginner",
    domain: "management",
    role: "recruiter"
  },

  // Intermediate
  {
    id: 921,
    question: "How would you develop and implement an employer branding strategy?",
    keywords: ["social media", "career site", "employee value proposition", "content strategy", "metrics"],
    difficulty: "intermediate",
    domain: "management",
    role: "recruiter"
  },
  {
    id: 922,
    question: "Describe your approach to building and maintaining a talent pipeline.",
    keywords: ["networking", "relationship building", "candidate engagement", "database management", "sourcing"],
    difficulty: "intermediate",
    domain: "management",
    role: "recruiter"
  },
  {
    id: 923,
    question: "How would you handle a situation where a candidate declines an offer?",
    keywords: ["negotiation", "counter-offer", "feedback", "alternative candidates", "relationship management"],
    difficulty: "intermediate",
    domain: "management",
    role: "recruiter"
  },
  {
    id: 924,
    question: "What strategies would you use to improve diversity in your candidate pool?",
    keywords: ["sourcing", "partnerships", "bias reduction", "outreach", "metrics"],
    difficulty: "intermediate",
    domain: "management",
    role: "recruiter"
  },
  {
    id: 925,
    question: "How would you measure and improve the effectiveness of your recruitment process?",
    keywords: ["metrics", "time-to-fill", "quality of hire", "candidate experience", "cost-per-hire"],
    difficulty: "intermediate",
    domain: "management",
    role: "recruiter"
  },

  // Advanced
  {
    id: 926,
    question: "How would you develop and implement a strategic workforce planning initiative?",
    keywords: ["talent forecasting", "skills gap analysis", "succession planning", "recruitment strategy", "metrics"],
    difficulty: "advanced",
    domain: "management",
    role: "recruiter"
  },
  {
    id: 927,
    question: "Describe your approach to building and managing a recruitment team.",
    keywords: ["team structure", "performance management", "training", "metrics", "leadership"],
    difficulty: "advanced",
    domain: "management",
    role: "recruiter"
  },
  {
    id: 928,
    question: "How would you implement and optimize an applicant tracking system?",
    keywords: ["process automation", "reporting", "integration", "user adoption", "continuous improvement"],
    difficulty: "advanced",
    domain: "management",
    role: "recruiter"
  },
  {
    id: 929,
    question: "What strategies would you use to recruit for hard-to-fill positions?",
    keywords: ["sourcing", "employer branding", "compensation", "partnerships", "candidate experience"],
    difficulty: "advanced",
    domain: "management",
    role: "recruiter"
  },
  {
    id: 930,
    question: "How would you develop and implement a recruitment marketing strategy?",
    keywords: ["content strategy", "social media", "email marketing", "analytics", "conversion optimization"],
    difficulty: "advanced",
    domain: "management",
    role: "recruiter"
  }
];

// Marketing Manager Questions
const marketingManagerQuestions: Question[] = [
  // Beginner
  {
    id: 1001,
    question: "What are the key components of a marketing plan?",
    keywords: ["objectives", "target audience", "budget", "timeline", "metrics"],
    difficulty: "beginner",
    domain: "marketing",
    role: "marketing-manager"
  },
  {
    id: 1002,
    question: "How would you define and identify your target audience?",
    keywords: ["demographics", "psychographics", "market research", "segmentation", "personas"],
    difficulty: "beginner",
    domain: "marketing",
    role: "marketing-manager"
  },
  {
    id: 1003,
    question: "What are the basic elements of a successful social media strategy?",
    keywords: ["platforms", "content", "engagement", "scheduling", "analytics"],
    difficulty: "beginner",
    domain: "marketing",
    role: "marketing-manager"
  },
  {
    id: 1004,
    question: "How would you measure the success of a marketing campaign?",
    keywords: ["KPIs", "ROI", "analytics", "conversion", "engagement"],
    difficulty: "beginner",
    domain: "marketing",
    role: "marketing-manager"
  },
  {
    id: 1005,
    question: "What are the key elements of an effective email marketing campaign?",
    keywords: ["list management", "content", "design", "timing", "CTR"],
    difficulty: "beginner",
    domain: "marketing",
    role: "marketing-manager"
  },

  // Intermediate
  {
    id: 1006,
    question: "How would you develop and implement a content marketing strategy?",
    keywords: ["content calendar", "SEO", "distribution", "engagement", "conversion"],
    difficulty: "intermediate",
    domain: "marketing",
    role: "marketing-manager"
  },
  {
    id: 1007,
    question: "Describe your approach to managing a marketing budget effectively.",
    keywords: ["allocation", "ROI", "prioritization", "tracking", "optimization"],
    difficulty: "intermediate",
    domain: "marketing",
    role: "marketing-manager"
  },
  {
    id: 1008,
    question: "How would you handle a PR crisis for your brand?",
    keywords: ["communication", "response time", "stakeholders", "reputation", "recovery"],
    difficulty: "intermediate",
    domain: "marketing",
    role: "marketing-manager"
  },
  {
    id: 1009,
    question: "What strategies would you use to improve brand awareness?",
    keywords: ["positioning", "messaging", "channels", "partnerships", "consistency"],
    difficulty: "intermediate",
    domain: "marketing",
    role: "marketing-manager"
  },
  {
    id: 1010,
    question: "How would you develop and implement a digital marketing strategy?",
    keywords: ["SEO", "PPC", "social media", "email", "analytics"],
    difficulty: "intermediate",
    domain: "marketing",
    role: "marketing-manager"
  },

  // Advanced
  {
    id: 1011,
    question: "How would you develop and implement an integrated marketing communications strategy?",
    keywords: ["channels", "messaging", "consistency", "customer journey", "measurement"],
    difficulty: "advanced",
    domain: "marketing",
    role: "marketing-manager"
  },
  {
    id: 1012,
    question: "Describe your approach to developing and managing a global marketing strategy.",
    keywords: ["localization", "cultural adaptation", "coordination", "resources", "compliance"],
    difficulty: "advanced",
    domain: "marketing",
    role: "marketing-manager"
  },
  {
    id: 1013,
    question: "How would you develop and implement a marketing automation strategy?",
    keywords: ["technology", "workflows", "personalization", "scaling", "analytics"],
    difficulty: "advanced",
    domain: "marketing",
    role: "marketing-manager"
  },
  {
    id: 1014,
    question: "What strategies would you use to develop and manage a customer loyalty program?",
    keywords: ["engagement", "retention", "value proposition", "analytics", "ROI"],
    difficulty: "advanced",
    domain: "marketing",
    role: "marketing-manager"
  },
  {
    id: 1015,
    question: "How would you develop and implement a data-driven marketing strategy?",
    keywords: ["analytics", "segmentation", "personalization", "testing", "optimization"],
    difficulty: "advanced",
    domain: "marketing",
    role: "marketing-manager"
  }
];

// Sales Manager Questions
const salesManagerQuestions: Question[] = [
  // Beginner
  {
    id: 1101,
    question: "What are the key components of a sales process?",
    keywords: ["prospecting", "qualification", "presentation", "objection handling", "closing"],
    difficulty: "beginner",
    domain: "sales",
    role: "sales-manager"
  },
  {
    id: 1102,
    question: "How would you set and track sales targets for your team?",
    keywords: ["KPIs", "metrics", "performance", "motivation", "reporting"],
    difficulty: "beginner",
    domain: "sales",
    role: "sales-manager"
  },
  {
    id: 1103,
    question: "What are the basic elements of an effective sales pitch?",
    keywords: ["value proposition", "customer needs", "differentiation", "presentation", "follow-up"],
    difficulty: "beginner",
    domain: "sales",
    role: "sales-manager"
  },
  {
    id: 1104,
    question: "How would you handle common sales objections?",
    keywords: ["listening", "understanding", "addressing concerns", "value demonstration", "closing"],
    difficulty: "beginner",
    domain: "sales",
    role: "sales-manager"
  },
  {
    id: 1105,
    question: "What are the key elements of a successful sales team structure?",
    keywords: ["roles", "territories", "compensation", "training", "support"],
    difficulty: "beginner",
    domain: "sales",
    role: "sales-manager"
  },

  // Intermediate
  {
    id: 1106,
    question: "How would you develop and implement a sales strategy for a new market?",
    keywords: ["market research", "targeting", "positioning", "pricing", "distribution"],
    difficulty: "intermediate",
    domain: "sales",
    role: "sales-manager"
  },
  {
    id: 1107,
    question: "Describe your approach to managing and motivating a sales team.",
    keywords: ["coaching", "incentives", "performance management", "development", "culture"],
    difficulty: "intermediate",
    domain: "sales",
    role: "sales-manager"
  },
  {
    id: 1108,
    question: "How would you handle a situation where the team is not meeting sales targets?",
    keywords: ["analysis", "coaching", "process improvement", "resource allocation", "motivation"],
    difficulty: "intermediate",
    domain: "sales",
    role: "sales-manager"
  },
  {
    id: 1109,
    question: "What strategies would you use to improve sales forecasting accuracy?",
    keywords: ["data analysis", "pipeline management", "trend analysis", "customer behavior", "market conditions"],
    difficulty: "intermediate",
    domain: "sales",
    role: "sales-manager"
  },
  {
    id: 1110,
    question: "How would you develop and implement a customer relationship management strategy?",
    keywords: ["retention", "loyalty", "upselling", "cross-selling", "satisfaction"],
    difficulty: "intermediate",
    domain: "sales",
    role: "sales-manager"
  },

  // Advanced
  {
    id: 1111,
    question: "How would you develop and implement a strategic account management program?",
    keywords: ["relationship building", "value creation", "partnership", "growth", "retention"],
    difficulty: "advanced",
    domain: "sales",
    role: "sales-manager"
  },
  {
    id: 1112,
    question: "Describe your approach to developing and managing a global sales strategy.",
    keywords: ["market entry", "localization", "coordination", "resources", "compliance"],
    difficulty: "advanced",
    domain: "sales",
    role: "sales-manager"
  },
  {
    id: 1113,
    question: "How would you develop and implement a sales enablement strategy?",
    keywords: ["training", "tools", "content", "processes", "technology"],
    difficulty: "advanced",
    domain: "sales",
    role: "sales-manager"
  },
  {
    id: 1114,
    question: "What strategies would you use to develop and manage a channel sales program?",
    keywords: ["partnerships", "incentives", "training", "support", "performance"],
    difficulty: "advanced",
    domain: "sales",
    role: "sales-manager"
  },
  {
    id: 1115,
    question: "How would you develop and implement a data-driven sales strategy?",
    keywords: ["analytics", "predictive modeling", "segmentation", "optimization", "automation"],
    difficulty: "advanced",
    domain: "sales",
    role: "sales-manager"
  }
];

// New: Account Executive Questions
const accountExecutiveQuestions: Question[] = [
  // 10-15 realistic questions for Account Executive (various levels)
  { id: 12001, question: "Describe your approach to prospecting new clients.", keywords: ["prospecting", "lead generation", "outreach"], difficulty: "beginner", domain: "sales", role: "account-executive" },
  { id: 12002, question: "How do you handle objections during a sales call?", keywords: ["objection handling", "sales call", "negotiation"], difficulty: "beginner", domain: "sales", role: "account-executive" },
  { id: 12003, question: "Explain the sales funnel and where you focus your efforts.", keywords: ["sales funnel", "pipeline", "conversion"], difficulty: "intermediate", domain: "sales", role: "account-executive" },
  { id: 12004, question: "How do you prioritize leads?", keywords: ["lead scoring", "prioritization", "CRM"], difficulty: "intermediate", domain: "sales", role: "account-executive" },
  { id: 12005, question: "Describe a time you closed a difficult deal.", keywords: ["closing", "negotiation", "case study"], difficulty: "advanced", domain: "sales", role: "account-executive" },
  { id: 12006, question: "What CRM tools have you used?", keywords: ["CRM", "tools", "sales process"], difficulty: "beginner", domain: "sales", role: "account-executive" },
  { id: 12007, question: "How do you manage your sales pipeline?", keywords: ["pipeline", "management", "forecasting"], difficulty: "intermediate", domain: "sales", role: "account-executive" },
  { id: 12008, question: "What metrics do you track for sales performance?", keywords: ["metrics", "KPIs", "performance"], difficulty: "intermediate", domain: "sales", role: "account-executive" },
  { id: 12009, question: "How do you build long-term relationships with clients?", keywords: ["relationship", "retention", "trust"], difficulty: "advanced", domain: "sales", role: "account-executive" },
  { id: 12010, question: "Describe your experience with upselling and cross-selling.", keywords: ["upselling", "cross-selling", "revenue"], difficulty: "advanced", domain: "sales", role: "account-executive" },
  { id: 12011, question: "How do you handle rejection in sales?", keywords: ["rejection", "resilience", "mindset"], difficulty: "beginner", domain: "sales", role: "account-executive" },
  { id: 12012, question: "Explain your approach to territory management.", keywords: ["territory", "planning", "strategy"], difficulty: "intermediate", domain: "sales", role: "account-executive" },
  { id: 12013, question: "What is your experience with B2B vs B2C sales?", keywords: ["B2B", "B2C", "differences"], difficulty: "advanced", domain: "sales", role: "account-executive" }
];

// New: Sales Consultant Questions
const salesConsultantQuestions: Question[] = [
  // 10-15 realistic questions for Sales Consultant (various levels)
  { id: 12101, question: "What is consultative selling?", keywords: ["consultative", "solution", "needs analysis"], difficulty: "beginner", domain: "sales", role: "sales-consultant" },
  { id: 12102, question: "How do you tailor your pitch to different clients?", keywords: ["customization", "pitch", "client needs"], difficulty: "intermediate", domain: "sales", role: "sales-consultant" },
  { id: 12103, question: "Describe a time you solved a client's problem with your product.", keywords: ["problem solving", "case study", "solution"], difficulty: "advanced", domain: "sales", role: "sales-consultant" },
  { id: 12104, question: "How do you stay updated on industry trends?", keywords: ["industry", "trends", "research"], difficulty: "beginner", domain: "sales", role: "sales-consultant" },
  { id: 12105, question: "What is your approach to handling complex sales cycles?", keywords: ["complex sales", "cycle", "strategy"], difficulty: "advanced", domain: "sales", role: "sales-consultant" },
  { id: 12106, question: "How do you collaborate with technical teams?", keywords: ["collaboration", "technical", "cross-functional"], difficulty: "intermediate", domain: "sales", role: "sales-consultant" },
  { id: 12107, question: "What tools do you use for sales presentations?", keywords: ["tools", "presentation", "software"], difficulty: "beginner", domain: "sales", role: "sales-consultant" },
  { id: 12108, question: "How do you handle price objections?", keywords: ["price", "objection", "negotiation"], difficulty: "intermediate", domain: "sales", role: "sales-consultant" },
  { id: 12109, question: "Describe your experience with solution selling.", keywords: ["solution selling", "consultative", "approach"], difficulty: "advanced", domain: "sales", role: "sales-consultant" },
  { id: 12110, question: "How do you measure client satisfaction?", keywords: ["client satisfaction", "metrics", "feedback"], difficulty: "intermediate", domain: "sales", role: "sales-consultant" },
  { id: 12111, question: "What is your follow-up process after a sale?", keywords: ["follow-up", "post-sale", "retention"], difficulty: "beginner", domain: "sales", role: "sales-consultant" },
  { id: 12112, question: "How do you handle multiple clients at once?", keywords: ["multitasking", "organization", "prioritization"], difficulty: "intermediate", domain: "sales", role: "sales-consultant" },
  { id: 12113, question: "What is your experience with international sales?", keywords: ["international", "global", "cross-border"], difficulty: "advanced", domain: "sales", role: "sales-consultant" }
];

// Mechanical Engineer Questions
const mechanicalEngineerQuestions: Question[] = [
  // Beginner
  {
    id: 1201,
    question: "What are the fundamental principles of mechanical engineering?",
    keywords: ["thermodynamics", "mechanics", "materials", "fluid dynamics", "heat transfer"],
    difficulty: "beginner",
    domain: "engineering",
    role: "mechanical-engineer"
  },
  {
    id: 1202,
    question: "How would you approach designing a simple mechanical component?",
    keywords: ["requirements", "materials", "stress analysis", "manufacturing", "testing"],
    difficulty: "beginner",
    domain: "engineering",
    role: "mechanical-engineer"
  },
  {
    id: 1203,
    question: "What are the key considerations in material selection for mechanical design?",
    keywords: ["strength", "durability", "cost", "manufacturability", "environmental factors"],
    difficulty: "beginner",
    domain: "engineering",
    role: "mechanical-engineer"
  },
  {
    id: 1204,
    question: "How would you perform basic stress analysis on a mechanical component?",
    keywords: ["loads", "forces", "moments", "safety factors", "failure modes"],
    difficulty: "beginner",
    domain: "engineering",
    role: "mechanical-engineer"
  },
  {
    id: 1205,
    question: "What are the basic principles of mechanical systems maintenance?",
    keywords: ["preventive", "predictive", "corrective", "lubrication", "inspection"],
    difficulty: "beginner",
    domain: "engineering",
    role: "mechanical-engineer"
  },

  // Intermediate
  {
    id: 1206,
    question: "How would you design and optimize a mechanical system for energy efficiency?",
    keywords: ["heat transfer", "fluid dynamics", "power consumption", "materials", "control systems"],
    difficulty: "intermediate",
    domain: "engineering",
    role: "mechanical-engineer"
  },
  {
    id: 1207,
    question: "Describe your approach to failure analysis in mechanical systems.",
    keywords: ["root cause", "materials", "stress", "fatigue", "prevention"],
    difficulty: "intermediate",
    domain: "engineering",
    role: "mechanical-engineer"
  },
  {
    id: 1208,
    question: "How would you implement a condition monitoring system for mechanical equipment?",
    keywords: ["sensors", "data analysis", "predictive maintenance", "vibration", "temperature"],
    difficulty: "intermediate",
    domain: "engineering",
    role: "mechanical-engineer"
  },
  {
    id: 1209,
    question: "What strategies would you use to improve the reliability of mechanical systems?",
    keywords: ["design", "materials", "maintenance", "monitoring", "quality control"],
    difficulty: "intermediate",
    domain: "engineering",
    role: "mechanical-engineer"
  },
  {
    id: 1210,
    question: "How would you approach the design of a complex mechanical assembly?",
    keywords: ["integration", "tolerances", "manufacturing", "assembly", "testing"],
    difficulty: "intermediate",
    domain: "engineering",
    role: "mechanical-engineer"
  },

  // Advanced
  {
    id: 1211,
    question: "How would you develop and implement a mechanical system for extreme environments?",
    keywords: ["materials", "thermal management", "reliability", "testing", "safety"],
    difficulty: "advanced",
    domain: "engineering",
    role: "mechanical-engineer"
  },
  {
    id: 1212,
    question: "Describe your approach to developing and implementing advanced manufacturing processes.",
    keywords: ["automation", "quality", "efficiency", "cost reduction", "innovation"],
    difficulty: "advanced",
    domain: "engineering",
    role: "mechanical-engineer"
  },
  {
    id: 1213,
    question: "How would you develop and implement a mechanical system for sustainable energy production?",
    keywords: ["renewable energy", "efficiency", "materials", "integration", "maintenance"],
    difficulty: "advanced",
    domain: "engineering",
    role: "mechanical-engineer"
  },
  {
    id: 1214,
    question: "What strategies would you use to develop and implement advanced robotics systems?",
    keywords: ["kinematics", "dynamics", "control", "sensors", "integration"],
    difficulty: "advanced",
    domain: "engineering",
    role: "mechanical-engineer"
  },
  {
    id: 1215,
    question: "How would you develop and implement a mechanical system for aerospace applications?",
    keywords: ["lightweight", "reliability", "safety", "performance", "testing"],
    difficulty: "advanced",
    domain: "engineering",
    role: "mechanical-engineer"
  }
];

// Management Consultant Questions
const managementConsultantQuestions: Question[] = [
  // Beginner
  {
    id: 1301,
    question: "What are the key steps in the consulting process?",
    keywords: ["problem definition", "analysis", "solution development", "implementation", "evaluation"],
    difficulty: "beginner",
    domain: "consulting",
    role: "management-consultant"
  },
  {
    id: 1302,
    question: "How would you approach gathering and analyzing client requirements?",
    keywords: ["interviews", "data collection", "analysis", "documentation", "validation"],
    difficulty: "beginner",
    domain: "consulting",
    role: "management-consultant"
  },
  {
    id: 1303,
    question: "What are the basic elements of a consulting proposal?",
    keywords: ["scope", "objectives", "methodology", "timeline", "deliverables"],
    difficulty: "beginner",
    domain: "consulting",
    role: "management-consultant"
  },
  {
    id: 1304,
    question: "How would you handle a situation where the client disagrees with your recommendations?",
    keywords: ["communication", "persuasion", "evidence", "alternatives", "compromise"],
    difficulty: "beginner",
    domain: "consulting",
    role: "management-consultant"
  },
  {
    id: 1305,
    question: "What are the key elements of effective client communication?",
    keywords: ["listening", "clarity", "professionalism", "timeliness", "follow-up"],
    difficulty: "beginner",
    domain: "consulting",
    role: "management-consultant"
  },

  // Intermediate
  {
    id: 1306,
    question: "How would you develop and implement a change management strategy?",
    keywords: ["stakeholder analysis", "communication", "training", "resistance management", "monitoring"],
    difficulty: "intermediate",
    domain: "consulting",
    role: "management-consultant"
  },
  {
    id: 1307,
    question: "Describe your approach to conducting a business process analysis.",
    keywords: ["mapping", "bottlenecks", "efficiency", "improvement", "implementation"],
    difficulty: "intermediate",
    domain: "consulting",
    role: "management-consultant"
  },
  {
    id: 1308,
    question: "How would you handle a situation where the project scope needs to change?",
    keywords: ["impact analysis", "communication", "negotiation", "documentation", "approval"],
    difficulty: "intermediate",
    domain: "consulting",
    role: "management-consultant"
  },
  {
    id: 1309,
    question: "What strategies would you use to ensure successful project delivery?",
    keywords: ["planning", "monitoring", "risk management", "team management", "quality control"],
    difficulty: "intermediate",
    domain: "consulting",
    role: "management-consultant"
  },
  {
    id: 1310,
    question: "How would you develop and implement a performance improvement strategy?",
    keywords: ["metrics", "benchmarking", "analysis", "interventions", "monitoring"],
    difficulty: "intermediate",
    domain: "consulting",
    role: "management-consultant"
  },

  // Advanced
  {
    id: 1311,
    question: "How would you develop and implement a digital transformation strategy?",
    keywords: ["technology", "processes", "culture", "change management", "ROI"],
    difficulty: "advanced",
    domain: "consulting",
    role: "management-consultant"
  },
  {
    id: 1312,
    question: "Describe your approach to developing and implementing a corporate strategy.",
    keywords: ["analysis", "positioning", "growth", "implementation", "monitoring"],
    difficulty: "advanced",
    domain: "consulting",
    role: "management-consultant"
  },
  {
    id: 1313,
    question: "How would you develop and implement an organizational restructuring strategy?",
    keywords: ["analysis", "design", "communication", "implementation", "monitoring"],
    difficulty: "advanced",
    domain: "consulting",
    role: "management-consultant"
  },
  {
    id: 1314,
    question: "What strategies would you use to develop and implement a merger integration plan?",
    keywords: ["due diligence", "planning", "communication", "implementation", "monitoring"],
    difficulty: "advanced",
    domain: "consulting",
    role: "management-consultant"
  },
  {
    id: 1315,
    question: "How would you develop and implement a business turnaround strategy?",
    keywords: ["analysis", "restructuring", "cost reduction", "revenue growth", "implementation"],
    difficulty: "advanced",
    domain: "consulting",
    role: "management-consultant"
  }
];

// Mechanical Engineer: Add Electrical Engineer and Civil Engineer
const electricalEngineerQuestions: Question[] = [
  { id: 13001, question: "Explain Ohm's Law and its significance in circuit analysis.", keywords: ["Ohm's Law", "circuit", "voltage", "current", "resistance"], difficulty: "beginner", domain: "engineering", role: "electrical-engineer" },
  { id: 13002, question: "What are the main types of electrical machines?", keywords: ["motors", "generators", "transformers"], difficulty: "beginner", domain: "engineering", role: "electrical-engineer" },
  { id: 13003, question: "Describe the working principle of a transformer.", keywords: ["transformer", "induction", "AC", "voltage"], difficulty: "intermediate", domain: "engineering", role: "electrical-engineer" },
  { id: 13004, question: "How do you select a circuit breaker for a given application?", keywords: ["circuit breaker", "protection", "current rating"], difficulty: "intermediate", domain: "engineering", role: "electrical-engineer" },
  { id: 13005, question: "Explain the difference between AC and DC systems.", keywords: ["alternating current", "direct current", "applications"], difficulty: "beginner", domain: "engineering", role: "electrical-engineer" },
  { id: 13006, question: "What is power factor and why is it important?", keywords: ["power factor", "efficiency", "reactive power"], difficulty: "intermediate", domain: "engineering", role: "electrical-engineer" },
  { id: 13007, question: "Describe a time you troubleshooted a complex electrical system.", keywords: ["troubleshooting", "diagnosis", "case study"], difficulty: "advanced", domain: "engineering", role: "electrical-engineer" },
  { id: 13008, question: "How do you ensure electrical safety in industrial environments?", keywords: ["safety", "standards", "PPE", "lockout/tagout"], difficulty: "advanced", domain: "engineering", role: "electrical-engineer" },
  { id: 13009, question: "What are harmonics and how do they affect power systems?", keywords: ["harmonics", "distortion", "power quality"], difficulty: "advanced", domain: "engineering", role: "electrical-engineer" },
  { id: 13010, question: "Explain the use of PLCs in automation.", keywords: ["PLC", "automation", "control systems"], difficulty: "intermediate", domain: "engineering", role: "electrical-engineer" },
  { id: 13011, question: "What is the difference between a relay and a contactor?", keywords: ["relay", "contactor", "switching"], difficulty: "beginner", domain: "engineering", role: "electrical-engineer" },
  { id: 13012, question: "How do you design a basic lighting circuit?", keywords: ["lighting", "circuit design", "load calculation"], difficulty: "intermediate", domain: "engineering", role: "electrical-engineer" },
  { id: 13013, question: "Discuss the challenges of integrating renewable energy sources into the grid.", keywords: ["renewable energy", "grid", "integration", "challenges"], difficulty: "advanced", domain: "engineering", role: "electrical-engineer" }
];
const civilEngineerQuestions: Question[] = [
  { id: 13101, question: "What are the main types of foundations used in construction?", keywords: ["foundation", "construction", "types"], difficulty: "beginner", domain: "engineering", role: "civil-engineer" },
  { id: 13102, question: "Explain the concept of load-bearing structures.", keywords: ["load-bearing", "structure", "building"], difficulty: "beginner", domain: "engineering", role: "civil-engineer" },
  { id: 13103, question: "How do you calculate the load on a beam?", keywords: ["beam", "load calculation", "structural analysis"], difficulty: "intermediate", domain: "engineering", role: "civil-engineer" },
  { id: 13104, question: "Describe the process of soil testing before construction.", keywords: ["soil testing", "geotechnical", "construction"], difficulty: "intermediate", domain: "engineering", role: "civil-engineer" },
  { id: 13105, question: "What is the difference between RCC and PCC?", keywords: ["RCC", "PCC", "concrete"], difficulty: "beginner", domain: "engineering", role: "civil-engineer" },
  { id: 13106, question: "How do you ensure quality control in construction projects?", keywords: ["quality control", "construction", "standards"], difficulty: "intermediate", domain: "engineering", role: "civil-engineer" },
  { id: 13107, question: "Describe a challenging project you managed.", keywords: ["project management", "challenges", "case study"], difficulty: "advanced", domain: "engineering", role: "civil-engineer" },
  { id: 13108, question: "What are the main causes of structural failure?", keywords: ["structural failure", "causes", "prevention"], difficulty: "advanced", domain: "engineering", role: "civil-engineer" },
  { id: 13109, question: "Explain the importance of site safety.", keywords: ["site safety", "construction", "regulations"], difficulty: "beginner", domain: "engineering", role: "civil-engineer" },
  { id: 13110, question: "How do you estimate the cost of a construction project?", keywords: ["cost estimation", "budget", "construction"], difficulty: "intermediate", domain: "engineering", role: "civil-engineer" },
  { id: 13111, question: "What is the role of a civil engineer in environmental protection?", keywords: ["environment", "protection", "civil engineering"], difficulty: "advanced", domain: "engineering", role: "civil-engineer" },
  { id: 13112, question: "Describe the process of road construction.", keywords: ["road construction", "process", "steps"], difficulty: "beginner", domain: "engineering", role: "civil-engineer" },
  { id: 13113, question: "How do you manage subcontractors on a large project?", keywords: ["subcontractor", "management", "project"], difficulty: "advanced", domain: "engineering", role: "civil-engineer" }
];

// Education: Add Professor and Curriculum Developer
const professorQuestions: Question[] = [
  { id: 14001, question: "How do you design a syllabus for a new course?", keywords: ["syllabus", "course design", "planning"], difficulty: "beginner", domain: "education", role: "professor" },
  { id: 14002, question: "Describe your approach to student engagement in large lectures.", keywords: ["engagement", "lectures", "participation"], difficulty: "intermediate", domain: "education", role: "professor" },
  { id: 14003, question: "How do you assess student learning outcomes?", keywords: ["assessment", "learning outcomes", "evaluation"], difficulty: "intermediate", domain: "education", role: "professor" },
  { id: 14004, question: "What is your experience with online teaching?", keywords: ["online teaching", "remote learning", "technology"], difficulty: "beginner", domain: "education", role: "professor" },
  { id: 14005, question: "How do you support students with diverse learning needs?", keywords: ["diversity", "inclusion", "support"], difficulty: "advanced", domain: "education", role: "professor" },
  { id: 14006, question: "Describe a research project you have led.", keywords: ["research", "project", "leadership"], difficulty: "advanced", domain: "education", role: "professor" },
  { id: 14007, question: "How do you balance teaching, research, and service?", keywords: ["balance", "teaching", "research", "service"], difficulty: "advanced", domain: "education", role: "professor" },
  { id: 14008, question: "What strategies do you use for grading fairly?", keywords: ["grading", "fairness", "rubrics"], difficulty: "intermediate", domain: "education", role: "professor" },
  { id: 14009, question: "How do you mentor graduate students?", keywords: ["mentoring", "graduate students", "guidance"], difficulty: "advanced", domain: "education", role: "professor" },
  { id: 14010, question: "What is your philosophy of education?", keywords: ["philosophy", "education", "teaching"], difficulty: "beginner", domain: "education", role: "professor" }
];
const curriculumDeveloperQuestions: Question[] = [
  { id: 14101, question: "How do you approach curriculum mapping?", keywords: ["curriculum mapping", "planning", "alignment"], difficulty: "beginner", domain: "education", role: "curriculum-developer" },
  { id: 14102, question: "Describe your process for integrating technology into the curriculum.", keywords: ["technology", "integration", "curriculum"], difficulty: "intermediate", domain: "education", role: "curriculum-developer" },
  { id: 14103, question: "How do you evaluate the effectiveness of a curriculum?", keywords: ["evaluation", "effectiveness", "curriculum"], difficulty: "intermediate", domain: "education", role: "curriculum-developer" },
  { id: 14104, question: "What is backward design and how do you use it?", keywords: ["backward design", "curriculum", "planning"], difficulty: "beginner", domain: "education", role: "curriculum-developer" },
  { id: 14105, question: "How do you incorporate feedback from teachers?", keywords: ["feedback", "teachers", "collaboration"], difficulty: "intermediate", domain: "education", role: "curriculum-developer" },
  { id: 14106, question: "Describe a time you revised a curriculum based on student outcomes.", keywords: ["revision", "student outcomes", "improvement"], difficulty: "advanced", domain: "education", role: "curriculum-developer" },
  { id: 14107, question: "How do you ensure curriculum alignment with standards?", keywords: ["alignment", "standards", "curriculum"], difficulty: "intermediate", domain: "education", role: "curriculum-developer" },
  { id: 14108, question: "What is your experience with interdisciplinary curriculum?", keywords: ["interdisciplinary", "curriculum", "integration"], difficulty: "advanced", domain: "education", role: "curriculum-developer" },
  { id: 14109, question: "How do you address equity in curriculum development?", keywords: ["equity", "curriculum", "accessibility"], difficulty: "advanced", domain: "education", role: "curriculum-developer" },
  { id: 14110, question: "What tools do you use for curriculum planning?", keywords: ["tools", "planning", "curriculum"], difficulty: "beginner", domain: "education", role: "curriculum-developer" }
];

// HR: Add Compensation Analyst
const compensationAnalystQuestions: Question[] = [
  { id: 15001, question: "What is the role of a compensation analyst?", keywords: ["role", "compensation analyst", "HR"], difficulty: "beginner", domain: "hr", role: "compensation-analyst" },
  { id: 15002, question: "How do you conduct a market salary survey?", keywords: ["market survey", "salary", "benchmarking"], difficulty: "intermediate", domain: "hr", role: "compensation-analyst" },
  { id: 15003, question: "Explain the concept of pay equity.", keywords: ["pay equity", "fairness", "compensation"], difficulty: "beginner", domain: "hr", role: "compensation-analyst" },
  { id: 15004, question: "How do you analyze compensation data?", keywords: ["data analysis", "compensation", "statistics"], difficulty: "intermediate", domain: "hr", role: "compensation-analyst" },
  { id: 15005, question: "Describe a time you recommended a change to a compensation structure.", keywords: ["recommendation", "compensation structure", "case study"], difficulty: "advanced", domain: "hr", role: "compensation-analyst" },
  { id: 15006, question: "What tools or software do you use for compensation analysis?", keywords: ["tools", "software", "compensation analysis"], difficulty: "beginner", domain: "hr", role: "compensation-analyst" },
  { id: 15007, question: "How do you ensure compliance with compensation laws?", keywords: ["compliance", "laws", "regulations"], difficulty: "intermediate", domain: "hr", role: "compensation-analyst" },
  { id: 15008, question: "What is a job evaluation and how do you conduct one?", keywords: ["job evaluation", "methodology", "compensation"], difficulty: "intermediate", domain: "hr", role: "compensation-analyst" },
  { id: 15009, question: "How do you handle confidential compensation data?", keywords: ["confidentiality", "data handling", "ethics"], difficulty: "advanced", domain: "hr", role: "compensation-analyst" },
  { id: 15010, question: "Explain the difference between direct and indirect compensation.", keywords: ["direct compensation", "indirect compensation", "benefits"], difficulty: "beginner", domain: "hr", role: "compensation-analyst" },
  { id: 15011, question: "How do you support annual compensation review cycles?", keywords: ["annual review", "compensation cycle", "process"], difficulty: "intermediate", domain: "hr", role: "compensation-analyst" },
  { id: 15012, question: "Describe your experience with incentive and bonus programs.", keywords: ["incentive", "bonus", "programs"], difficulty: "advanced", domain: "hr", role: "compensation-analyst" },
  { id: 15013, question: "What is your approach to communicating compensation changes to employees?", keywords: ["communication", "compensation changes", "employees"], difficulty: "advanced", domain: "hr", role: "compensation-analyst" }
];

// Marketing: Add Digital Marketer and Brand Manager
const digitalMarketerQuestions: Question[] = [
  { id: 16001, question: "What is digital marketing and why is it important?", keywords: ["digital marketing", "importance", "overview"], difficulty: "beginner", domain: "marketing", role: "digital-marketer" },
  { id: 16002, question: "Describe the main channels used in digital marketing.", keywords: ["channels", "SEO", "PPC", "social media", "email"], difficulty: "beginner", domain: "marketing", role: "digital-marketer" },
  { id: 16003, question: "How do you measure the success of a digital campaign?", keywords: ["metrics", "KPIs", "analytics"], difficulty: "intermediate", domain: "marketing", role: "digital-marketer" },
  { id: 16004, question: "What is A/B testing and how do you use it?", keywords: ["A/B testing", "experimentation", "optimization"], difficulty: "intermediate", domain: "marketing", role: "digital-marketer" },
  { id: 16005, question: "Describe a successful digital campaign you managed.", keywords: ["campaign", "success", "case study"], difficulty: "advanced", domain: "marketing", role: "digital-marketer" },
  { id: 16006, question: "How do you approach SEO for a new website?", keywords: ["SEO", "strategy", "website"], difficulty: "intermediate", domain: "marketing", role: "digital-marketer" },
  { id: 16007, question: "What tools do you use for digital marketing?", keywords: ["tools", "platforms", "software"], difficulty: "beginner", domain: "marketing", role: "digital-marketer" },
  { id: 16008, question: "How do you allocate budget across digital channels?", keywords: ["budget", "allocation", "channels"], difficulty: "advanced", domain: "marketing", role: "digital-marketer" },
  { id: 16009, question: "What is your experience with marketing automation?", keywords: ["automation", "tools", "workflow"], difficulty: "intermediate", domain: "marketing", role: "digital-marketer" },
  { id: 16010, question: "How do you stay updated with digital marketing trends?", keywords: ["trends", "learning", "industry"], difficulty: "beginner", domain: "marketing", role: "digital-marketer" },
  { id: 16011, question: "Explain the difference between organic and paid traffic.", keywords: ["organic", "paid", "traffic"], difficulty: "beginner", domain: "marketing", role: "digital-marketer" },
  { id: 16012, question: "How do you handle negative feedback on social media?", keywords: ["social media", "feedback", "crisis management"], difficulty: "advanced", domain: "marketing", role: "digital-marketer" }
];
const brandManagerQuestions: Question[] = [
  { id: 16101, question: "What is brand management?", keywords: ["brand management", "definition", "overview"], difficulty: "beginner", domain: "marketing", role: "brand-manager" },
  { id: 16102, question: "How do you measure brand awareness?", keywords: ["brand awareness", "metrics", "measurement"], difficulty: "intermediate", domain: "marketing", role: "brand-manager" },
  { id: 16103, question: "Describe a time you repositioned a brand.", keywords: ["repositioning", "brand", "case study"], difficulty: "advanced", domain: "marketing", role: "brand-manager" },
  { id: 16104, question: "What is your approach to managing a brand crisis?", keywords: ["brand crisis", "management", "response"], difficulty: "advanced", domain: "marketing", role: "brand-manager" },
  { id: 16105, question: "How do you ensure brand consistency across channels?", keywords: ["consistency", "channels", "brand guidelines"], difficulty: "intermediate", domain: "marketing", role: "brand-manager" },
  { id: 16106, question: "What tools do you use for brand monitoring?", keywords: ["tools", "monitoring", "brand"], difficulty: "beginner", domain: "marketing", role: "brand-manager" },
  { id: 16107, question: "How do you collaborate with other teams to build a brand?", keywords: ["collaboration", "cross-functional", "brand building"], difficulty: "intermediate", domain: "marketing", role: "brand-manager" },
  { id: 16108, question: "What is your experience with launching new products?", keywords: ["product launch", "brand", "go-to-market"], difficulty: "advanced", domain: "marketing", role: "brand-manager" },
  { id: 16109, question: "How do you gather and use customer insights for brand strategy?", keywords: ["customer insights", "brand strategy", "research"], difficulty: "intermediate", domain: "marketing", role: "brand-manager" },
  { id: 16110, question: "Explain the importance of storytelling in branding.", keywords: ["storytelling", "branding", "communication"], difficulty: "beginner", domain: "marketing", role: "brand-manager" },
  { id: 16111, question: "How do you evaluate the ROI of brand campaigns?", keywords: ["ROI", "brand campaigns", "evaluation"], difficulty: "advanced", domain: "marketing", role: "brand-manager" }
];

// Consulting: Add Strategy Consultant and IT Consultant
const strategyConsultantQuestions: Question[] = [
  { id: 17001, question: "What is strategy consulting?", keywords: ["strategy consulting", "definition", "overview"], difficulty: "beginner", domain: "consulting", role: "strategy-consultant" },
  { id: 17002, question: "How do you conduct a market analysis?", keywords: ["market analysis", "research", "consulting"], difficulty: "intermediate", domain: "consulting", role: "strategy-consultant" },
  { id: 17003, question: "Describe a time you helped a client with a business transformation.", keywords: ["business transformation", "case study", "consulting"], difficulty: "advanced", domain: "consulting", role: "strategy-consultant" },
  { id: 17004, question: "What frameworks do you use for strategic planning?", keywords: ["frameworks", "strategic planning", "tools"], difficulty: "intermediate", domain: "consulting", role: "strategy-consultant" },
  { id: 17005, question: "How do you prioritize recommendations for a client?", keywords: ["prioritization", "recommendations", "consulting"], difficulty: "advanced", domain: "consulting", role: "strategy-consultant" },
  { id: 17006, question: "What is your approach to stakeholder management?", keywords: ["stakeholder management", "consulting", "communication"], difficulty: "intermediate", domain: "consulting", role: "strategy-consultant" },
  { id: 17007, question: "How do you measure the success of a consulting engagement?", keywords: ["success", "metrics", "consulting"], difficulty: "advanced", domain: "consulting", role: "strategy-consultant" },
  { id: 17008, question: "What is your experience with M&A projects?", keywords: ["M&A", "mergers", "acquisitions"], difficulty: "advanced", domain: "consulting", role: "strategy-consultant" },
  { id: 17009, question: "How do you handle client resistance to change?", keywords: ["resistance", "change management", "consulting"], difficulty: "intermediate", domain: "consulting", role: "strategy-consultant" },
  { id: 17010, question: "Explain the difference between corporate strategy and business strategy.", keywords: ["corporate strategy", "business strategy", "difference"], difficulty: "beginner", domain: "consulting", role: "strategy-consultant" }
];
const itConsultantQuestions: Question[] = [
  { id: 17101, question: "What is the role of an IT consultant?", keywords: ["IT consultant", "role", "overview"], difficulty: "beginner", domain: "consulting", role: "it-consultant" },
  { id: 17102, question: "How do you assess a client's IT infrastructure?", keywords: ["assessment", "IT infrastructure", "consulting"], difficulty: "intermediate", domain: "consulting", role: "it-consultant" },
  { id: 17103, question: "Describe a successful IT implementation project you led.", keywords: ["IT implementation", "project", "case study"], difficulty: "advanced", domain: "consulting", role: "it-consultant" },
  { id: 17104, question: "What is your experience with cloud migration?", keywords: ["cloud migration", "IT", "consulting"], difficulty: "intermediate", domain: "consulting", role: "it-consultant" },
  { id: 17105, question: "How do you ensure cybersecurity in client projects?", keywords: ["cybersecurity", "IT", "consulting"], difficulty: "advanced", domain: "consulting", role: "it-consultant" },
  { id: 17106, question: "What tools do you use for IT project management?", keywords: ["tools", "IT project management", "software"], difficulty: "beginner", domain: "consulting", role: "it-consultant" },
  { id: 17107, question: "How do you handle change management in IT projects?", keywords: ["change management", "IT", "consulting"], difficulty: "intermediate", domain: "consulting", role: "it-consultant" },
  { id: 17108, question: "Describe your approach to IT risk assessment.", keywords: ["risk assessment", "IT", "consulting"], difficulty: "advanced", domain: "consulting", role: "it-consultant" },
  { id: 17109, question: "How do you communicate technical concepts to non-technical stakeholders?", keywords: ["communication", "technical", "stakeholders"], difficulty: "intermediate", domain: "consulting", role: "it-consultant" },
  { id: 17110, question: "What is your experience with ERP implementations?", keywords: ["ERP", "implementation", "consulting"], difficulty: "advanced", domain: "consulting", role: "it-consultant" }
];

// Finance Domain - Investment Banker questions
const investmentBankerQuestions: Question[] = [
  // Beginner
  {
    id: 301,
    question: "What are the main components of a Discounted Cash Flow (DCF) analysis?",
    keywords: ["free cash flow", "discount rate", "terminal value", "WACC", "growth rate"],
    difficulty: "beginner",
    domain: "finance",
    role: "investment-banker"
  },
  {
    id: 302,
    question: "Explain the difference between enterprise value and equity value.",
    keywords: ["market cap", "debt", "cash", "valuation", "shareholders"],
    difficulty: "beginner",
    domain: "finance",
    role: "investment-banker"
  },
  {
    id: 303,
    question: "What are the key financial metrics used in company valuation?",
    keywords: ["EBITDA", "P/E ratio", "revenue multiples", "comparable analysis", "margins"],
    difficulty: "beginner",
    domain: "finance",
    role: "investment-banker"
  },
  // Intermediate
  {
    id: 304,
    question: "How would you structure a leveraged buyout (LBO) transaction?",
    keywords: ["debt financing", "equity contribution", "exit strategy", "returns", "valuation"],
    difficulty: "intermediate",
    domain: "finance",
    role: "investment-banker"
  },
  {
    id: 305,
    question: "Explain the process of conducting a comparable company analysis.",
    keywords: ["peer group", "valuation multiples", "financial metrics", "adjustments", "analysis"],
    difficulty: "intermediate",
    domain: "finance",
    role: "investment-banker"
  },
  // Advanced
  {
    id: 306,
    question: "How would you advise a client on a cross-border merger and acquisition?",
    keywords: ["due diligence", "regulatory compliance", "valuation", "integration", "risk management"],
    difficulty: "advanced",
    domain: "finance",
    role: "investment-banker"
  }
];

// Finance Domain - Risk Manager questions
const riskManagerQuestions: Question[] = [
  // Beginner
  {
    id: 401,
    question: "What are the main types of financial risks that organizations face?",
    keywords: ["market risk", "credit risk", "operational risk", "liquidity risk", "strategic risk"],
    difficulty: "beginner",
    domain: "finance",
    role: "risk-manager"
  },
  {
    id: 402,
    question: "Explain the concept of Value at Risk (VaR) and its importance.",
    keywords: ["statistical measure", "potential loss", "confidence level", "time horizon", "risk assessment"],
    difficulty: "beginner",
    domain: "finance",
    role: "risk-manager"
  },
  {
    id: 403,
    question: "What are the key components of a risk management framework?",
    keywords: ["risk identification", "assessment", "mitigation", "monitoring", "reporting"],
    difficulty: "beginner",
    domain: "finance",
    role: "risk-manager"
  },
  // Intermediate
  {
    id: 404,
    question: "How would you implement a stress testing program for a financial institution?",
    keywords: ["scenario analysis", "capital adequacy", "regulatory requirements", "risk factors", "reporting"],
    difficulty: "intermediate",
    domain: "finance",
    role: "risk-manager"
  },
  {
    id: 405,
    question: "Describe your approach to developing and maintaining risk policies and procedures.",
    keywords: ["documentation", "compliance", "review process", "stakeholder engagement", "implementation"],
    difficulty: "intermediate",
    domain: "finance",
    role: "risk-manager"
  },
  // Advanced
  {
    id: 406,
    question: "How would you design and implement an enterprise-wide risk management system?",
    keywords: ["integration", "technology", "data management", "reporting", "governance"],
    difficulty: "advanced",
    domain: "finance",
    role: "risk-manager"
  }
];

// Finance Domain - Portfolio Manager questions
const portfolioManagerQuestions: Question[] = [
  // Beginner
  {
    id: 501,
    question: "What are the key principles of portfolio diversification?",
    keywords: ["asset allocation", "risk reduction", "correlation", "investment strategy", "risk-return"],
    difficulty: "beginner",
    domain: "finance",
    role: "portfolio-manager"
  },
  {
    id: 502,
    question: "Explain the concept of Modern Portfolio Theory and its applications.",
    keywords: ["efficient frontier", "risk-return tradeoff", "diversification", "optimization", "asset allocation"],
    difficulty: "beginner",
    domain: "finance",
    role: "portfolio-manager"
  },
  {
    id: 503,
    question: "What are the main types of investment strategies you might employ?",
    keywords: ["active management", "passive management", "value investing", "growth investing", "tactical allocation"],
    difficulty: "beginner",
    domain: "finance",
    role: "portfolio-manager"
  },
  // Intermediate
  {
    id: 504,
    question: "How do you evaluate and select investment opportunities for a portfolio?",
    keywords: ["fundamental analysis", "technical analysis", "risk assessment", "return expectations", "due diligence"],
    difficulty: "intermediate",
    domain: "finance",
    role: "portfolio-manager"
  },
  {
    id: 505,
    question: "Describe your approach to portfolio rebalancing and risk management.",
    keywords: ["asset allocation", "risk tolerance", "market conditions", "rebalancing strategy", "performance monitoring"],
    difficulty: "intermediate",
    domain: "finance",
    role: "portfolio-manager"
  },
  // Advanced
  {
    id: 506,
    question: "How would you develop and implement a multi-asset class investment strategy?",
    keywords: ["asset allocation", "risk management", "market analysis", "implementation", "monitoring"],
    difficulty: "advanced",
    domain: "finance",
    role: "portfolio-manager"
  }
];

// Finance Domain - Accountant questions
const accountantQuestions: Question[] = [
  // Beginner
  {
    id: 601,
    question: "What are the fundamental accounting principles and concepts?",
    keywords: ["GAAP", "accrual basis", "matching principle", "consistency", "materiality"],
    difficulty: "beginner",
    domain: "finance",
    role: "accountant"
  },
  {
    id: 602,
    question: "Explain the difference between cash basis and accrual basis accounting.",
    keywords: ["revenue recognition", "expense recognition", "timing", "financial statements", "reporting"],
    difficulty: "beginner",
    domain: "finance",
    role: "accountant"
  },
  {
    id: 603,
    question: "What are the key components of financial statements?",
    keywords: ["balance sheet", "income statement", "cash flow statement", "equity statement", "notes"],
    difficulty: "beginner",
    domain: "finance",
    role: "accountant"
  },
  // Intermediate
  {
    id: 604,
    question: "How do you handle complex accounting transactions and adjustments?",
    keywords: ["journal entries", "reconciliations", "adjustments", "documentation", "compliance"],
    difficulty: "intermediate",
    domain: "finance",
    role: "accountant"
  },
  {
    id: 605,
    question: "Describe your experience with financial reporting and analysis.",
    keywords: ["reporting", "analysis", "variance analysis", "budgeting", "forecasting"],
    difficulty: "intermediate",
    domain: "finance",
    role: "accountant"
  },
  // Advanced
  {
    id: 606,
    question: "How would you implement and maintain internal controls in an accounting system?",
    keywords: ["controls", "compliance", "risk management", "documentation", "monitoring"],
    difficulty: "advanced",
    domain: "finance",
    role: "accountant"
  }
];

// Healthcare Domain - Nurse questions
const nurseQuestions: Question[] = [
  // Beginner (9 questions)
  {
    id: 701,
    question: "What are the key responsibilities of a registered nurse?",
    keywords: ["patient care", "assessment", "medication", "documentation", "collaboration"],
    difficulty: "beginner",
    domain: "healthcare",
    role: "nurse"
  },
  {
    id: 702,
    question: "Explain the nursing process and its steps.",
    keywords: ["assessment", "diagnosis", "planning", "implementation", "evaluation"],
    difficulty: "beginner",
    domain: "healthcare",
    role: "nurse"
  },
  {
    id: 703,
    question: "What are the basic principles of patient safety?",
    keywords: ["medication safety", "infection control", "fall prevention", "identification", "communication"],
    difficulty: "beginner",
    domain: "healthcare",
    role: "nurse"
  },
  {
    id: 704,
    question: "How do you conduct a patient assessment?",
    keywords: ["vital signs", "history", "physical exam", "documentation", "communication"],
    difficulty: "beginner",
    domain: "healthcare",
    role: "nurse"
  },
  {
    id: 705,
    question: "What are the different types of nursing documentation?",
    keywords: ["assessment", "care plan", "progress notes", "medication", "incident reports"],
    difficulty: "beginner",
    domain: "healthcare",
    role: "nurse"
  },
  {
    id: 706,
    question: "Explain the importance of infection control in nursing.",
    keywords: ["hand hygiene", "isolation", "PPE", "sterilization", "prevention"],
    difficulty: "beginner",
    domain: "healthcare",
    role: "nurse"
  },
  {
    id: 707,
    question: "What are the basic principles of medication administration?",
    keywords: ["rights", "verification", "documentation", "monitoring", "safety"],
    difficulty: "beginner",
    domain: "healthcare",
    role: "nurse"
  },
  {
    id: 708,
    question: "How do you handle patient communication effectively?",
    keywords: ["active listening", "empathy", "education", "cultural sensitivity", "documentation"],
    difficulty: "beginner",
    domain: "healthcare",
    role: "nurse"
  },
  {
    id: 709,
    question: "What are the key aspects of wound care?",
    keywords: ["assessment", "cleaning", "dressing", "healing", "prevention"],
    difficulty: "beginner",
    domain: "healthcare",
    role: "nurse"
  },
  // Intermediate (9 questions)
  {
    id: 710,
    question: "How do you manage complex patient care situations?",
    keywords: ["critical thinking", "prioritization", "delegation", "collaboration", "documentation"],
    difficulty: "intermediate",
    domain: "healthcare",
    role: "nurse"
  },
  {
    id: 711,
    question: "What are the considerations in pain management?",
    keywords: ["assessment", "pharmacological", "non-pharmacological", "monitoring", "documentation"],
    difficulty: "intermediate",
    domain: "healthcare",
    role: "nurse"
  },
  {
    id: 712,
    question: "How do you implement evidence-based practice in nursing?",
    keywords: ["research", "clinical guidelines", "quality improvement", "patient outcomes", "implementation"],
    difficulty: "intermediate",
    domain: "healthcare",
    role: "nurse"
  },
  {
    id: 713,
    question: "Explain the process of care coordination.",
    keywords: ["interdisciplinary", "transitions", "communication", "resources", "follow-up"],
    difficulty: "intermediate",
    domain: "healthcare",
    role: "nurse"
  },
  {
    id: 714,
    question: "What are the key aspects of emergency nursing?",
    keywords: ["triage", "assessment", "intervention", "stabilization", "transfer"],
    difficulty: "intermediate",
    domain: "healthcare",
    role: "nurse"
  },
  {
    id: 715,
    question: "How do you handle ethical dilemmas in nursing?",
    keywords: ["principles", "decision-making", "advocacy", "confidentiality", "consent"],
    difficulty: "intermediate",
    domain: "healthcare",
    role: "nurse"
  },
  {
    id: 716,
    question: "What are the considerations in managing chronic conditions?",
    keywords: ["assessment", "education", "self-management", "monitoring", "support"],
    difficulty: "intermediate",
    domain: "healthcare",
    role: "nurse"
  },
  {
    id: 717,
    question: "How do you implement quality improvement initiatives?",
    keywords: ["data collection", "analysis", "planning", "implementation", "evaluation"],
    difficulty: "intermediate",
    domain: "healthcare",
    role: "nurse"
  },
  {
    id: 718,
    question: "Explain the role of technology in modern nursing practice.",
    keywords: ["EHR", "monitoring", "communication", "documentation", "safety"],
    difficulty: "intermediate",
    domain: "healthcare",
    role: "nurse"
  },
  // Advanced (9 questions)
  {
    id: 719,
    question: "How do you lead and manage nursing teams?",
    keywords: ["leadership", "delegation", "communication", "conflict resolution", "performance"],
    difficulty: "advanced",
    domain: "healthcare",
    role: "nurse"
  },
  {
    id: 720,
    question: "Explain the process of developing and implementing nursing protocols.",
    keywords: ["evidence-based", "research", "stakeholders", "implementation", "evaluation"],
    difficulty: "advanced",
    domain: "healthcare",
    role: "nurse"
  },
  {
    id: 721,
    question: "How do you manage complex healthcare systems?",
    keywords: ["resources", "coordination", "quality", "safety", "efficiency"],
    difficulty: "advanced",
    domain: "healthcare",
    role: "nurse"
  },
  {
    id: 722,
    question: "What are the advanced aspects of critical care nursing?",
    keywords: ["assessment", "intervention", "monitoring", "technology", "family support"],
    difficulty: "advanced",
    domain: "healthcare",
    role: "nurse"
  },
  {
    id: 723,
    question: "How do you implement and evaluate nursing research?",
    keywords: ["methodology", "data collection", "analysis", "ethics", "dissemination"],
    difficulty: "advanced",
    domain: "healthcare",
    role: "nurse"
  },
  {
    id: 724,
    question: "Explain the role of nursing in healthcare policy development.",
    keywords: ["advocacy", "research", "implementation", "evaluation", "stakeholders"],
    difficulty: "advanced",
    domain: "healthcare",
    role: "nurse"
  },
  {
    id: 725,
    question: "How do you manage complex patient transitions?",
    keywords: ["coordination", "communication", "resources", "follow-up", "outcomes"],
    difficulty: "advanced",
    domain: "healthcare",
    role: "nurse"
  },
  {
    id: 726,
    question: "What are the advanced approaches to patient education?",
    keywords: ["assessment", "planning", "implementation", "evaluation", "technology"],
    difficulty: "advanced",
    domain: "healthcare",
    role: "nurse"
  },
  {
    id: 727,
    question: "How do you implement and evaluate quality improvement programs?",
    keywords: ["data", "analysis", "planning", "implementation", "outcomes"],
    difficulty: "advanced",
    domain: "healthcare",
    role: "nurse"
  }
];

// Healthcare Domain - Healthcare Administrator questions
const healthcareAdministratorQuestions: Question[] = [
  // Beginner (9 questions)
  {
    id: 801,
    question: "What are the key responsibilities of a healthcare administrator?",
    keywords: ["operations", "finance", "personnel", "compliance", "quality"],
    difficulty: "beginner",
    domain: "healthcare",
    role: "healthcare-administrator"
  },
  {
    id: 802,
    question: "Explain the basic principles of healthcare management.",
    keywords: ["planning", "organizing", "leading", "controlling", "evaluation"],
    difficulty: "beginner",
    domain: "healthcare",
    role: "healthcare-administrator"
  },
  {
    id: 803,
    question: "What are the main healthcare regulations and compliance requirements?",
    keywords: ["HIPAA", "Medicare", "Medicaid", "accreditation", "licensing"],
    difficulty: "beginner",
    domain: "healthcare",
    role: "healthcare-administrator"
  },
  {
    id: 804,
    question: "How do you manage healthcare facility operations?",
    keywords: ["staffing", "scheduling", "resources", "efficiency", "quality"],
    difficulty: "beginner",
    domain: "healthcare",
    role: "healthcare-administrator"
  },
  {
    id: 805,
    question: "What are the key aspects of healthcare finance?",
    keywords: ["budgeting", "revenue", "expenses", "reimbursement", "financial reporting"],
    difficulty: "beginner",
    domain: "healthcare",
    role: "healthcare-administrator"
  },
  {
    id: 806,
    question: "Explain the importance of healthcare quality management.",
    keywords: ["standards", "metrics", "improvement", "patient safety", "outcomes"],
    difficulty: "beginner",
    domain: "healthcare",
    role: "healthcare-administrator"
  },
  {
    id: 807,
    question: "What are the basic principles of healthcare human resources?",
    keywords: ["recruitment", "training", "performance", "compliance", "retention"],
    difficulty: "beginner",
    domain: "healthcare",
    role: "healthcare-administrator"
  },
  {
    id: 808,
    question: "How do you handle healthcare information systems?",
    keywords: ["EHR", "data management", "security", "compliance", "integration"],
    difficulty: "beginner",
    domain: "healthcare",
    role: "healthcare-administrator"
  },
  {
    id: 809,
    question: "What are the key aspects of healthcare marketing?",
    keywords: ["branding", "outreach", "patient satisfaction", "community relations", "growth"],
    difficulty: "beginner",
    domain: "healthcare",
    role: "healthcare-administrator"
  },
  // Intermediate (9 questions)
  {
    id: 810,
    question: "How do you implement healthcare quality improvement programs?",
    keywords: ["data analysis", "planning", "implementation", "monitoring", "evaluation"],
    difficulty: "intermediate",
    domain: "healthcare",
    role: "healthcare-administrator"
  },
  {
    id: 811,
    question: "What are the considerations in healthcare strategic planning?",
    keywords: ["analysis", "goals", "resources", "implementation", "evaluation"],
    difficulty: "intermediate",
    domain: "healthcare",
    role: "healthcare-administrator"
  },
  {
    id: 812,
    question: "How do you manage healthcare budgets and finances?",
    keywords: ["planning", "allocation", "monitoring", "analysis", "reporting"],
    difficulty: "intermediate",
    domain: "healthcare",
    role: "healthcare-administrator"
  },
  {
    id: 813,
    question: "Explain the process of healthcare facility management.",
    keywords: ["maintenance", "safety", "compliance", "resources", "efficiency"],
    difficulty: "intermediate",
    domain: "healthcare",
    role: "healthcare-administrator"
  },
  {
    id: 814,
    question: "What are the key aspects of healthcare policy implementation?",
    keywords: ["compliance", "training", "monitoring", "documentation", "evaluation"],
    difficulty: "intermediate",
    domain: "healthcare",
    role: "healthcare-administrator"
  },
  {
    id: 815,
    question: "How do you handle healthcare risk management?",
    keywords: ["assessment", "prevention", "insurance", "compliance", "documentation"],
    difficulty: "intermediate",
    domain: "healthcare",
    role: "healthcare-administrator"
  },
  {
    id: 816,
    question: "What are the considerations in healthcare technology implementation?",
    keywords: ["selection", "integration", "training", "security", "evaluation"],
    difficulty: "intermediate",
    domain: "healthcare",
    role: "healthcare-administrator"
  },
  {
    id: 817,
    question: "How do you manage healthcare supply chain operations?",
    keywords: ["procurement", "inventory", "distribution", "cost control", "quality"],
    difficulty: "intermediate",
    domain: "healthcare",
    role: "healthcare-administrator"
  },
  {
    id: 818,
    question: "Explain the role of healthcare administrators in emergency management.",
    keywords: ["planning", "coordination", "resources", "communication", "response"],
    difficulty: "intermediate",
    domain: "healthcare",
    role: "healthcare-administrator"
  },
  // Advanced (9 questions)
  {
    id: 819,
    question: "How do you lead healthcare organizational change?",
    keywords: ["strategy", "communication", "stakeholders", "implementation", "evaluation"],
    difficulty: "advanced",
    domain: "healthcare",
    role: "healthcare-administrator"
  },
  {
    id: 820,
    question: "Explain the process of healthcare system integration.",
    keywords: ["mergers", "acquisitions", "partnerships", "coordination", "efficiency"],
    difficulty: "advanced",
    domain: "healthcare",
    role: "healthcare-administrator"
  },
  {
    id: 821,
    question: "How do you implement healthcare innovation strategies?",
    keywords: ["technology", "process improvement", "research", "implementation", "evaluation"],
    difficulty: "advanced",
    domain: "healthcare",
    role: "healthcare-administrator"
  },
  {
    id: 822,
    question: "What are the advanced aspects of healthcare financial management?",
    keywords: ["capital planning", "investment", "risk management", "revenue cycle", "cost control"],
    difficulty: "advanced",
    domain: "healthcare",
    role: "healthcare-administrator"
  },
  {
    id: 823,
    question: "How do you develop and implement healthcare policies?",
    keywords: ["research", "stakeholders", "compliance", "implementation", "evaluation"],
    difficulty: "advanced",
    domain: "healthcare",
    role: "healthcare-administrator"
  },
  {
    id: 824,
    question: "Explain the role of healthcare administrators in population health management.",
    keywords: ["prevention", "coordination", "resources", "outcomes", "evaluation"],
    difficulty: "advanced",
    domain: "healthcare",
    role: "healthcare-administrator"
  },
  {
    id: 825,
    question: "How do you manage complex healthcare projects?",
    keywords: ["planning", "resources", "timeline", "stakeholders", "evaluation"],
    difficulty: "advanced",
    domain: "healthcare",
    role: "healthcare-administrator"
  },
  {
    id: 826,
    question: "What are the advanced approaches to healthcare quality improvement?",
    keywords: ["data analytics", "process improvement", "patient outcomes", "safety", "efficiency"],
    difficulty: "advanced",
    domain: "healthcare",
    role: "healthcare-administrator"
  },
  {
    id: 827,
    question: "How do you implement healthcare information technology systems?",
    keywords: ["selection", "integration", "security", "training", "optimization"],
    difficulty: "advanced",
    domain: "healthcare",
    role: "healthcare-administrator"
  }
];

// Healthcare Domain - Medical Researcher questions
const medicalResearcherQuestions: Question[] = [
  // Beginner (9 questions)
  {
    id: 901,
    question: "What are the basic principles of medical research?",
    keywords: ["methodology", "ethics", "data collection", "analysis", "reporting"],
    difficulty: "beginner",
    domain: "healthcare",
    role: "medical-researcher"
  },
  {
    id: 902,
    question: "Explain the different types of research studies.",
    keywords: ["clinical trials", "observational", "experimental", "qualitative", "quantitative"],
    difficulty: "beginner",
    domain: "healthcare",
    role: "medical-researcher"
  },
  {
    id: 903,
    question: "What are the key components of a research protocol?",
    keywords: ["objectives", "methods", "ethics", "timeline", "resources"],
    difficulty: "beginner",
    domain: "healthcare",
    role: "medical-researcher"
  },
  {
    id: 904,
    question: "How do you ensure research ethics and compliance?",
    keywords: ["IRB", "informed consent", "confidentiality", "safety", "reporting"],
    difficulty: "beginner",
    domain: "healthcare",
    role: "medical-researcher"
  },
  {
    id: 905,
    question: "What are the basic statistical methods used in medical research?",
    keywords: ["descriptive", "inferential", "hypothesis testing", "correlation", "regression"],
    difficulty: "beginner",
    domain: "healthcare",
    role: "medical-researcher"
  },
  {
    id: 906,
    question: "Explain the process of literature review.",
    keywords: ["search", "evaluation", "synthesis", "documentation", "analysis"],
    difficulty: "beginner",
    domain: "healthcare",
    role: "medical-researcher"
  },
  {
    id: 907,
    question: "What are the key aspects of data collection in medical research?",
    keywords: ["methods", "instruments", "validation", "storage", "security"],
    difficulty: "beginner",
    domain: "healthcare",
    role: "medical-researcher"
  },
  {
    id: 908,
    question: "How do you write a research proposal?",
    keywords: ["objectives", "methods", "budget", "timeline", "significance"],
    difficulty: "beginner",
    domain: "healthcare",
    role: "medical-researcher"
  },
  {
    id: 909,
    question: "What are the basic principles of clinical trial design?",
    keywords: ["randomization", "blinding", "controls", "endpoints", "safety"],
    difficulty: "beginner",
    domain: "healthcare",
    role: "medical-researcher"
  },
  // Intermediate (9 questions)
  {
    id: 910,
    question: "How do you design and implement clinical trials?",
    keywords: ["protocol", "recruitment", "monitoring", "data collection", "analysis"],
    difficulty: "intermediate",
    domain: "healthcare",
    role: "medical-researcher"
  },
  {
    id: 911,
    question: "What are the considerations in research data management?",
    keywords: ["collection", "storage", "security", "analysis", "sharing"],
    difficulty: "intermediate",
    domain: "healthcare",
    role: "medical-researcher"
  },
  {
    id: 912,
    question: "How do you analyze and interpret research results?",
    keywords: ["statistics", "significance", "validity", "reliability", "reporting"],
    difficulty: "intermediate",
    domain: "healthcare",
    role: "medical-researcher"
  },
  {
    id: 913,
    question: "Explain the process of research grant writing.",
    keywords: ["proposal", "budget", "timeline", "significance", "feasibility"],
    difficulty: "intermediate",
    domain: "healthcare",
    role: "medical-researcher"
  },
  {
    id: 914,
    question: "What are the key aspects of research collaboration?",
    keywords: ["teamwork", "communication", "coordination", "resources", "ethics"],
    difficulty: "intermediate",
    domain: "healthcare",
    role: "medical-researcher"
  },
  {
    id: 915,
    question: "How do you ensure research quality and validity?",
    keywords: ["methodology", "controls", "bias", "reliability", "replication"],
    difficulty: "intermediate",
    domain: "healthcare",
    role: "medical-researcher"
  },
  {
    id: 916,
    question: "What are the considerations in research publication?",
    keywords: ["journal selection", "writing", "review", "revision", "dissemination"],
    difficulty: "intermediate",
    domain: "healthcare",
    role: "medical-researcher"
  },
  {
    id: 917,
    question: "How do you manage research projects?",
    keywords: ["planning", "resources", "timeline", "coordination", "evaluation"],
    difficulty: "intermediate",
    domain: "healthcare",
    role: "medical-researcher"
  },
  {
    id: 918,
    question: "Explain the role of technology in medical research.",
    keywords: ["data collection", "analysis", "storage", "communication", "innovation"],
    difficulty: "intermediate",
    domain: "healthcare",
    role: "medical-researcher"
  },
  // Advanced (9 questions)
  {
    id: 919,
    question: "How do you design and implement complex research studies?",
    keywords: ["methodology", "multicenter", "longitudinal", "intervention", "analysis"],
    difficulty: "advanced",
    domain: "healthcare",
    role: "medical-researcher"
  },
  {
    id: 920,
    question: "Explain the process of developing research methodologies.",
    keywords: ["design", "validation", "implementation", "evaluation", "innovation"],
    difficulty: "advanced",
    domain: "healthcare",
    role: "medical-researcher"
  },
  {
    id: 921,
    question: "How do you manage large-scale research projects?",
    keywords: ["coordination", "resources", "timeline", "quality", "compliance"],
    difficulty: "advanced",
    domain: "healthcare",
    role: "medical-researcher"
  },
  {
    id: 922,
    question: "What are the advanced statistical methods in medical research?",
    keywords: ["multivariate", "longitudinal", "survival", "meta-analysis", "machine learning"],
    difficulty: "advanced",
    domain: "healthcare",
    role: "medical-researcher"
  },
  {
    id: 923,
    question: "How do you implement innovative research technologies?",
    keywords: ["selection", "validation", "integration", "training", "evaluation"],
    difficulty: "advanced",
    domain: "healthcare",
    role: "medical-researcher"
  },
  {
    id: 924,
    question: "Explain the process of research translation and implementation.",
    keywords: ["evidence", "practice", "policy", "dissemination", "evaluation"],
    difficulty: "advanced",
    domain: "healthcare",
    role: "medical-researcher"
  },
  {
    id: 925,
    question: "How do you manage research data security and privacy?",
    keywords: ["compliance", "encryption", "access", "storage", "sharing"],
    difficulty: "advanced",
    domain: "healthcare",
    role: "medical-researcher"
  },
  {
    id: 926,
    question: "What are the advanced approaches to research funding?",
    keywords: ["grants", "partnerships", "commercialization", "sustainability", "innovation"],
    difficulty: "advanced",
    domain: "healthcare",
    role: "medical-researcher"
  },
  {
    id: 927,
    question: "How do you lead research teams and collaborations?",
    keywords: ["leadership", "communication", "coordination", "mentoring", "evaluation"],
    difficulty: "advanced",
    domain: "healthcare",
    role: "medical-researcher"
  }
];

// Healthcare Domain - Pharmacist questions
const pharmacistQuestions: Question[] = [
  // Beginner (9 questions)
  {
    id: 1001,
    question: "What are the key responsibilities of a pharmacist?",
    keywords: ["dispensing", "counseling", "medication management", "safety", "compliance"],
    difficulty: "beginner",
    domain: "healthcare",
    role: "pharmacist"
  },
  {
    id: 1002,
    question: "Explain the process of medication dispensing.",
    keywords: ["verification", "labeling", "packaging", "documentation", "counseling"],
    difficulty: "beginner",
    domain: "healthcare",
    role: "pharmacist"
  },
  {
    id: 1003,
    question: "What are the basic principles of medication safety?",
    keywords: ["verification", "labeling", "storage", "administration", "monitoring"],
    difficulty: "beginner",
    domain: "healthcare",
    role: "pharmacist"
  },
  {
    id: 1004,
    question: "How do you conduct medication reviews?",
    keywords: ["assessment", "interactions", "appropriateness", "monitoring", "documentation"],
    difficulty: "beginner",
    domain: "healthcare",
    role: "pharmacist"
  },
  {
    id: 1005,
    question: "What are the key aspects of patient counseling?",
    keywords: ["education", "adherence", "side effects", "interactions", "lifestyle"],
    difficulty: "beginner",
    domain: "healthcare",
    role: "pharmacist"
  },
  {
    id: 1006,
    question: "Explain the importance of medication storage and handling.",
    keywords: ["temperature", "humidity", "security", "expiration", "inventory"],
    difficulty: "beginner",
    domain: "healthcare",
    role: "pharmacist"
  },
  {
    id: 1007,
    question: "What are the basic principles of pharmacy law and ethics?",
    keywords: ["regulations", "compliance", "privacy", "professionalism", "responsibility"],
    difficulty: "beginner",
    domain: "healthcare",
    role: "pharmacist"
  },
  {
    id: 1008,
    question: "How do you handle prescription processing?",
    keywords: ["verification", "interpretation", "filling", "labeling", "documentation"],
    difficulty: "beginner",
    domain: "healthcare",
    role: "pharmacist"
  },
  {
    id: 1009,
    question: "What are the key aspects of inventory management?",
    keywords: ["ordering", "storage", "tracking", "expiration", "security"],
    difficulty: "beginner",
    domain: "healthcare",
    role: "pharmacist"
  },
  // Intermediate (9 questions)
  {
    id: 1010,
    question: "How do you manage complex medication regimens?",
    keywords: ["assessment", "planning", "monitoring", "adjustment", "documentation"],
    difficulty: "intermediate",
    domain: "healthcare",
    role: "pharmacist"
  },
  {
    id: 1011,
    question: "What are the considerations in medication therapy management?",
    keywords: ["assessment", "planning", "implementation", "monitoring", "evaluation"],
    difficulty: "intermediate",
    domain: "healthcare",
    role: "pharmacist"
  },
  {
    id: 1012,
    question: "How do you implement medication safety programs?",
    keywords: ["assessment", "prevention", "monitoring", "reporting", "improvement"],
    difficulty: "intermediate",
    domain: "healthcare",
    role: "pharmacist"
  },
  {
    id: 1013,
    question: "Explain the process of clinical pharmacy services.",
    keywords: ["assessment", "intervention", "monitoring", "documentation", "evaluation"],
    difficulty: "intermediate",
    domain: "healthcare",
    role: "pharmacist"
  },
  {
    id: 1014,
    question: "What are the key aspects of pharmacy informatics?",
    keywords: ["systems", "data", "automation", "safety", "efficiency"],
    difficulty: "intermediate",
    domain: "healthcare",
    role: "pharmacist"
  },
  {
    id: 1015,
    question: "How do you handle medication errors and adverse events?",
    keywords: ["prevention", "detection", "reporting", "analysis", "improvement"],
    difficulty: "intermediate",
    domain: "healthcare",
    role: "pharmacist"
  },
  {
    id: 1016,
    question: "What are the considerations in specialty pharmacy?",
    keywords: ["medications", "storage", "handling", "monitoring", "patient support"],
    difficulty: "intermediate",
    domain: "healthcare",
    role: "pharmacist"
  },
  {
    id: 1017,
    question: "How do you implement quality improvement in pharmacy practice?",
    keywords: ["assessment", "planning", "implementation", "monitoring", "evaluation"],
    difficulty: "intermediate",
    domain: "healthcare",
    role: "pharmacist"
  },
  {
    id: 1018,
    question: "Explain the role of pharmacists in public health.",
    keywords: ["prevention", "education", "screening", "vaccination", "outreach"],
    difficulty: "intermediate",
    domain: "healthcare",
    role: "pharmacist"
  },
  // Advanced (9 questions)
  {
    id: 1019,
    question: "How do you develop and implement clinical pharmacy programs?",
    keywords: ["assessment", "planning", "implementation", "evaluation", "improvement"],
    difficulty: "advanced",
    domain: "healthcare",
    role: "pharmacist"
  },
  {
    id: 1020,
    question: "Explain the process of pharmacy practice innovation.",
    keywords: ["technology", "services", "process improvement", "implementation", "evaluation"],
    difficulty: "advanced",
    domain: "healthcare",
    role: "pharmacist"
  },
  {
    id: 1021,
    question: "How do you manage complex pharmacy operations?",
    keywords: ["resources", "personnel", "technology", "quality", "compliance"],
    difficulty: "advanced",
    domain: "healthcare",
    role: "pharmacist"
  },
  {
    id: 1022,
    question: "What are the advanced aspects of medication therapy management?",
    keywords: ["assessment", "planning", "monitoring", "adjustment", "outcomes"],
    difficulty: "advanced",
    domain: "healthcare",
    role: "pharmacist"
  },
  {
    id: 1023,
    question: "How do you implement pharmacy research programs?",
    keywords: ["design", "implementation", "analysis", "dissemination", "application"],
    difficulty: "advanced",
    domain: "healthcare",
    role: "pharmacist"
  },
  {
    id: 1024,
    question: "Explain the role of pharmacists in healthcare policy development.",
    keywords: ["advocacy", "research", "implementation", "evaluation", "improvement"],
    difficulty: "advanced",
    domain: "healthcare",
    role: "pharmacist"
  },
  {
    id: 1025,
    question: "How do you manage pharmacy information systems?",
    keywords: ["selection", "implementation", "integration", "security", "optimization"],
    difficulty: "advanced",
    domain: "healthcare",
    role: "pharmacist"
  },
  {
    id: 1026,
    question: "What are the advanced approaches to medication safety?",
    keywords: ["prevention", "detection", "analysis", "improvement", "innovation"],
    difficulty: "advanced",
    domain: "healthcare",
    role: "pharmacist"
  },
  {
    id: 1027,
    question: "How do you lead pharmacy teams and departments?",
    keywords: ["leadership", "management", "development", "evaluation", "improvement"],
    difficulty: "advanced",
    domain: "healthcare",
    role: "pharmacist"
  }
];

// Get all available domains in the system
export function getAvailableDomains() {
  return [
    "it",
    "finance",
    "healthcare",
    "education",
    "management",
    "sales",
    "engineering",
    "consulting"
  ];
}

export function getRolesForDomain(domain: string) {
  switch (domain) {
    case "it":
      return [
        "software-engineer",
        "data-scientist",
        "ux-designer",
        "product-manager",
        "devops-engineer"
      ];
    case "finance":
      return [
        "financial-analyst",
        "investment-banker",
        "risk-manager",
        "portfolio-manager",
        "accountant"
      ];
    case "healthcare":
      return [
        "physician",
        "nurse",
        "healthcare-administrator",
        "medical-researcher",
        "pharmacist"
      ];
    case "education":
      return [
        "teacher",
        "professor",
        "curriculum-developer"
      ];
    case "management":
      return [
        "hr-manager",
        "recruiter"
      ];
    case "sales":
      return [
        "sales-manager",
        "account-executive",
        "sales-consultant"
      ];
    case "engineering":
      return [
        "mechanical-engineer",
        "electrical-engineer",
        "civil-engineer"
      ];
    case "consulting":
      return [
        "management-consultant",
        "strategy-consultant",
        "it-consultant"
      ];
    default:
      return [];
  }
}

// Function to get questions for a specific domain and role combination
export function getDomainQuestions(domain: string, role: string, difficulty: string = "intermediate"): Question[] {
  // Use the allQuestions array and filter by domain, role, and difficulty
  return allQuestions.filter(q =>
    q.domain === domain &&
    q.role === role &&
    q.difficulty === difficulty
  );
}

export const questions = [
  ...softwareEngineerQuestions,
  ...dataScientistQuestions,
  ...uxDesignerQuestions,
  ...productManagerQuestions,
  ...devOpsEngineerQuestions,
  ...financialAnalystQuestions,
  ...investmentBankerQuestions,
  ...riskManagerQuestions,
  ...portfolioManagerQuestions,
  ...accountantQuestions,
  ...nurseQuestions,
  ...healthcareAdministratorQuestions,
  ...medicalResearcherQuestions,
  ...pharmacistQuestions,
  ...physicianQuestions,
  ...teacherQuestions,
  ...professorQuestions,
  ...curriculumDeveloperQuestions,
  ...hrManagerQuestions,
  ...recruiterQuestions,
  ...compensationAnalystQuestions,
  ...marketingManagerQuestions,
  ...digitalMarketerQuestions,
  ...brandManagerQuestions,
  ...salesManagerQuestions,
  ...accountExecutiveQuestions,
  ...salesConsultantQuestions,
  ...mechanicalEngineerQuestions,
  ...electricalEngineerQuestions,
  ...civilEngineerQuestions,
  ...managementConsultantQuestions,
  ...strategyConsultantQuestions,
  ...itConsultantQuestions,
  // Add more questions for other domains and roles as needed
];




const allQuestions: Question[] = [
  ...softwareEngineerQuestions,
  ...dataScientistQuestions,
  ...uxDesignerQuestions,
  ...productManagerQuestions,
  ...devOpsEngineerQuestions,
  ...financialAnalystQuestions,
  ...investmentBankerQuestions,
  ...riskManagerQuestions,
  ...portfolioManagerQuestions,
  ...accountantQuestions,
  ...nurseQuestions,
  ...healthcareAdministratorQuestions,
  ...medicalResearcherQuestions,
  ...pharmacistQuestions,
  ...physicianQuestions,
  ...teacherQuestions,
  ...professorQuestions,
  ...curriculumDeveloperQuestions,
  ...hrManagerQuestions,
  ...recruiterQuestions,
  ...marketingManagerQuestions,
  ...digitalMarketerQuestions,
  ...brandManagerQuestions,
  ...salesManagerQuestions,
  ...accountExecutiveQuestions,
  ...salesConsultantQuestions,
  ...mechanicalEngineerQuestions,
  ...electricalEngineerQuestions,
  ...civilEngineerQuestions,
  ...managementConsultantQuestions,
  ...strategyConsultantQuestions,
  ...itConsultantQuestions,
];

// 4) Export the helper function that filters them:
export function getQuestionsForInterview(
  domain: string,
  role: string,
  difficulty: string
): Question[] {
  return allQuestions.filter(q =>
    q.domain === domain &&
    q.role === role &&
    q.difficulty === difficulty
  );
}

// Healthcare Administrator questions
const healthcareAdminQuestions: Question[] = [
  // Beginner (10 questions)
  {
    id: 701,
    question: "What are the key components of HIPAA compliance?",
    keywords: ["privacy", "security", "patient rights", "PHI", "compliance"],
    difficulty: "beginner",
    domain: "healthcare",
    role: "healthcare-administrator"
  },
  {
    id: 702,
    question: "Describe the basic structure of a healthcare organization.",
    keywords: ["departments", "hierarchy", "roles", "responsibilities", "coordination"],
    difficulty: "beginner",
    domain: "healthcare",
    role: "healthcare-administrator"
  },
  {
    id: 703,
    question: "What are the essential elements of healthcare facility licensing?",
    keywords: ["regulations", "standards", "inspections", "documentation", "compliance"],
    difficulty: "beginner",
    domain: "healthcare",
    role: "healthcare-administrator"
  },
  {
    id: 704,
    question: "What are the basic principles of healthcare management?",
    keywords: ["leadership", "planning", "organization", "control", "coordination"],
    difficulty: "beginner",
    domain: "healthcare",
    role: "healthcare-administrator"
  },
  {
    id: 705,
    question: "How do you ensure patient satisfaction in healthcare facilities?",
    keywords: ["service quality", "communication", "feedback", "improvement", "standards"],
    difficulty: "beginner",
    domain: "healthcare",
    role: "healthcare-administrator"
  },
  {
    id: 706,
    question: "What are the key aspects of medical records management?",
    keywords: ["documentation", "privacy", "security", "access", "retention"],
    difficulty: "beginner",
    domain: "healthcare",
    role: "healthcare-administrator"
  },
  {
    id: 707,
    question: "Describe basic healthcare facility safety protocols.",
    keywords: ["emergency procedures", "safety measures", "training", "compliance", "documentation"],
    difficulty: "beginner",
    domain: "healthcare",
    role: "healthcare-administrator"
  },
  {
    id: 708,
    question: "What are the fundamental principles of healthcare ethics?",
    keywords: ["autonomy", "beneficence", "justice", "privacy", "consent"],
    difficulty: "beginner",
    domain: "healthcare",
    role: "healthcare-administrator"
  },
  {
    id: 709,
    question: "How do you maintain regulatory compliance in healthcare?",
    keywords: ["standards", "documentation", "training", "monitoring", "reporting"],
    difficulty: "beginner",
    domain: "healthcare",
    role: "healthcare-administrator"
  },
  {
    id: 710,
    question: "What are the basics of healthcare budgeting?",
    keywords: ["revenue", "expenses", "planning", "allocation", "monitoring"],
    difficulty: "beginner",
    domain: "healthcare",
    role: "healthcare-administrator"
  },
  // Intermediate (10 questions)
  {
    id: 711,
    question: "Explain healthcare quality metrics and their importance.",
    keywords: ["patient satisfaction", "readmission rates", "mortality", "safety", "outcomes"],
    difficulty: "intermediate",
    domain: "healthcare",
    role: "healthcare-administrator"
  },
  {
    id: 712,
    question: "How do you manage healthcare staff scheduling and resources?",
    keywords: ["staffing ratios", "coverage", "skills mix", "budget", "efficiency"],
    difficulty: "intermediate",
    domain: "healthcare",
    role: "healthcare-administrator"
  },
  {
    id: 713,
    question: "What strategies do you use for healthcare risk management?",
    keywords: ["incident reporting", "prevention", "documentation", "training", "compliance"],
    difficulty: "intermediate",
    domain: "healthcare",
    role: "healthcare-administrator"
  },
  {
    id: 714,
    question: "How do you handle healthcare facility accreditation?",
    keywords: ["standards", "documentation", "surveys", "improvement", "compliance"],
    difficulty: "intermediate",
    domain: "healthcare",
    role: "healthcare-administrator"
  },
  {
    id: 715,
    question: "What are the key aspects of healthcare supply chain management?",
    keywords: ["inventory", "procurement", "distribution", "costs", "quality"],
    difficulty: "intermediate",
    domain: "healthcare",
    role: "healthcare-administrator"
  },
  {
    id: 716,
    question: "How do you implement quality improvement programs?",
    keywords: ["assessment", "planning", "implementation", "evaluation", "monitoring"],
    difficulty: "intermediate",
    domain: "healthcare",
    role: "healthcare-administrator"
  },
  {
    id: 717,
    question: "What are the principles of healthcare facility maintenance?",
    keywords: ["preventive", "corrective", "safety", "compliance", "documentation"],
    difficulty: "intermediate",
    domain: "healthcare",
    role: "healthcare-administrator"
  },
  {
    id: 718,
    question: "How do you manage healthcare information systems?",
    keywords: ["EHR", "security", "training", "maintenance", "compliance"],
    difficulty: "intermediate",
    domain: "healthcare",
    role: "healthcare-administrator"
  },
  {
    id: 719,
    question: "What are the key aspects of healthcare human resources management?",
    keywords: ["recruitment", "retention", "development", "compliance", "performance"],
    difficulty: "intermediate",
    domain: "healthcare",
    role: "healthcare-administrator"
  },
  {
    id: 720,
    question: "How do you manage healthcare facility contracts and vendors?",
    keywords: ["negotiation", "monitoring", "compliance", "quality", "cost"],
    difficulty: "intermediate",
    domain: "healthcare",
    role: "healthcare-administrator"
  },
  // Advanced (10 questions)
  {
    id: 721,
    question: "Describe strategies for improving operational efficiency.",
    keywords: ["workflow optimization", "resource allocation", "scheduling", "cost management", "technology"],
    difficulty: "advanced",
    domain: "healthcare",
    role: "healthcare-administrator"
  },
  {
    id: 722,
    question: "How do you implement and manage healthcare information systems?",
    keywords: ["EHR", "integration", "training", "security", "optimization"],
    difficulty: "advanced",
    domain: "healthcare",
    role: "healthcare-administrator"
  },
  {
    id: 723,
    question: "Explain strategies for healthcare cost containment.",
    keywords: ["efficiency", "negotiation", "utilization", "waste reduction", "analytics"],
    difficulty: "advanced",
    domain: "healthcare",
    role: "healthcare-administrator"
  },
  {
    id: 724,
    question: "How do you develop and implement strategic plans for healthcare facilities?",
    keywords: ["analysis", "objectives", "implementation", "monitoring", "adjustment"],
    difficulty: "advanced",
    domain: "healthcare",
    role: "healthcare-administrator"
  },
  {
    id: 725,
    question: "What are the advanced approaches to healthcare quality management?",
    keywords: ["benchmarking", "continuous improvement", "outcomes", "analytics", "accreditation"],
    difficulty: "advanced",
    domain: "healthcare",
    role: "healthcare-administrator"
  },
  {
    id: 726,
    question: "How do you manage complex healthcare facility projects?",
    keywords: ["planning", "execution", "monitoring", "risk management", "stakeholders"],
    difficulty: "advanced",
    domain: "healthcare",
    role: "healthcare-administrator"
  },
  {
    id: 727,
    question: "What are the advanced principles of healthcare financial management?",
    keywords: ["forecasting", "investment", "risk management", "optimization", "compliance"],
    difficulty: "advanced",
    domain: "healthcare",
    role: "healthcare-administrator"
  },
  {
    id: 728,
    question: "How do you handle crisis management in healthcare facilities?",
    keywords: ["preparedness", "response", "communication", "recovery", "evaluation"],
    difficulty: "advanced",
    domain: "healthcare",
    role: "healthcare-administrator"
  },
  {
    id: 729,
    question: "What are the advanced approaches to healthcare compliance management?",
    keywords: ["risk assessment", "monitoring", "investigation", "reporting", "improvement"],
    difficulty: "advanced",
    domain: "healthcare",
    role: "healthcare-administrator"
  },
  {
    id: 730,
    question: "How do you lead organizational change in healthcare facilities?",
    keywords: ["assessment", "planning", "implementation", "communication", "sustainability"],
    difficulty: "advanced",
    domain: "healthcare",
    role: "healthcare-administrator"
  }
];


