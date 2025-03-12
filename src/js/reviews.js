import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Keyboard } from 'swiper/modules';

import axios from 'axios';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  sliderContainer: document.querySelector('.swiper-wrapper-reviews'),
  slider: document.querySelector('.swiper-reviews'),
  reviewsSection: document.querySelector('#reviews'),
  btnBlock: document.querySelector('.btn-wrapper-reviews'),
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
  refs.btnBlock.classList.add('hidden-btn');
  refs.reviewsSection.style.paddingBottom = '64px';
};

const errorToast = () => {
  iziToast.error({
    title: 'Error',
    message: `Failed to fetch reviews. Please try again later.`,
    position: 'bottomRight',
    timeout: 4000,
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

  slides.forEach(slide => (slide.style.height = 'auto'));

  const maxHeight = Math.max(
    ...Array.from(slides, slide => slide.offsetHeight)
  );

  slides.forEach(slide => (slide.style.height = `${maxHeight}px`));
};

const initReviews = async () => {
  const reviews = await fetchReviews();
  if (!reviews || reviews.length === 0) {
    renderError();
    return;
  }

  refs.sliderContainer.innerHTML = createReviewsMarkup(reviews);

  new Swiper('.swiper-reviews', {
    modules: [Navigation, Keyboard],
    slidesPerView: 1,
    spaceBetween: 16,
    speed: 500,
    grabCursor: true,

    navigation: {
      nextEl: '.reviews-btn-next',
      prevEl: '.reviews-btn-prev',
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

    breakpoints: {
      320: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1440: { slidesPerView: 4 },
    },

    on: {
      init: setDynamicHeight,
      slideChange: setDynamicHeight,
    },
  });
};

initReviews();
