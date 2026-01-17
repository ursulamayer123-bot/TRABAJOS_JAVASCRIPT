const prompt = require ('prompt-sync')();
const verificarmarca = marcas => {
    let marcaNacional = marcas.toLowerCase();
    if (marcaNacional === "for" || marcaNacional === "chevrolet" || marcaNacional === "fiat"){
        return "El auto es nacional"
    }
    return "El auto es importado"
        
}
let marcaUsuario = prompt("Ingresa tu marca de auto: ");
console.log(verificarmarca(marcaUsuario));