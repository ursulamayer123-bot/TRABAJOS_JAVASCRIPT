const prompt = require ('prompt-sync')();
let minombre = ("Ursula");
let usernombre = prompt ("Ingrese su nombre: ");
if( minombre === usernombre){
    console.log("Es el mismo nombre");
} else{
    console.log( "No tenemos el mismo nombre");
}