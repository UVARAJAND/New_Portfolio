import { FaGithub, FaLinkedin, FaTelegram, FaDiscord } from "react-icons/fa6"
import { Mail } from "lucide-react"

export interface Project {
  category: string
  role: string
  title: string
  description: string
  tech: string[]
  screenshots: string[]
  github?: string
  live?: string
  video?: string
  linked?: string
}

export const siteContent = {
  hero: {
    name: "UVARAJAN D",
    role: "Backend Developer",
    specialty: "System Design",
    badge: "// available for work",
    valueProp:
      "I build scalable APIs, AI-integrated backends, and well-architected systems engineered for performance, built to last.",
    cta: {
      primary: "View My Work",
      secondary: "Download Resume",
      primaryHref: "#projects",
      secondaryHref: "",
    },
  },

  about: {
    sectionTag: "About Me",
    heading: "Building backends that scale, systems that last",
    paragraphs: [
      "I'm a Backend Developer from Cuddalore, India, currently pursuing my B.Tech in Computer Science Engineering at Manakula Vinayagar Institute of Technology, Puducherry (CGPA: 8.11 / 10). My passion lives at the intersection of system design, Python architecture, and AI integration — building backends that are not just functional, but scalable and maintainable.",
      "I've engineered asynchronous APIs with FastAPI, designed normalised database schemas, integrated deep learning models into server-side logic, and competed in national and global hackathons where I've consistently ranked at the top. I'm open to immediate relocation.",
    ],
    stats: {
      stat1: { value: "10+", label: "Hackathons" },
      stat2: { value: "5+", label: "Projects" },
      stat3: { value: "3+", label: "Experience" },
    },
    facts: [
      { label: "Location", value: "Cuddalore, India" },
      { label: "Education", value: "B.Tech Computer Science" },
      { label: "Graduation", value: "May 2026" },
      { label: "Status", value: "Open to Relocation" },
    ],
    profileImage: "/Uvarajan-image.png",
  },

  // skills: {
  //   sectionTag: "My Toolkit",
  //   heading: "Technical Arsenal",
  //   description:
  //     "A focused collection of technologies and frameworks I use to engineer robust, scalable digital systems.",
  //   categories: {
  //     languages: ["Python", "JavaScript", "SQL", "HTML5", "CSS3", "React.JS"],
  //     backend: ["FastAPI", "Django", "Flask", "RESTful APIs", "Microservices Architecture"],
  //     databases: ["PostgreSQL", "MongoDB", "SQLite", "MySQL", "ORM / SQLAlchemy"],
  //     devops: ["Git", "GitHub", "Linux", "Postman", "VS Code"],
  //     ai: [
  //       "LLM", "RAG", "LangChain", "OpenAI API", "Gemini API", "Knowledge Graphs",
  //     ],
  //   },
  // },
  skills: {
    sectionTag: "My Toolkit",
    heading: "Technical Arsenal",
    description:
      "A focused collection of technologies and frameworks I use to engineer robust, scalable digital systems.",
    categories: {
      languages: [
        "Python",
        "JavaScript",
        "SQL"
      ],

      frontend: [
        "HTML5",
        "CSS3",
        "React.js"
      ],

      backend: [
        "FastAPI",
        "Django",
        "Flask",
        "RESTful APIs",
        "Microservices Architecture"
      ],

      databases: [
        "PostgreSQL",
        "MongoDB",
        "MySQL",
        "SQLite"
      ],

      orm: [
        "SQLAlchemy"
      ],

      devops_tools: [
        "Git",
        "GitHub",
        "Linux"
      ],

      developer_tools: [
        "Postman",
        "VS Code"
      ]
    },
  },


  projects: {
    heading: "Selected Works",
    description: "A mix of backend systems, AI integrations, and frontend experiments — each one solving a real problem.",
    featured: [
      {
        category: "Backend",
        role: "Backend Developer & API Architect",
        title: "ALEC — AI-Powered Legal Document Analysis and Autonomous Contract Drafting",
        description: "Architected a scalable, asynchronous backend using FastAPI to handle high-concurrency requests for legal document parsing. Integrated BERT-based NLP and Knowledge Graphs to automate extraction of critical legal clauses and entity relationships — streamlining compliance workflows end to end.",
        tech: ["Python", "FastAPI", "BERT", "Knowledge Graphs", "React.js"],
        screenshots: ["/Alec/alec-1.png", "/Alec/alec-2.png", "/Alec/alec-3.png", "/Alec/alec-4.png", "/Alec/alec-5.png", "/Alec/alec-6.png", "/Alec/alec-7.png"],
        github: "https://github.com/UVARAJAND/Autonomous-Legel-Entity-for-Contracts",
        live: "#",
        video: "https://drive.google.com/file/d/1bKCoWdERycc82azJUOtogVlIBtL_ivqL/view?usp=sharing",
        linked: "https://www.linkedin.com/posts/uvarajan-dev_unisyssip2025-semifinalist-innovation-activity-7348619493264289793-V4nJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD97DokBW5jsKqv3XKF7fm3oTT4yVOF08uU",
      },
      {
        category: "Computer Vision",
        role: "Backend Engineer",
        title: "Real-Time Product Detection and Freshness Analysis System",
        description: "Built a high-performance backend capable of processing real-time video streams for product detection and freshness analysis in retail environments. Designed the API structure to support multiple concurrent data streams, orchestrating Deep Learning model inference with server-side logic for seamless e-commerce operations.",
        tech: ["Python", "FastAPI", "Deep Learning", "Computer Vision", "OpenCV"],
        screenshots: ["/Product-Detection/img-10.png", "/Product-Detection/img-1.jpg", "/Product-Detection/img-2.jpg", "/Product-Detection/img-3.jpg", "/Product-Detection/img-4.jpg", "/Product-Detection/img-5.jpg", "/Product-Detection/img-6.jpg", "/Product-Detection/img-7.jpg", "/Product-Detection/img-8.png", "/Product-Detection/img-9.png"],
        github: "https://github.com/UVARAJAND/object-detection-text-extraction-and-freshness-detection",
        live: "#",
        video: "https://drive.google.com/file/d/1mPSv3czdib54swPh1M5bKPOvgcOw9Z_V/view?usp=sharing",
        linked: "https://www.linkedin.com/posts/uvarajan-dev_teamproject-frontenddevelopment-yolov8-activity-7272621270792310784-5GWV?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD97DokBW5jsKqv3XKF7fm3oTT4yVOF08uU",
      },
      {
        category: "AI / ML",
        role: "API Developer",
        title: "OpenBook AI",
        description: "An experimental AI chatbot processor that interfaces dynamically with user-provided text databases — exploring open-book question answering using transformer-based models.",
        tech: ["Python", "Flask", "Transformers", "LLMs"],
        screenshots: ["/OpenBookAI/img-5.png", "/OpenBookAI/img-1.png", "/OpenBookAI/img-2.png", "/OpenBookAI/img-3.png", "/OpenBookAI/img-4.png"],
        github: "https://github.com/UVARAJAND/OpenBookAI",
        live: "#",
      },


    ] as Project[],
    hidden: [
      {
        category: "Fullstack",
        role: "Fullstack Developer",
        title: "Drive Streamer",
        description: "A web‑based file explorer built with FastAPI and a frontend of HTML, CSS, and JavaScript. It allows users to interact with a local directory through a clean UI—enabling them to browse folders, upload or create files, make new folders, and delete unneeded items.",
        tech: [
          "HTML5",
          "CSS3",
          "JavaScript",
          "FastAPI",
          "Python"
        ],
        screenshots: [
          "/DriveStreamer/img-1.png",
          "/DriveStreamer/img-2.png",
        ],
        github: "https://github.com/UVARAJAND/Drive-Streamer",
        live: "#"
      },
      {
        category: "Generative AI",
        role: "Data Annotator, API Developer, Backend Engineer",
        title: "AI-Powered Knowledge Retrieval with Agentic RAG",
        description: "Developed an AI-powered Agentic Retrieval-Augmented Generation (RAG) pipeline for the NYD Hackathon to extract, understand, and communicate wisdom from the Bhagavad Gita and Yoga Sutras. Curated and annotated the test datasets, designed the core API endpoints, and built a backend to manage multi-agent LLM inferences, chat interactions, and vector database queries.",
        tech: [
          "Python",
          "Agentic RAG",
          "Ollama",
          "Pinecone",
          "FastAPI",

        ],
        screenshots: [
          "/RAG-System/img-1.png",
          "/RAG-System/img-2.png",
          "/RAG-System/img-3.png",
          "/RAG-System/img-4.png"

        ],
        github: "https://github.com/UVARAJAND/NYD-Hackathon",
        live: "#",
        video: "https://drive.google.com/file/d/1hamvELwKoyN44bXj4EsQwxoawWfdWGTS/view?usp=sharing",
        linked: "#"
      },
      {
        category: "Backend",
        role: "Full Stack Developer",
        title: "Receipt Analyzer",
        description: "An full-stack web application for uploading, extracting, analyzing, and managing receipts and bills. It uses OCR and LLM-powered parsing to extract details like vendor, amount, date, and category from images or PDFs. Includes powerful search, filtering, pagination, and statistical insights.",
        tech: ["Python", "FastAPI", "OCR", "LLM", "SQLite", "React JS"],
        screenshots: ["/ReceiptAnalyzer/img-6.png", "/ReceiptAnalyzer/img-1.png", "/ReceiptAnalyzer/img-2.png", "/ReceiptAnalyzer/img-3.png", "/ReceiptAnalyzer/img-4.png", "/ReceiptAnalyzer/img-5.png"],
        github: "https://github.com/UVARAJAND/Task_Storager",
        live: "#",
      },
      {
        category: "AI / ML",
        role: "Backend Engineer",
        title: "SkillSync — Resume Parser & Skills Matcher",
        description: "A Python-based web app for extracting and analysing resume PDFs using NLP — custom NER and fuzzy matching categorise education, skills and experience with high accuracy.",
        tech: ["Python", "NLP", "NER", "Fuzzy Matching", "Pandas"],
        screenshots: ["/Skillsync/img-1.png", "/Skillsync/img-2.png", "/Skillsync/img-3.png"],
        github: "https://github.com/UVARAJAND/SkillSync",
        live: "#",
        video: "#",
        linked: "https://www.linkedin.com/posts/uvarajan-dev_teamproject-frontenddevelopment-middlewareengineering-activity-7272607059886370816-3x3e?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD97DokBW5jsKqv3XKF7fm3oTT4yVOF08uU",
      },
      {
        category: "Backend",
        role: "Full Stack Developer",
        title: "Task Storager",
        description: "Designed a normalised relational database schema in SQLite to efficiently manage user tasks, priorities and status. Built on Django with secure Auth0-concept authentication, RBAC, and optimised ORM queries using select_related / prefetch_related to eliminate N+1 patterns.",
        tech: ["Django", "SQLite", "HTML", "CSS", "ORM"],
        screenshots: ["/TaskStorage/img-1.png"],
        github: "https://github.com/UVARAJAND/Task_Storager",
        live: "#",
        linked: "https://www.linkedin.com/posts/uvarajan-dev_im-happy-to-share-this-task-storager-project-activity-7272594355176005632-cRKf?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD97DokBW5jsKqv3XKF7fm3oTT4yVOF08uU",
      },
      {
        category: "Frontend",
        role: "Frontend Developer",
        title: "Weather Card",
        description: "An interactive weather dashboard displaying real-time conditions — wind speed, humidity, temperature — for any city or district, built with clean CSS micro-animations and a live weather API.",
        tech: ["HTML", "CSS", "JavaScript", "Weather API"],
        screenshots: ["/Weather_Card/img-1.png"],
        github: "https://github.com/UVARAJAND/Weather_card",
        live: "https://uvarajand.github.io/Weather_card/",
      },

      {
        category: "Frontend",
        role: "Frontend Developer",
        title: "CodePen Clone",
        description: "A feature-rich CodePen clone developed using React.js, allowing users to write, preview, and share HTML, CSS, and JavaScript code snippets in real-time. It features a live preview pane, theme customization, and local storage support for automatic code persistence.",
        tech: [
          "React.js",
          "Tailwind CSS",
          "JavaScript",
          "HTML5",
          "CSS3",
          "Babel"
        ],
        screenshots: [
          "https://placehold.co/1000x600/1A1A24/10B981?text=Codepen+Clone",
          "/CodePen/img-1.png",
        ],
        github: "https://github.com/UVARAJAND/Codepen-Clone",
        live: "https://uvarajand.github.io/Codepen-Clone"
      }
    ] as Project[],
  },

  systemDesign: {
    heading: "System Design",
    description:
      "Real architectural decisions from my projects — the problem, the choice, and the trade-off.",
    designs: [
      {
        tag: "// async design",
        title: "Asynchronous High-Concurrency API Architecture",
        description:
          "Architected the ALEC backend using FastAPI's async request handling to serve simultaneous legal document parsing jobs. Chose async over sync workers to minimise blocking I/O on NLP inference calls — enabling the server to handle multiple heavy requests without thread starvation.",
        decisionLabel: "async over sync",
        decisionValue: "3× throughput under load",
      },
      {
        tag: "// stream processing",
        title: "Real-Time Stream Processing Pipeline",
        description:
          "Designed a multi-stream video ingestion backend for the Product Detection System. The API layer is decoupled from the inference engine via an internal queue, enabling horizontal scaling without touching the ML model code and ensuring full CPU isolation between inference and serving layers.",
        decisionLabel: "queue isolation",
        decisionValue: "ML fully decoupled from API",
      },
      {
        tag: "// pagination design",
        title: "Scalable Pagination for Large Record Sets",
        description:
          "Designed the receipt data retrieval layer of the Receipt Analyzer to handle thousands of records without performance degradation. Evaluated offset pagination vs cursor-based pagination — offset queries scan all skipped rows on every request, making them O(n) at scale. Switched to cursor-based pagination using an indexed timestamp pointer, keeping retrieval O(1) regardless of dataset size.",
        decisionLabel: "cursor over offset",
        decisionValue: "O(1) retrieval at 10,000+ records",
      },
    ],
  },

  achievements: {
    heading: "Achievements",
    items: [
      {
        rank: "1st Prize",
        title: "CODE IQ Hackathon",
        desc: "Built an optimised crowd-counting algorithm with superior accuracy",
        span: "md:col-span-2",
      },
      {
        rank: "Top 10 Global",
        title: "Unisys SIP 2025",
        desc: "Ranked top 10 out of 350+ international projects",
        span: "md:col-span-2",
      },
      {
        rank: "Finalist",
        title: "HackRx 6.0",
        desc: "Recognised for innovative system problem-solving under pressure",
        span: "md:col-span-2",
      },
      {
        rank: "Team Lead",
        title: "CASTILO'25 Hackathon",
        desc: "Led 4-member team — sprint planning, code review",
        span: "md:col-span-3",
      },
      {
        rank: "Published Author",
        title: "Research Papers",
        desc: "Co-authored papers on Hydroenergen & AI-Driven Telehealth Systems",
        span: "md:col-span-3",
      },
    ],
  },

  contact: {
    callToAction: "Open to opportunities",
    heading: "Let's build something",
    headingHighlight: "great together.",
    description:
      "I'm actively looking for backend and system design roles and open to immediate relocation to Luxembourg. Whether it's a full-time position, freelance project, or just a conversation — drop me a message.",
    emailLabel: "EMAIL ME AT",
    emailValue: "uvarajandev@gmail.com",
    emailLink: "mailto:uvarajandev@gmail.com",
    // phone: "+91 9363795016",
    location: "Cuddalore, India · Open to relocation.",
    // visaNote: "Requires work permit sponsorship · Eligible for Luxembourg Work Permit",
    socials: [
      { icon: FaGithub, href: "https://github.com/UVARAJAND", label: "GitHub" },
      { icon: FaLinkedin, href: "https://www.linkedin.com/in/uvarajan-dev/", label: "LinkedIn" },
      // { icon: Mail, href: "mailto:uvarajandev@gmail.com", label: "Email" },
      // { icon: FaTelegram, href: "https://t.me/uvarajand", label: "Telegram" },
      { icon: FaDiscord, href: "https://discord.com/users/1084096662412210376", label: "Discord" },
    ],
    // resumeText: "Download Resume PDF",
    // resumeHref: "",
  },

  navbar: {
    logo: "UD",
    links: ["Home", "About", "Skills", "Projects", "Contact"],
    cta: "Hire Me",
    ctaHref: "#contact",
  },

  footer: {
    brand: "UVARAJAN D",
    copyright: "© 2026 UVARAJAN D. All rights reserved.",
    links: {
      privacy: "",
      github: "",
      linkedin: "",
    },
  },
}