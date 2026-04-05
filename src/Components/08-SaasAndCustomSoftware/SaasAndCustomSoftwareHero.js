import React from "react";
import heroBg from "./images/hero-bg.png";
import "./SaasAndCustomSoftwareHero.css";
import SaasAndCustomSoftwareSupport from "./SaasAndCustomSoftwareSupport"

const services = [
    "Tender response architecture & writing",
    "Technical scoring strategy",
    "Pricing and margin structure modelling",
    "Consortium and JV formation",
    "Subcontractor evaluation and management",
    "Vendor negotiation and SLA structuring",
    "Public procurement regulation advisory",
    "Post-award contract management",
];

const SaasAndCustomSoftwareHero = () => {
    return (
        <>
            <section className="hero-section">
                <div className="hero-bg">
                    <img src={heroBg} alt="" width={1920} height={1080} />
                </div>
                <div className="hero-overlay" />
                <div className="hero-content">
                    <div className="hero-left">
                        <div className="hero-label">
                            <span className="hero-label-line" />
                            Advisory Services
                        </div>
                        <h1 className="hero-title">
                            Tender &<br />
                            <span className="hero-title-accent">Bid Advisory</span>
                        </h1>
                        <p className="hero-description">
                            We understand the anatomy of a winning tender — not just the
                            compliance, but the technical scoring, pricing psychology, and vendor
                            positioning that separates successful bids from also-rans.
                        </p>
                        <div className="hero-buttons">
                            <button className="hero-btn-primary">Get Started</button>
                            <button className="hero-btn-secondary">Learn More</button>
                        </div>
                    </div>
                    <div className="hero-right">
                        {services.map((service, i) => (
                            <div
                                key={i}
                                className="hero-service-item"
                                style={{ animationDelay: `${0.15 * (i + 1)}s` }}
                            >
                                <span className="hero-service-num">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <span className="hero-service-text">{service}</span>
                                <span className="hero-service-dot" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <SaasAndCustomSoftwareSupport />
        </>
    );
};

export default SaasAndCustomSoftwareHero;
