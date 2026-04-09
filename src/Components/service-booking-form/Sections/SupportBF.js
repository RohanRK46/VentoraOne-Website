import { useEffect, useRef } from "react";
import "./SupportBF.css";

export default function SupportBF() {
  const sectionRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const els = [
      sectionRef.current?.querySelector(".support-headline"),
      sectionRef.current?.querySelector(".support-sub"),
      contactRef.current,
    ];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("s-visible");
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="support-root" ref={sectionRef}>
      <div className="support-strip" ref={contactRef}>
        <div className="support-card s-anim" style={{ "--d": "0s" }}>
          <div className="support-card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.15 1.23 2 2 0 012.11 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/>
            </svg>
          </div>
          <div className="support-card-body">
            <span className="support-card-label">Phone</span>
            <a href="tel:+919274819212" className="support-card-value">+91 9274819212</a>
          </div>
        </div>

        <div className="support-strip-divider" />

        <div className="support-card s-anim" style={{ "--d": "0.1s" }}>
          <div className="support-card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="M22 7l-10 7L2 7"/>
            </svg>
          </div>
          <div className="support-card-body">
            <span className="support-card-label">Email</span>
            <a href="mailto:support@ventoraone.com" className="support-card-value">support@ventoraone.com</a>
          </div>
        </div>

        <div className="support-strip-divider" />

        <div className="support-card s-anim" style={{ "--d": "0.2s" }}>
          <div className="support-card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
          <div className="support-card-body">
            <span className="support-card-label">Address</span>
            <span className="support-card-value">F1, Ankur Sarabhai Society, Gotri Road, Vadodara Gujarat 390021</span>
          </div>
        </div>
      </div>
    </section>
  );
}