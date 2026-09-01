export const PERSONAL_INFO = {
  name: "Harshini Sanjana",
  role: "Software Developer",
  tagline: "I like building things that actually work.",
  bio: "I'm an Integrated M.Sc. Software Systems student at CIT, mostly interested in building full-stack apps, backend systems, computer vision projects, and tools that make things a little easier.",
  location: "Coimbatore, India",
  email: "j.harshinisanjana@gmail.com",
  github: "https://github.com/harshinisanjana",
  linkedin: "https://www.linkedin.com/in/harshini-sanjana-j/",
  resumeUrl: "/HARSHINI_SANJANA_J_RESUME.pdf",
  educationStatus: "M.Sc Software Systems @ CIT",
  availability: "Open to software engineering roles & internships",
  metrics: [
    { label: "projects built", value: "07+" },
    { label: "core technologies", value: "15+" },
    { label: "internship experience", value: "6 Mos" },
    { label: "integrated M.Sc @ CIT", value: "5-Yr" }
  ]
};

export const PROJECTS = [
  {
    id: "crowdsafe-ai",
    number: "01",
    title: "CrowdSafe.ai",
    subtitle: "Real-time crowd monitoring using computer vision and anomaly detection",
    category: "AI & Full-Stack",
    featured: true,
    timeline: "Feb 2026",
    summary: "Real-time crowd monitoring and anomaly detection using computer vision and YOLOv8.",
    problem: "Manual CCTV monitoring at busy events is reactive and makes it easy to miss sudden overcrowding or safety hazards.",
    solution: "Built an automated video pipeline that processes camera feeds with YOLOv8, maps crowd density heatmaps, and triggers alerts when thresholds are crossed.",
    stack: ["Python", "YOLOv8", "FastAPI", "Flask", "RabbitMQ", "Socket.io", "React", "PostgreSQL"],
    architecture: [
      "Camera stream ingestion running YOLOv8 for person detection and movement tracking.",
      "RabbitMQ message queue to handle incoming frames without slowing down the alert pipeline.",
      "FastAPI and Socket.io backend streaming real-time heatmap updates to a React dashboard.",
      "PostgreSQL storing incident timestamps and crowd density history."
    ],
    keyDecisions: [
      "Used lightweight YOLOv8 models optimized for GPU inference to keep processing around 30 FPS.",
      "Divided areas into grid cells for fast density calculations instead of running heavy distance checks.",
      "Used WebSockets rather than polling so alerts appear immediately on the dashboard."
    ],
    githubUrl: "https://github.com/harshinisanjana/CrowdSafe.ai",
    liveUrl: null
  },
  {
    id: "ar-mercerisers",
    number: "02",
    title: "A R Mercerisers",
    subtitle: "Website and digital product catalog for a textile manufacturer",
    category: "Frontend & Web",
    featured: true,
    timeline: "Mar 2026",
    summary: "A responsive website and digital catalog built for a textile manufacturing company.",
    problem: "The manufacturer needed a fast, clean website to show fabric specifications, production capabilities, and product catalogs to clients.",
    solution: "Designed and built a responsive website in React and Tailwind CSS with structured catalog pages and fast load times.",
    stack: ["React", "Vite", "Tailwind CSS", "Vercel"],
    architecture: [
      "Modular React components for catalog browsing and company information.",
      "Vite build setup with automatic code splitting and optimized assets.",
      "Deployed on Vercel with automatic builds from GitHub."
    ],
    keyDecisions: [
      "Kept styling lightweight with Tailwind CSS to keep page loads under one second.",
      "Structured clean semantic HTML so navigation is straightforward on both desktop and mobile."
    ],
    githubUrl: "https://github.com/harshinisanjana/A-R-Mercerisers",
    liveUrl: "https://a-r-mercerisers.vercel.app"
  },
  {
    id: "devhive",
    number: "03",
    title: "DevHive",
    subtitle: "Developer platform for finding teammates and project collaboration",
    category: "Full-Stack",
    featured: true,
    timeline: "2025",
    summary: "A collaboration platform where developers can find teammates, post projects, and work together.",
    problem: "Student developers often struggle to find peers with complementary skills (frontend, backend, ML) to build projects with.",
    solution: "Built a platform with role-based project search, application workflows, user profiles, and JWT authentication.",
    stack: ["React", "Node.js", "Express.js", "MySQL", "JWT", "REST API"],
    architecture: [
      "Express.js REST API handling authentication, profiles, and project listings.",
      "Relational MySQL schema storing users, skill sets, project roles, and application statuses.",
      "JWT-based authentication with bcrypt password hashing."
    ],
    keyDecisions: [
      "Used database connection pooling in MySQL to handle concurrent requests.",
      "Wrote role-based middleware to protect project edit and application management routes."
    ],
    githubUrl: "https://github.com/harshinisanjana/DevHive",
    liveUrl: null
  },
  {
    id: "lung-cancer-detection",
    number: "04",
    title: "Lung Cancer Detection Model",
    subtitle: "CT scan classification model using CNNs and transfer learning",
    category: "AI & ML",
    featured: false,
    timeline: "2025",
    summary: "A deep learning model using CNNs to classify medical CT scans for early detection.",
    problem: "Early classification of pulmonary nodules on CT scans is critical but requires careful, time-intensive manual review.",
    solution: "Trained and evaluated a convolutional neural network using transfer learning to classify benign and malignant scan slices, reaching 75% validation accuracy.",
    stack: ["Python", "TensorFlow", "Keras", "NumPy", "Pandas", "Scikit-Learn", "Matplotlib"],
    architecture: [
      "Data preprocessing pipeline for image resizing, normalization, and contrast adjustment.",
      "CNN transfer learning model fine-tuned on CT scan datasets.",
      "Evaluation scripts producing confusion matrices and classification reports."
    ],
    keyDecisions: [
      "Used data augmentation (rotations, flips, zoom) to balance training across classes.",
      "Added dropout layers and early stopping to reduce overfitting."
    ],
    githubUrl: "https://github.com/harshinisanjana/Lung-Cancer-Detection-Model",
    liveUrl: null
  },
  {
    id: "hospital-management",
    number: "05",
    title: "Hospital Patient Management System",
    subtitle: "Desktop application for clinical administration and patient records",
    category: "Systems & Java",
    featured: false,
    timeline: "2024",
    summary: "A desktop application for clinical records, appointments, and doctor mapping built with Java Swing and MySQL.",
    problem: "Small healthcare clinics need a simple, reliable desktop tool to manage daily patient check-ins and appointments without depending on an internet connection.",
    solution: "Built a Java Swing desktop application connected to a local MySQL database via JDBC for daily clinic operations.",
    stack: ["Java", "Swing", "MySQL", "JDBC"],
    architecture: [
      "MVC structure separating Swing UI forms from data access objects (DAO).",
      "JDBC connection layer using prepared statements to prevent SQL injection.",
      "Relational schema tracking doctor schedules, patient records, and appointments."
    ],
    keyDecisions: [
      "Used parameterized SQL queries across all forms for data consistency and safety.",
      "Designed clean modular dialogs for quick patient registration and record updates."
    ],
    githubUrl: "https://github.com/harshinisanjana/Hospital-Patient-Management-System",
    liveUrl: null
  },
  {
    id: "menstrual-tracker",
    number: "06",
    title: "Menstrual Cycle Tracker",
    subtitle: "Health logging tool with trend visualization and cycle predictions",
    category: "Health & Data",
    featured: false,
    timeline: "2024",
    summary: "A personal health logging app built with Flask and Matplotlib to track symptoms and cycle trends.",
    problem: "Tracking personal cycle regularity and symptoms usually requires bloated apps with ads or paid subscriptions.",
    solution: "Created a private web application with Flask where users can log dates and symptoms, with charts generated using Matplotlib.",
    stack: ["Python", "Flask", "MySQL", "Matplotlib", "HTML5", "CSS3", "JavaScript"],
    architecture: [
      "Flask backend handling user sessions, logging routes, and calculation logic.",
      "Server-side chart generation using Matplotlib to render trend graphs.",
      "MySQL tables storing historical dates and logged symptoms."
    ],
    keyDecisions: [
      "Calculated moving averages on past cycle lengths to generate cycle estimates.",
      "Kept all health data local and private."
    ],
    githubUrl: "https://github.com/harshinisanjana/menstrual-cycle-tracker",
    liveUrl: null
  },
  {
    id: "vehicle-token-dispenser",
    number: "07",
    title: "Vehicle Token Dispensing System",
    subtitle: "Parking slot management and automated token issuance",
    category: "Web & Systems",
    featured: false,
    timeline: "2023",
    summary: "An automated parking slot and token allocation system built with PHP and JavaScript.",
    problem: "Manual parking entry logging causes delays and inaccurate slot availability counts during peak hours.",
    solution: "Built a web tool that tracks open parking bays in real time and automatically issues tokens on vehicle entry.",
    stack: ["PHP", "JavaScript", "MySQL", "HTML5", "CSS3"],
    architecture: [
      "PHP scripts managing token generation, timestamps, and fee calculations upon exit.",
      "MySQL database tracking occupied vs. vacant parking bays.",
      "JavaScript updates on the interface showing current slot status."
    ],
    keyDecisions: [
      "Automated time difference calculations for duration-based fee calculation.",
      "Wrote simple, lightweight queries for instant slot lookups."
    ],
    githubUrl: "https://github.com/harshinisanjana/vehicle_token_dispensing_system",
    liveUrl: null
  }
];

