import ppvfraLogo from './assets/ppvfra.png'
import ticaLogo from './assets/tica.png'
import intelLogo from './assets/intel.png'
import pcLogo from './assets/PC-logo.png'
import nourLogo from './assets/nour-logo-dark.png'
import akalLogo from './assets/akallogo.png'
import trackzioLogo from './assets/trackzio-logo.png'
import antiqzyLogo from './assets/antiqzy-logo.png'
import rockzyLogo from './assets/rockzy-logo.png'
import insectoLogo from './assets/insecto-logo.png'

import { faHexagonNodesBolt } from '@fortawesome/free-solid-svg-icons';
import { faDisplay } from '@fortawesome/free-solid-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faNode } from '@fortawesome/free-brands-svg-icons';



export const DATA = {
  home: {
    designation: "FULL-STACK DEVELOPER / AI ENGINEER",
    introduction: `Full Stack Engineer with over 4 years of experience specializing in end-to-end backend architecture, AI pipeline integration, and scalable web applications. Proficient across a diverse tech stack including Node.js, Python, and modern vector databases (Qdrant, ChromaDB). Proven track record of designing secure, high-performance systems and managing concurrent cloud deployments across AWS and GCP to drive business impact.`
  },
  expertise: [
    {
      title: 'AI & ML Engineering',
      description: 'I specialize in architecting end-to-end AI pipelines, bridging the gap between research and production. By integrating advanced models (LLMs, DINOv2) and building high-performance vector search systems (Qdrant, ChromaDB), I design scalable architectures powering intelligent, data-driven applications.',
      icon: faHexagonNodesBolt,
    },
    {
      title: 'Software Development',
      description: 'Strong command of Object-Oriented Programming (OOP) and Data Structures & Algorithms (DSA). I apply analytical thinking to solve complex computational problems efficiently, backed by solving 500+ coding challenges and achieving top competitive programming ratings (5-star HackerRank).',
      icon: faDisplay,
    },
    {
      title: 'Frontend Dev',
      description: 'Expertise in building modern, highly responsive, and accessible user interfaces. I leverage frameworks like Angular and React alongside TypeScript to translate complex business requirements into seamless, intuitive single-page applications (SPAs) that deliver engaging user experiences.',
      icon: faReact,
    },
    {
      title: 'Backend & Cloud',
      description: 'Architecting secure, high-performance RESTful APIs and managing scalable data solutions with MongoDB and SQL. I specialize in Node.js and Python, orchestrating resilient backend infrastructure across AWS and GCP using Docker to ensure optimal performance and availability.',
      icon: faNode,
    },
  ],
  work_ex: [
    {
      company_name: "Trackzio",
      role: "Full Stack Developer",
      tenure: "Nov 2025 - Present",
      description: [
        "Engineered and deployed the backend infrastructure for 5+ AI-powered mobile apps simultaneously, managing the complete lifecycle from data scraping to production.",
        "Integrated advanced machine learning models (LLMs, CNNs, DINOv2) into core application features, optimizing pipeline efficiency from 55% to 90% on unknown datasets while leveraging vector databases (ChromaDB, Qdrant) for high-performance search and identification.",
        "Developed robust RESTful APIs utilizing Node.js, Express, and MongoDB to support concurrent traffic across parallel application environments.",
        "Orchestrated deployment and maintained resilient systems using Docker, AWS, and GCP to ensure high availability and optimal performance."
      ],
      job_location: 'Remote',
      company_web: 'https://www.trackzio.com/',
      image: trackzioLogo,
      skills: ['Node.js', 'Express', 'Python', 'JavaScript', 'MongoDB', 'Docker', 'AWS', 'GCP', 'LLMs', 'CNNs', 'DINOv2', 'Vertex AI', 'ChromaDB', 'Qdrant'],
    },
    {
      company_name: "Nour Beauty",
      role: "Full Stack Developer",
      tenure: "May 2024 - Nov 2025",
      description: [
        "Played a key role in building a scalable, high-performance e-commerce platform from the ground up using PHP (CodeIgniter), React, HTML, CSS, JavaScript, Node.js, and MySQL.",
        "Improved application performance by 20% by optimizing database queries and code.",
        "Developed and implemented secure coding practices to prevent common vulnerabilities.",
        "Managed a dedicated tech agency within a product-based company, overseeing the development and delivery of innovative software solutions."
      ],
      job_location: 'Remote',
      company_web: 'https://www.nour-beauty.com/',
      image: nourLogo,
      skills: ['PHP CI', 'React', 'HTML', 'CSS', 'JavaScript', 'Node.js', 'MySQL'],
    },
    {
      company_name: "Akal Information Systems Ltd",
      role: "Software Developer",
      tenure: "July 2023 - May 2024",
      description: [
        "Leveraged Angular, HTML, CSS, TypeScript, and JavaScript to construct a single-page application (SPA) for a smooth user experience.",
        "Developed and maintained high-performance, RESTful backend APIs utilizing NodeJS and AWS DynamoDB, reducing response times by 30%.",
        "Collaborated with Java, Spring, and PostgreSQL to build a scalable and secure backend infrastructure."
      ],
      job_location: 'New Delhi, Delhi',
      company_web: 'https://www.akalinfo.com/',
      image: akalLogo,
      skills: ['Angular', 'HTML', 'CSS', 'TypeScript', 'JavaScript', 'Node.js', 'AWS DynamoDB', 'Java', 'Spring', 'PostgreSQL'],
    },
    {
      company_name: "Intel Corporation",
      role: "Software Developer Intern",
      tenure: "August 2022 – June 2023",
      description: [
        "Designed interactive user interfaces (UI) with Angular, HTML, CSS, TypeScript, and JavaScript to facilitate intuitive user interaction with automation tools.",
        "Developed backend functionalities utilizing Python, Django, and MongoDB for efficient data manipulation and storage, achieving a significant improvement in data processing speed."
      ],
      job_location: 'Remote',
      company_web: 'https://www.intel.com/content/www/us/en/homepage.html',
      image: intelLogo,
      skills: ['Angular', 'HTML', 'CSS', 'TypeScript', 'JavaScript', 'Node.js', 'Python', 'Django', 'MongoDB'],

    },
    {
      company_name: "Pepcoding Education (OPC) Private Limited ",
      role: "Web Developer Intern",
      tenure: "November 2021 – May2022",
      description: ["Contributed to the optimization and functionality of the official Pepcoding website (NADOS), utilizing the MERN stack (MongoDB, Express.js, React, Node.js).",
        "Developed backend functionalities utilizing the MERN stack for efficient data processing and storage."],
      job_location: 'Noida',
      // company_web: 'https://www.intel.com/content/www/us/en/homepage.html',
      image: pcLogo,
      skills: ['MongoDB', 'Express.js', 'React', 'Node.js', 'HTML', 'CSS', 'JavaScript'],

    }],
  projects: [
    {
      title: "Antiqzy: AI Antique Identifier",
      company_name: "Trackzio",
      description: "Engineered the complete backend architecture for a live AI-driven marketplace app. Developed a high-performance identification pipeline utilizing DINOv2 and Qdrant for vector search. Built scalable RESTful APIs with Node.js and Express, integrated Vertex AI for advanced chatbot functionality, and deployed the full system on GCP with MongoDB for robust data management.",
      image: antiqzyLogo,
      url: "https://play.google.com/store/apps/details?id=com.trackzio.antiquevintage"
    },
    {
      title: "Rockzy: AI Rock Identifier",
      company_name: "Trackzio",
      description: "Engineered the complete backend infrastructure for a live AI-powered mobile app, managing the full lifecycle from custom data scraping to production deployment. Developed a high-performance identification pipeline integrating Convolutional Neural Networks (CNNs) and vector search. Built scalable RESTful APIs with Node.js and deployed the resilient system on GCP.",
      image: rockzyLogo,
      url: "https://play.google.com/store/apps/details?id=com.trackzio.minerals"
    },
    {
      title: "Insecto AI: Bug Identifier",
      company_name: "Trackzio",
      description: "Engineered the backend architecture for an AI-driven mobile app. Integrated advanced machine learning models and leveraged vector databases (ChromaDB, Qdrant) for high-performance search, successfully optimizing the identification pipeline efficiency from 55% to 90% on unknown datasets. Designed and deployed robust RESTful APIs using Node.js for seamless scalability.",
      image: insectoLogo,
      url: "https://play.google.com/store/apps/details?id=com.insect.trackzio"
    },
    {
      title: "NOUR",
      company_name: "Nour Beauty",
      description: "Developed a cutting-edge beauty e-commerce platform. Leveraged React for a key front-end module and PHP (CodeIgniter) for core functionalities to create an intuitive and visually appealing user interface. The back-end, powered by Node.js and SQL, provided a robust and scalable infrastructure for managing product data, user accounts, and order processing.",
      image: nourLogo,
      url: "https://www.nour-beauty.com/"
    },
    {
      title: "TICA",
      company_name: "Akal Information Systems Ltd",
      description: "Developed an e-commerce website (TICA) from scratch, leveraging Angular, HTML, CSS, and TypeScript for an engaging user experience, coupled with NodeJS and AWS for a scalable and secure backend.",
      image: ticaLogo,
      url: "https://shop.tica.nl/"
    },
    {
      title: "Protection of Plant Varieties and Farmers' Rights Authority (PPVFRA)",
      company_name: "Akal Information Systems Ltd",
      description: "Revamped the official website of the PPVFRA, utilizing HTML, CSS, and JavaScript to create an informative and accessible platform, supported by Java, Spring, and PostgreSQL for robust data management.",
      image: ppvfraLogo,
      url: "https://plantauthority.gov.in/"
    },
    {
      title: "BKC Automation",
      company_name: "Intel Corporation",
      description: "Streamlined manual workflows by creating an automation tool (BKC Automation) using Angular, HTML, CSS, TypeScript, Python, Django, and MongoDB. This tool automates tasks like identifying build differences and requesting updates from owners, streamlining the build process.",
      image: intelLogo

    },
    {
      title: "CQP Automation",
      company_name: "Intel Corporation",
      description: "Developed a comprehensive automation tool (CQP Automation) leveraging HTML, CSS, JavaScript, Python, and Django to automatically collect data metrics from platforms like Microsoft Teams and Netflix, enabling performance evaluation of Intel processors.",
      image: intelLogo

    },
    {
      title: "Nados",
      company_name: "Pepcoding Education (OPC) Private Limited",
      description: "Developed a social media website (Nados) using the MERN stack (MongoDB, Express. js, React, Node. js) for Pepcoding, enabling student interaction and code collaboration.",
      image: pcLogo

    }
  ]
};