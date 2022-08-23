let spnSegundos = document.querySelector("#segundos");
let spnMinutos = document.querySelector("#minutos");
let spnMilisegundos = document.querySelector("#milisegundos");

let milisegundos = 0;
let segundos = 0;
let minutos = 0;

function cronometro() {

    if (milisegundos <= 9) {
        spnMilisegundos.innerText = "0" + milisegundos;
    } else {
        spnMilisegundos.innerText = milisegundos;
    }

    if (milisegundos > 99) {
        spnMilisegundos.innerText = "00";
        milisegundos = 0;
        segundos++;
    }

    if (segundos <= 9) {
        spnSegundos.innerText = "0" + segundos;
    } else {
        spnSegundos.innerText = segundos;
    }

    if (segundos > 59) {
        spnSegundos.innerText = "00";
        segundos = 0;
        minutos++;
    }

    if (minutos <= 9) {
        spnMinutos.innerText = "0" + minutos;
    } else {
        spnMinutos.innerText = minutos;
    }

    milisegundos++;

}

let tempo = setInterval(cronometro, 10);