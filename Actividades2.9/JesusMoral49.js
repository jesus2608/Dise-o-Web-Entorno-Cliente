let set = new Set([1, 2]);
let set2= new Set( [1, 2, 3, 4,]);
let boolean = [...set].every(value => set2.has(value));

console.log(boolean); // true
