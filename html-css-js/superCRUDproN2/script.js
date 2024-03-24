
let cadastros = []
let apontador = -1

document.querySelector("#divTrabalho").addEventListener('click', selecionar)

function selecionar(e){
    console.log(e);
    if(e.altKey) alert('Alt tava apertado')
    alert(apontador)
}

function cadastrar() {
    let registro = {
        nome: document.getElementById('inpNome').value,
        categoria: document.getElementById('inpCategoria').value,
        valor: document.getElementById('inpValor').value
    }

    cadastros.push(registro)
    localStorage.setItem('crud', JSON.stringify(cadastros))
    limparInputs()
}

function localizar(){
    let nome = document.querySelector("#inpNome").value
    for(i=0; i<cadastros.length; i++){
        if(cadastros[i].nome == nome){
            // return cadastros[i]
            apontador = i
            document.querySelector("#divTrabalho").style.display = 'block'
            document.querySelector("#divTrabalho").innerHTML = `Registro: ${i}<BR>
            Nome: ${cadastros[i].nome}<br>
            Categoria: ${cadastros[i].categoria}<br/>
            Valor: ${cadastros[i].valor}`
        }
    }
}

function limparInputs(){
    document.getElementById('inpNome').value = ''
    document.getElementById('inpCategoria').value = ''
    document.getElementById('inpValor').value = ''
    document.getElementById('inpNome').focus()
}


function apagar() {
    // document.querySelector("#divTrabalho").style.display = "none"

}

document.getElementById('inpNome').focus()