let array = [
    { id: 1, name: 'Object 1' },
    { id: 2, name: 'Object 2' },
    { id: 1, name: 'Object 3' }, 
    { id: 3, name: 'Object 4' },
    { id: 2, name: 'Object 5' }  // Duplicado 
];
let set = new Set(array.filter(value,value2=> value.id==value2.id?delete(value2):value))
// Este no me sale