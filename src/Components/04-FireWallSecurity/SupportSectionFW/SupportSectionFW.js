import React, { useEffect, useRef, useState } from 'react';
import './SupportSectionFW.css';

const stats = [
  { number: '99.9%', label: 'Uptime Guaranteed' },
  { number: '50M+', label: 'Threats Blocked' },
  { number: '<1ms', label: 'Response Time' },
  { number: '24/7', label: 'Active Monitoring' },
];

const features = [
  {
    icon: '🛡️',
    color: 'blue',
    title: 'Real-Time Threat Detection',
    desc: 'AI-powered engine continuously monitors your network, identifying and neutralizing threats before they reach your infrastructure.',
  },
  {
    icon: '🔐',
    color: 'purple',
    title: 'Zero-Trust Architecture',
    desc: 'Every access request is verified, validated, and encrypted — ensuring no implicit trust is granted to any user or device.',
  },
  {
    icon: '📊',
    color: 'green',
    title: 'Advanced Analytics Dashboard',
    desc: 'Gain deep visibility into your security posture with real-time metrics, threat maps, and compliance reporting.',
  },
];

const ScrollReveal = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${visible ? 'scroll-reveal--visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const SupportSectionFW = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const cards = document.querySelectorAll('.cyber-feature-card');
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty('--mouse-x', `${x}%`);
        card.style.setProperty('--mouse-y', `${y}%`);
      });
    };

    const section = sectionRef.current;
    if (section) section.addEventListener('mousemove', handleMouseMove);
    return () => {
      if (section) section.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="cyber-shield-section" ref={sectionRef}>
      <div className="cyber-grid-bg" />
      <div className="cyber-scan-line" />
      <div className="cyber-particles">
        {Array.from({ length: 8 }).map((_, i) => (
          <div className="cyber-particle" key={i} />
        ))}
      </div>

      <div className="cyber-container">
        <div className="cyber-header">
          <ScrollReveal>
            <div className="cyber-badge">
              <span className="cyber-badge-dot" />
              Next-Gen Cyber Defense
            </div>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <h2 className="cyber-title">
              <span className="cyber-title-gradient">
                Intelligent Protection
              </span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <h2 className="cyber-title" style={{ marginTop: '-8px' }}>
              For Modern Infrastructure
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={450}>
            <p className="cyber-subtitle">
              Defend your digital assets with military-grade encryption, AI-driven threat intelligence, and automated incident response — all in one unified platform.
            </p>
          </ScrollReveal>
        </div>

        <div className="cyber-stats">
          {stats.map((stat, i) => (
            <ScrollReveal key={i} delay={100 * i}>
              <div className="cyber-stat-card">
                <div className="cyber-stat-number">{stat.number}</div>
                <div className="cyber-stat-label">{stat.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="cyber-features">
          {features.map((feat, i) => (
            <ScrollReveal key={i} delay={150 * i}>
              <div className="cyber-feature-card">
                <div className={`cyber-feature-icon ${feat.color}`}>
                  {feat.icon}
                </div>
                <div className="cyber-feature-title">{feat.title}</div>
                <div className="cyber-feature-desc">{feat.desc}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportSectionFW;
