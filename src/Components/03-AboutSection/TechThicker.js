import React from "react";
import "./TechTicker.css";

const ROW1 = [
  { name: "SonicWall", cat: "Firewall", icon: "🔥" },
  { name: "Fortinet", cat: "Firewall", icon: "🛡️" },
  { name: "Sophos", cat: "Firewall", icon: "🔐" },
  { name: "Palo Alto", cat: "Firewall", icon: "🧱" },
  { name: "VLANs", cat: "Networking", icon: "🔀" },
  { name: "Switching", cat: "Networking", icon: "🌐" },
  { name: "BGP / OSPF", cat: "Routing", icon: "📡" },
  { name: "IPSec VPN", cat: "VPN", icon: "🔒" },
  { name: "SSL-VPN", cat: "VPN", icon: "🔑" },
  { name: "Site-to-Site VPN", cat: "Connectivity", icon: "📶" },
  { name: "MX Email Security", cat: "Email", icon: "📧" },
  { name: "API Email Guard", cat: "Email", icon: "✉️" },
  { name: "EDR Solutions", cat: "Endpoint", icon: "🖥️" },
  { name: "AV Policies", cat: "Endpoint", icon: "🦠" },
];

const ROW2 = [
  { name: "Image Backups", cat: "Backup", icon: "💾" },
  { name: "Disaster Recovery", cat: "DR", icon: "🔄" },
  { name: "Hybrid Cloud", cat: "Cloud", icon: "☁️" },
  { name: "Zero Trust", cat: "Architecture", icon: "🚫" },
  { name: "HA Deployment", cat: "Availability", icon: "⚡" },
  { name: "Network Segmentation", cat: "Design", icon: "🗂️" },
  { name: "DLP Policies", cat: "Email", icon: "🛑" },
  { name: "BEC Prevention", cat: "Email", icon: "🎣" },
  { name: "Ransomware Defense", cat: "Endpoint", icon: "🛡️" },
  { name: "Threat Detection", cat: "Security", icon: "🔍" },
  { name: "LAN / WAN Design", cat: "Network", icon: "🏗️" },
  { name: "HLD / LLD Diagrams", cat: "Docs", icon: "📐" },
  { name: "Firewall Migration", cat: "Firewall", icon: "🔃" },
  { name: "Capacity Planning", cat: "Planning", icon: "📊" },
];

const Chip = ({ name, cat, icon }) => {
  return (
    <div className="tt-chip">
      <span className="tt-chip-icon">{icon}</span>

      <div className="tt-chip-text">
        <span className="tt-chip-name">{name}</span>
        <span className="tt-chip-cat">{cat}</span>
      </div>

      <div className="tt-chip-glow" />
    </div>
  );
};

const TechTicker = () => {
  return (
    <section className="tt-section">
      <div className="tt-header">
        <span className="tt-header-line" />
        <span className="tt-header-text">TECHNOLOGIES_WE_DEPLOY</span>
        <span className="tt-header-line" />
      </div>

      <div className="tt-track-wrap">
        {/* Row 1 */}
        <div className="tt-track">
          <div className="tt-fade-left" />
          <div className="tt-fade-right" />

          <div className="tt-row tt-row--ltr">
            {[...ROW1, ...ROW1].map((t, i) => (
              <Chip key={`r1-${i}`} {...t} />
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="tt-track">
          <div className="tt-fade-left" />
          <div className="tt-fade-right" />

          <div className="tt-row tt-row--rtl">
            {[...ROW2, ...ROW2].map((t, i) => (
              <Chip key={`r2-${i}`} {...t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechTicker;