let numeroOculto= 13;
let numeroIntroducido = parseInt(prompt("Introduzca un numero"));
if(numeroIntroducido===numeroOculto){
    alert("Correcto");
}else if(numeroIntroducido< numeroOculto)
    alert("Has perdido el numero es mas alto");
    else alert("Has perdido el numero es menor");