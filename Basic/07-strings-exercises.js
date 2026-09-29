// 1. Concatena dos cadenas de texto

let nombre = "Jorge";
let email = "jorge.sanchez@conatel.gob.hn";
let greeting = "¡Hola, " + nombre + "!";

console.log(greeting);

// 2. Muestra la longitud de una cadena de texto

console.log(nombre.length);

// 3. Muestra el primer y último carácter de un string

console.log(nombre[0]);
console.log(nombre[4]);

// 4. Convierte a myúsculas y minúsculas un string

console.log(nombre.toUpperCase());
console.log(nombre.toLowerCase());

// 5. Cra una cadena de texto en varias líneas

let message = `Esta es
    una cadena
    de texto 
    en 
    varias líneas`;

console.log(message);

// 6. Interpola el valor de una variable en un string

let sms = `¡Hola ${nombre}! Este es tu correo: ${email}`;
console.log(sms);

// 7. Reemplaza todos los espacios en blanco de un string por guiones

console.log(sms.replaceAll(" ", "-"));

// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log(greeting.includes("Jorge"));

// 9. Comprueba si dos strings son iguales

let nombre2 = "Brais";
console.log(nombre == nombre2);

// 10. Comprueba si dos strings tienen la misma longitud

console.log(nombre.length == nombre2.length);
