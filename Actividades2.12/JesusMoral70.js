class Trabajador{
    #nombre
    #salario
    constructor(nombre, salario){
        this.nombre=nombre;
        this.salario=salario;
    }
    trabajar() {
        console.log(this.nombre+" esta trabajando");
    }

}
class Gerente extends Trabajador{
    constructor(nombre, salario){super(nombre,salario);}
    dirigir(){
        console.log(this.nombre + " es el manijero");
    }
}

let chambeador = new Trabajador("Alejandro", 1600)
let chambeador1 = new Gerente("Jesus", 1600)

chambeador.trabajar()
chambeador1.trabajar();
chambeador1.dirigir();