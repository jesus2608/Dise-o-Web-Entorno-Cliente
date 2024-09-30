let opcion = parseInt(prompt("Hola, ¿cuántas secuencias quieres jugar?"));
let secuencia = 0;

    for (let index = 1; index <= opcion; index++) { 
        let combinacion = ""; 
        alert(`Secuencia ${index}:`);

        for (let j = 0; j < index; j++) {
            let random = Math.floor(Math.random() * 4);
            combinacion += random; 

            if (random === 0) alert("🟥"); 
            else if (random === 1) alert("🟦"); 
            else if (random === 2) alert("🟩"); 
            else if (random === 3) alert("🟨"); 
        }

        let seleccion = prompt("¿Cuál era la combinación?\n0. Rojo\n1. Azul\n2. Verde\n3. Amarillo");
        if (seleccion !== combinacion) {
            alert("Has perdido. La combinación era: " + combinacion);
            break;
        } else {
            alert("¡Correcto! Pasas a la siguiente secuencia.");
        }
    
}
