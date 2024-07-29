import React from 'react'
import './Loading.css'
import { ReactComponent as Loader } from './loader.svg'

const Loading = () => {
  return (
    <div className="loading-container" role="status" aria-live="polite">
      <Loader className="spinner" aria-label="Loading" />
    </div>
  )
}

export default Loading
