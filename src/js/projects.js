import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Keyboard } from 'swiper/modules';

new Swiper(".projects-swiper", {
       modules: [Navigation, Keyboard],
    loop: false,
    spaceBetween: 20,
    slidesPerView: 1,
    navigation: {
      nextEl: ".projects-swiper-button-next",
      prevEl: ".projects-swiper-button-prev",
    },
    keyboard: {
        enabled: true,
    onlyInViewport: true,
    },
  });