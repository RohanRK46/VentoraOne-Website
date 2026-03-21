import { motion } from "framer-motion";
import { Database, Shield, Server, Lock } from "lucide-react";
import "./BackupRecovery.css";
import heroImage from "./images/Cloud.png";
import { Link } from "react-router-dom";

const features = [
  { icon: Database, title: "Backup Strategy", desc: "Design reliable backup architectures." },
  { icon: Server, title: "Snapshot Backups", desc: "Implement image-based and snapshot backups." },
  { icon: Shield, title: "Data Protection", desc: "Ensure data safety with secure storage." },
  { icon: Lock, title: "Recovery Testing", desc: "Validate backup integrity with restore testing." },
];

export default function BackupRecovery() {
  return (
    <section className="backup">
      <div className="backup-container">
        <div className="backup-state">

          <motion.div className="backup-left">
            <h2>Backup & <span>Recovery</span></h2>

            <div className="backup-grid">
              {features.map((f,i)=>(
                <div className="backup-card" key={i}>
                  <f.icon/>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>

            <Link to="/ServiceBookingForm">
              <button className="backup-btn">Book</button>
            </Link>
          </motion.div>

          <div className="backup-right">
            <img src={heroImage}/>
          </div>

        </div>
      </div>
    </section>
  );
}