//Ejercicio 27 y Ejercicio 28 probando el primero me di cuenta que funciona tambien el segundo
document.getElementById('basicForm').addEventListener('submit', function(){
    const  boton = document.getElementById("basicFileInput");
    const error = document.getElementById("basicError");

    error.textContent='';
// Aqui tenemos los diferentes erroes
    if(boton.isDefaultNamespace.length==0){
        error.textContent="No has cargado ninguna imagen";
    }
    const archivo = boton.files[0];
    if(!archivo.type.startsWith('image/')){
        error.textContent="El archivo no es una imagen";
    }
    if(archivo.size>1024*1024){
        error.textContent="El archivo pesa mas de un mb"
    }

  
})