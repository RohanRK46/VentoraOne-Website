import React from 'react';
import styles from './Supportsectionts.module.css';

const features = [
  {
    icon: '🔍',
    severity: 'Critical',
    severityClass: styles.severityHigh,
    title: 'Root Cause Analysis',
    desc: 'Deep-dive diagnostics that trace incidents to their origin — eliminating guesswork with automated log correlation and dependency mapping.',
  },
  {
    icon: '⚠️',
    severity: 'Critical',
    severityClass: styles.severityHigh,
    title: 'Real-Time Alerting',
    desc: 'Instant notifications via Slack, PagerDuty, or email the moment anomalies are detected, with intelligent noise suppression to prevent alert fatigue.',
  },
  {
    icon: '🗺️',
    severity: 'Moderate',
    severityClass: styles.severityMedium,
    title: 'Distributed Tracing',
    desc: 'End-to-end request tracing across microservices and cloud boundaries — pinpoint latency bottlenecks and failed dependencies in seconds.',
  },
  {
    icon: '📋',
    severity: 'Moderate',
    severityClass: styles.severityMedium,
    title: 'Runbook Automation',
    desc: 'Auto-triggered remediation playbooks that execute standard fixes without human intervention, reducing mean time to resolution dramatically.',
  },
  {
    icon: '🧠',
    severity: 'Advisory',
    severityClass: styles.severityLow,
    title: 'AI-Powered Insights',
    desc: 'Machine-learning models surface recurring failure patterns and predict future incidents before they impact end users.',
  },
  {
    icon: '📁',
    severity: 'Advisory',
    severityClass: styles.severityLow,
    title: 'Incident Knowledge Base',
    desc: 'Every resolved incident is catalogued with root cause, fix, and prevention notes — building an institutional memory that speeds future triage.',
  },
];

const timeline = [
  {
    step: 'Step 01',
    title: 'Detect & Triage',
    desc: 'Automated monitors detect anomalies and immediately classify incidents by severity, routing them to the right on-call team.',
  },
  {
    step: 'Step 02',
    title: 'Diagnose',
    desc: 'Correlated logs, traces, and metrics are surfaced in a unified view — reducing diagnosis time from hours to minutes.',
  },
  {
    step: 'Step 03',
    title: 'Remediate',
    desc: 'Apply manual fixes or trigger automated runbooks. Every action is logged with timestamps for full audit trails.',
  },
  {
    step: 'Step 04',
    title: 'Post-Mortem & Prevention',
    desc: 'Structured post-incident reviews capture lessons learned and drive permanent fixes to prevent recurrence.',
  },
];

function SupportSectionTS() {
  return (
    <div className={styles.page}>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.scanline} />
        <h1 className={styles.heroTitle}>
          Trouble<span className={styles.heroTitleAccent}>shooting</span>
        </h1>
        <p className={styles.heroSubtitle}>
          Rapid incident detection, intelligent root cause analysis, and
          automated remediation — resolving issues before they become outages.
        </p>
      </section>

      {/* Stats */}
      <div className={styles.statsBar}>
        {[
          { value: '<2',  unit: 'min', label: 'Mean Detection Time' },
          { value: '90',  unit: '%',   label: 'Auto-Remediated' },
          { value: '5x',  unit: '',    label: 'Faster Resolution' },
          { value: '24/7',unit: '',    label: 'Active Monitoring' },
        ].map((s, i) => (
          <div className={styles.statCard} key={i}>
            <div className={styles.statValue}>
              {s.value}
              {s.unit && <span className={styles.statUnit}>{s.unit}</span>}
            </div>
            <div className={styles.statLabel}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Features */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Core Capabilities</h2>
          <p className={styles.sectionSubtitle}>
            Everything you need to detect, diagnose, and resolve infrastructure
            and application issues at any scale.
          </p>
        </div>
        <div className={styles.featuresGrid}>
          {features.map((f, i) => (
            <div className={styles.featureCard} key={i}>
              <div className={styles.featureIcon}>{f.icon}</div>
              <span className={`${styles.severity} ${f.severityClass}`}>
                {f.severity}
              </span>
              <h3 className={styles.featureTitle}>{f.title}</h3>
              <p className={styles.featureDesc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>How It Works</h2>
          <p className={styles.sectionSubtitle}>
            A structured incident lifecycle from first alert to permanent fix.
          </p>
        </div>
        <div className={styles.timeline}>
          {timeline.map((t, i) => (
            <div className={styles.timelineItem} key={i}>
              <div className={styles.timelineDot} />
              <div className={styles.timelineStep}>{t.step}</div>
              <h3 className={styles.timelineTitle}>{t.title}</h3>
              <p className={styles.timelineDesc}>{t.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default SupportSectionTS;