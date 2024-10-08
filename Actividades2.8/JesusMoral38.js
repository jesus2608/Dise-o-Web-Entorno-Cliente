let animal = {
    hablar:function(){
        console.log("Hola");
    }
}
let perro = Object.create(animal);
perro.hablar=function(){console.log("Guau")};
console.log(animal.hablar());
console.log(perro.hablar())