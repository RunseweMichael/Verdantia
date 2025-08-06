import React from 'react';
import Typewriter from 'typewriter-effect';

function HeroSection() {
  return (
    <div className="container-fluid py-5 min-vh-100 d-flex text-left hero-section">
      <div className="p-4 hero-container">
        <div className='row'>
            <div className='col-md-10'>
        <h4 className="display-5 fw-bold mb-3 text-success typewriter-h4">
          <Typewriter
            options={{
              strings: [
                'Grow With Nature.',
                'Plant Today. Bloom Tomorrow.',
                'Your Garden Starts Here.',
                'WELCOME TO VERDANTIA!'
              ],
              autoStart: true,
              loop: true,
              pauseFor: 2000,
            }}
          />
        </h4>
        <p className="lead mb-4 typewriter-text" style={{width: '70%'}}>
          Discover expert gardening tips, sustainable practices, and everything you need to build a thriving green space.
        </p>
        <div className='d-flex gap-3 mb-3'>
        <a href="#get-started" className="btn btn-outline-success btn-lg text-white fw-semibold hero-btn">
          Browse Plants
        </a>
        <a href="#get-started" className="btn btn-outline-success btn-lg text-white fw-semibold hero-btn">
          Join the Community
        </a>
        </div>
        <h4 className='mt-4 text-success'>What We Offer:</h4>
        <ul className="list-unstyled mt-1 home-list">
          <li className="mb-2 list-link">🌼 Personalized planting guides</li>
          <li className="mb-2 list-link">🌞 Sustainable gardening tips</li>
          <li className="mb-2 list-link">💧 Water-wise planning</li>
        </ul>
        </div>

        
      </div>
      </div>
    </div>
  );
}

export default HeroSection;
