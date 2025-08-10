import React from "react";

export default function Herbs() {
  return (
    <div className="bg-dark text-white pt-5 pb-5 text-center">
      <div className="container pb-5">
        <h2 className="mb-4 pt-5 text-success fw-bold titles">🌿 Herb Spotlight: Amaranthus</h2>
        <h4 className="text-white mb-5 explore">
          Discover how to grow, harvest, and use fresh amaranthus in your cooking and herbal remedies.
        </h4>

        <p className="fw-bold highlight-head text-white" style={{ textAlign: "left" }}>
          Amaranthus is a versatile plant that’s been cultivated for centuries, prized for its edible leaves,
          nutrient-rich seeds, and medicinal uses.
        </p>

        <ul className="text-white highlight-text" style={{ textAlign: "left" }}>
          <li className="mb-3">
            <strong className="text-success">🌱 Growing Tips:</strong> Amaranthus thrives in warm, sunny locations with
            well-drained soil. Sow seeds directly after the last frost and keep soil consistently moist until
            established.
          </li>
          <li className="mb-3">
            <strong className="text-success">✂️ Harvesting:</strong> Young leaves can be harvested regularly for salads,
            stir-fries, or soups. Seeds can be collected when flower heads begin to dry and crumble.
          </li>
          <li className="mb-3">
            <strong className="text-success">🥗 Culinary Uses:</strong> Use the leaves like spinach — raw or cooked. The
            seeds can be toasted or ground into flour for gluten-free baking.
          </li>
          <li className="mb-3">
            <strong className="text-success">🌼 Herbal Benefits:</strong> Traditionally used in teas and poultices for
            anti-inflammatory properties and digestive support.
          </li>
          <li className="mb-3">
            <strong className="text-success">🌍 Sustainability Note:</strong> Amaranthus is drought-tolerant and a great
            crop for low-water gardens.
          </li>
        </ul>

        <p className="fw-bold pt-3 pb-3 text-success highlight-head" style={{ textAlign: "left" }}>
          Whether you're growing it for nutrition or healing, amaranthus is a resilient and beautiful herb that belongs in
          every garden. 💚
        </p>
      </div>
    </div>
  );
}
