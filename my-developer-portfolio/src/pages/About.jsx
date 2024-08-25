import React, { useEffect, useRef, useState } from "react";
import { delay, motion, useAnimation, useInView } from "framer-motion";

export default function About(props) {
  const { aboutRef } = props;

  const techStackRef = useRef(null);

  const isInView = useInView(techStackRef);

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("show");
    }
    console.log(isInView);
  }, [isInView]);

  const techStackVariant = {
    hidden: { opacity: 0, x: -125 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut", delay: 0.25 },
    },
  };
  return (
    <>
      <div ref={aboutRef} className="about-section container">
        <div className="row ">
          {/* <div className="col-md-12 d-flex">
            <img src="/assets/124560775.jpeg" alt="" className="w-100 about-image" />
          </div> */}
          <div className="col-md-10 col-sm-12 col-12 aboutDesc">
            <h2>
              <b>ABOUT ME</b>
            </h2>
            <p className="m-0">
              I am an undergraduate student currently studying{" "}
              <span>Software Engineering</span> at <span>FAST NUCES</span>{" "}
              Lahore. Exploring different fields of tech, eager to learn, I am
              confident that with hardwork and dedication, I can earn great
              success. I have great experience in Web Development with expertise
              in <span>REACT</span>, <span>EXPRESS</span> and <span>NODE</span>.
              I have developed full stack applications in <span>MERN</span>,{" "}
              <span>PHP</span> and <span>Java Spring Boot</span>. My interests
              also include AI/ML and Game development.
            </p>
          </div>
          <div className="col-md-10 col-sm-12 col-12 techStack">
            <h2>
              <b>TECH STACK</b>
            </h2>
            <ul
              ref={techStackRef}
              className="d-flex list-unstyled skill-list flex-wrap gap-4"
            >
              <motion.li
                variants={techStackVariant}
                initial="hidden"
                animate={mainControls}
                className="shadow-lg overflow-hidden"
              >
                <img src="assets/techStack/c++.png" alt="" className="w-100" />
              </motion.li>
              <motion.li
                variants={techStackVariant}
                initial="hidden"
                animate={mainControls}
                className="shadow-lg"
              >
                <img
                  src="assets/techStack/mysql.png"
                  alt=""
                  className="w-100"
                />
              </motion.li>
              <motion.li
                variants={techStackVariant}
                initial="hidden"
                animate={mainControls}
                className="shadow-lg"
              >
                <img
                  src="assets/techStack/sql-server.png"
                  alt=""
                  className="w-100"
                />
              </motion.li>
              <motion.li
                variants={techStackVariant}
                initial="hidden"
                animate={mainControls}
                className="shadow-lg"
              >
                <img
                  src="assets/techStack/react.png"
                  alt=""
                  className="w-100"
                />
              </motion.li>
              <motion.li
                variants={techStackVariant}
                initial="hidden"
                animate={mainControls}
                className="shadow-lg"
              >
                <img
                  src="assets/techStack/mongodb.png"
                  alt=""
                  className="w-100"
                />
              </motion.li>
              <motion.li
                variants={techStackVariant}
                initial="hidden"
                animate={mainControls}
                className="shadow-lg"
              >
                <img src="assets/techStack/php.png" alt="" className="w-100" />
              </motion.li>
              <motion.li
                variants={techStackVariant}
                initial="hidden"
                animate={mainControls}
                className="shadow-lg"
              >
                <img
                  src="assets/techStack/expressjs.png"
                  alt=""
                  className="w-100"
                />
              </motion.li>
              <motion.li
                variants={techStackVariant}
                initial="hidden"
                animate={mainControls}
                className="shadow-lg"
              >
                <img
                  src="assets/techStack/nodejs.png"
                  alt=""
                  className="w-100"
                />
              </motion.li>
              <motion.li
                variants={techStackVariant}
                initial="hidden"
                animate={mainControls}
                className="shadow-lg"
              >
                <img
                  src="assets/techStack/tailwindcss.png"
                  alt=""
                  className="w-100"
                />
              </motion.li>
              <motion.li
                variants={techStackVariant}
                initial="hidden"
                animate={mainControls}
                className="shadow-lg"
              >
                <img src="assets/techStack/java.png" alt="" className="w-100" />
              </motion.li>
              <motion.li
                variants={techStackVariant}
                initial="hidden"
                animate={mainControls}
                className="shadow-lg"
              >
                <img
                  src="assets/techStack/spring-boot.png"
                  alt=""
                  className="w-100"
                />
              </motion.li>
              <motion.li
                variants={techStackVariant}
                initial="hidden"
                animate={mainControls}
                className="shadow-lg"
              >
                <img
                  src="assets/techStack/thymeleaf.png"
                  alt=""
                  className="w-100"
                />
              </motion.li>
              <motion.li
                variants={techStackVariant}
                initial="hidden"
                animate={mainControls}
                className="shadow-lg"
              >
                <img
                  src="assets/techStack/python.png"
                  alt=""
                  className="w-100"
                />
              </motion.li>
              <motion.li
                variants={techStackVariant}
                initial="hidden"
                animate={mainControls}
                className="shadow-lg"
              >
                <img src="assets/techStack/html.png" alt="" className="w-100" />
              </motion.li>
              <motion.li
                variants={techStackVariant}
                initial="hidden"
                animate={mainControls}
                className="shadow-lg"
              >
                <img src="assets/techStack/css.png" alt="" className="w-100" />
              </motion.li>
              <motion.li
                variants={techStackVariant}
                initial="hidden"
                animate={mainControls}
                className="shadow-lg"
              >
                <img
                  src="assets/techStack/javascript.png"
                  alt=""
                  className="w-100"
                />
              </motion.li>
              <motion.li
                variants={techStackVariant}
                initial="hidden"
                animate={mainControls}
                className="shadow-lg"
              >
                <img
                  src="assets/techStack/mapbox.png"
                  alt=""
                  className="w-100"
                />
              </motion.li>
              <motion.li
                variants={techStackVariant}
                initial="hidden"
                animate={mainControls}
                className="shadow-lg"
              >
                <img src="assets/techStack/jwt.png" alt="" className="w-100" />
              </motion.li>
              <motion.li
                variants={techStackVariant}
                initial="hidden"
                animate={mainControls}
                className="shadow-lg"
              >
                <img src="assets/techStack/xml.png" alt="" className="w-100" />
              </motion.li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
