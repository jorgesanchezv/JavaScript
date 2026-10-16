// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios.

// 1. Crea una función que reciba dos números y devuelva su suma

function suma(a, b) {
  console.log(a + b);
}

suma(5, 10);

// 2. Crea una función que reciba un array de números y  devuelva el mayor de ellos

let numeros = [5, -12, 8, 0, -3];

function maxNumber() {
  let max = numeros[0];

  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > max) {
      max = numeros[i];
    }
  }
  console.log(max);
}

maxNumber();

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

let cadena = "Hola, ¿como estas?";
let contador = 0;
const vocales = "aeiou";

function contarVocales() {
  for (let caracter of cadena) {
    if (vocales.includes(caracter.toLowerCase())) {
      contador++;
    }
  }
  console.log(contador);
}

contarVocales();

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

let palabras = ["hola", "mundo", "javascript"];

function convertirAMayusculas() {
  let palabrasMayusculas = [];
  for (let palabra of palabras) {
    palabrasMayusculas.push(palabra.toUpperCase());
  }
  console.log(palabrasMayusculas);
}

convertirAMayusculas();

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

function esPrimo(num) {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(esPrimo(5));

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

let arr1 = [5, -12, 8, 0, -3];
let arr2 = [-12, 34, 8, 5, 1];

function numIguales(arr1, arr2) {
  let comunes = [];

  for (let num of arr1) {
    if (arr2.includes(num)) {
      comunes.push(num);
    }
  }

  return comunes;
}

console.log(numIguales(arr1, arr2));

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

let numbers = [5, 12, 3, 15, 8, 20];

function sumaPares() {
  let sum = 0;

  for (let number of numbers) {
    if (number % 2 === 0) {
      sum += number;
    }
  }
  return sum;
}

console.log(sumaPares());

// 8. Crea una funcion que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

let nums = [5, 12, 3, 15, 8, 20];

function convertirACuadrados() {
  let cuadrados = [];
  for (let num of nums) {
    cuadrados.push(num ** 2);
  }
  return cuadrados;
}

console.log(convertirACuadrados());

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabreas en orden inverso

let mensaje = "Hello my name is Jorge Sánchez";

function invertirPalabras() {
  return mensaje.split(" ").reverse().join(" ");
}

console.log(invertirPalabras());

// 10. Crea una función que calcule el factorial de un número dado

function factorial(num) {
  let resultado = 1;

  for (let i = num; i > 0; i--) {
    resultado *= i;
  }
  return resultado;
}

console.log(factorial(5));
