

function comprar() {

    let totalPista = document.getElementById('qtd-pista').textContent;
let totalCadeiraSuperior = document.getElementById('qtd-superior').textContent;
let totalCadeiraInferior = document.getElementById('qtd-inferior').textContent;

let tipoIngresso = document.getElementById('tipo-ingresso').value;

let quantidade = document.getElementById('qtd').value;


if (tipoIngresso == 'inferior') {
    if (quantidade > totalCadeiraInferior) {
        alert('Quantidade de ingressos indisponível para cadeira inferior')
    } else {
        totalCadeiraInferior = totalCadeiraInferior - quantidade;
        document.getElementById('qtd-inferior').textContent = totalCadeiraInferior;
    }
} else if (tipoIngresso == 'superior') {
    if (quantidade > totalCadeiraSuperior) {
        alert('Quantidade de ingressos indisponível para cadeira superior')
    } else {
        totalCadeiraSuperior = totalCadeiraSuperior - quantidade;
        document.getElementById('qtd-superior').textContent = totalCadeiraSuperior;
    }
} else if (tipoIngresso == 'pista') {
    if (quantidade > totalPista) {
        alert('Quantidade de ingressos indisponível para pista')
    } else {
        totalPista = totalPista - quantidade;
        document.getElementById('qtd-pista').textContent = totalPista;
    }
}


document.getElementById('qtd').value = '';

}

