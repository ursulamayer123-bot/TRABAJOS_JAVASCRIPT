const prompt = require ('prompt-sync')();

let pesokg = parseFloat(prompt("Ingrese su peso en kg: "));
let conversion = pesokg * 2.20462

console.log( "Su peso en libras es: " + conversion)