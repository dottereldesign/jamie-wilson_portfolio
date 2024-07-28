import React from 'react'
import { Helmet } from 'react-helmet'
import Home from '../components/Home'
import Navigation from '../components/Navigation'
import useToggleTheme from '../hooks/useToggleTheme'
import './App.css'

const App = () => {
  const [isNightTheme, toggleTheme] = useToggleTheme()

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
