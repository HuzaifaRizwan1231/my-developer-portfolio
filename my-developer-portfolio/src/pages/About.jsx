import React from "react";

export default function About() {
  return (
    <>
      <div className="about-section container">
        <div className="row ">
          <div className="col-md-6">
            <img src="src/images/Picture.jpg" alt="" className="w-100 " />
          </div>
          <div className="col-md-6 ">
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
            
          </div>
          <div className="col-md-6">
          <h2>
              <b>My Skills</b>
            </h2>
              <ul className="d-flex list-unstyled">
                <li>C++</li>
                <li>SQL</li>
              </ul>
           
            <h2>
              <b>My Hobbies</b>
            </h2>
          </div>
          <div className="col-md-6">
            <img src="src/images/Picture.jpg" alt="" className="w-100 " />
          </div>
        </div>
      </div>
    </>
  );
}
