import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ResumePDF from "/assets/Huzaifa_Rizwan.pdf";
import { motion } from "framer-motion";

export default function Navbar(props) {
  const { AboutLinkClick, ProjectsLinkClick, ContactLinkClick } = props;

  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  const handleLinkClick = () => {
    handleScroll();
    toggleNav();
  };

  const AboutClick = () => {
    AboutLinkClick();
    toggleNav();
  };

  const ProjectsClick = () => {
    ProjectsLinkClick();
    toggleNav();
  };

  const ContactClick = () => {
    ContactLinkClick();
    toggleNav();
  };

  const [isNavOpen, setNavOpen] = useState(false);
  const NavBarRef = useRef(null);

  useEffect(() => {
    //handling outside click
    const handleClickOutside = (event) => {
      if (NavBarRef.current && !NavBarRef.current.contains(event.target)) {
        const exceptionButton = document.querySelector(".exception-button");
        if (exceptionButton && exceptionButton.contains(event.target)) {
          return;
        }
        setNavOpen(false);
      }
    };
    // Add the click event listener to the document
    document.addEventListener("click", handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isNavOpen, NavBarRef]);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  const navItemVariant = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" onClick={handleLinkClick}>
            Huzaifa Rizwan
          </Link>
          <motion.div
            variants={navItemVariant}
            initial="hidden"
            animate="show"
            className="nav-item"
          >
            <a
              href={ResumePDF}
              download="Huzaifa_Rizwan_Resume"
              target="_blank"
              rel="noreferrer"
              className="resume-link-pc active"
              aria-current="page"
              onClick={handleLinkClick}
            >
              <i class="fa-solid fa-download"></i> Resume
            </a>
          </motion.div>
          <button
            onClick={toggleNav}
            id="side-btn"
            className="button-class exception-button mx-2"
          >
            {isNavOpen ? (
              <i class="fa-solid fa-xmark fa-xl"></i>
            ) : (
              <i class="fa-solid fa-bars fa-lg"></i>
            )}
          </button>
          <div
            ref={NavBarRef}
            className={`navbar-collapse ${isNavOpen ? "shows" : "collapsings"}`}
          >
            <ul className="navbar-nav ms-auto my-2 mb-lg-0">
              <motion.li
                variants={navItemVariant}
                initial="hidden"
                animate="show"
                className="nav-item"
              >
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                  onClick={handleLinkClick}
                >
                  Home
                </Link>
              </motion.li>
              <motion.li
                variants={navItemVariant}
                initial="hidden"
                animate="show"
                className="nav-item"
                onClick={AboutClick}
              >
                <Link className="nav-link">About</Link>
              </motion.li>
              <motion.li
                variants={navItemVariant}
                initial="hidden"
                animate="show"
                className="nav-item"
                onClick={ProjectsClick}
              >
                <Link className="nav-link">Projects</Link>
              </motion.li>
              <motion.li
                variants={navItemVariant}
                initial="hidden"
                animate="show"
                className="nav-item"
                onClick={ContactClick}
              >
                <Link className="nav-link">Contact</Link>
              </motion.li>
              <motion.div
                variants={navItemVariant}
                initial="hidden"
                animate="show"
                className="nav-item"
              >
                <a
                  href={ResumePDF}
                  download="Huzaifa_Rizwan_Resume"
                  target="_blank"
                  rel="noreferrer"
                  className="nav-link resume-link-mobile active"
                  aria-current="page"
                  onClick={handleLinkClick}
                >
                  <i class="fa-solid fa-download"></i> Resume
                </a>
              </motion.div>
              {/* <li className="nav-item">
                <a className="nav-link" href={ResumePDF} download="Huzaifa_Rizwan_Resume" target="_blank"
                rel="noreferrer">
                  Resume
                </a>
              </li> */}

              <motion.li
                variants={navItemVariant}
                initial="hidden"
                animate="show"
                className="nav-item"
              >
                <Link
                  className="nav-link"
                  to="https://github.com/HuzaifaRizwan1231"
                  target="_blank"
                >
                  <i class="fa-brands fa-github"></i>
                  <span>Github</span>
                </Link>
              </motion.li>

              <motion.li
                variants={navItemVariant}
                initial="hidden"
                animate="show"
                className="nav-item"
              >
                <Link
                  className="nav-link"
                  to="https://www.linkedin.com/in/huzaifa-rizwan-36b54621b/"
                  target="_blank"
                >
                  <i class="fa-brands fa-linkedin"></i>
                  <span>LinkedIn</span>
                </Link>
              </motion.li>

              <motion.li
                variants={navItemVariant}
                initial="hidden"
                animate="show"
                className="nav-item"
              >
                <Link
                  className="nav-link"
                  to="https://www.instagram.com/huzaifa_rizwan1231/"
                  target="_blank"
                >
                  <i class="fa-brands fa-instagram"></i>
                  <span>Instagram</span>
                </Link>
              </motion.li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
