import React from "react";
import "./AboutSection.css";

const highlights = [
  { val: "Vendor-Neutral", desc: "We recommend what fits best, not what we sell." },
  { val: "Real-World", desc: "Hands-on deployment expertise across SMB & enterprise." },
  { val: "Scalable", desc: "Architectures built to grow with your business." },
];

const AboutSection = () => {
  return (
    <section className="ab-section">
      <div className="ab-bg-grid" />
      <div className="ab-container">
        {/* Section header */}
        <div className="ab-header">
          <span className="ab-tag">ABOUT_VENTORA</span>
          <h2 className="ab-title">
            We Don't Just Deploy Products —
            <br />
            <span className="ab-title-accent">
              We Design Secure Architectures
            </span>
          </h2>
        </div>

        <div className="ab-body">
          {/* Main description card */}
          <div className="ab-card ab-card--main">
            <div className="ab-card-corner ab-card-corner--tl" />
            <div className="ab-card-corner ab-card-corner--br" />
            <div className="ab-card-label">COMPANY_PROFILE</div>

            <p className="ab-para">
              <span className="ab-highlight-word">Ventora</span> is a
              technology-driven network and cyber security solutions provider
              delivering end-to-end IT security, infrastructure design, and
              implementation services.
            </p>

            <p className="ab-para">
              We help organizations{" "}
              <span className="ab-highlight-word">
                design, secure, and manage
              </span>{" "}
              their IT environments by combining strong networking fundamentals
              with modern security practices. Our approach focuses on real-world
              security, performance, scalability, and cost-effective solutions
              tailored to business needs.
            </p>

            <p className="ab-para ab-para--last">
              At Ventora, we design{" "}
              <span className="ab-highlight-word">
                secure architectures
              </span>{" "}
              that grow with your business — backed by clear documentation and
              professional project handover.
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
              <span className="ab-mission-label">OUR MISSION</span>
              <p className="ab-mission-text">
                Secure every network. Protect every endpoint. Enable every
                business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;