function cargarChecklist() {

    const preguntas = [
        "Verificar alimentación",
        "Revisar LEDs",
        "Revisar ventiladores",
        "Revisar interfaces"
    ];

    const contenedor = document.getElementById("checklist-container");

    contenedor.innerHTML = "";

    preguntas.forEach((pregunta, index) => {

        contenedor.innerHTML += `
            <div class="item">

                <div class="item-header">
                    <input type="checkbox" id="check${index}">
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

}