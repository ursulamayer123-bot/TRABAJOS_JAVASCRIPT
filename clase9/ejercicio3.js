const prompt = require ('prompt-sync')();
let condicion1 = prompt ("Ingrese el primer valor booleano: ");
let condicion2 = prompt ("Ingrese el segundo valor booleano: ");
console.log( "----Resultados lógicos----")
console.log("AND (&&) : " + (condicion1 && condicion2));
console.log("OR (||) : " + (condicion1 || condicion2));
console.log ("NOT (!) : " + (!condicion1));
console.log ("NOT (!) : " + (!condicion2));
