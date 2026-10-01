// Map

// Declaración

let myMap = new Map();

console.log(myMap);

// Inicialización

myMap = new Map([
  ["name", "Jorge"],
  ["email", "jorge@willydev.io"],
  ["age", 29],
]);

console.log(myMap);

// Métodos y propiedades

// set

myMap.set("alias", "willy");
myMap.set("name", "Jorge Sánchez");
console.log(myMap);

// get

console.log(myMap.get("name"));
console.log(myMap.get("surname"));

// has

console.log(myMap.has("name"));
console.log(myMap.has("surname"));

// delete

myMap.delete("email");
console.log(myMap);

// keys, values y entries

console.log(myMap.keys());
console.log(myMap.values());
console.log(myMap.entries());

// size

console.log(myMap.size);

// clear

myMap.clear();
console.log(myMap);
