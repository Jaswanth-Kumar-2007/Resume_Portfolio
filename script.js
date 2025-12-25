alert("Welcome to KJK Resume Portfolio")

const links = document.querySelectorAll(".link");
const loader = document.getElementById("loader");

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



