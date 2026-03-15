"use client";

import { useEffect, useState } from "react";

export function MotionToggle() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("motion-lite");
    const nextValue = stored === "true";
    setEnabled(nextValue);
    document.documentElement.dataset.motion = nextValue ? "reduced" : "full";
  }, []);

  const toggle = () => {
    const nextValue = !enabled;
    setEnabled(nextValue);
    window.localStorage.setItem("motion-lite", String(nextValue));
    document.documentElement.dataset.motion = nextValue ? "reduced" : "full";
    window.dispatchEvent(new Event("motion-lite-change"));
  };

  return (
    <button
      type="button"
      className="motion-toggle"
      onClick={toggle}
      aria-pressed={enabled}
      data-cursor="interactive"
    >
      <span className="motion-toggle__label">Motion lite</span>
      <span className={`motion-toggle__track ${enabled ? "is-active" : ""}`}>
        <span className="motion-toggle__thumb" />
      </span>
    </button>
  );
}
