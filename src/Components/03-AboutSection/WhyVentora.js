import React, { useEffect, useRef } from "react";
import "./WhyVentora.css";
import { Link } from "react-router-dom";
import { Wrench, Scale, Target, Zap, FileText } from "lucide-react";

const REASONS = [
  {
    Icon: Wrench,
    title: "Hands-On Deployment Expertise",
    desc: "Every solution we design, we personally deploy and test. No theoretical recommendations, only battle-tested configurations.",
    color: "#00d4ff",
    accentRgb: "0, 212, 255",
    tag: "01",
  },
  {
    Icon: Scale,
    title: "Vendor-Neutral Approach",
    desc: "We're not tied to any vendor. We recommend the right tool for your needs, not the one that benefits us.",
    color: "#0066ff",
    accentRgb: "0, 102, 255",
    tag: "02",
  },
  {
    Icon: Target,
    title: "Practical, Real-World Solutions",
    desc: "Our solutions are built for how businesses actually operate, balancing security hardening with real-world usability.",
    color: "#7c3aed",
    accentRgb: "124, 58, 237",
    tag: "03",
  },
  {
    Icon: Zap,
    title: "Security & Performance Focus",
    desc: "We never sacrifice performance for security. Every architecture is designed to maximize both simultaneously.",
    color: "#f59e0b",
    accentRgb: "245, 158, 11",
    tag: "04",
  },
  {
    Icon: FileText,
    title: "Clear Documentation & Handover",
    desc: "Every project ends with complete documentation: network diagrams, runbooks, and configuration records, so your team is never left in the dark.",
    color: "#10b981",
    accentRgb: "16, 185, 129",
    tag: "05",
  },
];

const STATS = [
  { val: "100%", label: "Documentation on Delivery" },
  { val: "SMB", label: "to Enterprise Scale" },
  { val: "Multi", label: "Vendor Expertise" },
  { val: "0", label: "Vendor Lock-In" },
];

const ReasonCard = ({ Icon, title, desc, color, accentRgb, tag, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty("--mx", `${x}%`);
      card.style.setProperty("--my", `${y}%`);
    };

    card.addEventListener("mousemove", handleMouseMove);
    return () => card.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={cardRef}
      className="wv-card-v2"
      style={{
        "--accent": color,
        "--accent-rgb": accentRgb,
        animationDelay: `${index * 0.1}s`,
      }}
    >
      {/* Animated border */}
      <div className="wv-card-border" />

      {/* Spotlight overlay */}
      <div className="wv-card-spotlight" />

      {/* Noise texture */}
      <div className="wv-card-noise" />

      {/* Top stripe */}
      <div className="wv-card-stripe" />

      <div className="wv-card-v2-inner">
        {/* Number tag */}
        <span className="wv-card-tag">{tag}</span>

        {/* Icon */}
        <div className="wv-icon-v2-wrap">
          <div className="wv-icon-v2-bg" />
          <div className="wv-icon-v2-ring wv-icon-v2-ring--outer" />
          <div className="wv-icon-v2-ring wv-icon-v2-ring--inner" />
          <Icon className="wv-icon-v2" size={26} strokeWidth={1.5} />
        </div>

        <h3 className="wv-card-v2-title">{title}</h3>
        <p className="wv-card-v2-desc">{desc}</p>
      </div>
    </div>
  );
};

const WhyVentora = () => {
  return (
    <section className="wv-section">
      <div className="wv-bg-grid" />
      <div className="wv-bg-glow" />

      <div className="wv-container">
        <div className="wv-header">
          <span className="wv-tag">WHY CHOOSE VENTORA</span>
          <h2 className="wv-title">
            Built Different.
            <br />
            <span className="wv-title-accent">Engineered to Protect.</span>
          </h2>
        </div>

        {/* Reasons grid */}
        <div className="wv-grid">
          {REASONS.map((r, i) => (
            <ReasonCard key={r.title} {...r} index={i} />
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
            <span className="wv-cta-label">READY TO SECURE YOUR NETWORK</span>
            <h3 className="wv-cta-title">
              Let's build a secure architecture for your business
            </h3>
            <p className="wv-cta-desc">
              From initial design to full deployment, Ventora manages every phase.
            </p>
            <div className="wv-cta-actions">
              <Link to="/VentoraOneSupport">
                <button className="wv-cta-btn">Get In Touch</button>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="wv-footer">
          <span className="wv-footer-logo">VENTORA</span>
          <span className="wv-footer-text">Network & Cyber Security Solutions</span>
          <span className="wv-footer-text">© 2025 Ventora. All rights reserved.</span>
        </div>
      </div>
    </section>
  );
};

export default WhyVentora;