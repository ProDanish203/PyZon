const menu = document.getElementById("menu");
const navbar = document.getElementById("nav");
const header = document.querySelector("header");

menu.addEventListener("click", ()=> {
    navbar.classList.toggle("active");
    menu.classList.toggle("fa-times");
    menu.classList.toggle("fa-bars");
});

window.addEventListener("click", (e) => {
    if(e.target.id !== "nav" && e.target.id !== "menu" && e.target.id !== "dark"){
        navbar.classList.remove("active");
        menu.classList.remove("fa-times");
        menu.classList.add("fa-bars");
    }
});

window.addEventListener("scroll", ()=> {
    navbar.classList.remove("active");
    menu.classList.remove("fa-times");
    menu.classList.add("fa-bars");
    let Y = window.scrollY;
    if(Y > 0 ){
        header.classList.add("sticky")
    }
    else{
        header.classList.remove("sticky")
    }
});


// Dark Mode

let darkMode = localStorage.getItem("darkmode");
const dark = document.getElementById("dark");
const body = document.querySelector("body");

const enableDarkMode = () => {
    body.classList.add("dark");
    dark.classList.add("fa-sun");
    dark.classList.remove("fa-moon");
    localStorage.setItem("darkmode", "enabled");
}
const disableDarkMode = () => {
    dark.classList.add("fa-moon");
    dark.classList.remove("fa-sun");
    body.classList.remove("dark");
    localStorage.setItem("darkmode", null);
}
if(darkMode === "enabled"){
    enableDarkMode();
}
dark.addEventListener("click", () => {

    darkMode = localStorage.getItem("darkmode");
    if(darkMode !== "enabled"){
        enableDarkMode();
    }else{
        disableDarkMode();
    }
});