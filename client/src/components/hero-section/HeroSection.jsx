// client/src/components/hero-section/HeroSection.jsx
import React from 'react'
import './HeroSection.css'
import SignatureJW from './SignatureJW'
import LoadingBars from './LoadingBars'

const HeroSection = () => {
  return (
    <section className="hero-section" aria-labelledby="hero-section__heading">
      <span className="hero-section__subtitle">Graduate Developer</span>
      <h1 className="hero-section__title" id="hero-section__heading">
        Jamie Wilson
      </h1>
      <p className="hero-section__description">
        Turning caffeine into code <br />
        and ideas into interactive experiences.
      </p>
      <LoadingBars />
      <SignatureJW />
    </section>
  )
}

export default HeroSection
