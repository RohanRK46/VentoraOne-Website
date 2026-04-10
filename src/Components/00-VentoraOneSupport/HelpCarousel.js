import { useCallback, useEffect, useState } from "react";
import {
  Shield,
  CreditCard,
  Code2,
  Settings,
  Users,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import "./HelpCarousel.css";

const categories = [
  { icon: Shield, title: "Account Access", desc: "Login, passwords & security"},
  { icon: CreditCard, title: "Billing & Plans", desc: "Invoices, upgrades & payments"},
  { icon: Code2, title: "Technical API", desc: "Integration & developer docs"},
  { icon: Settings, title: "Configuration", desc: "Settings & customization"},
  { icon: Users, title: "Team Management", desc: "Roles, permissions & invites"},
  { icon: HelpCircle, title: "General FAQ", desc: "Common questions answered"},
];

const HelpCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(3);

  // ✅ FIXED: responsive properly
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, categories.length - itemsPerView);

  const next = useCallback(() => {
    setCurrentIndex((i) => (i >= maxIndex ? 0 : i + 1));
  }, [maxIndex]);

  const prev = () => setCurrentIndex((i) => (i <= 0 ? maxIndex : i - 1));

  // ✅ FIXED: safer interval
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (!document.hidden) next();
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused, next]);

  return (
    <section className="carousel-section">
      <div className="carousel-container">
        
        <div className="carousel-header">
          <h2 className="carousel-title">Browse by Category</h2>

          <div className="nav-buttons">
            <button onClick={prev} className="nav-btn">
              <ChevronLeft className="nav-icon" />
            </button>

            <button onClick={next} className="nav-btn">
              <ChevronRight className="nav-icon" />
            </button>
          </div>
        </div>

        <div
          className="carousel-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
          >
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.title}
                  className="carousel-item"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="card">
                    <div className="icon-box">
                      <Icon className="card-icon" />
                    </div>

                    <h3 className="card-title">{cat.title}</h3>
                    <p className="card-desc">{cat.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="dots">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`dot ${i === currentIndex ? "active" : ""}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default HelpCarousel;