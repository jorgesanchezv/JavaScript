// 1. Crea una variable para cada operación aritmética

let suma = 2 + 5;
let resta = 2 - 5;
let multi = 2 * 5;
let divi = 2 / 5;
let modulo = 2 % 5;
let expo = 2 ** 5;

// 2. Crea una variable para cada tipo de operación de asignación, que haga uso
// de las varibles utilizadas para las operaciones aritméticas

let myVariable = suma;
myVariable += 1;
let myVariable2 = resta;
myVariable2 -= 1;
let myVariable3 = multi;
myVariable3 *= 2;
let myVariable4 = divi;
myVariable4 /= 2;
let myVariable5 = modulo;
myVariable5 %= 2;
let myVariable6 = expo;
myVariable6 **= 2;

// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparación

let a = 5;
console.log(10 > 3);
console.log(a >= 1);
console.log(a === a);
console.log(1 == true);
console.log(undefined == null);

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

let b = -7;
console.log(3 > 4);
console.log(b >= 1);
console.log(b === "7");
console.log(0 == true);
console.log(undefined === null);

// 5. Utiliza el operador lógico and

console.log(a > b && b > 0);

// 6. Utiliza el operador lógico or

console.log(a > b || b > 0);

// 7. Combina ambos operadores lógicos

console.log((1 > b || 10 < a) && b <= a);

// 8. Añade alguna negación

console.log((1 > b || 10 < a) && !(b <= a));

// 9. Utiliza el operador ternario

const faith = true;
faith ? console.log("Dios te bendiga") : console.log("busca a Dios");

// 10. Combina operadores aritméticos, de comparación y lógicos

console.log(69 >= 47 + 22 && 20 > 18);
