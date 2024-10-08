// Función para el modo de juego "Clásico"
function clasico(historial) {
    // Pide al jugador cuántas secuencias desea jugar
    let opcion = parseInt(prompt("Hola, ¿cuántas secuencias quieres jugar?"));
    let ronda = 1;  // Inicializa el número de ronda
    let chivato = true;  // Bandera para indicar si el jugador ha ganado o perdido
    colores = generarColores();  // Genera los colores para el juego
    alert("Estos son los colores y como se van a ordenar: " + colores);  // Muestra los colores generados

    // Bucle que recorre el número de secuencias que el jugador ha solicitado
    for (let index = 1; index <= opcion; index++) { 
        let combinacion = "";  // Almacena la secuencia de colores seleccionada
        alert(`Secuencia ${index}:`);

        // Genera una secuencia de colores aleatoria
        for (let j = 0; j < index; j++) {
            let random = Math.floor(Math.random() * colores.length);  // Genera un índice aleatorio para el color
            combinacion += random;  // Agrega el índice a la combinación
            alert(colores[random]);  // Muestra el color al jugador
        }

        // El jugador debe ingresar la secuencia que acaba de ver
        let seleccion = prompt("¿Cuál era la combinación?");

        // Si la combinación ingresada no es correcta
        if (seleccion !== combinacion) {
            alert("Has perdido. La combinación era: " + combinacion);
            // Guarda el resultado de la partida en el historial
            historial.push("MODO CLASICO: " + colores.length + " colores. Derrota en ronda " + ronda);
            chivato = false;  // Marca que el jugador ha perdido
            break;  // Sale del bucle
        } else {
            alert("¡Correcto! Pasas a la siguiente secuencia.");  // Si la combinación es correcta, avanza a la siguiente secuencia
        }
    }

    // Si el jugador completó todas las secuencias correctamente, marca la partida como ganada
    if (chivato) {
        historial.push("MODO CLASICO: " + colores.length + " colores. Partida ganada.");
    }
}

// Función que muestra un menú de opciones al jugador
function menu() {
    alert("Hola, ¿qué modo quieres jugar?\n 1. Clásico \n 2. Supervivencia\n 3. Historial \n 4. Salir");
}

// Función para el modo de juego "Supervivencia"
function Supervivencia(historial) {
    let ronda = 1;  // Inicializa el número de rondas
    alert("Modo supervivencia");
    colores = generarColores();  // Genera los colores para el juego
    alert("Estos son los colores y como se van a ordenar: " + colores);

    // Bucle infinito que continúa hasta que el jugador pierde
    for (let index = 1; index <= Number.MAX_SAFE_INTEGER; index++) {  // Número extremadamente grande
        let combinacion = "";  // Almacena la secuencia de colores seleccionada
        alert(`Secuencia ${index}:`);

        // Genera una secuencia de colores aleatoria
        for (let j = 0; j < index; j++) {
            let random = Math.floor(Math.random() * colores.length);  // Genera un índice aleatorio para el color
            combinacion += random;  // Agrega el índice a la combinación
            alert(colores[random]);  // Muestra el color al jugador
        }

        // El jugador debe ingresar la secuencia que acaba de ver
        let seleccion = prompt("¿Cuál era la combinación?");

        // Si la combinación ingresada no es correcta
        if (seleccion !== combinacion) {
            alert("Has perdido. La combinación era: " + combinacion);
            // Guarda el resultado de la partida en el historial
            historial.push("MODO SUPERVIVENCIA: " + colores.length + " colores. " + ronda + " rondas ganadas");
            break;  // Sale del bucle
        } else {
            alert("¡Correcto! Pasas a la siguiente secuencia.");
            ronda++;  // Incrementa el número de rondas si el jugador acierta
        }
    }
}

// Función para generar los colores que se utilizarán en el juego
function generarColores() {
    let colores = [];  // Array para almacenar los colores
    let opcion = prompt("¿Cuántos colores quieres tener?");  // Pide al jugador que indique cuántos colores se utilizarán
    let opcion1;

    // Bucle que permite al jugador ingresar los colores
    for (let index = 0; index < opcion; index++) {
        opcion1 = prompt("Ingrese el color");  // El jugador ingresa un color
        colores.push(opcion1);  // Agrega el color al array
    }
    return colores;  // Devuelve el array de colores generados
}

// Función para mostrar el historial de partidas
function muestraHistorial(historial) {
    alert(historial);  // Muestra el historial almacenado
}

// Función principal que ejecuta el juego
function play() {
    let historial = [];  // Array para almacenar el historial de partidas

    // Bucle que muestra el menú y permite elegir entre los diferentes modos de juego
    do {
        menu();  // Muestra el menú
        opcion = parseInt(prompt("¿Qué opción quieres jugar?"));  // El jugador elige una opción

        // Switch que ejecuta el modo seleccionado por el jugador
        switch (opcion) {
            case 1:
                clasico(historial);  // Jugar modo clásico
                break;
            case 2:
                Supervivencia(historial);  // Jugar modo supervivencia
                break;
            case 3:
                muestraHistorial(historial);  // Mostrar historial
                break;
            case 4:
                alert("Hasta pronto");  // Salir del juego
                break;
            default:
                alert("Error");  // Si se ingresa una opción inválida
                break;
        }
    } while (opcion != 4);  // El bucle continúa hasta que el jugador elige la opción 4 (salir)
}

// Ejecuta el juego
play();
