function adicionar() {
   let nomeProduto = document.getElementById('produto').value;
   let produto = nomeProduto.split('-') [0];
   let preco = nomeProduto.split('R$') [1];
   let quantidadeProduto = document.getElementById('quantidade').value;
   let valorTotal = preco * quantidadeProduto;
   
   
}

function limpar() {

}