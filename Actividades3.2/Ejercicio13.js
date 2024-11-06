//Ejercicio 13 

document.getElementById('duplicateButton') // obtenemos los datos 
.addEventListener('click', function(){ // añadimos un escuchador para que cuando haga click en el boton salte esta funcion

const texto = document.getElementById('inputText'); // obtenemos datos
const div = document.getElementById('textDisplay'); // obtenemos datos

div.textContent=texto.value+" "+texto.value;}) // insertamos en el div el valor duplicado
 // Ejercicio 14
 document.getElementById('moveWindowButton') // obtenemos el dato
 .addEventListener('click', function(){
    window.moveBy(100,100); //movemos la x y la y 100

 })
 //Ejercicio 15

 mouseInfo.addEventListener('mousemove',function(event){ // Añadimos un escuchador para detectar el raton y cuando pasa por ahi
    const x = event.clientX; //Obtenemos las coordenadas de x
    const y = event.clientY; //Obtenemos las coordenadas de y
mouseInfo.textContent= "Las coordenadas son x="+x +" y="+y; // Mostramos las coordenadas cuando pase el raton
 } )


 //Ejercicio 16
 document.getElementById('abrirPagina'). 
 addEventListener('click', function(){ // Obtenemos escuchador 
    const nuevaPestaña = window.open('https://www.google.com/'); // abrimos la pestaña nueva
    setTimeout(() => {
        nuevaPestaña.close(); // cerramos la ventana
    }, 3000);

 })