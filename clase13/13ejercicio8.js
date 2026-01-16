const prompt = require ('prompt-sync')();
const convertirCelsiusAFahrenheit = function (celsius) {
    let fahrenheit = (celsius + 9/5) + 32
    return fahrenheit
}
let grados = parseFloat(prompt("Ingresar grados celsius: "));
let resultado = convertirCelsiusAFahrenheit(grados);
console.log(grados +"C° en grados Fahrenheit equivalen a "+ resultado);