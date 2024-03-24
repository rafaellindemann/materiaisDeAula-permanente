let pagina = document.getElementById('mainConteudo')

function mostrarHome() {
    pagina.innerHTML=''

    let secao = document.createElement('section')

    let texto = document.createTextNode('Uma SPA semanticamente mais bonita')
    let titulo = document.createElement('h1')
    titulo.appendChild(texto)
    secao.appendChild(titulo)

    texto = document.createTextNode('O que é uma SPA?')
    let subTitulo = document.createElement('h2')
    subTitulo.appendChild(texto)
    secao.appendChild(subTitulo)

    texto = document.createTextNode('SPA Significa Single Page Application e nada mais é do que uma aplicação web que roda em uma página html apenas, se assemelhando ao funcionamento dos aplicativos desktop.')
    let paragrafo = document.createElement('p')
    paragrafo.appendChild(texto)
    secao.appendChild(paragrafo)

    texto = document.createTextNode('Como isso acontece neste exemplo?')
    subTitulo = document.createElement('h2')
    subTitulo.appendChild(texto)
    secao.appendChild(subTitulo)


    paragrafo = document.createElement('p')
    paragrafo.appendChild(document.createTextNode('Neste exemplo temos 3 "páginas": Home, Produtos e Serviços.'))
    secao.appendChild(paragrafo)

    paragrafo = document.createElement('p')
    paragrafo.appendChild(document.createTextNode('Cada produto está mapeado como um objeto e armazenado no vetor produtos.'))
    secao.appendChild(paragrafo)

    paragrafo = document.createElement('p')
    paragrafo.appendChild(document.createTextNode('Cada serviço está mapeado como um objeto e armazenado no vetor serviços.'))
    secao.appendChild(paragrafo)

    paragrafo = document.createElement('p')
    paragrafo.appendChild(document.createTextNode('Quando o botão de Produtos/Serviços é clicado, é chamada a função desenharCards() que recebe o vetor correspondente.'))
    secao.appendChild(paragrafo)
    paragrafo = document.createElement('p')
    paragrafo.appendChild(document.createTextNode('A função percorre o vetor criando um card para cada objeto do vetor.'))
    secao.appendChild(paragrafo)
    paragrafo = document.createElement('p')
    paragrafo.appendChild(document.createTextNode('Cada card é criado elegante e semanticamente do jeito certo manipulando o DOM (createElement, appendChild...);'))
    secao.appendChild(paragrafo)
    paragrafo = document.createElement('p')
    paragrafo.appendChild(document.createTextNode('O visual besta desta página foi criado para evidenciar de forma simples o comportamento das divs que fazem cossplay de página. Eu sei que tá feio mas é por um motivo nobre: pra manter o foco no que realmente interessa aqui.'))
    secao.appendChild(paragrafo)
   

    pagina.appendChild(secao)

}

function mostrarProdutos() {

    desenharCards(produtos)
}

function mostrarServicos() {

    desenharCards(servicos)
}

function desenharCards(vetor) {
    pagina.innerHTML = ''
    for (i = 0; i < vetor.length; i++) {
        // cria a imagem
        let imagem = document.createElement('img')
        // configura os atributos da imagem
        imagem.setAttribute('src', vetor[i].imagem)

        // cria um textNode para receber o texto do h2/nome
        let texto = document.createTextNode(vetor[i].nome)
        // cria o h2 para o nome
        let nome = document.createElement('h2')
        // coloca o texto dentro do h2
        nome.appendChild(texto)

        // os próximos 2 p seguem o mesmo processo anterior: cria o texto e o elemento, depois coloca o texto no elemento
        texto = document.createTextNode(vetor[i].descricao)
        let descricao = document.createElement('p')
        descricao.appendChild(texto)

        texto = document.createTextNode(`Preço: R$${(vetor[i].preco)}`)
        let preco = document.createElement('p')
        preco.appendChild(texto)

        // cria o cartão de produto/serviço
        let card = document.createElement("div")
        card.setAttribute('class', 'card')

        // Acrescenta as partes criadas ao card
        card.appendChild(imagem)
        card.appendChild(nome)
        card.appendChild(descricao)
        card.appendChild(preco)

        // acrescenta o card pronto à página
        pagina.appendChild(card)
    }
}


let produtos = [
    {
        imagem: "../img/produtos/bolo-aniversário_200_transparent.gif",
        nome: 'Bolo de aniversário',
        descricao: 'Um delicioso bolo de aniversário com surpresa dentro.',
        preco: '250'
    },
    {
        imagem: "../img/produtos/milk-shake_200_transparent.gif",
        nome: 'Milk Shake Diferente',
        descricao: 'Um delicioso Milk Shake diferente dos convencionais.',
        preco: '25'
    },
    {
        imagem: "../img/produtos/pilha-alcalina_200_transparent.gif",
        nome: 'Pilha Alcalina',
        descricao: 'Uma delicisa pilha alcalina para te dar energia.',
        preco: '9.9'
    },
    {
        imagem: "../img/produtos/relogio_200_transparent.gif",
        nome: 'Despertador',
        descricao: 'Um delicioso despertador barulhento.',
        preco: '50'
    }

]

let servicos = [
    {
        imagem: "../img/servicos/aula-de-basquete_200_transparent.gif",
        nome: 'Aula de basquete',
        descricao: 'Aprenda a jogar basquete.',
        preco: '50'
    },
    {
        imagem: "../img/servicos/carona-de-aviao_200_transparent.gif",
        nome: 'Passeio de avião',
        descricao: 'Chegue lá rapidão',
        preco: '2500'
    },
    {
        imagem: "../img/servicos/detetive_200_transparent.gif",
        nome: 'Detetive particular',
        descricao: 'Tem desconfianças? Seus problemas acabaram...',
        preco: '300'
    },
    {
        imagem: "../img/servicos/jantar-romantico_200_transparent.gif",
        nome: 'Jantar romântico',
        descricao: 'Um delicioso jantar completo em um lugar lindo.',
        preco: '500'
    },
    {
        imagem: "../img/servicos/passear-gatinho_200_transparent.gif",
        nome: 'Passear gatinho',
        descricao: 'Tá sem tempo de cuidar dele? Chama a gente!',
        preco: '99.9'
    },
    {
        imagem: "../img/servicos/personal_200_transparent.gif",
        nome: 'Personal trainer',
        descricao: 'Precisando de alguém pra incentivar?',
        preco: '50'
    }
]
