import React, { useEffect, useRef } from 'react';
import {Link} from "react-router-dom"
import logo from "./herosection-imgs/logo1.png";
import shieldImg from "./herosection-imgs/shield.png";
import Background from './background';
import './HeroSection.css';

export default function HeroSection() {

  const shieldRef = useRef(null);

  useEffect(() => {

    let currentX = 0;
    let targetX = 0;

    const smoothFactor = 0.07;

    const animate = () => {
      currentX += (targetX - currentX) * smoothFactor;

      if (shieldRef.current) {
        shieldRef.current.style.transform = `translateX(${currentX}px)`;
      }

      requestAnimationFrame(animate);
    };

    const handleScroll = () => {
      const scrollValue = window.scrollY;
      targetX = scrollValue * 1.3;
    };

    window.addEventListener("scroll", handleScroll);

    animate();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  return (
    <>
      <Background />

      <div className='hero'>

        <img src={logo} alt="company logo" loading="lazy" />

        <h1>Network & Cyber Security Solutions</h1>

        <span>Design. Secure. Scale.</span>

        <p className='p1'>
          Advanced cybersecurity and enterprise-grade network
        </p>
        <p className='p2'>
          infrastructure built for modern global enterprises.
        </p>

        <div className="wv-cta-actions">
          <Link to="/VentoraOneSupport">
            <button className="git-btn">Get In Touch</button>
          </Link>
          <Link to="/">
            <button className="vs-btn">View Services</button>
          </Link>
        </div>

        <div className="shield" ref={shieldRef}>
          <img src={shieldImg} alt="firewall logo" loading="lazy" />
        </div>

      </div>
    </>
  );
}