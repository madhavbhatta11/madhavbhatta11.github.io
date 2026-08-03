const button = document.getElementById("theme-toggle");

if(localStorage.getItem("theme")==="dark"){

    document.body.classList.add("dark-mode");

    button.textContent="☀️";

}

button.addEventListener("click",()=>{

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){

        localStorage.setItem("theme","dark");

        button.textContent="☀️";

    }else{

        localStorage.setItem("theme","light");

        button.textContent="🌙";

    }

});

