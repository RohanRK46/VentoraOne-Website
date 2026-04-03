import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Services.css";

import imgCyber from "./imagesServices/card-cybersecurity.jpg";
import imgIT from "./imagesServices/card-it-integration.jpg";
import imgTender from "./imagesServices/card-tender.jpg";
import imgSaas from "./imagesServices/card-saas.jpg";
import imgDigital from "./imagesServices/card-digital.jpg";
import imgProject from "./imagesServices/card-project.jpg";


const services = [
  {
    id: "cybersecurity",
    category: "Security",
    title: "Cybersecurity & Physical Security",
    image: imgCyber,
    expandable: true,
  },
  {
    id: "it-integration",
    category: "Integration",
    title: "IT Systems Integration",
    image: imgIT,
    route: "/it-integration",
  },
  {
    id: "tender",
    category: "Advisory",
    title: "Tender & Bid Advisory",
    image: imgTender,
    route: "/tender-advisory",
  },
  {
    id: "saas",
    category: "Software",
    title: "SaaS & Custom Software",
    image: imgSaas,
    route: "/saas-software",
  },
  {
    id: "digital",
    category: "Transformation",
    title: "Digital Transformation",
    image: imgDigital,
    route: "/digital-transformation",
  },
  {
    id: "project",
    category: "Management",
    title: "Project & Vendor Management",
    image: imgProject,
    route: "/project-management",
  },
];

const cyberSubServices = [
  { category: "Network", title: "Firewall Protection", image: imgIT, route: "/cyber/firewall" },
  { category: "Architecture", title: "Infrastructure Design", image: imgTender, route: "/cyber/infrastructure" },
  { category: "Networking", title: "Network Monitoring", image: imgDigital, route: "/cyber/monitoring" },
  { category: "Automation", title: "System Automation", image: imgSaas, route: "/cyber/automation" },
  { category: "Security", title: "Enterprise Security", image: imgProject, route: "/cyber/enterprise" },
];

function ServiceCards() {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = (service) => {
    if (service.expandable) {
      setExpanded(true);
    } else {
      navigate(service.route);
    }
  };

  return (
    <section className="services-section">
      <div className="title">
        <span>Our Security & Infrastructure Services</span>
      </div>
      <div className="services-grid">
        {services.map((service) => (
          <div
            key={service.id}
            className="service-card"
            onClick={() => handleCardClick(service)}
          >
            <img className="service-card-bg" src={service.image} alt={service.title} loading="lazy" width={800} height={512} />
            <div className="service-card-overlay" />
            <div className="service-card-content">
              <span className="service-card-category">{service.category}</span>
              <h3 className="service-card-title">{service.title}</h3>
              <span className="service-card-link">
                {service.expandable ? "View Services" : "View Service"}{" "}
                <span className="service-card-link-arrow">↗</span>
              </span>
            </div>
          </div>
        ))}
      </div>

      {expanded && (
        <div className="cyber-modal-backdrop" onClick={() => setExpanded(false)}>
          <div className="cyber-modal" onClick={(e) => e.stopPropagation()}>
            <div className="cyber-main">
              <button className="cyber-close-btn" onClick={() => setExpanded(false)}>✕</button>
              <img className="cyber-main-img" src={imgCyber} alt="Cloud Security" />
              <div className="cyber-main-body">
                <h2>Cybersecurity & Physical Security</h2>
                <p>Advanced cloud security solutions protecting enterprise infrastructure with cutting-edge threat detection and prevention systems.</p>
                <div className="cyber-tags">
                  <span className="cyber-tag">Cloud</span>
                  <span className="cyber-tag">Security</span>
                  <span className="cyber-tag">Protection</span>
                  <span className="cyber-tag">Physical</span>
                </div>
              </div>
            </div>
            <div className="cyber-sidebar">
              {cyberSubServices.map((sub, i) => (
                <div key={i} className="cyber-sub-card" onClick={() => navigate(sub.route)}>
                  <img className="cyber-sub-card-img" src={sub.image} alt={sub.title} loading="lazy" />
                  <div className="cyber-sub-card-text">
                    <p className="cyber-sub-card-category">{sub.category}</p>
                    <p className="cyber-sub-card-title">{sub.title}</p>
                  </div>
                  <span className="cyber-sub-card-arrow">↗</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ServiceCards;
