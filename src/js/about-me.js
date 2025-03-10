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
    init: updateFirstSlideColor, // Устанавливаем цвет сразу при инициализации
    slideChangeTransitionEnd: updateFirstSlideColor,
  },
});

// Функция обновления цвета первого видимого слайда
function updateFirstSlideColor() {
  document.querySelectorAll('.swiper-slide-about').forEach(slide => {
    slide.style.backgroundColor = ''; // Сброс цвета
  });

  const firstVisibleSlide = document.querySelector('.swiper-slide-active');
  if (firstVisibleSlide) {
    firstVisibleSlide.style.backgroundColor = '#c6e327';
  }
}

// Запускаем Swiper и применяем цвет к первому слайду
swiper.init();

// === Аккордеон ===
document.querySelectorAll('.accordion-item-about').forEach((item, index) => {
  const header = item.querySelector('.accordion-header-about');
  const content = item.querySelector('.accordion-content-about');
  const arrow = header.querySelector('.about-icon-accordion');

  if (index === 0) {
    item.classList.add('active');
    content.style.maxHeight = content.scrollHeight + 'px';
    arrow.style.transform = 'rotate(180deg)';
  } else {
    content.style.maxHeight = '0';
  }

  header.addEventListener('click', () => {
    const isActive = item.classList.toggle('active');

    content.style.maxHeight = isActive ? content.scrollHeight + 'px' : '0';
    arrow.style.transform = isActive ? 'rotate(180deg)' : 'rotate(0deg)';
  });
});
