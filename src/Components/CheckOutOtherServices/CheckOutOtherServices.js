import { useEffect, useRef, useState, useCallback, forwardRef, useImperativeHandle } from 'react';
import { useNavigate } from 'react-router-dom';
import './CheckOutOtherServices.css';

import imgCloud    from './imagesServices/service-cloud.jpg';
import imgNetwork  from './imagesServices/service-network.jpg';
import imgFirewall from './imagesServices/service-firewall.jpg';
import imgBackup   from './imagesServices/service-backup.jpg';
import imgIT       from './imagesServices/service-it-integration.jpg';
import imgTender   from './imagesServices/service-tender.jpg';
import imgSaas     from './imagesServices/service-saas.jpg';
import imgDigital  from './imagesServices/service-transformation.jpg';
import imgProject  from './imagesServices/service-management.jpg';

const services = [
  { id: 1, category: 'CLOUD',          title: 'Cloud & Hybrid Security',     route: '/CloudSecurity',           img: imgCloud,    accent: '#00c6ff' },
  { id: 2, category: 'NETWORKING',     title: 'Network Design',              route: '/NetworkDesign',           img: imgNetwork,  accent: '#a78bfa' },
  { id: 3, category: 'FIREWALL',       title: 'Firewall Security',           route: '/FireWallSecurity',        img: imgFirewall, accent: '#f43f5e' },
  { id: 4, category: 'BACKUP',         title: 'Backup & Recovery',           route: '/BackUpAndRecovery',       img: imgBackup,   accent: '#34d399' },
  { id: 5, category: 'INTEGRATION',    title: 'IT Systems Integration',      route: '/ItSystemIntegration',    img: imgIT,       accent: '#38bdf8' },
  { id: 6, category: 'ADVISORY',       title: 'Tender & Bid Advisory',       route: '/tenderAndBidding',        img: imgTender,   accent: '#c084fc' },
  { id: 7, category: 'SOFTWARE',       title: 'SaaS & Custom Software',      route: '/SaasAndCustomSoftware',   img: imgSaas,     accent: '#fb923c' },
  { id: 8, category: 'TRANSFORMATION', title: 'Digital Transformation',      route: '/DigitalTransformation',   img: imgDigital,  accent: '#4ade80' },
  { id: 9, category: 'MANAGEMENT',     title: 'Project & Vendor Management', route: '/ProjectVendorManagement', img: imgProject,  accent: '#facc15' },
];

const CheckOutOtherServices = forwardRef(function CheckOutOtherServices({ currentRoute }, ref) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [cardsRevealed, setCardsRevealed] = useState(false);
  const panelRef = useRef(null);
  const revealTimer = useRef(null);

  const filtered = services.filter((s) => s.route !== currentRoute);

  const openPanel = useCallback(() => {
    setOpen(true);
    document.body.style.overflow = 'hidden';
    clearTimeout(revealTimer.current);
    revealTimer.current = setTimeout(() => setCardsRevealed(true), 120);
  }, []);

  const closePanel = useCallback(() => {
    setOpen(false);
    setCardsRevealed(false);
    document.body.style.overflow = '';
  }, []);

  // Expose openPanel to parent via ref
  useImperativeHandle(ref, () => ({ open: openPanel }), [openPanel]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') closePanel(); };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      clearTimeout(revealTimer.current);
      document.body.style.overflow = '';
    };
  }, [closePanel]);

  return (
    <>
      {/* ── Trigger button ── */}
      <div className="cos-trigger-wrap">
        <button className="cos-trigger-btn" onClick={openPanel} aria-haspopup="dialog">
          <span className="cos-dot-grid" aria-hidden="true">
            {[...Array(9)].map((_, i) => <span key={i} />)}
          </span>
          Check Out Our Services
          <svg className="cos-trigger-chevron" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* ── Overlay ── */}
      <div
        className={`cos-overlay${open ? ' cos-overlay--open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Our Services"
      >
        {/* Backdrop */}
        <div className="cos-overlay-backdrop" onClick={closePanel} />

        {/* Panel */}
        <div className="cos-overlay-panel" ref={panelRef}>
          <div className="cos-drag-pill" aria-hidden="true" />

          {/* Header */}
          <div className="cos-overlay-header">
            <div className="cos-overlay-title">
              <span className="cos-eyebrow">
                <span className="cos-eyebrow-line" />
                Explore More
              </span>
              <h2 className="cos-heading">
                Our <span className="cos-heading-accent">Capabilities</span>
              </h2>
            </div>
            <button className="cos-close-btn" onClick={closePanel} aria-label="Close services panel">
              <svg viewBox="0 0 20 20" fill="none">
                <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Grid */}
          <div className="cos-grid">
            {filtered.map((service, i) => (
              <div
                key={service.id}
                className={`cos-card${cardsRevealed ? ' cos-card--revealed' : ''}`}
                style={{
                  '--accent': service.accent,
                  transitionDelay: cardsRevealed ? `${0.04 + i * 0.055}s` : '0s',
                }}
                onClick={() => { closePanel(); navigate(service.route); }}
                role="button"
                tabIndex={open ? 0 : -1}
                onKeyDown={(e) => e.key === 'Enter' && (closePanel(), navigate(service.route))}
              >
                <div className="cos-card-thumb">
                  <img src={service.img} alt={service.title} loading="lazy" />
                  <div className="cos-card-thumb-overlay" />
                </div>
                <div className="cos-card-body">
                  <span className="cos-card-category">{service.category}</span>
                  <h3 className="cos-card-title">{service.title}</h3>
                </div>
                <div className="cos-card-arrow" aria-hidden="true">
                  <svg viewBox="0 0 20 20" fill="none">
                    <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="cos-card-glow" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
});

export default CheckOutOtherServices;