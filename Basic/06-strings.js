// Strings

// Concatenación
let myName = "Jorge";
let greeting = "Hola, " + myName + "!";
console.log(greeting);
console.log(typeof greeting);

// Longitud
console.log(greeting.length);

// Acceso a caracteres
console.log(greeting[0]);
console.log(greeting[1]);
console.log(greeting[11]);

// Métodos comunes
console.log(greeting.toUpperCase());
console.log(greeting.toLowerCase());
console.log(greeting.indexOf("Jorge"));
console.log(greeting.indexOf("Hola"));
console.log(greeting.indexOf("willy"));
console.log(greeting.includes("Jorge"));
console.log(greeting.includes("Hola"));
console.log(greeting.includes("willy"));
console.log(greeting.slice(0, 10));
console.log(greeting.replace("Jorge", "Willy"));

// Template literals (plantillas literales)
let message = `Hola, este es mi
curso de JavaScript`;

console.log(message);

let email = "willy@dev.io";

console.log(`Hola, ${myName}! Tu email es ${email}.`);
