$(function () {
  
});

const swiper = new Swiper(".teachersSwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  autoHeight: true,
  breakpoints: {
    576: {
      slidesPerView: 1,
      spaceBetween: 0,
  
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
  
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});