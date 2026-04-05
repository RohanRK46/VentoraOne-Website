import { useEffect, useRef, forwardRef } from 'react';
import './SaasAndCustomSoftwareSupport.css';

const cards = [
  {
    icon: '📱',
    title: 'Mobile-First Development',
    text: 'We build cross-platform mobile apps using Flutter — delivering native performance for citizen-facing and enterprise applications across iOS and Android from a single codebase.',
  },
  {
    icon: '🤖',
    title: 'AI-Powered Automation',
    text: 'From duplicate detection to intelligent claims processing, we embed AI automation layers that reduce manual workload and improve accuracy across your operations.',
  },
  {
    icon: '☁️',
    title: 'Cloud-Agnostic Infrastructure',
    text: 'We design and deploy containerized, cloud-agnostic infrastructure using Docker and Java microservices — built for low-bandwidth environments and long-term maintainability.',
  },
];

const stats = [
  { number: '60+', label: 'Platforms Built' },
  { number: '12+', label: 'AI Integrations' },
  { number: '99.9%', label: 'Uptime SLA' },
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

const SaasAndCustomSoftwareSupport = forwardRef((props, ref) => {
  const sectionRef = useScrollReveal();

  return (
    <section
      className="saas-support"
      ref={(el) => {
        sectionRef.current = el;
        if (typeof ref === 'function') ref(el);
        else if (ref) ref.current = el;
      }}
    >
      <div className="saas-support__inner">
        <div className="saas-support__header">
          <span className="saas-support__label" data-reveal>Why Choose Us</span>
          <h2 className="saas-support__heading" data-reveal>
            Your <span className="saas-support__heading-accent">Software</span> Partner
          </h2>
          <p className="saas-support__desc" data-reveal>
            We don't just write code — we build platforms that last. Every solution
            is designed for maintainability, scalability, and the real-world constraints
            of government and enterprise environments.
          </p>
        </div>

        <div className="saas-support__grid">
          {cards.map((card, i) => (
            <div
              className="saas-support__card"
              data-reveal
              key={i}
              style={{ transitionDelay: `${0.15 + i * 0.12}s` }}
            >
              <div className="saas-support__card-glow" />
              <div className="saas-support__icon-wrap">
                <span className="saas-support__icon">{card.icon}</span>
              </div>
              <h3 className="saas-support__card-title">{card.title}</h3>
              <p className="saas-support__card-text">{card.text}</p>
            </div>
          ))}
        </div>

        <div className="saas-support__stats">
          {stats.map((stat, i) => (
            <div
              className="saas-support__stat"
              data-reveal
              key={i}
              style={{ transitionDelay: `${0.4 + i * 0.1}s` }}
            >
              <div className="saas-support__stat-number">{stat.number}</div>
              <div className="saas-support__stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default SaasAndCustomSoftwareSupport;