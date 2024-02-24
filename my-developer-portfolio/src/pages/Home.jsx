import React, { useEffect, useState } from 'react'
import Projects from '../components/Projects'
import MainImage from '../components/MainImage'

export default function Home() {
  const [scrollToTop, setscrollToTop] = useState();
  useEffect(() => {
    setscrollToTop(window.scrollTo(0,0));
  }, [])
  
  return (
    <>
        <MainImage/>
        <Projects/>
    </>
  )
}
