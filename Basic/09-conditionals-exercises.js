// todo if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let nombre = "Jorge";

if (nombre === "Jorge") {
  console.log("Jorge");
}

// 2. Imprime por consola un mensaje si el usuario y contraseña coincide con unos establecidos

let usuario = "Brais";
let contra = "Mouredev";

if (usuario === "Brais" && contra === "Mouredev") {
  console.log("¡Hola Brais! Bienvenido");
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let num = 2;

if (num < 0) {
  console.log("El número es negativo");
} else if (num == 0) {
  console.log("El número es cero");
} else {
  console.log("El número es positivo");
}

// 4. Verifica si una persona puede votar o no (Mayor o igual a 18) e indica cuántos años le falta

let age = 13;

if (age >= 18) {
  console.log("Puede votar");
} else {
  console.log("Años restantes para votar: " + (18 - age));
}

// 5. Usa el operador ternario para asigar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad

const x = age > 21 ? "Adulto" : "Menor";
console.log(x);

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let mes = "abril";

if (mes === "diciembre" || mes === "enero" || mes === "febrero") {
  console.log("Invierno");
} else if (mes === "marzo" || mes === "abril" || mes === "mayo") {
  console.log("Primavera");
} else if (mes === "junio" || mes === "julio" || mes === "agosto") {
  console.log("Verano");
} else {
  console.log("Otoño");
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

if (
  mes === "abril" ||
  mes === "junio" ||
  mes === "septiembre" ||
  mes === "noviembre"
) {
  console.log("30 días");
} else if (mes === "febrero") {
  console.log("28 días");
} else {
  console.log("31 días");
}

// todo switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let idioma = "Portugues";
let message;

switch (idioma) {
  case "Español":
    console.log("Buenos días");
    break;
  case "English":
    console.log("Good Morning");
    break;
  case "Portugues":
    console.log("Bom Día");
    break;

  default:
    console.log("No es un idioma soportado");
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6

switch (mes) {
  case "diciembre":
  case "enero":
  case "febrero":
    console.log("Invierno");
    break;

  case "marzo":
  case "abril":
  case "mayo":
    console.log("Primavera");
    break;

  case "junio":
  case "julio":
  case "agosto":
    console.log("Verano");
    break;

  case "septiembre":
  case "octubre":
  case "noviembre":
    console.log("Otoño");
    break;

  default:
    console.log("No es un mes");
}

// 10. Usa switch para hacer de nuevo el ejercicio 7

switch (mes) {
  case "abril":
  case "junio":
  case "septiembre":
  case "noviembre":
    console.log("30 días");
    break;

  case "febrero":
    console.log("28 días");
    break;

  default:
    console.log("31 días");
}
