function mostrarHome(){
    document.getElementById('home').style.display = 'flex'
    document.getElementById('produtos').style.display = 'none'
    document.getElementById('servicos').style.display = 'none'
}

function mostrarProdutos(){
    document.getElementById('home').style.display = 'none'
    document.getElementById('produtos').style.display = 'flex'
    document.getElementById('servicos').style.display = 'none'
}

function mostrarServicos(){
    document.getElementById('home').style.display = 'none'
    document.getElementById('produtos').style.display = 'none'
    document.getElementById('servicos').style.display = 'flex'
}