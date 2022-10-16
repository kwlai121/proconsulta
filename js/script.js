
$(document).ready(function(){
    $("#satisfacer").hover(
        function() {$(this).attr("src","img/satisfacer.png");},
        function() {$(this).attr("src","img/satisfacer.jpg");
    });
});

$(document).ready(function(){
    $("#liderazgo").hover(
        function() {$(this).attr("src","img/liderazgo.png");},
        function() {$(this).attr("src","img/liderazgo.jpg");
    });
});

$(document).ready(function(){
    $("#innovacion").hover(
        function() {$(this).attr("src","img/innovacion.png");},
        function() {$(this).attr("src","img/innovacion.jpg");
    });
});



// Carousel control

let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 2
    let next = el.nextElementSibling

    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})


// Carousel listener: revisa cada vez que se mueve el carousel.
// pinta la barra
const myCarousel = document.getElementById('recipeCarousel')
myCarousel.addEventListener('slide.bs.carousel', event => {
  var children = event.target.childNodes[1].childNodes;
    for(child in children){
        if (children[child].tagName == 'DIV' && children[child].className.includes("active")) {
            thestring = children[child].className.substring(18, 19);
            pintarBarraCarousel(parseInt(thestring));
        }
    }
})

function pintarBarraCarousel(barLevel) {
    var elemento = document.querySelector(".scroll-line");
    elemento.style.marginLeft = ((barLevel-1) * 40) + "px";
}


document.getElementById("control-carousel-left").classList.add("control-carousel-click");
document.getElementById("control-carousel-right").classList.add("control-carousel-click-reverse");
// onclick botones carousel, cambia color
document.getElementById("control-carousel-left").addEventListener('click', function (e) {
    e.target.classList.add("control-carousel-click"); // control-carousel-click-reverse
    elemento = document.getElementById("control-carousel-right");
    elemento.classList.add("control-carousel-click-reverse"); // make gray
    elemento.classList.remove("control-carousel-click");
})
document.getElementById("control-carousel-right").addEventListener('click', function (e) {
    e.target.classList.add("control-carousel-click");
    elemento = document.getElementById("control-carousel-left");
    elemento.classList.add("control-carousel-click-reverse"); // make gray
    elemento.classList.remove("control-carousel-click");
})


// onclick nuestros-servicios-lista

// estilo lista cuando se apreta una opcion, agrega clase li-active al elemento

const NuestroServiciosText = { // objecto simple que contiene el texto de nuestros servicios
    "remodelacion": "Remodelacion de todo tipo de estructura.",
    "asesoria": "Ayudamos a nuestros clientes a alcanzar sus objetivos, comprendiendo sus necesidades y proporcionando soluciones.",
    "contruccion": "Construcción de casas, edificios, condominios y todo tipo de edificación nueva.",
    "tramitología": "Tramitamos todo tipo de permisos para poder ejecutar cualquier obra ante todas las instituciones",
    "obras": "Jardinería, limpia de tanques sépticos, limpieza de losas y aceras, mantenimiento de ascensores, reparacion de filtraciones de agua, etc."
}

const NuestroServiciosEstilo = {
    "remodelacion-text": "1",
    "asesoria-text": "2",
    "contruccion-text": "0",
    "tramitología-text": "3",
    "obras-text": "4"
}

document.querySelector(".nuestros-servicios-lista").addEventListener("click", function(e){  // evento click en el menu de nuestros servicios
    removeText(); // remueve el texto de todos los elementos li de la par
    cleanElements(); // quitar clase li-active de todos los li del menu y poner color negro (default)
    var elemento1 = document.getElementById(e.target.id); // llamar elemento al hacer click y obtiene el id
    elemento1.classList.add("li-active"); // agregar clase al elemento que se le hizo click
    elemento1.style.color = "white";
    var elemento2 = document.getElementById(e.target.id + "-text"); // llamar donde se va a poner el text del objecto NuestroServiciosText
    elemento2.textContent = NuestroServiciosText[e.target.id];
    alinearTexto(e.target.id + "-text");
    pintarLineaVertical(e.target.id + "-text");
});

function cleanElements() { // funcion quita el estilo de los li del menu de nuestrosservicios
    for (var key in NuestroServiciosText) {
        var elemento = document.getElementById(key);
        elemento.classList.remove("li-active");  // clase li-active da color blanco a las letras. Se remoueve
        elemento.style.color = "black";  // devuelve color negro a las letras
    }
}

function removeText() { // funcion borra texto de los elementos de nuestrosservicios
    for (var key in NuestroServiciosEstilo) {
        var elemento = document.getElementById(key);
        elemento.textContent = "";
    }
}

function cleanMargin_alinearTexto() {
    for (var key in NuestroServiciosEstilo) {
        var elemento = document.getElementById(key);
        elemento.style.marginTop = "0px";
    }
}

function alinearTexto(id) { // funcion alinea texto de la seccion nuestrosservicios usando el objeto NuestroServiciosEstilo
    cleanMargin_alinearTexto();
    var elemento = document.getElementById(id);
    elemento.style.marginTop = (NuestroServiciosEstilo[id]*72) + "px";
}

function pintarLineaVertical(id) {  // mueve la linea naranja en la linea de nuestrosservicios
    var elemento = document.querySelector(".scroll-pintar");
    elemento.style.marginTop = (NuestroServiciosEstilo[id]*40) + "px";
}


