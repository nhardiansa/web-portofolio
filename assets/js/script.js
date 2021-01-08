const button = document.querySelector(".icon button")
const arrow1 = document.querySelector(".icon button svg.arrow1")
const arrow2 = document.querySelector(".icon button svg.arrow2")

const menu = document.querySelector(".menu");

const navbar = document.querySelector("nav");

button.addEventListener("click", ()=>{
    arrow1.classList.toggle("up");
    arrow2.classList.toggle("down");
    menu.classList.toggle("click");
})

window.addEventListener("scroll", () => {
    
    navbar.classList.toggle("sticky",window.scrollY > 0);

})