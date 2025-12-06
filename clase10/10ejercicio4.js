const prompt = require ('prompt-sync')();

let VERDADERO = true;
let TEXTO = "Que onda";
let NUMERO = 8;
let NADA = null;

let suma = NUMERO + 183;
console.log ("El resultado de la suma es " + suma)

let textos = TEXTO + " como andas amigo?"
console.log (textos)

if ( VERDADERO === true){
    console.log ("Es verdadero")
} else {
    console.log("Es falso")
}

if (NADA === null){
    console.log("Nada es nulo")
}