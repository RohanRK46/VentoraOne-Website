import React from "react";
import "./FloatingInput.css";

export default function FloatingInput({ label, value, onChange, error }) {
  return (
    <div className="floating-input">

      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder=" "
      />

      <label>{label}</label>

      {error && <span className="error">{error}</span>}

    </div>
  );
}