import Swiper from 'swiper';
import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import { Navigation, Keyboard } from 'swiper/modules';

// document.addEventListener("DOMContentLoaded", function () {
new Swiper(".projects-swiper", {
       modules: [Navigation, Keyboard],
    loop: true,
    spaceBetween: 20,
    slidesPerView: 1,
    navigation: {
      nextEl: ".right-btn",
      prevEl: ".left-btn",
    },
    keyboard: {
        enabled: true,
    onlyInViewport: true,
    },
  });
// });