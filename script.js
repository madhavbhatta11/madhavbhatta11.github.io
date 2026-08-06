gsap.registerPlugin(ScrollTrigger);


const swiper = new Swiper(".photoSwiper", {

    touchEventsTarget: "container",

    effect: "coverflow",

    grabCursor: true,

    centeredSlides: true,

    loop: true,

    slidesPerView: 3,       // Show only 3 photos
    spaceBetween: -60,  // Adjust the space between photos

    speed: 2500,

    autoplay: {
        delay: 600,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },

   coverflowEffect:{

    rotate:0,

    stretch:-60,

    depth:400,

    modifier:2,

    scale:.75,

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
// for floating pills
// Floating Pills Animation
const heroGraphic = document.querySelector(".hero-graphic-side");
const pills = document.querySelectorAll(".floating-pill");

const maxDistance = 450; // Detection radius

heroGraphic.addEventListener("mousemove", (e) => {

    pills.forEach((pill) => {

        const rect = pill.getBoundingClientRect();

        const dx = e.clientX - (rect.left + rect.width / 2);
        const dy = e.clientY - (rect.top + rect.height / 2);

        const distance = Math.hypot(dx, dy);

        if (distance < maxDistance) {

            const power = (maxDistance - distance) / maxDistance;

            gsap.to(pill, {
                x: dx * power * 0.45,
                y: dy * power * 0.45,
                duration: 0.18,
                ease: "power3.out"
            });

        } else {

            gsap.to(pill, {
                x: 0,
                y: 0,
                duration: 0.45,
                ease: "power3.out"
            });

        }

    });

});

heroGraphic.addEventListener("mouseleave", () => {

    gsap.to(".floating-pill", {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "elastic.out(1,0.5)"
    });

});
// for typing effect
const typingText = document.getElementById("typing-text");

const words = [
    "Hello Human: Dream, Code, Fail, Learn, Repeat."
];

let i = 0;
let j = 0;
let deleting = false;

function type() {

    if (!deleting) {
        typingText.textContent = words[i].slice(0, ++j);

        if (j === words[i].length) {
            deleting = true;
            setTimeout(type, 1000);
            return;
        }

    } else {

        typingText.textContent = words[i].slice(0, --j);

        if (j === 0) {
            deleting = false;
        }

    }

    setTimeout(type, deleting ? 30 : 120);
}

window.addEventListener("load", type);
// for scroll reveal
gsap.from(".about-container", {
    y: 80,
    opacity: 0,
    duration: 2,
    ease: "power3.out",

    scrollTrigger: {
        trigger: ".about-section",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});

gsap.from(".hero-container", {
    y: 80,
    opacity: 0,
    duration: 1.5,
    ease: "power3.out"
});

gsap.from(".contact-container", {
    y: 80,
    opacity: 0,
    duration: 2,
    ease: "power3.out",

    scrollTrigger: {
        trigger: ".contact-section",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});
gsap.from(".footer-container", {
    y: 80,
    opacity: 0,
    duration: 2,
    ease: "power3.out",

    scrollTrigger: {
        trigger: ".footer",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});
// for counter animation
const counters = document.querySelectorAll(".counter");

ScrollTrigger.create({
    trigger: ".about-section",
    start: "top 75%",

    onEnter: () => {

        counters.forEach(counter => {

            const target = +counter.dataset.target;

            gsap.to(counter, {

                innerText: target,

                duration: 2,

                snap: { innerText: 1 },

                ease: "power2.out",

                onUpdate: function () {

                    counter.innerText = Math.ceil(counter.innerText);

                },

                onComplete: function () {

                    counter.innerText += "+";

                }

            });

        });

    }

});
// for projects animation
// gsap.from(".project-card", {
//     y: 80,
//     opacity: 0,
//     duration: 1,
//     stagger: 0.2,
//     ease: "power3.out",

//     scrollTrigger: {
//         trigger: ".projects-section",
//         start: "top 75%",
//         toggleActions: "play none none none"
//     }
// });