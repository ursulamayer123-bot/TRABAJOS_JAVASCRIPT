const prompt = require ('prompt-sync')();
const calcularPrecio = (cantidad, precio) => {
    let descuento = 20
    let total = precio - ( precio * descuento) / 100
    if (cantidad > 10)
        return total
}
let cantidadUsuario = parseInt (prompt("Ingresa la cantidad de productos: "));
let precioUsuario = parseInt (prompt("Ingresa el precio unitario: "));
console.log("El precio total es: " + calcularPrecio (cantidadUsuario, precioUsuario))