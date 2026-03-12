// alert("Welcome to KJK Resume Portfolio")

const links = document.querySelectorAll(".link");
const loader = document.getElementById("loader");

const mobile_insta = document.getElementById("mobile-instagram");
const mobile_git = document.getElementById("mobile-github");
const mobile_linked = document.getElementById("mobile-linkedin");

const btn = document.getElementById("menu-btn");
const menu = document.getElementById("mobile-menu");

btn.onclick = function(){
    menu.classList.toggle("show");
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




mobile_insta.addEventListener("click",(e)=>{
    e.preventDefault();
    window.open("https://instagram.com/kjk._.06","_blank");
})
mobile_git.addEventListener("click",(e)=>{
    e.preventDefault();
    window.open("https://github.com/Jaswanth-Kumar-2007","_blank");
})
mobile_linked.addEventListener("click",(e)=>{
    e.preventDefault();
    window.open("https://linkedin.com/in/jaswanth-kumar-kamireddi-86ba09373","_blank");
})




