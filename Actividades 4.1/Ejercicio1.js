const api = "https://jsonplaceholder.typicode.com/users";

// Elementos del DOM
const usuarioFetch = document.querySelector("#userTableFetch tbody");
const usuarioAxios = document.querySelector("#userTableAxios tbody");
const usuarioForm = document.getElementById("userForm");
const nombre = document.getElementById("name");
const email = document.getElementById("email");

// Función para renderizar usuarios
function cargarUsuarios(usuarios, tableBody, deleteCallback) {
    tableBody.innerHTML = "";
    usuarios.forEach(usuario => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${usuario.id}</td>
            <td>${usuario.name}</td>
            <td>${usuario.email}</td>
            <td>
                <button class="delete-btn" data-id="${usuario.id}">Eliminar</button>
            </td>
        `;
        row.querySelector(".delete-btn").addEventListener("click", () => deleteCallback(usuario.id));
        tableBody.appendChild(row);
    });
}

// Cargar usuarios con fetch
async function cargarConFech() {
    try {
        const response = await fetch(api);
        const usuarios = await response.json();
        cargarUsuarios(usuarios, usuarioFetch, borrarConFech);
    } catch (error) {
        console.error("Error al cargar usuarios con fetch:", error);
    }
}

// Cargar usuarios con Axios
async function cargarConAxios() {
    try {
        const response = await axios.get(api);
        cargarUsuarios(response.data, usuarioAxios, borrarConAxios);
    } catch (error) {
        console.error("Error al cargar usuarios con axios:", error);
    }
}

// Borrar usuario con fetch
async function borrarConFech(userId) {
    try {
        await fetch(`${api}/${userId}`, { method: "DELETE" });
        alert(`Usuario con ID ${userId} eliminado (fetch)`);
        cargarConFech();
    } catch (error) {
        console.error("Error al eliminar usuario con fetch:", error);
    }
}

// Borrar usuario con Axios
async function borrarConAxios(userId) {
    try {
        await axios.delete(`${api}/${userId}`);
        alert(`Usuario con ID ${userId} eliminado (axios)`);
        cargarConAxios();
    } catch (error) {
        console.error("Error al eliminar usuario con axios:", error);
    }
}

// Añadir usuario
async function aniadirUsuario(event) {
    event.preventDefault();
    const name = nombre.value;
    const email1 = email.value;

    const nuevoUsuario = { name, email1 };

    try {
        // Enviar solicitud con fetch
        const response = await fetch(api, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(nuevoUsuario),
        });
        const addedUser = await response.json();

        // Actualizar tablas de forma visual (simulado)
        cargarUsuarios([addedUser], usuarioFetch, borrarConFech);
        cargarUsuarios([addedUser], usuarioAxios, borrarConAxios);

        usuarioForm.reset();
    } catch (error) {
        console.error("Error al añadir usuario:", error);
    }
}

// Inicializar la aplicación
usuarioForm.addEventListener("submit", aniadirUsuario);
cargarConFech();
cargarConAxios();
