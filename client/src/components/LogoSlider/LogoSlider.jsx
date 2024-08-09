// client/src/components/LogoSlider/LogoSlider.jsx

import React from 'react'
import './LogoSlider.css'

const LogoSlider = () => {
  return (
    <div className="slider">
      <div className="slide-track">
        <div className="slide">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg"
            height="100"
            width="250"
            alt="Logo 1"
          />
        </div>
        <div className="slide">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg"
            height="100"
            width="250"
            alt="Logo 2"
          />
        </div>
        <div className="slide">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg"
            height="100"
            width="250"
            alt="Logo 3"
          />
        </div>
        <div className="slide">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
            height="100"
            width="250"
            alt="Logo 4"
          />
        </div>
        <div className="slide">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg"
            height="100"
            width="250"
            alt="Logo 5"
          />
        </div>
        <div className="slide">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg"
            height="100"
            width="250"
            alt="Logo 6"
          />
        </div>
        <div className="slide">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg"
            height="100"
            width="250"
            alt="Logo 7"
          />
        </div>

        <div className="slide">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
            height="100"
            width="250"
            alt="Logo 8"
          />
        </div>

        <div className="slide">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg"
            height="100"
            width="250"
            alt="Logo 9"
          />
        </div>

        {/* Repeat the slides to create a seamless loop */}
        <div className="slide">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg"
            height="100"
            width="250"
            alt="Logo 1"
          />
        </div>
        <div className="slide">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg"
            height="100"
            width="250"
            alt="Logo 2"
          />
        </div>
        <div className="slide">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg"
            height="100"
            width="250"
            alt="Logo 3"
          />
        </div>
        <div className="slide">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg"
            height="100"
            width="250"
            alt="Logo 4"
          />
        </div>
        <div className="slide">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
            height="100"
            width="250"
            alt="Logo 5"
          />
        </div>
        <div className="slide">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg"
            height="100"
            width="250"
            alt="Logo 6"
          />
        </div>
        <div className="slide">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg"
            height="100"
            width="250"
            alt="Logo 7"
          />
        </div>
      </div>
    </div>
  )
}

export default LogoSlider
