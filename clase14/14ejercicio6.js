let deportista = {
    nombre:"Paretto",
    energia: 1000,
    experiencia: 100,
    entrenarHoras: function(horas){
        this.energia -= horas * 5
        this.experiencia += horas * 2
    }

}
deportista.entrenarHoras(4);
console.log("Energía final: " + deportista.energia); 
console.log("Experiencia final: " + deportista.experiencia);