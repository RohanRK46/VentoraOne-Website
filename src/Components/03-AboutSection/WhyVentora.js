import React from "react";
import "./WhyVentora.css";

const REASONS = [
  {
    icon: "⚙️",
    title: "Hands-On Deployment Expertise",
    desc: "Every solution we design, we personally deploy and test. No theoretical recommendations — only battle-tested configurations.",
    color: "#00d4ff",
  },
  {
    icon: "⚖️",
    title: "Vendor-Neutral Approach",
    desc: "We're not tied to any vendor. We recommend the right tool for your needs, not the one that benefits us.",
    color: "#0066ff",
  },
  {
    icon: "🎯",
    title: "Practical, Real-World Solutions",
    desc: "Our solutions are built for how businesses actually operate — balancing security hardening with operational usability.",
    color: "#7c3aed",
  },
  {
    icon: "⚡",
    title: "Security & Performance Focus",
    desc: "We never sacrifice performance for security. Every architecture is designed to maximize both simultaneously.",
    color: "#f59e0b",
  },
  {
    icon: "📄",
    title: "Clear Documentation & Handover",
    desc: "Every project ends with complete documentation — network diagrams, runbooks, and configuration records — so your team is never left in the dark.",
    color: "#10b981",
  },
];

const STATS = [
  { val: "100%", label: "Documentation on Delivery" },
  { val: "SMB", label: "to Enterprise Scale" },
  { val: "Multi", label: "Vendor Expertise" },
  { val: "0", label: "Vendor Lock-In" },
];

const WhyVentora = () => {
  return (
    <section className="wv-section">
      <div className="wv-bg-grid" />
      <div className="wv-bg-glow" />

      <div className="wv-container">
        <div className="wv-header">
          <span className="wv-tag">WHY_CHOOSE_VENTORA</span>
          <h2 className="wv-title">
            Built Different.
            <br />
            <span className="wv-title-accent">Engineered to Protect.</span>
          </h2>
        </div>

        {/* Reasons grid */}
        <div className="wv-grid">
          {REASONS.map((r) => (
            <div
              key={r.title}
              className="wv-card"
              style={{ "--wv-color": r.color }}
            >
              <div className="wv-card-bg" />

              <div className="wv-card-inner">
                <div className="wv-icon-wrap">
                  <span className="wv-icon">{r.icon}</span>
                  <div className="wv-icon-ring" />
                </div>

                <h3 className="wv-card-title">{r.title}</h3>
                <p className="wv-card-desc">{r.desc}</p>
              </div>

              <div className="wv-card-bottom-line" />
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="wv-stats">
          {STATS.map((s) => (
            <div key={s.label} className="wv-stat-item">
              <span className="wv-stat-val">{s.val}</span>
              <span className="wv-stat-lbl">{s.label}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="wv-cta">
          <div className="wv-cta-card">
            <div className="wv-cta-corner wv-cta-corner--tl" />
            <div className="wv-cta-corner wv-cta-corner--br" />

            <span className="wv-cta-label">READY_TO_SECURE_YOUR_NETWORK</span>

            <h3 className="wv-cta-title">
              Let's build a secure architecture for your business
            </h3>

            <p className="wv-cta-desc">
              From initial design to full deployment — Ventora manages every phase.
            </p>

            <div className="wv-cta-actions">
              <button className="wv-cta-btn">Get In Touch</button>
              <button className="wv-cta-btn-ghost">View Services</button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="wv-footer">
          <span className="wv-footer-logo">VENTORA</span>
          <span className="wv-footer-text">
            Network & Cyber Security Solutions
          </span>
          <span className="wv-footer-text">
            © 2025 Ventora. All rights reserved.
          </span>
        </div>
      </div>
    </section>
  );
};

export default WhyVentora;