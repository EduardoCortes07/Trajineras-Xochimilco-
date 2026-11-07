document.addEventListener("DOMContentLoaded", function () {

    console.log("JavaScript funcionando");

    const itemsGaleria =
        document.querySelectorAll(".galeria-item");

    const lightbox =
        document.getElementById("lightbox");

    const lightboxImagen =
        document.getElementById("lightboxImagen");

    const lightboxTitulo =
        document.getElementById("lightboxTitulo");

    const lightboxContador =
    document.getElementById("lightboxContador");

    const botonCerrar =
        document.getElementById("lightboxCerrar");

    const botonAnterior =
        document.getElementById("lightboxAnterior");

    const botonSiguiente =
        document.getElementById("lightboxSiguiente");

    console.log(
        "Tarjetas encontradas:",
        itemsGaleria.length
    );

    let indiceActual = 0;


  function mostrarImagen() {

    const imagen =
        itemsGaleria[indiceActual]
            .querySelector(".galeria-img");

    lightboxImagen.src = imagen.src;
    lightboxImagen.alt = imagen.alt;

    lightboxTitulo.textContent =
        imagen.alt || "Trajineras Xochimilco";

    lightboxContador.textContent =
        `${indiceActual + 1} / ${itemsGaleria.length}`;

    lightboxImagen.classList.remove(
        "lightbox-imagen-cambio"
    );

    void lightboxImagen.offsetWidth;

    lightboxImagen.classList.add(
        "lightbox-imagen-cambio"
    );

}


    function abrirLightbox(indice) {

        indiceActual = indice;

        mostrarImagen();

        lightbox.classList.add("activo");

        document.body.classList.add(
            "lightbox-abierto"
        );

    }


    function cerrarLightbox() {

        lightbox.classList.remove("activo");

        document.body.classList.remove(
            "lightbox-abierto"
        );

    }


    function siguienteImagen() {

        indiceActual++;

        if (indiceActual >= itemsGaleria.length) {
            indiceActual = 0;
        }

        mostrarImagen();

    }


    function anteriorImagen() {

        indiceActual--;

        if (indiceActual < 0) {
            indiceActual = itemsGaleria.length - 1;
        }

        mostrarImagen();

    }


    itemsGaleria.forEach(function (item, indice) {

        item.addEventListener("click", function () {

            console.log(
                "Tarjeta seleccionada:",
                indice
            );

            abrirLightbox(indice);

        });

    });


    botonCerrar.addEventListener(
        "click",
        cerrarLightbox
    );


    botonSiguiente.addEventListener(
        "click",
        siguienteImagen
    );


    botonAnterior.addEventListener(
        "click",
        anteriorImagen
    );


    lightbox.addEventListener(
        "click",
        function (evento) {

            if (evento.target === lightbox) {
                cerrarLightbox();
            }

        }
    );


    document.addEventListener(
        "keydown",
        function (evento) {

            if (
                !lightbox.classList.contains(
                    "activo"
                )
            ) {
                return;
            }

            if (evento.key === "Escape") {
                cerrarLightbox();
            }

            if (evento.key === "ArrowRight") {
                siguienteImagen();
            }

            if (evento.key === "ArrowLeft") {
                anteriorImagen();
            }

        }
    );

});
AOS.init({
    duration: 800,
    once: true
});
// ===== NAVBAR INTELIGENTE =====

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        navbar.classList.add("navbar-scroll");
    } else {
        navbar.classList.remove("navbar-scroll");
    }
});
// ===== BOTÓN VOLVER ARRIBA =====

const btnVolverArriba = document.getElementById("btnVolverArriba");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        btnVolverArriba.classList.add("mostrar");
    } else {
        btnVolverArriba.classList.remove("mostrar");
    }
});
// ===== REGRESAR AL INICIO =====

btnVolverArriba.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});