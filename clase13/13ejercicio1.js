const prompt = require ('prompt-sync')();
function areaTriangulo (base, altura){
    let area = (base * altura) / 2;
    return area
}
let baseUsuario = parseFloat(prompt("Ingresa un numero para la base: "));
let alturaUsuario = parseFloat(prompt("Ingresa un numero para la altura: "));
let resultado = areaTriangulo (baseUsuario, alturaUsuario);
console.log("El area del triangulo es: "+ resultado);