import React, { useEffect, useState } from 'react'
import Projects from '../components/Projects'
import About from './About'
import MainImage from '../components/MainImage'

export default function Home(props) {
  const {aboutRef, projectsRef, ProjectsLinkClick, ContactLinkClick} = props;
  const [scrollToTop, setscrollToTop] = useState();
  useEffect(() => {
    setscrollToTop(window.scrollTo(0,0));
  }, [])
  
  return (
    <>
        <MainImage ProjectsLinkClick={ProjectsLinkClick} ContactLinkClick={ContactLinkClick}/>
        <About aboutRef={aboutRef}/>
        <Projects projectsRef={projectsRef}/>
    </>
  )
}
