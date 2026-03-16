import React from "react";
import "./Testimony.css";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechVista",
    content:
      "Their web development team transformed our outdated site into a modern, high-performing platform. Revenue increased 40% within three months.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "CTO, SecureNet",
    content:
      "The cyber security audit uncovered critical vulnerabilities we had missed for years. Their team's expertise is unmatched in the industry.",
    rating: 4,
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, GrowthCo",
    content:
      "Our digital marketing campaigns finally deliver real ROI. The data-driven approach made all the difference for our brand visibility.",
    rating: 5,
  },
];

const Testimony = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">

        <div className="testimonials-header">
          <p className="testimonials-tag">Testimonials</p>
          <h2 className="testimonials-title">What Our Clients Say</h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div key={t.name} className="testimonial-card">

              <div className="testimonial-stars">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="star-icon" />
                ))}
              </div>

              <p className="testimonial-content">
                "{t.content}"
              </p>

              <div className="testimonial-user">
                <p className="testimonial-name">{t.name}</p>
                <br />
                <p className="testimonial-role">{t.role}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimony;