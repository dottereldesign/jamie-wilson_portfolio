// client/src/components/App.jsx
import React from 'react'
import Navigation from './navigation/Navigation'
import './App.css'
import Footer from './footer/Footer'
import HeroSection from './hero-section/HeroSection'
import useToggleTheme from '../hooks/useToggleTheme'
import Carousel from './carousel/Carousel' // Corrected import

const App = () => {
  const [isNightTheme, toggleTheme] = useToggleTheme()

  return (
    <div className={`app-container ${isNightTheme ? 'night-theme' : ''}`}>
      <header>
        <Navigation onToggleTheme={toggleTheme} isNightTheme={isNightTheme} />
      </header>
      <main>
        <HeroSection />
        <Carousel /> {/* Use the new component */}
      </main>
      <Footer />
    </div>
  )
}

export default App
