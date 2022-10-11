document.addEventListener('DOMContentLoaded', () => {

  let swiperMenu = document.querySelector('.menu .swiper')
  let swiperComment = document.querySelector('.comment .swiper')


  let swiper1 = new Swiper (swiperMenu, {

    loop: true,
    spaceBetween: 0,
    slidesPerView: 1,
    spaceBetween: 50,
    speed: 600,
    

    breakpoints: {
      561: {
        slidesPerView: 2,
        spaceBetween: 50
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 50
      },
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  let swiper2 = new Swiper (swiperComment, {

    loop: true,
    spaceBetween: 10,
    slidesPerView: 1,

    autoplay: {
      delay: 3500,
    },

    speed: 1000,

    pagination: {
      el: '.swiper-pagination',
    },
  })

  const burger = document.querySelector('.header__burger')
  const burgerList = document.querySelector('.header__list')

  burger.addEventListener('click', (e) => {
    e.preventDefault();

    burgerList.classList.toggle('active')
  })
})

