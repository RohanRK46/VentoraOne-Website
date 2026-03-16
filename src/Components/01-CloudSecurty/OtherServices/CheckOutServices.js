import React from "react";
import "./CheckOutServices.css";
import { Monitor, ShieldCheck, BarChart3, Headphones } from "lucide-react";
import { color } from "framer-motion";

const services = [
    {
        icon: Monitor,
        title: "Web Development",
        description:
            "Custom-built, responsive websites tailored to your business goals with modern technologies.",
    },
    {
        icon: ShieldCheck,
        title: "Cyber Security",
        description:
            "Protect your digital assets with enterprise-grade security audits and threat monitoring.",
    },
    {
        icon: BarChart3,
        title: "Digital Marketing",
        description:
            "Data-driven marketing strategies that boost visibility and drive measurable growth.",
    },
    {
        icon: Headphones,
        title: "IT Consulting",
        description:
            "Expert guidance to streamline your tech infrastructure and optimize operations.",
    },
];

const Checkout = ({titleColor , cardcolor}) => {
    return (
        <section className="checkout-section">
            <div className="checkout-container">

                <div className="checkout-header">
                    <p className="checkout-subtitle">What We Offer</p>
                    <h2 className="checkout-title" style={{ color: titleColor }}>
                        Check Out Our Other Services
                    </h2>
                </div>

                <div className="services-grid">
                    {services.map((service) => (
                        <div key={service.title} className="service-card" style={{ backgroundColor: cardcolor}}>

                            <div className="service-icon">
                                <service.icon className="icon" />
                            </div>

                            <h3 className="service-title">{service.title}</h3>

                            <p className="service-description">{service.description}</p>

                            <a href="#" className="service-link">
                                Learn More
                            </a>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Checkout;