// 1. Crea un array que almacene cinco animales

let myArray = ["Aguila", "León", "Oso", "Tiburón", "Perro"];

console.log(myArray);

// 2. Añade dos más. Uno al principio y otro al final

myArray.unshift("Araña");
myArray.push("Capibara");

console.log(myArray);

// 3. Elimina el que se encuentra en tercera posición

myArray.splice(2, 1);

console.log(myArray);

// 4. Crea un set que almacene cinco libros

let mySet = new Set([
  "El problema de los tres cuerpos",
  "Crónica de una muerte anunciada",
  "El club de la lucha",
  "Farenheit 451",
  "Hábitos atómicos",
]);

console.log(mySet);

// 5. Añade dos más. Uno de ellos repetido

mySet.add("Jump");
mySet.add("Crónica de una muerte anunciada");

console.log(mySet);

// 6. Elimina uno concreto a tu elección

mySet.delete("Hábitos atómicos");

console.log(mySet);

// 7. Crea un mapa que asocie el número del mes a su nombre

let myMap = new Map([
  [1, "Enero"],
  [2, "Febrero"],
  [3, "Marzo"],
  [4, "Abril"],
  [5, "Mayo"],
  [6, "Junio"],
  [7, "Julio"],
  [8, "Agosto"],
  [9, "Septiembre"],
  [10, "Octubre"],
  [11, "Noviembre"],
  [12, "Diciembre"],
]);

console.log(myMap);

// 8. Comprueba si el mes número 5 existe en el mapa e imprime su valor

if (myMap.has(5)) {
  console.log(myMap.get(5));
}

// 9. Añade al mapa una clave con un array como que almacene los meses de verano

myMap.set("Meses de verano", ["Junio", "Julio", "Agosto"]);

console.log(myMap);

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let miArray = ["Jorge", "Sánchez", "Vilorio", 29];
console.log(miArray);

let miSet = new Set(miArray);
console.log(miSet);

let miMap = new Map([
  [0, "Jorge"],
  [1, "Sánchez"],
  [2, "Vilorio"],
  [3, 29],
]);

console.log(miMap);
