const prompt = require('prompt-sync')();
let numIngresado = 0
let suma = 0
console.log("Ingresa numeros positivos para sumar y para terminar la cuenta ingresa uno negativo")
while (numIngresado >=0){
    numIngresado = parseFloat(prompt("Ingresa un numero"));
    if (numIngresado >=0)
        suma = suma + numIngresado;

}
console.log("La suma de los numeros es: "+ suma)