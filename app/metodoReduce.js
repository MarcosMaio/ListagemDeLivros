function calcularValorTotalDeLivrosDisponiveis (livros) { //Criei uma função responsavel por somar todos os valores dos livros disponiveis e exibir na tela.
    return livros.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2) //Primeiro eu chamo o metodo reduce para livros passo dois parametros um acumulador e o outro e o livro faço uma arrow function, 
//Então queremos fazer alguma coisa. Eu quero que o acumulador some com o valor do livro, só que não o valor do objeto e sim o valor que eu tenho em preço. apos isso eu digo para ele começar a reduzir a partir do indice 0 do array.
}
