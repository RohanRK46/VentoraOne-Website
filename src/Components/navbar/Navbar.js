import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "./navbarImages/logonav.png";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [cyberOpen, setCyberOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setServiceOpen(false);
    setCyberOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* LOGO */}
        <Link to="/" onClick={closeMenu}>
          <img id="logo" src={logo} alt="company logo" loading="lazy" />
        </Link>

        {/* HAMBURGER */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(prev => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* NAV LINKS */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

          {/* ABOUT */}
          <li className="mainLi">
            <Link className="mainA" to="/AboutSection" onClick={closeMenu}>
              About
            </Link>
          </li>

          {/* SERVICES */}
          <li
            className="mainLi services"
            onClick={(e) => {
              e.stopPropagation();
              setServiceOpen(prev => !prev);
            }}
          >
            <span className="mainA services-label">
              Services <span className="arrow-down">▾</span>
            </span>

            <ul className={`dropdown ${serviceOpen ? "show" : ""}`}>

              <li><Link to="/ItSystemIntegration" onClick={closeMenu}>IT Systems Integration</Link></li>
              <li><Link to="/tenderAndBidding" onClick={closeMenu}>Tender &amp; Bid Advisory</Link></li>
              <li><Link to="/SaasAndCustomSoftware" onClick={closeMenu}>SaaS &amp; Custom Software</Link></li>

              {/* 4th — Cybersecurity */}
              <li className="has-submenu">

                {/* Entire row is clickable on mobile to expand; on desktop hover works via CSS */}
                <div
                  className="cyber-row"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCyberOpen(prev => !prev);
                  }}
                >
                  {/* Text — no navigation, just expand */}
                  <span className="cyber-main-link">
                    Cybersecurity &amp; Physical Security
                  </span>

                  {/* Desktop: right arrow */}
                  <span className="arrow-right desktop-only">›</span>

                  {/* Mobile: rotating down arrow */}
                  <span className="mobile-only">
                    <span className={`arrow-toggle-icon ${cyberOpen ? "rotated" : ""}`}>▾</span>
                  </span>
                </div>

                {/* Submenu */}
                <ul className={`submenu ${cyberOpen ? "show" : ""}`}>
                  <li><Link to="/CloudSecurity" onClick={closeMenu}>Cloud &amp; Hybrid Security</Link></li>
                  <li><Link to="/NetworkDesign" onClick={closeMenu}>Network Design</Link></li>
                  <li><Link to="/FireWallSecurity" onClick={closeMenu}>Firewall Security</Link></li>
                  <li><Link to="/BackUpAndRecovery" onClick={closeMenu}>Backup And Recovery</Link></li>
                  <li><Link to="/troubleshooting" onClick={closeMenu}>Troubleshooting</Link></li>
                </ul>

              </li>

              <li><Link to="/DigitalTransformation" onClick={closeMenu}>Digital Transformation</Link></li>
              <li><Link to="/ProjectVendorManagement" onClick={closeMenu}>Project &amp; Vendor Management</Link></li>

            </ul>
          </li>

          {/* TECHNOLOGIES */}
          <li className="mainLi">
            <Link className="mainA" to="/Technologies" onClick={closeMenu}>
              Technologies
            </Link>
          </li>

          {/* CONTACT */}
          <li className="mainLi">
            <Link className="mainA" to="/VentoraOneSupport" onClick={closeMenu}>
              Contact
            </Link>
          </li>

          {/* BUTTON */}
          <li>
            <Link to="/ServiceBookingForm" onClick={closeMenu}>
              <button className="btn">Get Started</button>
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
}