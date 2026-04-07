import React from 'react';
import './SupportSectionCHS.css';

const features = [
  {
    icon: '☁️',
    title: 'Cloud-Native Security',
    desc: 'Protect workloads across public, private, and hybrid cloud environments with adaptive threat detection and automated policy enforcement.',
  },
  {
    icon: '🔗',
    title: 'Hybrid Integration',
    desc: 'Seamlessly bridge on-premise infrastructure with cloud environments under a unified security posture and single-pane visibility.',
  },
  {
    icon: '🔒',
    title: 'Zero Trust Architecture',
    desc: 'Never trust, always verify — enforce identity-based access controls across every user, device, and workload in your hybrid ecosystem.',
  },
  {
    icon: '🛡️',
    title: 'Threat Intelligence',
    desc: 'Real-time threat feeds and AI-powered anomaly detection identify and neutralize advanced persistent threats before they escalate.',
  },
  {
    icon: '📊',
    title: 'Compliance Dashboard',
    desc: 'Continuous compliance monitoring against SOC2, ISO 27001, HIPAA, and GDPR with automated audit-ready reporting.',
  },
  {
    icon: '🔄',
    title: 'Policy Orchestration',
    desc: 'Centrally manage and sync security policies across all cloud regions and on-prem nodes with version-controlled governance.',
  },
];

const timeline = [
  { step: 'Step 01', title: 'Risk Assessment', desc: 'We evaluate your hybrid environment to map attack surfaces, data flows, and critical asset exposure across cloud and on-prem.' },
  { step: 'Step 02', title: 'Architecture Design', desc: 'Tailored Zero Trust frameworks and cloud security blueprints aligned to your compliance and operational requirements.' },
  { step: 'Step 03', title: 'Continuous Monitoring', desc: 'AI-driven threat detection operates 24/7 across your entire hybrid estate with real-time incident alerting.' },
  { step: 'Step 04', title: 'Response & Remediation', desc: 'Automated playbooks and expert-led response teams contain threats and restore security posture in minutes.' },
];

function SupportSectionCHS() {
  return (
    <div className="chs-page">
      {/* Hero */}
      <section className="chs-hero">
        <div className="chs-scanline" />
        <h1>
          Cloud &amp; Hybrid <span>Security</span>
        </h1>
        <p>
          Enterprise-grade protection across every layer of your hybrid
          environment — from cloud-native workloads to on-premise
          infrastructure — with zero-trust enforcement and real-time intelligence.
        </p>
      </section>

      {/* Stats */}
      <div className="chs-stats-bar">
        {[
          { value: '99.99', unit: '%', label: 'Threat Detection' },
          { value: '<2', unit: 'min', label: 'Response Time' },
          { value: '360°', unit: '', label: 'Visibility' },
          { value: '500+', unit: 'TB', label: 'Data Secured' },
        ].map((s, i) => (
          <div className="chs-stat-card" key={i}>
            <div className="chs-stat-value">
              {s.value}
              <span className="unit">{s.unit}</span>
            </div>
            <div className="chs-stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Features */}
      <section className="chs-section">
        <div className="chs-section-header">
          <h2>Core Capabilities</h2>
          <p>
            Comprehensive cloud and hybrid security tools to protect your
            infrastructure at every layer.
          </p>
        </div>
        <div className="chs-features-grid">
          {features.map((f, i) => (
            <div className="chs-feature-card" key={i}>
              <div className="chs-feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="chs-section">
        <div className="chs-section-header">
          <h2>How It Works</h2>
          <p>A proven process from risk discovery to continuous protection.</p>
        </div>
        <div className="chs-timeline">
          {timeline.map((t, i) => (
            <div className="chs-timeline-item" key={i}>
              <div className="chs-timeline-dot" />
              <div className="chs-timeline-step">{t.step}</div>
              <h3>{t.title}</h3>
              <p>{t.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default SupportSectionCHS;
