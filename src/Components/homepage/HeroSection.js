import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './HeroSection.module.css'; // <-- changed
import Background from "./background";

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
      <Background />
      <div className={styles.hero}>
        <div className={styles['hero-content']}>
          <img className={styles['hero-logo']} src={logo} alt="VentoraOne logo" loading="lazy" />

          <h1 className={styles['hero-heading']}>Powering Modern Enterprise Systems</h1>
          <span className={styles['hero-tagline']}>Integrate. Automate. Transform.</span>

          <p className={styles['hero-description']}>
            Advanced cybersecurity and enterprise-grade network infrastructure built for modern global enterprises.
          </p>

          <div className={styles['hero-buttons']}>
            <Link to="/VentoraOneSupport">
              <button className={styles['git-btn']}>Get In Touch</button>
            </Link>
            <Link to="/">
              <button className={styles['vs-btn']}>View Services</button>
            </Link>
          </div>
        </div>

        <div className={styles.shield} ref={shieldRef}>
          <img src={shieldImg} alt="firewall logo" loading="lazy" />
        </div>
      </div>
    </>
  );
}