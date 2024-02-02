import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand"  to="/">
            Huzaifa's Portfolio
          </Link>
          <button
            className="navbar-toggler text-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon text-light"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  My Work
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Resume
                </a>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="https://github.com/HuzaifaRizwan1231" target="_blank">
                <i class="fa-brands fa-github"></i>
                
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="https://www.linkedin.com/in/huzaifa-rizwan-36b54621b/" target="_blank">
                <i class="fa-brands fa-linkedin"></i>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="https://www.instagram.com/huzaifa_rizwan1231/" target="_blank">
                <i class="fa-brands fa-instagram"></i>
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
