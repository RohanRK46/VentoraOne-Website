import "./SupportHero.css";
import HelpCarousel from "./HelpCarousel"
import ContactForm from "./ContactForm"

const SupportHero = () => {
  return (
    <>
    <section className="hero-section">
      
      {/* Background decorative elements */}
      <div className="bg-circle left-circle" />
      <div className="bg-circle right-circle" />

      <div className="hero-container">
        
        <div className="badge">
          <span className="pulse-dot" />
          <span className="badge-text">24/7 Live Support</span>
        </div>

        <h1 className="hero-title">
          How can we <span className="highlight">help</span> you?
        </h1>

        <p className="hero-desc">
          Browse our help categories or reach out to our team. We're always here for you.
        </p>

      </div>
    </section>

    <HelpCarousel/>
    <ContactForm/>
    </>
  );
};

export default SupportHero;