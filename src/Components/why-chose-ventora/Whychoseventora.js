import React from "react";
import "./Whychoseventora.css";

export default function InfiniteFlow() {
  return (
    <div className="section">
      <div className="ourProcess">
        <p>Our Process</p>
        <hr />
      </div>

      {/* Top Images */}
      <div className="image-row">
        <img src="/img1.jpg" alt="1" />
        <img src="/img2.jpg" alt="2" />
        <img src="/img3.jpg" alt="3" />
        <img src="/img4.jpg" alt="4" />
        <img src="/img5.jpg" alt="5" />
      </div>

      <div className="whychoseventora">
        <p>Why Chose Ventora?</p>
        <hr />
      </div>

      {/* Moving Squares */}
      <div className="square-wrapper">

        {/* Connection Line */}
        <div className="connection-line">
          <div className="moving-dot"></div>
        </div>

        <div className="square-track">

          {/* ORIGINAL 5 */}
          <div className="square square1">
            <p className="Heading">Hands-On Expertise</p>
            <p className="content">
              Real-world experience in designing and deploying secure, scalable systems.
            </p>
          </div>

          <div className="square square2">
            <p className="Heading">Vendor Neutral Approach</p>
            <p className="content">
              Solutions built around your needs not tied to any single vendor.
            </p>
          </div>

          <div className="square square3">
            <p className="Heading">Performance & Security</p>
            <p className="content">
              Optimized for speed, stability, and strong threat protection.
            </p>
          </div>

          <div className="square square4">
            <p className="Heading">Scalable Architecture</p>
            <p className="content">
              Designed to grow seamlessly with your business.
            </p>
          </div>

          <div className="square square5">
            <p className="Heading">Clear Documentation</p>
            <p className="content">
              Structured documentation for smooth management and handover.
            </p>
          </div>

          {/* DUPLICATE FOR SEAMLESS LOOP */}
          <div className="square square1">
            <p className="Heading">Hands-On Expertise</p>
            <p className="content">
              Real-world experience in designing and deploying secure, scalable systems.
            </p>
          </div>

          <div className="square square2">
            <p className="Heading">Vendor Neutral Approach</p>
            <p className="content">
              Solutions built around your needs not tied to any single vendor.
            </p>
          </div>

          <div className="square square3">
            <p className="Heading">Performance & Security</p>
            <p className="content">
              Optimized for speed, stability, and strong threat protection.
            </p>
          </div>

          <div className="square square4">
            <p className="Heading">Scalable Architecture</p>
            <p className="content">
              Designed to grow seamlessly with your business.
            </p>
          </div>

          <div className="square square5">
            <p className="Heading">Clear Documentation</p>
            <p className="content">
              Structured documentation for smooth management and handover.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}