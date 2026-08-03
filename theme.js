


const body = document.body;

const toggle = document.getElementById("theme-toggle");

const moon = document.getElementById("moon-icon");

const sun = document.getElementById("sun-icon");


// Load saved theme
const savedTheme = localStorage.getItem("theme");

if(savedTheme==="dark"){

    body.classList.add("dark-mode");

    moon.classList.add("hidden");

    sun.classList.remove("hidden");

}


// Toggle
toggle.addEventListener("click",()=>{

    body.classList.toggle("dark-mode");

    const dark = body.classList.contains("dark-mode");

    if(dark){

        moon.classList.add("hidden");

        sun.classList.remove("hidden");

        localStorage.setItem("theme","dark");

    }else{

        sun.classList.add("hidden");

        moon.classList.remove("hidden");

        localStorage.setItem("theme","light");

    }

});