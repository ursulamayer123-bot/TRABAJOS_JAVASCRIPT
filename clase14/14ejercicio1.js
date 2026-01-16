const prompt = require ('prompt-sync')();
const precioConIVA = (precio, porcentaje) => precio + (precio + porcentaje /100);
let Productoprecio = parseFloat (prompt("Ingresa el precio del producto: "));
let porcentajeIVA = parseFloat (prompt("Ingresa el procentaje de IVA: "));
console.log("El precio es: " + precioconIVA (Productoprecio, porcentajeIVA));