const preguntas = [
    "Verificar alimentación",
    "Revisar LEDs",
    "Revisar ventiladores",
    "Revisar interfaces"
];

function cargarChecklist() {

    const contenedor = document.getElementById("checklist-container");

    contenedor.innerHTML = "";

    preguntas.forEach((pregunta, index) => {

        contenedor.innerHTML += `
        <div class="item">

            <div class="item-header">

                <input
                    type="checkbox"
                    id="check${index}"
                    onchange="actualizarProgreso()"
                >

                <label for="check${index}">
                    ${pregunta}
                </label>

            </div>

            <textarea
                placeholder="Escribe tus comentarios aquí..."
            ></textarea>

        </div>
        `;

    });

    actualizarProgreso();

}

function actualizarProgreso(){

    const checks = document.querySelectorAll("#checklist-container input[type='checkbox']");

    let completadas = 0;

    checks.forEach(check=>{

        if(check.checked){

            completadas++;

            check.closest(".item").classList.add("completed");

        }else{

            check.closest(".item").classList.remove("completed");

        }

    });

    const porcentaje = Math.round((completadas / preguntas.length) * 100);

    document.getElementById("progress-text").innerHTML =
        `${completadas} de ${preguntas.length} completadas`;

    document.getElementById("progress-percent").innerHTML =
        `${porcentaje}%`;

    document.getElementById("progress-fill").style.width =
        porcentaje + "%";

}