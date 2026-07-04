const STORAGE_KEY = "checklist_v2";

function guardarDatos() {

    const datos = {
        tecnico: document.getElementById("technician").value,
        equipo: document.getElementById("equipment").value,
        fecha: document.getElementById("date").value,
        preguntas: []
    };

    document.querySelectorAll(".item").forEach(item => {

        datos.preguntas.push({
            check: item.querySelector("input[type='checkbox']").checked,
            comentario: item.querySelector("textarea").value
        });

    });

    localStorage.setItem(STORAGE_KEY, JSON.stringify(datos));

    mostrarEstado("✔ Guardado automáticamente");

}

function cargarDatos() {

    const datos = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (!datos) return;

    document.getElementById("technician").value = datos.tecnico || "";
    document.getElementById("equipment").value = datos.equipo || "";
    document.getElementById("date").value = datos.fecha || "";

    document.querySelectorAll(".item").forEach((item, index) => {

        if (!datos.preguntas[index]) return;

        item.querySelector("input").checked =
            datos.preguntas[index].check;

        item.querySelector("textarea").value =
            datos.preguntas[index].comentario;

    });

    actualizarProgreso();

}