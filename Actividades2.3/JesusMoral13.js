let usuario = "si";
for (let i = 0; i < 3; i++) {
    let contraseña = prompt("Ingresa de contraseña");
    if(contraseña==usuario){
        alert("Acertaste");
        i=3;
    }else alert("Fallaste");

    
}