import { motion } from "framer-motion";
import { Shield, Lock, Server, AlertTriangle } from "lucide-react";
import "./FireWallSecurity.css";
import heroImage from "./images/firewall.png";
import { Link } from "react-router-dom";
import SupportSectionFW from "./SupportSectionFW/SupportSectionFW";
import CheckOutOtherServices from "../CheckOutOtherServices/CheckOutOtherServices";

const features = [
  {
    icon: Shield,
    title: "Advanced Threat Protection",
    desc: "Detect and block malicious traffic using intelligent firewall systems that prevent cyber threats in real-time.",
  },
  {
    icon: Lock,
    title: "Access Control",
    desc: "Define strict access policies to ensure only authorized users and devices can interact with your network.",
  },
  {
    icon: Server,
    title: "Network Monitoring",
    desc: "Continuously monitor incoming and outgoing traffic to identify suspicious activities and vulnerabilities.",
  },
  {
    icon: AlertTriangle,
    title: "Intrusion Prevention",
    desc: "Stop attacks before they happen with proactive intrusion detection and prevention mechanisms.",
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

              <p className="firewall-tag">
                Network Security Solutions
              </p>

              <h2 className="firewall-content-title">
                Protect Your
                <br />
                <span>Firewall Security</span>
              </h2>

              <p className="firewall-content-desc">
                Safeguard your systems with advanced firewall solutions that
                monitor, filter, and block unauthorized access while ensuring
                secure and uninterrupted network operations.
              </p>

              <div className="firewall-feature-grid">
                {features.map((feature, i) => (
                  <motion.div
                    key={feature.title}
                    className="firewall-feature-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <feature.icon className="firewall-feature-icon" />
                    <h3>{feature.title}</h3>
                    <p>{feature.desc}</p>
                  </motion.div>
                ))}
              </div>

              <div className="firewall-button-group">
                <Link to="/ServiceBookingForm">
                  <button className="firewall-primary-btn">
                    Book a Service
                  </button>
                </Link>
              </div>

            </motion.div>

            <motion.div
              className="firewall-content-right"
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <img
                src={heroImage}
                alt="Firewall Security"
                className="firewall-hero-image-large"
                loading="lazy"
              />
            </motion.div>

          </div>

        </div>

      </section>

      <SupportSectionFW/>
      <CheckOutOtherServices/>

    </div>
  );
}