function aplicarDesconto(livros) { //Crio uma função responsavel por aplicar desconto.
    const desconto = 0.3 // defino uma const que irá conter o quanto de desconto será aplicado.
    
    livrosComDesconto = livros.map(livro => {  //pego o livrosComDesconto e chamo o array de livros e aplico um map. que irá mapear os elemento do meu array e os mudando a minha escolhe e assim criando um novo array.
        return {...livro, preco: livro.preco - (livro.preco * desconto)} // o map precisa de um retorno e dentro desse retorno aplico a lógica.
//Quando colocamos as reticências ... e escrevemos livro, ele vai fazer uma cópia de todo o nosso array, ou do nosso objeto existente, para outro objeto. e eu quero que dentro de livros apenas o preco mude.
//Então eu pego preco: e livro.preco menos entre parenteses livro.preco vezes o desconto que 0.3   

})
    return livrosComDesconto // e retorno o desconto já aplicado aqui em baixo.
}