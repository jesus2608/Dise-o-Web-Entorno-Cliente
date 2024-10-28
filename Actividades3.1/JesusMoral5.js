let persona = { nombre: "", edad: null, correo: "" };
let json = JSON.stringify(persona);
fetch('https://api.ejemplo.com/enviar')
.then(response=>response.json())
.then(data=>{
    console.log(data);
}).catch(error=>console.error('ESTO PETA PORQUE NO HAY SERVIDOR',error))
