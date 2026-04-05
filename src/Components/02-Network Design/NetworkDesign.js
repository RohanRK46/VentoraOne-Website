import { motion } from "framer-motion";
import { Shield, Network, Lock, Server } from "lucide-react";
import "./NetworkDesign.css";
import heroImage from "./images/Cloud.png";
import { Link } from "react-router-dom";
import PerformanceSection from "./PerformanceBar/PerformanceSection"
import CheckOutOtherServices from "../CheckOutOtherServices/CheckOutOtherServices";

const features = [
  {
    icon: Network,
    title: "Network Architecture",
    desc: "Design scalable and resilient network infrastructures tailored to your organization’s performance and security needs.",
  },
  {
    icon: Server,
    title: "Infrastructure Planning",
    desc: "Build optimized network topologies ensuring seamless connectivity, high availability, and efficient data flow.",
  },
  {
    icon: Shield,
    title: "Secure Network Design",
    desc: "Implement segmentation, firewalls, and secure protocols to protect networks from unauthorized access and threats.",
  },
  {
    icon: Lock,
    title: "Performance Optimization",
    desc: "Enhance network reliability and speed using intelligent routing, load balancing, and proactive monitoring.",
  },
];

export default function NetworkDesign() {
  return (
    <div className="networkdesign-page">

      <section className="network">

        <div className="network-glow network-glow1"></div>
        <div className="network-glow network-glow2"></div>

        <div className="network-container">

          <div className="network-revealed-state">

            <motion.div
              className="network-content-left"
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >

              <p className="network-tag">
                Enterprise Network Solutions
              </p>

              <h2 className="network-content-title">
                Build Strong
                <br />
                <span>Network Infrastructure</span>
              </h2>

              <p className="network-content-desc">
                We design scalable and secure network infrastructures that ensure
                seamless communication, optimized performance, and reliable
                connectivity for modern digital environments.
              </p>

              <div className="network-feature-grid">
                {features.map((feature, i) => (
                  <motion.div
                    key={feature.title}
                    className="network-feature-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <feature.icon className="network-feature-icon" />
                    <h3>{feature.title}</h3>
                    <p>{feature.desc}</p>
                  </motion.div>
                ))}
              </div>

              <div className="network-button-group">
                <Link to="/ServiceBookingForm">
                  <button className="network-primary-btn">
                    Book a Service
                  </button>
                </Link>
              </div>

            </motion.div>

            <motion.div
              className="network-content-right"
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <img
                src={heroImage}
                alt="Network Design"
                className="network-hero-image-large"
              />
            </motion.div>

          </div>

          {/* <CheckOutServices/>
          <Testimony/> */}

        </div>

      </section>

      <PerformanceSection/>
      <CheckOutOtherServices/>

    </div>
  );
}