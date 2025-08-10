import React from "react";

const PlantCard = ({ plant }) => {
  return (
    <div className="card h-100 bg-dark border border-success shadow-sm" style={{borderRadius: "10px", border:'2px solid var(--accent-color)'}}>
      <img src={plant.image} className="card-img-top" alt={plant.name} />
      <div className="card-body">
        <h5 className="card-title text-success fw-bold">{plant.name}</h5>
        <p className="card-text text-white">{plant.description}</p>
        <ul className="list-unstyled text-white">
          <li>☀️ Sunlight: {plant.sun}</li>
          <li>💧 Water: {plant.water}</li>
          <li>🌡️ Season: {plant.season}</li>
          <li>🌱 Soil Type: {plant.soil}</li>
          <li>📈 Growth Rate: {plant.growthRate}</li>
        </ul>
      </div>
    </div>
  );
};

export default PlantCard;
