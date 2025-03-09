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
            320: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1440: { slidesPerView: 6 },
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

    const accordionItems = document.querySelectorAll(".accordion-item");

    accordionItems.forEach((item, index) => {
        const header = item.querySelector(".accordion-header");
        const content = item.querySelector(".accordion-content");
        const arrow = header.querySelector(".arrow");


        content.style.overflow = "hidden";
        content.style.transition = "max-height 0.3s ease-in-out";

        if (index === 0) {

            item.classList.add("active");
            content.style.maxHeight = content.scrollHeight + "px";
            arrow.style.transform = "rotate(180deg)";
        } else {

            content.style.maxHeight = "0";
            arrow.style.transform = "rotate(0deg)";
        }

        header.addEventListener("click", () => {
            const isActive = item.classList.contains("active");

            if (isActive) {
                item.classList.remove("active");
                content.style.maxHeight = "0";
                arrow.style.transform = "rotate(0deg)";
            } else {
                item.classList.add("active");
                content.style.maxHeight = content.scrollHeight + "px";
                arrow.style.transform = "rotate(180deg)";
            }
        });
    });
});


