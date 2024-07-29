import React from 'react'
import PropTypes from 'prop-types'
import './MenuButton.css'

const MenuButton = ({ modelClass, isOpen, initialRender }) => (
  <div
    className={`menu ${modelClass} ${isOpen ? 'open' : 'closed'} ${initialRender ? 'no-animation' : ''}`}
  >
    <div className="bar"></div>
    <div className="bar"></div>
    <div className="bar"></div>
  </div>
)

MenuButton.propTypes = {
  modelClass: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  initialRender: PropTypes.bool.isRequired
}

export default MenuButton
