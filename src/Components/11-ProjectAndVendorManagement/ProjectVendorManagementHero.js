import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './ProjectVendorManagementHero.css';
import heroBg from './images/Pv-v1.png';
import ProjectVendorManagementSupport from './ProjectVendorManagementSupport';
import CheckOutOtherServices from "../CheckOutOtherServices/CheckOutOtherServices";

const services = [
  'Technical project management',
  'Vendor performance oversight',
  'SLA definition and enforcement',
  'Risk identification and mitigation',
  'Stakeholder reporting and communications',
  'Budget tracking and change control',
  'Quality assurance and testing governance',
  'Escalation management',
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

const ProjectVendorManagementHero = () => {
  const sectionRef = useScrollReveal();
  const supportRef = useRef(null);

  const handleLearnMore = () => {
    supportRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section className="pvm-hero" ref={sectionRef}>
        <img src={heroBg} alt="" className="pvm-hero__bg-img" width={1920} height={1080} />
        <div className="pvm-hero__grid-bg" />
        <div className="pvm-hero__orb pvm-hero__orb--1" />
        <div className="pvm-hero__orb pvm-hero__orb--2" />
        <div className="pvm-hero__orb pvm-hero__orb--3" />

        <div className="pvm-hero__inner">
          <div>
            <div className="pvm-hero__eyebrow" data-reveal>
              <span className="pvm-hero__eyebrow-line" />
              Management Services
            </div>

            <h1 className="pvm-hero__title" data-reveal>
              Project &amp; Vendor <br />
              <span className="pvm-hero__title-accent">Management</span>
            </h1>

            <p className="pvm-hero__desc" data-reveal>
              We act as the client's delivery arm in complex multi-vendor environments —
              managing technical contractors, coordinating integration timelines, enforcing
              SLAs, and reporting progress with clarity and precision. For organisations
              without an in-house IT PMO, we become one.
            </p>

            <div className="pvm-hero__actions" data-reveal>
              <Link to="/ServiceBookingForm">
              <button className="pvm-hero__btn-primary">
                <span>Get Started</span>
              </button>
              </Link>
              <button className="pvm-hero__btn-ghost" onClick={handleLearnMore}>
                Learn More
              </button>
            </div>
          </div>

          <div>
            <div className="pvm-hero__services">
              {services.map((item, i) => (
                <div
                  className="pvm-hero__service"
                  data-reveal
                  key={i}
                  style={{ transitionDelay: `${0.2 + i * 0.07}s` }}
                >
                  <span className="pvm-hero__service-index">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="pvm-hero__service-text">{item}</span>
                  <span className="pvm-hero__service-dot" />
                </div>
              ))}
            </div>
            <div className="pvm-hero__tags" data-reveal>
              <span className="pvm-hero__tag">PMO</span>
              <span className="pvm-hero__tag">Multi-Party</span>
            </div>
          </div>
        </div>
      </section>

      <ProjectVendorManagementSupport ref={supportRef} />
      <CheckOutOtherServices/>
    </>
  );
};

export default ProjectVendorManagementHero;