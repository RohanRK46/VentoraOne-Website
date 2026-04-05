import { motion } from "framer-motion";
import { Database, RefreshCcw, ShieldCheck, Cloud } from "lucide-react";
import "./BackUpAndRecovery.css";
import heroImage from "./image/cloud.png";
import { Link } from "react-router-dom";
import SupportSectionBR from "./SupportSectionBR/SupportSectionBR";
import CheckOutOtherServices from "../CheckOutOtherServices/CheckOutOtherServices";

const features = [
  {
    icon: Database,
    title: "Data Backup",
    desc: "Securely store and maintain copies of critical data to prevent loss from unexpected failures or cyber incidents.",
  },
  {
    icon: RefreshCcw,
    title: "Disaster Recovery",
    desc: "Quickly restore systems and data after disruptions, ensuring business continuity with minimal downtime.",
  },
  {
    icon: ShieldCheck,
    title: "Data Protection",
    desc: "Safeguard sensitive information using encryption, secure storage, and access control mechanisms.",
  },
  {
    icon: Cloud,
    title: "Cloud Backup Solutions",
    desc: "Leverage cloud-based backups for scalable, reliable, and easily accessible data recovery solutions.",
  },
];

export default function BackUpAndRecovery() {
  return (
    <div className="backup-page">

      <section className="backup">

        <div className="backup-glow backup-glow1"></div>
        <div className="backup-glow backup-glow2"></div>

        <div className="backup-container">

          <div className="backup-revealed-state">

            <motion.div
              className="backup-content-left"
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >

              <p className="backup-tag">
                Data Safety Solutions
              </p>

              <h2 className="backup-content-title">
                Reliable
                <br />
                <span>Backup & Recovery</span>
              </h2>

              <p className="backup-content-desc">
                Ensure your data is always protected and recoverable with robust
                backup strategies and disaster recovery solutions designed for
                modern digital environments.
              </p>

              <div className="backup-feature-grid">
                {features.map((feature, i) => (
                  <motion.div
                    key={feature.title}
                    className="backup-feature-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <feature.icon className="backup-feature-icon" />
                    <h3>{feature.title}</h3>
                    <p>{feature.desc}</p>
                  </motion.div>
                ))}
              </div>

              <div className="backup-button-group">
                <Link to="/ServiceBookingForm">
                  <button className="backup-primary-btn">
                    Book a Service
                  </button>
                </Link>
              </div>

            </motion.div>

            <motion.div
              className="backup-content-right"
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <img
                src={heroImage}
                alt="Backup and Recovery"
                className="backup-hero-image-large"
                loading="lazy"
              />
            </motion.div>

          </div>

        </div>

      </section>

      <SupportSectionBR/>
      <CheckOutOtherServices/>

    </div>
  );
}