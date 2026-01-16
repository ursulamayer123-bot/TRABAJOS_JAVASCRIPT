const prompt = require ('prompt-sync')();
function convertirHorasAMinutos (hora){
    return hora * 60;
}
let numeroHora = parseInt (prompt("Ingrese cantidad de horas: "));
console.log("La hora ingresa en minutos es " + convertirHorasAMinutos(numeroHora));
