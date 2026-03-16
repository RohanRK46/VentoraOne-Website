import PerformanceBar from "./PerformanceBar";
import "./PerformanceSection.css";

const metrics = [
  { value: 28, label: "Latency Reduction", subtitle: "Avg response time decreased" },
  { value: 80, label: "Throughput Increase", subtitle: "Requests handled per second" },
  { value: 30, label: "Uptime Improvement", subtitle: "Infrastructure reliability" },
];

function PerformanceSection() {
  return (
    <section className="performance-section">

      <div className="performance-container">

        <div className="performance-header">
          <span className="performance-tag">
            Infrastructure
          </span>

          <h2 className="performance-title">
            Built for Scale
          </h2>

          <p className="performance-description">
            Our infrastructure upgrades delivered measurable performance gains
            across every critical metric.
          </p>
        </div>

        <div className="performance-grid">
          {metrics.map((m) => (
            <PerformanceBar key={m.label} {...m} />
          ))}
        </div>

      </div>

    </section>
  );
}

export default PerformanceSection;