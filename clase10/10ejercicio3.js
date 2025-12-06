const prompt = require ('prompt-sync')();

const EDAD_MINIMA = 18
const EDAD_MAXIMA = 99

let userEdad = parseInt (prompt ("Ingrese su edad: "));
if (userEdad > 18 && userEdad < 99){
    console.log("Estas en el rango de edad adecuado.")
} else {
    console.log( "Estas fuera del rango.")
}