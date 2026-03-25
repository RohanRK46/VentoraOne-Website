import React from 'react';
import './SupportSectionBR.css';

const features = [
  {
    icon: '🛡️',
    title: 'Automated Backups',
    desc: 'Schedule continuous, incremental backups across all your infrastructure with zero downtime and real-time monitoring.',
  },
  {
    icon: '⚡',
    title: 'Instant Recovery',
    desc: 'Restore systems, files, or entire environments in seconds with our rapid-deploy recovery engine.',
  },
  {
    icon: '🔒',
    title: 'End-to-End Encryption',
    desc: 'AES-256 encryption at rest and in transit ensures your data remains secure through every backup cycle.',
  },
  {
    icon: '☁️',
    title: 'Multi-Cloud Storage',
    desc: 'Distribute backups across AWS, Azure, and GCP for geo-redundant disaster recovery.',
  },
  {
    icon: '📊',
    title: 'Health Dashboard',
    desc: 'Real-time analytics on backup status, storage consumption, and recovery point objectives.',
  },
  {
    icon: '🔄',
    title: 'Version Control',
    desc: 'Point-in-time recovery with granular versioning—roll back to any snapshot in your retention window.',
  },
];

const timeline = [
  { step: 'Step 01', title: 'Data Assessment', desc: 'We audit your infrastructure to identify critical assets and define recovery priorities.' },
  { step: 'Step 02', title: 'Policy Configuration', desc: 'Custom backup schedules, retention rules, and encryption policies tailored to compliance needs.' },
  { step: 'Step 03', title: 'Continuous Protection', desc: 'Automated backups run 24/7 with integrity checks and instant anomaly alerts.' },
  { step: 'Step 04', title: 'Recovery Validation', desc: 'Periodic recovery drills ensure your backups are always restorable when it matters most.' },
];

function SupportSectionBR() {
  return (
    <div className="br-page">
      {/* Hero */}
      <section className="br-hero">
        <div className="br-scanline" />
        <h1>
          Backup &amp; <span>Recovery</span>
        </h1>
        <p>
          Enterprise-grade data protection with automated backups, instant
          recovery, and military-grade encryption — keeping your business
          resilient around the clock.
        </p>
      </section>

      {/* Stats */}
      <div className="br-stats-bar">
        {[
          { value: '99.99', unit: '%', label: 'Uptime SLA' },
          { value: '<15', unit: 's', label: 'Recovery Time' },
          { value: '256', unit: 'bit', label: 'Encryption' },
          { value: '50+', unit: 'PB', label: 'Data Protected' },
        ].map((s, i) => (
          <div className="br-stat-card" key={i}>
            <div className="br-stat-value">
              {s.value}
              <span className="unit">{s.unit}</span>
            </div>
            <div className="br-stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Features */}
      <section className="br-section">
        <div className="br-section-header">
          <h2>Core Capabilities</h2>
          <p>
            Everything you need for bulletproof data protection and seamless
            disaster recovery.
          </p>
        </div>
        <div className="br-features-grid">
          {features.map((f, i) => (
            <div className="br-feature-card" key={i}>
              <div className="br-feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="br-section">
        <div className="br-section-header">
          <h2>How It Works</h2>
          <p>A streamlined process from assessment to continuous protection.</p>
        </div>
        <div className="br-timeline">
          {timeline.map((t, i) => (
            <div className="br-timeline-item" key={i}>
              <div className="br-timeline-dot" />
              <div className="br-timeline-step">{t.step}</div>
              <h3>{t.title}</h3>
              <p>{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default SupportSectionBR;
