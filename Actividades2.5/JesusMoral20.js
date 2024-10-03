let toDolist = ["Hacer php", "Hacer js", "Hacer despliegues", "Hacer Figma", "Convalidar empresas"];
console.log(toDolist);
let indice = toDolist.indexOf("Convalidar empresas");
if(indice !== -1) toDolist.splice(indice,1);
console.log(toDolist);

