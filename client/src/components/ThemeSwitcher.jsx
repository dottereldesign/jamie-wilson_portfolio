// client/src/components/ThemeSwitcher.jsx
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './ThemeSwitcher.css'

const ThemeSwitcher = ({ onToggleTheme }) => {
  const [isNightTheme, setIsNightTheme] = useState(false)

  const handleClick = () => {
    setIsNightTheme((prevTheme) => !prevTheme)
    onToggleTheme()
  }

  return (
    <button
      className={`theme-switcher-grid ${isNightTheme ? 'night-theme' : ''}`}
      id="theme-switcher-grid"
      aria-label="Switch theme"
      onClick={handleClick}
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
  )
}

ThemeSwitcher.propTypes = {
  onToggleTheme: PropTypes.func.isRequired
}

export default ThemeSwitcher
