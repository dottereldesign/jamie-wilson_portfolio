import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import Home from './Home'
import Navigation from './Navigation'
import './App.css'

const App = () => {
  const [isNightTheme, setIsNightTheme] = useState(false)

  const toggleTheme = () => {
    setIsNightTheme(!isNightTheme)
    document.documentElement.setAttribute(
      'data-theme',
      !isNightTheme ? 'dark' : 'light'
    )
  }

  return (
    <div>
      <Helmet>
        <link
          rel="preload"
          href="/path/to/styles.css"
          as="style"
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
        <noscript>{`<link rel="stylesheet" href="/path/to/styles.css" />`}</noscript>
      </Helmet>
      <header>
        <Navigation onToggleTheme={toggleTheme} />
      </header>
      <main className={isNightTheme ? 'night-theme' : ''}>
        <Home />
      </main>
    </div>
  )
}

export default App
