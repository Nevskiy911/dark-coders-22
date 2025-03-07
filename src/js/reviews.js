import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';

import axios from 'axios';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  sliderContainer: document.querySelector('.swiper-wrapper'),
  slider: document.querySelector('.swiper'),
};

const BASE_URL = 'https://portfolio-js.b.goit.study/api';
const END_POINT = '/reviews';

const fetchReviews = async () => {
  try {
    const response = await axios.get(BASE_URL + END_POINT);
    return response.data;
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: `${error}`,
      position: 'topRight',
    });
    return null;
  }
};

const renderError = () => {
  refs.sliderContainer.innerHTML = `<li class="swiper-placeholder">Not found</li>`;
  refs.slider.classList.remove('swiper');
};

const createReviewsMarkup = reviews => {
  return reviews
    .map(
      ({ author, avatar_url, review }) => `
    <li class="reviews-card swiper-slide">
        <img class="reviews-img" src="${avatar_url}" alt="${author}" height="48" />
        <h3 class="reviews-title">${author}</h3>
        <p class="reviews-text">${review}</p>
      </li>
  `
    )
    .join('');
};

const initReviews = async () => {
  const reviews = await fetchReviews();
  if (!reviews || reviews.length === 0) {
    renderError();
    return;
  }

  refs.sliderContainer.innerHTML = createReviewsMarkup(reviews);
};

initReviews();

// --------------------Swiper--------------------------
new Swiper('.swiper', {
  modules: [Navigation, Keyboard, Mousewheel],
  slidesPerView: 1,
  spaceBetween: 16,
  autoHeight: true,
  speed: 700,
  grabCursor: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  // mousewheel: {
  //   sensitivity: 1,
  // },

  breakpoints: {
    768: { slidesPerView: 2 },
    1440: { slidesPerView: 4 },
  },
});
