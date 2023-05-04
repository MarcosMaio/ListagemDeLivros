let livros = [] //Defini um array vazio aonde vou mais pra frente armazenar os dados da API
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json' // livros da API
getBuscarLivrosDaAPI() 


async function getBuscarLivrosDaAPI() {  //função assincrona
    const res = await fetch(endpointDaAPI) //para fazer com que a função espere uma requição , se usa o await pra fazer com que a função espere por uma promessa.
 //Nós sempre utilizamos para conseguirmos manipular as funções e essas requisições com HTTP esses APIs do fetch.   
    livros = await res.json() //Depois pego a resposta dessa requisição e atribuo a livros. e a resposta dessa requisiçãp eu quero receber em json.
    livros = aplicarDesconto(livros) //livros com desconto vai receber a minha função em map aplicarDesconto. A gente pega os livros com res.json depois a gente aplica o desconto nesses livros , ele vai retorna um objeto pega esse objeto e retorna dentro da variavel livrosComDesconto e exibe na tela. 
    exibirOsLivrosNaTela(livrosComDesconto) // O exibirOsLivrosNaTela já irá fazer isso aplicando o desconto com a outra função de parametro.
}

