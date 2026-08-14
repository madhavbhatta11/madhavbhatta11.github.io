// ======================================================
// SHARED SCRIPT.JS
// Works across homepage + study materials + sub-pages
// ======================================================


// ======================================================
// PAGE READY
// ======================================================

document.addEventListener("DOMContentLoaded", () => {

    // ==================================================
    // GSAP
    // ==================================================

    if (typeof gsap !== "undefined") {

        if (typeof ScrollTrigger !== "undefined") {
            gsap.registerPlugin(ScrollTrigger);
        }

        // ----------------------------------------------
        // Hero animation
        // Only runs if hero exists
        // ----------------------------------------------

        const heroContainer = document.querySelector(".hero-container");

        if (heroContainer) {

            gsap.from(heroContainer, {
                y: 80,
                opacity: 0,
                duration: 1.5,
                ease: "power3.out"
            });

        }


        // ----------------------------------------------
        // About animation
        // ----------------------------------------------

        const aboutContainer = document.querySelector(".about-container");
        const aboutSection = document.querySelector(".about-section");

        if (aboutContainer && aboutSection && typeof ScrollTrigger !== "undefined") {

            gsap.from(aboutContainer, {
                y: 80,
                opacity: 0,
                duration: 2,
                ease: "power3.out",

                scrollTrigger: {
                    trigger: aboutSection,
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            });

        }


        // ----------------------------------------------
        // Contact animation
        // ----------------------------------------------

        const contactContainer = document.querySelector(".contact-container");
        const contactSection = document.querySelector(".contact-section");

        if (contactContainer && contactSection && typeof ScrollTrigger !== "undefined") {

            gsap.from(contactContainer, {
                y: 80,
                opacity: 0,
                duration: 2,
                ease: "power3.out",

                scrollTrigger: {
                    trigger: contactSection,
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            });

        }


        // ----------------------------------------------
        // Footer animation
        // ----------------------------------------------

        const footerContainer = document.querySelector(".footer-container");
        const footer = document.querySelector(".footer");

        if (footerContainer && footer && typeof ScrollTrigger !== "undefined") {

            gsap.from(footerContainer, {
                y: 80,
                opacity: 0,
                duration: 2,
                ease: "power3.out",

                scrollTrigger: {
                    trigger: footer,
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            });

        }

    }


    // ==================================================
    // SWIPER
    // Only initialize when a Swiper exists on the page
    // ==================================================

    const photoSwiper = document.querySelector(".photoSwiper");

    if (photoSwiper && typeof Swiper !== "undefined") {

        new Swiper(photoSwiper, {

            touchEventsTarget: "container",

            effect: "coverflow",

            grabCursor: true,

            centeredSlides: true,

            loop: true,

            slidesPerView: 3,

            spaceBetween: -60,

            speed: 1000,

            autoplay: {
                delay: 1000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },

            coverflowEffect: {
                rotate: 0,
                stretch: -60,
                depth: 400,
                modifier: 2,
                scale: 0.75,
                slideShadows: false,
            },

            navigation: {
                nextEl: photoSwiper.querySelector(".swiper-button-next"),
                prevEl: photoSwiper.querySelector(".swiper-button-prev"),
            }

        });

    }


    // ==================================================
    // MOBILE NAVIGATION
    // ==================================================

    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

    if (hamburger && navMenu) {

        hamburger.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });

    }


    // ==================================================
    // NAVIGATION LINKS
    // ==================================================

    const navLinks = document.querySelectorAll(".nav-link");

    if (navLinks.length > 0 && navMenu) {

        navLinks.forEach(link => {

            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
            });

        });

    }


    // ==================================================
    // ACTIVE NAVIGATION ON SCROLL
    // Only meaningful on homepage
    // ==================================================

    const sections = document.querySelectorAll("section[id], header[id]");

    if (sections.length > 0 && navLinks.length > 0) {

        window.addEventListener("scroll", () => {

            let current = "";

            sections.forEach(section => {

                const sectionTop = section.offsetTop - 120;
                const sectionHeight = section.offsetHeight;

                if (
                    window.scrollY >= sectionTop &&
                    window.scrollY < sectionTop + sectionHeight
                ) {

                    current = section.getAttribute("id");

                }

            });


            navLinks.forEach(link => {

                link.classList.remove("active");

                const href = link.getAttribute("href");

                if (href === "#" + current) {
                    link.classList.add("active");
                }

            });

        });

    }


    // ==================================================
    // FLOATING PILLS
    // Only homepage
    // ==================================================

    const heroGraphic = document.querySelector(".hero-graphic-side");
    const pills = document.querySelectorAll(".floating-pill");

    const maxDistance = 450;

    if (
        heroGraphic &&
        pills.length > 0 &&
        typeof gsap !== "undefined"
    ) {

        heroGraphic.addEventListener("mousemove", (e) => {

            pills.forEach((pill) => {

                const rect = pill.getBoundingClientRect();

                const dx =
                    e.clientX - (rect.left + rect.width / 2);

                const dy =
                    e.clientY - (rect.top + rect.height / 2);

                const distance = Math.hypot(dx, dy);

                if (distance < maxDistance) {

                    const power =
                        (maxDistance - distance) / maxDistance;

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

            gsap.to(pills, {

                x: 0,

                y: 0,

                duration: 0.6,

                ease: "elastic.out(1,0.5)"

            });

        });

    }


    // ==================================================
    // HOME TYPING EFFECT
    // ==================================================

    const typingText = document.getElementById("typing-text");

    if (typingText) {

        const words = [
            "Hello Human:Dream, Code, Fail, Learn, Repeat."
        ];

        let i = 0;
        let j = 0;
        let deleting = false;


        function type() {

            if (!deleting) {

                typingText.textContent =
                    words[i].slice(0, ++j);


                if (j === words[i].length) {

                    deleting = true;

                    setTimeout(type, 1000);

                    return;

                }

            } else {

                typingText.textContent =
                    words[i].slice(0, --j);


                if (j === 0) {

                    deleting = false;

                }

            }


            setTimeout(
                type,
                deleting ? 20 : 100
            );

        }


        type();

    }


// ================= STUDY MATERIALS TYPING EFFECT =================

const studyTypingText = document.getElementById("study-typing-text");

if (studyTypingText) {

    const studyMessage =
        "Independent educational resource for  students; materials are provided for non-commercial educational purposes. We do not claim ownership of third-party content; all rights remain with their respective owners. Rights holders may contact us regarding content for review or removal.";

    let studyIndex = 0;

    function studyTyping() {

        if (studyIndex < studyMessage.length) {

            studyTypingText.textContent =
                studyMessage.substring(0, studyIndex + 1);

            studyIndex++;

            setTimeout(studyTyping, 5);

        } else {

            // Stop here — text stays visible permanently
            studyTypingText.textContent = studyMessage;
        }
    }

    studyTyping();
}


    // ==================================================
    // COUNTER ANIMATION
    // Only homepage
    // ==================================================

    const counters = document.querySelectorAll(".counter");
    const counterSection = document.querySelector(".about-section");

    if (
        counters.length > 0 &&
        counterSection &&
        typeof gsap !== "undefined" &&
        typeof ScrollTrigger !== "undefined"
    ) {

        ScrollTrigger.create({

            trigger: counterSection,

            start: "top 75%",

            once: true,

            onEnter: () => {

                counters.forEach(counter => {

                    const target =
                        Number(counter.dataset.target);


                    gsap.to(counter, {

                        innerText: target,

                        duration: 2,

                        snap: {
                            innerText: 1
                        },

                        ease: "power2.out",

                        onUpdate: function () {

                            counter.innerText =
                                Math.ceil(
                                    Number(counter.innerText)
                                );

                        },

                        onComplete: function () {

                            counter.innerText += "+";

                        }

                    });

                });

            }

        });

    }


    // ==================================================
    // BACK TO TOP
    // ==================================================

    const backToTop =
        document.getElementById("backToTop");

    if (backToTop) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 400) {

                backToTop.classList.add("show");

            } else {

                backToTop.classList.remove("show");

            }

        });


        backToTop.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }


    // ==================================================
    // EMAILJS
    // Only initialize when contact form exists
    // ==================================================

    const contactForm =
        document.getElementById("contact-form");


    if (
        contactForm &&
        typeof emailjs !== "undefined"
    ) {

        emailjs.init("gLwXdXEKzRBT3cp7z");


        contactForm.addEventListener(
            "submit",
            function (e) {

                e.preventDefault();


                const submitBtn =
                    contactForm.querySelector("button");


                if (!submitBtn) return;


                submitBtn.disabled = true;

                submitBtn.innerText = "Sending...";


                emailjs.sendForm(

                    "service_mjpbdjb",

                    "template_rolr5wf",

                    this

                )

                .then(() => {

                    alert(
                        "✅ Message sent successfully!"
                    );


                    contactForm.reset();


                    submitBtn.disabled = false;

                    submitBtn.innerText =
                        "Send Message";

                })

                .catch((error) => {

                    console.error(
                        "EmailJS Error:",
                        error
                    );


                    alert(
                        error.text ||
                        "Failed to send message. Please try again."
                    );


                    submitBtn.disabled = false;

                    submitBtn.innerText =
                        "Send Message";

                });

            }
        );

    }


    // ==================================================
    // WHATSAPP TYPING
    // ==================================================

    const whatsappText =
        document.getElementById("whatsapp-typing");


    if (whatsappText) {

        const messages = [

            "Have an Idea?",

            "Let's discuss!"

        ];


        let messageIndex = 0;

        let letterIndex = 0;

        let deleting = false;


        function whatsappTyping() {

            const current =
                messages[messageIndex];


            if (!deleting) {

                whatsappText.textContent =
                    current.substring(
                        0,
                        letterIndex
                    );


                letterIndex++;


                if (
                    letterIndex >
                    current.length
                ) {

                    deleting = true;

                    setTimeout(
                        whatsappTyping,
                        1500
                    );

                    return;

                }

            } else {

                whatsappText.textContent =
                    current.substring(
                        0,
                        letterIndex
                    );


                letterIndex--;


                if (letterIndex < 0) {

                    deleting = false;

                    messageIndex =
                        (messageIndex + 1) %
                        messages.length;

                }

            }


            setTimeout(

                whatsappTyping,

                deleting ? 40 : 100

            );

        }


        whatsappTyping();

    }

});
// ================= PROJECT SEE MORE =================

