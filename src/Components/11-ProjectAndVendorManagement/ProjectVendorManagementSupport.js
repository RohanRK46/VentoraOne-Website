import { useEffect, useRef } from 'react';
import './ProjectVendorManagementSupport.css';

const cards = [
  {
    icon: '🏗️',
    title: 'Your Embedded IT PMO',
    text: 'For organisations without an in-house IT PMO, we become one — embedding directly into your delivery structure to manage contractors, timelines, and technical dependencies.',
  },
  {
    icon: '📡',
    title: 'Multi-Vendor Coordination',
    text: 'We manage complex multi-vendor environments with precision — enforcing SLAs, coordinating integration timelines, and ensuring every contractor delivers to specification.',
  },
  {
    icon: '📈',
    title: 'Risk & Budget Control',
    text: 'Proactive risk identification, budget tracking, and change control keep your projects on time and on budget — with clear stakeholder reporting at every milestone.',
  },
];

const stats = [
  { number: '120+', label: 'Projects Managed' },
  { number: '60+', label: 'Vendors Coordinated' },
  { number: '99%', label: 'On-Time Delivery' },
];

function useScrollReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = el.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);
  return ref;
}

const ProjectVendorManagementSupport = () => {
  const sectionRef = useScrollReveal();

  return (
    <section className="pvm-support" ref={sectionRef}>
      <div className="pvm-support__inner">
        <div className="pvm-support__header">
          <span className="pvm-support__label" data-reveal>Why Choose Us</span>
          <h2 className="pvm-support__heading" data-reveal>
            Your <span className="pvm-support__heading-accent">Delivery</span> Partner
          </h2>
          <p className="pvm-support__desc" data-reveal>
            We act as the client's delivery arm — managing technical contractors,
            coordinating integration timelines, and enforcing SLAs with clarity
            and precision across the most complex multi-party environments.
          </p>
        </div>

        <div className="pvm-support__grid">
          {cards.map((card, i) => (
            <div
              className="pvm-support__card"
              data-reveal
              key={i}
              style={{ transitionDelay: `${0.15 + i * 0.12}s` }}
            >
              <div className="pvm-support__card-glow" />
              <div className="pvm-support__icon-wrap">
                <span className="pvm-support__icon">{card.icon}</span>
              </div>
              <h3 className="pvm-support__card-title">{card.title}</h3>
              <p className="pvm-support__card-text">{card.text}</p>
            </div>
          ))}
        </div>

        <div className="pvm-support__stats">
          {stats.map((stat, i) => (
            <div
              className="pvm-support__stat"
              data-reveal
              key={i}
              style={{ transitionDelay: `${0.4 + i * 0.1}s` }}
            >
              <div className="pvm-support__stat-number">{stat.number}</div>
              <div className="pvm-support__stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectVendorManagementSupport;
