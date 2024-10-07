function clasico(historial){
    let opcion = parseInt(prompt("Hola, ¿cuántas secuencias quieres jugar?"));
    let ronda = 1;
    let chivato = true;
    colores= generarColores();
    alert("Estos son los colores y como se van a ordenar"+colores);
    for (let index = 1; index <= opcion; index++) { 
        let combinacion = ""; 
        alert(`Secuencia ${index}:`);
        for (let j = 0; j < index; j++) {
            let random = Math.floor(Math.random() * colores.length);
            combinacion += random; 
            alert(colores[random]);
        }
        let seleccion = prompt("¿Cuál era la combinación?");
        if (seleccion !== combinacion) {
            alert("Has perdido. La combinación era: " + combinacion);
            historial.push("MODO CLASICO: "+colores.length+" colores. Derrota en ronda "+ronda)
            chivato=false;
            break;
        } else {
            alert("¡Correcto! Pasas a la siguiente secuencia.");
        }   
}
if(chivato)
historial.push("MODO CLASICO: "+colores.length+" colores. Partida ganada.");
 
}
function menu(){
    alert("Hola que modo quieres jugar:\n 1.Clasico \n 2.Supervivencia\n 3.Historial \n 4.Salir");
}
function Supervivencia(historial){
    let ronda = 1;
    alert("Modo supervivencia")
        colores= generarColores();
        alert("Estos son los colores y como se van a ordenar"+colores);
        for (let index = 1; index <= 600000000000000000000000000000000000; index++) { 
            let combinacion = ""; 
            alert(`Secuencia ${index}:`);
            for (let j = 0; j < index; j++) {
                let random = Math.floor(Math.random() * colores.length);
                combinacion += random; 
                alert(colores[random]);
            }
            let seleccion = prompt("¿Cuál era la combinación?");
            if (seleccion !== combinacion) {
                alert("Has perdido. La combinación era: " + combinacion);
                historial.push("MODO SUPERVIVENCIA: "+colores.length+" colores. "+ronda+" rondas ganadas");
                break;
            
            } else {
                alert("¡Correcto! Pasas a la siguiente secuencia.");
                ronda++;
            }
        
    }
 
    

}
function generarColores(){
    colores= [];
    let opcion = prompt("Cuantos colores quieres tener");
    let opcion1;
    for (let index = 0; index < opcion; index++) {
        opcion1 = prompt("Ingrese el color");
        colores.push(opcion1);
    }
    return colores;
}

function muestraHistorial(historial){alert(historial)}
   
function play(){
    let historial=[];
    do{
    menu();
    opcion=parseInt(prompt("Que opcion quieres jugar"));
    switch(opcion){
        case 1: clasico(historial); break;
        case 2: Supervivencia(historial); break;
        case 3: muestraHistorial(historial); break;
        case 4: alert("Hasta pronto"); break;
        default: alert("Error"); break;
    }
}while(opcion!=4);
}
play();