// client/src/components/carousel/Carousel.jsx
import React, { useEffect } from 'react'
import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.min.css'
import './Carousel.css'
import projectRpsImage from '../../assets/images/project-rps.png'

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
        invert: false
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
                <img
                  className="project__avatar"
                  src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/f9d29d0e-f03b-4990-9bc5-ade57a276b41"
                  alt="avatar"
                />
                <div className="project__detail">
                  <h2 className="project__name">Rock, Paper, Scissors</h2>
                  <p className="project__author">Evelyn Taylor</p>
                </div>
                <div className="project__actions">
                  <a className="project__like" href="#">
                    <i className="fas fa-heart"></i>
                  </a>
                  <button
                    className="project__actions-controller"
                    data-target="project1"
                    aria-controls="project-actions-content"
                    aria-expanded="false"
                  >
                    <i className="fa-solid fa-ellipsis fa-2xl"></i>
                  </button>
                  <div
                    className="project__actions-content"
                    id="project1"
                    data-visible="false"
                    aria-hidden="true"
                  >
                    <ul
                      role="list"
                      className="project__actions-list"
                      data-spacing="small"
                    >
                      <li>
                        <a className="project__actions-link" href="#">
                          <i className="fa-solid fa-folder-open"></i>
                          <span>Add to Collection</span>
                        </a>
                      </li>
                      <li>
                        <a className="project__actions-link" href="#">
                          <i className="fa-solid fa-eye"></i>
                          <span>Show the Project</span>
                        </a>
                      </li>
                      <li>
                        <a className="project__actions-link" href="#">
                          <i className="fa-solid fa-user-plus"></i>
                          <span>Follow the User</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-slide project">
              <img
                className="project__img"
                src={projectRpsImage}
                alt="project"
              />
              <div className="project__body">
                <img
                  className="project__avatar"
                  src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/3c7b6ef9-cd2d-4d70-819a-2aa9c2309083"
                  alt="avatar"
                />
                <div className="project__detail">
                  <h2 className="project__name">Pancake</h2>
                  <p className="project__author">Ethan Wilson</p>
                </div>
                <div className="project__actions">
                  <a className="project__like" href="#">
                    <i className="fas fa-heart"></i>
                  </a>
                  <button
                    className="project__actions-controller"
                    data-target="project2"
                    aria-controls="project-actions-content"
                    aria-expanded="false"
                  >
                    <i className="fa-solid fa-ellipsis fa-2xl"></i>
                  </button>
                  <div
                    className="project__actions-content"
                    id="project2"
                    data-visible="false"
                    aria-hidden="true"
                  >
                    <ul
                      role="list"
                      className="project__actions-list"
                      data-spacing="small"
                    >
                      <li>
                        <a className="project__actions-link" href="#">
                          <i className="fa-solid fa-folder-open"></i>
                          <span>Add to Collection</span>
                        </a>
                      </li>
                      <li>
                        <a className="project__actions-link" href="#">
                          <i className="fa-solid fa-eye"></i>
                          <span>Show the Project</span>
                        </a>
                      </li>
                      <li>
                        <a className="project__actions-link" href="#">
                          <i className="fa-solid fa-user-plus"></i>
                          <span>Follow the User</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-slide project">
              <img
                className="project__img"
                src={projectRpsImage}
                alt="project"
              />
              <div className="project__body">
                <img
                  className="project__avatar"
                  src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/01332597-5aeb-483b-b682-9379c6ed8f14"
                  alt="avatar"
                />
                <div className="project__detail">
                  <h2 className="project__name">Macaron</h2>
                  <p className="project__author">Bella Smith</p>
                </div>
                <div className="project__actions">
                  <a className="project__like" href="#">
                    <i className="fas fa-heart"></i>
                  </a>
                  <button
                    className="project__actions-controller"
                    data-target="project3"
                    aria-controls="project-actions-content"
                    aria-expanded="false"
                  >
                    <i className="fa-solid fa-ellipsis fa-2xl"></i>
                  </button>
                  <div
                    className="project__actions-content"
                    id="project3"
                    data-visible="false"
                    aria-hidden="true"
                  >
                    <ul
                      role="list"
                      className="project__actions-list"
                      data-spacing="small"
                    >
                      <li>
                        <a className="project__actions-link" href="#">
                          <i className="fa-solid fa-folder-open"></i>
                          <span>Add to Collection</span>
                        </a>
                      </li>
                      <li>
                        <a className="project__actions-link" href="#">
                          <i className="fa-solid fa-eye"></i>
                          <span>Show the Project</span>
                        </a>
                      </li>
                      <li>
                        <a className="project__actions-link" href="#">
                          <i className="fa-solid fa-user-plus"></i>
                          <span>Follow the User</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-slide project">
              <img
                className="project__img"
                src={projectRpsImage}
                alt="project"
              />
              <div className="project__body">
                <img
                  className="project__avatar"
                  src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/b9f5ef94-c2c9-4792-b7a3-593d393f2c84"
                  alt="avatar"
                />
                <div className="project__detail">
                  <h2 className="project__name">Cheesecake</h2>
                  <p className="project__author">Mia Dixon</p>
                </div>
                <div className="project__actions">
                  <a className="project__like" href="#">
                    <i className="fas fa-heart"></i>
                  </a>
                  <button
                    className="project__actions-controller"
                    data-target="project4"
                    aria-controls="project-actions-content"
                    aria-expanded="false"
                  >
                    <i className="fa-solid fa-ellipsis fa-2xl"></i>
                  </button>
                  <div
                    className="project__actions-content"
                    id="project4"
                    data-visible="false"
                    aria-hidden="true"
                  >
                    <ul
                      role="list"
                      className="project__actions-list"
                      data-spacing="small"
                    >
                      <li>
                        <a className="project__actions-link" href="#">
                          <i className="fa-solid fa-folder-open"></i>
                          <span>Add to Collection</span>
                        </a>
                      </li>
                      <li>
                        <a className="project__actions-link" href="#">
                          <i className="fa-solid fa-eye"></i>
                          <span>Show the Project</span>
                        </a>
                      </li>
                      <li>
                        <a className="project__actions-link" href="#">
                          <i className="fa-solid fa-user-plus"></i>
                          <span>Follow the User</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-slide project">
              <img
                className="project__img"
                src={projectRpsImage}
                alt="project"
              />
              <div className="project__body">
                <img
                  className="project__avatar"
                  src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/58f9319c-78cf-444b-ba71-701c506c2dd3"
                  alt="avatar"
                />
                <div className="project__detail">
                  <h2 className="project__name">Donuts</h2>
                  <p className="project__author">Olivia Martinez</p>
                </div>
                <div className="project__actions">
                  <a className="project__like" href="#">
                    <i className="fas fa-heart"></i>
                  </a>
                  <button
                    className="project__actions-controller"
                    data-target="project5"
                    aria-controls="project-actions-content"
                    aria-expanded="false"
                  >
                    <i className="fa-solid fa-ellipsis fa-2xl"></i>
                  </button>
                  <div
                    className="project__actions-content"
                    id="project5"
                    data-visible="false"
                    aria-hidden="true"
                  >
                    <ul
                      role="list"
                      className="project__actions-list"
                      data-spacing="small"
                    >
                      <li>
                        <a className="project__actions-link" href="#">
                          <i className="fa-solid fa-folder-open"></i>
                          <span>Add to Collection</span>
                        </a>
                      </li>
                      <li>
                        <a className="project__actions-link" href="#">
                          <i className="fa-solid fa-eye"></i>
                          <span>Show the Project</span>
                        </a>
                      </li>
                      <li>
                        <a className="project__actions-link" href="#">
                          <i className="fa-solid fa-user-plus"></i>
                          <span>Follow the User</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-slide project">
              <img
                className="project__img"
                src={projectRpsImage}
                alt="project"
              />
              <div className="project__body">
                <img
                  className="project__avatar"
                  src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/24ca2eec-a5ba-4c32-907c-ffffca203e1c"
                  alt="avatar"
                />
                <div className="project__detail">
                  <h2 className="project__name">Rolo Cheesecake</h2>
                  <p className="project__author">Benjamin Clark</p>
                </div>
                <div className="project__actions">
                  <a className="project__like" href="#">
                    <i className="fas fa-heart"></i>
                  </a>
                  <button
                    className="project__actions-controller"
                    data-target="project6"
                    aria-controls="project-actions-content"
                    aria-expanded="false"
                  >
                    <i className="fa-solid fa-ellipsis fa-2xl"></i>
                  </button>
                  <div
                    className="project__actions-content"
                    id="project6"
                    data-visible="false"
                    aria-hidden="true"
                  >
                    <ul
                      role="list"
                      className="project__actions-list"
                      data-spacing="small"
                    >
                      <li>
                        <a className="project__actions-link" href="#">
                          <i className="fa-solid fa-folder-open"></i>
                          <span>Add to Collection</span>
                        </a>
                      </li>
                      <li>
                        <a className="project__actions-link" href="#">
                          <i className="fa-solid fa-eye"></i>
                          <span>Show the Project</span>
                        </a>
                      </li>
                      <li>
                        <a className="project__actions-link" href="#">
                          <i className="fa-solid fa-user-plus"></i>
                          <span>Follow the User</span>
                        </a>
                      </li>
                    </ul>
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
