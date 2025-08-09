import React, { useEffect } from "react";
import { Link } from "react-scroll";
import { Collapse } from "bootstrap"; // ✅ Import Bootstrap's JS helper

const Navbar = () => {
  useEffect(() => {
    // Get the collapse element
    const navbarCollapse = document.getElementById("navbarNavDropdown");
    if (!navbarCollapse) return;

    // Create a Bootstrap Collapse instance
    const bsCollapse = new Collapse(navbarCollapse, { toggle: false });

    // Find all nav links
    const navLinks = navbarCollapse.querySelectorAll(".nav-link");

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        // Close only if in mobile view
        if (window.innerWidth < 992) {
          bsCollapse.hide();
        }
      });
    });

    // Cleanup on unmount
    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", () => {});
      });
    };
  }, []);

  const handleLogout = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/logout/", {
        method: "POST",
        credentials: "include",
      });

      if (response.ok) {
        window.location.href = "/";
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark shadow-sm fixed-top w-100">
      <div className="container-fluid d-flex justify-content-around align-items-center nav-con">
        <div
          className="navbar-brand fw-bolder text-success navbar-title_sm"
          style={{
            backgroundColor: "transparent",
            fontSize: "2rem",
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

        <div className="collapse navbar-collapse fw-bold" id="navbarNavDropdown">
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
              <Link to="home" smooth duration={500} className="nav-div text-white nav-link" style={{ fontSize: "1.2rem" }}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="catalog" smooth duration={500} className="nav-div text-white nav-link" style={{ fontSize: "1.2rem" }}>
                Catalog
              </Link>
            </li>
            <li className="nav-item">
              <Link to="about" smooth duration={500} className="nav-div text-white nav-link" style={{ fontSize: "1.2rem" }}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="highlights" smooth duration={500} className="nav-div text-white nav-link" style={{ fontSize: "1.2rem" }}>
                Highlights
              </Link>
            </li>
            <li className="nav-item">
              <Link to="spotlight" smooth duration={500} className="nav-div text-white nav-link" style={{ fontSize: "1.2rem" }}>
                Spotlight
              </Link>
            </li>
            <li className="nav-item">
              <Link to="showcase" smooth duration={500} className="nav-div text-white nav-link" style={{ fontSize: "1.2rem" }}>
                Showcase
              </Link>
            </li>
            <li className="nav-item">
              <Link to="contact" smooth duration={500} className="nav-div text-white nav-link" style={{ fontSize: "1.2rem" }}>
                Contact
              </Link>
            </li>
            <button
              type="button"
              className="btn btn-outline-danger d-inline d-sm-none fw-bold"
              style={{ backdropFilter: "blur(20px)" }}
              onClick={handleLogout}
            >
              Logout
            </button>
          </ul>
          <button
            type="button"
            className="btn btn-outline-danger d-none d-lg-inline ms-4 fw-bold"
            style={{ backdropFilter: "blur(20px)", fontSize: "1.5rem" }}
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
