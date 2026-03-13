import React, { useEffect, useRef } from "react";
import "./Services.css";
import { Link } from "react-router-dom";
import ServiceBganimation from "./ServiceBganimation";

export default function Services() {

  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const services = [
    {
      title: <Link id="nd" to="/network-design">Network Design</Link>,
      desc: "Secure and scalable enterprise-grade network architecture."
    },
    {
      title: <Link id="fs" to="/firewall-security">Firewall Security</Link>,
      desc: "Advanced firewall configuration and threat prevention."
    },
    {
      title: <Link id="ep" to="/endpoint-protection">Endpoint Protection</Link>,
      desc: "Comprehensive device security and monitoring."
    },
    {
      title: <Link id="chs" to="/cloud-hosting">Cloud & Hybrid Security</Link>,
      desc: "Secure cloud and hybrid environment protection."
    },
    {
      title: <Link id="br" to="/backup-recovery">Backup & Recovery</Link>,
      desc: "Reliable disaster recovery and data security solutions."
    },
    {
      title: <Link id="ts" to="/troubleshooting">Troubleshooting</Link>,
      desc: "Fast and efficient IT issue resolution services."
    }
  ];

  useEffect(() => {

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {

          const index = cardsRef.current.indexOf(entry.target);

          if (entry.isIntersecting) {
            entry.target.style.transitionDelay = `${index * 0.12}s`;
            entry.target.classList.add("show");
          } else {
            entry.target.style.transitionDelay = "0s";
            entry.target.classList.remove("show");
          }

        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -40px 0px"
      }
    );

    cardsRef.current.forEach((card) => observer.observe(card));

    return () => observer.disconnect();

  }, []);

  return (
    <>
      <ServiceBganimation />

      <section className="Services" ref={sectionRef}>

        <h1>Our Security & Infrastructure Services</h1>
        <hr />

        <div className="services-grid">

          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`service-card ${index < 3 ? "from-left" : "from-right"}`}
            >
              <div className="card-inner">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            </div>
          ))}

        </div>

      </section>
    </>
  );
}