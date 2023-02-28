const irArriba = document.querySelector(".ir-arriba");

irArriba.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
});

window.addEventListener("scroll", () => {
    if (window.scrollY < 500) {
        irArriba.style.right = -100 + "px";
    } else {
        irArriba.style.right = 5 + "px";
    }
});