document.querySelectorAll(".see-more").forEach(button => {

    button.addEventListener("click", () => {

        const description = button.closest(".project-description");

        description.classList.toggle("expanded");

        if (description.classList.contains("expanded")) {
            button.textContent = " Show less";
        } else {
            button.textContent = "... See more";
        }

    });

});

// ================= VIEW MORE / SHOW LESS PROJECTS =================

const projectsToggle = document.getElementById("projectsToggle");
const projectGrid = document.querySelector(".project-grid");
const projectsSection = document.getElementById("projects");

if (projectsToggle && projectGrid && projectsSection) {

    projectsToggle.addEventListener("click", function () {

        const expanded = projectGrid.classList.toggle("show-all");

        const icon = this.querySelector("span:first-child");
        const text = this.querySelector(".toggle-text");

        if (expanded) {

            // SHOW ALL
            icon.textContent = "−";
            text.textContent = "Show Less Projects";

        } else {

            // SHOW ONLY FIRST 3
            icon.textContent = "+";
            text.textContent = "View More Projects";

            // Return smoothly to the Projects section
            setTimeout(() => {

                const sectionPosition =
                    projectsSection.getBoundingClientRect().top +
                    window.pageYOffset -
                    80;

                window.scrollTo({
                    top: sectionPosition,
                    behavior: "smooth"
                });

            }, 100);
        }

    });

}

/* =========================================================
   EDUCATION TIMELINE ANIMATION
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const educationYears = document.querySelectorAll(".engineering-year");

    if (!educationYears.length) return;

    const educationObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    educationYears.forEach((year, index) => {

                        setTimeout(() => {
                            year.classList.add("show");
                        }, index * 150);

                    });

                    observer.disconnect();
                }

            });

        },
        {
            threshold: 0.15
        }
    );

    const engineeringTimeline =
        document.querySelector(".engineering-timeline");

    if (engineeringTimeline) {
        educationObserver.observe(engineeringTimeline);
    }

});