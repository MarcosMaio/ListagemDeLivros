const elementoParaInserirLivros = document.getElementById('livros') //peguei o id da section e dentror vou por os livros.
const elementoComValorTotalDeLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis') //peguei o id da section que exibe na tela Todos os livros disponíveis por R$

function exibirOsLivrosNaTela(listaDeLivros) {  //A função exibirOsLivrosNaTela recebe como parametro uma lista de livros.
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = '' //A principio assim que exibir os livros quero que retire o Todos os livros disponíveis por R$ xxx da tela , pois quero exibir apenas em x condição passada a frente.
    elementoParaInserirLivros.innerHTML = '' //Quando eu executar o filtragem dos itens eu quero que quando eu clicar no botão exiba apenas os itens da categoria que eu cliquei e limpe os outros livros da tela que não forem dessa mesma categoria.
    listaDeLivros.forEach(livro => { //eu quero que pra cada livro dentro da lista de livros faça algo.
        
// Metodo tradicional: let disponibilidade = verificarDisponibilidadeDoLivro(livro) //chamo a função responsavel por verificar se algum livro possui indisponibilidade ou seja se teremos ou não x livro em estoque.
        
        let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livros__imagens indisponivel'
//O metodo acima e ultilizando operador ternário, Se o livro.quantidade for maior do que 0, eu quero fazer alguma coisa. Então eu vou fazer uma pergunta: livro.quantidade > 0 ? se sim adicona a class 'livro__imagens' agora se não for adiciono o : para aplicar essa condição, Se não for retorna livro__imagens indisponivel.
        
        elementoParaInserirLivros.innerHTML += //eu quero que pegue elementoParaInserirLivros que e aquela section com o id livros e dentro dela crie todo o código abaixo e que susbtitua os valores pelos os valores buscados na API.
        `<div class="livro">
        <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" /> 
        <h2 class="livro__titulo">
            ${livro.titulo}
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
        <div class="tags">
        <span class="tag">${livro.categoria}</span>
        </div>
    </div>` //Agora que eu já tenho a variável disponibilidade, eu vou falar assim: a classe imagem do livro vai ser baseada nesse valor que trouxemos dessa variável de disponibilidade. referente a <img class="${disponibilidade}".
        
    })
}

//Metodo tradicional:

//function verificarDisponibilidadeDoLivro(livro) { //Função responsavel por verificar se possuo a quantidade de livros de x autor em estoque e defino se x livro está disponivel a venda ou não com base na quantidade do estoque.
    //if (livro.quantidade > 0) { //Faço a verificação de que se algum livro possue a quantidade maior do que zero ta tudo okay mostra a class livro__imagens.
       // return 'livro__imagens' 
   // } else { //Se não adiciona a classe indisponivel.
        //return 'livros__imagens indisponivel'
   // }
//}