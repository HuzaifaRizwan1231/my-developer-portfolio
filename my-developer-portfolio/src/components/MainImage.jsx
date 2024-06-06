import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { delay, motion } from "framer-motion";

export default function MainImage(props) {
  const { ProjectsLinkClick, ContactLinkClick } = props;
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "<i>MERN Developer</i>",
        "<i>PHP Developer</i>",
        "<i>Full Stack Dev</i>",
      ],
      typeSpeed: 50,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  const mainContainerVariants = {
    hidden: { opacity: 0, x: -130 },
    show: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <>
      <div className="mainSection container-fluid">
        <div className="row mainRow">
          <div className="col-sm-7 overflow-hidden first-section col-12 m-auto d-flex flex-column ">
            <motion.div
              variants={mainContainerVariants}
              initial="hidden"
              animate="show"
              className="mainText m-auto"
            >
              Hi, This is <span className="typedJSText">Huzaifa!</span>
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -130 },
                  show: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 1, ease: "easeOut", delay: 0.5 },
                  },
                }}
                initial="hidden"
                animate="show"
                className="typedJSText"
              >
                <span ref={el}></span>
              </motion.div>
              <div className="buttons d-flex gap-md-4 gap-3 mt-4">
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -130 },
                    show: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 1, ease: "easeOut", delay: 1 },
                    },
                  }}
                  initial="hidden"
                  animate="show"
                >
                  <button
                    onClick={ProjectsLinkClick}
                    className="view-projcts-btn"
                  >
                    View Projects
                  </button>
                </motion.div>
                <motion.div
                  transition={{ duration: 1 }}
                  variants={{
                    hidden: { opacity: 0, x: -130 },
                    show: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 1, ease: "easeOut", delay: 1.5 },
                    },
                  }}
                  initial="hidden"
                  animate="show"
                >
                  <button
                    onClick={ContactLinkClick}
                    className="get-connected-btn"
                  >
                    Get Connected
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </div>
          <div className="overflow-hidden col-sm-5 second-section col-12 text-center d-flex justify-content-center align-items-end">
            <motion.img
              variants={{
                hidden: { y: 550 },
                show: { y: 0, transition: { duration: 1, ease: "easeOut" } },
              }}
              initial="hidden"
              animate="show"
              src="/assets/IMG-20230922-WA0014.jpg"
              alt=""
              className="about-image"
            />
          </div>
        </div>
      </div>
    </>
  );
}
