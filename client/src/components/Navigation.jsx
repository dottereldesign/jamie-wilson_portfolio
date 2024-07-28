// client/src/components/Navigation.jsx
import React from 'react'
import ThemeSwitcher from './ThemeSwitcher'
import PropTypes from 'prop-types'
import './Navigation.css'

const Navigation = ({ onToggleTheme }) => {
  return (
    <nav>
      <ThemeSwitcher onToggleTheme={onToggleTheme} />
    </nav>
  )
}

Navigation.propTypes = {
  onToggleTheme: PropTypes.func.isRequired
}

export default Navigation
