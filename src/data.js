import ppvfraLogo from './assets/ppvfra.png'
import ticaLogo from './assets/tica.png'
import intelLogo from './assets/intel.png'
import pcLogo from './assets/PC-logo.png'
import nourLogo from './assets/nour-logo-dark.png'
import akalLogo from './assets/akallogo.png'

import { faDisplay } from '@fortawesome/free-solid-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faNode } from '@fortawesome/free-brands-svg-icons';



export const DATA = {
  home: {
    designation: "FULL-STACK DEVELOPER",
    introduction: `Highly motivated Full Stack Developer with over 3 years of experience building dynamic web applications. Proficient in a diverse tech stack.
Possesses a strong understanding of both frontend and backend development principles. Proven ability to design, develop, and maintain
scalable and secure applications.`},
  expertise: [
    {
      title: 'Software Development',
      description: 'A strong command of Object-Oriented Programming (OOP) and Data Structures & Algorithms (DSA), applied to solve complex problems efficiently.',
      icon: faDisplay,
    },
    {
      title: 'Frontend Dev',
      description: 'Expertise in building modern, responsive, and intuitive user interfaces with Angular, React, and TypeScript.',
      icon: faReact,

    },
    {
      title: 'Backend Dev',
      description: 'Architecting and maintaining high-performance RESTful APIs and managing scalable database solutions using Node.js, Python, and other technologies.',
      icon: faNode,
    },
  ],
    work_ex: [
    {
    company_name: "Nour Beauty",
    role: "Full Stack Developer",
    tenure: "May 2024 - Present",
    description: [
      "Played a key role in building a scalable, high-performance e-commerce platform from the ground up using PHP (CodeIgniter), React, HTML, CSS, JavaScript, Node.js, and MySQL.",
      "Improved application performance by 20% by optimizing database queries and code.",
      "Developed and implemented secure coding practices to prevent common vulnerabilities.",
      "Managed a dedicated tech agency within a product-based company, overseeing the development and delivery of innovative software solutions."
    ],
    job_location: 'New Delhi, Delhi',
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