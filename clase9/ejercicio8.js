const prompt = require('prompt-sync')();

let lado1 = parseFloat(prompt("Lado A: "));
let lado2 = parseFloat(prompt ( "Lado B: "));
let lado3 = parseFloat(prompt("Lado C: "));

if (lado1 === lado2 === lado3){
    console.log("El triángulo es equilatero.");
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3){
    console.log("El triángulo es Isósceles.");
} else 
    console.log("El triangulo es Escaleno.")