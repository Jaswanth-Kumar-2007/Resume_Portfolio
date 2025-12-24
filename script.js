alert("Welcome to KJK Resume Portfolio")

const links = document.querySelectorAll("a");
const loader = document.getElementById("loader");

loader.style.display = "none";

links.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();   // stop immediate jump

        loader.style.display = "flex";

        const target = link.getAttribute("href");

        setTimeout(() => {
            loader.style.display = "none";
            if (target.startsWith("#")) {
                document.querySelector(target).scrollIntoView({ behavior: "smooth" });
            } else {
                window.location.href = target;
            }
        }, 2000);
    });
});


