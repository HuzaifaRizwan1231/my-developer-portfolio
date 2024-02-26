import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [scrollToTop, setscrollToTop] = useState();
  const handleScroll = ()=>{
    setscrollToTop(window.scrollTo(0,0));
  }

  const handleLinkClick = ()=>{
    handleScroll();
    toggleNav();
  }
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

  
  return (
    <>
      <nav className="navbar shadow fixed-top navbar-expand-lg ">
        <div className="container-fluid">
          <Link className="navbar-brand"  to="/" onClick={handleLinkClick}>
            Huzaifa's Portfolio
          </Link>
          <button
            onClick={toggleNav}
            id="side-btn"
            className="button-class exception-button mx-2"
          >
            {isNavOpen ? <i class="fa-solid fa-xmark fa-xl"></i>: <i class="fa-solid fa-bars fa-lg"></i>}
            
          </button>
          <div ref={NavBarRef} className={`navbar-collapse ${isNavOpen ? "shows":"collapsings"}`}>
            <ul className="navbar-nav ms-auto my-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/" onClick={handleLinkClick}>
                  Home
                </Link>
              </li>
              <li className="nav-item" onClick={handleLinkClick}>
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="../resume/HuzaifaRizwan_Resume.pdf" download>
                  Resume
                </a>
              </li>
            
                <li className="nav-item">
                  <Link className="nav-link" to="https://github.com/HuzaifaRizwan1231" target="_blank">
                  <i class="fa-brands fa-github"></i>
                  <span>Github</span>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="https://www.linkedin.com/in/huzaifa-rizwan-36b54621b/" target="_blank">
                  <i class="fa-brands fa-linkedin"></i>
                  <span>LinkedIn</span>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="https://www.instagram.com/huzaifa_rizwan1231/" target="_blank">
                  <i class="fa-brands fa-instagram"></i>
                  <span>Instagram</span>
                  </Link>
                </li>
              
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li> */}
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
