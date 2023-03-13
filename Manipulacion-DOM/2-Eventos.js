//Escuchando los eventos del DOM

const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btn-calcular");
const reslutado = document.querySelector("#resultado");


const btnOnClick = () => {
    reslutado.innerHTML = parseInt(input1.value) + parseInt(input2.value);
    console.log(parseInt(input1.value) + parseInt(input2.value));
};
