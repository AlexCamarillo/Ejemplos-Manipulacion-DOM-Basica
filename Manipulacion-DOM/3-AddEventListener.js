//Escuchando los eventos del DOM

const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btn-calcular");
const reslutado = document.querySelector("#resultado");
const form = document.querySelector("#form");


//btn.addEventListener("click", btnOnClick);
form.addEventListener("submit", btnOnClick);

function btnOnClick (e) {
    e.preventDefault();
    reslutado.innerHTML ='Resultado: ' + (parseInt(input1.value) + parseInt(input2.value));
    console.log(parseInt(input1.value) + parseInt(input2.value));
};

//Nota: no funciona con funciones de flecha
const btnOnClick1 = () => {
    reslutado.innerHTML += parseInt(input1.value) + parseInt(input2.value);
    console.log(parseInt(input1.value) + parseInt(input2.value));
};
