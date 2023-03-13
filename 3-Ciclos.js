//Ciclos: Forma de ejecutar un código hasta que se cumpla una condición

//Tipos de ciclos: FOR, WHILE, DO WHILE

//FOR
for(let i = 0; i < 5; i++){
    console.log("El valor es: ", i+1);
}

for(let i =10; i >= 2; i--){
    console.log("El valor es: ", i+1);
}
//Ciclo infinito: es cuando nuestra condición nunca se cumple

//Se pueden mezclar ciclos y condicionales? Sí, aunque los ciclos son condicionales, nada nos impide agregar concicionales

//WHILE
let i =0;
while(i < 5){
    console.log("El valor es: ", i+1);
    i++;
}

//Escribe un código ej JS que le pregunte a los usuarios cuánto es 2 + 2. Si responde bien, mostramos un mensaje de felicitaciones
//pero si responde mal, volvemos a empezar.

//Podemos usar prompt
const prompt=require("prompt-sync")({sigint:true}); 

let res;
while(res != 4){
    let pregunta = prompt('¿Cuánto es 2 + 2?');
    res = pregunta;
}