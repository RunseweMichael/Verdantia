import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

export default function GardenProject() {
  return (
    <div className="bg-dark text-white pt-5 text-center">
      <Navbar />
      <div className="container pb-3">
        <h2 className="mb-4 pt-5 text-success fw-bold titles">🛠️ DIY Garden Project</h2>
        <h4 className="text-white mb-5 explore">
          Learn how to build a simple raised garden bed using recycled wood — perfect for veggies!
        </h4>

        <p className="fw-bold highlight-head text-white" style={{ textAlign: "left" }}>
          This easy and eco-friendly project is perfect for beginners looking to grow their own vegetables at home.
        </p>

        <ul className="text-white highlight-text" style={{ textAlign: "left" }}>
          <li className="mb-3">
            <strong className="text-success">🪵 Materials Needed:</strong> Recycled wooden pallets or planks, nails or screws,
            a hammer or drill, a saw, and gardening soil.
          </li>
          <li className="mb-3">
            <strong className="text-success">📏 Step-by-Step Instructions:</strong> Cut your wood to size, assemble a
            rectangular frame, and secure the corners tightly.
          </li>
          <li className="mb-3">
            <strong className="text-success">🧱 Assembly Tips:</strong> Use corner braces for extra support, and line the
            bottom with cardboard to suppress weeds.
          </li>
          <li className="mb-3">
            <strong className="text-success">🌱 Fill & Plant:</strong> Add a mix of compost and soil, then start planting
            your favorite vegetables or herbs.
          </li>
          <li className="mb-3">
            <strong className="text-success">♻️ Sustainability Note:</strong> Using recycled materials not only saves money,
            but also helps reduce waste.
          </li>
        </ul>

        <p className="fw-bold pt-3 text-success highlight-head" style={{ textAlign: "left" }}>
          Build it once, enjoy it season after season. This raised bed is a simple way to bring fresh produce to your
          backyard with minimal effort and cost. 🌿
        </p>
      </div>
      <hr className="border border-2 border-success" />
      <Footer />
    </div>
  );
}
