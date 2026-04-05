import React from 'react';
import './AbtHeroSection.css';

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${(i * 5.55 + 2) % 100}%`,
  top: `${(i * 13.7 + 5) % 100}%`,
  delay: `${(i * 0.38) % 6}s`,
  duration: `${3 + (i * 0.4) % 4}s`,
  size: i % 3 === 0 ? 3 : i % 3 === 1 ? 2 : 1.5,
}));

const AbtHeroSection = () => {
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

      <div className="hs-corner hs-corner--tl" />
      <div className="hs-corner hs-corner--tr" />
      <div className="hs-corner hs-corner--bl" />
      <div className="hs-corner hs-corner--br" />

      <div className="hs-vline hs-vline--left" />
      <div className="hs-vline hs-vline--right" />

      <div className="hs-content">
        <div className="hs-badge">
          <span className="hs-badge-dot" />
          <span className="hs-badge-text">DELIVERY SYSTEMS ACTIVE</span>
          <span className="hs-badge-dot" />
        </div>

        <div className="hs-title-wrap">
          <span className="hs-label">COMPANY</span>
          <h1 className="hs-title">
            <span className="hs-title-main">VENTORAONE</span>
          </h1>
          <p className="hs-title-sub">Systems Integration, Security & Execution</p>
        </div>

        <p className="hs-desc">
          We design, secure, and deliver complex IT systems across multi-vendor environments. 
          From cybersecurity and infrastructure to custom software and large-scale execution, 
          we take ownership from strategy to deployment.
        </p>

        <div className="hs-cta">
          <button className="hs-btn-primary">
            <span className="hs-btn-glow" />
            Explore Services
          </button>
          <button className="hs-btn-outline">Our Capabilities</button>
        </div>
      </div>

      <div className="hs-stats-bar">
        <div className="hs-stat">
          <span className="hs-stat-val">6+</span>
          <span className="hs-stat-lbl">Core Services</span>
        </div>
        <div className="hs-stat-div" />
        <div className="hs-stat">
          <span className="hs-stat-val">E2E</span>
          <span className="hs-stat-lbl">Delivery Ownership</span>
        </div>
        <div className="hs-stat-div" />
        <div className="hs-stat">
          <span className="hs-stat-val">Multi</span>
          <span className="hs-stat-lbl">Vendor Integration</span>
        </div>
        <div className="hs-stat-div" />
        <div className="hs-stat">
          <span className="hs-stat-val">360°</span>
          <span className="hs-stat-lbl">Security & Systems</span>
        </div>
        <div className="hs-stat-div" />
        <div className="hs-stat">
          <span className="hs-stat-val">Real</span>
          <span className="hs-stat-lbl">World Deployment</span>
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

export default AbtHeroSection;