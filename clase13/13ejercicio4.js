const prompt = require ('prompt-sync')();
function esPar(numero){
    let mensaje; 
    if (numero % 2 === 0 ) {
        mensaje = "Es par"
    } else 
        mensaje = "Es impar"
    return mensaje;
}

let Usuario = parseInt (prompt("Ingresa un numero: "));
console.log("El numero "+ Usuario + " " + esPar(Usuario));