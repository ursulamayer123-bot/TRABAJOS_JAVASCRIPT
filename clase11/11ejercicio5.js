const prompt = require ('prompt-sync')();
let inicio = parseInt (prompt ("Ingrese el primer numero: "));
let fin = parseInt(prompt("Ingrese el ultimo numero: "));
if (inicio > fin){
    console.log("ERROR: El primer numero debe ser menor al segundo")
} else {
    console.log ("Los numeros pares entre" + inicio + "y" + fin)
}
for(let i =inicio ; i <= fin ; i++){
    if (i %2 === 0){
        console.log(i);
    }
}