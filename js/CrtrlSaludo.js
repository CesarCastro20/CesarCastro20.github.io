"use strict";
var   forma = document.getElementById("forma"),
    salida = document.getElementById("salida");
forma.addEventListener("input", muestra, false);
function muestra(){
    var     nombre =forma["nombre"].value.trim(),
            boleta =forma["boleta"].value.trim(),
            grupo =forma["grupo"].value.trim(),
            materia= forma["materia"].value.trim();
    salida.textContent="Eres: "+nombre+" Boleta: "+ boleta+ " Grupo: "+grupo
        +" Materia: "+materia;

}
