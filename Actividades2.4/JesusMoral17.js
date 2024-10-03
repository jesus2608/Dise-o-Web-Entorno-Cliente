function facturacion(precio, medioPago){
    let descuento = 0;
if (precio<200)
    descuento = 1;
else if(precio>200&& precio <400 && medioPago=="efectivo")
    descuento = 30/100;
else if(precio>200&& precio <400 && medioPago=="debito")
    descuento = 20/100;
else if(precio>200&& precio <400 && medioPago=="credito")
    descuento = 10/100;
else if (precio>400)
    descuento = 40/100;

total= parseInt(precio-(precio*descuento));

alert("El precio es "+total);
}
facturacion(1000,"credito");
