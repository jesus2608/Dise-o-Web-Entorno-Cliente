let personas = JSON.stringify([
    {"nombre": "Sara", "edad":25},
    {"nombre": "Juan", "edad":28},
    {"nombre": "Pablo", "edad":32},
]);
let json = JSON.parse(personas);
for (let index = 0; index < json.length; index++) {
    console.log(json[index].nombre +" "+ json[index].edad);
    
}
