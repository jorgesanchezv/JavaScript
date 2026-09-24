// 1. Escribe un comentario de una línea

// Este es un comentario de una línea

// 2. Escribe un comentario en varias líneas

/* 
Este es 
un comentario
de varias
líneas
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let nombre = "Jorge";
let number = 29;
let faith = true;
let indef;
let nulo = null;
let simbolo = Symbol("miSimbolo");
let bignum = BigInt(09802873489870923467298034750982398793874545);

// 4. Imprime por consola el valor de todas las variables

console.log(nombre);
console.log(number);
console.log(faith);
console.log(indef);
console.log(nulo);
console.log(simbolo);
console.log(bignum);

// 5. Imprime por consola el tipo de todas las variables

console.log(typeof nombre);
console.log(typeof number);
console.log(typeof faith);
console.log(typeof indef);
console.log(typeof nulo);
console.log(typeof simbolo);
console.log(typeof bignum);

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

nombre = "Moure";
number = 37;
faith = false;
indef;
nulo = null;
simbolo = Symbol("tuSimbolo");
bignum = BigInt(8978472398708235679698346529874397098347589729087423095);

// 7. A continuacion, modifica los valores de las variables por otros de distinto tipo

nombre = 96;
number = "Jorge";
faith = null;
indef;
Symbol("suSimbolo");
nulo = BigInt(0982798759027908265782637860923859623065823);
simbolo = bignum = true;

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const myName = "Hollow";
const myNumber = 30;
const isGod = true;
// const isUndef;
const isNull = null;
const mySymbol = Symbol("miSimbolo");
const myBigInt =
  BigInt(8978472398708235679698346529874397098347589729087423095);

// 9. A continuación modifica los valores de las constantes

// myName = "Ghost";
// myNumber = 31;
// isGod = false;
// isUndefined = "Hello";
// isNull = 90;
// mySymbol = Symbol("tuSimbolo");
// myBigInt =
//   BigInt(902873467092643975609803984725897209834760987489523479567092345);

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse
