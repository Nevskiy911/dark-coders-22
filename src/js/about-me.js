document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper(".swiper", {
        spaceBetween: 0,
        loop: true,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: ".swiper-button-next",
        },
        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1440: {
                slidesPerView: 6,
            },
        },
        on: {
            slideChangeTransitionEnd: updateFirstSlideColor,
        },
    });

    function updateFirstSlideColor() {
        requestAnimationFrame(() => {
            document.querySelectorAll(".swiper-slide").forEach(slide => {
                slide.style.backgroundColor = "";
                slide.style.color = "white";
            });

            const firstVisibleSlide = document.querySelector(".swiper-slide-active");
            if (firstVisibleSlide) {
                firstVisibleSlide.style.backgroundColor = "#c6e327";
                firstVisibleSlide.style.color = "black";
            }
        });
    }

    updateFirstSlideColor();

    // Открытие/закрытие секций и поворот стрелок
    const accordionItems = document.querySelectorAll(".accordion-item");
    accordionItems.forEach((item, index) => {
        const header = item.querySelector(".accordion-header");
        const content = item.querySelector(".accordion-content");
        const arrow = header.querySelector(".arrow");

        // Скрываем контент всех секций по умолчанию
        content.style.maxHeight = "0";
        arrow.style.transform = "rotate(0)"; // Стрелка вправо по умолчанию

        // Открытие первой секции по умолчанию
        if (index === 0) {
            item.classList.add("active");
            content.style.maxHeight = content.scrollHeight + "px";  // Делаем контент видимым
            arrow.style.transform = "rotate(180deg)"; // Стрелка вниз при открытой секции
        }

        // Добавляем обработчик клика для каждой секции
        header.addEventListener("click", () => {
            // Проверяем, открыта ли текущая секция
            const isActive = item.classList.contains("active");

            // Закрываем все секции
            accordionItems.forEach(item => {
                item.classList.remove("active");
                item.querySelector(".accordion-content").style.maxHeight = "0";
                item.querySelector(".arrow").style.transform = "rotate(0)";
            });

            // Если текущая секция не была открыта, открываем её
            if (!isActive) {
                item.classList.add("active");
                content.style.maxHeight = content.scrollHeight + "px";  // Делаем контент видимым
                arrow.style.transform = "rotate(180deg)"; // Стрелка направлена вниз при открытии
            }
        });
    });

    // Убедитесь, что первая стрелка правильного направления по умолчанию
    const firstArrow = document.querySelector(".accordion-header .arrow");
    if (firstArrow) {
        firstArrow.style.transform = "rotate(180deg)"; // Стрелка вниз для первой секции
    }
});


