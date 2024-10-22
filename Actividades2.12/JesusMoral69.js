class Persona{
#nombre
#edad
#trabajo
setTrabajo(trabajo){
    console.log("El trabajo "+this.trabajo+" se ha cambiado a "+trabajo)
    this.trabajo=trabajo
}
}

let persona = new Persona("Juan", 35, "programador");
let persona2 = new Persona("Miguel", 35, "serero");
persona.setTrabajo("serero");
persona2.setTrabajo("programador")