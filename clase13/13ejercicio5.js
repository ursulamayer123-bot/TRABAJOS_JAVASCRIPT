 const prompt = require ('prompt-sync')();
 const concatenarNombres = function (nombre, apellido){
    return nombre + " " + apellido
 }
 let nom = prompt("Ingresa un nombre: ");
 let ape = prompt ("Ingresa un apellido: ");
 let NombreCompleto = concatenarNombres(nom, ape);

 console.log("El nombre completo es " + NombreCompleto);