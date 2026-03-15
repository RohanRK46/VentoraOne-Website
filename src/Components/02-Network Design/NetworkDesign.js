import React, { useState, useEffect, useRef } from "react";
import "./NetworkDesign.css";
import cloudImg from "./images/Cloud.png";

export default function NetworkDesign() {

  const [open, setOpen] = useState(false);
  const startScroll = useRef(0);

  useEffect(() => {

    const handleScroll = () => {
      if (open && Math.abs(window.scrollY - startScroll.current) > 200) {
        setOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, [open]);

  const openSection = () => {
    startScroll.current = window.scrollY;
    setOpen(true);
  };

  return (
    <div className={`cloud-container ${open ? "active" : ""}`}>

      <div className="cloud-image">
        <img src={cloudImg} alt="Cloud Security" />
      </div>

      <div className="cloud-text">

        {!open ? (
          <div className="cloud-intro">
            <h1 onClick={openSection}>NETWORK DESIGN</h1>
            <p>Tap to know more</p>
          </div>
        ) : (
          <div className="cloud-content">

            <button className="close-btn" onClick={() => setOpen(false)}>
              ✕
            </button>

            <h1>NETWORK DESIGN</h1>

            <p>
              Cloud security protects applications, data, and infrastructure
              hosted in cloud environments. It includes encryption, identity
              management, and advanced threat detection.
            </p>

            <p>Secure cloud access & identity controls</p>
            <p>Firewall & VPN integration with cloud environments</p>
            <p>Hybrid (on-prem + cloud) security design</p>

            <p>
              Result : Secure cloud connectivity without impacting business productivity
            </p>

            <button className="start-btn">
              Get Started
            </button>

          </div>
        )}

      </div>

    </div>
  );
}