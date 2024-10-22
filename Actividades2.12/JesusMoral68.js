class Rectangulo{
#altura 
#ancho
constructor(altura, ancho){
    this.altura=altura;
    this.ancho=ancho;
}
area(){
    let area = this.altura*this.ancho;
    console.log(area);
}

}

let rectangulo = new Rectangulo(3,4);
let rectangulo2 = new Rectangulo(3,5);
rectangulo.area();
rectangulo2.area();

