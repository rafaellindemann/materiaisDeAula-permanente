let placa = document.getElementById('inpPlaca') // NEW ***
let ano = document.getElementById('inpAno')
let modelo = document.getElementById('inpModelo')
let marca = document.getElementById('inpMarca')
let cor = document.getElementById('inpCor')

let estacionamento = []

let achado

placa.focus()
lerLocalStorage()

function Cadastrar(){
    let carro = {
        placa: '',  // NEW ***
        ano: '',
        modelo: '',
        marca: '',
        cor: ''
    }

    carro.placa = placa.value   // NEW ***
    carro.ano = ano.value
    carro.modelo = modelo.value
    carro.marca = marca.value
    carro.cor = cor.value

    lerLocalStorage()

    estacionamento.push(carro)
    localStorage.setItem('estacionamentoSalvo', JSON.stringify(estacionamento))

    limparInputs()
}

function Pesquisar(){
    for(i=0; i<estacionamento.length; i++){
        if(placa.value == estacionamento[i].placa){
            // alert('Achei!!!')
            ano.value = estacionamento[i].ano
            modelo.value = estacionamento[i].modelo
            marca.value = estacionamento[i].marca
            cor.value = estacionamento[i].cor
            achado = estacionamento[i]
        }
    }
}
function Editar(){
    for(i=0; i<estacionamento.length; i++){
        if(placa.value == estacionamento[i].placa){
            // alert('Achei!!!')
            estacionamento[i].ano = ano.value 
            estacionamento[i].modelo = modelo.value
            estacionamento[i].marca = marca.value
            estacionamento[i].cor = cor.value
            // achado = estacionamento[i]
        }
    }
    localStorage.setItem('estacionamentoSalvo', JSON.stringify(estacionamento))
    limparInputs()
}


function limparInputs(){
    placa.value = ''        // NEW ***
    ano.value = ''
    modelo.value = ''
    marca.value = ''
    cor.value = ''
    placa.focus()       // NEW ***
}

function lerLocalStorage(){
    estacionamento = JSON.parse(localStorage.getItem('estacionamentoSalvo'))
    if(estacionamento == null){
        estacionamento = []
    }
}