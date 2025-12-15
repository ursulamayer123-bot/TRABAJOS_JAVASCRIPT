const prompt = require ('prompt-sync')();
let numero = parseInt (prompt("Ingrese un numero: "));
let mensaje = (numero %2 === 0) ? "Es par" : "Es impar";
console.log(mensaje)