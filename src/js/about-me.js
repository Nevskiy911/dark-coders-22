import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Keyboard } from 'swiper/modules';
import Accordion from 'accordion-js';

const swiper = new Swiper('.swiper-about', {
  modules: [Navigation, Keyboard],
  spaceBetween: 0,
  loop: true,
  observer: true,
  observeParents: true,

  navigation: {
    nextEl: '.swiper-button-next-about',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  breakpoints: {
    320: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1440: { slidesPerView: 6 },
  },

  on: {
    init: updateFirstSlideColor,
    slideChangeTransitionEnd: updateFirstSlideColor,
  },
});

function updateFirstSlideColor() {
  document.querySelectorAll('.swiper-slide-about').forEach(slide => {
    slide.style.backgroundColor = '';
  });

  const firstVisibleSlide = document.querySelector('.swiper-slide-active');
  if (firstVisibleSlide) {
    firstVisibleSlide.style.backgroundColor = '#c6e327';
  }
}

swiper.init();

const accordionAbout = new Accordion('.accordion-about', {
  firstOpen: true,
  duration: 700,
  showMultiple: false,
  collapse: true,
});
accordionAbout.open(0);
