// client/src/components/hero-section/HeroSection.jsx
import React from 'react'
import './HeroSection.css'

const HeroSection = () => {
  return (
    <section className="hero-section" aria-labelledby="hero-section__heading">
      <span className="hero-section__subtitle">Graduate Developer</span>
      <h1 className="hero-section__title" id="hero-section__heading">
        Jamie Wilson
      </h1>
    </section>
  )
}

export default HeroSection
