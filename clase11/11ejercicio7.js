const prompt = require ('prompt-sync')();
let n1= parseFloat (prompt ("Indicar un numero: "));
let n2 = parseFloat (prompt ("Indicar un segundo numero: "));
let operacion = prompt ("Indicar (suma, resta, division o multiplicacion): ").toLowerCase();
let resultado;
switch (operacion){
    case "suma":
        resultado = n1 + n2;
        console.log("El resultado de la suma es " + resultado);
    break
    case "resta":
        resultado = n1 - n2;
        console.log("El resultado de la resta es: " + resultado);
    break
    case "multiplicacion":
        resultado = n1 * n2;
        console.log("El resultado de la multiplicacion es " + resultado);
    break
    case "division":
        if (n2 !== 0){
            resultado = n1 / n2;
            console.log ("El resultado de la division es: " + resultado);
        }else {
            console.log ("Error: NO se puede dividir por 0.")
        
        }
    break

     default:
          console.log("Operacion no válida.")

}
    


