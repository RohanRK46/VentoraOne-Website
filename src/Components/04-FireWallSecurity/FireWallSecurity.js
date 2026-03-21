import { motion } from "framer-motion";
import { Shield, Lock, Network, Server } from "lucide-react";
import "./FirewallSecurity.css";
import heroImage from "./images/Cloud.png";
import { Link } from "react-router-dom";
import PerformanceSection from "./PerformanceBar/PerformanceSection";
import CheckOutServices from "./CheckOutServices/CheckOutServices";

const features = [
  {
    icon: Shield,
    title: "Firewall Deployment",
    desc: "Install and configure enterprise-grade firewalls for network protection.",
  },
  {
    icon: Lock,
    title: "Access Control",
    desc: "Define secure policies, NAT, and user-based access restrictions.",
  },
  {
    icon: Network,
    title: "VPN Configuration",
    desc: "Set up secure site-to-site and remote VPN connectivity.",
  },
  {
    icon: Server,
    title: "High Availability",
    desc: "Ensure redundancy and failover with HA firewall configurations.",
  },
];

export default function FirewallSecurity() {
  return (
    <div className="firewall-page">

      <section className="firewall">

        <div className="firewall-glow firewall-glow1"></div>
        <div className="firewall-glow firewall-glow2"></div>

        <div className="firewall-container">

          <div className="firewall-revealed-state">

            <motion.div
              className="firewall-content-left"
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >

              <p className="firewall-tag">Firewall Security</p>

              <h2 className="firewall-title">
                Protect Your <br />
                <span>Network Edge</span>
              </h2>

              <p className="firewall-desc">
                Secure your infrastructure with advanced firewall strategies,
                access control, and network segmentation.
              </p>

              <div className="firewall-grid">
                {features.map((f, i) => (
                  <motion.div
                    key={f.title}
                    className="firewall-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <f.icon className="firewall-icon" />
                    <h3>{f.title}</h3>
                    <p>{f.desc}</p>
                  </motion.div>
                ))}
              </div>

              <div className="firewall-btn-group">
                <Link to="/ServiceBookingForm">
                  <button className="firewall-btn">Book a Service</button>
                </Link>
              </div>

            </motion.div>

            <motion.div className="firewall-right">
              <img src={heroImage} className="firewall-img" />
            </motion.div>

          </div>

        </div>

      </section>

      <PerformanceSection />
      <CheckOutServices />

    </div>
  );
}