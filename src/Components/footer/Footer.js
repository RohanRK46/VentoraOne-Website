import React from "react";
import { Linkedin } from "lucide-react";
import footerBg from "./images/footer.png";   // adjust path if needed
import logo from "./images/logo.png"
import "./Footer.css";
import {Link} from "react-router-dom"

function Footer() {
  return (
    <footer
      className="footer"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      <div className="footer-content">

        {/* Top Section */}
        <div className="footer-top">
          <div className="footer-logo">
          <img src={logo} alt="companylogo"/>
          </div>

          <div className="footer-social">
            <Link to="/" className="social-li" aria-label="LinkedIn">
              <Linkedin size={22} color="#fff" />
            </Link>
          </div>
        </div>

        {/* Middle Columns */}
        <div className="footer-columns">

          <div className="footer-column">
            <h3>About Us</h3>
            <ul>
              <li><Link to="/">About us</Link></li>
              <li><Link to="/">Careers</Link></li>
              <li><Link to="/">Blog</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Address</h3>
            <p>
              Sunmilan Complex flat number 403 bla bla bla bla
            </p>
          </div>

          <div className="footer-column">
            <h3>Contact Us</h3>
            <p>8128183840</p>
            <p>blablabla@gmail.com</p>

            <Link to="/" className="footer-contact-btn">
              Contact Us
            </Link>
          </div>

        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          © 2026 VentoraOne | All Rights Reserved |
          <Link to="/"> Privacy Policy </Link> |
          <Link to="/"> Terms of Services</Link>
        </div>

      </div>
    </footer>
  );
}

export default Footer;