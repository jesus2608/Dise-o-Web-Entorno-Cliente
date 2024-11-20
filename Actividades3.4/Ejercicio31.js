const cache = new WeakMap(); // creamos el weakMao

function fetchData(objeto) {
  if (cache.has(objeto)) { // si tiene tiene el objeto en cache lo devuleve si no no

    console.log("Returning cached data");
    return cache.get(objeto); 
  }
  
  const data = { result: `Data for ${objeto.name}` }; // simula un dato nuevo
  cache.set(objeto, data); // guarda el dato en la cache
  console.log("Fetching new data");
  return data; //devuelve los datos generados
}

// creamos los objetos
const usuario1 = { nombre: "Usuario1" };
const usuario2 = { nombre: "Usuario2" };

// Primera llama se crea los datos
console.log(fetchData(usuario1)); 
console.log(fetchData(usuario2)); 

// Segunda llamada se usa el cache
console.log(fetchData(usuario1)); 
