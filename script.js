alert("Welcome to KJK Resume Portfolio")

const links = document.querySelectorAll("a");
const loader = document.getElementById("loader");

loader.style.display = "none";

links.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        loader.style.display = "flex";
        setTimeout(()=>{
            loader.style.display = "none";
        },2000)
        console.log("Clicked");
    });
});

