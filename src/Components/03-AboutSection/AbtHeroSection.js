import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AbtHeroSection.css';

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${(i * 5.55 + 2) % 100}%`,
  top: `${(i * 13.7 + 5) % 100}%`,
  delay: `${(i * 0.38) % 6}s`,
  duration: `${3 + (i * 0.4) % 4}s`,
  size: i % 3 === 0 ? 3 : i % 3 === 1 ? 2 : 1.5,
}));

const CYCLING_WORDS = ['Integrate', 'Automate', 'Transform'];

const AbtHeroSection = ({ onExploreServices }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [exitIndex, setExitIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setExitIndex(activeIndex);
      const next = (activeIndex + 1) % CYCLING_WORDS.length;
      setTimeout(() => {
        setActiveIndex(next);
        setExitIndex(null);
      }, 500);
    }, 2200);
    return () => clearInterval(interval);
  }, [activeIndex]);

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
        <div className="hs-cycling-badge">
          <span className="hs-cycling-dot" />
          <div className="hs-cycling-text-wrap">
            {CYCLING_WORDS.map((word, i) => (
              <span
                key={word}
                className={
                  'hs-cycling-word' +
                  (i === activeIndex ? ' active' : '') +
                  (i === exitIndex ? ' exit' : '')
                }
              >
                {word}
              </span>
            ))}
          </div>
          <span className="hs-cycling-dot" />
        </div>

        <div className="hs-title-wrap">
          <h1 className="hs-title">
            <span className="hs-title-main">VENTORAONE</span>
          </h1>
          <p className="hs-title-sub">Systems Integration, Security & Execution</p>
        </div>

        <p className="hs-desc">
          From cybersecurity and infrastructure to custom software, we design, secure, and deliver IT systems across multi-vendor environments.
        </p>

        <div className="hs-cta">
          <button className="hs-btn-primary" onClick={onExploreServices}>
            <span className="hs-btn-glow" />
            Explore Services
          </button>
          <Link to="/Technologies" className="hs-outline-link">
            <button className="hs-btn-outline">Tools & Technologies</button>
          </Link>
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
          <span className="hs-stat-lbl">Real World Deployment</span>
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