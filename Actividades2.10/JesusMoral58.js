let map = new Map();
let map2= new Map();
map.set("nombre","Ataulfo");
map.set("edad",19);
map2.set("ciudad","Jaen");
map.set("pais","España");
let map3 = new Map(map,map2);
console.log(map3)
