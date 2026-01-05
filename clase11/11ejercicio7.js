const prompt = require ('prompt-sync')();
let n1= parseFloat (prompt ("Indicar un numero: "));
let n2 = parseFloat (prompt ("Indicar un segundo numero: "));
let operacion = prompt ("Indicar (suma, resta, division o multiplicacion): ").toLowercase();
let resultado;
switch (operacion){
    case "suma":
        resultado = n1 + n2;
        console.log("El resultado de la suma es " + resultado);
    break
    case "resta":
        resultado = n1 - n2;
        console
}
    


