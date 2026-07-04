function cargarChecklist(){

    const preguntas=[

        "Verificar alimentación",
        "Revisar LEDs",
        "Revisar ventiladores",
        "Revisar interfaces"

    ];

    const contenedor=document.getElementById("checklist-container");

    preguntas.forEach((pregunta,index)=>{

        contenedor.innerHTML+=`

        <div class="item">

            <label>

                <input type="checkbox" id="check${index}">

                ${pregunta}

            </label>

            <textarea placeholder="Comentarios"></textarea>

        </div>

        `;

    });

}