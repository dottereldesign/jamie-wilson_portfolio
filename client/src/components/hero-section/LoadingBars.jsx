// client/src/components/hero-section/LoadingBars.jsx
import React, { useEffect, useState } from 'react'
import './LoadingBars.css'

const LoadingBars = () => {
  const [completed, setCompleted] = useState([false, false, false])

  useEffect(() => {
    const timers = [
      setTimeout(() => setCompleted([true, false, false]), 700),
      setTimeout(() => setCompleted([true, true, false]), 1500),
      setTimeout(() => setCompleted([true, true, true]), 2300)
    ]
    return () => timers.forEach((timer) => clearTimeout(timer))
  }, [])

  return (
    <div className="loading-bars">
      <div className="loading-bar">
        <div className={`loading-bar__label ${completed[0] ? 'show' : ''}`}>
          Certificate in Information Technology
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
          Diploma in Web Dev & Design
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
          Bachelor&#39;s in Software Development
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
