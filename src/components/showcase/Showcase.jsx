import React from "react";

const Showcase = () => {
  const showcases = [
    {
      name: "Michael R.",
      location: "Lagos, Nigeria",
      image: "/garden/garden1.jpg",
      caption: "First apple harvest from my raised bed project!🍎🍏",
    },
    {
      name: "Marcus T.",
      location: "Nairobi, Kenya",
      image: "/garden/garden2.jpg",
      caption: "My rooftop herb garden. All grown in wooden planters!🌱🌿",
    },
    {
      name: "Zahra M.", 
      location: "Accra, Ghana",
      image: "/garden/garden3.jpg",
      caption: "Turning my tiny balcony into a floral paradise 🌼🌿",
    },
    {
      name: "Ada N.",
      location: "Texas, USA",
      image: "/garden/garden4.jpg",
      caption: "A masterpiece of gardening at my backyard 🍒🍇",
    },
    {
      name: "Sarah K.",
      location: "Bromley, UK",
      image: "/garden/garden5.jpg",
      caption: "Creating cozy vibes with pots, petals, and peace 💐🕊️",
    },
    {
      name: "John D.",
      location: "Paris, France",
      image: "/garden/garden6.jpg",
      caption: "From concrete to color. Blooming magic on my balcony 🌺🌿",
    },
  ];

  return (
    <div className="py-5 bg-dark text-white">
      <div className="container">
        <h2 className="text-success fw-bold text-center mt-5 pb-4 titles">🌍 Community Showcase</h2>
        <p className="text-center mb-5" style={{fontSize:'1.5rem'}}>
          See how plant lovers across Africa are cultivating beauty and sustainability in their own spaces.
        </p>

        <div className="row g-5">
          {showcases.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div
                className="card h-100 bg-dark border-success border-2 shadow"
                style={{ borderRadius: "20px" }}
              >
                <img
                  src={item.image}
                  alt={`${item.name}'s Garden`}
                  className="card-img-top"
                  style={{ borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }}
                />
                <div className="card-body text-start">
                  <h3 className="card-title text-success fw-bold" style={{fontSize:'1.5rem'}}>{item.name}</h3>
                  <p className="card-subtitle mb-2" style={{fontSize:'1.1rem', color:'lightgray'}}>{item.location}</p>
                  <p className="card-text text-white" style={{fontSize:'1rem'}}>{item.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <a href="/community/submit" className="btn btn-outline-success fw-bold" style={{fontSize:'1.5rem'}}>
            🌱 Submit Your Garden
          </a>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
