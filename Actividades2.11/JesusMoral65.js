async function simularPeticionAPI(exito) {
    try {
      let respuesta;
      
      // Simulamos una petición exitosa o fallida
      if (exito) {
        respuesta = await Promise.resolve('Datos recibidos correctamente.');
      } else {
        respuesta = await Promise.reject('Error al realizar la petición.');
      }
      
      console.log(respuesta);
    } catch (error) {
      console.error(`Error: ${error}`);
    } finally {
      console.log('La petición ha terminado.');
    }
  }
  
  // Ejemplo de uso:
  
  // Simula una petición exitosa
  simularPeticionAPI(true);
  
  // Simula una petición fallida
  simularPeticionAPI(false);
  