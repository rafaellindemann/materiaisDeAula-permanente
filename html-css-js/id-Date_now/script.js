let pessoas = []

function cadastrar1(){
    let pessoa = {
        id: Date.now(),
        nome: 'Mano Juca',
        idade: 19,
        profissao: 'Eterno aprendiz de aleatoriedades'
    }
    pessoas.push(pessoa)
    alert('Cadastrado com sucesso!, clique no próximo')
}

function cadastrar2(){
    let pessoa = {
        id: Date.now(),
        nome: 'Capitão Ganso',
        idade: 51,
        profissao: 'Capitão de navio de marinha não oficial'
    }
    pessoas.push(pessoa)
    alert('Cadastrado com sucesso!, clique no próximo')
}

function cadastrar3(){
    let pessoa = {
        id: Date.now(),
        nome: 'Gil Bates',
        idade: 64,
        profissao: 'CEO de startup'
    }
    pessoas.push(pessoa)
    alert('Cadastrado com sucesso!, clique no próximo')
}

function verPessoas(){  
    console.log(pessoas);
    alert('Verifique o console')
}



