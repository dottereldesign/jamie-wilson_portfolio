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
                  <p>
                    This Paper, Scissors, Rock game is a fun and interactive
                    web-based implementation of the classic hand game. Players
                    compete against the computer in a series of rounds, choosing
                    either rock, paper, or scissors.
                  </p>
                </div>
              </div>
            </div>
            <div className="swiper-slide project">
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
                  <p>
                    The Modern Art Gallery project showcases contemporary
                    artworks in a beautifully designed online gallery. Visitors
                    can explore different collections and learn more about each
                    piece and artist.
                  </p>
                </div>
              </div>
            </div>
            <div className="swiper-slide project">
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
                  <p>
                    The Maker landing page is designed for a modern product,
                    featuring sleek design elements and a user-friendly layout.
                    It highlights key features and benefits to attract potential
                    customers.
                  </p>
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
                  <p className="project__author">
                    <span className="coding-language">HTML</span>
                    <span className="coding-language">CSS</span>
                    <span className="coding-language">JS</span>
                  </p>
                  <p>
                    The News landing page provides a clean and modern interface
                    for daily news updates. Users can browse through different
                    categories and read articles on various topics.
                  </p>
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
                  <p className="project__author">
                    <span className="coding-language">HTML</span>
                    <span className="coding-language">CSS</span>
                    <span className="coding-language">JS</span>
                  </p>
                  <p>
                    The Workit landing page is designed for a fitness app,
                    featuring vibrant visuals and interactive elements. It
                    encourages users to join and start their fitness journey
                    with engaging content.
                  </p>
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
                  <p className="project__author">
                    <span className="coding-language">CSS</span>
                    <span className="coding-language">JS</span>
                    <span className="coding-language">MySQL</span>
                    <span className="coding-language">Laravel</span>
                  </p>
                  <p>
                    Agora is a dynamic e-commerce platform built with Laravel
                    and MySQL. It provides a seamless shopping experience with
                    secure transactions and a variety of products available for
                    purchase.
                  </p>
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
