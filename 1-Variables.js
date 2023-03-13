//¿Qué es una variable y para qué sirve?
/*Son espacios en memoria donde podemos guardar información (string, enteros, boleanos, etc)

¿Cuál es la diferencia entre declarar e inicializar una variable?
let nombre; Declarar
nombre = "Alex" Inicializar
*/

//let nos permite cambiar el valor de nuestras variables en el futuro
let nombre = "Alex";

//const no nos permite cambiar el valor

const apellido = "Camarillo";

//Cúal es la diferencia entre sumar numeros y concatenar strings
let suma = 2 + 2; //Sumar numeros
let sumaStrings = "Hola " + "Juan"; // Unir (concatenar) cadenas
// Determina el nombre y tipo de dato para almacenar la siguiente información
/*
    -Nombre: string
    -Apellido: string
    -Nombre: string
    -Edad: number
    -Correo: string
    -Mayo de edad: boleano
    -Dinero Ahorrado: number
    -Deudas: number
*/

//Traduce a código lo anteriro

let nombre1 = "Alejandro";
let apellido1 = "Camarillo";
let username = "alex7camarillo";
let edad = 23;
let mail = "alex7camarillo@gmail.com";
let esMayorDeEdad = true;
let dineroAhorrado = 6900;
let deudas = 100;

//Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior
let nombreCompleto = `${nombre1} ${apellido1}`;
let dineroReal = dineroAhorrado - deudas;