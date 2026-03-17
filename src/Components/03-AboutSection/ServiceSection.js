import React, { useState } from "react";
import "./ServicesSection.css";

const SERVICES = [
  {
    id: "network",
    icon: "🌐",
    title: "Network Design & Infrastructure",
    tag: "DESIGN",
    points: [
      "Architecture design for SMB & enterprise",
      "VLAN, zone & network segmentation",
      "Redundancy & high availability (HA)",
      "Bandwidth & throughput planning",
      "Secure LAN, WAN & internet design",
    ],
    result: "Scalable, future-ready architecture",
    color: "#00d4ff",
  },
  {
    id: "firewall",
    icon: "🔥",
    title: "Firewall Security & Implementation",
    tag: "SECURITY",
    points: [
      "Firewall installation & configuration",
      "Zone-based security policies",
      "NAT, routing & access control",
      "Site-to-site & remote access VPN",
      "High availability (HA) deployment",
    ],
    result: "Secure, stable & segmented infrastructure",
    color: "#ff6b35",
  },
  {
    id: "endpoint",
    icon: "🖥️",
    title: "Endpoint Security & Threat Protection",
    tag: "PROTECTION",
    points: [
      "Endpoint security deployment",
      "EDR / antivirus policy configuration",
      "Ransomware & malware protection",
      "Threat detection, response & monitoring",
      "Agent troubleshooting & health checks",
    ],
    result: "Strong protection against endpoint attacks",
    color: "#7c3aed",
  },
  {
    id: "email",
    icon: "📧",
    title: "Email Security & Phishing Protection",
    tag: "EMAIL",
    points: [
      "MX-based & API-based deployment",
      "Anti-phishing, anti-spam & spoofing",
      "Business Email Compromise (BEC) prevention",
      "Email Data Loss Prevention (DLP)",
      "Policy tuning & alert optimization",
    ],
    result: "Secure email with reduced fraud risks",
    color: "#10b981",
  },
  {
    id: "cloud",
    icon: "☁️",
    title: "Cloud & Hybrid Security",
    tag: "CLOUD",
    points: [
      "Secure cloud access & identity controls",
      "Firewall & VPN integration with cloud",
      "Hybrid (on-prem + cloud) security design",
      "Cloud workload protection fundamentals",
    ],
    result: "Secure cloud without impacting productivity",
    color: "#0066ff",
  },
  {
    id: "backup",
    icon: "💾",
    title: "Backup & Disaster Recovery",
    tag: "RESILIENCE",
    points: [
      "Backup strategy & architecture design",
      "Agent-based & agentless deployment",
      "Image-based & snapshot backups",
      "Backup monitoring & restore testing",
      "Disaster recovery (DR) planning",
    ],
    result: "Business continuity & fast recovery",
    color: "#f59e0b",
  },
  {
    id: "troubleshoot",
    icon: "🛠️",
    title: "Troubleshooting & Optimization",
    tag: "SUPPORT",
    points: [
      "Network performance & connectivity",
      "Firewall policy, NAT & VPN issues",
      "Endpoint & email security alerts",
      "Backup failure diagnosis & recovery",
    ],
    result: "Faster resolution, minimal downtime",
    color: "#ec4899",
  },
  {
    id: "e2e",
    icon: "🔁",
    title: "End-to-End Project Delivery",
    tag: "DELIVERY",
    points: [
      "Requirement analysis",
      "Security architecture design",
      "Technology selection guidance",
      "Installation, testing & validation",
      "Documentation & professional handover",
    ],
    result: "Complete, documented project delivery",
    color: "#00d4ff",
  },
];

const ServicesSection = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="sv-section">
      <div className="sv-bg" />
      <div className="sv-container">
        <div className="sv-header">
          <span className="sv-tag">OUR_SERVICES</span>
          <h2 className="sv-title">Comprehensive Security Services</h2>
          <p className="sv-subtitle">
            End-to-end solutions across every layer of your IT environment
          </p>
        </div>

        <div className="sv-grid">
          {SERVICES.map((svc) => (
            <div
              key={svc.id}
              className={`sv-card ${
                hovered === svc.id ? "sv-card--hovered" : ""
              }`}
              onMouseEnter={() => setHovered(svc.id)}
              onMouseLeave={() => setHovered(null)}
              style={{ "--svc-color": svc.color }}
            >
              <div className="sv-card-top-line" />

              <div className="sv-card-inner">
                <div className="sv-card-head">
                  <span className="sv-icon">{svc.icon}</span>
                  <span className="sv-badge">{svc.tag}</span>
                </div>

                <h3 className="sv-card-title">{svc.title}</h3>

                <ul className="sv-points">
                  {svc.points.map((p) => (
                    <li key={p} className="sv-point">
                      <span className="sv-point-dot" />
                      {p}
                    </li>
                  ))}
                </ul>

                <div className="sv-result">
                  <span className="sv-result-icon">✓</span>
                  <span className="sv-result-text">{svc.result}</span>
                </div>
              </div>

              <div className="sv-card-glow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;