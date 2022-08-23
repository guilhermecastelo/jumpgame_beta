let personagem = document.querySelector("#personagem");

function pular() {
    if (personagem.classList != 'pular') {
        personagem.classList.add('pular');
    }

    setTimeout(function () {
        personagem.classList.remove('pular');
    }, 350)

}