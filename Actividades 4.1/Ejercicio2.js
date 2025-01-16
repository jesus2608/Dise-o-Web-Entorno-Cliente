// Elementos del DOM
const selectorTema = document.getElementById("themeSelector");
const selectorFuente = document.getElementById("fontSizeSelector");
const selectorIdioma = document.getElementById("languageSelector");
const inputUsuario = document.getElementById("username");
const inputCorreo = document.getElementById("email");

// Claves para almacenamiento
const CLAVE_PREFS = "preferenciasUsuario";
const CLAVE_PERFIL = "perfilUsuario";

window.addEventListener("load", () => {
    cargarPreferencias();
    cargarPerfil();
});

function guardarPreferencias() {
    const preferencias = {
        tema: selectorTema.value,
        fuente: selectorFuente.value,
        idioma: selectorIdioma.value,
    };

    localStorage.setItem(CLAVE_PREFS, JSON.stringify(preferencias));
    aplicarPreferencias(preferencias);
    alert("Preferencias guardadas.");
}

function restaurarPreferencias() {
    const porDefecto = {
        tema: "light",
        fuente: "medium",
        idioma: "es",
    };

    localStorage.setItem(CLAVE_PREFS, JSON.stringify(porDefecto));
    aplicarPreferencias(porDefecto);
    alert("Preferencias restauradas.");
}

function cargarPreferencias() {
    const preferenciasGuardadas = JSON.parse(localStorage.getItem(CLAVE_PREFS));

    if (preferenciasGuardadas) {
        selectorTema.value = preferenciasGuardadas.tema;
        selectorFuente.value = preferenciasGuardadas.fuente;
        selectorIdioma.value = preferenciasGuardadas.idioma;
        aplicarPreferencias(preferenciasGuardadas);
    } else {
        restaurarPreferencias();
    }
}

function aplicarPreferencias(preferencias) {
    document.body.className = preferencias.tema === "dark" ? "dark-theme" : "light-theme";

    document.body.style.fontSize = 
        preferencias.fuente === "small" ? "12px" : 
        preferencias.fuente === "large" ? "18px" : "16px";
}

function guardarPerfil() {
    const perfil = {
        usuario: inputUsuario.value,
        correo: inputCorreo.value,
    };

    localStorage.setItem(CLAVE_PERFIL, JSON.stringify(perfil));
    alert("Perfil guardado.");
}

function cargarPerfil() {
    const perfilGuardado = JSON.parse(localStorage.getItem(CLAVE_PERFIL));

    if (perfilGuardado) {
        inputUsuario.value = perfilGuardado.usuario;
        inputCorreo.value = perfilGuardado.correo;
    }
}
