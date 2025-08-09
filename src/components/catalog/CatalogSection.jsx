import React from "react";
import PlantCard from "./PlantCard";
import plantData from "./PlantData";

const CatalogSection = () => {
  return (
    <div className="container py-5 text-white">
      <h2 className="text-success text-center pt-5 mb-5 titles" style={{fontSize: '2.5rem'}}>🌿 HORTICULTURE CATALOG</h2>
      <div className="row g-5">
        {plantData.map((plant) =>
            <div className="col-md-4" key={plant.id}>
              <PlantCard plant={plant} />
            </div>
        )}
      </div>
    </div>
  );
};

export default CatalogSection;
