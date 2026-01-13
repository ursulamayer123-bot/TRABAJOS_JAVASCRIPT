const prompt = require ('prompt-sync')();
let numeroX = parseInt (prompt("Ingresa un numero: "));
let contadorImp = 0
for (let i = 0; i<= numeroX; i++){
if (i % 2 !== 0){
contadorImp ++;
}
}
console.log("La cantidad de impares desde el 0 al "+ numeroX + " son: " + contadorImp);
