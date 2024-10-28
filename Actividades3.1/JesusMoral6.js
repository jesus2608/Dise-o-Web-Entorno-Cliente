let personas = JSON.stringify([
    {"nombre": "Luis", "edad": 23, "nota": 8},
    {"nombre": "Ana", "edad": 21, "nota": 9},
    {"nombre": "Carlos", "edad": 22, "nota": 7},
]);

// Parsear la cadena JSON de vuelta a un objeto
let json = JSON.parse(personas);

// Incrementar la propiedad 'nota' de cada persona
for (let index = 0; index < json.length; index++) {
    json[index].nota++;
}
let json1=JSON.stringify(json)
console.log(json1);