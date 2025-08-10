import React from "react";

export default function Blog() {
  return (
    <div className="bg-dark text-center text-white pt-5">
      <div className="container pb-3">
        <h2 className="mb-4 pt-5 text-success fw-bold titles">🌱 Latest from the Blog</h2>
        <h4 className="text-white mb-5 explore">5 Common Garden Mistakes (and How to Avoid Them)</h4>
        <p className="fw-bold explore">
          Every gardener, from first-timers to seasoned farmers, makes mistakes.
          The good news? Most are easy to fix once you know what to look for.
          Let’s talk about the five big ones and how you can avoid them.
        </p>

        <ol>
          <li className="mb-4 text-white highlight-text" style={{textAlign:'left'}}>
            <strong className="text-success">Overwatering or Underwatering:</strong> Plants have different
            needs, and drowning them or letting them go thirsty are equally harmful.
            Learn your plant’s preferred watering schedule and stick to it.
          </li>
          <li className="mb-4 text-white highlight-text" style={{textAlign:'left'}}>
            <strong className="text-success">Poor Soil Preparation:</strong> Healthy soil means healthy plants.
            Before planting, enrich your soil with compost and check its drainage.
          </li>
          <li className="mb-4 text-white highlight-text" style={{textAlign:'left'}}>
            <strong className="text-success">Planting in the Wrong Spot:</strong> Sun-loving crops in the
            shade or shade-loving plants in direct sun will struggle. Observe your
            garden’s light patterns before deciding where to plant.
          </li>
          <li className="mb-4 text-white highlight-text" style={{textAlign:'left'}}>
            <strong className="text-success">Ignoring Pests Until It’s Too Late:</strong> Regularly inspect
            your plants for signs of pests or disease. Early action saves the harvest.
          </li>
          <li className="mb-4 text-white highlight-text" style={{textAlign:'left'}}>
            <strong className="text-success">Overcrowding Plants:</strong> Giving your plants room to grow
            prevents competition for nutrients and reduces disease spread.
          </li>
        </ol>

        <p className="fw-bold pt-3 text-success highlight-head" style={{textAlign:'left'}}>
          Gardening is a journey of learning. Avoiding these mistakes won’t just save you
          time and money, it will reward you with healthier, happier plants. 🌿
        </p>
      </div>
    </div>
  );
}
