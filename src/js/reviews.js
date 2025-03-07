import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Keyboard } from 'swiper/modules';

import axios from 'axios';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  sliderContainer: document.querySelector('.swiper-wrapper'),
};

// --------------------Axios---------------------------

const BASE_URL = 'https://portfolio-js.b.goit.study/api';
const END_POINT = '/reviews';

const fetchReviews = async () => {
  try {
    const response = await axios.get(BASE_URL + END_POINT);
    return response.data;
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Failed to fetch reviews. Please try again later.',
      position: 'topRight',
    });
    return null;
  }
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
    return;
  }

  refs.sliderContainer.innerHTML = createReviewsMarkup(reviews);
};

initReviews();

// --------------------Swiper--------------------------
new Swiper('.swiper', {
  modules: [Navigation, Keyboard],
  slidesPerView: 1,
  spaceBetween: 16,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  breakpoints: {
    365: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1280: { slidesPerView: 4 },
  },
});
