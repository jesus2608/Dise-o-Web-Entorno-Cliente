/**
 * Funcion principal que viene desde que lo haciamos asi con Eladio
 * 
 * Cuando se envía el formulario, esta función obtiene la URL proporcionada por el usuario
 * hace una solicitud a la API de Game para obtener la información del producto
 * y luego hace una segunda solicitud a la API de PlayStation para obtener los resultados relacionados.
 * 
 * Los resultados obtenidos se muestran dinámicamente en el HTML.
 * 
 * @returns {void}
 */
function main() {
  $('#formulario').submit(function (event) {
    event.preventDefault();
    let titulo = '';
    let precio = '';
    let plataforma = '';
    let url = $('#url').val();

    /**
     * Realiza una solicitud a la API de Game con la URL proporcionada.
     * @throws {Error} Si la solicitud a la API de Game o PlayStation falla.
     */
    fetch("http://localhost:3000/api/productoGame?url=" + url)
      .then(response => response.json())
      .then(data => { 
        titulo = data[0].texto;
        precio = data[0].precio;
        plataforma = data[0].plataforma;
        imagen = data[0].imagen;

        $('#resultado').append('<span> Nombre: ' + titulo + '</span><br>');
        $('#resultado').append('<span>Precio: ' + precio + '</span><br>');
        $('#resultado').append('<span>Plataforma: ' + plataforma + '</span><br>');    
        $('#resultado').append('<span>Imagen: <img src= "' + imagen + '" alt="imagen"></span><br>');    

    

        return fetch("http://localhost:3000/api/productoPlay?name=" + titulo);
      })
      .then(response => response.json())
      .then(data => {
        for (let index = 0; index < data.length; index++) {
          if (data[index] && data[index].nombre && data[index].precio) {
            $('#resultado1').append('<li> Producto: ' + data[index].nombre + ' Precio: ' + data[index].precio + '<img src ="'+data[index].imagen+'"</li>');
          }
        }
      })
      .catch(error => {
        console.log(error);
        $('#resultado1').append('<h3>Error al buscar el juego <h3/><br>');
        $('#resultado').append('<h3>Error al buscar el juego <h3/><br>');
      });
  });
}

main();
