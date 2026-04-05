import { useEffect, useRef } from 'react';
import './ItSystemIntegrationHero.css';
import heroBg from './images/it-hero-bg.jpg';
import ItSystemIntegrationSupport from './ItSystemIntegrationSupport';
import CheckOutOtherServices from "../CheckOutOtherServices/CheckOutOtherServices";

const services = [
  'Online ticketing system design & deployment',
  'POS hardware and software integration',
  'Payment gateway and financial system connectivity',
  'Reporting & analytics dashboard implementation',
  'Legacy system migration and data integrity',
  'Government cloud (IaaS/PaaS) deployment',
  'Multi-site rollout coordination',
  'UAT management and go-live support',
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

const ItSystemIntegrationHero = () => {
  const sectionRef = useScrollReveal();
  const supportRef = useRef(null);

  const handleLearnMore = () => {
    supportRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section className="it-hero" ref={sectionRef}>
        <img src={heroBg} alt="" className="it-hero__bg-img" width={1920} height={1080} />
        <div className="it-hero__grid-bg" />
        <div className="it-hero__orb it-hero__orb--1" />
        <div className="it-hero__orb it-hero__orb--2" />
        <div className="it-hero__orb it-hero__orb--3" />

        <div className="it-hero__inner">
          <div>
            <div className="it-hero__eyebrow" data-reveal>
              <span className="it-hero__eyebrow-line" />
              Integration Services
            </div>

            <h1 className="it-hero__title" data-reveal>
              IT Systems <br />
              <span className="it-hero__title-accent">Integration</span>
            </h1>

            <p className="it-hero__desc" data-reveal>
              We architect and deliver integrated technology ecosystems — bringing together
              point-of-sale hardware, ticketing platforms, access control systems, payment
              gateways, and reporting dashboards into a single, coherent operational environment.
            </p>

            <div className="it-hero__actions" data-reveal>
              <button className="it-hero__btn-primary">
                <span>Get Started</span>
              </button>
              <button className="it-hero__btn-ghost" onClick={handleLearnMore}>
                Learn More
              </button>
            </div>
          </div>

          <div>
            <div className="it-hero__services">
              {services.map((item, i) => (
                <div
                  className="it-hero__service"
                  data-reveal
                  key={i}
                  style={{ transitionDelay: `${0.2 + i * 0.07}s` }}
                >
                  <span className="it-hero__service-index">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="it-hero__service-text">{item}</span>
                  <span className="it-hero__service-dot" />
                </div>
              ))}
            </div>
            <div className="it-hero__tags" data-reveal>
              <span className="it-hero__tag">Government</span>
              <span className="it-hero__tag">Enterprise</span>
              <span className="it-hero__tag">Multi-Vendor</span>
            </div>
          </div>
        </div>
      </section>

      <ItSystemIntegrationSupport ref={supportRef} />
      <CheckOutOtherServices/>
    </>
  );
};

export default ItSystemIntegrationHero;