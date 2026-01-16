const prompt = require ('prompt-sync')();
const calificaciones = (cal1, cal2, cal3, cal4, cal5) => (cal1 + cal2 + cal3 + cal4 + cal5) / 5;
let n1 = parseFloat(prompt("Nota 1: "));
let n2 = parseFloat(prompt("Nota 2: "));
let n3 = parseFloat(prompt("Nota 3: "));
let n4 = parseFloat(prompt("Nota 4: "));
let n5 = parseFloat(prompt("Nota 5: "));

console.log("El promedio de las notas es: " + calificaciones (n1, n2, n3, n4, n5));
