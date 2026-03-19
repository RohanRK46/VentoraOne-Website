import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Service2.css";
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/main.png";

gsap.registerPlugin(ScrollTrigger);

export default function Service2() {

  const sectionRef = useRef(null);

  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.fromTo(
        [".chatbox-1", ".chatbox-2", ".chatbox-3"],
        {
          opacity: 0,
          y: 60
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 50%",
            toggleActions: "restart none restart none"
          }
        }
      );

      gsap.from([".chatbox-2", ".chatbox-3"], {
        opacity: 0,
        y: 60,
        duration: 0.8,
        delay: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none"
        }
      });

    }, sectionRef);

    return () => ctx.revert(); // cleanup animations

  }, []);

  return (
    <section className="Service2" ref={sectionRef}>

      <div className="service2-content">

        <div className="mainimage">
          <img src={img3} alt="main service visual" loading="lazy" />
        </div>

        <div className="chatbox chatbox-1">
          <img src={img1} alt="chatbox visual 1" loading="lazy" />
        </div>

        <div className="chatbox chatbox-2">
          <img src={img2} alt="chatbox visual 2" loading="lazy" />
        </div>

        <div className="chatbox chatbox-3">
          Deployment initiated. Systems secured.
        </div>

      </div>

      <div className="righttext">

        <h1>Premium client services</h1>

        <br/>
        <br/>

        <div className="ptags">

          <p>
            VentoraOne is a technology-driven network and cyber security solutions provider delivering end-to-end IT security, infrastructure design, and implementation services.
          </p>

          <br/><br />

          <p>
            At Ventora, we don’t just deploy products - we design secure architectures that grow with your business.
          </p>

          <br/><br />

          <p>
            We help organizations design, secure, and manage their IT environments by combining strong networking fundamentals with modern security practices. Our approach focuses on real-world security, performance, scalability, and cost-effective solutions tailored to business needs.
          </p>

          <br />

          <a href="/">Explore Our Service</a>

        </div>

      </div>

    </section>
  );
}