
const menuToggle = document.querySelector('#menu-toggle');
const mobileNavContainer = document.querySelector('#mobile-nav');

menuToggle.addEventListener("click", (evt) => {
    console.log("click");
    menuToggle.classList.toggle('menu-icon-active');
    mobileNavContainer.classList.toggle('mobile-nav__active');
})

const toggleBackground = document.getElementsByClassName("mobile-nav__item");
const arrayToggleBackground = Array.from(toggleBackground);

arrayToggleBackground.forEach((item) => {
    item.addEventListener("click", (evt) => {
        arrayToggleBackground.forEach((element) => {
            element.classList.remove("mobile-nav__item-active");
        })
        item.classList.add('mobile-nav__item-active');
    })
})