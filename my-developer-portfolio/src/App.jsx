import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useRef } from 'react';

function App() {

  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const AboutLinkClick = ()=>{
    aboutRef.current.scrollIntoView();
  }

  const ProjectsLinkClick = ()=>{
    projectsRef.current.scrollIntoView();
  }

  const ContactLinkClick = ()=>{
    contactRef.current.scrollIntoView();
  }

  return (
    <>
      <Router>
        <Navbar AboutLinkClick={AboutLinkClick} ProjectsLinkClick={ProjectsLinkClick} ContactLinkClick={ContactLinkClick}/>
        <Routes>
          
          <Route path="/" element={<Home ProjectsLinkClick={ProjectsLinkClick} ContactLinkClick={ContactLinkClick}  aboutRef={aboutRef} projectsRef={projectsRef} />}/>
        </Routes>
        
        <Footer contactRef={contactRef}/>
      </Router>
    </>
  )
}

export default App
