let productos = JSON.stringify([
    {"nombre": "Laptop", "precio":1500, "stock":5},
    {"nombre": "Teclado", "precio":50, "stock":15},
    {"nombre": "Monitor", "precio":200, "stock":8}
]);
let json = JSON.parse(productos);
for (let index = 0; index < json.length; index++) {
    if(json[index].precio>100){
        console.log(json[index].nombre)
    }
    
}
