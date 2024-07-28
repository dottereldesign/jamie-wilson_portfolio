import React from 'react'

import Home from '../components/Home'
import Navigation from '../components/Navigation'
import useToggleTheme from '../hooks/useToggleTheme'
import './App.css'

const App = () => {
  const [isNightTheme, toggleTheme] = useToggleTheme()

  return (
    <div>
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
