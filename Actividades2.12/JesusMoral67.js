class coche{
    #marca
    #modelo
    #año
    constructor(marca, modelo, año){
        this.marca=marca
        this.modelo=modelo
        this.año=año

    }
    descripcion() {
      console.log("Este coche es de "+this.marca+" de modelo "+this.modelo+" y del año "+this.año) 
    }
    
}

let coche1 = new coche("citroen", "Piccaso", 1999);
coche1.descripcion()