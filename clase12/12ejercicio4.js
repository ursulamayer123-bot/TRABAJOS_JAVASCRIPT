const prompt = require ('prompt-sync')();
let notas = [];
let cantidadEstudiantes = 5;
for (let i = 0 ; i < cantidadEstudiantes ; i++) {
    notas[i] = parseFloat (prompt("Ingresar nota del estudiante "+ (i+1)+": "));

}
console.log("Notas de los estudiantes");
console.log(notas)