import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import ThemeSwitcher from './ThemeSwitcher'
import NavLinks from './NavLinks'
import MenuButton from './MenuButton'
import './Navigation.css'

const Navigation = ({ onToggleTheme, isNightTheme }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }

  const handleDropdownContentClick = () => {
    setDropdownOpen(false)
  }

  const handleLinkClick = (event) => {
    event.stopPropagation()
  }

  return (
    <nav className="navigation">
      <div className="nav-left">
        <a href="/" className="logo">
          JW
        </a>
        <a href="/" className="accent-text">
          Jamie
          <br />
          Wilson
        </a>
      </div>
      <NavLinks className="nav-links" />
      <div className="nav-right">
        <ThemeSwitcher
          onToggleTheme={onToggleTheme}
          isNightTheme={isNightTheme}
        />
        <div className="nav-links-dropdown" ref={dropdownRef}>
          <button
            className="dropbtn"
            onClick={toggleDropdown}
            aria-haspopup="true"
            aria-controls="navigation-menu"
            aria-expanded={dropdownOpen}
            aria-label="Toggle navigation menu"
          >
            <MenuButton modelClass="model-1" isOpen={dropdownOpen} />
          </button>
          {dropdownOpen && (
            <div
              className="nav-links-dropdown-content"
              onClick={handleDropdownContentClick}
              id="navigation-menu"
            >
              <NavLinks onClick={handleLinkClick} />
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

Navigation.propTypes = {
  onToggleTheme: PropTypes.func.isRequired,
  isNightTheme: PropTypes.bool.isRequired
}

export default Navigation
