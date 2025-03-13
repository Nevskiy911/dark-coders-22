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

  let isMenuOpen = false;

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
      }
      isMenuOpen = true;
    } else {
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

  function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
      closeMenu();

      setTimeout(() => {
        window.scrollTo({
          top: element.offsetTop,
          behavior: 'smooth',
        });
      }, 300);
    }
  }

  menuToggle.addEventListener('click', toggleMenu);
  menuCloseMobile.addEventListener('click', closeMenu);
  menuOverlay.addEventListener('click', closeMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      smoothScroll(href);
    });
  });

  orderButtons.forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      smoothScroll(href);
    });
  });

  window.addEventListener('resize', function () {
    if (isMenuOpen) {
      closeMenu();
    }
  });
});
