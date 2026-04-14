// Archivo: boton.js

// Función para mostrar/ocultar el botón "Ir Arriba"
function toggleIrArriba() {
    const irArriba = document.querySelector(".ir-arriba");
    if (window.scrollY > 200) {
        irArriba.style.display = "block";
    } else {
        irArriba.style.display = "none";
    }
}

// Función para desplazar la página hacia arriba
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Desplazamiento suave
    });
}

// Evento al cargar la página y al hacer scroll
window.addEventListener('load', toggleIrArriba);
window.addEventListener('scroll', toggleIrArriba);

// Evento al hacer clic en el botón
const irArriba = document.querySelector(".ir-arriba");
irArriba.addEventListener('click', scrollToTop);