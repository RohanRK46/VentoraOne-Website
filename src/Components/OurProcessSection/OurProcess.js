import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './OurProcess.css';
import {
  Cloud, Network, Shield, HardDrive, Puzzle,
  FileText, Layers, Cpu, BarChart3, ArrowRight, ChevronDown
} from 'lucide-react';

const steps = [
  {
    id: '01', tag: 'CLOUD',
    name: 'Cloud & Hybrid Security',
    desc: 'We design and deploy secure cloud environments across AWS, Azure, and hybrid infrastructures. From identity management to workload protection, every layer is hardened.',
    Icon: Cloud, color: '#00d4ff', rgb: '0, 212, 255',
  },
  {
    id: '02', tag: 'NETWORKING',
    name: 'Network Design',
    desc: 'End-to-end network architecture built for performance and resilience. We handle topology planning, segmentation, routing, and switching from the ground up.',
    Icon: Network, color: '#7c3aed', rgb: '124, 58, 237',
  },
  {
    id: '03', tag: 'FIREWALL',
    name: 'Firewall Security',
    desc: 'Multi-vendor firewall deployment, policy design, and ongoing hardening. We configure rule sets that actually block threats without choking your operations.',
    Icon: Shield, color: '#f59e0b', rgb: '245, 158, 11',
  },
  {
    id: '04', tag: 'BACKUP',
    name: 'Backup & Recovery',
    desc: 'Automated, tested backup strategies with clear RPO and RTO targets. We build recovery plans that hold up under real disaster conditions, not just on paper.',
    Icon: HardDrive, color: '#10b981', rgb: '16, 185, 129',
  },
  {
    id: '05', tag: 'INTEGRATION',
    name: 'IT Systems Integration',
    desc: "We unify your existing tools, platforms, and vendors into a single coherent stack. No more siloed systems or manual workarounds eating into your team's time.",
    Icon: Puzzle, color: '#0066ff', rgb: '0, 102, 255',
  },
  {
    id: '06', tag: 'ADVISORY',
    name: 'Tender & Bid Advisory',
    desc: 'We support IT procurement from technical specification writing to vendor evaluation. Get unbiased advice that protects your budget and your infrastructure.',
    Icon: FileText, color: '#ec4899', rgb: '236, 72, 153',
  },
  {
    id: '07', tag: 'SOFTWARE',
    name: 'SaaS & Custom Software',
    desc: 'From off-the-shelf SaaS deployment to bespoke application development, we match software solutions to your exact workflow and compliance requirements.',
    Icon: Layers, color: '#00d4ff', rgb: '0, 212, 255',
  },
  {
    id: '08', tag: 'TRANSFORMATION',
    name: 'Digital Transformation',
    desc: 'We guide organisations through structured digital change, replacing outdated processes with modern, scalable technology without disrupting daily operations.',
    Icon: Cpu, color: '#7c3aed', rgb: '124, 58, 237',
  },
  {
    id: '09', tag: 'MANAGEMENT',
    name: 'Project & Vendor Management',
    desc: 'Full lifecycle project management and multi-vendor coordination. We keep timelines, budgets, and deliverables on track so your IT projects actually finish.',
    Icon: BarChart3, color: '#10b981', rgb: '16, 185, 129',
  },
];

function StepCard({ step, index }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const onMove = (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`);
      card.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`);
    };
    card.addEventListener('mousemove', onMove);
    return () => card.removeEventListener('mousemove', onMove);
  }, []);

  const isLeft = index % 2 === 0;

  return (
    <div
      className={`op-step ${isLeft ? 'op-step--left' : 'op-step--right'}`}
      style={{ '--clr': step.color, '--rgb': step.rgb, animationDelay: `${index * 0.08}s` }}
    >
      {/* center dot */}
      <div className="op-step-dot">
        <div className="op-step-dot-core" />
        <div className="op-step-dot-ring" />
      </div>

      {/* card */}
      <div ref={cardRef} className="op-step-card" style={{ '--mx': '50%', '--my': '50%' }}>
        <div className="op-card-glow" />
        <div className="op-card-stripe" />

        {/* LEFT: icon block */}
        <div className="op-card-icon-col">
          <div className="op-card-icon-wrap">
            <step.Icon size={22} strokeWidth={1.5} className="op-card-icon" />
          </div>
          <span className="op-card-num">{step.id}</span>
        </div>

        {/* divider */}
        <div className="op-card-divider" />

        {/* RIGHT: text block */}
        <div className="op-card-text-col">
          <span className="op-card-tag">{step.tag}</span>
          <h3 className="op-card-title">{step.name}</h3>
          <p className="op-card-desc">{step.desc}</p>
          <span className="op-card-cta">
            Learn more <ArrowRight size={13} className="op-card-cta-arrow" />
          </span>
        </div>
      </div>
    </div>
  );
}

function OurProcess() {
  return (
    <div className="op-root">

      {/* Hero */}
      <section className="op-hero">
        <div className="op-hero-grid" />
        <div className="op-hero-glow" />
        <div className="op-hero-content">
          <span className="op-hero-label">WHAT WE DO</span>
          <h1 className="op-hero-heading">
            Services Built for<br />
            <span className="op-hero-accent">Real Business Challenges</span>
          </h1>
          <p className="op-hero-sub">
            Nine specialist services. One vendor-neutral team. We handle cloud, network, security, software, and transformation so you can focus on running your business.
          </p>
          <button className="op-hero-btn" onClick={() => document.getElementById('process-main')?.scrollIntoView({ behavior: 'smooth' })}>
            Explore Our Services
            <ChevronDown size={16} className="op-hero-btn-icon" />
          </button>
        </div>
      </section>

      {/* Timeline */}
      <section className="op-main" id="process-main">
        <div className="op-main-header">
          <span className="op-section-label">OUR SERVICES</span>
          <h2 className="op-section-title">
            Everything Your Business Needs,<br />
            <span>Under One Roof</span>
          </h2>
          <p className="op-section-sub">
            From a single firewall to a full digital transformation, we scope, design, deliver, and document it all.
          </p>
        </div>

        <div className="op-timeline">
          <div className="op-timeline-line" />
          {steps.map((step, i) => (
            <StepCard key={step.id} step={step} index={i} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="op-cta-section">
        <div className="op-cta-card">
          <div className="op-cta-top-line" />
          <div className="op-cta-corner op-cta-corner--tl" />
          <div className="op-cta-corner op-cta-corner--br" />
          <span className="op-cta-label">READY TO START</span>
          <h3 className="op-cta-title">Not sure which service fits your situation?</h3>
          <p className="op-cta-desc">
            Talk to us. We will assess your environment, identify gaps, and recommend exactly what you need, with no upsell and no vendor bias.
          </p>
          <div className="op-cta-actions">
            <Link to="/VentoraOneSupport">
            <button className="op-cta-btn-primary">Book a Free Consultation</button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

export default OurProcess;