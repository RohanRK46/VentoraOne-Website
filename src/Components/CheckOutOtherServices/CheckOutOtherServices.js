import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './CheckOutOtherServices.css';

// Import your service images — swap paths to match your project
import imgCloud from './imagesServices/service-cloud.jpg';
import imgNetwork from './imagesServices/service-network.jpg';
import imgFirewall from './imagesServices/service-firewall.jpg';
import imgBackup from './imagesServices/service-backup.jpg';
import imgCyber from './imagesServices/service-cybersecurity.jpg';
import imgIT from './imagesServices/service-it-integration.jpg';
import imgTender from './imagesServices/service-tender.jpg';
import imgSaas from './imagesServices/service-saas.jpg';
import imgDigital from './imagesServices/service-transformation.jpg';
import imgProject from './imagesServices/service-management.jpg';

const services = [
  { id: 1, category: 'CLOUD',          title: 'Cloud & Hybrid Security',      route: '/CloudSecurity',        img: imgCloud,    accent: '#00c6ff' },
  { id: 2, category: 'NETWORKING',     title: 'Network Design',                route: '/NetworkDesign',        img: imgNetwork,  accent: '#a78bfa' },
  { id: 3, category: 'FIREWALL',       title: 'Firewall Security',             route: '/FireWallSecurity',     img: imgFirewall, accent: '#f97316' },
  { id: 4, category: 'BACKUP',         title: 'Backup & Recovery',             route: '/BackUpAndRecovery',    img: imgBackup,   accent: '#34d399' },
  { id: 5, category: 'SECURITY',       title: 'Cybersecurity & Physical',      route: '/CloudSecurity',        img: imgCyber,    accent: '#f43f5e' },
  { id: 6, category: 'INTEGRATION',    title: 'IT Systems Integration',        route: '/ItSystemIntegration',  img: imgIT,       accent: '#38bdf8' },
  { id: 7, category: 'ADVISORY',       title: 'Tender & Bid Advisory',         route: '/tenderAndBidding',     img: imgTender,   accent: '#c084fc' },
  { id: 8, category: 'SOFTWARE',       title: 'SaaS & Custom Software',        route: '/SaasAndCustomSoftware',img: imgSaas,     accent: '#fb923c' },
  { id: 9, category: 'TRANSFORMATION', title: 'Digital Transformation',        route: '/DigitalTransformation',img: imgDigital,  accent: '#4ade80' },
  { id: 10,category: 'MANAGEMENT',     title: 'Project & Vendor Management',   route: '/ProjectVendorManagement', img: imgProject, accent: '#facc15' },
];

function useScrollReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = el.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('cos-visible'); }),
      { threshold: 0.1 }
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function CheckOutOtherServices({ currentRoute }) {
  const navigate = useNavigate();
  const sectionRef = useScrollReveal();

  const filtered = services.filter((s) => s.route !== currentRoute);

  return (
    <section className="cos-root" ref={sectionRef}>
      {/* Background decoration */}
      <div className="cos-bg-grid" />
      <div className="cos-bg-orb cos-orb-1" />
      <div className="cos-bg-orb cos-orb-2" />

      <div className="cos-inner">
        <div className="cos-header" data-reveal>
          <span className="cos-eyebrow">
            <span className="cos-eyebrow-line" />
            Explore More
          </span>
          <h2 className="cos-heading">
            Explore <span className="cos-heading-accent"> Our Capabilities</span>
          </h2>
          <p className="cos-subtext">
            From cybersecurity to digital transformation — everything your enterprise needs under one roof.
          </p>
        </div>

        <div className="cos-grid">
          {filtered.map((service, i) => (
            <div
              className="cos-card"
              key={service.id}
              data-reveal
              style={{
                '--accent': service.accent,
                transitionDelay: `${0.05 + i * 0.06}s`,
              }}
              onClick={() => navigate(service.route)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && navigate(service.route)}
            >
              {/* Thumbnail */}
              <div className="cos-card-thumb">
                <img src={service.img} alt={service.title} loading="lazy" />
                <div className="cos-card-thumb-overlay" />
              </div>

              {/* Content */}
              <div className="cos-card-body">
                <span className="cos-card-category">{service.category}</span>
                <h3 className="cos-card-title">{service.title}</h3>
              </div>

              {/* Arrow */}
              <div className="cos-card-arrow">
                <svg viewBox="0 0 20 20" fill="none">
                  <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Glow border */}
              <div className="cos-card-glow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}