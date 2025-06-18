import { useAnimation, useInView, motion } from "framer-motion";
import React, { useEffect, useRef } from "react";

export default function ProjectItem(props) {
  const {
    name,
    description,
    techUsed,
    contributors,
    image,
    invert,
    links,
    liveSite,
  } = props;

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
          <div className={`row ${invert ? "flex-row-reverse" : ""} `}>
            {/* Image */}
            <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
              <a href={liveSite} target="_blank">
                <img
                  src={`assets/${image}`}
                  alt=""
                  className="w-100 card-image shadow"
                />
              </a>
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
                      title={tech.toUpperCase()}
                    />
                  </li>
                ))}
              </ul>
              {/* Contributors */}
              {contributors.length > 0 && (
                <>
                  <div className="card-contributors">Contributors</div>
                  <ul className="d-flex justify-content-center mt-2 list-unstyled contributor-list flex-wrap gap-md-2 gap-lg-4 gap-4">
                    {contributors.map((contributor) => (
                      <li className="shadow-lg">
                        <a
                          target="_blank"
                          href={contributor.contributor_github_link}
                        >
                          <img
                            src={contributor.contributor_image}
                            alt=""
                            className="w-100"
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              <div className="card-links d-flex justify-content-center gap-4 mt-4">
                {links.map((link) => (
                  <a target="_blank" href={link.url}>
                    {link.name} <i class={link.imageClass}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
