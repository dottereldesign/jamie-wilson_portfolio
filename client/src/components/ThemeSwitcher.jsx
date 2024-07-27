// client/src/components/ThemeSwitcher.jsx
import React, { useEffect } from "react";
import "./ThemeSwitcher.css";

const ThemeSwitcher = () => {
  const toggleTheme = () => {
    const themeSwitcher = document.getElementById("theme-switcher-grid");
    themeSwitcher.classList.toggle("night-theme");
    document.body.style.backgroundColor = themeSwitcher.classList.contains(
      "night-theme"
    )
      ? "var(--bg-color-dark)"
      : "var(--bg-color-light)";
  };

  useEffect(() => {
    const themeSwitcher = document.getElementById("theme-switcher-grid");
    themeSwitcher.addEventListener("click", toggleTheme);
    return () => themeSwitcher.removeEventListener("click", toggleTheme);
  }, []);

  return (
    <button
      className="theme-switcher-grid"
      id="theme-switcher-grid"
      aria-label="Switch theme"
    >
      <div className="sun" id="sun" aria-hidden="true"></div>
      <div className="moon-overlay" id="moon-overlay" aria-hidden="true"></div>
      <div
        className="cloud-ball cloud-ball-left"
        id="ball1"
        aria-hidden="true"
      ></div>
      <div
        className="cloud-ball cloud-ball-middle"
        id="ball2"
        aria-hidden="true"
      ></div>
      <div
        className="cloud-ball cloud-ball-right"
        id="ball3"
        aria-hidden="true"
      ></div>
      <div
        className="cloud-ball cloud-ball-top"
        id="ball4"
        aria-hidden="true"
      ></div>
      <div className="star" id="star1" aria-hidden="true"></div>
      <div className="star" id="star2" aria-hidden="true"></div>
      <div className="star" id="star3" aria-hidden="true"></div>
      <div className="star" id="star4" aria-hidden="true"></div>
    </button>
  );
};

export default ThemeSwitcher;
