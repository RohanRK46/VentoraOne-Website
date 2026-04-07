import { motion } from "framer-motion";
import { Cloud, Shield, Network, Lock } from "lucide-react";
import "./CloudAndHybridSecurity.css";
import heroImage from "./images/Cloud.png";
import { Link } from "react-router-dom";
import SupportSection from "./SupprtSectionCHS/SupportSectionCHS"
import CheckOutOtherServices from "../CheckOutOtherServices/CheckOutOtherServices";

const features = [
  {
    icon: Cloud,
    title: "Secure Cloud Access",
    desc: "Implement identity controls and secure access policies to protect cloud environments and user authentication.",
  },
  {
    icon: Network,
    title: "Hybrid Infrastructure Design",
    desc: "Design seamless integration between on-prem and cloud systems ensuring secure connectivity and scalability.",
  },
  {
    icon: Shield,
    title: "Unified Security Policies",
    desc: "Apply consistent security controls across cloud and on-prem environments for better protection.",
  },
  {
    icon: Lock,
    title: "Secure Data & Identity",
    desc: "Protect sensitive data and ensure secure identity management using encryption and access control mechanisms.",
  },
];

export default function CloudAndHybridSecurity() {
  return (
    <div className="cloudhybrid-page">

      <section className="cloudhybrid">

        <div className="cloudhybrid-glow cloudhybrid-glow1"></div>
        <div className="cloudhybrid-glow cloudhybrid-glow2"></div>

        <div className="cloudhybrid-container">

          <div className="cloudhybrid-revealed-state">

            {/* LEFT SIDE */}
            <motion.div
              className="cloudhybrid-content-left"
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >

              <p className="cloudhybrid-tag">
                Cloud & Hybrid Security
              </p>

              <h2 className="cloudhybrid-content-title">
                Secure Your
                <br />
                <span>Cloud & Hybrid Systems</span>
              </h2>

              <p className="cloudhybrid-content-desc">
                Protect modern IT environments by combining cloud and on-prem
                security strategies. We ensure secure access, seamless integration,
                and strong protection across hybrid infrastructures.
              </p>

              <div className="cloudhybrid-feature-grid">
                {features.map((feature, i) => (
                  <motion.div
                    key={feature.title}
                    className="cloudhybrid-feature-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <feature.icon className="cloudhybrid-feature-icon" />
                    <h3>{feature.title}</h3>
                    <p>{feature.desc}</p>
                  </motion.div>
                ))}
              </div>

              <div className="cloudhybrid-button-group">
                <Link to="/ServiceBookingForm">
                  <button className="cloudhybrid-primary-btn">
                    Book a Service
                  </button>
                </Link>
              </div>

            </motion.div>

            {/* RIGHT SIDE */}
            <motion.div
              className="cloudhybrid-content-right"
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <img
                src={heroImage}
                alt="Cloud & Hybrid Security"
                className="cloudhybrid-hero-image-large"
              />
            </motion.div>

          </div>

        </div>

      </section>

      <SupportSection/>
      <CheckOutOtherServices/>

    </div>
  );
}