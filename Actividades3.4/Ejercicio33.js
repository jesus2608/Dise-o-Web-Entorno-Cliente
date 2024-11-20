const cache= new WeakMap();

function* generadorPotencias(base) {
  let exp = 1; // iniciamos el exponente a 0
  while (true) {
    const key = { base, exp }; // creamos la clave en base al exponente y la base
    if (cache.has(key)) {
      console.log("Retornando valor de la cache");
      yield cache.get(key); // retorna el valor de la cache
    } else {
      const result = base ** exp; // se hace la potencia
      cache.set(key, result); // el resultado se mete en la cache
      console.log("Se calcula el nuevo resultado");
      yield result; // se devuelve el resultado
    }
    exp++; // se incrementa el exponente
  }
}
const powerGen = generadorPotencias(2); // se hace la prueba con potencias de 2
console.log(powerGen.next().value); 
console.log(powerGen.next().value); 
console.log(powerGen.next().value); 
