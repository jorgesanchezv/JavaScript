// objects

// sintaxis

let person = {
  name: "Jorge",
  age: 29,
  alias: "willy",
};

// Acceso a propiedades

// Notación de punto

console.log(person.name);

// Notación de corchetes
console.log(person["name"]);

// Modificación

person.name = "Jorge Sánchez";
console.log(person.name);

console.log(typeof person.age);
person.age = "29";
console.log(person.age);
console.log(typeof person.age);

// Eliminación de propiedaes

delete person.age;
console.log(person);

// Nueva propiedad

person.email = "jorge.sanchez@example.com";
console.log(person);

person["age"] = 29;
console.log(person);

// Métodos (funciones)

let person2 = {
  name: "Jorge",
  age: 29,
  alias: "willy",
  walk: function () {
    console.log("La persona camina");
  },
};

person2.walk();

// Anidación de objects

let person3 = {
  name: "Jorge",
  age: 29,
  alias: "willy",
  walk: function () {
    console.log("La persona camina");
  },
  job: {
    name: "Programador",
    exp: 15,
    work: function () {
      console.log(`La persona de ${this.exp} años de experiencia trabaja`);
    },
  },
};

console.log(person3);
console.log(person3.name);
console.log(person3.job);
console.log(person3.job.name);
person3.job.work();

let person4 = {
  name: "Jorge Sánchez",
  alias: "willy",
  email: "jorge.sanchez@example.com",
  age: 29,
};

console.log(person);
console.log(person4);

console.log(person == person4);
console.log(person === person4);

console.log(person.name == person4.name);

// Iteración

for (let key in person4) {
  console.log(key + ": " + person4[key]);
}

// Funciones como objetos

function Person(name, age) {
  this.name = name;
  this.age = age;
}

let person5 = new Person("Jorge", 29); // Debería ser una clase
console.log(person5);
console.log(person5.name);

console.log(typeof person5);
console.log(typeof person4);
