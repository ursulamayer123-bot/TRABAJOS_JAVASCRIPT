const prompt = require ('prompt-sync')();
const Edades = edad => {
    if (edad < 11) return "Niño";
    if (edad < 21) return "Adolescente";
    if ( edad < 60) return "Adulto"
    return "Adulto Mayor"

}
let UsuarioEdad = parseInt (prompt("Ingrese su edad: "));
console.log("Usted es un " + Edades(UsuarioEdad));