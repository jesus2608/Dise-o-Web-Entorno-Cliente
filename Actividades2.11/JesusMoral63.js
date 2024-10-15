function operarNumeros(a, b, operacion) {
    try {
      let resultado;
      switch (operacion) {
        case 'suma':
          resultado = a + b;
          break;
        case 'resta':
          resultado = a - b;
          break;
        case 'multiplicacion':
          resultado = a * b;
          break;
        case 'division':
          if (b === 0) {
            throw new Error('No se puede dividir entre cero');
          }
          resultado = a / b;
          break;
        default:
          throw new Error('Operación no válida');
      }
      return `El resultado de la ${operacion} es: ${resultado}`;
    } catch (error) {
      return `Error: ${error.message}`;
    } finally {
      console.log('Operación completada.');
    }
  }
  
  // Ejemplo de uso:
  console.log(operarNumeros(10, 0, 'division'));
  console.log(operarNumeros(10, 5, 'suma'));
  