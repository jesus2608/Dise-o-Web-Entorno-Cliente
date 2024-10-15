function verificarParImpar(valor) {
    try {
      if (isNaN(valor)) {
        throw new Error('El valor ingresado no es un número');
      }
      
      if (valor % 2 === 0) {
        return `${valor} es un número par.`;
      } else {
        return `${valor} es un número impar.`;
      }
    } catch (error) {
      return `Error: ${error.message}`;
    } finally {
      console.log('Proceso de verificación completado.');
    }
  }
  
  // Ejemplo de uso:
  console.log(verificarParImpar(4));  
  console.log(verificarParImpar(7));  
  console.log(verificarParImpar('hola'));  
  