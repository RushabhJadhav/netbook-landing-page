const hamburgerMenu = document.getElementById("hamburger-menu");

const mobileMenu = document.getElementById("mobile-nav");

const menuBars = document.querySelectorAll("hamburger-menu");

let clicked = false;

let menuOpen = false;

hamburgerMenu.addEventListener("click", function() {
    if(!clicked) {
        mobileMenu.style.transform = "translateX(0)";
        clicked = true;
    } else {
        mobileMenu.style.transform = "translateX(100%)";
        clicked = false;
    }

    if(!menuOpen) {
        hamburgerMenu.classList.add("open");
        menuOpen = true;
    } else {
        hamburgerMenu.classList.remove("open");
        menuOpen = false;
    }
});