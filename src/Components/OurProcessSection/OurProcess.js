import React from 'react';
import './OurProcess.css';

const steps = [
  {
    id: '01',
    name: 'Requirement Analysis',
    desc: 'We assess your current IT environment, identify risks, and define security objectives aligned with your business goals.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /><path d="M11 8v6" /><path d="M8 11h6" />
      </svg>
    ),
  },
  {
    id: '02',
    name: 'Architecture Design',
    desc: 'We design secure network and security architectures including firewalls, segmentation, VPNs, and endpoint strategies with detailed HLD / LLD documentation.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    id: '03',
    name: 'Implementation',
    desc: 'Hands-on deployment of firewalls, endpoint security, email protection, backup solutions, and cloud integrations configured to your exact specifications.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /><line x1="12" y1="2" x2="12" y2="22" />
      </svg>
    ),
  },
  {
    id: '04',
    name: 'Testing & Validation',
    desc: 'Every deployment is rigorously tested connectivity, policy enforcement, failover, and threat simulations to ensure production-grade reliability.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    id: '05',
    name: 'Documentation & Handover',
    desc: 'Complete project documentation, configuration records, and knowledge transfer so your team is fully equipped to manage and maintain the environment.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><line x1="10" y1="9" x2="8" y2="9" />
      </svg>
    ),
  },
];

function OurProcess() {
  const scrollToProcess = () => {
    const el = document.getElementById('process-main');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="ventora-process">
      {/* Trigger Section */}
      <section className="trigger-section">
        <span className="trigger-label">ventora process</span>
        <h1 className="trigger-heading">
          How We <span>Secure</span> Your Business
        </h1>
        <p className="trigger-sub">
          End-to-end network & cyber security — from analysis to handover.
        </p>
        <button className="trigger-btn" onClick={scrollToProcess}>
          Check out our process
        </button>
      </section>

      {/* Main Process */}
      <section className="process-main" id="process-main">
        <h2 className="process-title">
          Our <span>Process</span>
        </h2>
        <p className="process-subtitle">
          A structured, vendor-neutral approach to securing your infrastructure.
        </p>
        <div className="process-timeline">
          {steps.map((step) => (
            <div className="process-step" key={step.id}>
              <div className="step-dot" />
              <div className="step-header">
                <span className="step-number">{step.id}</span>
                <span className="step-name">{step.name}</span>
                <span className="step-icon">{step.icon}</span>
              </div>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-box">
          <span className="cta-label">get started</span>
          <h3 className="cta-heading">Ready to Secure Your Infrastructure?</h3>
          <p className="cta-desc">
            Let Ventora design, deploy, and protect your network end to end.
          </p>
          <button className="cta-btn">
            Book a Service Now
          </button>
        </div>
      </section>
    </div>
  );
}

export default OurProcess;
