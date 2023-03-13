//Son la forma en la que ejecutamos un código u otro
//IF, else, else if, switch

//Los condicionales If, ese, else if nos permite hacer validaciones completamente distintas en cada validación  o condicional.
//En cambio, en el switch todos los cases se comparan con la misma variable o condición que definimos en el swithc
// y sí se pueden combinar

const tipoSub = "Basic";

switch (tipoSub) {
    case "Free":
        console.log("Solo puedes tomar cursos gratis");
        break;
    case "Basic":
        console.log("Solo puedes tomar cursos gratis");
        break;
    case "Plus":
        console.log("Solo puedes tomar cursos gratis");
        break;
    case "Premium":
        console.log("Solo puedes tomar cursos gratis");
        break;
    case "None":
        console.log("Solo puedes tomar cursos gratis");
        break;
    default:
        break;
}

if(tipoSub == "Basic"){
    console.log("Solo puedes tomar cursos gratis");
}else if (tipoSub == "Free"){
    console.log("Tu cuenta es Free");
}

//Y así sucesivamente, se replica lo del switch pero es mejor usar el switch