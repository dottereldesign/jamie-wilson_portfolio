// client/src/components/hero-section/HeroSection.jsx
import React from 'react'
import './HeroSection.css'
import SignatureJW from './SignatureJW'

const HeroSection = () => {
  return (
    <section className="hero-section" aria-labelledby="hero-section__heading">
      <span className="hero-section__subtitle">Graduate Developer</span>
      <h1 className="hero-section__title" id="hero-section__heading">
        Jamie Wilson
      </h1>
      <p className="hero-section__description">
        Hello! I am Jamie Wilson, a passionate and driven Software Development
        student in my final 6 months at the Ara Institute of Canterbury. I am
        excited to bring my skills, creativity, and enthusiasm to the tech
        industry, and I look forward to contributing to innovative and impactful
        projects.
      </p>
      <SignatureJW />
    </section>
  )
}

export default HeroSection
