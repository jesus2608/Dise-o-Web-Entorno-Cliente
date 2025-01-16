// Variables clave para cookies
const COOKIE_CONTADOR = "visitas";
const COOKIE_PRIMERA = "primeraVisita";
const COOKIE_ULTIMA = "ultimaVisita";

// Elementos del DOM
const totalVisitas = document.getElementById("totalVisits");
const fechaPrimera = document.getElementById("firstVisitDate");
const fechaUltima = document.getElementById("lastVisitDate");
const visitasUnicas = document.getElementById("uniqueVisits");

// Funciones para manejar cookies
function establecerCookie(nombre, valor, dias) {
    const fecha = new Date();
    fecha.setTime(fecha.getTime() + dias * 24 * 60 * 60 * 1000);
    document.cookie = `${nombre}=${valor};expires=${fecha.toUTCString()};path=/`;
}

function obtenerCookie(nombre) {
    const cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
        const [clave, valor] = cookies[i].split("=");
        if (clave === nombre) return valor;
    }
    return null;
}

function borrarCookie(nombre) {
    document.cookie = `${nombre}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
}

// Manejo de visitas
function gestionarVisitas() {
    let contador = parseInt(obtenerCookie(COOKIE_CONTADOR)) || 0;
    const primeraVisita = obtenerCookie(COOKIE_PRIMERA) || new Date().toISOString();
    const ultimaVisita = obtenerCookie(COOKIE_ULTIMA) || "-";

    contador++;

    establecerCookie(COOKIE_CONTADOR, contador, 365);
    establecerCookie(COOKIE_PRIMERA, primeraVisita, 365);
    establecerCookie(COOKIE_ULTIMA, new Date().toISOString(), 365);

    totalVisitas.textContent = contador;
    fechaPrimera.textContent = new Date(primeraVisita).toLocaleString();
    fechaUltima.textContent = ultimaVisita === "-" ? "-" : new Date(ultimaVisita).toLocaleString();
    visitasUnicas.textContent = contador === 1 ? "Sí (Primera visita)" : "No";
}

// Reiniciar visitas
function reiniciarVisitas() {
    borrarCookie(COOKIE_CONTADOR);
    borrarCookie(COOKIE_PRIMERA);
    borrarCookie(COOKIE_ULTIMA);

    alert("Contador reiniciado.");
    gestionarVisitas();
}

// Inicialización
document.addEventListener("DOMContentLoaded", gestionarVisitas);
