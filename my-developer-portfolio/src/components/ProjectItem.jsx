import { useAnimation, useInView, motion } from "framer-motion";
import React, { useEffect, useRef } from "react";

export default function ProjectItem(props) {
  const { name, description, techUsed, code, liveSite, image ,invert} = props;

  const projectRef = useRef(null);

  const isInView = useInView(projectRef);

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("show");
    }
    console.log(isInView);
  }, [isInView]);

  const projectVariant = {
    hidden: { opacity: 0, y: 75 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut", delay: 0.25 },
    },
  };

  return (
    <>
      <motion.div
        ref={projectRef}
        initial="hidden"
        animate={mainControls}
        variants={projectVariant}
        className="col-xl-8 col-lg-11 m-auto col-12 projectItemOnMobile"
      >
        <div class={`card text-center my-2 shadow-lg`}>
          <div className="row invert-on-mobile">

            {invert ? 
            <>
            {/* Description */}
            <div className="col-md-6">
              <div className="card-title">{name}</div>
              <div className="card-text">{description}</div>
              <ul className="d-flex justify-content-center mt-2 list-unstyled tech-list flex-wrap gap-md-2 gap-lg-4 gap-4">
                {techUsed.map((tech) => (
                  <li className="shadow-lg">
                    <img
                      src={`assets/techStack/${tech}.png`}
                      alt=""
                      className="w-100"
                    />
                  </li>
                ))}
              </ul>
              <div className="card-links d-flex justify-content-center gap-4 mt-4">
                <a target="_blank" href={code} className="code">
                  Code <i class="fa-brands fa-github"></i>
                </a>
                <a target="_blank" href={liveSite} className="demo">
                  Live Demo <i class="fa-solid fa-link"></i>
                </a>
              </div>
            </div>
            {/* Image */}
            <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
              <img
                src={`assets/${image}`}
                alt=""
                className="w-100 card-image shadow-sm"
              />
            </div>
            </>
            :
            <>
            {/* Image */}
            <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
              <img
                src={`assets/${image}`}
                alt=""
                className="w-100 card-image shadow-sm"
              />
            </div>
            {/* Description */}
            <div className="col-md-6">
              <div className="card-title">{name}</div>
              <div className="card-text">{description}</div>
              <ul className="d-flex justify-content-center mt-2 list-unstyled tech-list flex-wrap gap-md-2 gap-lg-4 gap-4">
                {techUsed.map((tech) => (
                  <li className="shadow-lg">
                    <img
                      src={`assets/techStack/${tech}.png`}
                      alt=""
                      className="w-100"
                    />
                  </li>
                ))}
              </ul>
              <div className="card-links d-flex justify-content-center gap-4 mt-4">
                <a target="_blank" href={code} className="code">
                  Code <i class="fa-brands fa-github"></i>
                </a>
                <a target="_blank" href={liveSite} className="demo">
                  Live Demo <i class="fa-solid fa-link"></i>
                </a>
              </div>
            </div>
            </>}
            
          </div>
        </div>
      </motion.div>
    </>
  );
}
