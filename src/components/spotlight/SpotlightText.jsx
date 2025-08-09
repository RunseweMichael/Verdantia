import React, { useState } from "react";
import { Tab, Nav } from "react-bootstrap";

const SpotlightText = () => {
  const [activeKey, setActiveKey] = useState("plant");

  return (
    <div className="py-5 text-white spotlight-section">
      <div className="container">
        <h2 className="text-success text-center mt-5 mb-4 fw-bold titles">
          🌿 INTERACTIVE SPOTLIGHT
        </h2>
        <p className="text-center mb-5" style={{fontSize:'1.5rem'}}>
          Dive deeper into this week’s featured topic. Toggle between plant
          care, uses, and quick facts.
        </p>

        <Tab.Container activeKey={activeKey} onSelect={(k) => setActiveKey(k)}>
          <Nav variant="pills" className="justify-content-center fw-bold mb-4">
            <Nav.Item>
              <Nav.Link eventKey="plant" className="text-success fw-bold" style={{fontSize:'1.6rem'}}>
                Plant Details
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="uses" className="text-success fw-bold" style={{fontSize:'1.6rem'}}>
                Uses & Benefits
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="facts" className="text-success fw-bold" style={{fontSize:'1.6rem'}}>
                Quick Facts
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content className="bg-dark p-4 rounded shadow text-start border border-success">
            <Tab.Pane eventKey="plant">
              <h4 className="text-success fw-bold" style={{fontSize:'1.7rem'}}>🌼 Spotlight: Lavender</h4>
              <p style={{fontSize:'1.3rem'}}>
                Lavender is a fragrant herb known for its calming scent and
                stunning purple flowers. It thrives in full sun and well-drained
                soil. Water sparingly and prune regularly to keep it bushy.
              </p>
              <div className="d-flex justify-content-between align-items-center sm_spotlight">
                <img
                  src="/spotlightImg/lavender.jpg"
                  alt="Lavender"
                  className="img-fluid rounded mt-3 sm_spotlight_img"
                  style={{ width: "30%", height: "300px" }}
                />
                <img
                  src="/spotlightImg/lavender3.jpg"
                  alt="Lavender"
                  className="img-fluid rounded mt-3 sm_spotlight_img"
                  style={{ width: "30%", height: "300px" }}
                />
                <img
                  src="/spotlightImg/lavender2.jpg"
                  alt="Lavender"
                  className="img-fluid rounded mt-3 sm_spotlight_img"
                  style={{ width: "30%", height: "300px" }}
                />
              </div>
            </Tab.Pane>

            <Tab.Pane eventKey="uses">
              <div
                className="sm_spotlight"
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <div>
                  <h4 className="text-success fw-bold" style={{fontSize:'1.7rem'}}>🌿 How to Use Lavender</h4>
                  <ul style={{fontSize:'1.3rem'}}>
                    <li>Make calming teas or infusions</li>
                    <li>Use dried lavender in sachets for closets</li>
                    <li>Apply essential oils for stress relief</li>
                    <li>Add to DIY soaps and scrubs</li>
                  </ul>
                </div>
                <img
                  src="/spotlightImg/benefits.jpg"
                  alt="Lavender"
                  className="img-fluid rounded mt-3 sm_spotlight_img"
                  style={{ width: "30%", height: "300px" }}
                />
              </div>
            </Tab.Pane>

            <Tab.Pane eventKey="facts">
              <div className="d-flex justify-content-around align-items-center sm_spotlight">
                <div>
                  <h4 className="text-success fw-bold" style={{fontSize:'1.7rem'}}>📌 Fast Facts</h4>
                  <ul style={{fontSize:'1.3rem'}}>
                    <li>
                      <strong>Scientific Name:</strong> Lavandula
                    </li>
                    <li>
                      <strong>Sunlight:</strong> Full sun (6–8 hours)
                    </li>
                    <li>
                      <strong>Soil:</strong> Sandy, well-drained
                    </li>
                    <li>
                      <strong>Hardiness:</strong> USDA Zones 5–9
                    </li>
                    <li>
                      <strong>Bloom Time:</strong> Late spring to early summer
                    </li>
                  </ul>
                </div>
                <img
                  src="/spotlightImg/lavender3.jpg"
                  alt="Lavender"
                  className="img-fluid rounded mt-3 sm_spotlight_img"
                  style={{ width: "30%", height: "300px" }}
                />
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </div>
  );
};

export default SpotlightText;



