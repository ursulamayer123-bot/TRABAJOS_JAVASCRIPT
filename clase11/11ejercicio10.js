const prompt = require ('prompt-sync')();
const numeroSecreto = Math.floor(Math.random() * 10) + 1;
console.log("Pienso en un numero del 1 al 10. Tenes 3 intentos para adivinar.");
let ganaste = false; 

for (let i = 1; i <= 3; i++) {
    let intento = parseInt(prompt("Intento " + i + ": ¿Que número es?: "));
    if (intento === numeroSecreto) {
        console.log("¡FELICITACIONES! Adivinaste el número.");   
       ganaste = true; 
       
        break; 

    } else {
        
        console.log("Incorrecto");
    }
}

if (ganaste === false) { 
    console.log("El número secreto era: " + numeroSecreto);
}