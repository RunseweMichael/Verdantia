import React from "react";

const AboutText = () => {
  return (
    <div className="py-5 text-center p-4" style={{backgroundImage:'url(/aboutusImg/about1.jpg)', backgroundSize:'cover', backgroundPosition:'center', backgroundRepeat:'no-repeat'}}>
      <div className="container-fluid">
        <h2 className="mb-4 mt-5 text-success fw-bold titles">
          🌿 ABOUT US – GROWING WITH PASSION
        </h2>
        <p className="lead text-white about" style={{fontSize: '1.5rem'}}>
          At <strong className="text-success fw-bold">Verdantia,</strong> we believe gardening is more than a hobby — it's a <strong className='text-success fw-bold'>connection to nature,</strong> a way to <strong className='text-success fw-bold'>nurture life,</strong> and a chance to <strong className='text-success fw-bold'>create something beautiful.</strong>
        </p>
        <p className="text-white about" style={{fontSize: '1.5rem'}}>
          Our <strong className="text-success fw-bold">Mission</strong> is to empower gardeners of all levels with practical tips, expert insights, and a welcoming community. From windowsill herbs to full landscape projects, we’re here to support your journey.
        </p>
        <p className="mb-5 text-success about-grow" style={{fontSize: '1.7rem'}}>
          <strong>Let’s grow something amazing — together. 🌱</strong>
        </p>

        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="fs-1">🌍</div>
            <h4 className="text-success fw-bold mt-2" style={{fontSize:'1.7rem'}}>Sustainability First</h4>
            <p className="text-white" style={{fontSize:'1.4rem'}}>Eco-friendly techniques for long-term growth.</p>
          </div>
          <div className="col-md-4 mb-4">
            <div className="fs-1">📚</div>
            <h4 className="text-success fw-bold mt-2" style={{fontSize:'1.6rem'}}>Knowledge You Can Trust</h4>
            <p className="text-white" style={{fontSize:'1.4rem'}}>Backed by science, shared with love.</p>
          </div>
          <div className="col-md-4 mb-4">
            <div className="fs-1">🤝</div>
            <h4 className="text-success fw-bold mt-2" style={{fontSize:'1.6rem'}}>Community-Driven</h4>
            <p className="text-white" style={{fontSize:'1.4rem'}}>Grow alongside fellow plant enthusiasts.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutText;
