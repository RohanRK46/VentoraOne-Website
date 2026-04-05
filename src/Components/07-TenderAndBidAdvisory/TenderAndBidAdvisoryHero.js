
import { useEffect, useRef } from 'react';
import './TenderAndBidAdvisoryHero.css';
import heroBg from './images/tender-hero-bg.jpg';
import TenderAndBidAdvisorySupport from './TenderAndBidAdvisorySupport'

const services = [
  'Tender response architecture & writing',
  'Technical scoring strategy',
  'Pricing and margin structure modelling',
  'Consortium and JV formation',
  'Subcontractor evaluation and management',
  'Vendor negotiation and SLA structuring',
  'Public procurement regulation advisory',
  'Post-award contract management',
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

const TenderAndBidAdvisoryHero = () => {
  const sectionRef = useScrollReveal();

  return (
<>
    <section className="tender-hero" ref={sectionRef}>
      <img src={heroBg} alt="" className="tender-hero__bg-img" width={1920} height={1080} />
      <div className="tender-hero__grid-bg" />
      <div className="tender-hero__orb tender-hero__orb--1" />
      <div className="tender-hero__orb tender-hero__orb--2" />
      <div className="tender-hero__orb tender-hero__orb--3" />

      <div className="tender-hero__inner">
        <div>
          <div className="tender-hero__eyebrow" data-reveal>
            <span className="tender-hero__eyebrow-line" />
            Advisory Services
          </div>

          <h1 className="tender-hero__title" data-reveal>
            Tender &<br />
            <span className="tender-hero__title-accent">Bid Advisory</span>
          </h1>

          <p className="tender-hero__desc" data-reveal>
            We understand the anatomy of a winning tender — not just the compliance,
            but the technical scoring, pricing psychology, and vendor positioning that
            separates successful bids from also-rans.
          </p>

          <div className="tender-hero__actions" data-reveal>
            <button className="tender-hero__btn-primary">
              <span>Get Started</span>
            </button>
            <button className="tender-hero__btn-ghost">Learn More</button>
          </div>
        </div>

        <div>
          <div className="tender-hero__services">
            {services.map((item, i) => (
              <div
                className="tender-hero__service"
                data-reveal
                key={i}
                style={{ transitionDelay: `${0.2 + i * 0.07}s` }}
              >
                <span className="tender-hero__service-index">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="tender-hero__service-text">{item}</span>
                <span className="tender-hero__service-dot" />
              </div>
            ))}
          </div>
          <div className="tender-hero__tags" data-reveal>
            <span className="tender-hero__tag">Prime Contractor</span>
            <span className="tender-hero__tag">Public Sector</span>
          </div>
        </div>
      </div>
    </section>
    
    <TenderAndBidAdvisorySupport/>
    </>
  );
};

export default TenderAndBidAdvisoryHero;
