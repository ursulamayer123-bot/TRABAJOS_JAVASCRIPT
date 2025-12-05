const prompt = require ('prompt-sync')();

let edad = parseInt(prompt("Ingrese su edad: "));

if (edad <= 18){
    console.log("Sos menor de edad.")
} else {
    console.log("Sos mayor de edad.")
}