document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Cogemos
    const userForm = document.getElementById('userForm');
    const userTableFetchBody = document.querySelector('#userTableFetch tbody');

    // Función para cargar usuarios con Fetch
    function loadUsersFetch() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(users => {
                userTableFetchBody.innerHTML = ''; // Limpiar tabla
                users.forEach(user => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${user.id}</td>
                        <td>${user.name}</td>
                        <td>${user.email}</td>
                        <td>
                            <button class="delete-btn" onclick="deleteUser(${user.id})">Eliminar</button>
                            <button onclick="showDetails(${user.id})">Detalles</button>
                        </td>
                    `;
                    userTableFetchBody.appendChild(row);
                });
            })
            .catch(error => console.error('Error al cargar usuarios:', error));
    }

    // Función para mostrar detalles de un usuario
    function showDetails(userId) {
        fetch(`${apiUrl}/${userId}`)
            .then(response => response.json())
            .then(user => {
                alert(`Nombre: ${user.name}\nEmail: ${user.email}`);
            })
            .catch(error => console.error('Error al obtener detalles:', error));
    }

    // Función para eliminar un usuario (solo simulado)
    function deleteUser(userId) {
        fetch(`${apiUrl}/${userId}`, { method: 'DELETE' })
            .then(() => {
                alert(`Usuario con ID ${userId} eliminado`);
                loadUsersFetch(); // Recargar la tabla
            })
            .catch(error => console.error('Error al eliminar usuario:', error));
    }

    // Evento para añadir un usuario
    userForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email })
        })
            .then(response => response.json())
            .then(newUser => {
                alert('Usuario añadido: ' + newUser.name);
                loadUsersFetch(); // Recargar la tabla
                userForm.reset(); // Limpiar el formulario
            })
            .catch(error => console.error('Error al añadir usuario:', error));
    });

    // Cargar usuarios al inicio
    loadUsersFetch();
});
