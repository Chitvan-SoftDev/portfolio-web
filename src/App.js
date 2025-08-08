import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import MyExpertise from './Components/MyExpertise/MyExpertise';
import { useState, useEffect } from 'react';
import Projects from './Components/Projects/Projects';
import { DATA } from './data';
// import Cursor from './Components/Cursor/Cursor';
import AnimatedCursor from "react-animated-cursor"
import WorkExp from './Components/WorkExp/WorkExp';
import Footer from './Components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom'


function App() {

  const [isMobile, setIsMobile] = useState(false);
  

  useEffect(() => {
    const handleResize = () => {
      // Adjust this breakpoint as needed for your definition of "mobile"
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial state
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  return (
    <BrowserRouter>
      <NavBar />
      <Home data={DATA.home}/>
      <MyExpertise data={DATA.expertise}/>
      <Projects data={DATA.projects}/>
      <WorkExp data={DATA.work_ex}/>
      <Footer/>
      {/* <Cursor/> */}

      {!isMobile && (
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
      )}

    </BrowserRouter>
  );
}

export default App;
