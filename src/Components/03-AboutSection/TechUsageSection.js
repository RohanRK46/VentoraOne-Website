import React, { useState } from "react";
import "./TechUsageSection.css";

const TECH_CATEGORIES = [
  {
    id: "firewalls",
    icon: "🔥",
    title: "Firewall Platforms",
    color: "#ff6b35",
    vendors: ["SonicWall", "Fortinet", "Sophos", "Palo Alto"],
    usage: [
      {
        label: "Zone-Based Security Policies",
        desc: "We configure multi-zone architectures separating LAN, DMZ, WAN, and guest networks, applying granular rules between each zone.",
      },
      {
        label: "High Availability (HA) Clustering",
        desc: "Active-passive and active-active HA deployments ensure zero downtime by failing over to a standby unit within seconds.",
      },
      {
        label: "VPN Gateway Configuration",
        desc: "Site-to-site IPSec tunnels and SSL/VPN remote access are configured for secure multi-branch connectivity.",
      },
      {
        label: "NAT & Routing",
        desc: "Policy-based NAT, PAT, static NAT and dynamic routing protocols (OSPF/BGP) are implemented for optimal traffic flow.",
      },
      {
        label: "Firewall Migration & Upgrades",
        desc: "We migrate legacy firewalls to modern platforms with minimal disruption, preserving rule logic and security posture.",
      },
    ],
  },
  {
    id: "networking",
    icon: "🌐",
    title: "Networking & Infrastructure",
    color: "#00d4ff",
    vendors: ["Switching", "VLANs", "Routing", "WAN"],
    usage: [
      {
        label: "VLAN Segmentation Design",
        desc: "Logical network segmentation by department, function, or security zone — reducing blast radius of any breach.",
      },
      {
        label: "Redundant WAN Connectivity",
        desc: "Dual-ISP failover with load balancing ensures uninterrupted internet access for critical business operations.",
      },
      {
        label: "Network Diagrams (HLD/LLD)",
        desc: "High-level and low-level design documents delivered after every project for clear operational reference.",
      },
      {
        label: "Capacity Planning",
        desc: "Throughput modeling, switch port planning, and bandwidth analysis tailored to business growth projections.",
      },
    ],
  },
  {
    id: "endpoint",
    icon: "🖥️",
    title: "Endpoint Security",
    color: "#7c3aed",
    vendors: ["EDR Platforms", "AV Solutions", "Workstations", "Servers"],
    usage: [
      {
        label: "EDR Deployment & Policy Config",
        desc: "Agent-based EDR solutions deployed across workstations and servers with behavioral detection policies enabled.",
      },
      {
        label: "Ransomware Containment",
        desc: "File protection policies and rollback capabilities are configured to detect and automatically contain ransomware.",
      },
      {
        label: "Threat Monitoring & Response",
        desc: "Alert triage, incident response workflows, and scheduled health checks keep every endpoint in known-good state.",
      },
      {
        label: "Policy Exclusions & Tuning",
        desc: "Whitelist tuning and exception management reduce false positives without compromising protection coverage.",
      },
    ],
  },
  {
    id: "email",
    icon: "📧",
    title: "Email Security",
    color: "#10b981",
    vendors: ["MX-Based", "API-Based", "Cloud Email", "On-Prem"],
    usage: [
      {
        label: "Anti-Phishing & Spoofing",
        desc: "SPF, DKIM, DMARC enforcement combined with AI-based phishing detection filters fraudulent emails before delivery.",
      },
      {
        label: "BEC Prevention",
        desc: "Business Email Compromise rules detect impersonation of executives and suppliers, blocking wire fraud attempts.",
      },
      {
        label: "Email DLP Policies",
        desc: "Outbound DLP rules scan for sensitive data (PII, financial docs) being exfiltrated via email.",
      },
      {
        label: "Alert Tuning & Optimization",
        desc: "We tune detection policies to minimize false positives while ensuring high-confidence threat catches.",
      },
    ],
  },
  {
    id: "backup",
    icon: "💾",
    title: "Backup & Disaster Recovery",
    color: "#f59e0b",
    vendors: ["Image Backup", "File-Level", "Agent-Based", "Agentless"],
    usage: [
      {
        label: "Image-Based Backup Strategy",
        desc: "Full system image snapshots enable bare-metal restore of entire servers in minutes, not hours.",
      },
      {
        label: "RPO/RTO Planning",
        desc: "Recovery Point Objectives and Recovery Time Objectives are defined and tested against your business continuity requirements.",
      },
      {
        label: "Backup Verification & Restore Tests",
        desc: "Regular automated restore tests verify backups are not only taking successfully but are fully restorable.",
      },
      {
        label: "DR Documentation",
        desc: "Detailed disaster recovery runbooks are provided ensuring your team can recover without vendor dependency.",
      },
    ],
  },
  {
    id: "cloud",
    icon: "☁️",
    title: "Cloud & Hybrid Security",
    color: "#0066ff",
    vendors: ["Hybrid Cloud", "Cloud VPN", "Identity", "Workload Security"],
    usage: [
      {
        label: "Hybrid Architecture Design",
        desc: "On-premises and cloud resources unified under a single security policy framework with consistent access controls.",
      },
      {
        label: "Cloud Firewall & VPN Integration",
        desc: "Secure site-to-cloud tunnels integrating cloud workloads with physical firewall perimeters.",
      },
      {
        label: "Identity & Access Controls",
        desc: "Role-based access, MFA enforcement, and conditional access policies applied across cloud environments.",
      },
      {
        label: "Cloud Workload Protection",
        desc: "Fundamental protections (patching, monitoring, secure config baselines) applied to all cloud instances.",
      },
    ],
  },
];

const TechUsageSection = () => {
  const [active, setActive] = useState("firewalls");

  const activeCat = TECH_CATEGORIES.find((c) => c.id === active);

  return (
    <section className="tu-section">
      <div className="tu-bg-dots" />

      <div className="tu-container">
        <div className="tu-header">
          <span className="tu-tag">HOW WE DEPLOY TECHNOLOGY</span>
          <h2 className="tu-title">
            Technology in Practice
            </h2>
          <p className="tu-subtitle">
            See exactly how each technology platform is leveraged to secure your environment
          </p>
        </div>

        <div className="tu-layout">
          {/* Tabs */}
          <div className="tu-tabs">
            {TECH_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                className={`tu-tab ${
                  active === cat.id ? "tu-tab--active" : ""
                }`}
                onClick={() => setActive(cat.id)}
                style={{ "--tab-color": cat.color }}
              >
                <span className="tu-tab-icon">{cat.icon}</span>
                <span className="tu-tab-label">{cat.title}</span>
                <span className="tu-tab-arrow">›</span>
              </button>
            ))}
          </div>

          {/* Panel */}
          <div
            className="tu-panel"
            style={{ "--panel-color": activeCat.color }}
            key={active}
          >
            <div className="tu-panel-header">
              <div className="tu-panel-icon">{activeCat.icon}</div>

              <div>
                <h3 className="tu-panel-title">{activeCat.title}</h3>

                <div className="tu-vendors">
                  {activeCat.vendors.map((v) => (
                    <span key={v} className="tu-vendor-tag">
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="tu-panel-divider" />

            <div className="tu-usage-list">
              {activeCat.usage.map((u, i) => (
                <div key={u.label} className="tu-usage-item">
                  <div className="tu-usage-num">0{i + 1}</div>

                  <div className="tu-usage-body">
                    <h4 className="tu-usage-label">{u.label}</h4>
                    <p className="tu-usage-desc">{u.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechUsageSection;