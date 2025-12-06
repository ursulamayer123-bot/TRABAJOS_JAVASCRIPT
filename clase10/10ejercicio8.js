const prompt = require ('prompt-sync')();

let celsius = parseFloat (prompt ("Ingrese la temperatura en celsius: "));
let farenheit = celsius * 9/5 + 32;
console.log ("La temperatura en grados farenheit es " + farenheit);