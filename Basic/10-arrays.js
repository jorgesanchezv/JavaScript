// array

// Declaración

let myArray = [];
let myArray2 = new Array();

console.log(myArray);
console.log(myArray2);

// Inicialización

myArray = [3];
myArray2 = new Array(3);

console.log(myArray);
console.log(myArray2);

myArray = [1, 2, 3, 4];
myArray2 = new Array(1, 2, 3, 4);

console.log(myArray);
console.log(myArray2);

myArray = ["Jorge", "Sánchez", "willydev", 29, true];
myArray2 = new Array("Jorge", "Sánchez", "willydev", 29, true);

console.log(myArray);
console.log(myArray2);

myArray2 = new Array(3);
myArray2[2] = "Jorge";
// myArray2[0] = "Sánchez";
myArray2[1] = "willydev";
myArray2[4] = "willydev";

console.log(myArray2);

myArray = [];
myArray[2] = "Jorge";
// myArray[0] = 'Sánchez'
myArray[1] = "willydev";

console.log(myArray);

//Métodos comunes

myArray = [];

// push y pop

myArray.push("Jorge");
myArray.push("Sánchez");
myArray.push("willydev");
myArray.push(29);

console.log(myArray);

console.log(myArray.pop()); // Elimina el último y lo devuelve
myArray.pop();

console.log(myArray);

// shift y unshift

console.log(myArray.shift());
console.log(myArray);

myArray.unshift("Jorge", "willydev");
console.log(myArray);

// length

console.log(myArray.length);

// clear

myArray = [];
myArray.length = 0; //alternativa
console.log(myArray);

// slice

myArray = ["Jorge", "Sánchez", "willydev", 29, true];

let myNewArray = myArray.slice(1, 3);

console.log(myArray);
console.log(myNewArray);

// splice

myArray.splice(1, 3);
console.log(myArray);

myArray = ["Jorge", "Sánchez", "willydev", 29, true];

myArray.splice(1, 2, "Nueva entrada");
console.log(myArray);
