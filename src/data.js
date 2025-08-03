import ppvfraLogo from './assets/ppvfra.png'
import ticaLogo from './assets/tica.png'
import intelLogo from './assets/intel.png'

export const DATA = {
  home: {
    designation: "FULL-STACK SOFTWARE DEVELOPER",
    introduction: `Highly motivated Full Stack Developer with 3 years of experience building dynamic web applications. Proficient in a diverse tech stack.
Possesses a strong understanding of both frontend and backend development principles. Proven ability to design, develop, and maintain
scalable and secure applications.`},
  Expertise: [
    {
      title: 'Software Development',
      Description: 'Experienced in both functional and OOP: Dart, Python, Java, JavaScript, TypeScript.'
    },
    {
      title: 'Frontend Dev React, NextJS',
      Description: 'Passionate about UI/UX. Over 5 years of development experience in HTML, CSS, JS, React and NextJS frameworks.'
    },
    {
      title: 'Flutter Dev Android, iOS',
      Description: 'Skilled in developing hybrid mobile apps and cross-platform solutions using the Flutter framework.'
    },
  ],
    work_ex: [{
    company_name: "Akal Information Systems Ltd",
    role: "Software Developer",
    tenure: "July 2023 - Present",
    description: `Leveraged Angular, HTML, CSS, TypeScript and JavaScript to construct a single-page application (SPA) for a smooth user experience.\nDeveloped and maintained high-performance, RESTful backend APIs utilizing NodeJS and AWS DynamoDB, reducing response times by 30%.\nCollaborated with Java, Spring and PostgreSQL to build a scalable and secure backend infrastructure.`,
    job_location: 'New Delhi, Delhi',
    company_web: 'https://www.akalinfo.com/',
    image: intelLogo,
    skills: ['Angular', 'HTML', 'CSS', 'TypeScript', 'JavaScript', 'Node.js', 'AWS DynamoDB', 'Java', 'Spring', 'PostgreSQL'],
  },
  {
    company_name: "Intel Corporation",
    role: "Software Developer Intern",
    tenure: "August 2022 – June 2023",
    description: `Designed interactive user interfaces (UI) with Angular, HTML, CSS, TypeScript and JavaScript to facilitate intuitive user interaction with automation tools.\nDeveloped backend functionalities utilizing Python, Django, and MongoDB for efficient data manipulation and storage, achieving a significant improvement in data processing speed.`,
    job_location: 'Remote',
    company_web: 'https://www.intel.com/content/www/us/en/homepage.html',
    image: intelLogo,
    skills: ['Angular', 'HTML', 'CSS', 'TypeScript', 'JavaScript', 'Node.js', 'Python', 'Django', 'MongoDB'],

  },
  {
    company_name: "Pepcoding Education (OPC) Private Limited ",
    role: "Web Developer Intern",
    tenure: "November 2021 – May2022",
    description: `Contributed to the optimization and functionality of the official Pepcoding website (NADOS), utilizing the MERN stack (MongoDB, Express.js, React, Node.js).\nDeveloped backend functionalities utilizing the MERN stack for efficient data processing and storage.`,
    job_location: 'Noida',
    company_web: 'https://www.intel.com/content/www/us/en/homepage.html',
    image: intelLogo,
    skills: ['MongoDB', 'Express.js', 'React', 'Node.js', 'HTML', 'CSS', 'JavaScript'],

  }],
  projects: [{
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
    title: "BKC Automation ",
    company_name: "Intel Corporation",
    description: "Streamlined manual workflows by creating an automation tool (BKC Automation) using Angular, HTML, CSS, TypeScript, Python, Django, and MongoDB. This tool automates tasks like identifying build differences and requesting updates from owners, streamlining the build process.",
    image: intelLogo

  }
  ]
};