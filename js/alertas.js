let jogo = document.querySelector("#jogo");
let obstaculo = document.querySelector("#obstaculo");
let aviso = document.querySelector("#aviso");
let avenida = document.querySelector("#avenida");
let spnCronometro = document.querySelector("#cronometro");

//  TESTA SE HOUVE UMA COLISÃO, SE SIM, EXIBE O ALERTA DE FIM DE JOGO
var testarColisao = setInterval(function () {
    var topoPersonagem = parseInt(
        window.getComputedStyle(personagem).getPropertyValue('top')
    )
    var Esquerdaobstaculo = parseInt(
        window.getComputedStyle(obstaculo).getPropertyValue('left')
    )

    if (Esquerdaobstaculo < 60 && Esquerdaobstaculo > 0 && topoPersonagem >= 135) {
        clearInterval(tempo);
        console.log(spnCronometro.innerText);
        console.log(spnPontuacao.innerText);
        obstaculo.style.animation = 'none';
        obstaculo.style.left = '60px';
        avenida.style.backgroundImage = "url('img/avenida_parada.png')";
        document.body.onkeydown = '';
        document.body.onmousedown = '';
        aviso.style.display = 'block';
        aviso.innerHTML = "Você bateu &#128543;<br><a href='index.html'>Reiniciar</a>";
    }

}, 10);

//  VERIFICA SE É A 1ª VEZ QUE O USUÁRIO ACESSA A PÁG, SE SIM, EXIBE UM ALERTA DE BOAS-VINDAS
if (sessionStorage.getItem("bemvindo") == null) {

    sessionStorage.setItem("bemvindo", 1);

    clearInterval(tempo);
    console.log(spnCronometro.innerText);
    console.log(spnPontuacao.innerText);
    obstaculo.style.animation = 'none';
    obstaculo.style.left = '60px';
    avenida.style.backgroundImage = "url('img/avenida_parada.png')";
    document.body.onkeydown = '';
    document.body.onmousedown = '';
    aviso.style.display = 'block';
    aviso.innerHTML = "Seja bem-vindo(a) &#128516;<br><a href='index.html'>Começar</a>";
}

//  TESTA SE O USUÁRIO ESTÁ UTILIZANDO UM MOBILE, SE SIM, EXIBE UM ALERTA PARA REALIZAR A ATIVAÇÃO DA ROTAÇÃO DE TELA
if (window.innerWidth < 500) {
    alert('Parece que você está usando um celular. 🧐\nAtive a rotação de tela e jogue com o dispositivo na horizontal para ter uma melhor experiência do game. 😉');
}