import React from "react";
import {Link} from 'react-scroll'

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-3 pt-5">
      <div className="container">
        <div className="row text-center text-md-start">
          <div className="col-md-4 mb-4">
            <h5 className="text-success mb-3 fw-bold" style={{fontSize:'1.4rem'}}>🌿 About Us</h5>
            <p style={{fontSize:'1rem'}}>
              We’re a passionate community of growers sharing expert tips, guides, and green inspiration to help you cultivate your dream garden.
            </p>
          </div>

          <div className="col-md-4 mb-4">
            <h5 className="text-success mb-3 fw-bold" style={{fontSize:'1.4rem'}}>🌱 Quick Links</h5>
            <ul className="list-unstyled d-flex flex-column justify-content-center align-items-right" style={{fontSize:'1rem'}}>
              <Link to='home' smooth={true} duration={500} className="text-white text-decoration-none">Home</Link>
              <Link to='catalog' smooth={true} duration={500} className="text-white text-decoration-none">Catalog</Link>
              <Link to='highlights' smooth={true} duration={500} className="text-white text-decoration-none">Highlights</Link>
              <Link to='showcase' smooth={true} duration={500} className="text-white text-decoration-none">Showcase</Link>
            </ul>
          </div>

          <div className="col-md-4 mb-4">
            <h5 className="text-success mb-3 fw-bold" style={{fontSize:'1.4rem'}}>📬 Stay Connected</h5>
            <p style={{fontSize:'1rem'}}>Subscribe to get the latest tips and updates straight to your inbox.</p>
            <form className="d-flex">
              <input
                type="email"
                className="form-control me-2"
                placeholder="Your email"
              />
              <button className="btn btn-success" type="submit" style={{fontSize:'1.4rem'}}>Subscribe</button>
            </form>
          </div>
        </div>

        <hr className="border border-2 border-success" />
        <div className="text-center">
          <small>© {new Date().getFullYear()} 🌱 Verdantia. All rights reserved.</small><br />
          <small>
            Created with ❤️ by Michael Runsewe(The CodeKing 👑). <br />
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
