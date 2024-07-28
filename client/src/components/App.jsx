// client/src/components/App.jsx
import React from 'react'
import { Helmet } from 'react-helmet'
import Home from './Home'
import ThemeSwitcher from './ThemeSwitcher'
import './App.css'
import useToggleTheme from '../hooks/useToggleTheme'

const App = () => {
  const [isNightTheme, toggleTheme] = useToggleTheme()

  return (
    <div className={`app-container ${isNightTheme ? 'night-theme' : ''}`}>
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
        <nav>
          <ThemeSwitcher
            isNightTheme={isNightTheme}
            onToggleTheme={toggleTheme}
          />
        </nav>
      </header>
      <main>
        <Home />
      </main>
    </div>
  )
}

export default App
