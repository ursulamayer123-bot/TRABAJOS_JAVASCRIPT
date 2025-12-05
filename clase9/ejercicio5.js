const prompt = require ('prompt-sync')();
let n1 = parseFloat(prompt("Ingrese el primer valor: "));
let n2 = parseFloat(prompt("Ingrese el segundo valor: "));
let n3 = parseFloat(prompt("Ingrese el tercer valor: "));

if (n1 > n2 && numero1 > n3){
    console.log("El mayor es el primero: " + n1);
} else if (n2 > n1 && n2 > n3){
    console.log("El mayor es el segundo: " + n2);
 
} else{
    console.log ("El tercero es el mayor: " + n3);
}