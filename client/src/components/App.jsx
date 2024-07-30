// client/src/components/App.jsx
import React from 'react'
import Navigation from './navigation/Navigation'
import './App.css'
import useToggleTheme from '../hooks/useToggleTheme'

const App = () => {
  const [isNightTheme, toggleTheme] = useToggleTheme()

  return (
    <div className={`app-container ${isNightTheme ? 'night-theme' : ''}`}>
      <header>
        <Navigation onToggleTheme={toggleTheme} isNightTheme={isNightTheme} />
      </header>
    </div>
  )
}

export default App
