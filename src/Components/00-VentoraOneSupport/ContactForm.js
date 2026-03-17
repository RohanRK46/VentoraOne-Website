import { useState } from "react";
import { Send, Clock, CheckCircle2 } from "lucide-react";
import "./ContactForm.css";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
  
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="glass-card overflow-hidden">
          <div className="grid-layout">
            
            {/* Left panel */}
            <div className="left-panel">
              <div>
                <h2 className="title">
                  Talk to us
                </h2>
                <p className="subtitle">
                  Can't find what you're looking for? Our support team is ready to help you with anything.
                </p>

                <div className="live-support">
                  <div className="relative">
                    <span className="pulse-dot" />
                  </div>
                  <span className="support-text">24/7 Live Support</span>
                </div>

                <div className="response-box">
                  <Clock className="icon" />
                  <div>
                    <p className="response-title">Avg. response time</p>
                    <p className="response-sub">Under 5 minutes</p>
                  </div>
                </div>
              </div>

              <div className="footer">
                <p>
                  Trusted by 10,000+ teams worldwide
                </p>
              </div>
            </div>

            {/* Right panel — Form */}
            <div className="right-panel">
              {submitted ? (
                <div className="success-state">
                  <div className="success-icon">
                    <CheckCircle2 className="success-check" />
                  </div>
                  <h3 className="success-title">Message sent!</h3>
                  <p className="success-text">We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="form">
                  
                  <div className="row">
                    <div>
                      <label className="label">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder="John Doe"
                        className="input"
                      />
                    </div>

                    <div>
                      <label className="label">Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder="john@example.com"
                        className="input"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="label">Subject</label>
                    <select
                      required
                      value={formData.subject}
                      onChange={(e) => handleChange("subject", e.target.value)}
                      className="input"
                    >
                      <option value="">Select a topic</option>
                      <option value="account">Account Access</option>
                      <option value="billing">Billing & Plans</option>
                      <option value="technical">Technical Issue</option>
                      <option value="feature">Feature Request</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="label">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder="Describe your issue or question in detail..."
                      className="textarea"
                    />
                  </div>

                  <button type="submit" className="button">
                    <Send className="btn-icon" />
                    Send Message
                  </button>

                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;