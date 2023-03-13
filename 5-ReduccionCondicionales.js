
const tiposDeSubs = {
    free: "Solo puedes tomar los cursos gratis",
    basic: "Acceso a los cursos durante un mes",
    expert: "Acceso a los cursos durante un año",
    expertduo: "Acceos a los cursos durante un año para dos personas",
};



function tipoSubsripcion(sub){
    if(tiposDeSubs[sub]){
        console.log(tiposDeSubs[sub]);
        return;
    }

    console.warn("Ese tipo no existe")
}

const ejemploSub = "expert";

tipoSubsripcion(ejemploSub);