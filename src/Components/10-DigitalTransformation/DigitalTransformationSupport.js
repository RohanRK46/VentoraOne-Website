import { useEffect, useRef } from 'react';
import './DigitalTransformationSupport.css';

const cards = [
  {
    icon: '🗺️',
    title: 'Strategic Roadmapping',
    text: 'We build transformation roadmaps that go beyond slide decks — detailed execution plans tied to your budget cycles, procurement windows, and operational realities.',
  },
  {
    icon: '⚙️',
    title: 'Legacy to Digital Migration',
    text: 'We assess your current-state IT landscape, identify modernisation opportunities, and manage the full migration from manual or legacy systems to integrated digital operations.',
  },
  {
    icon: '📋',
    title: 'Governance & Oversight',
    text: 'From IT governance frameworks to milestone management, we stay involved through execution — ensuring your transformation delivers measurable system change, not just plans.',
  },
];

const stats = [
  { number: '80+', label: 'Transformations Delivered' },
  { number: '100%', label: 'Execution Involvement' },
  { number: '35+', label: 'Public Sector Clients' },
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

const DigitalTransformationSupport = () => {
  const sectionRef = useScrollReveal();

  return (
    <section className="dt-support" ref={sectionRef}>
      <div className="dt-support__inner">
        <div className="dt-support__header">
          <span className="dt-support__label" data-reveal>Why Choose Us</span>
          <h2 className="dt-support__heading" data-reveal>
            Your <span className="dt-support__heading-accent">Transformation</span> Partner
          </h2>
          <p className="dt-support__desc" data-reveal>
            We don't just hand over a strategy deck. We stay involved through execution,
            ensuring your digital roadmap translates into real, lasting system change
            across your organisation.
          </p>
        </div>

        <div className="dt-support__grid">
          {cards.map((card, i) => (
            <div
              className="dt-support__card"
              data-reveal
              key={i}
              style={{ transitionDelay: `${0.15 + i * 0.12}s` }}
            >
              <div className="dt-support__card-glow" />
              <div className="dt-support__icon-wrap">
                <span className="dt-support__icon">{card.icon}</span>
              </div>
              <h3 className="dt-support__card-title">{card.title}</h3>
              <p className="dt-support__card-text">{card.text}</p>
            </div>
          ))}
        </div>

        <div className="dt-support__stats">
          {stats.map((stat, i) => (
            <div
              className="dt-support__stat"
              data-reveal
              key={i}
              style={{ transitionDelay: `${0.4 + i * 0.1}s` }}
            >
              <div className="dt-support__stat-number">{stat.number}</div>
              <div className="dt-support__stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalTransformationSupport;
