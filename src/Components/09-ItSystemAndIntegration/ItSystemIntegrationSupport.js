import { useEffect, useRef, forwardRef } from 'react';
import './ItSystemIntegrationSupport.css';

const cards = [
  {
    icon: '🔗',
    title: 'End-to-End Systems Integration',
    text: 'From legacy migration to cloud deployment, we connect every layer of your technology stack into one seamless, maintainable operational environment.',
  },
  {
    icon: '🖥️',
    title: 'Multi-Platform Deployment',
    text: 'We coordinate rollouts across multiple sites and vendors — ensuring consistent performance, data integrity, and go-live readiness at every location.',
  },
  {
    icon: '📊',
    title: 'Analytics & Reporting Infrastructure',
    text: 'We implement real-time dashboards and reporting pipelines that give government and enterprise clients full visibility into operations and financial flows.',
  },
];

const stats = [
  { number: '150+', label: 'Systems Integrated' },
  { number: '98%', label: 'Uptime Delivered' },
  { number: '40+', label: 'Government Clients' },
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

const ItSystemIntegrationSupport = forwardRef((props, ref) => {
  const sectionRef = useScrollReveal();

  return (
    <section
      className="it-support"
      ref={(el) => {
        sectionRef.current = el;
        if (typeof ref === 'function') ref(el);
        else if (ref) ref.current = el;
      }}
    >
      <div className="it-support__inner">
        <div className="it-support__header">
          <span className="it-support__label" data-reveal>Why Choose Us</span>
          <h2 className="it-support__heading" data-reveal>
            Your <span className="it-support__heading-accent">Integration</span> Partner
          </h2>
          <p className="it-support__desc" data-reveal>
            Our integration work is built to last — documented, maintainable, and designed
            for the infrastructure realities of government and enterprise environments.
          </p>
        </div>

        <div className="it-support__grid">
          {cards.map((card, i) => (
            <div
              className="it-support__card"
              data-reveal
              key={i}
              style={{ transitionDelay: `${0.15 + i * 0.12}s` }}
            >
              <div className="it-support__card-glow" />
              <div className="it-support__icon-wrap">
                <span className="it-support__icon">{card.icon}</span>
              </div>
              <h3 className="it-support__card-title">{card.title}</h3>
              <p className="it-support__card-text">{card.text}</p>
            </div>
          ))}
        </div>

        <div className="it-support__stats">
          {stats.map((stat, i) => (
            <div
              className="it-support__stat"
              data-reveal
              key={i}
              style={{ transitionDelay: `${0.4 + i * 0.1}s` }}
            >
              <div className="it-support__stat-number">{stat.number}</div>
              <div className="it-support__stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default ItSystemIntegrationSupport;