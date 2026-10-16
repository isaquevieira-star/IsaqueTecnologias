
const telefoneLegal = document.getElementById("telefone");

telefoneLegal.addEventListener("input", function() {
    telefoneLegal.value = telefoneLegal.value.replace(/\D/g, "");
});




const formularioLegal = document.getElementById("formulario");

formularioLegal.addEventListener("submit", cadastrar);

function cadastrar(event) {
    event.preventDefault();

    const nomezin = document.getElementById("nome").value;
    const mensagem = document.getElementById("mensagem");

    mensagem.textContent = "Cadastrado com sucesso! Bem-vindo, " + nomezin;
}