export const SKILL_CATEGORIES = [
  {
    category: "Languages",
    description: "Programming and query languages",
    skills: ["Python", "Java", "JavaScript", "SQL", "HTML", "CSS"]
  },
  {
    category: "Backend & Systems",
    description: "Frameworks, runtimes, and APIs",
    skills: ["FastAPI", "Flask", "Node.js", "Express.js", "Spring Boot", "REST APIs", "WebSockets", "RabbitMQ"]
  },
  {
    category: "AI, ML & Vision",
    description: "Models, vision, and data processing",
    skills: ["TensorFlow", "Keras", "Scikit-Learn", "OpenCV", "CNNs", "NumPy", "Pandas", "Matplotlib"]
  },
  {
    category: "Frontend",
    description: "UI libraries and styling",
    skills: ["React.js", "Angular", "Tailwind CSS", "JavaScript", "HTML5", "CSS3", "Vite"]
  },
  {
    category: "Databases",
    description: "Database management",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Oracle"]
  },
  {
    category: "Tools & Platforms",
    description: "Development tools and environments",
    skills: ["Git", "GitHub", "Postman", "VS Code", "Vercel"]
  }
];

export const EXPERIENCE = [
  {
    role: "Software Developer Intern",
    company: "AheadOne Technologies",
    period: "Jul 2025 — Dec 2025",
    type: "Internship",
    location: "Tamil Nadu, India",
    highlights: [
      "Built full-stack web application features using Angular on the frontend and Spring Boot on the backend.",
      "Created REST API endpoints, input validation logic, and database queries.",
      "Worked with the team on debugging, code reviews, and testing features before release."
    ],
    technologies: ["Angular", "Spring Boot", "Java", "TypeScript", "REST APIs", "Postman"]
  }
];

export const EDUCATION = [
  {
    degree: "M.Sc Software Systems (5-Year Integrated)",
    institution: "Coimbatore Institute of Technology",
    period: "2023 — 2028",
    location: "Coimbatore, India",
    details: "Coursework: Data structures and algorithms, database design, backend development, operating systems, and system design."
  },
  {
    degree: "Higher Secondary Education",
    institution: "Sri Chaitanya Techno School",
    period: "2021 — 2023",
    location: "Coimbatore, India",
    details: "Physics, Chemistry, Mathematics and Biology as mainstream."
  },
  {
    degree: "Secondary School",
    institution: "Yuvabharathi Public School",
    period: "2011 — 2021",
    location: "Coimbatore, India",
    details: "Foundational secondary schooling."
  }
];
