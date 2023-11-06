let totalGeral;
limpar()

function adicionar() {
   let nomeProduto = document.getElementById('produto').value;
   let produto = nomeProduto.split('-') [0];
   let preco = nomeProduto.split('R$') [1];
   let quantidadeProduto = document.getElementById('quantidade').value;
   let valorTotal = preco * quantidadeProduto;
   let carrinho = document.getElementById('lista-produtos');
   carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
   <span class="texto-azul">${quantidadeProduto}x</span> ${produto} <span class="texto-azul">R$${valorTotal}</span>
 </section>`
   totalGeral = totalGeral + valorTotal;
   let campoTotal = document.getElementById('valor-total');
   campoTotal.textContent = `R$ ${totalGeral}`;
   document.getElementById('quantidade').value = '';
}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}