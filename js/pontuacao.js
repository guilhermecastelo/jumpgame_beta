let spnPontuacao = document.querySelector("#pontuacao");

setInterval(pontuacao, 35);

let cont = 0;
let pontos = 0;

function pontuacao() {

    let Esquerdaobstaculo = parseInt(window.getComputedStyle(obstaculo).getPropertyValue('left'))

    if (Esquerdaobstaculo <= 10) {

        cont += 1;

        if (cont == 1) {
            pontos += 1;
            spnPontuacao.innerHTML = "Pontuação: " + pontos;
            //console.log("Pontuacao " + pontos);
        }

    } else {
        cont = 0;
    }
}

