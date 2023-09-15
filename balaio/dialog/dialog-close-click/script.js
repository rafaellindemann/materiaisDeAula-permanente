

function telaCadastrar(){
    document.getElementById('modalTeste').showModal()
}

function cadastrar(){
    // li todos os dados
    // criei o objeto, eu juro
    // botei no vetor, pode confiar
    document.getElementById('modalTeste').close()
}



let selecionada = document.body
function pegouClique(e){
//    console.log(e) // e dá acesso ao objeto completo do evento
    console.log(e.target.id);
    if(e.target.id == 'modalTeste'){
        document.getElementById('modalTeste').close()
    }
}
selecionada.onclick = pegouClique; // capta clique em 'selecionada' e seus elementos internos


