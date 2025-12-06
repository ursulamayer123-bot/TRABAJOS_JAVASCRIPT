const prompt = require ('prompt-sync')();

let peso = 100
let edad = 24

let usernombre = prompt ("Ingresu su nombre: ");
let userpeso = parseFloat (prompt ("Ingrese su peso: "));
let useredad = parseInt (prompt ("Ingrese su edad: "));

console.log ( " Su nombre es " + usernombre + ", tenes " + useredad + " años y pesas " + userpeso + "kg.");
