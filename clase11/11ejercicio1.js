const prompt = require ('prompt-sync')();
 let numero = parseFloat (prompt("Ingrese un número: "));
 let resultado = (numero > 0) ? "El numero es positivo" : (numero < 0) ? "El numero es negativo" : "El numero da cero";
 console.log(resultado);