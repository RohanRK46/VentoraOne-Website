import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import Logo from "./images/logo.png";
import Fb from "./images/facebook.png";
import Insta from "./images/instagram.png";
import LinkedIn from "./images/linkedIn.png";

export default function Footer(props) {
  return (
    <div className="footer">

      <div className="logo">
        <img src={Logo} alt="company logo" loading="lazy" />
      </div>

      <div className="socials">
        <div className="fb box">
          <Link to="/">
            <img src={Fb} alt="facebook" loading="lazy" />
          </Link>
        </div>

        <div className="insta box">
          <Link to="/">
            <img src={Insta} alt="instagram" loading="lazy" />
          </Link>
        </div>

        <div className="linkedIn box">
          <Link to="/">
            <img src={LinkedIn} alt="linkedin" loading="lazy" />
          </Link>
        </div>
      </div>

      <div className="container">

        <div className="AboutUs">
          <span>About Us</span>
          <hr className="headingUnder" />

          <div className="aboutUsFooter">
            <Link className="sublink" to="/About Us">About us</Link>
            <Link className="sublink" to="/Careers">Careers</Link>
            <Link className="sublink" to="/Blog">Blog</Link>
          </div>
        </div>

        <div className="address">
          <span>Address</span>
          <hr className="headingUnder" />

          <div className="addressDetail">
            <span>{props.Address}</span>
          </div>
        </div>

        <div className="ContactUs">
          <span>Contact Us</span>
          <hr className="headingUnder" />

          <div className="contactUsDetail">
            <span>{props.ContactNo}</span>
            <span>{props.Email}</span>
            <button className="ContactUsBtn">
              <Link to="/">Contact Us</Link>
            </button>
          </div>
        </div>

      </div>

      <div className="rights">
        <span>© 2026 VentoraOne | All Rights Reserved. |</span>

        <div className="PP">
          <Link className="rightsa">Privacy Policy |</Link>
        </div>

        <div className="tc">
          <Link className="rightsa">Terms of Services</Link>
        </div>
      </div>

    </div>
  );
}