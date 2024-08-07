// client/src/components/carousel/Carousel.jsx
import React, { useEffect } from 'react'
import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.min.css'
import './Carousel.css'
import projectRpsImage from '../../assets/images/project-rps.png'
import projectArtImage from '../../assets/images/project-art.png' // Correct variable name
import projectMakerImage from '../../assets/images/project-maker.png' // Correct variable name
import projectNewsImage from '../../assets/images/project-news.png' // Correct variable name
import projectWorkitImage from '../../assets/images/project-workit.png' // Correct variable name
import projectAgoraImage from '../../assets/images/project-agora.png' // Correct variable name

const Carousel = () => {
  useEffect(() => {
    const projectActionsControllers = document.querySelectorAll(
      '.project__actions-controller'
    )

    projectActionsControllers.forEach((btn) => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target')
        const projectActionsContent = document.getElementById(targetId)

        if (projectActionsContent) {
          const isVisible = projectActionsContent.getAttribute('data-visible')

          if (isVisible === 'false') {
            projectActionsContent.setAttribute('data-visible', 'true')
            projectActionsContent.setAttribute('aria-hidden', 'false')
            btn.setAttribute('aria-expanded', 'true')
          } else {
            projectActionsContent.setAttribute('data-visible', 'false')
            projectActionsContent.setAttribute('aria-hidden', 'true')
            btn.setAttribute('aria-expanded', 'false')
          }
        }
      })
    })

    const handleClickOutside = (event) => {
      projectActionsControllers.forEach((btn) => {
        const targetId = btn.getAttribute('data-target')
        const projectActionsContent = document.getElementById(targetId)

        if (
          projectActionsContent &&
          projectActionsContent.getAttribute('data-visible') === 'true'
        ) {
          if (
            !projectActionsContent.contains(event.target) &&
            event.target !== btn
          ) {
            projectActionsContent.setAttribute('data-visible', 'false')
            projectActionsContent.setAttribute('aria-hidden', 'true')
            btn.setAttribute('aria-expanded', 'false')
          }
        }
      })
    }

    document.addEventListener('click', handleClickOutside)

    projectActionsControllers.forEach((btn) => {
      btn.addEventListener('click', (event) => {
        event.stopPropagation()
      })
    })

    const likeBtns = document.querySelectorAll('.project__like')

    likeBtns.forEach((likeBtn) => {
      likeBtn.addEventListener('click', () => {
        if (likeBtn.classList.contains('project__like--active')) {
          likeBtn.classList.remove('project__like--active')
        } else {
          likeBtn.classList.add('project__like--active')
        }
      })
    })

    // Initialize Swiper
    new Swiper('.swiper', {
      modules: [Swiper.Mousewheel, Swiper.Scrollbar],
      grabCursor: true,
      speed: 400,
      mousewheel: {
        invert: false,
        sensitivity: 1 // Adjust sensitivity as needed
      },
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true
      },

      slidesPerView: 1,
      spaceBetween: 10,
      breakpoints: {
        900: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 20
        }
      }
    })

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <div className="carousel">
      <div className="carousel__container">
        <div className="swiper">
          <div className="swiper-wrapper">
            {/* Repeat for each project */}

            <div className="swiper-slide project">
              <img
                className="project__img"
                src={projectRpsImage}
                alt="project"
              />

              <div className="project__body">
                <div className="project__detail">
                  <h2 className="project__name">Rock, Paper, Scissors</h2>
                  <p className="project__author">HTML CSS JS</p>
                </div>
              </div>
            </div>
            <div className="swiper-slide project">
              <img
                className="project__img"
                src={projectArtImage} // Correct variable name
                alt="project"
              />

              <div className="project__body">
                <div className="project__detail">
                  <h2 className="project__name">Modern Art Gallery</h2>
                  <p className="project__author">HTML CSS</p>
                </div>
              </div>
            </div>
            <div className="swiper-slide project">
              <img
                className="project__img"
                src={projectMakerImage} // Correct variable name
                alt="project"
              />
              <div className="project__body">
                <div className="project__detail">
                  <h2 className="project__name">Maker (landing page)</h2>
                  <p className="project__author">HTML CSS</p>
                </div>
              </div>
            </div>

            <div className="swiper-slide project">
              <img
                className="project__img"
                src={projectNewsImage}
                alt="project"
              />

              <div className="project__body">
                <div className="project__detail">
                  <h2 className="project__name">News (landing page)</h2>
                  <p className="project__author">HTML CSS JS</p>
                </div>
              </div>
            </div>

            <div className="swiper-slide project">
              <img
                className="project__img"
                src={projectWorkitImage}
                alt="project"
              />

              <div className="project__body">
                <div className="project__detail">
                  <h2 className="project__name">Workit (landing page)</h2>
                  <p className="project__author">HTML CSS JS</p>
                </div>
              </div>
            </div>

            <div className="swiper-slide project">
              <img
                className="project__img"
                src={projectAgoraImage}
                alt="project"
              />

              <div className="project__body">
                <div className="project__detail">
                  <h2 className="project__name">Agora</h2>
                  <p className="project__author">CSS JS MySQL Laravel</p>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-scrollbar"></div>
        </div>
      </div>
    </div>
  )
}

export default Carousel
