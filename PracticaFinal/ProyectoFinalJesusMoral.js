class Producto{
    static #id=0;
    #idProducto;
    #nombre;
    precio;
    stock;
    constructor(nombre, precio , stock){

        this.#idProducto = Producto.#id++;
        this.#nombre=nombre;
        this.precio= precio;
        this.stock=stock;
    }
    mostrarInfo(){
        return this.#nombre + " con id: " +
        this.getId() + " tiene un precio de  "+
        this.precio + " y tenemos " +
        this.stock + " unidades";
    }
    
    getId(){
        return this.#idProducto;
    }

}
class Ventas{
	nombreCliente;
    idProducto;
    cantidadComprada;
    totalCompra;
    constructor(nombreCliente, idProducto, cantidadComprada, totalCompra){
        this.nombreCliente=nombreCliente;
        this.idProducto=idProducto;
        this.cantidadComprada=cantidadComprada;
        this.totalCompra=totalCompra;
    }
    resumenVenta(){
        console.log("Venta realizada");
        console.log("Nombre del cliente:"+this.nombreCliente+
            " \nId del producto: "+this.idProducto+
            " \nTotal: "+this.totalCompra
        );
    }
}

class Tienda{
    #productos = new Map();
    #clientes = new Set();
    #ventas = [];
    constructor(productos=new Map(),clientes= new Set(), ventas=[]){
        this.productos=productos;
        this.clientes=clientes;
        this.ventas=ventas;
    }
    agregarProducto(producto){
        this.productos.set(producto.getId(),producto);
    }
    actualizarStock(idProducto, cantidad){
        this.productos.get(idProducto).stock=cantidad;

    }
    mostrarInventario(){
        for (let index = 0; index < this.productos.size; index++) {
            this.productos.get(index).mostrarInfo();
        }
    }
    registrarCliente(nombreCliente){
        if(!this.clientes.has(nombreCliente))// si esta lo añade si no no
        this.clientes.add(nombreCliente);
        else console.log("Este cliente ya esta no se puede añadir")
    }
    realizarVenta(nombreCliente, idProducto, cantidad){
        //comprobamos si el cliente esta registrado y si no lo esta lo añadimos
        if(this.clientes.has(nombreCliente)){
            console.log("Bienvenido "+nombreCliente);
        }else{ console.log("Registrando nuevo cliente")
            this.registrarCliente(nombreCliente);
        }
        //comprobamos el stock y creamos la venta
        let producto = this.productos.get(idProducto);
        if (!producto) {
            console.log("Producto no encontrado");
        } else if (cantidad > producto.stock) {
            console.log("No hay suficiente stock para realizar la venta");
        }else {
        let totalCompra = cantidad * producto.precio;
        producto.stock -= cantidad;
        // Registrar la venta
        let venta = new Ventas(nombreCliente, idProducto, cantidad, totalCompra);
        this.#ventas.push(venta);
        venta.resumenVenta();
        }
    }
    mostrarVentas(){
        for (let index = 0; index < this.ventas.length; index++) {
            this.ventas[index].resumenVenta();
            
        }
    }
    productosSinStock(){
        const productosArray = Array.from(this.productos.values()); // convierte los valores del map a un array
        let productos0= productosArray.filter(producto=> producto.stock===0);
        if (productos0.length==0) console.log("No hay ningun producto con stock cero"); // los filtra y los muestra si su stock es cero
        else{
            for (let index = 0; index < productos0.length; index++) {
                console.log(productos0[index].mostrarInfo());
                
            }
        } ;
    }
    ventasPorCliente(nombreCliente){
        let ventasCliente = this.ventas.filter(venta=>venta.nombreCliente===nombreCliente);
        //recorremos las ventas de ese cliente
        for (let index = 0; index < ventasCliente.length; index++) {
            ventasCliente[index].resumenVenta();
            
        }

    }
    ingresosTotales(){
        let acumulador = 0;
        for (let index = 0; index < this.#ventas.length; index++) {
            acumulador+=this.#ventas[index].totalCompra; 
        }
        console.log("Los ingresos totales son de "+ acumulador);
    }
}


function main() {
    let tienda = new Tienda(); 

    let producto1 = new Producto("PS5", 800, 5);
    let producto2 = new Producto("XBOX", 500, 10);
    let producto3 = new Producto("SWITCH", 300, 15);
    let producto4 = new Producto("IPHONE 16", 1000, 3);
    let producto5 = new Producto("PC", 700, 4);


    tienda.agregarProducto(producto1);
    tienda.agregarProducto(producto2);
    tienda.agregarProducto(producto3);
    tienda.agregarProducto(producto4);
    tienda.agregarProducto(producto5);

 
    console.log("ID del producto PS5: " + producto1.getId());
    console.log("ID del producto XBOX: " + producto2.getId());
    console.log("ID del producto SWITCH: " + producto3.getId());
    console.log("ID del producto IPHONE 16: " + producto4.getId());
    console.log("ID del producto PC: " + producto5.getId());


    tienda.registrarCliente("Juan");
    tienda.registrarCliente("Jesus");
    tienda.registrarCliente("Juan"); 


    tienda.realizarVenta("Jesus", 3, 2); 
    tienda.realizarVenta("Jesus", producto5.getId(), 1); 


    tienda.mostrarInventario();


    tienda.mostrarVentas();
    tienda.ingresosTotales();
    tienda.realizarVenta("Juan", 0, 10);
    tienda.realizarVenta("Paula",0,3);
    tienda.realizarVenta("Jose",0,4);
    tienda.productosSinStock();
    tienda.realizarVenta("Jose",0,1);
    tienda.realizarVenta("Jose",0,1);
    tienda.realizarVenta("Jose",0,1);
    tienda.productosSinStock();
    tienda.ingresosTotales();

}

main();