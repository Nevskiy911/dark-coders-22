import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Keyboard } from 'swiper/modules';
import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

// Инициализация Swiper
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

// === Аккордеон ===
document.querySelectorAll('.accordion-item-about').forEach((item, index, allItems) => {
  const header = item.querySelector('.accordion-header-about');
  const content = item.querySelector('.accordion-content-about');
  const arrow = header.querySelector('.about-icon-accordion');

  if (index === 0) {
    item.classList.add('active');
    content.style.maxHeight = content.scrollHeight + 'px';
    content.style.opacity = '1';
    content.style.visibility = 'visible';
    arrow.style.transform = 'rotate(180deg)';
  } else {
    content.style.maxHeight = '0';
    content.style.opacity = '0';
    content.style.visibility = 'hidden';
  }

  header.addEventListener('click', () => {
    const isActive = item.classList.contains('active');

    allItems.forEach((otherItem) => {
      if (otherItem !== item && otherItem.classList.contains('active')) {
        const otherContent = otherItem.querySelector('.accordion-content-about');
        const otherArrow = otherItem.querySelector('.about-icon-accordion');

        otherItem.classList.remove('active');
        otherContent.style.maxHeight = '0';
        otherContent.style.opacity = '0';
        setTimeout(() => {
          otherContent.style.visibility = 'hidden';
        }, 300);
        otherArrow.style.transform = 'rotate(0deg)';
      }
    });

    if (isActive) {
      item.classList.remove('active');
      content.style.maxHeight = '0';
      content.style.opacity = '0';
      setTimeout(() => {
        content.style.visibility = 'hidden';
      }, 300);
      arrow.style.transform = 'rotate(0deg)';
    } else {
      item.classList.add('active');
      content.style.maxHeight = content.scrollHeight + 'px';
      content.style.opacity = '1';
      content.style.visibility = 'visible';
      arrow.style.transform = 'rotate(180deg)';
    }
  });
});
