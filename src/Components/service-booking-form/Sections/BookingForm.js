import { useState, useCallback } from "react";
import { RefreshCw, CheckCircle, Clock } from "lucide-react";
import "./BookingForm.css";

const SERVICE_OPTIONS = [
  { value: "network-design", label: "Network Design & Infrastructure Planning " },
  { value: "firewall", label: "Firewall Security & Implementation " },
  { value: "endpoint", label: "Endpoint Security & Threat Protection " },
  { value: "email", label: "Email Security & Phishing Protection " },
  { value: "cloud", label: "Cloud & Hybrid Security " },
  { value: "backup", label: "Backup & Disaster Recovery Solutions " },
  { value: "troubleshooting", label: "Troubleshooting & Optimization " },
  { value: "end-to-end", label: "End-to-End Project Delivery " },
];

const URGENCY_OPTIONS = [
  { value: "low", label: "Low — Within a month" },
  { value: "medium", label: "Medium - Within 2 weeks" },
  { value: "high", label: "High - Within a week" },
  { value: "critical", label: "Critical - ASAP" },
];

const generateCaptcha = () => {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 6; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
};

const BookingForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    urgency: "",
    description: "",
  });
  const [captchaCode, setCaptchaCode] = useState(generateCaptcha());
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaError, setCaptchaError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const refreshCaptcha = useCallback(() => {
    setCaptchaCode(generateCaptcha());
    setCaptchaInput("");
    setCaptchaError("");
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (captchaInput.toUpperCase() !== captchaCode) {
      setCaptchaError("Captcha doesn't match. Please try again.");
      refreshCaptcha();
      setCaptchaInput("");
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="booking-form-section">
        <div className="form-container">
          <div className="success-overlay">
            <div className="success-icon">
              <CheckCircle size={32} />
            </div>
            <h2>Request Submitted!</h2>
            <p>
              Thank you, <strong>{formData.fullName}</strong>. We've received your service
              request and our team will review it promptly.
            </p>
            <div className="response-time">
              <Clock size={16} />
              We'll reach out within 24 hours
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="booking-form-section">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="fullName"
                placeholder="Rohan Yadav"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="yourcompnay@company.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="+1 (555) 123-4567"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Company Name</label>
              <input
                type="text"
                name="company"
                placeholder="Acme Corp"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Service Required</label>
              <select name="service" value={formData.service} onChange={handleChange} required>
                <option value="">Select a service..</option>
                {SERVICE_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Urgency Level</label>
              <select name="urgency" value={formData.urgency} onChange={handleChange} required>
                <option value="">Select urgency..</option>
                {URGENCY_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Describe Your Requirements</label>
            <textarea
              name="description"
              placeholder="Tell us about your project, current setup, or specific concerns..."
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          {/* Captcha */}
          <div className="form-group">
            <label>Security Verification</label>
            <div className="captcha-box">
              <span className="captcha-code">{captchaCode}</span>
              <input
                className="captcha-input"
                type="text"
                placeholder="Enter code"
                value={captchaInput}
                onChange={(e) => {
                  setCaptchaInput(e.target.value);
                  setCaptchaError("");
                }}
                required
              />
              <button type="button" className="captcha-refresh" onClick={refreshCaptcha} title="New code">
                <RefreshCw size={18} />
              </button>
            </div>
            {captchaError && <div className="captcha-error">{captchaError}</div>}
          </div>

          <button type="submit" className="submit-btn">
            Submit Service Request
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
