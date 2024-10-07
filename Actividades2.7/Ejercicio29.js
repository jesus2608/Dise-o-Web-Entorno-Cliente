const tablero = [
    ['🌱', '🌱', '🍎', '🌱', '🌱'],
    ['🍎', '🧱', '🌱', '🧱', '🍎'],
    ['🌱', '🧱', '🐍', '🌱', '🌱'],
    ['🌱', '🍎', '🌱', '🧱', '🌱'],
    ['🍎', '🌱', '🌱', '🍎', '🧱'],
    ['🌱', '🌱', '🌱', '🌱', '🍎'],    
];


function mostrarTablero(tablero) {
    tablero.forEach(fila => console.log(fila.join(' ')));
    console.log("\n");
}

function ajustarPosicion(x, y, tablero) {
    const alto = tablero.length;
    const ancho = tablero[0].length;
    return {
        x: (x + ancho) % ancho,
        y: (y + alto) % alto
    };
}


function esBloqueado(tablero, x, y) {
    return tablero[y][x] === '🧱';
}

function esManzana(tablero, x, y) {
    return tablero[y][x] === '🍎';
}


function moverSerpiente(tablero, x, y, nuevaX, nuevaY) {
    tablero[y][x] = '🌱';  
    tablero[nuevaY][nuevaX] = '🐍';  
}


function play() {
    alert("¡Vamos a jugar!");
    let ganar = false;
    let x = 2, y = 2;  
    let manzanas = 6; 

    do {
        mostrarTablero(tablero);
  
        let opcion = prompt("Hacia dónde quieres ir (arriba, abajo, izquierda, derecha)?").toLowerCase();
        let nuevaPos = { x: x, y: y };
        
        if (opcion === "arriba") nuevaPos.y -= 1;
        if (opcion === "abajo") nuevaPos.y += 1;
        if (opcion === "izquierda") nuevaPos.x -= 1;
        if (opcion === "derecha") nuevaPos.x += 1;

        nuevaPos = ajustarPosicion(nuevaPos.x, nuevaPos.y, tablero);

        if (esBloqueado(tablero, nuevaPos.x, nuevaPos.y)) {
            alert("Movimiento inválido, hay un ladrillo.");
            continue;
        }

        if (esManzana(tablero, nuevaPos.x, nuevaPos.y)) {
            manzanas--;
            alert(`¡Comiste una manzana! Manzanas restantes: ${manzanas}`);
        }

        moverSerpiente(tablero, x, y, nuevaPos.x, nuevaPos.y);
        x = nuevaPos.x;
        y = nuevaPos.y;
        if (manzanas === 0) {
            ganar = true;
            alert("¡Felicidades, has comido todas las manzanas!");
        }

    } while (!ganar);
}

play();
