import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css"; // optional for extra styling

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top custom-navbar">
      <div className="container">
        {/* Logo / Brand */}
        <a className="navbar-brand fw-bold d-flex align-items-center" href="#home">
          <img 
            src="/Test.png" 
            alt="NPG Software Solutions Logo" 
            className="navbar-logo me-2"
            width="40"
            height="40"
          />
          NPG Software Solutions
        </a>

        {/* Toggler/collapsible Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>

          {/* Get Started Button */}
          <a
            href="#contact"
            className="btn btn-danger ms-lg-3 mt-2 mt-lg-0"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
