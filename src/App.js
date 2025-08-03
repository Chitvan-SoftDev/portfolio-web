import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home/Home';
import MyExpertise from './Components/MyExpertise/MyExpertise';
import { useState } from 'react';
import Projects from './Components/Projects/Projects';
import { DATA } from './data';
// import Cursor from './Components/Cursor/Cursor';
import AnimatedCursor from "react-animated-cursor"
import WorkExp from './Components/WorkExp/WorkExp';
import Footer from './Components/Footer/Footer';


function App() {

  return (
    <>
      <NavBar />
      <Home data={DATA.home}/>
      <MyExpertise data={DATA.work_ex}/>
      <Projects data={DATA.projects}/>
      <WorkExp data={DATA.work_ex}/>
      <Footer/>
      {/* <Cursor/> */}
    <AnimatedCursor
      innerSize={5}
      outerSize={30}
      innerScale={1}
      outerScale={2}
      outerAlpha={0}
      hasBlendMode={true}
      innerStyle={{
        backgroundColor: 'var(--cursor-color)'
      }}
      outerStyle={{
        border: '1px solid var(--cursor-color)'
      }}
    />
    </>
  );
}

export default App;
