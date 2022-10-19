/** Ejemplo setInterval */

function monstrarHora(){
    let reloj = document.getElementById("reloj");
    let hora = new Date();
    reloj.innerHTML = hora.toLocaleTimeString();
}

let cronometro = setInterval(monstrarHora,1000);

