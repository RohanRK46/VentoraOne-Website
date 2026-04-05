
import { useEffect, useRef } from 'react';
import './TenderAndBidAdvisorySupport.css';

const cards = [
  {
    icon: '⚡',
    title: 'End-to-End Bid Management',
    text: 'From pre-qualification to final submission, we manage every phase of the tender lifecycle with precision and strategic oversight.',
  },
  {
    icon: '🛡️',
    title: 'Compliance & Risk Assessment',
    text: 'Navigate complex procurement regulations with confidence. We ensure your bids meet every legal and technical requirement.',
  },
  {
    icon: '🔗',
    title: 'Consortium Formation',
    text: 'We identify, evaluate, and coordinate subcontractors and joint venture partners to build the strongest possible bid team.',
  },
];

const stats = [
  { number: '200+', label: 'Bids Submitted' },
  { number: '94%', label: 'Success Rate' },
  { number: '50+', label: 'Government Partners' },
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

const TenderAndBidAdvisorySupport = () => {
  const sectionRef = useScrollReveal();

  return (
    <section className="tender-support" ref={sectionRef}>
      <div className="tender-support__inner">
        <div className="tender-support__header">
          <span className="tender-support__label" data-reveal>Why Choose Us</span>
          <h2 className="tender-support__heading" data-reveal>
            Your <span className="tender-support__heading-accent">Prime Contractor</span> Partner
          </h2>
          <p className="tender-support__desc" data-reveal>
            Managing consortium formation, subcontractor coordination, and full bid submission
            on government tenders with a proven track record.
          </p>
        </div>

        <div className="tender-support__grid">
          {cards.map((card, i) => (
            <div
              className="tender-support__card"
              data-reveal
              key={i}
              style={{ transitionDelay: `${0.15 + i * 0.12}s` }}
            >
              <div className="tender-support__card-glow" />
              <div className="tender-support__icon-wrap">
                <span className="tender-support__icon">{card.icon}</span>
              </div>
              <h3 className="tender-support__card-title">{card.title}</h3>
              <p className="tender-support__card-text">{card.text}</p>
            </div>
          ))}
        </div>

        <div className="tender-support__stats">
          {stats.map((stat, i) => (
            <div
              className="tender-support__stat"
              data-reveal
              key={i}
              style={{ transitionDelay: `${0.4 + i * 0.1}s` }}
            >
              <div className="tender-support__stat-number">{stat.number}</div>
              <div className="tender-support__stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TenderAndBidAdvisorySupport;
