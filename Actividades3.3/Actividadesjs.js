// Ejercicio 16
function cambiarTexto(){
    const texto = document.getElementById('text1');
texto.textContent='Este es un texto modificado con javasScript'
}
//Ejercicio 17
function cambiarEstilo(){
     const si = document.body;
     si.style.color='red';
     si.style.fontSize='20px';
     si.style.fontWeight='bold'
}
//Ejercicio 18
function toggleVisibilidad(){
    const texto = document.getElementById('text3');
    if(!texto.classList.contains('hidden'))
        texto.classList.add('hidden')
    else 
    texto.classList.remove('hidden')

}
//Ejercicio 19
let contador = 1;
function agregarElemento(){
    const lista= document.getElementById('lista');
   
    let objeto = document.createElement("li");
    objeto.textContent= "Elemento "+contador++;
    lista.appendChild(objeto);
}

//Ejercicio 21
//Funciona pero no funciona no se porque


window.addEventListener('mousemove',function(event){
    const coordenadas = document.getElementById('mouseArea');
    coordenadas.onmousemove=function(event){}
    let x = event.clientX;
    let y = event.clientY;

    coordenadas.textContent= "Las coordenadas son x= "+x +" e y="+y;
}
)

