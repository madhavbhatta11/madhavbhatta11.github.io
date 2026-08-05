const swiper = new Swiper(".photoSwiper", {

    effect: "coverflow",

    grabCursor: true,

    centeredSlides: true,

    loop: true,

    slidesPerView: 3,       // Show only 3 photos
    spaceBetween: -40,  // Adjust the space between photos

    speed: 1200,

    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },

   coverflowEffect:{

    rotate:0,

    stretch:-60,

    depth:220,

    modifier:2,

    scale:.85,

    slideShadows:false,

},

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

});

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// ================= Active Navigation on Scroll =================

const sections = document.querySelectorAll("section[id], header[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});