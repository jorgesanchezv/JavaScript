// set

// Declaración

let mySet = new Set();

console.log(mySet);

// Inicialización

mySet = new Set([
  "Jorge",
  "Sanchez",
  "willydev",
  29,
  true,
  "jorge@willydev.io",
]);

console.log(mySet);

// Métodos comunes

// add y delete

mySet.add("https://willy.dev");

console.log(mySet);

mySet.delete("https://willy.dev");

console.log(mySet);

console.log(mySet.delete("Jorge"));
console.log(mySet.delete(4));

console.log(mySet);

// has

console.log(mySet.has("Sanchez"));
console.log(mySet.has("Jorge"));

// size

console.log(mySet.size);

// Convertir un set a array

let myArray = Array.from(mySet);
console.log(myArray);

// Convertir un array a set

mySet = new Set(myArray);
console.log(mySet);

// No admite duplicados

mySet.add("jorge@willydev.io");
mySet.add("jorge@willydev.io");
mySet.add("Jorge@willydev.io");
console.log(mySet);
