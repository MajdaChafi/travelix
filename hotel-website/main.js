//Selector
// let header = document.querySelector('.header');
// let hamburgerMenu = document.querySelector('.hamburger-menu');

// window.addEventListener('scroll', function () {
//     let windowPosition = window.scrollY > 0;
//     header.classList.toggle('active', windowPosition)
// })

// hamburgerMenu.addEventListener('click', function () {
//     header.classList.toggle('menu-open');
// })

((d) => {
    const $hamburgerMenu = d.querySelector(".hamburger-menu"),
    $header = d.querySelector(".header");

    $hamburgerMenu.addEventListener("click", (e) => {
        $hamburgerMenu.firstElementChild.classList.toggle("none");
        $hamburgerMenu.lastElementChild.classList.toggle("none");
        $header.classList.toggle("menu-open");
    });

    d.addEventListener("click", e => {
        if(!e.target.matches(".header a")) return false;

        $hamburgerMenu.firstElementChild.classList.remove("none");
        $hamburgerMenu.lastElementChild.classList.add("none");
        $header.classList.remove("menu-open");
    });
})(document);
