

//querySelector
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');
console.log({
   h1,
   p,
   parrafito,
   pid,
   input 
});

//Cambiando valores desde el DOM
h1.innerHTML = "TITULO NUEVO DESDE EL DOM <br> SALTO DE LINEA";

//innerText Hace lo mismo pero no convierte el código en html

//Leemos atributos
console.log(h1.getAttribute("pantalla"));//class,atributos, etc

//Cambiamos atributos
h1.setAttribute("class", "azul");
console.log(h1.getAttribute("class"));

//Añadir clases

h1.classList.add("amarillo");

//Eleminar clases

h1.classList.remove("rojo");

//Modificar el valor de nuestro value, placeholder, etc

input.value = "456";

//Crear un nuevo elemento

const img = document.createElement('img');
//img.src();//https://assets.reedpopcdn.com/crash-bandicoot-4-its-about-time-review-a-flawed-gem-1601643461589.jpg/BROK/thumbnail/1200x900/quality/100/crash-bandicoot-4-its-about-time-review-a-flawed-gem-1601643461589.jpg

img.setAttribute("src", "https://assets.reedpopcdn.com/crash-bandicoot-4-its-about-time-review-a-flawed-gem-1601643461589.jpg/BROK/thumbnail/1200x900/quality/100/crash-bandicoot-4-its-about-time-review-a-flawed-gem-1601643461589.jpg");

//lo agregamos despues de pid, con appendChild lo mete dentro
pid.append(img);