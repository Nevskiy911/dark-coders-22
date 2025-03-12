document.addEventListener('DOMContentLoaded', function () {
  // Вибираємо необхідні елементи DOM
  const menuToggle = document.querySelector('.menu-toggle');
  const menuCloseMobile = document.querySelector('.menu-mobile .menu-close');
  const menuMobile = document.querySelector('.menu-mobile');
  const menuDesktop = document.querySelector('.menu-desktop');
  const menuOverlay = document.querySelector('.menu-overlay');
  const navLinks = document.querySelectorAll('.navigation-link');
  const orderButtons = document.querySelectorAll('.order-button');
  const body = document.body;

  let isMenuOpen = false; // Змінна для відстеження відкриття меню

  // Функція для перемикання меню (відкриття/закриття)
  function toggleMenu() {
    if (!isMenuOpen) {
      // Відкриваємо меню
      if (window.innerWidth < 768) {
        menuMobile.classList.add('active');
        menuOverlay.style.display = 'block';
        menuOverlay.classList.add('active');
        body.style.overflow = 'hidden';
      } else {
        menuDesktop.classList.add('active');
        // Не показуємо overlay для десктопної версії
      }
      isMenuOpen = true;
    } else {
      // Закриваємо меню
      if (window.innerWidth < 768) {
        menuMobile.classList.remove('active');
        menuOverlay.classList.remove('active');
        setTimeout(() => {
          menuOverlay.style.display = 'none';
        }, 300);
        body.style.overflow = '';
      } else {
        menuDesktop.classList.remove('active');
      }
      isMenuOpen = false;
    }
  }

  // Функція для закриття меню
  function closeMenu() {
    if (isMenuOpen) {
      menuMobile.classList.remove('active');
      menuDesktop.classList.remove('active');
      menuOverlay.classList.remove('active');
      setTimeout(() => {
        menuOverlay.style.display = 'none';
      }, 300);
      body.style.overflow = '';
      isMenuOpen = false;
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
  menuToggle.addEventListener('click', toggleMenu); // Кнопка Menu і відкриває, і закриває
  menuCloseMobile.addEventListener('click', closeMenu);
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
    button.addEventListener('click', function (e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      smoothScroll(href);
    });
  });

  // Закриваємо меню при зміні розміру вікна
  window.addEventListener('resize', function () {
    if (isMenuOpen) {
      closeMenu();
    }
  });
});
