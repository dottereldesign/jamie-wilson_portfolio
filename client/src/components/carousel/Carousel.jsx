// client/src/components/carousel/Carousel.jsx
import React, { useEffect } from 'react'
import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.min.css'
import './Carousel.css'

const Carousel = () => {
  useEffect(() => {
    const postActionsControllers = document.querySelectorAll(
      '.post-actions-controller'
    )

    postActionsControllers.forEach((btn) => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target')
        const postActionsContent = document.getElementById(targetId)

        if (postActionsContent) {
          const isVisible = postActionsContent.getAttribute('data-visible')

          if (isVisible === 'false') {
            postActionsContent.setAttribute('data-visible', 'true')
            postActionsContent.setAttribute('aria-hidden', 'false')
            btn.setAttribute('aria-expanded', 'true')
          } else {
            postActionsContent.setAttribute('data-visible', 'false')
            postActionsContent.setAttribute('aria-hidden', 'true')
            btn.setAttribute('aria-expanded', 'false')
          }
        }
      })
    })

    const handleClickOutside = (event) => {
      postActionsControllers.forEach((btn) => {
        const targetId = btn.getAttribute('data-target')
        const postActionsContent = document.getElementById(targetId)

        if (
          postActionsContent &&
          postActionsContent.getAttribute('data-visible') === 'true'
        ) {
          if (
            !postActionsContent.contains(event.target) &&
            event.target !== btn
          ) {
            postActionsContent.setAttribute('data-visible', 'false')
            postActionsContent.setAttribute('aria-hidden', 'true')
            btn.setAttribute('aria-expanded', 'false')
          }
        }
      })
    }

    document.addEventListener('click', handleClickOutside)

    postActionsControllers.forEach((btn) => {
      btn.addEventListener('click', (event) => {
        event.stopPropagation()
      })
    })

    const likeBtns = document.querySelectorAll('.post-like')

    likeBtns.forEach((likeBtn) => {
      likeBtn.addEventListener('click', () => {
        if (likeBtn.classList.contains('active')) {
          likeBtn.classList.remove('active')
        } else {
          likeBtn.classList.add('active')
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
    <div className="recipe-section">
      <div className="recipe-container">
        <h1>Projects</h1>
        <div className="swiper">
          <div className="swiper-wrapper">
            {/* Repeat for each post */}
            <div className="swiper-slide post">
              <img
                className="post-img"
                src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/defebc72-ea17-41c7-9bb6-70b3974a93b7"
                alt="recipe"
              />
              <div className="post-body">
                <img
                  className="post-avatar"
                  src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/f9d29d0e-f03b-4990-9bc5-ade57a276b41"
                  alt="avatar"
                />
                <div className="post-detail">
                  <h2 className="post-name">Homemade Ice Cream</h2>
                  <p className="post-author">Evelyn Taylor</p>
                </div>
                <div className="post-actions">
                  <a className="post-like" href="#">
                    <i className="fas fa-heart"></i>
                  </a>
                  <button
                    className="post-actions-controller"
                    data-target="post1"
                    aria-controls="post-actions-content"
                    aria-expanded="false"
                  >
                    <i className="fa-solid fa-ellipsis fa-2xl"></i>
                  </button>
                  <div
                    className="post-actions-content"
                    id="post1"
                    data-visible="false"
                    aria-hidden="true"
                  >
                    <ul role="list" className="grid-flow" data-spacing="small">
                      <li>
                        <a className="post-actions-link" href="#">
                          <i className="fa-solid fa-folder-open"></i>
                          <span>Add to Collection</span>
                        </a>
                      </li>
                      <li>
                        <a className="post-actions-link" href="#">
                          <i className="fa-solid fa-eye"></i>
                          <span>Show the Recipe</span>
                        </a>
                      </li>
                      <li>
                        <a className="post-actions-link" href="#">
                          <i className="fa-solid fa-user-plus"></i>
                          <span>Follow the User</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-slide post">
              <img
                className="post-img"
                src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/7443d18f-26b6-47eb-bfca-541fb72cee65"
                alt="recipe"
              />
              <div className="post-body">
                <img
                  className="post-avatar"
                  src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/3c7b6ef9-cd2d-4d70-819a-2aa9c2309083"
                  alt="avatar"
                />
                <div className="post-detail">
                  <h2 className="post-name">Pancake</h2>
                  <p className="post-author">Ethan Wilson</p>
                </div>
                <div className="post-actions">
                  <a className="post-like" href="#">
                    <i className="fas fa-heart"></i>
                  </a>
                  <button
                    className="post-actions-controller"
                    data-target="post2"
                    aria-controls="post-actions-content"
                    aria-expanded="false"
                  >
                    <i className="fa-solid fa-ellipsis fa-2xl"></i>
                  </button>
                  <div
                    className="post-actions-content"
                    id="post2"
                    data-visible="false"
                    aria-hidden="true"
                  >
                    <ul role="list" className="grid-flow" data-spacing="small">
                      <li>
                        <a className="post-actions-link" href="#">
                          <i className="fa-solid fa-folder-open"></i>
                          <span>Add to Collection</span>
                        </a>
                      </li>
                      <li>
                        <a className="post-actions-link" href="#">
                          <i className="fa-solid fa-eye"></i>
                          <span>Show the Recipe</span>
                        </a>
                      </li>
                      <li>
                        <a className="post-actions-link" href="#">
                          <i className="fa-solid fa-user-plus"></i>
                          <span>Follow the User</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-slide post">
              <img
                className="post-img"
                src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/24566dbf-61a2-4bd0-bb29-ef1773364eba"
                alt="recipe"
              />
              <div className="post-body">
                <img
                  className="post-avatar"
                  src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/01332597-5aeb-483b-b682-9379c6ed8f14"
                  alt="avatar"
                />
                <div className="post-detail">
                  <h2 className="post-name">Macaron</h2>
                  <p className="post-author">Bella Smith</p>
                </div>
                <div className="post-actions">
                  <a className="post-like" href="#">
                    <i className="fas fa-heart"></i>
                  </a>
                  <button
                    className="post-actions-controller"
                    data-target="post3"
                    aria-controls="post-actions-content"
                    aria-expanded="false"
                  >
                    <i className="fa-solid fa-ellipsis fa-2xl"></i>
                  </button>
                  <div
                    className="post-actions-content"
                    id="post3"
                    data-visible="false"
                    aria-hidden="true"
                  >
                    <ul role="list" className="grid-flow" data-spacing="small">
                      <li>
                        <a className="post-actions-link" href="#">
                          <i className="fa-solid fa-folder-open"></i>
                          <span>Add to Collection</span>
                        </a>
                      </li>
                      <li>
                        <a className="post-actions-link" href="#">
                          <i className="fa-solid fa-eye"></i>
                          <span>Show the Recipe</span>
                        </a>
                      </li>
                      <li>
                        <a className="post-actions-link" href="#">
                          <i className="fa-solid fa-user-plus"></i>
                          <span>Follow the User</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-slide post">
              <img
                className="post-img"
                src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/a208eb17-a847-4e04-be2c-d7ec2071ae45"
                alt="recipe"
              />
              <div className="post-body">
                <img
                  className="post-avatar"
                  src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/b9f5ef94-c2c9-4792-b7a3-593d393f2c84"
                  alt="avatar"
                />
                <div className="post-detail">
                  <h2 className="post-name">Cheesecake</h2>
                  <p className="post-author">Mia Dixon</p>
                </div>
                <div className="post-actions">
                  <a className="post-like" href="#">
                    <i className="fas fa-heart"></i>
                  </a>
                  <button
                    className="post-actions-controller"
                    data-target="post4"
                    aria-controls="post-actions-content"
                    aria-expanded="false"
                  >
                    <i className="fa-solid fa-ellipsis fa-2xl"></i>
                  </button>
                  <div
                    className="post-actions-content"
                    id="post4"
                    data-visible="false"
                    aria-hidden="true"
                  >
                    <ul role="list" className="grid-flow" data-spacing="small">
                      <li>
                        <a className="post-actions-link" href="#">
                          <i className="fa-solid fa-folder-open"></i>
                          <span>Add to Collection</span>
                        </a>
                      </li>
                      <li>
                        <a className="post-actions-link" href="#">
                          <i className="fa-solid fa-eye"></i>
                          <span>Show the Recipe</span>
                        </a>
                      </li>
                      <li>
                        <a className="post-actions-link" href="#">
                          <i className="fa-solid fa-user-plus"></i>
                          <span>Follow the User</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-slide post">
              <img
                className="post-img"
                src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/208fe8f5-9d7f-4b83-9249-43601bb4c500"
                alt="recipe"
              />
              <div className="post-body">
                <img
                  className="post-avatar"
                  src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/58f9319c-78cf-444b-ba71-701c506c2dd3"
                  alt="avatar"
                />
                <div className="post-detail">
                  <h2 className="post-name">Donuts</h2>
                  <p className="post-author">Olivia Martinez</p>
                </div>
                <div className="post-actions">
                  <a className="post-like" href="#">
                    <i className="fas fa-heart"></i>
                  </a>
                  <button
                    className="post-actions-controller"
                    data-target="post5"
                    aria-controls="post-actions-content"
                    aria-expanded="false"
                  >
                    <i className="fa-solid fa-ellipsis fa-2xl"></i>
                  </button>
                  <div
                    className="post-actions-content"
                    id="post5"
                    data-visible="false"
                    aria-hidden="true"
                  >
                    <ul role="list" className="grid-flow" data-spacing="small">
                      <li>
                        <a className="post-actions-link" href="#">
                          <i className="fa-solid fa-folder-open"></i>
                          <span>Add to Collection</span>
                        </a>
                      </li>
                      <li>
                        <a className="post-actions-link" href="#">
                          <i className="fa-solid fa-eye"></i>
                          <span>Show the Recipe</span>
                        </a>
                      </li>
                      <li>
                        <a className="post-actions-link" href="#">
                          <i className="fa-solid fa-user-plus"></i>
                          <span>Follow the User</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-slide post">
              <img
                className="post-img"
                src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/e4f91d6d-ee11-4ff7-9e6f-0fb3f9a78598"
                alt="recipe"
              />
              <div className="post-body">
                <img
                  className="post-avatar"
                  src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/24ca2eec-a5ba-4c32-907c-ffffca203e1c"
                  alt="avatar"
                />
                <div className="post-detail">
                  <h2 className="post-name">Rolo Cheesecake</h2>
                  <p className="post-author">Benjamin Clark</p>
                </div>
                <div className="post-actions">
                  <a className="post-like" href="#">
                    <i className="fas fa-heart"></i>
                  </a>
                  <button
                    className="post-actions-controller"
                    data-target="post6"
                    aria-controls="post-actions-content"
                    aria-expanded="false"
                  >
                    <i className="fa-solid fa-ellipsis fa-2xl"></i>
                  </button>
                  <div
                    className="post-actions-content"
                    id="post6"
                    data-visible="false"
                    aria-hidden="true"
                  >
                    <ul role="list" className="grid-flow" data-spacing="small">
                      <li>
                        <a className="post-actions-link" href="#">
                          <i className="fa-solid fa-folder-open"></i>
                          <span>Add to Collection</span>
                        </a>
                      </li>
                      <li>
                        <a className="post-actions-link" href="#">
                          <i className="fa-solid fa-eye"></i>
                          <span>Show the Recipe</span>
                        </a>
                      </li>
                      <li>
                        <a className="post-actions-link" href="#">
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
