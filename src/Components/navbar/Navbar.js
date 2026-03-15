import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "./navbarImages/logo1.png";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setServiceOpen(false);
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
            <Link className="mainA" to="/about" onClick={closeMenu}>
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
            <span className="mainA">Services</span>

            <ul className={`dropdown ${serviceOpen ? "show" : ""}`}>
              <li><Link to="/support" onClick={closeMenu}>24/7 Ventoraone Support</Link></li>
              <li><Link to="/AllServices" onClick={closeMenu}>Cloud & Hybrid Security</Link></li>
              <li><Link to="/AllServices" onClick={closeMenu}>Network Design</Link></li>
              <li><Link to="/firewall-security" onClick={closeMenu}>Firewall Security</Link></li>
              <li><Link to="/backup-recovery" onClick={closeMenu}>Backup And Recovery</Link></li>
              <li><Link to="/troubleshooting" onClick={closeMenu}>Troubleshooting</Link></li>
            </ul>

          </li>

          {/* TECHNOLOGIES */}
          <li className="mainLi">
            <Link className="mainA" to="/technologies" onClick={closeMenu}>
              Technologies
            </Link>
          </li>

          {/* CONTACT */}
          <li className="mainLi">
            <Link className="mainA" to="/contact" onClick={closeMenu}>
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