import React, { useEffect, useState } from "react";

export default function About() {

  const [scrollToTop, setscrollToTop] = useState();
  useEffect(() => {
    setscrollToTop(window.scrollTo(0,0));
  }, [])
  
  return (
    <>
      <div className="about-section container">
        <div className="row ">
          <div className="col-md-12 d-flex">
            <img src="/assets/124560775.jpeg" alt="" className="w-100 about-image" />
          </div>
          <div className="col-md-12 mt-4 aboutDesc">
            <h2>
              <b>A Bit About Me</b>
            </h2>
            <p>
             I am an undergraduate student currently studying Software Engineering. Exporing different fields of tech, eager to learn, I am confident that with hardwork and dedication, I can earn great success. I live in Lahore, Pakistan which is a country full of diversity, beauty, and with a need of technological advancement. Let's play a part in that together! I also love cats :) 
            </p>
            
            <h2>
              <b>My Education</b>
            </h2>
            <p>
              <h5>National University of Computer and Emerging Sciences</h5> 
              Bachelor's degree, Computer Software Engineering <br />
              Aug 2022 - 2026 <br /> <hr />
              <h5>Punjab College of Science, Muslim Town, Lahore</h5> 
              FSC (Pre-Engineering) <br />
              Oct 2020 - Jul 2022  <br />
              Grade: 1047/1100 A+ <br /> <hr />
              <h5>Divisional Public School, Model Town, Lahore</h5> 
              Matric (Computer Science) <br />
              Apr 2008 - Mar 2020 <br />
              Grade: 1065/1100 A+ <br />
            </p>
            <h2>
              <b>My Skills</b>
            </h2>
              <ul className="d-flex list-unstyled skill-list flex-wrap ">
                <li>C++</li>
                <li>SQL</li>
                <li>REACT</li>
                <li>MONGO</li>
                <li>PHP</li>
                <li>EXPRESS</li>
                <li>NODE</li>
              </ul>

            
          </div>
         
        </div>
      </div>
    </>
  );
}
