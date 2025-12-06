const prompt = require('prompt-sync')();


let precioOriginal = parseFloat(prompt("Ingrese el precio original del producto: "));
let porcentajeDescuento = parseFloat(prompt("Ingrese el porcentaje de descuento: "));

// Calcular descuento
let montoDescuento = precioOriginal * (porcentajeDescuento / 100);
let precioFinal = precioOriginal - montoDescuento;

// Mostrar resultados
console.log("El monto del descuento es: $" + montoDescuento);
console.log("El precio final del producto es: $" + precioFinal);