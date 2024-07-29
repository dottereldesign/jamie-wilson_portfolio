// client/src/components/Navigation.jsx
import React from 'react'
import ThemeSwitcher from './ThemeSwitcher'
import PropTypes from 'prop-types'
import './Navigation.css'

const Navigation = ({ onToggleTheme, isNightTheme }) => {
  return (
    <nav className="navigation">
      <div className="nav-left">
        <div className="logo">JW</div>
        <div className="accent-text">
          Jamie<br></br>Wilson
        </div>
      </div>
      <ThemeSwitcher
        onToggleTheme={onToggleTheme}
        isNightTheme={isNightTheme}
      />
    </nav>
  )
}

Navigation.propTypes = {
  onToggleTheme: PropTypes.func.isRequired,
  isNightTheme: PropTypes.bool.isRequired
}

export default Navigation
