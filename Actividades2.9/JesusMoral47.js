let set = new Set([1, 2, 3]);
let set2= new Set( [2, 3, 4,]);
let set3 = new Set([...set].filter(value=> set2.has(value)));
 console.log(set3)