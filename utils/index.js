export const bklprojectList = [
  {
    name: "Gitlet",
    description:
      "Implemented a version control system that mimics some of the features of the popular system Git (add, commit, push, merge, etc.) through serialization. The project focuses intensively on data structures like HashMap and file manipulation.",
    tag: "Web Development",
    image: "/images/projects/gitlet.png",
    tech: ["Java", "Version Control", "HashMap", "Serialization"],
    course: "CS 61B: Data Structures",
  },
  {
    name: "SimpleDB Database",
    description:
      "Implemented a fully functional database with features such as B+ tree indexed data, Joins, Query optimizer, Queuing, Multigranular locking, and Recovery.",
    tag: "Database Systems",
    image: "/images/projects/simpledb.png",
    tech: [
      "Java",
      "Database",
      "B+ Tree",
      "Join/Query Optimization",
      "Concurrency",
    ],
    course: "CS 186: Introduction to Database Systems",
  },
  {
    name: "Pacman AI",
    description:
      "Implemented different versions of Pacman agents AI each using distinctive strategies, such as expectimax search, Q-learning, and Particle Filtering based on Bayes Net inference.",
    tag: "Artificial Intelligence",
    image: "/images/projects/pacman.png",
    tech: [
      "Python",
      "AI",
      "Search",
      "Reinforcement Learning",
      "Bayesian Inference",
    ],
    course: "CS 188: Introduction to Artificial Intelligence",
  },
  {
    name: "2D World Engine",
    description:
      "Created an engine for generating explorable 2D tile-based worlds. The project involved the entire development cycle from ideation to presentation, focusing on software engineering principles and handling complex codebases.",
    tag: "Software Engineering",
    image: "/images/projects/2dworld.png",
    tech: [
      "Java",
      "Software Engineering",
      "Procedural generation",
      "Pseudorandomness",
    ],
    course: "CS 61B: Data Structures",
  },
  {
    name: "Secure File Sharing System",
    description:
      "Designed a secure file sharing system using encryption techniques to ensure data confidentiality and integrity. The system includes user authentication, file storage and retrieval, and secure file sharing and revocation on an Unrestricted Access Database.",
    tag: "Security",
    image: "/images/projects/securefilesharing.png",
    tech: ["Java", "Encryption", "Hashing", "RSA", "AES"],
    course: "CS 161: Computer Security",
  },
  {
    name: "Web Server Breach",
    description:
      "Exploited a poorly designed website to understand common web vulnerabilities including Cross-Site Request Forgery (CSRF), SQL Injection, Cross-Site Scripting (XSS), and more. The project involved identifying and exploiting these vulnerabilities, and then implementing fixes to secure the website.",
    tag: "Web Security",
    image: "/images/projects/webserverbreach.png",
    tech: ["SQL", "Cybersecurity", "SQL Injection", "XSS", "CSRF", "IDOR"],
    course: "CS 161: Computer Security",
  },
];

export const randoprojects = [
  {
    name: "Polite Shell",
    description:
      "Well, turns out a basic shell is not too hard to build. An interactive command-line program that enforces politeness before executing commands. This shell adds a fun twist to your typical experience by requiring polite language and offering unique commands.",
    tag: "Shell",
    image: "/images/projects/politeshell.png",
    tech: ["Go", "Shell", "Unix/Linux"],
    course: "None",
    code: "https://github.com/jason-zhao-git/politeshell/tree/main",
    spec: "https://github.com/jason-zhao-git/politeshell/blob/main/README.md"
  },
]


export const FeaturedList = [
  {
    name: '"Quest-Flow" Interactive Quest Builder',
    description: (
      <div>
        <p>
          Developed AI-QuestBuilder, an innovative web application designed to
          create game-like achievements and complex workflows.
        </p>
        <p className="mt-2">Key features include:</p>
        <ul>
          <li>
            • <strong>Dynamic Node and Edge Management:</strong> Easily add and
            manage workflow components.
          </li>
          <li>
            • <strong>State Persistence:</strong> Maintains workflow integrity
            across sessions.
          </li>
          <li>
            • <strong>Graph Algorithms:</strong> Optimizes workflow creation and
            management.
          </li>
          <li>
            • <strong>Responsive Design:</strong> Adapts to various devices for
            a better user experience.
          </li>
          <li>
            • <strong>Intelligent Recommendations:</strong> Uses Gemini API for
            smart suggestions.
          </li>
        </ul>
        <p className="mt-2">
          This project showcases the seamless integration of advanced front-end
          technologies with intelligent backend services to deliver a robust and
          user-centric application.
        </p>
      </div>
    ),
    tag: "Web Development",
    image: "/images/projects/aiquest1.png",
    tech: ["Next.js", "React", "TypeScript", "JavaScript"],
    demo: "https://ai-powered-achvments.vercel.app/",
    code: "https://github.com/jason-zhao-git/ai-powered-achvments",
    spec: "https://github.com/jason-zhao-git/ai-powered-achvments",
  },

  {
    name: 'Pixelated Portfolio',
    description: (
      <div>
        <p>
          Built a personal website showcasing my portfolio and projects, designed to introduce myself in a fun and creative style.
        </p>
        <p className="mt-2">Key features include:</p>
        <ul>
          <li>
            • <strong>Fun and Engaging Design:</strong> Uses vibrant colors and animations to create an interactive user experience.
          </li>
          <li>
            • <strong>Email API Integration:</strong> Seamlessly handles contact form submissions with serverless functions.
          </li>
          <li>
            • <strong>Guestbook Backend:</strong> Utilizes Prisma to manage guestbook entries with ease and efficiency.
          </li>
          <li>
            • <strong>Responsive Layout:</strong> Ensures the site looks great on both desktop and mobile devices.
          </li>
          <li>
            • <strong>Projects and 3D Showcase:</strong> Features personal projects with dynamic content management. And experimented with multiple 3D effects using Three.js.
          </li>
        </ul>
        <p className="mt-2">
          This project combines modern web technologies to deliver a unique and engaging online presence, <strong>hope you emjoy it!</strong>
        </p>
      </div>
    ),
    tag: "Web Development",
    image: "/images/projects/personalweb.png", 
    tech: ["Next.js", "React", "Tailwind CSS", "JavaScript", "Prisma", "Three.js"],
    demo: "https://jingqiaozhao.dev/", 
    code: "https://github.com/jason-zhao-git/myprofolio", 
    spec: "https://github.com/jason-zhao-git/myprofolio/blob/master/README.md", 
  },
];
