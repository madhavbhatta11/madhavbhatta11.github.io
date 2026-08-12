// ================= THEME PERSISTENCE =================

const body = document.body;

const toggle = document.getElementById("theme-toggle");
const moon = document.getElementById("moon-icon");
const sun = document.getElementById("sun-icon");

// ================= LOAD SAVED THEME =================

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    body.classList.add("dark-mode");

    if (moon) moon.classList.add("hidden");
    if (sun) sun.classList.remove("hidden");
} else {
    body.classList.remove("dark-mode");

    if (moon) moon.classList.remove("hidden");
    if (sun) sun.classList.add("hidden");
}


// ================= THEME TOGGLE =================

if (toggle) {

    toggle.addEventListener("click", () => {

        body.classList.toggle("dark-mode");

        const dark = body.classList.contains("dark-mode");

        if (dark) {

            if (moon) moon.classList.add("hidden");
            if (sun) sun.classList.remove("hidden");

            localStorage.setItem("theme", "dark");

        } else {

            if (sun) sun.classList.add("hidden");
            if (moon) moon.classList.remove("hidden");

            localStorage.setItem("theme", "light");
        }

    });

}