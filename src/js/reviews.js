import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';

import axios from 'axios';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  sliderContainer: document.querySelector('.swiper-wrapper-reviews'),
  slider: document.querySelector('.swiper-reviews'),
  reviewsSection: document.querySelector('#reviews'),
};

const BASE_URL = 'https://portfolio-js.b.goit.study/api';
const END_POINT = '/reviews';

const fetchReviews = async () => {
  try {
    const response = await axios.get(BASE_URL + END_POINT);
    return response.data;
  } catch (error) {
    observeErrorToast();
    return null;
  }
};

const renderError = () => {
  refs.sliderContainer.innerHTML = `<li class="swiper-placeholder">Not found</li>`;
  refs.slider.classList.remove('swiper-reviews');
};

const errorToast = () => {
  iziToast.error({
    title: 'Error',
    message: `Failed to fetch reviews. Please try again later.`,
    position: 'bottomRight',
    timeout: 3000,
  });
};

const observeErrorToast = () => {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          errorToast();
          observer.disconnect();
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  observer.observe(refs.reviewsSection);
};

const createReviewsMarkup = reviews => {
  return reviews
    .map(
      ({ author, avatar_url, review }) => `
    <li class="reviews-card swiper-slide">
        <img class="reviews-img" src="${avatar_url}" alt="${author}" />
        <h3 class="reviews-title">${author}</h3>
        <p class="reviews-text">${review}</p>
      </li>
  `
    )
    .join('');
};

const setDynamicHeight = () => {
  const slides = document.querySelectorAll('.reviews-card');
  let maxHeight = 0;

  const observer = new IntersectionObserver(
    entries => {
      const visibleSlides = entries.filter(entry => entry.isIntersecting);

      if (visibleSlides.length > 1) {
        slides.forEach(slide => (slide.style.height = 'auto'));

        maxHeight = Math.max(
          ...visibleSlides.map(entry => entry.target.offsetHeight)
        );

        visibleSlides.forEach(entry => {
          entry.target.style.height = `${maxHeight}px`;
        });
      } else {
        slides.forEach(slide => (slide.style.height = 'auto'));
      }
    },
    { threshold: 0.5 }
  );

  slides.forEach(slide => observer.observe(slide));
};

const initReviews = async () => {
  const reviews = await fetchReviews();
  if (!reviews || reviews.length === 0) {
    renderError();
    return;
  }

  refs.sliderContainer.innerHTML = createReviewsMarkup(reviews);

  new Swiper('.swiper-reviews', {
    modules: [Navigation, Keyboard, Mousewheel],
    slidesPerView: 1,
    spaceBetween: 16,
    speed: 500,
    grabCursor: true,

    navigation: {
      nextEl: '.swiper-button-reviews-next',
      prevEl: '.swiper-button-reviews-prev',
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

    mousewheel: {
      sensitivity: 1,
    },

    breakpoints: {
      320: { slidesPerView: 1, autoHeight: true },
      768: { slidesPerView: 2, autoHeight: false },
      1440: { slidesPerView: 4 },
    },

    on: {
      init: setDynamicHeight,
      slideChange: setDynamicHeight,
    },
  });
};

initReviews();
