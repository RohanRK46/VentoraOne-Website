import { motion } from "framer-motion";
import { Shield, Cloud, Lock, Server } from "lucide-react";
import "./CloudSecurity.css";
import heroImage from "./images/Cloud.png";
import { Link } from "react-router-dom";
import CheckOutServices from './OtherServices/CheckOutServices'
import Testimony from './Testimony/Testimony'

const features = [
  {
    icon: Cloud,
    title: "Cloud Security",
    desc: "End-to-end encryption and real-time threat monitoring across all your cloud infrastructure.",
  },
  {
    icon: Server,
    title: "Hybrid Architecture",
    desc: "Seamless security policies bridging on-premise and cloud environments with zero trust framework.",
  },
  {
    icon: Lock,
    title: "Compliance & Governance",
    desc: "Automated compliance checks aligned with ISO 27001, SOC 2, and GDPR standards.",
  },
  {
    icon: Shield,
    title: "Threat Intelligence",
    desc: "AI-powered threat detection with 24/7 security operations center coverage.",
  },
];

export default function CloudSecurity() {
  return (
    <section className="security-section">

      <div className="glow glow1"></div>
      <div className="glow glow2"></div>

      <div className="security-container">

        <div className="revealed-state">

          <motion.div
            className="content-left"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >

            <p className="tag">
              Enterprise-Grade Protection
            </p>

            <h2 className="content-title">
              Defend Your Digital
              <br />
              <span>Infrastructure</span>
            </h2>

            <p className="content-desc">
              We provide comprehensive cloud and hybrid security solutions
              that protect your organization from evolving cyber threats
              while ensuring regulatory compliance and business continuity.
            </p>

            <div className="feature-grid">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  className="feature-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <feature.icon className="feature-icon" />
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="button-group">
              <Link to="/ServiceBookingForm">
                <button className="primary-btn">
                  Book a Service
                </button>
              </Link>
            </div>

          </motion.div>

          <motion.div
            className="content-right"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={heroImage}
              alt="Cloud Security"
              className="hero-image-large"
            />
          </motion.div>

        </div>
        <CheckOutServices/>
        <Testimony/>
      </div>
    </section>
  );
}