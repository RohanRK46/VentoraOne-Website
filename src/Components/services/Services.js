import { useState, useRef } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";

import "./Services.css";
import ServiceBganimation from "./ServiceBganimation";

import brandingImg from "./imagesServices/firewall.png";
import mobileImg from "./imagesServices/c2.png";
import architectureImg from "./imagesServices/img3.jpg";
import webImg from "./imagesServices/network.png";
import motionImg from "./imagesServices/c2.png";
import productImg from "./imagesServices/c2.png";

const services = [
  {
    id: 1,
    title: "Cloud Security",
    category: "Security",
    image: brandingImg,
    description:
      "Advanced cloud security solutions protecting enterprise infrastructure.",
    tags: ["Cloud", "Security", "Protection"],
  },
  {
    id: 2,
    title: "Firewall Protection",
    category: "Network",
    image: mobileImg,
    description:
      "Enterprise-grade firewall systems to monitor and protect your network.",
    tags: ["Firewall", "Security", "Network"],
  },
  {
    id: 3,
    title: "Infrastructure Design",
    category: "Architecture",
    image: architectureImg,
    description:
      "Secure infrastructure architecture designed for scalability.",
    tags: ["Infrastructure", "Servers", "Architecture"],
  },
  {
    id: 4,
    title: "Network Monitoring",
    category: "Networking",
    image: webImg,
    description:
      "Continuous network monitoring ensuring high availability and uptime.",
    tags: ["Monitoring", "Network", "Security"],
  },
  {
    id: 5,
    title: "System Automation",
    category: "Automation",
    image: motionImg,
    description:
      "Automated infrastructure management and deployment systems.",
    tags: ["Automation", "DevOps", "Infrastructure"],
  },
  {
    id: 6,
    title: "Enterprise Security",
    category: "Security",
    image: productImg,
    description:
      "Comprehensive enterprise-grade cybersecurity protection.",
    tags: ["Security", "Enterprise", "Protection"],
  },
];

const easing = [0.77, 0, 0.175, 1];

export default function Services() {

  const [activeId, setActiveId] = useState(null);

  const gridRef = useRef(null);
  const isInView = useInView(gridRef, { amount: 0.35 });

  const activeService = services.find((s) => s.id === activeId) || null;
  const sideServices = activeService
    ? services.filter((s) => s.id !== activeId)
    : [];

  return (
    <div className="services-root">

      <ServiceBganimation />

      {/* HEADER */}

      <header className="services-header">

        <div>
          <h1 className="services-header-title">Our Security & Infrastructure Services</h1>
        </div>

        <p className="services-header-meta">6 Solutions</p>

      </header>

      {/* MAIN */}

      <main className="services-main">

        <AnimatePresence>

          {/* SERVICES GRID */}

          {!activeService && (

            <motion.div
              ref={gridRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: easing }}
              className="services-grid"
            >

              {services.map((service, i) => (

                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={
                    isInView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 40 }
                  }
                  transition={{
                    delay: Math.floor(i / 3) * 0.35 + (i % 3) * 0.08,
                    duration: 0.5,
                    ease: easing
                  }}
                  onClick={() => setActiveId(service.id)}
                  className="service-card"
                >

                  <div className="service-card-image">
                    <img src={service.image} alt={service.title} />
                  </div>

                  <div className="service-card-body">

                    <div className="service-card-meta">
                      <span className="service-card-category">
                        {service.category}
                      </span>

                      <span className="service-card-year">
                        {service.year}
                      </span>
                    </div>

                    <h2 className="service-card-title">
                      {service.title}
                    </h2>

                    <div className="service-card-cta">
                      <span>View Service</span>
                      <ArrowUpRight size={12} />
                    </div>

                  </div>

                </motion.div>

              ))}

            </motion.div>

          )}

          {/* EXPANDED SERVICE */}

          {activeService && (

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="services-expanded"
            >

              {/* HERO */}

              <motion.div
                className="service-hero"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.55, ease: easing }}
              >

                <div className="service-hero-image">

                  <img
                    src={activeService.image}
                    alt={activeService.title}
                  />

                  <button
                    className="service-hero-close"
                    onClick={() => setActiveId(null)}
                  >
                    <X size={16} />
                  </button>

                </div>

                <div className="service-hero-body">

                  <h2 className="service-hero-title">
                    {activeService.title}
                  </h2>

                  <p className="service-hero-description">
                    {activeService.description}
                  </p>

                  <div className="service-hero-tags">

                    {activeService.tags.map((tag) => (

                      <span
                        key={tag}
                        className="service-tag"
                      >
                        {tag}
                      </span>

                    ))}

                  </div>

                </div>

              </motion.div>

              {/* SIDEBAR */}

              <div className="services-sidebar">

                {sideServices.map((service, i) => (

                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.1 + i * 0.06,
                      duration: 0.4,
                      ease: easing
                    }}
                    onClick={() => setActiveId(service.id)}
                    className="services-sidebar-card"
                  >

                    <img
                      src={service.image}
                      alt={service.title}
                      className="sidebar-thumb"
                    />

                    <div className="sidebar-info">

                      <span>{service.category}</span>

                      <p>{service.title}</p>

                    </div>

                    <ArrowUpRight size={14} />

                  </motion.div>

                ))}

              </div>

            </motion.div>

          )}

        </AnimatePresence>

      </main>

    </div>
  );
}