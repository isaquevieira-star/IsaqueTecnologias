
const botoes = document.querySelectorAll("button");

botoes.forEach(function(botao) {
    botao.addEventListener("click", function() {

        const botaozin = botao.getAttribute("data-input");
        const campin = document.getElementById(botaozin);

        campin.disabled = false;
        campin.focus();

    });
});
