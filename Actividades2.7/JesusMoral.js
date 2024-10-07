function ahorcado(){
    let array=["juan", "suspenso", "ataulfo","churro"];
    let vidas = 6;
    let palabra= array[Math.floor(Math.random()*array.length)]; // Aqui creamos la palabra random
    let oculta=[];
    let opcion; // abajo la codificamos
    for (let index = 0; index < palabra.length; index++) {
        oculta.push("*");
    }
    alert(palabra);
    alert(oculta);
    let ganar = false
   do{
    let chivato = false; // si la letra es la misma que la de la palabra se cambia 
  opcion = prompt("La palabra es "+oculta+". Te quedan "+vidas+" equivocaciones");
    for (let index = 0; index < palabra.length; index++) {
        if(opcion === palabra.charAt(index))
            oculta[index]=opcion;
        else ;
        if(!oculta.includes("*")) ganar = true;

    }
    // comprobaciones para ver si has ganado o no
    if(opcion==palabra)ganar=true;
    if(!palabra.includes(opcion)) vidas--;
    if(vidas<1) ganar=true;



    }while(!ganar);
    if(vidas>0) alert("Has ganado");
    else alert("Has perdido la palabra era "+palabra);
}
ahorcado();