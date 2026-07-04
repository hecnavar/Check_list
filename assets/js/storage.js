function guardarChecklist(datos){

    localStorage.setItem("checklist",JSON.stringify(datos));

}

function leerChecklist(){

    return JSON.parse(localStorage.getItem("checklist"));

}