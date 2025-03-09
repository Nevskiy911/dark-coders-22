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
    on: {
    slideChange: function () {
      if (Swiper.isEnd) {
        Swiper.navigation.nextEl.disabled = true;
      } else {
        Swiper.navigation.nextEl.disabled = false;
      }

      if (Swiper.isBeginning) {
        Swiper.navigation.prevEl.disabled = true;
      } else {
        Swiper.navigation.prevEl.disabled = false;
      }
    }
  }
  });