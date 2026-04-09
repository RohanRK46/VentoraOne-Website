import { useState, useCallback, useRef, useEffect } from "react";
import { RefreshCw, CheckCircle, Clock, ChevronDown } from "lucide-react";
import "./BookingForm.css";

const SERVICE_OPTIONS = [
  { value: "network-design", label: "Network Design & Infrastructure Planning" },
  { value: "cloud", label: "Cloud & Hybrid Security" },
  { value: "firewall", label: "Firewall Security & Implementation" },
  { value: "endpoint", label: "Endpoint Security & Threat Protection" },
  { value: "backup", label: "Backup & Disaster Recovery Solutions" },
  { value: "enterprise", label: "Enterprise Security" },
  { value: "troubleshooting", label: "Troubleshooting & Optimization" },
  { value: "system-integration", label: "IT System Integration" },
  { value: "bid-tender", label: "Tender & Bid Advisory" },
  { value: "software", label: "SaaS and Custom Software" },
  { value: "digital-transformation", label: "Digital Transformation" },
  { value: "vender-mgmt", label: "Project & Vendor Management" },
];

const URGENCY_OPTIONS = [
  { value: "low", label: "Low Within a month" },
  { value: "medium", label: "Medium Within 2 weeks" },
  { value: "high", label: "High Within a week" },
  { value: "critical", label: "Critical ASAP" },
];

const generateCaptcha = () => {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 6; i++) code += chars[Math.floor(Math.random() * chars.length)];
  return code;
};

/* ── Custom Dropdown ── */
const CustomSelect = ({ name, value, onChange, options, placeholder }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const selected = options.find((o) => o.value === value);

  const handleSelect = (val) => {
    onChange({ target: { name, value: val } });
    setOpen(false);
  };

  return (
    <div className="custom-select-wrapper" ref={ref}>
      <button
        type="button"
        className={`custom-select-trigger ${open ? "open" : ""} ${!value ? "placeholder" : ""}`}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span>{selected ? selected.label : placeholder}</span>
        <ChevronDown size={16} className={`select-chevron ${open ? "rotated" : ""}`} />
      </button>

      {open && (
        <ul className="custom-select-menu">
          {options.map((opt) => (
            <li
              key={opt.value}
              className={`custom-select-option ${value === opt.value ? "selected" : ""}`}
              onMouseDown={() => handleSelect(opt.value)}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

/* ── Main Component ── */
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (captchaInput.toUpperCase() !== captchaCode) {
      setCaptchaError("Captcha doesn't match. Please try again.");
      refreshCaptcha();
      setCaptchaInput("");
      return;
    }

    try {
      const res = await fetch("https://ventoraone-server-production.up.railway.app/api/booking", { // ✅ CHANGED
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Server error");
      setSubmitted(true);
    } catch (err) {
      console.error("Booking submit error:", err);
      setCaptchaError("Something went wrong. Please try again.");
    }
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
                placeholder="Rohan"
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
                placeholder="yourcompany@company.com"
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
              <CustomSelect
                name="service"
                value={formData.service}
                onChange={handleChange}
                options={SERVICE_OPTIONS}
                placeholder="Select a service.."
              />
            </div>
            <div className="form-group">
              <label>Urgency Level</label>
              <CustomSelect
                name="urgency"
                value={formData.urgency}
                onChange={handleChange}
                options={URGENCY_OPTIONS}
                placeholder="Select urgency.."
              />
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