let array = ["id","nombre"];
let map = new Map();
for (let index = 0; index < array.length; index++) {
    if(index%2==0) // si el numero es par lo cogemos de clave y el siguiente lo cogemos de valor para que no se repitan valroes
    map.set(array[index], array[index+1]);
    
}
console.log(map)