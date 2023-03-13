//Qué es un array?
//Es una lista de elementos
//const array = [1, 'jaja', true, false]

//Qué es un objeto
//Es una lista de elementos pero cada elemento tiene un nombre clave
//const obj = { nombre: "Alex", edad: 3 };

//Cuándo es mejor usar objetos o arrays?
//Arrays cuando lo que haremos en un elemento es lo mismo en todos los demás (la regla se puede incumplir)
//Objetos es cuando los nombres de cada elementos son importantes para nuestro algoritmo

//Pueden mezclarse arrays con objetos y viceversa? sí 

// ejemplo

function imprimirPrimerElementoArray(arr){
    console.log(arr[0]);
}
let arr = ["Alex", "Juan", "Jorge", "MIguel", "JUanita"];
imprimirPrimerElementoArray(arr);

//

function imprimirElementoPorElemento(arr){
    arr.forEach(element => {
        console.log(element);
    });
}

let arr2 = ["Alex", "Juan", "Jorge", "MIguel", "JUanita"];
imprimirElementoPorElemento(arr);

//ahora que reciba un objeto



const obj = { nombre: "Alex", edad: 3, comidaFavorita: "Tacos" };

let arrObj = Object.values(obj);//Se convirtió en arreglo para utilizar nuestra funciones

imprimirElementoPorElemento(arrObj);