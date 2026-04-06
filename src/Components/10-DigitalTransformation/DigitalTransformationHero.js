import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './DigitalTransformationHero.css';
import heroBg from './images/dt-hero-bg.jpg';
import DigitalTransformationSupport from './DigitalTransformationSupport';
import CheckOutOtherServices from "../CheckOutOtherServices/CheckOutOtherServices";

const services = [
  'Current-state IT assessment',
  'Digital transformation roadmapping',
  'Technology vendor landscape analysis',
  'Build vs. buy vs. integrate decision support',
  'Change management planning',
  'IT governance and policy frameworks',
  'Budgeting and procurement planning',
  'Execution oversight and milestone management',
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

const DigitalTransformationHero = () => {
  const sectionRef = useScrollReveal();
  const supportRef = useRef(null);

  const handleLearnMore = () => {
    supportRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section className="dt-hero" ref={sectionRef}>
        <img src={heroBg} alt="" className="dt-hero__bg-img" width={1920} height={1080} />
        <div className="dt-hero__grid-bg" />
        <div className="dt-hero__orb dt-hero__orb--1" />
        <div className="dt-hero__orb dt-hero__orb--2" />
        <div className="dt-hero__orb dt-hero__orb--3" />

        <div className="dt-hero__inner">
          <div>
            <div className="dt-hero__eyebrow" data-reveal>
              <span className="dt-hero__eyebrow-line" />
              Transformation Services
            </div>

            <h1 className="dt-hero__title" data-reveal>
              Digital <br />
              <span className="dt-hero__title-accent">Transformation</span>
            </h1>

            <p className="dt-hero__desc" data-reveal>
              Strategic technology roadmapping and transformation execution for organisations
              moving from legacy systems and manual processes to integrated digital operations.
              We don't just hand over a strategy deck — we stay involved through execution,
              ensuring the roadmap translates into real system change.
            </p>

            <div className="dt-hero__actions" data-reveal>
              <Link to="/ServiceBookingForm">
              <button className="dt-hero__btn-primary">
                <span>Get Started</span>
              </button>
              </Link>
              <button className="dt-hero__btn-ghost" onClick={handleLearnMore}>
                Learn More
              </button>
            </div>
          </div>

          <div>
            <div className="dt-hero__services">
              {services.map((item, i) => (
                <div
                  className="dt-hero__service"
                  data-reveal
                  key={i}
                  style={{ transitionDelay: `${0.2 + i * 0.07}s` }}
                >
                  <span className="dt-hero__service-index">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="dt-hero__service-text">{item}</span>
                  <span className="dt-hero__service-dot" />
                </div>
              ))}
            </div>
            <div className="dt-hero__tags" data-reveal>
              <span className="dt-hero__tag">Strategy</span>
              <span className="dt-hero__tag">Roadmapping</span>
            </div>
          </div>
        </div>
      </section>

      <DigitalTransformationSupport ref={supportRef} />
      <CheckOutOtherServices/>
    </>
  );
};

export default DigitalTransformationHero;