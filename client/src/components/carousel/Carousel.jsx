// client/src/components/carousel/Carousel.jsx
import React, { useEffect } from 'react'
import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.min.css'
import './Carousel.css'
import projectRpsImage from '../../assets/images/project-rps.png'
import projectArtImage from '../../assets/images/project-art.png'
import projectMakerImage from '../../assets/images/project-maker.png'
import projectNewsImage from '../../assets/images/project-news.png'
import projectWorkitImage from '../../assets/images/project-workit.png'
import projectAgoraImage from '../../assets/images/project-agora.png'

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
        sensitivity: 1
      },
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true
      },
      slidesPerView: 1,
      spaceBetween: 10,
      breakpoints: {
        640: {
          // Tablets
          slidesPerView: 2,
          spaceBetween: 8
        },
        1024: {
          // Desktops
          slidesPerView: 4,
          spaceBetween: 8
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
            <div className="swiper-slide project">
              <div className="project__number">01</div>
              <div className="project__genre">Game</div>
              <img
                className="project__img"
                src={projectRpsImage}
                alt="project"
              />
              <div className="project__body">
                <div className="project__detail">
                  <h2 className="project__name">Rock, Paper, Scissors</h2>
                  <p className="project__author">
                    <span className="coding-language">HTML</span>
                    <span className="coding-language">CSS</span>
                    <span className="coding-language">JS</span>
                  </p>
                  <p>Interactive web-based version of the classic hand game.</p>
                  <div className="project__buttons">
                    <a
                      href="https://github.com/dottereldesign/paper_scissors_rock"
                      className="project__button"
                    >
                      Source Code
                    </a>
                    <a
                      href="https://dottereldesign.github.io/paper_scissors_rock/"
                      className="project__button"
                    >
                      Live Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide project">
              <div className="project__number">02</div>
              <div className="project__genre">Art</div>
              <img
                className="project__img"
                src={projectArtImage}
                alt="project"
              />
              <div className="project__body">
                <div className="project__detail">
                  <h2 className="project__name">Modern Art Gallery</h2>
                  <p className="project__author">
                    <span className="coding-language">HTML</span>
                    <span className="coding-language">CSS</span>
                  </p>
                  <p>Online gallery showcasing contemporary artworks.</p>
                  <div className="project__buttons">
                    <a
                      href="https://github.com/dottereldesign/art_gallery_website"
                      className="project__button"
                    >
                      Source Code
                    </a>
                    <a
                      href="https://dottereldesign.github.io/art_gallery_website/"
                      className="project__button"
                    >
                      Live Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide project">
              <div className="project__number">03</div>
              <div className="project__genre">Product</div>
              <img
                className="project__img"
                src={projectMakerImage}
                alt="project"
              />
              <div className="project__body">
                <div className="project__detail">
                  <h2 className="project__name">Maker (landing page)</h2>
                  <p className="project__author">
                    <span className="coding-language">HTML</span>
                    <span className="coding-language">CSS</span>
                  </p>
                  <p>Modern landing page for a sleek product.</p>
                  <div className="project__buttons">
                    <a
                      href="https://github.com/dottereldesign/maker_pre-launch_landing_page"
                      className="project__button"
                    >
                      Source Code
                    </a>
                    <a
                      href="https://dottereldesign.github.io/maker_pre-launch_landing_page/"
                      className="project__button"
                    >
                      Live Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide project">
              <div className="project__number">04</div>
              <div className="project__genre">News</div>
              <img
                className="project__img"
                src={projectNewsImage}
                alt="project"
              />
              <div className="project__body">
                <div className="project__detail">
                  <h2 className="project__name">News (landing page)</h2>
                  <p className="project__author">
                    <span className="coding-language">HTML</span>
                    <span className="coding-language">CSS</span>
                    <span className="coding-language">JS</span>
                  </p>
                  <p>Modern interface for daily news updates.</p>
                  <div className="project__buttons">
                    <a
                      href="https://github.com/dottereldesign/news_homepage"
                      className="project__button"
                    >
                      Source Code
                    </a>
                    <a
                      href="https://dottereldesign.github.io/news_homepage/"
                      className="project__button"
                    >
                      Live Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide project">
              <div className="project__number">05</div>
              <div className="project__genre">Fitness</div>
              <img
                className="project__img"
                src={projectWorkitImage}
                alt="project"
              />
              <div className="project__body">
                <div className="project__detail">
                  <h2 className="project__name">Workit (landing page)</h2>
                  <p className="project__author">
                    <span className="coding-language">HTML</span>
                    <span className="coding-language">CSS</span>
                    <span className="coding-language">JS</span>
                  </p>
                  <p>Landing page for a vibrant fitness app.</p>
                  <div className="project__buttons">
                    <a
                      href="https://github.com/dottereldesign/workit_landing_page"
                      className="project__button"
                    >
                      Source Code
                    </a>
                    <a
                      href="https://dottereldesign.github.io/workit_landing_page/"
                      className="project__button"
                    >
                      Live Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide project">
              <div className="project__number">06</div>
              <div className="project__genre">E-commerce</div>
              <img
                className="project__img"
                src={projectAgoraImage}
                alt="project"
              />
              <div className="project__body">
                <div className="project__detail">
                  <h2 className="project__name">Agora</h2>
                  <p className="project__author">
                    <span className="coding-language">CSS</span>
                    <span className="coding-language">JS</span>
                    <span className="coding-language">MySQL</span>
                    <span className="coding-language">Laravel</span>
                  </p>
                  <p>Dynamic e-commerce platform built with Laravel.</p>
                  <div className="project__buttons">
                    <a
                      href="https://github.com/dottereldesign/agora"
                      className="project__button"
                    >
                      Source Code
                    </a>
                    <a
                      href="https://dottereldesign.github.io/agora/"
                      className="project__button"
                    >
                      Live Website
                    </a>
                  </div>
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
