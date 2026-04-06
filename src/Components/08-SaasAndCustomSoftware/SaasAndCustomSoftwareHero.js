import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './SaasAndCustomSoftwareHero.css';
import heroBg from './images/hero-bg.png';
import SaasAndCustomSoftwareSupport from './SaasAndCustomSoftwareSupport';
import CheckOutOtherServices from "../CheckOutOtherServices/CheckOutOtherServices";

const services = [
  'Cross-platform mobile apps (Flutter)',
  'Java microservices architecture',
  'AI-powered duplicate detection & automation',
  'Member/beneficiary management platforms',
  'Claims processing systems',
  'REST API design and integration',
  'Docker-based containerized deployment',
  'Cloud-agnostic infrastructure design',
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

const SaasAndCustomSoftwareHero = () => {
  const sectionRef = useScrollReveal();
  const supportRef = useRef(null);

  const handleLearnMore = () => {
    supportRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section className="saas-hero" ref={sectionRef}>
        <img src={heroBg} alt="" className="saas-hero__bg-img" width={1920} height={1080} />
        <div className="saas-hero__grid-bg" />
        <div className="saas-hero__orb saas-hero__orb--1" />
        <div className="saas-hero__orb saas-hero__orb--2" />
        <div className="saas-hero__orb saas-hero__orb--3" />

        <div className="saas-hero__inner">
          <div>
            <div className="saas-hero__eyebrow" data-reveal>
              <span className="saas-hero__eyebrow-line" />
              Software Development
            </div>

            <h1 className="saas-hero__title" data-reveal>
              SaaS &amp; Custom <br />
              <span className="saas-hero__title-accent">Software</span>
            </h1>

            <p className="saas-hero__desc" data-reveal>
              We design and build bespoke software platforms for clients who need something
              custom-built — member management systems, claims processing platforms,
              mobile-first citizen apps, and AI-powered automation layers. Our stack is
              chosen to work in low-bandwidth, high-reliability environments, and we build
              with maintainability as a first-class requirement.
            </p>

            <div className="saas-hero__actions" data-reveal>
                <Link to="/ServiceBookingForm">
              <button className="saas-hero__btn-primary">
                <span>Get Started</span>
              </button>
                </Link>
              <button className="saas-hero__btn-ghost" onClick={handleLearnMore}>
                Learn More
              </button>
            </div>
          </div>

          <div>
            <div className="saas-hero__services">
              {services.map((item, i) => (
                <div
                  className="saas-hero__service"
                  data-reveal
                  key={i}
                  style={{ transitionDelay: `${0.2 + i * 0.07}s` }}
                >
                  <span className="saas-hero__service-index">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="saas-hero__service-text">{item}</span>
                  <span className="saas-hero__service-dot" />
                </div>
              ))}
            </div>
            <div className="saas-hero__tags" data-reveal>
              <span className="saas-hero__tag">Flutter</span>
              <span className="saas-hero__tag">Java</span>
              <span className="saas-hero__tag">AI</span>
            </div>
          </div>
        </div>
      </section>

      <SaasAndCustomSoftwareSupport ref={supportRef} />
      <CheckOutOtherServices/>
    </>
  );
};

export default SaasAndCustomSoftwareHero;