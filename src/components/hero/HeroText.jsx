import React from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";

function HeroSection() {
  return (
    <div className="container-fluid py-5 min-vh-100 d-flex text-left hero-section">
      <div className="hero-container">
        <div className="row">
          <div className="col-md-10 mx-auto">
            <h4
              className="fw-bold mb-4 pt-5 text-success typewriter-h4"
              style={{ fontSize: "3rem" }}
            >
              <Typewriter
                options={{
                  strings: [
                    "Grow With Nature.",
                    "Cultivate Your Passion.",
                    "Your Garden Starts Here.",
                    "Welcome To VERDANTIA!",
                  ],
                  autoStart: true,
                  loop: true,
                  pauseFor: 2000,
                }}
              />
            </h4>
            <p
              className="lead mb-5 typewriter-text"
              style={{ width: "80%", fontSize: "1.6rem" }}
            >
              Discover expert gardening tips, sustainable practices, and
              everything you need to build a thriving green space.
            </p>
            <div className="d-flex gap-3 mb-4">
              <Link
                to="catalog"
                className="btn btn-outline-success btn-lg text-white fw-bold hero-btn"
                style={{ fontSize: "1.5rem" }}
              >
                Browse Plants
              </Link>
              <a
                href="https://chat.whatsapp.com/invite/BYDyekMNKSyGVMijnb2aT7"
                className="btn btn-outline-success btn-lg text-white fw-bold hero-btn"
                style={{ fontSize: "1.5rem" }}
              >
                Join the Community
              </a>
            </div>
            <h4
              className="mt-5 text-success fw-bold what"
              style={{ fontSize: "2rem" }}
            >
              What We Offer:
            </h4>
            <ul className="list-unstyled mt-2 home-list">
              <li className="mb-2 list-link" style={{ fontSize: "1.4rem" }}>
                🌼 Personalized planting guides
              </li>
              <li className="mb-2 list-link" style={{ fontSize: "1.4rem" }}>
                🌞 Sustainable gardening tips
              </li>
              <li className="mb-2 list-link" style={{ fontSize: "1.4rem" }}>
                💧 Water-wise planning
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
