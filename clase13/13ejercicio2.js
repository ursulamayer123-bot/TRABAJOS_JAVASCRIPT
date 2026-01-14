const prompt = require ('prompt-sync')();
const encontrarMayor = function (a, b){
    if(a > b){
        return a;
    } else if (b > a){
        return b
    } else {
        return "Son iguales";
    }
}
let n1 = parseFloat(prompt("Ingresa un numero: "));
let n2 = parseFloat (prompt("Ingresa el segundo numero: "));
console.log("El numero mayor es: " + encontrarMayor(n1,n2));