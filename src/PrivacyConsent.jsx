
import { useEffect, useState } from "react";
import "./PrivacyConsent.css";

const STORAGE_KEY = "polivexa-privacy-notice-accepted";

export default function PrivacyConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const accepted = localStorage.getItem(STORAGE_KEY);
      setVisible(accepted !== "true");
    } catch {
      // Agar browser storage unavailable ho,
      // toh notice phir bhi show karein.
      setVisible(true);
    }
  }, []);

  function handleAccept() {
    try {
      localStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // Storage unavailable ho toh bhi popup close karein.
    }

    setVisible(false);
  }

  if (!visible) return null;

  return (
    <aside
      className="privacy-notice"
      role="dialog"
      aria-labelledby="privacy-notice-title"
      aria-describedby="privacy-notice-description"
    >
      <div className="privacy-notice__content">
        <div className="privacy-notice__icon" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            width="25"
            height="25"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
          >
            <path d="M12 3 19 6v5c0 4.5-3 7.5-7 10-4-2.5-7-5.5-7-10V6l7-3Z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        </div>

        <div className="privacy-notice__text">
          <h2 id="privacy-notice-title">
            Your privacy comes first.
          </h2>

          <p id="privacy-notice-description">
            We use only essential cookies required for
            this website to function. We do not use
            cookies for tracking or behavioural advertising.
          </p>

          <p className="privacy-notice__small">
            By clicking OK, you acknowledge this notice.
          </p>
        </div>
      </div>

      <button
        className="privacy-notice__button"
        type="button"
        onClick={handleAccept}
        autoFocus
      >
        OK
      </button>
    </aside>
  );
}
