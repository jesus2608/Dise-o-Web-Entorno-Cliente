// Definición del tablero como un array bidimensional. Cada símbolo representa un tipo de elemento:
// '🌱' = espacio vacío, '🍎' = manzana, '🧱' = ladrillo (obstáculo), '🐍' = posición inicial de la serpiente.
const tablero = [
    ['🌱', '🌱', '🍎', '🌱', '🌱'],
    ['🍎', '🧱', '🌱', '🧱', '🍎'],
    ['🌱', '🧱', '🐍', '🌱', '🌱'],
    ['🌱', '🍎', '🌱', '🧱', '🌱'],
    ['🍎', '🌱', '🌱', '🍎', '🧱'],
    ['🌱', '🌱', '🌱', '🌱', '🍎'],    
];

// Función que muestra el tablero en la consola.
// Cada fila del tablero se une en una cadena con espacios entre los símbolos para visualizarlos.
function mostrarTablero(tablero) {
    tablero.forEach(fila => console.log(fila.join(' ')));  // Muestra cada fila del tablero
    console.log("\n");  // Añade una línea en blanco después de mostrar el tablero
}

// Función para ajustar la posición de la serpiente al moverse fuera de los límites del tablero.
// Si se mueve fuera del borde, se asegura que vuelva desde el otro lado (efecto "toroide").
function ajustarPosicion(x, y, tablero) {
    const alto = tablero.length;      // Altura del tablero
    const ancho = tablero[0].length;  // Anchura del tablero
    return {
        // Ajusta las coordenadas x e y para que siempre estén dentro de los límites
        x: (x + ancho) % ancho,   // Si x es negativo o mayor que el ancho, ajusta la posición
        y: (y + alto) % alto      // Si y es negativo o mayor que el alto, ajusta la posición
    };
}

// Función que verifica si una posición en el tablero está bloqueada por un ladrillo ('🧱').
function esBloqueado(tablero, x, y) {
    return tablero[y][x] === '🧱';  // Devuelve true si hay un ladrillo en la posición (x, y)
}

// Función que verifica si una posición contiene una manzana ('🍎').
function esManzana(tablero, x, y) {
    return tablero[y][x] === '🍎';  // Devuelve true si hay una manzana en la posición (x, y)
}

// Función para mover la serpiente en el tablero.
// Cambia la posición actual de la serpiente ('🐍') por un espacio vacío ('🌱'), y coloca la serpiente en la nueva posición.
function moverSerpiente(tablero, x, y, nuevaX, nuevaY) {
    tablero[y][x] = '🌱';  // La posición actual de la serpiente se convierte en espacio vacío
    tablero[nuevaY][nuevaX] = '🐍';  // La nueva posición se marca con la serpiente
}

// Función principal del juego que permite al jugador mover la serpiente y buscar manzanas.
function play() {
    alert("¡Vamos a jugar!");  // Mensaje de inicio del juego
    let ganar = false;  // Variable que controla si el juego ha terminado (serpiente ha comido todas las manzanas)
    let x = 2, y = 2;   // Posición inicial de la serpiente en el tablero
    let manzanas = 6;   // Número total de manzanas que la serpiente debe comer

    // Bucle que continúa hasta que se hayan comido todas las manzanas
    do {
        mostrarTablero(tablero);  // Muestra el tablero en cada iteración
        
        // Pide al jugador que elija una dirección para mover la serpiente
        let opcion = prompt("Hacia dónde quieres ir (arriba, abajo, izquierda, derecha)?").toLowerCase();
        let nuevaPos = { x: x, y: y };  // Crea un objeto con las coordenadas actuales de la serpiente
        
        // Actualiza la posición según la dirección elegida por el jugador
        if (opcion === "arriba") nuevaPos.y -= 1;
        if (opcion === "abajo") nuevaPos.y += 1;
        if (opcion === "izquierda") nuevaPos.x -= 1;
        if (opcion === "derecha") nuevaPos.x += 1;

        // Ajusta la posición para que la serpiente no salga de los límites del tablero
        nuevaPos = ajustarPosicion(nuevaPos.x, nuevaPos.y, tablero);

        // Verifica si la nueva posición está bloqueada por un ladrillo
        if (esBloqueado(tablero, nuevaPos.x, nuevaPos.y)) {
            alert("Movimiento inválido, hay un ladrillo.");  // Mensaje de error si se intenta mover hacia un ladrillo
            continue;  // Salta a la siguiente iteración del bucle
        }

        // Verifica si la nueva posición contiene una manzana
        if (esManzana(tablero, nuevaPos.x, nuevaPos.y)) {
            manzanas--;  // Decrementa el número de manzanas restantes
            alert(`¡Comiste una manzana! Manzanas restantes: ${manzanas}`);  // Informa al jugador
        }

        // Mueve la serpiente a la nueva posición
        moverSerpiente(tablero, x, y, nuevaPos.x, nuevaPos.y);
        x = nuevaPos.x;  // Actualiza la posición actual de la serpiente
        y = nuevaPos.y;

        // Si se han comido todas las manzanas, el jugador gana
        if (manzanas === 0) {
            ganar = true;  // Cambia la variable para finalizar el bucle
            alert("¡Felicidades, has comido todas las manzanas!");  // Mensaje de victoria
        }

    } while (!ganar);  // El bucle continúa mientras no se hayan comido todas las manzanas
}

// Llamada a la función play para comenzar el juego
play();
