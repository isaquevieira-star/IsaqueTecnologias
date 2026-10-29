
function salvarDados() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;

    localStorage.setItem("nomeUsuario", nome);
    localStorage.setItem("emailUsuario", email);

    window.location.href = "dadosUsuario.html";
}

let nome = document.getElementById("nomeUsuario");
let email = document.getElementById("emailUsuario");

if (nome && email) {
    nome.textContent = localStorage.getItem("nomeUsuario") || "";
    email.textContent = localStorage.getItem("emailUsuario") || "";
}
