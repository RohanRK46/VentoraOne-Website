import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import "./PerformanceBar.css";

function PerformanceBar({ value, label, subtitle }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  const size = 200;
  const strokeWidth = 18;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const orangeRatio = value / 100;
  const navyRatio = 1 - orangeRatio;

  useEffect(() => {
    if (!isInView) return;

    const duration = 800;
    const startTime = performance.now();

    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.round(eased * value));

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  const orangeOffset = circumference * (1 - orangeRatio);
  const navyDashArray = `${circumference * navyRatio} ${circumference * (1 - navyRatio)}`;
  const navyDashOffset = -circumference * orangeRatio;

  return (
    <div ref={ref} className="performance-bar">
      
      <div
        className="gauge-wrapper"
        style={{ width: size, height: size }}
      >
        <svg width={size} height={size} className="gauge-svg">

          {/* Navy Part */}
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            className="gauge-navy"
            strokeWidth={strokeWidth}
            strokeDasharray={isInView ? navyDashArray : `0 ${circumference}`}
            strokeDashoffset={navyDashOffset}
            strokeLinecap="butt"
            initial={false}
            animate={isInView ? { strokeDasharray: navyDashArray } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />

          {/* Orange Part */}
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            className="gauge-orange"
            strokeWidth={strokeWidth}
            strokeDasharray={`${circumference * orangeRatio} ${circumference * (1 - orangeRatio)}`}
            strokeLinecap="butt"
            initial={{ strokeDashoffset: circumference }}
            animate={isInView ? { strokeDashoffset: orangeOffset } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </svg>

        <div className="gauge-center">
          <span className="gauge-value">{count}%</span>
        </div>
      </div>

      <div className="gauge-text">
        <p className="gauge-label">{label}</p>
        <p className="gauge-subtitle">{subtitle}</p>
      </div>

    </div>
  );
}

export default PerformanceBar;