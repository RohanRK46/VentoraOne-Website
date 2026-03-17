import React from 'react';
import './HeroSection.css';

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${(i * 5.55 + 2) % 100}%`,
  top: `${(i * 13.7 + 5) % 100}%`,
  delay: `${(i * 0.38) % 6}s`,
  duration: `${3 + (i * 0.4) % 4}s`,
  size: i % 3 === 0 ? 3 : i % 3 === 1 ? 2 : 1.5,
}));

const HeroSection = () => {
  return (
    <section className="hs-section">
      <div className="hs-grid" />
      <div className="hs-scanlines" />
      <div className="hs-radial" />

      {PARTICLES.map((p) => (
        <div
          key={p.id}
          className="hs-particle"
          style={{
            left: p.left,
            top: p.top,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}

      {/* Corner Brackets */}
      <div className="hs-corner hs-corner--tl" />
      <div className="hs-corner hs-corner--tr" />
      <div className="hs-corner hs-corner--bl" />
      <div className="hs-corner hs-corner--br" />

      {/* Vertical Line */}
      <div className="hs-vline hs-vline--left" />
      <div className="hs-vline hs-vline--right" />

      <div className="hs-content">
        <div className="hs-badge">
          <span className="hs-badge-dot" />
          <span className="hs-badge-text">ACTIVE DEFENSE SYSTEMS ONLINE</span>
          <span className="hs-badge-dot" />
        </div>

        <div className="hs-title-wrap">
          <span className="hs-label">COMPANY</span>
          <h1 className="hs-title">
            <span className="hs-title-main">VENTORA</span>
          </h1>
          <p className="hs-title-sub">Network &amp; Cyber Security Solutions</p>
        </div>

        <p className="hs-desc">
          Technology-driven security provider delivering end-to-end IT security,
          infrastructure design, and implementation services for modern enterprises.
        </p>

        <div className="hs-cta">
          <button className="hs-btn-primary">
            <span className="hs-btn-glow" />
            Explore Services
          </button>
          <button className="hs-btn-outline">Our Technologies</button>
        </div>
      </div>

      <div className="hs-stats-bar">
        <div className="hs-stat">
          <span className="hs-stat-val">7+</span>
          <span className="hs-stat-lbl">Service Domains</span>
        </div>
        <div className="hs-stat-div" />
        <div className="hs-stat">
          <span className="hs-stat-val">4</span>
          <span className="hs-stat-lbl">Firewall Vendors</span>
        </div>
        <div className="hs-stat-div" />
        <div className="hs-stat">
          <span className="hs-stat-val">360°</span>
          <span className="hs-stat-lbl">Security Coverage</span>
        </div>
        <div className="hs-stat-div" />
        <div className="hs-stat">
          <span className="hs-stat-val">E2E</span>
          <span className="hs-stat-lbl">Project Delivery</span>
        </div>
        <div className="hs-stat-div" />
        <div className="hs-stat">
          <span className="hs-stat-val">HA</span>
          <span className="hs-stat-lbl">High Availability</span>
        </div>
      </div>

      <div className="hs-scroll-indicator">
        <span className="hs-scroll-line" />
        <span className="hs-scroll-text">SCROLL</span>
        <span className="hs-scroll-line" />
      </div>
    </section>
  );
};

export default HeroSection;
