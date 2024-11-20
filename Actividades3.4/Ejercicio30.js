function* fibonacci() { // el asterisco dice que es una funcion que se puede parar y reanudarse
    let a = 0, b = 1;
    while (true) { // no tiene fin
      yield a; // lo para 
      [a, b] = [b, a + b]; // con esto calculamos la secuencia de fibonaci
    }
  }

  const fib = fibonacci(); // asignamos la funcion generada a un iterador
  console.log(fib.next().value); // cada vez que se llama la funcion se para y se retoma cada vez que se llama entonces se va incrementado
console.log(fib.next().value); 
console.log(fib.next().value); 
console.log(fib.next().value); 
console.log(fib.next().value); 
console.log(fib.next().value);
 console.log(fib.next().value); 
console.log(fib.next().value); 
console.log(fib.next().value); 