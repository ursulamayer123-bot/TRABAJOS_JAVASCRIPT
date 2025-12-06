const prompt = require ('prompt-sync')();
let a = 9
let b = 5

console.log ("Antes del intercambio, a = " + a + " y b = " + b );

[a,b] = [b,a]

console.log ("Despues del intercambio, a = " + a + " y b = " + b);