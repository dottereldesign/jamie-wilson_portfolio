// client/src/hooks/useToggleTheme.js
import { useState, useEffect } from 'react'

const useToggleTheme = () => {
  const storedTheme = localStorage.getItem('theme') === 'dark'
  const [isNightTheme, setIsNightTheme] = useState(storedTheme)

  useEffect(() => {
    if (storedTheme) {
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-theme', 'light')
    }
  }, [storedTheme])

  const toggleTheme = () => {
    setIsNightTheme((prevTheme) => {
      const newTheme = !prevTheme
      localStorage.setItem('theme', newTheme ? 'dark' : 'light')
      document.documentElement.setAttribute(
        'data-theme',
        newTheme ? 'dark' : 'light'
      )
      return newTheme
    })
  }

  return [isNightTheme, toggleTheme]
}

export default useToggleTheme
