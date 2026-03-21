import { Shield, Clock, Headphones } from "lucide-react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section-scope">
      <div className="hero-badge">
        <span className="pulse-dot" />
        Available 24/7
      </div>

      <h1 className="hero-title">
        Book a <span className="accent">Service</span>
      </h1>

      <p className="hero-subtitle">
        Expert IT security and infrastructure services at your fingertips.
        Schedule a consultation and our team will handle the rest.
      </p>

      <div className="hero-features">
        <div className="hero-feature">
          <Shield className="icon" />
          Enterprise-grade security
        </div>

        <div className="hero-feature">
          <Clock className="icon" />
          Response within 24 hours
        </div>

        <div className="hero-feature">
          <Headphones className="icon" />
          24/7 support available
        </div>
      </div>
    </section>
  );
};

export default HeroSection;