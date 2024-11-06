//Ejercicio 9

const cambiarColor = document.getElementById('changeColorButton')//Añado un escuchador para que cuando haga click se haga la funcion de abajo
.addEventListener('click',function(){ document.body.style.backgroundColor=getColor()});
//Creo una funcion para que me de un color aleatorio entre estos valores
function getColor(){
    const colores = ['#FF0000','#0000FF','#00FF00','#FFFF00' ];
    let random = Math.floor(Math.random()*4);
    return colores[random];
}

//Ejercicio 10
const alerta = document.getElementById('showAlertButton').
addEventListener('click', function(){  //Añado un escuchador para que cuando haga click salga informacion en pantalla
    
    alert("ancho"+window.innerWidth+ // ancho
        "\n alto"+window.innerHeight // alto
    )});

//Ejercicio 11
const parrafo = document.getElementById('paragraph'); // recojo el dato con el getElementById y lo cambio
parrafo.textContent='La URL actual es: '+window.location.href;

//Ejercicio 12
const informacion = document.getElementById('displayInfo');// obtengo el dato 
const navegadorInfo= navigator.userAgent+ "<br> "+navigator.language+"<br>"+navigator.geolocation // recopilo la informacion del navegador



informacion.innerHTML=navegadorInfo; // Los inserto en el div
