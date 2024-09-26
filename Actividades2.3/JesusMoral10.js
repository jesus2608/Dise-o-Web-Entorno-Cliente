
let peliculaElegida= prompt("Ingresa tu pelicula favorita a la lista: RAMBO,  kun fu panda, Van helsing");
switch(peliculaElegida){
    case "RAMBO":document.write(`
        <h2>Su ticket ha sido emitido para Rambo</h2>
                    <img src="https://www.lavanguardia.com/peliculas-series/images/movie/poster/1982/10/w780/sYHRcd9p3rV3t3w8MHGaA7wdIBl.jpg" alt="Rambo" width="300">
                    <p>Disfrute de la película <strong>Rambo</strong>.</p>`
    ); break; 
    case "kun fu panda": document.write(`
        <h2>Su ticket ha sido emitido para Kung Fu Panda 1</h2>
        <img src="https://www.mubis.es/media/articles/294/7383/fecha-de-venta-del-blu-ray-3d-de-kung-fu-panda-xl.jpg" alt="Kung Fu Panda 1" width="300">
        <p>Disfrute de la película <strong>Kung Fu Panda 1</strong>.</p>
    `);break; 
    case "Van helsing":document.write(`
        <h2>Su ticket ha sido emitido para Van Helsing</h2>
        <img src="https://ibi.gsstatic.es/sfAttachPlugin/getCachedContent/id/264446/width/370/height/500" alt="Van Helsing" width="300">
        <p>Disfrute de la película <strong>Van Helsing</strong>.</p>
    `); break; 
    default: alert("Esa pelicula no esta en la lista"); break;
}