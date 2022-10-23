
// quienes somos: cambia imagen
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


// Proyectos

// Carousel listener: revisa cada vez que se mueve el carousel. Pinta la barra
const myCarousel = document.getElementById('carouselExampleControls')
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

// // cuando se hace click sobre botones carousel
document.getElementById("carousel-arrow-left").addEventListener('click', function (e) {
    addColorArrowCarousel("#DFDFDF", "#F86C1D")
    removeColorBarCarousel()
    addColorBarCarousel("onclick-arrow", "onclick-arrow-reverse")
})

document.getElementById("carousel-arrow-right").addEventListener('click', function (e) {
    addColorArrowCarousel("#F86C1D", "#DFDFDF")
    removeColorBarCarousel()
    addColorBarCarousel("onclick-arrow-reverse", "onclick-arrow")
})

function addColorArrowCarousel(color1, color2) {
    arrowRight = document.querySelector(".arrow-right");
    arrowLeft = document.querySelector(".arrow-left");
    arrowRight.style.borderColor = color1;
    arrowLeft.style.borderColor = color2;
}


function addColorBarCarousel(class1, class2) {
    lineRight = document.querySelector(".line-right");
    lineLeft =  document.querySelector(".line-left")
    lineLeft.classList.add(class1);       // add color
    lineRight.classList.add(class2);
}

function removeColorBarCarousel(){
    lineRight = document.querySelector(".line-right");
    lineLeft =  document.querySelector(".line-left")
    lineRight.classList.remove("onclick-arrow"); // remove all color from lines
    lineRight.classList.remove("onclick-arrow-reverse");
    lineLeft.classList.remove("onclick-arrow");
    lineLeft.classList.remove("onclick-arrow-reverse");
}


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
    nuestrosServiciosCambiarElementos(e.target.id);
    alinearTexto(e.target.id + "-text");
    pintarLineaVertical(e.target.id + "-text");
});

function nuestrosServiciosCambiarElementos(id="contruccion") {
    var elemento1 = document.getElementById(id); // llamar elemento al hacer click y obtiene el id
    elemento1.classList.add("li-active"); // agregar clase al elemento que se le hizo click
    elemento1.style.color = "white";
    var elemento2 = document.getElementById(id+ "-text"); // llamar donde se va a poner el text del objecto NuestroServiciosText
    elemento2.textContent = NuestroServiciosText[id];
}

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



// nuestros servicios
function alinearTexto(id) { // funcion alinea texto de la seccion nuestrosservicios usando el objeto NuestroServiciosEstilo
    cleanMargin_alinearTexto();
    width = screen.width;
    if(width < 768) {
        alinearTextoMobile(id);
        return
    }
    alinearTextoDesktop(id);
}

function alinearTextoDesktop(id){
    var elemento = document.getElementById(id);
    var nuestrosservicios = document.querySelector('.nuestros-servicios-lista');
    total = nuestrosservicios.offsetHeight - elemento.offsetHeight;
    var pixeles = 72;
    if (id === 'obras-text') {
        elemento.style.marginTop = total + "px";
        return
    }
    if (id === 'tramitología-text') {
        elemento.style.marginTop = total-72 + "px";
        return
    }
    elemento.style.marginTop = (NuestroServiciosEstilo[id]*pixeles) + "px";
}

function alinearTextoMobile(id){
    var elemento = document.getElementById(id);
    var nuestrosservicios = document.querySelector('.nuestros-servicios-lista');
    total = nuestrosservicios.offsetHeight - elemento.offsetHeight;
    var pixeles = 0;
    elemento.style.marginTop = (NuestroServiciosEstilo[id]*pixeles) + "px";
}

function cleanMargin_alinearTexto() {
    for (var key in NuestroServiciosEstilo) {
        var elemento = document.getElementById(key);
        elemento.style.marginTop = "0px";
    }
}

function pintarLineaVertical(id) {  // mueve la linea naranja en la linea de nuestrosservicios
    var elemento = document.querySelector(".scroll-pintar");
    elemento.style.marginTop = (NuestroServiciosEstilo[id]*40) + "px";
}


// nuestra historia
function changesElementoAfterSibling() { // para pintura nuestra historia, mobile cambia de lugar
    width = screen.width;
    console.log("working ", width)
    if(width < 992) {
        changeElement()
    }
    if(width < 768) {
        changeElementFooter()
    }
}

function changeElement(){
    var elemento1 = document.querySelector(".multipleitems-margin-vertical");
    var elemento2 = elemento1.nextElementSibling;
    elemento2.parentNode.insertBefore(elemento1, elemento2.nextSibling);

}

function changeElementFooter() {
    var elemento1 = document.querySelector(".footer-wrapper-left");  // mover cotactecnos despues del logo en el footer
    var elemento2 = document.querySelector(".footer-logo");
    elemento2.parentNode.insertBefore(elemento1, elemento2.nextSibling);
}

// my own media querys

window.onload = (event) => {
    changesElementoAfterSibling()
    nuestrosServiciosCambiarElementos();
    addColorArrowCarousel("#F86C1D", "#DFDFDF")
    addColorBarCarousel("onclick-arrow-reverse", "onclick-arrow")
};
//   X-Small	None	<576px
//   Small	sm	≥576px
//   Medium	md	≥768px
//   Large	lg	≥992px
//   Extra large	xl	≥1200px
//   Extra extra large	xxl	≥1400px