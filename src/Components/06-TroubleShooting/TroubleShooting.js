import { motion } from "framer-motion";
import { Search, Wrench, MonitorCheck, Zap } from "lucide-react";
import "./TroubleShooting.css";
import heroImage from "./images/troubleshoot.png";
import { Link } from "react-router-dom";
import SupportSectionTS from "./SupportSectionTS/SupportSectionTS";
import CheckOutOtherServices from "../CheckOutOtherServices/CheckOutOtherServices";

const features = [
  {
    icon: Search,
    title: "Issue Diagnosis",
    desc: "Accurately identify the root cause of technical problems using advanced diagnostic tools and systematic analysis.",
  },
  {
    icon: Wrench,
    title: "Hardware Repair",
    desc: "Resolve hardware failures and physical component issues with expert hands-on repair and replacement services.",
  },
  {
    icon: MonitorCheck,
    title: "Software Fixes",
    desc: "Debug, patch, and resolve software conflicts, crashes, and performance issues across all platforms.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    desc: "Boost system speed and responsiveness by eliminating bottlenecks, junk files, and misconfigurations.",
  },
];

export default function TroubleShooting() {
  return (
    <div className="ts-page">

      <section className="ts">

        <div className="ts-glow ts-glow1"></div>
        <div className="ts-glow ts-glow2"></div>

        <div className="ts-container">

          <div className="ts-revealed-state">

            <motion.div
              className="ts-content-left"
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >

              <p className="ts-tag">
                Technical Support Solutions
              </p>

              <h2 className="ts-content-title">
                Expert
                <br />
                <span>Troubleshooting & Fixes</span>
              </h2>

              <p className="ts-content-desc">
                Get your systems back on track with fast, reliable troubleshooting
                services — from diagnosing root causes to delivering lasting fixes
                for hardware, software, and performance issues.
              </p>

              <div className="ts-feature-grid">
                {features.map((feature, i) => (
                  <motion.div
                    key={feature.title}
                    className="ts-feature-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <feature.icon className="ts-feature-icon" />
                    <h3>{feature.title}</h3>
                    <p>{feature.desc}</p>
                  </motion.div>
                ))}
              </div>

              <div className="ts-button-group">
                <Link to="/ServiceBookingForm">
                  <button className="ts-primary-btn">
                    Book a Service
                  </button>
                </Link>
              </div>

            </motion.div>

            <motion.div
              className="ts-content-right"
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <img
                src={heroImage}
                alt="Troubleshooting and Fixes"
                className="ts-hero-image-large"
                loading="lazy"
              />
            </motion.div>

          </div>

        </div>

      </section>

      <SupportSectionTS />
      <CheckOutOtherServices />

    </div>
  );
}