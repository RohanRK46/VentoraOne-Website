import React, { useEffect, useRef } from "react";
import "./SaasAndCustomSoftwareSupport.css";

const capabilities = [
  {
    icon: "📱",
    title: "Cross-Platform Apps",
    desc: "Flutter-powered mobile experiences that work everywhere, even in low-bandwidth environments.",
    tag: "FLUTTER",
  },
  {
    icon: "⚙️",
    title: "Microservices",
    desc: "Scalable Java architectures with Docker containerization and cloud-agnostic deployment.",
    tag: "JAVA",
  },
  {
    icon: "🤖",
    title: "AI Automation",
    desc: "Intelligent duplicate detection, claims processing, and automation layers built to learn.",
    tag: "AI",
  },
  {
    icon: "🔗",
    title: "API & Integration",
    desc: "REST API design, member management platforms, and seamless third-party integrations.",
    tag: "API",
  },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "12+", label: "Industries Served" },
];

function useScrollReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    const el = ref.current;
    if (el) {
      const children = el.querySelectorAll(".scroll-reveal");
      children.forEach((child) => observer.observe(child));
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}

const SaasAndCustomSoftwareSupport = () => {
  const sectionRef = useScrollReveal();

  return (
    <section className="saas-section" ref={sectionRef}>
      <div className="saas-glow saas-glow-1" />
      <div className="saas-glow saas-glow-2" />

      <div className="saas-container">
        <div className="saas-header scroll-reveal">
          <span className="saas-eyebrow">What We Build</span>
          <h2 className="saas-heading">
            SaaS & Custom <span className="saas-heading-accent">Software</span>
          </h2>
          <p className="saas-subtext">
            We design and build bespoke software platforms — member management
            systems, claims processing platforms, mobile-first citizen apps, and
            AI-powered automation layers. Built for reliability. Designed for
            scale.
          </p>
        </div>

        <div className="saas-cards">
          {capabilities.map((cap, i) => (
            <div
              key={i}
              className="saas-card scroll-reveal"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className="saas-card-icon">{cap.icon}</div>
              <span className="saas-card-tag">{cap.tag}</span>
              <h3 className="saas-card-title">{cap.title}</h3>
              <p className="saas-card-desc">{cap.desc}</p>
              <div className="saas-card-shine" />
            </div>
          ))}
        </div>

        <div className="saas-stats scroll-reveal">
          {stats.map((stat, i) => (
            <div key={i} className="saas-stat">
              <span className="saas-stat-value">{stat.value}</span>
              <span className="saas-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SaasAndCustomSoftwareSupport;
