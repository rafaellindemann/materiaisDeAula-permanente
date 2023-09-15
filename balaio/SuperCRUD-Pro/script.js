let cadastros = []

function cadastrar(){
    let registro = {
        nome: document.getElementById("inpNome").value,
        categoria: document.getElementById("inpCategoria").value,
        valor: document.getElementById("inpValor").value
    }
    cadastros.push(registro)
}