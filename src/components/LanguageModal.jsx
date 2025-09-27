import React from "react";

export default function LanguageModal({open, onClose, value, onChange}) {
  if (!open) return null;
  return (
    <div>
      <div className="lm-overlay" onClick={onClose} />
      <div className="lm-sheet" role="dialog" aria-modal="true">
        <div className="lm-handle" />
        <ul className="lm-list">
          <li className="lm-item" onClick={() => onChange("en")}>
            <div className="lm-left">
              <img src="https://flagcdn.com/w40/us.png" alt="US" />
              <span>English</span>
            </div>
            <div className="lm-right">{value === "en" ? "●" : "○"}</div>
          </li>
          <li className="lm-item" onClick={() => onChange("hi")}>
            <div className="lm-left">
              <img src="https://flagcdn.com/w40/in.png" alt="IN" />
              <span>हिन्दी</span>
            </div>
            <div className="lm-right">{value === "hi" ? "●" : "○"}</div>
          </li>
        </ul>
      </div>
    </div>
  );
}
