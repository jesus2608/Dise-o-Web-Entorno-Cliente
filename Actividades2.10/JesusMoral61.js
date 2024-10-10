let map = new Map();
let map2= new Map();
map.set("nombre","Ataulfo");
map.set("edad",19);
map2.set("ciudad","Jaen");
map.set("pais","España");
let map3= new Map(map);

function compara(map,map2){
let iguales = true;
if(!map.size==map2.size) // Verificar que tienen el mismo tamaño
    iguales = false;

else {
      // Verificar si ambos mapas tienen los mismos pares clave-valor
    for (let [key, value] of map) {
        if (!map2.has(key) || map2.get(key) !== value) {
          iguales= false;
        }
      }
    
}
if(iguales) return "Son iguales";
else return "No son iguales"; 
}
console.log(compara(map,map2))
console.log(compara(map,map3))