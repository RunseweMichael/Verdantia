import React from "react";

const HighlightsText = () => {
  return (
    <div className="py-5 bg-dark">
      <div className="container text-center">
        <h2 className="mb-4 mt-5 text-success fw-bold titles">🌟 FEATURED HIGHLIGHTS</h2>
        <p className="text-white mb-5 explore" style={{fontSize:'1.5rem'}}>
          Explore the latest guides, seasonal tips, and plant picks curated just
          for you.
        </p>

        <div className="row g-4">
          <div className="col-md-4 cards">
            <div
              className="card h-100 bg-dark border-0 shadow-sm"
              style={{ borderRadius: "21px" }}
            >
              <img
                src="/aboutusImg/aboutus.jpg"
                className="card-img-top"
                alt="Plant of the Month"
              />
              <div className="card-body">
                <h5 className="card-title text-success fw-bold" style={{fontSize:'1.4rem'}}>
                  🌼 Plant of the Month
                </h5>
                <p className="card-text text-white" style={{fontSize:'1.2rem'}}>
                  Discover care tips, sunlight needs, and growth patterns for
                  this month’s star plant.
                </p>
                <a
                  href="/plants/featured"
                  className="btn btn-outline-success btn-sm fw-bold"
                  style={{fontSize:'1.2rem'}}
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 cards">
            <div
              className="card h-100 bg-dark border-0 shadow-sm"
              style={{ borderRadius: "21px", gap: "10px" }}
            >
              <img
                src="/aboutusImg/about2.jpg"
                className="card-img-top"
                alt="Seasonal Tips"
              />
              <div className="card-body">
                <h5 className="card-title text-success fw-bold" style={{fontSize:'1.4rem'}}>
                  📅 August Gardening Tips
                </h5>
                <p className="card-text text-white" style={{fontSize:'1.2rem'}}>
                  Know what to plant, prune, and harvest this month for a
                  thriving garden.
                </p>
                <a
                  href="/guides/august-tips"
                  className="btn btn-outline-success btn-sm fw-bold"
                  style={{fontSize:'1.2rem'}}
                >
                  View Guide
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 cards">
            <div
              className="card h-100 bg-dark border-0 shadow-sm"
              style={{ borderRadius: "21px" }}
            >
              <img
                src="/aboutusImg/about3.jpg"
                className="card-img-top"
                alt="Latest Blog Post"
              />
              <div className="card-body">
                <h5 className="card-title text-success fw-bold" style={{fontSize:'1.4rem'}}>
                  📝 Latest from the Blog
                </h5>
                <p className="card-text text-white" style={{fontSize:'1.2rem'}}>
                  “5 Common Garden Mistakes (and How to Avoid Them)” — our
                  newest must-read!
                </p>
                <a
                  href="/blog/latest"
                  className="btn btn-outline-success btn-sm fw-bold"
                  style={{fontSize:'1.2rem'}}
                >
                  Read Blog
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 cards">
            <div
              className="card h-100 bg-dark border-0 shadow-sm"
              style={{ borderRadius: "21px" }}
            >
              <img
                src="/highlightImg/tool.jpg"
                className="card-img-top"
                alt="Toolbox"
              />
              <div className="card-body">
                <h5 className="card-title text-success fw-bold" style={{fontSize:'1.4rem'}}>
                  🧰 Garden Planner Tool
                </h5>
                <p className="card-text text-white" style={{fontSize:'1.2rem'}}>
                  Plan your garden layout, track planting dates, and manage your
                  green space efficiently.
                </p>
                <a
                  href="/tools/planner"
                  className="btn btn-outline-success btn-sm fw-bold"
                  style={{fontSize:'1.2rem'}}
                >
                  Try It Now
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 cards">
            <div
              className="card h-100 bg-dark border-0 shadow-sm"
              style={{ borderRadius: "21px" }}
            >
              <img
                src="/highlightImg/diy.jpg"
                className="card-img-top"
                alt="DIY Garden Project"
              />
              <div className="card-body">
                <h5 className="card-title text-success fw-bold" style={{fontSize:'1.4rem'}}>
                  🛠️ DIY Garden Project
                </h5>
                <p className="card-text text-white" style={{fontSize:'1.2rem'}}>
                  Learn how to build a simple raised garden bed using recycled
                  wood — perfect for veggies!
                </p>
                <a
                  href="/guides/diy-raised-bed"
                  className="btn btn-outline-success btn-sm fw-bold"
                  style={{fontSize:'1.2rem'}}
                >
                  View Project
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 cards">
            <div
              className="card h-100 bg-dark border-0 shadow-sm"
              style={{ borderRadius: "21px" }}
            >
              <img
                src="/highlightImg/amaranthus.jpg"
                className="card-img-top"
                alt="Herb Spotlight"
              />
              <div className="card-body">
                <h5 className="card-title text-success fw-bold" style={{fontSize:'1.4rem'}}>
                  🌿 Herb Spotlight: Amaranthus
                </h5>
                <p className="card-text text-white" style={{fontSize:'1.2rem'}}>
                  Discover how to grow, harvest, and use fresh amaranthus in
                  your cooking and herbal remedies.
                </p>
                <a
                  href="/plants/amaranthus"
                  className="btn btn-outline-success btn-sm fw-bold"
                  style={{fontSize:'1.2rem'}}
                >
                  Grow Amaranthus
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="accordion mt-5" id="horticultureAccordion" style={{ borderRadius: "10px" }}>
          <div className="accordion-item bg-dark text-white">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button bg-success text-white fw-bold accordion-text"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={{fontSize:'1.4rem'}}
              >
                🌱 What’s the best way to start a home garden?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#horticultureAccordion"
            >
              <div className="accordion-body text-start accordion-p" style={{fontSize:'1.2rem'}}>
                If you're new to gardening, the best way to begin is to start
                small and manageable. Container gardening and raised beds offer
                an ideal introduction because they require less space, are
                easier to control, and can be set up almost anywhere — from a
                balcony to a sunny backyard corner.
              </div>
            </div>
          </div>

          <div className="accordion-item bg-dark text-white">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed bg-success text-white fw-bold accordion-text"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={{fontSize:'1.4rem'}}
              >
                🪴 Why Containers or Raised Beds?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#horticultureAccordion"
            >
              <div className="accordion-body text-start accordion-p" style={{fontSize:'1.2rem'}}>
                - Controlled Environment: You control the soil type, drainage,
                and spacing — reducing risks of disease and weeds. <br />
                - Less Physical Strain: Raised beds reduce the need to bend
                down, making gardening easier on your back and knees. <br />
                - Mobility: Containers can be moved to chase the sun or avoid
                frost. <br />
              </div>
            </div>
          </div>

          <div className="accordion-item bg-dark text-white">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed bg-success text-white fw-bold accordion-text"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={{fontSize:'1.4rem'}}
              >
                🌼 Best Beginner Plants
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#horticultureAccordion"
            >
              <div className="accordion-body text-start accordion-p">
                <p style={{fontSize:'1.2rem'}}>
                  Choose easy-to-grow plants that are forgiving and quick to
                  reward:
                </p>
                <ul className="accordion-ul" style={{fontSize:'1.1rem'}}>
                  <li>
                    Tomatoes – especially cherry varieties; they grow well in
                    pots and produce quickly.
                  </li>
                  <li>
                    Basil – fast-growing, fragrant, and perfect for kitchen use.
                  </li>
                  <li>
                    Marigolds – bright blooms that repel pests and thrive with
                    minimal effort.
                  </li>
                  <li>
                    Lettuce and Radishes – quick harvest cycles and ideal for
                    container sowing.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="accordion-item bg-dark text-white">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed bg-success text-white fw-bold accordion-text"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
                style={{fontSize:'1.4rem'}}
              >
                🌾 How do I keep my garden sustainable?
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#horticultureAccordion"
            >
              <div className="accordion-body text-start accordion-p" style={{fontSize:'1.2rem'}}>
                Use compost, avoid synthetic pesticides, plant native species,
                and conserve water through drip irrigation and mulching.
              </div>
            </div>
          </div>

          <div className="accordion-item bg-dark text-white">
            <h2 className="accordion-header" id="headingFive">
              <button
                className="accordion-button collapsed bg-success text-white fw-bold accordion-text"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
                style={{fontSize:'1.4rem'}}
              >
                💡 What tools should every beginner gardener have?
              </button>
            </h2>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#horticultureAccordion"
            >
              <div className="accordion-body text-start accordion-p" style={{fontSize:'1.2rem'}}>
                Essentials include a hand trowel, pruning shears, gloves,
                watering can, and a garden fork. As your garden grows, add more
                based on your needs.
              </div>
            </div>
          </div>

          <div className="accordion-item bg-dark text-white">
            <h2 className="accordion-header" id="headingSix">
              <button
                className="accordion-button collapsed bg-success text-white fw-bold accordion-text"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSix"
                aria-expanded="false"
                aria-controls="collapseSix"
                style={{fontSize:'1.4rem'}}
              >
                🌿 Keep It Simple
              </button>
            </h2>
            <div
              id="collapseSix"
              className="accordion-collapse collapse"
              aria-labelledby="headingSix"
              data-bs-parent="#horticultureAccordion"
            >
              <div className="accordion-body text-start accordion-p" style={{fontSize:'1.2rem'}}>
                Resist the urge to grow everything at once. Start with a few
                plants, observe how they grow, and learn from the experience.
                This foundational success will build your confidence for larger
                gardening projects later.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighlightsText;
