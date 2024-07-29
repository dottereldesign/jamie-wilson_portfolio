// client/src/components/NavLinks.jsx
import React from 'react'
import PropTypes from 'prop-types'

const NavLinks = ({ className, onClick }) => (
  <div className={className}>
    <a href="#home" onClick={onClick}>
      Home
    </a>
    <a href="#projects" onClick={onClick}>
      Projects
    </a>
    <a href="#cv" onClick={onClick}>
      CV
    </a>
    <a href="#my-story" onClick={onClick}>
      My Story
    </a>
  </div>
)

NavLinks.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func
}

NavLinks.defaultProps = {
  className: '',
  onClick: () => {}
}

export default NavLinks