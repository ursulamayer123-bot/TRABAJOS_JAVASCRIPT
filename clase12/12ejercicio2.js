const prompt = require ('prompt-sync')();
const CONTRASEÑACORRECTA= "1234"
let contraseñaUsuario;
do {
    contraseñaUsuario= prompt ("Ingresa la contraseña: ");
    if(contraseñaUsuario !== CONTRASEÑACORRECTA){
        console.log("Contraseña Incorrecta");
    }
}while (contraseñaUsuario !== CONTRASEÑACORRECTA);


console.log("Contraseña correcta");
