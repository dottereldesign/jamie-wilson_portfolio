import { useState } from 'react'

const useToggleTheme = () => {
  const [isNightTheme, setIsNightTheme] = useState(false)

  const toggleTheme = () => {
    setIsNightTheme(!isNightTheme)
    document.body.style.backgroundColor = !isNightTheme
      ? 'var(--bg-color-dark)'
      : 'var(--bg-color-light)'
  }

  return [isNightTheme, toggleTheme]
}

export default useToggleTheme
