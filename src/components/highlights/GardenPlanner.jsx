import React from "react";


export default function GardenPlanner() {
  return (
    <div className="bg-dark text-white pt-5 text-center">
      <div className="container pb-3">
        <h2 className="mb-4 pt-5 text-success fw-bold titles">🧰 Garden Planner Tool</h2>
        <h4 className="text-white mb-5 explore">
          Plan your garden layout, track planting dates, and manage your green space efficiently.
        </h4>

        <p className="fw-bold highlight-head text-white" style={{ textAlign: 'left' }}>
          Whether you’re growing herbs in containers or managing a full backyard plot, our Garden Planner Tool helps
          you stay organized and get the most out of your growing season.
        </p>

        <ul className="text-white highlight-text" style={{ textAlign: 'left' }}>
          <li className="mb-3">
            <strong className="text-success">🌿 Layout Design:</strong> Drag and drop vegetables, fruits, and herbs
            into your digital garden map to visualize spacing and positioning.
          </li>
          <li className="mb-3">
            <strong className="text-success">📅 Planting Schedule:</strong> Keep track of what to plant and when.
            Get reminders for seeding, transplanting, and harvesting.
          </li>
          <li className="mb-3">
            <strong className="text-success">🌞 Sun & Shade Planning:</strong> Plan around your garden’s sunlight
            exposure to optimize crop placement.
          </li>
          <li className="mb-3">
            <strong className="text-success">📓 Notes & Journaling:</strong> Log your observations, successes, and
            lessons learned from season to season.
          </li>
          <li className="mb-3">
            <strong className="text-success">📊 Productivity Insights:</strong> Review your garden’s performance and
            adjust future plans based on yield tracking.
          </li>
        </ul>

        <p className="fw-bold pt-3 text-success highlight-head" style={{ textAlign: 'left' }}>
          Take control of your garden like never before. The Garden Planner Tool brings convenience, insight, and
          joy to every planting season. 🌸
        </p>
      </div>
    </div>
  );
}
