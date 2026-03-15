import React, { useState } from "react";
import "./ServiceBookingForm.css";
import FloatingInput from "./FloatingInput.js";

const SERVICES = [
  { value: "network", label: "Network Design" },
  { value: "firewall", label: "Firewall Security" },
  { value: "endpoint", label: "Endpoint Protection" },
  { value: "cloud", label: "Cloud & Hybrid Security" },
  { value: "backup", label: "Backup & Recovery" },
  { value: "trouble", label: "Troubleshooting" }
];

function generateCaptcha() {
  const a = Math.floor(Math.random() * 9) + 1;
  const b = Math.floor(Math.random() * 9) + 1;

  return {
    question: `${a} + ${b}`,
    answer: String(a + b)
  };
}

export default function ServiceBookingForm() {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    captchaAnswer: ""
  });

  const [errors, setErrors] = useState({});
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) => {

    setForm({
      ...form,
      [field]: e.target.value
    });

    setErrors({
      ...errors,
      [field]: undefined
    });
  };

  const validate = () => {

    const errs = {};

    if (!form.name.trim()) {
      errs.name = "Full name required";
    }

    if (!form.phone.trim()) {
      errs.phone = "Phone required";
    } else if (!/^\+?[\d\s\-()]{7,15}$/.test(form.phone)) {
      errs.phone = "Invalid phone number";
    }

    if (!form.email.trim()) {
      errs.email = "Email required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Invalid email";
    }

    if (!form.service) {
      errs.service = "Select a service";
    }

    if (form.captchaAnswer !== captcha.answer) {
      errs.captchaAnswer = "Incorrect answer";
    }

    return errs;
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    const errs = validate();

    if (Object.keys(errs).length > 0) {

      setErrors(errs);
      setCaptcha(generateCaptcha());

      return;
    }

    setSubmitted(true);
  };

  const resetForm = () => {

    setForm({
      name: "",
      phone: "",
      email: "",
      service: "",
      captchaAnswer: ""
    });

    setErrors({});
    setCaptcha(generateCaptcha());
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="success-box">

        <div className="check-circle">✓</div>

        <h2>Booking Confirmed</h2>

        <p>
          Thank you <b>{form.name}</b>.  
          Your request for{" "}
          <b>{SERVICES.find((s) => s.value === form.service)?.label}</b> has been received.
        </p>

        <button onClick={resetForm}>
          Book Another Service
        </button>

      </div>
    );
  }

  return (

    <div className="booking-container">

      <h1>Book a Service</h1>

      <form onSubmit={handleSubmit}>

        <FloatingInput
          label="Full Name"
          value={form.name}
          onChange={handleChange("name")}
          error={errors.name}
        />

        <FloatingInput
          label="Phone Number"
          value={form.phone}
          onChange={handleChange("phone")}
          error={errors.phone}
        />

        <FloatingInput
          label="Email Address"
          value={form.email}
          onChange={handleChange("email")}
          error={errors.email}
        />

        <div className="select-field">

          <label>Service</label>

          <select
            value={form.service}
            onChange={handleChange("service")}
          >

            <option value="">Select Service</option>

            {SERVICES.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}

          </select>

          {errors.service && (
            <span className="error">{errors.service}</span>
          )}

        </div>

        <div className="captcha">

          <div className="captcha-question">
            {captcha.question} = ?
          </div>

          <FloatingInput
            label="Your Answer"
            value={form.captchaAnswer}
            onChange={handleChange("captchaAnswer")}
            error={errors.captchaAnswer}
          />

          <button
            type="button"
            className="refresh"
            onClick={() => setCaptcha(generateCaptcha())}
          >
            Refresh
          </button>

        </div>

        <button className="submit-btn">
          Book Service
        </button>

      </form>

    </div>
  );
}