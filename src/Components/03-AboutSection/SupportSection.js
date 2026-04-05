import { useEffect, useRef } from "react";
import { Cpu, Eye, Globe, Lock, Server, Shield, Zap } from "lucide-react";
import styles from "./SupportSection.module.css";

const capabilities = [
  {
    icon: Server,
    title: "IT Systems Integration",
    desc: "Complex multi-vendor platform integration — ERP, POS, ticketing, access control — delivered as one unified system.",
  },
  {
    icon: Globe,
    title: "Tender & Bid Advisory",
    desc: "Winning tender responses for government and institutional clients. Strategy, pricing, consortium formation — end to end.",
  },
  {
    icon: Shield,
    title: "Cybersecurity & Physical Security",
    desc: "Access control architectures and surveillance systems protecting assets across every facility, perimeter, and zone.",
  },
  {
    icon: Cpu,
    title: "SaaS & Custom Software",
    desc: "Bespoke platforms for emerging markets — offline-capable, scalable, deployable on government cloud. Flutter, Java, AI.",
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    desc: "From manual workflows to integrated, data-driven operations. Strategy and execution for institutions modernizing legacy.",
  },
  {
    icon: Lock,
    title: "Project & Vendor Management",
    desc: "We act as your delivery arm — managing vendors, subcontractors, timelines, and quality across multi-party projects.",
  },
];

const advantages = [
  {
    icon: Eye,
    title: "Vendor-Neutral",
    desc: "Independent advice. We recommend what's right — not what earns commission.",
  },
  {
    icon: Shield,
    title: "We Own Outcomes",
    desc: "Prime contractor model. One accountable partner. No finger-pointing.",
  },
  {
    icon: Globe,
    title: "Context-Native",
    desc: "Built for bandwidth constraints, complex procurement, and legacy infra.",
  },
  {
    icon: Zap,
    title: "Lean & Fast",
    desc: "No 12-week discovery. We assess, propose, and execute — speed is a feature.",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Assess & Scope",
    desc: "Rapid technical and commercial assessment. Clear picture, fast.",
  },
  {
    num: "02",
    title: "Architect & Propose",
    desc: "Solution architecture, vendor selection, build-vs-buy, cost modelling.",
  },
  {
    num: "03",
    title: "Deliver & Integrate",
    desc: "Vendor management, system configuration, rigorous QA, milestone reporting.",
  },
  {
    num: "04",
    title: "Train & Handover",
    desc: "User training, documentation, structured handover. Nothing falls through.",
  },
];

export default function SupportSection() {
  const pageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    const elements = pageRef.current?.querySelectorAll(
      `.${styles.reveal}, .${styles["reveal-scale"]}, .${styles["stagger-children"]}`
    );

    elements?.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles["ventora-page"]} ref={pageRef}>

      {/* ── Capabilities ── */}
      <section className={styles["capabilities-section"]}>
        <p className={`${styles["section-label"]} ${styles.reveal}`}>What We Do</p>
        <h2 className={`${styles["heading-primary"]} ${styles.reveal} ${styles["hero-delay-1"]}`}>
          Full-spectrum <span className={styles.highlight}>capabilities.</span>
        </h2>

        <div className={`${styles["capabilities-grid"]} ${styles["stagger-children"]}`}>
          {capabilities.map((item) => {
            const Icon = item.icon;
            return (
              <article className={styles["capability-card"]} key={item.title}>
                <div className={styles["capability-icon"]}>
                  <Icon size={24} />
                </div>
                <h3 className={styles["capability-title"]}>{item.title}</h3>
                <p className={styles["capability-desc"]}>{item.desc}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* ── Why Ventora ── */}
      <section className={styles["why-section"]}>
        <div className={styles["why-inner"]}>
          <p className={`${styles["section-label"]} ${styles.reveal}`}>Why Ventora One</p>
          <h2 className={`${styles["heading-primary"]} ${styles.reveal} ${styles["hero-delay-1"]}`}>
            Not a vendor.{" "}
            <span className={styles.highlight}>Your delivery partner.</span>
          </h2>

          <div
            className={`${styles["why-grid-wrapper"]} ${styles.reveal} ${styles["hero-delay-2"]}`}
          >
            <div className={styles["why-connecting-line"]} />
            <div
              className={`${styles["why-grid"]} ${styles["stagger-children"]} ${styles["visible-sequence-fix"]}`}
            >
              {advantages.map((item) => {
                const Icon = item.icon;
                return (
                  <article className={styles["why-card"]} key={item.title}>
                    <div className={styles["why-dot"]} />
                    <div className={styles["why-card-inner"]}>
                      <div className={styles["why-icon"]}>
                        <Icon size={24} />
                      </div>
                      <h3 className={styles["why-title"]}>{item.title}</h3>
                      <p className={styles["why-desc"]}>{item.desc}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className={styles["process-section"]}>
        <p className={`${styles["section-label"]} ${styles.reveal}`}>How We Work</p>
        <h2 className={`${styles["heading-primary"]} ${styles.reveal} ${styles["hero-delay-1"]}`}>
          Our delivery <span className={styles.highlight}>process.</span>
        </h2>

        <div
          className={`${styles["process-timeline"]} ${styles.reveal} ${styles["hero-delay-2"]}`}
        >
          <div className={styles["process-line-bg"]} />
          <div className={styles["process-line-animated"]} />

          {processSteps.map((step, index) => (
            <div className={styles["process-step"]} key={step.num}>
              <div className={styles["process-content"]}>
                <p className={styles["process-number"]}>{step.num}</p>
                <h3 className={styles["process-title"]}>{step.title}</h3>
                <p className={styles["process-desc"]}>{step.desc}</p>
              </div>
              <div className={styles["process-dot-wrap"]}>
                <div className={styles["process-dot"]} />
              </div>
              <div
                className={`${styles["process-spacer"]} ${styles[`process-spacer-${index + 1}`]}`}
              />
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}