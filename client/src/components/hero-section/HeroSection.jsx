// client/src/components/hero-section/HeroSection.jsx
import React, { useState, useEffect } from 'react'
import './HeroSection.css'
import SignatureJW from './SignatureJW'
import LoadingBars from './LoadingBars'

const HeroSection = () => {
  const [loadingBarsStart, setLoadingBarsStart] = useState(false)
  const [signatureStart, setSignatureStart] = useState(false)

  useEffect(() => {
    const startLoadingBarsTimer = setTimeout(
      () => setLoadingBarsStart(true),
      1500
    ) // Start loading bars after heading
    const startSignatureTimer = setTimeout(() => setSignatureStart(true), 4500) // Start signature after loading bars complete

    return () => {
      clearTimeout(startLoadingBarsTimer)
      clearTimeout(startSignatureTimer)
    }
  }, [])

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
      <LoadingBars start={loadingBarsStart} />
      <SignatureJW start={signatureStart} />
    </section>
  )
}

export default HeroSection
