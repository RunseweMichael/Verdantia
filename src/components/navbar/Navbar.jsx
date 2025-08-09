import React from "react";
import {Link} from 'react-scroll';

const Navbar = () => {

  const handleLogout = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/logout/', {
        method: 'POST',
        credentials: 'include',
      });

      if (response.ok) {
        window.location.href = '/';
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };


  return (
    <nav className="navbar navbar-expand-lg navbar-dark shadow-sm fixed-top w-100">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div
          className="navbar-brand fw-bolder text-success responsive-text navbar-title_sm"
          style={{
            backgroundColor: "transparent",
            fontSize: "2.5rem",
            fontFamily: "cursive",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          🌱 Verdantia
        </div>
        <button
          className="navbar-toggler border-success"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse fw-bold"
          id="navbarNavDropdown"
        >
          <ul
            className="navbar-nav mx-auto gap-2 py-3 px-2 d-flex justify-content-center align-items-center"
            style={{
              border: "1px solid white",
              borderRadius: "20px",
              backgroundColor: "transparent",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(10px)",
            }}
          >
            <li className="nav-item">
              <Link to='home' smooth={true} duration={500} className="nav-div text-white nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to='catalog' smooth={true} duration={500} className="nav-div text-white nav-link">
                Catalog
              </Link>
            </li>
            <li className="nav-item">
              <Link to='about' smooth={true} duration={500} className="nav-div text-white nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to='highlights' smooth={true} duration={500} className="nav-div text-white nav-link">
                Highlights
              </Link>
            </li>
            <li className="nav-item">
              <Link to='spotlight' smooth={true} duration={500} className="nav-div text-white nav-link">
                Spotlight
              </Link>
            </li>
            <li className="nav-item">
              <Link to='showcase' smooth={true} duration={500} className="nav-div text-white nav-link">
                Showcase
              </Link>
            </li>
            <li className="nav-item">
              <Link to='contact' smooth={true} duration={500} className="nav-div text-white nav-link">
                Contact
              </Link>
            </li>
            <button
              type="button"
              className="btn btn-outline-danger d-inline d-sm-none fw-bold"
              style={{ backdropFilter: "blur(20px)", fontSize: "1.2rem" }}
              onClick={handleLogout}
            >
              Logout
            </button>
          </ul>
          <button
            type="button"
            className="btn btn-outline-danger d-none d-lg-inline ms-4 fw-bold"
            style={{ backdropFilter: "blur(20px)" }}
             onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
