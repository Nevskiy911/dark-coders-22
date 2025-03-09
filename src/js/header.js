document.addEventListener('DOMContentLoaded', function () {
  // Вибираємо необхідні елементи DOM
  const menuToggle = document.querySelector('.menu-toggle');
  const menuClose = document.querySelector('.menu-close');
  const menu = document.querySelector('.menu');
  const menuOverlay = document.querySelector('.menu-overlay');
  const navLinks = document.querySelectorAll('.navigation-link');
  const orderButtons = document.querySelectorAll('.order-button');
  const body = document.body;

  // Функція для відкриття меню
  function openMenu() {
    menu.classList.add('active');
    menuOverlay.classList.add('active');
    if (window.innerWidth < 768) {
      body.style.overflow = 'hidden';
    }
  }

  // Функція для закриття меню
  function closeMenu() {
    menu.classList.remove('active');
    menuOverlay.classList.remove('active');
    if (window.innerWidth < 768) {
      body.style.overflow = '';
    }
  }

  // Плавний скрол до якірних посилань
  function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
      // Закриваємо меню перед скролом
      closeMenu();

      // Затримка для коректного закриття меню перед скролом
      setTimeout(() => {
        window.scrollTo({
          top: element.offsetTop,
          behavior: 'smooth',
        });
      }, 300);
    }
  }

  // Додаємо обробники подій
  menuToggle.addEventListener('click', openMenu);
  menuClose.addEventListener('click', closeMenu);
  menuOverlay.addEventListener('click', closeMenu);

  // Додаємо обробники для навігаційних посилань
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      smoothScroll(href);
    });
  });

  // Додаємо обробник для кнопки "Order the project"
  orderButtons.forEach(button => {
    orderButtons.addEventListener('click', function (e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      smoothScroll(href);
    });
  });

  // Закриваємо меню при зміні розміру вікна (на випадок, якщо екран змінюється з мобільного на десктопний)
  window.addEventListener('resize', function () {
    if (window.innerWidth > 992 && menu.classList.contains('active')) {
      closeMenu();
    }
  });
});
