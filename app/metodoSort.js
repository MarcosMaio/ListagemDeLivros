let = btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco') //peguei o botão referente por ordenar preço.
btnOrdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco) //adicionei um escutador de evento nesse botão para quando eu clicar algo acontecer. chamo a função ordenarLivrosPorPreco.

function ordenarLivrosPorPreco() { //criei uma função que irá ordenar os livros por preço
    let livrosOrdenados = livros.sort((a,b) => a.preco - b.preco) //usarei o metodo sort que ordena os itens de um array precisamos armazena-lo dentro de uma variavel, porém ele ordena com base nas diretrizes unicode e precisamos mudar isso,
//definimos como parametro a e b que e irá agora colocar em ordem do menor para o maior , mas queremos que coloque apenas o preco então definimos a.preco - b.preco.
    exibirOsLivrosNaTela(livrosOrdenados) //e exibimos na tela chamando a função responsavel.   
}