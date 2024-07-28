import React from 'react'
import './Loading.css'
import { ReactComponent as Loader } from './loader.svg' // Replace 'loader.svg' with your downloaded file name

const Loading = () => {
  return (
    <div className="loading-container">
      <Loader className="spinner" />
    </div>
  )
}

export default Loading
