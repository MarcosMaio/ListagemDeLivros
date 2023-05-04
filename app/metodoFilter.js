const botoes = document.querySelectorAll('.btn') //Selecionei todos os botões da tela.
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros)) //Apliquei um evento para cada um desses botões, que para cada botão eu quero adicionar um escutador de eventos que quando clicar vai chamar a função filtrarLivros.



function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id) //pega o id do elemento clicado
    const categoria = elementoBtn.value //vai pegar o valor contido do elemento clicado esse valor que consta no value do botão lá no html ex: front-end 
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria) //Agora eu vou filtrar esses elementos que constan dentro do array de livros , e vou verificar se o livro.categoria e == a elementoBtn.value ou seja ao value daquele elemento e igual a o da categoria, e ele me retorna apenas os elementos com x categoria.
//Essa nossa variável de livrosFiltrados acima vai ser baseada em uma condição. que irá trabalhar na ideia de ao clicar no botão livros disponiveis mostre apenas os livros disponiveis aqueles que possue a categoria disponivel com base no value disponivel do botão. A categoria é disponível? É. Se for disponível, então pega a quantidade maior que zero.
//A categoria não é disponível, é dado, front, não importa, faz o filtro com base nessa categoria.    
    exibirOsLivrosNaTela(livrosFiltrados) //Chama a função responsavel por exibir os livros na tela com livros filtrados como parametro.
    
    if (categoria == 'disponivel') { //Cria uma condição responsavel por verificar se categoria == 'disponivel se sim faça algo.
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados) //Chamo a função que irá exibir na tela a soma de todos os livros disponiveis.
        exibirValorTotalDosLivrosNaTela(valorTotal) // chama a função exibirValorTotalDosLivrosNaTela
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTotalDosLivrosNaTela(valorTotal) {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = 
    `<div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `
}