
//codigo de login para guardar email e senha do usuario que logar
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



//codigo para a tabela do numero de vendas para alterar os dados
let meses = ["fevereiro", "marco", "abril", "maio", "junho", "julho"];


window.onload = function() {

    meses.forEach(function(mes) {

        let valorSalvo = localStorage.getItem(mes);

        if (valorSalvo !== null) {
            document.getElementById(mes).value = valorSalvo;
        }

    });

};


function salvarVendas() {

   
    for (let mes of meses) {

        let campo = document.getElementById(mes);

        if (campo.value === "" || campo.value < 0) {
            alert("Digite uma quantidade válida para todos os meses!");
            return;
        }

    }

  
    meses.forEach(function(mes) {

        let valor = document.getElementById(mes).value;

        localStorage.setItem(mes, valor);

    });

    alert("Vendas atualizadas e salvas com sucesso!");

}




// codigo para a tabela de estoque de produtos para alterar os dados
let produtos = ["relogio", "celular", "notebook", "tablet"];

// Carregar o estoque salvo
produtos.forEach(function(produto) {

    let quantidadeSalva = localStorage.getItem(produto);

    if (quantidadeSalva !== null) {
        document.getElementById(produto).value = quantidadeSalva;
    }

});

// Salvar as alterações do estoque
function salvarEstoque() {

    // Verificar as quantidades
    for (let produto of produtos) {

        let campo = document.getElementById(produto);
        let quantidade = Number(campo.value);

        if (campo.value === "" || !Number.isInteger(quantidade) || quantidade < 0) {
            alert("Digite uma quantidade inteira válida para todos os produtos!");
            return;
        }

    }

    // Guardar as quantidades
    produtos.forEach(function(produto) {

        let quantidade = document.getElementById(produto).value;

        localStorage.setItem(produto, quantidade);

    });

    alert("Estoque atualizado com sucesso!");

}


