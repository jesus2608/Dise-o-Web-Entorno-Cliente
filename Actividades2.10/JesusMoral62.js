const arrayConDuplicados = [
    { id: 1, nombre: 'Juan' },
    { id: 2, nombre: 'María' },
    { id: 1, nombre: 'Juan' }, 
    { id: 3, nombre: 'Pedro' },
    { id: 2, nombre: 'María' }, 
  ];
  let map = new Map();
  for (let index = 0; index < arrayConDuplicados.length; index++) {
    const element = arrayConDuplicados[index];
    map.set(element.id,element.nombre);

  }
  console.log(map);