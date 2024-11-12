//Ejercicio 22

let nodoSeleccionado = null;

function generarNodoUnico(){ // Generamos un id unico para el nodo
    return "Nodo: "+Math.floor(Math.random()*1000000000);
}

function agregarNodoArbol(){
const nuevoNodo = document.createElement('div'); // creamos el nodo con forma de arbol
nuevoNodo.classList.add('tree-node');
nuevoNodo.textContent=generarNodoUnico();
nuevoNodo.onclick= seleccionar; //Elegimos el nodo seleccionado

if(nodoSeleccionado){
    nodoSeleccionado.appendChild(nuevoNodo); // si tiene un nodo seleccionado que parta a traves de ese hijo
}else document.getElementById('treeRoot').appendChild(nuevoNodo); // si no que lo tire donde estaba antes
}
function seleccionar(event){
    event.stopPropagation(); //Esta funcion lo que hace es evitar que se propague a los nodos padres
    if(nodoSeleccionado){
        nodoSeleccionado.classList.remove('selected');
    }
    nodoSeleccionado = event.target // aqui el evento lo marca y se queda targeteado
    nodoSeleccionado.classList.add('selected')

}
function eliminarNodoSeleccionado(){
    if(nodoSeleccionado){
        nodoSeleccionado.classList.remove('selected')
        nodoSeleccionado.textContent="";
    }
}


//Ejercicio 23
const cuadro = document.getElementById('draggable');

function mouseMove(event, x, y) {
    draggable.style.left = event.clientX+x  + 'px';
    draggable.style.top = event.clientY +y + 'px';
}

// Función para soltar el elemento
function mouseUp() {
    document.removeEventListener('mousemove', mouseMove);
    document.removeEventListener('mouseup', mouseUp);
}

cuadro.addEventListener('mousedown', function(event){
    const x = event.clientX - draggable.offsetLeft;
    const y = event.clientY - draggable.offsetTop;
    
    document.addEventListener('mousemove', mouseMove(event, x,y));
    document.addEventListener('mouseup', mouseUp);


})


//Ejercicio 24
// Declaramos todo aquello que vayamos a usar
const nombre = document.getElementById('nombre');
const errores = document.getElementById('nombreError');
const correo = document.getElementById('email');
const correoError = document.getElementById('emailError');
const correoRegex =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const telefono = document.getElementById('telefono');
const erroresTelefono= document.getElementById('telefonoError');
const form = document.getElementById('validationForm');
let chivato1 = false; let chivato2 = false ; let chivato3 = false; // seran usados para comprobaciones mas tarde

nombre.addEventListener('input', function(){
    if(nombre.value.length<4){ // si tiene menos de 4 caracteres salta el error y si no se borrar y el chivato se pone a true
        errores.textContent='Error tienes que tener mas letras';
        chivato1 = false;
    }else{
    chivato1=true; 
    errores.textContent='';
    }
})


correo.addEventListener('input', function(){
    
const correoResultado = correoRegex.test(correo.value); // si el correo no es del rez adecuado pues salta el error si no pues se borra y el chivato es true
if(!correoResultado){
correoError.textContent= "Error el formato del correo no es el adecuado";
chivato2 = false;
}else{
    chivato2 = true;
    correoError.textContent='';
}
})

telefono.addEventListener('input', function(){
    if(telefono.value.length!=9){ // si el telefono tiene menos de 9 digitos salta el error y si se pone el chivato a true
        chivato3=false;
        erroresTelefono.textContent='El formato no es el indicado tiene que tener 9 digitos';
    }else{
        chivato3=true;
        erroresTelefono.textContent='';
    }
})

form.addEventListener('submit', function(event){
    if(!chivato1 || !chivato2 || !chivato3) // si algun chivato no es true no se envia el formulario
        event.preventDefault();

})

//Ejercicio 25
function modificarElementoObservado(){
    const texto = document.getElementById('observedElement');
    
}

// Ejercicio 26
let contador = 0;
const div = document.getElementById('buttonContainer') // declaramos y obtenemos las cosas que necesitaremos
const div2 = document.createElement('div')
div.appendChild(div2) // nos  declaramos un segundo div para poner el texto

function agregarBotonDinamico(){
    const nuevoBoton = document.createElement('button'); //creamos boton
    nuevoBoton.id='boton'+ contador++; // le asignamos un id
    nuevoBoton.textContent=contador; // le damos texto al boton
    div.appendChild(nuevoBoton); //le creamos un hijo para añadirlo

 
    
}
div.addEventListener('click',function(event){
    for (let index = 0; index < contador; index++) {// bucle para recorrer los botones
        if(event.target.id=='boton'+ index){ // pulsamos boton lo capturamos y comparamos
          // si el boton es el buscado lo ponemos y salemos del bucle
            div2.textContent='El id del boton es '+event.target.id;
            return;
        }
        
    }
})






