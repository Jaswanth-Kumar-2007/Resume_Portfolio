// alert("Welcome to KJK Resume Portfolio")

const links = document.querySelectorAll(".link");
const loader = document.getElementById("loader");

const btn = document.getElementById("menu-btn");
const menu = document.getElementById("mobile-menu");

btn.onclick = function(){
    if(menu.style.display === "flex"){
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
}

const texts = [
"Passionate Developer",
"Problem Solver",
"Lifelong Learner"
];

let i = 0;
const el = document.getElementById("mobile-home-text");

setInterval(() => {
    i = (i + 1) % texts.length;
    el.textContent = texts[i];
}, 4000);

loader.style.display = "none";

links.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();

        loader.style.display = "flex";

        const target = link.getAttribute("href");
        const isBlank = link.getAttribute("target") === "_blank";

        setTimeout(() => {
            loader.style.display = "none";

            if (isBlank) {
                window.open(target, "_blank"); 
            }
        }, 2000);
    });
});



