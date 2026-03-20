import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';
import Background from "./background"

// TODO: Replace these with your actual image imports
import logo from './herosection-imgs/logo1.png';
import shieldImg from './herosection-imgs/shield.png';

export default function HeroSection() {
  const shieldRef = useRef(null);

  useEffect(() => {
    let currentX = 0;
    let targetX = 0;
    const smoothFactor = 0.07;
    let animId;

    const animate = () => {
      currentX += (targetX - currentX) * smoothFactor;
      if (shieldRef.current) {
        shieldRef.current.style.transform = `translateX(${currentX}px)`;
      }
      animId = requestAnimationFrame(animate);
    };

    const handleScroll = () => {
      targetX = window.scrollY * 1.3;
    };

    window.addEventListener('scroll', handleScroll);
    animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
    <Background/>
    <div className="hero">
      <div className="hero-content">
        {/* Replace src with your logo import */}
        <img className="hero-logo" src={logo} alt="VentoraOne logo" loading="lazy" />

        <h1 className="hero-heading">Network & Cyber Security Solutions</h1>
        <span className="hero-tagline">Design. Secure. Scale.</span>

        <p className="hero-description">
          Advanced cybersecurity and enterprise-grade network infrastructure built for modern global enterprises.
        </p>

        <div className="hero-buttons">
          <Link to="/VentoraOneSupport">
            <button className="git-btn">Get In Touch</button>
          </Link>
          <Link to="/">
            <button className="vs-btn">View Services</button>
          </Link>
        </div>
      </div>

      <div className="shield" ref={shieldRef}>
        {/* Replace src with your shield import */}
        <img src={shieldImg} alt="firewall logo" loading="lazy" />
      </div>
    </div>
    </>
  );
}