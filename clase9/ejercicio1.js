const prompt = require ('prompt-sync')();

let numero1 = parseFloat(prompt("Ingrese el primer número: "));
let numero2 = parseFloat (prompt("Ingrese el segundo número: "));

if (numero1 > numero2){
    console.log(numero1 + " Es mayor que " + numero2);
} else if ( numero2 > numero1){
    console.log( numero2 + " es mayor que " + numero1);
} else{
    console.log(numero1 + " es igual a " + numero2);
}