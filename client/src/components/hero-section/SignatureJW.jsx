// client/src/components/hero-section/SignatureJW.jsx
import React, { useEffect } from 'react'
import './SignatureJW.css'

const SignatureJW = () => {
  useEffect(() => {
    let svg = document.getElementById('svg-signature')
    if (svg) {
      let length = svg.getTotalLength()
      document.documentElement.style.setProperty('--svg-length', length)
    }
  }, [])

  return (
    <div className="svg-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="170"
        height="80"
        viewBox="50 150 170 90"
        fill="none"
      >
        <path
          id="svg-signature"
          d="M 122.371 195.029 C 122.371 157.588 131.879 198.642 143.403 215.105 C 147.127 220.424 151.337 224.127 156.788 227.533 C 158.846 228.82 165.196 228.685 163.48 230.402 C 160.776 233.105 138.932 230.546 135.755 230.402 C 109.107 229.19 82.965 217.017 56.405 217.017 C 53.156 217.017 62.724 215.337 65.966 215.105 C 79.404 214.145 67.819 214.294 82.218 212.237 C 97.85 210.004 144.016 212.721 152.008 194.073 C 152.765 192.305 151.052 171.128 151.052 171.128 C 151.052 171.128 158.059 215.741 162.524 217.973 C 163.539 218.481 182.023 169.405 185.468 171.128 C 189.475 173.131 208.86 220.618 214.149 217.973 C 215.393 217.351 214.977 198.667 215.105 197.897 C 217.116 185.83 216.728 162.479 223.709 152.008"
          stroke="var(--color-accent)" // Use the accent color variable
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}

export default SignatureJW
