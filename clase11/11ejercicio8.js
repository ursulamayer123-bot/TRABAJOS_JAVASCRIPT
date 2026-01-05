const prompt = require ('prompt-sync')();
let numero = parseInt (prompt("Ingrese un numero entre el 1 al 100: "));
 console.log("Los múltiplos de " + numero + " son: ");
for (let i = 1; i <=100; i++){
if (i % numero === 0){
console.log(i);
}
}