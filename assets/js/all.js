"use strict";

$(function () {});
var swiper = new Swiper(".teachersSwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  autoHeight: true,
  breakpoints: {
    576: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});
var elem = document.querySelector('input[name="datepicker"]');
var datepicker = new Datepicker(elem, {
  autohide: false,
  prevArrow: "<span class='material-icons-outlined text-primary'>keyboard_arrow_left</span>",
  nextArrow: "<span class='material-icons-outlined text-primary'>keyboard_arrow_right</span>"
});
//# sourceMappingURL=all.js.map
