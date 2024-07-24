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

export const FeaturedList = [
  {
    name: '"AI-Flow" Interactive Quest Builder',
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
    image: "/images/projects/aiquest2.png",
    tech: ["Next.js", "React", "TypeScript", "JavaScript"],
    demo: "https://ai-powered-achvments.vercel.app/",
    code: "https://github.com/jason-zhao-git/ai-powered-achvments",
    spec: "https://github.com/jason-zhao-git/ai-powered-achvments",
  },
  // Add more projects as needed
];
