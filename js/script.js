function calcular() {
    let nome = document.getElementById("nome").value;
    let placa = document.getElementById("placa").value;
    let carro = document.getElementById("carro").value;
    let dias = parseInt(document.getElementById("dias").value);
    let diaria = parseFloat(document.getElementById("diaria").value);

    if (nome && placa && carro && dias && diaria) {
        let valorSemDesconto = dias * diaria;
        let desconto = valorSemDesconto * 0.10;
        let valorTotal = valorSemDesconto - desconto;

        // Atualizando os elementos no Resumo
        document.getElementById("res_nome").textContent = nome;
        document.getElementById("res_placa").textContent = placa;
        document.getElementById("res_carro").textContent = carro;
        document.getElementById("res_dias").textContent = dias;
        document.getElementById("valorSemDesconto").textContent = valorSemDesconto.toFixed(2);
        document.getElementById("valorTotal").textContent = valorTotal.toFixed(2);
    } else {
        alert("Por favor, preencha todos os campos!");
    }
}

function limpar() {
    document.getElementById("nome").value = "";
    document.getElementById("placa").value = "";
    document.getElementById("carro").value = "";
    document.getElementById("dias").value = "";
    document.getElementById("diaria").value = "";
    
    // Limpa o resumo
    document.getElementById("res_nome").textContent = "";
    document.getElementById("res_placa").textContent = "";
    document.getElementById("res_carro").textContent = "";
    document.getElementById("res_dias").textContent = "";
    document.getElementById("valorSemDesconto").textContent = "";
    document.getElementById("valorTotal").textContent = "";
}

function sair() {
    window.close(); // Fecha a janela do navegador (pode ser bloqueado por alguns navegadores)
}