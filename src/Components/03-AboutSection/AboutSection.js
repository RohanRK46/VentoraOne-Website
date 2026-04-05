import React from "react";
import "./AboutSection.css";

const highlights = [
  { val: "Vendor-Neutral", desc: "We recommend what fits your requirements, not what we resell." },
  { val: "Execution-Focused", desc: "We take full ownership from planning to deployment." },
  { val: "Built for Real-World", desc: "Designed for complex environments, legacy systems, and constraints." },
];

const AboutSection = () => {
  return (
    <section className="ab-section">
      <div className="ab-bg-grid" />
      <div className="ab-container">
        {/* Section header */}
        <div className="ab-header">
          <span className="ab-tag">ABOUT VENTORAONE</span>
          <h2 className="ab-title">
            We Deliver Systems That Work
            <br />
            <span className="ab-title-accent">
              Built for Real-World Environments
            </span>
          </h2>
        </div>

        <div className="ab-body">
          {/* Main description card */}
          <div className="ab-card ab-card--main">
            <div className="ab-card-corner ab-card-corner--tl" />
            <div className="ab-card-corner ab-card-corner--br" />
            <div className="ab-card-label">COMPANY PROFILE</div>

            <p className="ab-para">
              <span className="ab-highlight-word">Ventora One</span> is a systems integrator and delivery partner
              specializing in complex IT, security, and infrastructure projects.
            </p>

            <p className="ab-para">
              We help organizations{" "}
              <span className="ab-highlight-word">
                design, implement, and manage
              </span>{" "}
              end-to-end solutions across multi-vendor environments. From IT systems integration and cybersecurity to custom software and digital transformation, our work is built for real-world conditions, not ideal scenarios.
            </p>

            <p className="ab-para ab-para--last">
              We operate as a{" "}
              <span className="ab-highlight-word">
                vendor-neutral partner
              </span>{" "}
              and take full ownership of execution from architecture and procurement strategy to deployment, integration, and final handover.
            </p>
          </div>

          {/* Highlights column */}
          <div className="ab-highlights">
            {highlights.map((h) => (
              <div key={h.val} className="ab-hl-card">
                <div className="ab-hl-dot" />
                <div>
                  <span className="ab-hl-val">{h.val}</span>
                  <p className="ab-hl-desc">{h.desc}</p>
                </div>
              </div>
            ))}

            <div className="ab-mission">
              <p className="ab-mission-text">
                Build secure, scalable systems. Deliver outcomes businesses can depend on.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;