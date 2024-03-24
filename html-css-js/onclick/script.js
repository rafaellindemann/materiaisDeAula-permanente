
let selecionada = document.getElementById('container')

function pegouClique(e){
    console.log(e) // e dá acesso ao objeto completo do evento
    console.log(e.target) // dá acesso ao elemento alvo do clique
    console.log(e.target.id) // dá o id do elemento alvo do clique
}

selecionada.onclick = pegouClique; // capta clique em 'selecionada' e seus elementos internos