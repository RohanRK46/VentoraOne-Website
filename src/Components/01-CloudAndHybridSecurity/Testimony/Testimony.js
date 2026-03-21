import { useEffect, useRef, useState } from "react";
import { Shield, Quote } from "lucide-react";
import "./Testimony.css";

const testimonials = [
  {
    name: "Rachel Nguyen",
    role: "VP of Infrastructure",
    company: "Meridian Health Systems",
    text: "Migrating to a hybrid model felt risky until we partnered with this team. They secured our patient data across three cloud providers without a single compliance gap.",
    metric: "99.97%",
    metricLabel: "uptime maintained",
  },
  {
    name: "David Kowalski",
    role: "CISO",
    company: "Stratos Financial Group",
    text: "Their zero-trust framework cut our mean time to detect threats from 14 hours to under 40 minutes. The visibility across our hybrid environment is unprecedented.",
    metric: "40 min",
    metricLabel: "threat detection",
  },
  {
    name: "Amara Osei",
    role: "Head of Cloud Engineering",
    company: "Polaris Logistics",
    text: "We reduced our attack surface by 73% within the first quarter. The automated policy enforcement across our multi-cloud stack saved us hundreds of engineering hours.",
    metric: "73%",
    metricLabel: "attack surface reduced",
  },
  {
    name: "Marcus Chen",
    role: "CTO",
    company: "Vantage SaaS",
    text: "Scaling from 200 to 3,000 containerized services meant rethinking security entirely. Their cloud-native approach gave us guardrails without sacrificing developer velocity.",
    metric: "3,000+",
    metricLabel: "services secured",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function Initials({ name }) {
  const initials = name.split(" ").map((w) => w[0]).join("");
  return (
    <div className="testimonial-avatar">
      {initials}
      <div className="testimonial-avatar-ping" />
    </div>
  );
}

function TestimonialCard({ t, index, visible }) {
  return (
    <div
      className={`testimonial-card ${visible ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <div className="testimonial-card-scanline" />
      <Quote className="testimonial-quote-icon" />
      <p className="testimonial-text">"{t.text}"</p>

      <div className="testimonial-footer">
        <div className="testimonial-author">
          <Initials name={t.name} />
          <div>
            <p className="testimonial-name">{t.name}</p>
            <p className="testimonial-role">{t.role}, {t.company}</p>
          </div>
        </div>

        <div className="testimonial-metric">
          <p className="testimonial-metric-value">{t.metric}</p>
          <p className="testimonial-metric-label">{t.metricLabel}</p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialSection() {
  const { ref, inView } = useInView(0.1);

  return (
    <section ref={ref} className="testimonial-section">
      <div className="testimonial-grid-bg" />
      <div className="testimonial-container">
        <div className={`testimonial-header ${inView ? "visible" : ""}`}>
          <div className="testimonial-badge">
            <Shield />
            <span>Trusted by Security Leaders</span>
          </div>
          <h2 className="testimonial-title">
            Protecting Infrastructure<br />
            <span className="testimonial-title-accent">Across Every Cloud</span>
          </h2>
          <p className="testimonial-subtitle">
            See how organizations secure their hybrid and multi-cloud environments with confidence.
          </p>
        </div>

        <div className="testimonial-cards">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i} visible={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
