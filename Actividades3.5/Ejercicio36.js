const usuario = {
	nombre: "Usuario",
	edad: 20,
	email: "usuario@test.com",
	password: "123456"
};
let progreso = 0
function barra(){
    if (progreso < 100) {  // limite para cada vez que sea menos que 100 que se haga
        progreso += 33;  
        document.getElementById("cuadro").style.width = progreso + "%"; 
    }
   
}
function verificarEdad(usuario){
    return new Promise ((bien, mal)=>{
        setTimeout(()=>{
            if(usuario.edad>=18){
                console.log("Edad verificada");
                bien(usuario);
                barra()
            }else{
                mal("El usuario debe de ser mayot de 18 años");
            }
        }, 1000);
       
    })
}
//Verificamos la edad mediante promesas
function verificarEmail(usuario){
return new Promise((bien, mal)=>{
    const patronEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // patron sacado del mesias para poder hacer comprobaciones
setTimeout(()=>{
    if(patronEmail.test(usuario.email)){
        console.log("Email verificado");
        bien(usuario);
        barra()
    }else{
        mal("El email es invalido");
    }
},1000);   
});
}
//Verficiamos la contraseña
function verificarContraseña(usuario){
    return new Promise((bien, mal )=>{
        setTimeout(()=>{
            const tieneNumero= /\d/;
            if(usuario.password.length>=6 && tieneNumero.test(usuario.password)){
                console.log("Contraseña Correcta");
            barra()
            bien(usuario);}
            else{
                mal("Contraseña no Valida");
            }
        },1000)
    })

}
//Hacemos una funcion para controlar todas las demas
function registrarUsuario(usuario){
    console.log("Vamos a proceder con la verificacion");
    verificarEdad(usuario).
    then(verificarEmail)
    .then(verificarContraseña)
. catch((error)=>{
    console.log(error);
})
}

registrarUsuario(usuario);
