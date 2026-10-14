// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios.

// 1. Crea un bucle que imprima los números del 1 al 20

for (let i = 1; i <= 20; i++) {
  console.log(i);
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

let suma = 0;
for (let i = 1; i <= 100; i++) {
  suma += i;
}
console.log(suma);

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

for (let i = 2; i <= 50; i += 2) {
  console.log(i);
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

const nombres = ["Alice", "Bob", "Charlie", "David"];
for (let nombre of nombres) {
  console.log(nombre);
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

let cadena = "Hola, ¿como estas?";
let contador = 0;
const vocales = "aeiouAEIOU";
for (let caracter of cadena) {
  if (vocales.includes(caracter)) {
    contador++;
  }
}
console.log(contador);

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

let myArray = [6, 1, 5, 2, 4];
let mult = 1;
for (let numero of myArray) {
  mult *= numero;
}
console.log(mult);

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

// 8. Usa un bucle para invertir una cadena de texto

let texto = "Jorge";
let textoInvertido = "";
for (let i = texto.length - 1; i >= 0; i--) {
  textoInvertido += texto[i];
}
console.log(textoInvertido);

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

let fib = [0, 1];
for (let i = 2; i < 10; i++) {
  fib[i] = fib[i - 1] + fib[i - 2];
}
console.log(fib);

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

let numeros = [5, 12, 3, 15, 8, 20];
let mayoresA10 = [];
for (let numero of numeros) {
  if (numero > 10) {
    mayoresA10.push(numero);
  }
}
console.log(mayoresA10);
