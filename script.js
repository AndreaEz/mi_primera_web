//alert("Hola este es mi Javascript");
//let nombre1 = "mi nombre"

//const nombre2 = "mi nombre"

//var nombre3 = "mi nombre"


let nombre1 = "Andrea";
let ciudad1 = "Perú";
let gusto1 = "chocolate";
//Cambiar el texto de mi presentación//
let parrafo = document.querySelector(".parrafo2");

function cambiarTexto(nombre, ciudad, gusto){
    let contenido =  `Me llamo ${nombre}, nací en ${ciudad} y vivo
    en Lima. Me gusta el ${gusto} y salir a pasear en días de
    sol. Me encantaría aprender a programar para poder ayudar a 
    las personas a mostrar lo que hacen`;

    return contenido;

};
parrafo.innerText = cambiarTexto(nombre1, ciudad1, gusto1);
/*innerText para alterar texto en HTML , innerHTML para alterar etiquetas*/

//boton de menu responsivo//
let menu_responsive = document.querySelector(".checkbtn");

menu_responsive.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
};
