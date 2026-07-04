document.addEventListener("DOMContentLoaded", ()=>{

    console.log("Aplicación iniciada");

    cargarChecklist();

    cargarDatos();

    registrarEventos();

});

function registrarEventos(){

    document.querySelectorAll("input, textarea").forEach(campo=>{

        campo.addEventListener("input",guardarDatos);

        campo.addEventListener("change",guardarDatos);

    });

}