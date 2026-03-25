import { motion } from "framer-motion";
import { Wrench, AlertCircle, Monitor, Activity } from "lucide-react";
import "./TroubleShooting.css";
import heroImage from "./images/troubleshooting.png";
import { Link } from "react-router-dom";
import PerformanceSection from "./PerformanceBar/PerformanceSection";
import CheckOutServices from "./CheckOutServices/CheckOutServices";

const features = [
  {
    icon: Wrench,
    title: "System Diagnostics",
    desc: "Identify and analyze system issues quickly using advanced diagnostic tools and techniques.",
  },
  {
    icon: AlertCircle,
    title: "Issue Resolution",
    desc: "Resolve technical problems efficiently to minimize downtime and ensure smooth operations.",
  },
  {
    icon: Monitor,
    title: "Hardware & Software Fixes",
    desc: "Troubleshoot and repair both hardware and software issues across systems and networks.",
  },
  {
    icon: Activity,
    title: "Performance Monitoring",
    desc: "Continuously monitor systems to detect problems early and maintain optimal performance.",
  },
];

export default function TroubleShooting() {
  return (
    <div className="troubleshoot-page">

      <section className="troubleshoot">

        <div className="troubleshoot-glow troubleshoot-glow1"></div>
        <div className="troubleshoot-glow troubleshoot-glow2"></div>

        <div className="troubleshoot-container">

          <div className="troubleshoot-revealed-state">

            <motion.div
              className="troubleshoot-content-left"
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >

              <p className="troubleshoot-tag">
                Technical Support Solutions
              </p>

              <h2 className="troubleshoot-content-title">
                Smart
                <br />
                <span>Troubleshooting</span>
              </h2>

              <p className="troubleshoot-content-desc">
                Quickly identify, diagnose, and resolve technical issues to ensure
                smooth system performance and uninterrupted business operations.
              </p>

              <div className="troubleshoot-feature-grid">
                {features.map((feature, i) => (
                  <motion.div
                    key={feature.title}
                    className="troubleshoot-feature-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <feature.icon className="troubleshoot-feature-icon" />
                    <h3>{feature.title}</h3>
                    <p>{feature.desc}</p>
                  </motion.div>
                ))}
              </div>

              <div className="troubleshoot-button-group">
                <Link to="/ServiceBookingForm">
                  <button className="troubleshoot-primary-btn">
                    Book a Service
                  </button>
                </Link>
              </div>

            </motion.div>

            <motion.div
              className="troubleshoot-content-right"
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <img
                src={heroImage}
                alt="Troubleshooting"
                className="troubleshoot-hero-image-large"
                loading="lazy"
              />
            </motion.div>

          </div>

        </div>

      </section>

      <PerformanceSection />
      <CheckOutServices titleColor="black" cardcolor="rgb(8 16 52)" />

    </div>
  );
}