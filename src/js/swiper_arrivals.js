import Swiper from "swiper/bundle";
import "swiper/css/bundle";

const swiper = new Swiper(".arrivals__swiper", {
  slidesPerView: "auto",
  spaceBetween: 24,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
