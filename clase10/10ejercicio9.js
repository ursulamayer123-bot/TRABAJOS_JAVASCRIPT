const prompt = require ('prompt-sync')();
let peso = parseFloat(prompt("Ingrese su peso: "));
let altura = parseFloat ( prompt ("Ingrese su altura: "));

let imc = peso / (altura * altura);

console.log("Tu indice de IMC es: " + imc);