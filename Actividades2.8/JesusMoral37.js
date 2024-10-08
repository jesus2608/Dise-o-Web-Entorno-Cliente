let producto={
    nombre:"portatil", precio:500, cantidad:1
}
let producto2= Object.assign({},producto);
producto2.cantidad=2;
producto.cantidad=1;
console.log(producto);
console.log(producto2);