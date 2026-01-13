const prompt = require ('prompt-sync')();
let nombres = [];
console.log("Ingresa 5 nombres");
for (let i = 0; i < 5; i++){
    nombres[i] = prompt("Nombre " + (i+1) +":").toLowerCase();
}
let nombreBuscado = prompt("¿Qué nombre estás buscando?: ").toLowerCase();
for (let i = 0; i < nombres.length; i++){
    if(nombres[i]=== nombreBuscado)
        console.log("Encontrado")
}

