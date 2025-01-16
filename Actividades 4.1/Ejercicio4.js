// Elementos del DOM
const formulario = document.getElementById("taskForm");
const entradaTarea = document.getElementById("taskInput");
const selectorPrioridad = document.getElementById("prioritySelect");
const listaTareas = document.getElementById("taskList");
const filtro = document.getElementById("filterSelect");

// Almacén de tareas
let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

// Guardar tareas en localStorage
function guardarTareas() {
    localStorage.setItem("tareas", JSON.stringify(tareas));
}

// Renderizar tareas en pantalla
function renderizarTareas() {
    const filtroSeleccionado = filtro.value;
    listaTareas.innerHTML = "";

    tareas
        .filter(tarea => {
            if (filtroSeleccionado === "todas") return true;
            if (filtroSeleccionado === "pendientes") return !tarea.completada;
            if (filtroSeleccionado === "completadas") return tarea.completada;
        })
        .forEach((tarea, index) => {
            const elemento = document.createElement("li");
            elemento.classList.toggle("completed", tarea.completada);

            elemento.innerHTML = `
                <span>${tarea.texto} (${tarea.prioridad})</span>
                <div>
                    <button onclick="toggleCompletada(${index})">
                        ${tarea.completada ? "Desmarcar" : "Completar"}
                    </button>
                    <button onclick="eliminarTarea(${index})">Eliminar</button>
                </div>
            `;

            listaTareas.appendChild(elemento);
        });
}

// Añadir nueva tarea
formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const nuevaTarea = {
        texto: entradaTarea.value,
        prioridad: selectorPrioridad.value,
        completada: false,
    };

    tareas.push(nuevaTarea);
    guardarTareas();
    renderizarTareas();
    formulario.reset();
});

// Marcar tarea como completada
function toggleCompletada(index) {
    tareas[index].completada = !tareas[index].completada;
    guardarTareas();
    renderizarTareas();
}

// Eliminar tarea
function eliminarTarea(index) {
    tareas.splice(index, 1);
    guardarTareas();
    renderizarTareas();
}

// Actualizar lista según filtro
filtro.addEventListener("change", renderizarTareas);


renderizarTareas();
