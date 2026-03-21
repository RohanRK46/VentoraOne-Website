import React from "react";
import "./CheckOutServices.css";
import { Monitor, ShieldCheck, BarChart3, Headphones } from "lucide-react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    id: 1,
    icon: Monitor,
    title: "Cloud & Hybrid Security",
    description:
      "Custom-built, responsive websites tailored to your business goals with modern technologies.",
    link: "/CloudSecurity",
  },
  {
    id: 2,
    icon: ShieldCheck,
    title: "Cyber Security",
    description:
      "Protect your digital assets with enterprise-grade security audits and threat monitoring.",
    link: "/",
  },
  {
    id: 3,
    icon: BarChart3,
    title: "Digital Marketing",
    description:
      "Data-driven marketing strategies that boost visibility and drive measurable growth.",
    link: "/",
  },
  {
    id: 4,
    icon: Headphones,
    title: "IT Consulting",
    description:
      "Expert guidance to streamline your tech infrastructure and optimize operations.",
    link: "/",
  },
  {
    id: 5,
    icon: Headphones,
    title: "IT Consulting",
    description:
      "Expert guidance to streamline your tech infrastructure and optimize operations.",
    link: "/",
  },
];

const Checkout = ({ titleColor = "#fff", cardcolor = "#1a1a1a" }) => {
  const navigate = useNavigate();

  return (
    <section className="checkout-section">
      <div className="checkout-container">

        <div className="checkout-header">
          <p className="checkout-subtitle">What We Offer</p>

          <h2
            className="checkout-title"
            style={{ color: titleColor }}
          >
            Check Out Our Other Services
          </h2>
        </div>

        <div className="services-grid">

          {services.map((service) => {
            const IconComponent = service.icon;

            return (
              <div
                key={service.id}
                className="service-card"
                style={{ backgroundColor: cardcolor }}
                onClick={() => navigate(service.link)}
              >

                <div className="service-icon">
                  <IconComponent className="icon" />
                </div>

                <h3 className="service-title">
                  {service.title}
                </h3>

                <p className="service-description">
                  {service.description}
                </p>

                <span className="service-link">
                  Check Out
                </span>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default Checkout;