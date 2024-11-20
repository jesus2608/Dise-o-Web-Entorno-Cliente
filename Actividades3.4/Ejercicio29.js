const evenNumbers = {[Symbol.iterator]() { // implementamos el iterador
      let num = 0; // asi empieza
      return {next() {
          num += 2; // con el metodo next generamos el siguiente numero par
          return { value: num, done: false }; 
        }
      };
    }
  };
  
  
  const iterator = evenNumbers[Symbol.iterator]();
  console.log(iterator.next().value); 
  console.log(iterator.next().value); 
  console.log(iterator.next().value); 