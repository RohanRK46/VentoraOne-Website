import React, { useState } from "react";
import "./Technologies.css";

const techData = [
  {
    id: 1,
    service: "Cloud & Hybrid Security",
    category: "cloud",
    color: "#00c8ff",
    icon: "☁️",
    techs: [
      { name: "AWS", icon: "https://cdn.simpleicons.org/amazonaws/FF9900" },
      { name: "Azure", icon: "https://cdn.simpleicons.org/microsoftazure/0078D4" },
      { name: "Google Cloud", icon: "https://cdn.simpleicons.org/googlecloud/4285F4" },
      { name: "Terraform", icon: "https://cdn.simpleicons.org/terraform/7B42BC" },
      { name: "Vault", icon: "https://cdn.simpleicons.org/vault/8B5CF6" },
      { name: "Okta", icon: "https://cdn.simpleicons.org/okta/007DC1" },
    ],
  },
  {
    id: 2,
    service: "Network Design",
    category: "networking",
    color: "#a855f7",
    icon: "🌐",
    techs: [
      { name: "Cisco", icon: "https://cdn.simpleicons.org/cisco/1BA0D7" },
      { name: "Fortinet", icon: "https://cdn.simpleicons.org/fortinet/EE3124" },
      { name: "Wireshark", icon: "https://cdn.simpleicons.org/wireshark/1679A7" },
      { name: "OpenVPN", icon: "https://cdn.simpleicons.org/openvpn/EA7E20" },
      { name: "NGINX", icon: "https://cdn.simpleicons.org/nginx/009639" },
      { name: "pfSense", icon: "https://cdn.simpleicons.org/pfsense/212121" },
    ],
  },
  {
    id: 3,
    service: "Firewall Security",
    category: "security",
    color: "#f97316",
    icon: "🔥",
    techs: [
      { name: "Palo Alto", icon: "https://cdn.simpleicons.org/paloaltonetworks/FA582D" },
      { name: "Cloudflare", icon: "https://cdn.simpleicons.org/cloudflare/F38020" },
      { name: "Fortinet", icon: "https://cdn.simpleicons.org/fortinet/EE3124" },
      { name: "Snort", icon: "https://cdn.simpleicons.org/snort/CC0000" },
      { name: "Suricata", icon: "https://cdn.simpleicons.org/suricata/F5811F" },
      { name: "pfSense", icon: "https://cdn.simpleicons.org/pfsense/212121" },
    ],
  },
  {
    id: 4,
    service: "Backup & Recovery",
    category: "cloud",
    color: "#10b981",
    icon: "💾",
    techs: [
      { name: "Veeam", icon: "https://cdn.simpleicons.org/veeam/00B336" },
      { name: "AWS S3", icon: "https://cdn.simpleicons.org/amazons3/569A31" },
      { name: "Azure Backup", icon: "https://cdn.simpleicons.org/microsoftazure/0078D4" },
      { name: "Bacula", icon: "https://cdn.simpleicons.org/bacula/A40000" },
      { name: "Duplicati", icon: "https://cdn.simpleicons.org/duplicati/2185C5" },
      { name: "Restic", icon: "https://cdn.simpleicons.org/restic/FFA500" },
    ],
  },
  {
    id: 5,
    service: "Cybersecurity & Physical",
    category: "security",
    color: "#ef4444",
    icon: "🛡️",
    techs: [
      { name: "Kali Linux", icon: "https://cdn.simpleicons.org/kalilinux/557C94" },
      { name: "Metasploit", icon: "https://cdn.simpleicons.org/metasploit/2596CD" },
      { name: "Splunk", icon: "https://cdn.simpleicons.org/splunk/000000" },
      { name: "CrowdStrike", icon: "https://cdn.simpleicons.org/crowdstrike/E0090A" },
      { name: "Nessus", icon: "https://cdn.simpleicons.org/tenable/00B4C8" },
      { name: "Burp Suite", icon: "https://cdn.simpleicons.org/portswigger/FF6633" },
    ],
  },
  {
    id: 6,
    service: "IT Systems Integration",
    category: "integration",
    color: "#3b82f6",
    icon: "🔗",
    techs: [
      { name: "MuleSoft", icon: "https://cdn.simpleicons.org/mulesoft/00A1DF" },
      { name: "Kafka", icon: "https://cdn.simpleicons.org/apachekafka/231F20" },
      { name: "RabbitMQ", icon: "https://cdn.simpleicons.org/rabbitmq/FF6600" },
      { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
      { name: "Kubernetes", icon: "https://cdn.simpleicons.org/kubernetes/326CE5" },
      { name: "Postman", icon: "https://cdn.simpleicons.org/postman/FF6C37" },
    ],
  },
  {
    id: 7,
    service: "Tender & Bid Advisory",
    category: "advisory",
    color: "#14b8a6",
    icon: "📋",
    techs: [
      { name: "Microsoft 365", icon: "https://cdn.simpleicons.org/microsoft/5E5E5E" },
      { name: "SharePoint", icon: "https://cdn.simpleicons.org/microsoftsharepoint/0078D4" },
      { name: "Notion", icon: "https://cdn.simpleicons.org/notion/000000" },
      { name: "Jira", icon: "https://cdn.simpleicons.org/jira/0052CC" },
      { name: "Confluence", icon: "https://cdn.simpleicons.org/confluence/172B4D" },
      { name: "DocuSign", icon: "https://cdn.simpleicons.org/docusign/FFBE00" },
    ],
  },
  {
    id: 8,
    service: "SaaS & Custom Software",
    category: "software",
    color: "#8b5cf6",
    icon: "💻",
    techs: [
      { name: "Flutter", icon: "https://cdn.simpleicons.org/flutter/02569B" },
      { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
      { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
      { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
      { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
    ],
  },
  {
    id: 9,
    service: "Digital Transformation",
    category: "advisory",
    color: "#ec4899",
    icon: "🦋",
    techs: [
      { name: "Power BI", icon: "https://cdn.simpleicons.org/powerbi/F2C811" },
      { name: "Tableau", icon: "https://cdn.simpleicons.org/tableau/E97627" },
      { name: "Salesforce", icon: "https://cdn.simpleicons.org/salesforce/00A1E0" },
      { name: "ServiceNow", icon: "https://cdn.simpleicons.org/servicenow/62D84E" },
      { name: "SAP", icon: "https://cdn.simpleicons.org/sap/0FAAFF" },
      { name: "OpenAI", icon: "https://cdn.simpleicons.org/openai/412991" },
    ],
  },
  {
    id: 10,
    service: "Project & Vendor Management",
    category: "advisory",
    color: "#f59e0b",
    icon: "📊",
    techs: [
      { name: "Jira", icon: "https://cdn.simpleicons.org/jira/0052CC" },
      { name: "Monday.com", icon: "https://cdn.simpleicons.org/mondaydotcom/F62B54" },
      { name: "Asana", icon: "https://cdn.simpleicons.org/asana/F06A6A" },
      { name: "Confluence", icon: "https://cdn.simpleicons.org/confluence/172B4D" },
      { name: "Slack", icon: "https://cdn.simpleicons.org/slack/4A154B" },
      { name: "MS Project", icon: "https://cdn.simpleicons.org/microsoft/5E5E5E" },
    ],
  },
];

const categories = [
  { id: "all", label: "All" },
  { id: "cloud", label: "Cloud" },
  { id: "networking", label: "Networking" },
  { id: "security", label: "Security" },
  { id: "integration", label: "Integration" },
  { id: "software", label: "Software" },
  { id: "advisory", label: "Advisory" },
];

export default function Technologies() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? techData
      : techData.filter((t) => t.category === activeCategory);

  return (
    <section className="tech-section">
      <div className="tech-bg-grid" />
      <div className="tech-bg-glow" />

      <div className="tech-container">

        {/* HEADER */}
        <div className="tech-header">
          <p className="tech-eyebrow">TECH STACK</p>
          <h2 className="tech-title">
            Technologies <span className="tech-accent">We Use</span>
          </h2>
          <p className="tech-subtitle">
            Enterprise-grade tools and platforms powering every service we deliver
          </p>
        </div>

        {/* FILTER */}
        <div className="tech-filter">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`tech-filter-btn ${activeCategory === cat.id ? "active" : ""}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="tech-grid">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="tech-card"
              style={{ "--accent": item.color }}
            >
              <div className="tech-card-top" />
              <div className="tech-card-header">
                <span className="tech-card-icon">{item.icon}</span>
                <div>
                  <p className="tech-card-category">{item.category.toUpperCase()}</p>
                  <h3 className="tech-card-title">{item.service}</h3>
                </div>
              </div>
              <div className="tech-card-divider" />
              <div className="tech-card-pills">
                {item.techs.map((tech, i) => (
                  <div key={i} className="tech-pill">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="tech-pill-img"
                      onError={(e) => { e.target.style.display = "none"; }}
                    />
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
