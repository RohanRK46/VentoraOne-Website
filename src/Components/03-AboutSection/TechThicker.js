import React from "react";
import "./TechTicker.css";

const ROW1 = [
  { name: "ERP Integration", cat: "Systems", icon: "🧩" },
  { name: "POS Systems", cat: "Systems", icon: "💳" },
  { name: "Ticketing Platforms", cat: "Systems", icon: "🎫" },
  { name: "Access Control", cat: "Security", icon: "🚪" },
  { name: "CCTV Systems", cat: "Security", icon: "📹" },
  { name: "Time & Attendance", cat: "Security", icon: "⏱️" },
  { name: "Firewall Deployment", cat: "Cybersecurity", icon: "🛡️" },
  { name: "Network Design", cat: "Infrastructure", icon: "🌐" },
  { name: "VLAN Segmentation", cat: "Networking", icon: "🔀" },
  { name: "Site-to-Site VPN", cat: "Connectivity", icon: "🔗" },
  { name: "Endpoint Security", cat: "Security", icon: "💻" },
  { name: "Email Security", cat: "Security", icon: "📧" },
  { name: "Backup & Recovery", cat: "Data", icon: "💾" },
  { name: "Disaster Recovery", cat: "Data", icon: "🔄" },
];

const ROW2 = [
  { name: "Custom SaaS Platforms", cat: "Software", icon: "🧠" },
  { name: "Flutter Apps", cat: "Development", icon: "📱" },
  { name: "Java Systems", cat: "Backend", icon: "☕" },
  { name: "AI Integrations", cat: "Advanced", icon: "🤖" },
  { name: "Digital Transformation", cat: "Strategy", icon: "📈" },
  { name: "Workflow Automation", cat: "Operations", icon: "⚙️" },
  { name: "Vendor Management", cat: "Execution", icon: "📦" },
  { name: "Project Delivery", cat: "Execution", icon: "🚀" },
  { name: "Procurement Strategy", cat: "Planning", icon: "📊" },
  { name: "HLD / LLD Design", cat: "Architecture", icon: "📐" },
  { name: "Multi-Vendor Integration", cat: "Integration", icon: "🔌" },
  { name: "Scalable Architecture", cat: "Design", icon: "🏗️" },
  { name: "High Availability", cat: "Reliability", icon: "⚡" },
  { name: "System Deployment", cat: "Delivery", icon: "🛠️" },
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
        <span className="tt-header-text">CAPABILITIES & TECHNOLOGIES</span>
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