import React from 'react';
import './SupportSectionNID.css';

const features = [
  {
    icon: '🌐',
    title: 'Network Topology Design',
    desc: 'Architect scalable, high-availability network topologies — from core to edge — tailored to your traffic patterns and growth requirements.',
  },
  {
    icon: '⚡',
    title: 'High-Speed Connectivity',
    desc: 'Deploy low-latency, high-throughput links across WAN, LAN, and SD-WAN environments with intelligent traffic engineering.',
  },
  {
    icon: '🔒',
    title: 'Secure Segmentation',
    desc: 'VLAN isolation, micro-segmentation, and firewall zoning ensure every network layer is protected from lateral movement threats.',
  },
  {
    icon: '☁️',
    title: 'Cloud & On-Prem Bridging',
    desc: 'Seamlessly extend your on-premise network into cloud environments with dedicated interconnects and optimized routing policies.',
  },
  {
    icon: '📊',
    title: 'Network Monitoring',
    desc: 'Real-time visibility into bandwidth utilization, latency, packet loss, and device health across your entire infrastructure.',
  },
  {
    icon: '🔄',
    title: 'Redundancy & Failover',
    desc: 'Dual-path routing, automatic failover, and load balancing eliminate single points of failure and ensure uninterrupted operations.',
  },
];

const timeline = [
  { step: 'Step 01', title: 'Discovery & Audit', desc: 'We map your existing infrastructure, traffic flows, and bottlenecks to build a complete picture of your network landscape.' },
  { step: 'Step 02', title: 'Architecture Blueprint', desc: 'Custom network design with topology diagrams, device specifications, IP schema, and redundancy planning.' },
  { step: 'Step 03', title: 'Deployment & Integration', desc: 'Phased rollout with zero-downtime cutover strategies, integrating new infrastructure alongside existing systems.' },
  { step: 'Step 04', title: 'Optimization & Support', desc: 'Continuous performance tuning, firmware management, and 24/7 NOC support to keep your network at peak efficiency.' },
];

function SupportSectionNID() {
  return (
    <div className="nid-page">
      {/* Hero */}
      <section className="nid-hero">
        <div className="nid-scanline" />
        <h1>
          Network Infrastructure <span>Design</span>
        </h1>
        <p>
          Purpose-built network architectures engineered for performance,
          resilience, and security — from initial blueprint to full-scale
          deployment and beyond.
        </p>
      </section>

      {/* Stats */}
      <div className="nid-stats-bar">
        {[
          { value: '99.99', unit: '%', label: 'Network Uptime' },
          { value: '<1', unit: 'ms', label: 'Latency' },
          { value: '40+', unit: 'Gbps', label: 'Throughput' },
          { value: '200+', unit: '', label: 'Networks Built' },
        ].map((s, i) => (
          <div className="nid-stat-card" key={i}>
            <div className="nid-stat-value">
              {s.value}
              <span className="unit">{s.unit}</span>
            </div>
            <div className="nid-stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Features */}
      <section className="nid-section">
        <div className="nid-section-header">
          <h2>Core Capabilities</h2>
          <p>
            Everything you need to design, deploy, and manage a world-class
            network infrastructure.
          </p>
        </div>
        <div className="nid-features-grid">
          {features.map((f, i) => (
            <div className="nid-feature-card" key={i}>
              <div className="nid-feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="nid-section">
        <div className="nid-section-header">
          <h2>How It Works</h2>
          <p>A structured process from network discovery to continuous optimization.</p>
        </div>
        <div className="nid-timeline">
          {timeline.map((t, i) => (
            <div className="nid-timeline-item" key={i}>
              <div className="nid-timeline-dot" />
              <div className="nid-timeline-step">{t.step}</div>
              <h3>{t.title}</h3>
              <p>{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default SupportSectionNID;
