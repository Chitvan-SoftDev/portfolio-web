import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Experience from './Components/Experience';
import { useState } from 'react';
import Projects from './Components/Projects';

function App() {
  const [data, setData] = useState({
    home: {
      designation: "FULL-STACK SOFTWARE DEVELOPER",
      introduction: `Highly motivated Full Stack Developer with 2+ years of experience building dynamic web applications. 
  Proficient in a diverse tech stack. Possesses a strong understanding of both frontend and backend development principles. 
  Proven ability to design, develop, and maintain scalable and secure applications.`},
    work_ex: [{
      company_name: "Akal Information Systems Ltd",
      role: "Software Developer",
      tenure: "July 2023 - Present",
      description: `Leveraged Angular, HTML, CSS, TypeScript and JavaScript to construct a single-page application (SPA) for a smooth user experience.\nDeveloped and maintained high-performance, RESTful backend APIs utilizing NodeJS and AWS DynamoDB, reducing response times by 30%.\nCollaborated with Java, Spring and PostgreSQL to build a scalable and secure backend infrastructure.`
    },
    {
      company_name: "Intel Corporation",
      role: "Software Developer Intern",
      tenure: "August 2022 – June 2023",
      description: `Designed interactive user interfaces (UI) with Angular, HTML, CSS, TypeScript and JavaScript to facilitate intuitive user interaction with automation tools.\nDeveloped backend functionalities utilizing Python, Django, and MongoDB for efficient data manipulation and storage, achieving a significant improvement in data processing speed.`
    },
    {
      company_name: "Pepcoding Education (OPC) Private Limited ",
      role: "Web Developer Intern",
      tenure: "November 2021 – May2022",
      description: `Contributed to the optimization and functionality of the official Pepcoding website (NADOS), utilizing the MERN stack (MongoDB, Express.js, React, Node.js).\nDeveloped backend functionalities utilizing the MERN stack for efficient data processing and storage.`
    }],
    projects:[{
      title: "TICA",
      company_name: "Akal Information Systems Ltd",
      description:"Developed an e-commerce website (TICA) from scratch, leveraging Angular, HTML, CSS, and TypeScript for an engaging user experience, coupled with NodeJS and AWS for a scalable and secure backend."

    },
    {
      title: "Protection of Plant Varieties and Farmers' Rights Authority (PPVFRA)",
      company_name: "Akal Information Systems Ltd",
      description:"Revamped the official website of the PPVFRA, utilizing HTML, CSS, and JavaScript to create an informative and accessible platform, supported by Java, Spring, and PostgreSQL for robust data management."

    },
    {
      title: "BKC Automation ",
      company_name: "Intel Corporation",

    }
  ]
  });
  return (
    <>
      <NavBar />
      <Home data={data.home}/>
      <Experience data={data.work_ex}/>
      <Projects data={data.projects}/>
    </>
  );
}

export default App;
