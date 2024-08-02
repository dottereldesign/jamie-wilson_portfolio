// client/src/components/hero-section/LoadingBars.jsx
import React, { useEffect, useState } from 'react'
import './LoadingBars.css'

const LoadingBars = () => {
  const [completed, setCompleted] = useState([false, false, false])

  useEffect(() => {
    const timers = [
      setTimeout(() => setCompleted([true, false, false]), 900),
      setTimeout(() => setCompleted([true, true, false]), 1900),
      setTimeout(() => setCompleted([true, true, true]), 2900)
    ]
    return () => timers.forEach((timer) => clearTimeout(timer))
  }, [])

  return (
    <div className="loading-bars">
      <div className="loading-bar">
        <div className={`loading-bar__label ${completed[0] ? 'show' : ''}`}>
          Certificate
        </div>
        <div
          className={`loading-bar__progress ${completed[0] ? 'complete' : ''}`}
        />
        {completed[0] && (
          <div className="loading-bar__status complete">Complete</div>
        )}
      </div>
      <div className="loading-bar">
        <div className={`loading-bar__label ${completed[1] ? 'show' : ''}`}>
          Diploma
        </div>
        <div
          className={`loading-bar__progress ${completed[1] ? 'complete' : ''}`}
        />
        {completed[1] && (
          <div className="loading-bar__status complete">Complete</div>
        )}
      </div>
      <div className="loading-bar">
        <div className={`loading-bar__label ${completed[2] ? 'show' : ''}`}>
          Degree
        </div>
        <div
          className="loading-bar__progress"
          style={{ width: completed[2] ? '90%' : '0%' }}
        />
        {completed[2] && (
          <div className="loading-bar__status complete">90%</div>
        )}
      </div>
    </div>
  )
}

export default LoadingBars
