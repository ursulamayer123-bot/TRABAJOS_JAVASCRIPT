const prompt = require ('prompt-sync')();
const RANGO_MINIMO = 20;
const RANGO_MAXIMO = 50;
let numeroUser = parseFloat(prompt ("Ingrese un número para verificar el rango: "));
if (numeroUser >= RANGO_MINIMO && numeroUser <= RANGO_MAXIMO){
    console.log("El  número está dentro del rango.");
} else {
    console.log ("No está dentro el rango");
}