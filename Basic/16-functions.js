// Funciones

// Simple

function myFunc() {
  console.log("¡Hola, función!");
}

for (let i = 0; i < 5; i++) {
  myFunc();
}

// Con parámetros

function myFuncWithParams(name) {
  console.log(`¡Hola, ${name}!`);
}

myFuncWithParams("Jorge");
myFuncWithParams("Sánchez");

// Funciones anónimas

const myFunc2 = function (name) {
  console.log(`¡Hola, ${name}!`);
};

myFunc2("Jorge Sánchez");

// Arrow functions

const myFunc3 = (name) => {
  console.log(`¡Hola, ${name}!`);
};

myFunc3("Jorge Sánchez");

const myFunc4 = (name) => console.log(`¡Hola, ${name}!`);

myFunc4("Jorge Sánchez");

function sum(a, b) {
  console.log(a + b);
}

sum(5, 10);

// Por defecto

function defaultSum(a = 0, b = 0) {
  console.log(a + b);
}

defaultSum();
defaultSum(5);
defaultSum(5, 10);
defaultSum((b = 10));

// Retorno de valores

function mult(a, b) {
  return a * b;
}

let result = mult(5, 10);
console.log(result);

console.log(mult(5, 10));

// Funciones anidadas

function extern() {
  console.log("Función externa");
  function intern() {
    console.log("Función interna");
  }
  intern();
}

extern();
// intern() Error: fuera del scope

// Funciones de orden superior

function applyFunc(func, param) {
  func(param);
}

applyFunc(myFunc4, " función de orden superior");

// forEach

myArray = [1, 2, 3, 4];

mySet = new Set([
  "Jorge",
  "Sanchez",
  "willydev",
  29,
  true,
  "jorge@willydev.io",
]);

myMap = new Map([
  ["name", "Jorge"],
  ["email", "jorge@willydev.io"],
  ["age", 29],
]);

myArray.forEach(function (value) {
  console.log(value);
});

myArray.forEach((value) => console.log(value));

mySet.forEach((value) => console.log(value));

myMap.forEach((value) => console.log(value));
